// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryMavenHostedConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique identifier for this repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted#name RepositoryMavenHosted#name}
  */
  readonly name: string;
  /**
  * Whether this repository accepts incoming requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted#online RepositoryMavenHosted#online}
  */
  readonly online?: boolean | cdktf.IResolvable;
  /**
  * cleanup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted#cleanup RepositoryMavenHosted#cleanup}
  */
  readonly cleanup?: RepositoryMavenHostedCleanup[] | cdktf.IResolvable;
  /**
  * component block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted#component RepositoryMavenHosted#component}
  */
  readonly component?: RepositoryMavenHostedComponent;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted#maven RepositoryMavenHosted#maven}
  */
  readonly maven: RepositoryMavenHostedMaven;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted#storage RepositoryMavenHosted#storage}
  */
  readonly storage: RepositoryMavenHostedStorage;
}
export interface RepositoryMavenHostedCleanup {
  /**
  * List of policy names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted#policy_names RepositoryMavenHosted#policy_names}
  */
  readonly policyNames?: string[];
}

export function repositoryMavenHostedCleanupToTerraform(struct?: RepositoryMavenHostedCleanup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyNames),
  }
}


export function repositoryMavenHostedCleanupToHclTerraform(struct?: RepositoryMavenHostedCleanup | cdktf.IResolvable): any {
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

export class RepositoryMavenHostedCleanupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RepositoryMavenHostedCleanup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RepositoryMavenHostedCleanup | cdktf.IResolvable | undefined) {
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

export class RepositoryMavenHostedCleanupList extends cdktf.ComplexList {
  public internalValue? : RepositoryMavenHostedCleanup[] | cdktf.IResolvable

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
  public get(index: number): RepositoryMavenHostedCleanupOutputReference {
    return new RepositoryMavenHostedCleanupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RepositoryMavenHostedComponent {
  /**
  * Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted#proprietary_components RepositoryMavenHosted#proprietary_components}
  */
  readonly proprietaryComponents: boolean | cdktf.IResolvable;
}

export function repositoryMavenHostedComponentToTerraform(struct?: RepositoryMavenHostedComponentOutputReference | RepositoryMavenHostedComponent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proprietary_components: cdktf.booleanToTerraform(struct!.proprietaryComponents),
  }
}


export function repositoryMavenHostedComponentToHclTerraform(struct?: RepositoryMavenHostedComponentOutputReference | RepositoryMavenHostedComponent): any {
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

export class RepositoryMavenHostedComponentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryMavenHostedComponent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proprietaryComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.proprietaryComponents = this._proprietaryComponents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryMavenHostedComponent | undefined) {
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
export interface RepositoryMavenHostedMaven {
  /**
  * Add Content-Disposition header as 'Attachment' to disable some content from being inline in a browse. Possible Value: `INLINE` or `ATTACHMENT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted#content_disposition RepositoryMavenHosted#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Validate that all paths are maven artifact or metadata paths. Possible Value: `STRICT` or `PERMISSIVE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted#layout_policy RepositoryMavenHosted#layout_policy}
  */
  readonly layoutPolicy: string;
  /**
  * What type of artifacts does this repository store? Possible Value: `RELEASE`, `SNAPSHOT` or `MIXED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted#version_policy RepositoryMavenHosted#version_policy}
  */
  readonly versionPolicy: string;
}

export function repositoryMavenHostedMavenToTerraform(struct?: RepositoryMavenHostedMavenOutputReference | RepositoryMavenHostedMaven): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_disposition: cdktf.stringToTerraform(struct!.contentDisposition),
    layout_policy: cdktf.stringToTerraform(struct!.layoutPolicy),
    version_policy: cdktf.stringToTerraform(struct!.versionPolicy),
  }
}


export function repositoryMavenHostedMavenToHclTerraform(struct?: RepositoryMavenHostedMavenOutputReference | RepositoryMavenHostedMaven): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_disposition: {
      value: cdktf.stringToHclTerraform(struct!.contentDisposition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    layout_policy: {
      value: cdktf.stringToHclTerraform(struct!.layoutPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_policy: {
      value: cdktf.stringToHclTerraform(struct!.versionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryMavenHostedMavenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryMavenHostedMaven | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDisposition !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDisposition = this._contentDisposition;
    }
    if (this._layoutPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.layoutPolicy = this._layoutPolicy;
    }
    if (this._versionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionPolicy = this._versionPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryMavenHostedMaven | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentDisposition = undefined;
      this._layoutPolicy = undefined;
      this._versionPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentDisposition = value.contentDisposition;
      this._layoutPolicy = value.layoutPolicy;
      this._versionPolicy = value.versionPolicy;
    }
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string; 
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition;
  }

  // layout_policy - computed: false, optional: false, required: true
  private _layoutPolicy?: string; 
  public get layoutPolicy() {
    return this.getStringAttribute('layout_policy');
  }
  public set layoutPolicy(value: string) {
    this._layoutPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutPolicyInput() {
    return this._layoutPolicy;
  }

  // version_policy - computed: false, optional: false, required: true
  private _versionPolicy?: string; 
  public get versionPolicy() {
    return this.getStringAttribute('version_policy');
  }
  public set versionPolicy(value: string) {
    this._versionPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionPolicyInput() {
    return this._versionPolicy;
  }
}
export interface RepositoryMavenHostedStorage {
  /**
  * Blob store used to store repository contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted#blob_store_name RepositoryMavenHosted#blob_store_name}
  */
  readonly blobStoreName: string;
  /**
  * Whether to validate uploaded content's MIME type appropriate for the repository format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted#strict_content_type_validation RepositoryMavenHosted#strict_content_type_validation}
  */
  readonly strictContentTypeValidation: boolean | cdktf.IResolvable;
  /**
  * Controls if deployments of and updates to assets are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted#write_policy RepositoryMavenHosted#write_policy}
  */
  readonly writePolicy?: string;
}

export function repositoryMavenHostedStorageToTerraform(struct?: RepositoryMavenHostedStorageOutputReference | RepositoryMavenHostedStorage): any {
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


export function repositoryMavenHostedStorageToHclTerraform(struct?: RepositoryMavenHostedStorageOutputReference | RepositoryMavenHostedStorage): any {
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

export class RepositoryMavenHostedStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryMavenHostedStorage | undefined {
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

  public set internalValue(value: RepositoryMavenHostedStorage | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted nexus_repository_maven_hosted}
*/
export class RepositoryMavenHosted extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_repository_maven_hosted";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryMavenHosted resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryMavenHosted to import
  * @param importFromId The id of the existing RepositoryMavenHosted that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryMavenHosted to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_repository_maven_hosted", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_maven_hosted nexus_repository_maven_hosted} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryMavenHostedConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryMavenHostedConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_repository_maven_hosted',
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
    this._maven.internalValue = config.maven;
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
  private _cleanup = new RepositoryMavenHostedCleanupList(this, "cleanup", false);
  public get cleanup() {
    return this._cleanup;
  }
  public putCleanup(value: RepositoryMavenHostedCleanup[] | cdktf.IResolvable) {
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
  private _component = new RepositoryMavenHostedComponentOutputReference(this, "component");
  public get component() {
    return this._component;
  }
  public putComponent(value: RepositoryMavenHostedComponent) {
    this._component.internalValue = value;
  }
  public resetComponent() {
    this._component.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component.internalValue;
  }

  // maven - computed: false, optional: false, required: true
  private _maven = new RepositoryMavenHostedMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: RepositoryMavenHostedMaven) {
    this._maven.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenInput() {
    return this._maven.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new RepositoryMavenHostedStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: RepositoryMavenHostedStorage) {
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
      cleanup: cdktf.listMapper(repositoryMavenHostedCleanupToTerraform, true)(this._cleanup.internalValue),
      component: repositoryMavenHostedComponentToTerraform(this._component.internalValue),
      maven: repositoryMavenHostedMavenToTerraform(this._maven.internalValue),
      storage: repositoryMavenHostedStorageToTerraform(this._storage.internalValue),
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
        value: cdktf.listMapperHcl(repositoryMavenHostedCleanupToHclTerraform, true)(this._cleanup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryMavenHostedCleanupList",
      },
      component: {
        value: repositoryMavenHostedComponentToHclTerraform(this._component.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryMavenHostedComponentList",
      },
      maven: {
        value: repositoryMavenHostedMavenToHclTerraform(this._maven.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryMavenHostedMavenList",
      },
      storage: {
        value: repositoryMavenHostedStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryMavenHostedStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
