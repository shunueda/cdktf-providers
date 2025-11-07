// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/active_directory_groups_by_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIseActiveDirectoryGroupsByDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain whose groups we want to fetch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/active_directory_groups_by_domain#domain DataIseActiveDirectoryGroupsByDomain#domain}
  */
  readonly domain: string;
  /**
  * Exact match filter on group's CN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/active_directory_groups_by_domain#filter DataIseActiveDirectoryGroupsByDomain#filter}
  */
  readonly filter?: string;
  /**
  * Active Directory Join Point ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/active_directory_groups_by_domain#join_point_id DataIseActiveDirectoryGroupsByDomain#join_point_id}
  */
  readonly joinPointId: string;
  /**
  * Exact match filter on group's SID, optionally specifying the domain as prefix. e.g. S-1-5-33-544 and R1.dom/S-1-5-33-544 are legal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/active_directory_groups_by_domain#sid_filter DataIseActiveDirectoryGroupsByDomain#sid_filter}
  */
  readonly sidFilter?: string;
  /**
  * Can be exactly one of: BUILTIN, DOMAIN LOCAL, GLOBAL, UNIVERSAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/active_directory_groups_by_domain#type_filter DataIseActiveDirectoryGroupsByDomain#type_filter}
  */
  readonly typeFilter?: string;
}
export interface DataIseActiveDirectoryGroupsByDomainGroups {
}

export function dataIseActiveDirectoryGroupsByDomainGroupsToTerraform(struct?: DataIseActiveDirectoryGroupsByDomainGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIseActiveDirectoryGroupsByDomainGroupsToHclTerraform(struct?: DataIseActiveDirectoryGroupsByDomainGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIseActiveDirectoryGroupsByDomainGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIseActiveDirectoryGroupsByDomainGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIseActiveDirectoryGroupsByDomainGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIseActiveDirectoryGroupsByDomainGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataIseActiveDirectoryGroupsByDomainGroupsOutputReference {
    return new DataIseActiveDirectoryGroupsByDomainGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/active_directory_groups_by_domain ise_active_directory_groups_by_domain}
*/
export class DataIseActiveDirectoryGroupsByDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_active_directory_groups_by_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIseActiveDirectoryGroupsByDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIseActiveDirectoryGroupsByDomain to import
  * @param importFromId The id of the existing DataIseActiveDirectoryGroupsByDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/active_directory_groups_by_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIseActiveDirectoryGroupsByDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_active_directory_groups_by_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/active_directory_groups_by_domain ise_active_directory_groups_by_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIseActiveDirectoryGroupsByDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataIseActiveDirectoryGroupsByDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_active_directory_groups_by_domain',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._filter = config.filter;
    this._joinPointId = config.joinPointId;
    this._sidFilter = config.sidFilter;
    this._typeFilter = config.typeFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataIseActiveDirectoryGroupsByDomainGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // join_point_id - computed: false, optional: false, required: true
  private _joinPointId?: string; 
  public get joinPointId() {
    return this.getStringAttribute('join_point_id');
  }
  public set joinPointId(value: string) {
    this._joinPointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get joinPointIdInput() {
    return this._joinPointId;
  }

  // sid_filter - computed: false, optional: true, required: false
  private _sidFilter?: string; 
  public get sidFilter() {
    return this.getStringAttribute('sid_filter');
  }
  public set sidFilter(value: string) {
    this._sidFilter = value;
  }
  public resetSidFilter() {
    this._sidFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidFilterInput() {
    return this._sidFilter;
  }

  // type_filter - computed: false, optional: true, required: false
  private _typeFilter?: string; 
  public get typeFilter() {
    return this.getStringAttribute('type_filter');
  }
  public set typeFilter(value: string) {
    this._typeFilter = value;
  }
  public resetTypeFilter() {
    this._typeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeFilterInput() {
    return this._typeFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      filter: cdktf.stringToTerraform(this._filter),
      join_point_id: cdktf.stringToTerraform(this._joinPointId),
      sid_filter: cdktf.stringToTerraform(this._sidFilter),
      type_filter: cdktf.stringToTerraform(this._typeFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      join_point_id: {
        value: cdktf.stringToHclTerraform(this._joinPointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sid_filter: {
        value: cdktf.stringToHclTerraform(this._sidFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_filter: {
        value: cdktf.stringToHclTerraform(this._typeFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
