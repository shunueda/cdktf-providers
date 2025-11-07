// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/repository_rubygems_hosted
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNexusRepositoryRubygemsHostedConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique identifier for this repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/repository_rubygems_hosted#name DataNexusRepositoryRubygemsHosted#name}
  */
  readonly name: string;
}
export interface DataNexusRepositoryRubygemsHostedCleanup {
}

export function dataNexusRepositoryRubygemsHostedCleanupToTerraform(struct?: DataNexusRepositoryRubygemsHostedCleanup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNexusRepositoryRubygemsHostedCleanupToHclTerraform(struct?: DataNexusRepositoryRubygemsHostedCleanup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNexusRepositoryRubygemsHostedCleanupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNexusRepositoryRubygemsHostedCleanup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNexusRepositoryRubygemsHostedCleanup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_names - computed: true, optional: false, required: false
  public get policyNames() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_names'));
  }
}

export class DataNexusRepositoryRubygemsHostedCleanupList extends cdktf.ComplexList {

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
  public get(index: number): DataNexusRepositoryRubygemsHostedCleanupOutputReference {
    return new DataNexusRepositoryRubygemsHostedCleanupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNexusRepositoryRubygemsHostedComponent {
}

export function dataNexusRepositoryRubygemsHostedComponentToTerraform(struct?: DataNexusRepositoryRubygemsHostedComponent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNexusRepositoryRubygemsHostedComponentToHclTerraform(struct?: DataNexusRepositoryRubygemsHostedComponent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNexusRepositoryRubygemsHostedComponentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNexusRepositoryRubygemsHostedComponent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNexusRepositoryRubygemsHostedComponent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // proprietary_components - computed: true, optional: false, required: false
  public get proprietaryComponents() {
    return this.getBooleanAttribute('proprietary_components');
  }
}

export class DataNexusRepositoryRubygemsHostedComponentList extends cdktf.ComplexList {

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
  public get(index: number): DataNexusRepositoryRubygemsHostedComponentOutputReference {
    return new DataNexusRepositoryRubygemsHostedComponentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNexusRepositoryRubygemsHostedStorage {
}

export function dataNexusRepositoryRubygemsHostedStorageToTerraform(struct?: DataNexusRepositoryRubygemsHostedStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNexusRepositoryRubygemsHostedStorageToHclTerraform(struct?: DataNexusRepositoryRubygemsHostedStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNexusRepositoryRubygemsHostedStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNexusRepositoryRubygemsHostedStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNexusRepositoryRubygemsHostedStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blob_store_name - computed: true, optional: false, required: false
  public get blobStoreName() {
    return this.getStringAttribute('blob_store_name');
  }

  // strict_content_type_validation - computed: true, optional: false, required: false
  public get strictContentTypeValidation() {
    return this.getBooleanAttribute('strict_content_type_validation');
  }

  // write_policy - computed: true, optional: false, required: false
  public get writePolicy() {
    return this.getStringAttribute('write_policy');
  }
}

export class DataNexusRepositoryRubygemsHostedStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataNexusRepositoryRubygemsHostedStorageOutputReference {
    return new DataNexusRepositoryRubygemsHostedStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/repository_rubygems_hosted nexus_repository_rubygems_hosted}
*/
export class DataNexusRepositoryRubygemsHosted extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_repository_rubygems_hosted";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNexusRepositoryRubygemsHosted resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNexusRepositoryRubygemsHosted to import
  * @param importFromId The id of the existing DataNexusRepositoryRubygemsHosted that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/repository_rubygems_hosted#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNexusRepositoryRubygemsHosted to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_repository_rubygems_hosted", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/repository_rubygems_hosted nexus_repository_rubygems_hosted} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNexusRepositoryRubygemsHostedConfig
  */
  public constructor(scope: Construct, id: string, config: DataNexusRepositoryRubygemsHostedConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_repository_rubygems_hosted',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cleanup - computed: true, optional: false, required: false
  private _cleanup = new DataNexusRepositoryRubygemsHostedCleanupList(this, "cleanup", false);
  public get cleanup() {
    return this._cleanup;
  }

  // component - computed: true, optional: false, required: false
  private _component = new DataNexusRepositoryRubygemsHostedComponentList(this, "component", false);
  public get component() {
    return this._component;
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

  // online - computed: true, optional: false, required: false
  public get online() {
    return this.getBooleanAttribute('online');
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new DataNexusRepositoryRubygemsHostedStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
