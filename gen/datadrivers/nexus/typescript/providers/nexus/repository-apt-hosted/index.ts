// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryAptHostedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Distribution to fetch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted#distribution RepositoryAptHosted#distribution}
  */
  readonly distribution: string;
  /**
  * A unique identifier for this repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted#name RepositoryAptHosted#name}
  */
  readonly name: string;
  /**
  * Whether this repository accepts incoming requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted#online RepositoryAptHosted#online}
  */
  readonly online?: boolean | cdktf.IResolvable;
  /**
  * cleanup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted#cleanup RepositoryAptHosted#cleanup}
  */
  readonly cleanup?: RepositoryAptHostedCleanup[] | cdktf.IResolvable;
  /**
  * component block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted#component RepositoryAptHosted#component}
  */
  readonly component?: RepositoryAptHostedComponent;
  /**
  * signing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted#signing RepositoryAptHosted#signing}
  */
  readonly signing: RepositoryAptHostedSigning;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted#storage RepositoryAptHosted#storage}
  */
  readonly storage: RepositoryAptHostedStorage;
}
export interface RepositoryAptHostedCleanup {
  /**
  * List of policy names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted#policy_names RepositoryAptHosted#policy_names}
  */
  readonly policyNames?: string[];
}

export function repositoryAptHostedCleanupToTerraform(struct?: RepositoryAptHostedCleanup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyNames),
  }
}


export function repositoryAptHostedCleanupToHclTerraform(struct?: RepositoryAptHostedCleanup | cdktf.IResolvable): any {
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

export class RepositoryAptHostedCleanupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RepositoryAptHostedCleanup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RepositoryAptHostedCleanup | cdktf.IResolvable | undefined) {
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

export class RepositoryAptHostedCleanupList extends cdktf.ComplexList {
  public internalValue? : RepositoryAptHostedCleanup[] | cdktf.IResolvable

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
  public get(index: number): RepositoryAptHostedCleanupOutputReference {
    return new RepositoryAptHostedCleanupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RepositoryAptHostedComponent {
  /**
  * Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted#proprietary_components RepositoryAptHosted#proprietary_components}
  */
  readonly proprietaryComponents: boolean | cdktf.IResolvable;
}

export function repositoryAptHostedComponentToTerraform(struct?: RepositoryAptHostedComponentOutputReference | RepositoryAptHostedComponent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proprietary_components: cdktf.booleanToTerraform(struct!.proprietaryComponents),
  }
}


export function repositoryAptHostedComponentToHclTerraform(struct?: RepositoryAptHostedComponentOutputReference | RepositoryAptHostedComponent): any {
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

export class RepositoryAptHostedComponentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryAptHostedComponent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proprietaryComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.proprietaryComponents = this._proprietaryComponents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryAptHostedComponent | undefined) {
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
export interface RepositoryAptHostedSigning {
  /**
  * PGP signing key pair (armored private key e.g. gpg --export-secret-key --armor)
  * 							If passphrase is unset, the keypair cannot be read from the nexus api.
  * 							When reading the resource, the keypair will be read from the previous state,
  * 							so external changes won't be detected in this case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted#keypair RepositoryAptHosted#keypair}
  */
  readonly keypair: string;
  /**
  * Passphrase to access PGP signing key.
  * 							This value cannot be read from the nexus api.
  * 							When reading the resource, the value will be read from the previous state,
  * 							so external changes won't be detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted#passphrase RepositoryAptHosted#passphrase}
  */
  readonly passphrase?: string;
}

export function repositoryAptHostedSigningToTerraform(struct?: RepositoryAptHostedSigningOutputReference | RepositoryAptHostedSigning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair: cdktf.stringToTerraform(struct!.keypair),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
  }
}


export function repositoryAptHostedSigningToHclTerraform(struct?: RepositoryAptHostedSigningOutputReference | RepositoryAptHostedSigning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair: {
      value: cdktf.stringToHclTerraform(struct!.keypair),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryAptHostedSigningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryAptHostedSigning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypair !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypair = this._keypair;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryAptHostedSigning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypair = undefined;
      this._passphrase = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypair = value.keypair;
      this._passphrase = value.passphrase;
    }
  }

  // keypair - computed: false, optional: false, required: true
  private _keypair?: string; 
  public get keypair() {
    return this.getStringAttribute('keypair');
  }
  public set keypair(value: string) {
    this._keypair = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairInput() {
    return this._keypair;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }
}
export interface RepositoryAptHostedStorage {
  /**
  * Blob store used to store repository contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted#blob_store_name RepositoryAptHosted#blob_store_name}
  */
  readonly blobStoreName: string;
  /**
  * Whether to validate uploaded content's MIME type appropriate for the repository format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted#strict_content_type_validation RepositoryAptHosted#strict_content_type_validation}
  */
  readonly strictContentTypeValidation: boolean | cdktf.IResolvable;
  /**
  * Controls if deployments of and updates to assets are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted#write_policy RepositoryAptHosted#write_policy}
  */
  readonly writePolicy?: string;
}

export function repositoryAptHostedStorageToTerraform(struct?: RepositoryAptHostedStorageOutputReference | RepositoryAptHostedStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_store_name: cdktf.stringToTerraform(struct!.blobStoreName),
    strict_content_type_validation: cdktf.booleanToTerraform(struct!.strictContentTypeValidation),
    write_policy: cdktf.stringToTerraform(struct!.writePolicy),
  }
}


export function repositoryAptHostedStorageToHclTerraform(struct?: RepositoryAptHostedStorageOutputReference | RepositoryAptHostedStorage): any {
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

export class RepositoryAptHostedStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryAptHostedStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blobStoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobStoreName = this._blobStoreName;
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

  public set internalValue(value: RepositoryAptHostedStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blobStoreName = undefined;
      this._strictContentTypeValidation = undefined;
      this._writePolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blobStoreName = value.blobStoreName;
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
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted nexus_repository_apt_hosted}
*/
export class RepositoryAptHosted extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_repository_apt_hosted";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryAptHosted resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryAptHosted to import
  * @param importFromId The id of the existing RepositoryAptHosted that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryAptHosted to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_repository_apt_hosted", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_apt_hosted nexus_repository_apt_hosted} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryAptHostedConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryAptHostedConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_repository_apt_hosted',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._distribution = config.distribution;
    this._name = config.name;
    this._online = config.online;
    this._cleanup.internalValue = config.cleanup;
    this._component.internalValue = config.component;
    this._signing.internalValue = config.signing;
    this._storage.internalValue = config.storage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // distribution - computed: false, optional: false, required: true
  private _distribution?: string; 
  public get distribution() {
    return this.getStringAttribute('distribution');
  }
  public set distribution(value: string) {
    this._distribution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution;
  }

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
  private _cleanup = new RepositoryAptHostedCleanupList(this, "cleanup", false);
  public get cleanup() {
    return this._cleanup;
  }
  public putCleanup(value: RepositoryAptHostedCleanup[] | cdktf.IResolvable) {
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
  private _component = new RepositoryAptHostedComponentOutputReference(this, "component");
  public get component() {
    return this._component;
  }
  public putComponent(value: RepositoryAptHostedComponent) {
    this._component.internalValue = value;
  }
  public resetComponent() {
    this._component.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component.internalValue;
  }

  // signing - computed: false, optional: false, required: true
  private _signing = new RepositoryAptHostedSigningOutputReference(this, "signing");
  public get signing() {
    return this._signing;
  }
  public putSigning(value: RepositoryAptHostedSigning) {
    this._signing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingInput() {
    return this._signing.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new RepositoryAptHostedStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: RepositoryAptHostedStorage) {
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
      distribution: cdktf.stringToTerraform(this._distribution),
      name: cdktf.stringToTerraform(this._name),
      online: cdktf.booleanToTerraform(this._online),
      cleanup: cdktf.listMapper(repositoryAptHostedCleanupToTerraform, true)(this._cleanup.internalValue),
      component: repositoryAptHostedComponentToTerraform(this._component.internalValue),
      signing: repositoryAptHostedSigningToTerraform(this._signing.internalValue),
      storage: repositoryAptHostedStorageToTerraform(this._storage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      distribution: {
        value: cdktf.stringToHclTerraform(this._distribution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
        value: cdktf.listMapperHcl(repositoryAptHostedCleanupToHclTerraform, true)(this._cleanup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryAptHostedCleanupList",
      },
      component: {
        value: repositoryAptHostedComponentToHclTerraform(this._component.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryAptHostedComponentList",
      },
      signing: {
        value: repositoryAptHostedSigningToHclTerraform(this._signing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryAptHostedSigningList",
      },
      storage: {
        value: repositoryAptHostedStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryAptHostedStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
