// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v6_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbSiteSlbDevVipServerVipServerV6StatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * DeviceName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v6_stats#device_name DataThunderGslbSiteSlbDevVipServerVipServerV6Stats#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v6_stats#id DataThunderGslbSiteSlbDevVipServerVipServerV6Stats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify IP address (IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v6_stats#ipv6 DataThunderGslbSiteSlbDevVipServerVipServerV6Stats#ipv6}
  */
  readonly ipv6: string;
  /**
  * SiteName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v6_stats#site_name DataThunderGslbSiteSlbDevVipServerVipServerV6Stats#site_name}
  */
  readonly siteName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v6_stats#stats DataThunderGslbSiteSlbDevVipServerVipServerV6Stats#stats}
  */
  readonly stats?: DataThunderGslbSiteSlbDevVipServerVipServerV6StatsStats;
}
export interface DataThunderGslbSiteSlbDevVipServerVipServerV6StatsStats {
  /**
  * Number of times the service-ip was selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v6_stats#dev_vip_hits DataThunderGslbSiteSlbDevVipServerVipServerV6Stats#dev_vip_hits}
  */
  readonly devVipHits?: number;
  /**
  * Recent hits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v6_stats#dev_vip_recent DataThunderGslbSiteSlbDevVipServerVipServerV6Stats#dev_vip_recent}
  */
  readonly devVipRecent?: number;
}

export function dataThunderGslbSiteSlbDevVipServerVipServerV6StatsStatsToTerraform(struct?: DataThunderGslbSiteSlbDevVipServerVipServerV6StatsStatsOutputReference | DataThunderGslbSiteSlbDevVipServerVipServerV6StatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_vip_hits: cdktf.numberToTerraform(struct!.devVipHits),
    dev_vip_recent: cdktf.numberToTerraform(struct!.devVipRecent),
  }
}


export function dataThunderGslbSiteSlbDevVipServerVipServerV6StatsStatsToHclTerraform(struct?: DataThunderGslbSiteSlbDevVipServerVipServerV6StatsStatsOutputReference | DataThunderGslbSiteSlbDevVipServerVipServerV6StatsStats): any {
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

export class DataThunderGslbSiteSlbDevVipServerVipServerV6StatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteSlbDevVipServerVipServerV6StatsStats | undefined {
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

  public set internalValue(value: DataThunderGslbSiteSlbDevVipServerVipServerV6StatsStats | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v6_stats thunder_gslb_site_slb_dev_vip_server_vip_server_v6_stats}
*/
export class DataThunderGslbSiteSlbDevVipServerVipServerV6Stats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_site_slb_dev_vip_server_vip_server_v6_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbSiteSlbDevVipServerVipServerV6Stats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbSiteSlbDevVipServerVipServerV6Stats to import
  * @param importFromId The id of the existing DataThunderGslbSiteSlbDevVipServerVipServerV6Stats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v6_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbSiteSlbDevVipServerVipServerV6Stats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_site_slb_dev_vip_server_vip_server_v6_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_site_slb_dev_vip_server_vip_server_v6_stats thunder_gslb_site_slb_dev_vip_server_vip_server_v6_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbSiteSlbDevVipServerVipServerV6StatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbSiteSlbDevVipServerVipServerV6StatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_site_slb_dev_vip_server_vip_server_v6_stats',
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
    this._ipv6 = config.ipv6;
    this._siteName = config.siteName;
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

  // ipv6 - computed: false, optional: false, required: true
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbSiteSlbDevVipServerVipServerV6StatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbSiteSlbDevVipServerVipServerV6StatsStats) {
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
      ipv6: cdktf.stringToTerraform(this._ipv6),
      site_name: cdktf.stringToTerraform(this._siteName),
      stats: dataThunderGslbSiteSlbDevVipServerVipServerV6StatsStatsToTerraform(this._stats.internalValue),
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
      ipv6: {
        value: cdktf.stringToHclTerraform(this._ipv6),
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
      stats: {
        value: dataThunderGslbSiteSlbDevVipServerVipServerV6StatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbSiteSlbDevVipServerVipServerV6StatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
