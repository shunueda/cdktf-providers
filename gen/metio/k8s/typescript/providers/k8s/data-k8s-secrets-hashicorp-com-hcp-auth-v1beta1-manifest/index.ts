// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/secrets_hashicorp_com_hcp_auth_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/secrets_hashicorp_com_hcp_auth_v1beta1_manifest#metadata DataK8SSecretsHashicorpComHcpAuthV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestMetadata;
  /**
  * HCPAuthSpec defines the desired state of HCPAuth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/secrets_hashicorp_com_hcp_auth_v1beta1_manifest#spec DataK8SSecretsHashicorpComHcpAuthV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpec;
}
export interface DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/secrets_hashicorp_com_hcp_auth_v1beta1_manifest#annotations DataK8SSecretsHashicorpComHcpAuthV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/secrets_hashicorp_com_hcp_auth_v1beta1_manifest#labels DataK8SSecretsHashicorpComHcpAuthV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/secrets_hashicorp_com_hcp_auth_v1beta1_manifest#name DataK8SSecretsHashicorpComHcpAuthV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/secrets_hashicorp_com_hcp_auth_v1beta1_manifest#namespace DataK8SSecretsHashicorpComHcpAuthV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestMetadataToTerraform(struct?: DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecServicePrincipal {
  /**
  * SecretRef is the name of a Kubernetes secret in the consumer's (VDS/VSS/PKI/HCP) namespace which provides the HCP ServicePrincipal clientID, and clientSecret. The secret data must have the following structure { 'clientID': 'clientID', 'clientSecret': 'clientSecret', }
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/secrets_hashicorp_com_hcp_auth_v1beta1_manifest#secret_ref DataK8SSecretsHashicorpComHcpAuthV1Beta1Manifest#secret_ref}
  */
  readonly secretRef: string;
}

export function dataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecServicePrincipalToTerraform(struct?: DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecServicePrincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: cdktf.stringToTerraform(struct!.secretRef),
  }
}


export function dataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecServicePrincipalToHclTerraform(struct?: DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecServicePrincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: cdktf.stringToHclTerraform(struct!.secretRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecServicePrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecServicePrincipal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecServicePrincipal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef = value.secretRef;
    }
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef?: string; 
  public get secretRef() {
    return this.getStringAttribute('secret_ref');
  }
  public set secretRef(value: string) {
    this._secretRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef;
  }
}
export interface DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpec {
  /**
  * AllowedNamespaces Kubernetes Namespaces which are allow-listed for use with this AuthMethod. This field allows administrators to customize which Kubernetes namespaces are authorized to use with this AuthMethod. While Vault will still enforce its own rules, this has the added configurability of restricting which HCPAuthMethods can be used by which namespaces. Accepted values: []{'*'} - wildcard, all namespaces. []{'a', 'b'} - list of namespaces. unset - disallow all namespaces except the Operator's the HCPAuthMethod's namespace, this is the default behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/secrets_hashicorp_com_hcp_auth_v1beta1_manifest#allowed_namespaces DataK8SSecretsHashicorpComHcpAuthV1Beta1Manifest#allowed_namespaces}
  */
  readonly allowedNamespaces?: string[];
  /**
  * Method to use when authenticating to Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/secrets_hashicorp_com_hcp_auth_v1beta1_manifest#method DataK8SSecretsHashicorpComHcpAuthV1Beta1Manifest#method}
  */
  readonly method?: string;
  /**
  * OrganizationID of the HCP organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/secrets_hashicorp_com_hcp_auth_v1beta1_manifest#organization_id DataK8SSecretsHashicorpComHcpAuthV1Beta1Manifest#organization_id}
  */
  readonly organizationId: string;
  /**
  * ProjectID of the HCP project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/secrets_hashicorp_com_hcp_auth_v1beta1_manifest#project_id DataK8SSecretsHashicorpComHcpAuthV1Beta1Manifest#project_id}
  */
  readonly projectId: string;
  /**
  * ServicePrincipal provides the necessary configuration for authenticating to HCP using a service principal. For security reasons, only project-level service principals should ever be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/secrets_hashicorp_com_hcp_auth_v1beta1_manifest#service_principal DataK8SSecretsHashicorpComHcpAuthV1Beta1Manifest#service_principal}
  */
  readonly servicePrincipal?: DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecServicePrincipal;
}

export function dataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecToTerraform(struct?: DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedNamespaces),
    method: cdktf.stringToTerraform(struct!.method),
    organization_id: cdktf.stringToTerraform(struct!.organizationId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    service_principal: dataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecServicePrincipalToTerraform(struct!.servicePrincipal),
  }
}


export function dataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_principal: {
      value: dataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecServicePrincipalToHclTerraform(struct!.servicePrincipal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecServicePrincipal",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedNamespaces = this._allowedNamespaces;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._organizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationId = this._organizationId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._servicePrincipal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipal = this._servicePrincipal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedNamespaces = undefined;
      this._method = undefined;
      this._organizationId = undefined;
      this._projectId = undefined;
      this._servicePrincipal.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedNamespaces = value.allowedNamespaces;
      this._method = value.method;
      this._organizationId = value.organizationId;
      this._projectId = value.projectId;
      this._servicePrincipal.internalValue = value.servicePrincipal;
    }
  }

  // allowed_namespaces - computed: false, optional: true, required: false
  private _allowedNamespaces?: string[]; 
  public get allowedNamespaces() {
    return this.getListAttribute('allowed_namespaces');
  }
  public set allowedNamespaces(value: string[]) {
    this._allowedNamespaces = value;
  }
  public resetAllowedNamespaces() {
    this._allowedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedNamespacesInput() {
    return this._allowedNamespaces;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service_principal - computed: false, optional: true, required: false
  private _servicePrincipal = new DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecServicePrincipalOutputReference(this, "service_principal");
  public get servicePrincipal() {
    return this._servicePrincipal;
  }
  public putServicePrincipal(value: DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecServicePrincipal) {
    this._servicePrincipal.internalValue = value;
  }
  public resetServicePrincipal() {
    this._servicePrincipal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalInput() {
    return this._servicePrincipal.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/secrets_hashicorp_com_hcp_auth_v1beta1_manifest k8s_secrets_hashicorp_com_hcp_auth_v1beta1_manifest}
*/
export class DataK8SSecretsHashicorpComHcpAuthV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_secrets_hashicorp_com_hcp_auth_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecretsHashicorpComHcpAuthV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecretsHashicorpComHcpAuthV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SSecretsHashicorpComHcpAuthV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/secrets_hashicorp_com_hcp_auth_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecretsHashicorpComHcpAuthV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_secrets_hashicorp_com_hcp_auth_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/secrets_hashicorp_com_hcp_auth_v1beta1_manifest k8s_secrets_hashicorp_com_hcp_auth_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_secrets_hashicorp_com_hcp_auth_v1beta1_manifest',
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
  private _metadata = new DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpec) {
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
      metadata: dataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsHashicorpComHcpAuthV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
