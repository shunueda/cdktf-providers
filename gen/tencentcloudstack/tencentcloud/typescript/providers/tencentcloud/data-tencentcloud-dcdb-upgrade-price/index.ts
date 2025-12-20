// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDcdbUpgradePriceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Price unit. Valid values: `pent` (cent), `microPent` (microcent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#amount_unit DataTencentcloudDcdbUpgradePrice#amount_unit}
  */
  readonly amountUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#id DataTencentcloudDcdbUpgradePrice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#instance_id DataTencentcloudDcdbUpgradePrice#instance_id}
  */
  readonly instanceId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#result_output_file DataTencentcloudDcdbUpgradePrice#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Upgrade type, ADD: add new shard, EXPAND: upgrade the existing shard, SPLIT: split existing shard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#upgrade_type DataTencentcloudDcdbUpgradePrice#upgrade_type}
  */
  readonly upgradeType: string;
  /**
  * add_shard_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#add_shard_config DataTencentcloudDcdbUpgradePrice#add_shard_config}
  */
  readonly addShardConfig?: DataTencentcloudDcdbUpgradePriceAddShardConfig;
  /**
  * expand_shard_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#expand_shard_config DataTencentcloudDcdbUpgradePrice#expand_shard_config}
  */
  readonly expandShardConfig?: DataTencentcloudDcdbUpgradePriceExpandShardConfig;
  /**
  * split_shard_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#split_shard_config DataTencentcloudDcdbUpgradePrice#split_shard_config}
  */
  readonly splitShardConfig?: DataTencentcloudDcdbUpgradePriceSplitShardConfig;
}
export interface DataTencentcloudDcdbUpgradePriceAddShardConfig {
  /**
  * The number of new shards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#shard_count DataTencentcloudDcdbUpgradePrice#shard_count}
  */
  readonly shardCount: number;
  /**
  * Shard memory size in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#shard_memory DataTencentcloudDcdbUpgradePrice#shard_memory}
  */
  readonly shardMemory: number;
  /**
  * Shard storage capacity in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#shard_storage DataTencentcloudDcdbUpgradePrice#shard_storage}
  */
  readonly shardStorage: number;
}

export function dataTencentcloudDcdbUpgradePriceAddShardConfigToTerraform(struct?: DataTencentcloudDcdbUpgradePriceAddShardConfigOutputReference | DataTencentcloudDcdbUpgradePriceAddShardConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shard_count: cdktf.numberToTerraform(struct!.shardCount),
    shard_memory: cdktf.numberToTerraform(struct!.shardMemory),
    shard_storage: cdktf.numberToTerraform(struct!.shardStorage),
  }
}


export function dataTencentcloudDcdbUpgradePriceAddShardConfigToHclTerraform(struct?: DataTencentcloudDcdbUpgradePriceAddShardConfigOutputReference | DataTencentcloudDcdbUpgradePriceAddShardConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shard_count: {
      value: cdktf.numberToHclTerraform(struct!.shardCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shard_memory: {
      value: cdktf.numberToHclTerraform(struct!.shardMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shard_storage: {
      value: cdktf.numberToHclTerraform(struct!.shardStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudDcdbUpgradePriceAddShardConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTencentcloudDcdbUpgradePriceAddShardConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shardCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardCount = this._shardCount;
    }
    if (this._shardMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardMemory = this._shardMemory;
    }
    if (this._shardStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardStorage = this._shardStorage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDcdbUpgradePriceAddShardConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shardCount = undefined;
      this._shardMemory = undefined;
      this._shardStorage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shardCount = value.shardCount;
      this._shardMemory = value.shardMemory;
      this._shardStorage = value.shardStorage;
    }
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
}
export interface DataTencentcloudDcdbUpgradePriceExpandShardConfig {
  /**
  * List of shard ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#shard_instance_ids DataTencentcloudDcdbUpgradePrice#shard_instance_ids}
  */
  readonly shardInstanceIds: string[];
  /**
  * Shard memory size in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#shard_memory DataTencentcloudDcdbUpgradePrice#shard_memory}
  */
  readonly shardMemory: number;
  /**
  * Shard node count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#shard_node_count DataTencentcloudDcdbUpgradePrice#shard_node_count}
  */
  readonly shardNodeCount?: number;
  /**
  * Shard storage capacity in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#shard_storage DataTencentcloudDcdbUpgradePrice#shard_storage}
  */
  readonly shardStorage: number;
}

export function dataTencentcloudDcdbUpgradePriceExpandShardConfigToTerraform(struct?: DataTencentcloudDcdbUpgradePriceExpandShardConfigOutputReference | DataTencentcloudDcdbUpgradePriceExpandShardConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shard_instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shardInstanceIds),
    shard_memory: cdktf.numberToTerraform(struct!.shardMemory),
    shard_node_count: cdktf.numberToTerraform(struct!.shardNodeCount),
    shard_storage: cdktf.numberToTerraform(struct!.shardStorage),
  }
}


export function dataTencentcloudDcdbUpgradePriceExpandShardConfigToHclTerraform(struct?: DataTencentcloudDcdbUpgradePriceExpandShardConfigOutputReference | DataTencentcloudDcdbUpgradePriceExpandShardConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shard_instance_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shardInstanceIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    shard_memory: {
      value: cdktf.numberToHclTerraform(struct!.shardMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shard_node_count: {
      value: cdktf.numberToHclTerraform(struct!.shardNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shard_storage: {
      value: cdktf.numberToHclTerraform(struct!.shardStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudDcdbUpgradePriceExpandShardConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTencentcloudDcdbUpgradePriceExpandShardConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shardInstanceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardInstanceIds = this._shardInstanceIds;
    }
    if (this._shardMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardMemory = this._shardMemory;
    }
    if (this._shardNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardNodeCount = this._shardNodeCount;
    }
    if (this._shardStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardStorage = this._shardStorage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDcdbUpgradePriceExpandShardConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shardInstanceIds = undefined;
      this._shardMemory = undefined;
      this._shardNodeCount = undefined;
      this._shardStorage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shardInstanceIds = value.shardInstanceIds;
      this._shardMemory = value.shardMemory;
      this._shardNodeCount = value.shardNodeCount;
      this._shardStorage = value.shardStorage;
    }
  }

  // shard_instance_ids - computed: false, optional: false, required: true
  private _shardInstanceIds?: string[]; 
  public get shardInstanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('shard_instance_ids'));
  }
  public set shardInstanceIds(value: string[]) {
    this._shardInstanceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardInstanceIdsInput() {
    return this._shardInstanceIds;
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

  // shard_node_count - computed: false, optional: true, required: false
  private _shardNodeCount?: number; 
  public get shardNodeCount() {
    return this.getNumberAttribute('shard_node_count');
  }
  public set shardNodeCount(value: number) {
    this._shardNodeCount = value;
  }
  public resetShardNodeCount() {
    this._shardNodeCount = undefined;
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
}
export interface DataTencentcloudDcdbUpgradePriceSplitShardConfig {
  /**
  * List of shard ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#shard_instance_ids DataTencentcloudDcdbUpgradePrice#shard_instance_ids}
  */
  readonly shardInstanceIds: string[];
  /**
  * Shard memory size in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#shard_memory DataTencentcloudDcdbUpgradePrice#shard_memory}
  */
  readonly shardMemory: number;
  /**
  * Shard storage capacity in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#shard_storage DataTencentcloudDcdbUpgradePrice#shard_storage}
  */
  readonly shardStorage: number;
  /**
  * Data split ratio, fixed at 50%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#split_rate DataTencentcloudDcdbUpgradePrice#split_rate}
  */
  readonly splitRate: number;
}

export function dataTencentcloudDcdbUpgradePriceSplitShardConfigToTerraform(struct?: DataTencentcloudDcdbUpgradePriceSplitShardConfigOutputReference | DataTencentcloudDcdbUpgradePriceSplitShardConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shard_instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shardInstanceIds),
    shard_memory: cdktf.numberToTerraform(struct!.shardMemory),
    shard_storage: cdktf.numberToTerraform(struct!.shardStorage),
    split_rate: cdktf.numberToTerraform(struct!.splitRate),
  }
}


export function dataTencentcloudDcdbUpgradePriceSplitShardConfigToHclTerraform(struct?: DataTencentcloudDcdbUpgradePriceSplitShardConfigOutputReference | DataTencentcloudDcdbUpgradePriceSplitShardConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shard_instance_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shardInstanceIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    shard_memory: {
      value: cdktf.numberToHclTerraform(struct!.shardMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shard_storage: {
      value: cdktf.numberToHclTerraform(struct!.shardStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    split_rate: {
      value: cdktf.numberToHclTerraform(struct!.splitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudDcdbUpgradePriceSplitShardConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTencentcloudDcdbUpgradePriceSplitShardConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shardInstanceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardInstanceIds = this._shardInstanceIds;
    }
    if (this._shardMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardMemory = this._shardMemory;
    }
    if (this._shardStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardStorage = this._shardStorage;
    }
    if (this._splitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitRate = this._splitRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDcdbUpgradePriceSplitShardConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shardInstanceIds = undefined;
      this._shardMemory = undefined;
      this._shardStorage = undefined;
      this._splitRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shardInstanceIds = value.shardInstanceIds;
      this._shardMemory = value.shardMemory;
      this._shardStorage = value.shardStorage;
      this._splitRate = value.splitRate;
    }
  }

  // shard_instance_ids - computed: false, optional: false, required: true
  private _shardInstanceIds?: string[]; 
  public get shardInstanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('shard_instance_ids'));
  }
  public set shardInstanceIds(value: string[]) {
    this._shardInstanceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardInstanceIdsInput() {
    return this._shardInstanceIds;
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

  // split_rate - computed: false, optional: false, required: true
  private _splitRate?: number; 
  public get splitRate() {
    return this.getNumberAttribute('split_rate');
  }
  public set splitRate(value: number) {
    this._splitRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splitRateInput() {
    return this._splitRate;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price tencentcloud_dcdb_upgrade_price}
*/
export class DataTencentcloudDcdbUpgradePrice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dcdb_upgrade_price";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDcdbUpgradePrice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDcdbUpgradePrice to import
  * @param importFromId The id of the existing DataTencentcloudDcdbUpgradePrice that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDcdbUpgradePrice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dcdb_upgrade_price", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/dcdb_upgrade_price tencentcloud_dcdb_upgrade_price} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDcdbUpgradePriceConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDcdbUpgradePriceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dcdb_upgrade_price',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._instanceId = config.instanceId;
    this._resultOutputFile = config.resultOutputFile;
    this._upgradeType = config.upgradeType;
    this._addShardConfig.internalValue = config.addShardConfig;
    this._expandShardConfig.internalValue = config.expandShardConfig;
    this._splitShardConfig.internalValue = config.splitShardConfig;
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

  // formula - computed: true, optional: false, required: false
  public get formula() {
    return this.getStringAttribute('formula');
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // original_price - computed: true, optional: false, required: false
  public get originalPrice() {
    return this.getNumberAttribute('original_price');
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

  // upgrade_type - computed: false, optional: false, required: true
  private _upgradeType?: string; 
  public get upgradeType() {
    return this.getStringAttribute('upgrade_type');
  }
  public set upgradeType(value: string) {
    this._upgradeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTypeInput() {
    return this._upgradeType;
  }

  // add_shard_config - computed: false, optional: true, required: false
  private _addShardConfig = new DataTencentcloudDcdbUpgradePriceAddShardConfigOutputReference(this, "add_shard_config");
  public get addShardConfig() {
    return this._addShardConfig;
  }
  public putAddShardConfig(value: DataTencentcloudDcdbUpgradePriceAddShardConfig) {
    this._addShardConfig.internalValue = value;
  }
  public resetAddShardConfig() {
    this._addShardConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addShardConfigInput() {
    return this._addShardConfig.internalValue;
  }

  // expand_shard_config - computed: false, optional: true, required: false
  private _expandShardConfig = new DataTencentcloudDcdbUpgradePriceExpandShardConfigOutputReference(this, "expand_shard_config");
  public get expandShardConfig() {
    return this._expandShardConfig;
  }
  public putExpandShardConfig(value: DataTencentcloudDcdbUpgradePriceExpandShardConfig) {
    this._expandShardConfig.internalValue = value;
  }
  public resetExpandShardConfig() {
    this._expandShardConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandShardConfigInput() {
    return this._expandShardConfig.internalValue;
  }

  // split_shard_config - computed: false, optional: true, required: false
  private _splitShardConfig = new DataTencentcloudDcdbUpgradePriceSplitShardConfigOutputReference(this, "split_shard_config");
  public get splitShardConfig() {
    return this._splitShardConfig;
  }
  public putSplitShardConfig(value: DataTencentcloudDcdbUpgradePriceSplitShardConfig) {
    this._splitShardConfig.internalValue = value;
  }
  public resetSplitShardConfig() {
    this._splitShardConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitShardConfigInput() {
    return this._splitShardConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amount_unit: cdktf.stringToTerraform(this._amountUnit),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      upgrade_type: cdktf.stringToTerraform(this._upgradeType),
      add_shard_config: dataTencentcloudDcdbUpgradePriceAddShardConfigToTerraform(this._addShardConfig.internalValue),
      expand_shard_config: dataTencentcloudDcdbUpgradePriceExpandShardConfigToTerraform(this._expandShardConfig.internalValue),
      split_shard_config: dataTencentcloudDcdbUpgradePriceSplitShardConfigToTerraform(this._splitShardConfig.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_type: {
        value: cdktf.stringToHclTerraform(this._upgradeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_shard_config: {
        value: dataTencentcloudDcdbUpgradePriceAddShardConfigToHclTerraform(this._addShardConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudDcdbUpgradePriceAddShardConfigList",
      },
      expand_shard_config: {
        value: dataTencentcloudDcdbUpgradePriceExpandShardConfigToHclTerraform(this._expandShardConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudDcdbUpgradePriceExpandShardConfigList",
      },
      split_shard_config: {
        value: dataTencentcloudDcdbUpgradePriceSplitShardConfigToHclTerraform(this._splitShardConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudDcdbUpgradePriceSplitShardConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
