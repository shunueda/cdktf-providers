// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#metadata DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#spec DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpec;
}
export interface DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#annotations DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#labels DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#name DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#namespace DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlPasswordSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#field DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#name DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlPasswordSecretToTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlPasswordSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlPasswordSecretToHclTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlPasswordSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
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

export class DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlPasswordSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlPasswordSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlPasswordSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._name = value.name;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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
export interface DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysql {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#database DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#host DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#password_secret DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#password_secret}
  */
  readonly passwordSecret?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlPasswordSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#port DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#url DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#username DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlToTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    password_secret: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlPasswordSecretToTerraform(struct!.passwordSecret),
    port: cdktf.numberToTerraform(struct!.port),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlToHclTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret: {
      value: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlPasswordSecretToHclTerraform(struct!.passwordSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlPasswordSecret",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
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

export class DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._passwordSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecret = this._passwordSecret?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._passwordSecret.internalValue = undefined;
      this._port = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._passwordSecret.internalValue = value.passwordSecret;
      this._port = value.port;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password_secret - computed: false, optional: true, required: false
  private _passwordSecret = new DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlPasswordSecretOutputReference(this, "password_secret");
  public get passwordSecret() {
    return this._passwordSecret;
  }
  public putPasswordSecret(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlPasswordSecret) {
    this._passwordSecret.internalValue = value;
  }
  public resetPasswordSecret() {
    this._passwordSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretInput() {
    return this._passwordSecret.internalValue;
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
export interface DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresPasswordSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#field DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#name DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresPasswordSecretToTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresPasswordSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresPasswordSecretToHclTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresPasswordSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
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

export class DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresPasswordSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresPasswordSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresPasswordSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._name = value.name;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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
export interface DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgres {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#database DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#host DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#password_secret DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#password_secret}
  */
  readonly passwordSecret?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresPasswordSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#port DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#url DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#username DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresToTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgres | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    password_secret: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresPasswordSecretToTerraform(struct!.passwordSecret),
    port: cdktf.numberToTerraform(struct!.port),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresToHclTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgres | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret: {
      value: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresPasswordSecretToHclTerraform(struct!.passwordSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresPasswordSecret",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
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

export class DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgres | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._passwordSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecret = this._passwordSecret?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgres | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._passwordSecret.internalValue = undefined;
      this._port = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._passwordSecret.internalValue = value.passwordSecret;
      this._port = value.port;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password_secret - computed: false, optional: true, required: false
  private _passwordSecret = new DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresPasswordSecretOutputReference(this, "password_secret");
  public get passwordSecret() {
    return this._passwordSecret;
  }
  public putPasswordSecret(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresPasswordSecret) {
    this._passwordSecret.internalValue = value;
  }
  public resetPasswordSecret() {
    this._passwordSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretInput() {
    return this._passwordSecret.internalValue;
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
export interface DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#embedded DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#embedded}
  */
  readonly embedded?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#mysql DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#mysql}
  */
  readonly mysql?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysql;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#postgres DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#postgres}
  */
  readonly postgres?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgres;
}

export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseToTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedded: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.embedded),
    mysql: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlToTerraform(struct!.mysql),
    postgres: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresToTerraform(struct!.postgres),
  }
}


export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseToHclTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedded: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.embedded),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mysql: {
      value: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlToHclTerraform(struct!.mysql),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysql",
    },
    postgres: {
      value: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresToHclTerraform(struct!.postgres),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgres",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embedded !== undefined) {
      hasAnyValues = true;
      internalValueResult.embedded = this._embedded;
    }
    if (this._mysql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysql = this._mysql?.internalValue;
    }
    if (this._postgres?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgres = this._postgres?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embedded = undefined;
      this._mysql.internalValue = undefined;
      this._postgres.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embedded = value.embedded;
      this._mysql.internalValue = value.mysql;
      this._postgres.internalValue = value.postgres;
    }
  }

  // embedded - computed: false, optional: true, required: false
  private _embedded?: { [key: string]: string }; 
  public get embedded() {
    return this.getStringMapAttribute('embedded');
  }
  public set embedded(value: { [key: string]: string }) {
    this._embedded = value;
  }
  public resetEmbedded() {
    this._embedded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddedInput() {
    return this._embedded;
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql = new DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseMysql) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // postgres - computed: false, optional: true, required: false
  private _postgres = new DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgresOutputReference(this, "postgres");
  public get postgres() {
    return this._postgres;
  }
  public putPostgres(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabasePostgres) {
    this._postgres.internalValue = value;
  }
  public resetPostgres() {
    this._postgres.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresInput() {
    return this._postgres.internalValue;
  }
}
export interface DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecImageOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#image DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#pull_policy DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
}

export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecImageOverridesToTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecImageOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
  }
}


export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecImageOverridesToHclTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecImageOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecImageOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecImageOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecImageOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._pullPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._pullPolicy = value.pullPolicy;
    }
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

  // pull_policy - computed: false, optional: true, required: false
  private _pullPolicy?: string; 
  public get pullPolicy() {
    return this.getStringAttribute('pull_policy');
  }
  public set pullPolicy(value: string) {
    this._pullPolicy = value;
  }
  public resetPullPolicy() {
    this._pullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullPolicyInput() {
    return this._pullPolicy;
  }
}
export interface DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalPasswordSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#field DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#name DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalPasswordSecretToTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalPasswordSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalPasswordSecretToHclTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalPasswordSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
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

export class DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalPasswordSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalPasswordSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalPasswordSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._name = value.name;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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
export interface DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#host DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#password_secret DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#password_secret}
  */
  readonly passwordSecret?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalPasswordSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#port DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#username DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalToTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    password_secret: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalPasswordSecretToTerraform(struct!.passwordSecret),
    port: cdktf.numberToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalToHclTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternal | cdktf.IResolvable): any {
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
    password_secret: {
      value: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalPasswordSecretToHclTerraform(struct!.passwordSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalPasswordSecret",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._passwordSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecret = this._passwordSecret?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._passwordSecret.internalValue = undefined;
      this._port = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._passwordSecret.internalValue = value.passwordSecret;
      this._port = value.port;
      this._username = value.username;
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

  // password_secret - computed: false, optional: true, required: false
  private _passwordSecret = new DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalPasswordSecretOutputReference(this, "password_secret");
  public get passwordSecret() {
    return this._passwordSecret;
  }
  public putPasswordSecret(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalPasswordSecret) {
    this._passwordSecret.internalValue = value;
  }
  public resetPasswordSecret() {
    this._passwordSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretInput() {
    return this._passwordSecret.internalValue;
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
export interface DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitManaged {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#resources DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#resources}
  */
  readonly resources?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#storage_size DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#storage_size}
  */
  readonly storageSize?: string;
}

export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitManagedToTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitManaged | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resources),
    storage_size: cdktf.stringToTerraform(struct!.storageSize),
  }
}


export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitManagedToHclTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitManaged | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    storage_size: {
      value: cdktf.stringToHclTerraform(struct!.storageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitManaged | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._storageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSize = this._storageSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitManaged | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resources = undefined;
      this._storageSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resources = value.resources;
      this._storageSize = value.storageSize;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: { [key: string]: string }; 
  public get resources() {
    return this.getStringMapAttribute('resources');
  }
  public set resources(value: { [key: string]: string }) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // storage_size - computed: false, optional: true, required: false
  private _storageSize?: string; 
  public get storageSize() {
    return this.getStringAttribute('storage_size');
  }
  public set storageSize(value: string) {
    this._storageSize = value;
  }
  public resetStorageSize() {
    this._storageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }
}
export interface DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#external DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#external}
  */
  readonly external?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#managed DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#managed}
  */
  readonly managed?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitManaged;
}

export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitToTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalToTerraform(struct!.external),
    managed: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitManagedToTerraform(struct!.managed),
  }
}


export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitToHclTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external: {
      value: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternal",
    },
    managed: {
      value: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitManagedToHclTerraform(struct!.managed),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitManaged",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._managed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managed = this._managed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._external.internalValue = undefined;
      this._managed.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._external.internalValue = value.external;
      this._managed.internalValue = value.managed;
    }
  }

  // external - computed: false, optional: true, required: false
  private _external = new DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // managed - computed: false, optional: true, required: false
  private _managed = new DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitManagedOutputReference(this, "managed");
  public get managed() {
    return this._managed;
  }
  public putManaged(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitManaged) {
    this._managed.internalValue = value;
  }
  public resetManaged() {
    this._managed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed.internalValue;
  }
}
export interface DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#key DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#operator DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#values DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressionsToTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressionsOutputReference {
    return new DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#match_expressions DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#match_labels DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorToTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorToHclTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressionsList",
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

export class DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloak {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#hawkbit_url DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#hawkbit_url}
  */
  readonly hawkbitUrl?: string;
  /**
  * Selector for looking up Keycloak Custom Resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#instance_selector DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#instance_selector}
  */
  readonly instanceSelector?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelector;
}

export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakToTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloak | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hawkbit_url: cdktf.stringToTerraform(struct!.hawkbitUrl),
    instance_selector: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorToTerraform(struct!.instanceSelector),
  }
}


export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakToHclTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloak | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hawkbit_url: {
      value: cdktf.stringToHclTerraform(struct!.hawkbitUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_selector: {
      value: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorToHclTerraform(struct!.instanceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloak | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hawkbitUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.hawkbitUrl = this._hawkbitUrl;
    }
    if (this._instanceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSelector = this._instanceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloak | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hawkbitUrl = undefined;
      this._instanceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hawkbitUrl = value.hawkbitUrl;
      this._instanceSelector.internalValue = value.instanceSelector;
    }
  }

  // hawkbit_url - computed: false, optional: true, required: false
  private _hawkbitUrl?: string; 
  public get hawkbitUrl() {
    return this.getStringAttribute('hawkbit_url');
  }
  public set hawkbitUrl(value: string) {
    this._hawkbitUrl = value;
  }
  public resetHawkbitUrl() {
    this._hawkbitUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hawkbitUrlInput() {
    return this._hawkbitUrl;
  }

  // instance_selector - computed: false, optional: true, required: false
  private _instanceSelector = new DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelectorOutputReference(this, "instance_selector");
  public get instanceSelector() {
    return this._instanceSelector;
  }
  public putInstanceSelector(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakInstanceSelector) {
    this._instanceSelector.internalValue = value;
  }
  public resetInstanceSelector() {
    this._instanceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSelectorInput() {
    return this._instanceSelector.internalValue;
  }
}
export interface DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#keycloak DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#keycloak}
  */
  readonly keycloak?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloak;
}

export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnToTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keycloak: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakToTerraform(struct!.keycloak),
  }
}


export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnToHclTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keycloak: {
      value: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakToHclTerraform(struct!.keycloak),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloak",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keycloak?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keycloak = this._keycloak?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keycloak.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keycloak.internalValue = value.keycloak;
    }
  }

  // keycloak - computed: false, optional: true, required: false
  private _keycloak = new DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloakOutputReference(this, "keycloak");
  public get keycloak() {
    return this._keycloak;
  }
  public putKeycloak(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnKeycloak) {
    this._keycloak.internalValue = value;
  }
  public resetKeycloak() {
    this._keycloak.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keycloakInput() {
    return this._keycloak.internalValue;
  }
}
export interface DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#database DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#database}
  */
  readonly database?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#image_overrides DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#image_overrides}
  */
  readonly imageOverrides?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecImageOverrides;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#rabbit DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#rabbit}
  */
  readonly rabbit?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#sign_on DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest#sign_on}
  */
  readonly signOn?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOn;
}

export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecToTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseToTerraform(struct!.database),
    image_overrides: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecImageOverridesToTerraform(struct!.imageOverrides),
    rabbit: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitToTerraform(struct!.rabbit),
    sign_on: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnToTerraform(struct!.signOn),
  }
}


export function dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseToHclTerraform(struct!.database),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabase",
    },
    image_overrides: {
      value: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecImageOverridesToHclTerraform(struct!.imageOverrides),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecImageOverrides",
    },
    rabbit: {
      value: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitToHclTerraform(struct!.rabbit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbit",
    },
    sign_on: {
      value: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnToHclTerraform(struct!.signOn),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOn",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database?.internalValue;
    }
    if (this._imageOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageOverrides = this._imageOverrides?.internalValue;
    }
    if (this._rabbit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rabbit = this._rabbit?.internalValue;
    }
    if (this._signOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signOn = this._signOn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database.internalValue = undefined;
      this._imageOverrides.internalValue = undefined;
      this._rabbit.internalValue = undefined;
      this._signOn.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database.internalValue = value.database;
      this._imageOverrides.internalValue = value.imageOverrides;
      this._rabbit.internalValue = value.rabbit;
      this._signOn.internalValue = value.signOn;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database = new DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabaseOutputReference(this, "database");
  public get database() {
    return this._database;
  }
  public putDatabase(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecDatabase) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // image_overrides - computed: false, optional: true, required: false
  private _imageOverrides = new DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecImageOverridesOutputReference(this, "image_overrides");
  public get imageOverrides() {
    return this._imageOverrides;
  }
  public putImageOverrides(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecImageOverrides) {
    this._imageOverrides.internalValue = value;
  }
  public resetImageOverrides() {
    this._imageOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOverridesInput() {
    return this._imageOverrides.internalValue;
  }

  // rabbit - computed: false, optional: true, required: false
  private _rabbit = new DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbitOutputReference(this, "rabbit");
  public get rabbit() {
    return this._rabbit;
  }
  public putRabbit(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecRabbit) {
    this._rabbit.internalValue = value;
  }
  public resetRabbit() {
    this._rabbit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rabbitInput() {
    return this._rabbit.internalValue;
  }

  // sign_on - computed: false, optional: true, required: false
  private _signOn = new DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOnOutputReference(this, "sign_on");
  public get signOn() {
    return this._signOn;
  }
  public putSignOn(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecSignOn) {
    this._signOn.internalValue = value;
  }
  public resetSignOn() {
    this._signOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signOnInput() {
    return this._signOn.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest k8s_iot_eclipse_org_hawkbit_v1alpha1_manifest}
*/
export class DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_iot_eclipse_org_hawkbit_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SIotEclipseOrgHawkbitV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_iot_eclipse_org_hawkbit_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/iot_eclipse_org_hawkbit_v1alpha1_manifest k8s_iot_eclipse_org_hawkbit_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_iot_eclipse_org_hawkbit_v1alpha1_manifest',
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
  private _metadata = new DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpec) {
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
      metadata: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SIotEclipseOrgHawkbitV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
