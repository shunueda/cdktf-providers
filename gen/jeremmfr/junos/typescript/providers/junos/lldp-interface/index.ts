// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldp_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LldpInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable LLDP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldp_interface#disable LldpInterface#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Enable LLDP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldp_interface#enable LldpInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Interface name or `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldp_interface#name LldpInterface#name}
  */
  readonly name: string;
  /**
  * Disable lldp-trap notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldp_interface#trap_notification_disable LldpInterface#trap_notification_disable}
  */
  readonly trapNotificationDisable?: boolean | cdktf.IResolvable;
  /**
  * Enable lldp-trap notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldp_interface#trap_notification_enable LldpInterface#trap_notification_enable}
  */
  readonly trapNotificationEnable?: boolean | cdktf.IResolvable;
  /**
  * power_negotiation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldp_interface#power_negotiation LldpInterface#power_negotiation}
  */
  readonly powerNegotiation?: LldpInterfacePowerNegotiation;
}
export interface LldpInterfacePowerNegotiation {
  /**
  * Disable power negotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldp_interface#disable LldpInterface#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Enable power negotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldp_interface#enable LldpInterface#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function lldpInterfacePowerNegotiationToTerraform(struct?: LldpInterfacePowerNegotiation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function lldpInterfacePowerNegotiationToHclTerraform(struct?: LldpInterfacePowerNegotiation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LldpInterfacePowerNegotiationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LldpInterfacePowerNegotiation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LldpInterfacePowerNegotiation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disable = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disable = value.disable;
      this._enable = value.enable;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldp_interface junos_lldp_interface}
*/
export class LldpInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_lldp_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LldpInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LldpInterface to import
  * @param importFromId The id of the existing LldpInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldp_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LldpInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_lldp_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/lldp_interface junos_lldp_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LldpInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: LldpInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_lldp_interface',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disable = config.disable;
    this._enable = config.enable;
    this._name = config.name;
    this._trapNotificationDisable = config.trapNotificationDisable;
    this._trapNotificationEnable = config.trapNotificationEnable;
    this._powerNegotiation.internalValue = config.powerNegotiation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // trap_notification_disable - computed: false, optional: true, required: false
  private _trapNotificationDisable?: boolean | cdktf.IResolvable; 
  public get trapNotificationDisable() {
    return this.getBooleanAttribute('trap_notification_disable');
  }
  public set trapNotificationDisable(value: boolean | cdktf.IResolvable) {
    this._trapNotificationDisable = value;
  }
  public resetTrapNotificationDisable() {
    this._trapNotificationDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapNotificationDisableInput() {
    return this._trapNotificationDisable;
  }

  // trap_notification_enable - computed: false, optional: true, required: false
  private _trapNotificationEnable?: boolean | cdktf.IResolvable; 
  public get trapNotificationEnable() {
    return this.getBooleanAttribute('trap_notification_enable');
  }
  public set trapNotificationEnable(value: boolean | cdktf.IResolvable) {
    this._trapNotificationEnable = value;
  }
  public resetTrapNotificationEnable() {
    this._trapNotificationEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapNotificationEnableInput() {
    return this._trapNotificationEnable;
  }

  // power_negotiation - computed: false, optional: true, required: false
  private _powerNegotiation = new LldpInterfacePowerNegotiationOutputReference(this, "power_negotiation");
  public get powerNegotiation() {
    return this._powerNegotiation;
  }
  public putPowerNegotiation(value: LldpInterfacePowerNegotiation) {
    this._powerNegotiation.internalValue = value;
  }
  public resetPowerNegotiation() {
    this._powerNegotiation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerNegotiationInput() {
    return this._powerNegotiation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable: cdktf.booleanToTerraform(this._disable),
      enable: cdktf.booleanToTerraform(this._enable),
      name: cdktf.stringToTerraform(this._name),
      trap_notification_disable: cdktf.booleanToTerraform(this._trapNotificationDisable),
      trap_notification_enable: cdktf.booleanToTerraform(this._trapNotificationEnable),
      power_negotiation: lldpInterfacePowerNegotiationToTerraform(this._powerNegotiation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
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
      trap_notification_disable: {
        value: cdktf.booleanToHclTerraform(this._trapNotificationDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trap_notification_enable: {
        value: cdktf.booleanToHclTerraform(this._trapNotificationEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      power_negotiation: {
        value: lldpInterfacePowerNegotiationToHclTerraform(this._powerNegotiation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LldpInterfacePowerNegotiation",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
