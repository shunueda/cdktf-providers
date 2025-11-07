// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inat#ftp Inat#ftp}
  */
  readonly ftp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inat#id Inat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inat#mode Inat#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inat#name Inat#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inat#privateip Inat#privateip}
  */
  readonly privateip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inat#proxyip Inat#proxyip}
  */
  readonly proxyip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inat#publicip Inat#publicip}
  */
  readonly publicip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inat#tcpproxy Inat#tcpproxy}
  */
  readonly tcpproxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inat#td Inat#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inat#tftp Inat#tftp}
  */
  readonly tftp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inat#useproxyport Inat#useproxyport}
  */
  readonly useproxyport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inat#usip Inat#usip}
  */
  readonly usip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inat#usnip Inat#usnip}
  */
  readonly usnip?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inat citrixadc_inat}
*/
export class Inat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_inat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Inat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Inat to import
  * @param importFromId The id of the existing Inat that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Inat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_inat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inat citrixadc_inat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InatConfig
  */
  public constructor(scope: Construct, id: string, config: InatConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_inat',
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
    this._ftp = config.ftp;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._privateip = config.privateip;
    this._proxyip = config.proxyip;
    this._publicip = config.publicip;
    this._tcpproxy = config.tcpproxy;
    this._td = config.td;
    this._tftp = config.tftp;
    this._useproxyport = config.useproxyport;
    this._usip = config.usip;
    this._usnip = config.usnip;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ftp - computed: true, optional: true, required: false
  private _ftp?: string; 
  public get ftp() {
    return this.getStringAttribute('ftp');
  }
  public set ftp(value: string) {
    this._ftp = value;
  }
  public resetFtp() {
    this._ftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // privateip - computed: true, optional: true, required: false
  private _privateip?: string; 
  public get privateip() {
    return this.getStringAttribute('privateip');
  }
  public set privateip(value: string) {
    this._privateip = value;
  }
  public resetPrivateip() {
    this._privateip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateipInput() {
    return this._privateip;
  }

  // proxyip - computed: true, optional: true, required: false
  private _proxyip?: string; 
  public get proxyip() {
    return this.getStringAttribute('proxyip');
  }
  public set proxyip(value: string) {
    this._proxyip = value;
  }
  public resetProxyip() {
    this._proxyip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyipInput() {
    return this._proxyip;
  }

  // publicip - computed: true, optional: true, required: false
  private _publicip?: string; 
  public get publicip() {
    return this.getStringAttribute('publicip');
  }
  public set publicip(value: string) {
    this._publicip = value;
  }
  public resetPublicip() {
    this._publicip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicipInput() {
    return this._publicip;
  }

  // tcpproxy - computed: true, optional: true, required: false
  private _tcpproxy?: string; 
  public get tcpproxy() {
    return this.getStringAttribute('tcpproxy');
  }
  public set tcpproxy(value: string) {
    this._tcpproxy = value;
  }
  public resetTcpproxy() {
    this._tcpproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpproxyInput() {
    return this._tcpproxy;
  }

  // td - computed: true, optional: true, required: false
  private _td?: number; 
  public get td() {
    return this.getNumberAttribute('td');
  }
  public set td(value: number) {
    this._td = value;
  }
  public resetTd() {
    this._td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }

  // tftp - computed: true, optional: true, required: false
  private _tftp?: string; 
  public get tftp() {
    return this.getStringAttribute('tftp');
  }
  public set tftp(value: string) {
    this._tftp = value;
  }
  public resetTftp() {
    this._tftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpInput() {
    return this._tftp;
  }

  // useproxyport - computed: true, optional: true, required: false
  private _useproxyport?: string; 
  public get useproxyport() {
    return this.getStringAttribute('useproxyport');
  }
  public set useproxyport(value: string) {
    this._useproxyport = value;
  }
  public resetUseproxyport() {
    this._useproxyport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useproxyportInput() {
    return this._useproxyport;
  }

  // usip - computed: true, optional: true, required: false
  private _usip?: string; 
  public get usip() {
    return this.getStringAttribute('usip');
  }
  public set usip(value: string) {
    this._usip = value;
  }
  public resetUsip() {
    this._usip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usipInput() {
    return this._usip;
  }

  // usnip - computed: true, optional: true, required: false
  private _usnip?: string; 
  public get usnip() {
    return this.getStringAttribute('usnip');
  }
  public set usnip(value: string) {
    this._usnip = value;
  }
  public resetUsnip() {
    this._usnip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usnipInput() {
    return this._usnip;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ftp: cdktf.stringToTerraform(this._ftp),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      privateip: cdktf.stringToTerraform(this._privateip),
      proxyip: cdktf.stringToTerraform(this._proxyip),
      publicip: cdktf.stringToTerraform(this._publicip),
      tcpproxy: cdktf.stringToTerraform(this._tcpproxy),
      td: cdktf.numberToTerraform(this._td),
      tftp: cdktf.stringToTerraform(this._tftp),
      useproxyport: cdktf.stringToTerraform(this._useproxyport),
      usip: cdktf.stringToTerraform(this._usip),
      usnip: cdktf.stringToTerraform(this._usnip),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ftp: {
        value: cdktf.stringToHclTerraform(this._ftp),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      privateip: {
        value: cdktf.stringToHclTerraform(this._privateip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxyip: {
        value: cdktf.stringToHclTerraform(this._proxyip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publicip: {
        value: cdktf.stringToHclTerraform(this._publicip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcpproxy: {
        value: cdktf.stringToHclTerraform(this._tcpproxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tftp: {
        value: cdktf.stringToHclTerraform(this._tftp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      useproxyport: {
        value: cdktf.stringToHclTerraform(this._useproxyport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usip: {
        value: cdktf.stringToHclTerraform(this._usip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usnip: {
        value: cdktf.stringToHclTerraform(this._usnip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
