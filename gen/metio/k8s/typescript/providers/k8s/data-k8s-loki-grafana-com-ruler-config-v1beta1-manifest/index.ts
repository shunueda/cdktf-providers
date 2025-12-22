// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#metadata DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestMetadata;
  /**
  * RulerConfigSpec defines the desired state of Ruler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#spec DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpec;
}
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#annotations DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#labels DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#name DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#namespace DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestMetadataToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientBasicAuth {
  /**
  * The subject's password for the basic authentication configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#password DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#password}
  */
  readonly password?: string;
  /**
  * The subject's username for the basic authentication configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#username DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientBasicAuthToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientBasicAuthToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
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
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientHeaderAuth {
  /**
  * The credentials for the header authentication configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#credentials DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#credentials}
  */
  readonly credentials?: string;
  /**
  * The credentials file for the Header authentication configuration. It is mutually exclusive with 'credentials'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#credentials_file DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#credentials_file}
  */
  readonly credentialsFile?: string;
  /**
  * The authentication type for the header authentication configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#type DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientHeaderAuthToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientHeaderAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
    credentials_file: cdktf.stringToTerraform(struct!.credentialsFile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientHeaderAuthToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientHeaderAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_file: {
      value: cdktf.stringToHclTerraform(struct!.credentialsFile),
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

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientHeaderAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientHeaderAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._credentialsFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsFile = this._credentialsFile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientHeaderAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials = undefined;
      this._credentialsFile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials = value.credentials;
      this._credentialsFile = value.credentialsFile;
      this._type = value.type;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // credentials_file - computed: false, optional: true, required: false
  private _credentialsFile?: string; 
  public get credentialsFile() {
    return this.getStringAttribute('credentials_file');
  }
  public set credentialsFile(value: string) {
    this._credentialsFile = value;
  }
  public resetCredentialsFile() {
    this._credentialsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsFileInput() {
    return this._credentialsFile;
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
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientTls {
  /**
  * The CA certificate file path for the TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#ca_path DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#ca_path}
  */
  readonly caPath?: string;
  /**
  * The client-side certificate file path for the TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#cert_path DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#cert_path}
  */
  readonly certPath?: string;
  /**
  * The client-side key file path for the TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#key_path DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#key_path}
  */
  readonly keyPath?: string;
  /**
  * The server name to validate in the alertmanager server certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#server_name DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientTlsToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_path: cdktf.stringToTerraform(struct!.caPath),
    cert_path: cdktf.stringToTerraform(struct!.certPath),
    key_path: cdktf.stringToTerraform(struct!.keyPath),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientTlsToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_path: {
      value: cdktf.stringToHclTerraform(struct!.caPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_path: {
      value: cdktf.stringToHclTerraform(struct!.certPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_path: {
      value: cdktf.stringToHclTerraform(struct!.keyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPath = this._caPath;
    }
    if (this._certPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.certPath = this._certPath;
    }
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caPath = undefined;
      this._certPath = undefined;
      this._keyPath = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caPath = value.caPath;
      this._certPath = value.certPath;
      this._keyPath = value.keyPath;
      this._serverName = value.serverName;
    }
  }

  // ca_path - computed: false, optional: true, required: false
  private _caPath?: string; 
  public get caPath() {
    return this.getStringAttribute('ca_path');
  }
  public set caPath(value: string) {
    this._caPath = value;
  }
  public resetCaPath() {
    this._caPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPathInput() {
    return this._caPath;
  }

  // cert_path - computed: false, optional: true, required: false
  private _certPath?: string; 
  public get certPath() {
    return this.getStringAttribute('cert_path');
  }
  public set certPath(value: string) {
    this._certPath = value;
  }
  public resetCertPath() {
    this._certPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPathInput() {
    return this._certPath;
  }

  // key_path - computed: false, optional: true, required: false
  private _keyPath?: string; 
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
  public set keyPath(value: string) {
    this._keyPath = value;
  }
  public resetKeyPath() {
    this._keyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClient {
  /**
  * Basic authentication configuration for reaching the alertmanager endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#basic_auth DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientBasicAuth;
  /**
  * Header authentication configuration for reaching the alertmanager endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#header_auth DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#header_auth}
  */
  readonly headerAuth?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientHeaderAuth;
  /**
  * TLS configuration for reaching the alertmanager endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#tls DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#tls}
  */
  readonly tls?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientTls;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientBasicAuthToTerraform(struct!.basicAuth),
    header_auth: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientHeaderAuthToTerraform(struct!.headerAuth),
    tls: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientTlsToTerraform(struct!.tls),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientBasicAuth",
    },
    header_auth: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientHeaderAuthToHclTerraform(struct!.headerAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientHeaderAuth",
    },
    tls: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._headerAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAuth = this._headerAuth?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._headerAuth.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
      this._headerAuth.internalValue = value.headerAuth;
      this._tls.internalValue = value.tls;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // header_auth - computed: false, optional: true, required: false
  private _headerAuth = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientHeaderAuthOutputReference(this, "header_auth");
  public get headerAuth() {
    return this._headerAuth;
  }
  public putHeaderAuth(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientHeaderAuth) {
    this._headerAuth.internalValue = value;
  }
  public resetHeaderAuth() {
    this._headerAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerAuthInput() {
    return this._headerAuth.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientTls) {
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
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerDiscovery {
  /**
  * Use DNS SRV records to discover Alertmanager hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#enable_srv DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#enable_srv}
  */
  readonly enableSrv?: boolean | cdktf.IResolvable;
  /**
  * How long to wait between refreshing DNS resolutions of Alertmanager hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#refresh_interval DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#refresh_interval}
  */
  readonly refreshInterval?: string;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerDiscoveryToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_srv: cdktf.booleanToTerraform(struct!.enableSrv),
    refresh_interval: cdktf.stringToTerraform(struct!.refreshInterval),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerDiscoveryToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_srv: {
      value: cdktf.booleanToHclTerraform(struct!.enableSrv),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSrv !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSrv = this._enableSrv;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableSrv = undefined;
      this._refreshInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableSrv = value.enableSrv;
      this._refreshInterval = value.refreshInterval;
    }
  }

  // enable_srv - computed: false, optional: true, required: false
  private _enableSrv?: boolean | cdktf.IResolvable; 
  public get enableSrv() {
    return this.getBooleanAttribute('enable_srv');
  }
  public set enableSrv(value: boolean | cdktf.IResolvable) {
    this._enableSrv = value;
  }
  public resetEnableSrv() {
    this._enableSrv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSrvInput() {
    return this._enableSrv;
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: string; 
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }
  public set refreshInterval(value: string) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }
}
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerNotificationQueue {
  /**
  * Capacity of the queue for notifications to be sent to the Alertmanager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#capacity DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#capacity}
  */
  readonly capacity?: number;
  /**
  * Minimum duration between alert and restored 'for' state. This is maintained only for alerts with configured 'for' time greater than the grace period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#for_grace_period DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#for_grace_period}
  */
  readonly forGracePeriod?: string;
  /**
  * Max time to tolerate outage for restoring 'for' state of alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#for_outage_tolerance DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#for_outage_tolerance}
  */
  readonly forOutageTolerance?: string;
  /**
  * Minimum amount of time to wait before resending an alert to Alertmanager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#resend_delay DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#resend_delay}
  */
  readonly resendDelay?: string;
  /**
  * HTTP timeout duration when sending notifications to the Alertmanager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#timeout DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerNotificationQueueToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerNotificationQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    for_grace_period: cdktf.stringToTerraform(struct!.forGracePeriod),
    for_outage_tolerance: cdktf.stringToTerraform(struct!.forOutageTolerance),
    resend_delay: cdktf.stringToTerraform(struct!.resendDelay),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerNotificationQueueToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerNotificationQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    for_grace_period: {
      value: cdktf.stringToHclTerraform(struct!.forGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    for_outage_tolerance: {
      value: cdktf.stringToHclTerraform(struct!.forOutageTolerance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resend_delay: {
      value: cdktf.stringToHclTerraform(struct!.resendDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerNotificationQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerNotificationQueue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._forGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.forGracePeriod = this._forGracePeriod;
    }
    if (this._forOutageTolerance !== undefined) {
      hasAnyValues = true;
      internalValueResult.forOutageTolerance = this._forOutageTolerance;
    }
    if (this._resendDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.resendDelay = this._resendDelay;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerNotificationQueue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._forGracePeriod = undefined;
      this._forOutageTolerance = undefined;
      this._resendDelay = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._forGracePeriod = value.forGracePeriod;
      this._forOutageTolerance = value.forOutageTolerance;
      this._resendDelay = value.resendDelay;
      this._timeout = value.timeout;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // for_grace_period - computed: false, optional: true, required: false
  private _forGracePeriod?: string; 
  public get forGracePeriod() {
    return this.getStringAttribute('for_grace_period');
  }
  public set forGracePeriod(value: string) {
    this._forGracePeriod = value;
  }
  public resetForGracePeriod() {
    this._forGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forGracePeriodInput() {
    return this._forGracePeriod;
  }

  // for_outage_tolerance - computed: false, optional: true, required: false
  private _forOutageTolerance?: string; 
  public get forOutageTolerance() {
    return this.getStringAttribute('for_outage_tolerance');
  }
  public set forOutageTolerance(value: string) {
    this._forOutageTolerance = value;
  }
  public resetForOutageTolerance() {
    this._forOutageTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forOutageToleranceInput() {
    return this._forOutageTolerance;
  }

  // resend_delay - computed: false, optional: true, required: false
  private _resendDelay?: string; 
  public get resendDelay() {
    return this.getStringAttribute('resend_delay');
  }
  public set resendDelay(value: string) {
    this._resendDelay = value;
  }
  public resetResendDelay() {
    this._resendDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resendDelayInput() {
    return this._resendDelay;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigs {
  /**
  * Action to perform based on regex matching. Default is 'replace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#action DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#action}
  */
  readonly action?: string;
  /**
  * Modulus to take of the hash of the source label values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#modulus DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#modulus}
  */
  readonly modulus?: number;
  /**
  * Regular expression against which the extracted value is matched. Default is '(.*)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#regex DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#replacement DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#replacement}
  */
  readonly replacement?: string;
  /**
  * Separator placed between concatenated source label values. default is ';'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#separator DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#separator}
  */
  readonly separator?: string;
  /**
  * The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#source_labels DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#source_labels}
  */
  readonly sourceLabels: string[];
  /**
  * Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#target_label DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#target_label}
  */
  readonly targetLabel?: string;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigsToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    modulus: cdktf.numberToTerraform(struct!.modulus),
    regex: cdktf.stringToTerraform(struct!.regex),
    replacement: cdktf.stringToTerraform(struct!.replacement),
    separator: cdktf.stringToTerraform(struct!.separator),
    source_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceLabels),
    target_label: cdktf.stringToTerraform(struct!.targetLabel),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigsToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modulus: {
      value: cdktf.numberToHclTerraform(struct!.modulus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_label: {
      value: cdktf.stringToHclTerraform(struct!.targetLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._modulus !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulus = this._modulus;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._sourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabels = this._sourceLabels;
    }
    if (this._targetLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLabel = this._targetLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._modulus = undefined;
      this._regex = undefined;
      this._replacement = undefined;
      this._separator = undefined;
      this._sourceLabels = undefined;
      this._targetLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._modulus = value.modulus;
      this._regex = value.regex;
      this._replacement = value.replacement;
      this._separator = value.separator;
      this._sourceLabels = value.sourceLabels;
      this._targetLabel = value.targetLabel;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // modulus - computed: false, optional: true, required: false
  private _modulus?: number; 
  public get modulus() {
    return this.getNumberAttribute('modulus');
  }
  public set modulus(value: number) {
    this._modulus = value;
  }
  public resetModulus() {
    this._modulus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulusInput() {
    return this._modulus;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // source_labels - computed: false, optional: false, required: true
  private _sourceLabels?: string[]; 
  public get sourceLabels() {
    return this.getListAttribute('source_labels');
  }
  public set sourceLabels(value: string[]) {
    this._sourceLabels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelsInput() {
    return this._sourceLabels;
  }

  // target_label - computed: false, optional: true, required: false
  private _targetLabel?: string; 
  public get targetLabel() {
    return this.getStringAttribute('target_label');
  }
  public set targetLabel(value: string) {
    this._targetLabel = value;
  }
  public resetTargetLabel() {
    this._targetLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLabelInput() {
    return this._targetLabel;
  }
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigsOutputReference {
    return new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanager {
  /**
  * Client configuration for reaching the alertmanager endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#client DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#client}
  */
  readonly client?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClient;
  /**
  * Defines the configuration for DNS-based discovery of AlertManager hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#discovery DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#discovery}
  */
  readonly discovery?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerDiscovery;
  /**
  * If enabled, then requests to Alertmanager use the v2 API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#enable_v2 DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#enable_v2}
  */
  readonly enableV2?: boolean | cdktf.IResolvable;
  /**
  * List of AlertManager URLs to send notifications to. Each Alertmanager URL is treated as a separate group in the configuration. Multiple Alertmanagers in HA per group can be supported by using DNS resolution (See EnableDNSDiscovery).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#endpoints DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#endpoints}
  */
  readonly endpoints: string[];
  /**
  * Additional labels to add to all alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#external_labels DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#external_labels}
  */
  readonly externalLabels?: { [key: string]: string };
  /**
  * URL for alerts return path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#external_url DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#external_url}
  */
  readonly externalUrl?: string;
  /**
  * Defines the configuration for the notification queue to AlertManager hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#notification_queue DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#notification_queue}
  */
  readonly notificationQueue?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerNotificationQueue;
  /**
  * List of alert relabel configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#relabel_configs DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#relabel_configs}
  */
  readonly relabelConfigs?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigs[] | cdktf.IResolvable;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientToTerraform(struct!.client),
    discovery: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerDiscoveryToTerraform(struct!.discovery),
    enable_v2: cdktf.booleanToTerraform(struct!.enableV2),
    endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.endpoints),
    external_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.externalLabels),
    external_url: cdktf.stringToTerraform(struct!.externalUrl),
    notification_queue: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerNotificationQueueToTerraform(struct!.notificationQueue),
    relabel_configs: cdktf.listMapper(dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigsToTerraform, false)(struct!.relabelConfigs),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientToHclTerraform(struct!.client),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClient",
    },
    discovery: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerDiscovery",
    },
    enable_v2: {
      value: cdktf.booleanToHclTerraform(struct!.enableV2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.endpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.externalLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_url: {
      value: cdktf.stringToHclTerraform(struct!.externalUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_queue: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerNotificationQueueToHclTerraform(struct!.notificationQueue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerNotificationQueue",
    },
    relabel_configs: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigsToHclTerraform, false)(struct!.relabelConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client?.internalValue;
    }
    if (this._discovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discovery = this._discovery?.internalValue;
    }
    if (this._enableV2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableV2 = this._enableV2;
    }
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._externalLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalLabels = this._externalLabels;
    }
    if (this._externalUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUrl = this._externalUrl;
    }
    if (this._notificationQueue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationQueue = this._notificationQueue?.internalValue;
    }
    if (this._relabelConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relabelConfigs = this._relabelConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._client.internalValue = undefined;
      this._discovery.internalValue = undefined;
      this._enableV2 = undefined;
      this._endpoints = undefined;
      this._externalLabels = undefined;
      this._externalUrl = undefined;
      this._notificationQueue.internalValue = undefined;
      this._relabelConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._client.internalValue = value.client;
      this._discovery.internalValue = value.discovery;
      this._enableV2 = value.enableV2;
      this._endpoints = value.endpoints;
      this._externalLabels = value.externalLabels;
      this._externalUrl = value.externalUrl;
      this._notificationQueue.internalValue = value.notificationQueue;
      this._relabelConfigs.internalValue = value.relabelConfigs;
    }
  }

  // client - computed: false, optional: true, required: false
  private _client = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClientOutputReference(this, "client");
  public get client() {
    return this._client;
  }
  public putClient(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerClient) {
    this._client.internalValue = value;
  }
  public resetClient() {
    this._client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client.internalValue;
  }

  // discovery - computed: false, optional: true, required: false
  private _discovery = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerDiscovery) {
    this._discovery.internalValue = value;
  }
  public resetDiscovery() {
    this._discovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryInput() {
    return this._discovery.internalValue;
  }

  // enable_v2 - computed: false, optional: true, required: false
  private _enableV2?: boolean | cdktf.IResolvable; 
  public get enableV2() {
    return this.getBooleanAttribute('enable_v2');
  }
  public set enableV2(value: boolean | cdktf.IResolvable) {
    this._enableV2 = value;
  }
  public resetEnableV2() {
    this._enableV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableV2Input() {
    return this._enableV2;
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints?: string[]; 
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }
  public set endpoints(value: string[]) {
    this._endpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // external_labels - computed: false, optional: true, required: false
  private _externalLabels?: { [key: string]: string }; 
  public get externalLabels() {
    return this.getStringMapAttribute('external_labels');
  }
  public set externalLabels(value: { [key: string]: string }) {
    this._externalLabels = value;
  }
  public resetExternalLabels() {
    this._externalLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLabelsInput() {
    return this._externalLabels;
  }

  // external_url - computed: false, optional: true, required: false
  private _externalUrl?: string; 
  public get externalUrl() {
    return this.getStringAttribute('external_url');
  }
  public set externalUrl(value: string) {
    this._externalUrl = value;
  }
  public resetExternalUrl() {
    this._externalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUrlInput() {
    return this._externalUrl;
  }

  // notification_queue - computed: false, optional: true, required: false
  private _notificationQueue = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerNotificationQueueOutputReference(this, "notification_queue");
  public get notificationQueue() {
    return this._notificationQueue;
  }
  public putNotificationQueue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerNotificationQueue) {
    this._notificationQueue.internalValue = value;
  }
  public resetNotificationQueue() {
    this._notificationQueue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationQueueInput() {
    return this._notificationQueue.internalValue;
  }

  // relabel_configs - computed: false, optional: true, required: false
  private _relabelConfigs = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigsList(this, "relabel_configs", false);
  public get relabelConfigs() {
    return this._relabelConfigs;
  }
  public putRelabelConfigs(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerRelabelConfigs[] | cdktf.IResolvable) {
    this._relabelConfigs.internalValue = value;
  }
  public resetRelabelConfigs() {
    this._relabelConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relabelConfigsInput() {
    return this._relabelConfigs.internalValue;
  }
}
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientBasicAuth {
  /**
  * The subject's password for the basic authentication configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#password DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#password}
  */
  readonly password?: string;
  /**
  * The subject's username for the basic authentication configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#username DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientBasicAuthToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientBasicAuthToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
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
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientHeaderAuth {
  /**
  * The credentials for the header authentication configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#credentials DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#credentials}
  */
  readonly credentials?: string;
  /**
  * The credentials file for the Header authentication configuration. It is mutually exclusive with 'credentials'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#credentials_file DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#credentials_file}
  */
  readonly credentialsFile?: string;
  /**
  * The authentication type for the header authentication configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#type DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientHeaderAuthToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientHeaderAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
    credentials_file: cdktf.stringToTerraform(struct!.credentialsFile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientHeaderAuthToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientHeaderAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_file: {
      value: cdktf.stringToHclTerraform(struct!.credentialsFile),
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

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientHeaderAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientHeaderAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._credentialsFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsFile = this._credentialsFile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientHeaderAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials = undefined;
      this._credentialsFile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials = value.credentials;
      this._credentialsFile = value.credentialsFile;
      this._type = value.type;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // credentials_file - computed: false, optional: true, required: false
  private _credentialsFile?: string; 
  public get credentialsFile() {
    return this.getStringAttribute('credentials_file');
  }
  public set credentialsFile(value: string) {
    this._credentialsFile = value;
  }
  public resetCredentialsFile() {
    this._credentialsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsFileInput() {
    return this._credentialsFile;
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
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientTls {
  /**
  * The CA certificate file path for the TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#ca_path DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#ca_path}
  */
  readonly caPath?: string;
  /**
  * The client-side certificate file path for the TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#cert_path DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#cert_path}
  */
  readonly certPath?: string;
  /**
  * The client-side key file path for the TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#key_path DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#key_path}
  */
  readonly keyPath?: string;
  /**
  * The server name to validate in the alertmanager server certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#server_name DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientTlsToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_path: cdktf.stringToTerraform(struct!.caPath),
    cert_path: cdktf.stringToTerraform(struct!.certPath),
    key_path: cdktf.stringToTerraform(struct!.keyPath),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientTlsToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_path: {
      value: cdktf.stringToHclTerraform(struct!.caPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_path: {
      value: cdktf.stringToHclTerraform(struct!.certPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_path: {
      value: cdktf.stringToHclTerraform(struct!.keyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPath = this._caPath;
    }
    if (this._certPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.certPath = this._certPath;
    }
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caPath = undefined;
      this._certPath = undefined;
      this._keyPath = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caPath = value.caPath;
      this._certPath = value.certPath;
      this._keyPath = value.keyPath;
      this._serverName = value.serverName;
    }
  }

  // ca_path - computed: false, optional: true, required: false
  private _caPath?: string; 
  public get caPath() {
    return this.getStringAttribute('ca_path');
  }
  public set caPath(value: string) {
    this._caPath = value;
  }
  public resetCaPath() {
    this._caPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPathInput() {
    return this._caPath;
  }

  // cert_path - computed: false, optional: true, required: false
  private _certPath?: string; 
  public get certPath() {
    return this.getStringAttribute('cert_path');
  }
  public set certPath(value: string) {
    this._certPath = value;
  }
  public resetCertPath() {
    this._certPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPathInput() {
    return this._certPath;
  }

  // key_path - computed: false, optional: true, required: false
  private _keyPath?: string; 
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
  public set keyPath(value: string) {
    this._keyPath = value;
  }
  public resetKeyPath() {
    this._keyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClient {
  /**
  * Basic authentication configuration for reaching the alertmanager endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#basic_auth DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientBasicAuth;
  /**
  * Header authentication configuration for reaching the alertmanager endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#header_auth DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#header_auth}
  */
  readonly headerAuth?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientHeaderAuth;
  /**
  * TLS configuration for reaching the alertmanager endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#tls DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#tls}
  */
  readonly tls?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientTls;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientBasicAuthToTerraform(struct!.basicAuth),
    header_auth: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientHeaderAuthToTerraform(struct!.headerAuth),
    tls: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientTlsToTerraform(struct!.tls),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientBasicAuth",
    },
    header_auth: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientHeaderAuthToHclTerraform(struct!.headerAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientHeaderAuth",
    },
    tls: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._headerAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAuth = this._headerAuth?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._headerAuth.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
      this._headerAuth.internalValue = value.headerAuth;
      this._tls.internalValue = value.tls;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // header_auth - computed: false, optional: true, required: false
  private _headerAuth = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientHeaderAuthOutputReference(this, "header_auth");
  public get headerAuth() {
    return this._headerAuth;
  }
  public putHeaderAuth(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientHeaderAuth) {
    this._headerAuth.internalValue = value;
  }
  public resetHeaderAuth() {
    this._headerAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerAuthInput() {
    return this._headerAuth.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientTls) {
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
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerDiscovery {
  /**
  * Use DNS SRV records to discover Alertmanager hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#enable_srv DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#enable_srv}
  */
  readonly enableSrv?: boolean | cdktf.IResolvable;
  /**
  * How long to wait between refreshing DNS resolutions of Alertmanager hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#refresh_interval DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#refresh_interval}
  */
  readonly refreshInterval?: string;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerDiscoveryToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_srv: cdktf.booleanToTerraform(struct!.enableSrv),
    refresh_interval: cdktf.stringToTerraform(struct!.refreshInterval),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerDiscoveryToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_srv: {
      value: cdktf.booleanToHclTerraform(struct!.enableSrv),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSrv !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSrv = this._enableSrv;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableSrv = undefined;
      this._refreshInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableSrv = value.enableSrv;
      this._refreshInterval = value.refreshInterval;
    }
  }

  // enable_srv - computed: false, optional: true, required: false
  private _enableSrv?: boolean | cdktf.IResolvable; 
  public get enableSrv() {
    return this.getBooleanAttribute('enable_srv');
  }
  public set enableSrv(value: boolean | cdktf.IResolvable) {
    this._enableSrv = value;
  }
  public resetEnableSrv() {
    this._enableSrv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSrvInput() {
    return this._enableSrv;
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: string; 
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }
  public set refreshInterval(value: string) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }
}
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerNotificationQueue {
  /**
  * Capacity of the queue for notifications to be sent to the Alertmanager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#capacity DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#capacity}
  */
  readonly capacity?: number;
  /**
  * Minimum duration between alert and restored 'for' state. This is maintained only for alerts with configured 'for' time greater than the grace period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#for_grace_period DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#for_grace_period}
  */
  readonly forGracePeriod?: string;
  /**
  * Max time to tolerate outage for restoring 'for' state of alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#for_outage_tolerance DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#for_outage_tolerance}
  */
  readonly forOutageTolerance?: string;
  /**
  * Minimum amount of time to wait before resending an alert to Alertmanager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#resend_delay DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#resend_delay}
  */
  readonly resendDelay?: string;
  /**
  * HTTP timeout duration when sending notifications to the Alertmanager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#timeout DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerNotificationQueueToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerNotificationQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    for_grace_period: cdktf.stringToTerraform(struct!.forGracePeriod),
    for_outage_tolerance: cdktf.stringToTerraform(struct!.forOutageTolerance),
    resend_delay: cdktf.stringToTerraform(struct!.resendDelay),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerNotificationQueueToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerNotificationQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    for_grace_period: {
      value: cdktf.stringToHclTerraform(struct!.forGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    for_outage_tolerance: {
      value: cdktf.stringToHclTerraform(struct!.forOutageTolerance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resend_delay: {
      value: cdktf.stringToHclTerraform(struct!.resendDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerNotificationQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerNotificationQueue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._forGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.forGracePeriod = this._forGracePeriod;
    }
    if (this._forOutageTolerance !== undefined) {
      hasAnyValues = true;
      internalValueResult.forOutageTolerance = this._forOutageTolerance;
    }
    if (this._resendDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.resendDelay = this._resendDelay;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerNotificationQueue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._forGracePeriod = undefined;
      this._forOutageTolerance = undefined;
      this._resendDelay = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._forGracePeriod = value.forGracePeriod;
      this._forOutageTolerance = value.forOutageTolerance;
      this._resendDelay = value.resendDelay;
      this._timeout = value.timeout;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // for_grace_period - computed: false, optional: true, required: false
  private _forGracePeriod?: string; 
  public get forGracePeriod() {
    return this.getStringAttribute('for_grace_period');
  }
  public set forGracePeriod(value: string) {
    this._forGracePeriod = value;
  }
  public resetForGracePeriod() {
    this._forGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forGracePeriodInput() {
    return this._forGracePeriod;
  }

  // for_outage_tolerance - computed: false, optional: true, required: false
  private _forOutageTolerance?: string; 
  public get forOutageTolerance() {
    return this.getStringAttribute('for_outage_tolerance');
  }
  public set forOutageTolerance(value: string) {
    this._forOutageTolerance = value;
  }
  public resetForOutageTolerance() {
    this._forOutageTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forOutageToleranceInput() {
    return this._forOutageTolerance;
  }

  // resend_delay - computed: false, optional: true, required: false
  private _resendDelay?: string; 
  public get resendDelay() {
    return this.getStringAttribute('resend_delay');
  }
  public set resendDelay(value: string) {
    this._resendDelay = value;
  }
  public resetResendDelay() {
    this._resendDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resendDelayInput() {
    return this._resendDelay;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigs {
  /**
  * Action to perform based on regex matching. Default is 'replace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#action DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#action}
  */
  readonly action?: string;
  /**
  * Modulus to take of the hash of the source label values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#modulus DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#modulus}
  */
  readonly modulus?: number;
  /**
  * Regular expression against which the extracted value is matched. Default is '(.*)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#regex DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#replacement DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#replacement}
  */
  readonly replacement?: string;
  /**
  * Separator placed between concatenated source label values. default is ';'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#separator DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#separator}
  */
  readonly separator?: string;
  /**
  * The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#source_labels DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#source_labels}
  */
  readonly sourceLabels: string[];
  /**
  * Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#target_label DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#target_label}
  */
  readonly targetLabel?: string;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigsToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    modulus: cdktf.numberToTerraform(struct!.modulus),
    regex: cdktf.stringToTerraform(struct!.regex),
    replacement: cdktf.stringToTerraform(struct!.replacement),
    separator: cdktf.stringToTerraform(struct!.separator),
    source_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceLabels),
    target_label: cdktf.stringToTerraform(struct!.targetLabel),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigsToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modulus: {
      value: cdktf.numberToHclTerraform(struct!.modulus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_label: {
      value: cdktf.stringToHclTerraform(struct!.targetLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._modulus !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulus = this._modulus;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._sourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabels = this._sourceLabels;
    }
    if (this._targetLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLabel = this._targetLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._modulus = undefined;
      this._regex = undefined;
      this._replacement = undefined;
      this._separator = undefined;
      this._sourceLabels = undefined;
      this._targetLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._modulus = value.modulus;
      this._regex = value.regex;
      this._replacement = value.replacement;
      this._separator = value.separator;
      this._sourceLabels = value.sourceLabels;
      this._targetLabel = value.targetLabel;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // modulus - computed: false, optional: true, required: false
  private _modulus?: number; 
  public get modulus() {
    return this.getNumberAttribute('modulus');
  }
  public set modulus(value: number) {
    this._modulus = value;
  }
  public resetModulus() {
    this._modulus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulusInput() {
    return this._modulus;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // source_labels - computed: false, optional: false, required: true
  private _sourceLabels?: string[]; 
  public get sourceLabels() {
    return this.getListAttribute('source_labels');
  }
  public set sourceLabels(value: string[]) {
    this._sourceLabels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelsInput() {
    return this._sourceLabels;
  }

  // target_label - computed: false, optional: true, required: false
  private _targetLabel?: string; 
  public get targetLabel() {
    return this.getStringAttribute('target_label');
  }
  public set targetLabel(value: string) {
    this._targetLabel = value;
  }
  public resetTargetLabel() {
    this._targetLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLabelInput() {
    return this._targetLabel;
  }
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigsOutputReference {
    return new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanager {
  /**
  * Client configuration for reaching the alertmanager endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#client DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#client}
  */
  readonly client?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClient;
  /**
  * Defines the configuration for DNS-based discovery of AlertManager hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#discovery DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#discovery}
  */
  readonly discovery?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerDiscovery;
  /**
  * If enabled, then requests to Alertmanager use the v2 API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#enable_v2 DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#enable_v2}
  */
  readonly enableV2?: boolean | cdktf.IResolvable;
  /**
  * List of AlertManager URLs to send notifications to. Each Alertmanager URL is treated as a separate group in the configuration. Multiple Alertmanagers in HA per group can be supported by using DNS resolution (See EnableDNSDiscovery).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#endpoints DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#endpoints}
  */
  readonly endpoints: string[];
  /**
  * Additional labels to add to all alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#external_labels DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#external_labels}
  */
  readonly externalLabels?: { [key: string]: string };
  /**
  * URL for alerts return path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#external_url DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#external_url}
  */
  readonly externalUrl?: string;
  /**
  * Defines the configuration for the notification queue to AlertManager hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#notification_queue DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#notification_queue}
  */
  readonly notificationQueue?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerNotificationQueue;
  /**
  * List of alert relabel configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#relabel_configs DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#relabel_configs}
  */
  readonly relabelConfigs?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigs[] | cdktf.IResolvable;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientToTerraform(struct!.client),
    discovery: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerDiscoveryToTerraform(struct!.discovery),
    enable_v2: cdktf.booleanToTerraform(struct!.enableV2),
    endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.endpoints),
    external_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.externalLabels),
    external_url: cdktf.stringToTerraform(struct!.externalUrl),
    notification_queue: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerNotificationQueueToTerraform(struct!.notificationQueue),
    relabel_configs: cdktf.listMapper(dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigsToTerraform, false)(struct!.relabelConfigs),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientToHclTerraform(struct!.client),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClient",
    },
    discovery: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerDiscovery",
    },
    enable_v2: {
      value: cdktf.booleanToHclTerraform(struct!.enableV2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.endpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.externalLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_url: {
      value: cdktf.stringToHclTerraform(struct!.externalUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_queue: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerNotificationQueueToHclTerraform(struct!.notificationQueue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerNotificationQueue",
    },
    relabel_configs: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigsToHclTerraform, false)(struct!.relabelConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client?.internalValue;
    }
    if (this._discovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discovery = this._discovery?.internalValue;
    }
    if (this._enableV2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableV2 = this._enableV2;
    }
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._externalLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalLabels = this._externalLabels;
    }
    if (this._externalUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUrl = this._externalUrl;
    }
    if (this._notificationQueue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationQueue = this._notificationQueue?.internalValue;
    }
    if (this._relabelConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relabelConfigs = this._relabelConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._client.internalValue = undefined;
      this._discovery.internalValue = undefined;
      this._enableV2 = undefined;
      this._endpoints = undefined;
      this._externalLabels = undefined;
      this._externalUrl = undefined;
      this._notificationQueue.internalValue = undefined;
      this._relabelConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._client.internalValue = value.client;
      this._discovery.internalValue = value.discovery;
      this._enableV2 = value.enableV2;
      this._endpoints = value.endpoints;
      this._externalLabels = value.externalLabels;
      this._externalUrl = value.externalUrl;
      this._notificationQueue.internalValue = value.notificationQueue;
      this._relabelConfigs.internalValue = value.relabelConfigs;
    }
  }

  // client - computed: false, optional: true, required: false
  private _client = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClientOutputReference(this, "client");
  public get client() {
    return this._client;
  }
  public putClient(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerClient) {
    this._client.internalValue = value;
  }
  public resetClient() {
    this._client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client.internalValue;
  }

  // discovery - computed: false, optional: true, required: false
  private _discovery = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerDiscovery) {
    this._discovery.internalValue = value;
  }
  public resetDiscovery() {
    this._discovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryInput() {
    return this._discovery.internalValue;
  }

  // enable_v2 - computed: false, optional: true, required: false
  private _enableV2?: boolean | cdktf.IResolvable; 
  public get enableV2() {
    return this.getBooleanAttribute('enable_v2');
  }
  public set enableV2(value: boolean | cdktf.IResolvable) {
    this._enableV2 = value;
  }
  public resetEnableV2() {
    this._enableV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableV2Input() {
    return this._enableV2;
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints?: string[]; 
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }
  public set endpoints(value: string[]) {
    this._endpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // external_labels - computed: false, optional: true, required: false
  private _externalLabels?: { [key: string]: string }; 
  public get externalLabels() {
    return this.getStringMapAttribute('external_labels');
  }
  public set externalLabels(value: { [key: string]: string }) {
    this._externalLabels = value;
  }
  public resetExternalLabels() {
    this._externalLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLabelsInput() {
    return this._externalLabels;
  }

  // external_url - computed: false, optional: true, required: false
  private _externalUrl?: string; 
  public get externalUrl() {
    return this.getStringAttribute('external_url');
  }
  public set externalUrl(value: string) {
    this._externalUrl = value;
  }
  public resetExternalUrl() {
    this._externalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUrlInput() {
    return this._externalUrl;
  }

  // notification_queue - computed: false, optional: true, required: false
  private _notificationQueue = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerNotificationQueueOutputReference(this, "notification_queue");
  public get notificationQueue() {
    return this._notificationQueue;
  }
  public putNotificationQueue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerNotificationQueue) {
    this._notificationQueue.internalValue = value;
  }
  public resetNotificationQueue() {
    this._notificationQueue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationQueueInput() {
    return this._notificationQueue.internalValue;
  }

  // relabel_configs - computed: false, optional: true, required: false
  private _relabelConfigs = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigsList(this, "relabel_configs", false);
  public get relabelConfigs() {
    return this._relabelConfigs;
  }
  public putRelabelConfigs(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerRelabelConfigs[] | cdktf.IResolvable) {
    this._relabelConfigs.internalValue = value;
  }
  public resetRelabelConfigs() {
    this._relabelConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relabelConfigsInput() {
    return this._relabelConfigs.internalValue;
  }
}
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverrides {
  /**
  * AlertManagerOverrides defines the overrides to apply to the alertmanager config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#alertmanager DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#alertmanager}
  */
  readonly alertmanager?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanager;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alertmanager: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerToTerraform(struct!.alertmanager),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alertmanager: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerToHclTerraform(struct!.alertmanager),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertmanager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertmanager = this._alertmanager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertmanager.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertmanager.internalValue = value.alertmanager;
    }
  }

  // alertmanager - computed: false, optional: true, required: false
  private _alertmanager = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanagerOutputReference(this, "alertmanager");
  public get alertmanager() {
    return this._alertmanager;
  }
  public putAlertmanager(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesAlertmanager) {
    this._alertmanager.internalValue = value;
  }
  public resetAlertmanager() {
    this._alertmanager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertmanagerInput() {
    return this._alertmanager.internalValue;
  }
}
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigs {
  /**
  * Action to perform based on regex matching. Default is 'replace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#action DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#action}
  */
  readonly action?: string;
  /**
  * Modulus to take of the hash of the source label values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#modulus DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#modulus}
  */
  readonly modulus?: number;
  /**
  * Regular expression against which the extracted value is matched. Default is '(.*)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#regex DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#replacement DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#replacement}
  */
  readonly replacement?: string;
  /**
  * Separator placed between concatenated source label values. default is ';'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#separator DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#separator}
  */
  readonly separator?: string;
  /**
  * The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#source_labels DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#source_labels}
  */
  readonly sourceLabels: string[];
  /**
  * Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#target_label DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#target_label}
  */
  readonly targetLabel?: string;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigsToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    modulus: cdktf.numberToTerraform(struct!.modulus),
    regex: cdktf.stringToTerraform(struct!.regex),
    replacement: cdktf.stringToTerraform(struct!.replacement),
    separator: cdktf.stringToTerraform(struct!.separator),
    source_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceLabels),
    target_label: cdktf.stringToTerraform(struct!.targetLabel),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigsToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modulus: {
      value: cdktf.numberToHclTerraform(struct!.modulus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_label: {
      value: cdktf.stringToHclTerraform(struct!.targetLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._modulus !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulus = this._modulus;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._sourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabels = this._sourceLabels;
    }
    if (this._targetLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLabel = this._targetLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._modulus = undefined;
      this._regex = undefined;
      this._replacement = undefined;
      this._separator = undefined;
      this._sourceLabels = undefined;
      this._targetLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._modulus = value.modulus;
      this._regex = value.regex;
      this._replacement = value.replacement;
      this._separator = value.separator;
      this._sourceLabels = value.sourceLabels;
      this._targetLabel = value.targetLabel;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // modulus - computed: false, optional: true, required: false
  private _modulus?: number; 
  public get modulus() {
    return this.getNumberAttribute('modulus');
  }
  public set modulus(value: number) {
    this._modulus = value;
  }
  public resetModulus() {
    this._modulus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulusInput() {
    return this._modulus;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // source_labels - computed: false, optional: false, required: true
  private _sourceLabels?: string[]; 
  public get sourceLabels() {
    return this.getListAttribute('source_labels');
  }
  public set sourceLabels(value: string[]) {
    this._sourceLabels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelsInput() {
    return this._sourceLabels;
  }

  // target_label - computed: false, optional: true, required: false
  private _targetLabel?: string; 
  public get targetLabel() {
    return this.getStringAttribute('target_label');
  }
  public set targetLabel(value: string) {
    this._targetLabel = value;
  }
  public resetTargetLabel() {
    this._targetLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLabelInput() {
    return this._targetLabel;
  }
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigsOutputReference {
    return new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClient {
  /**
  * Additional HTTP headers to be sent along with each remote write request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#additional_headers DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#additional_headers}
  */
  readonly additionalHeaders?: { [key: string]: string };
  /**
  * Type of authorzation to use to access the remote write endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#authorization DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#authorization}
  */
  readonly authorization: string;
  /**
  * Name of a secret in the namespace configured for authorization secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#authorization_secret_name DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#authorization_secret_name}
  */
  readonly authorizationSecretName: string;
  /**
  * Configure whether HTTP requests follow HTTP 3xx redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#follow_redirects DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Name of the remote write config, which if specified must be unique among remote write configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#name DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Optional proxy URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#proxy_url DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * List of remote write relabel configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#relabel_configs DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#relabel_configs}
  */
  readonly relabelConfigs?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigs[] | cdktf.IResolvable;
  /**
  * Timeout for requests to the remote write endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#timeout DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * The URL of the endpoint to send samples to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#url DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalHeaders),
    authorization: cdktf.stringToTerraform(struct!.authorization),
    authorization_secret_name: cdktf.stringToTerraform(struct!.authorizationSecretName),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    name: cdktf.stringToTerraform(struct!.name),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    relabel_configs: cdktf.listMapper(dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigsToTerraform, false)(struct!.relabelConfigs),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    authorization: {
      value: cdktf.stringToHclTerraform(struct!.authorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.authorizationSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relabel_configs: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigsToHclTerraform, false)(struct!.relabelConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigsList",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalHeaders = this._additionalHeaders;
    }
    if (this._authorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization;
    }
    if (this._authorizationSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationSecretName = this._authorizationSecretName;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    if (this._relabelConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relabelConfigs = this._relabelConfigs?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalHeaders = undefined;
      this._authorization = undefined;
      this._authorizationSecretName = undefined;
      this._followRedirects = undefined;
      this._name = undefined;
      this._proxyUrl = undefined;
      this._relabelConfigs.internalValue = undefined;
      this._timeout = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalHeaders = value.additionalHeaders;
      this._authorization = value.authorization;
      this._authorizationSecretName = value.authorizationSecretName;
      this._followRedirects = value.followRedirects;
      this._name = value.name;
      this._proxyUrl = value.proxyUrl;
      this._relabelConfigs.internalValue = value.relabelConfigs;
      this._timeout = value.timeout;
      this._url = value.url;
    }
  }

  // additional_headers - computed: false, optional: true, required: false
  private _additionalHeaders?: { [key: string]: string }; 
  public get additionalHeaders() {
    return this.getStringMapAttribute('additional_headers');
  }
  public set additionalHeaders(value: { [key: string]: string }) {
    this._additionalHeaders = value;
  }
  public resetAdditionalHeaders() {
    this._additionalHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalHeadersInput() {
    return this._additionalHeaders;
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // authorization_secret_name - computed: false, optional: false, required: true
  private _authorizationSecretName?: string; 
  public get authorizationSecretName() {
    return this.getStringAttribute('authorization_secret_name');
  }
  public set authorizationSecretName(value: string) {
    this._authorizationSecretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationSecretNameInput() {
    return this._authorizationSecretName;
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
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

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // relabel_configs - computed: false, optional: true, required: false
  private _relabelConfigs = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigsList(this, "relabel_configs", false);
  public get relabelConfigs() {
    return this._relabelConfigs;
  }
  public putRelabelConfigs(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientRelabelConfigs[] | cdktf.IResolvable) {
    this._relabelConfigs.internalValue = value;
  }
  public resetRelabelConfigs() {
    this._relabelConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relabelConfigsInput() {
    return this._relabelConfigs.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteQueue {
  /**
  * Maximum time a sample will wait in buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#batch_send_deadline DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#batch_send_deadline}
  */
  readonly batchSendDeadline?: string;
  /**
  * Number of samples to buffer per shard before we block reading of more
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#capacity DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#capacity}
  */
  readonly capacity?: number;
  /**
  * Maximum retry delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#max_back_off_period DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#max_back_off_period}
  */
  readonly maxBackOffPeriod?: string;
  /**
  * Maximum number of samples per send.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#max_samples_per_send DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#max_samples_per_send}
  */
  readonly maxSamplesPerSend?: number;
  /**
  * Maximum number of shards, i.e. amount of concurrency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#max_shards DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#max_shards}
  */
  readonly maxShards?: number;
  /**
  * Initial retry delay. Gets doubled for every retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#min_back_off_period DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#min_back_off_period}
  */
  readonly minBackOffPeriod?: string;
  /**
  * Minimum number of shards, i.e. amount of concurrency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#min_shards DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#min_shards}
  */
  readonly minShards?: number;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteQueueToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_send_deadline: cdktf.stringToTerraform(struct!.batchSendDeadline),
    capacity: cdktf.numberToTerraform(struct!.capacity),
    max_back_off_period: cdktf.stringToTerraform(struct!.maxBackOffPeriod),
    max_samples_per_send: cdktf.numberToTerraform(struct!.maxSamplesPerSend),
    max_shards: cdktf.numberToTerraform(struct!.maxShards),
    min_back_off_period: cdktf.stringToTerraform(struct!.minBackOffPeriod),
    min_shards: cdktf.numberToTerraform(struct!.minShards),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteQueueToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_send_deadline: {
      value: cdktf.stringToHclTerraform(struct!.batchSendDeadline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_back_off_period: {
      value: cdktf.stringToHclTerraform(struct!.maxBackOffPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_samples_per_send: {
      value: cdktf.numberToHclTerraform(struct!.maxSamplesPerSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_shards: {
      value: cdktf.numberToHclTerraform(struct!.maxShards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_back_off_period: {
      value: cdktf.stringToHclTerraform(struct!.minBackOffPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_shards: {
      value: cdktf.numberToHclTerraform(struct!.minShards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteQueue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSendDeadline !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSendDeadline = this._batchSendDeadline;
    }
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._maxBackOffPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackOffPeriod = this._maxBackOffPeriod;
    }
    if (this._maxSamplesPerSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSamplesPerSend = this._maxSamplesPerSend;
    }
    if (this._maxShards !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxShards = this._maxShards;
    }
    if (this._minBackOffPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBackOffPeriod = this._minBackOffPeriod;
    }
    if (this._minShards !== undefined) {
      hasAnyValues = true;
      internalValueResult.minShards = this._minShards;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteQueue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchSendDeadline = undefined;
      this._capacity = undefined;
      this._maxBackOffPeriod = undefined;
      this._maxSamplesPerSend = undefined;
      this._maxShards = undefined;
      this._minBackOffPeriod = undefined;
      this._minShards = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchSendDeadline = value.batchSendDeadline;
      this._capacity = value.capacity;
      this._maxBackOffPeriod = value.maxBackOffPeriod;
      this._maxSamplesPerSend = value.maxSamplesPerSend;
      this._maxShards = value.maxShards;
      this._minBackOffPeriod = value.minBackOffPeriod;
      this._minShards = value.minShards;
    }
  }

  // batch_send_deadline - computed: false, optional: true, required: false
  private _batchSendDeadline?: string; 
  public get batchSendDeadline() {
    return this.getStringAttribute('batch_send_deadline');
  }
  public set batchSendDeadline(value: string) {
    this._batchSendDeadline = value;
  }
  public resetBatchSendDeadline() {
    this._batchSendDeadline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSendDeadlineInput() {
    return this._batchSendDeadline;
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // max_back_off_period - computed: false, optional: true, required: false
  private _maxBackOffPeriod?: string; 
  public get maxBackOffPeriod() {
    return this.getStringAttribute('max_back_off_period');
  }
  public set maxBackOffPeriod(value: string) {
    this._maxBackOffPeriod = value;
  }
  public resetMaxBackOffPeriod() {
    this._maxBackOffPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackOffPeriodInput() {
    return this._maxBackOffPeriod;
  }

  // max_samples_per_send - computed: false, optional: true, required: false
  private _maxSamplesPerSend?: number; 
  public get maxSamplesPerSend() {
    return this.getNumberAttribute('max_samples_per_send');
  }
  public set maxSamplesPerSend(value: number) {
    this._maxSamplesPerSend = value;
  }
  public resetMaxSamplesPerSend() {
    this._maxSamplesPerSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSamplesPerSendInput() {
    return this._maxSamplesPerSend;
  }

  // max_shards - computed: false, optional: true, required: false
  private _maxShards?: number; 
  public get maxShards() {
    return this.getNumberAttribute('max_shards');
  }
  public set maxShards(value: number) {
    this._maxShards = value;
  }
  public resetMaxShards() {
    this._maxShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxShardsInput() {
    return this._maxShards;
  }

  // min_back_off_period - computed: false, optional: true, required: false
  private _minBackOffPeriod?: string; 
  public get minBackOffPeriod() {
    return this.getStringAttribute('min_back_off_period');
  }
  public set minBackOffPeriod(value: string) {
    this._minBackOffPeriod = value;
  }
  public resetMinBackOffPeriod() {
    this._minBackOffPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBackOffPeriodInput() {
    return this._minBackOffPeriod;
  }

  // min_shards - computed: false, optional: true, required: false
  private _minShards?: number; 
  public get minShards() {
    return this.getNumberAttribute('min_shards');
  }
  public set minShards(value: number) {
    this._minShards = value;
  }
  public resetMinShards() {
    this._minShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minShardsInput() {
    return this._minShards;
  }
}
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWrite {
  /**
  * Defines the configuration for remote write client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#client DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#client}
  */
  readonly client?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClient;
  /**
  * Enable remote-write functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#enabled DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Defines the configuration for remote write client queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#queue DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#queue}
  */
  readonly queue?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteQueue;
  /**
  * Minimum period to wait between refreshing remote-write reconfigurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#refresh_period DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#refresh_period}
  */
  readonly refreshPeriod?: string;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientToTerraform(struct!.client),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    queue: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteQueueToTerraform(struct!.queue),
    refresh_period: cdktf.stringToTerraform(struct!.refreshPeriod),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientToHclTerraform(struct!.client),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClient",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    queue: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteQueueToHclTerraform(struct!.queue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteQueue",
    },
    refresh_period: {
      value: cdktf.stringToHclTerraform(struct!.refreshPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._queue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue?.internalValue;
    }
    if (this._refreshPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshPeriod = this._refreshPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._client.internalValue = undefined;
      this._enabled = undefined;
      this._queue.internalValue = undefined;
      this._refreshPeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._client.internalValue = value.client;
      this._enabled = value.enabled;
      this._queue.internalValue = value.queue;
      this._refreshPeriod = value.refreshPeriod;
    }
  }

  // client - computed: false, optional: true, required: false
  private _client = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClientOutputReference(this, "client");
  public get client() {
    return this._client;
  }
  public putClient(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteClient) {
    this._client.internalValue = value;
  }
  public resetClient() {
    this._client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // queue - computed: false, optional: true, required: false
  private _queue = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteQueueOutputReference(this, "queue");
  public get queue() {
    return this._queue;
  }
  public putQueue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteQueue) {
    this._queue.internalValue = value;
  }
  public resetQueue() {
    this._queue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue.internalValue;
  }

  // refresh_period - computed: false, optional: true, required: false
  private _refreshPeriod?: string; 
  public get refreshPeriod() {
    return this.getStringAttribute('refresh_period');
  }
  public set refreshPeriod(value: string) {
    this._refreshPeriod = value;
  }
  public resetRefreshPeriod() {
    this._refreshPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshPeriodInput() {
    return this._refreshPeriod;
  }
}
export interface DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpec {
  /**
  * Defines alert manager configuration to notify on firing alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#alertmanager DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#alertmanager}
  */
  readonly alertmanager?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanager;
  /**
  * Interval on how frequently to evaluate rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#evaluation_interval DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#evaluation_interval}
  */
  readonly evaluationInterval?: string;
  /**
  * Overrides defines the config overrides to be applied per-tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#overrides DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#overrides}
  */
  readonly overrides?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverrides;
  /**
  * Interval on how frequently to poll for new rule definitions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#poll_interval DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#poll_interval}
  */
  readonly pollInterval?: string;
  /**
  * Defines a remote write endpoint to write recording rule metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#remote_write DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest#remote_write}
  */
  readonly remoteWrite?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWrite;
}

export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecToTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alertmanager: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerToTerraform(struct!.alertmanager),
    evaluation_interval: cdktf.stringToTerraform(struct!.evaluationInterval),
    overrides: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesToTerraform(struct!.overrides),
    poll_interval: cdktf.stringToTerraform(struct!.pollInterval),
    remote_write: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteToTerraform(struct!.remoteWrite),
  }
}


export function dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alertmanager: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerToHclTerraform(struct!.alertmanager),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanager",
    },
    evaluation_interval: {
      value: cdktf.stringToHclTerraform(struct!.evaluationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overrides: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesToHclTerraform(struct!.overrides),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverrides",
    },
    poll_interval: {
      value: cdktf.stringToHclTerraform(struct!.pollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_write: {
      value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteToHclTerraform(struct!.remoteWrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWrite",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertmanager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertmanager = this._alertmanager?.internalValue;
    }
    if (this._evaluationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationInterval = this._evaluationInterval;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    if (this._pollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollInterval = this._pollInterval;
    }
    if (this._remoteWrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteWrite = this._remoteWrite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertmanager.internalValue = undefined;
      this._evaluationInterval = undefined;
      this._overrides.internalValue = undefined;
      this._pollInterval = undefined;
      this._remoteWrite.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertmanager.internalValue = value.alertmanager;
      this._evaluationInterval = value.evaluationInterval;
      this._overrides.internalValue = value.overrides;
      this._pollInterval = value.pollInterval;
      this._remoteWrite.internalValue = value.remoteWrite;
    }
  }

  // alertmanager - computed: false, optional: true, required: false
  private _alertmanager = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanagerOutputReference(this, "alertmanager");
  public get alertmanager() {
    return this._alertmanager;
  }
  public putAlertmanager(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecAlertmanager) {
    this._alertmanager.internalValue = value;
  }
  public resetAlertmanager() {
    this._alertmanager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertmanagerInput() {
    return this._alertmanager.internalValue;
  }

  // evaluation_interval - computed: false, optional: true, required: false
  private _evaluationInterval?: string; 
  public get evaluationInterval() {
    return this.getStringAttribute('evaluation_interval');
  }
  public set evaluationInterval(value: string) {
    this._evaluationInterval = value;
  }
  public resetEvaluationInterval() {
    this._evaluationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationIntervalInput() {
    return this._evaluationInterval;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverridesOutputReference(this, "overrides");
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOverrides) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // poll_interval - computed: false, optional: true, required: false
  private _pollInterval?: string; 
  public get pollInterval() {
    return this.getStringAttribute('poll_interval');
  }
  public set pollInterval(value: string) {
    this._pollInterval = value;
  }
  public resetPollInterval() {
    this._pollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollIntervalInput() {
    return this._pollInterval;
  }

  // remote_write - computed: false, optional: true, required: false
  private _remoteWrite = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWriteOutputReference(this, "remote_write");
  public get remoteWrite() {
    return this._remoteWrite;
  }
  public putRemoteWrite(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecRemoteWrite) {
    this._remoteWrite.internalValue = value;
  }
  public resetRemoteWrite() {
    this._remoteWrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteWriteInput() {
    return this._remoteWrite.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest k8s_loki_grafana_com_ruler_config_v1beta1_manifest}
*/
export class DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_loki_grafana_com_ruler_config_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLokiGrafanaComRulerConfigV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_loki_grafana_com_ruler_config_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/loki_grafana_com_ruler_config_v1beta1_manifest k8s_loki_grafana_com_ruler_config_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_loki_grafana_com_ruler_config_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpec) {
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
      metadata: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLokiGrafanaComRulerConfigV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
