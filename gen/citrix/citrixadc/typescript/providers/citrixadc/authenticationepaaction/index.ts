// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationepaaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationepaactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationepaaction#csecexpr Authenticationepaaction#csecexpr}
  */
  readonly csecexpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationepaaction#defaultepagroup Authenticationepaaction#defaultepagroup}
  */
  readonly defaultepagroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationepaaction#deletefiles Authenticationepaaction#deletefiles}
  */
  readonly deletefiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationepaaction#deviceposture Authenticationepaaction#deviceposture}
  */
  readonly deviceposture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationepaaction#id Authenticationepaaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationepaaction#killprocess Authenticationepaaction#killprocess}
  */
  readonly killprocess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationepaaction#name Authenticationepaaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationepaaction#quarantinegroup Authenticationepaaction#quarantinegroup}
  */
  readonly quarantinegroup?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationepaaction citrixadc_authenticationepaaction}
*/
export class Authenticationepaaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationepaaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticationepaaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticationepaaction to import
  * @param importFromId The id of the existing Authenticationepaaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationepaaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticationepaaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationepaaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationepaaction citrixadc_authenticationepaaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationepaactionConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationepaactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationepaaction',
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
    this._csecexpr = config.csecexpr;
    this._defaultepagroup = config.defaultepagroup;
    this._deletefiles = config.deletefiles;
    this._deviceposture = config.deviceposture;
    this._id = config.id;
    this._killprocess = config.killprocess;
    this._name = config.name;
    this._quarantinegroup = config.quarantinegroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // csecexpr - computed: false, optional: true, required: false
  private _csecexpr?: string; 
  public get csecexpr() {
    return this.getStringAttribute('csecexpr');
  }
  public set csecexpr(value: string) {
    this._csecexpr = value;
  }
  public resetCsecexpr() {
    this._csecexpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csecexprInput() {
    return this._csecexpr;
  }

  // defaultepagroup - computed: true, optional: true, required: false
  private _defaultepagroup?: string; 
  public get defaultepagroup() {
    return this.getStringAttribute('defaultepagroup');
  }
  public set defaultepagroup(value: string) {
    this._defaultepagroup = value;
  }
  public resetDefaultepagroup() {
    this._defaultepagroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultepagroupInput() {
    return this._defaultepagroup;
  }

  // deletefiles - computed: true, optional: true, required: false
  private _deletefiles?: string; 
  public get deletefiles() {
    return this.getStringAttribute('deletefiles');
  }
  public set deletefiles(value: string) {
    this._deletefiles = value;
  }
  public resetDeletefiles() {
    this._deletefiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletefilesInput() {
    return this._deletefiles;
  }

  // deviceposture - computed: true, optional: true, required: false
  private _deviceposture?: string; 
  public get deviceposture() {
    return this.getStringAttribute('deviceposture');
  }
  public set deviceposture(value: string) {
    this._deviceposture = value;
  }
  public resetDeviceposture() {
    this._deviceposture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicepostureInput() {
    return this._deviceposture;
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

  // killprocess - computed: true, optional: true, required: false
  private _killprocess?: string; 
  public get killprocess() {
    return this.getStringAttribute('killprocess');
  }
  public set killprocess(value: string) {
    this._killprocess = value;
  }
  public resetKillprocess() {
    this._killprocess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get killprocessInput() {
    return this._killprocess;
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

  // quarantinegroup - computed: true, optional: true, required: false
  private _quarantinegroup?: string; 
  public get quarantinegroup() {
    return this.getStringAttribute('quarantinegroup');
  }
  public set quarantinegroup(value: string) {
    this._quarantinegroup = value;
  }
  public resetQuarantinegroup() {
    this._quarantinegroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantinegroupInput() {
    return this._quarantinegroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      csecexpr: cdktf.stringToTerraform(this._csecexpr),
      defaultepagroup: cdktf.stringToTerraform(this._defaultepagroup),
      deletefiles: cdktf.stringToTerraform(this._deletefiles),
      deviceposture: cdktf.stringToTerraform(this._deviceposture),
      id: cdktf.stringToTerraform(this._id),
      killprocess: cdktf.stringToTerraform(this._killprocess),
      name: cdktf.stringToTerraform(this._name),
      quarantinegroup: cdktf.stringToTerraform(this._quarantinegroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      csecexpr: {
        value: cdktf.stringToHclTerraform(this._csecexpr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaultepagroup: {
        value: cdktf.stringToHclTerraform(this._defaultepagroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletefiles: {
        value: cdktf.stringToHclTerraform(this._deletefiles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deviceposture: {
        value: cdktf.stringToHclTerraform(this._deviceposture),
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
      killprocess: {
        value: cdktf.stringToHclTerraform(this._killprocess),
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
      quarantinegroup: {
        value: cdktf.stringToHclTerraform(this._quarantinegroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
