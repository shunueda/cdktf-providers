// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#metadata DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestMetadata;
  /**
  * VirtualGatewaySpec defines the desired state of VirtualGateway refers to https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#spec DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpec;
}
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#annotations DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#labels DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestMetadataToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFile {
  /**
  * The certificate chain for the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#certificate_chain DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * The private key for a certificate stored on the file system of the virtual Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#private_key DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#private_key}
  */
  readonly privateKey: string;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFileToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFile | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSds {
  /**
  * The certificate trust chain for a certificate issued via SDS cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#secret_name DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSdsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSds | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSds | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificate {
  /**
  * An object that represents a TLS cert via a local file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#file DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#file}
  */
  readonly file?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFile;
  /**
  * An object that represents a TLS cert via SDS entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#sds DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#sds}
  */
  readonly sds?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSds;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct!.file),
    sds: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct!.sds),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFile",
    },
    sds: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSds",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificate | cdktf.IResolvable | undefined) {
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
  private _file = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateFile) {
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
  private _sds = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateSds) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Exact is a required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#exact DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#exact}
  */
  readonly exact: string[];
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exact),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
  /**
  * Match is a required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#match DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#match}
  */
  readonly match: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | cdktf.IResolvable | undefined) {
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
  private _match = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
  /**
  * One or more ACM Amazon Resource Name (ARN)s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#certificate_authority_ar_ns DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#certificate_authority_ar_ns}
  */
  readonly certificateAuthorityArNs: string[];
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority_ar_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateAuthorityArNs),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFile {
  /**
  * The certificate trust chain for a certificate stored on the file system of the virtual Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#certificate_chain DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#certificate_chain}
  */
  readonly certificateChain: string;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFileToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFile | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSds {
  /**
  * The certificate trust chain for a certificate issued via SDS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#secret_name DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSds | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSds | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrust {
  /**
  * A reference to an object that represents a TLS validation context trust for an AWS Certicate Manager (ACM) certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#acm DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#acm}
  */
  readonly acm?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcm;
  /**
  * An object that represents a TLS validation context trust for a local file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#file DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#file}
  */
  readonly file?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFile;
  /**
  * An object that represents a TLS validation context trust for a SDS certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#sds DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#sds}
  */
  readonly sds?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSds;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrust | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct!.acm),
    file: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct!.file),
    sds: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct!.sds),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrust | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acm: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToHclTerraform(struct!.acm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcm",
    },
    file: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFile",
    },
    sds: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSds",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrust | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrust | cdktf.IResolvable | undefined) {
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
  private _acm = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference(this, "acm");
  public get acm() {
    return this._acm;
  }
  public putAcm(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustAcm) {
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
  private _file = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustFile) {
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
  private _sds = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustSds) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidation {
  /**
  * Possible alternative names to consider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#subject_alternative_names DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;
  /**
  * A reference to an object that represents a TLS validation context trust
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#trust DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#trust}
  */
  readonly trust: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrust;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_alternative_names: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
    trust: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct!.trust),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subject_alternative_names: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToHclTerraform(struct!.subjectAlternativeNames),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames",
    },
    trust: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustToHclTerraform(struct!.trust),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrust",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidation | cdktf.IResolvable | undefined) {
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
  private _subjectAlternativeNames = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(this, "subject_alternative_names");
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames;
  }
  public putSubjectAlternativeNames(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames) {
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
  private _trust = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference(this, "trust");
  public get trust() {
    return this._trust;
  }
  public putTrust(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationTrust) {
    this._trust.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTls {
  /**
  * A reference to an object that represents TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#certificate DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#certificate}
  */
  readonly certificate?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificate;
  /**
  * Whether the policy is enforced. If unspecified, default settings from AWS API will be applied. Refer to AWS Docs for default settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#enforce DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * The range of ports that the policy is enforced for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#ports DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#ports}
  */
  readonly ports?: string[];
  /**
  * A reference to an object that represents a TLS validation context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#validation DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#validation}
  */
  readonly validation: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidation;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct!.certificate),
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
    validation: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct!.validation),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificate",
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
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTls | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTls | cdktf.IResolvable | undefined) {
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
  private _certificate = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsCertificate) {
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
  private _validation = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsValidation) {
    this._validation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicy {
  /**
  * A reference to an object that represents a Transport Layer Security (TLS) client policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#tls DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#tls}
  */
  readonly tls?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTls;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsToTerraform(struct!.tls),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicy | cdktf.IResolvable | undefined) {
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
  private _tls = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyTls) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaults {
  /**
  * A reference to an object that represents a client policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#client_policy DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#client_policy}
  */
  readonly clientPolicy?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicy;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_policy: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyToTerraform(struct!.clientPolicy),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_policy: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyToHclTerraform(struct!.clientPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaults | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaults | cdktf.IResolvable | undefined) {
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
  private _clientPolicy = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicyOutputReference(this, "client_policy");
  public get clientPolicy() {
    return this._clientPolicy;
  }
  public putClientPolicy(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsClientPolicy) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#key DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#operator DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#values DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressionsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressionsOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#match_expressions DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#match_labels DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressionsList",
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolGrpc {
  /**
  * Represents the maximum number of inflight requests that an envoy can concurrently support across all the hosts in the upstream cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#max_requests DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#max_requests}
  */
  readonly maxRequests: number;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolGrpcToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolGrpcToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolGrpc | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolGrpc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolGrpc | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp {
  /**
  * Represents the maximum number of outbound TCP connections the envoy can establish concurrently with all the hosts in the upstream cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#max_connections DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#max_connections}
  */
  readonly maxConnections: number;
  /**
  * Represents the number of overflowing requests after max_connections that an envoy will queue to an upstream cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#max_pending_requests DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttpToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttpToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp2 {
  /**
  * Represents the maximum number of inflight requests that an envoy can concurrently support across all the hosts in the upstream cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#max_requests DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#max_requests}
  */
  readonly maxRequests: number;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp2ToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp2ToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp2 | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp2 | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPool {
  /**
  * Specifies grpc connection pool settings for the virtual gateway listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#grpc DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#grpc}
  */
  readonly grpc?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolGrpc;
  /**
  * Specifies http connection pool settings for the virtual gateway listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#http DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#http}
  */
  readonly http?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp;
  /**
  * Specifies http2 connection pool settings for the virtual gateway listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#http2 DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#http2}
  */
  readonly http2?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp2;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolGrpcToTerraform(struct!.grpc),
    http: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttpToTerraform(struct!.http),
    http2: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp2ToTerraform(struct!.http2),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolGrpc",
    },
    http: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp",
    },
    http2: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp2ToHclTerraform(struct!.http2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp2",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPool | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpc.internalValue = undefined;
      this._http.internalValue = undefined;
      this._http2.internalValue = undefined;
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
    }
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolGrpc) {
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
  private _http = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp) {
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
  private _http2 = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp2OutputReference(this, "http2");
  public get http2() {
    return this._http2;
  }
  public putHttp2(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolHttp2) {
    this._http2.internalValue = value;
  }
  public resetHttp2() {
    this._http2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersHealthCheck {
  /**
  * The number of consecutive successful health checks that must occur before declaring listener healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#healthy_threshold DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * The time period in milliseconds between each health check execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#interval_millis DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#interval_millis}
  */
  readonly intervalMillis: number;
  /**
  * The destination path for the health check request. This value is only used if the specified protocol is http or http2. For any other protocol, this value is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#path DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#path}
  */
  readonly path?: string;
  /**
  * The destination port for the health check request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#port DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * The protocol for the health check request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#protocol DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#protocol}
  */
  readonly protocol: string;
  /**
  * The amount of time to wait when receiving a response from the health check, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#timeout_millis DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#timeout_millis}
  */
  readonly timeoutMillis: number;
  /**
  * The number of consecutive failed health checks that must occur before declaring a virtual Gateway unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#unhealthy_threshold DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#unhealthy_threshold}
  */
  readonly unhealthyThreshold: number;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersHealthCheckToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersHealthCheck | cdktf.IResolvable): any {
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


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersHealthCheckToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersHealthCheck | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersHealthCheck | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersHealthCheck | cdktf.IResolvable | undefined) {
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

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersPortMapping {
  /**
  * The port used for the port mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#port DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#port}
  */
  readonly port: number;
  /**
  * The protocol used for the port mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#protocol DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#protocol}
  */
  readonly protocol: string;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersPortMappingToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersPortMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersPortMappingToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersPortMapping | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersPortMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersPortMapping | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersPortMapping | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateAcm {
  /**
  * The Amazon Resource Name (ARN) for the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#certificate_arn DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#certificate_arn}
  */
  readonly certificateArn: string;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateAcmToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateAcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateAcmToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateAcm | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateAcmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateAcm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateAcm | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateFile {
  /**
  * The certificate chain for the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#certificate_chain DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * The private key for a certificate stored on the file system of the virtual Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#private_key DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#private_key}
  */
  readonly privateKey: string;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateFileToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateFileToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateFile | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateSds {
  /**
  * The certificate trust chain for a certificate issued via SDS cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#secret_name DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateSdsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateSdsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateSds | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateSds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateSds | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificate {
  /**
  * A reference to an object that represents an AWS Certificate Manager (ACM) certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#acm DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#acm}
  */
  readonly acm?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateAcm;
  /**
  * A reference to an object that represents a local file certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#file DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#file}
  */
  readonly file?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateFile;
  /**
  * A reference to an object that represents an SDS issued certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#sds DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#sds}
  */
  readonly sds?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateSds;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateAcmToTerraform(struct!.acm),
    file: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateFileToTerraform(struct!.file),
    sds: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateSdsToTerraform(struct!.sds),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acm: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateAcmToHclTerraform(struct!.acm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateAcm",
    },
    file: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateFile",
    },
    sds: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateSds",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificate | cdktf.IResolvable | undefined) {
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
  private _acm = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateAcmOutputReference(this, "acm");
  public get acm() {
    return this._acm;
  }
  public putAcm(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateAcm) {
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
  private _file = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateFile) {
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
  private _sds = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateSds) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Exact is a required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#exact DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#exact}
  */
  readonly exact: string[];
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exact),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatch | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNames {
  /**
  * Match is a required field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#match DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#match}
  */
  readonly match: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatch;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNames | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNames | cdktf.IResolvable | undefined) {
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
  private _match = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustAcm {
  /**
  * One or more ACM Amazon Resource Name (ARN)s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#certificate_authority_ar_ns DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#certificate_authority_ar_ns}
  */
  readonly certificateAuthorityArNs: string[];
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustAcmToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustAcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority_ar_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateAuthorityArNs),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustAcmToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustAcm | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustAcm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustAcm | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustFile {
  /**
  * The certificate trust chain for a certificate stored on the file system of the virtual Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#certificate_chain DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#certificate_chain}
  */
  readonly certificateChain: string;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustFileToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustFileToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustFile | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustSds {
  /**
  * The certificate trust chain for a certificate issued via SDS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#secret_name DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustSdsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustSdsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustSds | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustSds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustSds | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrust {
  /**
  * A reference to an object that represents a TLS validation context trust for an AWS Certicate Manager (ACM) certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#acm DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#acm}
  */
  readonly acm?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustAcm;
  /**
  * An object that represents a TLS validation context trust for a local file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#file DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#file}
  */
  readonly file?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustFile;
  /**
  * An object that represents a TLS validation context trust for an SDS system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#sds DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#sds}
  */
  readonly sds?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustSds;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrust | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustAcmToTerraform(struct!.acm),
    file: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustFileToTerraform(struct!.file),
    sds: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustSdsToTerraform(struct!.sds),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrust | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acm: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustAcmToHclTerraform(struct!.acm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustAcm",
    },
    file: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustFile",
    },
    sds: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustSds",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrust | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrust | cdktf.IResolvable | undefined) {
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
  private _acm = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustAcmOutputReference(this, "acm");
  public get acm() {
    return this._acm;
  }
  public putAcm(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustAcm) {
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
  private _file = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustFile) {
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
  private _sds = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustSds) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidation {
  /**
  * Possible alternate names to consider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#subject_alternative_names DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNames;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#trust DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#trust}
  */
  readonly trust: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrust;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_alternative_names: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
    trust: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustToTerraform(struct!.trust),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subject_alternative_names: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesToHclTerraform(struct!.subjectAlternativeNames),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNames",
    },
    trust: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustToHclTerraform(struct!.trust),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrust",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidation | cdktf.IResolvable | undefined) {
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
  private _subjectAlternativeNames = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNamesOutputReference(this, "subject_alternative_names");
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames;
  }
  public putSubjectAlternativeNames(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationSubjectAlternativeNames) {
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
  private _trust = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrustOutputReference(this, "trust");
  public get trust() {
    return this._trust;
  }
  public putTrust(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationTrust) {
    this._trust.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTls {
  /**
  * A reference to an object that represents a listener's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#certificate DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#certificate}
  */
  readonly certificate: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificate;
  /**
  * ListenerTLS mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#mode DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#mode}
  */
  readonly mode: string;
  /**
  * A reference to an object that represents Validation context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#validation DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#validation}
  */
  readonly validation?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidation;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateToTerraform(struct!.certificate),
    mode: cdktf.stringToTerraform(struct!.mode),
    validation: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationToTerraform(struct!.validation),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificate",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTls | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTls | cdktf.IResolvable | undefined) {
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
  private _certificate = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsCertificate) {
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
  private _validation = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsValidation) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListeners {
  /**
  * The connection pool settings for the listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#connection_pool DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#connection_pool}
  */
  readonly connectionPool?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPool;
  /**
  * The health check information for the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#health_check DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#health_check}
  */
  readonly healthCheck?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersHealthCheck;
  /**
  * The port mapping information for the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#port_mapping DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#port_mapping}
  */
  readonly portMapping: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersPortMapping;
  /**
  * A reference to an object that represents the Transport Layer Security (TLS) properties for a listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#tls DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#tls}
  */
  readonly tls?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTls;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_pool: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolToTerraform(struct!.connectionPool),
    health_check: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersHealthCheckToTerraform(struct!.healthCheck),
    port_mapping: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersPortMappingToTerraform(struct!.portMapping),
    tls: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsToTerraform(struct!.tls),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_pool: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolToHclTerraform(struct!.connectionPool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPool",
    },
    health_check: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersHealthCheck",
    },
    port_mapping: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersPortMappingToHclTerraform(struct!.portMapping),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersPortMapping",
    },
    tls: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListeners | cdktf.IResolvable | undefined {
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
    if (this._portMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMapping = this._portMapping?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionPool.internalValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._portMapping.internalValue = undefined;
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
      this._portMapping.internalValue = value.portMapping;
      this._tls.internalValue = value.tls;
    }
  }

  // connection_pool - computed: false, optional: true, required: false
  private _connectionPool = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPoolOutputReference(this, "connection_pool");
  public get connectionPool() {
    return this._connectionPool;
  }
  public putConnectionPool(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersConnectionPool) {
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
  private _healthCheck = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // port_mapping - computed: false, optional: false, required: true
  private _portMapping = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersPortMappingOutputReference(this, "port_mapping");
  public get portMapping() {
    return this._portMapping;
  }
  public putPortMapping(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersPortMapping) {
    this._portMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingInput() {
    return this._portMapping.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersTls) {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListeners[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJson {
  /**
  * The name of the field in the JSON object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#key DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * The format string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJson | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJson | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJson | cdktf.IResolvable | undefined) {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJson[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormat {
  /**
  * Output specified fields as a JSON object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#json DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#json}
  */
  readonly json?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJson[] | cdktf.IResolvable;
  /**
  * Custom format string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#text DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonToTerraform, false)(struct!.json),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonToHclTerraform, false)(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonList",
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormat | cdktf.IResolvable | undefined) {
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
  private _json = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJsonList(this, "json", false);
  public get json() {
    return this._json;
  }
  public putJson(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatJson[] | cdktf.IResolvable) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFile {
  /**
  * Structured access log output format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#format DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#format}
  */
  readonly format?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormat;
  /**
  * The file path to write access logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#path DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#path}
  */
  readonly path: string;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatToTerraform(struct!.format),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormat",
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFile | cdktf.IResolvable | undefined) {
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
  private _format = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileFormat) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLog {
  /**
  * The file object to send virtual gateway access logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#file DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#file}
  */
  readonly file?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFile;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileToTerraform(struct!.file),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFile",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLog | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLog | cdktf.IResolvable | undefined) {
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
  private _file = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogFile) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLogging {
  /**
  * The access log configuration for a virtual Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#access_log DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#access_log}
  */
  readonly accessLog?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLog;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_log: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogToTerraform(struct!.accessLog),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_log: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogToHclTerraform(struct!.accessLog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLog",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLogging | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLogging | cdktf.IResolvable | undefined) {
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
  private _accessLog = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLogOutputReference(this, "access_log");
  public get accessLog() {
    return this._accessLog;
  }
  public putAccessLog(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingAccessLog) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecMeshRef {
  /**
  * Name is the name of Mesh CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * UID is the UID of Mesh CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#uid DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#uid}
  */
  readonly uid: string;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecMeshRefToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecMeshRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecMeshRefToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecMeshRef | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecMeshRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecMeshRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecMeshRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#key DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#operator DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#values DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#match_expressions DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#match_labels DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsList",
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#key DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#operator DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#values DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressionsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressionsOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#match_expressions DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#match_labels DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressionsList",
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

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpec {
  /**
  * AWSName is the AppMesh VirtualGateway object's name. If unspecified or empty, it defaults to be '${name}_${namespace}' of k8s VirtualGateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#aws_name DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#aws_name}
  */
  readonly awsName?: string;
  /**
  * A reference to an object that represents the defaults for backend GatewayRoutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#backend_defaults DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#backend_defaults}
  */
  readonly backendDefaults?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaults;
  /**
  * GatewayRouteSelector selects GatewayRoutes using labels to designate GatewayRoute membership. If not specified it selects all GatewayRoutes in that namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#gateway_route_selector DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#gateway_route_selector}
  */
  readonly gatewayRouteSelector?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelector;
  /**
  * The listener that the virtual gateway is expected to receive inbound traffic from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#listeners DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#listeners}
  */
  readonly listeners?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListeners[] | cdktf.IResolvable;
  /**
  * The inbound and outbound access logging information for the virtual gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#logging DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#logging}
  */
  readonly logging?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLogging;
  /**
  * A reference to k8s Mesh CR that this VirtualGateway belongs to. The admission controller populates it using Meshes's selector, and prevents users from setting this field. Populated by the system. Read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#mesh_ref DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#mesh_ref}
  */
  readonly meshRef?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecMeshRef;
  /**
  * NamespaceSelector selects Namespaces using labels to designate GatewayRoute membership. This field follows standard label selector semantics; if present but empty, it selects all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#namespace_selector DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelector;
  /**
  * PodSelector selects Pods using labels to designate VirtualGateway membership. This field follows standard label selector semantics: if present but empty, it selects all pods within namespace. if absent, it selects no pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#pod_selector DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelector;
}

export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_name: cdktf.stringToTerraform(struct!.awsName),
    backend_defaults: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsToTerraform(struct!.backendDefaults),
    gateway_route_selector: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorToTerraform(struct!.gatewayRouteSelector),
    listeners: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersToTerraform, false)(struct!.listeners),
    logging: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingToTerraform(struct!.logging),
    mesh_ref: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecMeshRefToTerraform(struct!.meshRef),
    namespace_selector: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorToTerraform(struct!.podSelector),
  }
}


export function dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpec | cdktf.IResolvable): any {
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
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsToHclTerraform(struct!.backendDefaults),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaults",
    },
    gateway_route_selector: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorToHclTerraform(struct!.gatewayRouteSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelector",
    },
    listeners: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersToHclTerraform, false)(struct!.listeners),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersList",
    },
    logging: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLogging",
    },
    mesh_ref: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecMeshRefToHclTerraform(struct!.meshRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecMeshRef",
    },
    namespace_selector: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelector",
    },
    pod_selector: {
      value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._gatewayRouteSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayRouteSelector = this._gatewayRouteSelector?.internalValue;
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
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsName = undefined;
      this._backendDefaults.internalValue = undefined;
      this._gatewayRouteSelector.internalValue = undefined;
      this._listeners.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._meshRef.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._podSelector.internalValue = undefined;
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
      this._gatewayRouteSelector.internalValue = value.gatewayRouteSelector;
      this._listeners.internalValue = value.listeners;
      this._logging.internalValue = value.logging;
      this._meshRef.internalValue = value.meshRef;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._podSelector.internalValue = value.podSelector;
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
  private _backendDefaults = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaultsOutputReference(this, "backend_defaults");
  public get backendDefaults() {
    return this._backendDefaults;
  }
  public putBackendDefaults(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecBackendDefaults) {
    this._backendDefaults.internalValue = value;
  }
  public resetBackendDefaults() {
    this._backendDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendDefaultsInput() {
    return this._backendDefaults.internalValue;
  }

  // gateway_route_selector - computed: false, optional: true, required: false
  private _gatewayRouteSelector = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelectorOutputReference(this, "gateway_route_selector");
  public get gatewayRouteSelector() {
    return this._gatewayRouteSelector;
  }
  public putGatewayRouteSelector(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecGatewayRouteSelector) {
    this._gatewayRouteSelector.internalValue = value;
  }
  public resetGatewayRouteSelector() {
    this._gatewayRouteSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayRouteSelectorInput() {
    return this._gatewayRouteSelector.internalValue;
  }

  // listeners - computed: false, optional: true, required: false
  private _listeners = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }
  public putListeners(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecListeners[] | cdktf.IResolvable) {
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
  private _logging = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecLogging) {
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
  private _meshRef = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecMeshRefOutputReference(this, "mesh_ref");
  public get meshRef() {
    return this._meshRef;
  }
  public putMeshRef(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecMeshRef) {
    this._meshRef.internalValue = value;
  }
  public resetMeshRef() {
    this._meshRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshRefInput() {
    return this._meshRef.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest k8s_appmesh_k8s_aws_virtual_gateway_v1beta2_manifest}
*/
export class DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_appmesh_k8s_aws_virtual_gateway_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_appmesh_k8s_aws_virtual_gateway_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_gateway_v1beta2_manifest k8s_appmesh_k8s_aws_virtual_gateway_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_appmesh_k8s_aws_virtual_gateway_v1beta2_manifest',
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
  private _metadata = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpec) {
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
      metadata: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppmeshK8SAwsVirtualGatewayV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
