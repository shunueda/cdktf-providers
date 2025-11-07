// https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/data-sources/blackout_windows
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCockroachBlackoutWindowsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster to query for blackout windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/data-sources/blackout_windows#cluster_id DataCockroachBlackoutWindows#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Maximum number of blackout windows to return in a single response. Defaults to 100 when not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/data-sources/blackout_windows#limit DataCockroachBlackoutWindows#limit}
  */
  readonly limit?: number;
  /**
  * A pagination token used to request the next page of results. This value should come from the `next_page` attribute of a previous data source call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/data-sources/blackout_windows#page DataCockroachBlackoutWindows#page}
  */
  readonly page?: string;
  /**
  * Specifies the sort direction for the returned results, which are ordered based on the `start_time` field. Use `ASC` for ascending or `DESC` for descending order. Defaults to `ASC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/data-sources/blackout_windows#sort_order DataCockroachBlackoutWindows#sort_order}
  */
  readonly sortOrder?: string;
}
export interface DataCockroachBlackoutWindowsBlackoutWindows {
}

export function dataCockroachBlackoutWindowsBlackoutWindowsToTerraform(struct?: DataCockroachBlackoutWindowsBlackoutWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCockroachBlackoutWindowsBlackoutWindowsToHclTerraform(struct?: DataCockroachBlackoutWindowsBlackoutWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCockroachBlackoutWindowsBlackoutWindowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCockroachBlackoutWindowsBlackoutWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCockroachBlackoutWindowsBlackoutWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataCockroachBlackoutWindowsBlackoutWindowsList extends cdktf.ComplexList {

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
  public get(index: number): DataCockroachBlackoutWindowsBlackoutWindowsOutputReference {
    return new DataCockroachBlackoutWindowsBlackoutWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/data-sources/blackout_windows cockroach_blackout_windows}
*/
export class DataCockroachBlackoutWindows extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cockroach_blackout_windows";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCockroachBlackoutWindows resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCockroachBlackoutWindows to import
  * @param importFromId The id of the existing DataCockroachBlackoutWindows that should be imported. Refer to the {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/data-sources/blackout_windows#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCockroachBlackoutWindows to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cockroach_blackout_windows", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/data-sources/blackout_windows cockroach_blackout_windows} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCockroachBlackoutWindowsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCockroachBlackoutWindowsConfig) {
    super(scope, id, {
      terraformResourceType: 'cockroach_blackout_windows',
      terraformGeneratorMetadata: {
        providerName: 'cockroach',
        providerVersion: '1.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._limit = config.limit;
    this._page = config.page;
    this._sortOrder = config.sortOrder;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blackout_windows - computed: true, optional: false, required: false
  private _blackoutWindows = new DataCockroachBlackoutWindowsBlackoutWindowsList(this, "blackout_windows", false);
  public get blackoutWindows() {
    return this._blackoutWindows;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // next_page - computed: true, optional: false, required: false
  public get nextPage() {
    return this.getStringAttribute('next_page');
  }

  // page - computed: false, optional: true, required: false
  private _page?: string; 
  public get page() {
    return this.getStringAttribute('page');
  }
  public set page(value: string) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      limit: cdktf.numberToTerraform(this._limit),
      page: cdktf.stringToTerraform(this._page),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      page: {
        value: cdktf.stringToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_order: {
        value: cdktf.stringToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
