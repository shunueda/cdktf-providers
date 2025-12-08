// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STfTungstenIoVrouterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#metadata DataK8STfTungstenIoVrouterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STfTungstenIoVrouterV1Alpha1ManifestMetadata;
  /**
  * VrouterSpec is the Spec for the vrouter API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#spec DataK8STfTungstenIoVrouterV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpec;
}
export interface DataK8STfTungstenIoVrouterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#annotations DataK8STfTungstenIoVrouterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#labels DataK8STfTungstenIoVrouterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#name DataK8STfTungstenIoVrouterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#namespace DataK8STfTungstenIoVrouterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STfTungstenIoVrouterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STfTungstenIoVrouterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STfTungstenIoVrouterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STfTungstenIoVrouterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STfTungstenIoVrouterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STfTungstenIoVrouterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STfTungstenIoVrouterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#address DataK8STfTungstenIoVrouterV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#admin_password DataK8STfTungstenIoVrouterV1Alpha1Manifest#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#admin_port DataK8STfTungstenIoVrouterV1Alpha1Manifest#admin_port}
  */
  readonly adminPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#admin_tenant DataK8STfTungstenIoVrouterV1Alpha1Manifest#admin_tenant}
  */
  readonly adminTenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#admin_username DataK8STfTungstenIoVrouterV1Alpha1Manifest#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#auth_protocol DataK8STfTungstenIoVrouterV1Alpha1Manifest#auth_protocol}
  */
  readonly authProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#insecure DataK8STfTungstenIoVrouterV1Alpha1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#port DataK8STfTungstenIoVrouterV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#project_domain_name DataK8STfTungstenIoVrouterV1Alpha1Manifest#project_domain_name}
  */
  readonly projectDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#region DataK8STfTungstenIoVrouterV1Alpha1Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#user_domain_name DataK8STfTungstenIoVrouterV1Alpha1Manifest#user_domain_name}
  */
  readonly userDomainName?: string;
}

export function dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParametersToTerraform(struct?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_port: cdktf.numberToTerraform(struct!.adminPort),
    admin_tenant: cdktf.stringToTerraform(struct!.adminTenant),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    auth_protocol: cdktf.stringToTerraform(struct!.authProtocol),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    port: cdktf.numberToTerraform(struct!.port),
    project_domain_name: cdktf.stringToTerraform(struct!.projectDomainName),
    region: cdktf.stringToTerraform(struct!.region),
    user_domain_name: cdktf.stringToTerraform(struct!.userDomainName),
  }
}


export function dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParametersToHclTerraform(struct?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParameters | cdktf.IResolvable): any {
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
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_port: {
      value: cdktf.numberToHclTerraform(struct!.adminPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    admin_tenant: {
      value: cdktf.stringToHclTerraform(struct!.adminTenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_protocol: {
      value: cdktf.stringToHclTerraform(struct!.authProtocol),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    project_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.projectDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.userDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._adminPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPort = this._adminPort;
    }
    if (this._adminTenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminTenant = this._adminTenant;
    }
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._authProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProtocol = this._authProtocol;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._projectDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectDomainName = this._projectDomainName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._userDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDomainName = this._userDomainName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._adminPassword = undefined;
      this._adminPort = undefined;
      this._adminTenant = undefined;
      this._adminUsername = undefined;
      this._authProtocol = undefined;
      this._insecure = undefined;
      this._port = undefined;
      this._projectDomainName = undefined;
      this._region = undefined;
      this._userDomainName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._adminPassword = value.adminPassword;
      this._adminPort = value.adminPort;
      this._adminTenant = value.adminTenant;
      this._adminUsername = value.adminUsername;
      this._authProtocol = value.authProtocol;
      this._insecure = value.insecure;
      this._port = value.port;
      this._projectDomainName = value.projectDomainName;
      this._region = value.region;
      this._userDomainName = value.userDomainName;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_port - computed: false, optional: true, required: false
  private _adminPort?: number; 
  public get adminPort() {
    return this.getNumberAttribute('admin_port');
  }
  public set adminPort(value: number) {
    this._adminPort = value;
  }
  public resetAdminPort() {
    this._adminPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPortInput() {
    return this._adminPort;
  }

  // admin_tenant - computed: false, optional: true, required: false
  private _adminTenant?: string; 
  public get adminTenant() {
    return this.getStringAttribute('admin_tenant');
  }
  public set adminTenant(value: string) {
    this._adminTenant = value;
  }
  public resetAdminTenant() {
    this._adminTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminTenantInput() {
    return this._adminTenant;
  }

  // admin_username - computed: false, optional: true, required: false
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  public resetAdminUsername() {
    this._adminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // auth_protocol - computed: false, optional: true, required: false
  private _authProtocol?: string; 
  public get authProtocol() {
    return this.getStringAttribute('auth_protocol');
  }
  public set authProtocol(value: string) {
    this._authProtocol = value;
  }
  public resetAuthProtocol() {
    this._authProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtocolInput() {
    return this._authProtocol;
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

  // project_domain_name - computed: false, optional: true, required: false
  private _projectDomainName?: string; 
  public get projectDomainName() {
    return this.getStringAttribute('project_domain_name');
  }
  public set projectDomainName(value: string) {
    this._projectDomainName = value;
  }
  public resetProjectDomainName() {
    this._projectDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectDomainNameInput() {
    return this._projectDomainName;
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

  // user_domain_name - computed: false, optional: true, required: false
  private _userDomainName?: string; 
  public get userDomainName() {
    return this.getStringAttribute('user_domain_name');
  }
  public set userDomainName(value: string) {
    this._userDomainName = value;
  }
  public resetUserDomainName() {
    this._userDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDomainNameInput() {
    return this._userDomainName;
  }
}
export interface DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParameters {
  /**
  * AuthenticationMode auth mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#auth_mode DataK8STfTungstenIoVrouterV1Alpha1Manifest#auth_mode}
  */
  readonly authMode?: string;
  /**
  * KeystoneAuthParameters keystone parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#keystone_auth_parameters DataK8STfTungstenIoVrouterV1Alpha1Manifest#keystone_auth_parameters}
  */
  readonly keystoneAuthParameters?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#keystone_secret_name DataK8STfTungstenIoVrouterV1Alpha1Manifest#keystone_secret_name}
  */
  readonly keystoneSecretName?: string;
}

export function dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersToTerraform(struct?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_mode: cdktf.stringToTerraform(struct!.authMode),
    keystone_auth_parameters: dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParametersToTerraform(struct!.keystoneAuthParameters),
    keystone_secret_name: cdktf.stringToTerraform(struct!.keystoneSecretName),
  }
}


export function dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersToHclTerraform(struct?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_mode: {
      value: cdktf.stringToHclTerraform(struct!.authMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keystone_auth_parameters: {
      value: dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParametersToHclTerraform(struct!.keystoneAuthParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParameters",
    },
    keystone_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.keystoneSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMode = this._authMode;
    }
    if (this._keystoneAuthParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoneAuthParameters = this._keystoneAuthParameters?.internalValue;
    }
    if (this._keystoneSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoneSecretName = this._keystoneSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMode = undefined;
      this._keystoneAuthParameters.internalValue = undefined;
      this._keystoneSecretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMode = value.authMode;
      this._keystoneAuthParameters.internalValue = value.keystoneAuthParameters;
      this._keystoneSecretName = value.keystoneSecretName;
    }
  }

  // auth_mode - computed: false, optional: true, required: false
  private _authMode?: string; 
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  public resetAuthMode() {
    this._authMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode;
  }

  // keystone_auth_parameters - computed: false, optional: true, required: false
  private _keystoneAuthParameters = new DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParametersOutputReference(this, "keystone_auth_parameters");
  public get keystoneAuthParameters() {
    return this._keystoneAuthParameters;
  }
  public putKeystoneAuthParameters(value: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParameters) {
    this._keystoneAuthParameters.internalValue = value;
  }
  public resetKeystoneAuthParameters() {
    this._keystoneAuthParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneAuthParametersInput() {
    return this._keystoneAuthParameters.internalValue;
  }

  // keystone_secret_name - computed: false, optional: true, required: false
  private _keystoneSecretName?: string; 
  public get keystoneSecretName() {
    return this.getStringAttribute('keystone_secret_name');
  }
  public set keystoneSecretName(value: string) {
    this._keystoneSecretName = value;
  }
  public resetKeystoneSecretName() {
    this._keystoneSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneSecretNameInput() {
    return this._keystoneSecretName;
  }
}
export interface DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#effect DataK8STfTungstenIoVrouterV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#key DataK8STfTungstenIoVrouterV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#operator DataK8STfTungstenIoVrouterV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#toleration_seconds DataK8STfTungstenIoVrouterV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#value DataK8STfTungstenIoVrouterV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerationsToTerraform(struct?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerations | cdktf.IResolvable): any {
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


export function dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerationsToHclTerraform(struct?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerations | cdktf.IResolvable): any {
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

export class DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerationsOutputReference {
    return new DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfiguration {
  /**
  * AuthParameters auth parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#auth_parameters DataK8STfTungstenIoVrouterV1Alpha1Manifest#auth_parameters}
  */
  readonly authParameters?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParameters;
  /**
  * OS family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#distribution DataK8STfTungstenIoVrouterV1Alpha1Manifest#distribution}
  */
  readonly distribution?: string;
  /**
  * ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#image_pull_secrets DataK8STfTungstenIoVrouterV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: string[];
  /**
  * Kubernetes Cluster Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#log_level DataK8STfTungstenIoVrouterV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#node_selector DataK8STfTungstenIoVrouterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * If specified, the pod's tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#tolerations DataK8STfTungstenIoVrouterV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerations[] | cdktf.IResolvable;
}

export function dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationToTerraform(struct?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_parameters: dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersToTerraform(struct!.authParameters),
    distribution: cdktf.stringToTerraform(struct!.distribution),
    image_pull_secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.imagePullSecrets),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    tolerations: cdktf.listMapper(dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationToHclTerraform(struct?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_parameters: {
      value: dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersToHclTerraform(struct!.authParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParameters",
    },
    distribution: {
      value: cdktf.stringToHclTerraform(struct!.distribution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authParameters = this._authParameters?.internalValue;
    }
    if (this._distribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribution = this._distribution;
    }
    if (this._imagePullSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
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

  public set internalValue(value: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authParameters.internalValue = undefined;
      this._distribution = undefined;
      this._imagePullSecrets = undefined;
      this._logLevel = undefined;
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
      this._authParameters.internalValue = value.authParameters;
      this._distribution = value.distribution;
      this._imagePullSecrets = value.imagePullSecrets;
      this._logLevel = value.logLevel;
      this._nodeSelector = value.nodeSelector;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // auth_parameters - computed: false, optional: true, required: false
  private _authParameters = new DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParametersOutputReference(this, "auth_parameters");
  public get authParameters() {
    return this._authParameters;
  }
  public putAuthParameters(value: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationAuthParameters) {
    this._authParameters.internalValue = value;
  }
  public resetAuthParameters() {
    this._authParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authParametersInput() {
    return this._authParameters.internalValue;
  }

  // distribution - computed: false, optional: true, required: false
  private _distribution?: string; 
  public get distribution() {
    return this.getStringAttribute('distribution');
  }
  public set distribution(value: string) {
    this._distribution = value;
  }
  public resetDistribution() {
    this._distribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets?: string[]; 
  public get imagePullSecrets() {
    return this.getListAttribute('image_pull_secrets');
  }
  public set imagePullSecrets(value: string[]) {
    this._imagePullSecrets = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
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
  private _tolerations = new DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationTolerations[] | cdktf.IResolvable) {
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
export interface DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#command DataK8STfTungstenIoVrouterV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#image DataK8STfTungstenIoVrouterV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#name DataK8STfTungstenIoVrouterV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainersToTerraform(struct?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainersToHclTerraform(struct?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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

export class DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._image = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._image = value.image;
      this._name = value.name;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
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

export class DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainersOutputReference {
    return new DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfiguration {
  /**
  * vRouter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#agent_mode DataK8STfTungstenIoVrouterV1Alpha1Manifest#agent_mode}
  */
  readonly agentMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#barbican_password DataK8STfTungstenIoVrouterV1Alpha1Manifest#barbican_password}
  */
  readonly barbicanPassword?: string;
  /**
  * Openstack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#barbican_tenant_name DataK8STfTungstenIoVrouterV1Alpha1Manifest#barbican_tenant_name}
  */
  readonly barbicanTenantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#barbican_user DataK8STfTungstenIoVrouterV1Alpha1Manifest#barbican_user}
  */
  readonly barbicanUser?: string;
  /**
  * New params for vrouter configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#cloud_orchestrator DataK8STfTungstenIoVrouterV1Alpha1Manifest#cloud_orchestrator}
  */
  readonly cloudOrchestrator?: string;
  /**
  * CniMTU - mtu for virtual tap devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#cni_mtu DataK8STfTungstenIoVrouterV1Alpha1Manifest#cni_mtu}
  */
  readonly cniMtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#collector_port DataK8STfTungstenIoVrouterV1Alpha1Manifest#collector_port}
  */
  readonly collectorPort?: string;
  /**
  * Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#config_api_port DataK8STfTungstenIoVrouterV1Alpha1Manifest#config_api_port}
  */
  readonly configApiPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#config_api_server_ca_certfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#config_api_server_ca_certfile}
  */
  readonly configApiServerCaCertfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#config_api_ssl_enable DataK8STfTungstenIoVrouterV1Alpha1Manifest#config_api_ssl_enable}
  */
  readonly configApiSslEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#containers DataK8STfTungstenIoVrouterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#control_instance DataK8STfTungstenIoVrouterV1Alpha1Manifest#control_instance}
  */
  readonly controlInstance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#data_subnet DataK8STfTungstenIoVrouterV1Alpha1Manifest#data_subnet}
  */
  readonly dataSubnet?: string;
  /**
  * DNS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#dns_server_port DataK8STfTungstenIoVrouterV1Alpha1Manifest#dns_server_port}
  */
  readonly dnsServerPort?: string;
  /**
  * Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#dpdk_uio_driver DataK8STfTungstenIoVrouterV1Alpha1Manifest#dpdk_uio_driver}
  */
  readonly dpdkUioDriver?: string;
  /**
  * What is it doing? VrouterEncryption bool 'json:'vrouterEncryption,omitempty'' What is it doing? What is it doing?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#env_variables_config DataK8STfTungstenIoVrouterV1Alpha1Manifest#env_variables_config}
  */
  readonly envVariablesConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#fabric_snt_hash_table_size DataK8STfTungstenIoVrouterV1Alpha1Manifest#fabric_snt_hash_table_size}
  */
  readonly fabricSntHashTableSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#huge_pages1_g DataK8STfTungstenIoVrouterV1Alpha1Manifest#huge_pages1_g}
  */
  readonly hugePages1G?: number;
  /**
  * HugePages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#huge_pages2_m DataK8STfTungstenIoVrouterV1Alpha1Manifest#huge_pages2_m}
  */
  readonly hugePages2M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#hypervisor_type DataK8STfTungstenIoVrouterV1Alpha1Manifest#hypervisor_type}
  */
  readonly hypervisorType?: string;
  /**
  * Introspect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#introspect_ssl_enable DataK8STfTungstenIoVrouterV1Alpha1Manifest#introspect_ssl_enable}
  */
  readonly introspectSslEnable?: boolean | cdktf.IResolvable;
  /**
  * Kubernetes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#k8s_token DataK8STfTungstenIoVrouterV1Alpha1Manifest#k8s_token}
  */
  readonly k8SToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#k8s_token_file DataK8STfTungstenIoVrouterV1Alpha1Manifest#k8s_token_file}
  */
  readonly k8STokenFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#keystone_auth_admin_password DataK8STfTungstenIoVrouterV1Alpha1Manifest#keystone_auth_admin_password}
  */
  readonly keystoneAuthAdminPassword?: string;
  /**
  * Keystone authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#keystone_auth_admin_port DataK8STfTungstenIoVrouterV1Alpha1Manifest#keystone_auth_admin_port}
  */
  readonly keystoneAuthAdminPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#keystone_auth_ca_certfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#keystone_auth_ca_certfile}
  */
  readonly keystoneAuthCaCertfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#keystone_auth_certfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#keystone_auth_certfile}
  */
  readonly keystoneAuthCertfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#keystone_auth_host DataK8STfTungstenIoVrouterV1Alpha1Manifest#keystone_auth_host}
  */
  readonly keystoneAuthHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#keystone_auth_insecure DataK8STfTungstenIoVrouterV1Alpha1Manifest#keystone_auth_insecure}
  */
  readonly keystoneAuthInsecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#keystone_auth_keyfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#keystone_auth_keyfile}
  */
  readonly keystoneAuthKeyfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#keystone_auth_project_domain_name DataK8STfTungstenIoVrouterV1Alpha1Manifest#keystone_auth_project_domain_name}
  */
  readonly keystoneAuthProjectDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#keystone_auth_proto DataK8STfTungstenIoVrouterV1Alpha1Manifest#keystone_auth_proto}
  */
  readonly keystoneAuthProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#keystone_auth_region_name DataK8STfTungstenIoVrouterV1Alpha1Manifest#keystone_auth_region_name}
  */
  readonly keystoneAuthRegionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#keystone_auth_url_tokens DataK8STfTungstenIoVrouterV1Alpha1Manifest#keystone_auth_url_tokens}
  */
  readonly keystoneAuthUrlTokens?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#keystone_auth_url_version DataK8STfTungstenIoVrouterV1Alpha1Manifest#keystone_auth_url_version}
  */
  readonly keystoneAuthUrlVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#keystone_auth_user_domain_name DataK8STfTungstenIoVrouterV1Alpha1Manifest#keystone_auth_user_domain_name}
  */
  readonly keystoneAuthUserDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#kubernetes_api_port DataK8STfTungstenIoVrouterV1Alpha1Manifest#kubernetes_api_port}
  */
  readonly kubernetesApiPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#kubernetes_api_secure_port DataK8STfTungstenIoVrouterV1Alpha1Manifest#kubernetes_api_secure_port}
  */
  readonly kubernetesApiSecurePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#kubernetes_pod_subnet DataK8STfTungstenIoVrouterV1Alpha1Manifest#kubernetes_pod_subnet}
  */
  readonly kubernetesPodSubnet?: string;
  /**
  * L3MH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#l3mh_cidr DataK8STfTungstenIoVrouterV1Alpha1Manifest#l3mh_cidr}
  */
  readonly l3MhCidr?: string;
  /**
  * Logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#log_dir DataK8STfTungstenIoVrouterV1Alpha1Manifest#log_dir}
  */
  readonly logDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#log_local DataK8STfTungstenIoVrouterV1Alpha1Manifest#log_local}
  */
  readonly logLocal?: number;
  /**
  * Metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#metadata_proxy_secret DataK8STfTungstenIoVrouterV1Alpha1Manifest#metadata_proxy_secret}
  */
  readonly metadataProxySecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#metadata_ssl_ca_certfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#metadata_ssl_ca_certfile}
  */
  readonly metadataSslCaCertfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#metadata_ssl_cert_type DataK8STfTungstenIoVrouterV1Alpha1Manifest#metadata_ssl_cert_type}
  */
  readonly metadataSslCertType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#metadata_ssl_certfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#metadata_ssl_certfile}
  */
  readonly metadataSslCertfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#metadata_ssl_enable DataK8STfTungstenIoVrouterV1Alpha1Manifest#metadata_ssl_enable}
  */
  readonly metadataSslEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#metadata_ssl_keyfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#metadata_ssl_keyfile}
  */
  readonly metadataSslKeyfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#physical_interface DataK8STfTungstenIoVrouterV1Alpha1Manifest#physical_interface}
  */
  readonly physicalInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#priority_bandwidth DataK8STfTungstenIoVrouterV1Alpha1Manifest#priority_bandwidth}
  */
  readonly priorityBandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#priority_id DataK8STfTungstenIoVrouterV1Alpha1Manifest#priority_id}
  */
  readonly priorityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#priority_scheduling DataK8STfTungstenIoVrouterV1Alpha1Manifest#priority_scheduling}
  */
  readonly priorityScheduling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#priority_tagging DataK8STfTungstenIoVrouterV1Alpha1Manifest#priority_tagging}
  */
  readonly priorityTagging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#qos_def_hw_queue DataK8STfTungstenIoVrouterV1Alpha1Manifest#qos_def_hw_queue}
  */
  readonly qosDefHwQueue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#qos_logical_queues DataK8STfTungstenIoVrouterV1Alpha1Manifest#qos_logical_queues}
  */
  readonly qosLogicalQueues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#qos_queue_id DataK8STfTungstenIoVrouterV1Alpha1Manifest#qos_queue_id}
  */
  readonly qosQueueId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#required_kernel_vrouter_encryption DataK8STfTungstenIoVrouterV1Alpha1Manifest#required_kernel_vrouter_encryption}
  */
  readonly requiredKernelVrouterEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#sample_destination DataK8STfTungstenIoVrouterV1Alpha1Manifest#sample_destination}
  */
  readonly sampleDestination?: string;
  /**
  * Sandesh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#sandesh_ca_certfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#sandesh_ca_certfile}
  */
  readonly sandeshCaCertfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#sandesh_certfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#sandesh_certfile}
  */
  readonly sandeshCertfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#sandesh_keyfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#sandesh_keyfile}
  */
  readonly sandeshKeyfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#sandesh_server_certfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#sandesh_server_certfile}
  */
  readonly sandeshServerCertfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#sandesh_server_keyfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#sandesh_server_keyfile}
  */
  readonly sandeshServerKeyfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#sandesh_ssl_enable DataK8STfTungstenIoVrouterV1Alpha1Manifest#sandesh_ssl_enable}
  */
  readonly sandeshSslEnable?: boolean | cdktf.IResolvable;
  /**
  * Server SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#server_ca_certfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#server_ca_certfile}
  */
  readonly serverCaCertfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#server_certfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#server_certfile}
  */
  readonly serverCertfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#server_keyfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#server_keyfile}
  */
  readonly serverKeyfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#slo_destination DataK8STfTungstenIoVrouterV1Alpha1Manifest#slo_destination}
  */
  readonly sloDestination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#sriov_physical_interface DataK8STfTungstenIoVrouterV1Alpha1Manifest#sriov_physical_interface}
  */
  readonly sriovPhysicalInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#sriov_physical_network DataK8STfTungstenIoVrouterV1Alpha1Manifest#sriov_physical_network}
  */
  readonly sriovPhysicalNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#sriov_vf DataK8STfTungstenIoVrouterV1Alpha1Manifest#sriov_vf}
  */
  readonly sriovVf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#ssl_enable DataK8STfTungstenIoVrouterV1Alpha1Manifest#ssl_enable}
  */
  readonly sslEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#ssl_insecure DataK8STfTungstenIoVrouterV1Alpha1Manifest#ssl_insecure}
  */
  readonly sslInsecure?: boolean | cdktf.IResolvable;
  /**
  * Collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#stats_collector_destination_path DataK8STfTungstenIoVrouterV1Alpha1Manifest#stats_collector_destination_path}
  */
  readonly statsCollectorDestinationPath?: string;
  /**
  * XMPP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#subcluster DataK8STfTungstenIoVrouterV1Alpha1Manifest#subcluster}
  */
  readonly subcluster?: string;
  /**
  * TSN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#tsn_agent_mode DataK8STfTungstenIoVrouterV1Alpha1Manifest#tsn_agent_mode}
  */
  readonly tsnAgentMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#vrouter_crypt_interface DataK8STfTungstenIoVrouterV1Alpha1Manifest#vrouter_crypt_interface}
  */
  readonly vrouterCryptInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#vrouter_decrypt_interface DataK8STfTungstenIoVrouterV1Alpha1Manifest#vrouter_decrypt_interface}
  */
  readonly vrouterDecryptInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#vrouter_decrypt_key DataK8STfTungstenIoVrouterV1Alpha1Manifest#vrouter_decrypt_key}
  */
  readonly vrouterDecryptKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#vrouter_encryption DataK8STfTungstenIoVrouterV1Alpha1Manifest#vrouter_encryption}
  */
  readonly vrouterEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#vrouter_gateway DataK8STfTungstenIoVrouterV1Alpha1Manifest#vrouter_gateway}
  */
  readonly vrouterGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#xmmp_ssl_enable DataK8STfTungstenIoVrouterV1Alpha1Manifest#xmmp_ssl_enable}
  */
  readonly xmmpSslEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#xmpp_server_ca_certfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#xmpp_server_ca_certfile}
  */
  readonly xmppServerCaCertfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#xmpp_server_certfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#xmpp_server_certfile}
  */
  readonly xmppServerCertfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#xmpp_server_keyfile DataK8STfTungstenIoVrouterV1Alpha1Manifest#xmpp_server_keyfile}
  */
  readonly xmppServerKeyfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#xmpp_server_port DataK8STfTungstenIoVrouterV1Alpha1Manifest#xmpp_server_port}
  */
  readonly xmppServerPort?: string;
}

export function dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationToTerraform(struct?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_mode: cdktf.stringToTerraform(struct!.agentMode),
    barbican_password: cdktf.stringToTerraform(struct!.barbicanPassword),
    barbican_tenant_name: cdktf.stringToTerraform(struct!.barbicanTenantName),
    barbican_user: cdktf.stringToTerraform(struct!.barbicanUser),
    cloud_orchestrator: cdktf.stringToTerraform(struct!.cloudOrchestrator),
    cni_mtu: cdktf.numberToTerraform(struct!.cniMtu),
    collector_port: cdktf.stringToTerraform(struct!.collectorPort),
    config_api_port: cdktf.stringToTerraform(struct!.configApiPort),
    config_api_server_ca_certfile: cdktf.stringToTerraform(struct!.configApiServerCaCertfile),
    config_api_ssl_enable: cdktf.booleanToTerraform(struct!.configApiSslEnable),
    containers: cdktf.listMapper(dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainersToTerraform, false)(struct!.containers),
    control_instance: cdktf.stringToTerraform(struct!.controlInstance),
    data_subnet: cdktf.stringToTerraform(struct!.dataSubnet),
    dns_server_port: cdktf.stringToTerraform(struct!.dnsServerPort),
    dpdk_uio_driver: cdktf.stringToTerraform(struct!.dpdkUioDriver),
    env_variables_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envVariablesConfig),
    fabric_snt_hash_table_size: cdktf.stringToTerraform(struct!.fabricSntHashTableSize),
    huge_pages1_g: cdktf.numberToTerraform(struct!.hugePages1G),
    huge_pages2_m: cdktf.numberToTerraform(struct!.hugePages2M),
    hypervisor_type: cdktf.stringToTerraform(struct!.hypervisorType),
    introspect_ssl_enable: cdktf.booleanToTerraform(struct!.introspectSslEnable),
    k8s_token: cdktf.stringToTerraform(struct!.k8SToken),
    k8s_token_file: cdktf.stringToTerraform(struct!.k8STokenFile),
    keystone_auth_admin_password: cdktf.stringToTerraform(struct!.keystoneAuthAdminPassword),
    keystone_auth_admin_port: cdktf.stringToTerraform(struct!.keystoneAuthAdminPort),
    keystone_auth_ca_certfile: cdktf.stringToTerraform(struct!.keystoneAuthCaCertfile),
    keystone_auth_certfile: cdktf.stringToTerraform(struct!.keystoneAuthCertfile),
    keystone_auth_host: cdktf.stringToTerraform(struct!.keystoneAuthHost),
    keystone_auth_insecure: cdktf.booleanToTerraform(struct!.keystoneAuthInsecure),
    keystone_auth_keyfile: cdktf.stringToTerraform(struct!.keystoneAuthKeyfile),
    keystone_auth_project_domain_name: cdktf.stringToTerraform(struct!.keystoneAuthProjectDomainName),
    keystone_auth_proto: cdktf.stringToTerraform(struct!.keystoneAuthProto),
    keystone_auth_region_name: cdktf.stringToTerraform(struct!.keystoneAuthRegionName),
    keystone_auth_url_tokens: cdktf.stringToTerraform(struct!.keystoneAuthUrlTokens),
    keystone_auth_url_version: cdktf.stringToTerraform(struct!.keystoneAuthUrlVersion),
    keystone_auth_user_domain_name: cdktf.stringToTerraform(struct!.keystoneAuthUserDomainName),
    kubernetes_api_port: cdktf.stringToTerraform(struct!.kubernetesApiPort),
    kubernetes_api_secure_port: cdktf.stringToTerraform(struct!.kubernetesApiSecurePort),
    kubernetes_pod_subnet: cdktf.stringToTerraform(struct!.kubernetesPodSubnet),
    l3mh_cidr: cdktf.stringToTerraform(struct!.l3MhCidr),
    log_dir: cdktf.stringToTerraform(struct!.logDir),
    log_local: cdktf.numberToTerraform(struct!.logLocal),
    metadata_proxy_secret: cdktf.stringToTerraform(struct!.metadataProxySecret),
    metadata_ssl_ca_certfile: cdktf.stringToTerraform(struct!.metadataSslCaCertfile),
    metadata_ssl_cert_type: cdktf.stringToTerraform(struct!.metadataSslCertType),
    metadata_ssl_certfile: cdktf.stringToTerraform(struct!.metadataSslCertfile),
    metadata_ssl_enable: cdktf.stringToTerraform(struct!.metadataSslEnable),
    metadata_ssl_keyfile: cdktf.stringToTerraform(struct!.metadataSslKeyfile),
    physical_interface: cdktf.stringToTerraform(struct!.physicalInterface),
    priority_bandwidth: cdktf.stringToTerraform(struct!.priorityBandwidth),
    priority_id: cdktf.stringToTerraform(struct!.priorityId),
    priority_scheduling: cdktf.stringToTerraform(struct!.priorityScheduling),
    priority_tagging: cdktf.booleanToTerraform(struct!.priorityTagging),
    qos_def_hw_queue: cdktf.booleanToTerraform(struct!.qosDefHwQueue),
    qos_logical_queues: cdktf.stringToTerraform(struct!.qosLogicalQueues),
    qos_queue_id: cdktf.stringToTerraform(struct!.qosQueueId),
    required_kernel_vrouter_encryption: cdktf.stringToTerraform(struct!.requiredKernelVrouterEncryption),
    sample_destination: cdktf.stringToTerraform(struct!.sampleDestination),
    sandesh_ca_certfile: cdktf.stringToTerraform(struct!.sandeshCaCertfile),
    sandesh_certfile: cdktf.stringToTerraform(struct!.sandeshCertfile),
    sandesh_keyfile: cdktf.stringToTerraform(struct!.sandeshKeyfile),
    sandesh_server_certfile: cdktf.stringToTerraform(struct!.sandeshServerCertfile),
    sandesh_server_keyfile: cdktf.stringToTerraform(struct!.sandeshServerKeyfile),
    sandesh_ssl_enable: cdktf.booleanToTerraform(struct!.sandeshSslEnable),
    server_ca_certfile: cdktf.stringToTerraform(struct!.serverCaCertfile),
    server_certfile: cdktf.stringToTerraform(struct!.serverCertfile),
    server_keyfile: cdktf.stringToTerraform(struct!.serverKeyfile),
    slo_destination: cdktf.stringToTerraform(struct!.sloDestination),
    sriov_physical_interface: cdktf.stringToTerraform(struct!.sriovPhysicalInterface),
    sriov_physical_network: cdktf.stringToTerraform(struct!.sriovPhysicalNetwork),
    sriov_vf: cdktf.stringToTerraform(struct!.sriovVf),
    ssl_enable: cdktf.booleanToTerraform(struct!.sslEnable),
    ssl_insecure: cdktf.booleanToTerraform(struct!.sslInsecure),
    stats_collector_destination_path: cdktf.stringToTerraform(struct!.statsCollectorDestinationPath),
    subcluster: cdktf.stringToTerraform(struct!.subcluster),
    tsn_agent_mode: cdktf.stringToTerraform(struct!.tsnAgentMode),
    vrouter_crypt_interface: cdktf.stringToTerraform(struct!.vrouterCryptInterface),
    vrouter_decrypt_interface: cdktf.stringToTerraform(struct!.vrouterDecryptInterface),
    vrouter_decrypt_key: cdktf.stringToTerraform(struct!.vrouterDecryptKey),
    vrouter_encryption: cdktf.booleanToTerraform(struct!.vrouterEncryption),
    vrouter_gateway: cdktf.stringToTerraform(struct!.vrouterGateway),
    xmmp_ssl_enable: cdktf.booleanToTerraform(struct!.xmmpSslEnable),
    xmpp_server_ca_certfile: cdktf.stringToTerraform(struct!.xmppServerCaCertfile),
    xmpp_server_certfile: cdktf.stringToTerraform(struct!.xmppServerCertfile),
    xmpp_server_keyfile: cdktf.stringToTerraform(struct!.xmppServerKeyfile),
    xmpp_server_port: cdktf.stringToTerraform(struct!.xmppServerPort),
  }
}


export function dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationToHclTerraform(struct?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_mode: {
      value: cdktf.stringToHclTerraform(struct!.agentMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    barbican_password: {
      value: cdktf.stringToHclTerraform(struct!.barbicanPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    barbican_tenant_name: {
      value: cdktf.stringToHclTerraform(struct!.barbicanTenantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    barbican_user: {
      value: cdktf.stringToHclTerraform(struct!.barbicanUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_orchestrator: {
      value: cdktf.stringToHclTerraform(struct!.cloudOrchestrator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cni_mtu: {
      value: cdktf.numberToHclTerraform(struct!.cniMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collector_port: {
      value: cdktf.stringToHclTerraform(struct!.collectorPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_api_port: {
      value: cdktf.stringToHclTerraform(struct!.configApiPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_api_server_ca_certfile: {
      value: cdktf.stringToHclTerraform(struct!.configApiServerCaCertfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_api_ssl_enable: {
      value: cdktf.booleanToHclTerraform(struct!.configApiSslEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    containers: {
      value: cdktf.listMapperHcl(dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainersList",
    },
    control_instance: {
      value: cdktf.stringToHclTerraform(struct!.controlInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_subnet: {
      value: cdktf.stringToHclTerraform(struct!.dataSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server_port: {
      value: cdktf.stringToHclTerraform(struct!.dnsServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dpdk_uio_driver: {
      value: cdktf.stringToHclTerraform(struct!.dpdkUioDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env_variables_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envVariablesConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    fabric_snt_hash_table_size: {
      value: cdktf.stringToHclTerraform(struct!.fabricSntHashTableSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    huge_pages1_g: {
      value: cdktf.numberToHclTerraform(struct!.hugePages1G),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    huge_pages2_m: {
      value: cdktf.numberToHclTerraform(struct!.hugePages2M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hypervisor_type: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    introspect_ssl_enable: {
      value: cdktf.booleanToHclTerraform(struct!.introspectSslEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    k8s_token: {
      value: cdktf.stringToHclTerraform(struct!.k8SToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    k8s_token_file: {
      value: cdktf.stringToHclTerraform(struct!.k8STokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keystone_auth_admin_password: {
      value: cdktf.stringToHclTerraform(struct!.keystoneAuthAdminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keystone_auth_admin_port: {
      value: cdktf.stringToHclTerraform(struct!.keystoneAuthAdminPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keystone_auth_ca_certfile: {
      value: cdktf.stringToHclTerraform(struct!.keystoneAuthCaCertfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keystone_auth_certfile: {
      value: cdktf.stringToHclTerraform(struct!.keystoneAuthCertfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keystone_auth_host: {
      value: cdktf.stringToHclTerraform(struct!.keystoneAuthHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keystone_auth_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.keystoneAuthInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keystone_auth_keyfile: {
      value: cdktf.stringToHclTerraform(struct!.keystoneAuthKeyfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keystone_auth_project_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.keystoneAuthProjectDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keystone_auth_proto: {
      value: cdktf.stringToHclTerraform(struct!.keystoneAuthProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keystone_auth_region_name: {
      value: cdktf.stringToHclTerraform(struct!.keystoneAuthRegionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keystone_auth_url_tokens: {
      value: cdktf.stringToHclTerraform(struct!.keystoneAuthUrlTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keystone_auth_url_version: {
      value: cdktf.stringToHclTerraform(struct!.keystoneAuthUrlVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keystone_auth_user_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.keystoneAuthUserDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_api_port: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesApiPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_api_secure_port: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesApiSecurePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_pod_subnet: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesPodSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l3mh_cidr: {
      value: cdktf.stringToHclTerraform(struct!.l3MhCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_dir: {
      value: cdktf.stringToHclTerraform(struct!.logDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_local: {
      value: cdktf.numberToHclTerraform(struct!.logLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metadata_proxy_secret: {
      value: cdktf.stringToHclTerraform(struct!.metadataProxySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_ssl_ca_certfile: {
      value: cdktf.stringToHclTerraform(struct!.metadataSslCaCertfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_ssl_cert_type: {
      value: cdktf.stringToHclTerraform(struct!.metadataSslCertType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_ssl_certfile: {
      value: cdktf.stringToHclTerraform(struct!.metadataSslCertfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_ssl_enable: {
      value: cdktf.stringToHclTerraform(struct!.metadataSslEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_ssl_keyfile: {
      value: cdktf.stringToHclTerraform(struct!.metadataSslKeyfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    physical_interface: {
      value: cdktf.stringToHclTerraform(struct!.physicalInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_bandwidth: {
      value: cdktf.stringToHclTerraform(struct!.priorityBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_id: {
      value: cdktf.stringToHclTerraform(struct!.priorityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_scheduling: {
      value: cdktf.stringToHclTerraform(struct!.priorityScheduling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_tagging: {
      value: cdktf.booleanToHclTerraform(struct!.priorityTagging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qos_def_hw_queue: {
      value: cdktf.booleanToHclTerraform(struct!.qosDefHwQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qos_logical_queues: {
      value: cdktf.stringToHclTerraform(struct!.qosLogicalQueues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_queue_id: {
      value: cdktf.stringToHclTerraform(struct!.qosQueueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_kernel_vrouter_encryption: {
      value: cdktf.stringToHclTerraform(struct!.requiredKernelVrouterEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_destination: {
      value: cdktf.stringToHclTerraform(struct!.sampleDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sandesh_ca_certfile: {
      value: cdktf.stringToHclTerraform(struct!.sandeshCaCertfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sandesh_certfile: {
      value: cdktf.stringToHclTerraform(struct!.sandeshCertfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sandesh_keyfile: {
      value: cdktf.stringToHclTerraform(struct!.sandeshKeyfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sandesh_server_certfile: {
      value: cdktf.stringToHclTerraform(struct!.sandeshServerCertfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sandesh_server_keyfile: {
      value: cdktf.stringToHclTerraform(struct!.sandeshServerKeyfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sandesh_ssl_enable: {
      value: cdktf.booleanToHclTerraform(struct!.sandeshSslEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_ca_certfile: {
      value: cdktf.stringToHclTerraform(struct!.serverCaCertfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_certfile: {
      value: cdktf.stringToHclTerraform(struct!.serverCertfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_keyfile: {
      value: cdktf.stringToHclTerraform(struct!.serverKeyfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo_destination: {
      value: cdktf.stringToHclTerraform(struct!.sloDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sriov_physical_interface: {
      value: cdktf.stringToHclTerraform(struct!.sriovPhysicalInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sriov_physical_network: {
      value: cdktf.stringToHclTerraform(struct!.sriovPhysicalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sriov_vf: {
      value: cdktf.stringToHclTerraform(struct!.sriovVf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_enable: {
      value: cdktf.booleanToHclTerraform(struct!.sslEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.sslInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stats_collector_destination_path: {
      value: cdktf.stringToHclTerraform(struct!.statsCollectorDestinationPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subcluster: {
      value: cdktf.stringToHclTerraform(struct!.subcluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsn_agent_mode: {
      value: cdktf.stringToHclTerraform(struct!.tsnAgentMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrouter_crypt_interface: {
      value: cdktf.stringToHclTerraform(struct!.vrouterCryptInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrouter_decrypt_interface: {
      value: cdktf.stringToHclTerraform(struct!.vrouterDecryptInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrouter_decrypt_key: {
      value: cdktf.stringToHclTerraform(struct!.vrouterDecryptKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrouter_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.vrouterEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vrouter_gateway: {
      value: cdktf.stringToHclTerraform(struct!.vrouterGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xmmp_ssl_enable: {
      value: cdktf.booleanToHclTerraform(struct!.xmmpSslEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xmpp_server_ca_certfile: {
      value: cdktf.stringToHclTerraform(struct!.xmppServerCaCertfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xmpp_server_certfile: {
      value: cdktf.stringToHclTerraform(struct!.xmppServerCertfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xmpp_server_keyfile: {
      value: cdktf.stringToHclTerraform(struct!.xmppServerKeyfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xmpp_server_port: {
      value: cdktf.stringToHclTerraform(struct!.xmppServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentMode = this._agentMode;
    }
    if (this._barbicanPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.barbicanPassword = this._barbicanPassword;
    }
    if (this._barbicanTenantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.barbicanTenantName = this._barbicanTenantName;
    }
    if (this._barbicanUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.barbicanUser = this._barbicanUser;
    }
    if (this._cloudOrchestrator !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudOrchestrator = this._cloudOrchestrator;
    }
    if (this._cniMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cniMtu = this._cniMtu;
    }
    if (this._collectorPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorPort = this._collectorPort;
    }
    if (this._configApiPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.configApiPort = this._configApiPort;
    }
    if (this._configApiServerCaCertfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.configApiServerCaCertfile = this._configApiServerCaCertfile;
    }
    if (this._configApiSslEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.configApiSslEnable = this._configApiSslEnable;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._controlInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlInstance = this._controlInstance;
    }
    if (this._dataSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSubnet = this._dataSubnet;
    }
    if (this._dnsServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerPort = this._dnsServerPort;
    }
    if (this._dpdkUioDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpdkUioDriver = this._dpdkUioDriver;
    }
    if (this._envVariablesConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVariablesConfig = this._envVariablesConfig;
    }
    if (this._fabricSntHashTableSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fabricSntHashTableSize = this._fabricSntHashTableSize;
    }
    if (this._hugePages1G !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugePages1G = this._hugePages1G;
    }
    if (this._hugePages2M !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugePages2M = this._hugePages2M;
    }
    if (this._hypervisorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorType = this._hypervisorType;
    }
    if (this._introspectSslEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectSslEnable = this._introspectSslEnable;
    }
    if (this._k8SToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SToken = this._k8SToken;
    }
    if (this._k8STokenFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8STokenFile = this._k8STokenFile;
    }
    if (this._keystoneAuthAdminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoneAuthAdminPassword = this._keystoneAuthAdminPassword;
    }
    if (this._keystoneAuthAdminPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoneAuthAdminPort = this._keystoneAuthAdminPort;
    }
    if (this._keystoneAuthCaCertfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoneAuthCaCertfile = this._keystoneAuthCaCertfile;
    }
    if (this._keystoneAuthCertfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoneAuthCertfile = this._keystoneAuthCertfile;
    }
    if (this._keystoneAuthHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoneAuthHost = this._keystoneAuthHost;
    }
    if (this._keystoneAuthInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoneAuthInsecure = this._keystoneAuthInsecure;
    }
    if (this._keystoneAuthKeyfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoneAuthKeyfile = this._keystoneAuthKeyfile;
    }
    if (this._keystoneAuthProjectDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoneAuthProjectDomainName = this._keystoneAuthProjectDomainName;
    }
    if (this._keystoneAuthProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoneAuthProto = this._keystoneAuthProto;
    }
    if (this._keystoneAuthRegionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoneAuthRegionName = this._keystoneAuthRegionName;
    }
    if (this._keystoneAuthUrlTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoneAuthUrlTokens = this._keystoneAuthUrlTokens;
    }
    if (this._keystoneAuthUrlVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoneAuthUrlVersion = this._keystoneAuthUrlVersion;
    }
    if (this._keystoneAuthUserDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoneAuthUserDomainName = this._keystoneAuthUserDomainName;
    }
    if (this._kubernetesApiPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesApiPort = this._kubernetesApiPort;
    }
    if (this._kubernetesApiSecurePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesApiSecurePort = this._kubernetesApiSecurePort;
    }
    if (this._kubernetesPodSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesPodSubnet = this._kubernetesPodSubnet;
    }
    if (this._l3MhCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3MhCidr = this._l3MhCidr;
    }
    if (this._logDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDir = this._logDir;
    }
    if (this._logLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLocal = this._logLocal;
    }
    if (this._metadataProxySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataProxySecret = this._metadataProxySecret;
    }
    if (this._metadataSslCaCertfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSslCaCertfile = this._metadataSslCaCertfile;
    }
    if (this._metadataSslCertType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSslCertType = this._metadataSslCertType;
    }
    if (this._metadataSslCertfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSslCertfile = this._metadataSslCertfile;
    }
    if (this._metadataSslEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSslEnable = this._metadataSslEnable;
    }
    if (this._metadataSslKeyfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSslKeyfile = this._metadataSslKeyfile;
    }
    if (this._physicalInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalInterface = this._physicalInterface;
    }
    if (this._priorityBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityBandwidth = this._priorityBandwidth;
    }
    if (this._priorityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityId = this._priorityId;
    }
    if (this._priorityScheduling !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityScheduling = this._priorityScheduling;
    }
    if (this._priorityTagging !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityTagging = this._priorityTagging;
    }
    if (this._qosDefHwQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosDefHwQueue = this._qosDefHwQueue;
    }
    if (this._qosLogicalQueues !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosLogicalQueues = this._qosLogicalQueues;
    }
    if (this._qosQueueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosQueueId = this._qosQueueId;
    }
    if (this._requiredKernelVrouterEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredKernelVrouterEncryption = this._requiredKernelVrouterEncryption;
    }
    if (this._sampleDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleDestination = this._sampleDestination;
    }
    if (this._sandeshCaCertfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandeshCaCertfile = this._sandeshCaCertfile;
    }
    if (this._sandeshCertfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandeshCertfile = this._sandeshCertfile;
    }
    if (this._sandeshKeyfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandeshKeyfile = this._sandeshKeyfile;
    }
    if (this._sandeshServerCertfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandeshServerCertfile = this._sandeshServerCertfile;
    }
    if (this._sandeshServerKeyfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandeshServerKeyfile = this._sandeshServerKeyfile;
    }
    if (this._sandeshSslEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandeshSslEnable = this._sandeshSslEnable;
    }
    if (this._serverCaCertfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCaCertfile = this._serverCaCertfile;
    }
    if (this._serverCertfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertfile = this._serverCertfile;
    }
    if (this._serverKeyfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverKeyfile = this._serverKeyfile;
    }
    if (this._sloDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloDestination = this._sloDestination;
    }
    if (this._sriovPhysicalInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sriovPhysicalInterface = this._sriovPhysicalInterface;
    }
    if (this._sriovPhysicalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.sriovPhysicalNetwork = this._sriovPhysicalNetwork;
    }
    if (this._sriovVf !== undefined) {
      hasAnyValues = true;
      internalValueResult.sriovVf = this._sriovVf;
    }
    if (this._sslEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEnable = this._sslEnable;
    }
    if (this._sslInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslInsecure = this._sslInsecure;
    }
    if (this._statsCollectorDestinationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsCollectorDestinationPath = this._statsCollectorDestinationPath;
    }
    if (this._subcluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.subcluster = this._subcluster;
    }
    if (this._tsnAgentMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsnAgentMode = this._tsnAgentMode;
    }
    if (this._vrouterCryptInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrouterCryptInterface = this._vrouterCryptInterface;
    }
    if (this._vrouterDecryptInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrouterDecryptInterface = this._vrouterDecryptInterface;
    }
    if (this._vrouterDecryptKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrouterDecryptKey = this._vrouterDecryptKey;
    }
    if (this._vrouterEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrouterEncryption = this._vrouterEncryption;
    }
    if (this._vrouterGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrouterGateway = this._vrouterGateway;
    }
    if (this._xmmpSslEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmmpSslEnable = this._xmmpSslEnable;
    }
    if (this._xmppServerCaCertfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmppServerCaCertfile = this._xmppServerCaCertfile;
    }
    if (this._xmppServerCertfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmppServerCertfile = this._xmppServerCertfile;
    }
    if (this._xmppServerKeyfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmppServerKeyfile = this._xmppServerKeyfile;
    }
    if (this._xmppServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmppServerPort = this._xmppServerPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentMode = undefined;
      this._barbicanPassword = undefined;
      this._barbicanTenantName = undefined;
      this._barbicanUser = undefined;
      this._cloudOrchestrator = undefined;
      this._cniMtu = undefined;
      this._collectorPort = undefined;
      this._configApiPort = undefined;
      this._configApiServerCaCertfile = undefined;
      this._configApiSslEnable = undefined;
      this._containers.internalValue = undefined;
      this._controlInstance = undefined;
      this._dataSubnet = undefined;
      this._dnsServerPort = undefined;
      this._dpdkUioDriver = undefined;
      this._envVariablesConfig = undefined;
      this._fabricSntHashTableSize = undefined;
      this._hugePages1G = undefined;
      this._hugePages2M = undefined;
      this._hypervisorType = undefined;
      this._introspectSslEnable = undefined;
      this._k8SToken = undefined;
      this._k8STokenFile = undefined;
      this._keystoneAuthAdminPassword = undefined;
      this._keystoneAuthAdminPort = undefined;
      this._keystoneAuthCaCertfile = undefined;
      this._keystoneAuthCertfile = undefined;
      this._keystoneAuthHost = undefined;
      this._keystoneAuthInsecure = undefined;
      this._keystoneAuthKeyfile = undefined;
      this._keystoneAuthProjectDomainName = undefined;
      this._keystoneAuthProto = undefined;
      this._keystoneAuthRegionName = undefined;
      this._keystoneAuthUrlTokens = undefined;
      this._keystoneAuthUrlVersion = undefined;
      this._keystoneAuthUserDomainName = undefined;
      this._kubernetesApiPort = undefined;
      this._kubernetesApiSecurePort = undefined;
      this._kubernetesPodSubnet = undefined;
      this._l3MhCidr = undefined;
      this._logDir = undefined;
      this._logLocal = undefined;
      this._metadataProxySecret = undefined;
      this._metadataSslCaCertfile = undefined;
      this._metadataSslCertType = undefined;
      this._metadataSslCertfile = undefined;
      this._metadataSslEnable = undefined;
      this._metadataSslKeyfile = undefined;
      this._physicalInterface = undefined;
      this._priorityBandwidth = undefined;
      this._priorityId = undefined;
      this._priorityScheduling = undefined;
      this._priorityTagging = undefined;
      this._qosDefHwQueue = undefined;
      this._qosLogicalQueues = undefined;
      this._qosQueueId = undefined;
      this._requiredKernelVrouterEncryption = undefined;
      this._sampleDestination = undefined;
      this._sandeshCaCertfile = undefined;
      this._sandeshCertfile = undefined;
      this._sandeshKeyfile = undefined;
      this._sandeshServerCertfile = undefined;
      this._sandeshServerKeyfile = undefined;
      this._sandeshSslEnable = undefined;
      this._serverCaCertfile = undefined;
      this._serverCertfile = undefined;
      this._serverKeyfile = undefined;
      this._sloDestination = undefined;
      this._sriovPhysicalInterface = undefined;
      this._sriovPhysicalNetwork = undefined;
      this._sriovVf = undefined;
      this._sslEnable = undefined;
      this._sslInsecure = undefined;
      this._statsCollectorDestinationPath = undefined;
      this._subcluster = undefined;
      this._tsnAgentMode = undefined;
      this._vrouterCryptInterface = undefined;
      this._vrouterDecryptInterface = undefined;
      this._vrouterDecryptKey = undefined;
      this._vrouterEncryption = undefined;
      this._vrouterGateway = undefined;
      this._xmmpSslEnable = undefined;
      this._xmppServerCaCertfile = undefined;
      this._xmppServerCertfile = undefined;
      this._xmppServerKeyfile = undefined;
      this._xmppServerPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentMode = value.agentMode;
      this._barbicanPassword = value.barbicanPassword;
      this._barbicanTenantName = value.barbicanTenantName;
      this._barbicanUser = value.barbicanUser;
      this._cloudOrchestrator = value.cloudOrchestrator;
      this._cniMtu = value.cniMtu;
      this._collectorPort = value.collectorPort;
      this._configApiPort = value.configApiPort;
      this._configApiServerCaCertfile = value.configApiServerCaCertfile;
      this._configApiSslEnable = value.configApiSslEnable;
      this._containers.internalValue = value.containers;
      this._controlInstance = value.controlInstance;
      this._dataSubnet = value.dataSubnet;
      this._dnsServerPort = value.dnsServerPort;
      this._dpdkUioDriver = value.dpdkUioDriver;
      this._envVariablesConfig = value.envVariablesConfig;
      this._fabricSntHashTableSize = value.fabricSntHashTableSize;
      this._hugePages1G = value.hugePages1G;
      this._hugePages2M = value.hugePages2M;
      this._hypervisorType = value.hypervisorType;
      this._introspectSslEnable = value.introspectSslEnable;
      this._k8SToken = value.k8SToken;
      this._k8STokenFile = value.k8STokenFile;
      this._keystoneAuthAdminPassword = value.keystoneAuthAdminPassword;
      this._keystoneAuthAdminPort = value.keystoneAuthAdminPort;
      this._keystoneAuthCaCertfile = value.keystoneAuthCaCertfile;
      this._keystoneAuthCertfile = value.keystoneAuthCertfile;
      this._keystoneAuthHost = value.keystoneAuthHost;
      this._keystoneAuthInsecure = value.keystoneAuthInsecure;
      this._keystoneAuthKeyfile = value.keystoneAuthKeyfile;
      this._keystoneAuthProjectDomainName = value.keystoneAuthProjectDomainName;
      this._keystoneAuthProto = value.keystoneAuthProto;
      this._keystoneAuthRegionName = value.keystoneAuthRegionName;
      this._keystoneAuthUrlTokens = value.keystoneAuthUrlTokens;
      this._keystoneAuthUrlVersion = value.keystoneAuthUrlVersion;
      this._keystoneAuthUserDomainName = value.keystoneAuthUserDomainName;
      this._kubernetesApiPort = value.kubernetesApiPort;
      this._kubernetesApiSecurePort = value.kubernetesApiSecurePort;
      this._kubernetesPodSubnet = value.kubernetesPodSubnet;
      this._l3MhCidr = value.l3MhCidr;
      this._logDir = value.logDir;
      this._logLocal = value.logLocal;
      this._metadataProxySecret = value.metadataProxySecret;
      this._metadataSslCaCertfile = value.metadataSslCaCertfile;
      this._metadataSslCertType = value.metadataSslCertType;
      this._metadataSslCertfile = value.metadataSslCertfile;
      this._metadataSslEnable = value.metadataSslEnable;
      this._metadataSslKeyfile = value.metadataSslKeyfile;
      this._physicalInterface = value.physicalInterface;
      this._priorityBandwidth = value.priorityBandwidth;
      this._priorityId = value.priorityId;
      this._priorityScheduling = value.priorityScheduling;
      this._priorityTagging = value.priorityTagging;
      this._qosDefHwQueue = value.qosDefHwQueue;
      this._qosLogicalQueues = value.qosLogicalQueues;
      this._qosQueueId = value.qosQueueId;
      this._requiredKernelVrouterEncryption = value.requiredKernelVrouterEncryption;
      this._sampleDestination = value.sampleDestination;
      this._sandeshCaCertfile = value.sandeshCaCertfile;
      this._sandeshCertfile = value.sandeshCertfile;
      this._sandeshKeyfile = value.sandeshKeyfile;
      this._sandeshServerCertfile = value.sandeshServerCertfile;
      this._sandeshServerKeyfile = value.sandeshServerKeyfile;
      this._sandeshSslEnable = value.sandeshSslEnable;
      this._serverCaCertfile = value.serverCaCertfile;
      this._serverCertfile = value.serverCertfile;
      this._serverKeyfile = value.serverKeyfile;
      this._sloDestination = value.sloDestination;
      this._sriovPhysicalInterface = value.sriovPhysicalInterface;
      this._sriovPhysicalNetwork = value.sriovPhysicalNetwork;
      this._sriovVf = value.sriovVf;
      this._sslEnable = value.sslEnable;
      this._sslInsecure = value.sslInsecure;
      this._statsCollectorDestinationPath = value.statsCollectorDestinationPath;
      this._subcluster = value.subcluster;
      this._tsnAgentMode = value.tsnAgentMode;
      this._vrouterCryptInterface = value.vrouterCryptInterface;
      this._vrouterDecryptInterface = value.vrouterDecryptInterface;
      this._vrouterDecryptKey = value.vrouterDecryptKey;
      this._vrouterEncryption = value.vrouterEncryption;
      this._vrouterGateway = value.vrouterGateway;
      this._xmmpSslEnable = value.xmmpSslEnable;
      this._xmppServerCaCertfile = value.xmppServerCaCertfile;
      this._xmppServerCertfile = value.xmppServerCertfile;
      this._xmppServerKeyfile = value.xmppServerKeyfile;
      this._xmppServerPort = value.xmppServerPort;
    }
  }

  // agent_mode - computed: false, optional: true, required: false
  private _agentMode?: string; 
  public get agentMode() {
    return this.getStringAttribute('agent_mode');
  }
  public set agentMode(value: string) {
    this._agentMode = value;
  }
  public resetAgentMode() {
    this._agentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentModeInput() {
    return this._agentMode;
  }

  // barbican_password - computed: false, optional: true, required: false
  private _barbicanPassword?: string; 
  public get barbicanPassword() {
    return this.getStringAttribute('barbican_password');
  }
  public set barbicanPassword(value: string) {
    this._barbicanPassword = value;
  }
  public resetBarbicanPassword() {
    this._barbicanPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get barbicanPasswordInput() {
    return this._barbicanPassword;
  }

  // barbican_tenant_name - computed: false, optional: true, required: false
  private _barbicanTenantName?: string; 
  public get barbicanTenantName() {
    return this.getStringAttribute('barbican_tenant_name');
  }
  public set barbicanTenantName(value: string) {
    this._barbicanTenantName = value;
  }
  public resetBarbicanTenantName() {
    this._barbicanTenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get barbicanTenantNameInput() {
    return this._barbicanTenantName;
  }

  // barbican_user - computed: false, optional: true, required: false
  private _barbicanUser?: string; 
  public get barbicanUser() {
    return this.getStringAttribute('barbican_user');
  }
  public set barbicanUser(value: string) {
    this._barbicanUser = value;
  }
  public resetBarbicanUser() {
    this._barbicanUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get barbicanUserInput() {
    return this._barbicanUser;
  }

  // cloud_orchestrator - computed: false, optional: true, required: false
  private _cloudOrchestrator?: string; 
  public get cloudOrchestrator() {
    return this.getStringAttribute('cloud_orchestrator');
  }
  public set cloudOrchestrator(value: string) {
    this._cloudOrchestrator = value;
  }
  public resetCloudOrchestrator() {
    this._cloudOrchestrator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudOrchestratorInput() {
    return this._cloudOrchestrator;
  }

  // cni_mtu - computed: false, optional: true, required: false
  private _cniMtu?: number; 
  public get cniMtu() {
    return this.getNumberAttribute('cni_mtu');
  }
  public set cniMtu(value: number) {
    this._cniMtu = value;
  }
  public resetCniMtu() {
    this._cniMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniMtuInput() {
    return this._cniMtu;
  }

  // collector_port - computed: false, optional: true, required: false
  private _collectorPort?: string; 
  public get collectorPort() {
    return this.getStringAttribute('collector_port');
  }
  public set collectorPort(value: string) {
    this._collectorPort = value;
  }
  public resetCollectorPort() {
    this._collectorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorPortInput() {
    return this._collectorPort;
  }

  // config_api_port - computed: false, optional: true, required: false
  private _configApiPort?: string; 
  public get configApiPort() {
    return this.getStringAttribute('config_api_port');
  }
  public set configApiPort(value: string) {
    this._configApiPort = value;
  }
  public resetConfigApiPort() {
    this._configApiPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configApiPortInput() {
    return this._configApiPort;
  }

  // config_api_server_ca_certfile - computed: false, optional: true, required: false
  private _configApiServerCaCertfile?: string; 
  public get configApiServerCaCertfile() {
    return this.getStringAttribute('config_api_server_ca_certfile');
  }
  public set configApiServerCaCertfile(value: string) {
    this._configApiServerCaCertfile = value;
  }
  public resetConfigApiServerCaCertfile() {
    this._configApiServerCaCertfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configApiServerCaCertfileInput() {
    return this._configApiServerCaCertfile;
  }

  // config_api_ssl_enable - computed: false, optional: true, required: false
  private _configApiSslEnable?: boolean | cdktf.IResolvable; 
  public get configApiSslEnable() {
    return this.getBooleanAttribute('config_api_ssl_enable');
  }
  public set configApiSslEnable(value: boolean | cdktf.IResolvable) {
    this._configApiSslEnable = value;
  }
  public resetConfigApiSslEnable() {
    this._configApiSslEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configApiSslEnableInput() {
    return this._configApiSslEnable;
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // control_instance - computed: false, optional: true, required: false
  private _controlInstance?: string; 
  public get controlInstance() {
    return this.getStringAttribute('control_instance');
  }
  public set controlInstance(value: string) {
    this._controlInstance = value;
  }
  public resetControlInstance() {
    this._controlInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlInstanceInput() {
    return this._controlInstance;
  }

  // data_subnet - computed: false, optional: true, required: false
  private _dataSubnet?: string; 
  public get dataSubnet() {
    return this.getStringAttribute('data_subnet');
  }
  public set dataSubnet(value: string) {
    this._dataSubnet = value;
  }
  public resetDataSubnet() {
    this._dataSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSubnetInput() {
    return this._dataSubnet;
  }

  // dns_server_port - computed: false, optional: true, required: false
  private _dnsServerPort?: string; 
  public get dnsServerPort() {
    return this.getStringAttribute('dns_server_port');
  }
  public set dnsServerPort(value: string) {
    this._dnsServerPort = value;
  }
  public resetDnsServerPort() {
    this._dnsServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerPortInput() {
    return this._dnsServerPort;
  }

  // dpdk_uio_driver - computed: false, optional: true, required: false
  private _dpdkUioDriver?: string; 
  public get dpdkUioDriver() {
    return this.getStringAttribute('dpdk_uio_driver');
  }
  public set dpdkUioDriver(value: string) {
    this._dpdkUioDriver = value;
  }
  public resetDpdkUioDriver() {
    this._dpdkUioDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdkUioDriverInput() {
    return this._dpdkUioDriver;
  }

  // env_variables_config - computed: false, optional: true, required: false
  private _envVariablesConfig?: { [key: string]: string }; 
  public get envVariablesConfig() {
    return this.getStringMapAttribute('env_variables_config');
  }
  public set envVariablesConfig(value: { [key: string]: string }) {
    this._envVariablesConfig = value;
  }
  public resetEnvVariablesConfig() {
    this._envVariablesConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVariablesConfigInput() {
    return this._envVariablesConfig;
  }

  // fabric_snt_hash_table_size - computed: false, optional: true, required: false
  private _fabricSntHashTableSize?: string; 
  public get fabricSntHashTableSize() {
    return this.getStringAttribute('fabric_snt_hash_table_size');
  }
  public set fabricSntHashTableSize(value: string) {
    this._fabricSntHashTableSize = value;
  }
  public resetFabricSntHashTableSize() {
    this._fabricSntHashTableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricSntHashTableSizeInput() {
    return this._fabricSntHashTableSize;
  }

  // huge_pages1_g - computed: false, optional: true, required: false
  private _hugePages1G?: number; 
  public get hugePages1G() {
    return this.getNumberAttribute('huge_pages1_g');
  }
  public set hugePages1G(value: number) {
    this._hugePages1G = value;
  }
  public resetHugePages1G() {
    this._hugePages1G = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugePages1GInput() {
    return this._hugePages1G;
  }

  // huge_pages2_m - computed: false, optional: true, required: false
  private _hugePages2M?: number; 
  public get hugePages2M() {
    return this.getNumberAttribute('huge_pages2_m');
  }
  public set hugePages2M(value: number) {
    this._hugePages2M = value;
  }
  public resetHugePages2M() {
    this._hugePages2M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugePages2MInput() {
    return this._hugePages2M;
  }

  // hypervisor_type - computed: false, optional: true, required: false
  private _hypervisorType?: string; 
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }
  public set hypervisorType(value: string) {
    this._hypervisorType = value;
  }
  public resetHypervisorType() {
    this._hypervisorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorTypeInput() {
    return this._hypervisorType;
  }

  // introspect_ssl_enable - computed: false, optional: true, required: false
  private _introspectSslEnable?: boolean | cdktf.IResolvable; 
  public get introspectSslEnable() {
    return this.getBooleanAttribute('introspect_ssl_enable');
  }
  public set introspectSslEnable(value: boolean | cdktf.IResolvable) {
    this._introspectSslEnable = value;
  }
  public resetIntrospectSslEnable() {
    this._introspectSslEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectSslEnableInput() {
    return this._introspectSslEnable;
  }

  // k8s_token - computed: false, optional: true, required: false
  private _k8SToken?: string; 
  public get k8SToken() {
    return this.getStringAttribute('k8s_token');
  }
  public set k8SToken(value: string) {
    this._k8SToken = value;
  }
  public resetK8SToken() {
    this._k8SToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8STokenInput() {
    return this._k8SToken;
  }

  // k8s_token_file - computed: false, optional: true, required: false
  private _k8STokenFile?: string; 
  public get k8STokenFile() {
    return this.getStringAttribute('k8s_token_file');
  }
  public set k8STokenFile(value: string) {
    this._k8STokenFile = value;
  }
  public resetK8STokenFile() {
    this._k8STokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8STokenFileInput() {
    return this._k8STokenFile;
  }

  // keystone_auth_admin_password - computed: false, optional: true, required: false
  private _keystoneAuthAdminPassword?: string; 
  public get keystoneAuthAdminPassword() {
    return this.getStringAttribute('keystone_auth_admin_password');
  }
  public set keystoneAuthAdminPassword(value: string) {
    this._keystoneAuthAdminPassword = value;
  }
  public resetKeystoneAuthAdminPassword() {
    this._keystoneAuthAdminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneAuthAdminPasswordInput() {
    return this._keystoneAuthAdminPassword;
  }

  // keystone_auth_admin_port - computed: false, optional: true, required: false
  private _keystoneAuthAdminPort?: string; 
  public get keystoneAuthAdminPort() {
    return this.getStringAttribute('keystone_auth_admin_port');
  }
  public set keystoneAuthAdminPort(value: string) {
    this._keystoneAuthAdminPort = value;
  }
  public resetKeystoneAuthAdminPort() {
    this._keystoneAuthAdminPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneAuthAdminPortInput() {
    return this._keystoneAuthAdminPort;
  }

  // keystone_auth_ca_certfile - computed: false, optional: true, required: false
  private _keystoneAuthCaCertfile?: string; 
  public get keystoneAuthCaCertfile() {
    return this.getStringAttribute('keystone_auth_ca_certfile');
  }
  public set keystoneAuthCaCertfile(value: string) {
    this._keystoneAuthCaCertfile = value;
  }
  public resetKeystoneAuthCaCertfile() {
    this._keystoneAuthCaCertfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneAuthCaCertfileInput() {
    return this._keystoneAuthCaCertfile;
  }

  // keystone_auth_certfile - computed: false, optional: true, required: false
  private _keystoneAuthCertfile?: string; 
  public get keystoneAuthCertfile() {
    return this.getStringAttribute('keystone_auth_certfile');
  }
  public set keystoneAuthCertfile(value: string) {
    this._keystoneAuthCertfile = value;
  }
  public resetKeystoneAuthCertfile() {
    this._keystoneAuthCertfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneAuthCertfileInput() {
    return this._keystoneAuthCertfile;
  }

  // keystone_auth_host - computed: false, optional: true, required: false
  private _keystoneAuthHost?: string; 
  public get keystoneAuthHost() {
    return this.getStringAttribute('keystone_auth_host');
  }
  public set keystoneAuthHost(value: string) {
    this._keystoneAuthHost = value;
  }
  public resetKeystoneAuthHost() {
    this._keystoneAuthHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneAuthHostInput() {
    return this._keystoneAuthHost;
  }

  // keystone_auth_insecure - computed: false, optional: true, required: false
  private _keystoneAuthInsecure?: boolean | cdktf.IResolvable; 
  public get keystoneAuthInsecure() {
    return this.getBooleanAttribute('keystone_auth_insecure');
  }
  public set keystoneAuthInsecure(value: boolean | cdktf.IResolvable) {
    this._keystoneAuthInsecure = value;
  }
  public resetKeystoneAuthInsecure() {
    this._keystoneAuthInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneAuthInsecureInput() {
    return this._keystoneAuthInsecure;
  }

  // keystone_auth_keyfile - computed: false, optional: true, required: false
  private _keystoneAuthKeyfile?: string; 
  public get keystoneAuthKeyfile() {
    return this.getStringAttribute('keystone_auth_keyfile');
  }
  public set keystoneAuthKeyfile(value: string) {
    this._keystoneAuthKeyfile = value;
  }
  public resetKeystoneAuthKeyfile() {
    this._keystoneAuthKeyfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneAuthKeyfileInput() {
    return this._keystoneAuthKeyfile;
  }

  // keystone_auth_project_domain_name - computed: false, optional: true, required: false
  private _keystoneAuthProjectDomainName?: string; 
  public get keystoneAuthProjectDomainName() {
    return this.getStringAttribute('keystone_auth_project_domain_name');
  }
  public set keystoneAuthProjectDomainName(value: string) {
    this._keystoneAuthProjectDomainName = value;
  }
  public resetKeystoneAuthProjectDomainName() {
    this._keystoneAuthProjectDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneAuthProjectDomainNameInput() {
    return this._keystoneAuthProjectDomainName;
  }

  // keystone_auth_proto - computed: false, optional: true, required: false
  private _keystoneAuthProto?: string; 
  public get keystoneAuthProto() {
    return this.getStringAttribute('keystone_auth_proto');
  }
  public set keystoneAuthProto(value: string) {
    this._keystoneAuthProto = value;
  }
  public resetKeystoneAuthProto() {
    this._keystoneAuthProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneAuthProtoInput() {
    return this._keystoneAuthProto;
  }

  // keystone_auth_region_name - computed: false, optional: true, required: false
  private _keystoneAuthRegionName?: string; 
  public get keystoneAuthRegionName() {
    return this.getStringAttribute('keystone_auth_region_name');
  }
  public set keystoneAuthRegionName(value: string) {
    this._keystoneAuthRegionName = value;
  }
  public resetKeystoneAuthRegionName() {
    this._keystoneAuthRegionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneAuthRegionNameInput() {
    return this._keystoneAuthRegionName;
  }

  // keystone_auth_url_tokens - computed: false, optional: true, required: false
  private _keystoneAuthUrlTokens?: string; 
  public get keystoneAuthUrlTokens() {
    return this.getStringAttribute('keystone_auth_url_tokens');
  }
  public set keystoneAuthUrlTokens(value: string) {
    this._keystoneAuthUrlTokens = value;
  }
  public resetKeystoneAuthUrlTokens() {
    this._keystoneAuthUrlTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneAuthUrlTokensInput() {
    return this._keystoneAuthUrlTokens;
  }

  // keystone_auth_url_version - computed: false, optional: true, required: false
  private _keystoneAuthUrlVersion?: string; 
  public get keystoneAuthUrlVersion() {
    return this.getStringAttribute('keystone_auth_url_version');
  }
  public set keystoneAuthUrlVersion(value: string) {
    this._keystoneAuthUrlVersion = value;
  }
  public resetKeystoneAuthUrlVersion() {
    this._keystoneAuthUrlVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneAuthUrlVersionInput() {
    return this._keystoneAuthUrlVersion;
  }

  // keystone_auth_user_domain_name - computed: false, optional: true, required: false
  private _keystoneAuthUserDomainName?: string; 
  public get keystoneAuthUserDomainName() {
    return this.getStringAttribute('keystone_auth_user_domain_name');
  }
  public set keystoneAuthUserDomainName(value: string) {
    this._keystoneAuthUserDomainName = value;
  }
  public resetKeystoneAuthUserDomainName() {
    this._keystoneAuthUserDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneAuthUserDomainNameInput() {
    return this._keystoneAuthUserDomainName;
  }

  // kubernetes_api_port - computed: false, optional: true, required: false
  private _kubernetesApiPort?: string; 
  public get kubernetesApiPort() {
    return this.getStringAttribute('kubernetes_api_port');
  }
  public set kubernetesApiPort(value: string) {
    this._kubernetesApiPort = value;
  }
  public resetKubernetesApiPort() {
    this._kubernetesApiPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesApiPortInput() {
    return this._kubernetesApiPort;
  }

  // kubernetes_api_secure_port - computed: false, optional: true, required: false
  private _kubernetesApiSecurePort?: string; 
  public get kubernetesApiSecurePort() {
    return this.getStringAttribute('kubernetes_api_secure_port');
  }
  public set kubernetesApiSecurePort(value: string) {
    this._kubernetesApiSecurePort = value;
  }
  public resetKubernetesApiSecurePort() {
    this._kubernetesApiSecurePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesApiSecurePortInput() {
    return this._kubernetesApiSecurePort;
  }

  // kubernetes_pod_subnet - computed: false, optional: true, required: false
  private _kubernetesPodSubnet?: string; 
  public get kubernetesPodSubnet() {
    return this.getStringAttribute('kubernetes_pod_subnet');
  }
  public set kubernetesPodSubnet(value: string) {
    this._kubernetesPodSubnet = value;
  }
  public resetKubernetesPodSubnet() {
    this._kubernetesPodSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesPodSubnetInput() {
    return this._kubernetesPodSubnet;
  }

  // l3mh_cidr - computed: false, optional: true, required: false
  private _l3MhCidr?: string; 
  public get l3MhCidr() {
    return this.getStringAttribute('l3mh_cidr');
  }
  public set l3MhCidr(value: string) {
    this._l3MhCidr = value;
  }
  public resetL3MhCidr() {
    this._l3MhCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3MhCidrInput() {
    return this._l3MhCidr;
  }

  // log_dir - computed: false, optional: true, required: false
  private _logDir?: string; 
  public get logDir() {
    return this.getStringAttribute('log_dir');
  }
  public set logDir(value: string) {
    this._logDir = value;
  }
  public resetLogDir() {
    this._logDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDirInput() {
    return this._logDir;
  }

  // log_local - computed: false, optional: true, required: false
  private _logLocal?: number; 
  public get logLocal() {
    return this.getNumberAttribute('log_local');
  }
  public set logLocal(value: number) {
    this._logLocal = value;
  }
  public resetLogLocal() {
    this._logLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLocalInput() {
    return this._logLocal;
  }

  // metadata_proxy_secret - computed: false, optional: true, required: false
  private _metadataProxySecret?: string; 
  public get metadataProxySecret() {
    return this.getStringAttribute('metadata_proxy_secret');
  }
  public set metadataProxySecret(value: string) {
    this._metadataProxySecret = value;
  }
  public resetMetadataProxySecret() {
    this._metadataProxySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataProxySecretInput() {
    return this._metadataProxySecret;
  }

  // metadata_ssl_ca_certfile - computed: false, optional: true, required: false
  private _metadataSslCaCertfile?: string; 
  public get metadataSslCaCertfile() {
    return this.getStringAttribute('metadata_ssl_ca_certfile');
  }
  public set metadataSslCaCertfile(value: string) {
    this._metadataSslCaCertfile = value;
  }
  public resetMetadataSslCaCertfile() {
    this._metadataSslCaCertfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSslCaCertfileInput() {
    return this._metadataSslCaCertfile;
  }

  // metadata_ssl_cert_type - computed: false, optional: true, required: false
  private _metadataSslCertType?: string; 
  public get metadataSslCertType() {
    return this.getStringAttribute('metadata_ssl_cert_type');
  }
  public set metadataSslCertType(value: string) {
    this._metadataSslCertType = value;
  }
  public resetMetadataSslCertType() {
    this._metadataSslCertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSslCertTypeInput() {
    return this._metadataSslCertType;
  }

  // metadata_ssl_certfile - computed: false, optional: true, required: false
  private _metadataSslCertfile?: string; 
  public get metadataSslCertfile() {
    return this.getStringAttribute('metadata_ssl_certfile');
  }
  public set metadataSslCertfile(value: string) {
    this._metadataSslCertfile = value;
  }
  public resetMetadataSslCertfile() {
    this._metadataSslCertfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSslCertfileInput() {
    return this._metadataSslCertfile;
  }

  // metadata_ssl_enable - computed: false, optional: true, required: false
  private _metadataSslEnable?: string; 
  public get metadataSslEnable() {
    return this.getStringAttribute('metadata_ssl_enable');
  }
  public set metadataSslEnable(value: string) {
    this._metadataSslEnable = value;
  }
  public resetMetadataSslEnable() {
    this._metadataSslEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSslEnableInput() {
    return this._metadataSslEnable;
  }

  // metadata_ssl_keyfile - computed: false, optional: true, required: false
  private _metadataSslKeyfile?: string; 
  public get metadataSslKeyfile() {
    return this.getStringAttribute('metadata_ssl_keyfile');
  }
  public set metadataSslKeyfile(value: string) {
    this._metadataSslKeyfile = value;
  }
  public resetMetadataSslKeyfile() {
    this._metadataSslKeyfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSslKeyfileInput() {
    return this._metadataSslKeyfile;
  }

  // physical_interface - computed: false, optional: true, required: false
  private _physicalInterface?: string; 
  public get physicalInterface() {
    return this.getStringAttribute('physical_interface');
  }
  public set physicalInterface(value: string) {
    this._physicalInterface = value;
  }
  public resetPhysicalInterface() {
    this._physicalInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalInterfaceInput() {
    return this._physicalInterface;
  }

  // priority_bandwidth - computed: false, optional: true, required: false
  private _priorityBandwidth?: string; 
  public get priorityBandwidth() {
    return this.getStringAttribute('priority_bandwidth');
  }
  public set priorityBandwidth(value: string) {
    this._priorityBandwidth = value;
  }
  public resetPriorityBandwidth() {
    this._priorityBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityBandwidthInput() {
    return this._priorityBandwidth;
  }

  // priority_id - computed: false, optional: true, required: false
  private _priorityId?: string; 
  public get priorityId() {
    return this.getStringAttribute('priority_id');
  }
  public set priorityId(value: string) {
    this._priorityId = value;
  }
  public resetPriorityId() {
    this._priorityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityIdInput() {
    return this._priorityId;
  }

  // priority_scheduling - computed: false, optional: true, required: false
  private _priorityScheduling?: string; 
  public get priorityScheduling() {
    return this.getStringAttribute('priority_scheduling');
  }
  public set priorityScheduling(value: string) {
    this._priorityScheduling = value;
  }
  public resetPriorityScheduling() {
    this._priorityScheduling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritySchedulingInput() {
    return this._priorityScheduling;
  }

  // priority_tagging - computed: false, optional: true, required: false
  private _priorityTagging?: boolean | cdktf.IResolvable; 
  public get priorityTagging() {
    return this.getBooleanAttribute('priority_tagging');
  }
  public set priorityTagging(value: boolean | cdktf.IResolvable) {
    this._priorityTagging = value;
  }
  public resetPriorityTagging() {
    this._priorityTagging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityTaggingInput() {
    return this._priorityTagging;
  }

  // qos_def_hw_queue - computed: false, optional: true, required: false
  private _qosDefHwQueue?: boolean | cdktf.IResolvable; 
  public get qosDefHwQueue() {
    return this.getBooleanAttribute('qos_def_hw_queue');
  }
  public set qosDefHwQueue(value: boolean | cdktf.IResolvable) {
    this._qosDefHwQueue = value;
  }
  public resetQosDefHwQueue() {
    this._qosDefHwQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosDefHwQueueInput() {
    return this._qosDefHwQueue;
  }

  // qos_logical_queues - computed: false, optional: true, required: false
  private _qosLogicalQueues?: string; 
  public get qosLogicalQueues() {
    return this.getStringAttribute('qos_logical_queues');
  }
  public set qosLogicalQueues(value: string) {
    this._qosLogicalQueues = value;
  }
  public resetQosLogicalQueues() {
    this._qosLogicalQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosLogicalQueuesInput() {
    return this._qosLogicalQueues;
  }

  // qos_queue_id - computed: false, optional: true, required: false
  private _qosQueueId?: string; 
  public get qosQueueId() {
    return this.getStringAttribute('qos_queue_id');
  }
  public set qosQueueId(value: string) {
    this._qosQueueId = value;
  }
  public resetQosQueueId() {
    this._qosQueueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosQueueIdInput() {
    return this._qosQueueId;
  }

  // required_kernel_vrouter_encryption - computed: false, optional: true, required: false
  private _requiredKernelVrouterEncryption?: string; 
  public get requiredKernelVrouterEncryption() {
    return this.getStringAttribute('required_kernel_vrouter_encryption');
  }
  public set requiredKernelVrouterEncryption(value: string) {
    this._requiredKernelVrouterEncryption = value;
  }
  public resetRequiredKernelVrouterEncryption() {
    this._requiredKernelVrouterEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredKernelVrouterEncryptionInput() {
    return this._requiredKernelVrouterEncryption;
  }

  // sample_destination - computed: false, optional: true, required: false
  private _sampleDestination?: string; 
  public get sampleDestination() {
    return this.getStringAttribute('sample_destination');
  }
  public set sampleDestination(value: string) {
    this._sampleDestination = value;
  }
  public resetSampleDestination() {
    this._sampleDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleDestinationInput() {
    return this._sampleDestination;
  }

  // sandesh_ca_certfile - computed: false, optional: true, required: false
  private _sandeshCaCertfile?: string; 
  public get sandeshCaCertfile() {
    return this.getStringAttribute('sandesh_ca_certfile');
  }
  public set sandeshCaCertfile(value: string) {
    this._sandeshCaCertfile = value;
  }
  public resetSandeshCaCertfile() {
    this._sandeshCaCertfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandeshCaCertfileInput() {
    return this._sandeshCaCertfile;
  }

  // sandesh_certfile - computed: false, optional: true, required: false
  private _sandeshCertfile?: string; 
  public get sandeshCertfile() {
    return this.getStringAttribute('sandesh_certfile');
  }
  public set sandeshCertfile(value: string) {
    this._sandeshCertfile = value;
  }
  public resetSandeshCertfile() {
    this._sandeshCertfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandeshCertfileInput() {
    return this._sandeshCertfile;
  }

  // sandesh_keyfile - computed: false, optional: true, required: false
  private _sandeshKeyfile?: string; 
  public get sandeshKeyfile() {
    return this.getStringAttribute('sandesh_keyfile');
  }
  public set sandeshKeyfile(value: string) {
    this._sandeshKeyfile = value;
  }
  public resetSandeshKeyfile() {
    this._sandeshKeyfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandeshKeyfileInput() {
    return this._sandeshKeyfile;
  }

  // sandesh_server_certfile - computed: false, optional: true, required: false
  private _sandeshServerCertfile?: string; 
  public get sandeshServerCertfile() {
    return this.getStringAttribute('sandesh_server_certfile');
  }
  public set sandeshServerCertfile(value: string) {
    this._sandeshServerCertfile = value;
  }
  public resetSandeshServerCertfile() {
    this._sandeshServerCertfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandeshServerCertfileInput() {
    return this._sandeshServerCertfile;
  }

  // sandesh_server_keyfile - computed: false, optional: true, required: false
  private _sandeshServerKeyfile?: string; 
  public get sandeshServerKeyfile() {
    return this.getStringAttribute('sandesh_server_keyfile');
  }
  public set sandeshServerKeyfile(value: string) {
    this._sandeshServerKeyfile = value;
  }
  public resetSandeshServerKeyfile() {
    this._sandeshServerKeyfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandeshServerKeyfileInput() {
    return this._sandeshServerKeyfile;
  }

  // sandesh_ssl_enable - computed: false, optional: true, required: false
  private _sandeshSslEnable?: boolean | cdktf.IResolvable; 
  public get sandeshSslEnable() {
    return this.getBooleanAttribute('sandesh_ssl_enable');
  }
  public set sandeshSslEnable(value: boolean | cdktf.IResolvable) {
    this._sandeshSslEnable = value;
  }
  public resetSandeshSslEnable() {
    this._sandeshSslEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandeshSslEnableInput() {
    return this._sandeshSslEnable;
  }

  // server_ca_certfile - computed: false, optional: true, required: false
  private _serverCaCertfile?: string; 
  public get serverCaCertfile() {
    return this.getStringAttribute('server_ca_certfile');
  }
  public set serverCaCertfile(value: string) {
    this._serverCaCertfile = value;
  }
  public resetServerCaCertfile() {
    this._serverCaCertfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCaCertfileInput() {
    return this._serverCaCertfile;
  }

  // server_certfile - computed: false, optional: true, required: false
  private _serverCertfile?: string; 
  public get serverCertfile() {
    return this.getStringAttribute('server_certfile');
  }
  public set serverCertfile(value: string) {
    this._serverCertfile = value;
  }
  public resetServerCertfile() {
    this._serverCertfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertfileInput() {
    return this._serverCertfile;
  }

  // server_keyfile - computed: false, optional: true, required: false
  private _serverKeyfile?: string; 
  public get serverKeyfile() {
    return this.getStringAttribute('server_keyfile');
  }
  public set serverKeyfile(value: string) {
    this._serverKeyfile = value;
  }
  public resetServerKeyfile() {
    this._serverKeyfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeyfileInput() {
    return this._serverKeyfile;
  }

  // slo_destination - computed: false, optional: true, required: false
  private _sloDestination?: string; 
  public get sloDestination() {
    return this.getStringAttribute('slo_destination');
  }
  public set sloDestination(value: string) {
    this._sloDestination = value;
  }
  public resetSloDestination() {
    this._sloDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloDestinationInput() {
    return this._sloDestination;
  }

  // sriov_physical_interface - computed: false, optional: true, required: false
  private _sriovPhysicalInterface?: string; 
  public get sriovPhysicalInterface() {
    return this.getStringAttribute('sriov_physical_interface');
  }
  public set sriovPhysicalInterface(value: string) {
    this._sriovPhysicalInterface = value;
  }
  public resetSriovPhysicalInterface() {
    this._sriovPhysicalInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sriovPhysicalInterfaceInput() {
    return this._sriovPhysicalInterface;
  }

  // sriov_physical_network - computed: false, optional: true, required: false
  private _sriovPhysicalNetwork?: string; 
  public get sriovPhysicalNetwork() {
    return this.getStringAttribute('sriov_physical_network');
  }
  public set sriovPhysicalNetwork(value: string) {
    this._sriovPhysicalNetwork = value;
  }
  public resetSriovPhysicalNetwork() {
    this._sriovPhysicalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sriovPhysicalNetworkInput() {
    return this._sriovPhysicalNetwork;
  }

  // sriov_vf - computed: false, optional: true, required: false
  private _sriovVf?: string; 
  public get sriovVf() {
    return this.getStringAttribute('sriov_vf');
  }
  public set sriovVf(value: string) {
    this._sriovVf = value;
  }
  public resetSriovVf() {
    this._sriovVf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sriovVfInput() {
    return this._sriovVf;
  }

  // ssl_enable - computed: false, optional: true, required: false
  private _sslEnable?: boolean | cdktf.IResolvable; 
  public get sslEnable() {
    return this.getBooleanAttribute('ssl_enable');
  }
  public set sslEnable(value: boolean | cdktf.IResolvable) {
    this._sslEnable = value;
  }
  public resetSslEnable() {
    this._sslEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnableInput() {
    return this._sslEnable;
  }

  // ssl_insecure - computed: false, optional: true, required: false
  private _sslInsecure?: boolean | cdktf.IResolvable; 
  public get sslInsecure() {
    return this.getBooleanAttribute('ssl_insecure');
  }
  public set sslInsecure(value: boolean | cdktf.IResolvable) {
    this._sslInsecure = value;
  }
  public resetSslInsecure() {
    this._sslInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInsecureInput() {
    return this._sslInsecure;
  }

  // stats_collector_destination_path - computed: false, optional: true, required: false
  private _statsCollectorDestinationPath?: string; 
  public get statsCollectorDestinationPath() {
    return this.getStringAttribute('stats_collector_destination_path');
  }
  public set statsCollectorDestinationPath(value: string) {
    this._statsCollectorDestinationPath = value;
  }
  public resetStatsCollectorDestinationPath() {
    this._statsCollectorDestinationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsCollectorDestinationPathInput() {
    return this._statsCollectorDestinationPath;
  }

  // subcluster - computed: false, optional: true, required: false
  private _subcluster?: string; 
  public get subcluster() {
    return this.getStringAttribute('subcluster');
  }
  public set subcluster(value: string) {
    this._subcluster = value;
  }
  public resetSubcluster() {
    this._subcluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subclusterInput() {
    return this._subcluster;
  }

  // tsn_agent_mode - computed: false, optional: true, required: false
  private _tsnAgentMode?: string; 
  public get tsnAgentMode() {
    return this.getStringAttribute('tsn_agent_mode');
  }
  public set tsnAgentMode(value: string) {
    this._tsnAgentMode = value;
  }
  public resetTsnAgentMode() {
    this._tsnAgentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsnAgentModeInput() {
    return this._tsnAgentMode;
  }

  // vrouter_crypt_interface - computed: false, optional: true, required: false
  private _vrouterCryptInterface?: string; 
  public get vrouterCryptInterface() {
    return this.getStringAttribute('vrouter_crypt_interface');
  }
  public set vrouterCryptInterface(value: string) {
    this._vrouterCryptInterface = value;
  }
  public resetVrouterCryptInterface() {
    this._vrouterCryptInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrouterCryptInterfaceInput() {
    return this._vrouterCryptInterface;
  }

  // vrouter_decrypt_interface - computed: false, optional: true, required: false
  private _vrouterDecryptInterface?: string; 
  public get vrouterDecryptInterface() {
    return this.getStringAttribute('vrouter_decrypt_interface');
  }
  public set vrouterDecryptInterface(value: string) {
    this._vrouterDecryptInterface = value;
  }
  public resetVrouterDecryptInterface() {
    this._vrouterDecryptInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrouterDecryptInterfaceInput() {
    return this._vrouterDecryptInterface;
  }

  // vrouter_decrypt_key - computed: false, optional: true, required: false
  private _vrouterDecryptKey?: string; 
  public get vrouterDecryptKey() {
    return this.getStringAttribute('vrouter_decrypt_key');
  }
  public set vrouterDecryptKey(value: string) {
    this._vrouterDecryptKey = value;
  }
  public resetVrouterDecryptKey() {
    this._vrouterDecryptKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrouterDecryptKeyInput() {
    return this._vrouterDecryptKey;
  }

  // vrouter_encryption - computed: false, optional: true, required: false
  private _vrouterEncryption?: boolean | cdktf.IResolvable; 
  public get vrouterEncryption() {
    return this.getBooleanAttribute('vrouter_encryption');
  }
  public set vrouterEncryption(value: boolean | cdktf.IResolvable) {
    this._vrouterEncryption = value;
  }
  public resetVrouterEncryption() {
    this._vrouterEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrouterEncryptionInput() {
    return this._vrouterEncryption;
  }

  // vrouter_gateway - computed: false, optional: true, required: false
  private _vrouterGateway?: string; 
  public get vrouterGateway() {
    return this.getStringAttribute('vrouter_gateway');
  }
  public set vrouterGateway(value: string) {
    this._vrouterGateway = value;
  }
  public resetVrouterGateway() {
    this._vrouterGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrouterGatewayInput() {
    return this._vrouterGateway;
  }

  // xmmp_ssl_enable - computed: false, optional: true, required: false
  private _xmmpSslEnable?: boolean | cdktf.IResolvable; 
  public get xmmpSslEnable() {
    return this.getBooleanAttribute('xmmp_ssl_enable');
  }
  public set xmmpSslEnable(value: boolean | cdktf.IResolvable) {
    this._xmmpSslEnable = value;
  }
  public resetXmmpSslEnable() {
    this._xmmpSslEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmmpSslEnableInput() {
    return this._xmmpSslEnable;
  }

  // xmpp_server_ca_certfile - computed: false, optional: true, required: false
  private _xmppServerCaCertfile?: string; 
  public get xmppServerCaCertfile() {
    return this.getStringAttribute('xmpp_server_ca_certfile');
  }
  public set xmppServerCaCertfile(value: string) {
    this._xmppServerCaCertfile = value;
  }
  public resetXmppServerCaCertfile() {
    this._xmppServerCaCertfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmppServerCaCertfileInput() {
    return this._xmppServerCaCertfile;
  }

  // xmpp_server_certfile - computed: false, optional: true, required: false
  private _xmppServerCertfile?: string; 
  public get xmppServerCertfile() {
    return this.getStringAttribute('xmpp_server_certfile');
  }
  public set xmppServerCertfile(value: string) {
    this._xmppServerCertfile = value;
  }
  public resetXmppServerCertfile() {
    this._xmppServerCertfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmppServerCertfileInput() {
    return this._xmppServerCertfile;
  }

  // xmpp_server_keyfile - computed: false, optional: true, required: false
  private _xmppServerKeyfile?: string; 
  public get xmppServerKeyfile() {
    return this.getStringAttribute('xmpp_server_keyfile');
  }
  public set xmppServerKeyfile(value: string) {
    this._xmppServerKeyfile = value;
  }
  public resetXmppServerKeyfile() {
    this._xmppServerKeyfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmppServerKeyfileInput() {
    return this._xmppServerKeyfile;
  }

  // xmpp_server_port - computed: false, optional: true, required: false
  private _xmppServerPort?: string; 
  public get xmppServerPort() {
    return this.getStringAttribute('xmpp_server_port');
  }
  public set xmppServerPort(value: string) {
    this._xmppServerPort = value;
  }
  public resetXmppServerPort() {
    this._xmppServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmppServerPortInput() {
    return this._xmppServerPort;
  }
}
export interface DataK8STfTungstenIoVrouterV1Alpha1ManifestSpec {
  /**
  * PodConfiguration is the common services struct.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#common_configuration DataK8STfTungstenIoVrouterV1Alpha1Manifest#common_configuration}
  */
  readonly commonConfiguration?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfiguration;
  /**
  * VrouterConfiguration is the Spec for the vrouter API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#service_configuration DataK8STfTungstenIoVrouterV1Alpha1Manifest#service_configuration}
  */
  readonly serviceConfiguration: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfiguration;
}

export function dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecToTerraform(struct?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_configuration: dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationToTerraform(struct!.commonConfiguration),
    service_configuration: dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationToTerraform(struct!.serviceConfiguration),
  }
}


export function dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_configuration: {
      value: dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationToHclTerraform(struct!.commonConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfiguration",
    },
    service_configuration: {
      value: dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationToHclTerraform(struct!.serviceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STfTungstenIoVrouterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonConfiguration = this._commonConfiguration?.internalValue;
    }
    if (this._serviceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceConfiguration = this._serviceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonConfiguration.internalValue = undefined;
      this._serviceConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonConfiguration.internalValue = value.commonConfiguration;
      this._serviceConfiguration.internalValue = value.serviceConfiguration;
    }
  }

  // common_configuration - computed: false, optional: true, required: false
  private _commonConfiguration = new DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfigurationOutputReference(this, "common_configuration");
  public get commonConfiguration() {
    return this._commonConfiguration;
  }
  public putCommonConfiguration(value: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecCommonConfiguration) {
    this._commonConfiguration.internalValue = value;
  }
  public resetCommonConfiguration() {
    this._commonConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonConfigurationInput() {
    return this._commonConfiguration.internalValue;
  }

  // service_configuration - computed: false, optional: false, required: true
  private _serviceConfiguration = new DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfigurationOutputReference(this, "service_configuration");
  public get serviceConfiguration() {
    return this._serviceConfiguration;
  }
  public putServiceConfiguration(value: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecServiceConfiguration) {
    this._serviceConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigurationInput() {
    return this._serviceConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest k8s_tf_tungsten_io_vrouter_v1alpha1_manifest}
*/
export class DataK8STfTungstenIoVrouterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_tf_tungsten_io_vrouter_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STfTungstenIoVrouterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STfTungstenIoVrouterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STfTungstenIoVrouterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STfTungstenIoVrouterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_tf_tungsten_io_vrouter_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_vrouter_v1alpha1_manifest k8s_tf_tungsten_io_vrouter_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STfTungstenIoVrouterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STfTungstenIoVrouterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_tf_tungsten_io_vrouter_v1alpha1_manifest',
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
  private _metadata = new DataK8STfTungstenIoVrouterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STfTungstenIoVrouterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STfTungstenIoVrouterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STfTungstenIoVrouterV1Alpha1ManifestSpec) {
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
      metadata: dataK8STfTungstenIoVrouterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STfTungstenIoVrouterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STfTungstenIoVrouterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8STfTungstenIoVrouterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STfTungstenIoVrouterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
