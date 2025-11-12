// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationtacacsactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#accounting Authenticationtacacsaction#accounting}
  */
  readonly accounting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#attribute1 Authenticationtacacsaction#attribute1}
  */
  readonly attribute1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#attribute10 Authenticationtacacsaction#attribute10}
  */
  readonly attribute10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#attribute11 Authenticationtacacsaction#attribute11}
  */
  readonly attribute11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#attribute12 Authenticationtacacsaction#attribute12}
  */
  readonly attribute12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#attribute13 Authenticationtacacsaction#attribute13}
  */
  readonly attribute13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#attribute14 Authenticationtacacsaction#attribute14}
  */
  readonly attribute14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#attribute15 Authenticationtacacsaction#attribute15}
  */
  readonly attribute15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#attribute16 Authenticationtacacsaction#attribute16}
  */
  readonly attribute16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#attribute2 Authenticationtacacsaction#attribute2}
  */
  readonly attribute2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#attribute3 Authenticationtacacsaction#attribute3}
  */
  readonly attribute3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#attribute4 Authenticationtacacsaction#attribute4}
  */
  readonly attribute4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#attribute5 Authenticationtacacsaction#attribute5}
  */
  readonly attribute5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#attribute6 Authenticationtacacsaction#attribute6}
  */
  readonly attribute6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#attribute7 Authenticationtacacsaction#attribute7}
  */
  readonly attribute7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#attribute8 Authenticationtacacsaction#attribute8}
  */
  readonly attribute8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#attribute9 Authenticationtacacsaction#attribute9}
  */
  readonly attribute9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#attributes Authenticationtacacsaction#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#auditfailedcmds Authenticationtacacsaction#auditfailedcmds}
  */
  readonly auditfailedcmds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#authorization Authenticationtacacsaction#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#authtimeout Authenticationtacacsaction#authtimeout}
  */
  readonly authtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#defaultauthenticationgroup Authenticationtacacsaction#defaultauthenticationgroup}
  */
  readonly defaultauthenticationgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#groupattrname Authenticationtacacsaction#groupattrname}
  */
  readonly groupattrname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#id Authenticationtacacsaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#name Authenticationtacacsaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#serverip Authenticationtacacsaction#serverip}
  */
  readonly serverip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#serverport Authenticationtacacsaction#serverport}
  */
  readonly serverport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#tacacssecret Authenticationtacacsaction#tacacssecret}
  */
  readonly tacacssecret?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction citrixadc_authenticationtacacsaction}
*/
export class Authenticationtacacsaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationtacacsaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticationtacacsaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticationtacacsaction to import
  * @param importFromId The id of the existing Authenticationtacacsaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticationtacacsaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationtacacsaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationtacacsaction citrixadc_authenticationtacacsaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationtacacsactionConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationtacacsactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationtacacsaction',
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
    this._accounting = config.accounting;
    this._attribute1 = config.attribute1;
    this._attribute10 = config.attribute10;
    this._attribute11 = config.attribute11;
    this._attribute12 = config.attribute12;
    this._attribute13 = config.attribute13;
    this._attribute14 = config.attribute14;
    this._attribute15 = config.attribute15;
    this._attribute16 = config.attribute16;
    this._attribute2 = config.attribute2;
    this._attribute3 = config.attribute3;
    this._attribute4 = config.attribute4;
    this._attribute5 = config.attribute5;
    this._attribute6 = config.attribute6;
    this._attribute7 = config.attribute7;
    this._attribute8 = config.attribute8;
    this._attribute9 = config.attribute9;
    this._attributes = config.attributes;
    this._auditfailedcmds = config.auditfailedcmds;
    this._authorization = config.authorization;
    this._authtimeout = config.authtimeout;
    this._defaultauthenticationgroup = config.defaultauthenticationgroup;
    this._groupattrname = config.groupattrname;
    this._id = config.id;
    this._name = config.name;
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

  // attribute1 - computed: true, optional: true, required: false
  private _attribute1?: string; 
  public get attribute1() {
    return this.getStringAttribute('attribute1');
  }
  public set attribute1(value: string) {
    this._attribute1 = value;
  }
  public resetAttribute1() {
    this._attribute1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute1Input() {
    return this._attribute1;
  }

  // attribute10 - computed: true, optional: true, required: false
  private _attribute10?: string; 
  public get attribute10() {
    return this.getStringAttribute('attribute10');
  }
  public set attribute10(value: string) {
    this._attribute10 = value;
  }
  public resetAttribute10() {
    this._attribute10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute10Input() {
    return this._attribute10;
  }

  // attribute11 - computed: true, optional: true, required: false
  private _attribute11?: string; 
  public get attribute11() {
    return this.getStringAttribute('attribute11');
  }
  public set attribute11(value: string) {
    this._attribute11 = value;
  }
  public resetAttribute11() {
    this._attribute11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute11Input() {
    return this._attribute11;
  }

  // attribute12 - computed: true, optional: true, required: false
  private _attribute12?: string; 
  public get attribute12() {
    return this.getStringAttribute('attribute12');
  }
  public set attribute12(value: string) {
    this._attribute12 = value;
  }
  public resetAttribute12() {
    this._attribute12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute12Input() {
    return this._attribute12;
  }

  // attribute13 - computed: true, optional: true, required: false
  private _attribute13?: string; 
  public get attribute13() {
    return this.getStringAttribute('attribute13');
  }
  public set attribute13(value: string) {
    this._attribute13 = value;
  }
  public resetAttribute13() {
    this._attribute13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute13Input() {
    return this._attribute13;
  }

  // attribute14 - computed: true, optional: true, required: false
  private _attribute14?: string; 
  public get attribute14() {
    return this.getStringAttribute('attribute14');
  }
  public set attribute14(value: string) {
    this._attribute14 = value;
  }
  public resetAttribute14() {
    this._attribute14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute14Input() {
    return this._attribute14;
  }

  // attribute15 - computed: true, optional: true, required: false
  private _attribute15?: string; 
  public get attribute15() {
    return this.getStringAttribute('attribute15');
  }
  public set attribute15(value: string) {
    this._attribute15 = value;
  }
  public resetAttribute15() {
    this._attribute15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute15Input() {
    return this._attribute15;
  }

  // attribute16 - computed: true, optional: true, required: false
  private _attribute16?: string; 
  public get attribute16() {
    return this.getStringAttribute('attribute16');
  }
  public set attribute16(value: string) {
    this._attribute16 = value;
  }
  public resetAttribute16() {
    this._attribute16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute16Input() {
    return this._attribute16;
  }

  // attribute2 - computed: true, optional: true, required: false
  private _attribute2?: string; 
  public get attribute2() {
    return this.getStringAttribute('attribute2');
  }
  public set attribute2(value: string) {
    this._attribute2 = value;
  }
  public resetAttribute2() {
    this._attribute2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute2Input() {
    return this._attribute2;
  }

  // attribute3 - computed: true, optional: true, required: false
  private _attribute3?: string; 
  public get attribute3() {
    return this.getStringAttribute('attribute3');
  }
  public set attribute3(value: string) {
    this._attribute3 = value;
  }
  public resetAttribute3() {
    this._attribute3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute3Input() {
    return this._attribute3;
  }

  // attribute4 - computed: true, optional: true, required: false
  private _attribute4?: string; 
  public get attribute4() {
    return this.getStringAttribute('attribute4');
  }
  public set attribute4(value: string) {
    this._attribute4 = value;
  }
  public resetAttribute4() {
    this._attribute4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute4Input() {
    return this._attribute4;
  }

  // attribute5 - computed: true, optional: true, required: false
  private _attribute5?: string; 
  public get attribute5() {
    return this.getStringAttribute('attribute5');
  }
  public set attribute5(value: string) {
    this._attribute5 = value;
  }
  public resetAttribute5() {
    this._attribute5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute5Input() {
    return this._attribute5;
  }

  // attribute6 - computed: true, optional: true, required: false
  private _attribute6?: string; 
  public get attribute6() {
    return this.getStringAttribute('attribute6');
  }
  public set attribute6(value: string) {
    this._attribute6 = value;
  }
  public resetAttribute6() {
    this._attribute6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute6Input() {
    return this._attribute6;
  }

  // attribute7 - computed: true, optional: true, required: false
  private _attribute7?: string; 
  public get attribute7() {
    return this.getStringAttribute('attribute7');
  }
  public set attribute7(value: string) {
    this._attribute7 = value;
  }
  public resetAttribute7() {
    this._attribute7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute7Input() {
    return this._attribute7;
  }

  // attribute8 - computed: true, optional: true, required: false
  private _attribute8?: string; 
  public get attribute8() {
    return this.getStringAttribute('attribute8');
  }
  public set attribute8(value: string) {
    this._attribute8 = value;
  }
  public resetAttribute8() {
    this._attribute8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute8Input() {
    return this._attribute8;
  }

  // attribute9 - computed: true, optional: true, required: false
  private _attribute9?: string; 
  public get attribute9() {
    return this.getStringAttribute('attribute9');
  }
  public set attribute9(value: string) {
    this._attribute9 = value;
  }
  public resetAttribute9() {
    this._attribute9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute9Input() {
    return this._attribute9;
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
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
      attribute1: cdktf.stringToTerraform(this._attribute1),
      attribute10: cdktf.stringToTerraform(this._attribute10),
      attribute11: cdktf.stringToTerraform(this._attribute11),
      attribute12: cdktf.stringToTerraform(this._attribute12),
      attribute13: cdktf.stringToTerraform(this._attribute13),
      attribute14: cdktf.stringToTerraform(this._attribute14),
      attribute15: cdktf.stringToTerraform(this._attribute15),
      attribute16: cdktf.stringToTerraform(this._attribute16),
      attribute2: cdktf.stringToTerraform(this._attribute2),
      attribute3: cdktf.stringToTerraform(this._attribute3),
      attribute4: cdktf.stringToTerraform(this._attribute4),
      attribute5: cdktf.stringToTerraform(this._attribute5),
      attribute6: cdktf.stringToTerraform(this._attribute6),
      attribute7: cdktf.stringToTerraform(this._attribute7),
      attribute8: cdktf.stringToTerraform(this._attribute8),
      attribute9: cdktf.stringToTerraform(this._attribute9),
      attributes: cdktf.stringToTerraform(this._attributes),
      auditfailedcmds: cdktf.stringToTerraform(this._auditfailedcmds),
      authorization: cdktf.stringToTerraform(this._authorization),
      authtimeout: cdktf.numberToTerraform(this._authtimeout),
      defaultauthenticationgroup: cdktf.stringToTerraform(this._defaultauthenticationgroup),
      groupattrname: cdktf.stringToTerraform(this._groupattrname),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      attribute1: {
        value: cdktf.stringToHclTerraform(this._attribute1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute10: {
        value: cdktf.stringToHclTerraform(this._attribute10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute11: {
        value: cdktf.stringToHclTerraform(this._attribute11),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute12: {
        value: cdktf.stringToHclTerraform(this._attribute12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute13: {
        value: cdktf.stringToHclTerraform(this._attribute13),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute14: {
        value: cdktf.stringToHclTerraform(this._attribute14),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute15: {
        value: cdktf.stringToHclTerraform(this._attribute15),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute16: {
        value: cdktf.stringToHclTerraform(this._attribute16),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute2: {
        value: cdktf.stringToHclTerraform(this._attribute2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute3: {
        value: cdktf.stringToHclTerraform(this._attribute3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute4: {
        value: cdktf.stringToHclTerraform(this._attribute4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute5: {
        value: cdktf.stringToHclTerraform(this._attribute5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute6: {
        value: cdktf.stringToHclTerraform(this._attribute6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute7: {
        value: cdktf.stringToHclTerraform(this._attribute7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute8: {
        value: cdktf.stringToHclTerraform(this._attribute8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute9: {
        value: cdktf.stringToHclTerraform(this._attribute9),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
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
