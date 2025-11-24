// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SResourcesTeleportDevTeleportUserV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#metadata DataK8SResourcesTeleportDevTeleportUserV2Manifest#metadata}
  */
  readonly metadata: DataK8SResourcesTeleportDevTeleportUserV2ManifestMetadata;
  /**
  * User resource definition v2 from Teleport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#spec DataK8SResourcesTeleportDevTeleportUserV2Manifest#spec}
  */
  readonly spec?: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpec;
}
export interface DataK8SResourcesTeleportDevTeleportUserV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#annotations DataK8SResourcesTeleportDevTeleportUserV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#labels DataK8SResourcesTeleportDevTeleportUserV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#name DataK8SResourcesTeleportDevTeleportUserV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#namespace DataK8SResourcesTeleportDevTeleportUserV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SResourcesTeleportDevTeleportUserV2ManifestMetadataToTerraform(struct?: DataK8SResourcesTeleportDevTeleportUserV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SResourcesTeleportDevTeleportUserV2ManifestMetadataToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportUserV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SResourcesTeleportDevTeleportUserV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportUserV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportUserV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentities {
  /**
  * ConnectorID is id of registered OIDC connector, e.g. 'google-example.com'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#connector_id DataK8SResourcesTeleportDevTeleportUserV2Manifest#connector_id}
  */
  readonly connectorId?: string;
  /**
  * SAMLSingleLogoutURL is the SAML Single log-out URL to initiate SAML SLO (single log-out), if applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#saml_single_logout_url DataK8SResourcesTeleportDevTeleportUserV2Manifest#saml_single_logout_url}
  */
  readonly samlSingleLogoutUrl?: string;
  /**
  * Username is username supplied by external identity provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#username DataK8SResourcesTeleportDevTeleportUserV2Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentitiesToTerraform(struct?: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_id: cdktf.stringToTerraform(struct!.connectorId),
    saml_single_logout_url: cdktf.stringToTerraform(struct!.samlSingleLogoutUrl),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentitiesToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_id: {
      value: cdktf.stringToHclTerraform(struct!.connectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_single_logout_url: {
      value: cdktf.stringToHclTerraform(struct!.samlSingleLogoutUrl),
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

export class DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorId = this._connectorId;
    }
    if (this._samlSingleLogoutUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlSingleLogoutUrl = this._samlSingleLogoutUrl;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorId = undefined;
      this._samlSingleLogoutUrl = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorId = value.connectorId;
      this._samlSingleLogoutUrl = value.samlSingleLogoutUrl;
      this._username = value.username;
    }
  }

  // connector_id - computed: false, optional: true, required: false
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  public resetConnectorId() {
    this._connectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // saml_single_logout_url - computed: false, optional: true, required: false
  private _samlSingleLogoutUrl?: string; 
  public get samlSingleLogoutUrl() {
    return this.getStringAttribute('saml_single_logout_url');
  }
  public set samlSingleLogoutUrl(value: string) {
    this._samlSingleLogoutUrl = value;
  }
  public resetSamlSingleLogoutUrl() {
    this._samlSingleLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlSingleLogoutUrlInput() {
    return this._samlSingleLogoutUrl;
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

export class DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentitiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentities[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentitiesOutputReference {
    return new DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentities {
  /**
  * ConnectorID is id of registered OIDC connector, e.g. 'google-example.com'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#connector_id DataK8SResourcesTeleportDevTeleportUserV2Manifest#connector_id}
  */
  readonly connectorId?: string;
  /**
  * SAMLSingleLogoutURL is the SAML Single log-out URL to initiate SAML SLO (single log-out), if applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#saml_single_logout_url DataK8SResourcesTeleportDevTeleportUserV2Manifest#saml_single_logout_url}
  */
  readonly samlSingleLogoutUrl?: string;
  /**
  * Username is username supplied by external identity provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#username DataK8SResourcesTeleportDevTeleportUserV2Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentitiesToTerraform(struct?: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_id: cdktf.stringToTerraform(struct!.connectorId),
    saml_single_logout_url: cdktf.stringToTerraform(struct!.samlSingleLogoutUrl),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentitiesToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_id: {
      value: cdktf.stringToHclTerraform(struct!.connectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_single_logout_url: {
      value: cdktf.stringToHclTerraform(struct!.samlSingleLogoutUrl),
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

export class DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorId = this._connectorId;
    }
    if (this._samlSingleLogoutUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlSingleLogoutUrl = this._samlSingleLogoutUrl;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorId = undefined;
      this._samlSingleLogoutUrl = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorId = value.connectorId;
      this._samlSingleLogoutUrl = value.samlSingleLogoutUrl;
      this._username = value.username;
    }
  }

  // connector_id - computed: false, optional: true, required: false
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  public resetConnectorId() {
    this._connectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // saml_single_logout_url - computed: false, optional: true, required: false
  private _samlSingleLogoutUrl?: string; 
  public get samlSingleLogoutUrl() {
    return this.getStringAttribute('saml_single_logout_url');
  }
  public set samlSingleLogoutUrl(value: string) {
    this._samlSingleLogoutUrl = value;
  }
  public resetSamlSingleLogoutUrl() {
    this._samlSingleLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlSingleLogoutUrlInput() {
    return this._samlSingleLogoutUrl;
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

export class DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentitiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentities[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentitiesOutputReference {
    return new DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentities {
  /**
  * ConnectorID is id of registered OIDC connector, e.g. 'google-example.com'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#connector_id DataK8SResourcesTeleportDevTeleportUserV2Manifest#connector_id}
  */
  readonly connectorId?: string;
  /**
  * SAMLSingleLogoutURL is the SAML Single log-out URL to initiate SAML SLO (single log-out), if applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#saml_single_logout_url DataK8SResourcesTeleportDevTeleportUserV2Manifest#saml_single_logout_url}
  */
  readonly samlSingleLogoutUrl?: string;
  /**
  * Username is username supplied by external identity provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#username DataK8SResourcesTeleportDevTeleportUserV2Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentitiesToTerraform(struct?: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_id: cdktf.stringToTerraform(struct!.connectorId),
    saml_single_logout_url: cdktf.stringToTerraform(struct!.samlSingleLogoutUrl),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentitiesToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_id: {
      value: cdktf.stringToHclTerraform(struct!.connectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_single_logout_url: {
      value: cdktf.stringToHclTerraform(struct!.samlSingleLogoutUrl),
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

export class DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorId = this._connectorId;
    }
    if (this._samlSingleLogoutUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlSingleLogoutUrl = this._samlSingleLogoutUrl;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorId = undefined;
      this._samlSingleLogoutUrl = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorId = value.connectorId;
      this._samlSingleLogoutUrl = value.samlSingleLogoutUrl;
      this._username = value.username;
    }
  }

  // connector_id - computed: false, optional: true, required: false
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  public resetConnectorId() {
    this._connectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // saml_single_logout_url - computed: false, optional: true, required: false
  private _samlSingleLogoutUrl?: string; 
  public get samlSingleLogoutUrl() {
    return this.getStringAttribute('saml_single_logout_url');
  }
  public set samlSingleLogoutUrl(value: string) {
    this._samlSingleLogoutUrl = value;
  }
  public resetSamlSingleLogoutUrl() {
    this._samlSingleLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlSingleLogoutUrlInput() {
    return this._samlSingleLogoutUrl;
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

export class DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentitiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentities[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentitiesOutputReference {
    return new DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportUserV2ManifestSpec {
  /**
  * GithubIdentities list associated Github OAuth2 identities that let user log in using externally verified identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#github_identities DataK8SResourcesTeleportDevTeleportUserV2Manifest#github_identities}
  */
  readonly githubIdentities?: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentities[] | cdktf.IResolvable;
  /**
  * OIDCIdentities lists associated OpenID Connect identities that let user log in using externally verified identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#oidc_identities DataK8SResourcesTeleportDevTeleportUserV2Manifest#oidc_identities}
  */
  readonly oidcIdentities?: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentities[] | cdktf.IResolvable;
  /**
  * Roles is a list of roles assigned to user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#roles DataK8SResourcesTeleportDevTeleportUserV2Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * SAMLIdentities lists associated SAML identities that let user log in using externally verified identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#saml_identities DataK8SResourcesTeleportDevTeleportUserV2Manifest#saml_identities}
  */
  readonly samlIdentities?: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentities[] | cdktf.IResolvable;
  /**
  * Traits are key/value pairs received from an identity provider (through OIDC claims or SAML assertions) or from a system administrator for local accounts. Traits are used to populate role variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#traits DataK8SResourcesTeleportDevTeleportUserV2Manifest#traits}
  */
  readonly traits?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * TrustedDeviceIDs contains the IDs of trusted devices enrolled by the user. Note that SSO users are transient and thus may contain an empty TrustedDeviceIDs field, even though the user->device association exists under the Device Trust subsystem. Do not rely on this field to determine device associations or ownership, it exists for legacy/informative purposes only. Managed by the Device Trust subsystem, avoid manual edits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#trusted_device_ids DataK8SResourcesTeleportDevTeleportUserV2Manifest#trusted_device_ids}
  */
  readonly trustedDeviceIds?: string[];
}

export function dataK8SResourcesTeleportDevTeleportUserV2ManifestSpecToTerraform(struct?: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    github_identities: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentitiesToTerraform, false)(struct!.githubIdentities),
    oidc_identities: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentitiesToTerraform, false)(struct!.oidcIdentities),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    saml_identities: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentitiesToTerraform, false)(struct!.samlIdentities),
    traits: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.traits),
    trusted_device_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustedDeviceIds),
  }
}


export function dataK8SResourcesTeleportDevTeleportUserV2ManifestSpecToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    github_identities: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentitiesToHclTerraform, false)(struct!.githubIdentities),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentitiesList",
    },
    oidc_identities: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentitiesToHclTerraform, false)(struct!.oidcIdentities),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentitiesList",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    saml_identities: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentitiesToHclTerraform, false)(struct!.samlIdentities),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentitiesList",
    },
    traits: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.traits),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    trusted_device_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustedDeviceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportUserV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._githubIdentities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubIdentities = this._githubIdentities?.internalValue;
    }
    if (this._oidcIdentities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcIdentities = this._oidcIdentities?.internalValue;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._samlIdentities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlIdentities = this._samlIdentities?.internalValue;
    }
    if (this._traits !== undefined) {
      hasAnyValues = true;
      internalValueResult.traits = this._traits;
    }
    if (this._trustedDeviceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedDeviceIds = this._trustedDeviceIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._githubIdentities.internalValue = undefined;
      this._oidcIdentities.internalValue = undefined;
      this._roles = undefined;
      this._samlIdentities.internalValue = undefined;
      this._traits = undefined;
      this._trustedDeviceIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._githubIdentities.internalValue = value.githubIdentities;
      this._oidcIdentities.internalValue = value.oidcIdentities;
      this._roles = value.roles;
      this._samlIdentities.internalValue = value.samlIdentities;
      this._traits = value.traits;
      this._trustedDeviceIds = value.trustedDeviceIds;
    }
  }

  // github_identities - computed: false, optional: true, required: false
  private _githubIdentities = new DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentitiesList(this, "github_identities", false);
  public get githubIdentities() {
    return this._githubIdentities;
  }
  public putGithubIdentities(value: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecGithubIdentities[] | cdktf.IResolvable) {
    this._githubIdentities.internalValue = value;
  }
  public resetGithubIdentities() {
    this._githubIdentities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubIdentitiesInput() {
    return this._githubIdentities.internalValue;
  }

  // oidc_identities - computed: false, optional: true, required: false
  private _oidcIdentities = new DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentitiesList(this, "oidc_identities", false);
  public get oidcIdentities() {
    return this._oidcIdentities;
  }
  public putOidcIdentities(value: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOidcIdentities[] | cdktf.IResolvable) {
    this._oidcIdentities.internalValue = value;
  }
  public resetOidcIdentities() {
    this._oidcIdentities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcIdentitiesInput() {
    return this._oidcIdentities.internalValue;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // saml_identities - computed: false, optional: true, required: false
  private _samlIdentities = new DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentitiesList(this, "saml_identities", false);
  public get samlIdentities() {
    return this._samlIdentities;
  }
  public putSamlIdentities(value: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecSamlIdentities[] | cdktf.IResolvable) {
    this._samlIdentities.internalValue = value;
  }
  public resetSamlIdentities() {
    this._samlIdentities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdentitiesInput() {
    return this._samlIdentities.internalValue;
  }

  // traits - computed: false, optional: true, required: false
  private _traits?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get traits() {
    return this.interpolationForAttribute('traits');
  }
  public set traits(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._traits = value;
  }
  public resetTraits() {
    this._traits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traitsInput() {
    return this._traits;
  }

  // trusted_device_ids - computed: false, optional: true, required: false
  private _trustedDeviceIds?: string[]; 
  public get trustedDeviceIds() {
    return this.getListAttribute('trusted_device_ids');
  }
  public set trustedDeviceIds(value: string[]) {
    this._trustedDeviceIds = value;
  }
  public resetTrustedDeviceIds() {
    this._trustedDeviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedDeviceIdsInput() {
    return this._trustedDeviceIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest k8s_resources_teleport_dev_teleport_user_v2_manifest}
*/
export class DataK8SResourcesTeleportDevTeleportUserV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_resources_teleport_dev_teleport_user_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SResourcesTeleportDevTeleportUserV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SResourcesTeleportDevTeleportUserV2Manifest to import
  * @param importFromId The id of the existing DataK8SResourcesTeleportDevTeleportUserV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SResourcesTeleportDevTeleportUserV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_resources_teleport_dev_teleport_user_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/resources_teleport_dev_teleport_user_v2_manifest k8s_resources_teleport_dev_teleport_user_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SResourcesTeleportDevTeleportUserV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SResourcesTeleportDevTeleportUserV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_resources_teleport_dev_teleport_user_v2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SResourcesTeleportDevTeleportUserV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SResourcesTeleportDevTeleportUserV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SResourcesTeleportDevTeleportUserV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SResourcesTeleportDevTeleportUserV2ManifestSpec) {
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
      metadata: dataK8SResourcesTeleportDevTeleportUserV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SResourcesTeleportDevTeleportUserV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SResourcesTeleportDevTeleportUserV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SResourcesTeleportDevTeleportUserV2ManifestMetadata",
      },
      spec: {
        value: dataK8SResourcesTeleportDevTeleportUserV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SResourcesTeleportDevTeleportUserV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
