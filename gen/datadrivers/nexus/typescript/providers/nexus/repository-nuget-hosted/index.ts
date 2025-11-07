// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_nuget_hosted
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryNugetHostedConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique identifier for this repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_nuget_hosted#name RepositoryNugetHosted#name}
  */
  readonly name: string;
  /**
  * Whether this repository accepts incoming requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_nuget_hosted#online RepositoryNugetHosted#online}
  */
  readonly online?: boolean | cdktf.IResolvable;
  /**
  * cleanup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_nuget_hosted#cleanup RepositoryNugetHosted#cleanup}
  */
  readonly cleanup?: RepositoryNugetHostedCleanup[] | cdktf.IResolvable;
  /**
  * component block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_nuget_hosted#component RepositoryNugetHosted#component}
  */
  readonly component?: RepositoryNugetHostedComponent;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_nuget_hosted#storage RepositoryNugetHosted#storage}
  */
  readonly storage: RepositoryNugetHostedStorage;
}
export interface RepositoryNugetHostedCleanup {
  /**
  * List of policy names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_nuget_hosted#policy_names RepositoryNugetHosted#policy_names}
  */
  readonly policyNames?: string[];
}

export function repositoryNugetHostedCleanupToTerraform(struct?: RepositoryNugetHostedCleanup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyNames),
  }
}


export function repositoryNugetHostedCleanupToHclTerraform(struct?: RepositoryNugetHostedCleanup | cdktf.IResolvable): any {
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

export class RepositoryNugetHostedCleanupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RepositoryNugetHostedCleanup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RepositoryNugetHostedCleanup | cdktf.IResolvable | undefined) {
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

export class RepositoryNugetHostedCleanupList extends cdktf.ComplexList {
  public internalValue? : RepositoryNugetHostedCleanup[] | cdktf.IResolvable

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
  public get(index: number): RepositoryNugetHostedCleanupOutputReference {
    return new RepositoryNugetHostedCleanupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RepositoryNugetHostedComponent {
  /**
  * Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_nuget_hosted#proprietary_components RepositoryNugetHosted#proprietary_components}
  */
  readonly proprietaryComponents: boolean | cdktf.IResolvable;
}

export function repositoryNugetHostedComponentToTerraform(struct?: RepositoryNugetHostedComponentOutputReference | RepositoryNugetHostedComponent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proprietary_components: cdktf.booleanToTerraform(struct!.proprietaryComponents),
  }
}


export function repositoryNugetHostedComponentToHclTerraform(struct?: RepositoryNugetHostedComponentOutputReference | RepositoryNugetHostedComponent): any {
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

export class RepositoryNugetHostedComponentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryNugetHostedComponent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proprietaryComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.proprietaryComponents = this._proprietaryComponents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryNugetHostedComponent | undefined) {
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
export interface RepositoryNugetHostedStorage {
  /**
  * Blob store used to store repository contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_nuget_hosted#blob_store_name RepositoryNugetHosted#blob_store_name}
  */
  readonly blobStoreName: string;
  /**
  * Whether to validate uploaded content's MIME type appropriate for the repository format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_nuget_hosted#strict_content_type_validation RepositoryNugetHosted#strict_content_type_validation}
  */
  readonly strictContentTypeValidation: boolean | cdktf.IResolvable;
  /**
  * Controls if deployments of and updates to assets are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_nuget_hosted#write_policy RepositoryNugetHosted#write_policy}
  */
  readonly writePolicy?: string;
}

export function repositoryNugetHostedStorageToTerraform(struct?: RepositoryNugetHostedStorageOutputReference | RepositoryNugetHostedStorage): any {
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


export function repositoryNugetHostedStorageToHclTerraform(struct?: RepositoryNugetHostedStorageOutputReference | RepositoryNugetHostedStorage): any {
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

export class RepositoryNugetHostedStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryNugetHostedStorage | undefined {
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

  public set internalValue(value: RepositoryNugetHostedStorage | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_nuget_hosted nexus_repository_nuget_hosted}
*/
export class RepositoryNugetHosted extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_repository_nuget_hosted";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryNugetHosted resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryNugetHosted to import
  * @param importFromId The id of the existing RepositoryNugetHosted that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_nuget_hosted#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryNugetHosted to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_repository_nuget_hosted", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_nuget_hosted nexus_repository_nuget_hosted} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryNugetHostedConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryNugetHostedConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_repository_nuget_hosted',
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
  private _cleanup = new RepositoryNugetHostedCleanupList(this, "cleanup", false);
  public get cleanup() {
    return this._cleanup;
  }
  public putCleanup(value: RepositoryNugetHostedCleanup[] | cdktf.IResolvable) {
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
  private _component = new RepositoryNugetHostedComponentOutputReference(this, "component");
  public get component() {
    return this._component;
  }
  public putComponent(value: RepositoryNugetHostedComponent) {
    this._component.internalValue = value;
  }
  public resetComponent() {
    this._component.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new RepositoryNugetHostedStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: RepositoryNugetHostedStorage) {
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
      cleanup: cdktf.listMapper(repositoryNugetHostedCleanupToTerraform, true)(this._cleanup.internalValue),
      component: repositoryNugetHostedComponentToTerraform(this._component.internalValue),
      storage: repositoryNugetHostedStorageToTerraform(this._storage.internalValue),
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
        value: cdktf.listMapperHcl(repositoryNugetHostedCleanupToHclTerraform, true)(this._cleanup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryNugetHostedCleanupList",
      },
      component: {
        value: repositoryNugetHostedComponentToHclTerraform(this._component.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryNugetHostedComponentList",
      },
      storage: {
        value: repositoryNugetHostedStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryNugetHostedStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
