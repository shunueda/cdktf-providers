// https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FailoverInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_interface#hardware_id FailoverInterface#hardware_id}
  */
  readonly hardwareId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_interface#id FailoverInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_interface#monitored FailoverInterface#monitored}
  */
  readonly monitored?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_interface#standby_ip FailoverInterface#standby_ip}
  */
  readonly standbyIp: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_interface ciscoasa_failover_interface}
*/
export class FailoverInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscoasa_failover_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FailoverInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FailoverInterface to import
  * @param importFromId The id of the existing FailoverInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FailoverInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscoasa_failover_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/failover_interface ciscoasa_failover_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FailoverInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: FailoverInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscoasa_failover_interface',
      terraformGeneratorMetadata: {
        providerName: 'ciscoasa',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hardwareId = config.hardwareId;
    this._id = config.id;
    this._monitored = config.monitored;
    this._standbyIp = config.standbyIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hardware_id - computed: false, optional: false, required: true
  private _hardwareId?: string; 
  public get hardwareId() {
    return this.getStringAttribute('hardware_id');
  }
  public set hardwareId(value: string) {
    this._hardwareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareIdInput() {
    return this._hardwareId;
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

  // monitored - computed: false, optional: true, required: false
  private _monitored?: boolean | cdktf.IResolvable; 
  public get monitored() {
    return this.getBooleanAttribute('monitored');
  }
  public set monitored(value: boolean | cdktf.IResolvable) {
    this._monitored = value;
  }
  public resetMonitored() {
    this._monitored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredInput() {
    return this._monitored;
  }

  // standby_ip - computed: false, optional: false, required: true
  private _standbyIp?: string; 
  public get standbyIp() {
    return this.getStringAttribute('standby_ip');
  }
  public set standbyIp(value: string) {
    this._standbyIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyIpInput() {
    return this._standbyIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hardware_id: cdktf.stringToTerraform(this._hardwareId),
      id: cdktf.stringToTerraform(this._id),
      monitored: cdktf.booleanToTerraform(this._monitored),
      standby_ip: cdktf.stringToTerraform(this._standbyIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hardware_id: {
        value: cdktf.stringToHclTerraform(this._hardwareId),
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
      monitored: {
        value: cdktf.booleanToHclTerraform(this._monitored),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      standby_ip: {
        value: cdktf.stringToHclTerraform(this._standbyIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
