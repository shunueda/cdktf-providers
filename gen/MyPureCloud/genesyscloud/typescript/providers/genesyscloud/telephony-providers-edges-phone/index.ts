// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TelephonyProvidersEdgesPhoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#id TelephonyProvidersEdgesPhone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Line Base Settings ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#line_base_settings_id TelephonyProvidersEdgesPhone#line_base_settings_id}
  */
  readonly lineBaseSettingsId?: string;
  /**
  * The name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#name TelephonyProvidersEdgesPhone#name}
  */
  readonly name: string;
  /**
  * Phone Base Settings ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#phone_base_settings_id TelephonyProvidersEdgesPhone#phone_base_settings_id}
  */
  readonly phoneBaseSettingsId: string;
  /**
  * Phone Meta Base ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#phone_meta_base_id TelephonyProvidersEdgesPhone#phone_meta_base_id}
  */
  readonly phoneMetaBaseId?: string;
  /**
  * phone properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#properties TelephonyProvidersEdgesPhone#properties}
  */
  readonly properties?: string;
  /**
  * The site ID associated to the phone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#site_id TelephonyProvidersEdgesPhone#site_id}
  */
  readonly siteId: string;
  /**
  * Indicates if the resource is active, inactive, or deleted. Valid values: active, inactive, deleted. Defaults to `active`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#state TelephonyProvidersEdgesPhone#state}
  */
  readonly state?: string;
  /**
  * Web RTC User ID. This is necessary when creating a Web RTC phone. This user will be assigned to the phone after it is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#web_rtc_user_id TelephonyProvidersEdgesPhone#web_rtc_user_id}
  */
  readonly webRtcUserId?: string;
  /**
  * capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#capabilities TelephonyProvidersEdgesPhone#capabilities}
  */
  readonly capabilities?: TelephonyProvidersEdgesPhoneCapabilities;
  /**
  * line_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#line_properties TelephonyProvidersEdgesPhone#line_properties}
  */
  readonly lineProperties?: TelephonyProvidersEdgesPhoneLineProperties;
}
export interface TelephonyProvidersEdgesPhoneCapabilities {
  /**
  * Allow Reboot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#allow_reboot TelephonyProvidersEdgesPhone#allow_reboot}
  */
  readonly allowReboot?: boolean | cdktf.IResolvable;
  /**
  * CDM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#cdm TelephonyProvidersEdgesPhone#cdm}
  */
  readonly cdm?: boolean | cdktf.IResolvable;
  /**
  * Dual Registers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#dual_registers TelephonyProvidersEdgesPhone#dual_registers}
  */
  readonly dualRegisters?: boolean | cdktf.IResolvable;
  /**
  * HardwareId Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#hardware_id_type TelephonyProvidersEdgesPhone#hardware_id_type}
  */
  readonly hardwareIdType?: string;
  /**
  * Media Codecs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#media_codecs TelephonyProvidersEdgesPhone#media_codecs}
  */
  readonly mediaCodecs?: string[];
  /**
  * No Cloud Provisioning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#no_cloud_provisioning TelephonyProvidersEdgesPhone#no_cloud_provisioning}
  */
  readonly noCloudProvisioning?: boolean | cdktf.IResolvable;
  /**
  * No Rebalance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#no_rebalance TelephonyProvidersEdgesPhone#no_rebalance}
  */
  readonly noRebalance?: boolean | cdktf.IResolvable;
  /**
  * Provisions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#provisions TelephonyProvidersEdgesPhone#provisions}
  */
  readonly provisions?: boolean | cdktf.IResolvable;
  /**
  * Registers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#registers TelephonyProvidersEdgesPhone#registers}
  */
  readonly registers?: boolean | cdktf.IResolvable;
}

export function telephonyProvidersEdgesPhoneCapabilitiesToTerraform(struct?: TelephonyProvidersEdgesPhoneCapabilitiesOutputReference | TelephonyProvidersEdgesPhoneCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_reboot: cdktf.booleanToTerraform(struct!.allowReboot),
    cdm: cdktf.booleanToTerraform(struct!.cdm),
    dual_registers: cdktf.booleanToTerraform(struct!.dualRegisters),
    hardware_id_type: cdktf.stringToTerraform(struct!.hardwareIdType),
    media_codecs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mediaCodecs),
    no_cloud_provisioning: cdktf.booleanToTerraform(struct!.noCloudProvisioning),
    no_rebalance: cdktf.booleanToTerraform(struct!.noRebalance),
    provisions: cdktf.booleanToTerraform(struct!.provisions),
    registers: cdktf.booleanToTerraform(struct!.registers),
  }
}


export function telephonyProvidersEdgesPhoneCapabilitiesToHclTerraform(struct?: TelephonyProvidersEdgesPhoneCapabilitiesOutputReference | TelephonyProvidersEdgesPhoneCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_reboot: {
      value: cdktf.booleanToHclTerraform(struct!.allowReboot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cdm: {
      value: cdktf.booleanToHclTerraform(struct!.cdm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dual_registers: {
      value: cdktf.booleanToHclTerraform(struct!.dualRegisters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hardware_id_type: {
      value: cdktf.stringToHclTerraform(struct!.hardwareIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    media_codecs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mediaCodecs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    no_cloud_provisioning: {
      value: cdktf.booleanToHclTerraform(struct!.noCloudProvisioning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_rebalance: {
      value: cdktf.booleanToHclTerraform(struct!.noRebalance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    provisions: {
      value: cdktf.booleanToHclTerraform(struct!.provisions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registers: {
      value: cdktf.booleanToHclTerraform(struct!.registers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TelephonyProvidersEdgesPhoneCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TelephonyProvidersEdgesPhoneCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowReboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowReboot = this._allowReboot;
    }
    if (this._cdm !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdm = this._cdm;
    }
    if (this._dualRegisters !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualRegisters = this._dualRegisters;
    }
    if (this._hardwareIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareIdType = this._hardwareIdType;
    }
    if (this._mediaCodecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaCodecs = this._mediaCodecs;
    }
    if (this._noCloudProvisioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCloudProvisioning = this._noCloudProvisioning;
    }
    if (this._noRebalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRebalance = this._noRebalance;
    }
    if (this._provisions !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisions = this._provisions;
    }
    if (this._registers !== undefined) {
      hasAnyValues = true;
      internalValueResult.registers = this._registers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TelephonyProvidersEdgesPhoneCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowReboot = undefined;
      this._cdm = undefined;
      this._dualRegisters = undefined;
      this._hardwareIdType = undefined;
      this._mediaCodecs = undefined;
      this._noCloudProvisioning = undefined;
      this._noRebalance = undefined;
      this._provisions = undefined;
      this._registers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowReboot = value.allowReboot;
      this._cdm = value.cdm;
      this._dualRegisters = value.dualRegisters;
      this._hardwareIdType = value.hardwareIdType;
      this._mediaCodecs = value.mediaCodecs;
      this._noCloudProvisioning = value.noCloudProvisioning;
      this._noRebalance = value.noRebalance;
      this._provisions = value.provisions;
      this._registers = value.registers;
    }
  }

  // allow_reboot - computed: false, optional: true, required: false
  private _allowReboot?: boolean | cdktf.IResolvable; 
  public get allowReboot() {
    return this.getBooleanAttribute('allow_reboot');
  }
  public set allowReboot(value: boolean | cdktf.IResolvable) {
    this._allowReboot = value;
  }
  public resetAllowReboot() {
    this._allowReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRebootInput() {
    return this._allowReboot;
  }

  // cdm - computed: false, optional: true, required: false
  private _cdm?: boolean | cdktf.IResolvable; 
  public get cdm() {
    return this.getBooleanAttribute('cdm');
  }
  public set cdm(value: boolean | cdktf.IResolvable) {
    this._cdm = value;
  }
  public resetCdm() {
    this._cdm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdmInput() {
    return this._cdm;
  }

  // dual_registers - computed: false, optional: true, required: false
  private _dualRegisters?: boolean | cdktf.IResolvable; 
  public get dualRegisters() {
    return this.getBooleanAttribute('dual_registers');
  }
  public set dualRegisters(value: boolean | cdktf.IResolvable) {
    this._dualRegisters = value;
  }
  public resetDualRegisters() {
    this._dualRegisters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualRegistersInput() {
    return this._dualRegisters;
  }

  // hardware_id_type - computed: false, optional: true, required: false
  private _hardwareIdType?: string; 
  public get hardwareIdType() {
    return this.getStringAttribute('hardware_id_type');
  }
  public set hardwareIdType(value: string) {
    this._hardwareIdType = value;
  }
  public resetHardwareIdType() {
    this._hardwareIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareIdTypeInput() {
    return this._hardwareIdType;
  }

  // media_codecs - computed: false, optional: true, required: false
  private _mediaCodecs?: string[]; 
  public get mediaCodecs() {
    return this.getListAttribute('media_codecs');
  }
  public set mediaCodecs(value: string[]) {
    this._mediaCodecs = value;
  }
  public resetMediaCodecs() {
    this._mediaCodecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaCodecsInput() {
    return this._mediaCodecs;
  }

  // no_cloud_provisioning - computed: false, optional: true, required: false
  private _noCloudProvisioning?: boolean | cdktf.IResolvable; 
  public get noCloudProvisioning() {
    return this.getBooleanAttribute('no_cloud_provisioning');
  }
  public set noCloudProvisioning(value: boolean | cdktf.IResolvable) {
    this._noCloudProvisioning = value;
  }
  public resetNoCloudProvisioning() {
    this._noCloudProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCloudProvisioningInput() {
    return this._noCloudProvisioning;
  }

  // no_rebalance - computed: false, optional: true, required: false
  private _noRebalance?: boolean | cdktf.IResolvable; 
  public get noRebalance() {
    return this.getBooleanAttribute('no_rebalance');
  }
  public set noRebalance(value: boolean | cdktf.IResolvable) {
    this._noRebalance = value;
  }
  public resetNoRebalance() {
    this._noRebalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRebalanceInput() {
    return this._noRebalance;
  }

  // provisions - computed: false, optional: true, required: false
  private _provisions?: boolean | cdktf.IResolvable; 
  public get provisions() {
    return this.getBooleanAttribute('provisions');
  }
  public set provisions(value: boolean | cdktf.IResolvable) {
    this._provisions = value;
  }
  public resetProvisions() {
    this._provisions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionsInput() {
    return this._provisions;
  }

  // registers - computed: false, optional: true, required: false
  private _registers?: boolean | cdktf.IResolvable; 
  public get registers() {
    return this.getBooleanAttribute('registers');
  }
  public set registers(value: boolean | cdktf.IResolvable) {
    this._registers = value;
  }
  public resetRegisters() {
    this._registers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registersInput() {
    return this._registers;
  }
}
export interface TelephonyProvidersEdgesPhoneLineProperties {
  /**
  * DID for standalone phones. Each phone number must be in an E.164 phone number format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#line_address TelephonyProvidersEdgesPhone#line_address}
  */
  readonly lineAddress?: string[];
  /**
  * Station remote property for phones. No validation is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#remote_address TelephonyProvidersEdgesPhone#remote_address}
  */
  readonly remoteAddress?: string[];
}

export function telephonyProvidersEdgesPhoneLinePropertiesToTerraform(struct?: TelephonyProvidersEdgesPhoneLinePropertiesOutputReference | TelephonyProvidersEdgesPhoneLineProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    line_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lineAddress),
    remote_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteAddress),
  }
}


export function telephonyProvidersEdgesPhoneLinePropertiesToHclTerraform(struct?: TelephonyProvidersEdgesPhoneLinePropertiesOutputReference | TelephonyProvidersEdgesPhoneLineProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    line_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lineAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remote_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TelephonyProvidersEdgesPhoneLinePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TelephonyProvidersEdgesPhoneLineProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineAddress = this._lineAddress;
    }
    if (this._remoteAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAddress = this._remoteAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TelephonyProvidersEdgesPhoneLineProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lineAddress = undefined;
      this._remoteAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lineAddress = value.lineAddress;
      this._remoteAddress = value.remoteAddress;
    }
  }

  // line_address - computed: true, optional: true, required: false
  private _lineAddress?: string[]; 
  public get lineAddress() {
    return this.getListAttribute('line_address');
  }
  public set lineAddress(value: string[]) {
    this._lineAddress = value;
  }
  public resetLineAddress() {
    this._lineAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineAddressInput() {
    return this._lineAddress;
  }

  // remote_address - computed: false, optional: true, required: false
  private _remoteAddress?: string[]; 
  public get remoteAddress() {
    return this.getListAttribute('remote_address');
  }
  public set remoteAddress(value: string[]) {
    this._remoteAddress = value;
  }
  public resetRemoteAddress() {
    this._remoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone genesyscloud_telephony_providers_edges_phone}
*/
export class TelephonyProvidersEdgesPhone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_telephony_providers_edges_phone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TelephonyProvidersEdgesPhone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TelephonyProvidersEdgesPhone to import
  * @param importFromId The id of the existing TelephonyProvidersEdgesPhone that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TelephonyProvidersEdgesPhone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_telephony_providers_edges_phone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/telephony_providers_edges_phone genesyscloud_telephony_providers_edges_phone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TelephonyProvidersEdgesPhoneConfig
  */
  public constructor(scope: Construct, id: string, config: TelephonyProvidersEdgesPhoneConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_telephony_providers_edges_phone',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._lineBaseSettingsId = config.lineBaseSettingsId;
    this._name = config.name;
    this._phoneBaseSettingsId = config.phoneBaseSettingsId;
    this._phoneMetaBaseId = config.phoneMetaBaseId;
    this._properties = config.properties;
    this._siteId = config.siteId;
    this._state = config.state;
    this._webRtcUserId = config.webRtcUserId;
    this._capabilities.internalValue = config.capabilities;
    this._lineProperties.internalValue = config.lineProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // line_base_settings_id - computed: true, optional: true, required: false
  private _lineBaseSettingsId?: string; 
  public get lineBaseSettingsId() {
    return this.getStringAttribute('line_base_settings_id');
  }
  public set lineBaseSettingsId(value: string) {
    this._lineBaseSettingsId = value;
  }
  public resetLineBaseSettingsId() {
    this._lineBaseSettingsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineBaseSettingsIdInput() {
    return this._lineBaseSettingsId;
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

  // phone_base_settings_id - computed: false, optional: false, required: true
  private _phoneBaseSettingsId?: string; 
  public get phoneBaseSettingsId() {
    return this.getStringAttribute('phone_base_settings_id');
  }
  public set phoneBaseSettingsId(value: string) {
    this._phoneBaseSettingsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneBaseSettingsIdInput() {
    return this._phoneBaseSettingsId;
  }

  // phone_meta_base_id - computed: true, optional: true, required: false
  private _phoneMetaBaseId?: string; 
  public get phoneMetaBaseId() {
    return this.getStringAttribute('phone_meta_base_id');
  }
  public set phoneMetaBaseId(value: string) {
    this._phoneMetaBaseId = value;
  }
  public resetPhoneMetaBaseId() {
    this._phoneMetaBaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneMetaBaseIdInput() {
    return this._phoneMetaBaseId;
  }

  // properties - computed: true, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // state - computed: false, optional: true, required: false
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

  // web_rtc_user_id - computed: false, optional: true, required: false
  private _webRtcUserId?: string; 
  public get webRtcUserId() {
    return this.getStringAttribute('web_rtc_user_id');
  }
  public set webRtcUserId(value: string) {
    this._webRtcUserId = value;
  }
  public resetWebRtcUserId() {
    this._webRtcUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webRtcUserIdInput() {
    return this._webRtcUserId;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new TelephonyProvidersEdgesPhoneCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: TelephonyProvidersEdgesPhoneCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // line_properties - computed: false, optional: true, required: false
  private _lineProperties = new TelephonyProvidersEdgesPhoneLinePropertiesOutputReference(this, "line_properties");
  public get lineProperties() {
    return this._lineProperties;
  }
  public putLineProperties(value: TelephonyProvidersEdgesPhoneLineProperties) {
    this._lineProperties.internalValue = value;
  }
  public resetLineProperties() {
    this._lineProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linePropertiesInput() {
    return this._lineProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      line_base_settings_id: cdktf.stringToTerraform(this._lineBaseSettingsId),
      name: cdktf.stringToTerraform(this._name),
      phone_base_settings_id: cdktf.stringToTerraform(this._phoneBaseSettingsId),
      phone_meta_base_id: cdktf.stringToTerraform(this._phoneMetaBaseId),
      properties: cdktf.stringToTerraform(this._properties),
      site_id: cdktf.stringToTerraform(this._siteId),
      state: cdktf.stringToTerraform(this._state),
      web_rtc_user_id: cdktf.stringToTerraform(this._webRtcUserId),
      capabilities: telephonyProvidersEdgesPhoneCapabilitiesToTerraform(this._capabilities.internalValue),
      line_properties: telephonyProvidersEdgesPhoneLinePropertiesToTerraform(this._lineProperties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      line_base_settings_id: {
        value: cdktf.stringToHclTerraform(this._lineBaseSettingsId),
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
      phone_base_settings_id: {
        value: cdktf.stringToHclTerraform(this._phoneBaseSettingsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_meta_base_id: {
        value: cdktf.stringToHclTerraform(this._phoneMetaBaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktf.stringToHclTerraform(this._properties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_rtc_user_id: {
        value: cdktf.stringToHclTerraform(this._webRtcUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capabilities: {
        value: telephonyProvidersEdgesPhoneCapabilitiesToHclTerraform(this._capabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TelephonyProvidersEdgesPhoneCapabilitiesList",
      },
      line_properties: {
        value: telephonyProvidersEdgesPhoneLinePropertiesToHclTerraform(this._lineProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TelephonyProvidersEdgesPhoneLinePropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
