// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/dcdb_price
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDcdbPriceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Price unit. Valid values: `pent` (cent), `microPent` (microcent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/dcdb_price#amount_unit DataTencentcloudDcdbPrice#amount_unit}
  */
  readonly amountUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/dcdb_price#id DataTencentcloudDcdbPrice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The count of instances wants to buy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/dcdb_price#instance_count DataTencentcloudDcdbPrice#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Billing type. Valid values: `postpaid` (pay-as-you-go), `prepaid` (monthly subscription).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/dcdb_price#paymode DataTencentcloudDcdbPrice#paymode}
  */
  readonly paymode?: string;
  /**
  * Purchase period in months.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/dcdb_price#period DataTencentcloudDcdbPrice#period}
  */
  readonly period: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/dcdb_price#result_output_file DataTencentcloudDcdbPrice#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Number of instance shards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/dcdb_price#shard_count DataTencentcloudDcdbPrice#shard_count}
  */
  readonly shardCount: number;
  /**
  * Shard memory size in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/dcdb_price#shard_memory DataTencentcloudDcdbPrice#shard_memory}
  */
  readonly shardMemory: number;
  /**
  * Number of instance shard nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/dcdb_price#shard_node_count DataTencentcloudDcdbPrice#shard_node_count}
  */
  readonly shardNodeCount: number;
  /**
  * Shard storage capacity in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/dcdb_price#shard_storage DataTencentcloudDcdbPrice#shard_storage}
  */
  readonly shardStorage: number;
  /**
  * AZ ID of the purchased instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/dcdb_price#zone DataTencentcloudDcdbPrice#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/dcdb_price tencentcloud_dcdb_price}
*/
export class DataTencentcloudDcdbPrice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dcdb_price";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDcdbPrice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDcdbPrice to import
  * @param importFromId The id of the existing DataTencentcloudDcdbPrice that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/dcdb_price#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDcdbPrice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dcdb_price", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/dcdb_price tencentcloud_dcdb_price} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDcdbPriceConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDcdbPriceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dcdb_price',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._amountUnit = config.amountUnit;
    this._id = config.id;
    this._instanceCount = config.instanceCount;
    this._paymode = config.paymode;
    this._period = config.period;
    this._resultOutputFile = config.resultOutputFile;
    this._shardCount = config.shardCount;
    this._shardMemory = config.shardMemory;
    this._shardNodeCount = config.shardNodeCount;
    this._shardStorage = config.shardStorage;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amount_unit - computed: false, optional: true, required: false
  private _amountUnit?: string; 
  public get amountUnit() {
    return this.getStringAttribute('amount_unit');
  }
  public set amountUnit(value: string) {
    this._amountUnit = value;
  }
  public resetAmountUnit() {
    this._amountUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountUnitInput() {
    return this._amountUnit;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // original_price - computed: true, optional: false, required: false
  public get originalPrice() {
    return this.getNumberAttribute('original_price');
  }

  // paymode - computed: false, optional: true, required: false
  private _paymode?: string; 
  public get paymode() {
    return this.getStringAttribute('paymode');
  }
  public set paymode(value: string) {
    this._paymode = value;
  }
  public resetPaymode() {
    this._paymode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymodeInput() {
    return this._paymode;
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // price - computed: true, optional: false, required: false
  public get price() {
    return this.getNumberAttribute('price');
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // shard_count - computed: false, optional: false, required: true
  private _shardCount?: number; 
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount;
  }

  // shard_memory - computed: false, optional: false, required: true
  private _shardMemory?: number; 
  public get shardMemory() {
    return this.getNumberAttribute('shard_memory');
  }
  public set shardMemory(value: number) {
    this._shardMemory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardMemoryInput() {
    return this._shardMemory;
  }

  // shard_node_count - computed: false, optional: false, required: true
  private _shardNodeCount?: number; 
  public get shardNodeCount() {
    return this.getNumberAttribute('shard_node_count');
  }
  public set shardNodeCount(value: number) {
    this._shardNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardNodeCountInput() {
    return this._shardNodeCount;
  }

  // shard_storage - computed: false, optional: false, required: true
  private _shardStorage?: number; 
  public get shardStorage() {
    return this.getNumberAttribute('shard_storage');
  }
  public set shardStorage(value: number) {
    this._shardStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardStorageInput() {
    return this._shardStorage;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amount_unit: cdktf.stringToTerraform(this._amountUnit),
      id: cdktf.stringToTerraform(this._id),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      paymode: cdktf.stringToTerraform(this._paymode),
      period: cdktf.numberToTerraform(this._period),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      shard_memory: cdktf.numberToTerraform(this._shardMemory),
      shard_node_count: cdktf.numberToTerraform(this._shardNodeCount),
      shard_storage: cdktf.numberToTerraform(this._shardStorage),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amount_unit: {
        value: cdktf.stringToHclTerraform(this._amountUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_count: {
        value: cdktf.numberToHclTerraform(this._instanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paymode: {
        value: cdktf.stringToHclTerraform(this._paymode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shard_count: {
        value: cdktf.numberToHclTerraform(this._shardCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shard_memory: {
        value: cdktf.numberToHclTerraform(this._shardMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shard_node_count: {
        value: cdktf.numberToHclTerraform(this._shardNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shard_storage: {
        value: cdktf.numberToHclTerraform(this._shardStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
