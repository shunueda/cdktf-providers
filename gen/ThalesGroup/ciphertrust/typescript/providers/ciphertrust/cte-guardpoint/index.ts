// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CteGuardpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether automount is enabled with the GuardPoint. Supported for Standard and LDT policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#automount_enabled CteGuardpoint#automount_enabled}
  */
  readonly automountEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable CIFS. Available on LDT enabled windows clients only. The default value is false. If you enable the setting, it cannot be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#cifs_enabled CteGuardpoint#cifs_enabled}
  */
  readonly cifsEnabled?: boolean | cdktf.IResolvable;
  /**
  * IP Address/hostname/ID of client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#client_id CteGuardpoint#client_id}
  */
  readonly clientId: string;
  /**
  * (Updateable) Whether data classification (tagging) is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#data_classification_enabled CteGuardpoint#data_classification_enabled}
  */
  readonly dataClassificationEnabled?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Whether data lineage (tracking) is enabled. Enabled only if data classification is enabled. Supported for Standard and LDT policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#data_lineage_enabled CteGuardpoint#data_lineage_enabled}
  */
  readonly dataLineageEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the disk group if the selected raw partition is a member of an Oracle ASM disk group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#disk_group_name CteGuardpoint#disk_group_name}
  */
  readonly diskGroupName?: string;
  /**
  * Name of the disk if the selected raw partition is a member of an Oracle ASM disk group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#disk_name CteGuardpoint#disk_name}
  */
  readonly diskName?: string;
  /**
  * Docker container ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#docker_cont_id CteGuardpoint#docker_cont_id}
  */
  readonly dockerContId?: string;
  /**
  * Docker image ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#docker_img_id CteGuardpoint#docker_img_id}
  */
  readonly dockerImgId?: string;
  /**
  * Type of Guardpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#gp_type CteGuardpoint#gp_type}
  */
  readonly gpType: string;
  /**
  * (Updateable) Guard Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#guard_enabled CteGuardpoint#guard_enabled}
  */
  readonly guardEnabled: boolean | cdktf.IResolvable;
  /**
  * (Updateable) List of GP paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#guard_paths CteGuardpoint#guard_paths}
  */
  readonly guardPaths: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#id CteGuardpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the device where GuardPoint is applied is ESG capable or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#is_esg_capable_device CteGuardpoint#is_esg_capable_device}
  */
  readonly isEsgCapableDevice?: boolean | cdktf.IResolvable;
  /**
  * Whether the device where GuardPoint is applied is IDT capable or not. Supported for IDT policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#is_idt_capable_device CteGuardpoint#is_idt_capable_device}
  */
  readonly isIdtCapableDevice?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) MFA enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#mfa_enabled CteGuardpoint#mfa_enabled}
  */
  readonly mfaEnabled?: boolean | cdktf.IResolvable;
  /**
  * ID of the policy applied with this GuardPoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#policy_id CteGuardpoint#policy_id}
  */
  readonly policyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint ciphertrust_cte_guardpoint}
*/
export class CteGuardpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_cte_guardpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CteGuardpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CteGuardpoint to import
  * @param importFromId The id of the existing CteGuardpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CteGuardpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_cte_guardpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_guardpoint ciphertrust_cte_guardpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CteGuardpointConfig
  */
  public constructor(scope: Construct, id: string, config: CteGuardpointConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_cte_guardpoint',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automountEnabled = config.automountEnabled;
    this._cifsEnabled = config.cifsEnabled;
    this._clientId = config.clientId;
    this._dataClassificationEnabled = config.dataClassificationEnabled;
    this._dataLineageEnabled = config.dataLineageEnabled;
    this._diskGroupName = config.diskGroupName;
    this._diskName = config.diskName;
    this._dockerContId = config.dockerContId;
    this._dockerImgId = config.dockerImgId;
    this._gpType = config.gpType;
    this._guardEnabled = config.guardEnabled;
    this._guardPaths = config.guardPaths;
    this._id = config.id;
    this._isEsgCapableDevice = config.isEsgCapableDevice;
    this._isIdtCapableDevice = config.isIdtCapableDevice;
    this._mfaEnabled = config.mfaEnabled;
    this._policyId = config.policyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automount_enabled - computed: false, optional: true, required: false
  private _automountEnabled?: boolean | cdktf.IResolvable; 
  public get automountEnabled() {
    return this.getBooleanAttribute('automount_enabled');
  }
  public set automountEnabled(value: boolean | cdktf.IResolvable) {
    this._automountEnabled = value;
  }
  public resetAutomountEnabled() {
    this._automountEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automountEnabledInput() {
    return this._automountEnabled;
  }

  // cifs_enabled - computed: false, optional: true, required: false
  private _cifsEnabled?: boolean | cdktf.IResolvable; 
  public get cifsEnabled() {
    return this.getBooleanAttribute('cifs_enabled');
  }
  public set cifsEnabled(value: boolean | cdktf.IResolvable) {
    this._cifsEnabled = value;
  }
  public resetCifsEnabled() {
    this._cifsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cifsEnabledInput() {
    return this._cifsEnabled;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // data_classification_enabled - computed: false, optional: true, required: false
  private _dataClassificationEnabled?: boolean | cdktf.IResolvable; 
  public get dataClassificationEnabled() {
    return this.getBooleanAttribute('data_classification_enabled');
  }
  public set dataClassificationEnabled(value: boolean | cdktf.IResolvable) {
    this._dataClassificationEnabled = value;
  }
  public resetDataClassificationEnabled() {
    this._dataClassificationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataClassificationEnabledInput() {
    return this._dataClassificationEnabled;
  }

  // data_lineage_enabled - computed: false, optional: true, required: false
  private _dataLineageEnabled?: boolean | cdktf.IResolvable; 
  public get dataLineageEnabled() {
    return this.getBooleanAttribute('data_lineage_enabled');
  }
  public set dataLineageEnabled(value: boolean | cdktf.IResolvable) {
    this._dataLineageEnabled = value;
  }
  public resetDataLineageEnabled() {
    this._dataLineageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLineageEnabledInput() {
    return this._dataLineageEnabled;
  }

  // disk_group_name - computed: false, optional: true, required: false
  private _diskGroupName?: string; 
  public get diskGroupName() {
    return this.getStringAttribute('disk_group_name');
  }
  public set diskGroupName(value: string) {
    this._diskGroupName = value;
  }
  public resetDiskGroupName() {
    this._diskGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskGroupNameInput() {
    return this._diskGroupName;
  }

  // disk_name - computed: false, optional: true, required: false
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  public resetDiskName() {
    this._diskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
  }

  // docker_cont_id - computed: false, optional: true, required: false
  private _dockerContId?: string; 
  public get dockerContId() {
    return this.getStringAttribute('docker_cont_id');
  }
  public set dockerContId(value: string) {
    this._dockerContId = value;
  }
  public resetDockerContId() {
    this._dockerContId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerContIdInput() {
    return this._dockerContId;
  }

  // docker_img_id - computed: false, optional: true, required: false
  private _dockerImgId?: string; 
  public get dockerImgId() {
    return this.getStringAttribute('docker_img_id');
  }
  public set dockerImgId(value: string) {
    this._dockerImgId = value;
  }
  public resetDockerImgId() {
    this._dockerImgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImgIdInput() {
    return this._dockerImgId;
  }

  // gp_type - computed: false, optional: false, required: true
  private _gpType?: string; 
  public get gpType() {
    return this.getStringAttribute('gp_type');
  }
  public set gpType(value: string) {
    this._gpType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gpTypeInput() {
    return this._gpType;
  }

  // guard_enabled - computed: false, optional: false, required: true
  private _guardEnabled?: boolean | cdktf.IResolvable; 
  public get guardEnabled() {
    return this.getBooleanAttribute('guard_enabled');
  }
  public set guardEnabled(value: boolean | cdktf.IResolvable) {
    this._guardEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guardEnabledInput() {
    return this._guardEnabled;
  }

  // guard_paths - computed: false, optional: false, required: true
  private _guardPaths?: string[]; 
  public get guardPaths() {
    return this.getListAttribute('guard_paths');
  }
  public set guardPaths(value: string[]) {
    this._guardPaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guardPathsInput() {
    return this._guardPaths;
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

  // is_esg_capable_device - computed: false, optional: true, required: false
  private _isEsgCapableDevice?: boolean | cdktf.IResolvable; 
  public get isEsgCapableDevice() {
    return this.getBooleanAttribute('is_esg_capable_device');
  }
  public set isEsgCapableDevice(value: boolean | cdktf.IResolvable) {
    this._isEsgCapableDevice = value;
  }
  public resetIsEsgCapableDevice() {
    this._isEsgCapableDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEsgCapableDeviceInput() {
    return this._isEsgCapableDevice;
  }

  // is_idt_capable_device - computed: false, optional: true, required: false
  private _isIdtCapableDevice?: boolean | cdktf.IResolvable; 
  public get isIdtCapableDevice() {
    return this.getBooleanAttribute('is_idt_capable_device');
  }
  public set isIdtCapableDevice(value: boolean | cdktf.IResolvable) {
    this._isIdtCapableDevice = value;
  }
  public resetIsIdtCapableDevice() {
    this._isIdtCapableDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIdtCapableDeviceInput() {
    return this._isIdtCapableDevice;
  }

  // mfa_enabled - computed: false, optional: true, required: false
  private _mfaEnabled?: boolean | cdktf.IResolvable; 
  public get mfaEnabled() {
    return this.getBooleanAttribute('mfa_enabled');
  }
  public set mfaEnabled(value: boolean | cdktf.IResolvable) {
    this._mfaEnabled = value;
  }
  public resetMfaEnabled() {
    this._mfaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaEnabledInput() {
    return this._mfaEnabled;
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automount_enabled: cdktf.booleanToTerraform(this._automountEnabled),
      cifs_enabled: cdktf.booleanToTerraform(this._cifsEnabled),
      client_id: cdktf.stringToTerraform(this._clientId),
      data_classification_enabled: cdktf.booleanToTerraform(this._dataClassificationEnabled),
      data_lineage_enabled: cdktf.booleanToTerraform(this._dataLineageEnabled),
      disk_group_name: cdktf.stringToTerraform(this._diskGroupName),
      disk_name: cdktf.stringToTerraform(this._diskName),
      docker_cont_id: cdktf.stringToTerraform(this._dockerContId),
      docker_img_id: cdktf.stringToTerraform(this._dockerImgId),
      gp_type: cdktf.stringToTerraform(this._gpType),
      guard_enabled: cdktf.booleanToTerraform(this._guardEnabled),
      guard_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._guardPaths),
      id: cdktf.stringToTerraform(this._id),
      is_esg_capable_device: cdktf.booleanToTerraform(this._isEsgCapableDevice),
      is_idt_capable_device: cdktf.booleanToTerraform(this._isIdtCapableDevice),
      mfa_enabled: cdktf.booleanToTerraform(this._mfaEnabled),
      policy_id: cdktf.stringToTerraform(this._policyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automount_enabled: {
        value: cdktf.booleanToHclTerraform(this._automountEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cifs_enabled: {
        value: cdktf.booleanToHclTerraform(this._cifsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_classification_enabled: {
        value: cdktf.booleanToHclTerraform(this._dataClassificationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_lineage_enabled: {
        value: cdktf.booleanToHclTerraform(this._dataLineageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_group_name: {
        value: cdktf.stringToHclTerraform(this._diskGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_name: {
        value: cdktf.stringToHclTerraform(this._diskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docker_cont_id: {
        value: cdktf.stringToHclTerraform(this._dockerContId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docker_img_id: {
        value: cdktf.stringToHclTerraform(this._dockerImgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gp_type: {
        value: cdktf.stringToHclTerraform(this._gpType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guard_enabled: {
        value: cdktf.booleanToHclTerraform(this._guardEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guard_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._guardPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_esg_capable_device: {
        value: cdktf.booleanToHclTerraform(this._isEsgCapableDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_idt_capable_device: {
        value: cdktf.booleanToHclTerraform(this._isIdtCapableDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mfa_enabled: {
        value: cdktf.booleanToHclTerraform(this._mfaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
