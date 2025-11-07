// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryDockerHostedConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique identifier for this repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#name RepositoryDockerHosted#name}
  */
  readonly name: string;
  /**
  * Whether this repository accepts incoming requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#online RepositoryDockerHosted#online}
  */
  readonly online?: boolean | cdktf.IResolvable;
  /**
  * cleanup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#cleanup RepositoryDockerHosted#cleanup}
  */
  readonly cleanup?: RepositoryDockerHostedCleanup[] | cdktf.IResolvable;
  /**
  * component block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#component RepositoryDockerHosted#component}
  */
  readonly component?: RepositoryDockerHostedComponent;
  /**
  * docker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#docker RepositoryDockerHosted#docker}
  */
  readonly docker: RepositoryDockerHostedDocker;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#storage RepositoryDockerHosted#storage}
  */
  readonly storage: RepositoryDockerHostedStorage;
}
export interface RepositoryDockerHostedCleanup {
  /**
  * List of policy names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#policy_names RepositoryDockerHosted#policy_names}
  */
  readonly policyNames?: string[];
}

export function repositoryDockerHostedCleanupToTerraform(struct?: RepositoryDockerHostedCleanup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyNames),
  }
}


export function repositoryDockerHostedCleanupToHclTerraform(struct?: RepositoryDockerHostedCleanup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryDockerHostedCleanupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RepositoryDockerHostedCleanup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyNames = this._policyNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryDockerHostedCleanup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyNames = value.policyNames;
    }
  }

  // policy_names - computed: false, optional: true, required: false
  private _policyNames?: string[]; 
  public get policyNames() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_names'));
  }
  public set policyNames(value: string[]) {
    this._policyNames = value;
  }
  public resetPolicyNames() {
    this._policyNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNamesInput() {
    return this._policyNames;
  }
}

export class RepositoryDockerHostedCleanupList extends cdktf.ComplexList {
  public internalValue? : RepositoryDockerHostedCleanup[] | cdktf.IResolvable

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
  public get(index: number): RepositoryDockerHostedCleanupOutputReference {
    return new RepositoryDockerHostedCleanupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RepositoryDockerHostedComponent {
  /**
  * Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#proprietary_components RepositoryDockerHosted#proprietary_components}
  */
  readonly proprietaryComponents: boolean | cdktf.IResolvable;
}

export function repositoryDockerHostedComponentToTerraform(struct?: RepositoryDockerHostedComponentOutputReference | RepositoryDockerHostedComponent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proprietary_components: cdktf.booleanToTerraform(struct!.proprietaryComponents),
  }
}


export function repositoryDockerHostedComponentToHclTerraform(struct?: RepositoryDockerHostedComponentOutputReference | RepositoryDockerHostedComponent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proprietary_components: {
      value: cdktf.booleanToHclTerraform(struct!.proprietaryComponents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryDockerHostedComponentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryDockerHostedComponent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proprietaryComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.proprietaryComponents = this._proprietaryComponents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryDockerHostedComponent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._proprietaryComponents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._proprietaryComponents = value.proprietaryComponents;
    }
  }

  // proprietary_components - computed: false, optional: false, required: true
  private _proprietaryComponents?: boolean | cdktf.IResolvable; 
  public get proprietaryComponents() {
    return this.getBooleanAttribute('proprietary_components');
  }
  public set proprietaryComponents(value: boolean | cdktf.IResolvable) {
    this._proprietaryComponents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proprietaryComponentsInput() {
    return this._proprietaryComponents;
  }
}
export interface RepositoryDockerHostedDocker {
  /**
  * Whether to force authentication (Docker Bearer Token Realm required if false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#force_basic_auth RepositoryDockerHosted#force_basic_auth}
  */
  readonly forceBasicAuth: boolean | cdktf.IResolvable;
  /**
  * Create an HTTP connector at specified port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#http_port RepositoryDockerHosted#http_port}
  */
  readonly httpPort?: number;
  /**
  * Create an HTTPS connector at specified port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#https_port RepositoryDockerHosted#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Pro-only: Whether to allow clients to use subdomain routing connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#subdomain RepositoryDockerHosted#subdomain}
  */
  readonly subdomain?: string;
  /**
  * Whether to allow clients to use the V1 API to interact with this repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#v1_enabled RepositoryDockerHosted#v1_enabled}
  */
  readonly v1Enabled: boolean | cdktf.IResolvable;
}

export function repositoryDockerHostedDockerToTerraform(struct?: RepositoryDockerHostedDockerOutputReference | RepositoryDockerHostedDocker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_basic_auth: cdktf.booleanToTerraform(struct!.forceBasicAuth),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    subdomain: cdktf.stringToTerraform(struct!.subdomain),
    v1_enabled: cdktf.booleanToTerraform(struct!.v1Enabled),
  }
}


export function repositoryDockerHostedDockerToHclTerraform(struct?: RepositoryDockerHostedDockerOutputReference | RepositoryDockerHostedDocker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_basic_auth: {
      value: cdktf.booleanToHclTerraform(struct!.forceBasicAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subdomain: {
      value: cdktf.stringToHclTerraform(struct!.subdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v1_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.v1Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryDockerHostedDockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryDockerHostedDocker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceBasicAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceBasicAuth = this._forceBasicAuth;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._subdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdomain = this._subdomain;
    }
    if (this._v1Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1Enabled = this._v1Enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryDockerHostedDocker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forceBasicAuth = undefined;
      this._httpPort = undefined;
      this._httpsPort = undefined;
      this._subdomain = undefined;
      this._v1Enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forceBasicAuth = value.forceBasicAuth;
      this._httpPort = value.httpPort;
      this._httpsPort = value.httpsPort;
      this._subdomain = value.subdomain;
      this._v1Enabled = value.v1Enabled;
    }
  }

  // force_basic_auth - computed: false, optional: false, required: true
  private _forceBasicAuth?: boolean | cdktf.IResolvable; 
  public get forceBasicAuth() {
    return this.getBooleanAttribute('force_basic_auth');
  }
  public set forceBasicAuth(value: boolean | cdktf.IResolvable) {
    this._forceBasicAuth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forceBasicAuthInput() {
    return this._forceBasicAuth;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: false, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // subdomain - computed: false, optional: true, required: false
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  public resetSubdomain() {
    this._subdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
  }

  // v1_enabled - computed: false, optional: false, required: true
  private _v1Enabled?: boolean | cdktf.IResolvable; 
  public get v1Enabled() {
    return this.getBooleanAttribute('v1_enabled');
  }
  public set v1Enabled(value: boolean | cdktf.IResolvable) {
    this._v1Enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get v1EnabledInput() {
    return this._v1Enabled;
  }
}
export interface RepositoryDockerHostedStorage {
  /**
  * Blob store used to store repository contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#blob_store_name RepositoryDockerHosted#blob_store_name}
  */
  readonly blobStoreName: string;
  /**
  * Whether to allow redeploying the 'latest' tag but defer to the Deployment Policy for all other tags. Only usable with write_policy "ALLOW_ONCE"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#latest_policy RepositoryDockerHosted#latest_policy}
  */
  readonly latestPolicy?: boolean | cdktf.IResolvable;
  /**
  * Whether to validate uploaded content's MIME type appropriate for the repository format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#strict_content_type_validation RepositoryDockerHosted#strict_content_type_validation}
  */
  readonly strictContentTypeValidation: boolean | cdktf.IResolvable;
  /**
  * Controls if deployments of and updates to assets are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#write_policy RepositoryDockerHosted#write_policy}
  */
  readonly writePolicy?: string;
}

export function repositoryDockerHostedStorageToTerraform(struct?: RepositoryDockerHostedStorageOutputReference | RepositoryDockerHostedStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_store_name: cdktf.stringToTerraform(struct!.blobStoreName),
    latest_policy: cdktf.booleanToTerraform(struct!.latestPolicy),
    strict_content_type_validation: cdktf.booleanToTerraform(struct!.strictContentTypeValidation),
    write_policy: cdktf.stringToTerraform(struct!.writePolicy),
  }
}


export function repositoryDockerHostedStorageToHclTerraform(struct?: RepositoryDockerHostedStorageOutputReference | RepositoryDockerHostedStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blob_store_name: {
      value: cdktf.stringToHclTerraform(struct!.blobStoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest_policy: {
      value: cdktf.booleanToHclTerraform(struct!.latestPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strict_content_type_validation: {
      value: cdktf.booleanToHclTerraform(struct!.strictContentTypeValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write_policy: {
      value: cdktf.stringToHclTerraform(struct!.writePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryDockerHostedStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryDockerHostedStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blobStoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobStoreName = this._blobStoreName;
    }
    if (this._latestPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.latestPolicy = this._latestPolicy;
    }
    if (this._strictContentTypeValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictContentTypeValidation = this._strictContentTypeValidation;
    }
    if (this._writePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.writePolicy = this._writePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryDockerHostedStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blobStoreName = undefined;
      this._latestPolicy = undefined;
      this._strictContentTypeValidation = undefined;
      this._writePolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blobStoreName = value.blobStoreName;
      this._latestPolicy = value.latestPolicy;
      this._strictContentTypeValidation = value.strictContentTypeValidation;
      this._writePolicy = value.writePolicy;
    }
  }

  // blob_store_name - computed: false, optional: false, required: true
  private _blobStoreName?: string; 
  public get blobStoreName() {
    return this.getStringAttribute('blob_store_name');
  }
  public set blobStoreName(value: string) {
    this._blobStoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blobStoreNameInput() {
    return this._blobStoreName;
  }

  // latest_policy - computed: false, optional: true, required: false
  private _latestPolicy?: boolean | cdktf.IResolvable; 
  public get latestPolicy() {
    return this.getBooleanAttribute('latest_policy');
  }
  public set latestPolicy(value: boolean | cdktf.IResolvable) {
    this._latestPolicy = value;
  }
  public resetLatestPolicy() {
    this._latestPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestPolicyInput() {
    return this._latestPolicy;
  }

  // strict_content_type_validation - computed: false, optional: false, required: true
  private _strictContentTypeValidation?: boolean | cdktf.IResolvable; 
  public get strictContentTypeValidation() {
    return this.getBooleanAttribute('strict_content_type_validation');
  }
  public set strictContentTypeValidation(value: boolean | cdktf.IResolvable) {
    this._strictContentTypeValidation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strictContentTypeValidationInput() {
    return this._strictContentTypeValidation;
  }

  // write_policy - computed: false, optional: true, required: false
  private _writePolicy?: string; 
  public get writePolicy() {
    return this.getStringAttribute('write_policy');
  }
  public set writePolicy(value: string) {
    this._writePolicy = value;
  }
  public resetWritePolicy() {
    this._writePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writePolicyInput() {
    return this._writePolicy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted nexus_repository_docker_hosted}
*/
export class RepositoryDockerHosted extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_repository_docker_hosted";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryDockerHosted resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryDockerHosted to import
  * @param importFromId The id of the existing RepositoryDockerHosted that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryDockerHosted to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_repository_docker_hosted", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_docker_hosted nexus_repository_docker_hosted} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryDockerHostedConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryDockerHostedConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_repository_docker_hosted',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._online = config.online;
    this._cleanup.internalValue = config.cleanup;
    this._component.internalValue = config.component;
    this._docker.internalValue = config.docker;
    this._storage.internalValue = config.storage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // online - computed: false, optional: true, required: false
  private _online?: boolean | cdktf.IResolvable; 
  public get online() {
    return this.getBooleanAttribute('online');
  }
  public set online(value: boolean | cdktf.IResolvable) {
    this._online = value;
  }
  public resetOnline() {
    this._online = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineInput() {
    return this._online;
  }

  // cleanup - computed: false, optional: true, required: false
  private _cleanup = new RepositoryDockerHostedCleanupList(this, "cleanup", false);
  public get cleanup() {
    return this._cleanup;
  }
  public putCleanup(value: RepositoryDockerHostedCleanup[] | cdktf.IResolvable) {
    this._cleanup.internalValue = value;
  }
  public resetCleanup() {
    this._cleanup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupInput() {
    return this._cleanup.internalValue;
  }

  // component - computed: false, optional: true, required: false
  private _component = new RepositoryDockerHostedComponentOutputReference(this, "component");
  public get component() {
    return this._component;
  }
  public putComponent(value: RepositoryDockerHostedComponent) {
    this._component.internalValue = value;
  }
  public resetComponent() {
    this._component.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component.internalValue;
  }

  // docker - computed: false, optional: false, required: true
  private _docker = new RepositoryDockerHostedDockerOutputReference(this, "docker");
  public get docker() {
    return this._docker;
  }
  public putDocker(value: RepositoryDockerHostedDocker) {
    this._docker.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerInput() {
    return this._docker.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new RepositoryDockerHostedStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: RepositoryDockerHostedStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      online: cdktf.booleanToTerraform(this._online),
      cleanup: cdktf.listMapper(repositoryDockerHostedCleanupToTerraform, true)(this._cleanup.internalValue),
      component: repositoryDockerHostedComponentToTerraform(this._component.internalValue),
      docker: repositoryDockerHostedDockerToTerraform(this._docker.internalValue),
      storage: repositoryDockerHostedStorageToTerraform(this._storage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      online: {
        value: cdktf.booleanToHclTerraform(this._online),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cleanup: {
        value: cdktf.listMapperHcl(repositoryDockerHostedCleanupToHclTerraform, true)(this._cleanup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryDockerHostedCleanupList",
      },
      component: {
        value: repositoryDockerHostedComponentToHclTerraform(this._component.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryDockerHostedComponentList",
      },
      docker: {
        value: repositoryDockerHostedDockerToHclTerraform(this._docker.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryDockerHostedDockerList",
      },
      storage: {
        value: repositoryDockerHostedStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryDockerHostedStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
