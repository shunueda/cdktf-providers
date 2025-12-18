// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationwebauthactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#attribute1 Authenticationwebauthaction#attribute1}
  */
  readonly attribute1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#attribute10 Authenticationwebauthaction#attribute10}
  */
  readonly attribute10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#attribute11 Authenticationwebauthaction#attribute11}
  */
  readonly attribute11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#attribute12 Authenticationwebauthaction#attribute12}
  */
  readonly attribute12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#attribute13 Authenticationwebauthaction#attribute13}
  */
  readonly attribute13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#attribute14 Authenticationwebauthaction#attribute14}
  */
  readonly attribute14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#attribute15 Authenticationwebauthaction#attribute15}
  */
  readonly attribute15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#attribute16 Authenticationwebauthaction#attribute16}
  */
  readonly attribute16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#attribute2 Authenticationwebauthaction#attribute2}
  */
  readonly attribute2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#attribute3 Authenticationwebauthaction#attribute3}
  */
  readonly attribute3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#attribute4 Authenticationwebauthaction#attribute4}
  */
  readonly attribute4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#attribute5 Authenticationwebauthaction#attribute5}
  */
  readonly attribute5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#attribute6 Authenticationwebauthaction#attribute6}
  */
  readonly attribute6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#attribute7 Authenticationwebauthaction#attribute7}
  */
  readonly attribute7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#attribute8 Authenticationwebauthaction#attribute8}
  */
  readonly attribute8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#attribute9 Authenticationwebauthaction#attribute9}
  */
  readonly attribute9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#defaultauthenticationgroup Authenticationwebauthaction#defaultauthenticationgroup}
  */
  readonly defaultauthenticationgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#fullreqexpr Authenticationwebauthaction#fullreqexpr}
  */
  readonly fullreqexpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#id Authenticationwebauthaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#name Authenticationwebauthaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#scheme Authenticationwebauthaction#scheme}
  */
  readonly scheme: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#serverip Authenticationwebauthaction#serverip}
  */
  readonly serverip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#serverport Authenticationwebauthaction#serverport}
  */
  readonly serverport: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#successrule Authenticationwebauthaction#successrule}
  */
  readonly successrule: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction citrixadc_authenticationwebauthaction}
*/
export class Authenticationwebauthaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationwebauthaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticationwebauthaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticationwebauthaction to import
  * @param importFromId The id of the existing Authenticationwebauthaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticationwebauthaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationwebauthaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationwebauthaction citrixadc_authenticationwebauthaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationwebauthactionConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationwebauthactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationwebauthaction',
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
    this._defaultauthenticationgroup = config.defaultauthenticationgroup;
    this._fullreqexpr = config.fullreqexpr;
    this._id = config.id;
    this._name = config.name;
    this._scheme = config.scheme;
    this._serverip = config.serverip;
    this._serverport = config.serverport;
    this._successrule = config.successrule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fullreqexpr - computed: true, optional: true, required: false
  private _fullreqexpr?: string; 
  public get fullreqexpr() {
    return this.getStringAttribute('fullreqexpr');
  }
  public set fullreqexpr(value: string) {
    this._fullreqexpr = value;
  }
  public resetFullreqexpr() {
    this._fullreqexpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullreqexprInput() {
    return this._fullreqexpr;
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

  // scheme - computed: false, optional: false, required: true
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // serverip - computed: false, optional: false, required: true
  private _serverip?: string; 
  public get serverip() {
    return this.getStringAttribute('serverip');
  }
  public set serverip(value: string) {
    this._serverip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serveripInput() {
    return this._serverip;
  }

  // serverport - computed: false, optional: false, required: true
  private _serverport?: number; 
  public get serverport() {
    return this.getNumberAttribute('serverport');
  }
  public set serverport(value: number) {
    this._serverport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverportInput() {
    return this._serverport;
  }

  // successrule - computed: false, optional: false, required: true
  private _successrule?: string; 
  public get successrule() {
    return this.getStringAttribute('successrule');
  }
  public set successrule(value: string) {
    this._successrule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successruleInput() {
    return this._successrule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
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
      defaultauthenticationgroup: cdktf.stringToTerraform(this._defaultauthenticationgroup),
      fullreqexpr: cdktf.stringToTerraform(this._fullreqexpr),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scheme: cdktf.stringToTerraform(this._scheme),
      serverip: cdktf.stringToTerraform(this._serverip),
      serverport: cdktf.numberToTerraform(this._serverport),
      successrule: cdktf.stringToTerraform(this._successrule),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      defaultauthenticationgroup: {
        value: cdktf.stringToHclTerraform(this._defaultauthenticationgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fullreqexpr: {
        value: cdktf.stringToHclTerraform(this._fullreqexpr),
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
      scheme: {
        value: cdktf.stringToHclTerraform(this._scheme),
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
      successrule: {
        value: cdktf.stringToHclTerraform(this._successrule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
