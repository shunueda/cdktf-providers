// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleUserGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_group#filter DataPowerscaleUserGroup#filter}
  */
  readonly filter?: DataPowerscaleUserGroupFilter;
}
export interface DataPowerscaleUserGroupUserGroupsMembers {
}

export function dataPowerscaleUserGroupUserGroupsMembersToTerraform(struct?: DataPowerscaleUserGroupUserGroupsMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleUserGroupUserGroupsMembersToHclTerraform(struct?: DataPowerscaleUserGroupUserGroupsMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleUserGroupUserGroupsMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleUserGroupUserGroupsMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleUserGroupUserGroupsMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPowerscaleUserGroupUserGroupsMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleUserGroupUserGroupsMembersOutputReference {
    return new DataPowerscaleUserGroupUserGroupsMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleUserGroupUserGroups {
}

export function dataPowerscaleUserGroupUserGroupsToTerraform(struct?: DataPowerscaleUserGroupUserGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleUserGroupUserGroupsToHclTerraform(struct?: DataPowerscaleUserGroupUserGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleUserGroupUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleUserGroupUserGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleUserGroupUserGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dn - computed: true, optional: false, required: false
  public get dn() {
    return this.getStringAttribute('dn');
  }

  // dns_domain - computed: true, optional: false, required: false
  public get dnsDomain() {
    return this.getStringAttribute('dns_domain');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // generated_gid - computed: true, optional: false, required: false
  public get generatedGid() {
    return this.getBooleanAttribute('generated_gid');
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getStringAttribute('gid');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members - computed: true, optional: false, required: false
  private _members = new DataPowerscaleUserGroupUserGroupsMembersList(this, "members", false);
  public get members() {
    return this._members;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // sam_account_name - computed: true, optional: false, required: false
  public get samAccountName() {
    return this.getStringAttribute('sam_account_name');
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

export class DataPowerscaleUserGroupUserGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleUserGroupUserGroupsOutputReference {
    return new DataPowerscaleUserGroupUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleUserGroupFilterNames {
  /**
  * Specifies a numeric user group identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_group#gid DataPowerscaleUserGroup#gid}
  */
  readonly gid?: number;
  /**
  * Specifies a user group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_group#name DataPowerscaleUserGroup#name}
  */
  readonly name?: string;
}

export function dataPowerscaleUserGroupFilterNamesToTerraform(struct?: DataPowerscaleUserGroupFilterNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPowerscaleUserGroupFilterNamesToHclTerraform(struct?: DataPowerscaleUserGroupFilterNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleUserGroupFilterNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleUserGroupFilterNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleUserGroupFilterNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gid = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gid = value.gid;
      this._name = value.name;
    }
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
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
}

export class DataPowerscaleUserGroupFilterNamesList extends cdktf.ComplexList {
  public internalValue? : DataPowerscaleUserGroupFilterNames[] | cdktf.IResolvable

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
  public get(index: number): DataPowerscaleUserGroupFilterNamesOutputReference {
    return new DataPowerscaleUserGroupFilterNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleUserGroupFilter {
  /**
  * If true, only return cached objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_group#cached DataPowerscaleUserGroup#cached}
  */
  readonly cached?: boolean | cdktf.IResolvable;
  /**
  * Filter user groups by domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_group#domain DataPowerscaleUserGroup#domain}
  */
  readonly domain?: string;
  /**
  * Filter user groups by name prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_group#name_prefix DataPowerscaleUserGroup#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * List of user group identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_group#names DataPowerscaleUserGroup#names}
  */
  readonly names?: DataPowerscaleUserGroupFilterNames[] | cdktf.IResolvable;
  /**
  * Filter user groups by provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_group#provider DataPowerscaleUserGroup#provider}
  */
  readonly provider?: string;
  /**
  * Filter user groups by zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_group#zone DataPowerscaleUserGroup#zone}
  */
  readonly zone?: string;
}

export function dataPowerscaleUserGroupFilterToTerraform(struct?: DataPowerscaleUserGroupFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cached: cdktf.booleanToTerraform(struct!.cached),
    domain: cdktf.stringToTerraform(struct!.domain),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    names: cdktf.listMapper(dataPowerscaleUserGroupFilterNamesToTerraform, false)(struct!.names),
    provider: cdktf.stringToTerraform(struct!.provider),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataPowerscaleUserGroupFilterToHclTerraform(struct?: DataPowerscaleUserGroupFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cached: {
      value: cdktf.booleanToHclTerraform(struct!.cached),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(dataPowerscaleUserGroupFilterNamesToHclTerraform, false)(struct!.names),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowerscaleUserGroupFilterNamesList",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleUserGroupFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleUserGroupFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cached !== undefined) {
      hasAnyValues = true;
      internalValueResult.cached = this._cached;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._names?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names?.internalValue;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleUserGroupFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cached = undefined;
      this._domain = undefined;
      this._namePrefix = undefined;
      this._names.internalValue = undefined;
      this._provider = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cached = value.cached;
      this._domain = value.domain;
      this._namePrefix = value.namePrefix;
      this._names.internalValue = value.names;
      this._provider = value.provider;
      this._zone = value.zone;
    }
  }

  // cached - computed: false, optional: true, required: false
  private _cached?: boolean | cdktf.IResolvable; 
  public get cached() {
    return this.getBooleanAttribute('cached');
  }
  public set cached(value: boolean | cdktf.IResolvable) {
    this._cached = value;
  }
  public resetCached() {
    this._cached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedInput() {
    return this._cached;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // names - computed: false, optional: true, required: false
  private _names = new DataPowerscaleUserGroupFilterNamesList(this, "names", false);
  public get names() {
    return this._names;
  }
  public putNames(value: DataPowerscaleUserGroupFilterNames[] | cdktf.IResolvable) {
    this._names.internalValue = value;
  }
  public resetNames() {
    this._names.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names.internalValue;
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

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_group powerscale_user_group}
*/
export class DataPowerscaleUserGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_user_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleUserGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleUserGroup to import
  * @param importFromId The id of the existing DataPowerscaleUserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleUserGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_user_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user_group powerscale_user_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleUserGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleUserGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_user_group',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // user_groups - computed: true, optional: false, required: false
  private _userGroups = new DataPowerscaleUserGroupUserGroupsList(this, "user_groups", false);
  public get userGroups() {
    return this._userGroups;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerscaleUserGroupFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerscaleUserGroupFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerscaleUserGroupFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerscaleUserGroupFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerscaleUserGroupFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
