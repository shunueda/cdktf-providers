// https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/data-sources/clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVergeioClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter by name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/data-sources/clusters#filter_name DataVergeioClusters#filter_name}
  */
  readonly filterName?: string;
}
export interface DataVergeioClustersClusters {
}

export function dataVergeioClustersClustersToTerraform(struct?: DataVergeioClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVergeioClustersClustersToHclTerraform(struct?: DataVergeioClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVergeioClustersClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVergeioClustersClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVergeioClustersClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

export class DataVergeioClustersClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataVergeioClustersClustersOutputReference {
    return new DataVergeioClustersClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/data-sources/clusters vergeio_clusters}
*/
export class DataVergeioClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vergeio_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVergeioClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVergeioClusters to import
  * @param importFromId The id of the existing DataVergeioClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/data-sources/clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVergeioClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vergeio_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.2/docs/data-sources/clusters vergeio_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVergeioClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVergeioClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vergeio_clusters',
      terraformGeneratorMetadata: {
        providerName: 'vergeio',
        providerVersion: '2.7.2',
        providerVersionConstraint: '2.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterName = config.filterName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clusters - computed: true, optional: false, required: false
  private _clusters = new DataVergeioClustersClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }

  // filter_name - computed: false, optional: true, required: false
  private _filterName?: string; 
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }
  public set filterName(value: string) {
    this._filterName = value;
  }
  public resetFilterName() {
    this._filterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNameInput() {
    return this._filterName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_name: cdktf.stringToTerraform(this._filterName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_name: {
        value: cdktf.stringToHclTerraform(this._filterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
