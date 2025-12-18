// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IcaaccessprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile#clientaudioredirection Icaaccessprofile#clientaudioredirection}
  */
  readonly clientaudioredirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile#clientclipboardredirection Icaaccessprofile#clientclipboardredirection}
  */
  readonly clientclipboardredirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile#clientcomportredirection Icaaccessprofile#clientcomportredirection}
  */
  readonly clientcomportredirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile#clientdriveredirection Icaaccessprofile#clientdriveredirection}
  */
  readonly clientdriveredirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile#clientprinterredirection Icaaccessprofile#clientprinterredirection}
  */
  readonly clientprinterredirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile#clienttwaindeviceredirection Icaaccessprofile#clienttwaindeviceredirection}
  */
  readonly clienttwaindeviceredirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile#clientusbdriveredirection Icaaccessprofile#clientusbdriveredirection}
  */
  readonly clientusbdriveredirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile#connectclientlptports Icaaccessprofile#connectclientlptports}
  */
  readonly connectclientlptports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile#draganddrop Icaaccessprofile#draganddrop}
  */
  readonly draganddrop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile#fido2redirection Icaaccessprofile#fido2redirection}
  */
  readonly fido2Redirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile#id Icaaccessprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile#localremotedatasharing Icaaccessprofile#localremotedatasharing}
  */
  readonly localremotedatasharing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile#multistream Icaaccessprofile#multistream}
  */
  readonly multistream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile#name Icaaccessprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile#smartcardredirection Icaaccessprofile#smartcardredirection}
  */
  readonly smartcardredirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile#wiaredirection Icaaccessprofile#wiaredirection}
  */
  readonly wiaredirection?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile citrixadc_icaaccessprofile}
*/
export class Icaaccessprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_icaaccessprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Icaaccessprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Icaaccessprofile to import
  * @param importFromId The id of the existing Icaaccessprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Icaaccessprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_icaaccessprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaccessprofile citrixadc_icaaccessprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IcaaccessprofileConfig
  */
  public constructor(scope: Construct, id: string, config: IcaaccessprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_icaaccessprofile',
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
    this._clientaudioredirection = config.clientaudioredirection;
    this._clientclipboardredirection = config.clientclipboardredirection;
    this._clientcomportredirection = config.clientcomportredirection;
    this._clientdriveredirection = config.clientdriveredirection;
    this._clientprinterredirection = config.clientprinterredirection;
    this._clienttwaindeviceredirection = config.clienttwaindeviceredirection;
    this._clientusbdriveredirection = config.clientusbdriveredirection;
    this._connectclientlptports = config.connectclientlptports;
    this._draganddrop = config.draganddrop;
    this._fido2Redirection = config.fido2Redirection;
    this._id = config.id;
    this._localremotedatasharing = config.localremotedatasharing;
    this._multistream = config.multistream;
    this._name = config.name;
    this._smartcardredirection = config.smartcardredirection;
    this._wiaredirection = config.wiaredirection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clientaudioredirection - computed: true, optional: true, required: false
  private _clientaudioredirection?: string; 
  public get clientaudioredirection() {
    return this.getStringAttribute('clientaudioredirection');
  }
  public set clientaudioredirection(value: string) {
    this._clientaudioredirection = value;
  }
  public resetClientaudioredirection() {
    this._clientaudioredirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientaudioredirectionInput() {
    return this._clientaudioredirection;
  }

  // clientclipboardredirection - computed: true, optional: true, required: false
  private _clientclipboardredirection?: string; 
  public get clientclipboardredirection() {
    return this.getStringAttribute('clientclipboardredirection');
  }
  public set clientclipboardredirection(value: string) {
    this._clientclipboardredirection = value;
  }
  public resetClientclipboardredirection() {
    this._clientclipboardredirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientclipboardredirectionInput() {
    return this._clientclipboardredirection;
  }

  // clientcomportredirection - computed: true, optional: true, required: false
  private _clientcomportredirection?: string; 
  public get clientcomportredirection() {
    return this.getStringAttribute('clientcomportredirection');
  }
  public set clientcomportredirection(value: string) {
    this._clientcomportredirection = value;
  }
  public resetClientcomportredirection() {
    this._clientcomportredirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientcomportredirectionInput() {
    return this._clientcomportredirection;
  }

  // clientdriveredirection - computed: true, optional: true, required: false
  private _clientdriveredirection?: string; 
  public get clientdriveredirection() {
    return this.getStringAttribute('clientdriveredirection');
  }
  public set clientdriveredirection(value: string) {
    this._clientdriveredirection = value;
  }
  public resetClientdriveredirection() {
    this._clientdriveredirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientdriveredirectionInput() {
    return this._clientdriveredirection;
  }

  // clientprinterredirection - computed: true, optional: true, required: false
  private _clientprinterredirection?: string; 
  public get clientprinterredirection() {
    return this.getStringAttribute('clientprinterredirection');
  }
  public set clientprinterredirection(value: string) {
    this._clientprinterredirection = value;
  }
  public resetClientprinterredirection() {
    this._clientprinterredirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientprinterredirectionInput() {
    return this._clientprinterredirection;
  }

  // clienttwaindeviceredirection - computed: true, optional: true, required: false
  private _clienttwaindeviceredirection?: string; 
  public get clienttwaindeviceredirection() {
    return this.getStringAttribute('clienttwaindeviceredirection');
  }
  public set clienttwaindeviceredirection(value: string) {
    this._clienttwaindeviceredirection = value;
  }
  public resetClienttwaindeviceredirection() {
    this._clienttwaindeviceredirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clienttwaindeviceredirectionInput() {
    return this._clienttwaindeviceredirection;
  }

  // clientusbdriveredirection - computed: true, optional: true, required: false
  private _clientusbdriveredirection?: string; 
  public get clientusbdriveredirection() {
    return this.getStringAttribute('clientusbdriveredirection');
  }
  public set clientusbdriveredirection(value: string) {
    this._clientusbdriveredirection = value;
  }
  public resetClientusbdriveredirection() {
    this._clientusbdriveredirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientusbdriveredirectionInput() {
    return this._clientusbdriveredirection;
  }

  // connectclientlptports - computed: true, optional: true, required: false
  private _connectclientlptports?: string; 
  public get connectclientlptports() {
    return this.getStringAttribute('connectclientlptports');
  }
  public set connectclientlptports(value: string) {
    this._connectclientlptports = value;
  }
  public resetConnectclientlptports() {
    this._connectclientlptports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectclientlptportsInput() {
    return this._connectclientlptports;
  }

  // draganddrop - computed: true, optional: true, required: false
  private _draganddrop?: string; 
  public get draganddrop() {
    return this.getStringAttribute('draganddrop');
  }
  public set draganddrop(value: string) {
    this._draganddrop = value;
  }
  public resetDraganddrop() {
    this._draganddrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get draganddropInput() {
    return this._draganddrop;
  }

  // fido2redirection - computed: true, optional: true, required: false
  private _fido2Redirection?: string; 
  public get fido2Redirection() {
    return this.getStringAttribute('fido2redirection');
  }
  public set fido2Redirection(value: string) {
    this._fido2Redirection = value;
  }
  public resetFido2Redirection() {
    this._fido2Redirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fido2RedirectionInput() {
    return this._fido2Redirection;
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

  // localremotedatasharing - computed: true, optional: true, required: false
  private _localremotedatasharing?: string; 
  public get localremotedatasharing() {
    return this.getStringAttribute('localremotedatasharing');
  }
  public set localremotedatasharing(value: string) {
    this._localremotedatasharing = value;
  }
  public resetLocalremotedatasharing() {
    this._localremotedatasharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localremotedatasharingInput() {
    return this._localremotedatasharing;
  }

  // multistream - computed: true, optional: true, required: false
  private _multistream?: string; 
  public get multistream() {
    return this.getStringAttribute('multistream');
  }
  public set multistream(value: string) {
    this._multistream = value;
  }
  public resetMultistream() {
    this._multistream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multistreamInput() {
    return this._multistream;
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

  // smartcardredirection - computed: true, optional: true, required: false
  private _smartcardredirection?: string; 
  public get smartcardredirection() {
    return this.getStringAttribute('smartcardredirection');
  }
  public set smartcardredirection(value: string) {
    this._smartcardredirection = value;
  }
  public resetSmartcardredirection() {
    this._smartcardredirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartcardredirectionInput() {
    return this._smartcardredirection;
  }

  // wiaredirection - computed: true, optional: true, required: false
  private _wiaredirection?: string; 
  public get wiaredirection() {
    return this.getStringAttribute('wiaredirection');
  }
  public set wiaredirection(value: string) {
    this._wiaredirection = value;
  }
  public resetWiaredirection() {
    this._wiaredirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wiaredirectionInput() {
    return this._wiaredirection;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clientaudioredirection: cdktf.stringToTerraform(this._clientaudioredirection),
      clientclipboardredirection: cdktf.stringToTerraform(this._clientclipboardredirection),
      clientcomportredirection: cdktf.stringToTerraform(this._clientcomportredirection),
      clientdriveredirection: cdktf.stringToTerraform(this._clientdriveredirection),
      clientprinterredirection: cdktf.stringToTerraform(this._clientprinterredirection),
      clienttwaindeviceredirection: cdktf.stringToTerraform(this._clienttwaindeviceredirection),
      clientusbdriveredirection: cdktf.stringToTerraform(this._clientusbdriveredirection),
      connectclientlptports: cdktf.stringToTerraform(this._connectclientlptports),
      draganddrop: cdktf.stringToTerraform(this._draganddrop),
      fido2redirection: cdktf.stringToTerraform(this._fido2Redirection),
      id: cdktf.stringToTerraform(this._id),
      localremotedatasharing: cdktf.stringToTerraform(this._localremotedatasharing),
      multistream: cdktf.stringToTerraform(this._multistream),
      name: cdktf.stringToTerraform(this._name),
      smartcardredirection: cdktf.stringToTerraform(this._smartcardredirection),
      wiaredirection: cdktf.stringToTerraform(this._wiaredirection),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clientaudioredirection: {
        value: cdktf.stringToHclTerraform(this._clientaudioredirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientclipboardredirection: {
        value: cdktf.stringToHclTerraform(this._clientclipboardredirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientcomportredirection: {
        value: cdktf.stringToHclTerraform(this._clientcomportredirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientdriveredirection: {
        value: cdktf.stringToHclTerraform(this._clientdriveredirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientprinterredirection: {
        value: cdktf.stringToHclTerraform(this._clientprinterredirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clienttwaindeviceredirection: {
        value: cdktf.stringToHclTerraform(this._clienttwaindeviceredirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientusbdriveredirection: {
        value: cdktf.stringToHclTerraform(this._clientusbdriveredirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connectclientlptports: {
        value: cdktf.stringToHclTerraform(this._connectclientlptports),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      draganddrop: {
        value: cdktf.stringToHclTerraform(this._draganddrop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fido2redirection: {
        value: cdktf.stringToHclTerraform(this._fido2Redirection),
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
      localremotedatasharing: {
        value: cdktf.stringToHclTerraform(this._localremotedatasharing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multistream: {
        value: cdktf.stringToHclTerraform(this._multistream),
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
      smartcardredirection: {
        value: cdktf.stringToHclTerraform(this._smartcardredirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wiaredirection: {
        value: cdktf.stringToHclTerraform(this._wiaredirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
