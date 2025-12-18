// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/service_lbmonitor_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceLbmonitorBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/service_lbmonitor_binding#id ServiceLbmonitorBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/service_lbmonitor_binding#monitor_name ServiceLbmonitorBinding#monitor_name}
  */
  readonly monitorName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/service_lbmonitor_binding#monstate ServiceLbmonitorBinding#monstate}
  */
  readonly monstate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/service_lbmonitor_binding#name ServiceLbmonitorBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/service_lbmonitor_binding#passive ServiceLbmonitorBinding#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/service_lbmonitor_binding#weight ServiceLbmonitorBinding#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/service_lbmonitor_binding citrixadc_service_lbmonitor_binding}
*/
export class ServiceLbmonitorBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_service_lbmonitor_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceLbmonitorBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceLbmonitorBinding to import
  * @param importFromId The id of the existing ServiceLbmonitorBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/service_lbmonitor_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceLbmonitorBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_service_lbmonitor_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/service_lbmonitor_binding citrixadc_service_lbmonitor_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceLbmonitorBindingConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceLbmonitorBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_service_lbmonitor_binding',
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
    this._monitorName = config.monitorName;
    this._monstate = config.monstate;
    this._name = config.name;
    this._passive = config.passive;
    this._weight = config.weight;
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

  // monitor_name - computed: false, optional: false, required: true
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // monstate - computed: true, optional: true, required: false
  private _monstate?: string; 
  public get monstate() {
    return this.getStringAttribute('monstate');
  }
  public set monstate(value: string) {
    this._monstate = value;
  }
  public resetMonstate() {
    this._monstate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monstateInput() {
    return this._monstate;
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

  // passive - computed: true, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      monstate: cdktf.stringToTerraform(this._monstate),
      name: cdktf.stringToTerraform(this._name),
      passive: cdktf.booleanToTerraform(this._passive),
      weight: cdktf.numberToTerraform(this._weight),
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
      monitor_name: {
        value: cdktf.stringToHclTerraform(this._monitorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monstate: {
        value: cdktf.stringToHclTerraform(this._monstate),
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
      passive: {
        value: cdktf.booleanToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
