// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcmpGuestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Contains those slots to which the guest is allowed to be assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest#allowed_slots VcmpGuest#allowed_slots}
  */
  readonly allowedSlots?: number[];
  /**
  * The number of cores the system allocates to the guest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest#cores_per_slot VcmpGuest#cores_per_slot}
  */
  readonly coresPerSlot?: number;
  /**
  * Indicates if virtual disk associated with vCMP guest should be removed during remove operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest#delete_virtual_disk VcmpGuest#delete_virtual_disk}
  */
  readonly deleteVirtualDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest#id VcmpGuest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The hotfix ISO image file which is applied on top of the base image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest#initial_hotfix VcmpGuest#initial_hotfix}
  */
  readonly initialHotfix?: string;
  /**
  * The base software release ISO image file for installing the TMOS hypervisor instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest#initial_image VcmpGuest#initial_image}
  */
  readonly initialImage?: string;
  /**
  * The IP address and subnet or subnet mask you use to access the guest when you want to manage a module running within the guest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest#mgmt_address VcmpGuest#mgmt_address}
  */
  readonly mgmtAddress?: string;
  /**
  * The method by which the management address is used in the vCMP guest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest#mgmt_network VcmpGuest#mgmt_network}
  */
  readonly mgmtNetwork?: string;
  /**
  * The gateway address for the mgmt_address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest#mgmt_route VcmpGuest#mgmt_route}
  */
  readonly mgmtRoute?: string;
  /**
  * The minimum number of slots the guest must be assigned to in order to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest#min_number_of_slots VcmpGuest#min_number_of_slots}
  */
  readonly minNumberOfSlots?: number;
  /**
  * Name of the vCMP guest instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest#name VcmpGuest#name}
  */
  readonly name: string;
  /**
  * The number of slots for the system to use when creating the guest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest#number_of_slots VcmpGuest#number_of_slots}
  */
  readonly numberOfSlots?: number;
  /**
  * The state of the vCMP guest on the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest#state VcmpGuest#state}
  */
  readonly state?: string;
  /**
  * VLANs the guest uses to communicate with other guests, the host, and with the external network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest#vlans VcmpGuest#vlans}
  */
  readonly vlans?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest bigip_vcmp_guest}
*/
export class VcmpGuest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_vcmp_guest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VcmpGuest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VcmpGuest to import
  * @param importFromId The id of the existing VcmpGuest that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VcmpGuest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_vcmp_guest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/vcmp_guest bigip_vcmp_guest} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcmpGuestConfig
  */
  public constructor(scope: Construct, id: string, config: VcmpGuestConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_vcmp_guest',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedSlots = config.allowedSlots;
    this._coresPerSlot = config.coresPerSlot;
    this._deleteVirtualDisk = config.deleteVirtualDisk;
    this._id = config.id;
    this._initialHotfix = config.initialHotfix;
    this._initialImage = config.initialImage;
    this._mgmtAddress = config.mgmtAddress;
    this._mgmtNetwork = config.mgmtNetwork;
    this._mgmtRoute = config.mgmtRoute;
    this._minNumberOfSlots = config.minNumberOfSlots;
    this._name = config.name;
    this._numberOfSlots = config.numberOfSlots;
    this._state = config.state;
    this._vlans = config.vlans;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_slots - computed: true, optional: true, required: false
  private _allowedSlots?: number[]; 
  public get allowedSlots() {
    return this.getNumberListAttribute('allowed_slots');
  }
  public set allowedSlots(value: number[]) {
    this._allowedSlots = value;
  }
  public resetAllowedSlots() {
    this._allowedSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSlotsInput() {
    return this._allowedSlots;
  }

  // cores_per_slot - computed: true, optional: true, required: false
  private _coresPerSlot?: number; 
  public get coresPerSlot() {
    return this.getNumberAttribute('cores_per_slot');
  }
  public set coresPerSlot(value: number) {
    this._coresPerSlot = value;
  }
  public resetCoresPerSlot() {
    this._coresPerSlot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresPerSlotInput() {
    return this._coresPerSlot;
  }

  // delete_virtual_disk - computed: false, optional: true, required: false
  private _deleteVirtualDisk?: boolean | cdktf.IResolvable; 
  public get deleteVirtualDisk() {
    return this.getBooleanAttribute('delete_virtual_disk');
  }
  public set deleteVirtualDisk(value: boolean | cdktf.IResolvable) {
    this._deleteVirtualDisk = value;
  }
  public resetDeleteVirtualDisk() {
    this._deleteVirtualDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteVirtualDiskInput() {
    return this._deleteVirtualDisk;
  }

  // full_path - computed: true, optional: false, required: false
  public get fullPath() {
    return this.getStringAttribute('full_path');
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

  // initial_hotfix - computed: true, optional: true, required: false
  private _initialHotfix?: string; 
  public get initialHotfix() {
    return this.getStringAttribute('initial_hotfix');
  }
  public set initialHotfix(value: string) {
    this._initialHotfix = value;
  }
  public resetInitialHotfix() {
    this._initialHotfix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialHotfixInput() {
    return this._initialHotfix;
  }

  // initial_image - computed: true, optional: true, required: false
  private _initialImage?: string; 
  public get initialImage() {
    return this.getStringAttribute('initial_image');
  }
  public set initialImage(value: string) {
    this._initialImage = value;
  }
  public resetInitialImage() {
    this._initialImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialImageInput() {
    return this._initialImage;
  }

  // mgmt_address - computed: true, optional: true, required: false
  private _mgmtAddress?: string; 
  public get mgmtAddress() {
    return this.getStringAttribute('mgmt_address');
  }
  public set mgmtAddress(value: string) {
    this._mgmtAddress = value;
  }
  public resetMgmtAddress() {
    this._mgmtAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtAddressInput() {
    return this._mgmtAddress;
  }

  // mgmt_network - computed: true, optional: true, required: false
  private _mgmtNetwork?: string; 
  public get mgmtNetwork() {
    return this.getStringAttribute('mgmt_network');
  }
  public set mgmtNetwork(value: string) {
    this._mgmtNetwork = value;
  }
  public resetMgmtNetwork() {
    this._mgmtNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtNetworkInput() {
    return this._mgmtNetwork;
  }

  // mgmt_route - computed: true, optional: true, required: false
  private _mgmtRoute?: string; 
  public get mgmtRoute() {
    return this.getStringAttribute('mgmt_route');
  }
  public set mgmtRoute(value: string) {
    this._mgmtRoute = value;
  }
  public resetMgmtRoute() {
    this._mgmtRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtRouteInput() {
    return this._mgmtRoute;
  }

  // min_number_of_slots - computed: true, optional: true, required: false
  private _minNumberOfSlots?: number; 
  public get minNumberOfSlots() {
    return this.getNumberAttribute('min_number_of_slots');
  }
  public set minNumberOfSlots(value: number) {
    this._minNumberOfSlots = value;
  }
  public resetMinNumberOfSlots() {
    this._minNumberOfSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumberOfSlotsInput() {
    return this._minNumberOfSlots;
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

  // number_of_slots - computed: true, optional: true, required: false
  private _numberOfSlots?: number; 
  public get numberOfSlots() {
    return this.getNumberAttribute('number_of_slots');
  }
  public set numberOfSlots(value: number) {
    this._numberOfSlots = value;
  }
  public resetNumberOfSlots() {
    this._numberOfSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfSlotsInput() {
    return this._numberOfSlots;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // virtual_disk - computed: true, optional: false, required: false
  public get virtualDisk() {
    return this.getStringAttribute('virtual_disk');
  }

  // vlans - computed: true, optional: true, required: false
  private _vlans?: string[]; 
  public get vlans() {
    return this.getListAttribute('vlans');
  }
  public set vlans(value: string[]) {
    this._vlans = value;
  }
  public resetVlans() {
    this._vlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_slots: cdktf.listMapper(cdktf.numberToTerraform, false)(this._allowedSlots),
      cores_per_slot: cdktf.numberToTerraform(this._coresPerSlot),
      delete_virtual_disk: cdktf.booleanToTerraform(this._deleteVirtualDisk),
      id: cdktf.stringToTerraform(this._id),
      initial_hotfix: cdktf.stringToTerraform(this._initialHotfix),
      initial_image: cdktf.stringToTerraform(this._initialImage),
      mgmt_address: cdktf.stringToTerraform(this._mgmtAddress),
      mgmt_network: cdktf.stringToTerraform(this._mgmtNetwork),
      mgmt_route: cdktf.stringToTerraform(this._mgmtRoute),
      min_number_of_slots: cdktf.numberToTerraform(this._minNumberOfSlots),
      name: cdktf.stringToTerraform(this._name),
      number_of_slots: cdktf.numberToTerraform(this._numberOfSlots),
      state: cdktf.stringToTerraform(this._state),
      vlans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vlans),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_slots: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._allowedSlots),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      cores_per_slot: {
        value: cdktf.numberToHclTerraform(this._coresPerSlot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_virtual_disk: {
        value: cdktf.booleanToHclTerraform(this._deleteVirtualDisk),
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
      initial_hotfix: {
        value: cdktf.stringToHclTerraform(this._initialHotfix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_image: {
        value: cdktf.stringToHclTerraform(this._initialImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_address: {
        value: cdktf.stringToHclTerraform(this._mgmtAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_network: {
        value: cdktf.stringToHclTerraform(this._mgmtNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_route: {
        value: cdktf.stringToHclTerraform(this._mgmtRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_number_of_slots: {
        value: cdktf.numberToHclTerraform(this._minNumberOfSlots),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_slots: {
        value: cdktf.numberToHclTerraform(this._numberOfSlots),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vlans),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
