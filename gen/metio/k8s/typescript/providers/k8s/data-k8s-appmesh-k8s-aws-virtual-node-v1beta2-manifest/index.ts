// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#metadata DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestMetadata;
  /**
  * VirtualNodeSpec defines the desired state of VirtualNode refers to https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_VirtualNodeSpec.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#spec DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpec;
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#annotations DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#labels DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestMetadataToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFile {
  /**
  * The certificate chain for the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#certificate_chain DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * The private key for a certificate stored on the file system of the virtual node that the proxy is running on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#private_key DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#private_key}
  */
  readonly privateKey: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFileToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_chain: {
      value: cdktf.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateChain = undefined;
      this._privateKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateChain = value.certificateChain;
      this._privateKey = value.privateKey;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSds {
  /**
  * The certificate trust chain for a certificate issued via SDS cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#secret_name DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSdsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificate {
  /**
  * An object that represents a TLS cert via a local file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#file DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#file}
  */
  readonly file?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFile;
  /**
  * An object that represents a TLS cert via SDS entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#sds DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#sds}
  */
  readonly sds?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSds;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct!.file),
    sds: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct!.sds),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFile",
    },
    sds: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSds",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSds) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Exact is a required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#exact DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#exact}
  */
  readonly exact: string[];
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exact),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exact),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: false, required: true
  private _exact?: string[]; 
  public get exact() {
    return this.getListAttribute('exact');
  }
  public set exact(value: string[]) {
    this._exact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
  /**
  * Match is a required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#match DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#match}
  */
  readonly match: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match.internalValue = value.match;
    }
  }

  // match - computed: false, optional: false, required: true
  private _match = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
  /**
  * One or more ACM Amazon Resource Name (ARN)s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#certificate_authority_ar_ns DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#certificate_authority_ar_ns}
  */
  readonly certificateAuthorityArNs: string[];
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority_ar_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateAuthorityArNs),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_authority_ar_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificateAuthorityArNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthorityArNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityArNs = this._certificateAuthorityArNs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateAuthorityArNs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateAuthorityArNs = value.certificateAuthorityArNs;
    }
  }

  // certificate_authority_ar_ns - computed: false, optional: false, required: true
  private _certificateAuthorityArNs?: string[]; 
  public get certificateAuthorityArNs() {
    return this.getListAttribute('certificate_authority_ar_ns');
  }
  public set certificateAuthorityArNs(value: string[]) {
    this._certificateAuthorityArNs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArNsInput() {
    return this._certificateAuthorityArNs;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFile {
  /**
  * The certificate trust chain for a certificate stored on the file system of the virtual node that the proxy is running on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#certificate_chain DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#certificate_chain}
  */
  readonly certificateChain: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFileToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_chain: {
      value: cdktf.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateChain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateChain = value.certificateChain;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSds {
  /**
  * The certificate trust chain for a certificate obtained via SDS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#secret_name DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrust {
  /**
  * A reference to an object that represents a TLS validation context trust for an AWS Certicate Manager (ACM) certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#acm DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#acm}
  */
  readonly acm?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcm;
  /**
  * An object that represents a TLS validation context trust for a local file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#file DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#file}
  */
  readonly file?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFile;
  /**
  * An object that represents a TLS validation context trust for a SDS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#sds DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#sds}
  */
  readonly sds?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSds;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrust | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct!.acm),
    file: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct!.file),
    sds: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct!.sds),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrust | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acm: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToHclTerraform(struct!.acm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcm",
    },
    file: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFile",
    },
    sds: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSds",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrust | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acm = this._acm?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrust | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acm.internalValue = undefined;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acm.internalValue = value.acm;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // acm - computed: false, optional: true, required: false
  private _acm = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference(this, "acm");
  public get acm() {
    return this._acm;
  }
  public putAcm(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcm) {
    this._acm.internalValue = value;
  }
  public resetAcm() {
    this._acm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmInput() {
    return this._acm.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSds) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidation {
  /**
  * Possible Alternative names to consider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#subject_alternative_names DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;
  /**
  * A reference to an object that represents a TLS validation context trust
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#trust DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#trust}
  */
  readonly trust: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrust;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_alternative_names: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
    trust: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct!.trust),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subject_alternative_names: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct!.subjectAlternativeNames),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames",
    },
    trust: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustToHclTerraform(struct!.trust),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrust",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subjectAlternativeNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames?.internalValue;
    }
    if (this._trust?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trust = this._trust?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subjectAlternativeNames.internalValue = undefined;
      this._trust.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
      this._trust.internalValue = value.trust;
    }
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(this, "subject_alternative_names");
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames;
  }
  public putSubjectAlternativeNames(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames) {
    this._subjectAlternativeNames.internalValue = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames.internalValue;
  }

  // trust - computed: false, optional: false, required: true
  private _trust = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference(this, "trust");
  public get trust() {
    return this._trust;
  }
  public putTrust(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrust) {
    this._trust.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTls {
  /**
  * A reference to an object that represents TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#certificate DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#certificate}
  */
  readonly certificate?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificate;
  /**
  * Whether the policy is enforced. If unspecified, default settings from AWS API will be applied. Refer to AWS Docs for default settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#enforce DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * The range of ports that the policy is enforced for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#ports DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#ports}
  */
  readonly ports?: string[];
  /**
  * A reference to an object that represents a TLS validation context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#validation DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#validation}
  */
  readonly validation: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidation;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct!.certificate),
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
    validation: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct!.validation),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificate",
    },
    enforce: {
      value: cdktf.booleanToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    validation: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate.internalValue = undefined;
      this._enforce = undefined;
      this._ports = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate.internalValue = value.certificate;
      this._enforce = value.enforce;
      this._ports = value.ports;
      this._validation.internalValue = value.validation;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // validation - computed: false, optional: false, required: true
  private _validation = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidation) {
    this._validation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicy {
  /**
  * A reference to an object that represents a Transport Layer Security (TLS) client policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#tls DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#tls}
  */
  readonly tls?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTls;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsToTerraform(struct!.tls),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tls.internalValue = value.tls;
    }
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaults {
  /**
  * A reference to an object that represents a client policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#client_policy DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#client_policy}
  */
  readonly clientPolicy?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicy;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_policy: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyToTerraform(struct!.clientPolicy),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_policy: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyToHclTerraform(struct!.clientPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPolicy = this._clientPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientPolicy.internalValue = value.clientPolicy;
    }
  }

  // client_policy - computed: false, optional: true, required: false
  private _clientPolicy = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicyOutputReference(this, "client_policy");
  public get clientPolicy() {
    return this._clientPolicy;
  }
  public putClientPolicy(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsClientPolicy) {
    this._clientPolicy.internalValue = value;
  }
  public resetClientPolicy() {
    this._clientPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPolicyInput() {
    return this._clientPolicy.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroups {
  /**
  * Name is the name of BackendGroup CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of BackendGroup CR. If unspecified, defaults to the referencing object's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroupsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroupsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroups | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroups | cdktf.IResolvable | undefined) {
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

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroupsOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateFile {
  /**
  * The certificate chain for the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#certificate_chain DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * The private key for a certificate stored on the file system of the virtual node that the proxy is running on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#private_key DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#private_key}
  */
  readonly privateKey: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateFileToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateFileToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_chain: {
      value: cdktf.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateChain = undefined;
      this._privateKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateChain = value.certificateChain;
      this._privateKey = value.privateKey;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateSds {
  /**
  * The certificate trust chain for a certificate issued via SDS cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#secret_name DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateSdsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateSdsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateSds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateSds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificate {
  /**
  * An object that represents a TLS cert via a local file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#file DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#file}
  */
  readonly file?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateFile;
  /**
  * An object that represents a TLS cert via SDS entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#sds DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#sds}
  */
  readonly sds?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateSds;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateFileToTerraform(struct!.file),
    sds: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateSdsToTerraform(struct!.sds),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateFile",
    },
    sds: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateSds",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateSds) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Exact is a required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#exact DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#exact}
  */
  readonly exact: string[];
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exact),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exact),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: false, required: true
  private _exact?: string[]; 
  public get exact() {
    return this.getListAttribute('exact');
  }
  public set exact(value: string[]) {
    this._exact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames {
  /**
  * Match is a required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#match DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#match}
  */
  readonly match: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match.internalValue = value.match;
    }
  }

  // match - computed: false, optional: false, required: true
  private _match = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustAcm {
  /**
  * One or more ACM Amazon Resource Name (ARN)s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#certificate_authority_ar_ns DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#certificate_authority_ar_ns}
  */
  readonly certificateAuthorityArNs: string[];
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustAcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority_ar_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateAuthorityArNs),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustAcmToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustAcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_authority_ar_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificateAuthorityArNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustAcm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthorityArNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityArNs = this._certificateAuthorityArNs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustAcm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateAuthorityArNs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateAuthorityArNs = value.certificateAuthorityArNs;
    }
  }

  // certificate_authority_ar_ns - computed: false, optional: false, required: true
  private _certificateAuthorityArNs?: string[]; 
  public get certificateAuthorityArNs() {
    return this.getListAttribute('certificate_authority_ar_ns');
  }
  public set certificateAuthorityArNs(value: string[]) {
    this._certificateAuthorityArNs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArNsInput() {
    return this._certificateAuthorityArNs;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustFile {
  /**
  * The certificate trust chain for a certificate stored on the file system of the virtual node that the proxy is running on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#certificate_chain DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#certificate_chain}
  */
  readonly certificateChain: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustFileToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_chain: {
      value: cdktf.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateChain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateChain = value.certificateChain;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustSds {
  /**
  * The certificate trust chain for a certificate obtained via SDS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#secret_name DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustSdsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustSds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustSds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrust {
  /**
  * A reference to an object that represents a TLS validation context trust for an AWS Certicate Manager (ACM) certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#acm DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#acm}
  */
  readonly acm?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustAcm;
  /**
  * An object that represents a TLS validation context trust for a local file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#file DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#file}
  */
  readonly file?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustFile;
  /**
  * An object that represents a TLS validation context trust for a SDS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#sds DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#sds}
  */
  readonly sds?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustSds;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrust | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct!.acm),
    file: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct!.file),
    sds: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform(struct!.sds),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrust | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acm: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustAcmToHclTerraform(struct!.acm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustAcm",
    },
    file: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustFile",
    },
    sds: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustSds",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrust | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acm = this._acm?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrust | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acm.internalValue = undefined;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acm.internalValue = value.acm;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // acm - computed: false, optional: true, required: false
  private _acm = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference(this, "acm");
  public get acm() {
    return this._acm;
  }
  public putAcm(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustAcm) {
    this._acm.internalValue = value;
  }
  public resetAcm() {
    this._acm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmInput() {
    return this._acm.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustSds) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidation {
  /**
  * Possible Alternative names to consider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#subject_alternative_names DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames;
  /**
  * A reference to an object that represents a TLS validation context trust
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#trust DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#trust}
  */
  readonly trust: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrust;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_alternative_names: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
    trust: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct!.trust),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subject_alternative_names: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct!.subjectAlternativeNames),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames",
    },
    trust: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustToHclTerraform(struct!.trust),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrust",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subjectAlternativeNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames?.internalValue;
    }
    if (this._trust?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trust = this._trust?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subjectAlternativeNames.internalValue = undefined;
      this._trust.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
      this._trust.internalValue = value.trust;
    }
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(this, "subject_alternative_names");
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames;
  }
  public putSubjectAlternativeNames(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames) {
    this._subjectAlternativeNames.internalValue = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames.internalValue;
  }

  // trust - computed: false, optional: false, required: true
  private _trust = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrustOutputReference(this, "trust");
  public get trust() {
    return this._trust;
  }
  public putTrust(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationTrust) {
    this._trust.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTls {
  /**
  * A reference to an object that represents TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#certificate DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#certificate}
  */
  readonly certificate?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificate;
  /**
  * Whether the policy is enforced. If unspecified, default settings from AWS API will be applied. Refer to AWS Docs for default settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#enforce DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * The range of ports that the policy is enforced for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#ports DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#ports}
  */
  readonly ports?: string[];
  /**
  * A reference to an object that represents a TLS validation context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#validation DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#validation}
  */
  readonly validation: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidation;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateToTerraform(struct!.certificate),
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
    validation: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationToTerraform(struct!.validation),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificate",
    },
    enforce: {
      value: cdktf.booleanToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    validation: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate.internalValue = undefined;
      this._enforce = undefined;
      this._ports = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate.internalValue = value.certificate;
      this._enforce = value.enforce;
      this._ports = value.ports;
      this._validation.internalValue = value.validation;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // validation - computed: false, optional: false, required: true
  private _validation = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsValidation) {
    this._validation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicy {
  /**
  * A reference to an object that represents a Transport Layer Security (TLS) client policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#tls DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#tls}
  */
  readonly tls?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTls;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsToTerraform(struct!.tls),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tls.internalValue = value.tls;
    }
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceVirtualServiceRef {
  /**
  * Name is the name of VirtualService CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of VirtualService CR. If unspecified, defaults to the referencing object's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceVirtualServiceRefToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceVirtualServiceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceVirtualServiceRefToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceVirtualServiceRef | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceVirtualServiceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceVirtualServiceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceVirtualServiceRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualService {
  /**
  * A reference to an object that represents the client policy for a backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#client_policy DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#client_policy}
  */
  readonly clientPolicy?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicy;
  /**
  * Amazon Resource Name to AppMesh VirtualService object that is acting as a virtual node backend. Exactly one of 'virtualServiceRef' or 'virtualServiceARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#virtual_service_arn DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#virtual_service_arn}
  */
  readonly virtualServiceArn?: string;
  /**
  * Reference to Kubernetes VirtualService CR in cluster that is acting as a virtual node backend. Exactly one of 'virtualServiceRef' or 'virtualServiceARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#virtual_service_ref DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#virtual_service_ref}
  */
  readonly virtualServiceRef?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceVirtualServiceRef;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_policy: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyToTerraform(struct!.clientPolicy),
    virtual_service_arn: cdktf.stringToTerraform(struct!.virtualServiceArn),
    virtual_service_ref: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceVirtualServiceRefToTerraform(struct!.virtualServiceRef),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_policy: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyToHclTerraform(struct!.clientPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicy",
    },
    virtual_service_arn: {
      value: cdktf.stringToHclTerraform(struct!.virtualServiceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_service_ref: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceVirtualServiceRefToHclTerraform(struct!.virtualServiceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceVirtualServiceRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPolicy = this._clientPolicy?.internalValue;
    }
    if (this._virtualServiceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceArn = this._virtualServiceArn;
    }
    if (this._virtualServiceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceRef = this._virtualServiceRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientPolicy.internalValue = undefined;
      this._virtualServiceArn = undefined;
      this._virtualServiceRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientPolicy.internalValue = value.clientPolicy;
      this._virtualServiceArn = value.virtualServiceArn;
      this._virtualServiceRef.internalValue = value.virtualServiceRef;
    }
  }

  // client_policy - computed: false, optional: true, required: false
  private _clientPolicy = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicyOutputReference(this, "client_policy");
  public get clientPolicy() {
    return this._clientPolicy;
  }
  public putClientPolicy(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceClientPolicy) {
    this._clientPolicy.internalValue = value;
  }
  public resetClientPolicy() {
    this._clientPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPolicyInput() {
    return this._clientPolicy.internalValue;
  }

  // virtual_service_arn - computed: false, optional: true, required: false
  private _virtualServiceArn?: string; 
  public get virtualServiceArn() {
    return this.getStringAttribute('virtual_service_arn');
  }
  public set virtualServiceArn(value: string) {
    this._virtualServiceArn = value;
  }
  public resetVirtualServiceArn() {
    this._virtualServiceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceArnInput() {
    return this._virtualServiceArn;
  }

  // virtual_service_ref - computed: false, optional: true, required: false
  private _virtualServiceRef = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceVirtualServiceRefOutputReference(this, "virtual_service_ref");
  public get virtualServiceRef() {
    return this._virtualServiceRef;
  }
  public putVirtualServiceRef(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceVirtualServiceRef) {
    this._virtualServiceRef.internalValue = value;
  }
  public resetVirtualServiceRef() {
    this._virtualServiceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceRefInput() {
    return this._virtualServiceRef.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackends {
  /**
  * Specifies a virtual service to use as a backend for a virtual node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#virtual_service DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#virtual_service}
  */
  readonly virtualService: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualService;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceToTerraform(struct!.virtualService),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_service: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceToHclTerraform(struct!.virtualService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackends | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualService = this._virtualService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackends | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._virtualService.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._virtualService.internalValue = value.virtualService;
    }
  }

  // virtual_service - computed: false, optional: false, required: true
  private _virtualService = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualServiceOutputReference(this, "virtual_service");
  public get virtualService() {
    return this._virtualService;
  }
  public putVirtualService(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsVirtualService) {
    this._virtualService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService.internalValue;
  }
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackends[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolGrpc {
  /**
  * Represents the maximum number of inflight requests that an envoy can concurrently support across all the hosts in the upstream cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#max_requests DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#max_requests}
  */
  readonly maxRequests: number;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolGrpcToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolGrpcToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequests = this._maxRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxRequests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxRequests = value.maxRequests;
    }
  }

  // max_requests - computed: false, optional: false, required: true
  private _maxRequests?: number; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number) {
    this._maxRequests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp {
  /**
  * Represents the maximum number of outbound TCP connections the envoy can establish concurrently with all the hosts in the upstream cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#max_connections DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#max_connections}
  */
  readonly maxConnections: number;
  /**
  * Represents the number of overflowing requests after max_connections that an envoy will queue to an upstream cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#max_pending_requests DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttpToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttpToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingRequests = this._maxPendingRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConnections = undefined;
      this._maxPendingRequests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConnections = value.maxConnections;
      this._maxPendingRequests = value.maxPendingRequests;
    }
  }

  // max_connections - computed: false, optional: false, required: true
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_pending_requests - computed: false, optional: true, required: false
  private _maxPendingRequests?: number; 
  public get maxPendingRequests() {
    return this.getNumberAttribute('max_pending_requests');
  }
  public set maxPendingRequests(value: number) {
    this._maxPendingRequests = value;
  }
  public resetMaxPendingRequests() {
    this._maxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingRequestsInput() {
    return this._maxPendingRequests;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp2 {
  /**
  * Represents the maximum number of inflight requests that an envoy can concurrently support across all the hosts in the upstream cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#max_requests DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#max_requests}
  */
  readonly maxRequests: number;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp2ToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp2ToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequests = this._maxRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxRequests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxRequests = value.maxRequests;
    }
  }

  // max_requests - computed: false, optional: false, required: true
  private _maxRequests?: number; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number) {
    this._maxRequests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolTcp {
  /**
  * Represents the maximum number of outbound TCP connections the envoy can establish concurrently with all the hosts in the upstream cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#max_connections DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#max_connections}
  */
  readonly maxConnections: number;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolTcpToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolTcpToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConnections = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConnections = value.maxConnections;
    }
  }

  // max_connections - computed: false, optional: false, required: true
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPool {
  /**
  * Specifies grpc connection pool settings for the virtual node listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#grpc DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#grpc}
  */
  readonly grpc?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolGrpc;
  /**
  * Specifies http connection pool settings for the virtual node listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#http DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#http}
  */
  readonly http?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp;
  /**
  * Specifies http2 connection pool settings for the virtual node listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#http2 DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#http2}
  */
  readonly http2?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp2;
  /**
  * Specifies tcp connection pool settings for the virtual node listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#tcp DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#tcp}
  */
  readonly tcp?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolTcp;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolGrpcToTerraform(struct!.grpc),
    http: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttpToTerraform(struct!.http),
    http2: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp2ToTerraform(struct!.http2),
    tcp: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolTcpToTerraform(struct!.tcp),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolGrpc",
    },
    http: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp",
    },
    http2: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp2ToHclTerraform(struct!.http2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp2",
    },
    tcp: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolTcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._http2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpc.internalValue = undefined;
      this._http.internalValue = undefined;
      this._http2.internalValue = undefined;
      this._tcp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grpc.internalValue = value.grpc;
      this._http.internalValue = value.http;
      this._http2.internalValue = value.http2;
      this._tcp.internalValue = value.tcp;
    }
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolGrpc) {
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
  private _http = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // http2 - computed: false, optional: true, required: false
  private _http2 = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp2OutputReference(this, "http2");
  public get http2() {
    return this._http2;
  }
  public putHttp2(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolHttp2) {
    this._http2.internalValue = value;
  }
  public resetHttp2() {
    this._http2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersHealthCheck {
  /**
  * The number of consecutive successful health checks that must occur before declaring listener healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#healthy_threshold DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#healthy_threshold}
  */
  readonly healthyThreshold: number;
  /**
  * The time period in milliseconds between each health check execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#interval_millis DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#interval_millis}
  */
  readonly intervalMillis: number;
  /**
  * The destination path for the health check request. This value is only used if the specified protocol is http or http2. For any other protocol, this value is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#path DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#path}
  */
  readonly path?: string;
  /**
  * The destination port for the health check request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#port DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * The protocol for the health check request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#protocol DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#protocol}
  */
  readonly protocol: string;
  /**
  * The amount of time to wait when receiving a response from the health check, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#timeout_millis DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#timeout_millis}
  */
  readonly timeoutMillis: number;
  /**
  * The number of consecutive failed health checks that must occur before declaring a virtual node unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#unhealthy_threshold DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#unhealthy_threshold}
  */
  readonly unhealthyThreshold: number;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersHealthCheckToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval_millis: cdktf.numberToTerraform(struct!.intervalMillis),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout_millis: cdktf.numberToTerraform(struct!.timeoutMillis),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersHealthCheckToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_millis: {
      value: cdktf.numberToHclTerraform(struct!.intervalMillis),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_millis: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._intervalMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalMillis = this._intervalMillis;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeoutMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMillis = this._timeoutMillis;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthyThreshold = undefined;
      this._intervalMillis = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._timeoutMillis = undefined;
      this._unhealthyThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthyThreshold = value.healthyThreshold;
      this._intervalMillis = value.intervalMillis;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._timeoutMillis = value.timeoutMillis;
      this._unhealthyThreshold = value.unhealthyThreshold;
    }
  }

  // healthy_threshold - computed: false, optional: false, required: true
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // interval_millis - computed: false, optional: false, required: true
  private _intervalMillis?: number; 
  public get intervalMillis() {
    return this.getNumberAttribute('interval_millis');
  }
  public set intervalMillis(value: number) {
    this._intervalMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMillisInput() {
    return this._intervalMillis;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // timeout_millis - computed: false, optional: false, required: true
  private _timeoutMillis?: number; 
  public get timeoutMillis() {
    return this.getNumberAttribute('timeout_millis');
  }
  public set timeoutMillis(value: number) {
    this._timeoutMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMillisInput() {
    return this._timeoutMillis;
  }

  // unhealthy_threshold - computed: false, optional: false, required: true
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionBaseEjectionDuration {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionBaseEjectionDurationToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionBaseEjectionDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionBaseEjectionDurationToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionBaseEjectionDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionBaseEjectionDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionBaseEjectionDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionBaseEjectionDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionInterval {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionIntervalToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionInterval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionIntervalToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionInterval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionInterval | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionInterval | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetection {
  /**
  * The base time that a host is ejected for. The real time is equal to the base time multiplied by the number of times the host has been ejected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#base_ejection_duration DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#base_ejection_duration}
  */
  readonly baseEjectionDuration: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionBaseEjectionDuration;
  /**
  * The time interval between ejection analysis sweeps. This can result in both new ejections as well as hosts being returned to service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#interval DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#interval}
  */
  readonly interval: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionInterval;
  /**
  * The threshold for the max percentage of outlier hosts that can be ejected from the load balancing set. maxEjectionPercent=100 means outlier detection can potentially eject all of the hosts from the upstream service if they are all considered outliers, leaving the load balancing set with zero hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#max_ejection_percent DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#max_ejection_percent}
  */
  readonly maxEjectionPercent: number;
  /**
  * The threshold for the number of server errors returned by a given host during an outlier detection interval. If the server error count meets/exceeds this threshold the host is ejected. A server error is defined as any HTTP 5xx response (or the equivalent for gRPC and TCP connections)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#max_server_errors DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#max_server_errors}
  */
  readonly maxServerErrors: number;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_ejection_duration: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionBaseEjectionDurationToTerraform(struct!.baseEjectionDuration),
    interval: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionIntervalToTerraform(struct!.interval),
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
    max_server_errors: cdktf.numberToTerraform(struct!.maxServerErrors),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_ejection_duration: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionBaseEjectionDurationToHclTerraform(struct!.baseEjectionDuration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionBaseEjectionDuration",
    },
    interval: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionIntervalToHclTerraform(struct!.interval),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionInterval",
    },
    max_ejection_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxEjectionPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_server_errors: {
      value: cdktf.numberToHclTerraform(struct!.maxServerErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseEjectionDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEjectionDuration = this._baseEjectionDuration?.internalValue;
    }
    if (this._interval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval?.internalValue;
    }
    if (this._maxEjectionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEjectionPercent = this._maxEjectionPercent;
    }
    if (this._maxServerErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxServerErrors = this._maxServerErrors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseEjectionDuration.internalValue = undefined;
      this._interval.internalValue = undefined;
      this._maxEjectionPercent = undefined;
      this._maxServerErrors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseEjectionDuration.internalValue = value.baseEjectionDuration;
      this._interval.internalValue = value.interval;
      this._maxEjectionPercent = value.maxEjectionPercent;
      this._maxServerErrors = value.maxServerErrors;
    }
  }

  // base_ejection_duration - computed: false, optional: false, required: true
  private _baseEjectionDuration = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionBaseEjectionDurationOutputReference(this, "base_ejection_duration");
  public get baseEjectionDuration() {
    return this._baseEjectionDuration;
  }
  public putBaseEjectionDuration(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionBaseEjectionDuration) {
    this._baseEjectionDuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionDurationInput() {
    return this._baseEjectionDuration.internalValue;
  }

  // interval - computed: false, optional: false, required: true
  private _interval = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionIntervalOutputReference(this, "interval");
  public get interval() {
    return this._interval;
  }
  public putInterval(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionInterval) {
    this._interval.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval.internalValue;
  }

  // max_ejection_percent - computed: false, optional: false, required: true
  private _maxEjectionPercent?: number; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number) {
    this._maxEjectionPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent;
  }

  // max_server_errors - computed: false, optional: false, required: true
  private _maxServerErrors?: number; 
  public get maxServerErrors() {
    return this.getNumberAttribute('max_server_errors');
  }
  public set maxServerErrors(value: number) {
    this._maxServerErrors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxServerErrorsInput() {
    return this._maxServerErrors;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersPortMapping {
  /**
  * The port used for the port mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#port DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#port}
  */
  readonly port: number;
  /**
  * The protocol used for the port mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#protocol DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#protocol}
  */
  readonly protocol: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersPortMappingToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersPortMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersPortMappingToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersPortMapping | cdktf.IResolvable): any {
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersPortMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersPortMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersPortMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcIdle {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcIdleToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcIdle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcIdleToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcIdle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcIdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcIdle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcIdle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcPerRequest {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcPerRequestToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcPerRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcPerRequestToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcPerRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcPerRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcPerRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcPerRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpc {
  /**
  * An object that represents idle timeout duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#idle DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#idle}
  */
  readonly idle?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcIdle;
  /**
  * An object that represents per request timeout duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#per_request DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#per_request}
  */
  readonly perRequest?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcPerRequest;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcIdleToTerraform(struct!.idle),
    per_request: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcPerRequestToTerraform(struct!.perRequest),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcIdleToHclTerraform(struct!.idle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcIdle",
    },
    per_request: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcPerRequestToHclTerraform(struct!.perRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcPerRequest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    if (this._perRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRequest = this._perRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idle.internalValue = undefined;
      this._perRequest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idle.internalValue = value.idle;
      this._perRequest.internalValue = value.perRequest;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcIdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcIdle) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcPerRequestOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcPerRequest) {
    this._perRequest.internalValue = value;
  }
  public resetPerRequest() {
    this._perRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpIdle {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpIdleToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpIdle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpIdleToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpIdle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpIdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpIdle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpIdle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpPerRequest {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpPerRequestToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpPerRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpPerRequestToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpPerRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpPerRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpPerRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpPerRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp {
  /**
  * An object that represents idle timeout duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#idle DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#idle}
  */
  readonly idle?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpIdle;
  /**
  * An object that represents per request timeout duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#per_request DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#per_request}
  */
  readonly perRequest?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpPerRequest;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpIdleToTerraform(struct!.idle),
    per_request: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpPerRequestToTerraform(struct!.perRequest),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpIdleToHclTerraform(struct!.idle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpIdle",
    },
    per_request: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpPerRequestToHclTerraform(struct!.perRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpPerRequest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    if (this._perRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRequest = this._perRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idle.internalValue = undefined;
      this._perRequest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idle.internalValue = value.idle;
      this._perRequest.internalValue = value.perRequest;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpIdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpIdle) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpPerRequestOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpPerRequest) {
    this._perRequest.internalValue = value;
  }
  public resetPerRequest() {
    this._perRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2Idle {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2IdleToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2Idle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2IdleToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2Idle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2IdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2Idle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2Idle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2PerRequest {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2PerRequestToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2PerRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2PerRequestToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2PerRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2PerRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2PerRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2PerRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2 {
  /**
  * An object that represents idle timeout duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#idle DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#idle}
  */
  readonly idle?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2Idle;
  /**
  * An object that represents per request timeout duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#per_request DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#per_request}
  */
  readonly perRequest?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2PerRequest;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2ToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2IdleToTerraform(struct!.idle),
    per_request: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2PerRequestToTerraform(struct!.perRequest),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2ToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2IdleToHclTerraform(struct!.idle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2Idle",
    },
    per_request: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2PerRequestToHclTerraform(struct!.perRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2PerRequest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    if (this._perRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRequest = this._perRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idle.internalValue = undefined;
      this._perRequest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idle.internalValue = value.idle;
      this._perRequest.internalValue = value.perRequest;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2IdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2Idle) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2PerRequestOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2PerRequest) {
    this._perRequest.internalValue = value;
  }
  public resetPerRequest() {
    this._perRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpIdle {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpIdleToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpIdle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpIdleToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpIdle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpIdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpIdle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpIdle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcp {
  /**
  * An object that represents idle timeout duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#idle DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#idle}
  */
  readonly idle?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpIdle;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpIdleToTerraform(struct!.idle),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpIdleToHclTerraform(struct!.idle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpIdle",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idle.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idle.internalValue = value.idle;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpIdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpIdle) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeout {
  /**
  * Specifies grpc timeout information for the virtual node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#grpc DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#grpc}
  */
  readonly grpc?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpc;
  /**
  * Specifies http timeout information for the virtual node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#http DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#http}
  */
  readonly http?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp;
  /**
  * Specifies http2 information for the virtual node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#http2 DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#http2}
  */
  readonly http2?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2;
  /**
  * Specifies tcp timeout information for the virtual node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#tcp DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#tcp}
  */
  readonly tcp?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcp;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcToTerraform(struct!.grpc),
    http: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpToTerraform(struct!.http),
    http2: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2ToTerraform(struct!.http2),
    tcp: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpToTerraform(struct!.tcp),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpc",
    },
    http: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp",
    },
    http2: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2ToHclTerraform(struct!.http2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2",
    },
    tcp: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._http2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpc.internalValue = undefined;
      this._http.internalValue = undefined;
      this._http2.internalValue = undefined;
      this._tcp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grpc.internalValue = value.grpc;
      this._http.internalValue = value.http;
      this._http2.internalValue = value.http2;
      this._tcp.internalValue = value.tcp;
    }
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutGrpc) {
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
  private _http = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // http2 - computed: false, optional: true, required: false
  private _http2 = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2OutputReference(this, "http2");
  public get http2() {
    return this._http2;
  }
  public putHttp2(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutHttp2) {
    this._http2.internalValue = value;
  }
  public resetHttp2() {
    this._http2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateAcm {
  /**
  * The Amazon Resource Name (ARN) for the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#certificate_arn DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#certificate_arn}
  */
  readonly certificateArn: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateAcmToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateAcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateAcmToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateAcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_arn: {
      value: cdktf.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateAcmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateAcm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateAcm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateArn = value.certificateArn;
    }
  }

  // certificate_arn - computed: false, optional: false, required: true
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateFile {
  /**
  * The certificate chain for the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#certificate_chain DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * The private key for a certificate stored on the file system of the virtual node that the proxy is running on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#private_key DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#private_key}
  */
  readonly privateKey: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateFileToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateFileToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_chain: {
      value: cdktf.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateChain = undefined;
      this._privateKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateChain = value.certificateChain;
      this._privateKey = value.privateKey;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateSds {
  /**
  * The certificate trust chain for a certificate issued via SDS cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#secret_name DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateSdsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateSdsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateSds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateSds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificate {
  /**
  * A reference to an object that represents an AWS Certificate Manager (ACM) certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#acm DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#acm}
  */
  readonly acm?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateAcm;
  /**
  * A reference to an object that represents a local file certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#file DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#file}
  */
  readonly file?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateFile;
  /**
  * A reference to an object that represents an SDS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#sds DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#sds}
  */
  readonly sds?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateSds;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateAcmToTerraform(struct!.acm),
    file: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateFileToTerraform(struct!.file),
    sds: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateSdsToTerraform(struct!.sds),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acm: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateAcmToHclTerraform(struct!.acm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateAcm",
    },
    file: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateFile",
    },
    sds: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateSds",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acm = this._acm?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acm.internalValue = undefined;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acm.internalValue = value.acm;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // acm - computed: false, optional: true, required: false
  private _acm = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateAcmOutputReference(this, "acm");
  public get acm() {
    return this._acm;
  }
  public putAcm(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateAcm) {
    this._acm.internalValue = value;
  }
  public resetAcm() {
    this._acm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmInput() {
    return this._acm.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateSds) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Exact is a required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#exact DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#exact}
  */
  readonly exact: string[];
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exact),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exact),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: false, required: true
  private _exact?: string[]; 
  public get exact() {
    return this.getListAttribute('exact');
  }
  public set exact(value: string[]) {
    this._exact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNames {
  /**
  * Match is a required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#match DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#match}
  */
  readonly match: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatch;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match.internalValue = value.match;
    }
  }

  // match - computed: false, optional: false, required: true
  private _match = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustFile {
  /**
  * The certificate trust chain for a certificate stored on the file system of the virtual node that the proxy is running on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#certificate_chain DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#certificate_chain}
  */
  readonly certificateChain: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustFileToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustFileToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_chain: {
      value: cdktf.stringToHclTerraform(struct!.certificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateChain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateChain = value.certificateChain;
    }
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustSds {
  /**
  * The certificate trust chain for a certificate obtained via SDS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#secret_name DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustSdsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustSdsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustSds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustSds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrust {
  /**
  * An object that represents a TLS validation context trust for a local file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#file DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#file}
  */
  readonly file?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustFile;
  /**
  * An object that represents a TLS validation context trust for an SDS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#sds DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#sds}
  */
  readonly sds?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustSds;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrust | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustFileToTerraform(struct!.file),
    sds: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustSdsToTerraform(struct!.sds),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrust | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustFile",
    },
    sds: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustSds",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrust | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrust | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file.internalValue = undefined;
      this._sds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file.internalValue = value.file;
      this._sds.internalValue = value.sds;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustSds) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidation {
  /**
  * Possible alternative names to consider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#subject_alternative_names DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNames;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#trust DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#trust}
  */
  readonly trust: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrust;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_alternative_names: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
    trust: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustToTerraform(struct!.trust),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subject_alternative_names: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesToHclTerraform(struct!.subjectAlternativeNames),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNames",
    },
    trust: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustToHclTerraform(struct!.trust),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrust",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subjectAlternativeNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames?.internalValue;
    }
    if (this._trust?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trust = this._trust?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subjectAlternativeNames.internalValue = undefined;
      this._trust.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
      this._trust.internalValue = value.trust;
    }
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesOutputReference(this, "subject_alternative_names");
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames;
  }
  public putSubjectAlternativeNames(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNames) {
    this._subjectAlternativeNames.internalValue = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames.internalValue;
  }

  // trust - computed: false, optional: false, required: true
  private _trust = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrustOutputReference(this, "trust");
  public get trust() {
    return this._trust;
  }
  public putTrust(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationTrust) {
    this._trust.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTls {
  /**
  * A reference to an object that represents a listener's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#certificate DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#certificate}
  */
  readonly certificate: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificate;
  /**
  * ListenerTLS mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#mode DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#mode}
  */
  readonly mode: string;
  /**
  * A reference to an object that represents an SDS Trust Domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#validation DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#validation}
  */
  readonly validation?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidation;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateToTerraform(struct!.certificate),
    mode: cdktf.stringToTerraform(struct!.mode),
    validation: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationToTerraform(struct!.validation),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificate",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate.internalValue = undefined;
      this._mode = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate.internalValue = value.certificate;
      this._mode = value.mode;
      this._validation.internalValue = value.validation;
    }
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsCertificate) {
    this._certificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
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

  // validation - computed: false, optional: true, required: false
  private _validation = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListeners {
  /**
  * The connection pool settings for the listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#connection_pool DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#connection_pool}
  */
  readonly connectionPool?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPool;
  /**
  * The health check information for the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#health_check DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#health_check}
  */
  readonly healthCheck?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersHealthCheck;
  /**
  * The outlier detection for the listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#outlier_detection DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#outlier_detection}
  */
  readonly outlierDetection?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetection;
  /**
  * The port mapping information for the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#port_mapping DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#port_mapping}
  */
  readonly portMapping: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersPortMapping;
  /**
  * A reference to an object that represents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#timeout DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#timeout}
  */
  readonly timeout?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeout;
  /**
  * A reference to an object that represents the Transport Layer Security (TLS) properties for a listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#tls DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#tls}
  */
  readonly tls?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTls;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_pool: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolToTerraform(struct!.connectionPool),
    health_check: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersHealthCheckToTerraform(struct!.healthCheck),
    outlier_detection: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionToTerraform(struct!.outlierDetection),
    port_mapping: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersPortMappingToTerraform(struct!.portMapping),
    timeout: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutToTerraform(struct!.timeout),
    tls: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsToTerraform(struct!.tls),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_pool: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolToHclTerraform(struct!.connectionPool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPool",
    },
    health_check: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersHealthCheck",
    },
    outlier_detection: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionToHclTerraform(struct!.outlierDetection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetection",
    },
    port_mapping: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersPortMappingToHclTerraform(struct!.portMapping),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersPortMapping",
    },
    timeout: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeout",
    },
    tls: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPool = this._connectionPool?.internalValue;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._outlierDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outlierDetection = this._outlierDetection?.internalValue;
    }
    if (this._portMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMapping = this._portMapping?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionPool.internalValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._outlierDetection.internalValue = undefined;
      this._portMapping.internalValue = undefined;
      this._timeout.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionPool.internalValue = value.connectionPool;
      this._healthCheck.internalValue = value.healthCheck;
      this._outlierDetection.internalValue = value.outlierDetection;
      this._portMapping.internalValue = value.portMapping;
      this._timeout.internalValue = value.timeout;
      this._tls.internalValue = value.tls;
    }
  }

  // connection_pool - computed: false, optional: true, required: false
  private _connectionPool = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPoolOutputReference(this, "connection_pool");
  public get connectionPool() {
    return this._connectionPool;
  }
  public putConnectionPool(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersConnectionPool) {
    this._connectionPool.internalValue = value;
  }
  public resetConnectionPool() {
    this._connectionPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolInput() {
    return this._connectionPool.internalValue;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetectionOutputReference(this, "outlier_detection");
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutlierDetection) {
    this._outlierDetection.internalValue = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection.internalValue;
  }

  // port_mapping - computed: false, optional: false, required: true
  private _portMapping = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersPortMappingOutputReference(this, "port_mapping");
  public get portMapping() {
    return this._portMapping;
  }
  public putPortMapping(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersPortMapping) {
    this._portMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingInput() {
    return this._portMapping.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListeners[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJson {
  /**
  * The name of the field in the JSON object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#key DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * The format string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJson | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJson[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormat {
  /**
  * Output specified fields as a JSON object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#json DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#json}
  */
  readonly json?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJson[] | cdktf.IResolvable;
  /**
  * Custom format string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#text DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonToTerraform, false)(struct!.json),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonToHclTerraform, false)(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonList",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._json.internalValue = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._json.internalValue = value.json;
      this._text = value.text;
    }
  }

  // json - computed: false, optional: true, required: false
  private _json = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonList(this, "json", false);
  public get json() {
    return this._json;
  }
  public putJson(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatJson[] | cdktf.IResolvable) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFile {
  /**
  * Structured access log output format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#format DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#format}
  */
  readonly format?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormat;
  /**
  * The file path to write access logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#path DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#path}
  */
  readonly path: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatToTerraform(struct!.format),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormat",
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

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format.internalValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format.internalValue = value.format;
      this._path = value.path;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
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
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLog {
  /**
  * The file object to send virtual node access logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#file DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#file}
  */
  readonly file?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFile;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileToTerraform(struct!.file),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFile",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file.internalValue = value.file;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLogging {
  /**
  * The access log configuration for a virtual node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#access_log DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#access_log}
  */
  readonly accessLog?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLog;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_log: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogToTerraform(struct!.accessLog),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_log: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogToHclTerraform(struct!.accessLog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLog",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLog = this._accessLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLog.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLog.internalValue = value.accessLog;
    }
  }

  // access_log - computed: false, optional: true, required: false
  private _accessLog = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLogOutputReference(this, "access_log");
  public get accessLog() {
    return this._accessLog;
  }
  public putAccessLog(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingAccessLog) {
    this._accessLog.internalValue = value;
  }
  public resetAccessLog() {
    this._accessLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogInput() {
    return this._accessLog.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecMeshRef {
  /**
  * Name is the name of Mesh CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * UID is the UID of Mesh CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#uid DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#uid}
  */
  readonly uid: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecMeshRefToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecMeshRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecMeshRefToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecMeshRef | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecMeshRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecMeshRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecMeshRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._uid = value.uid;
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

  // uid - computed: false, optional: false, required: true
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#key DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#operator DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#values DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressionsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressionsOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#match_expressions DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#match_labels DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributes {
  /**
  * The name of an AWS Cloud Map service instance attribute key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#key DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * The value of an AWS Cloud Map service instance attribute key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributesToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributesToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributes | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributesOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMap {
  /**
  * A string map that contains attributes with values that you can use to filter instances by any custom attribute that you specified when you registered the instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#attributes DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#attributes}
  */
  readonly attributes?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributes[] | cdktf.IResolvable;
  /**
  * The name of the AWS Cloud Map namespace to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#namespace_name DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * The name of the AWS Cloud Map service to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#service_name DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#service_name}
  */
  readonly serviceName: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributesToTerraform, false)(struct!.attributes),
    namespace_name: cdktf.stringToTerraform(struct!.namespaceName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributesList",
    },
    namespace_name: {
      value: cdktf.stringToHclTerraform(struct!.namespaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._namespaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceName = this._namespaceName;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._namespaceName = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._namespaceName = value.namespaceName;
      this._serviceName = value.serviceName;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryDns {
  /**
  * Specifies the DNS service discovery hostname for the virtual node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#hostname DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#hostname}
  */
  readonly hostname: string;
  /**
  * Choose between ENDPOINTS (strict DNS) and LOADBALANCER (logical DNS) mode in Envoy sidecar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#response_type DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#response_type}
  */
  readonly responseType?: string;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryDnsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    response_type: cdktf.stringToTerraform(struct!.responseType),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryDnsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_type: {
      value: cdktf.stringToHclTerraform(struct!.responseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._responseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseType = this._responseType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._responseType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._responseType = value.responseType;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // response_type - computed: false, optional: true, required: false
  private _responseType?: string; 
  public get responseType() {
    return this.getStringAttribute('response_type');
  }
  public set responseType(value: string) {
    this._responseType = value;
  }
  public resetResponseType() {
    this._responseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypeInput() {
    return this._responseType;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscovery {
  /**
  * Specifies any AWS Cloud Map information for the virtual node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#aws_cloud_map DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#aws_cloud_map}
  */
  readonly awsCloudMap?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMap;
  /**
  * Specifies the DNS information for the virtual node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#dns DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#dns}
  */
  readonly dns?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryDns;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_cloud_map: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapToTerraform(struct!.awsCloudMap),
    dns: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryDnsToTerraform(struct!.dns),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_cloud_map: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapToHclTerraform(struct!.awsCloudMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMap",
    },
    dns: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryDns",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsCloudMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCloudMap = this._awsCloudMap?.internalValue;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsCloudMap.internalValue = undefined;
      this._dns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsCloudMap.internalValue = value.awsCloudMap;
      this._dns.internalValue = value.dns;
    }
  }

  // aws_cloud_map - computed: false, optional: true, required: false
  private _awsCloudMap = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMapOutputReference(this, "aws_cloud_map");
  public get awsCloudMap() {
    return this._awsCloudMap;
  }
  public putAwsCloudMap(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryAwsCloudMap) {
    this._awsCloudMap.internalValue = value;
  }
  public resetAwsCloudMap() {
    this._awsCloudMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCloudMapInput() {
    return this._awsCloudMap.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpec {
  /**
  * AWSName is the AppMesh VirtualNode object's name. If unspecified or empty, it defaults to be '${name}_${namespace}' of k8s VirtualNode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#aws_name DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#aws_name}
  */
  readonly awsName?: string;
  /**
  * A reference to an object that represents the defaults for backends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#backend_defaults DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#backend_defaults}
  */
  readonly backendDefaults?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaults;
  /**
  * BackendGroups that define a set of backends the virtual node is expected to send outbound traffic to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#backend_groups DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#backend_groups}
  */
  readonly backendGroups?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroups[] | cdktf.IResolvable;
  /**
  * The backends that the virtual node is expected to send outbound traffic to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#backends DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#backends}
  */
  readonly backends?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackends[] | cdktf.IResolvable;
  /**
  * The listener that the virtual node is expected to receive inbound traffic from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#listeners DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#listeners}
  */
  readonly listeners?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListeners[] | cdktf.IResolvable;
  /**
  * The inbound and outbound access logging information for the virtual node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#logging DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#logging}
  */
  readonly logging?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLogging;
  /**
  * A reference to k8s Mesh CR that this VirtualNode belongs to. The admission controller populates it using Meshes's selector, and prevents users from setting this field. Populated by the system. Read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#mesh_ref DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#mesh_ref}
  */
  readonly meshRef?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecMeshRef;
  /**
  * PodSelector selects Pods using labels to designate VirtualNode membership. This field follows standard label selector semantics: if present but empty, it selects all pods within namespace. if absent, it selects no pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#pod_selector DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelector;
  /**
  * The service discovery information for the virtual node. Optional if there is no inbound traffic(no listeners). Mandatory if a listener is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#service_discovery DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest#service_discovery}
  */
  readonly serviceDiscovery?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscovery;
}

export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_name: cdktf.stringToTerraform(struct!.awsName),
    backend_defaults: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsToTerraform(struct!.backendDefaults),
    backend_groups: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroupsToTerraform, false)(struct!.backendGroups),
    backends: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsToTerraform, false)(struct!.backends),
    listeners: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersToTerraform, false)(struct!.listeners),
    logging: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingToTerraform(struct!.logging),
    mesh_ref: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecMeshRefToTerraform(struct!.meshRef),
    pod_selector: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorToTerraform(struct!.podSelector),
    service_discovery: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryToTerraform(struct!.serviceDiscovery),
  }
}


export function dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_name: {
      value: cdktf.stringToHclTerraform(struct!.awsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_defaults: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsToHclTerraform(struct!.backendDefaults),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaults",
    },
    backend_groups: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroupsToHclTerraform, false)(struct!.backendGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroupsList",
    },
    backends: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsToHclTerraform, false)(struct!.backends),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsList",
    },
    listeners: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersToHclTerraform, false)(struct!.listeners),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersList",
    },
    logging: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLogging",
    },
    mesh_ref: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecMeshRefToHclTerraform(struct!.meshRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecMeshRef",
    },
    pod_selector: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelector",
    },
    service_discovery: {
      value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryToHclTerraform(struct!.serviceDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscovery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsName = this._awsName;
    }
    if (this._backendDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendDefaults = this._backendDefaults?.internalValue;
    }
    if (this._backendGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendGroups = this._backendGroups?.internalValue;
    }
    if (this._backends?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backends = this._backends?.internalValue;
    }
    if (this._listeners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listeners = this._listeners?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._meshRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshRef = this._meshRef?.internalValue;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    if (this._serviceDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDiscovery = this._serviceDiscovery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsName = undefined;
      this._backendDefaults.internalValue = undefined;
      this._backendGroups.internalValue = undefined;
      this._backends.internalValue = undefined;
      this._listeners.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._meshRef.internalValue = undefined;
      this._podSelector.internalValue = undefined;
      this._serviceDiscovery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsName = value.awsName;
      this._backendDefaults.internalValue = value.backendDefaults;
      this._backendGroups.internalValue = value.backendGroups;
      this._backends.internalValue = value.backends;
      this._listeners.internalValue = value.listeners;
      this._logging.internalValue = value.logging;
      this._meshRef.internalValue = value.meshRef;
      this._podSelector.internalValue = value.podSelector;
      this._serviceDiscovery.internalValue = value.serviceDiscovery;
    }
  }

  // aws_name - computed: false, optional: true, required: false
  private _awsName?: string; 
  public get awsName() {
    return this.getStringAttribute('aws_name');
  }
  public set awsName(value: string) {
    this._awsName = value;
  }
  public resetAwsName() {
    this._awsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsNameInput() {
    return this._awsName;
  }

  // backend_defaults - computed: false, optional: true, required: false
  private _backendDefaults = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaultsOutputReference(this, "backend_defaults");
  public get backendDefaults() {
    return this._backendDefaults;
  }
  public putBackendDefaults(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendDefaults) {
    this._backendDefaults.internalValue = value;
  }
  public resetBackendDefaults() {
    this._backendDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendDefaultsInput() {
    return this._backendDefaults.internalValue;
  }

  // backend_groups - computed: false, optional: true, required: false
  private _backendGroups = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroupsList(this, "backend_groups", false);
  public get backendGroups() {
    return this._backendGroups;
  }
  public putBackendGroups(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendGroups[] | cdktf.IResolvable) {
    this._backendGroups.internalValue = value;
  }
  public resetBackendGroups() {
    this._backendGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendGroupsInput() {
    return this._backendGroups.internalValue;
  }

  // backends - computed: false, optional: true, required: false
  private _backends = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackendsList(this, "backends", false);
  public get backends() {
    return this._backends;
  }
  public putBackends(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecBackends[] | cdktf.IResolvable) {
    this._backends.internalValue = value;
  }
  public resetBackends() {
    this._backends.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendsInput() {
    return this._backends.internalValue;
  }

  // listeners - computed: false, optional: true, required: false
  private _listeners = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }
  public putListeners(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecListeners[] | cdktf.IResolvable) {
    this._listeners.internalValue = value;
  }
  public resetListeners() {
    this._listeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenersInput() {
    return this._listeners.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // mesh_ref - computed: false, optional: true, required: false
  private _meshRef = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecMeshRefOutputReference(this, "mesh_ref");
  public get meshRef() {
    return this._meshRef;
  }
  public putMeshRef(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecMeshRef) {
    this._meshRef.internalValue = value;
  }
  public resetMeshRef() {
    this._meshRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshRefInput() {
    return this._meshRef.internalValue;
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }

  // service_discovery - computed: false, optional: true, required: false
  private _serviceDiscovery = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscoveryOutputReference(this, "service_discovery");
  public get serviceDiscovery() {
    return this._serviceDiscovery;
  }
  public putServiceDiscovery(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecServiceDiscovery) {
    this._serviceDiscovery.internalValue = value;
  }
  public resetServiceDiscovery() {
    this._serviceDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDiscoveryInput() {
    return this._serviceDiscovery.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest k8s_appmesh_k8s_aws_virtual_node_v1beta2_manifest}
*/
export class DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_appmesh_k8s_aws_virtual_node_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppmeshK8SAwsVirtualNodeV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_appmesh_k8s_aws_virtual_node_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_virtual_node_v1beta2_manifest k8s_appmesh_k8s_aws_virtual_node_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_appmesh_k8s_aws_virtual_node_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpec) {
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
      metadata: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppmeshK8SAwsVirtualNodeV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
