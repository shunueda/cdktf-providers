// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceCellularSimsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims#serial DeviceCellularSims#serial}
  */
  readonly serial: string;
  /**
  * Failover to secondary SIM (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims#sim_failover_enabled DeviceCellularSims#sim_failover_enabled}
  */
  readonly simFailoverEnabled?: boolean | cdktf.IResolvable;
  /**
  * Failover timeout in seconds (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims#sim_failover_timeout DeviceCellularSims#sim_failover_timeout}
  */
  readonly simFailoverTimeout?: number;
  /**
  * Specifies the ordering of all SIMs for an MG: primary, secondary, and not-in-use (when applicable). It`s required for devices with 3 or more SIMs and can be used in place of `isPrimary` for dual-SIM devices. To indicate eSIM, use `sim3`. Sim failover will occur only between primary and secondary sim slots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims#sim_ordering DeviceCellularSims#sim_ordering}
  */
  readonly simOrdering?: string[];
  /**
  * List of SIMs. If a SIM was previously configured and not specified in this request, it will remain unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims#sims DeviceCellularSims#sims}
  */
  readonly sims?: DeviceCellularSimsSims[] | cdktf.IResolvable;
}
export interface DeviceCellularSimsSimsApns {
  /**
  * IP versions to support (permitted values include `ipv4`, `ipv6`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims#allowed_ip_types DeviceCellularSims#allowed_ip_types}
  */
  readonly allowedIpTypes: string[];
  /**
  * APN password, if type is set (if APN password is not supplied, the password is left unchanged).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims#authentication_password DeviceCellularSims#authentication_password}
  */
  readonly authenticationPassword?: string;
  /**
  * APN auth type.
  *   - Choices: `chap`, `none`, `pap`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims#authentication_type DeviceCellularSims#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * APN username, if type is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims#authentication_username DeviceCellularSims#authentication_username}
  */
  readonly authenticationUsername?: string;
  /**
  * APN name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims#name DeviceCellularSims#name}
  */
  readonly name: string;
}

export function deviceCellularSimsSimsApnsToTerraform(struct?: DeviceCellularSimsSimsApns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ip_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedIpTypes),
    authentication_password: cdktf.stringToTerraform(struct!.authenticationPassword),
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    authentication_username: cdktf.stringToTerraform(struct!.authenticationUsername),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function deviceCellularSimsSimsApnsToHclTerraform(struct?: DeviceCellularSimsSimsApns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ip_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedIpTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    authentication_password: {
      value: cdktf.stringToHclTerraform(struct!.authenticationPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_username: {
      value: cdktf.stringToHclTerraform(struct!.authenticationUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceCellularSimsSimsApnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceCellularSimsSimsApns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedIpTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIpTypes = this._allowedIpTypes;
    }
    if (this._authenticationPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationPassword = this._authenticationPassword;
    }
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._authenticationUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationUsername = this._authenticationUsername;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceCellularSimsSimsApns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedIpTypes = undefined;
      this._authenticationPassword = undefined;
      this._authenticationType = undefined;
      this._authenticationUsername = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedIpTypes = value.allowedIpTypes;
      this._authenticationPassword = value.authenticationPassword;
      this._authenticationType = value.authenticationType;
      this._authenticationUsername = value.authenticationUsername;
      this._name = value.name;
    }
  }

  // allowed_ip_types - computed: false, optional: false, required: true
  private _allowedIpTypes?: string[]; 
  public get allowedIpTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_ip_types'));
  }
  public set allowedIpTypes(value: string[]) {
    this._allowedIpTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpTypesInput() {
    return this._allowedIpTypes;
  }

  // authentication_password - computed: false, optional: true, required: false
  private _authenticationPassword?: string; 
  public get authenticationPassword() {
    return this.getStringAttribute('authentication_password');
  }
  public set authenticationPassword(value: string) {
    this._authenticationPassword = value;
  }
  public resetAuthenticationPassword() {
    this._authenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPasswordInput() {
    return this._authenticationPassword;
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // authentication_username - computed: false, optional: true, required: false
  private _authenticationUsername?: string; 
  public get authenticationUsername() {
    return this.getStringAttribute('authentication_username');
  }
  public set authenticationUsername(value: string) {
    this._authenticationUsername = value;
  }
  public resetAuthenticationUsername() {
    this._authenticationUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationUsernameInput() {
    return this._authenticationUsername;
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
}

export class DeviceCellularSimsSimsApnsList extends cdktf.ComplexList {
  public internalValue? : DeviceCellularSimsSimsApns[] | cdktf.IResolvable

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
  public get(index: number): DeviceCellularSimsSimsApnsOutputReference {
    return new DeviceCellularSimsSimsApnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceCellularSimsSims {
  /**
  * APN configurations. If empty, the default APN will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims#apns DeviceCellularSims#apns}
  */
  readonly apns?: DeviceCellularSimsSimsApns[] | cdktf.IResolvable;
  /**
  * If true, this SIM is activated on platform bootup. It must be true on single-SIM devices and is a required field for dual-SIM MGs unless it is being configured using `simOrdering`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims#is_primary DeviceCellularSims#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
  /**
  * Priority of SIM slot being configured. Use a value between 1 and total number of SIMs available. The value must be unique for each SIM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims#sim_order DeviceCellularSims#sim_order}
  */
  readonly simOrder?: number;
  /**
  * SIM slot being configured. Must be `sim1` on single-sim devices. Use `sim3` for eSIM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims#slot DeviceCellularSims#slot}
  */
  readonly slot: string;
}

export function deviceCellularSimsSimsToTerraform(struct?: DeviceCellularSimsSims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apns: cdktf.listMapper(deviceCellularSimsSimsApnsToTerraform, false)(struct!.apns),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    sim_order: cdktf.numberToTerraform(struct!.simOrder),
    slot: cdktf.stringToTerraform(struct!.slot),
  }
}


export function deviceCellularSimsSimsToHclTerraform(struct?: DeviceCellularSimsSims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apns: {
      value: cdktf.listMapperHcl(deviceCellularSimsSimsApnsToHclTerraform, false)(struct!.apns),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceCellularSimsSimsApnsList",
    },
    is_primary: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sim_order: {
      value: cdktf.numberToHclTerraform(struct!.simOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slot: {
      value: cdktf.stringToHclTerraform(struct!.slot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceCellularSimsSimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceCellularSimsSims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apns = this._apns?.internalValue;
    }
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    if (this._simOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.simOrder = this._simOrder;
    }
    if (this._slot !== undefined) {
      hasAnyValues = true;
      internalValueResult.slot = this._slot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceCellularSimsSims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apns.internalValue = undefined;
      this._isPrimary = undefined;
      this._simOrder = undefined;
      this._slot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apns.internalValue = value.apns;
      this._isPrimary = value.isPrimary;
      this._simOrder = value.simOrder;
      this._slot = value.slot;
    }
  }

  // apns - computed: false, optional: true, required: false
  private _apns = new DeviceCellularSimsSimsApnsList(this, "apns", false);
  public get apns() {
    return this._apns;
  }
  public putApns(value: DeviceCellularSimsSimsApns[] | cdktf.IResolvable) {
    this._apns.internalValue = value;
  }
  public resetApns() {
    this._apns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnsInput() {
    return this._apns.internalValue;
  }

  // is_primary - computed: false, optional: true, required: false
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  public resetIsPrimary() {
    this._isPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
  }

  // sim_order - computed: false, optional: true, required: false
  private _simOrder?: number; 
  public get simOrder() {
    return this.getNumberAttribute('sim_order');
  }
  public set simOrder(value: number) {
    this._simOrder = value;
  }
  public resetSimOrder() {
    this._simOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simOrderInput() {
    return this._simOrder;
  }

  // slot - computed: false, optional: false, required: true
  private _slot?: string; 
  public get slot() {
    return this.getStringAttribute('slot');
  }
  public set slot(value: string) {
    this._slot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot;
  }
}

export class DeviceCellularSimsSimsList extends cdktf.ComplexList {
  public internalValue? : DeviceCellularSimsSims[] | cdktf.IResolvable

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
  public get(index: number): DeviceCellularSimsSimsOutputReference {
    return new DeviceCellularSimsSimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims meraki_device_cellular_sims}
*/
export class DeviceCellularSims extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_device_cellular_sims";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceCellularSims resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceCellularSims to import
  * @param importFromId The id of the existing DeviceCellularSims that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceCellularSims to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_device_cellular_sims", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_cellular_sims meraki_device_cellular_sims} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceCellularSimsConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceCellularSimsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_device_cellular_sims',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._serial = config.serial;
    this._simFailoverEnabled = config.simFailoverEnabled;
    this._simFailoverTimeout = config.simFailoverTimeout;
    this._simOrdering = config.simOrdering;
    this._sims.internalValue = config.sims;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // sim_failover_enabled - computed: false, optional: true, required: false
  private _simFailoverEnabled?: boolean | cdktf.IResolvable; 
  public get simFailoverEnabled() {
    return this.getBooleanAttribute('sim_failover_enabled');
  }
  public set simFailoverEnabled(value: boolean | cdktf.IResolvable) {
    this._simFailoverEnabled = value;
  }
  public resetSimFailoverEnabled() {
    this._simFailoverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simFailoverEnabledInput() {
    return this._simFailoverEnabled;
  }

  // sim_failover_timeout - computed: false, optional: true, required: false
  private _simFailoverTimeout?: number; 
  public get simFailoverTimeout() {
    return this.getNumberAttribute('sim_failover_timeout');
  }
  public set simFailoverTimeout(value: number) {
    this._simFailoverTimeout = value;
  }
  public resetSimFailoverTimeout() {
    this._simFailoverTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simFailoverTimeoutInput() {
    return this._simFailoverTimeout;
  }

  // sim_ordering - computed: false, optional: true, required: false
  private _simOrdering?: string[]; 
  public get simOrdering() {
    return this.getListAttribute('sim_ordering');
  }
  public set simOrdering(value: string[]) {
    this._simOrdering = value;
  }
  public resetSimOrdering() {
    this._simOrdering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simOrderingInput() {
    return this._simOrdering;
  }

  // sims - computed: false, optional: true, required: false
  private _sims = new DeviceCellularSimsSimsList(this, "sims", false);
  public get sims() {
    return this._sims;
  }
  public putSims(value: DeviceCellularSimsSims[] | cdktf.IResolvable) {
    this._sims.internalValue = value;
  }
  public resetSims() {
    this._sims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simsInput() {
    return this._sims.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      serial: cdktf.stringToTerraform(this._serial),
      sim_failover_enabled: cdktf.booleanToTerraform(this._simFailoverEnabled),
      sim_failover_timeout: cdktf.numberToTerraform(this._simFailoverTimeout),
      sim_ordering: cdktf.listMapper(cdktf.stringToTerraform, false)(this._simOrdering),
      sims: cdktf.listMapper(deviceCellularSimsSimsToTerraform, false)(this._sims.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sim_failover_enabled: {
        value: cdktf.booleanToHclTerraform(this._simFailoverEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sim_failover_timeout: {
        value: cdktf.numberToHclTerraform(this._simFailoverTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sim_ordering: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._simOrdering),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sims: {
        value: cdktf.listMapperHcl(deviceCellularSimsSimsToHclTerraform, false)(this._sims.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceCellularSimsSimsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
