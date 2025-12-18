// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appflowcollector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppflowcollectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appflowcollector#id Appflowcollector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appflowcollector#ipaddress Appflowcollector#ipaddress}
  */
  readonly ipaddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appflowcollector#name Appflowcollector#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appflowcollector#netprofile Appflowcollector#netprofile}
  */
  readonly netprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appflowcollector#port Appflowcollector#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appflowcollector#transport Appflowcollector#transport}
  */
  readonly transport?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appflowcollector citrixadc_appflowcollector}
*/
export class Appflowcollector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appflowcollector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Appflowcollector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Appflowcollector to import
  * @param importFromId The id of the existing Appflowcollector that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appflowcollector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Appflowcollector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appflowcollector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appflowcollector citrixadc_appflowcollector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppflowcollectorConfig
  */
  public constructor(scope: Construct, id: string, config: AppflowcollectorConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appflowcollector',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
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
    this._ipaddress = config.ipaddress;
    this._name = config.name;
    this._netprofile = config.netprofile;
    this._port = config.port;
    this._transport = config.transport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ipaddress - computed: true, optional: true, required: false
  private _ipaddress?: string; 
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }
  public set ipaddress(value: string) {
    this._ipaddress = value;
  }
  public resetIpaddress() {
    this._ipaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
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

  // netprofile - computed: true, optional: true, required: false
  private _netprofile?: string; 
  public get netprofile() {
    return this.getStringAttribute('netprofile');
  }
  public set netprofile(value: string) {
    this._netprofile = value;
  }
  public resetNetprofile() {
    this._netprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netprofileInput() {
    return this._netprofile;
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

  // transport - computed: true, optional: true, required: false
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipaddress: cdktf.stringToTerraform(this._ipaddress),
      name: cdktf.stringToTerraform(this._name),
      netprofile: cdktf.stringToTerraform(this._netprofile),
      port: cdktf.numberToTerraform(this._port),
      transport: cdktf.stringToTerraform(this._transport),
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
      ipaddress: {
        value: cdktf.stringToHclTerraform(this._ipaddress),
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
      netprofile: {
        value: cdktf.stringToHclTerraform(this._netprofile),
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
      transport: {
        value: cdktf.stringToHclTerraform(this._transport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
