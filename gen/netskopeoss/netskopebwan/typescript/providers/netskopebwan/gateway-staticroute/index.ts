// https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_staticroute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayStaticrouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_staticroute#advertise GatewayStaticroute#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_staticroute#cost GatewayStaticroute#cost}
  */
  readonly cost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_staticroute#destination GatewayStaticroute#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_staticroute#device GatewayStaticroute#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_staticroute#gateway_id GatewayStaticroute#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_staticroute#id GatewayStaticroute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_staticroute#install GatewayStaticroute#install}
  */
  readonly install?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_staticroute#nhop GatewayStaticroute#nhop}
  */
  readonly nhop: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_staticroute netskopebwan_gateway_staticroute}
*/
export class GatewayStaticroute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskopebwan_gateway_staticroute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayStaticroute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayStaticroute to import
  * @param importFromId The id of the existing GatewayStaticroute that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_staticroute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayStaticroute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskopebwan_gateway_staticroute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_staticroute netskopebwan_gateway_staticroute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayStaticrouteConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayStaticrouteConfig) {
    super(scope, id, {
      terraformResourceType: 'netskopebwan_gateway_staticroute',
      terraformGeneratorMetadata: {
        providerName: 'netskopebwan',
        providerVersion: '0.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertise = config.advertise;
    this._cost = config.cost;
    this._destination = config.destination;
    this._device = config.device;
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._install = config.install;
    this._nhop = config.nhop;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise - computed: true, optional: true, required: false
  private _advertise?: boolean | cdktf.IResolvable; 
  public get advertise() {
    return this.getBooleanAttribute('advertise');
  }
  public set advertise(value: boolean | cdktf.IResolvable) {
    this._advertise = value;
  }
  public resetAdvertise() {
    this._advertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise;
  }

  // cost - computed: true, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
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

  // install - computed: true, optional: true, required: false
  private _install?: boolean | cdktf.IResolvable; 
  public get install() {
    return this.getBooleanAttribute('install');
  }
  public set install(value: boolean | cdktf.IResolvable) {
    this._install = value;
  }
  public resetInstall() {
    this._install = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installInput() {
    return this._install;
  }

  // nhop - computed: false, optional: false, required: true
  private _nhop?: string; 
  public get nhop() {
    return this.getStringAttribute('nhop');
  }
  public set nhop(value: string) {
    this._nhop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nhopInput() {
    return this._nhop;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertise: cdktf.booleanToTerraform(this._advertise),
      cost: cdktf.numberToTerraform(this._cost),
      destination: cdktf.stringToTerraform(this._destination),
      device: cdktf.stringToTerraform(this._device),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      install: cdktf.booleanToTerraform(this._install),
      nhop: cdktf.stringToTerraform(this._nhop),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise: {
        value: cdktf.booleanToHclTerraform(this._advertise),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cost: {
        value: cdktf.numberToHclTerraform(this._cost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
      install: {
        value: cdktf.booleanToHclTerraform(this._install),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nhop: {
        value: cdktf.stringToHclTerraform(this._nhop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
