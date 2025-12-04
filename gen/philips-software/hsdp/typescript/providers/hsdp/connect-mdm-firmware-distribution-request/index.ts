// https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_distribution_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectMdmFirmwareDistributionRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_distribution_request#description ConnectMdmFirmwareDistributionRequest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_distribution_request#distribution_target_device_groups_ids ConnectMdmFirmwareDistributionRequest#distribution_target_device_groups_ids}
  */
  readonly distributionTargetDeviceGroupsIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_distribution_request#firmware_component_version_ids ConnectMdmFirmwareDistributionRequest#firmware_component_version_ids}
  */
  readonly firmwareComponentVersionIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_distribution_request#firmware_version ConnectMdmFirmwareDistributionRequest#firmware_version}
  */
  readonly firmwareVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_distribution_request#id ConnectMdmFirmwareDistributionRequest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_distribution_request#orchestration_mode ConnectMdmFirmwareDistributionRequest#orchestration_mode}
  */
  readonly orchestrationMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_distribution_request#status ConnectMdmFirmwareDistributionRequest#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_distribution_request#user_consent_required ConnectMdmFirmwareDistributionRequest#user_consent_required}
  */
  readonly userConsentRequired?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_distribution_request hsdp_connect_mdm_firmware_distribution_request}
*/
export class ConnectMdmFirmwareDistributionRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_connect_mdm_firmware_distribution_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectMdmFirmwareDistributionRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectMdmFirmwareDistributionRequest to import
  * @param importFromId The id of the existing ConnectMdmFirmwareDistributionRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_distribution_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectMdmFirmwareDistributionRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_connect_mdm_firmware_distribution_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_mdm_firmware_distribution_request hsdp_connect_mdm_firmware_distribution_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectMdmFirmwareDistributionRequestConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectMdmFirmwareDistributionRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_connect_mdm_firmware_distribution_request',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._distributionTargetDeviceGroupsIds = config.distributionTargetDeviceGroupsIds;
    this._firmwareComponentVersionIds = config.firmwareComponentVersionIds;
    this._firmwareVersion = config.firmwareVersion;
    this._id = config.id;
    this._orchestrationMode = config.orchestrationMode;
    this._status = config.status;
    this._userConsentRequired = config.userConsentRequired;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // distribution_target_device_groups_ids - computed: false, optional: true, required: false
  private _distributionTargetDeviceGroupsIds?: string[]; 
  public get distributionTargetDeviceGroupsIds() {
    return cdktf.Fn.tolist(this.getListAttribute('distribution_target_device_groups_ids'));
  }
  public set distributionTargetDeviceGroupsIds(value: string[]) {
    this._distributionTargetDeviceGroupsIds = value;
  }
  public resetDistributionTargetDeviceGroupsIds() {
    this._distributionTargetDeviceGroupsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionTargetDeviceGroupsIdsInput() {
    return this._distributionTargetDeviceGroupsIds;
  }

  // firmware_component_version_ids - computed: false, optional: true, required: false
  private _firmwareComponentVersionIds?: string[]; 
  public get firmwareComponentVersionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('firmware_component_version_ids'));
  }
  public set firmwareComponentVersionIds(value: string[]) {
    this._firmwareComponentVersionIds = value;
  }
  public resetFirmwareComponentVersionIds() {
    this._firmwareComponentVersionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareComponentVersionIdsInput() {
    return this._firmwareComponentVersionIds;
  }

  // firmware_version - computed: false, optional: false, required: true
  private _firmwareVersion?: string; 
  public get firmwareVersion() {
    return this.getStringAttribute('firmware_version');
  }
  public set firmwareVersion(value: string) {
    this._firmwareVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareVersionInput() {
    return this._firmwareVersion;
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // orchestration_mode - computed: false, optional: false, required: true
  private _orchestrationMode?: string; 
  public get orchestrationMode() {
    return this.getStringAttribute('orchestration_mode');
  }
  public set orchestrationMode(value: string) {
    this._orchestrationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestrationModeInput() {
    return this._orchestrationMode;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // user_consent_required - computed: false, optional: true, required: false
  private _userConsentRequired?: boolean | cdktf.IResolvable; 
  public get userConsentRequired() {
    return this.getBooleanAttribute('user_consent_required');
  }
  public set userConsentRequired(value: boolean | cdktf.IResolvable) {
    this._userConsentRequired = value;
  }
  public resetUserConsentRequired() {
    this._userConsentRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userConsentRequiredInput() {
    return this._userConsentRequired;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      distribution_target_device_groups_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._distributionTargetDeviceGroupsIds),
      firmware_component_version_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._firmwareComponentVersionIds),
      firmware_version: cdktf.stringToTerraform(this._firmwareVersion),
      id: cdktf.stringToTerraform(this._id),
      orchestration_mode: cdktf.stringToTerraform(this._orchestrationMode),
      status: cdktf.stringToTerraform(this._status),
      user_consent_required: cdktf.booleanToTerraform(this._userConsentRequired),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribution_target_device_groups_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._distributionTargetDeviceGroupsIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      firmware_component_version_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._firmwareComponentVersionIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      firmware_version: {
        value: cdktf.stringToHclTerraform(this._firmwareVersion),
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
      orchestration_mode: {
        value: cdktf.stringToHclTerraform(this._orchestrationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_consent_required: {
        value: cdktf.booleanToHclTerraform(this._userConsentRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
