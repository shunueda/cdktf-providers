// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDomainGroupOperOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper#id DataThunderDomainGroupOperOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper#oper DataThunderDomainGroupOperOper#oper}
  */
  readonly oper?: DataThunderDomainGroupOperOperOper;
}
export interface DataThunderDomainGroupOperOperOperDomainGroupEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper#action DataThunderDomainGroupOperOper#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper#domain_list_name DataThunderDomainGroupOperOper#domain_list_name}
  */
  readonly domainListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper#domain_match_type DataThunderDomainGroupOperOper#domain_match_type}
  */
  readonly domainMatchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper#domain_name DataThunderDomainGroupOperOper#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper#hit_count DataThunderDomainGroupOperOper#hit_count}
  */
  readonly hitCount?: number;
}

export function dataThunderDomainGroupOperOperOperDomainGroupEntriesToTerraform(struct?: DataThunderDomainGroupOperOperOperDomainGroupEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    domain_list_name: cdktf.stringToTerraform(struct!.domainListName),
    domain_match_type: cdktf.stringToTerraform(struct!.domainMatchType),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    hit_count: cdktf.numberToTerraform(struct!.hitCount),
  }
}


export function dataThunderDomainGroupOperOperOperDomainGroupEntriesToHclTerraform(struct?: DataThunderDomainGroupOperOperOperDomainGroupEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_list_name: {
      value: cdktf.stringToHclTerraform(struct!.domainListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_match_type: {
      value: cdktf.stringToHclTerraform(struct!.domainMatchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hit_count: {
      value: cdktf.numberToHclTerraform(struct!.hitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDomainGroupOperOperOperDomainGroupEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDomainGroupOperOperOperDomainGroupEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._domainListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainListName = this._domainListName;
    }
    if (this._domainMatchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainMatchType = this._domainMatchType;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._hitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitCount = this._hitCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDomainGroupOperOperOperDomainGroupEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._domainListName = undefined;
      this._domainMatchType = undefined;
      this._domainName = undefined;
      this._hitCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._domainListName = value.domainListName;
      this._domainMatchType = value.domainMatchType;
      this._domainName = value.domainName;
      this._hitCount = value.hitCount;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // domain_list_name - computed: false, optional: true, required: false
  private _domainListName?: string; 
  public get domainListName() {
    return this.getStringAttribute('domain_list_name');
  }
  public set domainListName(value: string) {
    this._domainListName = value;
  }
  public resetDomainListName() {
    this._domainListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListNameInput() {
    return this._domainListName;
  }

  // domain_match_type - computed: false, optional: true, required: false
  private _domainMatchType?: string; 
  public get domainMatchType() {
    return this.getStringAttribute('domain_match_type');
  }
  public set domainMatchType(value: string) {
    this._domainMatchType = value;
  }
  public resetDomainMatchType() {
    this._domainMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMatchTypeInput() {
    return this._domainMatchType;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // hit_count - computed: false, optional: true, required: false
  private _hitCount?: number; 
  public get hitCount() {
    return this.getNumberAttribute('hit_count');
  }
  public set hitCount(value: number) {
    this._hitCount = value;
  }
  public resetHitCount() {
    this._hitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitCountInput() {
    return this._hitCount;
  }
}

export class DataThunderDomainGroupOperOperOperDomainGroupEntriesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDomainGroupOperOperOperDomainGroupEntries[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDomainGroupOperOperOperDomainGroupEntriesOutputReference {
    return new DataThunderDomainGroupOperOperOperDomainGroupEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDomainGroupOperOperOperDomainGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper#binding_num DataThunderDomainGroupOperOper#binding_num}
  */
  readonly bindingNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper#domain_group_name DataThunderDomainGroupOperOper#domain_group_name}
  */
  readonly domainGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper#total_entry_num DataThunderDomainGroupOperOper#total_entry_num}
  */
  readonly totalEntryNum?: number;
}

export function dataThunderDomainGroupOperOperOperDomainGroupsToTerraform(struct?: DataThunderDomainGroupOperOperOperDomainGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding_num: cdktf.numberToTerraform(struct!.bindingNum),
    domain_group_name: cdktf.stringToTerraform(struct!.domainGroupName),
    total_entry_num: cdktf.numberToTerraform(struct!.totalEntryNum),
  }
}


export function dataThunderDomainGroupOperOperOperDomainGroupsToHclTerraform(struct?: DataThunderDomainGroupOperOperOperDomainGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding_num: {
      value: cdktf.numberToHclTerraform(struct!.bindingNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_group_name: {
      value: cdktf.stringToHclTerraform(struct!.domainGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_entry_num: {
      value: cdktf.numberToHclTerraform(struct!.totalEntryNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDomainGroupOperOperOperDomainGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDomainGroupOperOperOperDomainGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindingNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindingNum = this._bindingNum;
    }
    if (this._domainGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainGroupName = this._domainGroupName;
    }
    if (this._totalEntryNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntryNum = this._totalEntryNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDomainGroupOperOperOperDomainGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindingNum = undefined;
      this._domainGroupName = undefined;
      this._totalEntryNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindingNum = value.bindingNum;
      this._domainGroupName = value.domainGroupName;
      this._totalEntryNum = value.totalEntryNum;
    }
  }

  // binding_num - computed: false, optional: true, required: false
  private _bindingNum?: number; 
  public get bindingNum() {
    return this.getNumberAttribute('binding_num');
  }
  public set bindingNum(value: number) {
    this._bindingNum = value;
  }
  public resetBindingNum() {
    this._bindingNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingNumInput() {
    return this._bindingNum;
  }

  // domain_group_name - computed: false, optional: true, required: false
  private _domainGroupName?: string; 
  public get domainGroupName() {
    return this.getStringAttribute('domain_group_name');
  }
  public set domainGroupName(value: string) {
    this._domainGroupName = value;
  }
  public resetDomainGroupName() {
    this._domainGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupNameInput() {
    return this._domainGroupName;
  }

  // total_entry_num - computed: false, optional: true, required: false
  private _totalEntryNum?: number; 
  public get totalEntryNum() {
    return this.getNumberAttribute('total_entry_num');
  }
  public set totalEntryNum(value: number) {
    this._totalEntryNum = value;
  }
  public resetTotalEntryNum() {
    this._totalEntryNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntryNumInput() {
    return this._totalEntryNum;
  }
}

export class DataThunderDomainGroupOperOperOperDomainGroupsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDomainGroupOperOperOperDomainGroups[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDomainGroupOperOperOperDomainGroupsOutputReference {
    return new DataThunderDomainGroupOperOperOperDomainGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDomainGroupOperOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper#displayed_count DataThunderDomainGroupOperOper#displayed_count}
  */
  readonly displayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper#domain_group_name_filter DataThunderDomainGroupOperOper#domain_group_name_filter}
  */
  readonly domainGroupNameFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper#domain_name_filter DataThunderDomainGroupOperOper#domain_name_filter}
  */
  readonly domainNameFilter?: string;
  /**
  * domain_group_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper#domain_group_entries DataThunderDomainGroupOperOper#domain_group_entries}
  */
  readonly domainGroupEntries?: DataThunderDomainGroupOperOperOperDomainGroupEntries[] | cdktf.IResolvable;
  /**
  * domain_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper#domain_groups DataThunderDomainGroupOperOper#domain_groups}
  */
  readonly domainGroups?: DataThunderDomainGroupOperOperOperDomainGroups[] | cdktf.IResolvable;
}

export function dataThunderDomainGroupOperOperOperToTerraform(struct?: DataThunderDomainGroupOperOperOperOutputReference | DataThunderDomainGroupOperOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    displayed_count: cdktf.numberToTerraform(struct!.displayedCount),
    domain_group_name_filter: cdktf.stringToTerraform(struct!.domainGroupNameFilter),
    domain_name_filter: cdktf.stringToTerraform(struct!.domainNameFilter),
    domain_group_entries: cdktf.listMapper(dataThunderDomainGroupOperOperOperDomainGroupEntriesToTerraform, true)(struct!.domainGroupEntries),
    domain_groups: cdktf.listMapper(dataThunderDomainGroupOperOperOperDomainGroupsToTerraform, true)(struct!.domainGroups),
  }
}


export function dataThunderDomainGroupOperOperOperToHclTerraform(struct?: DataThunderDomainGroupOperOperOperOutputReference | DataThunderDomainGroupOperOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.displayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_group_name_filter: {
      value: cdktf.stringToHclTerraform(struct!.domainGroupNameFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name_filter: {
      value: cdktf.stringToHclTerraform(struct!.domainNameFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_group_entries: {
      value: cdktf.listMapperHcl(dataThunderDomainGroupOperOperOperDomainGroupEntriesToHclTerraform, true)(struct!.domainGroupEntries),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDomainGroupOperOperOperDomainGroupEntriesList",
    },
    domain_groups: {
      value: cdktf.listMapperHcl(dataThunderDomainGroupOperOperOperDomainGroupsToHclTerraform, true)(struct!.domainGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDomainGroupOperOperOperDomainGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDomainGroupOperOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDomainGroupOperOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayedCount = this._displayedCount;
    }
    if (this._domainGroupNameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainGroupNameFilter = this._domainGroupNameFilter;
    }
    if (this._domainNameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNameFilter = this._domainNameFilter;
    }
    if (this._domainGroupEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainGroupEntries = this._domainGroupEntries?.internalValue;
    }
    if (this._domainGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainGroups = this._domainGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDomainGroupOperOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayedCount = undefined;
      this._domainGroupNameFilter = undefined;
      this._domainNameFilter = undefined;
      this._domainGroupEntries.internalValue = undefined;
      this._domainGroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayedCount = value.displayedCount;
      this._domainGroupNameFilter = value.domainGroupNameFilter;
      this._domainNameFilter = value.domainNameFilter;
      this._domainGroupEntries.internalValue = value.domainGroupEntries;
      this._domainGroups.internalValue = value.domainGroups;
    }
  }

  // displayed_count - computed: false, optional: true, required: false
  private _displayedCount?: number; 
  public get displayedCount() {
    return this.getNumberAttribute('displayed_count');
  }
  public set displayedCount(value: number) {
    this._displayedCount = value;
  }
  public resetDisplayedCount() {
    this._displayedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayedCountInput() {
    return this._displayedCount;
  }

  // domain_group_name_filter - computed: false, optional: true, required: false
  private _domainGroupNameFilter?: string; 
  public get domainGroupNameFilter() {
    return this.getStringAttribute('domain_group_name_filter');
  }
  public set domainGroupNameFilter(value: string) {
    this._domainGroupNameFilter = value;
  }
  public resetDomainGroupNameFilter() {
    this._domainGroupNameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupNameFilterInput() {
    return this._domainGroupNameFilter;
  }

  // domain_name_filter - computed: false, optional: true, required: false
  private _domainNameFilter?: string; 
  public get domainNameFilter() {
    return this.getStringAttribute('domain_name_filter');
  }
  public set domainNameFilter(value: string) {
    this._domainNameFilter = value;
  }
  public resetDomainNameFilter() {
    this._domainNameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameFilterInput() {
    return this._domainNameFilter;
  }

  // domain_group_entries - computed: false, optional: true, required: false
  private _domainGroupEntries = new DataThunderDomainGroupOperOperOperDomainGroupEntriesList(this, "domain_group_entries", false);
  public get domainGroupEntries() {
    return this._domainGroupEntries;
  }
  public putDomainGroupEntries(value: DataThunderDomainGroupOperOperOperDomainGroupEntries[] | cdktf.IResolvable) {
    this._domainGroupEntries.internalValue = value;
  }
  public resetDomainGroupEntries() {
    this._domainGroupEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupEntriesInput() {
    return this._domainGroupEntries.internalValue;
  }

  // domain_groups - computed: false, optional: true, required: false
  private _domainGroups = new DataThunderDomainGroupOperOperOperDomainGroupsList(this, "domain_groups", false);
  public get domainGroups() {
    return this._domainGroups;
  }
  public putDomainGroups(value: DataThunderDomainGroupOperOperOperDomainGroups[] | cdktf.IResolvable) {
    this._domainGroups.internalValue = value;
  }
  public resetDomainGroups() {
    this._domainGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupsInput() {
    return this._domainGroups.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper thunder_domain_group_oper_oper}
*/
export class DataThunderDomainGroupOperOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_domain_group_oper_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDomainGroupOperOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDomainGroupOperOper to import
  * @param importFromId The id of the existing DataThunderDomainGroupOperOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDomainGroupOperOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_domain_group_oper_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_group_oper_oper thunder_domain_group_oper_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDomainGroupOperOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDomainGroupOperOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_domain_group_oper_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDomainGroupOperOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDomainGroupOperOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderDomainGroupOperOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderDomainGroupOperOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDomainGroupOperOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
