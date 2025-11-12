// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_shutdown_action_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmShutdownActionV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_shutdown_action_v2#action VmShutdownActionV2#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_shutdown_action_v2#ext_id VmShutdownActionV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_shutdown_action_v2#id VmShutdownActionV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * guest_power_state_transition_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_shutdown_action_v2#guest_power_state_transition_config VmShutdownActionV2#guest_power_state_transition_config}
  */
  readonly guestPowerStateTransitionConfig?: VmShutdownActionV2GuestPowerStateTransitionConfig[] | cdktf.IResolvable;
}
export interface VmShutdownActionV2GuestPowerStateTransitionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_shutdown_action_v2#should_enable_script_exec VmShutdownActionV2#should_enable_script_exec}
  */
  readonly shouldEnableScriptExec?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_shutdown_action_v2#should_fail_on_script_failure VmShutdownActionV2#should_fail_on_script_failure}
  */
  readonly shouldFailOnScriptFailure?: boolean | cdktf.IResolvable;
}

export function vmShutdownActionV2GuestPowerStateTransitionConfigToTerraform(struct?: VmShutdownActionV2GuestPowerStateTransitionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_enable_script_exec: cdktf.booleanToTerraform(struct!.shouldEnableScriptExec),
    should_fail_on_script_failure: cdktf.booleanToTerraform(struct!.shouldFailOnScriptFailure),
  }
}


export function vmShutdownActionV2GuestPowerStateTransitionConfigToHclTerraform(struct?: VmShutdownActionV2GuestPowerStateTransitionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_enable_script_exec: {
      value: cdktf.booleanToHclTerraform(struct!.shouldEnableScriptExec),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_fail_on_script_failure: {
      value: cdktf.booleanToHclTerraform(struct!.shouldFailOnScriptFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmShutdownActionV2GuestPowerStateTransitionConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmShutdownActionV2GuestPowerStateTransitionConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldEnableScriptExec !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldEnableScriptExec = this._shouldEnableScriptExec;
    }
    if (this._shouldFailOnScriptFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldFailOnScriptFailure = this._shouldFailOnScriptFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmShutdownActionV2GuestPowerStateTransitionConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shouldEnableScriptExec = undefined;
      this._shouldFailOnScriptFailure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shouldEnableScriptExec = value.shouldEnableScriptExec;
      this._shouldFailOnScriptFailure = value.shouldFailOnScriptFailure;
    }
  }

  // should_enable_script_exec - computed: false, optional: true, required: false
  private _shouldEnableScriptExec?: boolean | cdktf.IResolvable; 
  public get shouldEnableScriptExec() {
    return this.getBooleanAttribute('should_enable_script_exec');
  }
  public set shouldEnableScriptExec(value: boolean | cdktf.IResolvable) {
    this._shouldEnableScriptExec = value;
  }
  public resetShouldEnableScriptExec() {
    this._shouldEnableScriptExec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableScriptExecInput() {
    return this._shouldEnableScriptExec;
  }

  // should_fail_on_script_failure - computed: false, optional: true, required: false
  private _shouldFailOnScriptFailure?: boolean | cdktf.IResolvable; 
  public get shouldFailOnScriptFailure() {
    return this.getBooleanAttribute('should_fail_on_script_failure');
  }
  public set shouldFailOnScriptFailure(value: boolean | cdktf.IResolvable) {
    this._shouldFailOnScriptFailure = value;
  }
  public resetShouldFailOnScriptFailure() {
    this._shouldFailOnScriptFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldFailOnScriptFailureInput() {
    return this._shouldFailOnScriptFailure;
  }
}

export class VmShutdownActionV2GuestPowerStateTransitionConfigList extends cdktf.ComplexList {
  public internalValue? : VmShutdownActionV2GuestPowerStateTransitionConfig[] | cdktf.IResolvable

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
  public get(index: number): VmShutdownActionV2GuestPowerStateTransitionConfigOutputReference {
    return new VmShutdownActionV2GuestPowerStateTransitionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_shutdown_action_v2 nutanix_vm_shutdown_action_v2}
*/
export class VmShutdownActionV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_vm_shutdown_action_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmShutdownActionV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmShutdownActionV2 to import
  * @param importFromId The id of the existing VmShutdownActionV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_shutdown_action_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmShutdownActionV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_vm_shutdown_action_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/vm_shutdown_action_v2 nutanix_vm_shutdown_action_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmShutdownActionV2Config
  */
  public constructor(scope: Construct, id: string, config: VmShutdownActionV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_vm_shutdown_action_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._extId = config.extId;
    this._id = config.id;
    this._guestPowerStateTransitionConfig.internalValue = config.guestPowerStateTransitionConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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

  // guest_power_state_transition_config - computed: false, optional: true, required: false
  private _guestPowerStateTransitionConfig = new VmShutdownActionV2GuestPowerStateTransitionConfigList(this, "guest_power_state_transition_config", false);
  public get guestPowerStateTransitionConfig() {
    return this._guestPowerStateTransitionConfig;
  }
  public putGuestPowerStateTransitionConfig(value: VmShutdownActionV2GuestPowerStateTransitionConfig[] | cdktf.IResolvable) {
    this._guestPowerStateTransitionConfig.internalValue = value;
  }
  public resetGuestPowerStateTransitionConfig() {
    this._guestPowerStateTransitionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestPowerStateTransitionConfigInput() {
    return this._guestPowerStateTransitionConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      guest_power_state_transition_config: cdktf.listMapper(vmShutdownActionV2GuestPowerStateTransitionConfigToTerraform, true)(this._guestPowerStateTransitionConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
      guest_power_state_transition_config: {
        value: cdktf.listMapperHcl(vmShutdownActionV2GuestPowerStateTransitionConfigToHclTerraform, true)(this._guestPowerStateTransitionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmShutdownActionV2GuestPowerStateTransitionConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
