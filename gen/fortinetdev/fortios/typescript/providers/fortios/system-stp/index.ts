// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_stp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemStpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_stp#forward_delay SystemStp#forward_delay}
  */
  readonly forwardDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_stp#hello_time SystemStp#hello_time}
  */
  readonly helloTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_stp#id SystemStp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_stp#max_age SystemStp#max_age}
  */
  readonly maxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_stp#max_hops SystemStp#max_hops}
  */
  readonly maxHops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_stp#switch_priority SystemStp#switch_priority}
  */
  readonly switchPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_stp#vdomparam SystemStp#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_stp fortios_system_stp}
*/
export class SystemStp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_stp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemStp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemStp to import
  * @param importFromId The id of the existing SystemStp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_stp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemStp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_stp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_stp fortios_system_stp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemStpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemStpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_stp',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._forwardDelay = config.forwardDelay;
    this._helloTime = config.helloTime;
    this._id = config.id;
    this._maxAge = config.maxAge;
    this._maxHops = config.maxHops;
    this._switchPriority = config.switchPriority;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // forward_delay - computed: true, optional: true, required: false
  private _forwardDelay?: number; 
  public get forwardDelay() {
    return this.getNumberAttribute('forward_delay');
  }
  public set forwardDelay(value: number) {
    this._forwardDelay = value;
  }
  public resetForwardDelay() {
    this._forwardDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardDelayInput() {
    return this._forwardDelay;
  }

  // hello_time - computed: true, optional: true, required: false
  private _helloTime?: number; 
  public get helloTime() {
    return this.getNumberAttribute('hello_time');
  }
  public set helloTime(value: number) {
    this._helloTime = value;
  }
  public resetHelloTime() {
    this._helloTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloTimeInput() {
    return this._helloTime;
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

  // max_age - computed: true, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // max_hops - computed: true, optional: true, required: false
  private _maxHops?: number; 
  public get maxHops() {
    return this.getNumberAttribute('max_hops');
  }
  public set maxHops(value: number) {
    this._maxHops = value;
  }
  public resetMaxHops() {
    this._maxHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHopsInput() {
    return this._maxHops;
  }

  // switch_priority - computed: true, optional: true, required: false
  private _switchPriority?: string; 
  public get switchPriority() {
    return this.getStringAttribute('switch_priority');
  }
  public set switchPriority(value: string) {
    this._switchPriority = value;
  }
  public resetSwitchPriority() {
    this._switchPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPriorityInput() {
    return this._switchPriority;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      forward_delay: cdktf.numberToTerraform(this._forwardDelay),
      hello_time: cdktf.numberToTerraform(this._helloTime),
      id: cdktf.stringToTerraform(this._id),
      max_age: cdktf.numberToTerraform(this._maxAge),
      max_hops: cdktf.numberToTerraform(this._maxHops),
      switch_priority: cdktf.stringToTerraform(this._switchPriority),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      forward_delay: {
        value: cdktf.numberToHclTerraform(this._forwardDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hello_time: {
        value: cdktf.numberToHclTerraform(this._helloTime),
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
      max_age: {
        value: cdktf.numberToHclTerraform(this._maxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_hops: {
        value: cdktf.numberToHclTerraform(this._maxHops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switch_priority: {
        value: cdktf.stringToHclTerraform(this._switchPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
