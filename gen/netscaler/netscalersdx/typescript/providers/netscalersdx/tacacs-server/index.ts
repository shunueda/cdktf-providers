// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/tacacs_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TacacsServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable accounting in the tacacs server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/tacacs_server#accounting TacacsServer#accounting}
  */
  readonly accounting?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of seconds the system will wait for a response from the TACACS server. Minimum value =  1 Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/tacacs_server#auth_timeout TacacsServer#auth_timeout}
  */
  readonly authTimeout?: number;
  /**
  * The Attribute name for group extraction from the ACS server. If not passed, then groups will not be extracted. No other harm. Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/tacacs_server#group_attr_name TacacsServer#group_attr_name}
  */
  readonly groupAttrName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/tacacs_server#id TacacsServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP Address of TACACS server. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/tacacs_server#ip_address TacacsServer#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Name of TACACS server. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/tacacs_server#name TacacsServer#name}
  */
  readonly name: string;
  /**
  * port number of TACACS server. Minimum value =  1 Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/tacacs_server#port TacacsServer#port}
  */
  readonly port?: number;
  /**
  * Key shared between the TACACS+ server and clients. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/tacacs_server#tacacs_key TacacsServer#tacacs_key}
  */
  readonly tacacsKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/tacacs_server netscalersdx_tacacs_server}
*/
export class TacacsServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_tacacs_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TacacsServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TacacsServer to import
  * @param importFromId The id of the existing TacacsServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/tacacs_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TacacsServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_tacacs_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/tacacs_server netscalersdx_tacacs_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TacacsServerConfig
  */
  public constructor(scope: Construct, id: string, config: TacacsServerConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_tacacs_server',
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
    this._accounting = config.accounting;
    this._authTimeout = config.authTimeout;
    this._groupAttrName = config.groupAttrName;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._name = config.name;
    this._port = config.port;
    this._tacacsKey = config.tacacsKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounting - computed: true, optional: true, required: false
  private _accounting?: boolean | cdktf.IResolvable; 
  public get accounting() {
    return this.getBooleanAttribute('accounting');
  }
  public set accounting(value: boolean | cdktf.IResolvable) {
    this._accounting = value;
  }
  public resetAccounting() {
    this._accounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingInput() {
    return this._accounting;
  }

  // auth_timeout - computed: true, optional: true, required: false
  private _authTimeout?: number; 
  public get authTimeout() {
    return this.getNumberAttribute('auth_timeout');
  }
  public set authTimeout(value: number) {
    this._authTimeout = value;
  }
  public resetAuthTimeout() {
    this._authTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTimeoutInput() {
    return this._authTimeout;
  }

  // group_attr_name - computed: true, optional: true, required: false
  private _groupAttrName?: string; 
  public get groupAttrName() {
    return this.getStringAttribute('group_attr_name');
  }
  public set groupAttrName(value: string) {
    this._groupAttrName = value;
  }
  public resetGroupAttrName() {
    this._groupAttrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttrNameInput() {
    return this._groupAttrName;
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

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tacacs_key - computed: false, optional: false, required: true
  private _tacacsKey?: string; 
  public get tacacsKey() {
    return this.getStringAttribute('tacacs_key');
  }
  public set tacacsKey(value: string) {
    this._tacacsKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tacacsKeyInput() {
    return this._tacacsKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accounting: cdktf.booleanToTerraform(this._accounting),
      auth_timeout: cdktf.numberToTerraform(this._authTimeout),
      group_attr_name: cdktf.stringToTerraform(this._groupAttrName),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      tacacs_key: cdktf.stringToTerraform(this._tacacsKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounting: {
        value: cdktf.booleanToHclTerraform(this._accounting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_timeout: {
        value: cdktf.numberToHclTerraform(this._authTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_attr_name: {
        value: cdktf.stringToHclTerraform(this._groupAttrName),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tacacs_key: {
        value: cdktf.stringToHclTerraform(this._tacacsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
