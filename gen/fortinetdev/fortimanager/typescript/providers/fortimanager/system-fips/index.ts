// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_fips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemFipsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_fips#entropy_token SystemFips#entropy_token}
  */
  readonly entropyToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_fips#id SystemFips#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_fips#re_seed_interval SystemFips#re_seed_interval}
  */
  readonly reSeedInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_fips#status SystemFips#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_fips fortimanager_system_fips}
*/
export class SystemFips extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_fips";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemFips resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemFips to import
  * @param importFromId The id of the existing SystemFips that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_fips#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemFips to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_fips", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_fips fortimanager_system_fips} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemFipsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemFipsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_fips',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entropyToken = config.entropyToken;
    this._id = config.id;
    this._reSeedInterval = config.reSeedInterval;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entropy_token - computed: true, optional: true, required: false
  private _entropyToken?: string; 
  public get entropyToken() {
    return this.getStringAttribute('entropy_token');
  }
  public set entropyToken(value: string) {
    this._entropyToken = value;
  }
  public resetEntropyToken() {
    this._entropyToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entropyTokenInput() {
    return this._entropyToken;
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

  // re_seed_interval - computed: true, optional: true, required: false
  private _reSeedInterval?: number; 
  public get reSeedInterval() {
    return this.getNumberAttribute('re_seed_interval');
  }
  public set reSeedInterval(value: number) {
    this._reSeedInterval = value;
  }
  public resetReSeedInterval() {
    this._reSeedInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reSeedIntervalInput() {
    return this._reSeedInterval;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entropy_token: cdktf.stringToTerraform(this._entropyToken),
      id: cdktf.stringToTerraform(this._id),
      re_seed_interval: cdktf.numberToTerraform(this._reSeedInterval),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entropy_token: {
        value: cdktf.stringToHclTerraform(this._entropyToken),
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
      re_seed_interval: {
        value: cdktf.numberToHclTerraform(this._reSeedInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
