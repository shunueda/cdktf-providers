// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TwcLbRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Balancer incoming traffic TCP port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb_rule#balancer_port TwcLbRule#balancer_port}
  */
  readonly balancerPort: number;
  /**
  * Balancer incoming traffic protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb_rule#balancer_proto TwcLbRule#balancer_proto}
  */
  readonly balancerProto: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb_rule#id TwcLbRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of target balancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb_rule#lb_id TwcLbRule#lb_id}
  */
  readonly lbId: number;
  /**
  * Server incoming traffic TCP port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb_rule#server_port TwcLbRule#server_port}
  */
  readonly serverPort: number;
  /**
  * Server incoming traffic protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb_rule#server_proto TwcLbRule#server_proto}
  */
  readonly serverProto: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb_rule twc_lb_rule}
*/
export class TwcLbRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_lb_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TwcLbRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TwcLbRule to import
  * @param importFromId The id of the existing TwcLbRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TwcLbRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_lb_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_lb_rule twc_lb_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TwcLbRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TwcLbRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'twc_lb_rule',
      terraformGeneratorMetadata: {
        providerName: 'timeweb-cloud',
        providerVersion: '1.6.7',
        providerVersionConstraint: '1.6.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._balancerPort = config.balancerPort;
    this._balancerProto = config.balancerProto;
    this._id = config.id;
    this._lbId = config.lbId;
    this._serverPort = config.serverPort;
    this._serverProto = config.serverProto;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // balancer_port - computed: false, optional: false, required: true
  private _balancerPort?: number; 
  public get balancerPort() {
    return this.getNumberAttribute('balancer_port');
  }
  public set balancerPort(value: number) {
    this._balancerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get balancerPortInput() {
    return this._balancerPort;
  }

  // balancer_proto - computed: false, optional: false, required: true
  private _balancerProto?: string; 
  public get balancerProto() {
    return this.getStringAttribute('balancer_proto');
  }
  public set balancerProto(value: string) {
    this._balancerProto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get balancerProtoInput() {
    return this._balancerProto;
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

  // lb_id - computed: false, optional: false, required: true
  private _lbId?: number; 
  public get lbId() {
    return this.getNumberAttribute('lb_id');
  }
  public set lbId(value: number) {
    this._lbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbIdInput() {
    return this._lbId;
  }

  // server_port - computed: false, optional: false, required: true
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }

  // server_proto - computed: false, optional: false, required: true
  private _serverProto?: string; 
  public get serverProto() {
    return this.getStringAttribute('server_proto');
  }
  public set serverProto(value: string) {
    this._serverProto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProtoInput() {
    return this._serverProto;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      balancer_port: cdktf.numberToTerraform(this._balancerPort),
      balancer_proto: cdktf.stringToTerraform(this._balancerProto),
      id: cdktf.stringToTerraform(this._id),
      lb_id: cdktf.numberToTerraform(this._lbId),
      server_port: cdktf.numberToTerraform(this._serverPort),
      server_proto: cdktf.stringToTerraform(this._serverProto),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      balancer_port: {
        value: cdktf.numberToHclTerraform(this._balancerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      balancer_proto: {
        value: cdktf.stringToHclTerraform(this._balancerProto),
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
      lb_id: {
        value: cdktf.numberToHclTerraform(this._lbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_port: {
        value: cdktf.numberToHclTerraform(this._serverPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_proto: {
        value: cdktf.stringToHclTerraform(this._serverProto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
