// https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_resize
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceResizeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_resize#compute_offering_uuid InstanceResize#compute_offering_uuid}
  */
  readonly computeOfferingUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_resize#cpu_core InstanceResize#cpu_core}
  */
  readonly cpuCore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_resize#id InstanceResize#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_resize#memory InstanceResize#memory}
  */
  readonly memory: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_resize#uuid InstanceResize#uuid}
  */
  readonly uuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_resize stackbill_instance_resize}
*/
export class InstanceResize extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackbill_instance_resize";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstanceResize resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstanceResize to import
  * @param importFromId The id of the existing InstanceResize that should be imported. Refer to the {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_resize#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstanceResize to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackbill_instance_resize", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_resize stackbill_instance_resize} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceResizeConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceResizeConfig) {
    super(scope, id, {
      terraformResourceType: 'stackbill_instance_resize',
      terraformGeneratorMetadata: {
        providerName: 'stackbill',
        providerVersion: '0.1.0',
        providerVersionConstraint: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._computeOfferingUuid = config.computeOfferingUuid;
    this._cpuCore = config.cpuCore;
    this._id = config.id;
    this._memory = config.memory;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_offering_uuid - computed: false, optional: false, required: true
  private _computeOfferingUuid?: string; 
  public get computeOfferingUuid() {
    return this.getStringAttribute('compute_offering_uuid');
  }
  public set computeOfferingUuid(value: string) {
    this._computeOfferingUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeOfferingUuidInput() {
    return this._computeOfferingUuid;
  }

  // cpu_core - computed: false, optional: false, required: true
  private _cpuCore?: string; 
  public get cpuCore() {
    return this.getStringAttribute('cpu_core');
  }
  public set cpuCore(value: string) {
    this._cpuCore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoreInput() {
    return this._cpuCore;
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

  // memory - computed: false, optional: false, required: true
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_offering_uuid: cdktf.stringToTerraform(this._computeOfferingUuid),
      cpu_core: cdktf.stringToTerraform(this._cpuCore),
      id: cdktf.stringToTerraform(this._id),
      memory: cdktf.stringToTerraform(this._memory),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_offering_uuid: {
        value: cdktf.stringToHclTerraform(this._computeOfferingUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_core: {
        value: cdktf.stringToHclTerraform(this._cpuCore),
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
      memory: {
        value: cdktf.stringToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
