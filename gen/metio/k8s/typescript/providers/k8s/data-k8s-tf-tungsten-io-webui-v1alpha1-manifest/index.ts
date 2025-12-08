// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STfTungstenIoWebuiV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#metadata DataK8STfTungstenIoWebuiV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STfTungstenIoWebuiV1Alpha1ManifestMetadata;
  /**
  * WebuiSpec is the Spec for the cassandras API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#spec DataK8STfTungstenIoWebuiV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpec;
}
export interface DataK8STfTungstenIoWebuiV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#annotations DataK8STfTungstenIoWebuiV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#labels DataK8STfTungstenIoWebuiV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#name DataK8STfTungstenIoWebuiV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#namespace DataK8STfTungstenIoWebuiV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STfTungstenIoWebuiV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STfTungstenIoWebuiV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STfTungstenIoWebuiV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STfTungstenIoWebuiV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STfTungstenIoWebuiV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STfTungstenIoWebuiV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STfTungstenIoWebuiV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#address DataK8STfTungstenIoWebuiV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#admin_password DataK8STfTungstenIoWebuiV1Alpha1Manifest#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#admin_port DataK8STfTungstenIoWebuiV1Alpha1Manifest#admin_port}
  */
  readonly adminPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#admin_tenant DataK8STfTungstenIoWebuiV1Alpha1Manifest#admin_tenant}
  */
  readonly adminTenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#admin_username DataK8STfTungstenIoWebuiV1Alpha1Manifest#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#auth_protocol DataK8STfTungstenIoWebuiV1Alpha1Manifest#auth_protocol}
  */
  readonly authProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#insecure DataK8STfTungstenIoWebuiV1Alpha1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#port DataK8STfTungstenIoWebuiV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#project_domain_name DataK8STfTungstenIoWebuiV1Alpha1Manifest#project_domain_name}
  */
  readonly projectDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#region DataK8STfTungstenIoWebuiV1Alpha1Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#user_domain_name DataK8STfTungstenIoWebuiV1Alpha1Manifest#user_domain_name}
  */
  readonly userDomainName?: string;
}

export function dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParametersToTerraform(struct?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParameters | cdktf.IResolvable): any {
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


export function dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParametersToHclTerraform(struct?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParameters | cdktf.IResolvable): any {
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

export class DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParameters | cdktf.IResolvable | undefined) {
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
export interface DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParameters {
  /**
  * AuthenticationMode auth mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#auth_mode DataK8STfTungstenIoWebuiV1Alpha1Manifest#auth_mode}
  */
  readonly authMode?: string;
  /**
  * KeystoneAuthParameters keystone parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#keystone_auth_parameters DataK8STfTungstenIoWebuiV1Alpha1Manifest#keystone_auth_parameters}
  */
  readonly keystoneAuthParameters?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#keystone_secret_name DataK8STfTungstenIoWebuiV1Alpha1Manifest#keystone_secret_name}
  */
  readonly keystoneSecretName?: string;
}

export function dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersToTerraform(struct?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_mode: cdktf.stringToTerraform(struct!.authMode),
    keystone_auth_parameters: dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParametersToTerraform(struct!.keystoneAuthParameters),
    keystone_secret_name: cdktf.stringToTerraform(struct!.keystoneSecretName),
  }
}


export function dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersToHclTerraform(struct?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParameters | cdktf.IResolvable): any {
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
      value: dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParametersToHclTerraform(struct!.keystoneAuthParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParameters",
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

export class DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParameters | cdktf.IResolvable | undefined) {
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
  private _keystoneAuthParameters = new DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParametersOutputReference(this, "keystone_auth_parameters");
  public get keystoneAuthParameters() {
    return this._keystoneAuthParameters;
  }
  public putKeystoneAuthParameters(value: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersKeystoneAuthParameters) {
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
export interface DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#effect DataK8STfTungstenIoWebuiV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#key DataK8STfTungstenIoWebuiV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#operator DataK8STfTungstenIoWebuiV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#toleration_seconds DataK8STfTungstenIoWebuiV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#value DataK8STfTungstenIoWebuiV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerationsToTerraform(struct?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerations | cdktf.IResolvable): any {
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


export function dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerationsToHclTerraform(struct?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerations | cdktf.IResolvable): any {
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

export class DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerationsOutputReference {
    return new DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfiguration {
  /**
  * AuthParameters auth parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#auth_parameters DataK8STfTungstenIoWebuiV1Alpha1Manifest#auth_parameters}
  */
  readonly authParameters?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParameters;
  /**
  * OS family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#distribution DataK8STfTungstenIoWebuiV1Alpha1Manifest#distribution}
  */
  readonly distribution?: string;
  /**
  * ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#image_pull_secrets DataK8STfTungstenIoWebuiV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: string[];
  /**
  * Kubernetes Cluster Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#log_level DataK8STfTungstenIoWebuiV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#node_selector DataK8STfTungstenIoWebuiV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * If specified, the pod's tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#tolerations DataK8STfTungstenIoWebuiV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerations[] | cdktf.IResolvable;
}

export function dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationToTerraform(struct?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_parameters: dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersToTerraform(struct!.authParameters),
    distribution: cdktf.stringToTerraform(struct!.distribution),
    image_pull_secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.imagePullSecrets),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    tolerations: cdktf.listMapper(dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationToHclTerraform(struct?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_parameters: {
      value: dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersToHclTerraform(struct!.authParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParameters",
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
      value: cdktf.listMapperHcl(dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfiguration | cdktf.IResolvable | undefined) {
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
  private _authParameters = new DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParametersOutputReference(this, "auth_parameters");
  public get authParameters() {
    return this._authParameters;
  }
  public putAuthParameters(value: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationAuthParameters) {
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
  private _tolerations = new DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationTolerations[] | cdktf.IResolvable) {
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
export interface DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#command DataK8STfTungstenIoWebuiV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#image DataK8STfTungstenIoWebuiV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#name DataK8STfTungstenIoWebuiV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainersToTerraform(struct?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainers | cdktf.IResolvable): any {
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


export function dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainersToHclTerraform(struct?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainers | cdktf.IResolvable): any {
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

export class DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainers | cdktf.IResolvable | undefined) {
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

export class DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainersOutputReference {
    return new DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#containers DataK8STfTungstenIoWebuiV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#control_instance DataK8STfTungstenIoWebuiV1Alpha1Manifest#control_instance}
  */
  readonly controlInstance?: string;
}

export function dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationToTerraform(struct?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.listMapper(dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainersToTerraform, false)(struct!.containers),
    control_instance: cdktf.stringToTerraform(struct!.controlInstance),
  }
}


export function dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationToHclTerraform(struct?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.listMapperHcl(dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainersList",
    },
    control_instance: {
      value: cdktf.stringToHclTerraform(struct!.controlInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._controlInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlInstance = this._controlInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._controlInstance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._controlInstance = value.controlInstance;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationContainers[] | cdktf.IResolvable) {
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
}
export interface DataK8STfTungstenIoWebuiV1Alpha1ManifestSpec {
  /**
  * PodConfiguration is the common services struct.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#common_configuration DataK8STfTungstenIoWebuiV1Alpha1Manifest#common_configuration}
  */
  readonly commonConfiguration?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfiguration;
  /**
  * WebuiConfiguration is the Spec for the cassandras API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#service_configuration DataK8STfTungstenIoWebuiV1Alpha1Manifest#service_configuration}
  */
  readonly serviceConfiguration: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfiguration;
}

export function dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecToTerraform(struct?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_configuration: dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationToTerraform(struct!.commonConfiguration),
    service_configuration: dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationToTerraform(struct!.serviceConfiguration),
  }
}


export function dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_configuration: {
      value: dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationToHclTerraform(struct!.commonConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfiguration",
    },
    service_configuration: {
      value: dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationToHclTerraform(struct!.serviceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STfTungstenIoWebuiV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _commonConfiguration = new DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfigurationOutputReference(this, "common_configuration");
  public get commonConfiguration() {
    return this._commonConfiguration;
  }
  public putCommonConfiguration(value: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecCommonConfiguration) {
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
  private _serviceConfiguration = new DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfigurationOutputReference(this, "service_configuration");
  public get serviceConfiguration() {
    return this._serviceConfiguration;
  }
  public putServiceConfiguration(value: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecServiceConfiguration) {
    this._serviceConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigurationInput() {
    return this._serviceConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest k8s_tf_tungsten_io_webui_v1alpha1_manifest}
*/
export class DataK8STfTungstenIoWebuiV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_tf_tungsten_io_webui_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STfTungstenIoWebuiV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STfTungstenIoWebuiV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STfTungstenIoWebuiV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STfTungstenIoWebuiV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_tf_tungsten_io_webui_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/tf_tungsten_io_webui_v1alpha1_manifest k8s_tf_tungsten_io_webui_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STfTungstenIoWebuiV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STfTungstenIoWebuiV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_tf_tungsten_io_webui_v1alpha1_manifest',
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
  private _metadata = new DataK8STfTungstenIoWebuiV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STfTungstenIoWebuiV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STfTungstenIoWebuiV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STfTungstenIoWebuiV1Alpha1ManifestSpec) {
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
      metadata: dataK8STfTungstenIoWebuiV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STfTungstenIoWebuiV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STfTungstenIoWebuiV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8STfTungstenIoWebuiV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STfTungstenIoWebuiV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
