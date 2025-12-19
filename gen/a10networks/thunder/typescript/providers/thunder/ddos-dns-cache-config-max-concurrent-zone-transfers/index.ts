// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config_max_concurrent_zone_transfers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDnsCacheConfigMaxConcurrentZoneTransfersAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config_max_concurrent_zone_transfers#id DdosDnsCacheConfigMaxConcurrentZoneTransfersA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of concurrent zone transfers after boot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config_max_concurrent_zone_transfers#operational_mode DdosDnsCacheConfigMaxConcurrentZoneTransfersA#operational_mode}
  */
  readonly operationalMode?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config_max_concurrent_zone_transfers#uuid DdosDnsCacheConfigMaxConcurrentZoneTransfersA#uuid}
  */
  readonly uuid?: string;
  /**
  * Number of concurrent zone transfers during cold boot (default 65472)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config_max_concurrent_zone_transfers#warm_up_mode DdosDnsCacheConfigMaxConcurrentZoneTransfersA#warm_up_mode}
  */
  readonly warmUpMode?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config_max_concurrent_zone_transfers thunder_ddos_dns_cache_config_max_concurrent_zone_transfers}
*/
export class DdosDnsCacheConfigMaxConcurrentZoneTransfersA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dns_cache_config_max_concurrent_zone_transfers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDnsCacheConfigMaxConcurrentZoneTransfersA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDnsCacheConfigMaxConcurrentZoneTransfersA to import
  * @param importFromId The id of the existing DdosDnsCacheConfigMaxConcurrentZoneTransfersA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config_max_concurrent_zone_transfers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDnsCacheConfigMaxConcurrentZoneTransfersA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dns_cache_config_max_concurrent_zone_transfers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_config_max_concurrent_zone_transfers thunder_ddos_dns_cache_config_max_concurrent_zone_transfers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDnsCacheConfigMaxConcurrentZoneTransfersAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosDnsCacheConfigMaxConcurrentZoneTransfersAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dns_cache_config_max_concurrent_zone_transfers',
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
    this._id = config.id;
    this._operationalMode = config.operationalMode;
    this._uuid = config.uuid;
    this._warmUpMode = config.warmUpMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // operational_mode - computed: false, optional: true, required: false
  private _operationalMode?: number; 
  public get operationalMode() {
    return this.getNumberAttribute('operational_mode');
  }
  public set operationalMode(value: number) {
    this._operationalMode = value;
  }
  public resetOperationalMode() {
    this._operationalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationalModeInput() {
    return this._operationalMode;
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

  // warm_up_mode - computed: false, optional: true, required: false
  private _warmUpMode?: number; 
  public get warmUpMode() {
    return this.getNumberAttribute('warm_up_mode');
  }
  public set warmUpMode(value: number) {
    this._warmUpMode = value;
  }
  public resetWarmUpMode() {
    this._warmUpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmUpModeInput() {
    return this._warmUpMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      operational_mode: cdktf.numberToTerraform(this._operationalMode),
      uuid: cdktf.stringToTerraform(this._uuid),
      warm_up_mode: cdktf.numberToTerraform(this._warmUpMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operational_mode: {
        value: cdktf.numberToHclTerraform(this._operationalMode),
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
      warm_up_mode: {
        value: cdktf.numberToHclTerraform(this._warmUpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
