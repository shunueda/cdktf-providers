// https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/paginated_bundle_resource_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpalPaginatedBundleResourceListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/paginated_bundle_resource_list#bundle_id DataOpalPaginatedBundleResourceList#bundle_id}
  */
  readonly bundleId: string;
  /**
  * A cursor indicating where to start fetching items after a specific point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/paginated_bundle_resource_list#cursor DataOpalPaginatedBundleResourceList#cursor}
  */
  readonly cursor?: string;
  /**
  * The maximum number of resources to return from the beginning of the list. Default is 200, max is 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/paginated_bundle_resource_list#page_size DataOpalPaginatedBundleResourceList#page_size}
  */
  readonly pageSize?: number;
}
export interface DataOpalPaginatedBundleResourceListBundleResources {
}

export function dataOpalPaginatedBundleResourceListBundleResourcesToTerraform(struct?: DataOpalPaginatedBundleResourceListBundleResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalPaginatedBundleResourceListBundleResourcesToHclTerraform(struct?: DataOpalPaginatedBundleResourceListBundleResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalPaginatedBundleResourceListBundleResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalPaginatedBundleResourceListBundleResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalPaginatedBundleResourceListBundleResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_level_name - computed: true, optional: false, required: false
  public get accessLevelName() {
    return this.getStringAttribute('access_level_name');
  }

  // access_level_remote_id - computed: true, optional: false, required: false
  public get accessLevelRemoteId() {
    return this.getStringAttribute('access_level_remote_id');
  }

  // bundle_id - computed: true, optional: false, required: false
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}

export class DataOpalPaginatedBundleResourceListBundleResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalPaginatedBundleResourceListBundleResourcesOutputReference {
    return new DataOpalPaginatedBundleResourceListBundleResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/paginated_bundle_resource_list opal_paginated_bundle_resource_list}
*/
export class DataOpalPaginatedBundleResourceList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_paginated_bundle_resource_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpalPaginatedBundleResourceList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpalPaginatedBundleResourceList to import
  * @param importFromId The id of the existing DataOpalPaginatedBundleResourceList that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/paginated_bundle_resource_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpalPaginatedBundleResourceList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_paginated_bundle_resource_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/paginated_bundle_resource_list opal_paginated_bundle_resource_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpalPaginatedBundleResourceListConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpalPaginatedBundleResourceListConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_paginated_bundle_resource_list',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bundleId = config.bundleId;
    this._cursor = config.cursor;
    this._pageSize = config.pageSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_id - computed: false, optional: false, required: true
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // bundle_resources - computed: true, optional: false, required: false
  private _bundleResources = new DataOpalPaginatedBundleResourceListBundleResourcesList(this, "bundle_resources", false);
  public get bundleResources() {
    return this._bundleResources;
  }

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

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bundle_id: cdktf.stringToTerraform(this._bundleId),
      cursor: cdktf.stringToTerraform(this._cursor),
      page_size: cdktf.numberToTerraform(this._pageSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundle_id: {
        value: cdktf.stringToHclTerraform(this._bundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cursor: {
        value: cdktf.stringToHclTerraform(this._cursor),
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
