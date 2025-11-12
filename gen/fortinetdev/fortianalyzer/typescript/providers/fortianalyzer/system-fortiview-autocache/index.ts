// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_fortiview_autocache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemFortiviewAutocacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_fortiview_autocache#aggressive_fortiview SystemFortiviewAutocache#aggressive_fortiview}
  */
  readonly aggressiveFortiview?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_fortiview_autocache#id SystemFortiviewAutocache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_fortiview_autocache#incr_fortiview SystemFortiviewAutocache#incr_fortiview}
  */
  readonly incrFortiview?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_fortiview_autocache#interval SystemFortiviewAutocache#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_fortiview_autocache#status SystemFortiviewAutocache#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_fortiview_autocache fortianalyzer_system_fortiview_autocache}
*/
export class SystemFortiviewAutocache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_fortiview_autocache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemFortiviewAutocache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemFortiviewAutocache to import
  * @param importFromId The id of the existing SystemFortiviewAutocache that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_fortiview_autocache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemFortiviewAutocache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_fortiview_autocache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_fortiview_autocache fortianalyzer_system_fortiview_autocache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemFortiviewAutocacheConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemFortiviewAutocacheConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_fortiview_autocache',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggressiveFortiview = config.aggressiveFortiview;
    this._id = config.id;
    this._incrFortiview = config.incrFortiview;
    this._interval = config.interval;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggressive_fortiview - computed: true, optional: true, required: false
  private _aggressiveFortiview?: string; 
  public get aggressiveFortiview() {
    return this.getStringAttribute('aggressive_fortiview');
  }
  public set aggressiveFortiview(value: string) {
    this._aggressiveFortiview = value;
  }
  public resetAggressiveFortiview() {
    this._aggressiveFortiview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressiveFortiviewInput() {
    return this._aggressiveFortiview;
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

  // incr_fortiview - computed: true, optional: true, required: false
  private _incrFortiview?: string; 
  public get incrFortiview() {
    return this.getStringAttribute('incr_fortiview');
  }
  public set incrFortiview(value: string) {
    this._incrFortiview = value;
  }
  public resetIncrFortiview() {
    this._incrFortiview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrFortiviewInput() {
    return this._incrFortiview;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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
      aggressive_fortiview: cdktf.stringToTerraform(this._aggressiveFortiview),
      id: cdktf.stringToTerraform(this._id),
      incr_fortiview: cdktf.stringToTerraform(this._incrFortiview),
      interval: cdktf.numberToTerraform(this._interval),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggressive_fortiview: {
        value: cdktf.stringToHclTerraform(this._aggressiveFortiview),
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
      incr_fortiview: {
        value: cdktf.stringToHclTerraform(this._incrFortiview),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
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
