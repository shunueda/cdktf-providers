// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#metadata DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestMetadata;
  /**
  * KeycloakClientSpec defines the desired state of KeycloakClient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#spec DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpec;
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#annotations DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#labels DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#namespace DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesData {
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#_id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#_id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The attributes associated with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * A unique name for this resource. The name can be used to uniquely identify a resource, useful when querying for a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#display_name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * An URI pointing to an icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#icon_uri DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#icon_uri}
  */
  readonly iconUri?: string;
  /**
  * A unique name for this resource. The name can be used to uniquely identify a resource, useful when querying for a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * True if the access to this resource can be managed by the resource owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#owner_managed_access DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#owner_managed_access}
  */
  readonly ownerManagedAccess?: boolean | cdktf.IResolvable;
  /**
  * The scopes associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#scopes DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * The type of this resource. It can be used to group different resource instances with the same type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#type DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Set of URIs which are protected by resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#uris DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#uris}
  */
  readonly uris?: string[];
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesDataToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _id: cdktf.stringToTerraform(struct!.id),
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    icon_uri: cdktf.stringToTerraform(struct!.iconUri),
    name: cdktf.stringToTerraform(struct!.name),
    owner_managed_access: cdktf.booleanToTerraform(struct!.ownerManagedAccess),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    type: cdktf.stringToTerraform(struct!.type),
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesDataToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon_uri: {
      value: cdktf.stringToHclTerraform(struct!.iconUri),
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
    owner_managed_access: {
      value: cdktf.booleanToHclTerraform(struct!.ownerManagedAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._iconUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconUri = this._iconUri;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ownerManagedAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerManagedAccess = this._ownerManagedAccess;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._attributes = undefined;
      this._displayName = undefined;
      this._iconUri = undefined;
      this._name = undefined;
      this._ownerManagedAccess = undefined;
      this._scopes = undefined;
      this._type = undefined;
      this._uris = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._attributes = value.attributes;
      this._displayName = value.displayName;
      this._iconUri = value.iconUri;
      this._name = value.name;
      this._ownerManagedAccess = value.ownerManagedAccess;
      this._scopes = value.scopes;
      this._type = value.type;
      this._uris = value.uris;
    }
  }

  // _id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('_id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // icon_uri - computed: false, optional: true, required: false
  private _iconUri?: string; 
  public get iconUri() {
    return this.getStringAttribute('icon_uri');
  }
  public set iconUri(value: string) {
    this._iconUri = value;
  }
  public resetIconUri() {
    this._iconUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUriInput() {
    return this._iconUri;
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

  // owner_managed_access - computed: false, optional: true, required: false
  private _ownerManagedAccess?: boolean | cdktf.IResolvable; 
  public get ownerManagedAccess() {
    return this.getBooleanAttribute('owner_managed_access');
  }
  public set ownerManagedAccess(value: boolean | cdktf.IResolvable) {
    this._ownerManagedAccess = value;
  }
  public resetOwnerManagedAccess() {
    this._ownerManagedAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerManagedAccessInput() {
    return this._ownerManagedAccess;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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

  // uris - computed: false, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesDataList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesData[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesDataOutputReference {
    return new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPolicies {
  /**
  * Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#config DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * The decision strategy dictates how the policies associated with a given permission are evaluated and how a final decision is obtained. 'Affirmative' means that at least one policy must evaluate to a positive decision in order for the final decision to be also positive. 'Unanimous' means that all policies must evaluate to a positive decision in order for the final decision to be also positive. 'Consensus' means that the number of positive decisions must be greater than the number of negative decisions. If the number of positive and negative is the same, the final decision will be negative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#decision_strategy DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * A description for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#description DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The logic dictates how the policy decision should be made. If 'Positive', the resulting effect (permit or deny) obtained during the evaluation of this policy will be used to perform a decision. If 'Negative', the resulting effect will be negated, in other words, a permit becomes a deny and vice-versa.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#logic DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#logic}
  */
  readonly logic?: string;
  /**
  * The name of this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#owner DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#owner}
  */
  readonly owner?: string;
  /**
  * Policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#policies DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#policies}
  */
  readonly policies?: string[];
  /**
  * Resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#resources DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#resources}
  */
  readonly resources?: string[];
  /**
  * Resources Data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#resources_data DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#resources_data}
  */
  readonly resourcesData?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesData[] | cdktf.IResolvable;
  /**
  * Scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#scopes DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * Scopes Data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#scopes_data DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#scopes_data}
  */
  readonly scopesData?: string[];
  /**
  * Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#type DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    decision_strategy: cdktf.stringToTerraform(struct!.decisionStrategy),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    logic: cdktf.stringToTerraform(struct!.logic),
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policies),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    resources_data: cdktf.listMapper(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesDataToTerraform, false)(struct!.resourcesData),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    scopes_data: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopesData),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    decision_strategy: {
      value: cdktf.stringToHclTerraform(struct!.decisionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logic: {
      value: cdktf.stringToHclTerraform(struct!.logic),
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
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources_data: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesDataToHclTerraform, false)(struct!.resourcesData),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesDataList",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scopes_data: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopesData),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._decisionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.decisionStrategy = this._decisionStrategy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._logic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logic = this._logic;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._resourcesData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcesData = this._resourcesData?.internalValue;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._scopesData !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopesData = this._scopesData;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._decisionStrategy = undefined;
      this._description = undefined;
      this._id = undefined;
      this._logic = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._policies = undefined;
      this._resources = undefined;
      this._resourcesData.internalValue = undefined;
      this._scopes = undefined;
      this._scopesData = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._decisionStrategy = value.decisionStrategy;
      this._description = value.description;
      this._id = value.id;
      this._logic = value.logic;
      this._name = value.name;
      this._owner = value.owner;
      this._policies = value.policies;
      this._resources = value.resources;
      this._resourcesData.internalValue = value.resourcesData;
      this._scopes = value.scopes;
      this._scopesData = value.scopesData;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // decision_strategy - computed: false, optional: true, required: false
  private _decisionStrategy?: string; 
  public get decisionStrategy() {
    return this.getStringAttribute('decision_strategy');
  }
  public set decisionStrategy(value: string) {
    this._decisionStrategy = value;
  }
  public resetDecisionStrategy() {
    this._decisionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionStrategyInput() {
    return this._decisionStrategy;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // logic - computed: false, optional: true, required: false
  private _logic?: string; 
  public get logic() {
    return this.getStringAttribute('logic');
  }
  public set logic(value: string) {
    this._logic = value;
  }
  public resetLogic() {
    this._logic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicInput() {
    return this._logic;
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

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return this.getListAttribute('policies');
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // resources_data - computed: false, optional: true, required: false
  private _resourcesData = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesDataList(this, "resources_data", false);
  public get resourcesData() {
    return this._resourcesData;
  }
  public putResourcesData(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesResourcesData[] | cdktf.IResolvable) {
    this._resourcesData.internalValue = value;
  }
  public resetResourcesData() {
    this._resourcesData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesDataInput() {
    return this._resourcesData.internalValue;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // scopes_data - computed: false, optional: true, required: false
  private _scopesData?: string[]; 
  public get scopesData() {
    return this.getListAttribute('scopes_data');
  }
  public set scopesData(value: string[]) {
    this._scopesData = value;
  }
  public resetScopesData() {
    this._scopesData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesDataInput() {
    return this._scopesData;
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

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesOutputReference {
    return new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResources {
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#_id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#_id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The attributes associated with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * A unique name for this resource. The name can be used to uniquely identify a resource, useful when querying for a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#display_name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * An URI pointing to an icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#icon_uri DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#icon_uri}
  */
  readonly iconUri?: string;
  /**
  * A unique name for this resource. The name can be used to uniquely identify a resource, useful when querying for a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * True if the access to this resource can be managed by the resource owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#owner_managed_access DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#owner_managed_access}
  */
  readonly ownerManagedAccess?: boolean | cdktf.IResolvable;
  /**
  * The scopes associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#scopes DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * The type of this resource. It can be used to group different resource instances with the same type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#type DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Set of URIs which are protected by resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#uris DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#uris}
  */
  readonly uris?: string[];
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResourcesToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _id: cdktf.stringToTerraform(struct!.id),
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    icon_uri: cdktf.stringToTerraform(struct!.iconUri),
    name: cdktf.stringToTerraform(struct!.name),
    owner_managed_access: cdktf.booleanToTerraform(struct!.ownerManagedAccess),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    type: cdktf.stringToTerraform(struct!.type),
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResourcesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon_uri: {
      value: cdktf.stringToHclTerraform(struct!.iconUri),
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
    owner_managed_access: {
      value: cdktf.booleanToHclTerraform(struct!.ownerManagedAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._iconUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconUri = this._iconUri;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ownerManagedAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerManagedAccess = this._ownerManagedAccess;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._attributes = undefined;
      this._displayName = undefined;
      this._iconUri = undefined;
      this._name = undefined;
      this._ownerManagedAccess = undefined;
      this._scopes = undefined;
      this._type = undefined;
      this._uris = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._attributes = value.attributes;
      this._displayName = value.displayName;
      this._iconUri = value.iconUri;
      this._name = value.name;
      this._ownerManagedAccess = value.ownerManagedAccess;
      this._scopes = value.scopes;
      this._type = value.type;
      this._uris = value.uris;
    }
  }

  // _id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('_id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // icon_uri - computed: false, optional: true, required: false
  private _iconUri?: string; 
  public get iconUri() {
    return this.getStringAttribute('icon_uri');
  }
  public set iconUri(value: string) {
    this._iconUri = value;
  }
  public resetIconUri() {
    this._iconUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUriInput() {
    return this._iconUri;
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

  // owner_managed_access - computed: false, optional: true, required: false
  private _ownerManagedAccess?: boolean | cdktf.IResolvable; 
  public get ownerManagedAccess() {
    return this.getBooleanAttribute('owner_managed_access');
  }
  public set ownerManagedAccess(value: boolean | cdktf.IResolvable) {
    this._ownerManagedAccess = value;
  }
  public resetOwnerManagedAccess() {
    this._ownerManagedAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerManagedAccessInput() {
    return this._ownerManagedAccess;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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

  // uris - computed: false, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResourcesOutputReference {
    return new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesData {
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#_id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#_id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The attributes associated with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * A unique name for this resource. The name can be used to uniquely identify a resource, useful when querying for a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#display_name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * An URI pointing to an icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#icon_uri DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#icon_uri}
  */
  readonly iconUri?: string;
  /**
  * A unique name for this resource. The name can be used to uniquely identify a resource, useful when querying for a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * True if the access to this resource can be managed by the resource owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#owner_managed_access DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#owner_managed_access}
  */
  readonly ownerManagedAccess?: boolean | cdktf.IResolvable;
  /**
  * The scopes associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#scopes DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * The type of this resource. It can be used to group different resource instances with the same type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#type DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Set of URIs which are protected by resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#uris DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#uris}
  */
  readonly uris?: string[];
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesDataToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _id: cdktf.stringToTerraform(struct!.id),
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    icon_uri: cdktf.stringToTerraform(struct!.iconUri),
    name: cdktf.stringToTerraform(struct!.name),
    owner_managed_access: cdktf.booleanToTerraform(struct!.ownerManagedAccess),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    type: cdktf.stringToTerraform(struct!.type),
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesDataToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon_uri: {
      value: cdktf.stringToHclTerraform(struct!.iconUri),
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
    owner_managed_access: {
      value: cdktf.booleanToHclTerraform(struct!.ownerManagedAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._iconUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconUri = this._iconUri;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ownerManagedAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerManagedAccess = this._ownerManagedAccess;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._attributes = undefined;
      this._displayName = undefined;
      this._iconUri = undefined;
      this._name = undefined;
      this._ownerManagedAccess = undefined;
      this._scopes = undefined;
      this._type = undefined;
      this._uris = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._attributes = value.attributes;
      this._displayName = value.displayName;
      this._iconUri = value.iconUri;
      this._name = value.name;
      this._ownerManagedAccess = value.ownerManagedAccess;
      this._scopes = value.scopes;
      this._type = value.type;
      this._uris = value.uris;
    }
  }

  // _id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('_id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // icon_uri - computed: false, optional: true, required: false
  private _iconUri?: string; 
  public get iconUri() {
    return this.getStringAttribute('icon_uri');
  }
  public set iconUri(value: string) {
    this._iconUri = value;
  }
  public resetIconUri() {
    this._iconUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUriInput() {
    return this._iconUri;
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

  // owner_managed_access - computed: false, optional: true, required: false
  private _ownerManagedAccess?: boolean | cdktf.IResolvable; 
  public get ownerManagedAccess() {
    return this.getBooleanAttribute('owner_managed_access');
  }
  public set ownerManagedAccess(value: boolean | cdktf.IResolvable) {
    this._ownerManagedAccess = value;
  }
  public resetOwnerManagedAccess() {
    this._ownerManagedAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerManagedAccessInput() {
    return this._ownerManagedAccess;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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

  // uris - computed: false, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesDataList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesData[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesDataOutputReference {
    return new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPolicies {
  /**
  * Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#config DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * The decision strategy dictates how the policies associated with a given permission are evaluated and how a final decision is obtained. 'Affirmative' means that at least one policy must evaluate to a positive decision in order for the final decision to be also positive. 'Unanimous' means that all policies must evaluate to a positive decision in order for the final decision to be also positive. 'Consensus' means that the number of positive decisions must be greater than the number of negative decisions. If the number of positive and negative is the same, the final decision will be negative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#decision_strategy DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * A description for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#description DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The logic dictates how the policy decision should be made. If 'Positive', the resulting effect (permit or deny) obtained during the evaluation of this policy will be used to perform a decision. If 'Negative', the resulting effect will be negated, in other words, a permit becomes a deny and vice-versa.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#logic DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#logic}
  */
  readonly logic?: string;
  /**
  * The name of this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#owner DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#owner}
  */
  readonly owner?: string;
  /**
  * Policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#policies DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#policies}
  */
  readonly policies?: string[];
  /**
  * Resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#resources DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#resources}
  */
  readonly resources?: string[];
  /**
  * Resources Data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#resources_data DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#resources_data}
  */
  readonly resourcesData?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesData[] | cdktf.IResolvable;
  /**
  * Scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#scopes DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * Scopes Data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#scopes_data DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#scopes_data}
  */
  readonly scopesData?: string[];
  /**
  * Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#type DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    decision_strategy: cdktf.stringToTerraform(struct!.decisionStrategy),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    logic: cdktf.stringToTerraform(struct!.logic),
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policies),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    resources_data: cdktf.listMapper(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesDataToTerraform, false)(struct!.resourcesData),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    scopes_data: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopesData),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    decision_strategy: {
      value: cdktf.stringToHclTerraform(struct!.decisionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logic: {
      value: cdktf.stringToHclTerraform(struct!.logic),
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
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources_data: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesDataToHclTerraform, false)(struct!.resourcesData),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesDataList",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scopes_data: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopesData),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._decisionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.decisionStrategy = this._decisionStrategy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._logic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logic = this._logic;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._resourcesData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcesData = this._resourcesData?.internalValue;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._scopesData !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopesData = this._scopesData;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._decisionStrategy = undefined;
      this._description = undefined;
      this._id = undefined;
      this._logic = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._policies = undefined;
      this._resources = undefined;
      this._resourcesData.internalValue = undefined;
      this._scopes = undefined;
      this._scopesData = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._decisionStrategy = value.decisionStrategy;
      this._description = value.description;
      this._id = value.id;
      this._logic = value.logic;
      this._name = value.name;
      this._owner = value.owner;
      this._policies = value.policies;
      this._resources = value.resources;
      this._resourcesData.internalValue = value.resourcesData;
      this._scopes = value.scopes;
      this._scopesData = value.scopesData;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // decision_strategy - computed: false, optional: true, required: false
  private _decisionStrategy?: string; 
  public get decisionStrategy() {
    return this.getStringAttribute('decision_strategy');
  }
  public set decisionStrategy(value: string) {
    this._decisionStrategy = value;
  }
  public resetDecisionStrategy() {
    this._decisionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionStrategyInput() {
    return this._decisionStrategy;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // logic - computed: false, optional: true, required: false
  private _logic?: string; 
  public get logic() {
    return this.getStringAttribute('logic');
  }
  public set logic(value: string) {
    this._logic = value;
  }
  public resetLogic() {
    this._logic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicInput() {
    return this._logic;
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

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return this.getListAttribute('policies');
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // resources_data - computed: false, optional: true, required: false
  private _resourcesData = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesDataList(this, "resources_data", false);
  public get resourcesData() {
    return this._resourcesData;
  }
  public putResourcesData(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesResourcesData[] | cdktf.IResolvable) {
    this._resourcesData.internalValue = value;
  }
  public resetResourcesData() {
    this._resourcesData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesDataInput() {
    return this._resourcesData.internalValue;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // scopes_data - computed: false, optional: true, required: false
  private _scopesData?: string[]; 
  public get scopesData() {
    return this.getListAttribute('scopes_data');
  }
  public set scopesData(value: string[]) {
    this._scopesData = value;
  }
  public resetScopesData() {
    this._scopesData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesDataInput() {
    return this._scopesData;
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

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesOutputReference {
    return new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResources {
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#_id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#_id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The attributes associated with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * A unique name for this resource. The name can be used to uniquely identify a resource, useful when querying for a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#display_name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * An URI pointing to an icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#icon_uri DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#icon_uri}
  */
  readonly iconUri?: string;
  /**
  * A unique name for this resource. The name can be used to uniquely identify a resource, useful when querying for a specific resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * True if the access to this resource can be managed by the resource owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#owner_managed_access DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#owner_managed_access}
  */
  readonly ownerManagedAccess?: boolean | cdktf.IResolvable;
  /**
  * The scopes associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#scopes DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * The type of this resource. It can be used to group different resource instances with the same type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#type DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Set of URIs which are protected by resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#uris DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#uris}
  */
  readonly uris?: string[];
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResourcesToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _id: cdktf.stringToTerraform(struct!.id),
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    icon_uri: cdktf.stringToTerraform(struct!.iconUri),
    name: cdktf.stringToTerraform(struct!.name),
    owner_managed_access: cdktf.booleanToTerraform(struct!.ownerManagedAccess),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    type: cdktf.stringToTerraform(struct!.type),
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResourcesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon_uri: {
      value: cdktf.stringToHclTerraform(struct!.iconUri),
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
    owner_managed_access: {
      value: cdktf.booleanToHclTerraform(struct!.ownerManagedAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._iconUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconUri = this._iconUri;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ownerManagedAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerManagedAccess = this._ownerManagedAccess;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._attributes = undefined;
      this._displayName = undefined;
      this._iconUri = undefined;
      this._name = undefined;
      this._ownerManagedAccess = undefined;
      this._scopes = undefined;
      this._type = undefined;
      this._uris = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._attributes = value.attributes;
      this._displayName = value.displayName;
      this._iconUri = value.iconUri;
      this._name = value.name;
      this._ownerManagedAccess = value.ownerManagedAccess;
      this._scopes = value.scopes;
      this._type = value.type;
      this._uris = value.uris;
    }
  }

  // _id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('_id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // icon_uri - computed: false, optional: true, required: false
  private _iconUri?: string; 
  public get iconUri() {
    return this.getStringAttribute('icon_uri');
  }
  public set iconUri(value: string) {
    this._iconUri = value;
  }
  public resetIconUri() {
    this._iconUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUriInput() {
    return this._iconUri;
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

  // owner_managed_access - computed: false, optional: true, required: false
  private _ownerManagedAccess?: boolean | cdktf.IResolvable; 
  public get ownerManagedAccess() {
    return this.getBooleanAttribute('owner_managed_access');
  }
  public set ownerManagedAccess(value: boolean | cdktf.IResolvable) {
    this._ownerManagedAccess = value;
  }
  public resetOwnerManagedAccess() {
    this._ownerManagedAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerManagedAccessInput() {
    return this._ownerManagedAccess;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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

  // uris - computed: false, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResourcesOutputReference {
    return new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopes {
  /**
  * A unique name for this scope. The name can be used to uniquely identify a scope, useful when querying for a specific scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#display_name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * An URI pointing to an icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#icon_uri DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#icon_uri}
  */
  readonly iconUri?: string;
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique name for this scope. The name can be used to uniquely identify a scope, useful when querying for a specific scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#policies DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#policies}
  */
  readonly policies?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPolicies[] | cdktf.IResolvable;
  /**
  * Resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#resources DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResources[] | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    icon_uri: cdktf.stringToTerraform(struct!.iconUri),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    policies: cdktf.listMapper(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesToTerraform, false)(struct!.policies),
    resources: cdktf.listMapper(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResourcesToTerraform, false)(struct!.resources),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon_uri: {
      value: cdktf.stringToHclTerraform(struct!.iconUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    policies: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesList",
    },
    resources: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._iconUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconUri = this._iconUri;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._iconUri = undefined;
      this._id = undefined;
      this._name = undefined;
      this._policies.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._iconUri = value.iconUri;
      this._id = value.id;
      this._name = value.name;
      this._policies.internalValue = value.policies;
      this._resources.internalValue = value.resources;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // icon_uri - computed: false, optional: true, required: false
  private _iconUri?: string; 
  public get iconUri() {
    return this.getStringAttribute('icon_uri');
  }
  public set iconUri(value: string) {
    this._iconUri = value;
  }
  public resetIconUri() {
    this._iconUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUriInput() {
    return this._iconUri;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // policies - computed: false, optional: true, required: false
  private _policies = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesOutputReference {
    return new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettings {
  /**
  * True if resources should be managed remotely by the resource server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#allow_remote_resource_management DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#allow_remote_resource_management}
  */
  readonly allowRemoteResourceManagement?: boolean | cdktf.IResolvable;
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#client_id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * The decision strategy dictates how permissions are evaluated and how a final decision is obtained. 'Affirmative' means that at least one permission must evaluate to a positive decision in order to grant access to a resource and its scopes. 'Unanimous' means that all permissions must evaluate to a positive decision in order for the final decision to be also positive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#decision_strategy DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#policies DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#policies}
  */
  readonly policies?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPolicies[] | cdktf.IResolvable;
  /**
  * The policy enforcement mode dictates how policies are enforced when evaluating authorization requests. 'Enforcing' means requests are denied by default even when there is no policy associated with a given resource. 'Permissive' means requests are allowed even when there is no policy associated with a given resource. 'Disabled' completely disables the evaluation of policies and allows access to any resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#policy_enforcement_mode DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#policy_enforcement_mode}
  */
  readonly policyEnforcementMode?: string;
  /**
  * Resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#resources DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResources[] | cdktf.IResolvable;
  /**
  * Authorization Scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#scopes DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#scopes}
  */
  readonly scopes?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopes[] | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_remote_resource_management: cdktf.booleanToTerraform(struct!.allowRemoteResourceManagement),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    decision_strategy: cdktf.stringToTerraform(struct!.decisionStrategy),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    policies: cdktf.listMapper(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesToTerraform, false)(struct!.policies),
    policy_enforcement_mode: cdktf.stringToTerraform(struct!.policyEnforcementMode),
    resources: cdktf.listMapper(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResourcesToTerraform, false)(struct!.resources),
    scopes: cdktf.listMapper(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesToTerraform, false)(struct!.scopes),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_remote_resource_management: {
      value: cdktf.booleanToHclTerraform(struct!.allowRemoteResourceManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decision_strategy: {
      value: cdktf.stringToHclTerraform(struct!.decisionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    policies: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesList",
    },
    policy_enforcement_mode: {
      value: cdktf.stringToHclTerraform(struct!.policyEnforcementMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResourcesList",
    },
    scopes: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesToHclTerraform, false)(struct!.scopes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRemoteResourceManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRemoteResourceManagement = this._allowRemoteResourceManagement;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._decisionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.decisionStrategy = this._decisionStrategy;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._policyEnforcementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyEnforcementMode = this._policyEnforcementMode;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._scopes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRemoteResourceManagement = undefined;
      this._clientId = undefined;
      this._decisionStrategy = undefined;
      this._id = undefined;
      this._name = undefined;
      this._policies.internalValue = undefined;
      this._policyEnforcementMode = undefined;
      this._resources.internalValue = undefined;
      this._scopes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRemoteResourceManagement = value.allowRemoteResourceManagement;
      this._clientId = value.clientId;
      this._decisionStrategy = value.decisionStrategy;
      this._id = value.id;
      this._name = value.name;
      this._policies.internalValue = value.policies;
      this._policyEnforcementMode = value.policyEnforcementMode;
      this._resources.internalValue = value.resources;
      this._scopes.internalValue = value.scopes;
    }
  }

  // allow_remote_resource_management - computed: false, optional: true, required: false
  private _allowRemoteResourceManagement?: boolean | cdktf.IResolvable; 
  public get allowRemoteResourceManagement() {
    return this.getBooleanAttribute('allow_remote_resource_management');
  }
  public set allowRemoteResourceManagement(value: boolean | cdktf.IResolvable) {
    this._allowRemoteResourceManagement = value;
  }
  public resetAllowRemoteResourceManagement() {
    this._allowRemoteResourceManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteResourceManagementInput() {
    return this._allowRemoteResourceManagement;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // decision_strategy - computed: false, optional: true, required: false
  private _decisionStrategy?: string; 
  public get decisionStrategy() {
    return this.getStringAttribute('decision_strategy');
  }
  public set decisionStrategy(value: string) {
    this._decisionStrategy = value;
  }
  public resetDecisionStrategy() {
    this._decisionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionStrategyInput() {
    return this._decisionStrategy;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // policies - computed: false, optional: true, required: false
  private _policies = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // policy_enforcement_mode - computed: false, optional: true, required: false
  private _policyEnforcementMode?: string; 
  public get policyEnforcementMode() {
    return this.getStringAttribute('policy_enforcement_mode');
  }
  public set policyEnforcementMode(value: string) {
    this._policyEnforcementMode = value;
  }
  public resetPolicyEnforcementMode() {
    this._policyEnforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEnforcementModeInput() {
    return this._policyEnforcementMode;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopesList(this, "scopes", false);
  public get scopes() {
    return this._scopes;
  }
  public putScopes(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsScopes[] | cdktf.IResolvable) {
    this._scopes.internalValue = value;
  }
  public resetScopes() {
    this._scopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes.internalValue;
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappers {
  /**
  * Config options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#config DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * True if Consent Screen is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#consent_required DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#consent_required}
  */
  readonly consentRequired?: boolean | cdktf.IResolvable;
  /**
  * Text to use for displaying Consent Screen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#consent_text DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#consent_text}
  */
  readonly consentText?: string;
  /**
  * Protocol Mapper ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Protocol Mapper Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Protocol to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#protocol DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Protocol Mapper to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#protocol_mapper DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#protocol_mapper}
  */
  readonly protocolMapper?: string;
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappersToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    consent_required: cdktf.booleanToTerraform(struct!.consentRequired),
    consent_text: cdktf.stringToTerraform(struct!.consentText),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_mapper: cdktf.stringToTerraform(struct!.protocolMapper),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappersToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    consent_required: {
      value: cdktf.booleanToHclTerraform(struct!.consentRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    consent_text: {
      value: cdktf.stringToHclTerraform(struct!.consentText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_mapper: {
      value: cdktf.stringToHclTerraform(struct!.protocolMapper),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._consentRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.consentRequired = this._consentRequired;
    }
    if (this._consentText !== undefined) {
      hasAnyValues = true;
      internalValueResult.consentText = this._consentText;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolMapper !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolMapper = this._protocolMapper;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._consentRequired = undefined;
      this._consentText = undefined;
      this._id = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._protocolMapper = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._consentRequired = value.consentRequired;
      this._consentText = value.consentText;
      this._id = value.id;
      this._name = value.name;
      this._protocol = value.protocol;
      this._protocolMapper = value.protocolMapper;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // consent_required - computed: false, optional: true, required: false
  private _consentRequired?: boolean | cdktf.IResolvable; 
  public get consentRequired() {
    return this.getBooleanAttribute('consent_required');
  }
  public set consentRequired(value: boolean | cdktf.IResolvable) {
    this._consentRequired = value;
  }
  public resetConsentRequired() {
    this._consentRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentRequiredInput() {
    return this._consentRequired;
  }

  // consent_text - computed: false, optional: true, required: false
  private _consentText?: string; 
  public get consentText() {
    return this.getStringAttribute('consent_text');
  }
  public set consentText(value: string) {
    this._consentText = value;
  }
  public resetConsentText() {
    this._consentText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentTextInput() {
    return this._consentText;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_mapper - computed: false, optional: true, required: false
  private _protocolMapper?: string; 
  public get protocolMapper() {
    return this.getStringAttribute('protocol_mapper');
  }
  public set protocolMapper(value: string) {
    this._protocolMapper = value;
  }
  public resetProtocolMapper() {
    this._protocolMapper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolMapperInput() {
    return this._protocolMapper;
  }
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappersOutputReference {
    return new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClient {
  /**
  * Access options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#access DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#access}
  */
  readonly access?: { [key: string]: string };
  /**
  * Application Admin URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#admin_url DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#admin_url}
  */
  readonly adminUrl?: string;
  /**
  * Client Attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Authentication Flow Binding Overrides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#authentication_flow_binding_overrides DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#authentication_flow_binding_overrides}
  */
  readonly authenticationFlowBindingOverrides?: { [key: string]: string };
  /**
  * True if fine-grained authorization support is enabled for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#authorization_services_enabled DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#authorization_services_enabled}
  */
  readonly authorizationServicesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Authorization settings for this resource server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#authorization_settings DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#authorization_settings}
  */
  readonly authorizationSettings?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettings;
  /**
  * Application base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#base_url DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#base_url}
  */
  readonly baseUrl?: string;
  /**
  * True if a client supports only Bearer Tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#bearer_only DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#bearer_only}
  */
  readonly bearerOnly?: boolean | cdktf.IResolvable;
  /**
  * What Client authentication type to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#client_authenticator_type DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#client_authenticator_type}
  */
  readonly clientAuthenticatorType?: string;
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#client_id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#client_id}
  */
  readonly clientId: string;
  /**
  * True if Consent Screen is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#consent_required DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#consent_required}
  */
  readonly consentRequired?: boolean | cdktf.IResolvable;
  /**
  * A list of default client scopes. Default client scopes are always applied when issuing OpenID Connect tokens or SAML assertions for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#default_client_scopes DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#default_client_scopes}
  */
  readonly defaultClientScopes?: string[];
  /**
  * Default Client roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#default_roles DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#default_roles}
  */
  readonly defaultRoles?: string[];
  /**
  * Client description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#description DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * True if Direct Grant is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#direct_access_grants_enabled DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#direct_access_grants_enabled}
  */
  readonly directAccessGrantsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Client enabled flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#enabled DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * True if this client supports Front Channel logout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#frontchannel_logout DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#frontchannel_logout}
  */
  readonly frontchannelLogout?: boolean | cdktf.IResolvable;
  /**
  * True if Full Scope is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#full_scope_allowed DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#full_scope_allowed}
  */
  readonly fullScopeAllowed?: boolean | cdktf.IResolvable;
  /**
  * Client ID. If not specified, automatically generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * True if Implicit flow is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#implicit_flow_enabled DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#implicit_flow_enabled}
  */
  readonly implicitFlowEnabled?: boolean | cdktf.IResolvable;
  /**
  * Client name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Node registration timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#node_re_registration_timeout DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#node_re_registration_timeout}
  */
  readonly nodeReRegistrationTimeout?: number;
  /**
  * Not Before setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#not_before DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#not_before}
  */
  readonly notBefore?: number;
  /**
  * A list of optional client scopes. Optional client scopes are applied when issuing tokens for this client, but only when they are requested by the scope parameter in the OpenID Connect authorization request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#optional_client_scopes DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#optional_client_scopes}
  */
  readonly optionalClientScopes?: string[];
  /**
  * Protocol used for this Client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#protocol DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Protocol Mappers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#protocol_mappers DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#protocol_mappers}
  */
  readonly protocolMappers?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappers[] | cdktf.IResolvable;
  /**
  * True if this is a public Client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#public_client DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#public_client}
  */
  readonly publicClient?: boolean | cdktf.IResolvable;
  /**
  * A list of valid Redirection URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#redirect_uris DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#redirect_uris}
  */
  readonly redirectUris?: string[];
  /**
  * Application root URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#root_url DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#root_url}
  */
  readonly rootUrl?: string;
  /**
  * Client Secret. The Operator will automatically create a Secret based on this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#secret DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#secret}
  */
  readonly secret?: string;
  /**
  * True if Service Accounts are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#service_accounts_enabled DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#service_accounts_enabled}
  */
  readonly serviceAccountsEnabled?: boolean | cdktf.IResolvable;
  /**
  * True if Standard flow is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#standard_flow_enabled DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#standard_flow_enabled}
  */
  readonly standardFlowEnabled?: boolean | cdktf.IResolvable;
  /**
  * Surrogate Authentication Required option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#surrogate_auth_required DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#surrogate_auth_required}
  */
  readonly surrogateAuthRequired?: boolean | cdktf.IResolvable;
  /**
  * True to use a Template Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#use_template_config DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#use_template_config}
  */
  readonly useTemplateConfig?: boolean | cdktf.IResolvable;
  /**
  * True to use Template Mappers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#use_template_mappers DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#use_template_mappers}
  */
  readonly useTemplateMappers?: boolean | cdktf.IResolvable;
  /**
  * True to use Template Scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#use_template_scope DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#use_template_scope}
  */
  readonly useTemplateScope?: boolean | cdktf.IResolvable;
  /**
  * A list of valid Web Origins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#web_origins DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#web_origins}
  */
  readonly webOrigins?: string[];
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.access),
    admin_url: cdktf.stringToTerraform(struct!.adminUrl),
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    authentication_flow_binding_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.authenticationFlowBindingOverrides),
    authorization_services_enabled: cdktf.booleanToTerraform(struct!.authorizationServicesEnabled),
    authorization_settings: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsToTerraform(struct!.authorizationSettings),
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    bearer_only: cdktf.booleanToTerraform(struct!.bearerOnly),
    client_authenticator_type: cdktf.stringToTerraform(struct!.clientAuthenticatorType),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    consent_required: cdktf.booleanToTerraform(struct!.consentRequired),
    default_client_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultClientScopes),
    default_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultRoles),
    description: cdktf.stringToTerraform(struct!.description),
    direct_access_grants_enabled: cdktf.booleanToTerraform(struct!.directAccessGrantsEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    frontchannel_logout: cdktf.booleanToTerraform(struct!.frontchannelLogout),
    full_scope_allowed: cdktf.booleanToTerraform(struct!.fullScopeAllowed),
    id: cdktf.stringToTerraform(struct!.id),
    implicit_flow_enabled: cdktf.booleanToTerraform(struct!.implicitFlowEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    node_re_registration_timeout: cdktf.numberToTerraform(struct!.nodeReRegistrationTimeout),
    not_before: cdktf.numberToTerraform(struct!.notBefore),
    optional_client_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.optionalClientScopes),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_mappers: cdktf.listMapper(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappersToTerraform, false)(struct!.protocolMappers),
    public_client: cdktf.booleanToTerraform(struct!.publicClient),
    redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.redirectUris),
    root_url: cdktf.stringToTerraform(struct!.rootUrl),
    secret: cdktf.stringToTerraform(struct!.secret),
    service_accounts_enabled: cdktf.booleanToTerraform(struct!.serviceAccountsEnabled),
    standard_flow_enabled: cdktf.booleanToTerraform(struct!.standardFlowEnabled),
    surrogate_auth_required: cdktf.booleanToTerraform(struct!.surrogateAuthRequired),
    use_template_config: cdktf.booleanToTerraform(struct!.useTemplateConfig),
    use_template_mappers: cdktf.booleanToTerraform(struct!.useTemplateMappers),
    use_template_scope: cdktf.booleanToTerraform(struct!.useTemplateScope),
    web_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.webOrigins),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.access),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    admin_url: {
      value: cdktf.stringToHclTerraform(struct!.adminUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    authentication_flow_binding_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.authenticationFlowBindingOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    authorization_services_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.authorizationServicesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authorization_settings: {
      value: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsToHclTerraform(struct!.authorizationSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettings",
    },
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bearer_only: {
      value: cdktf.booleanToHclTerraform(struct!.bearerOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_authenticator_type: {
      value: cdktf.stringToHclTerraform(struct!.clientAuthenticatorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consent_required: {
      value: cdktf.booleanToHclTerraform(struct!.consentRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_client_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultClientScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direct_access_grants_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.directAccessGrantsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    frontchannel_logout: {
      value: cdktf.booleanToHclTerraform(struct!.frontchannelLogout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    full_scope_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.fullScopeAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    implicit_flow_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.implicitFlowEnabled),
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
    node_re_registration_timeout: {
      value: cdktf.numberToHclTerraform(struct!.nodeReRegistrationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_before: {
      value: cdktf.numberToHclTerraform(struct!.notBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    optional_client_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.optionalClientScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_mappers: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappersToHclTerraform, false)(struct!.protocolMappers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappersList",
    },
    public_client: {
      value: cdktf.booleanToHclTerraform(struct!.publicClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redirect_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.redirectUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    root_url: {
      value: cdktf.stringToHclTerraform(struct!.rootUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_accounts_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.serviceAccountsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    standard_flow_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.standardFlowEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    surrogate_auth_required: {
      value: cdktf.booleanToHclTerraform(struct!.surrogateAuthRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_template_config: {
      value: cdktf.booleanToHclTerraform(struct!.useTemplateConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_template_mappers: {
      value: cdktf.booleanToHclTerraform(struct!.useTemplateMappers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_template_scope: {
      value: cdktf.booleanToHclTerraform(struct!.useTemplateScope),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.webOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._adminUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUrl = this._adminUrl;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._authenticationFlowBindingOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationFlowBindingOverrides = this._authenticationFlowBindingOverrides;
    }
    if (this._authorizationServicesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationServicesEnabled = this._authorizationServicesEnabled;
    }
    if (this._authorizationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationSettings = this._authorizationSettings?.internalValue;
    }
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._bearerOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerOnly = this._bearerOnly;
    }
    if (this._clientAuthenticatorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthenticatorType = this._clientAuthenticatorType;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._consentRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.consentRequired = this._consentRequired;
    }
    if (this._defaultClientScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultClientScopes = this._defaultClientScopes;
    }
    if (this._defaultRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRoles = this._defaultRoles;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._directAccessGrantsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.directAccessGrantsEnabled = this._directAccessGrantsEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._frontchannelLogout !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontchannelLogout = this._frontchannelLogout;
    }
    if (this._fullScopeAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullScopeAllowed = this._fullScopeAllowed;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._implicitFlowEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.implicitFlowEnabled = this._implicitFlowEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeReRegistrationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeReRegistrationTimeout = this._nodeReRegistrationTimeout;
    }
    if (this._notBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.notBefore = this._notBefore;
    }
    if (this._optionalClientScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalClientScopes = this._optionalClientScopes;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolMappers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolMappers = this._protocolMappers?.internalValue;
    }
    if (this._publicClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicClient = this._publicClient;
    }
    if (this._redirectUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUris = this._redirectUris;
    }
    if (this._rootUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootUrl = this._rootUrl;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._serviceAccountsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountsEnabled = this._serviceAccountsEnabled;
    }
    if (this._standardFlowEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardFlowEnabled = this._standardFlowEnabled;
    }
    if (this._surrogateAuthRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.surrogateAuthRequired = this._surrogateAuthRequired;
    }
    if (this._useTemplateConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTemplateConfig = this._useTemplateConfig;
    }
    if (this._useTemplateMappers !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTemplateMappers = this._useTemplateMappers;
    }
    if (this._useTemplateScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTemplateScope = this._useTemplateScope;
    }
    if (this._webOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.webOrigins = this._webOrigins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._adminUrl = undefined;
      this._attributes = undefined;
      this._authenticationFlowBindingOverrides = undefined;
      this._authorizationServicesEnabled = undefined;
      this._authorizationSettings.internalValue = undefined;
      this._baseUrl = undefined;
      this._bearerOnly = undefined;
      this._clientAuthenticatorType = undefined;
      this._clientId = undefined;
      this._consentRequired = undefined;
      this._defaultClientScopes = undefined;
      this._defaultRoles = undefined;
      this._description = undefined;
      this._directAccessGrantsEnabled = undefined;
      this._enabled = undefined;
      this._frontchannelLogout = undefined;
      this._fullScopeAllowed = undefined;
      this._id = undefined;
      this._implicitFlowEnabled = undefined;
      this._name = undefined;
      this._nodeReRegistrationTimeout = undefined;
      this._notBefore = undefined;
      this._optionalClientScopes = undefined;
      this._protocol = undefined;
      this._protocolMappers.internalValue = undefined;
      this._publicClient = undefined;
      this._redirectUris = undefined;
      this._rootUrl = undefined;
      this._secret = undefined;
      this._serviceAccountsEnabled = undefined;
      this._standardFlowEnabled = undefined;
      this._surrogateAuthRequired = undefined;
      this._useTemplateConfig = undefined;
      this._useTemplateMappers = undefined;
      this._useTemplateScope = undefined;
      this._webOrigins = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._adminUrl = value.adminUrl;
      this._attributes = value.attributes;
      this._authenticationFlowBindingOverrides = value.authenticationFlowBindingOverrides;
      this._authorizationServicesEnabled = value.authorizationServicesEnabled;
      this._authorizationSettings.internalValue = value.authorizationSettings;
      this._baseUrl = value.baseUrl;
      this._bearerOnly = value.bearerOnly;
      this._clientAuthenticatorType = value.clientAuthenticatorType;
      this._clientId = value.clientId;
      this._consentRequired = value.consentRequired;
      this._defaultClientScopes = value.defaultClientScopes;
      this._defaultRoles = value.defaultRoles;
      this._description = value.description;
      this._directAccessGrantsEnabled = value.directAccessGrantsEnabled;
      this._enabled = value.enabled;
      this._frontchannelLogout = value.frontchannelLogout;
      this._fullScopeAllowed = value.fullScopeAllowed;
      this._id = value.id;
      this._implicitFlowEnabled = value.implicitFlowEnabled;
      this._name = value.name;
      this._nodeReRegistrationTimeout = value.nodeReRegistrationTimeout;
      this._notBefore = value.notBefore;
      this._optionalClientScopes = value.optionalClientScopes;
      this._protocol = value.protocol;
      this._protocolMappers.internalValue = value.protocolMappers;
      this._publicClient = value.publicClient;
      this._redirectUris = value.redirectUris;
      this._rootUrl = value.rootUrl;
      this._secret = value.secret;
      this._serviceAccountsEnabled = value.serviceAccountsEnabled;
      this._standardFlowEnabled = value.standardFlowEnabled;
      this._surrogateAuthRequired = value.surrogateAuthRequired;
      this._useTemplateConfig = value.useTemplateConfig;
      this._useTemplateMappers = value.useTemplateMappers;
      this._useTemplateScope = value.useTemplateScope;
      this._webOrigins = value.webOrigins;
    }
  }

  // access - computed: false, optional: true, required: false
  private _access?: { [key: string]: string }; 
  public get access() {
    return this.getStringMapAttribute('access');
  }
  public set access(value: { [key: string]: string }) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // admin_url - computed: false, optional: true, required: false
  private _adminUrl?: string; 
  public get adminUrl() {
    return this.getStringAttribute('admin_url');
  }
  public set adminUrl(value: string) {
    this._adminUrl = value;
  }
  public resetAdminUrl() {
    this._adminUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUrlInput() {
    return this._adminUrl;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // authentication_flow_binding_overrides - computed: false, optional: true, required: false
  private _authenticationFlowBindingOverrides?: { [key: string]: string }; 
  public get authenticationFlowBindingOverrides() {
    return this.getStringMapAttribute('authentication_flow_binding_overrides');
  }
  public set authenticationFlowBindingOverrides(value: { [key: string]: string }) {
    this._authenticationFlowBindingOverrides = value;
  }
  public resetAuthenticationFlowBindingOverrides() {
    this._authenticationFlowBindingOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationFlowBindingOverridesInput() {
    return this._authenticationFlowBindingOverrides;
  }

  // authorization_services_enabled - computed: false, optional: true, required: false
  private _authorizationServicesEnabled?: boolean | cdktf.IResolvable; 
  public get authorizationServicesEnabled() {
    return this.getBooleanAttribute('authorization_services_enabled');
  }
  public set authorizationServicesEnabled(value: boolean | cdktf.IResolvable) {
    this._authorizationServicesEnabled = value;
  }
  public resetAuthorizationServicesEnabled() {
    this._authorizationServicesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationServicesEnabledInput() {
    return this._authorizationServicesEnabled;
  }

  // authorization_settings - computed: false, optional: true, required: false
  private _authorizationSettings = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettingsOutputReference(this, "authorization_settings");
  public get authorizationSettings() {
    return this._authorizationSettings;
  }
  public putAuthorizationSettings(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientAuthorizationSettings) {
    this._authorizationSettings.internalValue = value;
  }
  public resetAuthorizationSettings() {
    this._authorizationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationSettingsInput() {
    return this._authorizationSettings.internalValue;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // bearer_only - computed: false, optional: true, required: false
  private _bearerOnly?: boolean | cdktf.IResolvable; 
  public get bearerOnly() {
    return this.getBooleanAttribute('bearer_only');
  }
  public set bearerOnly(value: boolean | cdktf.IResolvable) {
    this._bearerOnly = value;
  }
  public resetBearerOnly() {
    this._bearerOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerOnlyInput() {
    return this._bearerOnly;
  }

  // client_authenticator_type - computed: false, optional: true, required: false
  private _clientAuthenticatorType?: string; 
  public get clientAuthenticatorType() {
    return this.getStringAttribute('client_authenticator_type');
  }
  public set clientAuthenticatorType(value: string) {
    this._clientAuthenticatorType = value;
  }
  public resetClientAuthenticatorType() {
    this._clientAuthenticatorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticatorTypeInput() {
    return this._clientAuthenticatorType;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // consent_required - computed: false, optional: true, required: false
  private _consentRequired?: boolean | cdktf.IResolvable; 
  public get consentRequired() {
    return this.getBooleanAttribute('consent_required');
  }
  public set consentRequired(value: boolean | cdktf.IResolvable) {
    this._consentRequired = value;
  }
  public resetConsentRequired() {
    this._consentRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentRequiredInput() {
    return this._consentRequired;
  }

  // default_client_scopes - computed: false, optional: true, required: false
  private _defaultClientScopes?: string[]; 
  public get defaultClientScopes() {
    return this.getListAttribute('default_client_scopes');
  }
  public set defaultClientScopes(value: string[]) {
    this._defaultClientScopes = value;
  }
  public resetDefaultClientScopes() {
    this._defaultClientScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultClientScopesInput() {
    return this._defaultClientScopes;
  }

  // default_roles - computed: false, optional: true, required: false
  private _defaultRoles?: string[]; 
  public get defaultRoles() {
    return this.getListAttribute('default_roles');
  }
  public set defaultRoles(value: string[]) {
    this._defaultRoles = value;
  }
  public resetDefaultRoles() {
    this._defaultRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRolesInput() {
    return this._defaultRoles;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // direct_access_grants_enabled - computed: false, optional: true, required: false
  private _directAccessGrantsEnabled?: boolean | cdktf.IResolvable; 
  public get directAccessGrantsEnabled() {
    return this.getBooleanAttribute('direct_access_grants_enabled');
  }
  public set directAccessGrantsEnabled(value: boolean | cdktf.IResolvable) {
    this._directAccessGrantsEnabled = value;
  }
  public resetDirectAccessGrantsEnabled() {
    this._directAccessGrantsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directAccessGrantsEnabledInput() {
    return this._directAccessGrantsEnabled;
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

  // frontchannel_logout - computed: false, optional: true, required: false
  private _frontchannelLogout?: boolean | cdktf.IResolvable; 
  public get frontchannelLogout() {
    return this.getBooleanAttribute('frontchannel_logout');
  }
  public set frontchannelLogout(value: boolean | cdktf.IResolvable) {
    this._frontchannelLogout = value;
  }
  public resetFrontchannelLogout() {
    this._frontchannelLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontchannelLogoutInput() {
    return this._frontchannelLogout;
  }

  // full_scope_allowed - computed: false, optional: true, required: false
  private _fullScopeAllowed?: boolean | cdktf.IResolvable; 
  public get fullScopeAllowed() {
    return this.getBooleanAttribute('full_scope_allowed');
  }
  public set fullScopeAllowed(value: boolean | cdktf.IResolvable) {
    this._fullScopeAllowed = value;
  }
  public resetFullScopeAllowed() {
    this._fullScopeAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullScopeAllowedInput() {
    return this._fullScopeAllowed;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // implicit_flow_enabled - computed: false, optional: true, required: false
  private _implicitFlowEnabled?: boolean | cdktf.IResolvable; 
  public get implicitFlowEnabled() {
    return this.getBooleanAttribute('implicit_flow_enabled');
  }
  public set implicitFlowEnabled(value: boolean | cdktf.IResolvable) {
    this._implicitFlowEnabled = value;
  }
  public resetImplicitFlowEnabled() {
    this._implicitFlowEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitFlowEnabledInput() {
    return this._implicitFlowEnabled;
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

  // node_re_registration_timeout - computed: false, optional: true, required: false
  private _nodeReRegistrationTimeout?: number; 
  public get nodeReRegistrationTimeout() {
    return this.getNumberAttribute('node_re_registration_timeout');
  }
  public set nodeReRegistrationTimeout(value: number) {
    this._nodeReRegistrationTimeout = value;
  }
  public resetNodeReRegistrationTimeout() {
    this._nodeReRegistrationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeReRegistrationTimeoutInput() {
    return this._nodeReRegistrationTimeout;
  }

  // not_before - computed: false, optional: true, required: false
  private _notBefore?: number; 
  public get notBefore() {
    return this.getNumberAttribute('not_before');
  }
  public set notBefore(value: number) {
    this._notBefore = value;
  }
  public resetNotBefore() {
    this._notBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notBeforeInput() {
    return this._notBefore;
  }

  // optional_client_scopes - computed: false, optional: true, required: false
  private _optionalClientScopes?: string[]; 
  public get optionalClientScopes() {
    return this.getListAttribute('optional_client_scopes');
  }
  public set optionalClientScopes(value: string[]) {
    this._optionalClientScopes = value;
  }
  public resetOptionalClientScopes() {
    this._optionalClientScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalClientScopesInput() {
    return this._optionalClientScopes;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_mappers - computed: false, optional: true, required: false
  private _protocolMappers = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappersList(this, "protocol_mappers", false);
  public get protocolMappers() {
    return this._protocolMappers;
  }
  public putProtocolMappers(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientProtocolMappers[] | cdktf.IResolvable) {
    this._protocolMappers.internalValue = value;
  }
  public resetProtocolMappers() {
    this._protocolMappers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolMappersInput() {
    return this._protocolMappers.internalValue;
  }

  // public_client - computed: false, optional: true, required: false
  private _publicClient?: boolean | cdktf.IResolvable; 
  public get publicClient() {
    return this.getBooleanAttribute('public_client');
  }
  public set publicClient(value: boolean | cdktf.IResolvable) {
    this._publicClient = value;
  }
  public resetPublicClient() {
    this._publicClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicClientInput() {
    return this._publicClient;
  }

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }

  // root_url - computed: false, optional: true, required: false
  private _rootUrl?: string; 
  public get rootUrl() {
    return this.getStringAttribute('root_url');
  }
  public set rootUrl(value: string) {
    this._rootUrl = value;
  }
  public resetRootUrl() {
    this._rootUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootUrlInput() {
    return this._rootUrl;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // service_accounts_enabled - computed: false, optional: true, required: false
  private _serviceAccountsEnabled?: boolean | cdktf.IResolvable; 
  public get serviceAccountsEnabled() {
    return this.getBooleanAttribute('service_accounts_enabled');
  }
  public set serviceAccountsEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceAccountsEnabled = value;
  }
  public resetServiceAccountsEnabled() {
    this._serviceAccountsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsEnabledInput() {
    return this._serviceAccountsEnabled;
  }

  // standard_flow_enabled - computed: false, optional: true, required: false
  private _standardFlowEnabled?: boolean | cdktf.IResolvable; 
  public get standardFlowEnabled() {
    return this.getBooleanAttribute('standard_flow_enabled');
  }
  public set standardFlowEnabled(value: boolean | cdktf.IResolvable) {
    this._standardFlowEnabled = value;
  }
  public resetStandardFlowEnabled() {
    this._standardFlowEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardFlowEnabledInput() {
    return this._standardFlowEnabled;
  }

  // surrogate_auth_required - computed: false, optional: true, required: false
  private _surrogateAuthRequired?: boolean | cdktf.IResolvable; 
  public get surrogateAuthRequired() {
    return this.getBooleanAttribute('surrogate_auth_required');
  }
  public set surrogateAuthRequired(value: boolean | cdktf.IResolvable) {
    this._surrogateAuthRequired = value;
  }
  public resetSurrogateAuthRequired() {
    this._surrogateAuthRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surrogateAuthRequiredInput() {
    return this._surrogateAuthRequired;
  }

  // use_template_config - computed: false, optional: true, required: false
  private _useTemplateConfig?: boolean | cdktf.IResolvable; 
  public get useTemplateConfig() {
    return this.getBooleanAttribute('use_template_config');
  }
  public set useTemplateConfig(value: boolean | cdktf.IResolvable) {
    this._useTemplateConfig = value;
  }
  public resetUseTemplateConfig() {
    this._useTemplateConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTemplateConfigInput() {
    return this._useTemplateConfig;
  }

  // use_template_mappers - computed: false, optional: true, required: false
  private _useTemplateMappers?: boolean | cdktf.IResolvable; 
  public get useTemplateMappers() {
    return this.getBooleanAttribute('use_template_mappers');
  }
  public set useTemplateMappers(value: boolean | cdktf.IResolvable) {
    this._useTemplateMappers = value;
  }
  public resetUseTemplateMappers() {
    this._useTemplateMappers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTemplateMappersInput() {
    return this._useTemplateMappers;
  }

  // use_template_scope - computed: false, optional: true, required: false
  private _useTemplateScope?: boolean | cdktf.IResolvable; 
  public get useTemplateScope() {
    return this.getBooleanAttribute('use_template_scope');
  }
  public set useTemplateScope(value: boolean | cdktf.IResolvable) {
    this._useTemplateScope = value;
  }
  public resetUseTemplateScope() {
    this._useTemplateScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTemplateScopeInput() {
    return this._useTemplateScope;
  }

  // web_origins - computed: false, optional: true, required: false
  private _webOrigins?: string[]; 
  public get webOrigins() {
    return this.getListAttribute('web_origins');
  }
  public set webOrigins(value: string[]) {
    this._webOrigins = value;
  }
  public resetWebOrigins() {
    this._webOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webOriginsInput() {
    return this._webOrigins;
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#key DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#operator DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#values DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressionsToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressionsOutputReference {
    return new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#match_expressions DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#match_labels DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressionsList",
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

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesComposites {
  /**
  * Map client => []role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#client DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#client}
  */
  readonly client?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Realm roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#realm DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#realm}
  */
  readonly realm?: string[];
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesCompositesToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesComposites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.client),
    realm: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.realm),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesCompositesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesComposites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.client),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    realm: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.realm),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesCompositesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesComposites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesComposites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._client = undefined;
      this._realm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._client = value.client;
      this._realm = value.realm;
    }
  }

  // client - computed: false, optional: true, required: false
  private _client?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get client() {
    return this.interpolationForAttribute('client');
  }
  public set client(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string[]; 
  public get realm() {
    return this.getListAttribute('realm');
  }
  public set realm(value: string[]) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRoles {
  /**
  * Role Attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Client Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#client_role DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#client_role}
  */
  readonly clientRole?: boolean | cdktf.IResolvable;
  /**
  * Composite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#composite DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#composite}
  */
  readonly composite?: boolean | cdktf.IResolvable;
  /**
  * Composites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#composites DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#composites}
  */
  readonly composites?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesComposites;
  /**
  * Container Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#container_id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#container_id}
  */
  readonly containerId?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#description DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.attributes),
    client_role: cdktf.booleanToTerraform(struct!.clientRole),
    composite: cdktf.booleanToTerraform(struct!.composite),
    composites: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesCompositesToTerraform(struct!.composites),
    container_id: cdktf.stringToTerraform(struct!.containerId),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    client_role: {
      value: cdktf.booleanToHclTerraform(struct!.clientRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    composite: {
      value: cdktf.booleanToHclTerraform(struct!.composite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    composites: {
      value: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesCompositesToHclTerraform(struct!.composites),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesComposites",
    },
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._clientRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRole = this._clientRole;
    }
    if (this._composite !== undefined) {
      hasAnyValues = true;
      internalValueResult.composite = this._composite;
    }
    if (this._composites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.composites = this._composites?.internalValue;
    }
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._clientRole = undefined;
      this._composite = undefined;
      this._composites.internalValue = undefined;
      this._containerId = undefined;
      this._description = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._clientRole = value.clientRole;
      this._composite = value.composite;
      this._composites.internalValue = value.composites;
      this._containerId = value.containerId;
      this._description = value.description;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get attributes() {
    return this.interpolationForAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // client_role - computed: false, optional: true, required: false
  private _clientRole?: boolean | cdktf.IResolvable; 
  public get clientRole() {
    return this.getBooleanAttribute('client_role');
  }
  public set clientRole(value: boolean | cdktf.IResolvable) {
    this._clientRole = value;
  }
  public resetClientRole() {
    this._clientRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRoleInput() {
    return this._clientRole;
  }

  // composite - computed: false, optional: true, required: false
  private _composite?: boolean | cdktf.IResolvable; 
  public get composite() {
    return this.getBooleanAttribute('composite');
  }
  public set composite(value: boolean | cdktf.IResolvable) {
    this._composite = value;
  }
  public resetComposite() {
    this._composite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeInput() {
    return this._composite;
  }

  // composites - computed: false, optional: true, required: false
  private _composites = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesCompositesOutputReference(this, "composites");
  public get composites() {
    return this._composites;
  }
  public putComposites(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesComposites) {
    this._composites.internalValue = value;
  }
  public resetComposites() {
    this._composites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositesInput() {
    return this._composites.internalValue;
  }

  // container_id - computed: false, optional: true, required: false
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRoles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesOutputReference {
    return new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsComposites {
  /**
  * Map client => []role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#client DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#client}
  */
  readonly client?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Realm roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#realm DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#realm}
  */
  readonly realm?: string[];
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsCompositesToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsComposites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.client),
    realm: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.realm),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsCompositesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsComposites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.client),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    realm: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.realm),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsCompositesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsComposites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsComposites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._client = undefined;
      this._realm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._client = value.client;
      this._realm = value.realm;
    }
  }

  // client - computed: false, optional: true, required: false
  private _client?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get client() {
    return this.interpolationForAttribute('client');
  }
  public set client(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string[]; 
  public get realm() {
    return this.getListAttribute('realm');
  }
  public set realm(value: string[]) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappings {
  /**
  * Role Attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Client Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#client_role DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#client_role}
  */
  readonly clientRole?: boolean | cdktf.IResolvable;
  /**
  * Composite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#composite DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#composite}
  */
  readonly composite?: boolean | cdktf.IResolvable;
  /**
  * Composites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#composites DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#composites}
  */
  readonly composites?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsComposites;
  /**
  * Container Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#container_id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#container_id}
  */
  readonly containerId?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#description DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.attributes),
    client_role: cdktf.booleanToTerraform(struct!.clientRole),
    composite: cdktf.booleanToTerraform(struct!.composite),
    composites: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsCompositesToTerraform(struct!.composites),
    container_id: cdktf.stringToTerraform(struct!.containerId),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    client_role: {
      value: cdktf.booleanToHclTerraform(struct!.clientRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    composite: {
      value: cdktf.booleanToHclTerraform(struct!.composite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    composites: {
      value: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsCompositesToHclTerraform(struct!.composites),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsComposites",
    },
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._clientRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRole = this._clientRole;
    }
    if (this._composite !== undefined) {
      hasAnyValues = true;
      internalValueResult.composite = this._composite;
    }
    if (this._composites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.composites = this._composites?.internalValue;
    }
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._clientRole = undefined;
      this._composite = undefined;
      this._composites.internalValue = undefined;
      this._containerId = undefined;
      this._description = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._clientRole = value.clientRole;
      this._composite = value.composite;
      this._composites.internalValue = value.composites;
      this._containerId = value.containerId;
      this._description = value.description;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get attributes() {
    return this.interpolationForAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // client_role - computed: false, optional: true, required: false
  private _clientRole?: boolean | cdktf.IResolvable; 
  public get clientRole() {
    return this.getBooleanAttribute('client_role');
  }
  public set clientRole(value: boolean | cdktf.IResolvable) {
    this._clientRole = value;
  }
  public resetClientRole() {
    this._clientRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRoleInput() {
    return this._clientRole;
  }

  // composite - computed: false, optional: true, required: false
  private _composite?: boolean | cdktf.IResolvable; 
  public get composite() {
    return this.getBooleanAttribute('composite');
  }
  public set composite(value: boolean | cdktf.IResolvable) {
    this._composite = value;
  }
  public resetComposite() {
    this._composite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeInput() {
    return this._composite;
  }

  // composites - computed: false, optional: true, required: false
  private _composites = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsCompositesOutputReference(this, "composites");
  public get composites() {
    return this._composites;
  }
  public putComposites(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsComposites) {
    this._composites.internalValue = value;
  }
  public resetComposites() {
    this._composites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositesInput() {
    return this._composites.internalValue;
  }

  // container_id - computed: false, optional: true, required: false
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsOutputReference {
    return new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappings {
  /**
  * Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#client DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#client}
  */
  readonly client?: string;
  /**
  * ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#mappings DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#mappings}
  */
  readonly mappings?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappings[] | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: cdktf.stringToTerraform(struct!.client),
    id: cdktf.stringToTerraform(struct!.id),
    mappings: cdktf.listMapper(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsToTerraform, false)(struct!.mappings),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: cdktf.stringToHclTerraform(struct!.client),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mappings: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsToHclTerraform, false)(struct!.mappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappings = this._mappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._client = undefined;
      this._id = undefined;
      this._mappings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._client = value.client;
      this._id = value.id;
      this._mappings.internalValue = value.mappings;
    }
  }

  // client - computed: false, optional: true, required: false
  private _client?: string; 
  public get client() {
    return this.getStringAttribute('client');
  }
  public set client(value: string) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mappings - computed: false, optional: true, required: false
  private _mappings = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  public resetMappings() {
    this._mappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsComposites {
  /**
  * Map client => []role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#client DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#client}
  */
  readonly client?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Realm roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#realm DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#realm}
  */
  readonly realm?: string[];
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsCompositesToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsComposites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.client),
    realm: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.realm),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsCompositesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsComposites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.client),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    realm: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.realm),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsCompositesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsComposites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsComposites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._client = undefined;
      this._realm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._client = value.client;
      this._realm = value.realm;
    }
  }

  // client - computed: false, optional: true, required: false
  private _client?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get client() {
    return this.interpolationForAttribute('client');
  }
  public set client(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string[]; 
  public get realm() {
    return this.getListAttribute('realm');
  }
  public set realm(value: string[]) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappings {
  /**
  * Role Attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#attributes DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Client Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#client_role DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#client_role}
  */
  readonly clientRole?: boolean | cdktf.IResolvable;
  /**
  * Composite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#composite DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#composite}
  */
  readonly composite?: boolean | cdktf.IResolvable;
  /**
  * Composites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#composites DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#composites}
  */
  readonly composites?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsComposites;
  /**
  * Container Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#container_id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#container_id}
  */
  readonly containerId?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#description DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#id DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.attributes),
    client_role: cdktf.booleanToTerraform(struct!.clientRole),
    composite: cdktf.booleanToTerraform(struct!.composite),
    composites: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsCompositesToTerraform(struct!.composites),
    container_id: cdktf.stringToTerraform(struct!.containerId),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    client_role: {
      value: cdktf.booleanToHclTerraform(struct!.clientRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    composite: {
      value: cdktf.booleanToHclTerraform(struct!.composite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    composites: {
      value: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsCompositesToHclTerraform(struct!.composites),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsComposites",
    },
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._clientRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRole = this._clientRole;
    }
    if (this._composite !== undefined) {
      hasAnyValues = true;
      internalValueResult.composite = this._composite;
    }
    if (this._composites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.composites = this._composites?.internalValue;
    }
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._clientRole = undefined;
      this._composite = undefined;
      this._composites.internalValue = undefined;
      this._containerId = undefined;
      this._description = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._clientRole = value.clientRole;
      this._composite = value.composite;
      this._composites.internalValue = value.composites;
      this._containerId = value.containerId;
      this._description = value.description;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get attributes() {
    return this.interpolationForAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // client_role - computed: false, optional: true, required: false
  private _clientRole?: boolean | cdktf.IResolvable; 
  public get clientRole() {
    return this.getBooleanAttribute('client_role');
  }
  public set clientRole(value: boolean | cdktf.IResolvable) {
    this._clientRole = value;
  }
  public resetClientRole() {
    this._clientRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRoleInput() {
    return this._clientRole;
  }

  // composite - computed: false, optional: true, required: false
  private _composite?: boolean | cdktf.IResolvable; 
  public get composite() {
    return this.getBooleanAttribute('composite');
  }
  public set composite(value: boolean | cdktf.IResolvable) {
    this._composite = value;
  }
  public resetComposite() {
    this._composite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeInput() {
    return this._composite;
  }

  // composites - computed: false, optional: true, required: false
  private _composites = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsCompositesOutputReference(this, "composites");
  public get composites() {
    return this._composites;
  }
  public putComposites(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsComposites) {
    this._composites.internalValue = value;
  }
  public resetComposites() {
    this._composites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositesInput() {
    return this._composites.internalValue;
  }

  // container_id - computed: false, optional: true, required: false
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsOutputReference {
    return new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappings {
  /**
  * Client Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#client_mappings DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#client_mappings}
  */
  readonly clientMappings?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappings;
  /**
  * Realm Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#realm_mappings DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#realm_mappings}
  */
  readonly realmMappings?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappings[] | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_mappings: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsToTerraform(struct!.clientMappings),
    realm_mappings: cdktf.listMapper(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsToTerraform, false)(struct!.realmMappings),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_mappings: {
      value: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsToHclTerraform(struct!.clientMappings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappings",
    },
    realm_mappings: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsToHclTerraform, false)(struct!.realmMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMappings = this._clientMappings?.internalValue;
    }
    if (this._realmMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realmMappings = this._realmMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientMappings.internalValue = undefined;
      this._realmMappings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientMappings.internalValue = value.clientMappings;
      this._realmMappings.internalValue = value.realmMappings;
    }
  }

  // client_mappings - computed: false, optional: true, required: false
  private _clientMappings = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappingsOutputReference(this, "client_mappings");
  public get clientMappings() {
    return this._clientMappings;
  }
  public putClientMappings(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsClientMappings) {
    this._clientMappings.internalValue = value;
  }
  public resetClientMappings() {
    this._clientMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMappingsInput() {
    return this._clientMappings.internalValue;
  }

  // realm_mappings - computed: false, optional: true, required: false
  private _realmMappings = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappingsList(this, "realm_mappings", false);
  public get realmMappings() {
    return this._realmMappings;
  }
  public putRealmMappings(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsRealmMappings[] | cdktf.IResolvable) {
    this._realmMappings.internalValue = value;
  }
  public resetRealmMappings() {
    this._realmMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmMappingsInput() {
    return this._realmMappings.internalValue;
  }
}
export interface DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpec {
  /**
  * Keycloak Client REST object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#client DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#client}
  */
  readonly client: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClient;
  /**
  * Selector for looking up KeycloakRealm Custom Resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#realm_selector DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#realm_selector}
  */
  readonly realmSelector: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelector;
  /**
  * Client Roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#roles DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#roles}
  */
  readonly roles?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRoles[] | cdktf.IResolvable;
  /**
  * Scope Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#scope_mappings DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#scope_mappings}
  */
  readonly scopeMappings?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappings;
  /**
  * Service account client roles for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#service_account_client_roles DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#service_account_client_roles}
  */
  readonly serviceAccountClientRoles?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Service account realm roles for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#service_account_realm_roles DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest#service_account_realm_roles}
  */
  readonly serviceAccountRealmRoles?: string[];
}

export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientToTerraform(struct!.client),
    realm_selector: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorToTerraform(struct!.realmSelector),
    roles: cdktf.listMapper(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesToTerraform, false)(struct!.roles),
    scope_mappings: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsToTerraform(struct!.scopeMappings),
    service_account_client_roles: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.serviceAccountClientRoles),
    service_account_realm_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAccountRealmRoles),
  }
}


export function dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientToHclTerraform(struct!.client),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClient",
    },
    realm_selector: {
      value: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorToHclTerraform(struct!.realmSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelector",
    },
    roles: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesToHclTerraform, false)(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesList",
    },
    scope_mappings: {
      value: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsToHclTerraform(struct!.scopeMappings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappings",
    },
    service_account_client_roles: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.serviceAccountClientRoles),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    service_account_realm_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAccountRealmRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client?.internalValue;
    }
    if (this._realmSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realmSelector = this._realmSelector?.internalValue;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    if (this._scopeMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeMappings = this._scopeMappings?.internalValue;
    }
    if (this._serviceAccountClientRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountClientRoles = this._serviceAccountClientRoles;
    }
    if (this._serviceAccountRealmRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountRealmRoles = this._serviceAccountRealmRoles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._client.internalValue = undefined;
      this._realmSelector.internalValue = undefined;
      this._roles.internalValue = undefined;
      this._scopeMappings.internalValue = undefined;
      this._serviceAccountClientRoles = undefined;
      this._serviceAccountRealmRoles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._client.internalValue = value.client;
      this._realmSelector.internalValue = value.realmSelector;
      this._roles.internalValue = value.roles;
      this._scopeMappings.internalValue = value.scopeMappings;
      this._serviceAccountClientRoles = value.serviceAccountClientRoles;
      this._serviceAccountRealmRoles = value.serviceAccountRealmRoles;
    }
  }

  // client - computed: false, optional: false, required: true
  private _client = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClientOutputReference(this, "client");
  public get client() {
    return this._client;
  }
  public putClient(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecClient) {
    this._client.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client.internalValue;
  }

  // realm_selector - computed: false, optional: false, required: true
  private _realmSelector = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelectorOutputReference(this, "realm_selector");
  public get realmSelector() {
    return this._realmSelector;
  }
  public putRealmSelector(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRealmSelector) {
    this._realmSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmSelectorInput() {
    return this._realmSelector.internalValue;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // scope_mappings - computed: false, optional: true, required: false
  private _scopeMappings = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappingsOutputReference(this, "scope_mappings");
  public get scopeMappings() {
    return this._scopeMappings;
  }
  public putScopeMappings(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecScopeMappings) {
    this._scopeMappings.internalValue = value;
  }
  public resetScopeMappings() {
    this._scopeMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeMappingsInput() {
    return this._scopeMappings.internalValue;
  }

  // service_account_client_roles - computed: false, optional: true, required: false
  private _serviceAccountClientRoles?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get serviceAccountClientRoles() {
    return this.interpolationForAttribute('service_account_client_roles');
  }
  public set serviceAccountClientRoles(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._serviceAccountClientRoles = value;
  }
  public resetServiceAccountClientRoles() {
    this._serviceAccountClientRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountClientRolesInput() {
    return this._serviceAccountClientRoles;
  }

  // service_account_realm_roles - computed: false, optional: true, required: false
  private _serviceAccountRealmRoles?: string[]; 
  public get serviceAccountRealmRoles() {
    return this.getListAttribute('service_account_realm_roles');
  }
  public set serviceAccountRealmRoles(value: string[]) {
    this._serviceAccountRealmRoles = value;
  }
  public resetServiceAccountRealmRoles() {
    this._serviceAccountRealmRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountRealmRolesInput() {
    return this._serviceAccountRealmRoles;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest k8s_keycloak_org_keycloak_client_v1alpha1_manifest}
*/
export class DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_keycloak_org_keycloak_client_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKeycloakOrgKeycloakClientV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_keycloak_org_keycloak_client_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/keycloak_org_keycloak_client_v1alpha1_manifest k8s_keycloak_org_keycloak_client_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_keycloak_org_keycloak_client_v1alpha1_manifest',
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
  private _metadata = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKeycloakOrgKeycloakClientV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
