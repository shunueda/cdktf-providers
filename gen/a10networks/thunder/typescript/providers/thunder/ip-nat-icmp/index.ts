// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_icmp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpNatIcmpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Source NAT intermediate routers' IPs for ICMP errors (default: disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_icmp#always_source_nat_errors IpNatIcmp#always_source_nat_errors}
  */
  readonly alwaysSourceNatErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_icmp#id IpNatIcmp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Respond to ICMP echo requests to NAT pool IPs (default: disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_icmp#respond_to_ping IpNatIcmp#respond_to_ping}
  */
  readonly respondToPing?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_icmp#uuid IpNatIcmp#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_icmp thunder_ip_nat_icmp}
*/
export class IpNatIcmp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_nat_icmp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpNatIcmp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpNatIcmp to import
  * @param importFromId The id of the existing IpNatIcmp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_icmp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpNatIcmp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_nat_icmp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_icmp thunder_ip_nat_icmp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpNatIcmpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpNatIcmpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_nat_icmp',
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
    this._alwaysSourceNatErrors = config.alwaysSourceNatErrors;
    this._id = config.id;
    this._respondToPing = config.respondToPing;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_source_nat_errors - computed: false, optional: true, required: false
  private _alwaysSourceNatErrors?: number; 
  public get alwaysSourceNatErrors() {
    return this.getNumberAttribute('always_source_nat_errors');
  }
  public set alwaysSourceNatErrors(value: number) {
    this._alwaysSourceNatErrors = value;
  }
  public resetAlwaysSourceNatErrors() {
    this._alwaysSourceNatErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysSourceNatErrorsInput() {
    return this._alwaysSourceNatErrors;
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

  // respond_to_ping - computed: false, optional: true, required: false
  private _respondToPing?: number; 
  public get respondToPing() {
    return this.getNumberAttribute('respond_to_ping');
  }
  public set respondToPing(value: number) {
    this._respondToPing = value;
  }
  public resetRespondToPing() {
    this._respondToPing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondToPingInput() {
    return this._respondToPing;
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
      always_source_nat_errors: cdktf.numberToTerraform(this._alwaysSourceNatErrors),
      id: cdktf.stringToTerraform(this._id),
      respond_to_ping: cdktf.numberToTerraform(this._respondToPing),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_source_nat_errors: {
        value: cdktf.numberToHclTerraform(this._alwaysSourceNatErrors),
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
      respond_to_ping: {
        value: cdktf.numberToHclTerraform(this._respondToPing),
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
