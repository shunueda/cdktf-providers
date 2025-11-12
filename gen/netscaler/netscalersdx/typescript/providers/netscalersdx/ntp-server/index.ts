// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NtpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Autokey Public Key Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_server#autokey NtpServer#autokey}
  */
  readonly autokey?: boolean | cdktf.IResolvable;
  /**
  * Sender of request, whether from Setup Wizard or direct NTP configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_server#client NtpServer#client}
  */
  readonly client?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_server#id NtpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key Identifier for Symmetric Key Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_server#key_id NtpServer#key_id}
  */
  readonly keyId?: number;
  /**
  * Maximum Poll Interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_server#maxpoll NtpServer#maxpoll}
  */
  readonly maxpoll?: number;
  /**
  * Minimum Poll Interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_server#minpoll NtpServer#minpoll}
  */
  readonly minpoll?: number;
  /**
  * NTP Server Preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_server#preferred_server NtpServer#preferred_server}
  */
  readonly preferredServer?: boolean | cdktf.IResolvable;
  /**
  * NTP Time Server Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_server#server NtpServer#server}
  */
  readonly server: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_server netscalersdx_ntp_server}
*/
export class NtpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_ntp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NtpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NtpServer to import
  * @param importFromId The id of the existing NtpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NtpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_ntp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ntp_server netscalersdx_ntp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NtpServerConfig
  */
  public constructor(scope: Construct, id: string, config: NtpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_ntp_server',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autokey = config.autokey;
    this._client = config.client;
    this._id = config.id;
    this._keyId = config.keyId;
    this._maxpoll = config.maxpoll;
    this._minpoll = config.minpoll;
    this._preferredServer = config.preferredServer;
    this._server = config.server;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autokey - computed: true, optional: true, required: false
  private _autokey?: boolean | cdktf.IResolvable; 
  public get autokey() {
    return this.getBooleanAttribute('autokey');
  }
  public set autokey(value: boolean | cdktf.IResolvable) {
    this._autokey = value;
  }
  public resetAutokey() {
    this._autokey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autokeyInput() {
    return this._autokey;
  }

  // client - computed: false, optional: true, required: false
  private _client?: string; 
  public get client() {
    return this.getStringAttribute('client');
  }
  public set client(value: string) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
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

  // key_id - computed: true, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // maxpoll - computed: true, optional: true, required: false
  private _maxpoll?: number; 
  public get maxpoll() {
    return this.getNumberAttribute('maxpoll');
  }
  public set maxpoll(value: number) {
    this._maxpoll = value;
  }
  public resetMaxpoll() {
    this._maxpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxpollInput() {
    return this._maxpoll;
  }

  // minpoll - computed: true, optional: true, required: false
  private _minpoll?: number; 
  public get minpoll() {
    return this.getNumberAttribute('minpoll');
  }
  public set minpoll(value: number) {
    this._minpoll = value;
  }
  public resetMinpoll() {
    this._minpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minpollInput() {
    return this._minpoll;
  }

  // preferred_server - computed: true, optional: true, required: false
  private _preferredServer?: boolean | cdktf.IResolvable; 
  public get preferredServer() {
    return this.getBooleanAttribute('preferred_server');
  }
  public set preferredServer(value: boolean | cdktf.IResolvable) {
    this._preferredServer = value;
  }
  public resetPreferredServer() {
    this._preferredServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredServerInput() {
    return this._preferredServer;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autokey: cdktf.booleanToTerraform(this._autokey),
      client: cdktf.stringToTerraform(this._client),
      id: cdktf.stringToTerraform(this._id),
      key_id: cdktf.numberToTerraform(this._keyId),
      maxpoll: cdktf.numberToTerraform(this._maxpoll),
      minpoll: cdktf.numberToTerraform(this._minpoll),
      preferred_server: cdktf.booleanToTerraform(this._preferredServer),
      server: cdktf.stringToTerraform(this._server),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autokey: {
        value: cdktf.booleanToHclTerraform(this._autokey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client: {
        value: cdktf.stringToHclTerraform(this._client),
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
      key_id: {
        value: cdktf.numberToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxpoll: {
        value: cdktf.numberToHclTerraform(this._maxpoll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minpoll: {
        value: cdktf.numberToHclTerraform(this._minpoll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preferred_server: {
        value: cdktf.booleanToHclTerraform(this._preferredServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
