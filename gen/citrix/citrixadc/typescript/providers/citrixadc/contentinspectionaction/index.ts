// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContentinspectionactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionaction#icapprofilename Contentinspectionaction#icapprofilename}
  */
  readonly icapprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionaction#id Contentinspectionaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionaction#ifserverdown Contentinspectionaction#ifserverdown}
  */
  readonly ifserverdown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionaction#name Contentinspectionaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionaction#serverip Contentinspectionaction#serverip}
  */
  readonly serverip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionaction#servername Contentinspectionaction#servername}
  */
  readonly servername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionaction#serverport Contentinspectionaction#serverport}
  */
  readonly serverport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionaction#type Contentinspectionaction#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionaction citrixadc_contentinspectionaction}
*/
export class Contentinspectionaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_contentinspectionaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Contentinspectionaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Contentinspectionaction to import
  * @param importFromId The id of the existing Contentinspectionaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Contentinspectionaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_contentinspectionaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/contentinspectionaction citrixadc_contentinspectionaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContentinspectionactionConfig
  */
  public constructor(scope: Construct, id: string, config: ContentinspectionactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_contentinspectionaction',
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
    this._icapprofilename = config.icapprofilename;
    this._id = config.id;
    this._ifserverdown = config.ifserverdown;
    this._name = config.name;
    this._serverip = config.serverip;
    this._servername = config.servername;
    this._serverport = config.serverport;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // icapprofilename - computed: true, optional: true, required: false
  private _icapprofilename?: string; 
  public get icapprofilename() {
    return this.getStringAttribute('icapprofilename');
  }
  public set icapprofilename(value: string) {
    this._icapprofilename = value;
  }
  public resetIcapprofilename() {
    this._icapprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icapprofilenameInput() {
    return this._icapprofilename;
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

  // ifserverdown - computed: true, optional: true, required: false
  private _ifserverdown?: string; 
  public get ifserverdown() {
    return this.getStringAttribute('ifserverdown');
  }
  public set ifserverdown(value: string) {
    this._ifserverdown = value;
  }
  public resetIfserverdown() {
    this._ifserverdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifserverdownInput() {
    return this._ifserverdown;
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

  // serverip - computed: true, optional: true, required: false
  private _serverip?: string; 
  public get serverip() {
    return this.getStringAttribute('serverip');
  }
  public set serverip(value: string) {
    this._serverip = value;
  }
  public resetServerip() {
    this._serverip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveripInput() {
    return this._serverip;
  }

  // servername - computed: true, optional: true, required: false
  private _servername?: string; 
  public get servername() {
    return this.getStringAttribute('servername');
  }
  public set servername(value: string) {
    this._servername = value;
  }
  public resetServername() {
    this._servername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameInput() {
    return this._servername;
  }

  // serverport - computed: true, optional: true, required: false
  private _serverport?: number; 
  public get serverport() {
    return this.getNumberAttribute('serverport');
  }
  public set serverport(value: number) {
    this._serverport = value;
  }
  public resetServerport() {
    this._serverport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverportInput() {
    return this._serverport;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      icapprofilename: cdktf.stringToTerraform(this._icapprofilename),
      id: cdktf.stringToTerraform(this._id),
      ifserverdown: cdktf.stringToTerraform(this._ifserverdown),
      name: cdktf.stringToTerraform(this._name),
      serverip: cdktf.stringToTerraform(this._serverip),
      servername: cdktf.stringToTerraform(this._servername),
      serverport: cdktf.numberToTerraform(this._serverport),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      icapprofilename: {
        value: cdktf.stringToHclTerraform(this._icapprofilename),
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
      ifserverdown: {
        value: cdktf.stringToHclTerraform(this._ifserverdown),
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
      serverip: {
        value: cdktf.stringToHclTerraform(this._serverip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servername: {
        value: cdktf.stringToHclTerraform(this._servername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverport: {
        value: cdktf.numberToHclTerraform(this._serverport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
