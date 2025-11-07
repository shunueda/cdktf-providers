// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_ddos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SflowPollingDdosAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Export sflow address field in host byte order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_ddos#address_byte_order_host SflowPollingDdosA#address_byte_order_host}
  */
  readonly addressByteOrderHost?: number;
  /**
  * Enable DDOS sflow polling 2.9 compatibility mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_ddos#compatibility2_9 SflowPollingDdosA#compatibility2_9}
  */
  readonly compatibility29?: number;
  /**
  * Enable DDOS sflow polling 3.0/3.1 compatibility mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_ddos#compatibility3_0 SflowPollingDdosA#compatibility3_0}
  */
  readonly compatibility30?: number;
  /**
  * Enable polling for dns cache per instance and per zone statistics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_ddos#dns_cache_zone_stats SflowPollingDdosA#dns_cache_zone_stats}
  */
  readonly dnsCacheZoneStats?: number;
  /**
  * Enable polling for dynamic entry statistics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_ddos#dyn_entry_stats SflowPollingDdosA#dyn_entry_stats}
  */
  readonly dynEntryStats?: number;
  /**
  * Enable Polling for system wide anomaly statistics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_ddos#enable_anomaly_stats SflowPollingDdosA#enable_anomaly_stats}
  */
  readonly enableAnomalyStats?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_ddos#id SflowPollingDdosA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable sflow polling for DDOS statistics; 'disable': Disable sflow polling for DDOS statistics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_ddos#toggle SflowPollingDdosA#toggle}
  */
  readonly toggle?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_ddos#uuid SflowPollingDdosA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_ddos thunder_sflow_polling_ddos}
*/
export class SflowPollingDdosA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sflow_polling_ddos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SflowPollingDdosA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SflowPollingDdosA to import
  * @param importFromId The id of the existing SflowPollingDdosA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_ddos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SflowPollingDdosA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sflow_polling_ddos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_polling_ddos thunder_sflow_polling_ddos} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SflowPollingDdosAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SflowPollingDdosAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_sflow_polling_ddos',
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
    this._addressByteOrderHost = config.addressByteOrderHost;
    this._compatibility29 = config.compatibility29;
    this._compatibility30 = config.compatibility30;
    this._dnsCacheZoneStats = config.dnsCacheZoneStats;
    this._dynEntryStats = config.dynEntryStats;
    this._enableAnomalyStats = config.enableAnomalyStats;
    this._id = config.id;
    this._toggle = config.toggle;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_byte_order_host - computed: false, optional: true, required: false
  private _addressByteOrderHost?: number; 
  public get addressByteOrderHost() {
    return this.getNumberAttribute('address_byte_order_host');
  }
  public set addressByteOrderHost(value: number) {
    this._addressByteOrderHost = value;
  }
  public resetAddressByteOrderHost() {
    this._addressByteOrderHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressByteOrderHostInput() {
    return this._addressByteOrderHost;
  }

  // compatibility2_9 - computed: false, optional: true, required: false
  private _compatibility29?: number; 
  public get compatibility29() {
    return this.getNumberAttribute('compatibility2_9');
  }
  public set compatibility29(value: number) {
    this._compatibility29 = value;
  }
  public resetCompatibility29() {
    this._compatibility29 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibility29Input() {
    return this._compatibility29;
  }

  // compatibility3_0 - computed: false, optional: true, required: false
  private _compatibility30?: number; 
  public get compatibility30() {
    return this.getNumberAttribute('compatibility3_0');
  }
  public set compatibility30(value: number) {
    this._compatibility30 = value;
  }
  public resetCompatibility30() {
    this._compatibility30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibility30Input() {
    return this._compatibility30;
  }

  // dns_cache_zone_stats - computed: false, optional: true, required: false
  private _dnsCacheZoneStats?: number; 
  public get dnsCacheZoneStats() {
    return this.getNumberAttribute('dns_cache_zone_stats');
  }
  public set dnsCacheZoneStats(value: number) {
    this._dnsCacheZoneStats = value;
  }
  public resetDnsCacheZoneStats() {
    this._dnsCacheZoneStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheZoneStatsInput() {
    return this._dnsCacheZoneStats;
  }

  // dyn_entry_stats - computed: false, optional: true, required: false
  private _dynEntryStats?: number; 
  public get dynEntryStats() {
    return this.getNumberAttribute('dyn_entry_stats');
  }
  public set dynEntryStats(value: number) {
    this._dynEntryStats = value;
  }
  public resetDynEntryStats() {
    this._dynEntryStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynEntryStatsInput() {
    return this._dynEntryStats;
  }

  // enable_anomaly_stats - computed: false, optional: true, required: false
  private _enableAnomalyStats?: number; 
  public get enableAnomalyStats() {
    return this.getNumberAttribute('enable_anomaly_stats');
  }
  public set enableAnomalyStats(value: number) {
    this._enableAnomalyStats = value;
  }
  public resetEnableAnomalyStats() {
    this._enableAnomalyStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAnomalyStatsInput() {
    return this._enableAnomalyStats;
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

  // toggle - computed: false, optional: true, required: false
  private _toggle?: string; 
  public get toggle() {
    return this.getStringAttribute('toggle');
  }
  public set toggle(value: string) {
    this._toggle = value;
  }
  public resetToggle() {
    this._toggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toggleInput() {
    return this._toggle;
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
      address_byte_order_host: cdktf.numberToTerraform(this._addressByteOrderHost),
      compatibility2_9: cdktf.numberToTerraform(this._compatibility29),
      compatibility3_0: cdktf.numberToTerraform(this._compatibility30),
      dns_cache_zone_stats: cdktf.numberToTerraform(this._dnsCacheZoneStats),
      dyn_entry_stats: cdktf.numberToTerraform(this._dynEntryStats),
      enable_anomaly_stats: cdktf.numberToTerraform(this._enableAnomalyStats),
      id: cdktf.stringToTerraform(this._id),
      toggle: cdktf.stringToTerraform(this._toggle),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_byte_order_host: {
        value: cdktf.numberToHclTerraform(this._addressByteOrderHost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compatibility2_9: {
        value: cdktf.numberToHclTerraform(this._compatibility29),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compatibility3_0: {
        value: cdktf.numberToHclTerraform(this._compatibility30),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_cache_zone_stats: {
        value: cdktf.numberToHclTerraform(this._dnsCacheZoneStats),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dyn_entry_stats: {
        value: cdktf.numberToHclTerraform(this._dynEntryStats),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_anomaly_stats: {
        value: cdktf.numberToHclTerraform(this._enableAnomalyStats),
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
      toggle: {
        value: cdktf.stringToHclTerraform(this._toggle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
