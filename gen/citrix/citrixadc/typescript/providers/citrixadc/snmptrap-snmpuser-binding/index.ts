// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmptrap_snmpuser_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmptrapSnmpuserBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmptrap_snmpuser_binding#id SnmptrapSnmpuserBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmptrap_snmpuser_binding#securitylevel SnmptrapSnmpuserBinding#securitylevel}
  */
  readonly securitylevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmptrap_snmpuser_binding#td SnmptrapSnmpuserBinding#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmptrap_snmpuser_binding#trapclass SnmptrapSnmpuserBinding#trapclass}
  */
  readonly trapclass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmptrap_snmpuser_binding#trapdestination SnmptrapSnmpuserBinding#trapdestination}
  */
  readonly trapdestination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmptrap_snmpuser_binding#username SnmptrapSnmpuserBinding#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmptrap_snmpuser_binding#version SnmptrapSnmpuserBinding#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmptrap_snmpuser_binding citrixadc_snmptrap_snmpuser_binding}
*/
export class SnmptrapSnmpuserBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_snmptrap_snmpuser_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmptrapSnmpuserBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmptrapSnmpuserBinding to import
  * @param importFromId The id of the existing SnmptrapSnmpuserBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmptrap_snmpuser_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmptrapSnmpuserBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_snmptrap_snmpuser_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmptrap_snmpuser_binding citrixadc_snmptrap_snmpuser_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmptrapSnmpuserBindingConfig
  */
  public constructor(scope: Construct, id: string, config: SnmptrapSnmpuserBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_snmptrap_snmpuser_binding',
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
    this._securitylevel = config.securitylevel;
    this._td = config.td;
    this._trapclass = config.trapclass;
    this._trapdestination = config.trapdestination;
    this._username = config.username;
    this._version = config.version;
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

  // securitylevel - computed: true, optional: true, required: false
  private _securitylevel?: string; 
  public get securitylevel() {
    return this.getStringAttribute('securitylevel');
  }
  public set securitylevel(value: string) {
    this._securitylevel = value;
  }
  public resetSecuritylevel() {
    this._securitylevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitylevelInput() {
    return this._securitylevel;
  }

  // td - computed: false, optional: true, required: false
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

  // trapclass - computed: false, optional: false, required: true
  private _trapclass?: string; 
  public get trapclass() {
    return this.getStringAttribute('trapclass');
  }
  public set trapclass(value: string) {
    this._trapclass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trapclassInput() {
    return this._trapclass;
  }

  // trapdestination - computed: false, optional: false, required: true
  private _trapdestination?: string; 
  public get trapdestination() {
    return this.getStringAttribute('trapdestination');
  }
  public set trapdestination(value: string) {
    this._trapdestination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trapdestinationInput() {
    return this._trapdestination;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      securitylevel: cdktf.stringToTerraform(this._securitylevel),
      td: cdktf.numberToTerraform(this._td),
      trapclass: cdktf.stringToTerraform(this._trapclass),
      trapdestination: cdktf.stringToTerraform(this._trapdestination),
      username: cdktf.stringToTerraform(this._username),
      version: cdktf.stringToTerraform(this._version),
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
      securitylevel: {
        value: cdktf.stringToHclTerraform(this._securitylevel),
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
      trapclass: {
        value: cdktf.stringToHclTerraform(this._trapclass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trapdestination: {
        value: cdktf.stringToHclTerraform(this._trapdestination),
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
