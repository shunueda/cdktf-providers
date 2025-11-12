// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_emergencygroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArchitectEmergencygroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the emergency group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_emergencygroup#description ArchitectEmergencygroup#description}
  */
  readonly description?: string;
  /**
  * The division to which this emergency group will belong. If not set, the home division will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_emergencygroup#division_id ArchitectEmergencygroup#division_id}
  */
  readonly divisionId?: string;
  /**
  * The state of the emergency group. Defaults to false/inactive. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_emergencygroup#enabled ArchitectEmergencygroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_emergencygroup#id ArchitectEmergencygroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the emergency group. Note:  If the name is changed, the emergency group is dropped and recreated with a new ID. This can cause an Architect flow to be invalid if it references the old emergency group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_emergencygroup#name ArchitectEmergencygroup#name}
  */
  readonly name: string;
  /**
  * emergency_call_flows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_emergencygroup#emergency_call_flows ArchitectEmergencygroup#emergency_call_flows}
  */
  readonly emergencyCallFlows?: ArchitectEmergencygroupEmergencyCallFlows[] | cdktf.IResolvable;
}
export interface ArchitectEmergencygroupEmergencyCallFlows {
  /**
  * The ID of the connected call flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_emergencygroup#emergency_flow_id ArchitectEmergencygroup#emergency_flow_id}
  */
  readonly emergencyFlowId: string;
  /**
  * The IDs of the connected IVRs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_emergencygroup#ivr_ids ArchitectEmergencygroup#ivr_ids}
  */
  readonly ivrIds: string[];
}

export function architectEmergencygroupEmergencyCallFlowsToTerraform(struct?: ArchitectEmergencygroupEmergencyCallFlows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    emergency_flow_id: cdktf.stringToTerraform(struct!.emergencyFlowId),
    ivr_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ivrIds),
  }
}


export function architectEmergencygroupEmergencyCallFlowsToHclTerraform(struct?: ArchitectEmergencygroupEmergencyCallFlows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    emergency_flow_id: {
      value: cdktf.stringToHclTerraform(struct!.emergencyFlowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ivr_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ivrIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArchitectEmergencygroupEmergencyCallFlowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ArchitectEmergencygroupEmergencyCallFlows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emergencyFlowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emergencyFlowId = this._emergencyFlowId;
    }
    if (this._ivrIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ivrIds = this._ivrIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchitectEmergencygroupEmergencyCallFlows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emergencyFlowId = undefined;
      this._ivrIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emergencyFlowId = value.emergencyFlowId;
      this._ivrIds = value.ivrIds;
    }
  }

  // emergency_flow_id - computed: false, optional: false, required: true
  private _emergencyFlowId?: string; 
  public get emergencyFlowId() {
    return this.getStringAttribute('emergency_flow_id');
  }
  public set emergencyFlowId(value: string) {
    this._emergencyFlowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emergencyFlowIdInput() {
    return this._emergencyFlowId;
  }

  // ivr_ids - computed: false, optional: false, required: true
  private _ivrIds?: string[]; 
  public get ivrIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ivr_ids'));
  }
  public set ivrIds(value: string[]) {
    this._ivrIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ivrIdsInput() {
    return this._ivrIds;
  }
}

export class ArchitectEmergencygroupEmergencyCallFlowsList extends cdktf.ComplexList {
  public internalValue? : ArchitectEmergencygroupEmergencyCallFlows[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ArchitectEmergencygroupEmergencyCallFlowsOutputReference {
    return new ArchitectEmergencygroupEmergencyCallFlowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_emergencygroup genesyscloud_architect_emergencygroup}
*/
export class ArchitectEmergencygroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_architect_emergencygroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArchitectEmergencygroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArchitectEmergencygroup to import
  * @param importFromId The id of the existing ArchitectEmergencygroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_emergencygroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArchitectEmergencygroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_architect_emergencygroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_emergencygroup genesyscloud_architect_emergencygroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArchitectEmergencygroupConfig
  */
  public constructor(scope: Construct, id: string, config: ArchitectEmergencygroupConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_architect_emergencygroup',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0',
        providerVersionConstraint: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._divisionId = config.divisionId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._emergencyCallFlows.internalValue = config.emergencyCallFlows;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // division_id - computed: true, optional: true, required: false
  private _divisionId?: string; 
  public get divisionId() {
    return this.getStringAttribute('division_id');
  }
  public set divisionId(value: string) {
    this._divisionId = value;
  }
  public resetDivisionId() {
    this._divisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionIdInput() {
    return this._divisionId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // emergency_call_flows - computed: false, optional: true, required: false
  private _emergencyCallFlows = new ArchitectEmergencygroupEmergencyCallFlowsList(this, "emergency_call_flows", false);
  public get emergencyCallFlows() {
    return this._emergencyCallFlows;
  }
  public putEmergencyCallFlows(value: ArchitectEmergencygroupEmergencyCallFlows[] | cdktf.IResolvable) {
    this._emergencyCallFlows.internalValue = value;
  }
  public resetEmergencyCallFlows() {
    this._emergencyCallFlows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emergencyCallFlowsInput() {
    return this._emergencyCallFlows.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      division_id: cdktf.stringToTerraform(this._divisionId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      emergency_call_flows: cdktf.listMapper(architectEmergencygroupEmergencyCallFlowsToTerraform, true)(this._emergencyCallFlows.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      division_id: {
        value: cdktf.stringToHclTerraform(this._divisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      emergency_call_flows: {
        value: cdktf.listMapperHcl(architectEmergencygroupEmergencyCallFlowsToHclTerraform, true)(this._emergencyCallFlows.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArchitectEmergencygroupEmergencyCallFlowsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
