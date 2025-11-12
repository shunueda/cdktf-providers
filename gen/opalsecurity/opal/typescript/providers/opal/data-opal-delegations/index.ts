// https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/delegations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpalDelegationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A cursor to indicate where to start fetching results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/delegations#cursor DataOpalDelegations#cursor}
  */
  readonly cursor?: string;
  /**
  * The delegate user ID to filter delegations by the user being delegated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/delegations#delegate_user_id DataOpalDelegations#delegate_user_id}
  */
  readonly delegateUserId?: string;
  /**
  * The delegator user ID to filter delegations by the user delegating their access review requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/delegations#delegator_user_id DataOpalDelegations#delegator_user_id}
  */
  readonly delegatorUserId?: string;
  /**
  * The maximum number of results to return per page. The default is 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/delegations#page_size DataOpalDelegations#page_size}
  */
  readonly pageSize?: number;
}
export interface DataOpalDelegationsResults {
}

export function dataOpalDelegationsResultsToTerraform(struct?: DataOpalDelegationsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalDelegationsResultsToHclTerraform(struct?: DataOpalDelegationsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalDelegationsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalDelegationsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalDelegationsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // delegate_user_id - computed: true, optional: false, required: false
  public get delegateUserId() {
    return this.getStringAttribute('delegate_user_id');
  }

  // delegator_user_id - computed: true, optional: false, required: false
  public get delegatorUserId() {
    return this.getStringAttribute('delegator_user_id');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataOpalDelegationsResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalDelegationsResultsOutputReference {
    return new DataOpalDelegationsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/delegations opal_delegations}
*/
export class DataOpalDelegations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_delegations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpalDelegations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpalDelegations to import
  * @param importFromId The id of the existing DataOpalDelegations that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/delegations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpalDelegations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_delegations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/data-sources/delegations opal_delegations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpalDelegationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpalDelegationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'opal_delegations',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.3.3',
        providerVersionConstraint: '3.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cursor = config.cursor;
    this._delegateUserId = config.delegateUserId;
    this._delegatorUserId = config.delegatorUserId;
    this._pageSize = config.pageSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cursor - computed: false, optional: true, required: false
  private _cursor?: string; 
  public get cursor() {
    return this.getStringAttribute('cursor');
  }
  public set cursor(value: string) {
    this._cursor = value;
  }
  public resetCursor() {
    this._cursor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorInput() {
    return this._cursor;
  }

  // delegate_user_id - computed: false, optional: true, required: false
  private _delegateUserId?: string; 
  public get delegateUserId() {
    return this.getStringAttribute('delegate_user_id');
  }
  public set delegateUserId(value: string) {
    this._delegateUserId = value;
  }
  public resetDelegateUserId() {
    this._delegateUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateUserIdInput() {
    return this._delegateUserId;
  }

  // delegator_user_id - computed: false, optional: true, required: false
  private _delegatorUserId?: string; 
  public get delegatorUserId() {
    return this.getStringAttribute('delegator_user_id');
  }
  public set delegatorUserId(value: string) {
    this._delegatorUserId = value;
  }
  public resetDelegatorUserId() {
    this._delegatorUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatorUserIdInput() {
    return this._delegatorUserId;
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // previous - computed: true, optional: false, required: false
  public get previous() {
    return this.getStringAttribute('previous');
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataOpalDelegationsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cursor: cdktf.stringToTerraform(this._cursor),
      delegate_user_id: cdktf.stringToTerraform(this._delegateUserId),
      delegator_user_id: cdktf.stringToTerraform(this._delegatorUserId),
      page_size: cdktf.numberToTerraform(this._pageSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cursor: {
        value: cdktf.stringToHclTerraform(this._cursor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegate_user_id: {
        value: cdktf.stringToHclTerraform(this._delegateUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegator_user_id: {
        value: cdktf.stringToHclTerraform(this._delegatorUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
