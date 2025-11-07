// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_affinityinterrupt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAffinityinterruptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_affinityinterrupt#affinity_cpumask SystemAffinityinterrupt#affinity_cpumask}
  */
  readonly affinityCpumask: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_affinityinterrupt#default_affinity_cpumask SystemAffinityinterrupt#default_affinity_cpumask}
  */
  readonly defaultAffinityCpumask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_affinityinterrupt#fosid SystemAffinityinterrupt#fosid}
  */
  readonly fosid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_affinityinterrupt#id SystemAffinityinterrupt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_affinityinterrupt#interrupt SystemAffinityinterrupt#interrupt}
  */
  readonly interrupt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_affinityinterrupt#vdomparam SystemAffinityinterrupt#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_affinityinterrupt fortios_system_affinityinterrupt}
*/
export class SystemAffinityinterrupt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_affinityinterrupt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAffinityinterrupt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAffinityinterrupt to import
  * @param importFromId The id of the existing SystemAffinityinterrupt that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_affinityinterrupt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAffinityinterrupt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_affinityinterrupt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_affinityinterrupt fortios_system_affinityinterrupt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAffinityinterruptConfig
  */
  public constructor(scope: Construct, id: string, config: SystemAffinityinterruptConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_affinityinterrupt',
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
    this._affinityCpumask = config.affinityCpumask;
    this._defaultAffinityCpumask = config.defaultAffinityCpumask;
    this._fosid = config.fosid;
    this._id = config.id;
    this._interrupt = config.interrupt;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_cpumask - computed: false, optional: false, required: true
  private _affinityCpumask?: string; 
  public get affinityCpumask() {
    return this.getStringAttribute('affinity_cpumask');
  }
  public set affinityCpumask(value: string) {
    this._affinityCpumask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityCpumaskInput() {
    return this._affinityCpumask;
  }

  // default_affinity_cpumask - computed: true, optional: true, required: false
  private _defaultAffinityCpumask?: string; 
  public get defaultAffinityCpumask() {
    return this.getStringAttribute('default_affinity_cpumask');
  }
  public set defaultAffinityCpumask(value: string) {
    this._defaultAffinityCpumask = value;
  }
  public resetDefaultAffinityCpumask() {
    this._defaultAffinityCpumask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAffinityCpumaskInput() {
    return this._defaultAffinityCpumask;
  }

  // fosid - computed: false, optional: false, required: true
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // interrupt - computed: false, optional: false, required: true
  private _interrupt?: string; 
  public get interrupt() {
    return this.getStringAttribute('interrupt');
  }
  public set interrupt(value: string) {
    this._interrupt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptInput() {
    return this._interrupt;
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
      affinity_cpumask: cdktf.stringToTerraform(this._affinityCpumask),
      default_affinity_cpumask: cdktf.stringToTerraform(this._defaultAffinityCpumask),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      interrupt: cdktf.stringToTerraform(this._interrupt),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      affinity_cpumask: {
        value: cdktf.stringToHclTerraform(this._affinityCpumask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_affinity_cpumask: {
        value: cdktf.stringToHclTerraform(this._defaultAffinityCpumask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      interrupt: {
        value: cdktf.stringToHclTerraform(this._interrupt),
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
