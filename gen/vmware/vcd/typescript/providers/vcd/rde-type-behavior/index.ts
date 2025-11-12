// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdeTypeBehaviorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Useful to update execution properties marked with _secure_ and _internal_,as these are not retrievable from VCD, so they are not saved in state. Setting this to 'true' will make the Providerto ask for updates whenever there is a secure property in the execution of the Behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior#always_update_secure_execution_properties RdeTypeBehavior#always_update_secure_execution_properties}
  */
  readonly alwaysUpdateSecureExecutionProperties?: boolean | cdktf.IResolvable;
  /**
  * The description of the contract of the overridden Behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior#description RdeTypeBehavior#description}
  */
  readonly description?: string;
  /**
  * Execution map of the Behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior#execution RdeTypeBehavior#execution}
  */
  readonly execution?: { [key: string]: string };
  /**
  * Execution of the Behavior in JSON format, that allows to define complex Behavior executions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior#execution_json RdeTypeBehavior#execution_json}
  */
  readonly executionJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior#id RdeTypeBehavior#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the original RDE Interface Behavior to override
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior#rde_interface_behavior_id RdeTypeBehavior#rde_interface_behavior_id}
  */
  readonly rdeInterfaceBehaviorId: string;
  /**
  * The ID of the RDE Type that owns the Behavior override
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior#rde_type_id RdeTypeBehavior#rde_type_id}
  */
  readonly rdeTypeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior vcd_rde_type_behavior}
*/
export class RdeTypeBehavior extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_rde_type_behavior";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdeTypeBehavior resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdeTypeBehavior to import
  * @param importFromId The id of the existing RdeTypeBehavior that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdeTypeBehavior to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_rde_type_behavior", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior vcd_rde_type_behavior} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdeTypeBehaviorConfig
  */
  public constructor(scope: Construct, id: string, config: RdeTypeBehaviorConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_rde_type_behavior',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alwaysUpdateSecureExecutionProperties = config.alwaysUpdateSecureExecutionProperties;
    this._description = config.description;
    this._execution = config.execution;
    this._executionJson = config.executionJson;
    this._id = config.id;
    this._rdeInterfaceBehaviorId = config.rdeInterfaceBehaviorId;
    this._rdeTypeId = config.rdeTypeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_update_secure_execution_properties - computed: false, optional: true, required: false
  private _alwaysUpdateSecureExecutionProperties?: boolean | cdktf.IResolvable; 
  public get alwaysUpdateSecureExecutionProperties() {
    return this.getBooleanAttribute('always_update_secure_execution_properties');
  }
  public set alwaysUpdateSecureExecutionProperties(value: boolean | cdktf.IResolvable) {
    this._alwaysUpdateSecureExecutionProperties = value;
  }
  public resetAlwaysUpdateSecureExecutionProperties() {
    this._alwaysUpdateSecureExecutionProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysUpdateSecureExecutionPropertiesInput() {
    return this._alwaysUpdateSecureExecutionProperties;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // execution - computed: true, optional: true, required: false
  private _execution?: { [key: string]: string }; 
  public get execution() {
    return this.getStringMapAttribute('execution');
  }
  public set execution(value: { [key: string]: string }) {
    this._execution = value;
  }
  public resetExecution() {
    this._execution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionInput() {
    return this._execution;
  }

  // execution_json - computed: true, optional: true, required: false
  private _executionJson?: string; 
  public get executionJson() {
    return this.getStringAttribute('execution_json');
  }
  public set executionJson(value: string) {
    this._executionJson = value;
  }
  public resetExecutionJson() {
    this._executionJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionJsonInput() {
    return this._executionJson;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rde_interface_behavior_id - computed: false, optional: false, required: true
  private _rdeInterfaceBehaviorId?: string; 
  public get rdeInterfaceBehaviorId() {
    return this.getStringAttribute('rde_interface_behavior_id');
  }
  public set rdeInterfaceBehaviorId(value: string) {
    this._rdeInterfaceBehaviorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdeInterfaceBehaviorIdInput() {
    return this._rdeInterfaceBehaviorId;
  }

  // rde_type_id - computed: false, optional: false, required: true
  private _rdeTypeId?: string; 
  public get rdeTypeId() {
    return this.getStringAttribute('rde_type_id');
  }
  public set rdeTypeId(value: string) {
    this._rdeTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdeTypeIdInput() {
    return this._rdeTypeId;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_update_secure_execution_properties: cdktf.booleanToTerraform(this._alwaysUpdateSecureExecutionProperties),
      description: cdktf.stringToTerraform(this._description),
      execution: cdktf.hashMapper(cdktf.stringToTerraform)(this._execution),
      execution_json: cdktf.stringToTerraform(this._executionJson),
      id: cdktf.stringToTerraform(this._id),
      rde_interface_behavior_id: cdktf.stringToTerraform(this._rdeInterfaceBehaviorId),
      rde_type_id: cdktf.stringToTerraform(this._rdeTypeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_update_secure_execution_properties: {
        value: cdktf.booleanToHclTerraform(this._alwaysUpdateSecureExecutionProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._execution),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      execution_json: {
        value: cdktf.stringToHclTerraform(this._executionJson),
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
      rde_interface_behavior_id: {
        value: cdktf.stringToHclTerraform(this._rdeInterfaceBehaviorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rde_type_id: {
        value: cdktf.stringToHclTerraform(this._rdeTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
