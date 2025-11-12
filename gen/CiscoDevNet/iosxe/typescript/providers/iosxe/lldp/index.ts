// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/lldp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LldpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/lldp#delete_mode Lldp#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/lldp#device Lldp#device}
  */
  readonly device?: string;
  /**
  * Specify the holdtime (in sec) to be sent in packets
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/lldp#holdtime Lldp#holdtime}
  */
  readonly holdtime?: number;
  /**
  * IPV4 address List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/lldp#ipv4_management_addresses Lldp#ipv4_management_addresses}
  */
  readonly ipv4ManagementAddresses?: string[];
  /**
  * IPV6 address List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/lldp#ipv6_management_addresses Lldp#ipv6_management_addresses}
  */
  readonly ipv6ManagementAddresses?: string[];
  /**
  * Custom Management VLAN
  *   - Range: `1`-`4095`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/lldp#management_vlan Lldp#management_vlan}
  */
  readonly managementVlan?: number;
  /**
  * Enable LLDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/lldp#run Lldp#run}
  */
  readonly run?: boolean | cdktf.IResolvable;
  /**
  * System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/lldp#system_names Lldp#system_names}
  */
  readonly systemNames?: LldpSystemNames[] | cdktf.IResolvable;
  /**
  * Rate at which LLDP packets are sent (in sec)
  *   - Range: `5`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/lldp#timer Lldp#timer}
  */
  readonly timer?: number;
}
export interface LldpSystemNames {
  /**
  * System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/lldp#name Lldp#name}
  */
  readonly name?: string;
  /**
  * Switch identifier
  *   - Range: `0`-`17`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/lldp#switch_id Lldp#switch_id}
  */
  readonly switchId: number;
}

export function lldpSystemNamesToTerraform(struct?: LldpSystemNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    switch_id: cdktf.numberToTerraform(struct!.switchId),
  }
}


export function lldpSystemNamesToHclTerraform(struct?: LldpSystemNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_id: {
      value: cdktf.numberToHclTerraform(struct!.switchId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LldpSystemNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LldpSystemNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._switchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchId = this._switchId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LldpSystemNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._switchId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._switchId = value.switchId;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // switch_id - computed: false, optional: false, required: true
  private _switchId?: number; 
  public get switchId() {
    return this.getNumberAttribute('switch_id');
  }
  public set switchId(value: number) {
    this._switchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIdInput() {
    return this._switchId;
  }
}

export class LldpSystemNamesList extends cdktf.ComplexList {
  public internalValue? : LldpSystemNames[] | cdktf.IResolvable

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
  public get(index: number): LldpSystemNamesOutputReference {
    return new LldpSystemNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/lldp iosxe_lldp}
*/
export class Lldp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_lldp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lldp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lldp to import
  * @param importFromId The id of the existing Lldp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/lldp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lldp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_lldp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/lldp iosxe_lldp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LldpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LldpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_lldp',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._holdtime = config.holdtime;
    this._ipv4ManagementAddresses = config.ipv4ManagementAddresses;
    this._ipv6ManagementAddresses = config.ipv6ManagementAddresses;
    this._managementVlan = config.managementVlan;
    this._run = config.run;
    this._systemNames.internalValue = config.systemNames;
    this._timer = config.timer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // holdtime - computed: false, optional: true, required: false
  private _holdtime?: number; 
  public get holdtime() {
    return this.getNumberAttribute('holdtime');
  }
  public set holdtime(value: number) {
    this._holdtime = value;
  }
  public resetHoldtime() {
    this._holdtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeInput() {
    return this._holdtime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_management_addresses - computed: false, optional: true, required: false
  private _ipv4ManagementAddresses?: string[]; 
  public get ipv4ManagementAddresses() {
    return this.getListAttribute('ipv4_management_addresses');
  }
  public set ipv4ManagementAddresses(value: string[]) {
    this._ipv4ManagementAddresses = value;
  }
  public resetIpv4ManagementAddresses() {
    this._ipv4ManagementAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ManagementAddressesInput() {
    return this._ipv4ManagementAddresses;
  }

  // ipv6_management_addresses - computed: false, optional: true, required: false
  private _ipv6ManagementAddresses?: string[]; 
  public get ipv6ManagementAddresses() {
    return this.getListAttribute('ipv6_management_addresses');
  }
  public set ipv6ManagementAddresses(value: string[]) {
    this._ipv6ManagementAddresses = value;
  }
  public resetIpv6ManagementAddresses() {
    this._ipv6ManagementAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ManagementAddressesInput() {
    return this._ipv6ManagementAddresses;
  }

  // management_vlan - computed: false, optional: true, required: false
  private _managementVlan?: number; 
  public get managementVlan() {
    return this.getNumberAttribute('management_vlan');
  }
  public set managementVlan(value: number) {
    this._managementVlan = value;
  }
  public resetManagementVlan() {
    this._managementVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementVlanInput() {
    return this._managementVlan;
  }

  // run - computed: false, optional: true, required: false
  private _run?: boolean | cdktf.IResolvable; 
  public get run() {
    return this.getBooleanAttribute('run');
  }
  public set run(value: boolean | cdktf.IResolvable) {
    this._run = value;
  }
  public resetRun() {
    this._run = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runInput() {
    return this._run;
  }

  // system_names - computed: false, optional: true, required: false
  private _systemNames = new LldpSystemNamesList(this, "system_names", false);
  public get systemNames() {
    return this._systemNames;
  }
  public putSystemNames(value: LldpSystemNames[] | cdktf.IResolvable) {
    this._systemNames.internalValue = value;
  }
  public resetSystemNames() {
    this._systemNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemNamesInput() {
    return this._systemNames.internalValue;
  }

  // timer - computed: false, optional: true, required: false
  private _timer?: number; 
  public get timer() {
    return this.getNumberAttribute('timer');
  }
  public set timer(value: number) {
    this._timer = value;
  }
  public resetTimer() {
    this._timer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      holdtime: cdktf.numberToTerraform(this._holdtime),
      ipv4_management_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4ManagementAddresses),
      ipv6_management_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6ManagementAddresses),
      management_vlan: cdktf.numberToTerraform(this._managementVlan),
      run: cdktf.booleanToTerraform(this._run),
      system_names: cdktf.listMapper(lldpSystemNamesToTerraform, false)(this._systemNames.internalValue),
      timer: cdktf.numberToTerraform(this._timer),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      holdtime: {
        value: cdktf.numberToHclTerraform(this._holdtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_management_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4ManagementAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6_management_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6ManagementAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      management_vlan: {
        value: cdktf.numberToHclTerraform(this._managementVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      run: {
        value: cdktf.booleanToHclTerraform(this._run),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      system_names: {
        value: cdktf.listMapperHcl(lldpSystemNamesToHclTerraform, false)(this._systemNames.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LldpSystemNamesList",
      },
      timer: {
        value: cdktf.numberToHclTerraform(this._timer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
