// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditmessageaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditmessageactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditmessageaction#bypasssafetycheck Auditmessageaction#bypasssafetycheck}
  */
  readonly bypasssafetycheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditmessageaction#id Auditmessageaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditmessageaction#loglevel Auditmessageaction#loglevel}
  */
  readonly loglevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditmessageaction#logtonewnslog Auditmessageaction#logtonewnslog}
  */
  readonly logtonewnslog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditmessageaction#name Auditmessageaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditmessageaction#stringbuilderexpr Auditmessageaction#stringbuilderexpr}
  */
  readonly stringbuilderexpr?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditmessageaction citrixadc_auditmessageaction}
*/
export class Auditmessageaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_auditmessageaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Auditmessageaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Auditmessageaction to import
  * @param importFromId The id of the existing Auditmessageaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditmessageaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Auditmessageaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_auditmessageaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditmessageaction citrixadc_auditmessageaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditmessageactionConfig
  */
  public constructor(scope: Construct, id: string, config: AuditmessageactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_auditmessageaction',
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
    this._bypasssafetycheck = config.bypasssafetycheck;
    this._id = config.id;
    this._loglevel = config.loglevel;
    this._logtonewnslog = config.logtonewnslog;
    this._name = config.name;
    this._stringbuilderexpr = config.stringbuilderexpr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypasssafetycheck - computed: true, optional: true, required: false
  private _bypasssafetycheck?: string; 
  public get bypasssafetycheck() {
    return this.getStringAttribute('bypasssafetycheck');
  }
  public set bypasssafetycheck(value: string) {
    this._bypasssafetycheck = value;
  }
  public resetBypasssafetycheck() {
    this._bypasssafetycheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypasssafetycheckInput() {
    return this._bypasssafetycheck;
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

  // loglevel - computed: true, optional: true, required: false
  private _loglevel?: string; 
  public get loglevel() {
    return this.getStringAttribute('loglevel');
  }
  public set loglevel(value: string) {
    this._loglevel = value;
  }
  public resetLoglevel() {
    this._loglevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loglevelInput() {
    return this._loglevel;
  }

  // logtonewnslog - computed: true, optional: true, required: false
  private _logtonewnslog?: string; 
  public get logtonewnslog() {
    return this.getStringAttribute('logtonewnslog');
  }
  public set logtonewnslog(value: string) {
    this._logtonewnslog = value;
  }
  public resetLogtonewnslog() {
    this._logtonewnslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logtonewnslogInput() {
    return this._logtonewnslog;
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

  // stringbuilderexpr - computed: true, optional: true, required: false
  private _stringbuilderexpr?: string; 
  public get stringbuilderexpr() {
    return this.getStringAttribute('stringbuilderexpr');
  }
  public set stringbuilderexpr(value: string) {
    this._stringbuilderexpr = value;
  }
  public resetStringbuilderexpr() {
    this._stringbuilderexpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringbuilderexprInput() {
    return this._stringbuilderexpr;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypasssafetycheck: cdktf.stringToTerraform(this._bypasssafetycheck),
      id: cdktf.stringToTerraform(this._id),
      loglevel: cdktf.stringToTerraform(this._loglevel),
      logtonewnslog: cdktf.stringToTerraform(this._logtonewnslog),
      name: cdktf.stringToTerraform(this._name),
      stringbuilderexpr: cdktf.stringToTerraform(this._stringbuilderexpr),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypasssafetycheck: {
        value: cdktf.stringToHclTerraform(this._bypasssafetycheck),
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
      loglevel: {
        value: cdktf.stringToHclTerraform(this._loglevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logtonewnslog: {
        value: cdktf.stringToHclTerraform(this._logtonewnslog),
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
      stringbuilderexpr: {
        value: cdktf.stringToHclTerraform(this._stringbuilderexpr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
