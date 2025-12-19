// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_health_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemHealthCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_health_check#id SystemHealthCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Multiplier value used to compute holddown (value used to multiply the interval (default: 4))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_health_check#l2bfd_multiplier SystemHealthCheck#l2bfd_multiplier}
  */
  readonly l2BfdMultiplier?: number;
  /**
  * Minimum receive interval capability (Milliseconds (default: 800))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_health_check#l2bfd_rx_interval SystemHealthCheck#l2bfd_rx_interval}
  */
  readonly l2BfdRxInterval?: number;
  /**
  * Transmit interval between BFD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_health_check#l2bfd_tx_interval SystemHealthCheck#l2bfd_tx_interval}
  */
  readonly l2BfdTxInterval?: number;
  /**
  * Monitor Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_health_check#l2hm_hc_name SystemHealthCheck#l2hm_hc_name}
  */
  readonly l2HmHcName: string;
  /**
  * Method is l2bfd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_health_check#method_l2bfd SystemHealthCheck#method_l2bfd}
  */
  readonly methodL2Bfd?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_health_check#user_tag SystemHealthCheck#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_health_check#uuid SystemHealthCheck#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_health_check thunder_system_health_check}
*/
export class SystemHealthCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_health_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemHealthCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemHealthCheck to import
  * @param importFromId The id of the existing SystemHealthCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_health_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemHealthCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_health_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_health_check thunder_system_health_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemHealthCheckConfig
  */
  public constructor(scope: Construct, id: string, config: SystemHealthCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_health_check',
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
    this._l2BfdMultiplier = config.l2BfdMultiplier;
    this._l2BfdRxInterval = config.l2BfdRxInterval;
    this._l2BfdTxInterval = config.l2BfdTxInterval;
    this._l2HmHcName = config.l2HmHcName;
    this._methodL2Bfd = config.methodL2Bfd;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
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

  // l2bfd_multiplier - computed: false, optional: true, required: false
  private _l2BfdMultiplier?: number; 
  public get l2BfdMultiplier() {
    return this.getNumberAttribute('l2bfd_multiplier');
  }
  public set l2BfdMultiplier(value: number) {
    this._l2BfdMultiplier = value;
  }
  public resetL2BfdMultiplier() {
    this._l2BfdMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2BfdMultiplierInput() {
    return this._l2BfdMultiplier;
  }

  // l2bfd_rx_interval - computed: false, optional: true, required: false
  private _l2BfdRxInterval?: number; 
  public get l2BfdRxInterval() {
    return this.getNumberAttribute('l2bfd_rx_interval');
  }
  public set l2BfdRxInterval(value: number) {
    this._l2BfdRxInterval = value;
  }
  public resetL2BfdRxInterval() {
    this._l2BfdRxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2BfdRxIntervalInput() {
    return this._l2BfdRxInterval;
  }

  // l2bfd_tx_interval - computed: false, optional: true, required: false
  private _l2BfdTxInterval?: number; 
  public get l2BfdTxInterval() {
    return this.getNumberAttribute('l2bfd_tx_interval');
  }
  public set l2BfdTxInterval(value: number) {
    this._l2BfdTxInterval = value;
  }
  public resetL2BfdTxInterval() {
    this._l2BfdTxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2BfdTxIntervalInput() {
    return this._l2BfdTxInterval;
  }

  // l2hm_hc_name - computed: false, optional: false, required: true
  private _l2HmHcName?: string; 
  public get l2HmHcName() {
    return this.getStringAttribute('l2hm_hc_name');
  }
  public set l2HmHcName(value: string) {
    this._l2HmHcName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l2HmHcNameInput() {
    return this._l2HmHcName;
  }

  // method_l2bfd - computed: false, optional: true, required: false
  private _methodL2Bfd?: number; 
  public get methodL2Bfd() {
    return this.getNumberAttribute('method_l2bfd');
  }
  public set methodL2Bfd(value: number) {
    this._methodL2Bfd = value;
  }
  public resetMethodL2Bfd() {
    this._methodL2Bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodL2BfdInput() {
    return this._methodL2Bfd;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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
      id: cdktf.stringToTerraform(this._id),
      l2bfd_multiplier: cdktf.numberToTerraform(this._l2BfdMultiplier),
      l2bfd_rx_interval: cdktf.numberToTerraform(this._l2BfdRxInterval),
      l2bfd_tx_interval: cdktf.numberToTerraform(this._l2BfdTxInterval),
      l2hm_hc_name: cdktf.stringToTerraform(this._l2HmHcName),
      method_l2bfd: cdktf.numberToTerraform(this._methodL2Bfd),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      l2bfd_multiplier: {
        value: cdktf.numberToHclTerraform(this._l2BfdMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l2bfd_rx_interval: {
        value: cdktf.numberToHclTerraform(this._l2BfdRxInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l2bfd_tx_interval: {
        value: cdktf.numberToHclTerraform(this._l2BfdTxInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l2hm_hc_name: {
        value: cdktf.stringToHclTerraform(this._l2HmHcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method_l2bfd: {
        value: cdktf.numberToHclTerraform(this._methodL2Bfd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
