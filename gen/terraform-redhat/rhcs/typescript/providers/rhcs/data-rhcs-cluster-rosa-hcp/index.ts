// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_hcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRhcsClusterRosaHcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain prefix is optionally assigned by the user.It will appear in the Cluster's domain when the cluster is provisionedIf not supplied, it will be auto generated.After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_hcp#domain_prefix DataRhcsClusterRosaHcp#domain_prefix}
  */
  readonly domainPrefix?: string;
  /**
  * Unique identifier of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_hcp#id DataRhcsClusterRosaHcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Used to encrypt root volume of compute node pools. The key ARN is the Amazon Resource Name (ARN) of a AWS Key Management Service (KMS) Key. It is a unique, fully qualified identifier for the AWS KMS Key. A key ARN includes the AWS account, Region, and the key ID(optional). After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_hcp#kms_key_arn DataRhcsClusterRosaHcp#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Registry configuration for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_hcp#registry_config DataRhcsClusterRosaHcp#registry_config}
  */
  readonly registryConfig?: DataRhcsClusterRosaHcpRegistryConfig;
}
export interface DataRhcsClusterRosaHcpAdminCredentials {
}

export function dataRhcsClusterRosaHcpAdminCredentialsToTerraform(struct?: DataRhcsClusterRosaHcpAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRhcsClusterRosaHcpAdminCredentialsToHclTerraform(struct?: DataRhcsClusterRosaHcpAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRhcsClusterRosaHcpAdminCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsClusterRosaHcpAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsClusterRosaHcpAdminCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataRhcsClusterRosaHcpProxy {
}

export function dataRhcsClusterRosaHcpProxyToTerraform(struct?: DataRhcsClusterRosaHcpProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRhcsClusterRosaHcpProxyToHclTerraform(struct?: DataRhcsClusterRosaHcpProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRhcsClusterRosaHcpProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsClusterRosaHcpProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsClusterRosaHcpProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_trust_bundle - computed: true, optional: false, required: false
  public get additionalTrustBundle() {
    return this.getStringAttribute('additional_trust_bundle');
  }

  // http_proxy - computed: true, optional: false, required: false
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }

  // https_proxy - computed: true, optional: false, required: false
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }

  // no_proxy - computed: true, optional: false, required: false
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
}
export interface DataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImport {
  /**
  * domain_name specifies a domain name for the registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_hcp#domain_name DataRhcsClusterRosaHcp#domain_name}
  */
  readonly domainName?: string;
  /**
  * insecure indicates whether the registry is secure (https) or insecure (http). By default (if not specified) the registry is assumed as secure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_hcp#insecure DataRhcsClusterRosaHcp#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
}

export function dataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImportToTerraform(struct?: DataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
  }
}


export function dataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImportToHclTerraform(struct?: DataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
      this._insecure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainName = value.domainName;
      this._insecure = value.insecure;
    }
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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
}

export class DataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImportList extends cdktf.ComplexList {
  public internalValue? : DataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImport[] | cdktf.IResolvable

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
  public get(index: number): DataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImportOutputReference {
    return new DataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRhcsClusterRosaHcpRegistryConfigRegistrySources {
  /**
  * allowed_registries: registries for which image pull and push actions are allowed. To specify all subdomains, add the asterisk (*) wildcard character as a prefix to the domain name. For example, *.example.com. You can specify an individual repository within a registry. For example: reg1.io/myrepo/myapp:latest. All other registries are blocked. Mutually exclusive with `BlockedRegistries`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_hcp#allowed_registries DataRhcsClusterRosaHcp#allowed_registries}
  */
  readonly allowedRegistries?: string[];
  /**
  * blocked_registries: registries for which image pull and push actions are denied. To specify all subdomains, add the asterisk (*) wildcard character as a prefix to the domain name. For example, *.example.com. You can specify an individual repository within a registry. For example: reg1.io/myrepo/myapp:latest. All other registries are allowed. Mutually exclusive with `AllowedRegistries`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_hcp#blocked_registries DataRhcsClusterRosaHcp#blocked_registries}
  */
  readonly blockedRegistries?: string[];
  /**
  * insecure_registries are registries which do not have a valid TLS certificate or only support HTTP connections. To specify all subdomains, add the asterisk (*) wildcard character as a prefix to the domain name. For example, *.example.com. You can specify an individual repository within a registry. For example: reg1.io/myrepo/myapp:latest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_hcp#insecure_registries DataRhcsClusterRosaHcp#insecure_registries}
  */
  readonly insecureRegistries?: string[];
}

export function dataRhcsClusterRosaHcpRegistryConfigRegistrySourcesToTerraform(struct?: DataRhcsClusterRosaHcpRegistryConfigRegistrySources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_registries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRegistries),
    blocked_registries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockedRegistries),
    insecure_registries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.insecureRegistries),
  }
}


export function dataRhcsClusterRosaHcpRegistryConfigRegistrySourcesToHclTerraform(struct?: DataRhcsClusterRosaHcpRegistryConfigRegistrySources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_registries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedRegistries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    blocked_registries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockedRegistries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    insecure_registries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.insecureRegistries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRhcsClusterRosaHcpRegistryConfigRegistrySourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsClusterRosaHcpRegistryConfigRegistrySources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRegistries !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRegistries = this._allowedRegistries;
    }
    if (this._blockedRegistries !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedRegistries = this._blockedRegistries;
    }
    if (this._insecureRegistries !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureRegistries = this._insecureRegistries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsClusterRosaHcpRegistryConfigRegistrySources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRegistries = undefined;
      this._blockedRegistries = undefined;
      this._insecureRegistries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRegistries = value.allowedRegistries;
      this._blockedRegistries = value.blockedRegistries;
      this._insecureRegistries = value.insecureRegistries;
    }
  }

  // allowed_registries - computed: true, optional: true, required: false
  private _allowedRegistries?: string[]; 
  public get allowedRegistries() {
    return this.getListAttribute('allowed_registries');
  }
  public set allowedRegistries(value: string[]) {
    this._allowedRegistries = value;
  }
  public resetAllowedRegistries() {
    this._allowedRegistries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRegistriesInput() {
    return this._allowedRegistries;
  }

  // blocked_registries - computed: true, optional: true, required: false
  private _blockedRegistries?: string[]; 
  public get blockedRegistries() {
    return this.getListAttribute('blocked_registries');
  }
  public set blockedRegistries(value: string[]) {
    this._blockedRegistries = value;
  }
  public resetBlockedRegistries() {
    this._blockedRegistries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedRegistriesInput() {
    return this._blockedRegistries;
  }

  // insecure_registries - computed: true, optional: true, required: false
  private _insecureRegistries?: string[]; 
  public get insecureRegistries() {
    return this.getListAttribute('insecure_registries');
  }
  public set insecureRegistries(value: string[]) {
    this._insecureRegistries = value;
  }
  public resetInsecureRegistries() {
    this._insecureRegistries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureRegistriesInput() {
    return this._insecureRegistries;
  }
}
export interface DataRhcsClusterRosaHcpRegistryConfig {
  /**
  * additional_trusted_ca is a map containing the registry hostname as the key, and the PEM-encoded certificate as the value, for each additional registry CA to trust.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_hcp#additional_trusted_ca DataRhcsClusterRosaHcp#additional_trusted_ca}
  */
  readonly additionalTrustedCa?: { [key: string]: string };
  /**
  * allowed_registries_for_import limits the container image registries that normal users may import images from. Set this list to the registries that you trust to contain valid Docker images and that you want applications to be able to import from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_hcp#allowed_registries_for_import DataRhcsClusterRosaHcp#allowed_registries_for_import}
  */
  readonly allowedRegistriesForImport?: DataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImport[] | cdktf.IResolvable;
  /**
  * platform_allowlist_id contains a reference to a RegistryAllowlist which is a list of internal registries which needs to be whitelisted for the platform to work. It can be omitted at creation and updating and its lifecycle can be managed separately if needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_hcp#platform_allowlist_id DataRhcsClusterRosaHcp#platform_allowlist_id}
  */
  readonly platformAllowlistId?: string;
  /**
  * registry_sources contains configuration that determines how the container runtime should treat individual registries when accessing images for builds+pods. (e.g. whether or not to allow insecure access).  It does not contain configuration for the internal cluster registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_hcp#registry_sources DataRhcsClusterRosaHcp#registry_sources}
  */
  readonly registrySources?: DataRhcsClusterRosaHcpRegistryConfigRegistrySources;
}

export function dataRhcsClusterRosaHcpRegistryConfigToTerraform(struct?: DataRhcsClusterRosaHcpRegistryConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_trusted_ca: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalTrustedCa),
    allowed_registries_for_import: cdktf.listMapper(dataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImportToTerraform, false)(struct!.allowedRegistriesForImport),
    platform_allowlist_id: cdktf.stringToTerraform(struct!.platformAllowlistId),
    registry_sources: dataRhcsClusterRosaHcpRegistryConfigRegistrySourcesToTerraform(struct!.registrySources),
  }
}


export function dataRhcsClusterRosaHcpRegistryConfigToHclTerraform(struct?: DataRhcsClusterRosaHcpRegistryConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_trusted_ca: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalTrustedCa),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    allowed_registries_for_import: {
      value: cdktf.listMapperHcl(dataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImportToHclTerraform, false)(struct!.allowedRegistriesForImport),
      isBlock: true,
      type: "list",
      storageClassType: "DataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImportList",
    },
    platform_allowlist_id: {
      value: cdktf.stringToHclTerraform(struct!.platformAllowlistId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_sources: {
      value: dataRhcsClusterRosaHcpRegistryConfigRegistrySourcesToHclTerraform(struct!.registrySources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataRhcsClusterRosaHcpRegistryConfigRegistrySources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRhcsClusterRosaHcpRegistryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsClusterRosaHcpRegistryConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalTrustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalTrustedCa = this._additionalTrustedCa;
    }
    if (this._allowedRegistriesForImport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRegistriesForImport = this._allowedRegistriesForImport?.internalValue;
    }
    if (this._platformAllowlistId !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformAllowlistId = this._platformAllowlistId;
    }
    if (this._registrySources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrySources = this._registrySources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsClusterRosaHcpRegistryConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalTrustedCa = undefined;
      this._allowedRegistriesForImport.internalValue = undefined;
      this._platformAllowlistId = undefined;
      this._registrySources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalTrustedCa = value.additionalTrustedCa;
      this._allowedRegistriesForImport.internalValue = value.allowedRegistriesForImport;
      this._platformAllowlistId = value.platformAllowlistId;
      this._registrySources.internalValue = value.registrySources;
    }
  }

  // additional_trusted_ca - computed: false, optional: true, required: false
  private _additionalTrustedCa?: { [key: string]: string }; 
  public get additionalTrustedCa() {
    return this.getStringMapAttribute('additional_trusted_ca');
  }
  public set additionalTrustedCa(value: { [key: string]: string }) {
    this._additionalTrustedCa = value;
  }
  public resetAdditionalTrustedCa() {
    this._additionalTrustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalTrustedCaInput() {
    return this._additionalTrustedCa;
  }

  // allowed_registries_for_import - computed: false, optional: true, required: false
  private _allowedRegistriesForImport = new DataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImportList(this, "allowed_registries_for_import", false);
  public get allowedRegistriesForImport() {
    return this._allowedRegistriesForImport;
  }
  public putAllowedRegistriesForImport(value: DataRhcsClusterRosaHcpRegistryConfigAllowedRegistriesForImport[] | cdktf.IResolvable) {
    this._allowedRegistriesForImport.internalValue = value;
  }
  public resetAllowedRegistriesForImport() {
    this._allowedRegistriesForImport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRegistriesForImportInput() {
    return this._allowedRegistriesForImport.internalValue;
  }

  // platform_allowlist_id - computed: true, optional: true, required: false
  private _platformAllowlistId?: string; 
  public get platformAllowlistId() {
    return this.getStringAttribute('platform_allowlist_id');
  }
  public set platformAllowlistId(value: string) {
    this._platformAllowlistId = value;
  }
  public resetPlatformAllowlistId() {
    this._platformAllowlistId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformAllowlistIdInput() {
    return this._platformAllowlistId;
  }

  // registry_sources - computed: false, optional: true, required: false
  private _registrySources = new DataRhcsClusterRosaHcpRegistryConfigRegistrySourcesOutputReference(this, "registry_sources");
  public get registrySources() {
    return this._registrySources;
  }
  public putRegistrySources(value: DataRhcsClusterRosaHcpRegistryConfigRegistrySources) {
    this._registrySources.internalValue = value;
  }
  public resetRegistrySources() {
    this._registrySources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrySourcesInput() {
    return this._registrySources.internalValue;
  }
}
export interface DataRhcsClusterRosaHcpSharedVpc {
}

export function dataRhcsClusterRosaHcpSharedVpcToTerraform(struct?: DataRhcsClusterRosaHcpSharedVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRhcsClusterRosaHcpSharedVpcToHclTerraform(struct?: DataRhcsClusterRosaHcpSharedVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRhcsClusterRosaHcpSharedVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsClusterRosaHcpSharedVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsClusterRosaHcpSharedVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ingress_private_hosted_zone_id - computed: true, optional: false, required: false
  public get ingressPrivateHostedZoneId() {
    return this.getStringAttribute('ingress_private_hosted_zone_id');
  }

  // internal_communication_private_hosted_zone_id - computed: true, optional: false, required: false
  public get internalCommunicationPrivateHostedZoneId() {
    return this.getStringAttribute('internal_communication_private_hosted_zone_id');
  }

  // route53_role_arn - computed: true, optional: false, required: false
  public get route53RoleArn() {
    return this.getStringAttribute('route53_role_arn');
  }

  // vpce_role_arn - computed: true, optional: false, required: false
  public get vpceRoleArn() {
    return this.getStringAttribute('vpce_role_arn');
  }
}
export interface DataRhcsClusterRosaHcpStsInstanceIamRoles {
}

export function dataRhcsClusterRosaHcpStsInstanceIamRolesToTerraform(struct?: DataRhcsClusterRosaHcpStsInstanceIamRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRhcsClusterRosaHcpStsInstanceIamRolesToHclTerraform(struct?: DataRhcsClusterRosaHcpStsInstanceIamRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRhcsClusterRosaHcpStsInstanceIamRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsClusterRosaHcpStsInstanceIamRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsClusterRosaHcpStsInstanceIamRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // worker_role_arn - computed: true, optional: false, required: false
  public get workerRoleArn() {
    return this.getStringAttribute('worker_role_arn');
  }
}
export interface DataRhcsClusterRosaHcpSts {
}

export function dataRhcsClusterRosaHcpStsToTerraform(struct?: DataRhcsClusterRosaHcpSts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRhcsClusterRosaHcpStsToHclTerraform(struct?: DataRhcsClusterRosaHcpSts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRhcsClusterRosaHcpStsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsClusterRosaHcpSts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsClusterRosaHcpSts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_iam_roles - computed: true, optional: false, required: false
  private _instanceIamRoles = new DataRhcsClusterRosaHcpStsInstanceIamRolesOutputReference(this, "instance_iam_roles");
  public get instanceIamRoles() {
    return this._instanceIamRoles;
  }

  // oidc_config_id - computed: true, optional: false, required: false
  public get oidcConfigId() {
    return this.getStringAttribute('oidc_config_id');
  }

  // oidc_endpoint_url - computed: true, optional: false, required: false
  public get oidcEndpointUrl() {
    return this.getStringAttribute('oidc_endpoint_url');
  }

  // operator_role_prefix - computed: true, optional: false, required: false
  public get operatorRolePrefix() {
    return this.getStringAttribute('operator_role_prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // support_role_arn - computed: true, optional: false, required: false
  public get supportRoleArn() {
    return this.getStringAttribute('support_role_arn');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_hcp rhcs_cluster_rosa_hcp}
*/
export class DataRhcsClusterRosaHcp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_cluster_rosa_hcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRhcsClusterRosaHcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRhcsClusterRosaHcp to import
  * @param importFromId The id of the existing DataRhcsClusterRosaHcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_hcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRhcsClusterRosaHcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_cluster_rosa_hcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/cluster_rosa_hcp rhcs_cluster_rosa_hcp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRhcsClusterRosaHcpConfig
  */
  public constructor(scope: Construct, id: string, config: DataRhcsClusterRosaHcpConfig) {
    super(scope, id, {
      terraformResourceType: 'rhcs_cluster_rosa_hcp',
      terraformGeneratorMetadata: {
        providerName: 'rhcs',
        providerVersion: '1.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainPrefix = config.domainPrefix;
    this._id = config.id;
    this._kmsKeyArn = config.kmsKeyArn;
    this._registryConfig.internalValue = config.registryConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_credentials - computed: true, optional: false, required: false
  private _adminCredentials = new DataRhcsClusterRosaHcpAdminCredentialsOutputReference(this, "admin_credentials");
  public get adminCredentials() {
    return this._adminCredentials;
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // aws_additional_allowed_principals - computed: true, optional: false, required: false
  public get awsAdditionalAllowedPrincipals() {
    return this.getListAttribute('aws_additional_allowed_principals');
  }

  // aws_additional_compute_security_group_ids - computed: true, optional: false, required: false
  public get awsAdditionalComputeSecurityGroupIds() {
    return this.getListAttribute('aws_additional_compute_security_group_ids');
  }

  // aws_billing_account_id - computed: true, optional: false, required: false
  public get awsBillingAccountId() {
    return this.getStringAttribute('aws_billing_account_id');
  }

  // aws_subnet_ids - computed: true, optional: false, required: false
  public get awsSubnetIds() {
    return this.getListAttribute('aws_subnet_ids');
  }

  // base_dns_domain - computed: true, optional: false, required: false
  public get baseDnsDomain() {
    return this.getStringAttribute('base_dns_domain');
  }

  // channel_group - computed: true, optional: false, required: false
  public get channelGroup() {
    return this.getStringAttribute('channel_group');
  }

  // cloud_region - computed: true, optional: false, required: false
  public get cloudRegion() {
    return this.getStringAttribute('cloud_region');
  }

  // compute_machine_type - computed: true, optional: false, required: false
  public get computeMachineType() {
    return this.getStringAttribute('compute_machine_type');
  }

  // console_url - computed: true, optional: false, required: false
  public get consoleUrl() {
    return this.getStringAttribute('console_url');
  }

  // create_admin_user - computed: true, optional: false, required: false
  public get createAdminUser() {
    return this.getBooleanAttribute('create_admin_user');
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // destroy_timeout - computed: true, optional: false, required: false
  public get destroyTimeout() {
    return this.getNumberAttribute('destroy_timeout');
  }

  // disable_waiting_in_destroy - computed: true, optional: false, required: false
  public get disableWaitingInDestroy() {
    return this.getBooleanAttribute('disable_waiting_in_destroy');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // domain_prefix - computed: true, optional: true, required: false
  private _domainPrefix?: string; 
  public get domainPrefix() {
    return this.getStringAttribute('domain_prefix');
  }
  public set domainPrefix(value: string) {
    this._domainPrefix = value;
  }
  public resetDomainPrefix() {
    this._domainPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainPrefixInput() {
    return this._domainPrefix;
  }

  // ec2_metadata_http_tokens - computed: true, optional: false, required: false
  public get ec2MetadataHttpTokens() {
    return this.getStringAttribute('ec2_metadata_http_tokens');
  }

  // etcd_encryption - computed: true, optional: false, required: false
  public get etcdEncryption() {
    return this.getBooleanAttribute('etcd_encryption');
  }

  // etcd_kms_key_arn - computed: true, optional: false, required: false
  public get etcdKmsKeyArn() {
    return this.getStringAttribute('etcd_kms_key_arn');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // host_prefix - computed: true, optional: false, required: false
  public get hostPrefix() {
    return this.getNumberAttribute('host_prefix');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // machine_cidr - computed: true, optional: false, required: false
  public get machineCidr() {
    return this.getStringAttribute('machine_cidr');
  }

  // max_hcp_cluster_wait_timeout_in_minutes - computed: true, optional: false, required: false
  public get maxHcpClusterWaitTimeoutInMinutes() {
    return this.getNumberAttribute('max_hcp_cluster_wait_timeout_in_minutes');
  }

  // max_machinepool_wait_timeout_in_minutes - computed: true, optional: false, required: false
  public get maxMachinepoolWaitTimeoutInMinutes() {
    return this.getNumberAttribute('max_machinepool_wait_timeout_in_minutes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ocm_properties - computed: true, optional: false, required: false
  private _ocmProperties = new cdktf.StringMap(this, "ocm_properties");
  public get ocmProperties() {
    return this._ocmProperties;
  }

  // pod_cidr - computed: true, optional: false, required: false
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }

  // private - computed: true, optional: false, required: false
  public get private() {
    return this.getBooleanAttribute('private');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }

  // proxy - computed: true, optional: false, required: false
  private _proxy = new DataRhcsClusterRosaHcpProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }

  // registry_config - computed: false, optional: true, required: false
  private _registryConfig = new DataRhcsClusterRosaHcpRegistryConfigOutputReference(this, "registry_config");
  public get registryConfig() {
    return this._registryConfig;
  }
  public putRegistryConfig(value: DataRhcsClusterRosaHcpRegistryConfig) {
    this._registryConfig.internalValue = value;
  }
  public resetRegistryConfig() {
    this._registryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryConfigInput() {
    return this._registryConfig.internalValue;
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }

  // service_cidr - computed: true, optional: false, required: false
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }

  // shared_vpc - computed: true, optional: false, required: false
  private _sharedVpc = new DataRhcsClusterRosaHcpSharedVpcOutputReference(this, "shared_vpc");
  public get sharedVpc() {
    return this._sharedVpc;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // sts - computed: true, optional: false, required: false
  private _sts = new DataRhcsClusterRosaHcpStsOutputReference(this, "sts");
  public get sts() {
    return this._sts;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // upgrade_acknowledgements_for - computed: true, optional: false, required: false
  public get upgradeAcknowledgementsFor() {
    return this.getStringAttribute('upgrade_acknowledgements_for');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // wait_for_create_complete - computed: true, optional: false, required: false
  public get waitForCreateComplete() {
    return this.getBooleanAttribute('wait_for_create_complete');
  }

  // wait_for_std_compute_nodes_complete - computed: true, optional: false, required: false
  public get waitForStdComputeNodesComplete() {
    return this.getBooleanAttribute('wait_for_std_compute_nodes_complete');
  }

  // worker_disk_size - computed: true, optional: false, required: false
  public get workerDiskSize() {
    return this.getNumberAttribute('worker_disk_size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_prefix: cdktf.stringToTerraform(this._domainPrefix),
      id: cdktf.stringToTerraform(this._id),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      registry_config: dataRhcsClusterRosaHcpRegistryConfigToTerraform(this._registryConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_prefix: {
        value: cdktf.stringToHclTerraform(this._domainPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_arn: {
        value: cdktf.stringToHclTerraform(this._kmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_config: {
        value: dataRhcsClusterRosaHcpRegistryConfigToHclTerraform(this._registryConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataRhcsClusterRosaHcpRegistryConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
