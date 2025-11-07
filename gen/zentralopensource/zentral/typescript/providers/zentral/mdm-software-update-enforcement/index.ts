// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_software_update_enforcement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdmSoftwareUpdateEnforcementConfig extends cdktf.TerraformMetaArguments {
  /**
  * The target build version to update the device to by the appropriate time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_software_update_enforcement#build_version MdmSoftwareUpdateEnforcement#build_version}
  */
  readonly buildVersion?: string;
  /**
  * Number of days after a software update release before the device force installs it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_software_update_enforcement#delay_days MdmSoftwareUpdateEnforcement#delay_days}
  */
  readonly delayDays?: number;
  /**
  * The URL of a web page that shows details that the organization provides about the enforced update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_software_update_enforcement#details_url MdmSoftwareUpdateEnforcement#details_url}
  */
  readonly detailsUrl?: string;
  /**
  * The local date time value that specifies when to force install the software update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_software_update_enforcement#local_datetime MdmSoftwareUpdateEnforcement#local_datetime}
  */
  readonly localDatetime?: string;
  /**
  * The local time value that specifies when to force install the software update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_software_update_enforcement#local_time MdmSoftwareUpdateEnforcement#local_time}
  */
  readonly localTime?: string;
  /**
  * The maximum (excluded) target OS version to update the device to by the appropriate time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_software_update_enforcement#max_os_version MdmSoftwareUpdateEnforcement#max_os_version}
  */
  readonly maxOsVersion?: string;
  /**
  * Name of the software update enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_software_update_enforcement#name MdmSoftwareUpdateEnforcement#name}
  */
  readonly name: string;
  /**
  * The target OS version to update the device to by the appropriate time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_software_update_enforcement#os_version MdmSoftwareUpdateEnforcement#os_version}
  */
  readonly osVersion?: string;
  /**
  * Restrict the software update enforcement to some platforms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_software_update_enforcement#platforms MdmSoftwareUpdateEnforcement#platforms}
  */
  readonly platforms: string[];
  /**
  * The `ID`s of the tags used to scope the software update enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_software_update_enforcement#tag_ids MdmSoftwareUpdateEnforcement#tag_ids}
  */
  readonly tagIds?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_software_update_enforcement zentral_mdm_software_update_enforcement}
*/
export class MdmSoftwareUpdateEnforcement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_software_update_enforcement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdmSoftwareUpdateEnforcement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdmSoftwareUpdateEnforcement to import
  * @param importFromId The id of the existing MdmSoftwareUpdateEnforcement that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_software_update_enforcement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdmSoftwareUpdateEnforcement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_software_update_enforcement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_software_update_enforcement zentral_mdm_software_update_enforcement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdmSoftwareUpdateEnforcementConfig
  */
  public constructor(scope: Construct, id: string, config: MdmSoftwareUpdateEnforcementConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_software_update_enforcement',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.64'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._buildVersion = config.buildVersion;
    this._delayDays = config.delayDays;
    this._detailsUrl = config.detailsUrl;
    this._localDatetime = config.localDatetime;
    this._localTime = config.localTime;
    this._maxOsVersion = config.maxOsVersion;
    this._name = config.name;
    this._osVersion = config.osVersion;
    this._platforms = config.platforms;
    this._tagIds = config.tagIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // build_version - computed: true, optional: true, required: false
  private _buildVersion?: string; 
  public get buildVersion() {
    return this.getStringAttribute('build_version');
  }
  public set buildVersion(value: string) {
    this._buildVersion = value;
  }
  public resetBuildVersion() {
    this._buildVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildVersionInput() {
    return this._buildVersion;
  }

  // delay_days - computed: true, optional: true, required: false
  private _delayDays?: number; 
  public get delayDays() {
    return this.getNumberAttribute('delay_days');
  }
  public set delayDays(value: number) {
    this._delayDays = value;
  }
  public resetDelayDays() {
    this._delayDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayDaysInput() {
    return this._delayDays;
  }

  // details_url - computed: true, optional: true, required: false
  private _detailsUrl?: string; 
  public get detailsUrl() {
    return this.getStringAttribute('details_url');
  }
  public set detailsUrl(value: string) {
    this._detailsUrl = value;
  }
  public resetDetailsUrl() {
    this._detailsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsUrlInput() {
    return this._detailsUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // local_datetime - computed: false, optional: true, required: false
  private _localDatetime?: string; 
  public get localDatetime() {
    return this.getStringAttribute('local_datetime');
  }
  public set localDatetime(value: string) {
    this._localDatetime = value;
  }
  public resetLocalDatetime() {
    this._localDatetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDatetimeInput() {
    return this._localDatetime;
  }

  // local_time - computed: true, optional: true, required: false
  private _localTime?: string; 
  public get localTime() {
    return this.getStringAttribute('local_time');
  }
  public set localTime(value: string) {
    this._localTime = value;
  }
  public resetLocalTime() {
    this._localTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTimeInput() {
    return this._localTime;
  }

  // max_os_version - computed: true, optional: true, required: false
  private _maxOsVersion?: string; 
  public get maxOsVersion() {
    return this.getStringAttribute('max_os_version');
  }
  public set maxOsVersion(value: string) {
    this._maxOsVersion = value;
  }
  public resetMaxOsVersion() {
    this._maxOsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOsVersionInput() {
    return this._maxOsVersion;
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

  // os_version - computed: true, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }

  // platforms - computed: false, optional: false, required: true
  private _platforms?: string[]; 
  public get platforms() {
    return cdktf.Fn.tolist(this.getListAttribute('platforms'));
  }
  public set platforms(value: string[]) {
    this._platforms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformsInput() {
    return this._platforms;
  }

  // tag_ids - computed: true, optional: true, required: false
  private _tagIds?: number[]; 
  public get tagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tag_ids')));
  }
  public set tagIds(value: number[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      build_version: cdktf.stringToTerraform(this._buildVersion),
      delay_days: cdktf.numberToTerraform(this._delayDays),
      details_url: cdktf.stringToTerraform(this._detailsUrl),
      local_datetime: cdktf.stringToTerraform(this._localDatetime),
      local_time: cdktf.stringToTerraform(this._localTime),
      max_os_version: cdktf.stringToTerraform(this._maxOsVersion),
      name: cdktf.stringToTerraform(this._name),
      os_version: cdktf.stringToTerraform(this._osVersion),
      platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._platforms),
      tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tagIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      build_version: {
        value: cdktf.stringToHclTerraform(this._buildVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_days: {
        value: cdktf.numberToHclTerraform(this._delayDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      details_url: {
        value: cdktf.stringToHclTerraform(this._detailsUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_datetime: {
        value: cdktf.stringToHclTerraform(this._localDatetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_time: {
        value: cdktf.stringToHclTerraform(this._localTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_os_version: {
        value: cdktf.stringToHclTerraform(this._maxOsVersion),
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
      os_version: {
        value: cdktf.stringToHclTerraform(this._osVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platforms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._platforms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
