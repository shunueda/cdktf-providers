// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdeTypeBehaviorAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of Access Level IDs to associate to the Behavior defined in `behavior_id` argument
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior_acl#access_level_ids RdeTypeBehaviorAcl#access_level_ids}
  */
  readonly accessLevelIds: string[];
  /**
  * The ID of either a RDE Interface Behavior or RDE Type Behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior_acl#behavior_id RdeTypeBehaviorAcl#behavior_id}
  */
  readonly behaviorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior_acl#id RdeTypeBehaviorAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the RDE Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior_acl#rde_type_id RdeTypeBehaviorAcl#rde_type_id}
  */
  readonly rdeTypeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior_acl vcd_rde_type_behavior_acl}
*/
export class RdeTypeBehaviorAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_rde_type_behavior_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdeTypeBehaviorAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdeTypeBehaviorAcl to import
  * @param importFromId The id of the existing RdeTypeBehaviorAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdeTypeBehaviorAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_rde_type_behavior_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/rde_type_behavior_acl vcd_rde_type_behavior_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdeTypeBehaviorAclConfig
  */
  public constructor(scope: Construct, id: string, config: RdeTypeBehaviorAclConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_rde_type_behavior_acl',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLevelIds = config.accessLevelIds;
    this._behaviorId = config.behaviorId;
    this._id = config.id;
    this._rdeTypeId = config.rdeTypeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level_ids - computed: false, optional: false, required: true
  private _accessLevelIds?: string[]; 
  public get accessLevelIds() {
    return cdktf.Fn.tolist(this.getListAttribute('access_level_ids'));
  }
  public set accessLevelIds(value: string[]) {
    this._accessLevelIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelIdsInput() {
    return this._accessLevelIds;
  }

  // behavior_id - computed: false, optional: false, required: true
  private _behaviorId?: string; 
  public get behaviorId() {
    return this.getStringAttribute('behavior_id');
  }
  public set behaviorId(value: string) {
    this._behaviorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorIdInput() {
    return this._behaviorId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessLevelIds),
      behavior_id: cdktf.stringToTerraform(this._behaviorId),
      id: cdktf.stringToTerraform(this._id),
      rde_type_id: cdktf.stringToTerraform(this._rdeTypeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accessLevelIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      behavior_id: {
        value: cdktf.stringToHclTerraform(this._behaviorId),
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
