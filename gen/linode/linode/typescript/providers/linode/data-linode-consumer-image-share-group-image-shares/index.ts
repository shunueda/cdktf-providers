// https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_image_shares
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeConsumerImageShareGroupImageSharesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The order in which results should be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_image_shares#order DataLinodeConsumerImageShareGroupImageShares#order}
  */
  readonly order?: string;
  /**
  * The attribute to order the results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_image_shares#order_by DataLinodeConsumerImageShareGroupImageShares#order_by}
  */
  readonly orderBy?: string;
  /**
  * The UUID of the Token that has been granted access to the Images in the Image Share Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_image_shares#token_uuid DataLinodeConsumerImageShareGroupImageShares#token_uuid}
  */
  readonly tokenUuid: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_image_shares#filter DataLinodeConsumerImageShareGroupImageShares#filter}
  */
  readonly filter?: DataLinodeConsumerImageShareGroupImageSharesFilter[] | cdktf.IResolvable;
  /**
  * image_shares block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_image_shares#image_shares DataLinodeConsumerImageShareGroupImageShares#image_shares}
  */
  readonly imageShares?: DataLinodeConsumerImageShareGroupImageSharesImageShares[] | cdktf.IResolvable;
}
export interface DataLinodeConsumerImageShareGroupImageSharesFilter {
  /**
  * The type of comparison to use for this filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_image_shares#match_by DataLinodeConsumerImageShareGroupImageShares#match_by}
  */
  readonly matchBy?: string;
  /**
  * The name of the attribute to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_image_shares#name DataLinodeConsumerImageShareGroupImageShares#name}
  */
  readonly name: string;
  /**
  * The value(s) to be used in the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_image_shares#values DataLinodeConsumerImageShareGroupImageShares#values}
  */
  readonly values: string[];
}

export function dataLinodeConsumerImageShareGroupImageSharesFilterToTerraform(struct?: DataLinodeConsumerImageShareGroupImageSharesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_by: cdktf.stringToTerraform(struct!.matchBy),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataLinodeConsumerImageShareGroupImageSharesFilterToHclTerraform(struct?: DataLinodeConsumerImageShareGroupImageSharesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_by: {
      value: cdktf.stringToHclTerraform(struct!.matchBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLinodeConsumerImageShareGroupImageSharesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeConsumerImageShareGroupImageSharesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchBy = this._matchBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeConsumerImageShareGroupImageSharesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchBy = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchBy = value.matchBy;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // match_by - computed: false, optional: true, required: false
  private _matchBy?: string; 
  public get matchBy() {
    return this.getStringAttribute('match_by');
  }
  public set matchBy(value: string) {
    this._matchBy = value;
  }
  public resetMatchBy() {
    this._matchBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchByInput() {
    return this._matchBy;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataLinodeConsumerImageShareGroupImageSharesFilterList extends cdktf.ComplexList {
  public internalValue? : DataLinodeConsumerImageShareGroupImageSharesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataLinodeConsumerImageShareGroupImageSharesFilterOutputReference {
    return new DataLinodeConsumerImageShareGroupImageSharesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedBy {
}

export function dataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedByToTerraform(struct?: DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedByToHclTerraform(struct?: DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sharegroup_id - computed: true, optional: false, required: false
  public get sharegroupId() {
    return this.getNumberAttribute('sharegroup_id');
  }

  // sharegroup_label - computed: true, optional: false, required: false
  public get sharegroupLabel() {
    return this.getStringAttribute('sharegroup_label');
  }

  // sharegroup_uuid - computed: true, optional: false, required: false
  public get sharegroupUuid() {
    return this.getStringAttribute('sharegroup_uuid');
  }

  // source_image_id - computed: true, optional: false, required: false
  public get sourceImageId() {
    return this.getStringAttribute('source_image_id');
  }
}
export interface DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedWith {
}

export function dataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedWithToTerraform(struct?: DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedWith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedWithToHclTerraform(struct?: DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedWith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedWithOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedWith | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedWith | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sharegroup_count - computed: true, optional: false, required: false
  public get sharegroupCount() {
    return this.getNumberAttribute('sharegroup_count');
  }

  // sharegroup_list_url - computed: true, optional: false, required: false
  public get sharegroupListUrl() {
    return this.getStringAttribute('sharegroup_list_url');
  }
}
export interface DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharing {
}

export function dataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingToTerraform(struct?: DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingToHclTerraform(struct?: DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // shared_by - computed: true, optional: false, required: false
  private _sharedBy = new DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedByOutputReference(this, "shared_by");
  public get sharedBy() {
    return this._sharedBy;
  }

  // shared_with - computed: true, optional: false, required: false
  private _sharedWith = new DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingSharedWithOutputReference(this, "shared_with");
  public get sharedWith() {
    return this._sharedWith;
  }
}
export interface DataLinodeConsumerImageShareGroupImageSharesImageShares {
}

export function dataLinodeConsumerImageShareGroupImageSharesImageSharesToTerraform(struct?: DataLinodeConsumerImageShareGroupImageSharesImageShares | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeConsumerImageShareGroupImageSharesImageSharesToHclTerraform(struct?: DataLinodeConsumerImageShareGroupImageSharesImageShares | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeConsumerImageShareGroupImageSharesImageSharesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeConsumerImageShareGroupImageSharesImageShares | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeConsumerImageShareGroupImageSharesImageShares | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // deprecated - computed: true, optional: false, required: false
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_sharing - computed: true, optional: false, required: false
  private _imageSharing = new DataLinodeConsumerImageShareGroupImageSharesImageSharesImageSharingOutputReference(this, "image_sharing");
  public get imageSharing() {
    return this._imageSharing;
  }

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // total_size - computed: true, optional: false, required: false
  public get totalSize() {
    return this.getNumberAttribute('total_size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataLinodeConsumerImageShareGroupImageSharesImageSharesList extends cdktf.ComplexList {
  public internalValue? : DataLinodeConsumerImageShareGroupImageSharesImageShares[] | cdktf.IResolvable

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
  public get(index: number): DataLinodeConsumerImageShareGroupImageSharesImageSharesOutputReference {
    return new DataLinodeConsumerImageShareGroupImageSharesImageSharesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_image_shares linode_consumer_image_share_group_image_shares}
*/
export class DataLinodeConsumerImageShareGroupImageShares extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_consumer_image_share_group_image_shares";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeConsumerImageShareGroupImageShares resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeConsumerImageShareGroupImageShares to import
  * @param importFromId The id of the existing DataLinodeConsumerImageShareGroupImageShares that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_image_shares#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeConsumerImageShareGroupImageShares to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_consumer_image_share_group_image_shares", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_image_shares linode_consumer_image_share_group_image_shares} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeConsumerImageShareGroupImageSharesConfig
  */
  public constructor(scope: Construct, id: string, config: DataLinodeConsumerImageShareGroupImageSharesConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_consumer_image_share_group_image_shares',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.7.0',
        providerVersionConstraint: '3.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._order = config.order;
    this._orderBy = config.orderBy;
    this._tokenUuid = config.tokenUuid;
    this._filter.internalValue = config.filter;
    this._imageShares.internalValue = config.imageShares;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // token_uuid - computed: false, optional: false, required: true
  private _tokenUuid?: string; 
  public get tokenUuid() {
    return this.getStringAttribute('token_uuid');
  }
  public set tokenUuid(value: string) {
    this._tokenUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUuidInput() {
    return this._tokenUuid;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataLinodeConsumerImageShareGroupImageSharesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataLinodeConsumerImageShareGroupImageSharesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // image_shares - computed: false, optional: true, required: false
  private _imageShares = new DataLinodeConsumerImageShareGroupImageSharesImageSharesList(this, "image_shares", false);
  public get imageShares() {
    return this._imageShares;
  }
  public putImageShares(value: DataLinodeConsumerImageShareGroupImageSharesImageShares[] | cdktf.IResolvable) {
    this._imageShares.internalValue = value;
  }
  public resetImageShares() {
    this._imageShares.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSharesInput() {
    return this._imageShares.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      order: cdktf.stringToTerraform(this._order),
      order_by: cdktf.stringToTerraform(this._orderBy),
      token_uuid: cdktf.stringToTerraform(this._tokenUuid),
      filter: cdktf.listMapper(dataLinodeConsumerImageShareGroupImageSharesFilterToTerraform, true)(this._filter.internalValue),
      image_shares: cdktf.listMapper(dataLinodeConsumerImageShareGroupImageSharesImageSharesToTerraform, true)(this._imageShares.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_uuid: {
        value: cdktf.stringToHclTerraform(this._tokenUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataLinodeConsumerImageShareGroupImageSharesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataLinodeConsumerImageShareGroupImageSharesFilterList",
      },
      image_shares: {
        value: cdktf.listMapperHcl(dataLinodeConsumerImageShareGroupImageSharesImageSharesToHclTerraform, true)(this._imageShares.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLinodeConsumerImageShareGroupImageSharesImageSharesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
