// https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/data-sources/stacks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCycloidStacksConfig extends cdktf.TerraformMetaArguments {
  /**
  * A canonical of an organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/data-sources/stacks#organization_canonical DataCycloidStacks#organization_canonical}
  */
  readonly organizationCanonical: string;
}
export interface DataCycloidStacksStacksCloudProviders {
}

export function dataCycloidStacksStacksCloudProvidersToTerraform(struct?: DataCycloidStacksStacksCloudProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCycloidStacksStacksCloudProvidersToHclTerraform(struct?: DataCycloidStacksStacksCloudProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCycloidStacksStacksCloudProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCycloidStacksStacksCloudProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCycloidStacksStacksCloudProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abbreviation - computed: true, optional: false, required: false
  public get abbreviation() {
    return this.getStringAttribute('abbreviation');
  }

  // canonical - computed: true, optional: false, required: false
  public get canonical() {
    return this.getStringAttribute('canonical');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getListAttribute('regions');
  }
}

export class DataCycloidStacksStacksCloudProvidersList extends cdktf.ComplexList {

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
  public get(index: number): DataCycloidStacksStacksCloudProvidersOutputReference {
    return new DataCycloidStacksStacksCloudProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCycloidStacksStacksDependencies {
}

export function dataCycloidStacksStacksDependenciesToTerraform(struct?: DataCycloidStacksStacksDependencies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCycloidStacksStacksDependenciesToHclTerraform(struct?: DataCycloidStacksStacksDependencies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCycloidStacksStacksDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCycloidStacksStacksDependencies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCycloidStacksStacksDependencies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}

export class DataCycloidStacksStacksDependenciesList extends cdktf.ComplexList {

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
  public get(index: number): DataCycloidStacksStacksDependenciesOutputReference {
    return new DataCycloidStacksStacksDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCycloidStacksStacksTeam {
}

export function dataCycloidStacksStacksTeamToTerraform(struct?: DataCycloidStacksStacksTeam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCycloidStacksStacksTeamToHclTerraform(struct?: DataCycloidStacksStacksTeam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCycloidStacksStacksTeamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCycloidStacksStacksTeam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCycloidStacksStacksTeam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // canonical - computed: true, optional: false, required: false
  public get canonical() {
    return this.getStringAttribute('canonical');
  }
}
export interface DataCycloidStacksStacksTechnologies {
}

export function dataCycloidStacksStacksTechnologiesToTerraform(struct?: DataCycloidStacksStacksTechnologies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCycloidStacksStacksTechnologiesToHclTerraform(struct?: DataCycloidStacksStacksTechnologies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCycloidStacksStacksTechnologiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCycloidStacksStacksTechnologies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCycloidStacksStacksTechnologies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // technology - computed: true, optional: false, required: false
  public get technology() {
    return this.getStringAttribute('technology');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataCycloidStacksStacksTechnologiesList extends cdktf.ComplexList {

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
  public get(index: number): DataCycloidStacksStacksTechnologiesOutputReference {
    return new DataCycloidStacksStacksTechnologiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCycloidStacksStacks {
}

export function dataCycloidStacksStacksToTerraform(struct?: DataCycloidStacksStacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCycloidStacksStacksToHclTerraform(struct?: DataCycloidStacksStacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCycloidStacksStacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCycloidStacksStacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCycloidStacksStacks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // blueprint - computed: true, optional: false, required: false
  public get blueprint() {
    return this.getBooleanAttribute('blueprint');
  }

  // canonical - computed: true, optional: false, required: false
  public get canonical() {
    return this.getStringAttribute('canonical');
  }

  // cloud_providers - computed: true, optional: false, required: false
  private _cloudProviders = new DataCycloidStacksStacksCloudProvidersList(this, "cloud_providers", false);
  public get cloudProviders() {
    return this._cloudProviders;
  }

  // dependencies - computed: true, optional: false, required: false
  private _dependencies = new DataCycloidStacksStacksDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // directory - computed: true, optional: false, required: false
  public get directory() {
    return this.getStringAttribute('directory');
  }

  // form_enabled - computed: true, optional: false, required: false
  public get formEnabled() {
    return this.getBooleanAttribute('form_enabled');
  }

  // keywords - computed: true, optional: false, required: false
  public get keywords() {
    return this.getListAttribute('keywords');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_canonical - computed: true, optional: false, required: false
  public get organizationCanonical() {
    return this.getStringAttribute('organization_canonical');
  }

  // quota_enabled - computed: true, optional: false, required: false
  public get quotaEnabled() {
    return this.getBooleanAttribute('quota_enabled');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // team - computed: true, optional: false, required: false
  private _team = new DataCycloidStacksStacksTeamOutputReference(this, "team");
  public get team() {
    return this._team;
  }

  // technologies - computed: true, optional: false, required: false
  private _technologies = new DataCycloidStacksStacksTechnologiesList(this, "technologies", false);
  public get technologies() {
    return this._technologies;
  }

  // trusted - computed: true, optional: false, required: false
  public get trusted() {
    return this.getBooleanAttribute('trusted');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataCycloidStacksStacksList extends cdktf.ComplexList {

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
  public get(index: number): DataCycloidStacksStacksOutputReference {
    return new DataCycloidStacksStacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/data-sources/stacks cycloid_stacks}
*/
export class DataCycloidStacks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cycloid_stacks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCycloidStacks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCycloidStacks to import
  * @param importFromId The id of the existing DataCycloidStacks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/data-sources/stacks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCycloidStacks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cycloid_stacks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/data-sources/stacks cycloid_stacks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCycloidStacksConfig
  */
  public constructor(scope: Construct, id: string, config: DataCycloidStacksConfig) {
    super(scope, id, {
      terraformResourceType: 'cycloid_stacks',
      terraformGeneratorMetadata: {
        providerName: 'cycloid',
        providerVersion: '0.0.24',
        providerVersionConstraint: '0.0.24'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._organizationCanonical = config.organizationCanonical;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // organization_canonical - computed: false, optional: false, required: true
  private _organizationCanonical?: string; 
  public get organizationCanonical() {
    return this.getStringAttribute('organization_canonical');
  }
  public set organizationCanonical(value: string) {
    this._organizationCanonical = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationCanonicalInput() {
    return this._organizationCanonical;
  }

  // stacks - computed: true, optional: false, required: false
  private _stacks = new DataCycloidStacksStacksList(this, "stacks", false);
  public get stacks() {
    return this._stacks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization_canonical: cdktf.stringToTerraform(this._organizationCanonical),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      organization_canonical: {
        value: cdktf.stringToHclTerraform(this._organizationCanonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
