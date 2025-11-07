// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaatacacsparams
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaatacacsparamsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaatacacsparams#accounting Aaatacacsparams#accounting}
  */
  readonly accounting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaatacacsparams#auditfailedcmds Aaatacacsparams#auditfailedcmds}
  */
  readonly auditfailedcmds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaatacacsparams#authorization Aaatacacsparams#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaatacacsparams#authtimeout Aaatacacsparams#authtimeout}
  */
  readonly authtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaatacacsparams#defaultauthenticationgroup Aaatacacsparams#defaultauthenticationgroup}
  */
  readonly defaultauthenticationgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaatacacsparams#groupattrname Aaatacacsparams#groupattrname}
  */
  readonly groupattrname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaatacacsparams#id Aaatacacsparams#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaatacacsparams#serverip Aaatacacsparams#serverip}
  */
  readonly serverip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaatacacsparams#serverport Aaatacacsparams#serverport}
  */
  readonly serverport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaatacacsparams#tacacssecret Aaatacacsparams#tacacssecret}
  */
  readonly tacacssecret?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaatacacsparams citrixadc_aaatacacsparams}
*/
export class Aaatacacsparams extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_aaatacacsparams";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Aaatacacsparams resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Aaatacacsparams to import
  * @param importFromId The id of the existing Aaatacacsparams that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaatacacsparams#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Aaatacacsparams to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_aaatacacsparams", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaatacacsparams citrixadc_aaatacacsparams} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaatacacsparamsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AaatacacsparamsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_aaatacacsparams',
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
    this._accounting = config.accounting;
    this._auditfailedcmds = config.auditfailedcmds;
    this._authorization = config.authorization;
    this._authtimeout = config.authtimeout;
    this._defaultauthenticationgroup = config.defaultauthenticationgroup;
    this._groupattrname = config.groupattrname;
    this._id = config.id;
    this._serverip = config.serverip;
    this._serverport = config.serverport;
    this._tacacssecret = config.tacacssecret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounting - computed: true, optional: true, required: false
  private _accounting?: string; 
  public get accounting() {
    return this.getStringAttribute('accounting');
  }
  public set accounting(value: string) {
    this._accounting = value;
  }
  public resetAccounting() {
    this._accounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingInput() {
    return this._accounting;
  }

  // auditfailedcmds - computed: true, optional: true, required: false
  private _auditfailedcmds?: string; 
  public get auditfailedcmds() {
    return this.getStringAttribute('auditfailedcmds');
  }
  public set auditfailedcmds(value: string) {
    this._auditfailedcmds = value;
  }
  public resetAuditfailedcmds() {
    this._auditfailedcmds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditfailedcmdsInput() {
    return this._auditfailedcmds;
  }

  // authorization - computed: true, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // authtimeout - computed: true, optional: true, required: false
  private _authtimeout?: number; 
  public get authtimeout() {
    return this.getNumberAttribute('authtimeout');
  }
  public set authtimeout(value: number) {
    this._authtimeout = value;
  }
  public resetAuthtimeout() {
    this._authtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authtimeoutInput() {
    return this._authtimeout;
  }

  // defaultauthenticationgroup - computed: true, optional: true, required: false
  private _defaultauthenticationgroup?: string; 
  public get defaultauthenticationgroup() {
    return this.getStringAttribute('defaultauthenticationgroup');
  }
  public set defaultauthenticationgroup(value: string) {
    this._defaultauthenticationgroup = value;
  }
  public resetDefaultauthenticationgroup() {
    this._defaultauthenticationgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultauthenticationgroupInput() {
    return this._defaultauthenticationgroup;
  }

  // groupattrname - computed: true, optional: true, required: false
  private _groupattrname?: string; 
  public get groupattrname() {
    return this.getStringAttribute('groupattrname');
  }
  public set groupattrname(value: string) {
    this._groupattrname = value;
  }
  public resetGroupattrname() {
    this._groupattrname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupattrnameInput() {
    return this._groupattrname;
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

  // tacacssecret - computed: true, optional: true, required: false
  private _tacacssecret?: string; 
  public get tacacssecret() {
    return this.getStringAttribute('tacacssecret');
  }
  public set tacacssecret(value: string) {
    this._tacacssecret = value;
  }
  public resetTacacssecret() {
    this._tacacssecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacacssecretInput() {
    return this._tacacssecret;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accounting: cdktf.stringToTerraform(this._accounting),
      auditfailedcmds: cdktf.stringToTerraform(this._auditfailedcmds),
      authorization: cdktf.stringToTerraform(this._authorization),
      authtimeout: cdktf.numberToTerraform(this._authtimeout),
      defaultauthenticationgroup: cdktf.stringToTerraform(this._defaultauthenticationgroup),
      groupattrname: cdktf.stringToTerraform(this._groupattrname),
      id: cdktf.stringToTerraform(this._id),
      serverip: cdktf.stringToTerraform(this._serverip),
      serverport: cdktf.numberToTerraform(this._serverport),
      tacacssecret: cdktf.stringToTerraform(this._tacacssecret),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounting: {
        value: cdktf.stringToHclTerraform(this._accounting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auditfailedcmds: {
        value: cdktf.stringToHclTerraform(this._auditfailedcmds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization: {
        value: cdktf.stringToHclTerraform(this._authorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authtimeout: {
        value: cdktf.numberToHclTerraform(this._authtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defaultauthenticationgroup: {
        value: cdktf.stringToHclTerraform(this._defaultauthenticationgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupattrname: {
        value: cdktf.stringToHclTerraform(this._groupattrname),
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
      serverip: {
        value: cdktf.stringToHclTerraform(this._serverip),
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
      tacacssecret: {
        value: cdktf.stringToHclTerraform(this._tacacssecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
