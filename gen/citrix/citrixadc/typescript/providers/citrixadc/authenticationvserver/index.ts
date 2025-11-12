// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationvserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver#appflowlog Authenticationvserver#appflowlog}
  */
  readonly appflowlog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver#authentication Authenticationvserver#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver#authenticationdomain Authenticationvserver#authenticationdomain}
  */
  readonly authenticationdomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver#certkeynames Authenticationvserver#certkeynames}
  */
  readonly certkeynames?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver#comment Authenticationvserver#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver#failedlogintimeout Authenticationvserver#failedlogintimeout}
  */
  readonly failedlogintimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver#id Authenticationvserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver#ipv46 Authenticationvserver#ipv46}
  */
  readonly ipv46?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver#maxloginattempts Authenticationvserver#maxloginattempts}
  */
  readonly maxloginattempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver#name Authenticationvserver#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver#port Authenticationvserver#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver#range Authenticationvserver#range}
  */
  readonly range?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver#samesite Authenticationvserver#samesite}
  */
  readonly samesite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver#servicetype Authenticationvserver#servicetype}
  */
  readonly servicetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver#state Authenticationvserver#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver#td Authenticationvserver#td}
  */
  readonly td?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver citrixadc_authenticationvserver}
*/
export class Authenticationvserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationvserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticationvserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticationvserver to import
  * @param importFromId The id of the existing Authenticationvserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticationvserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationvserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationvserver citrixadc_authenticationvserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationvserverConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationvserverConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationvserver',
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
    this._appflowlog = config.appflowlog;
    this._authentication = config.authentication;
    this._authenticationdomain = config.authenticationdomain;
    this._certkeynames = config.certkeynames;
    this._comment = config.comment;
    this._failedlogintimeout = config.failedlogintimeout;
    this._id = config.id;
    this._ipv46 = config.ipv46;
    this._maxloginattempts = config.maxloginattempts;
    this._name = config.name;
    this._port = config.port;
    this._range = config.range;
    this._samesite = config.samesite;
    this._servicetype = config.servicetype;
    this._state = config.state;
    this._td = config.td;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appflowlog - computed: true, optional: true, required: false
  private _appflowlog?: string; 
  public get appflowlog() {
    return this.getStringAttribute('appflowlog');
  }
  public set appflowlog(value: string) {
    this._appflowlog = value;
  }
  public resetAppflowlog() {
    this._appflowlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appflowlogInput() {
    return this._appflowlog;
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // authenticationdomain - computed: true, optional: true, required: false
  private _authenticationdomain?: string; 
  public get authenticationdomain() {
    return this.getStringAttribute('authenticationdomain');
  }
  public set authenticationdomain(value: string) {
    this._authenticationdomain = value;
  }
  public resetAuthenticationdomain() {
    this._authenticationdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationdomainInput() {
    return this._authenticationdomain;
  }

  // certkeynames - computed: true, optional: true, required: false
  private _certkeynames?: string; 
  public get certkeynames() {
    return this.getStringAttribute('certkeynames');
  }
  public set certkeynames(value: string) {
    this._certkeynames = value;
  }
  public resetCertkeynames() {
    this._certkeynames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certkeynamesInput() {
    return this._certkeynames;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // failedlogintimeout - computed: true, optional: true, required: false
  private _failedlogintimeout?: number; 
  public get failedlogintimeout() {
    return this.getNumberAttribute('failedlogintimeout');
  }
  public set failedlogintimeout(value: number) {
    this._failedlogintimeout = value;
  }
  public resetFailedlogintimeout() {
    this._failedlogintimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedlogintimeoutInput() {
    return this._failedlogintimeout;
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

  // ipv46 - computed: true, optional: true, required: false
  private _ipv46?: string; 
  public get ipv46() {
    return this.getStringAttribute('ipv46');
  }
  public set ipv46(value: string) {
    this._ipv46 = value;
  }
  public resetIpv46() {
    this._ipv46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv46Input() {
    return this._ipv46;
  }

  // maxloginattempts - computed: true, optional: true, required: false
  private _maxloginattempts?: number; 
  public get maxloginattempts() {
    return this.getNumberAttribute('maxloginattempts');
  }
  public set maxloginattempts(value: number) {
    this._maxloginattempts = value;
  }
  public resetMaxloginattempts() {
    this._maxloginattempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxloginattemptsInput() {
    return this._maxloginattempts;
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

  // range - computed: true, optional: true, required: false
  private _range?: number; 
  public get range() {
    return this.getNumberAttribute('range');
  }
  public set range(value: number) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // samesite - computed: true, optional: true, required: false
  private _samesite?: string; 
  public get samesite() {
    return this.getStringAttribute('samesite');
  }
  public set samesite(value: string) {
    this._samesite = value;
  }
  public resetSamesite() {
    this._samesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteInput() {
    return this._samesite;
  }

  // servicetype - computed: true, optional: true, required: false
  private _servicetype?: string; 
  public get servicetype() {
    return this.getStringAttribute('servicetype');
  }
  public set servicetype(value: string) {
    this._servicetype = value;
  }
  public resetServicetype() {
    this._servicetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicetypeInput() {
    return this._servicetype;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appflowlog: cdktf.stringToTerraform(this._appflowlog),
      authentication: cdktf.stringToTerraform(this._authentication),
      authenticationdomain: cdktf.stringToTerraform(this._authenticationdomain),
      certkeynames: cdktf.stringToTerraform(this._certkeynames),
      comment: cdktf.stringToTerraform(this._comment),
      failedlogintimeout: cdktf.numberToTerraform(this._failedlogintimeout),
      id: cdktf.stringToTerraform(this._id),
      ipv46: cdktf.stringToTerraform(this._ipv46),
      maxloginattempts: cdktf.numberToTerraform(this._maxloginattempts),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      range: cdktf.numberToTerraform(this._range),
      samesite: cdktf.stringToTerraform(this._samesite),
      servicetype: cdktf.stringToTerraform(this._servicetype),
      state: cdktf.stringToTerraform(this._state),
      td: cdktf.numberToTerraform(this._td),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appflowlog: {
        value: cdktf.stringToHclTerraform(this._appflowlog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authenticationdomain: {
        value: cdktf.stringToHclTerraform(this._authenticationdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certkeynames: {
        value: cdktf.stringToHclTerraform(this._certkeynames),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failedlogintimeout: {
        value: cdktf.numberToHclTerraform(this._failedlogintimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv46: {
        value: cdktf.stringToHclTerraform(this._ipv46),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxloginattempts: {
        value: cdktf.numberToHclTerraform(this._maxloginattempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      range: {
        value: cdktf.numberToHclTerraform(this._range),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      samesite: {
        value: cdktf.stringToHclTerraform(this._samesite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicetype: {
        value: cdktf.stringToHclTerraform(this._servicetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
