// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_cname_record_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbZoneServiceDnsCnameRecordStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_cname_record_stats#alias_name DataThunderGslbZoneServiceDnsCnameRecordStats#alias_name}
  */
  readonly aliasName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_cname_record_stats#id DataThunderGslbZoneServiceDnsCnameRecordStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_cname_record_stats#name DataThunderGslbZoneServiceDnsCnameRecordStats#name}
  */
  readonly name: string;
  /**
  * ServiceName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_cname_record_stats#service_name DataThunderGslbZoneServiceDnsCnameRecordStats#service_name}
  */
  readonly serviceName: string;
  /**
  * ServicePort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_cname_record_stats#service_port DataThunderGslbZoneServiceDnsCnameRecordStats#service_port}
  */
  readonly servicePort: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_cname_record_stats#stats DataThunderGslbZoneServiceDnsCnameRecordStats#stats}
  */
  readonly stats?: DataThunderGslbZoneServiceDnsCnameRecordStatsStats;
}
export interface DataThunderGslbZoneServiceDnsCnameRecordStatsStats {
  /**
  * Number of times the CNAME has been used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_cname_record_stats#cname_hits DataThunderGslbZoneServiceDnsCnameRecordStats#cname_hits}
  */
  readonly cnameHits?: number;
}

export function dataThunderGslbZoneServiceDnsCnameRecordStatsStatsToTerraform(struct?: DataThunderGslbZoneServiceDnsCnameRecordStatsStatsOutputReference | DataThunderGslbZoneServiceDnsCnameRecordStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cname_hits: cdktf.numberToTerraform(struct!.cnameHits),
  }
}


export function dataThunderGslbZoneServiceDnsCnameRecordStatsStatsToHclTerraform(struct?: DataThunderGslbZoneServiceDnsCnameRecordStatsStatsOutputReference | DataThunderGslbZoneServiceDnsCnameRecordStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cname_hits: {
      value: cdktf.numberToHclTerraform(struct!.cnameHits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneServiceDnsCnameRecordStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneServiceDnsCnameRecordStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cnameHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnameHits = this._cnameHits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneServiceDnsCnameRecordStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cnameHits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cnameHits = value.cnameHits;
    }
  }

  // cname_hits - computed: false, optional: true, required: false
  private _cnameHits?: number; 
  public get cnameHits() {
    return this.getNumberAttribute('cname_hits');
  }
  public set cnameHits(value: number) {
    this._cnameHits = value;
  }
  public resetCnameHits() {
    this._cnameHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameHitsInput() {
    return this._cnameHits;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_cname_record_stats thunder_gslb_zone_service_dns_cname_record_stats}
*/
export class DataThunderGslbZoneServiceDnsCnameRecordStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_zone_service_dns_cname_record_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbZoneServiceDnsCnameRecordStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbZoneServiceDnsCnameRecordStats to import
  * @param importFromId The id of the existing DataThunderGslbZoneServiceDnsCnameRecordStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_cname_record_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbZoneServiceDnsCnameRecordStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_zone_service_dns_cname_record_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_cname_record_stats thunder_gslb_zone_service_dns_cname_record_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbZoneServiceDnsCnameRecordStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbZoneServiceDnsCnameRecordStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_zone_service_dns_cname_record_stats',
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
    this._aliasName = config.aliasName;
    this._id = config.id;
    this._name = config.name;
    this._serviceName = config.serviceName;
    this._servicePort = config.servicePort;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_name - computed: false, optional: false, required: true
  private _aliasName?: string; 
  public get aliasName() {
    return this.getStringAttribute('alias_name');
  }
  public set aliasName(value: string) {
    this._aliasName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasNameInput() {
    return this._aliasName;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderGslbZoneServiceDnsCnameRecordStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderGslbZoneServiceDnsCnameRecordStatsStats) {
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
      alias_name: cdktf.stringToTerraform(this._aliasName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_port: cdktf.stringToTerraform(this._servicePort),
      stats: dataThunderGslbZoneServiceDnsCnameRecordStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias_name: {
        value: cdktf.stringToHclTerraform(this._aliasName),
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
      stats: {
        value: dataThunderGslbZoneServiceDnsCnameRecordStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneServiceDnsCnameRecordStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
