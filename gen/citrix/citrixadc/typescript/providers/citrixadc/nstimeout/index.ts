// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NstimeoutConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#anyclient Nstimeout#anyclient}
  */
  readonly anyclient?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#anyserver Nstimeout#anyserver}
  */
  readonly anyserver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#anytcpclient Nstimeout#anytcpclient}
  */
  readonly anytcpclient?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#anytcpserver Nstimeout#anytcpserver}
  */
  readonly anytcpserver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#client Nstimeout#client}
  */
  readonly client?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#halfclose Nstimeout#halfclose}
  */
  readonly halfclose?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#httpclient Nstimeout#httpclient}
  */
  readonly httpclient?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#httpserver Nstimeout#httpserver}
  */
  readonly httpserver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#id Nstimeout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#newconnidletimeout Nstimeout#newconnidletimeout}
  */
  readonly newconnidletimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#nontcpzombie Nstimeout#nontcpzombie}
  */
  readonly nontcpzombie?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#reducedfintimeout Nstimeout#reducedfintimeout}
  */
  readonly reducedfintimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#reducedrsttimeout Nstimeout#reducedrsttimeout}
  */
  readonly reducedrsttimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#server Nstimeout#server}
  */
  readonly server?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#tcpclient Nstimeout#tcpclient}
  */
  readonly tcpclient?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#tcpserver Nstimeout#tcpserver}
  */
  readonly tcpserver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#zombie Nstimeout#zombie}
  */
  readonly zombie?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout citrixadc_nstimeout}
*/
export class Nstimeout extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nstimeout";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nstimeout resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nstimeout to import
  * @param importFromId The id of the existing Nstimeout that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nstimeout to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nstimeout", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nstimeout citrixadc_nstimeout} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NstimeoutConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NstimeoutConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nstimeout',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anyclient = config.anyclient;
    this._anyserver = config.anyserver;
    this._anytcpclient = config.anytcpclient;
    this._anytcpserver = config.anytcpserver;
    this._client = config.client;
    this._halfclose = config.halfclose;
    this._httpclient = config.httpclient;
    this._httpserver = config.httpserver;
    this._id = config.id;
    this._newconnidletimeout = config.newconnidletimeout;
    this._nontcpzombie = config.nontcpzombie;
    this._reducedfintimeout = config.reducedfintimeout;
    this._reducedrsttimeout = config.reducedrsttimeout;
    this._server = config.server;
    this._tcpclient = config.tcpclient;
    this._tcpserver = config.tcpserver;
    this._zombie = config.zombie;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anyclient - computed: true, optional: true, required: false
  private _anyclient?: number; 
  public get anyclient() {
    return this.getNumberAttribute('anyclient');
  }
  public set anyclient(value: number) {
    this._anyclient = value;
  }
  public resetAnyclient() {
    this._anyclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyclientInput() {
    return this._anyclient;
  }

  // anyserver - computed: true, optional: true, required: false
  private _anyserver?: number; 
  public get anyserver() {
    return this.getNumberAttribute('anyserver');
  }
  public set anyserver(value: number) {
    this._anyserver = value;
  }
  public resetAnyserver() {
    this._anyserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyserverInput() {
    return this._anyserver;
  }

  // anytcpclient - computed: true, optional: true, required: false
  private _anytcpclient?: number; 
  public get anytcpclient() {
    return this.getNumberAttribute('anytcpclient');
  }
  public set anytcpclient(value: number) {
    this._anytcpclient = value;
  }
  public resetAnytcpclient() {
    this._anytcpclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anytcpclientInput() {
    return this._anytcpclient;
  }

  // anytcpserver - computed: true, optional: true, required: false
  private _anytcpserver?: number; 
  public get anytcpserver() {
    return this.getNumberAttribute('anytcpserver');
  }
  public set anytcpserver(value: number) {
    this._anytcpserver = value;
  }
  public resetAnytcpserver() {
    this._anytcpserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anytcpserverInput() {
    return this._anytcpserver;
  }

  // client - computed: true, optional: true, required: false
  private _client?: number; 
  public get client() {
    return this.getNumberAttribute('client');
  }
  public set client(value: number) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // halfclose - computed: true, optional: true, required: false
  private _halfclose?: number; 
  public get halfclose() {
    return this.getNumberAttribute('halfclose');
  }
  public set halfclose(value: number) {
    this._halfclose = value;
  }
  public resetHalfclose() {
    this._halfclose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfcloseInput() {
    return this._halfclose;
  }

  // httpclient - computed: true, optional: true, required: false
  private _httpclient?: number; 
  public get httpclient() {
    return this.getNumberAttribute('httpclient');
  }
  public set httpclient(value: number) {
    this._httpclient = value;
  }
  public resetHttpclient() {
    this._httpclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpclientInput() {
    return this._httpclient;
  }

  // httpserver - computed: true, optional: true, required: false
  private _httpserver?: number; 
  public get httpserver() {
    return this.getNumberAttribute('httpserver');
  }
  public set httpserver(value: number) {
    this._httpserver = value;
  }
  public resetHttpserver() {
    this._httpserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpserverInput() {
    return this._httpserver;
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

  // newconnidletimeout - computed: true, optional: true, required: false
  private _newconnidletimeout?: number; 
  public get newconnidletimeout() {
    return this.getNumberAttribute('newconnidletimeout');
  }
  public set newconnidletimeout(value: number) {
    this._newconnidletimeout = value;
  }
  public resetNewconnidletimeout() {
    this._newconnidletimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newconnidletimeoutInput() {
    return this._newconnidletimeout;
  }

  // nontcpzombie - computed: true, optional: true, required: false
  private _nontcpzombie?: number; 
  public get nontcpzombie() {
    return this.getNumberAttribute('nontcpzombie');
  }
  public set nontcpzombie(value: number) {
    this._nontcpzombie = value;
  }
  public resetNontcpzombie() {
    this._nontcpzombie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nontcpzombieInput() {
    return this._nontcpzombie;
  }

  // reducedfintimeout - computed: true, optional: true, required: false
  private _reducedfintimeout?: number; 
  public get reducedfintimeout() {
    return this.getNumberAttribute('reducedfintimeout');
  }
  public set reducedfintimeout(value: number) {
    this._reducedfintimeout = value;
  }
  public resetReducedfintimeout() {
    this._reducedfintimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reducedfintimeoutInput() {
    return this._reducedfintimeout;
  }

  // reducedrsttimeout - computed: true, optional: true, required: false
  private _reducedrsttimeout?: number; 
  public get reducedrsttimeout() {
    return this.getNumberAttribute('reducedrsttimeout');
  }
  public set reducedrsttimeout(value: number) {
    this._reducedrsttimeout = value;
  }
  public resetReducedrsttimeout() {
    this._reducedrsttimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reducedrsttimeoutInput() {
    return this._reducedrsttimeout;
  }

  // server - computed: true, optional: true, required: false
  private _server?: number; 
  public get server() {
    return this.getNumberAttribute('server');
  }
  public set server(value: number) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // tcpclient - computed: true, optional: true, required: false
  private _tcpclient?: number; 
  public get tcpclient() {
    return this.getNumberAttribute('tcpclient');
  }
  public set tcpclient(value: number) {
    this._tcpclient = value;
  }
  public resetTcpclient() {
    this._tcpclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpclientInput() {
    return this._tcpclient;
  }

  // tcpserver - computed: true, optional: true, required: false
  private _tcpserver?: number; 
  public get tcpserver() {
    return this.getNumberAttribute('tcpserver');
  }
  public set tcpserver(value: number) {
    this._tcpserver = value;
  }
  public resetTcpserver() {
    this._tcpserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpserverInput() {
    return this._tcpserver;
  }

  // zombie - computed: true, optional: true, required: false
  private _zombie?: number; 
  public get zombie() {
    return this.getNumberAttribute('zombie');
  }
  public set zombie(value: number) {
    this._zombie = value;
  }
  public resetZombie() {
    this._zombie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zombieInput() {
    return this._zombie;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anyclient: cdktf.numberToTerraform(this._anyclient),
      anyserver: cdktf.numberToTerraform(this._anyserver),
      anytcpclient: cdktf.numberToTerraform(this._anytcpclient),
      anytcpserver: cdktf.numberToTerraform(this._anytcpserver),
      client: cdktf.numberToTerraform(this._client),
      halfclose: cdktf.numberToTerraform(this._halfclose),
      httpclient: cdktf.numberToTerraform(this._httpclient),
      httpserver: cdktf.numberToTerraform(this._httpserver),
      id: cdktf.stringToTerraform(this._id),
      newconnidletimeout: cdktf.numberToTerraform(this._newconnidletimeout),
      nontcpzombie: cdktf.numberToTerraform(this._nontcpzombie),
      reducedfintimeout: cdktf.numberToTerraform(this._reducedfintimeout),
      reducedrsttimeout: cdktf.numberToTerraform(this._reducedrsttimeout),
      server: cdktf.numberToTerraform(this._server),
      tcpclient: cdktf.numberToTerraform(this._tcpclient),
      tcpserver: cdktf.numberToTerraform(this._tcpserver),
      zombie: cdktf.numberToTerraform(this._zombie),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anyclient: {
        value: cdktf.numberToHclTerraform(this._anyclient),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      anyserver: {
        value: cdktf.numberToHclTerraform(this._anyserver),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      anytcpclient: {
        value: cdktf.numberToHclTerraform(this._anytcpclient),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      anytcpserver: {
        value: cdktf.numberToHclTerraform(this._anytcpserver),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client: {
        value: cdktf.numberToHclTerraform(this._client),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      halfclose: {
        value: cdktf.numberToHclTerraform(this._halfclose),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      httpclient: {
        value: cdktf.numberToHclTerraform(this._httpclient),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      httpserver: {
        value: cdktf.numberToHclTerraform(this._httpserver),
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
      newconnidletimeout: {
        value: cdktf.numberToHclTerraform(this._newconnidletimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nontcpzombie: {
        value: cdktf.numberToHclTerraform(this._nontcpzombie),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reducedfintimeout: {
        value: cdktf.numberToHclTerraform(this._reducedfintimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reducedrsttimeout: {
        value: cdktf.numberToHclTerraform(this._reducedrsttimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server: {
        value: cdktf.numberToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcpclient: {
        value: cdktf.numberToHclTerraform(this._tcpclient),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcpserver: {
        value: cdktf.numberToHclTerraform(this._tcpserver),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zombie: {
        value: cdktf.numberToHclTerraform(this._zombie),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
