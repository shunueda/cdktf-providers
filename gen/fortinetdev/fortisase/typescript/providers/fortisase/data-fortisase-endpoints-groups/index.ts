// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseEndpointsGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#ad_groups DataFortisaseEndpointsGroups#ad_groups}
  */
  readonly adGroups?: DataFortisaseEndpointsGroupsAdGroups;
  /**
  * UID of the group to expand to find child groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#guid DataFortisaseEndpointsGroups#guid}
  */
  readonly guid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#non_ad_groups DataFortisaseEndpointsGroups#non_ad_groups}
  */
  readonly nonAdGroups?: DataFortisaseEndpointsGroupsNonAdGroups;
  /**
  * Specifies the starting position of AD groups. Based on this the results will be seperated in AD groups and non AD groups, with AD groups containing a "total" count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#offset DataFortisaseEndpointsGroups#offset}
  */
  readonly offset?: number;
  /**
  * Primary key of the endpoint/domains entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#primary_key DataFortisaseEndpointsGroups#primary_key}
  */
  readonly primaryKey: string;
}
export interface DataFortisaseEndpointsGroupsAdGroupsDataDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#datasource DataFortisaseEndpointsGroups#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#primary_key DataFortisaseEndpointsGroups#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseEndpointsGroupsAdGroupsDataDomainToTerraform(struct?: DataFortisaseEndpointsGroupsAdGroupsDataDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseEndpointsGroupsAdGroupsDataDomainToHclTerraform(struct?: DataFortisaseEndpointsGroupsAdGroupsDataDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointsGroupsAdGroupsDataDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointsGroupsAdGroupsDataDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointsGroupsAdGroupsDataDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseEndpointsGroupsAdGroupsData {
  /**
  * Reference of the endpoint/domains entry the group belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#domain DataFortisaseEndpointsGroups#domain}
  */
  readonly domain?: DataFortisaseEndpointsGroupsAdGroupsDataDomain;
  /**
  * Type of the endpint/domains entry the group belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#domain_type DataFortisaseEndpointsGroups#domain_type}
  */
  readonly domainType?: string;
  /**
  * UID of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#guid DataFortisaseEndpointsGroups#guid}
  */
  readonly guid?: string;
  /**
  * Indicate if the group has child or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#has_child DataFortisaseEndpointsGroups#has_child}
  */
  readonly hasChild?: boolean | cdktf.IResolvable;
  /**
  * Id of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#id DataFortisaseEndpointsGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Indicate if the group is custom group or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#is_custom_group DataFortisaseEndpointsGroups#is_custom_group}
  */
  readonly isCustomGroup?: boolean | cdktf.IResolvable;
  /**
  * Name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#name DataFortisaseEndpointsGroups#name}
  */
  readonly name?: string;
  /**
  * Parent id of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#parent_id DataFortisaseEndpointsGroups#parent_id}
  */
  readonly parentId?: number;
  /**
  * Path of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#path DataFortisaseEndpointsGroups#path}
  */
  readonly path?: string;
}

export function dataFortisaseEndpointsGroupsAdGroupsDataToTerraform(struct?: DataFortisaseEndpointsGroupsAdGroupsData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: dataFortisaseEndpointsGroupsAdGroupsDataDomainToTerraform(struct!.domain),
    domain_type: cdktf.stringToTerraform(struct!.domainType),
    guid: cdktf.stringToTerraform(struct!.guid),
    has_child: cdktf.booleanToTerraform(struct!.hasChild),
    id: cdktf.numberToTerraform(struct!.id),
    is_custom_group: cdktf.booleanToTerraform(struct!.isCustomGroup),
    name: cdktf.stringToTerraform(struct!.name),
    parent_id: cdktf.numberToTerraform(struct!.parentId),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataFortisaseEndpointsGroupsAdGroupsDataToHclTerraform(struct?: DataFortisaseEndpointsGroupsAdGroupsData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: dataFortisaseEndpointsGroupsAdGroupsDataDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseEndpointsGroupsAdGroupsDataDomain",
    },
    domain_type: {
      value: cdktf.stringToHclTerraform(struct!.domainType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guid: {
      value: cdktf.stringToHclTerraform(struct!.guid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_child: {
      value: cdktf.booleanToHclTerraform(struct!.hasChild),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_custom_group: {
      value: cdktf.booleanToHclTerraform(struct!.isCustomGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_id: {
      value: cdktf.numberToHclTerraform(struct!.parentId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointsGroupsAdGroupsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseEndpointsGroupsAdGroupsData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._domainType !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainType = this._domainType;
    }
    if (this._guid !== undefined) {
      hasAnyValues = true;
      internalValueResult.guid = this._guid;
    }
    if (this._hasChild !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasChild = this._hasChild;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isCustomGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCustomGroup = this._isCustomGroup;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentId = this._parentId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointsGroupsAdGroupsData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain.internalValue = undefined;
      this._domainType = undefined;
      this._guid = undefined;
      this._hasChild = undefined;
      this._id = undefined;
      this._isCustomGroup = undefined;
      this._name = undefined;
      this._parentId = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain.internalValue = value.domain;
      this._domainType = value.domainType;
      this._guid = value.guid;
      this._hasChild = value.hasChild;
      this._id = value.id;
      this._isCustomGroup = value.isCustomGroup;
      this._name = value.name;
      this._parentId = value.parentId;
      this._path = value.path;
    }
  }

  // domain - computed: true, optional: true, required: false
  private _domain = new DataFortisaseEndpointsGroupsAdGroupsDataDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: DataFortisaseEndpointsGroupsAdGroupsDataDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // domain_type - computed: true, optional: true, required: false
  private _domainType?: string; 
  public get domainType() {
    return this.getStringAttribute('domain_type');
  }
  public set domainType(value: string) {
    this._domainType = value;
  }
  public resetDomainType() {
    this._domainType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainTypeInput() {
    return this._domainType;
  }

  // guid - computed: true, optional: true, required: false
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  public resetGuid() {
    this._guid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
  }

  // has_child - computed: true, optional: true, required: false
  private _hasChild?: boolean | cdktf.IResolvable; 
  public get hasChild() {
    return this.getBooleanAttribute('has_child');
  }
  public set hasChild(value: boolean | cdktf.IResolvable) {
    this._hasChild = value;
  }
  public resetHasChild() {
    this._hasChild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasChildInput() {
    return this._hasChild;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_custom_group - computed: true, optional: true, required: false
  private _isCustomGroup?: boolean | cdktf.IResolvable; 
  public get isCustomGroup() {
    return this.getBooleanAttribute('is_custom_group');
  }
  public set isCustomGroup(value: boolean | cdktf.IResolvable) {
    this._isCustomGroup = value;
  }
  public resetIsCustomGroup() {
    this._isCustomGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCustomGroupInput() {
    return this._isCustomGroup;
  }

  // name - computed: true, optional: true, required: false
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

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: number; 
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }
  public set parentId(value: number) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataFortisaseEndpointsGroupsAdGroupsDataList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseEndpointsGroupsAdGroupsData[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseEndpointsGroupsAdGroupsDataOutputReference {
    return new DataFortisaseEndpointsGroupsAdGroupsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseEndpointsGroupsAdGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#data DataFortisaseEndpointsGroups#data}
  */
  readonly data?: DataFortisaseEndpointsGroupsAdGroupsData[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#total DataFortisaseEndpointsGroups#total}
  */
  readonly total?: number;
}

export function dataFortisaseEndpointsGroupsAdGroupsToTerraform(struct?: DataFortisaseEndpointsGroupsAdGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.listMapper(dataFortisaseEndpointsGroupsAdGroupsDataToTerraform, false)(struct!.data),
    total: cdktf.numberToTerraform(struct!.total),
  }
}


export function dataFortisaseEndpointsGroupsAdGroupsToHclTerraform(struct?: DataFortisaseEndpointsGroupsAdGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.listMapperHcl(dataFortisaseEndpointsGroupsAdGroupsDataToHclTerraform, false)(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "DataFortisaseEndpointsGroupsAdGroupsDataList",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointsGroupsAdGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointsGroupsAdGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointsGroupsAdGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
      this._total = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data.internalValue = value.data;
      this._total = value.total;
    }
  }

  // data - computed: true, optional: true, required: false
  private _data = new DataFortisaseEndpointsGroupsAdGroupsDataList(this, "data", false);
  public get data() {
    return this._data;
  }
  public putData(value: DataFortisaseEndpointsGroupsAdGroupsData[] | cdktf.IResolvable) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // total - computed: true, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }
}
export interface DataFortisaseEndpointsGroupsNonAdGroupsDataDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#datasource DataFortisaseEndpointsGroups#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#primary_key DataFortisaseEndpointsGroups#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseEndpointsGroupsNonAdGroupsDataDomainToTerraform(struct?: DataFortisaseEndpointsGroupsNonAdGroupsDataDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseEndpointsGroupsNonAdGroupsDataDomainToHclTerraform(struct?: DataFortisaseEndpointsGroupsNonAdGroupsDataDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointsGroupsNonAdGroupsDataDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointsGroupsNonAdGroupsDataDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointsGroupsNonAdGroupsDataDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseEndpointsGroupsNonAdGroupsData {
  /**
  * Reference of the endpoint/domains entry the group belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#domain DataFortisaseEndpointsGroups#domain}
  */
  readonly domain?: DataFortisaseEndpointsGroupsNonAdGroupsDataDomain;
  /**
  * Type of the endpint/domains entry the group belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#domain_type DataFortisaseEndpointsGroups#domain_type}
  */
  readonly domainType?: string;
  /**
  * UID of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#guid DataFortisaseEndpointsGroups#guid}
  */
  readonly guid?: string;
  /**
  * Indicate if the group has child or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#has_child DataFortisaseEndpointsGroups#has_child}
  */
  readonly hasChild?: boolean | cdktf.IResolvable;
  /**
  * Id of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#id DataFortisaseEndpointsGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Indicate if the group is custom group or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#is_custom_group DataFortisaseEndpointsGroups#is_custom_group}
  */
  readonly isCustomGroup?: boolean | cdktf.IResolvable;
  /**
  * Name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#name DataFortisaseEndpointsGroups#name}
  */
  readonly name?: string;
  /**
  * Parent id of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#parent_id DataFortisaseEndpointsGroups#parent_id}
  */
  readonly parentId?: number;
  /**
  * Path of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#path DataFortisaseEndpointsGroups#path}
  */
  readonly path?: string;
}

export function dataFortisaseEndpointsGroupsNonAdGroupsDataToTerraform(struct?: DataFortisaseEndpointsGroupsNonAdGroupsData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: dataFortisaseEndpointsGroupsNonAdGroupsDataDomainToTerraform(struct!.domain),
    domain_type: cdktf.stringToTerraform(struct!.domainType),
    guid: cdktf.stringToTerraform(struct!.guid),
    has_child: cdktf.booleanToTerraform(struct!.hasChild),
    id: cdktf.numberToTerraform(struct!.id),
    is_custom_group: cdktf.booleanToTerraform(struct!.isCustomGroup),
    name: cdktf.stringToTerraform(struct!.name),
    parent_id: cdktf.numberToTerraform(struct!.parentId),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataFortisaseEndpointsGroupsNonAdGroupsDataToHclTerraform(struct?: DataFortisaseEndpointsGroupsNonAdGroupsData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: dataFortisaseEndpointsGroupsNonAdGroupsDataDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseEndpointsGroupsNonAdGroupsDataDomain",
    },
    domain_type: {
      value: cdktf.stringToHclTerraform(struct!.domainType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guid: {
      value: cdktf.stringToHclTerraform(struct!.guid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_child: {
      value: cdktf.booleanToHclTerraform(struct!.hasChild),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_custom_group: {
      value: cdktf.booleanToHclTerraform(struct!.isCustomGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_id: {
      value: cdktf.numberToHclTerraform(struct!.parentId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointsGroupsNonAdGroupsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseEndpointsGroupsNonAdGroupsData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._domainType !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainType = this._domainType;
    }
    if (this._guid !== undefined) {
      hasAnyValues = true;
      internalValueResult.guid = this._guid;
    }
    if (this._hasChild !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasChild = this._hasChild;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isCustomGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCustomGroup = this._isCustomGroup;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentId = this._parentId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointsGroupsNonAdGroupsData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain.internalValue = undefined;
      this._domainType = undefined;
      this._guid = undefined;
      this._hasChild = undefined;
      this._id = undefined;
      this._isCustomGroup = undefined;
      this._name = undefined;
      this._parentId = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain.internalValue = value.domain;
      this._domainType = value.domainType;
      this._guid = value.guid;
      this._hasChild = value.hasChild;
      this._id = value.id;
      this._isCustomGroup = value.isCustomGroup;
      this._name = value.name;
      this._parentId = value.parentId;
      this._path = value.path;
    }
  }

  // domain - computed: true, optional: true, required: false
  private _domain = new DataFortisaseEndpointsGroupsNonAdGroupsDataDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: DataFortisaseEndpointsGroupsNonAdGroupsDataDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // domain_type - computed: true, optional: true, required: false
  private _domainType?: string; 
  public get domainType() {
    return this.getStringAttribute('domain_type');
  }
  public set domainType(value: string) {
    this._domainType = value;
  }
  public resetDomainType() {
    this._domainType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainTypeInput() {
    return this._domainType;
  }

  // guid - computed: true, optional: true, required: false
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  public resetGuid() {
    this._guid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
  }

  // has_child - computed: true, optional: true, required: false
  private _hasChild?: boolean | cdktf.IResolvable; 
  public get hasChild() {
    return this.getBooleanAttribute('has_child');
  }
  public set hasChild(value: boolean | cdktf.IResolvable) {
    this._hasChild = value;
  }
  public resetHasChild() {
    this._hasChild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasChildInput() {
    return this._hasChild;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_custom_group - computed: true, optional: true, required: false
  private _isCustomGroup?: boolean | cdktf.IResolvable; 
  public get isCustomGroup() {
    return this.getBooleanAttribute('is_custom_group');
  }
  public set isCustomGroup(value: boolean | cdktf.IResolvable) {
    this._isCustomGroup = value;
  }
  public resetIsCustomGroup() {
    this._isCustomGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCustomGroupInput() {
    return this._isCustomGroup;
  }

  // name - computed: true, optional: true, required: false
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

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: number; 
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }
  public set parentId(value: number) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataFortisaseEndpointsGroupsNonAdGroupsDataList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseEndpointsGroupsNonAdGroupsData[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseEndpointsGroupsNonAdGroupsDataOutputReference {
    return new DataFortisaseEndpointsGroupsNonAdGroupsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseEndpointsGroupsNonAdGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#data DataFortisaseEndpointsGroups#data}
  */
  readonly data?: DataFortisaseEndpointsGroupsNonAdGroupsData[] | cdktf.IResolvable;
}

export function dataFortisaseEndpointsGroupsNonAdGroupsToTerraform(struct?: DataFortisaseEndpointsGroupsNonAdGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.listMapper(dataFortisaseEndpointsGroupsNonAdGroupsDataToTerraform, false)(struct!.data),
  }
}


export function dataFortisaseEndpointsGroupsNonAdGroupsToHclTerraform(struct?: DataFortisaseEndpointsGroupsNonAdGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.listMapperHcl(dataFortisaseEndpointsGroupsNonAdGroupsDataToHclTerraform, false)(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "DataFortisaseEndpointsGroupsNonAdGroupsDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointsGroupsNonAdGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointsGroupsNonAdGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointsGroupsNonAdGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data.internalValue = value.data;
    }
  }

  // data - computed: true, optional: true, required: false
  private _data = new DataFortisaseEndpointsGroupsNonAdGroupsDataList(this, "data", false);
  public get data() {
    return this._data;
  }
  public putData(value: DataFortisaseEndpointsGroupsNonAdGroupsData[] | cdktf.IResolvable) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups fortisase_endpoints_groups}
*/
export class DataFortisaseEndpointsGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_endpoints_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseEndpointsGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseEndpointsGroups to import
  * @param importFromId The id of the existing DataFortisaseEndpointsGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseEndpointsGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_endpoints_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoints_groups fortisase_endpoints_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseEndpointsGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseEndpointsGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_endpoints_groups',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adGroups.internalValue = config.adGroups;
    this._guid = config.guid;
    this._nonAdGroups.internalValue = config.nonAdGroups;
    this._offset = config.offset;
    this._primaryKey = config.primaryKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_groups - computed: true, optional: true, required: false
  private _adGroups = new DataFortisaseEndpointsGroupsAdGroupsOutputReference(this, "ad_groups");
  public get adGroups() {
    return this._adGroups;
  }
  public putAdGroups(value: DataFortisaseEndpointsGroupsAdGroups) {
    this._adGroups.internalValue = value;
  }
  public resetAdGroups() {
    this._adGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adGroupsInput() {
    return this._adGroups.internalValue;
  }

  // guid - computed: true, optional: true, required: false
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  public resetGuid() {
    this._guid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
  }

  // non_ad_groups - computed: true, optional: true, required: false
  private _nonAdGroups = new DataFortisaseEndpointsGroupsNonAdGroupsOutputReference(this, "non_ad_groups");
  public get nonAdGroups() {
    return this._nonAdGroups;
  }
  public putNonAdGroups(value: DataFortisaseEndpointsGroupsNonAdGroups) {
    this._nonAdGroups.internalValue = value;
  }
  public resetNonAdGroups() {
    this._nonAdGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonAdGroupsInput() {
    return this._nonAdGroups.internalValue;
  }

  // offset - computed: true, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ad_groups: dataFortisaseEndpointsGroupsAdGroupsToTerraform(this._adGroups.internalValue),
      guid: cdktf.stringToTerraform(this._guid),
      non_ad_groups: dataFortisaseEndpointsGroupsNonAdGroupsToTerraform(this._nonAdGroups.internalValue),
      offset: cdktf.numberToTerraform(this._offset),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ad_groups: {
        value: dataFortisaseEndpointsGroupsAdGroupsToHclTerraform(this._adGroups.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseEndpointsGroupsAdGroups",
      },
      guid: {
        value: cdktf.stringToHclTerraform(this._guid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_ad_groups: {
        value: dataFortisaseEndpointsGroupsNonAdGroupsToHclTerraform(this._nonAdGroups.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseEndpointsGroupsNonAdGroups",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
