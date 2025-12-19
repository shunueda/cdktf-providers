// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_lsn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerEnableTrapsLsnAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable all LSN group traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_lsn#all SnmpServerEnableTrapsLsnA#all}
  */
  readonly all?: number;
  /**
  * Enable LSN trap when fixed nat port mapping file change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_lsn#fixed_nat_port_mapping_file_change SnmpServerEnableTrapsLsnA#fixed_nat_port_mapping_file_change}
  */
  readonly fixedNatPortMappingFileChange?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_lsn#id SnmpServerEnableTrapsLsnA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_lsn#max_ipport_threshold SnmpServerEnableTrapsLsnA#max_ipport_threshold}
  */
  readonly maxIpportThreshold?: number;
  /**
  * Maximum threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_lsn#max_port_threshold SnmpServerEnableTrapsLsnA#max_port_threshold}
  */
  readonly maxPortThreshold?: number;
  /**
  * Enable LSN trap when IP total port usage reaches the threshold (default 64512)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_lsn#per_ip_port_usage_threshold SnmpServerEnableTrapsLsnA#per_ip_port_usage_threshold}
  */
  readonly perIpPortUsageThreshold?: number;
  /**
  * Enable LSN trap when NAT total port usage reaches the threshold (default 655350000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_lsn#total_port_usage_threshold SnmpServerEnableTrapsLsnA#total_port_usage_threshold}
  */
  readonly totalPortUsageThreshold?: number;
  /**
  * Enable LSN trap when NAT pool reaches the threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_lsn#traffic_exceeded SnmpServerEnableTrapsLsnA#traffic_exceeded}
  */
  readonly trafficExceeded?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_lsn#uuid SnmpServerEnableTrapsLsnA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_lsn thunder_snmp_server_enable_traps_lsn}
*/
export class SnmpServerEnableTrapsLsnA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_enable_traps_lsn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerEnableTrapsLsnA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerEnableTrapsLsnA to import
  * @param importFromId The id of the existing SnmpServerEnableTrapsLsnA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_lsn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerEnableTrapsLsnA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_enable_traps_lsn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_lsn thunder_snmp_server_enable_traps_lsn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerEnableTrapsLsnAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerEnableTrapsLsnAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_enable_traps_lsn',
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
    this._all = config.all;
    this._fixedNatPortMappingFileChange = config.fixedNatPortMappingFileChange;
    this._id = config.id;
    this._maxIpportThreshold = config.maxIpportThreshold;
    this._maxPortThreshold = config.maxPortThreshold;
    this._perIpPortUsageThreshold = config.perIpPortUsageThreshold;
    this._totalPortUsageThreshold = config.totalPortUsageThreshold;
    this._trafficExceeded = config.trafficExceeded;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // fixed_nat_port_mapping_file_change - computed: false, optional: true, required: false
  private _fixedNatPortMappingFileChange?: number; 
  public get fixedNatPortMappingFileChange() {
    return this.getNumberAttribute('fixed_nat_port_mapping_file_change');
  }
  public set fixedNatPortMappingFileChange(value: number) {
    this._fixedNatPortMappingFileChange = value;
  }
  public resetFixedNatPortMappingFileChange() {
    this._fixedNatPortMappingFileChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatPortMappingFileChangeInput() {
    return this._fixedNatPortMappingFileChange;
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

  // max_ipport_threshold - computed: false, optional: true, required: false
  private _maxIpportThreshold?: number; 
  public get maxIpportThreshold() {
    return this.getNumberAttribute('max_ipport_threshold');
  }
  public set maxIpportThreshold(value: number) {
    this._maxIpportThreshold = value;
  }
  public resetMaxIpportThreshold() {
    this._maxIpportThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIpportThresholdInput() {
    return this._maxIpportThreshold;
  }

  // max_port_threshold - computed: false, optional: true, required: false
  private _maxPortThreshold?: number; 
  public get maxPortThreshold() {
    return this.getNumberAttribute('max_port_threshold');
  }
  public set maxPortThreshold(value: number) {
    this._maxPortThreshold = value;
  }
  public resetMaxPortThreshold() {
    this._maxPortThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPortThresholdInput() {
    return this._maxPortThreshold;
  }

  // per_ip_port_usage_threshold - computed: false, optional: true, required: false
  private _perIpPortUsageThreshold?: number; 
  public get perIpPortUsageThreshold() {
    return this.getNumberAttribute('per_ip_port_usage_threshold');
  }
  public set perIpPortUsageThreshold(value: number) {
    this._perIpPortUsageThreshold = value;
  }
  public resetPerIpPortUsageThreshold() {
    this._perIpPortUsageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perIpPortUsageThresholdInput() {
    return this._perIpPortUsageThreshold;
  }

  // total_port_usage_threshold - computed: false, optional: true, required: false
  private _totalPortUsageThreshold?: number; 
  public get totalPortUsageThreshold() {
    return this.getNumberAttribute('total_port_usage_threshold');
  }
  public set totalPortUsageThreshold(value: number) {
    this._totalPortUsageThreshold = value;
  }
  public resetTotalPortUsageThreshold() {
    this._totalPortUsageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPortUsageThresholdInput() {
    return this._totalPortUsageThreshold;
  }

  // traffic_exceeded - computed: false, optional: true, required: false
  private _trafficExceeded?: number; 
  public get trafficExceeded() {
    return this.getNumberAttribute('traffic_exceeded');
  }
  public set trafficExceeded(value: number) {
    this._trafficExceeded = value;
  }
  public resetTrafficExceeded() {
    this._trafficExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficExceededInput() {
    return this._trafficExceeded;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all: cdktf.numberToTerraform(this._all),
      fixed_nat_port_mapping_file_change: cdktf.numberToTerraform(this._fixedNatPortMappingFileChange),
      id: cdktf.stringToTerraform(this._id),
      max_ipport_threshold: cdktf.numberToTerraform(this._maxIpportThreshold),
      max_port_threshold: cdktf.numberToTerraform(this._maxPortThreshold),
      per_ip_port_usage_threshold: cdktf.numberToTerraform(this._perIpPortUsageThreshold),
      total_port_usage_threshold: cdktf.numberToTerraform(this._totalPortUsageThreshold),
      traffic_exceeded: cdktf.numberToTerraform(this._trafficExceeded),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all: {
        value: cdktf.numberToHclTerraform(this._all),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fixed_nat_port_mapping_file_change: {
        value: cdktf.numberToHclTerraform(this._fixedNatPortMappingFileChange),
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
      max_ipport_threshold: {
        value: cdktf.numberToHclTerraform(this._maxIpportThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_port_threshold: {
        value: cdktf.numberToHclTerraform(this._maxPortThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per_ip_port_usage_threshold: {
        value: cdktf.numberToHclTerraform(this._perIpPortUsageThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_port_usage_threshold: {
        value: cdktf.numberToHclTerraform(this._totalPortUsageThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_exceeded: {
        value: cdktf.numberToHclTerraform(this._trafficExceeded),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
