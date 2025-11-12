// https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/data-sources/source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogtailSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The table name generated for this source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/data-sources/source#table_name DataLogtailSource#table_name}
  */
  readonly tableName: string;
}
export interface DataLogtailSourceCustomBucket {
}

export function dataLogtailSourceCustomBucketToTerraform(struct?: DataLogtailSourceCustomBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogtailSourceCustomBucketToHclTerraform(struct?: DataLogtailSourceCustomBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogtailSourceCustomBucketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogtailSourceCustomBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogtailSourceCustomBucket | undefined) {
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

export class DataLogtailSourceCustomBucketList extends cdktf.ComplexList {

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
  public get(index: number): DataLogtailSourceCustomBucketOutputReference {
    return new DataLogtailSourceCustomBucketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/data-sources/source logtail_source}
*/
export class DataLogtailSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logtail_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogtailSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogtailSource to import
  * @param importFromId The id of the existing DataLogtailSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/data-sources/source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogtailSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logtail_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.6.4/docs/data-sources/source logtail_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogtailSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataLogtailSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'logtail_source',
      terraformGeneratorMetadata: {
        providerName: 'logtail',
        providerVersion: '0.6.4',
        providerVersionConstraint: '0.6.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._tableName = config.tableName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_bucket - computed: true, optional: false, required: false
  private _customBucket = new DataLogtailSourceCustomBucketList(this, "custom_bucket", false);
  public get customBucket() {
    return this._customBucket;
  }

  // data_region - computed: true, optional: false, required: false
  public get dataRegion() {
    return this.getStringAttribute('data_region');
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

  // logs_retention - computed: true, optional: false, required: false
  public get logsRetention() {
    return this.getNumberAttribute('logs_retention');
  }

  // metrics_retention - computed: true, optional: false, required: false
  public get metricsRetention() {
    return this.getNumberAttribute('metrics_retention');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // scrape_frequency_secs - computed: true, optional: false, required: false
  public get scrapeFrequencySecs() {
    return this.getNumberAttribute('scrape_frequency_secs');
  }

  // scrape_request_basic_auth_password - computed: true, optional: false, required: false
  public get scrapeRequestBasicAuthPassword() {
    return this.getStringAttribute('scrape_request_basic_auth_password');
  }

  // scrape_request_basic_auth_user - computed: true, optional: false, required: false
  public get scrapeRequestBasicAuthUser() {
    return this.getStringAttribute('scrape_request_basic_auth_user');
  }

  // scrape_request_headers - computed: true, optional: false, required: false
  private _scrapeRequestHeaders = new cdktf.StringMapList(this, "scrape_request_headers", false);
  public get scrapeRequestHeaders() {
    return this._scrapeRequestHeaders;
  }

  // scrape_urls - computed: true, optional: false, required: false
  public get scrapeUrls() {
    return this.getListAttribute('scrape_urls');
  }

  // source_group_id - computed: true, optional: false, required: false
  public get sourceGroupId() {
    return this.getNumberAttribute('source_group_id');
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // team_name - computed: true, optional: false, required: false
  public get teamName() {
    return this.getStringAttribute('team_name');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      table_name: cdktf.stringToTerraform(this._tableName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      table_name: {
        value: cdktf.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
