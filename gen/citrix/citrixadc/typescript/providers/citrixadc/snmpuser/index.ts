// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpuser
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpuserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpuser#authpasswd Snmpuser#authpasswd}
  */
  readonly authpasswd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpuser#authtype Snmpuser#authtype}
  */
  readonly authtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpuser#group Snmpuser#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpuser#id Snmpuser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpuser#name Snmpuser#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpuser#privpasswd Snmpuser#privpasswd}
  */
  readonly privpasswd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpuser#privtype Snmpuser#privtype}
  */
  readonly privtype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpuser citrixadc_snmpuser}
*/
export class Snmpuser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_snmpuser";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snmpuser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snmpuser to import
  * @param importFromId The id of the existing Snmpuser that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpuser#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snmpuser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_snmpuser", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpuser citrixadc_snmpuser} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpuserConfig
  */
  public constructor(scope: Construct, id: string, config: SnmpuserConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_snmpuser',
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
    this._authpasswd = config.authpasswd;
    this._authtype = config.authtype;
    this._group = config.group;
    this._id = config.id;
    this._name = config.name;
    this._privpasswd = config.privpasswd;
    this._privtype = config.privtype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authpasswd - computed: true, optional: true, required: false
  private _authpasswd?: string; 
  public get authpasswd() {
    return this.getStringAttribute('authpasswd');
  }
  public set authpasswd(value: string) {
    this._authpasswd = value;
  }
  public resetAuthpasswd() {
    this._authpasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authpasswdInput() {
    return this._authpasswd;
  }

  // authtype - computed: true, optional: true, required: false
  private _authtype?: string; 
  public get authtype() {
    return this.getStringAttribute('authtype');
  }
  public set authtype(value: string) {
    this._authtype = value;
  }
  public resetAuthtype() {
    this._authtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authtypeInput() {
    return this._authtype;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // privpasswd - computed: true, optional: true, required: false
  private _privpasswd?: string; 
  public get privpasswd() {
    return this.getStringAttribute('privpasswd');
  }
  public set privpasswd(value: string) {
    this._privpasswd = value;
  }
  public resetPrivpasswd() {
    this._privpasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privpasswdInput() {
    return this._privpasswd;
  }

  // privtype - computed: true, optional: true, required: false
  private _privtype?: string; 
  public get privtype() {
    return this.getStringAttribute('privtype');
  }
  public set privtype(value: string) {
    this._privtype = value;
  }
  public resetPrivtype() {
    this._privtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privtypeInput() {
    return this._privtype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authpasswd: cdktf.stringToTerraform(this._authpasswd),
      authtype: cdktf.stringToTerraform(this._authtype),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      privpasswd: cdktf.stringToTerraform(this._privpasswd),
      privtype: cdktf.stringToTerraform(this._privtype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authpasswd: {
        value: cdktf.stringToHclTerraform(this._authpasswd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authtype: {
        value: cdktf.stringToHclTerraform(this._authtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      privpasswd: {
        value: cdktf.stringToHclTerraform(this._privpasswd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privtype: {
        value: cdktf.stringToHclTerraform(this._privtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
