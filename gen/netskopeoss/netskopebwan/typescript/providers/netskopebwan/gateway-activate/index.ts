// https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_activate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayActivateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_activate#email_addresses GatewayActivate#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_activate#gateway_id GatewayActivate#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_activate#id GatewayActivate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_activate#timeout_in_seconds GatewayActivate#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_activate#token GatewayActivate#token}
  */
  readonly token?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_activate netskopebwan_gateway_activate}
*/
export class GatewayActivate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskopebwan_gateway_activate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayActivate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayActivate to import
  * @param importFromId The id of the existing GatewayActivate that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_activate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayActivate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskopebwan_gateway_activate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/gateway_activate netskopebwan_gateway_activate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayActivateConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayActivateConfig) {
    super(scope, id, {
      terraformResourceType: 'netskopebwan_gateway_activate',
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
    this._emailAddresses = config.emailAddresses;
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._timeoutInSeconds = config.timeoutInSeconds;
    this._token = config.token;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_addresses - computed: true, optional: true, required: false
  private _emailAddresses?: string[]; 
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }
  public set emailAddresses(value: string[]) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses;
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

  // timeout_in_seconds - computed: true, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailAddresses),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      timeout_in_seconds: cdktf.numberToTerraform(this._timeoutInSeconds),
      token: cdktf.stringToTerraform(this._token),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      timeout_in_seconds: {
        value: cdktf.numberToHclTerraform(this._timeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
