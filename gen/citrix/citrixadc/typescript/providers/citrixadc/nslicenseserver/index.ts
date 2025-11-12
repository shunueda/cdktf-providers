// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NslicenseserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseserver#deviceprofilename Nslicenseserver#deviceprofilename}
  */
  readonly deviceprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseserver#forceupdateip Nslicenseserver#forceupdateip}
  */
  readonly forceupdateip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseserver#id Nslicenseserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseserver#licensemode Nslicenseserver#licensemode}
  */
  readonly licensemode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseserver#licenseserverip Nslicenseserver#licenseserverip}
  */
  readonly licenseserverip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseserver#nodeid Nslicenseserver#nodeid}
  */
  readonly nodeid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseserver#password Nslicenseserver#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseserver#port Nslicenseserver#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseserver#servername Nslicenseserver#servername}
  */
  readonly servername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseserver#username Nslicenseserver#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseserver citrixadc_nslicenseserver}
*/
export class Nslicenseserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nslicenseserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nslicenseserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nslicenseserver to import
  * @param importFromId The id of the existing Nslicenseserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nslicenseserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nslicenseserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseserver citrixadc_nslicenseserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NslicenseserverConfig
  */
  public constructor(scope: Construct, id: string, config: NslicenseserverConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nslicenseserver',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceprofilename = config.deviceprofilename;
    this._forceupdateip = config.forceupdateip;
    this._id = config.id;
    this._licensemode = config.licensemode;
    this._licenseserverip = config.licenseserverip;
    this._nodeid = config.nodeid;
    this._password = config.password;
    this._port = config.port;
    this._servername = config.servername;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deviceprofilename - computed: true, optional: true, required: false
  private _deviceprofilename?: string; 
  public get deviceprofilename() {
    return this.getStringAttribute('deviceprofilename');
  }
  public set deviceprofilename(value: string) {
    this._deviceprofilename = value;
  }
  public resetDeviceprofilename() {
    this._deviceprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceprofilenameInput() {
    return this._deviceprofilename;
  }

  // forceupdateip - computed: true, optional: true, required: false
  private _forceupdateip?: boolean | cdktf.IResolvable; 
  public get forceupdateip() {
    return this.getBooleanAttribute('forceupdateip');
  }
  public set forceupdateip(value: boolean | cdktf.IResolvable) {
    this._forceupdateip = value;
  }
  public resetForceupdateip() {
    this._forceupdateip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceupdateipInput() {
    return this._forceupdateip;
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

  // licensemode - computed: true, optional: true, required: false
  private _licensemode?: string; 
  public get licensemode() {
    return this.getStringAttribute('licensemode');
  }
  public set licensemode(value: string) {
    this._licensemode = value;
  }
  public resetLicensemode() {
    this._licensemode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensemodeInput() {
    return this._licensemode;
  }

  // licenseserverip - computed: true, optional: true, required: false
  private _licenseserverip?: string; 
  public get licenseserverip() {
    return this.getStringAttribute('licenseserverip');
  }
  public set licenseserverip(value: string) {
    this._licenseserverip = value;
  }
  public resetLicenseserverip() {
    this._licenseserverip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseserveripInput() {
    return this._licenseserverip;
  }

  // nodeid - computed: true, optional: true, required: false
  private _nodeid?: number; 
  public get nodeid() {
    return this.getNumberAttribute('nodeid');
  }
  public set nodeid(value: number) {
    this._nodeid = value;
  }
  public resetNodeid() {
    this._nodeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeidInput() {
    return this._nodeid;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // servername - computed: false, optional: false, required: true
  private _servername?: string; 
  public get servername() {
    return this.getStringAttribute('servername');
  }
  public set servername(value: string) {
    this._servername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameInput() {
    return this._servername;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deviceprofilename: cdktf.stringToTerraform(this._deviceprofilename),
      forceupdateip: cdktf.booleanToTerraform(this._forceupdateip),
      id: cdktf.stringToTerraform(this._id),
      licensemode: cdktf.stringToTerraform(this._licensemode),
      licenseserverip: cdktf.stringToTerraform(this._licenseserverip),
      nodeid: cdktf.numberToTerraform(this._nodeid),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      servername: cdktf.stringToTerraform(this._servername),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deviceprofilename: {
        value: cdktf.stringToHclTerraform(this._deviceprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forceupdateip: {
        value: cdktf.booleanToHclTerraform(this._forceupdateip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      licensemode: {
        value: cdktf.stringToHclTerraform(this._licensemode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      licenseserverip: {
        value: cdktf.stringToHclTerraform(this._licenseserverip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodeid: {
        value: cdktf.numberToHclTerraform(this._nodeid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      servername: {
        value: cdktf.stringToHclTerraform(this._servername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
