// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaLocationGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_groups#id DataZiaLocationGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_groups#name DataZiaLocationGroups#name}
  */
  readonly name?: string;
  /**
  * dynamic_location_group_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_groups#dynamic_location_group_criteria DataZiaLocationGroups#dynamic_location_group_criteria}
  */
  readonly dynamicLocationGroupCriteria?: DataZiaLocationGroupsDynamicLocationGroupCriteria[] | cdktf.IResolvable;
}
export interface DataZiaLocationGroupsLastModUser {
}

export function dataZiaLocationGroupsLastModUserToTerraform(struct?: DataZiaLocationGroupsLastModUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaLocationGroupsLastModUserToHclTerraform(struct?: DataZiaLocationGroupsLastModUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaLocationGroupsLastModUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaLocationGroupsLastModUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaLocationGroupsLastModUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZiaLocationGroupsLastModUserList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaLocationGroupsLastModUserOutputReference {
    return new DataZiaLocationGroupsLastModUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaLocationGroupsLocations {
}

export function dataZiaLocationGroupsLocationsToTerraform(struct?: DataZiaLocationGroupsLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaLocationGroupsLocationsToHclTerraform(struct?: DataZiaLocationGroupsLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaLocationGroupsLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaLocationGroupsLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaLocationGroupsLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZiaLocationGroupsLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaLocationGroupsLocationsOutputReference {
    return new DataZiaLocationGroupsLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaLocationGroupsDynamicLocationGroupCriteriaManagedBy {
}

export function dataZiaLocationGroupsDynamicLocationGroupCriteriaManagedByToTerraform(struct?: DataZiaLocationGroupsDynamicLocationGroupCriteriaManagedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaLocationGroupsDynamicLocationGroupCriteriaManagedByToHclTerraform(struct?: DataZiaLocationGroupsDynamicLocationGroupCriteriaManagedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaLocationGroupsDynamicLocationGroupCriteriaManagedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaLocationGroupsDynamicLocationGroupCriteriaManagedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaLocationGroupsDynamicLocationGroupCriteriaManagedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZiaLocationGroupsDynamicLocationGroupCriteriaManagedByList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaLocationGroupsDynamicLocationGroupCriteriaManagedByOutputReference {
    return new DataZiaLocationGroupsDynamicLocationGroupCriteriaManagedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaLocationGroupsDynamicLocationGroupCriteriaCity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_groups#match_string DataZiaLocationGroups#match_string}
  */
  readonly matchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_groups#match_type DataZiaLocationGroups#match_type}
  */
  readonly matchType?: string;
}

export function dataZiaLocationGroupsDynamicLocationGroupCriteriaCityToTerraform(struct?: DataZiaLocationGroupsDynamicLocationGroupCriteriaCity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_string: cdktf.stringToTerraform(struct!.matchString),
    match_type: cdktf.stringToTerraform(struct!.matchType),
  }
}


export function dataZiaLocationGroupsDynamicLocationGroupCriteriaCityToHclTerraform(struct?: DataZiaLocationGroupsDynamicLocationGroupCriteriaCity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_string: {
      value: cdktf.stringToHclTerraform(struct!.matchString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZiaLocationGroupsDynamicLocationGroupCriteriaCityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaLocationGroupsDynamicLocationGroupCriteriaCity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchString = this._matchString;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaLocationGroupsDynamicLocationGroupCriteriaCity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchString = undefined;
      this._matchType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchString = value.matchString;
      this._matchType = value.matchType;
    }
  }

  // match_string - computed: false, optional: true, required: false
  private _matchString?: string; 
  public get matchString() {
    return this.getStringAttribute('match_string');
  }
  public set matchString(value: string) {
    this._matchString = value;
  }
  public resetMatchString() {
    this._matchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStringInput() {
    return this._matchString;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }
}

export class DataZiaLocationGroupsDynamicLocationGroupCriteriaCityList extends cdktf.ComplexList {
  public internalValue? : DataZiaLocationGroupsDynamicLocationGroupCriteriaCity[] | cdktf.IResolvable

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
  public get(index: number): DataZiaLocationGroupsDynamicLocationGroupCriteriaCityOutputReference {
    return new DataZiaLocationGroupsDynamicLocationGroupCriteriaCityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaLocationGroupsDynamicLocationGroupCriteriaName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_groups#match_string DataZiaLocationGroups#match_string}
  */
  readonly matchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_groups#match_type DataZiaLocationGroups#match_type}
  */
  readonly matchType?: string;
}

export function dataZiaLocationGroupsDynamicLocationGroupCriteriaNameToTerraform(struct?: DataZiaLocationGroupsDynamicLocationGroupCriteriaName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_string: cdktf.stringToTerraform(struct!.matchString),
    match_type: cdktf.stringToTerraform(struct!.matchType),
  }
}


export function dataZiaLocationGroupsDynamicLocationGroupCriteriaNameToHclTerraform(struct?: DataZiaLocationGroupsDynamicLocationGroupCriteriaName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_string: {
      value: cdktf.stringToHclTerraform(struct!.matchString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZiaLocationGroupsDynamicLocationGroupCriteriaNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaLocationGroupsDynamicLocationGroupCriteriaName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchString = this._matchString;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaLocationGroupsDynamicLocationGroupCriteriaName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchString = undefined;
      this._matchType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchString = value.matchString;
      this._matchType = value.matchType;
    }
  }

  // match_string - computed: false, optional: true, required: false
  private _matchString?: string; 
  public get matchString() {
    return this.getStringAttribute('match_string');
  }
  public set matchString(value: string) {
    this._matchString = value;
  }
  public resetMatchString() {
    this._matchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStringInput() {
    return this._matchString;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }
}

export class DataZiaLocationGroupsDynamicLocationGroupCriteriaNameList extends cdktf.ComplexList {
  public internalValue? : DataZiaLocationGroupsDynamicLocationGroupCriteriaName[] | cdktf.IResolvable

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
  public get(index: number): DataZiaLocationGroupsDynamicLocationGroupCriteriaNameOutputReference {
    return new DataZiaLocationGroupsDynamicLocationGroupCriteriaNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaLocationGroupsDynamicLocationGroupCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_groups#countries DataZiaLocationGroups#countries}
  */
  readonly countries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_groups#profiles DataZiaLocationGroups#profiles}
  */
  readonly profiles?: string[];
  /**
  * city block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_groups#city DataZiaLocationGroups#city}
  */
  readonly city?: DataZiaLocationGroupsDynamicLocationGroupCriteriaCity[] | cdktf.IResolvable;
  /**
  * name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_groups#name DataZiaLocationGroups#name}
  */
  readonly name?: DataZiaLocationGroupsDynamicLocationGroupCriteriaName[] | cdktf.IResolvable;
}

export function dataZiaLocationGroupsDynamicLocationGroupCriteriaToTerraform(struct?: DataZiaLocationGroupsDynamicLocationGroupCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countries),
    profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profiles),
    city: cdktf.listMapper(dataZiaLocationGroupsDynamicLocationGroupCriteriaCityToTerraform, true)(struct!.city),
    name: cdktf.listMapper(dataZiaLocationGroupsDynamicLocationGroupCriteriaNameToTerraform, true)(struct!.name),
  }
}


export function dataZiaLocationGroupsDynamicLocationGroupCriteriaToHclTerraform(struct?: DataZiaLocationGroupsDynamicLocationGroupCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.profiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    city: {
      value: cdktf.listMapperHcl(dataZiaLocationGroupsDynamicLocationGroupCriteriaCityToHclTerraform, true)(struct!.city),
      isBlock: true,
      type: "list",
      storageClassType: "DataZiaLocationGroupsDynamicLocationGroupCriteriaCityList",
    },
    name: {
      value: cdktf.listMapperHcl(dataZiaLocationGroupsDynamicLocationGroupCriteriaNameToHclTerraform, true)(struct!.name),
      isBlock: true,
      type: "list",
      storageClassType: "DataZiaLocationGroupsDynamicLocationGroupCriteriaNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZiaLocationGroupsDynamicLocationGroupCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaLocationGroupsDynamicLocationGroupCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countries !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries;
    }
    if (this._profiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles;
    }
    if (this._city?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city?.internalValue;
    }
    if (this._name?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaLocationGroupsDynamicLocationGroupCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countries = undefined;
      this._profiles = undefined;
      this._city.internalValue = undefined;
      this._name.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countries = value.countries;
      this._profiles = value.profiles;
      this._city.internalValue = value.city;
      this._name.internalValue = value.name;
    }
  }

  // countries - computed: false, optional: true, required: false
  private _countries?: string[]; 
  public get countries() {
    return this.getListAttribute('countries');
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // enable_bandwidth_control - computed: true, optional: false, required: false
  public get enableBandwidthControl() {
    return this.getBooleanAttribute('enable_bandwidth_control');
  }

  // enable_caution - computed: true, optional: false, required: false
  public get enableCaution() {
    return this.getBooleanAttribute('enable_caution');
  }

  // enable_xff_forwarding - computed: true, optional: false, required: false
  public get enableXffForwarding() {
    return this.getBooleanAttribute('enable_xff_forwarding');
  }

  // enforce_aup - computed: true, optional: false, required: false
  public get enforceAup() {
    return this.getBooleanAttribute('enforce_aup');
  }

  // enforce_authentication - computed: true, optional: false, required: false
  public get enforceAuthentication() {
    return this.getBooleanAttribute('enforce_authentication');
  }

  // enforce_firewall_control - computed: true, optional: false, required: false
  public get enforceFirewallControl() {
    return this.getBooleanAttribute('enforce_firewall_control');
  }

  // managed_by - computed: true, optional: false, required: false
  private _managedBy = new DataZiaLocationGroupsDynamicLocationGroupCriteriaManagedByList(this, "managed_by", false);
  public get managedBy() {
    return this._managedBy;
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return this.getListAttribute('profiles');
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }

  // city - computed: false, optional: true, required: false
  private _city = new DataZiaLocationGroupsDynamicLocationGroupCriteriaCityList(this, "city", false);
  public get city() {
    return this._city;
  }
  public putCity(value: DataZiaLocationGroupsDynamicLocationGroupCriteriaCity[] | cdktf.IResolvable) {
    this._city.internalValue = value;
  }
  public resetCity() {
    this._city.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name = new DataZiaLocationGroupsDynamicLocationGroupCriteriaNameList(this, "name", false);
  public get name() {
    return this._name;
  }
  public putName(value: DataZiaLocationGroupsDynamicLocationGroupCriteriaName[] | cdktf.IResolvable) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }
}

export class DataZiaLocationGroupsDynamicLocationGroupCriteriaList extends cdktf.ComplexList {
  public internalValue? : DataZiaLocationGroupsDynamicLocationGroupCriteria[] | cdktf.IResolvable

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
  public get(index: number): DataZiaLocationGroupsDynamicLocationGroupCriteriaOutputReference {
    return new DataZiaLocationGroupsDynamicLocationGroupCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_groups zia_location_groups}
*/
export class DataZiaLocationGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_location_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaLocationGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaLocationGroups to import
  * @param importFromId The id of the existing DataZiaLocationGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaLocationGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_location_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_groups zia_location_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaLocationGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaLocationGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_location_groups',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._dynamicLocationGroupCriteria.internalValue = config.dynamicLocationGroupCriteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // group_type - computed: true, optional: false, required: false
  public get groupType() {
    return this.getStringAttribute('group_type');
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

  // last_mod_time - computed: true, optional: false, required: false
  public get lastModTime() {
    return this.getNumberAttribute('last_mod_time');
  }

  // last_mod_user - computed: true, optional: false, required: false
  private _lastModUser = new DataZiaLocationGroupsLastModUserList(this, "last_mod_user", false);
  public get lastModUser() {
    return this._lastModUser;
  }

  // locations - computed: true, optional: false, required: false
  private _locations = new DataZiaLocationGroupsLocationsList(this, "locations", false);
  public get locations() {
    return this._locations;
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

  // predefined - computed: true, optional: false, required: false
  public get predefined() {
    return this.getBooleanAttribute('predefined');
  }

  // dynamic_location_group_criteria - computed: false, optional: true, required: false
  private _dynamicLocationGroupCriteria = new DataZiaLocationGroupsDynamicLocationGroupCriteriaList(this, "dynamic_location_group_criteria", true);
  public get dynamicLocationGroupCriteria() {
    return this._dynamicLocationGroupCriteria;
  }
  public putDynamicLocationGroupCriteria(value: DataZiaLocationGroupsDynamicLocationGroupCriteria[] | cdktf.IResolvable) {
    this._dynamicLocationGroupCriteria.internalValue = value;
  }
  public resetDynamicLocationGroupCriteria() {
    this._dynamicLocationGroupCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicLocationGroupCriteriaInput() {
    return this._dynamicLocationGroupCriteria.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      dynamic_location_group_criteria: cdktf.listMapper(dataZiaLocationGroupsDynamicLocationGroupCriteriaToTerraform, true)(this._dynamicLocationGroupCriteria.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_location_group_criteria: {
        value: cdktf.listMapperHcl(dataZiaLocationGroupsDynamicLocationGroupCriteriaToHclTerraform, true)(this._dynamicLocationGroupCriteria.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataZiaLocationGroupsDynamicLocationGroupCriteriaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
