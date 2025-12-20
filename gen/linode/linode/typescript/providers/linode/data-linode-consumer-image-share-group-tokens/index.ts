// https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_tokens
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeConsumerImageShareGroupTokensConfig extends cdktf.TerraformMetaArguments {
  /**
  * The order in which results should be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_tokens#order DataLinodeConsumerImageShareGroupTokens#order}
  */
  readonly order?: string;
  /**
  * The attribute to order the results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_tokens#order_by DataLinodeConsumerImageShareGroupTokens#order_by}
  */
  readonly orderBy?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_tokens#filter DataLinodeConsumerImageShareGroupTokens#filter}
  */
  readonly filter?: DataLinodeConsumerImageShareGroupTokensFilter[] | cdktf.IResolvable;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_tokens#tokens DataLinodeConsumerImageShareGroupTokens#tokens}
  */
  readonly tokens?: DataLinodeConsumerImageShareGroupTokensTokens[] | cdktf.IResolvable;
}
export interface DataLinodeConsumerImageShareGroupTokensFilter {
  /**
  * The type of comparison to use for this filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_tokens#match_by DataLinodeConsumerImageShareGroupTokens#match_by}
  */
  readonly matchBy?: string;
  /**
  * The name of the attribute to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_tokens#name DataLinodeConsumerImageShareGroupTokens#name}
  */
  readonly name: string;
  /**
  * The value(s) to be used in the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_tokens#values DataLinodeConsumerImageShareGroupTokens#values}
  */
  readonly values: string[];
}

export function dataLinodeConsumerImageShareGroupTokensFilterToTerraform(struct?: DataLinodeConsumerImageShareGroupTokensFilter | cdktf.IResolvable): any {
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


export function dataLinodeConsumerImageShareGroupTokensFilterToHclTerraform(struct?: DataLinodeConsumerImageShareGroupTokensFilter | cdktf.IResolvable): any {
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

export class DataLinodeConsumerImageShareGroupTokensFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeConsumerImageShareGroupTokensFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataLinodeConsumerImageShareGroupTokensFilter | cdktf.IResolvable | undefined) {
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

export class DataLinodeConsumerImageShareGroupTokensFilterList extends cdktf.ComplexList {
  public internalValue? : DataLinodeConsumerImageShareGroupTokensFilter[] | cdktf.IResolvable

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
  public get(index: number): DataLinodeConsumerImageShareGroupTokensFilterOutputReference {
    return new DataLinodeConsumerImageShareGroupTokensFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeConsumerImageShareGroupTokensTokens {
  /**
  * The UUID of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_tokens#token_uuid DataLinodeConsumerImageShareGroupTokens#token_uuid}
  */
  readonly tokenUuid: string;
}

export function dataLinodeConsumerImageShareGroupTokensTokensToTerraform(struct?: DataLinodeConsumerImageShareGroupTokensTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_uuid: cdktf.stringToTerraform(struct!.tokenUuid),
  }
}


export function dataLinodeConsumerImageShareGroupTokensTokensToHclTerraform(struct?: DataLinodeConsumerImageShareGroupTokensTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_uuid: {
      value: cdktf.stringToHclTerraform(struct!.tokenUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLinodeConsumerImageShareGroupTokensTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeConsumerImageShareGroupTokensTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUuid = this._tokenUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeConsumerImageShareGroupTokensTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tokenUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tokenUuid = value.tokenUuid;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // sharegroup_label - computed: true, optional: false, required: false
  public get sharegroupLabel() {
    return this.getStringAttribute('sharegroup_label');
  }

  // sharegroup_uuid - computed: true, optional: false, required: false
  public get sharegroupUuid() {
    return this.getStringAttribute('sharegroup_uuid');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // valid_for_sharegroup_uuid - computed: true, optional: false, required: false
  public get validForSharegroupUuid() {
    return this.getStringAttribute('valid_for_sharegroup_uuid');
  }
}

export class DataLinodeConsumerImageShareGroupTokensTokensList extends cdktf.ComplexList {
  public internalValue? : DataLinodeConsumerImageShareGroupTokensTokens[] | cdktf.IResolvable

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
  public get(index: number): DataLinodeConsumerImageShareGroupTokensTokensOutputReference {
    return new DataLinodeConsumerImageShareGroupTokensTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_tokens linode_consumer_image_share_group_tokens}
*/
export class DataLinodeConsumerImageShareGroupTokens extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_consumer_image_share_group_tokens";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeConsumerImageShareGroupTokens resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeConsumerImageShareGroupTokens to import
  * @param importFromId The id of the existing DataLinodeConsumerImageShareGroupTokens that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_tokens#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeConsumerImageShareGroupTokens to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_consumer_image_share_group_tokens", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/consumer_image_share_group_tokens linode_consumer_image_share_group_tokens} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeConsumerImageShareGroupTokensConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLinodeConsumerImageShareGroupTokensConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'linode_consumer_image_share_group_tokens',
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
    this._filter.internalValue = config.filter;
    this._tokens.internalValue = config.tokens;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataLinodeConsumerImageShareGroupTokensFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataLinodeConsumerImageShareGroupTokensFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // tokens - computed: false, optional: true, required: false
  private _tokens = new DataLinodeConsumerImageShareGroupTokensTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: DataLinodeConsumerImageShareGroupTokensTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  public resetTokens() {
    this._tokens.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      order: cdktf.stringToTerraform(this._order),
      order_by: cdktf.stringToTerraform(this._orderBy),
      filter: cdktf.listMapper(dataLinodeConsumerImageShareGroupTokensFilterToTerraform, true)(this._filter.internalValue),
      tokens: cdktf.listMapper(dataLinodeConsumerImageShareGroupTokensTokensToTerraform, true)(this._tokens.internalValue),
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
      filter: {
        value: cdktf.listMapperHcl(dataLinodeConsumerImageShareGroupTokensFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataLinodeConsumerImageShareGroupTokensFilterList",
      },
      tokens: {
        value: cdktf.listMapperHcl(dataLinodeConsumerImageShareGroupTokensTokensToHclTerraform, true)(this._tokens.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLinodeConsumerImageShareGroupTokensTokensList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
