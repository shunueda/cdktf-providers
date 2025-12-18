// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/tmtrafficaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TmtrafficactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/tmtrafficaction#apptimeout Tmtrafficaction#apptimeout}
  */
  readonly apptimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/tmtrafficaction#forcedtimeout Tmtrafficaction#forcedtimeout}
  */
  readonly forcedtimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/tmtrafficaction#forcedtimeoutval Tmtrafficaction#forcedtimeoutval}
  */
  readonly forcedtimeoutval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/tmtrafficaction#formssoaction Tmtrafficaction#formssoaction}
  */
  readonly formssoaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/tmtrafficaction#id Tmtrafficaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/tmtrafficaction#initiatelogout Tmtrafficaction#initiatelogout}
  */
  readonly initiatelogout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/tmtrafficaction#kcdaccount Tmtrafficaction#kcdaccount}
  */
  readonly kcdaccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/tmtrafficaction#name Tmtrafficaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/tmtrafficaction#passwdexpression Tmtrafficaction#passwdexpression}
  */
  readonly passwdexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/tmtrafficaction#persistentcookie Tmtrafficaction#persistentcookie}
  */
  readonly persistentcookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/tmtrafficaction#samlssoprofile Tmtrafficaction#samlssoprofile}
  */
  readonly samlssoprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/tmtrafficaction#sso Tmtrafficaction#sso}
  */
  readonly sso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/tmtrafficaction#userexpression Tmtrafficaction#userexpression}
  */
  readonly userexpression?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/tmtrafficaction citrixadc_tmtrafficaction}
*/
export class Tmtrafficaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_tmtrafficaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tmtrafficaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tmtrafficaction to import
  * @param importFromId The id of the existing Tmtrafficaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/tmtrafficaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tmtrafficaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_tmtrafficaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/tmtrafficaction citrixadc_tmtrafficaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TmtrafficactionConfig
  */
  public constructor(scope: Construct, id: string, config: TmtrafficactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_tmtrafficaction',
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
    this._apptimeout = config.apptimeout;
    this._forcedtimeout = config.forcedtimeout;
    this._forcedtimeoutval = config.forcedtimeoutval;
    this._formssoaction = config.formssoaction;
    this._id = config.id;
    this._initiatelogout = config.initiatelogout;
    this._kcdaccount = config.kcdaccount;
    this._name = config.name;
    this._passwdexpression = config.passwdexpression;
    this._persistentcookie = config.persistentcookie;
    this._samlssoprofile = config.samlssoprofile;
    this._sso = config.sso;
    this._userexpression = config.userexpression;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apptimeout - computed: true, optional: true, required: false
  private _apptimeout?: number; 
  public get apptimeout() {
    return this.getNumberAttribute('apptimeout');
  }
  public set apptimeout(value: number) {
    this._apptimeout = value;
  }
  public resetApptimeout() {
    this._apptimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apptimeoutInput() {
    return this._apptimeout;
  }

  // forcedtimeout - computed: true, optional: true, required: false
  private _forcedtimeout?: string; 
  public get forcedtimeout() {
    return this.getStringAttribute('forcedtimeout');
  }
  public set forcedtimeout(value: string) {
    this._forcedtimeout = value;
  }
  public resetForcedtimeout() {
    this._forcedtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedtimeoutInput() {
    return this._forcedtimeout;
  }

  // forcedtimeoutval - computed: true, optional: true, required: false
  private _forcedtimeoutval?: number; 
  public get forcedtimeoutval() {
    return this.getNumberAttribute('forcedtimeoutval');
  }
  public set forcedtimeoutval(value: number) {
    this._forcedtimeoutval = value;
  }
  public resetForcedtimeoutval() {
    this._forcedtimeoutval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedtimeoutvalInput() {
    return this._forcedtimeoutval;
  }

  // formssoaction - computed: true, optional: true, required: false
  private _formssoaction?: string; 
  public get formssoaction() {
    return this.getStringAttribute('formssoaction');
  }
  public set formssoaction(value: string) {
    this._formssoaction = value;
  }
  public resetFormssoaction() {
    this._formssoaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formssoactionInput() {
    return this._formssoaction;
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

  // initiatelogout - computed: true, optional: true, required: false
  private _initiatelogout?: string; 
  public get initiatelogout() {
    return this.getStringAttribute('initiatelogout');
  }
  public set initiatelogout(value: string) {
    this._initiatelogout = value;
  }
  public resetInitiatelogout() {
    this._initiatelogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatelogoutInput() {
    return this._initiatelogout;
  }

  // kcdaccount - computed: true, optional: true, required: false
  private _kcdaccount?: string; 
  public get kcdaccount() {
    return this.getStringAttribute('kcdaccount');
  }
  public set kcdaccount(value: string) {
    this._kcdaccount = value;
  }
  public resetKcdaccount() {
    this._kcdaccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kcdaccountInput() {
    return this._kcdaccount;
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

  // passwdexpression - computed: true, optional: true, required: false
  private _passwdexpression?: string; 
  public get passwdexpression() {
    return this.getStringAttribute('passwdexpression');
  }
  public set passwdexpression(value: string) {
    this._passwdexpression = value;
  }
  public resetPasswdexpression() {
    this._passwdexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdexpressionInput() {
    return this._passwdexpression;
  }

  // persistentcookie - computed: true, optional: true, required: false
  private _persistentcookie?: string; 
  public get persistentcookie() {
    return this.getStringAttribute('persistentcookie');
  }
  public set persistentcookie(value: string) {
    this._persistentcookie = value;
  }
  public resetPersistentcookie() {
    this._persistentcookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentcookieInput() {
    return this._persistentcookie;
  }

  // samlssoprofile - computed: true, optional: true, required: false
  private _samlssoprofile?: string; 
  public get samlssoprofile() {
    return this.getStringAttribute('samlssoprofile');
  }
  public set samlssoprofile(value: string) {
    this._samlssoprofile = value;
  }
  public resetSamlssoprofile() {
    this._samlssoprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlssoprofileInput() {
    return this._samlssoprofile;
  }

  // sso - computed: true, optional: true, required: false
  private _sso?: string; 
  public get sso() {
    return this.getStringAttribute('sso');
  }
  public set sso(value: string) {
    this._sso = value;
  }
  public resetSso() {
    this._sso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoInput() {
    return this._sso;
  }

  // userexpression - computed: true, optional: true, required: false
  private _userexpression?: string; 
  public get userexpression() {
    return this.getStringAttribute('userexpression');
  }
  public set userexpression(value: string) {
    this._userexpression = value;
  }
  public resetUserexpression() {
    this._userexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userexpressionInput() {
    return this._userexpression;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apptimeout: cdktf.numberToTerraform(this._apptimeout),
      forcedtimeout: cdktf.stringToTerraform(this._forcedtimeout),
      forcedtimeoutval: cdktf.numberToTerraform(this._forcedtimeoutval),
      formssoaction: cdktf.stringToTerraform(this._formssoaction),
      id: cdktf.stringToTerraform(this._id),
      initiatelogout: cdktf.stringToTerraform(this._initiatelogout),
      kcdaccount: cdktf.stringToTerraform(this._kcdaccount),
      name: cdktf.stringToTerraform(this._name),
      passwdexpression: cdktf.stringToTerraform(this._passwdexpression),
      persistentcookie: cdktf.stringToTerraform(this._persistentcookie),
      samlssoprofile: cdktf.stringToTerraform(this._samlssoprofile),
      sso: cdktf.stringToTerraform(this._sso),
      userexpression: cdktf.stringToTerraform(this._userexpression),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apptimeout: {
        value: cdktf.numberToHclTerraform(this._apptimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forcedtimeout: {
        value: cdktf.stringToHclTerraform(this._forcedtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forcedtimeoutval: {
        value: cdktf.numberToHclTerraform(this._forcedtimeoutval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      formssoaction: {
        value: cdktf.stringToHclTerraform(this._formssoaction),
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
      initiatelogout: {
        value: cdktf.stringToHclTerraform(this._initiatelogout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kcdaccount: {
        value: cdktf.stringToHclTerraform(this._kcdaccount),
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
      passwdexpression: {
        value: cdktf.stringToHclTerraform(this._passwdexpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistentcookie: {
        value: cdktf.stringToHclTerraform(this._persistentcookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samlssoprofile: {
        value: cdktf.stringToHclTerraform(this._samlssoprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso: {
        value: cdktf.stringToHclTerraform(this._sso),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userexpression: {
        value: cdktf.stringToHclTerraform(this._userexpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
