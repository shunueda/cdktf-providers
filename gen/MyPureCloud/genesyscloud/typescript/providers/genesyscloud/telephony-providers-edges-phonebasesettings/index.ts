// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TelephonyProvidersEdgesPhonebasesettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource's description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#description TelephonyProvidersEdgesPhonebasesettings#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#id TelephonyProvidersEdgesPhonebasesettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * This field is computed when a line base is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#line_base_settings_id TelephonyProvidersEdgesPhonebasesettings#line_base_settings_id}
  */
  readonly lineBaseSettingsId?: string;
  /**
  * The name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#name TelephonyProvidersEdgesPhonebasesettings#name}
  */
  readonly name: string;
  /**
  * A phone metabase is essentially a database for storing phone configuration settings, which simplifies the configuration process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#phone_meta_base_id TelephonyProvidersEdgesPhonebasesettings#phone_meta_base_id}
  */
  readonly phoneMetaBaseId: string;
  /**
  * phone base settings properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#properties TelephonyProvidersEdgesPhonebasesettings#properties}
  */
  readonly properties?: string;
  /**
  * capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#capabilities TelephonyProvidersEdgesPhonebasesettings#capabilities}
  */
  readonly capabilities?: TelephonyProvidersEdgesPhonebasesettingsCapabilities;
  /**
  * line_base block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#line_base TelephonyProvidersEdgesPhonebasesettings#line_base}
  */
  readonly lineBase?: TelephonyProvidersEdgesPhonebasesettingsLineBase;
}
export interface TelephonyProvidersEdgesPhonebasesettingsCapabilities {
  /**
  * Allow Reboot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#allow_reboot TelephonyProvidersEdgesPhonebasesettings#allow_reboot}
  */
  readonly allowReboot?: boolean | cdktf.IResolvable;
  /**
  * CDM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#cdm TelephonyProvidersEdgesPhonebasesettings#cdm}
  */
  readonly cdm?: boolean | cdktf.IResolvable;
  /**
  * Dual Registers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#dual_registers TelephonyProvidersEdgesPhonebasesettings#dual_registers}
  */
  readonly dualRegisters?: boolean | cdktf.IResolvable;
  /**
  * HardwareId Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#hardware_id_type TelephonyProvidersEdgesPhonebasesettings#hardware_id_type}
  */
  readonly hardwareIdType?: string;
  /**
  * Media Codecs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#media_codecs TelephonyProvidersEdgesPhonebasesettings#media_codecs}
  */
  readonly mediaCodecs?: string[];
  /**
  * No Cloud Provisioning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#no_cloud_provisioning TelephonyProvidersEdgesPhonebasesettings#no_cloud_provisioning}
  */
  readonly noCloudProvisioning?: boolean | cdktf.IResolvable;
  /**
  * No Rebalance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#no_rebalance TelephonyProvidersEdgesPhonebasesettings#no_rebalance}
  */
  readonly noRebalance?: boolean | cdktf.IResolvable;
  /**
  * Provisions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#provisions TelephonyProvidersEdgesPhonebasesettings#provisions}
  */
  readonly provisions?: boolean | cdktf.IResolvable;
  /**
  * Registers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#registers TelephonyProvidersEdgesPhonebasesettings#registers}
  */
  readonly registers?: boolean | cdktf.IResolvable;
}

export function telephonyProvidersEdgesPhonebasesettingsCapabilitiesToTerraform(struct?: TelephonyProvidersEdgesPhonebasesettingsCapabilitiesOutputReference | TelephonyProvidersEdgesPhonebasesettingsCapabilities): any {
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


export function telephonyProvidersEdgesPhonebasesettingsCapabilitiesToHclTerraform(struct?: TelephonyProvidersEdgesPhonebasesettingsCapabilitiesOutputReference | TelephonyProvidersEdgesPhonebasesettingsCapabilities): any {
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

export class TelephonyProvidersEdgesPhonebasesettingsCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TelephonyProvidersEdgesPhonebasesettingsCapabilities | undefined {
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

  public set internalValue(value: TelephonyProvidersEdgesPhonebasesettingsCapabilities | undefined) {
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
export interface TelephonyProvidersEdgesPhonebasesettingsLineBase {
  /**
  * The station_persistent_enabled attribute in the line's property Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#station_persistent_enabled TelephonyProvidersEdgesPhonebasesettings#station_persistent_enabled}
  */
  readonly stationPersistentEnabled?: boolean | cdktf.IResolvable;
  /**
  * The station_persistent_timeout attribute in the line's property Defaults to `600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#station_persistent_timeout TelephonyProvidersEdgesPhonebasesettings#station_persistent_timeout}
  */
  readonly stationPersistentTimeout?: number;
  /**
  * The station_persistent_webrtc_enabled attribute in the line's property Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#station_persistent_webrtc_enabled TelephonyProvidersEdgesPhonebasesettings#station_persistent_webrtc_enabled}
  */
  readonly stationPersistentWebrtcEnabled?: boolean | cdktf.IResolvable;
}

export function telephonyProvidersEdgesPhonebasesettingsLineBaseToTerraform(struct?: TelephonyProvidersEdgesPhonebasesettingsLineBaseOutputReference | TelephonyProvidersEdgesPhonebasesettingsLineBase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    station_persistent_enabled: cdktf.booleanToTerraform(struct!.stationPersistentEnabled),
    station_persistent_timeout: cdktf.numberToTerraform(struct!.stationPersistentTimeout),
    station_persistent_webrtc_enabled: cdktf.booleanToTerraform(struct!.stationPersistentWebrtcEnabled),
  }
}


export function telephonyProvidersEdgesPhonebasesettingsLineBaseToHclTerraform(struct?: TelephonyProvidersEdgesPhonebasesettingsLineBaseOutputReference | TelephonyProvidersEdgesPhonebasesettingsLineBase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    station_persistent_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.stationPersistentEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    station_persistent_timeout: {
      value: cdktf.numberToHclTerraform(struct!.stationPersistentTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    station_persistent_webrtc_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.stationPersistentWebrtcEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TelephonyProvidersEdgesPhonebasesettingsLineBaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TelephonyProvidersEdgesPhonebasesettingsLineBase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stationPersistentEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.stationPersistentEnabled = this._stationPersistentEnabled;
    }
    if (this._stationPersistentTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.stationPersistentTimeout = this._stationPersistentTimeout;
    }
    if (this._stationPersistentWebrtcEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.stationPersistentWebrtcEnabled = this._stationPersistentWebrtcEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TelephonyProvidersEdgesPhonebasesettingsLineBase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stationPersistentEnabled = undefined;
      this._stationPersistentTimeout = undefined;
      this._stationPersistentWebrtcEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stationPersistentEnabled = value.stationPersistentEnabled;
      this._stationPersistentTimeout = value.stationPersistentTimeout;
      this._stationPersistentWebrtcEnabled = value.stationPersistentWebrtcEnabled;
    }
  }

  // station_persistent_enabled - computed: false, optional: true, required: false
  private _stationPersistentEnabled?: boolean | cdktf.IResolvable; 
  public get stationPersistentEnabled() {
    return this.getBooleanAttribute('station_persistent_enabled');
  }
  public set stationPersistentEnabled(value: boolean | cdktf.IResolvable) {
    this._stationPersistentEnabled = value;
  }
  public resetStationPersistentEnabled() {
    this._stationPersistentEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stationPersistentEnabledInput() {
    return this._stationPersistentEnabled;
  }

  // station_persistent_timeout - computed: false, optional: true, required: false
  private _stationPersistentTimeout?: number; 
  public get stationPersistentTimeout() {
    return this.getNumberAttribute('station_persistent_timeout');
  }
  public set stationPersistentTimeout(value: number) {
    this._stationPersistentTimeout = value;
  }
  public resetStationPersistentTimeout() {
    this._stationPersistentTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stationPersistentTimeoutInput() {
    return this._stationPersistentTimeout;
  }

  // station_persistent_webrtc_enabled - computed: false, optional: true, required: false
  private _stationPersistentWebrtcEnabled?: boolean | cdktf.IResolvable; 
  public get stationPersistentWebrtcEnabled() {
    return this.getBooleanAttribute('station_persistent_webrtc_enabled');
  }
  public set stationPersistentWebrtcEnabled(value: boolean | cdktf.IResolvable) {
    this._stationPersistentWebrtcEnabled = value;
  }
  public resetStationPersistentWebrtcEnabled() {
    this._stationPersistentWebrtcEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stationPersistentWebrtcEnabledInput() {
    return this._stationPersistentWebrtcEnabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings genesyscloud_telephony_providers_edges_phonebasesettings}
*/
export class TelephonyProvidersEdgesPhonebasesettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_telephony_providers_edges_phonebasesettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TelephonyProvidersEdgesPhonebasesettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TelephonyProvidersEdgesPhonebasesettings to import
  * @param importFromId The id of the existing TelephonyProvidersEdgesPhonebasesettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TelephonyProvidersEdgesPhonebasesettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_telephony_providers_edges_phonebasesettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_phonebasesettings genesyscloud_telephony_providers_edges_phonebasesettings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TelephonyProvidersEdgesPhonebasesettingsConfig
  */
  public constructor(scope: Construct, id: string, config: TelephonyProvidersEdgesPhonebasesettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_telephony_providers_edges_phonebasesettings',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
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
    this._id = config.id;
    this._lineBaseSettingsId = config.lineBaseSettingsId;
    this._name = config.name;
    this._phoneMetaBaseId = config.phoneMetaBaseId;
    this._properties = config.properties;
    this._capabilities.internalValue = config.capabilities;
    this._lineBase.internalValue = config.lineBase;
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

  // phone_meta_base_id - computed: false, optional: false, required: true
  private _phoneMetaBaseId?: string; 
  public get phoneMetaBaseId() {
    return this.getStringAttribute('phone_meta_base_id');
  }
  public set phoneMetaBaseId(value: string) {
    this._phoneMetaBaseId = value;
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

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new TelephonyProvidersEdgesPhonebasesettingsCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: TelephonyProvidersEdgesPhonebasesettingsCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // line_base - computed: false, optional: true, required: false
  private _lineBase = new TelephonyProvidersEdgesPhonebasesettingsLineBaseOutputReference(this, "line_base");
  public get lineBase() {
    return this._lineBase;
  }
  public putLineBase(value: TelephonyProvidersEdgesPhonebasesettingsLineBase) {
    this._lineBase.internalValue = value;
  }
  public resetLineBase() {
    this._lineBase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineBaseInput() {
    return this._lineBase.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      line_base_settings_id: cdktf.stringToTerraform(this._lineBaseSettingsId),
      name: cdktf.stringToTerraform(this._name),
      phone_meta_base_id: cdktf.stringToTerraform(this._phoneMetaBaseId),
      properties: cdktf.stringToTerraform(this._properties),
      capabilities: telephonyProvidersEdgesPhonebasesettingsCapabilitiesToTerraform(this._capabilities.internalValue),
      line_base: telephonyProvidersEdgesPhonebasesettingsLineBaseToTerraform(this._lineBase.internalValue),
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
      capabilities: {
        value: telephonyProvidersEdgesPhonebasesettingsCapabilitiesToHclTerraform(this._capabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TelephonyProvidersEdgesPhonebasesettingsCapabilitiesList",
      },
      line_base: {
        value: telephonyProvidersEdgesPhonebasesettingsLineBaseToHclTerraform(this._lineBase.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TelephonyProvidersEdgesPhonebasesettingsLineBaseList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
