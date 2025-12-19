// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_dns_caa_record_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbZoneServiceDnsCaaRecordStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Issuer Critical Flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_dns_caa_record_stats#critical_flag DataThunderGslbZoneServiceDnsCaaRecordStats#critical_flag}
  */
  readonly criticalFlag: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_dns_caa_record_stats#id DataThunderGslbZoneServiceDnsCaaRecordStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify other property tags, only allowed lowercase alphanumeric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_dns_caa_record_stats#property_tag DataThunderGslbZoneServiceDnsCaaRecordStats#property_tag}
  */
  readonly propertyTag: string;
  /**
  * Specify the Issuer Domain Name or a URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_dns_caa_record_stats#rdata DataThunderGslbZoneServiceDnsCaaRecordStats#rdata}
  */
  readonly rdata: string;
  /**
  * ServiceName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_dns_caa_record_stats#service_name DataThunderGslbZoneServiceDnsCaaRecordStats#service_name}
  */
  readonly serviceName: string;
  /**
  * ServicePort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_dns_caa_record_stats#service_port DataThunderGslbZoneServiceDnsCaaRecordStats#service_port}
  */
  readonly servicePort: string;
  /**
  * Zone_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_dns_caa_record_stats#zone_name DataThunderGslbZoneServiceDnsCaaRecordStats#zone_name}
  */
  readonly zoneName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_dns_caa_record_stats#stats DataThunderGslbZoneServiceDnsCaaRecordStats#stats}
  */
  readonly stats?: DataThunderGslbZoneServiceDnsCaaRecordStatsStats;
}
export interface DataThunderGslbZoneServiceDnsCaaRecordStatsStats {
  /**
  * Number of times the CAA has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_dns_caa_record_stats#hits DataThunderGslbZoneServiceDnsCaaRecordStats#hits}
  */
  readonly hits?: number;
}

export function dataThunderGslbZoneServiceDnsCaaRecordStatsStatsToTerraform(struct?: DataThunderGslbZoneServiceDnsCaaRecordStatsStatsOutputReference | DataThunderGslbZoneServiceDnsCaaRecordStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
  }
}


export function dataThunderGslbZoneServiceDnsCaaRecordStatsStatsToHclTerraform(struct?: DataThunderGslbZoneServiceDnsCaaRecordStatsStatsOutputReference | DataThunderGslbZoneServiceDnsCaaRecordStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneServiceDnsCaaRecordStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneServiceDnsCaaRecordStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneServiceDnsCaaRecordStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hits = value.hits;
    }
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_dns_caa_record_stats thunder_gslb_zone_service_dns_caa_record_stats}
*/
export class DataThunderGslbZoneServiceDnsCaaRecordStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_zone_service_dns_caa_record_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbZoneServiceDnsCaaRecordStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbZoneServiceDnsCaaRecordStats to import
  * @param importFromId The id of the existing DataThunderGslbZoneServiceDnsCaaRecordStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_dns_caa_record_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbZoneServiceDnsCaaRecordStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_zone_service_dns_caa_record_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_service_dns_caa_record_stats thunder_gslb_zone_service_dns_caa_record_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbZoneServiceDnsCaaRecordStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbZoneServiceDnsCaaRecordStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_zone_service_dns_caa_record_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._criticalFlag = config.criticalFlag;
    this._id = config.id;
    this._propertyTag = config.propertyTag;
    this._rdata = config.rdata;
    this._serviceName = config.serviceName;
    this._servicePort = config.servicePort;
    this._zoneName = config.zoneName;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // critical_flag - computed: false, optional: false, required: true
  private _criticalFlag?: number; 
  public get criticalFlag() {
    return this.getNumberAttribute('critical_flag');
  }
  public set criticalFlag(value: number) {
    this._criticalFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalFlagInput() {
    return this._criticalFlag;
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

  // property_tag - computed: false, optional: false, required: true
  private _propertyTag?: string; 
  public get propertyTag() {
    return this.getStringAttribute('property_tag');
  }
  public set propertyTag(value: string) {
    this._propertyTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTagInput() {
    return this._propertyTag;
  }

  // rdata - computed: false, optional: false, required: true
  private _rdata?: string; 
  public get rdata() {
    return this.getStringAttribute('rdata');
  }
  public set rdata(value: string) {
    this._rdata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataInput() {
    return this._rdata;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_port - computed: false, optional: false, required: true
  private _servicePort?: string; 
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
  public set servicePort(value: string) {
    this._servicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbZoneServiceDnsCaaRecordStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneServiceDnsCaaRecordStatsStats) {
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
      critical_flag: cdktf.numberToTerraform(this._criticalFlag),
      id: cdktf.stringToTerraform(this._id),
      property_tag: cdktf.stringToTerraform(this._propertyTag),
      rdata: cdktf.stringToTerraform(this._rdata),
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_port: cdktf.stringToTerraform(this._servicePort),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      stats: dataThunderGslbZoneServiceDnsCaaRecordStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      critical_flag: {
        value: cdktf.numberToHclTerraform(this._criticalFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_tag: {
        value: cdktf.stringToHclTerraform(this._propertyTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdata: {
        value: cdktf.stringToHclTerraform(this._rdata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_port: {
        value: cdktf.stringToHclTerraform(this._servicePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderGslbZoneServiceDnsCaaRecordStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneServiceDnsCaaRecordStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
