// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/ntp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetscalersdxNtpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this resource, it is same as the server address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/ntp_server#id DataNetscalersdxNtpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NTP Time Server Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/ntp_server#server DataNetscalersdxNtpServer#server}
  */
  readonly server?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/ntp_server netscalersdx_ntp_server}
*/
export class DataNetscalersdxNtpServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_ntp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetscalersdxNtpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetscalersdxNtpServer to import
  * @param importFromId The id of the existing DataNetscalersdxNtpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/ntp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetscalersdxNtpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_ntp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/ntp_server netscalersdx_ntp_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetscalersdxNtpServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetscalersdxNtpServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_ntp_server',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
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
    this._server = config.server;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autokey - computed: true, optional: false, required: false
  public get autokey() {
    return this.getBooleanAttribute('autokey');
  }

  // client - computed: true, optional: false, required: false
  public get client() {
    return this.getStringAttribute('client');
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

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }

  // maxpoll - computed: true, optional: false, required: false
  public get maxpoll() {
    return this.getNumberAttribute('maxpoll');
  }

  // minpoll - computed: true, optional: false, required: false
  public get minpoll() {
    return this.getNumberAttribute('minpoll');
  }

  // preferred_server - computed: true, optional: false, required: false
  public get preferredServer() {
    return this.getBooleanAttribute('preferred_server');
  }

  // server - computed: true, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
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
      id: cdktf.stringToTerraform(this._id),
      server: cdktf.stringToTerraform(this._server),
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
