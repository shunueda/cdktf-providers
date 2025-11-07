// https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/essentials_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRediscloudEssentialsPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'No replication', 'Single-zone' or 'Multi-zone'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/essentials_plan#availability DataRediscloudEssentialsPlan#availability}
  */
  readonly availability?: string;
  /**
  * The cloud provider: 'AWS', 'GCP' or 'Azure'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/essentials_plan#cloud_provider DataRediscloudEssentialsPlan#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * The plan's unique identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/essentials_plan#id DataRediscloudEssentialsPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * A convenient name for the plan. Not guaranteed to be unique, especially across provider/region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/essentials_plan#name DataRediscloudEssentialsPlan#name}
  */
  readonly name?: string;
  /**
  * The region to place databases in, format and availability dependent on cloud_provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/essentials_plan#region DataRediscloudEssentialsPlan#region}
  */
  readonly region?: string;
  /**
  * The capacity of databases created in this plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/essentials_plan#size DataRediscloudEssentialsPlan#size}
  */
  readonly size?: number;
  /**
  * The units of 'size', usually 'MB' or 'GB'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/essentials_plan#size_measurement_unit DataRediscloudEssentialsPlan#size_measurement_unit}
  */
  readonly sizeMeasurementUnit?: string;
  /**
  * Filter plans by what is available for a given subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/essentials_plan#subscription_id DataRediscloudEssentialsPlan#subscription_id}
  */
  readonly subscriptionId?: number;
  /**
  * Self-explanatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/essentials_plan#support_data_persistence DataRediscloudEssentialsPlan#support_data_persistence}
  */
  readonly supportDataPersistence?: boolean | cdktf.IResolvable;
  /**
  * Self-explanatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/essentials_plan#support_replication DataRediscloudEssentialsPlan#support_replication}
  */
  readonly supportReplication?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/essentials_plan rediscloud_essentials_plan}
*/
export class DataRediscloudEssentialsPlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_essentials_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRediscloudEssentialsPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRediscloudEssentialsPlan to import
  * @param importFromId The id of the existing DataRediscloudEssentialsPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/essentials_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRediscloudEssentialsPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_essentials_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/essentials_plan rediscloud_essentials_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRediscloudEssentialsPlanConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRediscloudEssentialsPlanConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_essentials_plan',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.7.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availability = config.availability;
    this._cloudProvider = config.cloudProvider;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._size = config.size;
    this._sizeMeasurementUnit = config.sizeMeasurementUnit;
    this._subscriptionId = config.subscriptionId;
    this._supportDataPersistence = config.supportDataPersistence;
    this._supportReplication = config.supportReplication;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability - computed: true, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // cidr_allow_rules - computed: true, optional: false, required: false
  public get cidrAllowRules() {
    return this.getNumberAttribute('cidr_allow_rules');
  }

  // cloud_provider - computed: true, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // connections - computed: true, optional: false, required: false
  public get connections() {
    return this.getStringAttribute('connections');
  }

  // customer_support - computed: true, optional: false, required: false
  public get customerSupport() {
    return this.getStringAttribute('customer_support');
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // maximum_bandwidth_in_gb - computed: true, optional: false, required: false
  public get maximumBandwidthInGb() {
    return this.getNumberAttribute('maximum_bandwidth_in_gb');
  }

  // maximum_databases - computed: true, optional: false, required: false
  public get maximumDatabases() {
    return this.getNumberAttribute('maximum_databases');
  }

  // maximum_throughput - computed: true, optional: false, required: false
  public get maximumThroughput() {
    return this.getNumberAttribute('maximum_throughput');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // price - computed: true, optional: false, required: false
  public get price() {
    return this.getNumberAttribute('price');
  }

  // price_currency - computed: true, optional: false, required: false
  public get priceCurrency() {
    return this.getStringAttribute('price_currency');
  }

  // price_period - computed: true, optional: false, required: false
  public get pricePeriod() {
    return this.getStringAttribute('price_period');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_measurement_unit - computed: true, optional: true, required: false
  private _sizeMeasurementUnit?: string; 
  public get sizeMeasurementUnit() {
    return this.getStringAttribute('size_measurement_unit');
  }
  public set sizeMeasurementUnit(value: string) {
    this._sizeMeasurementUnit = value;
  }
  public resetSizeMeasurementUnit() {
    this._sizeMeasurementUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeMeasurementUnitInput() {
    return this._sizeMeasurementUnit;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: number; 
  public get subscriptionId() {
    return this.getNumberAttribute('subscription_id');
  }
  public set subscriptionId(value: number) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // support_clustering - computed: true, optional: false, required: false
  public get supportClustering() {
    return this.getBooleanAttribute('support_clustering');
  }

  // support_data_persistence - computed: true, optional: true, required: false
  private _supportDataPersistence?: boolean | cdktf.IResolvable; 
  public get supportDataPersistence() {
    return this.getBooleanAttribute('support_data_persistence');
  }
  public set supportDataPersistence(value: boolean | cdktf.IResolvable) {
    this._supportDataPersistence = value;
  }
  public resetSupportDataPersistence() {
    this._supportDataPersistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportDataPersistenceInput() {
    return this._supportDataPersistence;
  }

  // support_instant_and_daily_backups - computed: true, optional: false, required: false
  public get supportInstantAndDailyBackups() {
    return this.getBooleanAttribute('support_instant_and_daily_backups');
  }

  // support_replication - computed: true, optional: true, required: false
  private _supportReplication?: boolean | cdktf.IResolvable; 
  public get supportReplication() {
    return this.getBooleanAttribute('support_replication');
  }
  public set supportReplication(value: boolean | cdktf.IResolvable) {
    this._supportReplication = value;
  }
  public resetSupportReplication() {
    this._supportReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportReplicationInput() {
    return this._supportReplication;
  }

  // supported_alerts - computed: true, optional: false, required: false
  public get supportedAlerts() {
    return this.getListAttribute('supported_alerts');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability: cdktf.stringToTerraform(this._availability),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      size: cdktf.numberToTerraform(this._size),
      size_measurement_unit: cdktf.stringToTerraform(this._sizeMeasurementUnit),
      subscription_id: cdktf.numberToTerraform(this._subscriptionId),
      support_data_persistence: cdktf.booleanToTerraform(this._supportDataPersistence),
      support_replication: cdktf.booleanToTerraform(this._supportReplication),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability: {
        value: cdktf.stringToHclTerraform(this._availability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size_measurement_unit: {
        value: cdktf.stringToHclTerraform(this._sizeMeasurementUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.numberToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      support_data_persistence: {
        value: cdktf.booleanToHclTerraform(this._supportDataPersistence),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      support_replication: {
        value: cdktf.booleanToHclTerraform(this._supportReplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
