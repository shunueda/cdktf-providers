// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenerativeAiAgentAgentEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#agent_id GenerativeAiAgentAgentEndpoint#agent_id}
  */
  readonly agentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#compartment_id GenerativeAiAgentAgentEndpoint#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#defined_tags GenerativeAiAgentAgentEndpoint#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#description GenerativeAiAgentAgentEndpoint#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#display_name GenerativeAiAgentAgentEndpoint#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#freeform_tags GenerativeAiAgentAgentEndpoint#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#id GenerativeAiAgentAgentEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#metadata GenerativeAiAgentAgentEndpoint#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_citation GenerativeAiAgentAgentEndpoint#should_enable_citation}
  */
  readonly shouldEnableCitation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_multi_language GenerativeAiAgentAgentEndpoint#should_enable_multi_language}
  */
  readonly shouldEnableMultiLanguage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_session GenerativeAiAgentAgentEndpoint#should_enable_session}
  */
  readonly shouldEnableSession?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_trace GenerativeAiAgentAgentEndpoint#should_enable_trace}
  */
  readonly shouldEnableTrace?: boolean | cdktf.IResolvable;
  /**
  * content_moderation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#content_moderation_config GenerativeAiAgentAgentEndpoint#content_moderation_config}
  */
  readonly contentModerationConfig?: GenerativeAiAgentAgentEndpointContentModerationConfig;
  /**
  * guardrail_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#guardrail_config GenerativeAiAgentAgentEndpoint#guardrail_config}
  */
  readonly guardrailConfig?: GenerativeAiAgentAgentEndpointGuardrailConfig;
  /**
  * human_input_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#human_input_config GenerativeAiAgentAgentEndpoint#human_input_config}
  */
  readonly humanInputConfig?: GenerativeAiAgentAgentEndpointHumanInputConfig;
  /**
  * output_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#output_config GenerativeAiAgentAgentEndpoint#output_config}
  */
  readonly outputConfig?: GenerativeAiAgentAgentEndpointOutputConfig;
  /**
  * session_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#session_config GenerativeAiAgentAgentEndpoint#session_config}
  */
  readonly sessionConfig?: GenerativeAiAgentAgentEndpointSessionConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#timeouts GenerativeAiAgentAgentEndpoint#timeouts}
  */
  readonly timeouts?: GenerativeAiAgentAgentEndpointTimeouts;
}
export interface GenerativeAiAgentAgentEndpointContentModerationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_input GenerativeAiAgentAgentEndpoint#should_enable_on_input}
  */
  readonly shouldEnableOnInput?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_output GenerativeAiAgentAgentEndpoint#should_enable_on_output}
  */
  readonly shouldEnableOnOutput?: boolean | cdktf.IResolvable;
}

export function generativeAiAgentAgentEndpointContentModerationConfigToTerraform(struct?: GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference | GenerativeAiAgentAgentEndpointContentModerationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_enable_on_input: cdktf.booleanToTerraform(struct!.shouldEnableOnInput),
    should_enable_on_output: cdktf.booleanToTerraform(struct!.shouldEnableOnOutput),
  }
}


export function generativeAiAgentAgentEndpointContentModerationConfigToHclTerraform(struct?: GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference | GenerativeAiAgentAgentEndpointContentModerationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_enable_on_input: {
      value: cdktf.booleanToHclTerraform(struct!.shouldEnableOnInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_enable_on_output: {
      value: cdktf.booleanToHclTerraform(struct!.shouldEnableOnOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentAgentEndpointContentModerationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldEnableOnInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldEnableOnInput = this._shouldEnableOnInput;
    }
    if (this._shouldEnableOnOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldEnableOnOutput = this._shouldEnableOnOutput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentAgentEndpointContentModerationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shouldEnableOnInput = undefined;
      this._shouldEnableOnOutput = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shouldEnableOnInput = value.shouldEnableOnInput;
      this._shouldEnableOnOutput = value.shouldEnableOnOutput;
    }
  }

  // should_enable_on_input - computed: true, optional: true, required: false
  private _shouldEnableOnInput?: boolean | cdktf.IResolvable; 
  public get shouldEnableOnInput() {
    return this.getBooleanAttribute('should_enable_on_input');
  }
  public set shouldEnableOnInput(value: boolean | cdktf.IResolvable) {
    this._shouldEnableOnInput = value;
  }
  public resetShouldEnableOnInput() {
    this._shouldEnableOnInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableOnInputInput() {
    return this._shouldEnableOnInput;
  }

  // should_enable_on_output - computed: true, optional: true, required: false
  private _shouldEnableOnOutput?: boolean | cdktf.IResolvable; 
  public get shouldEnableOnOutput() {
    return this.getBooleanAttribute('should_enable_on_output');
  }
  public set shouldEnableOnOutput(value: boolean | cdktf.IResolvable) {
    this._shouldEnableOnOutput = value;
  }
  public resetShouldEnableOnOutput() {
    this._shouldEnableOnOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableOnOutputInput() {
    return this._shouldEnableOnOutput;
  }
}
export interface GenerativeAiAgentAgentEndpointGuardrailConfigContentModerationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#input_guardrail_mode GenerativeAiAgentAgentEndpoint#input_guardrail_mode}
  */
  readonly inputGuardrailMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#output_guardrail_mode GenerativeAiAgentAgentEndpoint#output_guardrail_mode}
  */
  readonly outputGuardrailMode?: string;
}

export function generativeAiAgentAgentEndpointGuardrailConfigContentModerationConfigToTerraform(struct?: GenerativeAiAgentAgentEndpointGuardrailConfigContentModerationConfigOutputReference | GenerativeAiAgentAgentEndpointGuardrailConfigContentModerationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_guardrail_mode: cdktf.stringToTerraform(struct!.inputGuardrailMode),
    output_guardrail_mode: cdktf.stringToTerraform(struct!.outputGuardrailMode),
  }
}


export function generativeAiAgentAgentEndpointGuardrailConfigContentModerationConfigToHclTerraform(struct?: GenerativeAiAgentAgentEndpointGuardrailConfigContentModerationConfigOutputReference | GenerativeAiAgentAgentEndpointGuardrailConfigContentModerationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_guardrail_mode: {
      value: cdktf.stringToHclTerraform(struct!.inputGuardrailMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_guardrail_mode: {
      value: cdktf.stringToHclTerraform(struct!.outputGuardrailMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentAgentEndpointGuardrailConfigContentModerationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentAgentEndpointGuardrailConfigContentModerationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputGuardrailMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputGuardrailMode = this._inputGuardrailMode;
    }
    if (this._outputGuardrailMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputGuardrailMode = this._outputGuardrailMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentAgentEndpointGuardrailConfigContentModerationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputGuardrailMode = undefined;
      this._outputGuardrailMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputGuardrailMode = value.inputGuardrailMode;
      this._outputGuardrailMode = value.outputGuardrailMode;
    }
  }

  // input_guardrail_mode - computed: true, optional: true, required: false
  private _inputGuardrailMode?: string; 
  public get inputGuardrailMode() {
    return this.getStringAttribute('input_guardrail_mode');
  }
  public set inputGuardrailMode(value: string) {
    this._inputGuardrailMode = value;
  }
  public resetInputGuardrailMode() {
    this._inputGuardrailMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputGuardrailModeInput() {
    return this._inputGuardrailMode;
  }

  // output_guardrail_mode - computed: true, optional: true, required: false
  private _outputGuardrailMode?: string; 
  public get outputGuardrailMode() {
    return this.getStringAttribute('output_guardrail_mode');
  }
  public set outputGuardrailMode(value: string) {
    this._outputGuardrailMode = value;
  }
  public resetOutputGuardrailMode() {
    this._outputGuardrailMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputGuardrailModeInput() {
    return this._outputGuardrailMode;
  }
}
export interface GenerativeAiAgentAgentEndpointGuardrailConfigPersonallyIdentifiableInformationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#input_guardrail_mode GenerativeAiAgentAgentEndpoint#input_guardrail_mode}
  */
  readonly inputGuardrailMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#output_guardrail_mode GenerativeAiAgentAgentEndpoint#output_guardrail_mode}
  */
  readonly outputGuardrailMode?: string;
}

export function generativeAiAgentAgentEndpointGuardrailConfigPersonallyIdentifiableInformationConfigToTerraform(struct?: GenerativeAiAgentAgentEndpointGuardrailConfigPersonallyIdentifiableInformationConfigOutputReference | GenerativeAiAgentAgentEndpointGuardrailConfigPersonallyIdentifiableInformationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_guardrail_mode: cdktf.stringToTerraform(struct!.inputGuardrailMode),
    output_guardrail_mode: cdktf.stringToTerraform(struct!.outputGuardrailMode),
  }
}


export function generativeAiAgentAgentEndpointGuardrailConfigPersonallyIdentifiableInformationConfigToHclTerraform(struct?: GenerativeAiAgentAgentEndpointGuardrailConfigPersonallyIdentifiableInformationConfigOutputReference | GenerativeAiAgentAgentEndpointGuardrailConfigPersonallyIdentifiableInformationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_guardrail_mode: {
      value: cdktf.stringToHclTerraform(struct!.inputGuardrailMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_guardrail_mode: {
      value: cdktf.stringToHclTerraform(struct!.outputGuardrailMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentAgentEndpointGuardrailConfigPersonallyIdentifiableInformationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentAgentEndpointGuardrailConfigPersonallyIdentifiableInformationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputGuardrailMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputGuardrailMode = this._inputGuardrailMode;
    }
    if (this._outputGuardrailMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputGuardrailMode = this._outputGuardrailMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentAgentEndpointGuardrailConfigPersonallyIdentifiableInformationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputGuardrailMode = undefined;
      this._outputGuardrailMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputGuardrailMode = value.inputGuardrailMode;
      this._outputGuardrailMode = value.outputGuardrailMode;
    }
  }

  // input_guardrail_mode - computed: true, optional: true, required: false
  private _inputGuardrailMode?: string; 
  public get inputGuardrailMode() {
    return this.getStringAttribute('input_guardrail_mode');
  }
  public set inputGuardrailMode(value: string) {
    this._inputGuardrailMode = value;
  }
  public resetInputGuardrailMode() {
    this._inputGuardrailMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputGuardrailModeInput() {
    return this._inputGuardrailMode;
  }

  // output_guardrail_mode - computed: true, optional: true, required: false
  private _outputGuardrailMode?: string; 
  public get outputGuardrailMode() {
    return this.getStringAttribute('output_guardrail_mode');
  }
  public set outputGuardrailMode(value: string) {
    this._outputGuardrailMode = value;
  }
  public resetOutputGuardrailMode() {
    this._outputGuardrailMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputGuardrailModeInput() {
    return this._outputGuardrailMode;
  }
}
export interface GenerativeAiAgentAgentEndpointGuardrailConfigPromptInjectionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#input_guardrail_mode GenerativeAiAgentAgentEndpoint#input_guardrail_mode}
  */
  readonly inputGuardrailMode?: string;
}

export function generativeAiAgentAgentEndpointGuardrailConfigPromptInjectionConfigToTerraform(struct?: GenerativeAiAgentAgentEndpointGuardrailConfigPromptInjectionConfigOutputReference | GenerativeAiAgentAgentEndpointGuardrailConfigPromptInjectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_guardrail_mode: cdktf.stringToTerraform(struct!.inputGuardrailMode),
  }
}


export function generativeAiAgentAgentEndpointGuardrailConfigPromptInjectionConfigToHclTerraform(struct?: GenerativeAiAgentAgentEndpointGuardrailConfigPromptInjectionConfigOutputReference | GenerativeAiAgentAgentEndpointGuardrailConfigPromptInjectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_guardrail_mode: {
      value: cdktf.stringToHclTerraform(struct!.inputGuardrailMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentAgentEndpointGuardrailConfigPromptInjectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentAgentEndpointGuardrailConfigPromptInjectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputGuardrailMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputGuardrailMode = this._inputGuardrailMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentAgentEndpointGuardrailConfigPromptInjectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputGuardrailMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputGuardrailMode = value.inputGuardrailMode;
    }
  }

  // input_guardrail_mode - computed: true, optional: true, required: false
  private _inputGuardrailMode?: string; 
  public get inputGuardrailMode() {
    return this.getStringAttribute('input_guardrail_mode');
  }
  public set inputGuardrailMode(value: string) {
    this._inputGuardrailMode = value;
  }
  public resetInputGuardrailMode() {
    this._inputGuardrailMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputGuardrailModeInput() {
    return this._inputGuardrailMode;
  }
}
export interface GenerativeAiAgentAgentEndpointGuardrailConfig {
  /**
  * content_moderation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#content_moderation_config GenerativeAiAgentAgentEndpoint#content_moderation_config}
  */
  readonly contentModerationConfig?: GenerativeAiAgentAgentEndpointGuardrailConfigContentModerationConfig;
  /**
  * personally_identifiable_information_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#personally_identifiable_information_config GenerativeAiAgentAgentEndpoint#personally_identifiable_information_config}
  */
  readonly personallyIdentifiableInformationConfig?: GenerativeAiAgentAgentEndpointGuardrailConfigPersonallyIdentifiableInformationConfig;
  /**
  * prompt_injection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#prompt_injection_config GenerativeAiAgentAgentEndpoint#prompt_injection_config}
  */
  readonly promptInjectionConfig?: GenerativeAiAgentAgentEndpointGuardrailConfigPromptInjectionConfig;
}

export function generativeAiAgentAgentEndpointGuardrailConfigToTerraform(struct?: GenerativeAiAgentAgentEndpointGuardrailConfigOutputReference | GenerativeAiAgentAgentEndpointGuardrailConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_moderation_config: generativeAiAgentAgentEndpointGuardrailConfigContentModerationConfigToTerraform(struct!.contentModerationConfig),
    personally_identifiable_information_config: generativeAiAgentAgentEndpointGuardrailConfigPersonallyIdentifiableInformationConfigToTerraform(struct!.personallyIdentifiableInformationConfig),
    prompt_injection_config: generativeAiAgentAgentEndpointGuardrailConfigPromptInjectionConfigToTerraform(struct!.promptInjectionConfig),
  }
}


export function generativeAiAgentAgentEndpointGuardrailConfigToHclTerraform(struct?: GenerativeAiAgentAgentEndpointGuardrailConfigOutputReference | GenerativeAiAgentAgentEndpointGuardrailConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_moderation_config: {
      value: generativeAiAgentAgentEndpointGuardrailConfigContentModerationConfigToHclTerraform(struct!.contentModerationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentAgentEndpointGuardrailConfigContentModerationConfigList",
    },
    personally_identifiable_information_config: {
      value: generativeAiAgentAgentEndpointGuardrailConfigPersonallyIdentifiableInformationConfigToHclTerraform(struct!.personallyIdentifiableInformationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentAgentEndpointGuardrailConfigPersonallyIdentifiableInformationConfigList",
    },
    prompt_injection_config: {
      value: generativeAiAgentAgentEndpointGuardrailConfigPromptInjectionConfigToHclTerraform(struct!.promptInjectionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentAgentEndpointGuardrailConfigPromptInjectionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentAgentEndpointGuardrailConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentAgentEndpointGuardrailConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentModerationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentModerationConfig = this._contentModerationConfig?.internalValue;
    }
    if (this._personallyIdentifiableInformationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.personallyIdentifiableInformationConfig = this._personallyIdentifiableInformationConfig?.internalValue;
    }
    if (this._promptInjectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptInjectionConfig = this._promptInjectionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentAgentEndpointGuardrailConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentModerationConfig.internalValue = undefined;
      this._personallyIdentifiableInformationConfig.internalValue = undefined;
      this._promptInjectionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentModerationConfig.internalValue = value.contentModerationConfig;
      this._personallyIdentifiableInformationConfig.internalValue = value.personallyIdentifiableInformationConfig;
      this._promptInjectionConfig.internalValue = value.promptInjectionConfig;
    }
  }

  // content_moderation_config - computed: false, optional: true, required: false
  private _contentModerationConfig = new GenerativeAiAgentAgentEndpointGuardrailConfigContentModerationConfigOutputReference(this, "content_moderation_config");
  public get contentModerationConfig() {
    return this._contentModerationConfig;
  }
  public putContentModerationConfig(value: GenerativeAiAgentAgentEndpointGuardrailConfigContentModerationConfig) {
    this._contentModerationConfig.internalValue = value;
  }
  public resetContentModerationConfig() {
    this._contentModerationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentModerationConfigInput() {
    return this._contentModerationConfig.internalValue;
  }

  // personally_identifiable_information_config - computed: false, optional: true, required: false
  private _personallyIdentifiableInformationConfig = new GenerativeAiAgentAgentEndpointGuardrailConfigPersonallyIdentifiableInformationConfigOutputReference(this, "personally_identifiable_information_config");
  public get personallyIdentifiableInformationConfig() {
    return this._personallyIdentifiableInformationConfig;
  }
  public putPersonallyIdentifiableInformationConfig(value: GenerativeAiAgentAgentEndpointGuardrailConfigPersonallyIdentifiableInformationConfig) {
    this._personallyIdentifiableInformationConfig.internalValue = value;
  }
  public resetPersonallyIdentifiableInformationConfig() {
    this._personallyIdentifiableInformationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personallyIdentifiableInformationConfigInput() {
    return this._personallyIdentifiableInformationConfig.internalValue;
  }

  // prompt_injection_config - computed: false, optional: true, required: false
  private _promptInjectionConfig = new GenerativeAiAgentAgentEndpointGuardrailConfigPromptInjectionConfigOutputReference(this, "prompt_injection_config");
  public get promptInjectionConfig() {
    return this._promptInjectionConfig;
  }
  public putPromptInjectionConfig(value: GenerativeAiAgentAgentEndpointGuardrailConfigPromptInjectionConfig) {
    this._promptInjectionConfig.internalValue = value;
  }
  public resetPromptInjectionConfig() {
    this._promptInjectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInjectionConfigInput() {
    return this._promptInjectionConfig.internalValue;
  }
}
export interface GenerativeAiAgentAgentEndpointHumanInputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_human_input GenerativeAiAgentAgentEndpoint#should_enable_human_input}
  */
  readonly shouldEnableHumanInput: boolean | cdktf.IResolvable;
}

export function generativeAiAgentAgentEndpointHumanInputConfigToTerraform(struct?: GenerativeAiAgentAgentEndpointHumanInputConfigOutputReference | GenerativeAiAgentAgentEndpointHumanInputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_enable_human_input: cdktf.booleanToTerraform(struct!.shouldEnableHumanInput),
  }
}


export function generativeAiAgentAgentEndpointHumanInputConfigToHclTerraform(struct?: GenerativeAiAgentAgentEndpointHumanInputConfigOutputReference | GenerativeAiAgentAgentEndpointHumanInputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_enable_human_input: {
      value: cdktf.booleanToHclTerraform(struct!.shouldEnableHumanInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentAgentEndpointHumanInputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentAgentEndpointHumanInputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldEnableHumanInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldEnableHumanInput = this._shouldEnableHumanInput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentAgentEndpointHumanInputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shouldEnableHumanInput = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shouldEnableHumanInput = value.shouldEnableHumanInput;
    }
  }

  // should_enable_human_input - computed: false, optional: false, required: true
  private _shouldEnableHumanInput?: boolean | cdktf.IResolvable; 
  public get shouldEnableHumanInput() {
    return this.getBooleanAttribute('should_enable_human_input');
  }
  public set shouldEnableHumanInput(value: boolean | cdktf.IResolvable) {
    this._shouldEnableHumanInput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableHumanInputInput() {
    return this._shouldEnableHumanInput;
  }
}
export interface GenerativeAiAgentAgentEndpointOutputConfigOutputLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#bucket GenerativeAiAgentAgentEndpoint#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#namespace GenerativeAiAgentAgentEndpoint#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#output_location_type GenerativeAiAgentAgentEndpoint#output_location_type}
  */
  readonly outputLocationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#prefix GenerativeAiAgentAgentEndpoint#prefix}
  */
  readonly prefix?: string;
}

export function generativeAiAgentAgentEndpointOutputConfigOutputLocationToTerraform(struct?: GenerativeAiAgentAgentEndpointOutputConfigOutputLocationOutputReference | GenerativeAiAgentAgentEndpointOutputConfigOutputLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    output_location_type: cdktf.stringToTerraform(struct!.outputLocationType),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function generativeAiAgentAgentEndpointOutputConfigOutputLocationToHclTerraform(struct?: GenerativeAiAgentAgentEndpointOutputConfigOutputLocationOutputReference | GenerativeAiAgentAgentEndpointOutputConfigOutputLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_location_type: {
      value: cdktf.stringToHclTerraform(struct!.outputLocationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentAgentEndpointOutputConfigOutputLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentAgentEndpointOutputConfigOutputLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._outputLocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputLocationType = this._outputLocationType;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentAgentEndpointOutputConfigOutputLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._namespace = undefined;
      this._outputLocationType = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._namespace = value.namespace;
      this._outputLocationType = value.outputLocationType;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // output_location_type - computed: false, optional: false, required: true
  private _outputLocationType?: string; 
  public get outputLocationType() {
    return this.getStringAttribute('output_location_type');
  }
  public set outputLocationType(value: string) {
    this._outputLocationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationTypeInput() {
    return this._outputLocationType;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface GenerativeAiAgentAgentEndpointOutputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#retention_period_in_minutes GenerativeAiAgentAgentEndpoint#retention_period_in_minutes}
  */
  readonly retentionPeriodInMinutes?: number;
  /**
  * output_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#output_location GenerativeAiAgentAgentEndpoint#output_location}
  */
  readonly outputLocation: GenerativeAiAgentAgentEndpointOutputConfigOutputLocation;
}

export function generativeAiAgentAgentEndpointOutputConfigToTerraform(struct?: GenerativeAiAgentAgentEndpointOutputConfigOutputReference | GenerativeAiAgentAgentEndpointOutputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_period_in_minutes: cdktf.numberToTerraform(struct!.retentionPeriodInMinutes),
    output_location: generativeAiAgentAgentEndpointOutputConfigOutputLocationToTerraform(struct!.outputLocation),
  }
}


export function generativeAiAgentAgentEndpointOutputConfigToHclTerraform(struct?: GenerativeAiAgentAgentEndpointOutputConfigOutputReference | GenerativeAiAgentAgentEndpointOutputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.retentionPeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_location: {
      value: generativeAiAgentAgentEndpointOutputConfigOutputLocationToHclTerraform(struct!.outputLocation),
      isBlock: true,
      type: "list",
      storageClassType: "GenerativeAiAgentAgentEndpointOutputConfigOutputLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentAgentEndpointOutputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentAgentEndpointOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionPeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriodInMinutes = this._retentionPeriodInMinutes;
    }
    if (this._outputLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputLocation = this._outputLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentAgentEndpointOutputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionPeriodInMinutes = undefined;
      this._outputLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionPeriodInMinutes = value.retentionPeriodInMinutes;
      this._outputLocation.internalValue = value.outputLocation;
    }
  }

  // retention_period_in_minutes - computed: true, optional: true, required: false
  private _retentionPeriodInMinutes?: number; 
  public get retentionPeriodInMinutes() {
    return this.getNumberAttribute('retention_period_in_minutes');
  }
  public set retentionPeriodInMinutes(value: number) {
    this._retentionPeriodInMinutes = value;
  }
  public resetRetentionPeriodInMinutes() {
    this._retentionPeriodInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInMinutesInput() {
    return this._retentionPeriodInMinutes;
  }

  // output_location - computed: false, optional: false, required: true
  private _outputLocation = new GenerativeAiAgentAgentEndpointOutputConfigOutputLocationOutputReference(this, "output_location");
  public get outputLocation() {
    return this._outputLocation;
  }
  public putOutputLocation(value: GenerativeAiAgentAgentEndpointOutputConfigOutputLocation) {
    this._outputLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation.internalValue;
  }
}
export interface GenerativeAiAgentAgentEndpointSessionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#idle_timeout_in_seconds GenerativeAiAgentAgentEndpoint#idle_timeout_in_seconds}
  */
  readonly idleTimeoutInSeconds?: number;
}

export function generativeAiAgentAgentEndpointSessionConfigToTerraform(struct?: GenerativeAiAgentAgentEndpointSessionConfigOutputReference | GenerativeAiAgentAgentEndpointSessionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout_in_seconds: cdktf.numberToTerraform(struct!.idleTimeoutInSeconds),
  }
}


export function generativeAiAgentAgentEndpointSessionConfigToHclTerraform(struct?: GenerativeAiAgentAgentEndpointSessionConfigOutputReference | GenerativeAiAgentAgentEndpointSessionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentAgentEndpointSessionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GenerativeAiAgentAgentEndpointSessionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInSeconds = this._idleTimeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentAgentEndpointSessionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeoutInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeoutInSeconds = value.idleTimeoutInSeconds;
    }
  }

  // idle_timeout_in_seconds - computed: true, optional: true, required: false
  private _idleTimeoutInSeconds?: number; 
  public get idleTimeoutInSeconds() {
    return this.getNumberAttribute('idle_timeout_in_seconds');
  }
  public set idleTimeoutInSeconds(value: number) {
    this._idleTimeoutInSeconds = value;
  }
  public resetIdleTimeoutInSeconds() {
    this._idleTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInSecondsInput() {
    return this._idleTimeoutInSeconds;
  }
}
export interface GenerativeAiAgentAgentEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#create GenerativeAiAgentAgentEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#delete GenerativeAiAgentAgentEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#update GenerativeAiAgentAgentEndpoint#update}
  */
  readonly update?: string;
}

export function generativeAiAgentAgentEndpointTimeoutsToTerraform(struct?: GenerativeAiAgentAgentEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function generativeAiAgentAgentEndpointTimeoutsToHclTerraform(struct?: GenerativeAiAgentAgentEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GenerativeAiAgentAgentEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GenerativeAiAgentAgentEndpointTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GenerativeAiAgentAgentEndpointTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint oci_generative_ai_agent_agent_endpoint}
*/
export class GenerativeAiAgentAgentEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_generative_ai_agent_agent_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenerativeAiAgentAgentEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenerativeAiAgentAgentEndpoint to import
  * @param importFromId The id of the existing GenerativeAiAgentAgentEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenerativeAiAgentAgentEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_generative_ai_agent_agent_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/generative_ai_agent_agent_endpoint oci_generative_ai_agent_agent_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenerativeAiAgentAgentEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: GenerativeAiAgentAgentEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_generative_ai_agent_agent_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentId = config.agentId;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._metadata = config.metadata;
    this._shouldEnableCitation = config.shouldEnableCitation;
    this._shouldEnableMultiLanguage = config.shouldEnableMultiLanguage;
    this._shouldEnableSession = config.shouldEnableSession;
    this._shouldEnableTrace = config.shouldEnableTrace;
    this._contentModerationConfig.internalValue = config.contentModerationConfig;
    this._guardrailConfig.internalValue = config.guardrailConfig;
    this._humanInputConfig.internalValue = config.humanInputConfig;
    this._outputConfig.internalValue = config.outputConfig;
    this._sessionConfig.internalValue = config.sessionConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // should_enable_citation - computed: true, optional: true, required: false
  private _shouldEnableCitation?: boolean | cdktf.IResolvable; 
  public get shouldEnableCitation() {
    return this.getBooleanAttribute('should_enable_citation');
  }
  public set shouldEnableCitation(value: boolean | cdktf.IResolvable) {
    this._shouldEnableCitation = value;
  }
  public resetShouldEnableCitation() {
    this._shouldEnableCitation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableCitationInput() {
    return this._shouldEnableCitation;
  }

  // should_enable_multi_language - computed: true, optional: true, required: false
  private _shouldEnableMultiLanguage?: boolean | cdktf.IResolvable; 
  public get shouldEnableMultiLanguage() {
    return this.getBooleanAttribute('should_enable_multi_language');
  }
  public set shouldEnableMultiLanguage(value: boolean | cdktf.IResolvable) {
    this._shouldEnableMultiLanguage = value;
  }
  public resetShouldEnableMultiLanguage() {
    this._shouldEnableMultiLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableMultiLanguageInput() {
    return this._shouldEnableMultiLanguage;
  }

  // should_enable_session - computed: true, optional: true, required: false
  private _shouldEnableSession?: boolean | cdktf.IResolvable; 
  public get shouldEnableSession() {
    return this.getBooleanAttribute('should_enable_session');
  }
  public set shouldEnableSession(value: boolean | cdktf.IResolvable) {
    this._shouldEnableSession = value;
  }
  public resetShouldEnableSession() {
    this._shouldEnableSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableSessionInput() {
    return this._shouldEnableSession;
  }

  // should_enable_trace - computed: true, optional: true, required: false
  private _shouldEnableTrace?: boolean | cdktf.IResolvable; 
  public get shouldEnableTrace() {
    return this.getBooleanAttribute('should_enable_trace');
  }
  public set shouldEnableTrace(value: boolean | cdktf.IResolvable) {
    this._shouldEnableTrace = value;
  }
  public resetShouldEnableTrace() {
    this._shouldEnableTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldEnableTraceInput() {
    return this._shouldEnableTrace;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // content_moderation_config - computed: false, optional: true, required: false
  private _contentModerationConfig = new GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference(this, "content_moderation_config");
  public get contentModerationConfig() {
    return this._contentModerationConfig;
  }
  public putContentModerationConfig(value: GenerativeAiAgentAgentEndpointContentModerationConfig) {
    this._contentModerationConfig.internalValue = value;
  }
  public resetContentModerationConfig() {
    this._contentModerationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentModerationConfigInput() {
    return this._contentModerationConfig.internalValue;
  }

  // guardrail_config - computed: false, optional: true, required: false
  private _guardrailConfig = new GenerativeAiAgentAgentEndpointGuardrailConfigOutputReference(this, "guardrail_config");
  public get guardrailConfig() {
    return this._guardrailConfig;
  }
  public putGuardrailConfig(value: GenerativeAiAgentAgentEndpointGuardrailConfig) {
    this._guardrailConfig.internalValue = value;
  }
  public resetGuardrailConfig() {
    this._guardrailConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailConfigInput() {
    return this._guardrailConfig.internalValue;
  }

  // human_input_config - computed: false, optional: true, required: false
  private _humanInputConfig = new GenerativeAiAgentAgentEndpointHumanInputConfigOutputReference(this, "human_input_config");
  public get humanInputConfig() {
    return this._humanInputConfig;
  }
  public putHumanInputConfig(value: GenerativeAiAgentAgentEndpointHumanInputConfig) {
    this._humanInputConfig.internalValue = value;
  }
  public resetHumanInputConfig() {
    this._humanInputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanInputConfigInput() {
    return this._humanInputConfig.internalValue;
  }

  // output_config - computed: false, optional: true, required: false
  private _outputConfig = new GenerativeAiAgentAgentEndpointOutputConfigOutputReference(this, "output_config");
  public get outputConfig() {
    return this._outputConfig;
  }
  public putOutputConfig(value: GenerativeAiAgentAgentEndpointOutputConfig) {
    this._outputConfig.internalValue = value;
  }
  public resetOutputConfig() {
    this._outputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigInput() {
    return this._outputConfig.internalValue;
  }

  // session_config - computed: false, optional: true, required: false
  private _sessionConfig = new GenerativeAiAgentAgentEndpointSessionConfigOutputReference(this, "session_config");
  public get sessionConfig() {
    return this._sessionConfig;
  }
  public putSessionConfig(value: GenerativeAiAgentAgentEndpointSessionConfig) {
    this._sessionConfig.internalValue = value;
  }
  public resetSessionConfig() {
    this._sessionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionConfigInput() {
    return this._sessionConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GenerativeAiAgentAgentEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GenerativeAiAgentAgentEndpointTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_id: cdktf.stringToTerraform(this._agentId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      should_enable_citation: cdktf.booleanToTerraform(this._shouldEnableCitation),
      should_enable_multi_language: cdktf.booleanToTerraform(this._shouldEnableMultiLanguage),
      should_enable_session: cdktf.booleanToTerraform(this._shouldEnableSession),
      should_enable_trace: cdktf.booleanToTerraform(this._shouldEnableTrace),
      content_moderation_config: generativeAiAgentAgentEndpointContentModerationConfigToTerraform(this._contentModerationConfig.internalValue),
      guardrail_config: generativeAiAgentAgentEndpointGuardrailConfigToTerraform(this._guardrailConfig.internalValue),
      human_input_config: generativeAiAgentAgentEndpointHumanInputConfigToTerraform(this._humanInputConfig.internalValue),
      output_config: generativeAiAgentAgentEndpointOutputConfigToTerraform(this._outputConfig.internalValue),
      session_config: generativeAiAgentAgentEndpointSessionConfigToTerraform(this._sessionConfig.internalValue),
      timeouts: generativeAiAgentAgentEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      should_enable_citation: {
        value: cdktf.booleanToHclTerraform(this._shouldEnableCitation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_enable_multi_language: {
        value: cdktf.booleanToHclTerraform(this._shouldEnableMultiLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_enable_session: {
        value: cdktf.booleanToHclTerraform(this._shouldEnableSession),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_enable_trace: {
        value: cdktf.booleanToHclTerraform(this._shouldEnableTrace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      content_moderation_config: {
        value: generativeAiAgentAgentEndpointContentModerationConfigToHclTerraform(this._contentModerationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenerativeAiAgentAgentEndpointContentModerationConfigList",
      },
      guardrail_config: {
        value: generativeAiAgentAgentEndpointGuardrailConfigToHclTerraform(this._guardrailConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenerativeAiAgentAgentEndpointGuardrailConfigList",
      },
      human_input_config: {
        value: generativeAiAgentAgentEndpointHumanInputConfigToHclTerraform(this._humanInputConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenerativeAiAgentAgentEndpointHumanInputConfigList",
      },
      output_config: {
        value: generativeAiAgentAgentEndpointOutputConfigToHclTerraform(this._outputConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenerativeAiAgentAgentEndpointOutputConfigList",
      },
      session_config: {
        value: generativeAiAgentAgentEndpointSessionConfigToHclTerraform(this._sessionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GenerativeAiAgentAgentEndpointSessionConfigList",
      },
      timeouts: {
        value: generativeAiAgentAgentEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GenerativeAiAgentAgentEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
