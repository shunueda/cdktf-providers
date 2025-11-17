// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#metadata DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#metadata}
  */
  readonly metadata: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestMetadata;
  /**
  * GithubConnector resource definition v3 from Teleport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#spec DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#spec}
  */
  readonly spec?: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpec;
}
export interface DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#annotations DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#labels DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#name DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#namespace DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestMetadataToTerraform(struct?: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestMetadataToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecClientRedirectSettings {
  /**
  * a list of hostnames allowed for https client redirect URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#allowed_https_hostnames DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#allowed_https_hostnames}
  */
  readonly allowedHttpsHostnames?: string[];
  /**
  * a list of CIDRs allowed for HTTP or HTTPS client redirect URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#insecure_allowed_cidr_ranges DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#insecure_allowed_cidr_ranges}
  */
  readonly insecureAllowedCidrRanges?: string[];
}

export function dataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecClientRedirectSettingsToTerraform(struct?: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecClientRedirectSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_https_hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHttpsHostnames),
    insecure_allowed_cidr_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.insecureAllowedCidrRanges),
  }
}


export function dataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecClientRedirectSettingsToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecClientRedirectSettings | cdktf.IResolvable): any {
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

export class DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecClientRedirectSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecClientRedirectSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecClientRedirectSettings | cdktf.IResolvable | undefined) {
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
export interface DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRoles {
  /**
  * Organization is a Github organization a user belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#organization DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#organization}
  */
  readonly organization?: string;
  /**
  * Roles is a list of allowed logins for this org/team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#roles DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Team is a team within the organization a user belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#team DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#team}
  */
  readonly team?: string;
}

export function dataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRolesToTerraform(struct?: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organization: cdktf.stringToTerraform(struct!.organization),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    team: cdktf.stringToTerraform(struct!.team),
  }
}


export function dataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRolesToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
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
    team: {
      value: cdktf.stringToHclTerraform(struct!.team),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._team !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._organization = undefined;
      this._roles = undefined;
      this._team = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._organization = value.organization;
      this._roles = value.roles;
      this._team = value.team;
    }
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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

  // team - computed: false, optional: true, required: false
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }
}

export class DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRolesList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRoles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRolesOutputReference {
    return new DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpec {
  /**
  * APIEndpointURL is the URL of the API endpoint of the Github instance this connector is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#api_endpoint_url DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#api_endpoint_url}
  */
  readonly apiEndpointUrl?: string;
  /**
  * ClientID is the Github OAuth app client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#client_id DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * ClientRedirectSettings defines which client redirect URLs are allowed for non-browser SSO logins other than the standard localhost ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#client_redirect_settings DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#client_redirect_settings}
  */
  readonly clientRedirectSettings?: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecClientRedirectSettings;
  /**
  * ClientSecret is the Github OAuth app client secret. This field supports secret lookup. See the operator documentation for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#client_secret DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Display is the connector display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#display DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#display}
  */
  readonly display?: string;
  /**
  * EndpointURL is the URL of the GitHub instance this connector is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#endpoint_url DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * RedirectURL is the authorization callback URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#redirect_url DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * TeamsToRoles maps Github team memberships onto allowed roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#teams_to_roles DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest#teams_to_roles}
  */
  readonly teamsToRoles?: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRoles[] | cdktf.IResolvable;
}

export function dataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecToTerraform(struct?: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint_url: cdktf.stringToTerraform(struct!.apiEndpointUrl),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_redirect_settings: dataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecClientRedirectSettingsToTerraform(struct!.clientRedirectSettings),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    display: cdktf.stringToTerraform(struct!.display),
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    teams_to_roles: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRolesToTerraform, false)(struct!.teamsToRoles),
  }
}


export function dataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpointUrl),
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
    client_redirect_settings: {
      value: dataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecClientRedirectSettingsToHclTerraform(struct!.clientRedirectSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecClientRedirectSettings",
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
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.redirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    teams_to_roles: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRolesToHclTerraform, false)(struct!.teamsToRoles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRolesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointUrl = this._apiEndpointUrl;
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
    if (this._endpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrl = this._endpointUrl;
    }
    if (this._redirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrl = this._redirectUrl;
    }
    if (this._teamsToRoles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamsToRoles = this._teamsToRoles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiEndpointUrl = undefined;
      this._clientId = undefined;
      this._clientRedirectSettings.internalValue = undefined;
      this._clientSecret = undefined;
      this._display = undefined;
      this._endpointUrl = undefined;
      this._redirectUrl = undefined;
      this._teamsToRoles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiEndpointUrl = value.apiEndpointUrl;
      this._clientId = value.clientId;
      this._clientRedirectSettings.internalValue = value.clientRedirectSettings;
      this._clientSecret = value.clientSecret;
      this._display = value.display;
      this._endpointUrl = value.endpointUrl;
      this._redirectUrl = value.redirectUrl;
      this._teamsToRoles.internalValue = value.teamsToRoles;
    }
  }

  // api_endpoint_url - computed: false, optional: true, required: false
  private _apiEndpointUrl?: string; 
  public get apiEndpointUrl() {
    return this.getStringAttribute('api_endpoint_url');
  }
  public set apiEndpointUrl(value: string) {
    this._apiEndpointUrl = value;
  }
  public resetApiEndpointUrl() {
    this._apiEndpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointUrlInput() {
    return this._apiEndpointUrl;
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
  private _clientRedirectSettings = new DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecClientRedirectSettingsOutputReference(this, "client_redirect_settings");
  public get clientRedirectSettings() {
    return this._clientRedirectSettings;
  }
  public putClientRedirectSettings(value: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecClientRedirectSettings) {
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

  // endpoint_url - computed: false, optional: true, required: false
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  public resetEndpointUrl() {
    this._endpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // teams_to_roles - computed: false, optional: true, required: false
  private _teamsToRoles = new DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRolesList(this, "teams_to_roles", false);
  public get teamsToRoles() {
    return this._teamsToRoles;
  }
  public putTeamsToRoles(value: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecTeamsToRoles[] | cdktf.IResolvable) {
    this._teamsToRoles.internalValue = value;
  }
  public resetTeamsToRoles() {
    this._teamsToRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsToRolesInput() {
    return this._teamsToRoles.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest k8s_resources_teleport_dev_teleport_github_connector_v3_manifest}
*/
export class DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_resources_teleport_dev_teleport_github_connector_v3_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest to import
  * @param importFromId The id of the existing DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SResourcesTeleportDevTeleportGithubConnectorV3Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_resources_teleport_dev_teleport_github_connector_v3_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_github_connector_v3_manifest k8s_resources_teleport_dev_teleport_github_connector_v3_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_resources_teleport_dev_teleport_github_connector_v3_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpec) {
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
      metadata: dataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestMetadata",
      },
      spec: {
        value: dataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SResourcesTeleportDevTeleportGithubConnectorV3ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
