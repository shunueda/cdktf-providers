// https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/data-sources/warehouse_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogtailWarehouseSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the new Warehouse source. Can contain letters, numbers, spaces, and special characters. Source names do not need to be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/data-sources/warehouse_source#name DataLogtailWarehouseSource#name}
  */
  readonly name: string;
}
export interface DataLogtailWarehouseSourceCustomBucket {
}

export function dataLogtailWarehouseSourceCustomBucketToTerraform(struct?: DataLogtailWarehouseSourceCustomBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogtailWarehouseSourceCustomBucketToHclTerraform(struct?: DataLogtailWarehouseSourceCustomBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogtailWarehouseSourceCustomBucketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogtailWarehouseSourceCustomBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogtailWarehouseSourceCustomBucket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // keep_data_after_retention - computed: true, optional: false, required: false
  public get keepDataAfterRetention() {
    return this.getBooleanAttribute('keep_data_after_retention');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // secret_access_key - computed: true, optional: false, required: false
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
}

export class DataLogtailWarehouseSourceCustomBucketList extends cdktf.ComplexList {

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
  public get(index: number): DataLogtailWarehouseSourceCustomBucketOutputReference {
    return new DataLogtailWarehouseSourceCustomBucketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/data-sources/warehouse_source logtail_warehouse_source}
*/
export class DataLogtailWarehouseSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logtail_warehouse_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogtailWarehouseSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogtailWarehouseSource to import
  * @param importFromId The id of the existing DataLogtailWarehouseSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/data-sources/warehouse_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogtailWarehouseSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logtail_warehouse_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/data-sources/warehouse_source logtail_warehouse_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogtailWarehouseSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataLogtailWarehouseSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'logtail_warehouse_source',
      terraformGeneratorMetadata: {
        providerName: 'logtail',
        providerVersion: '0.7.3',
        providerVersionConstraint: '0.7.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_bucket - computed: true, optional: false, required: false
  private _customBucket = new DataLogtailWarehouseSourceCustomBucketList(this, "custom_bucket", false);
  public get customBucket() {
    return this._customBucket;
  }

  // data_region - computed: true, optional: false, required: false
  public get dataRegion() {
    return this.getStringAttribute('data_region');
  }

  // events_retention - computed: true, optional: false, required: false
  public get eventsRetention() {
    return this.getNumberAttribute('events_retention');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingesting_host - computed: true, optional: false, required: false
  public get ingestingHost() {
    return this.getStringAttribute('ingesting_host');
  }

  // ingesting_paused - computed: true, optional: false, required: false
  public get ingestingPaused() {
    return this.getBooleanAttribute('ingesting_paused');
  }

  // live_tail_pattern - computed: true, optional: false, required: false
  public get liveTailPattern() {
    return this.getStringAttribute('live_tail_pattern');
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

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // team_name - computed: true, optional: false, required: false
  public get teamName() {
    return this.getStringAttribute('team_name');
  }

  // time_series_retention - computed: true, optional: false, required: false
  public get timeSeriesRetention() {
    return this.getNumberAttribute('time_series_retention');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vrl_transformation - computed: true, optional: false, required: false
  public get vrlTransformation() {
    return this.getStringAttribute('vrl_transformation');
  }

  // warehouse_source_group_id - computed: true, optional: false, required: false
  public get warehouseSourceGroupId() {
    return this.getNumberAttribute('warehouse_source_group_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
