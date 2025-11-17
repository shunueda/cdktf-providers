// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#metadata DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#metadata}
  */
  readonly metadata: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestMetadata;
  /**
  * SAMLConnector resource definition v2 from Teleport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#spec DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#spec}
  */
  readonly spec?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpec;
}
export interface DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#annotations DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#labels DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#name DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#namespace DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestMetadataToTerraform(struct?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestMetadataToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAssertionKeyPair {
  /**
  * Cert is a PEM-encoded x509 certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#cert DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#cert}
  */
  readonly cert?: string;
  /**
  * PrivateKey is a PEM encoded x509 private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#private_key DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#private_key}
  */
  readonly privateKey?: string;
}

export function dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAssertionKeyPairToTerraform(struct?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAssertionKeyPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAssertionKeyPairToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAssertionKeyPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAssertionKeyPairOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAssertionKeyPair | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAssertionKeyPair | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._privateKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._privateKey = value.privateKey;
    }
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRoles {
  /**
  * Name is an attribute statement name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#name DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Roles is a list of static teleport roles to map to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#roles DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Value is an attribute statement value to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#value DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRolesToTerraform(struct?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRolesToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRoles | cdktf.IResolvable): any {
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

export class DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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
      this._name = value.name;
      this._roles = value.roles;
      this._value = value.value;
    }
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

export class DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRolesList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRoles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRolesOutputReference {
    return new DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecClientRedirectSettings {
  /**
  * a list of hostnames allowed for https client redirect URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#allowed_https_hostnames DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#allowed_https_hostnames}
  */
  readonly allowedHttpsHostnames?: string[];
  /**
  * a list of CIDRs allowed for HTTP or HTTPS client redirect URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#insecure_allowed_cidr_ranges DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#insecure_allowed_cidr_ranges}
  */
  readonly insecureAllowedCidrRanges?: string[];
}

export function dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecClientRedirectSettingsToTerraform(struct?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecClientRedirectSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_https_hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHttpsHostnames),
    insecure_allowed_cidr_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.insecureAllowedCidrRanges),
  }
}


export function dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecClientRedirectSettingsToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecClientRedirectSettings | cdktf.IResolvable): any {
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

export class DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecClientRedirectSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecClientRedirectSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecClientRedirectSettings | cdktf.IResolvable | undefined) {
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
export interface DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecMfa {
  /**
  * Cert is the identity provider certificate PEM. IDP signs '<Response>' responses using this certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#cert DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#cert}
  */
  readonly cert?: string;
  /**
  * Enabled specified whether this SAML connector supports MFA checks. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#enabled DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * EntityDescriptor is XML with descriptor. It can be used to supply configuration parameters in one XML file rather than supplying them in the individual elements. Usually set from EntityDescriptorUrl.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#entity_descriptor DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#entity_descriptor}
  */
  readonly entityDescriptor?: string;
  /**
  * EntityDescriptorUrl is a URL that supplies a configuration XML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#entity_descriptor_url DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#entity_descriptor_url}
  */
  readonly entityDescriptorUrl?: string;
  /**
  * ForceAuthn specified whether re-authentication should be forced for MFA checks. UNSPECIFIED is treated as YES to always re-authentication for MFA checks. This should only be set to NO if the IdP is setup to perform MFA checks on top of active user sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#force_authn DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#force_authn}
  */
  readonly forceAuthn?: string;
  /**
  * Issuer is the identity provider issuer. Usually set from EntityDescriptor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#issuer DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#issuer}
  */
  readonly issuer?: string;
  /**
  * SSO is the URL of the identity provider's SSO service. Usually set from EntityDescriptor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#sso DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#sso}
  */
  readonly sso?: string;
}

export function dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecMfaToTerraform(struct?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecMfa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    entity_descriptor: cdktf.stringToTerraform(struct!.entityDescriptor),
    entity_descriptor_url: cdktf.stringToTerraform(struct!.entityDescriptorUrl),
    force_authn: cdktf.stringToTerraform(struct!.forceAuthn),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    sso: cdktf.stringToTerraform(struct!.sso),
  }
}


export function dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecMfaToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecMfa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
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
    entity_descriptor: {
      value: cdktf.stringToHclTerraform(struct!.entityDescriptor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_descriptor_url: {
      value: cdktf.stringToHclTerraform(struct!.entityDescriptorUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_authn: {
      value: cdktf.stringToHclTerraform(struct!.forceAuthn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso: {
      value: cdktf.stringToHclTerraform(struct!.sso),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecMfaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecMfa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._entityDescriptor !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityDescriptor = this._entityDescriptor;
    }
    if (this._entityDescriptorUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityDescriptorUrl = this._entityDescriptorUrl;
    }
    if (this._forceAuthn !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceAuthn = this._forceAuthn;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._sso !== undefined) {
      hasAnyValues = true;
      internalValueResult.sso = this._sso;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecMfa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._enabled = undefined;
      this._entityDescriptor = undefined;
      this._entityDescriptorUrl = undefined;
      this._forceAuthn = undefined;
      this._issuer = undefined;
      this._sso = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._enabled = value.enabled;
      this._entityDescriptor = value.entityDescriptor;
      this._entityDescriptorUrl = value.entityDescriptorUrl;
      this._forceAuthn = value.forceAuthn;
      this._issuer = value.issuer;
      this._sso = value.sso;
    }
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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

  // entity_descriptor - computed: false, optional: true, required: false
  private _entityDescriptor?: string; 
  public get entityDescriptor() {
    return this.getStringAttribute('entity_descriptor');
  }
  public set entityDescriptor(value: string) {
    this._entityDescriptor = value;
  }
  public resetEntityDescriptor() {
    this._entityDescriptor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityDescriptorInput() {
    return this._entityDescriptor;
  }

  // entity_descriptor_url - computed: false, optional: true, required: false
  private _entityDescriptorUrl?: string; 
  public get entityDescriptorUrl() {
    return this.getStringAttribute('entity_descriptor_url');
  }
  public set entityDescriptorUrl(value: string) {
    this._entityDescriptorUrl = value;
  }
  public resetEntityDescriptorUrl() {
    this._entityDescriptorUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityDescriptorUrlInput() {
    return this._entityDescriptorUrl;
  }

  // force_authn - computed: false, optional: true, required: false
  private _forceAuthn?: string; 
  public get forceAuthn() {
    return this.getStringAttribute('force_authn');
  }
  public set forceAuthn(value: string) {
    this._forceAuthn = value;
  }
  public resetForceAuthn() {
    this._forceAuthn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceAuthnInput() {
    return this._forceAuthn;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // sso - computed: false, optional: true, required: false
  private _sso?: string; 
  public get sso() {
    return this.getStringAttribute('sso');
  }
  public set sso(value: string) {
    this._sso = value;
  }
  public resetSso() {
    this._sso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoInput() {
    return this._sso;
  }
}
export interface DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecSigningKeyPair {
  /**
  * Cert is a PEM-encoded x509 certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#cert DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#cert}
  */
  readonly cert?: string;
  /**
  * PrivateKey is a PEM encoded x509 private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#private_key DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#private_key}
  */
  readonly privateKey?: string;
}

export function dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecSigningKeyPairToTerraform(struct?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecSigningKeyPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecSigningKeyPairToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecSigningKeyPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecSigningKeyPairOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecSigningKeyPair | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecSigningKeyPair | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._privateKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._privateKey = value.privateKey;
    }
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpec {
  /**
  * AssertionConsumerService is a URL for assertion consumer service on the service provider (Teleport's side).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#acs DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#acs}
  */
  readonly acs?: string;
  /**
  * AllowIDPInitiated is a flag that indicates if the connector can be used for IdP-initiated logins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#allow_idp_initiated DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#allow_idp_initiated}
  */
  readonly allowIdpInitiated?: boolean | cdktf.IResolvable;
  /**
  * EncryptionKeyPair is a key pair used for decrypting SAML assertions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#assertion_key_pair DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#assertion_key_pair}
  */
  readonly assertionKeyPair?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAssertionKeyPair;
  /**
  * AttributesToRoles is a list of mappings of attribute statements to roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#attributes_to_roles DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#attributes_to_roles}
  */
  readonly attributesToRoles?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRoles[] | cdktf.IResolvable;
  /**
  * Audience uniquely identifies our service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#audience DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#audience}
  */
  readonly audience?: string;
  /**
  * Cert is the identity provider certificate PEM. IDP signs '<Response>' responses using this certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#cert DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#cert}
  */
  readonly cert?: string;
  /**
  * ClientRedirectSettings defines which client redirect URLs are allowed for non-browser SSO logins other than the standard localhost ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#client_redirect_settings DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#client_redirect_settings}
  */
  readonly clientRedirectSettings?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecClientRedirectSettings;
  /**
  * Display controls how this connector is displayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#display DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#display}
  */
  readonly display?: string;
  /**
  * EntityDescriptor is XML with descriptor. It can be used to supply configuration parameters in one XML file rather than supplying them in the individual elements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#entity_descriptor DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#entity_descriptor}
  */
  readonly entityDescriptor?: string;
  /**
  * EntityDescriptorURL is a URL that supplies a configuration XML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#entity_descriptor_url DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#entity_descriptor_url}
  */
  readonly entityDescriptorUrl?: string;
  /**
  * ForceAuthn specified whether re-authentication should be forced on login. UNSPECIFIED is treated as NO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#force_authn DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#force_authn}
  */
  readonly forceAuthn?: string;
  /**
  * Issuer is the identity provider issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#issuer DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#issuer}
  */
  readonly issuer?: string;
  /**
  * MFASettings contains settings to enable SSO MFA checks through this auth connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#mfa DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#mfa}
  */
  readonly mfa?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecMfa;
  /**
  * Provider is the external identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#provider DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#provider}
  */
  readonly provider?: string;
  /**
  * ServiceProviderIssuer is the issuer of the service provider (Teleport).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#service_provider_issuer DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#service_provider_issuer}
  */
  readonly serviceProviderIssuer?: string;
  /**
  * SigningKeyPair is an x509 key pair used to sign AuthnRequest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#signing_key_pair DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#signing_key_pair}
  */
  readonly signingKeyPair?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecSigningKeyPair;
  /**
  * SingleLogoutURL is the SAML Single log-out URL to initiate SAML SLO (single log-out). If this is not provided, SLO is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#single_logout_url DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#single_logout_url}
  */
  readonly singleLogoutUrl?: string;
  /**
  * SSO is the URL of the identity provider's SSO service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#sso DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest#sso}
  */
  readonly sso?: string;
}

export function dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecToTerraform(struct?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acs: cdktf.stringToTerraform(struct!.acs),
    allow_idp_initiated: cdktf.booleanToTerraform(struct!.allowIdpInitiated),
    assertion_key_pair: dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAssertionKeyPairToTerraform(struct!.assertionKeyPair),
    attributes_to_roles: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRolesToTerraform, false)(struct!.attributesToRoles),
    audience: cdktf.stringToTerraform(struct!.audience),
    cert: cdktf.stringToTerraform(struct!.cert),
    client_redirect_settings: dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecClientRedirectSettingsToTerraform(struct!.clientRedirectSettings),
    display: cdktf.stringToTerraform(struct!.display),
    entity_descriptor: cdktf.stringToTerraform(struct!.entityDescriptor),
    entity_descriptor_url: cdktf.stringToTerraform(struct!.entityDescriptorUrl),
    force_authn: cdktf.stringToTerraform(struct!.forceAuthn),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    mfa: dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecMfaToTerraform(struct!.mfa),
    provider: cdktf.stringToTerraform(struct!.provider),
    service_provider_issuer: cdktf.stringToTerraform(struct!.serviceProviderIssuer),
    signing_key_pair: dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecSigningKeyPairToTerraform(struct!.signingKeyPair),
    single_logout_url: cdktf.stringToTerraform(struct!.singleLogoutUrl),
    sso: cdktf.stringToTerraform(struct!.sso),
  }
}


export function dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acs: {
      value: cdktf.stringToHclTerraform(struct!.acs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_idp_initiated: {
      value: cdktf.booleanToHclTerraform(struct!.allowIdpInitiated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assertion_key_pair: {
      value: dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAssertionKeyPairToHclTerraform(struct!.assertionKeyPair),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAssertionKeyPair",
    },
    attributes_to_roles: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRolesToHclTerraform, false)(struct!.attributesToRoles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRolesList",
    },
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_redirect_settings: {
      value: dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecClientRedirectSettingsToHclTerraform(struct!.clientRedirectSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecClientRedirectSettings",
    },
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_descriptor: {
      value: cdktf.stringToHclTerraform(struct!.entityDescriptor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_descriptor_url: {
      value: cdktf.stringToHclTerraform(struct!.entityDescriptorUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_authn: {
      value: cdktf.stringToHclTerraform(struct!.forceAuthn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mfa: {
      value: dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecMfaToHclTerraform(struct!.mfa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecMfa",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_provider_issuer: {
      value: cdktf.stringToHclTerraform(struct!.serviceProviderIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_key_pair: {
      value: dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecSigningKeyPairToHclTerraform(struct!.signingKeyPair),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecSigningKeyPair",
    },
    single_logout_url: {
      value: cdktf.stringToHclTerraform(struct!.singleLogoutUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso: {
      value: cdktf.stringToHclTerraform(struct!.sso),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acs !== undefined) {
      hasAnyValues = true;
      internalValueResult.acs = this._acs;
    }
    if (this._allowIdpInitiated !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowIdpInitiated = this._allowIdpInitiated;
    }
    if (this._assertionKeyPair?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionKeyPair = this._assertionKeyPair?.internalValue;
    }
    if (this._attributesToRoles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributesToRoles = this._attributesToRoles?.internalValue;
    }
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._clientRedirectSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRedirectSettings = this._clientRedirectSettings?.internalValue;
    }
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._entityDescriptor !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityDescriptor = this._entityDescriptor;
    }
    if (this._entityDescriptorUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityDescriptorUrl = this._entityDescriptorUrl;
    }
    if (this._forceAuthn !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceAuthn = this._forceAuthn;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._mfa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfa = this._mfa?.internalValue;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._serviceProviderIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProviderIssuer = this._serviceProviderIssuer;
    }
    if (this._signingKeyPair?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingKeyPair = this._signingKeyPair?.internalValue;
    }
    if (this._singleLogoutUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleLogoutUrl = this._singleLogoutUrl;
    }
    if (this._sso !== undefined) {
      hasAnyValues = true;
      internalValueResult.sso = this._sso;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acs = undefined;
      this._allowIdpInitiated = undefined;
      this._assertionKeyPair.internalValue = undefined;
      this._attributesToRoles.internalValue = undefined;
      this._audience = undefined;
      this._cert = undefined;
      this._clientRedirectSettings.internalValue = undefined;
      this._display = undefined;
      this._entityDescriptor = undefined;
      this._entityDescriptorUrl = undefined;
      this._forceAuthn = undefined;
      this._issuer = undefined;
      this._mfa.internalValue = undefined;
      this._provider = undefined;
      this._serviceProviderIssuer = undefined;
      this._signingKeyPair.internalValue = undefined;
      this._singleLogoutUrl = undefined;
      this._sso = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acs = value.acs;
      this._allowIdpInitiated = value.allowIdpInitiated;
      this._assertionKeyPair.internalValue = value.assertionKeyPair;
      this._attributesToRoles.internalValue = value.attributesToRoles;
      this._audience = value.audience;
      this._cert = value.cert;
      this._clientRedirectSettings.internalValue = value.clientRedirectSettings;
      this._display = value.display;
      this._entityDescriptor = value.entityDescriptor;
      this._entityDescriptorUrl = value.entityDescriptorUrl;
      this._forceAuthn = value.forceAuthn;
      this._issuer = value.issuer;
      this._mfa.internalValue = value.mfa;
      this._provider = value.provider;
      this._serviceProviderIssuer = value.serviceProviderIssuer;
      this._signingKeyPair.internalValue = value.signingKeyPair;
      this._singleLogoutUrl = value.singleLogoutUrl;
      this._sso = value.sso;
    }
  }

  // acs - computed: false, optional: true, required: false
  private _acs?: string; 
  public get acs() {
    return this.getStringAttribute('acs');
  }
  public set acs(value: string) {
    this._acs = value;
  }
  public resetAcs() {
    this._acs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsInput() {
    return this._acs;
  }

  // allow_idp_initiated - computed: false, optional: true, required: false
  private _allowIdpInitiated?: boolean | cdktf.IResolvable; 
  public get allowIdpInitiated() {
    return this.getBooleanAttribute('allow_idp_initiated');
  }
  public set allowIdpInitiated(value: boolean | cdktf.IResolvable) {
    this._allowIdpInitiated = value;
  }
  public resetAllowIdpInitiated() {
    this._allowIdpInitiated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIdpInitiatedInput() {
    return this._allowIdpInitiated;
  }

  // assertion_key_pair - computed: false, optional: true, required: false
  private _assertionKeyPair = new DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAssertionKeyPairOutputReference(this, "assertion_key_pair");
  public get assertionKeyPair() {
    return this._assertionKeyPair;
  }
  public putAssertionKeyPair(value: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAssertionKeyPair) {
    this._assertionKeyPair.internalValue = value;
  }
  public resetAssertionKeyPair() {
    this._assertionKeyPair.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionKeyPairInput() {
    return this._assertionKeyPair.internalValue;
  }

  // attributes_to_roles - computed: false, optional: true, required: false
  private _attributesToRoles = new DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRolesList(this, "attributes_to_roles", false);
  public get attributesToRoles() {
    return this._attributesToRoles;
  }
  public putAttributesToRoles(value: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecAttributesToRoles[] | cdktf.IResolvable) {
    this._attributesToRoles.internalValue = value;
  }
  public resetAttributesToRoles() {
    this._attributesToRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesToRolesInput() {
    return this._attributesToRoles.internalValue;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // client_redirect_settings - computed: false, optional: true, required: false
  private _clientRedirectSettings = new DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecClientRedirectSettingsOutputReference(this, "client_redirect_settings");
  public get clientRedirectSettings() {
    return this._clientRedirectSettings;
  }
  public putClientRedirectSettings(value: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecClientRedirectSettings) {
    this._clientRedirectSettings.internalValue = value;
  }
  public resetClientRedirectSettings() {
    this._clientRedirectSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRedirectSettingsInput() {
    return this._clientRedirectSettings.internalValue;
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

  // entity_descriptor - computed: false, optional: true, required: false
  private _entityDescriptor?: string; 
  public get entityDescriptor() {
    return this.getStringAttribute('entity_descriptor');
  }
  public set entityDescriptor(value: string) {
    this._entityDescriptor = value;
  }
  public resetEntityDescriptor() {
    this._entityDescriptor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityDescriptorInput() {
    return this._entityDescriptor;
  }

  // entity_descriptor_url - computed: false, optional: true, required: false
  private _entityDescriptorUrl?: string; 
  public get entityDescriptorUrl() {
    return this.getStringAttribute('entity_descriptor_url');
  }
  public set entityDescriptorUrl(value: string) {
    this._entityDescriptorUrl = value;
  }
  public resetEntityDescriptorUrl() {
    this._entityDescriptorUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityDescriptorUrlInput() {
    return this._entityDescriptorUrl;
  }

  // force_authn - computed: false, optional: true, required: false
  private _forceAuthn?: string; 
  public get forceAuthn() {
    return this.getStringAttribute('force_authn');
  }
  public set forceAuthn(value: string) {
    this._forceAuthn = value;
  }
  public resetForceAuthn() {
    this._forceAuthn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceAuthnInput() {
    return this._forceAuthn;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // mfa - computed: false, optional: true, required: false
  private _mfa = new DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecMfaOutputReference(this, "mfa");
  public get mfa() {
    return this._mfa;
  }
  public putMfa(value: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecMfa) {
    this._mfa.internalValue = value;
  }
  public resetMfa() {
    this._mfa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaInput() {
    return this._mfa.internalValue;
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

  // service_provider_issuer - computed: false, optional: true, required: false
  private _serviceProviderIssuer?: string; 
  public get serviceProviderIssuer() {
    return this.getStringAttribute('service_provider_issuer');
  }
  public set serviceProviderIssuer(value: string) {
    this._serviceProviderIssuer = value;
  }
  public resetServiceProviderIssuer() {
    this._serviceProviderIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderIssuerInput() {
    return this._serviceProviderIssuer;
  }

  // signing_key_pair - computed: false, optional: true, required: false
  private _signingKeyPair = new DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecSigningKeyPairOutputReference(this, "signing_key_pair");
  public get signingKeyPair() {
    return this._signingKeyPair;
  }
  public putSigningKeyPair(value: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecSigningKeyPair) {
    this._signingKeyPair.internalValue = value;
  }
  public resetSigningKeyPair() {
    this._signingKeyPair.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKeyPairInput() {
    return this._signingKeyPair.internalValue;
  }

  // single_logout_url - computed: false, optional: true, required: false
  private _singleLogoutUrl?: string; 
  public get singleLogoutUrl() {
    return this.getStringAttribute('single_logout_url');
  }
  public set singleLogoutUrl(value: string) {
    this._singleLogoutUrl = value;
  }
  public resetSingleLogoutUrl() {
    this._singleLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleLogoutUrlInput() {
    return this._singleLogoutUrl;
  }

  // sso - computed: false, optional: true, required: false
  private _sso?: string; 
  public get sso() {
    return this.getStringAttribute('sso');
  }
  public set sso(value: string) {
    this._sso = value;
  }
  public resetSso() {
    this._sso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoInput() {
    return this._sso;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest k8s_resources_teleport_dev_teleport_saml_connector_v2_manifest}
*/
export class DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_resources_teleport_dev_teleport_saml_connector_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest to import
  * @param importFromId The id of the existing DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SResourcesTeleportDevTeleportSamlConnectorV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_resources_teleport_dev_teleport_saml_connector_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/resources_teleport_dev_teleport_saml_connector_v2_manifest k8s_resources_teleport_dev_teleport_saml_connector_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_resources_teleport_dev_teleport_saml_connector_v2_manifest',
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
  private _metadata = new DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpec) {
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
      metadata: dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestMetadata",
      },
      spec: {
        value: dataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SResourcesTeleportDevTeleportSamlConnectorV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
