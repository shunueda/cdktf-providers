// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbgroup#backuppersistencetimeout Lbgroup#backuppersistencetimeout}
  */
  readonly backuppersistencetimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbgroup#cookiedomain Lbgroup#cookiedomain}
  */
  readonly cookiedomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbgroup#cookiename Lbgroup#cookiename}
  */
  readonly cookiename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbgroup#id Lbgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbgroup#mastervserver Lbgroup#mastervserver}
  */
  readonly mastervserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbgroup#name Lbgroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbgroup#persistencebackup Lbgroup#persistencebackup}
  */
  readonly persistencebackup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbgroup#persistencetype Lbgroup#persistencetype}
  */
  readonly persistencetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbgroup#persistmask Lbgroup#persistmask}
  */
  readonly persistmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbgroup#rule Lbgroup#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbgroup#timeout Lbgroup#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbgroup#usevserverpersistency Lbgroup#usevserverpersistency}
  */
  readonly usevserverpersistency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbgroup#v6persistmasklen Lbgroup#v6persistmasklen}
  */
  readonly v6Persistmasklen?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbgroup citrixadc_lbgroup}
*/
export class Lbgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lbgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lbgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lbgroup to import
  * @param importFromId The id of the existing Lbgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lbgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lbgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lbgroup citrixadc_lbgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbgroupConfig
  */
  public constructor(scope: Construct, id: string, config: LbgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lbgroup',
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
    this._backuppersistencetimeout = config.backuppersistencetimeout;
    this._cookiedomain = config.cookiedomain;
    this._cookiename = config.cookiename;
    this._id = config.id;
    this._mastervserver = config.mastervserver;
    this._name = config.name;
    this._persistencebackup = config.persistencebackup;
    this._persistencetype = config.persistencetype;
    this._persistmask = config.persistmask;
    this._rule = config.rule;
    this._timeout = config.timeout;
    this._usevserverpersistency = config.usevserverpersistency;
    this._v6Persistmasklen = config.v6Persistmasklen;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backuppersistencetimeout - computed: true, optional: true, required: false
  private _backuppersistencetimeout?: number; 
  public get backuppersistencetimeout() {
    return this.getNumberAttribute('backuppersistencetimeout');
  }
  public set backuppersistencetimeout(value: number) {
    this._backuppersistencetimeout = value;
  }
  public resetBackuppersistencetimeout() {
    this._backuppersistencetimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backuppersistencetimeoutInput() {
    return this._backuppersistencetimeout;
  }

  // cookiedomain - computed: true, optional: true, required: false
  private _cookiedomain?: string; 
  public get cookiedomain() {
    return this.getStringAttribute('cookiedomain');
  }
  public set cookiedomain(value: string) {
    this._cookiedomain = value;
  }
  public resetCookiedomain() {
    this._cookiedomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiedomainInput() {
    return this._cookiedomain;
  }

  // cookiename - computed: true, optional: true, required: false
  private _cookiename?: string; 
  public get cookiename() {
    return this.getStringAttribute('cookiename');
  }
  public set cookiename(value: string) {
    this._cookiename = value;
  }
  public resetCookiename() {
    this._cookiename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookienameInput() {
    return this._cookiename;
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

  // mastervserver - computed: true, optional: true, required: false
  private _mastervserver?: string; 
  public get mastervserver() {
    return this.getStringAttribute('mastervserver');
  }
  public set mastervserver(value: string) {
    this._mastervserver = value;
  }
  public resetMastervserver() {
    this._mastervserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mastervserverInput() {
    return this._mastervserver;
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

  // persistencebackup - computed: true, optional: true, required: false
  private _persistencebackup?: string; 
  public get persistencebackup() {
    return this.getStringAttribute('persistencebackup');
  }
  public set persistencebackup(value: string) {
    this._persistencebackup = value;
  }
  public resetPersistencebackup() {
    this._persistencebackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistencebackupInput() {
    return this._persistencebackup;
  }

  // persistencetype - computed: true, optional: true, required: false
  private _persistencetype?: string; 
  public get persistencetype() {
    return this.getStringAttribute('persistencetype');
  }
  public set persistencetype(value: string) {
    this._persistencetype = value;
  }
  public resetPersistencetype() {
    this._persistencetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistencetypeInput() {
    return this._persistencetype;
  }

  // persistmask - computed: true, optional: true, required: false
  private _persistmask?: string; 
  public get persistmask() {
    return this.getStringAttribute('persistmask');
  }
  public set persistmask(value: string) {
    this._persistmask = value;
  }
  public resetPersistmask() {
    this._persistmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistmaskInput() {
    return this._persistmask;
  }

  // rule - computed: true, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // usevserverpersistency - computed: true, optional: true, required: false
  private _usevserverpersistency?: string; 
  public get usevserverpersistency() {
    return this.getStringAttribute('usevserverpersistency');
  }
  public set usevserverpersistency(value: string) {
    this._usevserverpersistency = value;
  }
  public resetUsevserverpersistency() {
    this._usevserverpersistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usevserverpersistencyInput() {
    return this._usevserverpersistency;
  }

  // v6persistmasklen - computed: true, optional: true, required: false
  private _v6Persistmasklen?: number; 
  public get v6Persistmasklen() {
    return this.getNumberAttribute('v6persistmasklen');
  }
  public set v6Persistmasklen(value: number) {
    this._v6Persistmasklen = value;
  }
  public resetV6Persistmasklen() {
    this._v6Persistmasklen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6PersistmasklenInput() {
    return this._v6Persistmasklen;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backuppersistencetimeout: cdktf.numberToTerraform(this._backuppersistencetimeout),
      cookiedomain: cdktf.stringToTerraform(this._cookiedomain),
      cookiename: cdktf.stringToTerraform(this._cookiename),
      id: cdktf.stringToTerraform(this._id),
      mastervserver: cdktf.stringToTerraform(this._mastervserver),
      name: cdktf.stringToTerraform(this._name),
      persistencebackup: cdktf.stringToTerraform(this._persistencebackup),
      persistencetype: cdktf.stringToTerraform(this._persistencetype),
      persistmask: cdktf.stringToTerraform(this._persistmask),
      rule: cdktf.stringToTerraform(this._rule),
      timeout: cdktf.numberToTerraform(this._timeout),
      usevserverpersistency: cdktf.stringToTerraform(this._usevserverpersistency),
      v6persistmasklen: cdktf.numberToTerraform(this._v6Persistmasklen),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backuppersistencetimeout: {
        value: cdktf.numberToHclTerraform(this._backuppersistencetimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cookiedomain: {
        value: cdktf.stringToHclTerraform(this._cookiedomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookiename: {
        value: cdktf.stringToHclTerraform(this._cookiename),
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
      mastervserver: {
        value: cdktf.stringToHclTerraform(this._mastervserver),
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
      persistencebackup: {
        value: cdktf.stringToHclTerraform(this._persistencebackup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistencetype: {
        value: cdktf.stringToHclTerraform(this._persistencetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistmask: {
        value: cdktf.stringToHclTerraform(this._persistmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      usevserverpersistency: {
        value: cdktf.stringToHclTerraform(this._usevserverpersistency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v6persistmasklen: {
        value: cdktf.numberToHclTerraform(this._v6Persistmasklen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
