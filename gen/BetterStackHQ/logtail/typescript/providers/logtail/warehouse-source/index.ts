// https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WarehouseSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The data region or cluster name where the source's data will be stored.
  * Possible values include `us_east`, `us_west`, `germany`, `singapore`, or a specific cluster name like `us-east-9`.
  * The actual region created may differ slightly due to dynamic load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source#data_region WarehouseSource#data_region}
  */
  readonly dataRegion?: string;
  /**
  * The retention period for event data in days. Default is 9999999 days (effectively infinite).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source#events_retention WarehouseSource#events_retention}
  */
  readonly eventsRetention?: number;
  /**
  * This property allows you to temporarily pause data ingesting for this source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source#ingesting_paused WarehouseSource#ingesting_paused}
  */
  readonly ingestingPaused?: boolean | cdktf.IResolvable;
  /**
  * A display template for live tail messages. Default is `"{status} {message}"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source#live_tail_pattern WarehouseSource#live_tail_pattern}
  */
  readonly liveTailPattern?: string;
  /**
  * The name of the new Warehouse source. Can contain letters, numbers, spaces, and special characters. Source names do not need to be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source#name WarehouseSource#name}
  */
  readonly name: string;
  /**
  * Used to specify the team the resource should be created in when using global tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source#team_name WarehouseSource#team_name}
  */
  readonly teamName?: string;
  /**
  * The retention period for time series data in days. Default is 9999999 days (effectively infinite).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source#time_series_retention WarehouseSource#time_series_retention}
  */
  readonly timeSeriesRetention?: number;
  /**
  * A VRL program for real-time data transformation. Read more about [VRL transformations](https://betterstack.com/docs/logs/using-logtail/transforming-ingested-data/logs-vrl/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source#vrl_transformation WarehouseSource#vrl_transformation}
  */
  readonly vrlTransformation?: string;
  /**
  * The ID of the warehouse source group this source belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source#warehouse_source_group_id WarehouseSource#warehouse_source_group_id}
  */
  readonly warehouseSourceGroupId: number;
  /**
  * custom_bucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source#custom_bucket WarehouseSource#custom_bucket}
  */
  readonly customBucket?: WarehouseSourceCustomBucket;
}
export interface WarehouseSourceCustomBucket {
  /**
  * Access key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source#access_key_id WarehouseSource#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Bucket endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source#endpoint WarehouseSource#endpoint}
  */
  readonly endpoint: string;
  /**
  * Whether we should keep data in the bucket after the retention period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source#keep_data_after_retention WarehouseSource#keep_data_after_retention}
  */
  readonly keepDataAfterRetention?: boolean | cdktf.IResolvable;
  /**
  * Bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source#name WarehouseSource#name}
  */
  readonly name: string;
  /**
  * Secret access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source#secret_access_key WarehouseSource#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function warehouseSourceCustomBucketToTerraform(struct?: WarehouseSourceCustomBucketOutputReference | WarehouseSourceCustomBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    keep_data_after_retention: cdktf.booleanToTerraform(struct!.keepDataAfterRetention),
    name: cdktf.stringToTerraform(struct!.name),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function warehouseSourceCustomBucketToHclTerraform(struct?: WarehouseSourceCustomBucketOutputReference | WarehouseSourceCustomBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_data_after_retention: {
      value: cdktf.booleanToHclTerraform(struct!.keepDataAfterRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WarehouseSourceCustomBucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WarehouseSourceCustomBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._keepDataAfterRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepDataAfterRetention = this._keepDataAfterRetention;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WarehouseSourceCustomBucket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._endpoint = undefined;
      this._keepDataAfterRetention = undefined;
      this._name = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._endpoint = value.endpoint;
      this._keepDataAfterRetention = value.keepDataAfterRetention;
      this._name = value.name;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // keep_data_after_retention - computed: false, optional: true, required: false
  private _keepDataAfterRetention?: boolean | cdktf.IResolvable; 
  public get keepDataAfterRetention() {
    return this.getBooleanAttribute('keep_data_after_retention');
  }
  public set keepDataAfterRetention(value: boolean | cdktf.IResolvable) {
    this._keepDataAfterRetention = value;
  }
  public resetKeepDataAfterRetention() {
    this._keepDataAfterRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepDataAfterRetentionInput() {
    return this._keepDataAfterRetention;
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

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source logtail_warehouse_source}
*/
export class WarehouseSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logtail_warehouse_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WarehouseSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WarehouseSource to import
  * @param importFromId The id of the existing WarehouseSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WarehouseSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logtail_warehouse_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.3/docs/resources/warehouse_source logtail_warehouse_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WarehouseSourceConfig
  */
  public constructor(scope: Construct, id: string, config: WarehouseSourceConfig) {
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
    this._dataRegion = config.dataRegion;
    this._eventsRetention = config.eventsRetention;
    this._ingestingPaused = config.ingestingPaused;
    this._liveTailPattern = config.liveTailPattern;
    this._name = config.name;
    this._teamName = config.teamName;
    this._timeSeriesRetention = config.timeSeriesRetention;
    this._vrlTransformation = config.vrlTransformation;
    this._warehouseSourceGroupId = config.warehouseSourceGroupId;
    this._customBucket.internalValue = config.customBucket;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_region - computed: true, optional: true, required: false
  private _dataRegion?: string; 
  public get dataRegion() {
    return this.getStringAttribute('data_region');
  }
  public set dataRegion(value: string) {
    this._dataRegion = value;
  }
  public resetDataRegion() {
    this._dataRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRegionInput() {
    return this._dataRegion;
  }

  // events_retention - computed: true, optional: true, required: false
  private _eventsRetention?: number; 
  public get eventsRetention() {
    return this.getNumberAttribute('events_retention');
  }
  public set eventsRetention(value: number) {
    this._eventsRetention = value;
  }
  public resetEventsRetention() {
    this._eventsRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsRetentionInput() {
    return this._eventsRetention;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingesting_host - computed: true, optional: false, required: false
  public get ingestingHost() {
    return this.getStringAttribute('ingesting_host');
  }

  // ingesting_paused - computed: true, optional: true, required: false
  private _ingestingPaused?: boolean | cdktf.IResolvable; 
  public get ingestingPaused() {
    return this.getBooleanAttribute('ingesting_paused');
  }
  public set ingestingPaused(value: boolean | cdktf.IResolvable) {
    this._ingestingPaused = value;
  }
  public resetIngestingPaused() {
    this._ingestingPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestingPausedInput() {
    return this._ingestingPaused;
  }

  // live_tail_pattern - computed: true, optional: true, required: false
  private _liveTailPattern?: string; 
  public get liveTailPattern() {
    return this.getStringAttribute('live_tail_pattern');
  }
  public set liveTailPattern(value: string) {
    this._liveTailPattern = value;
  }
  public resetLiveTailPattern() {
    this._liveTailPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveTailPatternInput() {
    return this._liveTailPattern;
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

  // team_name - computed: false, optional: true, required: false
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public resetTeamName() {
    this._teamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }

  // time_series_retention - computed: true, optional: true, required: false
  private _timeSeriesRetention?: number; 
  public get timeSeriesRetention() {
    return this.getNumberAttribute('time_series_retention');
  }
  public set timeSeriesRetention(value: number) {
    this._timeSeriesRetention = value;
  }
  public resetTimeSeriesRetention() {
    this._timeSeriesRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSeriesRetentionInput() {
    return this._timeSeriesRetention;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vrl_transformation - computed: false, optional: true, required: false
  private _vrlTransformation?: string; 
  public get vrlTransformation() {
    return this.getStringAttribute('vrl_transformation');
  }
  public set vrlTransformation(value: string) {
    this._vrlTransformation = value;
  }
  public resetVrlTransformation() {
    this._vrlTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrlTransformationInput() {
    return this._vrlTransformation;
  }

  // warehouse_source_group_id - computed: false, optional: false, required: true
  private _warehouseSourceGroupId?: number; 
  public get warehouseSourceGroupId() {
    return this.getNumberAttribute('warehouse_source_group_id');
  }
  public set warehouseSourceGroupId(value: number) {
    this._warehouseSourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseSourceGroupIdInput() {
    return this._warehouseSourceGroupId;
  }

  // custom_bucket - computed: false, optional: true, required: false
  private _customBucket = new WarehouseSourceCustomBucketOutputReference(this, "custom_bucket");
  public get customBucket() {
    return this._customBucket;
  }
  public putCustomBucket(value: WarehouseSourceCustomBucket) {
    this._customBucket.internalValue = value;
  }
  public resetCustomBucket() {
    this._customBucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBucketInput() {
    return this._customBucket.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_region: cdktf.stringToTerraform(this._dataRegion),
      events_retention: cdktf.numberToTerraform(this._eventsRetention),
      ingesting_paused: cdktf.booleanToTerraform(this._ingestingPaused),
      live_tail_pattern: cdktf.stringToTerraform(this._liveTailPattern),
      name: cdktf.stringToTerraform(this._name),
      team_name: cdktf.stringToTerraform(this._teamName),
      time_series_retention: cdktf.numberToTerraform(this._timeSeriesRetention),
      vrl_transformation: cdktf.stringToTerraform(this._vrlTransformation),
      warehouse_source_group_id: cdktf.numberToTerraform(this._warehouseSourceGroupId),
      custom_bucket: warehouseSourceCustomBucketToTerraform(this._customBucket.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_region: {
        value: cdktf.stringToHclTerraform(this._dataRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      events_retention: {
        value: cdktf.numberToHclTerraform(this._eventsRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ingesting_paused: {
        value: cdktf.booleanToHclTerraform(this._ingestingPaused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      live_tail_pattern: {
        value: cdktf.stringToHclTerraform(this._liveTailPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_name: {
        value: cdktf.stringToHclTerraform(this._teamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_series_retention: {
        value: cdktf.numberToHclTerraform(this._timeSeriesRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrl_transformation: {
        value: cdktf.stringToHclTerraform(this._vrlTransformation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warehouse_source_group_id: {
        value: cdktf.numberToHclTerraform(this._warehouseSourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_bucket: {
        value: warehouseSourceCustomBucketToHclTerraform(this._customBucket.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WarehouseSourceCustomBucketList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
