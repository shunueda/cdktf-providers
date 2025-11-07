// https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/instance_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/instance_group#id InstanceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/instance_group#is_container_group InstanceGroup#is_container_group}
  */
  readonly isContainerGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/instance_group#name InstanceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/instance_group#pod_spec_override InstanceGroup#pod_spec_override}
  */
  readonly podSpecOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/instance_group#policy_instance_minimum InstanceGroup#policy_instance_minimum}
  */
  readonly policyInstanceMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/instance_group#policy_instance_percentage InstanceGroup#policy_instance_percentage}
  */
  readonly policyInstancePercentage?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/instance_group awx_instance_group}
*/
export class InstanceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_instance_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstanceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstanceGroup to import
  * @param importFromId The id of the existing InstanceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/instance_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstanceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_instance_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/instance_group awx_instance_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_instance_group',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '0.29.1'
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
    this._isContainerGroup = config.isContainerGroup;
    this._name = config.name;
    this._podSpecOverride = config.podSpecOverride;
    this._policyInstanceMinimum = config.policyInstanceMinimum;
    this._policyInstancePercentage = config.policyInstancePercentage;
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

  // is_container_group - computed: false, optional: true, required: false
  private _isContainerGroup?: boolean | cdktf.IResolvable; 
  public get isContainerGroup() {
    return this.getBooleanAttribute('is_container_group');
  }
  public set isContainerGroup(value: boolean | cdktf.IResolvable) {
    this._isContainerGroup = value;
  }
  public resetIsContainerGroup() {
    this._isContainerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isContainerGroupInput() {
    return this._isContainerGroup;
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

  // pod_spec_override - computed: false, optional: true, required: false
  private _podSpecOverride?: string; 
  public get podSpecOverride() {
    return this.getStringAttribute('pod_spec_override');
  }
  public set podSpecOverride(value: string) {
    this._podSpecOverride = value;
  }
  public resetPodSpecOverride() {
    this._podSpecOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSpecOverrideInput() {
    return this._podSpecOverride;
  }

  // policy_instance_minimum - computed: false, optional: true, required: false
  private _policyInstanceMinimum?: number; 
  public get policyInstanceMinimum() {
    return this.getNumberAttribute('policy_instance_minimum');
  }
  public set policyInstanceMinimum(value: number) {
    this._policyInstanceMinimum = value;
  }
  public resetPolicyInstanceMinimum() {
    this._policyInstanceMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInstanceMinimumInput() {
    return this._policyInstanceMinimum;
  }

  // policy_instance_percentage - computed: false, optional: true, required: false
  private _policyInstancePercentage?: number; 
  public get policyInstancePercentage() {
    return this.getNumberAttribute('policy_instance_percentage');
  }
  public set policyInstancePercentage(value: number) {
    this._policyInstancePercentage = value;
  }
  public resetPolicyInstancePercentage() {
    this._policyInstancePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInstancePercentageInput() {
    return this._policyInstancePercentage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_container_group: cdktf.booleanToTerraform(this._isContainerGroup),
      name: cdktf.stringToTerraform(this._name),
      pod_spec_override: cdktf.stringToTerraform(this._podSpecOverride),
      policy_instance_minimum: cdktf.numberToTerraform(this._policyInstanceMinimum),
      policy_instance_percentage: cdktf.numberToTerraform(this._policyInstancePercentage),
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
      is_container_group: {
        value: cdktf.booleanToHclTerraform(this._isContainerGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pod_spec_override: {
        value: cdktf.stringToHclTerraform(this._podSpecOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_instance_minimum: {
        value: cdktf.numberToHclTerraform(this._policyInstanceMinimum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_instance_percentage: {
        value: cdktf.numberToHclTerraform(this._policyInstancePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
