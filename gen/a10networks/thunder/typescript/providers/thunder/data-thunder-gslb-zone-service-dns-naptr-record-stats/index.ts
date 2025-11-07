// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_naptr_record_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbZoneServiceDnsNaptrRecordStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the flag (e.g., a, s). Default is empty flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_naptr_record_stats#flag DataThunderGslbZoneServiceDnsNaptrRecordStats#flag}
  */
  readonly flag: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_naptr_record_stats#id DataThunderGslbZoneServiceDnsNaptrRecordStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_naptr_record_stats#name DataThunderGslbZoneServiceDnsNaptrRecordStats#name}
  */
  readonly name: string;
  /**
  * Specify the replacement or regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_naptr_record_stats#naptr_target DataThunderGslbZoneServiceDnsNaptrRecordStats#naptr_target}
  */
  readonly naptrTarget: string;
  /**
  * ServiceName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_naptr_record_stats#service_name DataThunderGslbZoneServiceDnsNaptrRecordStats#service_name}
  */
  readonly serviceName: string;
  /**
  * ServicePort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_naptr_record_stats#service_port DataThunderGslbZoneServiceDnsNaptrRecordStats#service_port}
  */
  readonly servicePort: string;
  /**
  * Specify Service and Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_naptr_record_stats#service_proto DataThunderGslbZoneServiceDnsNaptrRecordStats#service_proto}
  */
  readonly serviceProto: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_naptr_record_stats#stats DataThunderGslbZoneServiceDnsNaptrRecordStats#stats}
  */
  readonly stats?: DataThunderGslbZoneServiceDnsNaptrRecordStatsStats;
}
export interface DataThunderGslbZoneServiceDnsNaptrRecordStatsStats {
  /**
  * Number of times the NAPTR has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_naptr_record_stats#naptr_hits DataThunderGslbZoneServiceDnsNaptrRecordStats#naptr_hits}
  */
  readonly naptrHits?: number;
}

export function dataThunderGslbZoneServiceDnsNaptrRecordStatsStatsToTerraform(struct?: DataThunderGslbZoneServiceDnsNaptrRecordStatsStatsOutputReference | DataThunderGslbZoneServiceDnsNaptrRecordStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    naptr_hits: cdktf.numberToTerraform(struct!.naptrHits),
  }
}


export function dataThunderGslbZoneServiceDnsNaptrRecordStatsStatsToHclTerraform(struct?: DataThunderGslbZoneServiceDnsNaptrRecordStatsStatsOutputReference | DataThunderGslbZoneServiceDnsNaptrRecordStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    naptr_hits: {
      value: cdktf.numberToHclTerraform(struct!.naptrHits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneServiceDnsNaptrRecordStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneServiceDnsNaptrRecordStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._naptrHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.naptrHits = this._naptrHits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneServiceDnsNaptrRecordStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._naptrHits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._naptrHits = value.naptrHits;
    }
  }

  // naptr_hits - computed: false, optional: true, required: false
  private _naptrHits?: number; 
  public get naptrHits() {
    return this.getNumberAttribute('naptr_hits');
  }
  public set naptrHits(value: number) {
    this._naptrHits = value;
  }
  public resetNaptrHits() {
    this._naptrHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naptrHitsInput() {
    return this._naptrHits;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_naptr_record_stats thunder_gslb_zone_service_dns_naptr_record_stats}
*/
export class DataThunderGslbZoneServiceDnsNaptrRecordStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_zone_service_dns_naptr_record_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbZoneServiceDnsNaptrRecordStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbZoneServiceDnsNaptrRecordStats to import
  * @param importFromId The id of the existing DataThunderGslbZoneServiceDnsNaptrRecordStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_naptr_record_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbZoneServiceDnsNaptrRecordStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_zone_service_dns_naptr_record_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_naptr_record_stats thunder_gslb_zone_service_dns_naptr_record_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbZoneServiceDnsNaptrRecordStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbZoneServiceDnsNaptrRecordStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_zone_service_dns_naptr_record_stats',
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
    this._flag = config.flag;
    this._id = config.id;
    this._name = config.name;
    this._naptrTarget = config.naptrTarget;
    this._serviceName = config.serviceName;
    this._servicePort = config.servicePort;
    this._serviceProto = config.serviceProto;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // flag - computed: false, optional: false, required: true
  private _flag?: string; 
  public get flag() {
    return this.getStringAttribute('flag');
  }
  public set flag(value: string) {
    this._flag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagInput() {
    return this._flag;
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

  // naptr_target - computed: false, optional: false, required: true
  private _naptrTarget?: string; 
  public get naptrTarget() {
    return this.getStringAttribute('naptr_target');
  }
  public set naptrTarget(value: string) {
    this._naptrTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get naptrTargetInput() {
    return this._naptrTarget;
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

  // service_proto - computed: false, optional: false, required: true
  private _serviceProto?: string; 
  public get serviceProto() {
    return this.getStringAttribute('service_proto');
  }
  public set serviceProto(value: string) {
    this._serviceProto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProtoInput() {
    return this._serviceProto;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbZoneServiceDnsNaptrRecordStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneServiceDnsNaptrRecordStatsStats) {
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
      flag: cdktf.stringToTerraform(this._flag),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      naptr_target: cdktf.stringToTerraform(this._naptrTarget),
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_port: cdktf.stringToTerraform(this._servicePort),
      service_proto: cdktf.stringToTerraform(this._serviceProto),
      stats: dataThunderGslbZoneServiceDnsNaptrRecordStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      flag: {
        value: cdktf.stringToHclTerraform(this._flag),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      naptr_target: {
        value: cdktf.stringToHclTerraform(this._naptrTarget),
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
      service_proto: {
        value: cdktf.stringToHclTerraform(this._serviceProto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderGslbZoneServiceDnsNaptrRecordStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneServiceDnsNaptrRecordStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
