// https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/catalog_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CatalogRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/catalog_repository#branch CatalogRepository#branch}
  */
  readonly branch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/catalog_repository#canonical CatalogRepository#canonical}
  */
  readonly canonical?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/catalog_repository#credential_canonical CatalogRepository#credential_canonical}
  */
  readonly credentialCanonical?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/catalog_repository#name CatalogRepository#name}
  */
  readonly name: string;
  /**
  * The visibility setting allows to specify which visibility will be applied to stacks in this catalog repository.
  * This option is only applied during initial catalog repository creation, not for subsequent updates.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/catalog_repository#on_create_team CatalogRepository#on_create_team}
  */
  readonly onCreateTeam?: string;
  /**
  * Team responsible for the maintenance of the underlying service catalogs
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/catalog_repository#on_create_visibility CatalogRepository#on_create_visibility}
  */
  readonly onCreateVisibility?: string;
  /**
  * A canonical of an organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/catalog_repository#organization_canonical CatalogRepository#organization_canonical}
  */
  readonly organizationCanonical?: string;
  /**
  * User canonical that owns this service catalog source. If omitted then the person
  * creating this service catalog source will be assigned as owner. When a user is the
  * owner of a service catalog source they has all the permissions on it.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/catalog_repository#owner CatalogRepository#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/catalog_repository#url CatalogRepository#url}
  */
  readonly url: string;
}
export interface CatalogRepositoryDataStacks {
}

export function catalogRepositoryDataStacksToTerraform(struct?: CatalogRepositoryDataStacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function catalogRepositoryDataStacksToHclTerraform(struct?: CatalogRepositoryDataStacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CatalogRepositoryDataStacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CatalogRepositoryDataStacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogRepositoryDataStacks | undefined) {
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }
}

export class CatalogRepositoryDataStacksList extends cdktf.ComplexList {

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
  public get(index: number): CatalogRepositoryDataStacksOutputReference {
    return new CatalogRepositoryDataStacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CatalogRepositoryData {
}

export function catalogRepositoryDataToTerraform(struct?: CatalogRepositoryData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function catalogRepositoryDataToHclTerraform(struct?: CatalogRepositoryData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CatalogRepositoryDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CatalogRepositoryData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogRepositoryData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // canonical - computed: true, optional: false, required: false
  public get canonical() {
    return this.getStringAttribute('canonical');
  }

  // credential_canonical - computed: true, optional: false, required: false
  public get credentialCanonical() {
    return this.getStringAttribute('credential_canonical');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // stack_count - computed: true, optional: false, required: false
  public get stackCount() {
    return this.getNumberAttribute('stack_count');
  }

  // stacks - computed: true, optional: false, required: false
  private _stacks = new CatalogRepositoryDataStacksList(this, "stacks", false);
  public get stacks() {
    return this._stacks;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/catalog_repository cycloid_catalog_repository}
*/
export class CatalogRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cycloid_catalog_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CatalogRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalogRepository to import
  * @param importFromId The id of the existing CatalogRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/catalog_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalogRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cycloid_catalog_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/catalog_repository cycloid_catalog_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: CatalogRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'cycloid_catalog_repository',
      terraformGeneratorMetadata: {
        providerName: 'cycloid',
        providerVersion: '0.0.23',
        providerVersionConstraint: '0.0.23'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._branch = config.branch;
    this._canonical = config.canonical;
    this._credentialCanonical = config.credentialCanonical;
    this._name = config.name;
    this._onCreateTeam = config.onCreateTeam;
    this._onCreateVisibility = config.onCreateVisibility;
    this._organizationCanonical = config.organizationCanonical;
    this._owner = config.owner;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // canonical - computed: true, optional: true, required: false
  private _canonical?: string; 
  public get canonical() {
    return this.getStringAttribute('canonical');
  }
  public set canonical(value: string) {
    this._canonical = value;
  }
  public resetCanonical() {
    this._canonical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalInput() {
    return this._canonical;
  }

  // credential_canonical - computed: true, optional: true, required: false
  private _credentialCanonical?: string; 
  public get credentialCanonical() {
    return this.getStringAttribute('credential_canonical');
  }
  public set credentialCanonical(value: string) {
    this._credentialCanonical = value;
  }
  public resetCredentialCanonical() {
    this._credentialCanonical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialCanonicalInput() {
    return this._credentialCanonical;
  }

  // data - computed: true, optional: false, required: false
  private _data = new CatalogRepositoryDataOutputReference(this, "data");
  public get data() {
    return this._data;
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

  // on_create_team - computed: true, optional: true, required: false
  private _onCreateTeam?: string; 
  public get onCreateTeam() {
    return this.getStringAttribute('on_create_team');
  }
  public set onCreateTeam(value: string) {
    this._onCreateTeam = value;
  }
  public resetOnCreateTeam() {
    this._onCreateTeam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCreateTeamInput() {
    return this._onCreateTeam;
  }

  // on_create_visibility - computed: true, optional: true, required: false
  private _onCreateVisibility?: string; 
  public get onCreateVisibility() {
    return this.getStringAttribute('on_create_visibility');
  }
  public set onCreateVisibility(value: string) {
    this._onCreateVisibility = value;
  }
  public resetOnCreateVisibility() {
    this._onCreateVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCreateVisibilityInput() {
    return this._onCreateVisibility;
  }

  // organization_canonical - computed: true, optional: true, required: false
  private _organizationCanonical?: string; 
  public get organizationCanonical() {
    return this.getStringAttribute('organization_canonical');
  }
  public set organizationCanonical(value: string) {
    this._organizationCanonical = value;
  }
  public resetOrganizationCanonical() {
    this._organizationCanonical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationCanonicalInput() {
    return this._organizationCanonical;
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: cdktf.stringToTerraform(this._branch),
      canonical: cdktf.stringToTerraform(this._canonical),
      credential_canonical: cdktf.stringToTerraform(this._credentialCanonical),
      name: cdktf.stringToTerraform(this._name),
      on_create_team: cdktf.stringToTerraform(this._onCreateTeam),
      on_create_visibility: cdktf.stringToTerraform(this._onCreateVisibility),
      organization_canonical: cdktf.stringToTerraform(this._organizationCanonical),
      owner: cdktf.stringToTerraform(this._owner),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      canonical: {
        value: cdktf.stringToHclTerraform(this._canonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_canonical: {
        value: cdktf.stringToHclTerraform(this._credentialCanonical),
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
      on_create_team: {
        value: cdktf.stringToHclTerraform(this._onCreateTeam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_create_visibility: {
        value: cdktf.stringToHclTerraform(this._onCreateVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_canonical: {
        value: cdktf.stringToHclTerraform(this._organizationCanonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
