// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#metadata DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#metadata}
  */
  readonly metadata: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestMetadata;
  /**
  * OIDCConnector resource definition v3 from Teleport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#spec DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#spec}
  */
  readonly spec?: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpec;
}
export interface DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#annotations DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#labels DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#name DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#namespace DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestMetadataToTerraform(struct?: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestMetadataToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRoles {
  /**
  * Claim is a claim name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#claim DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#claim}
  */
  readonly claim?: string;
  /**
  * Roles is a list of static teleport roles to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#roles DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Value is a claim value to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#value DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRolesToTerraform(struct?: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim: cdktf.stringToTerraform(struct!.claim),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRolesToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim: {
      value: cdktf.stringToHclTerraform(struct!.claim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claim !== undefined) {
      hasAnyValues = true;
      internalValueResult.claim = this._claim;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claim = undefined;
      this._roles = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claim = value.claim;
      this._roles = value.roles;
      this._value = value.value;
    }
  }

  // claim - computed: false, optional: true, required: false
  private _claim?: string; 
  public get claim() {
    return this.getStringAttribute('claim');
  }
  public set claim(value: string) {
    this._claim = value;
  }
  public resetClaim() {
    this._claim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimInput() {
    return this._claim;
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

export class DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRolesList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRoles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRolesOutputReference {
    return new DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClientRedirectSettings {
  /**
  * a list of hostnames allowed for https client redirect URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#allowed_https_hostnames DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#allowed_https_hostnames}
  */
  readonly allowedHttpsHostnames?: string[];
  /**
  * a list of CIDRs allowed for HTTP or HTTPS client redirect URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#insecure_allowed_cidr_ranges DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#insecure_allowed_cidr_ranges}
  */
  readonly insecureAllowedCidrRanges?: string[];
}

export function dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClientRedirectSettingsToTerraform(struct?: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClientRedirectSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_https_hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHttpsHostnames),
    insecure_allowed_cidr_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.insecureAllowedCidrRanges),
  }
}


export function dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClientRedirectSettingsToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClientRedirectSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_https_hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHttpsHostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    insecure_allowed_cidr_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.insecureAllowedCidrRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClientRedirectSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClientRedirectSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHttpsHostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHttpsHostnames = this._allowedHttpsHostnames;
    }
    if (this._insecureAllowedCidrRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureAllowedCidrRanges = this._insecureAllowedCidrRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClientRedirectSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHttpsHostnames = undefined;
      this._insecureAllowedCidrRanges = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHttpsHostnames = value.allowedHttpsHostnames;
      this._insecureAllowedCidrRanges = value.insecureAllowedCidrRanges;
    }
  }

  // allowed_https_hostnames - computed: false, optional: true, required: false
  private _allowedHttpsHostnames?: string[]; 
  public get allowedHttpsHostnames() {
    return this.getListAttribute('allowed_https_hostnames');
  }
  public set allowedHttpsHostnames(value: string[]) {
    this._allowedHttpsHostnames = value;
  }
  public resetAllowedHttpsHostnames() {
    this._allowedHttpsHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHttpsHostnamesInput() {
    return this._allowedHttpsHostnames;
  }

  // insecure_allowed_cidr_ranges - computed: false, optional: true, required: false
  private _insecureAllowedCidrRanges?: string[]; 
  public get insecureAllowedCidrRanges() {
    return this.getListAttribute('insecure_allowed_cidr_ranges');
  }
  public set insecureAllowedCidrRanges(value: string[]) {
    this._insecureAllowedCidrRanges = value;
  }
  public resetInsecureAllowedCidrRanges() {
    this._insecureAllowedCidrRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureAllowedCidrRangesInput() {
    return this._insecureAllowedCidrRanges;
  }
}
export interface DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecMfa {
  /**
  * AcrValues are Authentication Context Class Reference values. The meaning of the ACR value is context-specific and varies for identity providers. Some identity providers support MFA specific contexts, such Okta with its 'phr' (phishing-resistant) ACR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#acr_values DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#acr_values}
  */
  readonly acrValues?: string;
  /**
  * ClientID is the OIDC OAuth app client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#client_id DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * ClientSecret is the OIDC OAuth app client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#client_secret DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Enabled specified whether this OIDC connector supports MFA checks. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#enabled DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * MaxAge is the amount of time in nanoseconds that an IdP session is valid for. Defaults to 0 to always force re-authentication for MFA checks. This should only be set to a non-zero value if the IdP is setup to perform MFA checks on top of active user sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#max_age DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#max_age}
  */
  readonly maxAge?: string;
  /**
  * Prompt is an optional OIDC prompt. An empty string omits prompt. If not specified, it defaults to select_account for backwards compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#prompt DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#prompt}
  */
  readonly prompt?: string;
}

export function dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecMfaToTerraform(struct?: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecMfa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acr_values: cdktf.stringToTerraform(struct!.acrValues),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
    prompt: cdktf.stringToTerraform(struct!.prompt),
  }
}


export function dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecMfaToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecMfa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acr_values: {
      value: cdktf.stringToHclTerraform(struct!.acrValues),
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
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt: {
      value: cdktf.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecMfaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecMfa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acrValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrValues = this._acrValues;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecMfa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acrValues = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._enabled = undefined;
      this._maxAge = undefined;
      this._prompt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acrValues = value.acrValues;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._enabled = value.enabled;
      this._maxAge = value.maxAge;
      this._prompt = value.prompt;
    }
  }

  // acr_values - computed: false, optional: true, required: false
  private _acrValues?: string; 
  public get acrValues() {
    return this.getStringAttribute('acr_values');
  }
  public set acrValues(value: string) {
    this._acrValues = value;
  }
  public resetAcrValues() {
    this._acrValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrValuesInput() {
    return this._acrValues;
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

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // prompt - computed: false, optional: true, required: false
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  public resetPrompt() {
    this._prompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }
}
export interface DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpec {
  /**
  * ACR is an Authentication Context Class Reference value. The meaning of the ACR value is context-specific and varies for identity providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#acr_values DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#acr_values}
  */
  readonly acrValues?: string;
  /**
  * AllowUnverifiedEmail tells the connector to accept OIDC users with unverified emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#allow_unverified_email DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#allow_unverified_email}
  */
  readonly allowUnverifiedEmail?: boolean | cdktf.IResolvable;
  /**
  * ClaimsToRoles specifies a dynamic mapping from claims to roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#claims_to_roles DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#claims_to_roles}
  */
  readonly claimsToRoles?: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRoles[] | cdktf.IResolvable;
  /**
  * ClientID is the id of the authentication client (Teleport Auth Service).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#client_id DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * ClientRedirectSettings defines which client redirect URLs are allowed for non-browser SSO logins other than the standard localhost ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#client_redirect_settings DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#client_redirect_settings}
  */
  readonly clientRedirectSettings?: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClientRedirectSettings;
  /**
  * ClientSecret is used to authenticate the client. This field supports secret lookup. See the operator documentation for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#client_secret DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Display is the friendly name for this provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#display DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#display}
  */
  readonly display?: string;
  /**
  * GoogleAdminEmail is the email of a google admin to impersonate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#google_admin_email DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#google_admin_email}
  */
  readonly googleAdminEmail?: string;
  /**
  * GoogleServiceAccount is a string containing google service account credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#google_service_account DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#google_service_account}
  */
  readonly googleServiceAccount?: string;
  /**
  * GoogleServiceAccountURI is a path to a google service account uri.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#google_service_account_uri DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#google_service_account_uri}
  */
  readonly googleServiceAccountUri?: string;
  /**
  * IssuerURL is the endpoint of the provider, e.g. https://accounts.google.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#issuer_url DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#issuer_url}
  */
  readonly issuerUrl?: string;
  /**
  * MaxAge is the amount of time that user logins are valid for. If a user logs in, but then does not login again within this time period, they will be forced to re-authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#max_age DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#max_age}
  */
  readonly maxAge?: string;
  /**
  * MFASettings contains settings to enable SSO MFA checks through this auth connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#mfa DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#mfa}
  */
  readonly mfa?: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecMfa;
  /**
  * Prompt is an optional OIDC prompt. An empty string omits prompt. If not specified, it defaults to select_account for backwards compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#prompt DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#prompt}
  */
  readonly prompt?: string;
  /**
  * Provider is the external identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#provider DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#provider}
  */
  readonly provider?: string;
  /**
  * RedirectURLs is a list of callback URLs which the identity provider can use to redirect the client back to the Teleport Proxy to complete authentication. This list should match the URLs on the provider's side. The URL used for a given auth request will be chosen to match the requesting Proxy's public address. If there is no match, the first url in the list will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#redirect_url DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#redirect_url}
  */
  readonly redirectUrl?: string[];
  /**
  * Scope specifies additional scopes set by provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#scope DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#scope}
  */
  readonly scope?: string[];
  /**
  * UsernameClaim specifies the name of the claim from the OIDC connector to be used as the user's username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#username_claim DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest#username_claim}
  */
  readonly usernameClaim?: string;
}

export function dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecToTerraform(struct?: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acr_values: cdktf.stringToTerraform(struct!.acrValues),
    allow_unverified_email: cdktf.booleanToTerraform(struct!.allowUnverifiedEmail),
    claims_to_roles: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRolesToTerraform, false)(struct!.claimsToRoles),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_redirect_settings: dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClientRedirectSettingsToTerraform(struct!.clientRedirectSettings),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    display: cdktf.stringToTerraform(struct!.display),
    google_admin_email: cdktf.stringToTerraform(struct!.googleAdminEmail),
    google_service_account: cdktf.stringToTerraform(struct!.googleServiceAccount),
    google_service_account_uri: cdktf.stringToTerraform(struct!.googleServiceAccountUri),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
    mfa: dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecMfaToTerraform(struct!.mfa),
    prompt: cdktf.stringToTerraform(struct!.prompt),
    provider: cdktf.stringToTerraform(struct!.provider),
    redirect_url: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.redirectUrl),
    scope: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scope),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
  }
}


export function dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acr_values: {
      value: cdktf.stringToHclTerraform(struct!.acrValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_unverified_email: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnverifiedEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    claims_to_roles: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRolesToHclTerraform, false)(struct!.claimsToRoles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRolesList",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_redirect_settings: {
      value: dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClientRedirectSettingsToHclTerraform(struct!.clientRedirectSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClientRedirectSettings",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_admin_email: {
      value: cdktf.stringToHclTerraform(struct!.googleAdminEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_service_account: {
      value: cdktf.stringToHclTerraform(struct!.googleServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_service_account_uri: {
      value: cdktf.stringToHclTerraform(struct!.googleServiceAccountUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mfa: {
      value: dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecMfaToHclTerraform(struct!.mfa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecMfa",
    },
    prompt: {
      value: cdktf.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_url: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.redirectUrl),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scope),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    username_claim: {
      value: cdktf.stringToHclTerraform(struct!.usernameClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acrValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrValues = this._acrValues;
    }
    if (this._allowUnverifiedEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnverifiedEmail = this._allowUnverifiedEmail;
    }
    if (this._claimsToRoles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimsToRoles = this._claimsToRoles?.internalValue;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientRedirectSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRedirectSettings = this._clientRedirectSettings?.internalValue;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._googleAdminEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleAdminEmail = this._googleAdminEmail;
    }
    if (this._googleServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleServiceAccount = this._googleServiceAccount;
    }
    if (this._googleServiceAccountUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleServiceAccountUri = this._googleServiceAccountUri;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._mfa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfa = this._mfa?.internalValue;
    }
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._redirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrl = this._redirectUrl;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._usernameClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameClaim = this._usernameClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acrValues = undefined;
      this._allowUnverifiedEmail = undefined;
      this._claimsToRoles.internalValue = undefined;
      this._clientId = undefined;
      this._clientRedirectSettings.internalValue = undefined;
      this._clientSecret = undefined;
      this._display = undefined;
      this._googleAdminEmail = undefined;
      this._googleServiceAccount = undefined;
      this._googleServiceAccountUri = undefined;
      this._issuerUrl = undefined;
      this._maxAge = undefined;
      this._mfa.internalValue = undefined;
      this._prompt = undefined;
      this._provider = undefined;
      this._redirectUrl = undefined;
      this._scope = undefined;
      this._usernameClaim = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acrValues = value.acrValues;
      this._allowUnverifiedEmail = value.allowUnverifiedEmail;
      this._claimsToRoles.internalValue = value.claimsToRoles;
      this._clientId = value.clientId;
      this._clientRedirectSettings.internalValue = value.clientRedirectSettings;
      this._clientSecret = value.clientSecret;
      this._display = value.display;
      this._googleAdminEmail = value.googleAdminEmail;
      this._googleServiceAccount = value.googleServiceAccount;
      this._googleServiceAccountUri = value.googleServiceAccountUri;
      this._issuerUrl = value.issuerUrl;
      this._maxAge = value.maxAge;
      this._mfa.internalValue = value.mfa;
      this._prompt = value.prompt;
      this._provider = value.provider;
      this._redirectUrl = value.redirectUrl;
      this._scope = value.scope;
      this._usernameClaim = value.usernameClaim;
    }
  }

  // acr_values - computed: false, optional: true, required: false
  private _acrValues?: string; 
  public get acrValues() {
    return this.getStringAttribute('acr_values');
  }
  public set acrValues(value: string) {
    this._acrValues = value;
  }
  public resetAcrValues() {
    this._acrValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrValuesInput() {
    return this._acrValues;
  }

  // allow_unverified_email - computed: false, optional: true, required: false
  private _allowUnverifiedEmail?: boolean | cdktf.IResolvable; 
  public get allowUnverifiedEmail() {
    return this.getBooleanAttribute('allow_unverified_email');
  }
  public set allowUnverifiedEmail(value: boolean | cdktf.IResolvable) {
    this._allowUnverifiedEmail = value;
  }
  public resetAllowUnverifiedEmail() {
    this._allowUnverifiedEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnverifiedEmailInput() {
    return this._allowUnverifiedEmail;
  }

  // claims_to_roles - computed: false, optional: true, required: false
  private _claimsToRoles = new DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRolesList(this, "claims_to_roles", false);
  public get claimsToRoles() {
    return this._claimsToRoles;
  }
  public putClaimsToRoles(value: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClaimsToRoles[] | cdktf.IResolvable) {
    this._claimsToRoles.internalValue = value;
  }
  public resetClaimsToRoles() {
    this._claimsToRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsToRolesInput() {
    return this._claimsToRoles.internalValue;
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

  // client_redirect_settings - computed: false, optional: true, required: false
  private _clientRedirectSettings = new DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClientRedirectSettingsOutputReference(this, "client_redirect_settings");
  public get clientRedirectSettings() {
    return this._clientRedirectSettings;
  }
  public putClientRedirectSettings(value: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecClientRedirectSettings) {
    this._clientRedirectSettings.internalValue = value;
  }
  public resetClientRedirectSettings() {
    this._clientRedirectSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRedirectSettingsInput() {
    return this._clientRedirectSettings.internalValue;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // display - computed: false, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // google_admin_email - computed: false, optional: true, required: false
  private _googleAdminEmail?: string; 
  public get googleAdminEmail() {
    return this.getStringAttribute('google_admin_email');
  }
  public set googleAdminEmail(value: string) {
    this._googleAdminEmail = value;
  }
  public resetGoogleAdminEmail() {
    this._googleAdminEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAdminEmailInput() {
    return this._googleAdminEmail;
  }

  // google_service_account - computed: false, optional: true, required: false
  private _googleServiceAccount?: string; 
  public get googleServiceAccount() {
    return this.getStringAttribute('google_service_account');
  }
  public set googleServiceAccount(value: string) {
    this._googleServiceAccount = value;
  }
  public resetGoogleServiceAccount() {
    this._googleServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountInput() {
    return this._googleServiceAccount;
  }

  // google_service_account_uri - computed: false, optional: true, required: false
  private _googleServiceAccountUri?: string; 
  public get googleServiceAccountUri() {
    return this.getStringAttribute('google_service_account_uri');
  }
  public set googleServiceAccountUri(value: string) {
    this._googleServiceAccountUri = value;
  }
  public resetGoogleServiceAccountUri() {
    this._googleServiceAccountUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountUriInput() {
    return this._googleServiceAccountUri;
  }

  // issuer_url - computed: false, optional: true, required: false
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  public resetIssuerUrl() {
    this._issuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // mfa - computed: false, optional: true, required: false
  private _mfa = new DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecMfaOutputReference(this, "mfa");
  public get mfa() {
    return this._mfa;
  }
  public putMfa(value: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecMfa) {
    this._mfa.internalValue = value;
  }
  public resetMfa() {
    this._mfa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaInput() {
    return this._mfa.internalValue;
  }

  // prompt - computed: false, optional: true, required: false
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  public resetPrompt() {
    this._prompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string[]; 
  public get redirectUrl() {
    return this.getListAttribute('redirect_url');
  }
  public set redirectUrl(value: string[]) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // username_claim - computed: false, optional: true, required: false
  private _usernameClaim?: string; 
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }
  public set usernameClaim(value: string) {
    this._usernameClaim = value;
  }
  public resetUsernameClaim() {
    this._usernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameClaimInput() {
    return this._usernameClaim;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest k8s_resources_teleport_dev_teleport_oidc_connector_v3_manifest}
*/
export class DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_resources_teleport_dev_teleport_oidc_connector_v3_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest to import
  * @param importFromId The id of the existing DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SResourcesTeleportDevTeleportOidcConnectorV3Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_resources_teleport_dev_teleport_oidc_connector_v3_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/resources_teleport_dev_teleport_oidc_connector_v3_manifest k8s_resources_teleport_dev_teleport_oidc_connector_v3_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_resources_teleport_dev_teleport_oidc_connector_v3_manifest',
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
  private _metadata = new DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpec) {
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
      metadata: dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestMetadata",
      },
      spec: {
        value: dataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SResourcesTeleportDevTeleportOidcConnectorV3ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
