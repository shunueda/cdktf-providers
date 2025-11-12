// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/storagepool_tier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleStoragepoolTierConfig extends cdktf.TerraformMetaArguments {
}
export interface DataPowerscaleStoragepoolTierStoragepoolTiersUsage {
}

export function dataPowerscaleStoragepoolTierStoragepoolTiersUsageToTerraform(struct?: DataPowerscaleStoragepoolTierStoragepoolTiersUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleStoragepoolTierStoragepoolTiersUsageToHclTerraform(struct?: DataPowerscaleStoragepoolTierStoragepoolTiersUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleStoragepoolTierStoragepoolTiersUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleStoragepoolTierStoragepoolTiersUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleStoragepoolTierStoragepoolTiersUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avail_bytes - computed: true, optional: false, required: false
  public get availBytes() {
    return this.getStringAttribute('avail_bytes');
  }

  // avail_hdd_bytes - computed: true, optional: false, required: false
  public get availHddBytes() {
    return this.getStringAttribute('avail_hdd_bytes');
  }

  // avail_ssd_bytes - computed: true, optional: false, required: false
  public get availSsdBytes() {
    return this.getStringAttribute('avail_ssd_bytes');
  }

  // balanced - computed: true, optional: false, required: false
  public get balanced() {
    return this.getBooleanAttribute('balanced');
  }

  // free_bytes - computed: true, optional: false, required: false
  public get freeBytes() {
    return this.getStringAttribute('free_bytes');
  }

  // free_hdd_bytes - computed: true, optional: false, required: false
  public get freeHddBytes() {
    return this.getStringAttribute('free_hdd_bytes');
  }

  // free_ssd_bytes - computed: true, optional: false, required: false
  public get freeSsdBytes() {
    return this.getStringAttribute('free_ssd_bytes');
  }

  // pct_used - computed: true, optional: false, required: false
  public get pctUsed() {
    return this.getStringAttribute('pct_used');
  }

  // pct_used_hdd - computed: true, optional: false, required: false
  public get pctUsedHdd() {
    return this.getStringAttribute('pct_used_hdd');
  }

  // pct_used_ssd - computed: true, optional: false, required: false
  public get pctUsedSsd() {
    return this.getStringAttribute('pct_used_ssd');
  }

  // total_bytes - computed: true, optional: false, required: false
  public get totalBytes() {
    return this.getStringAttribute('total_bytes');
  }

  // total_hdd_bytes - computed: true, optional: false, required: false
  public get totalHddBytes() {
    return this.getStringAttribute('total_hdd_bytes');
  }

  // total_ssd_bytes - computed: true, optional: false, required: false
  public get totalSsdBytes() {
    return this.getStringAttribute('total_ssd_bytes');
  }

  // usable_bytes - computed: true, optional: false, required: false
  public get usableBytes() {
    return this.getStringAttribute('usable_bytes');
  }

  // usable_hdd_bytes - computed: true, optional: false, required: false
  public get usableHddBytes() {
    return this.getStringAttribute('usable_hdd_bytes');
  }

  // usable_ssd_bytes - computed: true, optional: false, required: false
  public get usableSsdBytes() {
    return this.getStringAttribute('usable_ssd_bytes');
  }

  // used_bytes - computed: true, optional: false, required: false
  public get usedBytes() {
    return this.getStringAttribute('used_bytes');
  }

  // used_hdd_bytes - computed: true, optional: false, required: false
  public get usedHddBytes() {
    return this.getStringAttribute('used_hdd_bytes');
  }

  // used_ssd_bytes - computed: true, optional: false, required: false
  public get usedSsdBytes() {
    return this.getStringAttribute('used_ssd_bytes');
  }

  // virtual_hot_spare_bytes - computed: true, optional: false, required: false
  public get virtualHotSpareBytes() {
    return this.getStringAttribute('virtual_hot_spare_bytes');
  }
}
export interface DataPowerscaleStoragepoolTierStoragepoolTiers {
}

export function dataPowerscaleStoragepoolTierStoragepoolTiersToTerraform(struct?: DataPowerscaleStoragepoolTierStoragepoolTiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleStoragepoolTierStoragepoolTiersToHclTerraform(struct?: DataPowerscaleStoragepoolTierStoragepoolTiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleStoragepoolTierStoragepoolTiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleStoragepoolTierStoragepoolTiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleStoragepoolTierStoragepoolTiers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // children - computed: true, optional: false, required: false
  public get children() {
    return this.getListAttribute('children');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lnns - computed: true, optional: false, required: false
  public get lnns() {
    return this.getNumberListAttribute('lnns');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // transfer_limit_pct - computed: true, optional: false, required: false
  public get transferLimitPct() {
    return this.getNumberAttribute('transfer_limit_pct');
  }

  // transfer_limit_state - computed: true, optional: false, required: false
  public get transferLimitState() {
    return this.getStringAttribute('transfer_limit_state');
  }

  // usage - computed: true, optional: false, required: false
  private _usage = new DataPowerscaleStoragepoolTierStoragepoolTiersUsageOutputReference(this, "usage");
  public get usage() {
    return this._usage;
  }
}

export class DataPowerscaleStoragepoolTierStoragepoolTiersList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleStoragepoolTierStoragepoolTiersOutputReference {
    return new DataPowerscaleStoragepoolTierStoragepoolTiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/storagepool_tier powerscale_storagepool_tier}
*/
export class DataPowerscaleStoragepoolTier extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_storagepool_tier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleStoragepoolTier resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleStoragepoolTier to import
  * @param importFromId The id of the existing DataPowerscaleStoragepoolTier that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/storagepool_tier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleStoragepoolTier to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_storagepool_tier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/storagepool_tier powerscale_storagepool_tier} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleStoragepoolTierConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleStoragepoolTierConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_storagepool_tier',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // storagepool_tiers - computed: true, optional: false, required: false
  private _storagepoolTiers = new DataPowerscaleStoragepoolTierStoragepoolTiersList(this, "storagepool_tiers", false);
  public get storagepoolTiers() {
    return this._storagepoolTiers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
