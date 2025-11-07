// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The architecture type of the machine. Defaults to `amd64/generic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/machine#architecture Machine#architecture}
  */
  readonly architecture?: string;
  /**
  * The domain of the machine. This is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/machine#domain Machine#domain}
  */
  readonly domain?: string;
  /**
  * The machine hostname. This is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/machine#hostname Machine#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/machine#id Machine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The minimum kernel version allowed to run on this machine. Only used when deploying Ubuntu. This is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/machine#min_hwe_kernel Machine#min_hwe_kernel}
  */
  readonly minHweKernel?: string;
  /**
  * The resource pool of the machine. This is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/machine#pool Machine#pool}
  */
  readonly pool?: string;
  /**
  * Serialized JSON string containing the parameters specific to the `power_type`. See [Power types](https://maas.io/docs/api#power-types) section for a list of the available power parameters for each power type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/machine#power_parameters Machine#power_parameters}
  */
  readonly powerParameters: string;
  /**
  * A power management type (e.g. `ipmi`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/machine#power_type Machine#power_type}
  */
  readonly powerType: string;
  /**
  * The MAC address of the machine's PXE boot NIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/machine#pxe_mac_address Machine#pxe_mac_address}
  */
  readonly pxeMacAddress: string;
  /**
  * The zone of the machine. This is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/machine#zone Machine#zone}
  */
  readonly zone?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/machine#timeouts Machine#timeouts}
  */
  readonly timeouts?: MachineTimeouts;
}
export interface MachineBlockDevices {
}

export function machineBlockDevicesToTerraform(struct?: MachineBlockDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function machineBlockDevicesToHclTerraform(struct?: MachineBlockDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MachineBlockDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MachineBlockDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineBlockDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id_path - computed: true, optional: false, required: false
  public get idPath() {
    return this.getStringAttribute('id_path');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size_gigabytes - computed: true, optional: false, required: false
  public get sizeGigabytes() {
    return this.getNumberAttribute('size_gigabytes');
  }
}

export class MachineBlockDevicesList extends cdktf.ComplexList {

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
  public get(index: number): MachineBlockDevicesOutputReference {
    return new MachineBlockDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/machine#create Machine#create}
  */
  readonly create?: string;
}

export function machineTimeoutsToTerraform(struct?: MachineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function machineTimeoutsToHclTerraform(struct?: MachineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/machine maas_machine}
*/
export class Machine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Machine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Machine to import
  * @param importFromId The id of the existing Machine that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Machine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/machine maas_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineConfig
  */
  public constructor(scope: Construct, id: string, config: MachineConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_machine',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._architecture = config.architecture;
    this._domain = config.domain;
    this._hostname = config.hostname;
    this._id = config.id;
    this._minHweKernel = config.minHweKernel;
    this._pool = config.pool;
    this._powerParameters = config.powerParameters;
    this._powerType = config.powerType;
    this._pxeMacAddress = config.pxeMacAddress;
    this._zone = config.zone;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // block_devices - computed: true, optional: false, required: false
  private _blockDevices = new MachineBlockDevicesList(this, "block_devices", false);
  public get blockDevices() {
    return this._blockDevices;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // min_hwe_kernel - computed: true, optional: true, required: false
  private _minHweKernel?: string; 
  public get minHweKernel() {
    return this.getStringAttribute('min_hwe_kernel');
  }
  public set minHweKernel(value: string) {
    this._minHweKernel = value;
  }
  public resetMinHweKernel() {
    this._minHweKernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHweKernelInput() {
    return this._minHweKernel;
  }

  // network_interfaces - computed: true, optional: false, required: false
  public get networkInterfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('network_interfaces'));
  }

  // pool - computed: true, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // power_parameters - computed: false, optional: false, required: true
  private _powerParameters?: string; 
  public get powerParameters() {
    return this.getStringAttribute('power_parameters');
  }
  public set powerParameters(value: string) {
    this._powerParameters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get powerParametersInput() {
    return this._powerParameters;
  }

  // power_type - computed: false, optional: false, required: true
  private _powerType?: string; 
  public get powerType() {
    return this.getStringAttribute('power_type');
  }
  public set powerType(value: string) {
    this._powerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get powerTypeInput() {
    return this._powerType;
  }

  // pxe_mac_address - computed: false, optional: false, required: true
  private _pxeMacAddress?: string; 
  public get pxeMacAddress() {
    return this.getStringAttribute('pxe_mac_address');
  }
  public set pxeMacAddress(value: string) {
    this._pxeMacAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pxeMacAddressInput() {
    return this._pxeMacAddress;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MachineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MachineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      architecture: cdktf.stringToTerraform(this._architecture),
      domain: cdktf.stringToTerraform(this._domain),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      min_hwe_kernel: cdktf.stringToTerraform(this._minHweKernel),
      pool: cdktf.stringToTerraform(this._pool),
      power_parameters: cdktf.stringToTerraform(this._powerParameters),
      power_type: cdktf.stringToTerraform(this._powerType),
      pxe_mac_address: cdktf.stringToTerraform(this._pxeMacAddress),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: machineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      architecture: {
        value: cdktf.stringToHclTerraform(this._architecture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      min_hwe_kernel: {
        value: cdktf.stringToHclTerraform(this._minHweKernel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool: {
        value: cdktf.stringToHclTerraform(this._pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_parameters: {
        value: cdktf.stringToHclTerraform(this._powerParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_type: {
        value: cdktf.stringToHclTerraform(this._powerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pxe_mac_address: {
        value: cdktf.stringToHclTerraform(this._pxeMacAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: machineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MachineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
