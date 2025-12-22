// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#metadata DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestMetadata;
  /**
  * GrafanaDatasourceSpec defines the desired state of GrafanaDatasource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#spec DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpec;
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#annotations DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#labels DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#namespace DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestMetadataToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecDatasource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#access DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#access}
  */
  readonly access?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#basic_auth DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#basic_auth}
  */
  readonly basicAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#basic_auth_user DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#basic_auth_user}
  */
  readonly basicAuthUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#database DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#database}
  */
  readonly database?: string;
  /**
  * Deprecated field, it has no effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#editable DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#editable}
  */
  readonly editable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#is_default DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#json_data DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#json_data}
  */
  readonly jsonData?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Deprecated field, it has no effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#org_id DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#org_id}
  */
  readonly orgId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#secure_json_data DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#secure_json_data}
  */
  readonly secureJsonData?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#type DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#uid DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#uid}
  */
  readonly uid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#url DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#user DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecDatasourceToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecDatasource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    basic_auth: cdktf.booleanToTerraform(struct!.basicAuth),
    basic_auth_user: cdktf.stringToTerraform(struct!.basicAuthUser),
    database: cdktf.stringToTerraform(struct!.database),
    editable: cdktf.booleanToTerraform(struct!.editable),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    json_data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.jsonData),
    name: cdktf.stringToTerraform(struct!.name),
    org_id: cdktf.numberToTerraform(struct!.orgId),
    secure_json_data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.secureJsonData),
    type: cdktf.stringToTerraform(struct!.type),
    uid: cdktf.stringToTerraform(struct!.uid),
    url: cdktf.stringToTerraform(struct!.url),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecDatasourceToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecDatasource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth: {
      value: cdktf.booleanToHclTerraform(struct!.basicAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    basic_auth_user: {
      value: cdktf.stringToHclTerraform(struct!.basicAuthUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    editable: {
      value: cdktf.booleanToHclTerraform(struct!.editable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    json_data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.jsonData),
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
    org_id: {
      value: cdktf.numberToHclTerraform(struct!.orgId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secure_json_data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.secureJsonData),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecDatasourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecDatasource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._basicAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth;
    }
    if (this._basicAuthUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthUser = this._basicAuthUser;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._editable !== undefined) {
      hasAnyValues = true;
      internalValueResult.editable = this._editable;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._jsonData !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonData = this._jsonData;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    if (this._secureJsonData !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureJsonData = this._secureJsonData;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecDatasource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._basicAuth = undefined;
      this._basicAuthUser = undefined;
      this._database = undefined;
      this._editable = undefined;
      this._isDefault = undefined;
      this._jsonData = undefined;
      this._name = undefined;
      this._orgId = undefined;
      this._secureJsonData = undefined;
      this._type = undefined;
      this._uid = undefined;
      this._url = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._basicAuth = value.basicAuth;
      this._basicAuthUser = value.basicAuthUser;
      this._database = value.database;
      this._editable = value.editable;
      this._isDefault = value.isDefault;
      this._jsonData = value.jsonData;
      this._name = value.name;
      this._orgId = value.orgId;
      this._secureJsonData = value.secureJsonData;
      this._type = value.type;
      this._uid = value.uid;
      this._url = value.url;
      this._user = value.user;
    }
  }

  // access - computed: false, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth?: boolean | cdktf.IResolvable; 
  public get basicAuth() {
    return this.getBooleanAttribute('basic_auth');
  }
  public set basicAuth(value: boolean | cdktf.IResolvable) {
    this._basicAuth = value;
  }
  public resetBasicAuth() {
    this._basicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth;
  }

  // basic_auth_user - computed: false, optional: true, required: false
  private _basicAuthUser?: string; 
  public get basicAuthUser() {
    return this.getStringAttribute('basic_auth_user');
  }
  public set basicAuthUser(value: string) {
    this._basicAuthUser = value;
  }
  public resetBasicAuthUser() {
    this._basicAuthUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUserInput() {
    return this._basicAuthUser;
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

  // editable - computed: false, optional: true, required: false
  private _editable?: boolean | cdktf.IResolvable; 
  public get editable() {
    return this.getBooleanAttribute('editable');
  }
  public set editable(value: boolean | cdktf.IResolvable) {
    this._editable = value;
  }
  public resetEditable() {
    this._editable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editableInput() {
    return this._editable;
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // json_data - computed: false, optional: true, required: false
  private _jsonData?: { [key: string]: string }; 
  public get jsonData() {
    return this.getStringMapAttribute('json_data');
  }
  public set jsonData(value: { [key: string]: string }) {
    this._jsonData = value;
  }
  public resetJsonData() {
    this._jsonData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonDataInput() {
    return this._jsonData;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: number; 
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }
  public set orgId(value: number) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // secure_json_data - computed: false, optional: true, required: false
  private _secureJsonData?: { [key: string]: string }; 
  public get secureJsonData() {
    return this.getStringMapAttribute('secure_json_data');
  }
  public set secureJsonData(value: { [key: string]: string }) {
    this._secureJsonData = value;
  }
  public resetSecureJsonData() {
    this._secureJsonData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureJsonDataInput() {
    return this._secureJsonData;
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
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#key DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#operator DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#values DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressionsToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressionsOutputReference {
    return new DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#match_expressions DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#match_labels DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressionsList",
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPlugins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#version DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPluginsToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPluginsToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPlugins | cdktf.IResolvable): any {
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPluginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPlugins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPlugins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPluginsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPlugins[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPluginsOutputReference {
    return new DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#key DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#optional DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromConfigMapKeyRefToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#key DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#optional DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromSecretKeyRefToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromSecretKeyRefToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#config_map_key_ref DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromConfigMapKeyRef;
  /**
  * Selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#secret_key_ref DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromSecretKeyRef;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    secret_key_ref: dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromConfigMapKeyRef",
    },
    secret_key_ref: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#target_path DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#target_path}
  */
  readonly targetPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#value_from DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#value_from}
  */
  readonly valueFrom: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFrom;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_path: cdktf.stringToTerraform(struct!.targetPath),
    value_from: dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_path: {
      value: cdktf.stringToHclTerraform(struct!.targetPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPath = this._targetPath;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetPath = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetPath = value.targetPath;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // target_path - computed: false, optional: false, required: true
  private _targetPath?: string; 
  public get targetPath() {
    return this.getStringAttribute('target_path');
  }
  public set targetPath(value: string) {
    this._targetPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPathInput() {
    return this._targetPath;
  }

  // value_from - computed: false, optional: false, required: true
  private _valueFrom = new DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromValueFrom) {
    this._valueFrom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromOutputReference {
    return new DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpec {
  /**
  * allow to import this resources from an operator in a different namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#allow_cross_namespace_import DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#allow_cross_namespace_import}
  */
  readonly allowCrossNamespaceImport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#datasource DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#datasource}
  */
  readonly datasource: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecDatasource;
  /**
  * selects Grafana instances for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#instance_selector DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#instance_selector}
  */
  readonly instanceSelector: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelector;
  /**
  * plugins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#plugins DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#plugins}
  */
  readonly plugins?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPlugins[] | cdktf.IResolvable;
  /**
  * how often the datasource is refreshed, defaults to 5m if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#resync_period DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#resync_period}
  */
  readonly resyncPeriod?: string;
  /**
  * environments variables from secrets or config maps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#values_from DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest#values_from}
  */
  readonly valuesFrom?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFrom[] | cdktf.IResolvable;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_cross_namespace_import: cdktf.booleanToTerraform(struct!.allowCrossNamespaceImport),
    datasource: dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecDatasourceToTerraform(struct!.datasource),
    instance_selector: dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorToTerraform(struct!.instanceSelector),
    plugins: cdktf.listMapper(dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPluginsToTerraform, false)(struct!.plugins),
    resync_period: cdktf.stringToTerraform(struct!.resyncPeriod),
    values_from: cdktf.listMapper(dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromToTerraform, false)(struct!.valuesFrom),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_cross_namespace_import: {
      value: cdktf.booleanToHclTerraform(struct!.allowCrossNamespaceImport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    datasource: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecDatasourceToHclTerraform(struct!.datasource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecDatasource",
    },
    instance_selector: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorToHclTerraform(struct!.instanceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelector",
    },
    plugins: {
      value: cdktf.listMapperHcl(dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPluginsToHclTerraform, false)(struct!.plugins),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPluginsList",
    },
    resync_period: {
      value: cdktf.stringToHclTerraform(struct!.resyncPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_from: {
      value: cdktf.listMapperHcl(dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromToHclTerraform, false)(struct!.valuesFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCrossNamespaceImport !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCrossNamespaceImport = this._allowCrossNamespaceImport;
    }
    if (this._datasource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource?.internalValue;
    }
    if (this._instanceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSelector = this._instanceSelector?.internalValue;
    }
    if (this._plugins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugins = this._plugins?.internalValue;
    }
    if (this._resyncPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.resyncPeriod = this._resyncPeriod;
    }
    if (this._valuesFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesFrom = this._valuesFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowCrossNamespaceImport = undefined;
      this._datasource.internalValue = undefined;
      this._instanceSelector.internalValue = undefined;
      this._plugins.internalValue = undefined;
      this._resyncPeriod = undefined;
      this._valuesFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowCrossNamespaceImport = value.allowCrossNamespaceImport;
      this._datasource.internalValue = value.datasource;
      this._instanceSelector.internalValue = value.instanceSelector;
      this._plugins.internalValue = value.plugins;
      this._resyncPeriod = value.resyncPeriod;
      this._valuesFrom.internalValue = value.valuesFrom;
    }
  }

  // allow_cross_namespace_import - computed: false, optional: true, required: false
  private _allowCrossNamespaceImport?: boolean | cdktf.IResolvable; 
  public get allowCrossNamespaceImport() {
    return this.getBooleanAttribute('allow_cross_namespace_import');
  }
  public set allowCrossNamespaceImport(value: boolean | cdktf.IResolvable) {
    this._allowCrossNamespaceImport = value;
  }
  public resetAllowCrossNamespaceImport() {
    this._allowCrossNamespaceImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCrossNamespaceImportInput() {
    return this._allowCrossNamespaceImport;
  }

  // datasource - computed: false, optional: false, required: true
  private _datasource = new DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecDatasourceOutputReference(this, "datasource");
  public get datasource() {
    return this._datasource;
  }
  public putDatasource(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecDatasource) {
    this._datasource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource.internalValue;
  }

  // instance_selector - computed: false, optional: false, required: true
  private _instanceSelector = new DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelectorOutputReference(this, "instance_selector");
  public get instanceSelector() {
    return this._instanceSelector;
  }
  public putInstanceSelector(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecInstanceSelector) {
    this._instanceSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSelectorInput() {
    return this._instanceSelector.internalValue;
  }

  // plugins - computed: false, optional: true, required: false
  private _plugins = new DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPluginsList(this, "plugins", false);
  public get plugins() {
    return this._plugins;
  }
  public putPlugins(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecPlugins[] | cdktf.IResolvable) {
    this._plugins.internalValue = value;
  }
  public resetPlugins() {
    this._plugins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsInput() {
    return this._plugins.internalValue;
  }

  // resync_period - computed: false, optional: true, required: false
  private _resyncPeriod?: string; 
  public get resyncPeriod() {
    return this.getStringAttribute('resync_period');
  }
  public set resyncPeriod(value: string) {
    this._resyncPeriod = value;
  }
  public resetResyncPeriod() {
    this._resyncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resyncPeriodInput() {
    return this._resyncPeriod;
  }

  // values_from - computed: false, optional: true, required: false
  private _valuesFrom = new DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFromList(this, "values_from", false);
  public get valuesFrom() {
    return this._valuesFrom;
  }
  public putValuesFrom(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecValuesFrom[] | cdktf.IResolvable) {
    this._valuesFrom.internalValue = value;
  }
  public resetValuesFrom() {
    this._valuesFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesFromInput() {
    return this._valuesFrom.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest k8s_grafana_integreatly_org_grafana_datasource_v1beta1_manifest}
*/
export class DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_grafana_integreatly_org_grafana_datasource_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_grafana_integreatly_org_grafana_datasource_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/grafana_integreatly_org_grafana_datasource_v1beta1_manifest k8s_grafana_integreatly_org_grafana_datasource_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_grafana_integreatly_org_grafana_datasource_v1beta1_manifest',
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
  private _metadata = new DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpec) {
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
      metadata: dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDatasourceV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
