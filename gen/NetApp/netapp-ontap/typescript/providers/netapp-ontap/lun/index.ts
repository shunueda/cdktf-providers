// https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/lun
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LunConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/lun#cx_profile_name Lun#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * The base name component of the LUN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/lun#logical_unit Lun#logical_unit}
  */
  readonly logicalUnit?: string;
  /**
  * Path for the LUN you want to create or modify. Example of correct LUN path: /vol/vol1/lun1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/lun#name Lun#name}
  */
  readonly name?: string;
  /**
  * The operating system type of the LUN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/lun#os_type Lun#os_type}
  */
  readonly osType: string;
  /**
  * QoS policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/lun#qos_policy_name Lun#qos_policy_name}
  */
  readonly qosPolicyName?: string;
  /**
  * Specifies the value for the space allocation attribute, which determines if the LUN supports the SCSI Thin Provisioning features
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/lun#scsi_thin_provisioning_support_enabled Lun#scsi_thin_provisioning_support_enabled}
  */
  readonly scsiThinProvisioningSupportEnabled?: boolean | cdktf.IResolvable;
  /**
  * Size of the lun in byte if size_unit is not provided, otherwise size in the specified unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/lun#size Lun#size}
  */
  readonly size: number;
  /**
  * The unit used to interpret the size parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/lun#size_unit Lun#size_unit}
  */
  readonly sizeUnit?: string;
  /**
  * The name of the SVM in which the LUN is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/lun#svm_name Lun#svm_name}
  */
  readonly svmName: string;
  /**
  * The volume in which the LUN is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/lun#volume_name Lun#volume_name}
  */
  readonly volumeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/lun netapp-ontap_lun}
*/
export class Lun extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_lun";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lun to import
  * @param importFromId The id of the existing Lun that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/lun#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_lun", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/lun netapp-ontap_lun} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LunConfig
  */
  public constructor(scope: Construct, id: string, config: LunConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_lun',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._logicalUnit = config.logicalUnit;
    this._name = config.name;
    this._osType = config.osType;
    this._qosPolicyName = config.qosPolicyName;
    this._scsiThinProvisioningSupportEnabled = config.scsiThinProvisioningSupportEnabled;
    this._size = config.size;
    this._sizeUnit = config.sizeUnit;
    this._svmName = config.svmName;
    this._volumeName = config.volumeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logical_unit - computed: true, optional: true, required: false
  private _logicalUnit?: string; 
  public get logicalUnit() {
    return this.getStringAttribute('logical_unit');
  }
  public set logicalUnit(value: string) {
    this._logicalUnit = value;
  }
  public resetLogicalUnit() {
    this._logicalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalUnitInput() {
    return this._logicalUnit;
  }

  // name - computed: true, optional: true, required: false
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

  // os_type - computed: false, optional: false, required: true
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // qos_policy_name - computed: false, optional: true, required: false
  private _qosPolicyName?: string; 
  public get qosPolicyName() {
    return this.getStringAttribute('qos_policy_name');
  }
  public set qosPolicyName(value: string) {
    this._qosPolicyName = value;
  }
  public resetQosPolicyName() {
    this._qosPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyNameInput() {
    return this._qosPolicyName;
  }

  // scsi_thin_provisioning_support_enabled - computed: true, optional: true, required: false
  private _scsiThinProvisioningSupportEnabled?: boolean | cdktf.IResolvable; 
  public get scsiThinProvisioningSupportEnabled() {
    return this.getBooleanAttribute('scsi_thin_provisioning_support_enabled');
  }
  public set scsiThinProvisioningSupportEnabled(value: boolean | cdktf.IResolvable) {
    this._scsiThinProvisioningSupportEnabled = value;
  }
  public resetScsiThinProvisioningSupportEnabled() {
    this._scsiThinProvisioningSupportEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsiThinProvisioningSupportEnabledInput() {
    return this._scsiThinProvisioningSupportEnabled;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_unit - computed: false, optional: true, required: false
  private _sizeUnit?: string; 
  public get sizeUnit() {
    return this.getStringAttribute('size_unit');
  }
  public set sizeUnit(value: string) {
    this._sizeUnit = value;
  }
  public resetSizeUnit() {
    this._sizeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeUnitInput() {
    return this._sizeUnit;
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      logical_unit: cdktf.stringToTerraform(this._logicalUnit),
      name: cdktf.stringToTerraform(this._name),
      os_type: cdktf.stringToTerraform(this._osType),
      qos_policy_name: cdktf.stringToTerraform(this._qosPolicyName),
      scsi_thin_provisioning_support_enabled: cdktf.booleanToTerraform(this._scsiThinProvisioningSupportEnabled),
      size: cdktf.numberToTerraform(this._size),
      size_unit: cdktf.stringToTerraform(this._sizeUnit),
      svm_name: cdktf.stringToTerraform(this._svmName),
      volume_name: cdktf.stringToTerraform(this._volumeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_unit: {
        value: cdktf.stringToHclTerraform(this._logicalUnit),
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
      os_type: {
        value: cdktf.stringToHclTerraform(this._osType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_policy_name: {
        value: cdktf.stringToHclTerraform(this._qosPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scsi_thin_provisioning_support_enabled: {
        value: cdktf.booleanToHclTerraform(this._scsiThinProvisioningSupportEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size_unit: {
        value: cdktf.stringToHclTerraform(this._sizeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_name: {
        value: cdktf.stringToHclTerraform(this._volumeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
