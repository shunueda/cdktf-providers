// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_storm_control_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ForwardingoptionsStormControlProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable port for excessive storm control errors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_storm_control_profile#action_shutdown ForwardingoptionsStormControlProfile#action_shutdown}
  */
  readonly actionShutdown?: boolean | cdktf.IResolvable;
  /**
  * Storm control profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_storm_control_profile#name ForwardingoptionsStormControlProfile#name}
  */
  readonly name: string;
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_storm_control_profile#all ForwardingoptionsStormControlProfile#all}
  */
  readonly all?: ForwardingoptionsStormControlProfileAll;
}
export interface ForwardingoptionsStormControlProfileAll {
  /**
  * Link bandwidth (kbps)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_storm_control_profile#bandwidth_level ForwardingoptionsStormControlProfile#bandwidth_level}
  */
  readonly bandwidthLevel?: number;
  /**
  * Percentage of link bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_storm_control_profile#bandwidth_percentage ForwardingoptionsStormControlProfile#bandwidth_percentage}
  */
  readonly bandwidthPercentage?: number;
  /**
  * Burst size (bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_storm_control_profile#burst_size ForwardingoptionsStormControlProfile#burst_size}
  */
  readonly burstSize?: number;
  /**
  * Disable broadcast storm control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_storm_control_profile#no_broadcast ForwardingoptionsStormControlProfile#no_broadcast}
  */
  readonly noBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Disable multicast storm control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_storm_control_profile#no_multicast ForwardingoptionsStormControlProfile#no_multicast}
  */
  readonly noMulticast?: boolean | cdktf.IResolvable;
  /**
  * Disable registered multicast storm control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_storm_control_profile#no_registered_multicast ForwardingoptionsStormControlProfile#no_registered_multicast}
  */
  readonly noRegisteredMulticast?: boolean | cdktf.IResolvable;
  /**
  * Disable unknown unicast storm control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_storm_control_profile#no_unknown_unicast ForwardingoptionsStormControlProfile#no_unknown_unicast}
  */
  readonly noUnknownUnicast?: boolean | cdktf.IResolvable;
  /**
  * Disable unregistered multicast storm control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_storm_control_profile#no_unregistered_multicast ForwardingoptionsStormControlProfile#no_unregistered_multicast}
  */
  readonly noUnregisteredMulticast?: boolean | cdktf.IResolvable;
}

export function forwardingoptionsStormControlProfileAllToTerraform(struct?: ForwardingoptionsStormControlProfileAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_level: cdktf.numberToTerraform(struct!.bandwidthLevel),
    bandwidth_percentage: cdktf.numberToTerraform(struct!.bandwidthPercentage),
    burst_size: cdktf.numberToTerraform(struct!.burstSize),
    no_broadcast: cdktf.booleanToTerraform(struct!.noBroadcast),
    no_multicast: cdktf.booleanToTerraform(struct!.noMulticast),
    no_registered_multicast: cdktf.booleanToTerraform(struct!.noRegisteredMulticast),
    no_unknown_unicast: cdktf.booleanToTerraform(struct!.noUnknownUnicast),
    no_unregistered_multicast: cdktf.booleanToTerraform(struct!.noUnregisteredMulticast),
  }
}


export function forwardingoptionsStormControlProfileAllToHclTerraform(struct?: ForwardingoptionsStormControlProfileAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_level: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bandwidth_percentage: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burst_size: {
      value: cdktf.numberToHclTerraform(struct!.burstSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_broadcast: {
      value: cdktf.booleanToHclTerraform(struct!.noBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_multicast: {
      value: cdktf.booleanToHclTerraform(struct!.noMulticast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_registered_multicast: {
      value: cdktf.booleanToHclTerraform(struct!.noRegisteredMulticast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_unknown_unicast: {
      value: cdktf.booleanToHclTerraform(struct!.noUnknownUnicast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_unregistered_multicast: {
      value: cdktf.booleanToHclTerraform(struct!.noUnregisteredMulticast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingoptionsStormControlProfileAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ForwardingoptionsStormControlProfileAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthLevel = this._bandwidthLevel;
    }
    if (this._bandwidthPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthPercentage = this._bandwidthPercentage;
    }
    if (this._burstSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSize = this._burstSize;
    }
    if (this._noBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.noBroadcast = this._noBroadcast;
    }
    if (this._noMulticast !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMulticast = this._noMulticast;
    }
    if (this._noRegisteredMulticast !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRegisteredMulticast = this._noRegisteredMulticast;
    }
    if (this._noUnknownUnicast !== undefined) {
      hasAnyValues = true;
      internalValueResult.noUnknownUnicast = this._noUnknownUnicast;
    }
    if (this._noUnregisteredMulticast !== undefined) {
      hasAnyValues = true;
      internalValueResult.noUnregisteredMulticast = this._noUnregisteredMulticast;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingoptionsStormControlProfileAll | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthLevel = undefined;
      this._bandwidthPercentage = undefined;
      this._burstSize = undefined;
      this._noBroadcast = undefined;
      this._noMulticast = undefined;
      this._noRegisteredMulticast = undefined;
      this._noUnknownUnicast = undefined;
      this._noUnregisteredMulticast = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthLevel = value.bandwidthLevel;
      this._bandwidthPercentage = value.bandwidthPercentage;
      this._burstSize = value.burstSize;
      this._noBroadcast = value.noBroadcast;
      this._noMulticast = value.noMulticast;
      this._noRegisteredMulticast = value.noRegisteredMulticast;
      this._noUnknownUnicast = value.noUnknownUnicast;
      this._noUnregisteredMulticast = value.noUnregisteredMulticast;
    }
  }

  // bandwidth_level - computed: false, optional: true, required: false
  private _bandwidthLevel?: number; 
  public get bandwidthLevel() {
    return this.getNumberAttribute('bandwidth_level');
  }
  public set bandwidthLevel(value: number) {
    this._bandwidthLevel = value;
  }
  public resetBandwidthLevel() {
    this._bandwidthLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLevelInput() {
    return this._bandwidthLevel;
  }

  // bandwidth_percentage - computed: false, optional: true, required: false
  private _bandwidthPercentage?: number; 
  public get bandwidthPercentage() {
    return this.getNumberAttribute('bandwidth_percentage');
  }
  public set bandwidthPercentage(value: number) {
    this._bandwidthPercentage = value;
  }
  public resetBandwidthPercentage() {
    this._bandwidthPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPercentageInput() {
    return this._bandwidthPercentage;
  }

  // burst_size - computed: false, optional: true, required: false
  private _burstSize?: number; 
  public get burstSize() {
    return this.getNumberAttribute('burst_size');
  }
  public set burstSize(value: number) {
    this._burstSize = value;
  }
  public resetBurstSize() {
    this._burstSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSizeInput() {
    return this._burstSize;
  }

  // no_broadcast - computed: false, optional: true, required: false
  private _noBroadcast?: boolean | cdktf.IResolvable; 
  public get noBroadcast() {
    return this.getBooleanAttribute('no_broadcast');
  }
  public set noBroadcast(value: boolean | cdktf.IResolvable) {
    this._noBroadcast = value;
  }
  public resetNoBroadcast() {
    this._noBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noBroadcastInput() {
    return this._noBroadcast;
  }

  // no_multicast - computed: false, optional: true, required: false
  private _noMulticast?: boolean | cdktf.IResolvable; 
  public get noMulticast() {
    return this.getBooleanAttribute('no_multicast');
  }
  public set noMulticast(value: boolean | cdktf.IResolvable) {
    this._noMulticast = value;
  }
  public resetNoMulticast() {
    this._noMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMulticastInput() {
    return this._noMulticast;
  }

  // no_registered_multicast - computed: false, optional: true, required: false
  private _noRegisteredMulticast?: boolean | cdktf.IResolvable; 
  public get noRegisteredMulticast() {
    return this.getBooleanAttribute('no_registered_multicast');
  }
  public set noRegisteredMulticast(value: boolean | cdktf.IResolvable) {
    this._noRegisteredMulticast = value;
  }
  public resetNoRegisteredMulticast() {
    this._noRegisteredMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRegisteredMulticastInput() {
    return this._noRegisteredMulticast;
  }

  // no_unknown_unicast - computed: false, optional: true, required: false
  private _noUnknownUnicast?: boolean | cdktf.IResolvable; 
  public get noUnknownUnicast() {
    return this.getBooleanAttribute('no_unknown_unicast');
  }
  public set noUnknownUnicast(value: boolean | cdktf.IResolvable) {
    this._noUnknownUnicast = value;
  }
  public resetNoUnknownUnicast() {
    this._noUnknownUnicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noUnknownUnicastInput() {
    return this._noUnknownUnicast;
  }

  // no_unregistered_multicast - computed: false, optional: true, required: false
  private _noUnregisteredMulticast?: boolean | cdktf.IResolvable; 
  public get noUnregisteredMulticast() {
    return this.getBooleanAttribute('no_unregistered_multicast');
  }
  public set noUnregisteredMulticast(value: boolean | cdktf.IResolvable) {
    this._noUnregisteredMulticast = value;
  }
  public resetNoUnregisteredMulticast() {
    this._noUnregisteredMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noUnregisteredMulticastInput() {
    return this._noUnregisteredMulticast;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_storm_control_profile junos_forwardingoptions_storm_control_profile}
*/
export class ForwardingoptionsStormControlProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_forwardingoptions_storm_control_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ForwardingoptionsStormControlProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ForwardingoptionsStormControlProfile to import
  * @param importFromId The id of the existing ForwardingoptionsStormControlProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_storm_control_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ForwardingoptionsStormControlProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_forwardingoptions_storm_control_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_storm_control_profile junos_forwardingoptions_storm_control_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ForwardingoptionsStormControlProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ForwardingoptionsStormControlProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_forwardingoptions_storm_control_profile',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionShutdown = config.actionShutdown;
    this._name = config.name;
    this._all.internalValue = config.all;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_shutdown - computed: false, optional: true, required: false
  private _actionShutdown?: boolean | cdktf.IResolvable; 
  public get actionShutdown() {
    return this.getBooleanAttribute('action_shutdown');
  }
  public set actionShutdown(value: boolean | cdktf.IResolvable) {
    this._actionShutdown = value;
  }
  public resetActionShutdown() {
    this._actionShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionShutdownInput() {
    return this._actionShutdown;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // all - computed: false, optional: true, required: false
  private _all = new ForwardingoptionsStormControlProfileAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: ForwardingoptionsStormControlProfileAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_shutdown: cdktf.booleanToTerraform(this._actionShutdown),
      name: cdktf.stringToTerraform(this._name),
      all: forwardingoptionsStormControlProfileAllToTerraform(this._all.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_shutdown: {
        value: cdktf.booleanToHclTerraform(this._actionShutdown),
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
      all: {
        value: forwardingoptionsStormControlProfileAllToHclTerraform(this._all.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ForwardingoptionsStormControlProfileAll",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
