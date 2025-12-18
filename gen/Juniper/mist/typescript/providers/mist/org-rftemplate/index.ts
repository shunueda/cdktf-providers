// https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgRftemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#ant_gain_24 OrgRftemplate#ant_gain_24}
  */
  readonly antGain24?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#ant_gain_5 OrgRftemplate#ant_gain_5}
  */
  readonly antGain5?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#ant_gain_6 OrgRftemplate#ant_gain_6}
  */
  readonly antGain6?: number;
  /**
  * Radio Band AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#band_24 OrgRftemplate#band_24}
  */
  readonly band24?: OrgRftemplateBand24;
  /**
  * enum: `24`, `5`, `6`, `auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#band_24_usage OrgRftemplate#band_24_usage}
  */
  readonly band24Usage?: string;
  /**
  * Radio Band AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#band_5 OrgRftemplate#band_5}
  */
  readonly band5?: OrgRftemplateBand5;
  /**
  * Radio Band AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#band_5_on_24_radio OrgRftemplate#band_5_on_24_radio}
  */
  readonly band5On24Radio?: OrgRftemplateBand5On24Radio;
  /**
  * Radio Band AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#band_6 OrgRftemplate#band_6}
  */
  readonly band6?: OrgRftemplateBand6;
  /**
  * Optional, country code to use. If specified, this gets applied to all sites using the RF Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#country_code OrgRftemplate#country_code}
  */
  readonly countryCode?: string;
  /**
  * overwrites for a specific model. If a band is specified, it will shadow the default. Property key is the model name (e.g. "AP63")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#model_specific OrgRftemplate#model_specific}
  */
  readonly modelSpecific?: { [key: string]: OrgRftemplateModelSpecific } | cdktf.IResolvable;
  /**
  * The name of the RF template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#name OrgRftemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#org_id OrgRftemplate#org_id}
  */
  readonly orgId: string;
  /**
  * Whether scanning radio is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#scanning_enabled OrgRftemplate#scanning_enabled}
  */
  readonly scanningEnabled?: boolean | cdktf.IResolvable;
}
export interface OrgRftemplateBand24 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#allow_rrm_disable OrgRftemplate#allow_rrm_disable}
  */
  readonly allowRrmDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#ant_gain OrgRftemplate#ant_gain}
  */
  readonly antGain?: number;
  /**
  * enum: `1x1`, `2x2`, `3x3`, `4x4`, `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#antenna_mode OrgRftemplate#antenna_mode}
  */
  readonly antennaMode?: string;
  /**
  * channel width for the 2.4GHz band. enum: `0`(disabled, response only), `20`, `40`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#bandwidth OrgRftemplate#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * For RFTemplates. List of channels, null or empty array means auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#channels OrgRftemplate#channels}
  */
  readonly channels?: number[];
  /**
  * Whether to disable the radio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#disabled OrgRftemplate#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * tx power of the radio, null or 0 means auto, when power_min=power_max=power=0 to indicate power=0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power OrgRftemplate#power}
  */
  readonly power?: number;
  /**
  * When power=0, max tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power_max OrgRftemplate#power_max}
  */
  readonly powerMax?: number;
  /**
  * When power=0, min tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power_min OrgRftemplate#power_min}
  */
  readonly powerMin?: number;
  /**
  * enum: `auto`, `long`, `short`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#preamble OrgRftemplate#preamble}
  */
  readonly preamble?: string;
}

export function orgRftemplateBand24ToTerraform(struct?: OrgRftemplateBand24 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rrm_disable: cdktf.booleanToTerraform(struct!.allowRrmDisable),
    ant_gain: cdktf.numberToTerraform(struct!.antGain),
    antenna_mode: cdktf.stringToTerraform(struct!.antennaMode),
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    channels: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.channels),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    power: cdktf.numberToTerraform(struct!.power),
    power_max: cdktf.numberToTerraform(struct!.powerMax),
    power_min: cdktf.numberToTerraform(struct!.powerMin),
    preamble: cdktf.stringToTerraform(struct!.preamble),
  }
}


export function orgRftemplateBand24ToHclTerraform(struct?: OrgRftemplateBand24 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rrm_disable: {
      value: cdktf.booleanToHclTerraform(struct!.allowRrmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ant_gain: {
      value: cdktf.numberToHclTerraform(struct!.antGain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    antenna_mode: {
      value: cdktf.stringToHclTerraform(struct!.antennaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    power: {
      value: cdktf.numberToHclTerraform(struct!.power),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_max: {
      value: cdktf.numberToHclTerraform(struct!.powerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_min: {
      value: cdktf.numberToHclTerraform(struct!.powerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preamble: {
      value: cdktf.stringToHclTerraform(struct!.preamble),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgRftemplateBand24OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgRftemplateBand24 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRrmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRrmDisable = this._allowRrmDisable;
    }
    if (this._antGain !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain = this._antGain;
    }
    if (this._antennaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaMode = this._antennaMode;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._power !== undefined) {
      hasAnyValues = true;
      internalValueResult.power = this._power;
    }
    if (this._powerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMax = this._powerMax;
    }
    if (this._powerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMin = this._powerMin;
    }
    if (this._preamble !== undefined) {
      hasAnyValues = true;
      internalValueResult.preamble = this._preamble;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgRftemplateBand24 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRrmDisable = undefined;
      this._antGain = undefined;
      this._antennaMode = undefined;
      this._bandwidth = undefined;
      this._channels = undefined;
      this._disabled = undefined;
      this._power = undefined;
      this._powerMax = undefined;
      this._powerMin = undefined;
      this._preamble = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRrmDisable = value.allowRrmDisable;
      this._antGain = value.antGain;
      this._antennaMode = value.antennaMode;
      this._bandwidth = value.bandwidth;
      this._channels = value.channels;
      this._disabled = value.disabled;
      this._power = value.power;
      this._powerMax = value.powerMax;
      this._powerMin = value.powerMin;
      this._preamble = value.preamble;
    }
  }

  // allow_rrm_disable - computed: true, optional: true, required: false
  private _allowRrmDisable?: boolean | cdktf.IResolvable; 
  public get allowRrmDisable() {
    return this.getBooleanAttribute('allow_rrm_disable');
  }
  public set allowRrmDisable(value: boolean | cdktf.IResolvable) {
    this._allowRrmDisable = value;
  }
  public resetAllowRrmDisable() {
    this._allowRrmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRrmDisableInput() {
    return this._allowRrmDisable;
  }

  // ant_gain - computed: true, optional: true, required: false
  private _antGain?: number; 
  public get antGain() {
    return this.getNumberAttribute('ant_gain');
  }
  public set antGain(value: number) {
    this._antGain = value;
  }
  public resetAntGain() {
    this._antGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGainInput() {
    return this._antGain;
  }

  // antenna_mode - computed: false, optional: true, required: false
  private _antennaMode?: string; 
  public get antennaMode() {
    return this.getStringAttribute('antenna_mode');
  }
  public set antennaMode(value: string) {
    this._antennaMode = value;
  }
  public resetAntennaMode() {
    this._antennaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaModeInput() {
    return this._antennaMode;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: number[]; 
  public get channels() {
    return this.getNumberListAttribute('channels');
  }
  public set channels(value: number[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // power - computed: false, optional: true, required: false
  private _power?: number; 
  public get power() {
    return this.getNumberAttribute('power');
  }
  public set power(value: number) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // power_max - computed: false, optional: true, required: false
  private _powerMax?: number; 
  public get powerMax() {
    return this.getNumberAttribute('power_max');
  }
  public set powerMax(value: number) {
    this._powerMax = value;
  }
  public resetPowerMax() {
    this._powerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMaxInput() {
    return this._powerMax;
  }

  // power_min - computed: false, optional: true, required: false
  private _powerMin?: number; 
  public get powerMin() {
    return this.getNumberAttribute('power_min');
  }
  public set powerMin(value: number) {
    this._powerMin = value;
  }
  public resetPowerMin() {
    this._powerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMinInput() {
    return this._powerMin;
  }

  // preamble - computed: false, optional: true, required: false
  private _preamble?: string; 
  public get preamble() {
    return this.getStringAttribute('preamble');
  }
  public set preamble(value: string) {
    this._preamble = value;
  }
  public resetPreamble() {
    this._preamble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preambleInput() {
    return this._preamble;
  }
}
export interface OrgRftemplateBand5 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#allow_rrm_disable OrgRftemplate#allow_rrm_disable}
  */
  readonly allowRrmDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#ant_gain OrgRftemplate#ant_gain}
  */
  readonly antGain?: number;
  /**
  * enum: `1x1`, `2x2`, `3x3`, `4x4`, `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#antenna_mode OrgRftemplate#antenna_mode}
  */
  readonly antennaMode?: string;
  /**
  * channel width for the 5GHz band. enum: `0`(disabled, response only), `20`, `40`, `80`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#bandwidth OrgRftemplate#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * For RFTemplates. List of channels, null or empty array means auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#channels OrgRftemplate#channels}
  */
  readonly channels?: number[];
  /**
  * Whether to disable the radio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#disabled OrgRftemplate#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Tx power of the radio. For Devices, 0 means auto. -1 / -2 / -3 / …: treated as 0 / -1 / -2 / …
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power OrgRftemplate#power}
  */
  readonly power?: number;
  /**
  * When power=0, max tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power_max OrgRftemplate#power_max}
  */
  readonly powerMax?: number;
  /**
  * When power=0, min tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power_min OrgRftemplate#power_min}
  */
  readonly powerMin?: number;
  /**
  * enum: `auto`, `long`, `short`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#preamble OrgRftemplate#preamble}
  */
  readonly preamble?: string;
}

export function orgRftemplateBand5ToTerraform(struct?: OrgRftemplateBand5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rrm_disable: cdktf.booleanToTerraform(struct!.allowRrmDisable),
    ant_gain: cdktf.numberToTerraform(struct!.antGain),
    antenna_mode: cdktf.stringToTerraform(struct!.antennaMode),
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    channels: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.channels),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    power: cdktf.numberToTerraform(struct!.power),
    power_max: cdktf.numberToTerraform(struct!.powerMax),
    power_min: cdktf.numberToTerraform(struct!.powerMin),
    preamble: cdktf.stringToTerraform(struct!.preamble),
  }
}


export function orgRftemplateBand5ToHclTerraform(struct?: OrgRftemplateBand5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rrm_disable: {
      value: cdktf.booleanToHclTerraform(struct!.allowRrmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ant_gain: {
      value: cdktf.numberToHclTerraform(struct!.antGain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    antenna_mode: {
      value: cdktf.stringToHclTerraform(struct!.antennaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    power: {
      value: cdktf.numberToHclTerraform(struct!.power),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_max: {
      value: cdktf.numberToHclTerraform(struct!.powerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_min: {
      value: cdktf.numberToHclTerraform(struct!.powerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preamble: {
      value: cdktf.stringToHclTerraform(struct!.preamble),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgRftemplateBand5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgRftemplateBand5 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRrmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRrmDisable = this._allowRrmDisable;
    }
    if (this._antGain !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain = this._antGain;
    }
    if (this._antennaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaMode = this._antennaMode;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._power !== undefined) {
      hasAnyValues = true;
      internalValueResult.power = this._power;
    }
    if (this._powerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMax = this._powerMax;
    }
    if (this._powerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMin = this._powerMin;
    }
    if (this._preamble !== undefined) {
      hasAnyValues = true;
      internalValueResult.preamble = this._preamble;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgRftemplateBand5 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRrmDisable = undefined;
      this._antGain = undefined;
      this._antennaMode = undefined;
      this._bandwidth = undefined;
      this._channels = undefined;
      this._disabled = undefined;
      this._power = undefined;
      this._powerMax = undefined;
      this._powerMin = undefined;
      this._preamble = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRrmDisable = value.allowRrmDisable;
      this._antGain = value.antGain;
      this._antennaMode = value.antennaMode;
      this._bandwidth = value.bandwidth;
      this._channels = value.channels;
      this._disabled = value.disabled;
      this._power = value.power;
      this._powerMax = value.powerMax;
      this._powerMin = value.powerMin;
      this._preamble = value.preamble;
    }
  }

  // allow_rrm_disable - computed: true, optional: true, required: false
  private _allowRrmDisable?: boolean | cdktf.IResolvable; 
  public get allowRrmDisable() {
    return this.getBooleanAttribute('allow_rrm_disable');
  }
  public set allowRrmDisable(value: boolean | cdktf.IResolvable) {
    this._allowRrmDisable = value;
  }
  public resetAllowRrmDisable() {
    this._allowRrmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRrmDisableInput() {
    return this._allowRrmDisable;
  }

  // ant_gain - computed: true, optional: true, required: false
  private _antGain?: number; 
  public get antGain() {
    return this.getNumberAttribute('ant_gain');
  }
  public set antGain(value: number) {
    this._antGain = value;
  }
  public resetAntGain() {
    this._antGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGainInput() {
    return this._antGain;
  }

  // antenna_mode - computed: false, optional: true, required: false
  private _antennaMode?: string; 
  public get antennaMode() {
    return this.getStringAttribute('antenna_mode');
  }
  public set antennaMode(value: string) {
    this._antennaMode = value;
  }
  public resetAntennaMode() {
    this._antennaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaModeInput() {
    return this._antennaMode;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: number[]; 
  public get channels() {
    return this.getNumberListAttribute('channels');
  }
  public set channels(value: number[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // power - computed: false, optional: true, required: false
  private _power?: number; 
  public get power() {
    return this.getNumberAttribute('power');
  }
  public set power(value: number) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // power_max - computed: false, optional: true, required: false
  private _powerMax?: number; 
  public get powerMax() {
    return this.getNumberAttribute('power_max');
  }
  public set powerMax(value: number) {
    this._powerMax = value;
  }
  public resetPowerMax() {
    this._powerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMaxInput() {
    return this._powerMax;
  }

  // power_min - computed: false, optional: true, required: false
  private _powerMin?: number; 
  public get powerMin() {
    return this.getNumberAttribute('power_min');
  }
  public set powerMin(value: number) {
    this._powerMin = value;
  }
  public resetPowerMin() {
    this._powerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMinInput() {
    return this._powerMin;
  }

  // preamble - computed: false, optional: true, required: false
  private _preamble?: string; 
  public get preamble() {
    return this.getStringAttribute('preamble');
  }
  public set preamble(value: string) {
    this._preamble = value;
  }
  public resetPreamble() {
    this._preamble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preambleInput() {
    return this._preamble;
  }
}
export interface OrgRftemplateBand5On24Radio {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#allow_rrm_disable OrgRftemplate#allow_rrm_disable}
  */
  readonly allowRrmDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#ant_gain OrgRftemplate#ant_gain}
  */
  readonly antGain?: number;
  /**
  * enum: `1x1`, `2x2`, `3x3`, `4x4`, `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#antenna_mode OrgRftemplate#antenna_mode}
  */
  readonly antennaMode?: string;
  /**
  * channel width for the 5GHz band. enum: `0`(disabled, response only), `20`, `40`, `80`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#bandwidth OrgRftemplate#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * For RFTemplates. List of channels, null or empty array means auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#channels OrgRftemplate#channels}
  */
  readonly channels?: number[];
  /**
  * Whether to disable the radio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#disabled OrgRftemplate#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Tx power of the radio. For Devices, 0 means auto. -1 / -2 / -3 / …: treated as 0 / -1 / -2 / …
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power OrgRftemplate#power}
  */
  readonly power?: number;
  /**
  * When power=0, max tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power_max OrgRftemplate#power_max}
  */
  readonly powerMax?: number;
  /**
  * When power=0, min tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power_min OrgRftemplate#power_min}
  */
  readonly powerMin?: number;
  /**
  * enum: `auto`, `long`, `short`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#preamble OrgRftemplate#preamble}
  */
  readonly preamble?: string;
}

export function orgRftemplateBand5On24RadioToTerraform(struct?: OrgRftemplateBand5On24Radio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rrm_disable: cdktf.booleanToTerraform(struct!.allowRrmDisable),
    ant_gain: cdktf.numberToTerraform(struct!.antGain),
    antenna_mode: cdktf.stringToTerraform(struct!.antennaMode),
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    channels: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.channels),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    power: cdktf.numberToTerraform(struct!.power),
    power_max: cdktf.numberToTerraform(struct!.powerMax),
    power_min: cdktf.numberToTerraform(struct!.powerMin),
    preamble: cdktf.stringToTerraform(struct!.preamble),
  }
}


export function orgRftemplateBand5On24RadioToHclTerraform(struct?: OrgRftemplateBand5On24Radio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rrm_disable: {
      value: cdktf.booleanToHclTerraform(struct!.allowRrmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ant_gain: {
      value: cdktf.numberToHclTerraform(struct!.antGain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    antenna_mode: {
      value: cdktf.stringToHclTerraform(struct!.antennaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    power: {
      value: cdktf.numberToHclTerraform(struct!.power),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_max: {
      value: cdktf.numberToHclTerraform(struct!.powerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_min: {
      value: cdktf.numberToHclTerraform(struct!.powerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preamble: {
      value: cdktf.stringToHclTerraform(struct!.preamble),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgRftemplateBand5On24RadioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgRftemplateBand5On24Radio | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRrmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRrmDisable = this._allowRrmDisable;
    }
    if (this._antGain !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain = this._antGain;
    }
    if (this._antennaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaMode = this._antennaMode;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._power !== undefined) {
      hasAnyValues = true;
      internalValueResult.power = this._power;
    }
    if (this._powerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMax = this._powerMax;
    }
    if (this._powerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMin = this._powerMin;
    }
    if (this._preamble !== undefined) {
      hasAnyValues = true;
      internalValueResult.preamble = this._preamble;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgRftemplateBand5On24Radio | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRrmDisable = undefined;
      this._antGain = undefined;
      this._antennaMode = undefined;
      this._bandwidth = undefined;
      this._channels = undefined;
      this._disabled = undefined;
      this._power = undefined;
      this._powerMax = undefined;
      this._powerMin = undefined;
      this._preamble = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRrmDisable = value.allowRrmDisable;
      this._antGain = value.antGain;
      this._antennaMode = value.antennaMode;
      this._bandwidth = value.bandwidth;
      this._channels = value.channels;
      this._disabled = value.disabled;
      this._power = value.power;
      this._powerMax = value.powerMax;
      this._powerMin = value.powerMin;
      this._preamble = value.preamble;
    }
  }

  // allow_rrm_disable - computed: true, optional: true, required: false
  private _allowRrmDisable?: boolean | cdktf.IResolvable; 
  public get allowRrmDisable() {
    return this.getBooleanAttribute('allow_rrm_disable');
  }
  public set allowRrmDisable(value: boolean | cdktf.IResolvable) {
    this._allowRrmDisable = value;
  }
  public resetAllowRrmDisable() {
    this._allowRrmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRrmDisableInput() {
    return this._allowRrmDisable;
  }

  // ant_gain - computed: true, optional: true, required: false
  private _antGain?: number; 
  public get antGain() {
    return this.getNumberAttribute('ant_gain');
  }
  public set antGain(value: number) {
    this._antGain = value;
  }
  public resetAntGain() {
    this._antGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGainInput() {
    return this._antGain;
  }

  // antenna_mode - computed: true, optional: true, required: false
  private _antennaMode?: string; 
  public get antennaMode() {
    return this.getStringAttribute('antenna_mode');
  }
  public set antennaMode(value: string) {
    this._antennaMode = value;
  }
  public resetAntennaMode() {
    this._antennaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaModeInput() {
    return this._antennaMode;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: number[]; 
  public get channels() {
    return this.getNumberListAttribute('channels');
  }
  public set channels(value: number[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // power - computed: true, optional: true, required: false
  private _power?: number; 
  public get power() {
    return this.getNumberAttribute('power');
  }
  public set power(value: number) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // power_max - computed: true, optional: true, required: false
  private _powerMax?: number; 
  public get powerMax() {
    return this.getNumberAttribute('power_max');
  }
  public set powerMax(value: number) {
    this._powerMax = value;
  }
  public resetPowerMax() {
    this._powerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMaxInput() {
    return this._powerMax;
  }

  // power_min - computed: true, optional: true, required: false
  private _powerMin?: number; 
  public get powerMin() {
    return this.getNumberAttribute('power_min');
  }
  public set powerMin(value: number) {
    this._powerMin = value;
  }
  public resetPowerMin() {
    this._powerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMinInput() {
    return this._powerMin;
  }

  // preamble - computed: true, optional: true, required: false
  private _preamble?: string; 
  public get preamble() {
    return this.getStringAttribute('preamble');
  }
  public set preamble(value: string) {
    this._preamble = value;
  }
  public resetPreamble() {
    this._preamble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preambleInput() {
    return this._preamble;
  }
}
export interface OrgRftemplateBand6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#allow_rrm_disable OrgRftemplate#allow_rrm_disable}
  */
  readonly allowRrmDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#ant_gain OrgRftemplate#ant_gain}
  */
  readonly antGain?: number;
  /**
  * enum: `1x1`, `2x2`, `3x3`, `4x4`, `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#antenna_mode OrgRftemplate#antenna_mode}
  */
  readonly antennaMode?: string;
  /**
  * channel width for the 6GHz band. enum: `0`(disabled, response only), `20`, `40`, `80`, `160`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#bandwidth OrgRftemplate#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * For RFTemplates. List of channels, null or empty array means auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#channels OrgRftemplate#channels}
  */
  readonly channels?: number[];
  /**
  * Whether to disable the radio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#disabled OrgRftemplate#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Tx power of the radio. For Devices, 0 means auto. -1 / -2 / -3 / …: treated as 0 / -1 / -2 / …
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power OrgRftemplate#power}
  */
  readonly power?: number;
  /**
  * When power=0, max tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power_max OrgRftemplate#power_max}
  */
  readonly powerMax?: number;
  /**
  * When power=0, min tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power_min OrgRftemplate#power_min}
  */
  readonly powerMin?: number;
  /**
  * enum: `auto`, `long`, `short`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#preamble OrgRftemplate#preamble}
  */
  readonly preamble?: string;
  /**
  * For 6GHz Only, standard-power operation, AFC (Automatic Frequency Coordination) will be performed, and we'll fall back to Low Power Indoor if AFC failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#standard_power OrgRftemplate#standard_power}
  */
  readonly standardPower?: boolean | cdktf.IResolvable;
}

export function orgRftemplateBand6ToTerraform(struct?: OrgRftemplateBand6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rrm_disable: cdktf.booleanToTerraform(struct!.allowRrmDisable),
    ant_gain: cdktf.numberToTerraform(struct!.antGain),
    antenna_mode: cdktf.stringToTerraform(struct!.antennaMode),
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    channels: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.channels),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    power: cdktf.numberToTerraform(struct!.power),
    power_max: cdktf.numberToTerraform(struct!.powerMax),
    power_min: cdktf.numberToTerraform(struct!.powerMin),
    preamble: cdktf.stringToTerraform(struct!.preamble),
    standard_power: cdktf.booleanToTerraform(struct!.standardPower),
  }
}


export function orgRftemplateBand6ToHclTerraform(struct?: OrgRftemplateBand6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rrm_disable: {
      value: cdktf.booleanToHclTerraform(struct!.allowRrmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ant_gain: {
      value: cdktf.numberToHclTerraform(struct!.antGain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    antenna_mode: {
      value: cdktf.stringToHclTerraform(struct!.antennaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    power: {
      value: cdktf.numberToHclTerraform(struct!.power),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_max: {
      value: cdktf.numberToHclTerraform(struct!.powerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_min: {
      value: cdktf.numberToHclTerraform(struct!.powerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preamble: {
      value: cdktf.stringToHclTerraform(struct!.preamble),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_power: {
      value: cdktf.booleanToHclTerraform(struct!.standardPower),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgRftemplateBand6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgRftemplateBand6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRrmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRrmDisable = this._allowRrmDisable;
    }
    if (this._antGain !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain = this._antGain;
    }
    if (this._antennaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaMode = this._antennaMode;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._power !== undefined) {
      hasAnyValues = true;
      internalValueResult.power = this._power;
    }
    if (this._powerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMax = this._powerMax;
    }
    if (this._powerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMin = this._powerMin;
    }
    if (this._preamble !== undefined) {
      hasAnyValues = true;
      internalValueResult.preamble = this._preamble;
    }
    if (this._standardPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardPower = this._standardPower;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgRftemplateBand6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRrmDisable = undefined;
      this._antGain = undefined;
      this._antennaMode = undefined;
      this._bandwidth = undefined;
      this._channels = undefined;
      this._disabled = undefined;
      this._power = undefined;
      this._powerMax = undefined;
      this._powerMin = undefined;
      this._preamble = undefined;
      this._standardPower = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRrmDisable = value.allowRrmDisable;
      this._antGain = value.antGain;
      this._antennaMode = value.antennaMode;
      this._bandwidth = value.bandwidth;
      this._channels = value.channels;
      this._disabled = value.disabled;
      this._power = value.power;
      this._powerMax = value.powerMax;
      this._powerMin = value.powerMin;
      this._preamble = value.preamble;
      this._standardPower = value.standardPower;
    }
  }

  // allow_rrm_disable - computed: true, optional: true, required: false
  private _allowRrmDisable?: boolean | cdktf.IResolvable; 
  public get allowRrmDisable() {
    return this.getBooleanAttribute('allow_rrm_disable');
  }
  public set allowRrmDisable(value: boolean | cdktf.IResolvable) {
    this._allowRrmDisable = value;
  }
  public resetAllowRrmDisable() {
    this._allowRrmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRrmDisableInput() {
    return this._allowRrmDisable;
  }

  // ant_gain - computed: true, optional: true, required: false
  private _antGain?: number; 
  public get antGain() {
    return this.getNumberAttribute('ant_gain');
  }
  public set antGain(value: number) {
    this._antGain = value;
  }
  public resetAntGain() {
    this._antGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGainInput() {
    return this._antGain;
  }

  // antenna_mode - computed: false, optional: true, required: false
  private _antennaMode?: string; 
  public get antennaMode() {
    return this.getStringAttribute('antenna_mode');
  }
  public set antennaMode(value: string) {
    this._antennaMode = value;
  }
  public resetAntennaMode() {
    this._antennaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaModeInput() {
    return this._antennaMode;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: number[]; 
  public get channels() {
    return this.getNumberListAttribute('channels');
  }
  public set channels(value: number[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // power - computed: false, optional: true, required: false
  private _power?: number; 
  public get power() {
    return this.getNumberAttribute('power');
  }
  public set power(value: number) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // power_max - computed: false, optional: true, required: false
  private _powerMax?: number; 
  public get powerMax() {
    return this.getNumberAttribute('power_max');
  }
  public set powerMax(value: number) {
    this._powerMax = value;
  }
  public resetPowerMax() {
    this._powerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMaxInput() {
    return this._powerMax;
  }

  // power_min - computed: false, optional: true, required: false
  private _powerMin?: number; 
  public get powerMin() {
    return this.getNumberAttribute('power_min');
  }
  public set powerMin(value: number) {
    this._powerMin = value;
  }
  public resetPowerMin() {
    this._powerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMinInput() {
    return this._powerMin;
  }

  // preamble - computed: false, optional: true, required: false
  private _preamble?: string; 
  public get preamble() {
    return this.getStringAttribute('preamble');
  }
  public set preamble(value: string) {
    this._preamble = value;
  }
  public resetPreamble() {
    this._preamble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preambleInput() {
    return this._preamble;
  }

  // standard_power - computed: false, optional: true, required: false
  private _standardPower?: boolean | cdktf.IResolvable; 
  public get standardPower() {
    return this.getBooleanAttribute('standard_power');
  }
  public set standardPower(value: boolean | cdktf.IResolvable) {
    this._standardPower = value;
  }
  public resetStandardPower() {
    this._standardPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardPowerInput() {
    return this._standardPower;
  }
}
export interface OrgRftemplateModelSpecificBand24 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#allow_rrm_disable OrgRftemplate#allow_rrm_disable}
  */
  readonly allowRrmDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#ant_gain OrgRftemplate#ant_gain}
  */
  readonly antGain?: number;
  /**
  * enum: `1x1`, `2x2`, `3x3`, `4x4`, `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#antenna_mode OrgRftemplate#antenna_mode}
  */
  readonly antennaMode?: string;
  /**
  * channel width for the 2.4GHz band. enum: `0`(disabled, response only), `20`, `40`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#bandwidth OrgRftemplate#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * For RFTemplates. List of channels, null or empty array means auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#channels OrgRftemplate#channels}
  */
  readonly channels?: number[];
  /**
  * Whether to disable the radio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#disabled OrgRftemplate#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * tx power of the radio, null or 0 means auto, when power_min=power_max=power=0 to indicate power=0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power OrgRftemplate#power}
  */
  readonly power?: number;
  /**
  * When power=0, max tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power_max OrgRftemplate#power_max}
  */
  readonly powerMax?: number;
  /**
  * When power=0, min tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power_min OrgRftemplate#power_min}
  */
  readonly powerMin?: number;
  /**
  * enum: `auto`, `long`, `short`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#preamble OrgRftemplate#preamble}
  */
  readonly preamble?: string;
}

export function orgRftemplateModelSpecificBand24ToTerraform(struct?: OrgRftemplateModelSpecificBand24 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rrm_disable: cdktf.booleanToTerraform(struct!.allowRrmDisable),
    ant_gain: cdktf.numberToTerraform(struct!.antGain),
    antenna_mode: cdktf.stringToTerraform(struct!.antennaMode),
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    channels: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.channels),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    power: cdktf.numberToTerraform(struct!.power),
    power_max: cdktf.numberToTerraform(struct!.powerMax),
    power_min: cdktf.numberToTerraform(struct!.powerMin),
    preamble: cdktf.stringToTerraform(struct!.preamble),
  }
}


export function orgRftemplateModelSpecificBand24ToHclTerraform(struct?: OrgRftemplateModelSpecificBand24 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rrm_disable: {
      value: cdktf.booleanToHclTerraform(struct!.allowRrmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ant_gain: {
      value: cdktf.numberToHclTerraform(struct!.antGain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    antenna_mode: {
      value: cdktf.stringToHclTerraform(struct!.antennaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    power: {
      value: cdktf.numberToHclTerraform(struct!.power),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_max: {
      value: cdktf.numberToHclTerraform(struct!.powerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_min: {
      value: cdktf.numberToHclTerraform(struct!.powerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preamble: {
      value: cdktf.stringToHclTerraform(struct!.preamble),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgRftemplateModelSpecificBand24OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgRftemplateModelSpecificBand24 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRrmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRrmDisable = this._allowRrmDisable;
    }
    if (this._antGain !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain = this._antGain;
    }
    if (this._antennaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaMode = this._antennaMode;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._power !== undefined) {
      hasAnyValues = true;
      internalValueResult.power = this._power;
    }
    if (this._powerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMax = this._powerMax;
    }
    if (this._powerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMin = this._powerMin;
    }
    if (this._preamble !== undefined) {
      hasAnyValues = true;
      internalValueResult.preamble = this._preamble;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgRftemplateModelSpecificBand24 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRrmDisable = undefined;
      this._antGain = undefined;
      this._antennaMode = undefined;
      this._bandwidth = undefined;
      this._channels = undefined;
      this._disabled = undefined;
      this._power = undefined;
      this._powerMax = undefined;
      this._powerMin = undefined;
      this._preamble = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRrmDisable = value.allowRrmDisable;
      this._antGain = value.antGain;
      this._antennaMode = value.antennaMode;
      this._bandwidth = value.bandwidth;
      this._channels = value.channels;
      this._disabled = value.disabled;
      this._power = value.power;
      this._powerMax = value.powerMax;
      this._powerMin = value.powerMin;
      this._preamble = value.preamble;
    }
  }

  // allow_rrm_disable - computed: true, optional: true, required: false
  private _allowRrmDisable?: boolean | cdktf.IResolvable; 
  public get allowRrmDisable() {
    return this.getBooleanAttribute('allow_rrm_disable');
  }
  public set allowRrmDisable(value: boolean | cdktf.IResolvable) {
    this._allowRrmDisable = value;
  }
  public resetAllowRrmDisable() {
    this._allowRrmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRrmDisableInput() {
    return this._allowRrmDisable;
  }

  // ant_gain - computed: false, optional: true, required: false
  private _antGain?: number; 
  public get antGain() {
    return this.getNumberAttribute('ant_gain');
  }
  public set antGain(value: number) {
    this._antGain = value;
  }
  public resetAntGain() {
    this._antGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGainInput() {
    return this._antGain;
  }

  // antenna_mode - computed: false, optional: true, required: false
  private _antennaMode?: string; 
  public get antennaMode() {
    return this.getStringAttribute('antenna_mode');
  }
  public set antennaMode(value: string) {
    this._antennaMode = value;
  }
  public resetAntennaMode() {
    this._antennaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaModeInput() {
    return this._antennaMode;
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: number[]; 
  public get channels() {
    return this.getNumberListAttribute('channels');
  }
  public set channels(value: number[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // power - computed: false, optional: true, required: false
  private _power?: number; 
  public get power() {
    return this.getNumberAttribute('power');
  }
  public set power(value: number) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // power_max - computed: false, optional: true, required: false
  private _powerMax?: number; 
  public get powerMax() {
    return this.getNumberAttribute('power_max');
  }
  public set powerMax(value: number) {
    this._powerMax = value;
  }
  public resetPowerMax() {
    this._powerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMaxInput() {
    return this._powerMax;
  }

  // power_min - computed: false, optional: true, required: false
  private _powerMin?: number; 
  public get powerMin() {
    return this.getNumberAttribute('power_min');
  }
  public set powerMin(value: number) {
    this._powerMin = value;
  }
  public resetPowerMin() {
    this._powerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMinInput() {
    return this._powerMin;
  }

  // preamble - computed: false, optional: true, required: false
  private _preamble?: string; 
  public get preamble() {
    return this.getStringAttribute('preamble');
  }
  public set preamble(value: string) {
    this._preamble = value;
  }
  public resetPreamble() {
    this._preamble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preambleInput() {
    return this._preamble;
  }
}
export interface OrgRftemplateModelSpecificBand5 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#allow_rrm_disable OrgRftemplate#allow_rrm_disable}
  */
  readonly allowRrmDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#ant_gain OrgRftemplate#ant_gain}
  */
  readonly antGain?: number;
  /**
  * enum: `1x1`, `2x2`, `3x3`, `4x4`, `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#antenna_mode OrgRftemplate#antenna_mode}
  */
  readonly antennaMode?: string;
  /**
  * channel width for the 5GHz band. enum: `0`(disabled, response only), `20`, `40`, `80`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#bandwidth OrgRftemplate#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * For RFTemplates. List of channels, null or empty array means auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#channels OrgRftemplate#channels}
  */
  readonly channels?: number[];
  /**
  * Whether to disable the radio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#disabled OrgRftemplate#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Tx power of the radio. For Devices, 0 means auto. -1 / -2 / -3 / …: treated as 0 / -1 / -2 / …
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power OrgRftemplate#power}
  */
  readonly power?: number;
  /**
  * When power=0, max tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power_max OrgRftemplate#power_max}
  */
  readonly powerMax?: number;
  /**
  * When power=0, min tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power_min OrgRftemplate#power_min}
  */
  readonly powerMin?: number;
  /**
  * enum: `auto`, `long`, `short`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#preamble OrgRftemplate#preamble}
  */
  readonly preamble?: string;
}

export function orgRftemplateModelSpecificBand5ToTerraform(struct?: OrgRftemplateModelSpecificBand5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rrm_disable: cdktf.booleanToTerraform(struct!.allowRrmDisable),
    ant_gain: cdktf.numberToTerraform(struct!.antGain),
    antenna_mode: cdktf.stringToTerraform(struct!.antennaMode),
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    channels: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.channels),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    power: cdktf.numberToTerraform(struct!.power),
    power_max: cdktf.numberToTerraform(struct!.powerMax),
    power_min: cdktf.numberToTerraform(struct!.powerMin),
    preamble: cdktf.stringToTerraform(struct!.preamble),
  }
}


export function orgRftemplateModelSpecificBand5ToHclTerraform(struct?: OrgRftemplateModelSpecificBand5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rrm_disable: {
      value: cdktf.booleanToHclTerraform(struct!.allowRrmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ant_gain: {
      value: cdktf.numberToHclTerraform(struct!.antGain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    antenna_mode: {
      value: cdktf.stringToHclTerraform(struct!.antennaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    power: {
      value: cdktf.numberToHclTerraform(struct!.power),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_max: {
      value: cdktf.numberToHclTerraform(struct!.powerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_min: {
      value: cdktf.numberToHclTerraform(struct!.powerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preamble: {
      value: cdktf.stringToHclTerraform(struct!.preamble),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgRftemplateModelSpecificBand5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgRftemplateModelSpecificBand5 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRrmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRrmDisable = this._allowRrmDisable;
    }
    if (this._antGain !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain = this._antGain;
    }
    if (this._antennaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaMode = this._antennaMode;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._power !== undefined) {
      hasAnyValues = true;
      internalValueResult.power = this._power;
    }
    if (this._powerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMax = this._powerMax;
    }
    if (this._powerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMin = this._powerMin;
    }
    if (this._preamble !== undefined) {
      hasAnyValues = true;
      internalValueResult.preamble = this._preamble;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgRftemplateModelSpecificBand5 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRrmDisable = undefined;
      this._antGain = undefined;
      this._antennaMode = undefined;
      this._bandwidth = undefined;
      this._channels = undefined;
      this._disabled = undefined;
      this._power = undefined;
      this._powerMax = undefined;
      this._powerMin = undefined;
      this._preamble = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRrmDisable = value.allowRrmDisable;
      this._antGain = value.antGain;
      this._antennaMode = value.antennaMode;
      this._bandwidth = value.bandwidth;
      this._channels = value.channels;
      this._disabled = value.disabled;
      this._power = value.power;
      this._powerMax = value.powerMax;
      this._powerMin = value.powerMin;
      this._preamble = value.preamble;
    }
  }

  // allow_rrm_disable - computed: true, optional: true, required: false
  private _allowRrmDisable?: boolean | cdktf.IResolvable; 
  public get allowRrmDisable() {
    return this.getBooleanAttribute('allow_rrm_disable');
  }
  public set allowRrmDisable(value: boolean | cdktf.IResolvable) {
    this._allowRrmDisable = value;
  }
  public resetAllowRrmDisable() {
    this._allowRrmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRrmDisableInput() {
    return this._allowRrmDisable;
  }

  // ant_gain - computed: false, optional: true, required: false
  private _antGain?: number; 
  public get antGain() {
    return this.getNumberAttribute('ant_gain');
  }
  public set antGain(value: number) {
    this._antGain = value;
  }
  public resetAntGain() {
    this._antGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGainInput() {
    return this._antGain;
  }

  // antenna_mode - computed: false, optional: true, required: false
  private _antennaMode?: string; 
  public get antennaMode() {
    return this.getStringAttribute('antenna_mode');
  }
  public set antennaMode(value: string) {
    this._antennaMode = value;
  }
  public resetAntennaMode() {
    this._antennaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaModeInput() {
    return this._antennaMode;
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: number[]; 
  public get channels() {
    return this.getNumberListAttribute('channels');
  }
  public set channels(value: number[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // power - computed: false, optional: true, required: false
  private _power?: number; 
  public get power() {
    return this.getNumberAttribute('power');
  }
  public set power(value: number) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // power_max - computed: false, optional: true, required: false
  private _powerMax?: number; 
  public get powerMax() {
    return this.getNumberAttribute('power_max');
  }
  public set powerMax(value: number) {
    this._powerMax = value;
  }
  public resetPowerMax() {
    this._powerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMaxInput() {
    return this._powerMax;
  }

  // power_min - computed: false, optional: true, required: false
  private _powerMin?: number; 
  public get powerMin() {
    return this.getNumberAttribute('power_min');
  }
  public set powerMin(value: number) {
    this._powerMin = value;
  }
  public resetPowerMin() {
    this._powerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMinInput() {
    return this._powerMin;
  }

  // preamble - computed: false, optional: true, required: false
  private _preamble?: string; 
  public get preamble() {
    return this.getStringAttribute('preamble');
  }
  public set preamble(value: string) {
    this._preamble = value;
  }
  public resetPreamble() {
    this._preamble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preambleInput() {
    return this._preamble;
  }
}
export interface OrgRftemplateModelSpecificBand5On24Radio {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#allow_rrm_disable OrgRftemplate#allow_rrm_disable}
  */
  readonly allowRrmDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#ant_gain OrgRftemplate#ant_gain}
  */
  readonly antGain?: number;
  /**
  * enum: `1x1`, `2x2`, `3x3`, `4x4`, `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#antenna_mode OrgRftemplate#antenna_mode}
  */
  readonly antennaMode?: string;
  /**
  * channel width for the 5GHz band. enum: `0`(disabled, response only), `20`, `40`, `80`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#bandwidth OrgRftemplate#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * For RFTemplates. List of channels, null or empty array means auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#channels OrgRftemplate#channels}
  */
  readonly channels?: number[];
  /**
  * Whether to disable the radio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#disabled OrgRftemplate#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Tx power of the radio. For Devices, 0 means auto. -1 / -2 / -3 / …: treated as 0 / -1 / -2 / …
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power OrgRftemplate#power}
  */
  readonly power?: number;
  /**
  * When power=0, max tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power_max OrgRftemplate#power_max}
  */
  readonly powerMax?: number;
  /**
  * When power=0, min tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power_min OrgRftemplate#power_min}
  */
  readonly powerMin?: number;
  /**
  * enum: `auto`, `long`, `short`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#preamble OrgRftemplate#preamble}
  */
  readonly preamble?: string;
}

export function orgRftemplateModelSpecificBand5On24RadioToTerraform(struct?: OrgRftemplateModelSpecificBand5On24Radio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rrm_disable: cdktf.booleanToTerraform(struct!.allowRrmDisable),
    ant_gain: cdktf.numberToTerraform(struct!.antGain),
    antenna_mode: cdktf.stringToTerraform(struct!.antennaMode),
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    channels: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.channels),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    power: cdktf.numberToTerraform(struct!.power),
    power_max: cdktf.numberToTerraform(struct!.powerMax),
    power_min: cdktf.numberToTerraform(struct!.powerMin),
    preamble: cdktf.stringToTerraform(struct!.preamble),
  }
}


export function orgRftemplateModelSpecificBand5On24RadioToHclTerraform(struct?: OrgRftemplateModelSpecificBand5On24Radio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rrm_disable: {
      value: cdktf.booleanToHclTerraform(struct!.allowRrmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ant_gain: {
      value: cdktf.numberToHclTerraform(struct!.antGain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    antenna_mode: {
      value: cdktf.stringToHclTerraform(struct!.antennaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    power: {
      value: cdktf.numberToHclTerraform(struct!.power),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_max: {
      value: cdktf.numberToHclTerraform(struct!.powerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_min: {
      value: cdktf.numberToHclTerraform(struct!.powerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preamble: {
      value: cdktf.stringToHclTerraform(struct!.preamble),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgRftemplateModelSpecificBand5On24RadioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgRftemplateModelSpecificBand5On24Radio | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRrmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRrmDisable = this._allowRrmDisable;
    }
    if (this._antGain !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain = this._antGain;
    }
    if (this._antennaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaMode = this._antennaMode;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._power !== undefined) {
      hasAnyValues = true;
      internalValueResult.power = this._power;
    }
    if (this._powerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMax = this._powerMax;
    }
    if (this._powerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMin = this._powerMin;
    }
    if (this._preamble !== undefined) {
      hasAnyValues = true;
      internalValueResult.preamble = this._preamble;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgRftemplateModelSpecificBand5On24Radio | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRrmDisable = undefined;
      this._antGain = undefined;
      this._antennaMode = undefined;
      this._bandwidth = undefined;
      this._channels = undefined;
      this._disabled = undefined;
      this._power = undefined;
      this._powerMax = undefined;
      this._powerMin = undefined;
      this._preamble = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRrmDisable = value.allowRrmDisable;
      this._antGain = value.antGain;
      this._antennaMode = value.antennaMode;
      this._bandwidth = value.bandwidth;
      this._channels = value.channels;
      this._disabled = value.disabled;
      this._power = value.power;
      this._powerMax = value.powerMax;
      this._powerMin = value.powerMin;
      this._preamble = value.preamble;
    }
  }

  // allow_rrm_disable - computed: true, optional: true, required: false
  private _allowRrmDisable?: boolean | cdktf.IResolvable; 
  public get allowRrmDisable() {
    return this.getBooleanAttribute('allow_rrm_disable');
  }
  public set allowRrmDisable(value: boolean | cdktf.IResolvable) {
    this._allowRrmDisable = value;
  }
  public resetAllowRrmDisable() {
    this._allowRrmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRrmDisableInput() {
    return this._allowRrmDisable;
  }

  // ant_gain - computed: true, optional: true, required: false
  private _antGain?: number; 
  public get antGain() {
    return this.getNumberAttribute('ant_gain');
  }
  public set antGain(value: number) {
    this._antGain = value;
  }
  public resetAntGain() {
    this._antGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGainInput() {
    return this._antGain;
  }

  // antenna_mode - computed: true, optional: true, required: false
  private _antennaMode?: string; 
  public get antennaMode() {
    return this.getStringAttribute('antenna_mode');
  }
  public set antennaMode(value: string) {
    this._antennaMode = value;
  }
  public resetAntennaMode() {
    this._antennaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaModeInput() {
    return this._antennaMode;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: number[]; 
  public get channels() {
    return this.getNumberListAttribute('channels');
  }
  public set channels(value: number[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // power - computed: true, optional: true, required: false
  private _power?: number; 
  public get power() {
    return this.getNumberAttribute('power');
  }
  public set power(value: number) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // power_max - computed: true, optional: true, required: false
  private _powerMax?: number; 
  public get powerMax() {
    return this.getNumberAttribute('power_max');
  }
  public set powerMax(value: number) {
    this._powerMax = value;
  }
  public resetPowerMax() {
    this._powerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMaxInput() {
    return this._powerMax;
  }

  // power_min - computed: true, optional: true, required: false
  private _powerMin?: number; 
  public get powerMin() {
    return this.getNumberAttribute('power_min');
  }
  public set powerMin(value: number) {
    this._powerMin = value;
  }
  public resetPowerMin() {
    this._powerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMinInput() {
    return this._powerMin;
  }

  // preamble - computed: true, optional: true, required: false
  private _preamble?: string; 
  public get preamble() {
    return this.getStringAttribute('preamble');
  }
  public set preamble(value: string) {
    this._preamble = value;
  }
  public resetPreamble() {
    this._preamble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preambleInput() {
    return this._preamble;
  }
}
export interface OrgRftemplateModelSpecificBand6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#allow_rrm_disable OrgRftemplate#allow_rrm_disable}
  */
  readonly allowRrmDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#ant_gain OrgRftemplate#ant_gain}
  */
  readonly antGain?: number;
  /**
  * enum: `1x1`, `2x2`, `3x3`, `4x4`, `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#antenna_mode OrgRftemplate#antenna_mode}
  */
  readonly antennaMode?: string;
  /**
  * channel width for the 6GHz band. enum: `0`(disabled, response only), `20`, `40`, `80`, `160`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#bandwidth OrgRftemplate#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * For RFTemplates. List of channels, null or empty array means auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#channels OrgRftemplate#channels}
  */
  readonly channels?: number[];
  /**
  * Whether to disable the radio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#disabled OrgRftemplate#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Tx power of the radio. For Devices, 0 means auto. -1 / -2 / -3 / …: treated as 0 / -1 / -2 / …
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power OrgRftemplate#power}
  */
  readonly power?: number;
  /**
  * When power=0, max tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power_max OrgRftemplate#power_max}
  */
  readonly powerMax?: number;
  /**
  * When power=0, min tx power to use, HW-specific values will be used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#power_min OrgRftemplate#power_min}
  */
  readonly powerMin?: number;
  /**
  * enum: `auto`, `long`, `short`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#preamble OrgRftemplate#preamble}
  */
  readonly preamble?: string;
  /**
  * For 6GHz Only, standard-power operation, AFC (Automatic Frequency Coordination) will be performed, and we'll fall back to Low Power Indoor if AFC failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#standard_power OrgRftemplate#standard_power}
  */
  readonly standardPower?: boolean | cdktf.IResolvable;
}

export function orgRftemplateModelSpecificBand6ToTerraform(struct?: OrgRftemplateModelSpecificBand6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rrm_disable: cdktf.booleanToTerraform(struct!.allowRrmDisable),
    ant_gain: cdktf.numberToTerraform(struct!.antGain),
    antenna_mode: cdktf.stringToTerraform(struct!.antennaMode),
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    channels: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.channels),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    power: cdktf.numberToTerraform(struct!.power),
    power_max: cdktf.numberToTerraform(struct!.powerMax),
    power_min: cdktf.numberToTerraform(struct!.powerMin),
    preamble: cdktf.stringToTerraform(struct!.preamble),
    standard_power: cdktf.booleanToTerraform(struct!.standardPower),
  }
}


export function orgRftemplateModelSpecificBand6ToHclTerraform(struct?: OrgRftemplateModelSpecificBand6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rrm_disable: {
      value: cdktf.booleanToHclTerraform(struct!.allowRrmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ant_gain: {
      value: cdktf.numberToHclTerraform(struct!.antGain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    antenna_mode: {
      value: cdktf.stringToHclTerraform(struct!.antennaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    power: {
      value: cdktf.numberToHclTerraform(struct!.power),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_max: {
      value: cdktf.numberToHclTerraform(struct!.powerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_min: {
      value: cdktf.numberToHclTerraform(struct!.powerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preamble: {
      value: cdktf.stringToHclTerraform(struct!.preamble),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_power: {
      value: cdktf.booleanToHclTerraform(struct!.standardPower),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgRftemplateModelSpecificBand6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgRftemplateModelSpecificBand6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRrmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRrmDisable = this._allowRrmDisable;
    }
    if (this._antGain !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain = this._antGain;
    }
    if (this._antennaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.antennaMode = this._antennaMode;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._power !== undefined) {
      hasAnyValues = true;
      internalValueResult.power = this._power;
    }
    if (this._powerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMax = this._powerMax;
    }
    if (this._powerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerMin = this._powerMin;
    }
    if (this._preamble !== undefined) {
      hasAnyValues = true;
      internalValueResult.preamble = this._preamble;
    }
    if (this._standardPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardPower = this._standardPower;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgRftemplateModelSpecificBand6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRrmDisable = undefined;
      this._antGain = undefined;
      this._antennaMode = undefined;
      this._bandwidth = undefined;
      this._channels = undefined;
      this._disabled = undefined;
      this._power = undefined;
      this._powerMax = undefined;
      this._powerMin = undefined;
      this._preamble = undefined;
      this._standardPower = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRrmDisable = value.allowRrmDisable;
      this._antGain = value.antGain;
      this._antennaMode = value.antennaMode;
      this._bandwidth = value.bandwidth;
      this._channels = value.channels;
      this._disabled = value.disabled;
      this._power = value.power;
      this._powerMax = value.powerMax;
      this._powerMin = value.powerMin;
      this._preamble = value.preamble;
      this._standardPower = value.standardPower;
    }
  }

  // allow_rrm_disable - computed: true, optional: true, required: false
  private _allowRrmDisable?: boolean | cdktf.IResolvable; 
  public get allowRrmDisable() {
    return this.getBooleanAttribute('allow_rrm_disable');
  }
  public set allowRrmDisable(value: boolean | cdktf.IResolvable) {
    this._allowRrmDisable = value;
  }
  public resetAllowRrmDisable() {
    this._allowRrmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRrmDisableInput() {
    return this._allowRrmDisable;
  }

  // ant_gain - computed: false, optional: true, required: false
  private _antGain?: number; 
  public get antGain() {
    return this.getNumberAttribute('ant_gain');
  }
  public set antGain(value: number) {
    this._antGain = value;
  }
  public resetAntGain() {
    this._antGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGainInput() {
    return this._antGain;
  }

  // antenna_mode - computed: false, optional: true, required: false
  private _antennaMode?: string; 
  public get antennaMode() {
    return this.getStringAttribute('antenna_mode');
  }
  public set antennaMode(value: string) {
    this._antennaMode = value;
  }
  public resetAntennaMode() {
    this._antennaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaModeInput() {
    return this._antennaMode;
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: number[]; 
  public get channels() {
    return this.getNumberListAttribute('channels');
  }
  public set channels(value: number[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // power - computed: false, optional: true, required: false
  private _power?: number; 
  public get power() {
    return this.getNumberAttribute('power');
  }
  public set power(value: number) {
    this._power = value;
  }
  public resetPower() {
    this._power = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerInput() {
    return this._power;
  }

  // power_max - computed: false, optional: true, required: false
  private _powerMax?: number; 
  public get powerMax() {
    return this.getNumberAttribute('power_max');
  }
  public set powerMax(value: number) {
    this._powerMax = value;
  }
  public resetPowerMax() {
    this._powerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMaxInput() {
    return this._powerMax;
  }

  // power_min - computed: false, optional: true, required: false
  private _powerMin?: number; 
  public get powerMin() {
    return this.getNumberAttribute('power_min');
  }
  public set powerMin(value: number) {
    this._powerMin = value;
  }
  public resetPowerMin() {
    this._powerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerMinInput() {
    return this._powerMin;
  }

  // preamble - computed: false, optional: true, required: false
  private _preamble?: string; 
  public get preamble() {
    return this.getStringAttribute('preamble');
  }
  public set preamble(value: string) {
    this._preamble = value;
  }
  public resetPreamble() {
    this._preamble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preambleInput() {
    return this._preamble;
  }

  // standard_power - computed: true, optional: true, required: false
  private _standardPower?: boolean | cdktf.IResolvable; 
  public get standardPower() {
    return this.getBooleanAttribute('standard_power');
  }
  public set standardPower(value: boolean | cdktf.IResolvable) {
    this._standardPower = value;
  }
  public resetStandardPower() {
    this._standardPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardPowerInput() {
    return this._standardPower;
  }
}
export interface OrgRftemplateModelSpecific {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#ant_gain_24 OrgRftemplate#ant_gain_24}
  */
  readonly antGain24?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#ant_gain_5 OrgRftemplate#ant_gain_5}
  */
  readonly antGain5?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#ant_gain_6 OrgRftemplate#ant_gain_6}
  */
  readonly antGain6?: number;
  /**
  * Radio Band AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#band_24 OrgRftemplate#band_24}
  */
  readonly band24?: OrgRftemplateModelSpecificBand24;
  /**
  * enum: `24`, `5`, `6`, `auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#band_24_usage OrgRftemplate#band_24_usage}
  */
  readonly band24Usage?: string;
  /**
  * Radio Band AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#band_5 OrgRftemplate#band_5}
  */
  readonly band5?: OrgRftemplateModelSpecificBand5;
  /**
  * Radio Band AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#band_5_on_24_radio OrgRftemplate#band_5_on_24_radio}
  */
  readonly band5On24Radio?: OrgRftemplateModelSpecificBand5On24Radio;
  /**
  * Radio Band AP settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#band_6 OrgRftemplate#band_6}
  */
  readonly band6?: OrgRftemplateModelSpecificBand6;
}

export function orgRftemplateModelSpecificToTerraform(struct?: OrgRftemplateModelSpecific | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ant_gain_24: cdktf.numberToTerraform(struct!.antGain24),
    ant_gain_5: cdktf.numberToTerraform(struct!.antGain5),
    ant_gain_6: cdktf.numberToTerraform(struct!.antGain6),
    band_24: orgRftemplateModelSpecificBand24ToTerraform(struct!.band24),
    band_24_usage: cdktf.stringToTerraform(struct!.band24Usage),
    band_5: orgRftemplateModelSpecificBand5ToTerraform(struct!.band5),
    band_5_on_24_radio: orgRftemplateModelSpecificBand5On24RadioToTerraform(struct!.band5On24Radio),
    band_6: orgRftemplateModelSpecificBand6ToTerraform(struct!.band6),
  }
}


export function orgRftemplateModelSpecificToHclTerraform(struct?: OrgRftemplateModelSpecific | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ant_gain_24: {
      value: cdktf.numberToHclTerraform(struct!.antGain24),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ant_gain_5: {
      value: cdktf.numberToHclTerraform(struct!.antGain5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ant_gain_6: {
      value: cdktf.numberToHclTerraform(struct!.antGain6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    band_24: {
      value: orgRftemplateModelSpecificBand24ToHclTerraform(struct!.band24),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgRftemplateModelSpecificBand24",
    },
    band_24_usage: {
      value: cdktf.stringToHclTerraform(struct!.band24Usage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    band_5: {
      value: orgRftemplateModelSpecificBand5ToHclTerraform(struct!.band5),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgRftemplateModelSpecificBand5",
    },
    band_5_on_24_radio: {
      value: orgRftemplateModelSpecificBand5On24RadioToHclTerraform(struct!.band5On24Radio),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgRftemplateModelSpecificBand5On24Radio",
    },
    band_6: {
      value: orgRftemplateModelSpecificBand6ToHclTerraform(struct!.band6),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgRftemplateModelSpecificBand6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgRftemplateModelSpecificOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OrgRftemplateModelSpecific | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antGain24 !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain24 = this._antGain24;
    }
    if (this._antGain5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain5 = this._antGain5;
    }
    if (this._antGain6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.antGain6 = this._antGain6;
    }
    if (this._band24?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.band24 = this._band24?.internalValue;
    }
    if (this._band24Usage !== undefined) {
      hasAnyValues = true;
      internalValueResult.band24Usage = this._band24Usage;
    }
    if (this._band5?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.band5 = this._band5?.internalValue;
    }
    if (this._band5On24Radio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.band5On24Radio = this._band5On24Radio?.internalValue;
    }
    if (this._band6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.band6 = this._band6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgRftemplateModelSpecific | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antGain24 = undefined;
      this._antGain5 = undefined;
      this._antGain6 = undefined;
      this._band24.internalValue = undefined;
      this._band24Usage = undefined;
      this._band5.internalValue = undefined;
      this._band5On24Radio.internalValue = undefined;
      this._band6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antGain24 = value.antGain24;
      this._antGain5 = value.antGain5;
      this._antGain6 = value.antGain6;
      this._band24.internalValue = value.band24;
      this._band24Usage = value.band24Usage;
      this._band5.internalValue = value.band5;
      this._band5On24Radio.internalValue = value.band5On24Radio;
      this._band6.internalValue = value.band6;
    }
  }

  // ant_gain_24 - computed: false, optional: true, required: false
  private _antGain24?: number; 
  public get antGain24() {
    return this.getNumberAttribute('ant_gain_24');
  }
  public set antGain24(value: number) {
    this._antGain24 = value;
  }
  public resetAntGain24() {
    this._antGain24 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGain24Input() {
    return this._antGain24;
  }

  // ant_gain_5 - computed: false, optional: true, required: false
  private _antGain5?: number; 
  public get antGain5() {
    return this.getNumberAttribute('ant_gain_5');
  }
  public set antGain5(value: number) {
    this._antGain5 = value;
  }
  public resetAntGain5() {
    this._antGain5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGain5Input() {
    return this._antGain5;
  }

  // ant_gain_6 - computed: false, optional: true, required: false
  private _antGain6?: number; 
  public get antGain6() {
    return this.getNumberAttribute('ant_gain_6');
  }
  public set antGain6(value: number) {
    this._antGain6 = value;
  }
  public resetAntGain6() {
    this._antGain6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGain6Input() {
    return this._antGain6;
  }

  // band_24 - computed: false, optional: true, required: false
  private _band24 = new OrgRftemplateModelSpecificBand24OutputReference(this, "band_24");
  public get band24() {
    return this._band24;
  }
  public putBand24(value: OrgRftemplateModelSpecificBand24) {
    this._band24.internalValue = value;
  }
  public resetBand24() {
    this._band24.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band24Input() {
    return this._band24.internalValue;
  }

  // band_24_usage - computed: false, optional: true, required: false
  private _band24Usage?: string; 
  public get band24Usage() {
    return this.getStringAttribute('band_24_usage');
  }
  public set band24Usage(value: string) {
    this._band24Usage = value;
  }
  public resetBand24Usage() {
    this._band24Usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band24UsageInput() {
    return this._band24Usage;
  }

  // band_5 - computed: false, optional: true, required: false
  private _band5 = new OrgRftemplateModelSpecificBand5OutputReference(this, "band_5");
  public get band5() {
    return this._band5;
  }
  public putBand5(value: OrgRftemplateModelSpecificBand5) {
    this._band5.internalValue = value;
  }
  public resetBand5() {
    this._band5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band5Input() {
    return this._band5.internalValue;
  }

  // band_5_on_24_radio - computed: false, optional: true, required: false
  private _band5On24Radio = new OrgRftemplateModelSpecificBand5On24RadioOutputReference(this, "band_5_on_24_radio");
  public get band5On24Radio() {
    return this._band5On24Radio;
  }
  public putBand5On24Radio(value: OrgRftemplateModelSpecificBand5On24Radio) {
    this._band5On24Radio.internalValue = value;
  }
  public resetBand5On24Radio() {
    this._band5On24Radio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band5On24RadioInput() {
    return this._band5On24Radio.internalValue;
  }

  // band_6 - computed: false, optional: true, required: false
  private _band6 = new OrgRftemplateModelSpecificBand6OutputReference(this, "band_6");
  public get band6() {
    return this._band6;
  }
  public putBand6(value: OrgRftemplateModelSpecificBand6) {
    this._band6.internalValue = value;
  }
  public resetBand6() {
    this._band6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band6Input() {
    return this._band6.internalValue;
  }
}

export class OrgRftemplateModelSpecificMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgRftemplateModelSpecific } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OrgRftemplateModelSpecificOutputReference {
    return new OrgRftemplateModelSpecificOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate mist_org_rftemplate}
*/
export class OrgRftemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_rftemplate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgRftemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgRftemplate to import
  * @param importFromId The id of the existing OrgRftemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgRftemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_rftemplate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_rftemplate mist_org_rftemplate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgRftemplateConfig
  */
  public constructor(scope: Construct, id: string, config: OrgRftemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_rftemplate',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._antGain24 = config.antGain24;
    this._antGain5 = config.antGain5;
    this._antGain6 = config.antGain6;
    this._band24.internalValue = config.band24;
    this._band24Usage = config.band24Usage;
    this._band5.internalValue = config.band5;
    this._band5On24Radio.internalValue = config.band5On24Radio;
    this._band6.internalValue = config.band6;
    this._countryCode = config.countryCode;
    this._modelSpecific.internalValue = config.modelSpecific;
    this._name = config.name;
    this._orgId = config.orgId;
    this._scanningEnabled = config.scanningEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ant_gain_24 - computed: true, optional: true, required: false
  private _antGain24?: number; 
  public get antGain24() {
    return this.getNumberAttribute('ant_gain_24');
  }
  public set antGain24(value: number) {
    this._antGain24 = value;
  }
  public resetAntGain24() {
    this._antGain24 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGain24Input() {
    return this._antGain24;
  }

  // ant_gain_5 - computed: true, optional: true, required: false
  private _antGain5?: number; 
  public get antGain5() {
    return this.getNumberAttribute('ant_gain_5');
  }
  public set antGain5(value: number) {
    this._antGain5 = value;
  }
  public resetAntGain5() {
    this._antGain5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGain5Input() {
    return this._antGain5;
  }

  // ant_gain_6 - computed: true, optional: true, required: false
  private _antGain6?: number; 
  public get antGain6() {
    return this.getNumberAttribute('ant_gain_6');
  }
  public set antGain6(value: number) {
    this._antGain6 = value;
  }
  public resetAntGain6() {
    this._antGain6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antGain6Input() {
    return this._antGain6;
  }

  // band_24 - computed: false, optional: true, required: false
  private _band24 = new OrgRftemplateBand24OutputReference(this, "band_24");
  public get band24() {
    return this._band24;
  }
  public putBand24(value: OrgRftemplateBand24) {
    this._band24.internalValue = value;
  }
  public resetBand24() {
    this._band24.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band24Input() {
    return this._band24.internalValue;
  }

  // band_24_usage - computed: false, optional: true, required: false
  private _band24Usage?: string; 
  public get band24Usage() {
    return this.getStringAttribute('band_24_usage');
  }
  public set band24Usage(value: string) {
    this._band24Usage = value;
  }
  public resetBand24Usage() {
    this._band24Usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band24UsageInput() {
    return this._band24Usage;
  }

  // band_5 - computed: false, optional: true, required: false
  private _band5 = new OrgRftemplateBand5OutputReference(this, "band_5");
  public get band5() {
    return this._band5;
  }
  public putBand5(value: OrgRftemplateBand5) {
    this._band5.internalValue = value;
  }
  public resetBand5() {
    this._band5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band5Input() {
    return this._band5.internalValue;
  }

  // band_5_on_24_radio - computed: false, optional: true, required: false
  private _band5On24Radio = new OrgRftemplateBand5On24RadioOutputReference(this, "band_5_on_24_radio");
  public get band5On24Radio() {
    return this._band5On24Radio;
  }
  public putBand5On24Radio(value: OrgRftemplateBand5On24Radio) {
    this._band5On24Radio.internalValue = value;
  }
  public resetBand5On24Radio() {
    this._band5On24Radio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band5On24RadioInput() {
    return this._band5On24Radio.internalValue;
  }

  // band_6 - computed: false, optional: true, required: false
  private _band6 = new OrgRftemplateBand6OutputReference(this, "band_6");
  public get band6() {
    return this._band6;
  }
  public putBand6(value: OrgRftemplateBand6) {
    this._band6.internalValue = value;
  }
  public resetBand6() {
    this._band6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get band6Input() {
    return this._band6.internalValue;
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // model_specific - computed: false, optional: true, required: false
  private _modelSpecific = new OrgRftemplateModelSpecificMap(this, "model_specific");
  public get modelSpecific() {
    return this._modelSpecific;
  }
  public putModelSpecific(value: { [key: string]: OrgRftemplateModelSpecific } | cdktf.IResolvable) {
    this._modelSpecific.internalValue = value;
  }
  public resetModelSpecific() {
    this._modelSpecific.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSpecificInput() {
    return this._modelSpecific.internalValue;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // scanning_enabled - computed: false, optional: true, required: false
  private _scanningEnabled?: boolean | cdktf.IResolvable; 
  public get scanningEnabled() {
    return this.getBooleanAttribute('scanning_enabled');
  }
  public set scanningEnabled(value: boolean | cdktf.IResolvable) {
    this._scanningEnabled = value;
  }
  public resetScanningEnabled() {
    this._scanningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanningEnabledInput() {
    return this._scanningEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ant_gain_24: cdktf.numberToTerraform(this._antGain24),
      ant_gain_5: cdktf.numberToTerraform(this._antGain5),
      ant_gain_6: cdktf.numberToTerraform(this._antGain6),
      band_24: orgRftemplateBand24ToTerraform(this._band24.internalValue),
      band_24_usage: cdktf.stringToTerraform(this._band24Usage),
      band_5: orgRftemplateBand5ToTerraform(this._band5.internalValue),
      band_5_on_24_radio: orgRftemplateBand5On24RadioToTerraform(this._band5On24Radio.internalValue),
      band_6: orgRftemplateBand6ToTerraform(this._band6.internalValue),
      country_code: cdktf.stringToTerraform(this._countryCode),
      model_specific: cdktf.hashMapper(orgRftemplateModelSpecificToTerraform)(this._modelSpecific.internalValue),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      scanning_enabled: cdktf.booleanToTerraform(this._scanningEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ant_gain_24: {
        value: cdktf.numberToHclTerraform(this._antGain24),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ant_gain_5: {
        value: cdktf.numberToHclTerraform(this._antGain5),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ant_gain_6: {
        value: cdktf.numberToHclTerraform(this._antGain6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      band_24: {
        value: orgRftemplateBand24ToHclTerraform(this._band24.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgRftemplateBand24",
      },
      band_24_usage: {
        value: cdktf.stringToHclTerraform(this._band24Usage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      band_5: {
        value: orgRftemplateBand5ToHclTerraform(this._band5.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgRftemplateBand5",
      },
      band_5_on_24_radio: {
        value: orgRftemplateBand5On24RadioToHclTerraform(this._band5On24Radio.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgRftemplateBand5On24Radio",
      },
      band_6: {
        value: orgRftemplateBand6ToHclTerraform(this._band6.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgRftemplateBand6",
      },
      country_code: {
        value: cdktf.stringToHclTerraform(this._countryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_specific: {
        value: cdktf.hashMapperHcl(orgRftemplateModelSpecificToHclTerraform)(this._modelSpecific.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgRftemplateModelSpecificMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scanning_enabled: {
        value: cdktf.booleanToHclTerraform(this._scanningEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
