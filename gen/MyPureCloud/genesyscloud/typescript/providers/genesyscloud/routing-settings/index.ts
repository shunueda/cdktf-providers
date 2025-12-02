// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_settings#id RoutingSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Reset agent score when agent presence changes from off-queue to on-queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_settings#reset_agent_on_presence_change RoutingSettings#reset_agent_on_presence_change}
  */
  readonly resetAgentOnPresenceChange?: boolean | cdktf.IResolvable;
  /**
  * contactcenter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_settings#contactcenter RoutingSettings#contactcenter}
  */
  readonly contactcenter?: RoutingSettingsContactcenter;
  /**
  * transcription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_settings#transcription RoutingSettings#transcription}
  */
  readonly transcription?: RoutingSettingsTranscription;
}
export interface RoutingSettingsContactcenter {
  /**
  * Strip skills from transfer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_settings#remove_skills_from_blind_transfer RoutingSettings#remove_skills_from_blind_transfer}
  */
  readonly removeSkillsFromBlindTransfer?: boolean | cdktf.IResolvable;
}

export function routingSettingsContactcenterToTerraform(struct?: RoutingSettingsContactcenterOutputReference | RoutingSettingsContactcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remove_skills_from_blind_transfer: cdktf.booleanToTerraform(struct!.removeSkillsFromBlindTransfer),
  }
}


export function routingSettingsContactcenterToHclTerraform(struct?: RoutingSettingsContactcenterOutputReference | RoutingSettingsContactcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remove_skills_from_blind_transfer: {
      value: cdktf.booleanToHclTerraform(struct!.removeSkillsFromBlindTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingSettingsContactcenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingSettingsContactcenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._removeSkillsFromBlindTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeSkillsFromBlindTransfer = this._removeSkillsFromBlindTransfer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingSettingsContactcenter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._removeSkillsFromBlindTransfer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._removeSkillsFromBlindTransfer = value.removeSkillsFromBlindTransfer;
    }
  }

  // remove_skills_from_blind_transfer - computed: false, optional: true, required: false
  private _removeSkillsFromBlindTransfer?: boolean | cdktf.IResolvable; 
  public get removeSkillsFromBlindTransfer() {
    return this.getBooleanAttribute('remove_skills_from_blind_transfer');
  }
  public set removeSkillsFromBlindTransfer(value: boolean | cdktf.IResolvable) {
    this._removeSkillsFromBlindTransfer = value;
  }
  public resetRemoveSkillsFromBlindTransfer() {
    this._removeSkillsFromBlindTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeSkillsFromBlindTransferInput() {
    return this._removeSkillsFromBlindTransfer;
  }
}
export interface RoutingSettingsTranscription {
  /**
  * Setting to enable/disable content search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_settings#content_search_enabled RoutingSettings#content_search_enabled}
  */
  readonly contentSearchEnabled?: boolean | cdktf.IResolvable;
  /**
  * Boolean flag indicating whether low latency transcription via Notification API is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_settings#low_latency_transcription_enabled RoutingSettings#low_latency_transcription_enabled}
  */
  readonly lowLatencyTranscriptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Setting to enable/disable PCI DSS Redaction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_settings#pci_dss_redaction_enabled RoutingSettings#pci_dss_redaction_enabled}
  */
  readonly pciDssRedactionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Setting to enable/disable PII Redaction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_settings#pii_redaction_enabled RoutingSettings#pii_redaction_enabled}
  */
  readonly piiRedactionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Setting to enable/disable transcription capability.Valid values: Disabled, EnabledGlobally, EnabledQueueFlow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_settings#transcription RoutingSettings#transcription}
  */
  readonly transcription?: string;
  /**
  * Configure confidence threshold. The possible values are from 1 to 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_settings#transcription_confidence_threshold RoutingSettings#transcription_confidence_threshold}
  */
  readonly transcriptionConfidenceThreshold?: number;
}

export function routingSettingsTranscriptionToTerraform(struct?: RoutingSettingsTranscriptionOutputReference | RoutingSettingsTranscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_search_enabled: cdktf.booleanToTerraform(struct!.contentSearchEnabled),
    low_latency_transcription_enabled: cdktf.booleanToTerraform(struct!.lowLatencyTranscriptionEnabled),
    pci_dss_redaction_enabled: cdktf.booleanToTerraform(struct!.pciDssRedactionEnabled),
    pii_redaction_enabled: cdktf.booleanToTerraform(struct!.piiRedactionEnabled),
    transcription: cdktf.stringToTerraform(struct!.transcription),
    transcription_confidence_threshold: cdktf.numberToTerraform(struct!.transcriptionConfidenceThreshold),
  }
}


export function routingSettingsTranscriptionToHclTerraform(struct?: RoutingSettingsTranscriptionOutputReference | RoutingSettingsTranscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_search_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.contentSearchEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_latency_transcription_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.lowLatencyTranscriptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pci_dss_redaction_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pciDssRedactionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pii_redaction_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.piiRedactionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transcription: {
      value: cdktf.stringToHclTerraform(struct!.transcription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transcription_confidence_threshold: {
      value: cdktf.numberToHclTerraform(struct!.transcriptionConfidenceThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingSettingsTranscriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingSettingsTranscription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentSearchEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSearchEnabled = this._contentSearchEnabled;
    }
    if (this._lowLatencyTranscriptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowLatencyTranscriptionEnabled = this._lowLatencyTranscriptionEnabled;
    }
    if (this._pciDssRedactionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pciDssRedactionEnabled = this._pciDssRedactionEnabled;
    }
    if (this._piiRedactionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiRedactionEnabled = this._piiRedactionEnabled;
    }
    if (this._transcription !== undefined) {
      hasAnyValues = true;
      internalValueResult.transcription = this._transcription;
    }
    if (this._transcriptionConfidenceThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.transcriptionConfidenceThreshold = this._transcriptionConfidenceThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingSettingsTranscription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentSearchEnabled = undefined;
      this._lowLatencyTranscriptionEnabled = undefined;
      this._pciDssRedactionEnabled = undefined;
      this._piiRedactionEnabled = undefined;
      this._transcription = undefined;
      this._transcriptionConfidenceThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentSearchEnabled = value.contentSearchEnabled;
      this._lowLatencyTranscriptionEnabled = value.lowLatencyTranscriptionEnabled;
      this._pciDssRedactionEnabled = value.pciDssRedactionEnabled;
      this._piiRedactionEnabled = value.piiRedactionEnabled;
      this._transcription = value.transcription;
      this._transcriptionConfidenceThreshold = value.transcriptionConfidenceThreshold;
    }
  }

  // content_search_enabled - computed: false, optional: true, required: false
  private _contentSearchEnabled?: boolean | cdktf.IResolvable; 
  public get contentSearchEnabled() {
    return this.getBooleanAttribute('content_search_enabled');
  }
  public set contentSearchEnabled(value: boolean | cdktf.IResolvable) {
    this._contentSearchEnabled = value;
  }
  public resetContentSearchEnabled() {
    this._contentSearchEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSearchEnabledInput() {
    return this._contentSearchEnabled;
  }

  // low_latency_transcription_enabled - computed: false, optional: true, required: false
  private _lowLatencyTranscriptionEnabled?: boolean | cdktf.IResolvable; 
  public get lowLatencyTranscriptionEnabled() {
    return this.getBooleanAttribute('low_latency_transcription_enabled');
  }
  public set lowLatencyTranscriptionEnabled(value: boolean | cdktf.IResolvable) {
    this._lowLatencyTranscriptionEnabled = value;
  }
  public resetLowLatencyTranscriptionEnabled() {
    this._lowLatencyTranscriptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowLatencyTranscriptionEnabledInput() {
    return this._lowLatencyTranscriptionEnabled;
  }

  // pci_dss_redaction_enabled - computed: false, optional: true, required: false
  private _pciDssRedactionEnabled?: boolean | cdktf.IResolvable; 
  public get pciDssRedactionEnabled() {
    return this.getBooleanAttribute('pci_dss_redaction_enabled');
  }
  public set pciDssRedactionEnabled(value: boolean | cdktf.IResolvable) {
    this._pciDssRedactionEnabled = value;
  }
  public resetPciDssRedactionEnabled() {
    this._pciDssRedactionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciDssRedactionEnabledInput() {
    return this._pciDssRedactionEnabled;
  }

  // pii_redaction_enabled - computed: false, optional: true, required: false
  private _piiRedactionEnabled?: boolean | cdktf.IResolvable; 
  public get piiRedactionEnabled() {
    return this.getBooleanAttribute('pii_redaction_enabled');
  }
  public set piiRedactionEnabled(value: boolean | cdktf.IResolvable) {
    this._piiRedactionEnabled = value;
  }
  public resetPiiRedactionEnabled() {
    this._piiRedactionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiRedactionEnabledInput() {
    return this._piiRedactionEnabled;
  }

  // transcription - computed: false, optional: true, required: false
  private _transcription?: string; 
  public get transcription() {
    return this.getStringAttribute('transcription');
  }
  public set transcription(value: string) {
    this._transcription = value;
  }
  public resetTranscription() {
    this._transcription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcriptionInput() {
    return this._transcription;
  }

  // transcription_confidence_threshold - computed: false, optional: true, required: false
  private _transcriptionConfidenceThreshold?: number; 
  public get transcriptionConfidenceThreshold() {
    return this.getNumberAttribute('transcription_confidence_threshold');
  }
  public set transcriptionConfidenceThreshold(value: number) {
    this._transcriptionConfidenceThreshold = value;
  }
  public resetTranscriptionConfidenceThreshold() {
    this._transcriptionConfidenceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcriptionConfidenceThresholdInput() {
    return this._transcriptionConfidenceThreshold;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_settings genesyscloud_routing_settings}
*/
export class RoutingSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_routing_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingSettings to import
  * @param importFromId The id of the existing RoutingSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_routing_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_settings genesyscloud_routing_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RoutingSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_routing_settings',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
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
    this._resetAgentOnPresenceChange = config.resetAgentOnPresenceChange;
    this._contactcenter.internalValue = config.contactcenter;
    this._transcription.internalValue = config.transcription;
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

  // reset_agent_on_presence_change - computed: true, optional: true, required: false
  private _resetAgentOnPresenceChange?: boolean | cdktf.IResolvable; 
  public get resetAgentOnPresenceChange() {
    return this.getBooleanAttribute('reset_agent_on_presence_change');
  }
  public set resetAgentOnPresenceChange(value: boolean | cdktf.IResolvable) {
    this._resetAgentOnPresenceChange = value;
  }
  public resetResetAgentOnPresenceChange() {
    this._resetAgentOnPresenceChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetAgentOnPresenceChangeInput() {
    return this._resetAgentOnPresenceChange;
  }

  // contactcenter - computed: false, optional: true, required: false
  private _contactcenter = new RoutingSettingsContactcenterOutputReference(this, "contactcenter");
  public get contactcenter() {
    return this._contactcenter;
  }
  public putContactcenter(value: RoutingSettingsContactcenter) {
    this._contactcenter.internalValue = value;
  }
  public resetContactcenter() {
    this._contactcenter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactcenterInput() {
    return this._contactcenter.internalValue;
  }

  // transcription - computed: false, optional: true, required: false
  private _transcription = new RoutingSettingsTranscriptionOutputReference(this, "transcription");
  public get transcription() {
    return this._transcription;
  }
  public putTranscription(value: RoutingSettingsTranscription) {
    this._transcription.internalValue = value;
  }
  public resetTranscription() {
    this._transcription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcriptionInput() {
    return this._transcription.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      reset_agent_on_presence_change: cdktf.booleanToTerraform(this._resetAgentOnPresenceChange),
      contactcenter: routingSettingsContactcenterToTerraform(this._contactcenter.internalValue),
      transcription: routingSettingsTranscriptionToTerraform(this._transcription.internalValue),
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
      reset_agent_on_presence_change: {
        value: cdktf.booleanToHclTerraform(this._resetAgentOnPresenceChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contactcenter: {
        value: routingSettingsContactcenterToHclTerraform(this._contactcenter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingSettingsContactcenterList",
      },
      transcription: {
        value: routingSettingsTranscriptionToHclTerraform(this._transcription.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingSettingsTranscriptionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
