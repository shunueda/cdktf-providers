// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbSiteSlbDevVipServerVipServerNameStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * DeviceName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_stats#device_name DataThunderGslbSiteSlbDevVipServerVipServerNameStats#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_stats#id DataThunderGslbSiteSlbDevVipServerVipServerNameStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SiteName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_stats#site_name DataThunderGslbSiteSlbDevVipServerVipServerNameStats#site_name}
  */
  readonly siteName: string;
  /**
  * Specify a VIP name for the SLB device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_stats#vip_name DataThunderGslbSiteSlbDevVipServerVipServerNameStats#vip_name}
  */
  readonly vipName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_stats#stats DataThunderGslbSiteSlbDevVipServerVipServerNameStats#stats}
  */
  readonly stats?: DataThunderGslbSiteSlbDevVipServerVipServerNameStatsStats;
}
export interface DataThunderGslbSiteSlbDevVipServerVipServerNameStatsStats {
  /**
  * Number of times the service-ip was selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_stats#dev_vip_hits DataThunderGslbSiteSlbDevVipServerVipServerNameStats#dev_vip_hits}
  */
  readonly devVipHits?: number;
  /**
  * Recent hits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_stats#dev_vip_recent DataThunderGslbSiteSlbDevVipServerVipServerNameStats#dev_vip_recent}
  */
  readonly devVipRecent?: number;
}

export function dataThunderGslbSiteSlbDevVipServerVipServerNameStatsStatsToTerraform(struct?: DataThunderGslbSiteSlbDevVipServerVipServerNameStatsStatsOutputReference | DataThunderGslbSiteSlbDevVipServerVipServerNameStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_vip_hits: cdktf.numberToTerraform(struct!.devVipHits),
    dev_vip_recent: cdktf.numberToTerraform(struct!.devVipRecent),
  }
}


export function dataThunderGslbSiteSlbDevVipServerVipServerNameStatsStatsToHclTerraform(struct?: DataThunderGslbSiteSlbDevVipServerVipServerNameStatsStatsOutputReference | DataThunderGslbSiteSlbDevVipServerVipServerNameStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev_vip_hits: {
      value: cdktf.numberToHclTerraform(struct!.devVipHits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_vip_recent: {
      value: cdktf.numberToHclTerraform(struct!.devVipRecent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevVipServerVipServerNameStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteSlbDevVipServerVipServerNameStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devVipHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipHits = this._devVipHits;
    }
    if (this._devVipRecent !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipRecent = this._devVipRecent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevVipServerVipServerNameStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._devVipHits = undefined;
      this._devVipRecent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._devVipHits = value.devVipHits;
      this._devVipRecent = value.devVipRecent;
    }
  }

  // dev_vip_hits - computed: false, optional: true, required: false
  private _devVipHits?: number; 
  public get devVipHits() {
    return this.getNumberAttribute('dev_vip_hits');
  }
  public set devVipHits(value: number) {
    this._devVipHits = value;
  }
  public resetDevVipHits() {
    this._devVipHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipHitsInput() {
    return this._devVipHits;
  }

  // dev_vip_recent - computed: false, optional: true, required: false
  private _devVipRecent?: number; 
  public get devVipRecent() {
    return this.getNumberAttribute('dev_vip_recent');
  }
  public set devVipRecent(value: number) {
    this._devVipRecent = value;
  }
  public resetDevVipRecent() {
    this._devVipRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipRecentInput() {
    return this._devVipRecent;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_stats thunder_gslb_site_slb_dev_vip_server_vip_server_name_stats}
*/
export class DataThunderGslbSiteSlbDevVipServerVipServerNameStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_site_slb_dev_vip_server_vip_server_name_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbSiteSlbDevVipServerVipServerNameStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbSiteSlbDevVipServerVipServerNameStats to import
  * @param importFromId The id of the existing DataThunderGslbSiteSlbDevVipServerVipServerNameStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbSiteSlbDevVipServerVipServerNameStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_site_slb_dev_vip_server_vip_server_name_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_name_stats thunder_gslb_site_slb_dev_vip_server_vip_server_name_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbSiteSlbDevVipServerVipServerNameStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbSiteSlbDevVipServerVipServerNameStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_site_slb_dev_vip_server_vip_server_name_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._siteName = config.siteName;
    this._vipName = config.vipName;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // site_name - computed: false, optional: false, required: true
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }

  // vip_name - computed: false, optional: false, required: true
  private _vipName?: string; 
  public get vipName() {
    return this.getStringAttribute('vip_name');
  }
  public set vipName(value: string) {
    this._vipName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipNameInput() {
    return this._vipName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbSiteSlbDevVipServerVipServerNameStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbSiteSlbDevVipServerVipServerNameStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      site_name: cdktf.stringToTerraform(this._siteName),
      vip_name: cdktf.stringToTerraform(this._vipName),
      stats: dataThunderGslbSiteSlbDevVipServerVipServerNameStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      site_name: {
        value: cdktf.stringToHclTerraform(this._siteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_name: {
        value: cdktf.stringToHclTerraform(this._vipName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderGslbSiteSlbDevVipServerVipServerNameStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbSiteSlbDevVipServerVipServerNameStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
