// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_internal_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmInternalDiskAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Powers off VM when changing any attribute of an IDE disk or unit/bus number of other disk types, after the change is complete VM is powered back on. Without this setting enabled, such changes on a powered-on VM would fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_internal_disk#allow_vm_reboot VmInternalDiskA#allow_vm_reboot}
  */
  readonly allowVmReboot?: boolean | cdktf.IResolvable;
  /**
  * The number of the SCSI or IDE controller itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_internal_disk#bus_number VmInternalDiskA#bus_number}
  */
  readonly busNumber: number;
  /**
  * The type of disk controller. Possible values: ide, parallel( LSI Logic Parallel SCSI), sas(LSI Logic SAS (SCSI)), paravirtual(Paravirtual (SCSI)), sata, nvme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_internal_disk#bus_type VmInternalDiskA#bus_type}
  */
  readonly busType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_internal_disk#id VmInternalDiskA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the IOPS for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_internal_disk#iops VmInternalDiskA#iops}
  */
  readonly iops?: number;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_internal_disk#org VmInternalDiskA#org}
  */
  readonly org?: string;
  /**
  * The size of the disk in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_internal_disk#size_in_mb VmInternalDiskA#size_in_mb}
  */
  readonly sizeInMb: number;
  /**
  * Storage profile to override the VM default one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_internal_disk#storage_profile VmInternalDiskA#storage_profile}
  */
  readonly storageProfile?: string;
  /**
  * The device number on the SCSI or IDE controller of the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_internal_disk#unit_number VmInternalDiskA#unit_number}
  */
  readonly unitNumber: number;
  /**
  * The vApp this VM internal disk belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_internal_disk#vapp_name VmInternalDiskA#vapp_name}
  */
  readonly vappName: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_internal_disk#vdc VmInternalDiskA#vdc}
  */
  readonly vdc?: string;
  /**
  * VM in vApp in which internal disk is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_internal_disk#vm_name VmInternalDiskA#vm_name}
  */
  readonly vmName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_internal_disk vcd_vm_internal_disk}
*/
export class VmInternalDiskA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_vm_internal_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmInternalDiskA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmInternalDiskA to import
  * @param importFromId The id of the existing VmInternalDiskA that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_internal_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmInternalDiskA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_vm_internal_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_internal_disk vcd_vm_internal_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmInternalDiskAConfig
  */
  public constructor(scope: Construct, id: string, config: VmInternalDiskAConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_vm_internal_disk',
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
    this._allowVmReboot = config.allowVmReboot;
    this._busNumber = config.busNumber;
    this._busType = config.busType;
    this._id = config.id;
    this._iops = config.iops;
    this._org = config.org;
    this._sizeInMb = config.sizeInMb;
    this._storageProfile = config.storageProfile;
    this._unitNumber = config.unitNumber;
    this._vappName = config.vappName;
    this._vdc = config.vdc;
    this._vmName = config.vmName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_vm_reboot - computed: false, optional: true, required: false
  private _allowVmReboot?: boolean | cdktf.IResolvable; 
  public get allowVmReboot() {
    return this.getBooleanAttribute('allow_vm_reboot');
  }
  public set allowVmReboot(value: boolean | cdktf.IResolvable) {
    this._allowVmReboot = value;
  }
  public resetAllowVmReboot() {
    this._allowVmReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVmRebootInput() {
    return this._allowVmReboot;
  }

  // bus_number - computed: false, optional: false, required: true
  private _busNumber?: number; 
  public get busNumber() {
    return this.getNumberAttribute('bus_number');
  }
  public set busNumber(value: number) {
    this._busNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get busNumberInput() {
    return this._busNumber;
  }

  // bus_type - computed: false, optional: false, required: true
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
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

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // size_in_mb - computed: false, optional: false, required: true
  private _sizeInMb?: number; 
  public get sizeInMb() {
    return this.getNumberAttribute('size_in_mb');
  }
  public set sizeInMb(value: number) {
    this._sizeInMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInMbInput() {
    return this._sizeInMb;
  }

  // storage_profile - computed: true, optional: true, required: false
  private _storageProfile?: string; 
  public get storageProfile() {
    return this.getStringAttribute('storage_profile');
  }
  public set storageProfile(value: string) {
    this._storageProfile = value;
  }
  public resetStorageProfile() {
    this._storageProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileInput() {
    return this._storageProfile;
  }

  // thin_provisioned - computed: true, optional: false, required: false
  public get thinProvisioned() {
    return this.getBooleanAttribute('thin_provisioned');
  }

  // unit_number - computed: false, optional: false, required: true
  private _unitNumber?: number; 
  public get unitNumber() {
    return this.getNumberAttribute('unit_number');
  }
  public set unitNumber(value: number) {
    this._unitNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitNumberInput() {
    return this._unitNumber;
  }

  // vapp_name - computed: false, optional: false, required: true
  private _vappName?: string; 
  public get vappName() {
    return this.getStringAttribute('vapp_name');
  }
  public set vappName(value: string) {
    this._vappName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vappNameInput() {
    return this._vappName;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // vm_name - computed: false, optional: false, required: true
  private _vmName?: string; 
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }
  public set vmName(value: string) {
    this._vmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNameInput() {
    return this._vmName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_vm_reboot: cdktf.booleanToTerraform(this._allowVmReboot),
      bus_number: cdktf.numberToTerraform(this._busNumber),
      bus_type: cdktf.stringToTerraform(this._busType),
      id: cdktf.stringToTerraform(this._id),
      iops: cdktf.numberToTerraform(this._iops),
      org: cdktf.stringToTerraform(this._org),
      size_in_mb: cdktf.numberToTerraform(this._sizeInMb),
      storage_profile: cdktf.stringToTerraform(this._storageProfile),
      unit_number: cdktf.numberToTerraform(this._unitNumber),
      vapp_name: cdktf.stringToTerraform(this._vappName),
      vdc: cdktf.stringToTerraform(this._vdc),
      vm_name: cdktf.stringToTerraform(this._vmName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_vm_reboot: {
        value: cdktf.booleanToHclTerraform(this._allowVmReboot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bus_number: {
        value: cdktf.numberToHclTerraform(this._busNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bus_type: {
        value: cdktf.stringToHclTerraform(this._busType),
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
      iops: {
        value: cdktf.numberToHclTerraform(this._iops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size_in_mb: {
        value: cdktf.numberToHclTerraform(this._sizeInMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_profile: {
        value: cdktf.stringToHclTerraform(this._storageProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_number: {
        value: cdktf.numberToHclTerraform(this._unitNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vapp_name: {
        value: cdktf.stringToHclTerraform(this._vappName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_name: {
        value: cdktf.stringToHclTerraform(this._vmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
