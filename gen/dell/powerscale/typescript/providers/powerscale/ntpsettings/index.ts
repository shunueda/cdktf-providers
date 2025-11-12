// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ntpsettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NtpsettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of nodes that will contact the NTP servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ntpsettings#chimers Ntpsettings#chimers}
  */
  readonly chimers?: number;
  /**
  * Node number (LNN) for nodes excluded from chimer duty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ntpsettings#excluded Ntpsettings#excluded}
  */
  readonly excluded?: string[];
  /**
  * Path to NTP key file within /ifs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ntpsettings#key_file Ntpsettings#key_file}
  */
  readonly keyFile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ntpsettings powerscale_ntpsettings}
*/
export class Ntpsettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_ntpsettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ntpsettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ntpsettings to import
  * @param importFromId The id of the existing Ntpsettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ntpsettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ntpsettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_ntpsettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/ntpsettings powerscale_ntpsettings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NtpsettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NtpsettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_ntpsettings',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chimers = config.chimers;
    this._excluded = config.excluded;
    this._keyFile = config.keyFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chimers - computed: true, optional: true, required: false
  private _chimers?: number; 
  public get chimers() {
    return this.getNumberAttribute('chimers');
  }
  public set chimers(value: number) {
    this._chimers = value;
  }
  public resetChimers() {
    this._chimers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chimersInput() {
    return this._chimers;
  }

  // excluded - computed: true, optional: true, required: false
  private _excluded?: string[]; 
  public get excluded() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded'));
  }
  public set excluded(value: string[]) {
    this._excluded = value;
  }
  public resetExcluded() {
    this._excluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInput() {
    return this._excluded;
  }

  // key_file - computed: true, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chimers: cdktf.numberToTerraform(this._chimers),
      excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excluded),
      key_file: cdktf.stringToTerraform(this._keyFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chimers: {
        value: cdktf.numberToHclTerraform(this._chimers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      excluded: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excluded),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      key_file: {
        value: cdktf.stringToHclTerraform(this._keyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
