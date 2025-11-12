// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/sdwan_error_correction_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdwanErrorCorrectionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Activation threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/sdwan_error_correction_profile#activation_threshold SdwanErrorCorrectionProfile#activation_threshold}
  */
  readonly activationThreshold: number;
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/sdwan_error_correction_profile#device SdwanErrorCorrectionProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/sdwan_error_correction_profile#folder SdwanErrorCorrectionProfile#folder}
  */
  readonly folder?: string;
  /**
  * Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/sdwan_error_correction_profile#mode SdwanErrorCorrectionProfile#mode}
  */
  readonly mode: SdwanErrorCorrectionProfileMode;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/sdwan_error_correction_profile#name SdwanErrorCorrectionProfile#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/sdwan_error_correction_profile#snippet SdwanErrorCorrectionProfile#snippet}
  */
  readonly snippet?: string;
}
export interface SdwanErrorCorrectionProfileModeForwardErrorCorrection {
  /**
  * Ratio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/sdwan_error_correction_profile#ratio SdwanErrorCorrectionProfile#ratio}
  */
  readonly ratio: string;
  /**
  * Recovery duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/sdwan_error_correction_profile#recovery_duration SdwanErrorCorrectionProfile#recovery_duration}
  */
  readonly recoveryDuration: number;
}

export function sdwanErrorCorrectionProfileModeForwardErrorCorrectionToTerraform(struct?: SdwanErrorCorrectionProfileModeForwardErrorCorrection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ratio: cdktf.stringToTerraform(struct!.ratio),
    recovery_duration: cdktf.numberToTerraform(struct!.recoveryDuration),
  }
}


export function sdwanErrorCorrectionProfileModeForwardErrorCorrectionToHclTerraform(struct?: SdwanErrorCorrectionProfileModeForwardErrorCorrection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ratio: {
      value: cdktf.stringToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_duration: {
      value: cdktf.numberToHclTerraform(struct!.recoveryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdwanErrorCorrectionProfileModeForwardErrorCorrectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SdwanErrorCorrectionProfileModeForwardErrorCorrection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    if (this._recoveryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryDuration = this._recoveryDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdwanErrorCorrectionProfileModeForwardErrorCorrection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ratio = undefined;
      this._recoveryDuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ratio = value.ratio;
      this._recoveryDuration = value.recoveryDuration;
    }
  }

  // ratio - computed: false, optional: false, required: true
  private _ratio?: string; 
  public get ratio() {
    return this.getStringAttribute('ratio');
  }
  public set ratio(value: string) {
    this._ratio = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }

  // recovery_duration - computed: false, optional: false, required: true
  private _recoveryDuration?: number; 
  public get recoveryDuration() {
    return this.getNumberAttribute('recovery_duration');
  }
  public set recoveryDuration(value: number) {
    this._recoveryDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryDurationInput() {
    return this._recoveryDuration;
  }
}
export interface SdwanErrorCorrectionProfileModePacketDuplication {
  /**
  * Recovery duration pd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/sdwan_error_correction_profile#recovery_duration_pd SdwanErrorCorrectionProfile#recovery_duration_pd}
  */
  readonly recoveryDurationPd: number;
}

export function sdwanErrorCorrectionProfileModePacketDuplicationToTerraform(struct?: SdwanErrorCorrectionProfileModePacketDuplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recovery_duration_pd: cdktf.numberToTerraform(struct!.recoveryDurationPd),
  }
}


export function sdwanErrorCorrectionProfileModePacketDuplicationToHclTerraform(struct?: SdwanErrorCorrectionProfileModePacketDuplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recovery_duration_pd: {
      value: cdktf.numberToHclTerraform(struct!.recoveryDurationPd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdwanErrorCorrectionProfileModePacketDuplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SdwanErrorCorrectionProfileModePacketDuplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recoveryDurationPd !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryDurationPd = this._recoveryDurationPd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdwanErrorCorrectionProfileModePacketDuplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recoveryDurationPd = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recoveryDurationPd = value.recoveryDurationPd;
    }
  }

  // recovery_duration_pd - computed: false, optional: false, required: true
  private _recoveryDurationPd?: number; 
  public get recoveryDurationPd() {
    return this.getNumberAttribute('recovery_duration_pd');
  }
  public set recoveryDurationPd(value: number) {
    this._recoveryDurationPd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryDurationPdInput() {
    return this._recoveryDurationPd;
  }
}
export interface SdwanErrorCorrectionProfileMode {
  /**
  * Forward error correction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/sdwan_error_correction_profile#forward_error_correction SdwanErrorCorrectionProfile#forward_error_correction}
  */
  readonly forwardErrorCorrection?: SdwanErrorCorrectionProfileModeForwardErrorCorrection;
  /**
  * Packet duplication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/sdwan_error_correction_profile#packet_duplication SdwanErrorCorrectionProfile#packet_duplication}
  */
  readonly packetDuplication?: SdwanErrorCorrectionProfileModePacketDuplication;
}

export function sdwanErrorCorrectionProfileModeToTerraform(struct?: SdwanErrorCorrectionProfileMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_error_correction: sdwanErrorCorrectionProfileModeForwardErrorCorrectionToTerraform(struct!.forwardErrorCorrection),
    packet_duplication: sdwanErrorCorrectionProfileModePacketDuplicationToTerraform(struct!.packetDuplication),
  }
}


export function sdwanErrorCorrectionProfileModeToHclTerraform(struct?: SdwanErrorCorrectionProfileMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_error_correction: {
      value: sdwanErrorCorrectionProfileModeForwardErrorCorrectionToHclTerraform(struct!.forwardErrorCorrection),
      isBlock: true,
      type: "struct",
      storageClassType: "SdwanErrorCorrectionProfileModeForwardErrorCorrection",
    },
    packet_duplication: {
      value: sdwanErrorCorrectionProfileModePacketDuplicationToHclTerraform(struct!.packetDuplication),
      isBlock: true,
      type: "struct",
      storageClassType: "SdwanErrorCorrectionProfileModePacketDuplication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdwanErrorCorrectionProfileModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SdwanErrorCorrectionProfileMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardErrorCorrection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardErrorCorrection = this._forwardErrorCorrection?.internalValue;
    }
    if (this._packetDuplication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetDuplication = this._packetDuplication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdwanErrorCorrectionProfileMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardErrorCorrection.internalValue = undefined;
      this._packetDuplication.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardErrorCorrection.internalValue = value.forwardErrorCorrection;
      this._packetDuplication.internalValue = value.packetDuplication;
    }
  }

  // forward_error_correction - computed: false, optional: true, required: false
  private _forwardErrorCorrection = new SdwanErrorCorrectionProfileModeForwardErrorCorrectionOutputReference(this, "forward_error_correction");
  public get forwardErrorCorrection() {
    return this._forwardErrorCorrection;
  }
  public putForwardErrorCorrection(value: SdwanErrorCorrectionProfileModeForwardErrorCorrection) {
    this._forwardErrorCorrection.internalValue = value;
  }
  public resetForwardErrorCorrection() {
    this._forwardErrorCorrection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardErrorCorrectionInput() {
    return this._forwardErrorCorrection.internalValue;
  }

  // packet_duplication - computed: false, optional: true, required: false
  private _packetDuplication = new SdwanErrorCorrectionProfileModePacketDuplicationOutputReference(this, "packet_duplication");
  public get packetDuplication() {
    return this._packetDuplication;
  }
  public putPacketDuplication(value: SdwanErrorCorrectionProfileModePacketDuplication) {
    this._packetDuplication.internalValue = value;
  }
  public resetPacketDuplication() {
    this._packetDuplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDuplicationInput() {
    return this._packetDuplication.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/sdwan_error_correction_profile scm_sdwan_error_correction_profile}
*/
export class SdwanErrorCorrectionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_sdwan_error_correction_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdwanErrorCorrectionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdwanErrorCorrectionProfile to import
  * @param importFromId The id of the existing SdwanErrorCorrectionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/sdwan_error_correction_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdwanErrorCorrectionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_sdwan_error_correction_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/sdwan_error_correction_profile scm_sdwan_error_correction_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdwanErrorCorrectionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SdwanErrorCorrectionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_sdwan_error_correction_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activationThreshold = config.activationThreshold;
    this._device = config.device;
    this._folder = config.folder;
    this._mode.internalValue = config.mode;
    this._name = config.name;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_threshold - computed: false, optional: false, required: true
  private _activationThreshold?: number; 
  public get activationThreshold() {
    return this.getNumberAttribute('activation_threshold');
  }
  public set activationThreshold(value: number) {
    this._activationThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activationThresholdInput() {
    return this._activationThreshold;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: false, optional: false, required: true
  private _mode = new SdwanErrorCorrectionProfileModeOutputReference(this, "mode");
  public get mode() {
    return this._mode;
  }
  public putMode(value: SdwanErrorCorrectionProfileMode) {
    this._mode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode.internalValue;
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

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activation_threshold: cdktf.numberToTerraform(this._activationThreshold),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      mode: sdwanErrorCorrectionProfileModeToTerraform(this._mode.internalValue),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_threshold: {
        value: cdktf.numberToHclTerraform(this._activationThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: sdwanErrorCorrectionProfileModeToHclTerraform(this._mode.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SdwanErrorCorrectionProfileMode",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
