// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_agent_endpoints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGenerativeAiAgentAgentEndpointsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_agent_endpoints#agent_id DataOciGenerativeAiAgentAgentEndpoints#agent_id}
  */
  readonly agentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_agent_endpoints#compartment_id DataOciGenerativeAiAgentAgentEndpoints#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_agent_endpoints#display_name DataOciGenerativeAiAgentAgentEndpoints#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_agent_endpoints#id DataOciGenerativeAiAgentAgentEndpoints#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_agent_endpoints#state DataOciGenerativeAiAgentAgentEndpoints#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_agent_endpoints#filter DataOciGenerativeAiAgentAgentEndpoints#filter}
  */
  readonly filter?: DataOciGenerativeAiAgentAgentEndpointsFilter[] | cdktf.IResolvable;
}
export interface DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig {
}

export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigToTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigToHclTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // should_enable_on_input - computed: true, optional: false, required: false
  public get shouldEnableOnInput() {
    return this.getBooleanAttribute('should_enable_on_input');
  }

  // should_enable_on_output - computed: true, optional: false, required: false
  public get shouldEnableOnOutput() {
    return this.getBooleanAttribute('should_enable_on_output');
  }
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference {
    return new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigContentModerationConfig {
}

export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigContentModerationConfigToTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigContentModerationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigContentModerationConfigToHclTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigContentModerationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigContentModerationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigContentModerationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigContentModerationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_guardrail_mode - computed: true, optional: false, required: false
  public get inputGuardrailMode() {
    return this.getStringAttribute('input_guardrail_mode');
  }

  // output_guardrail_mode - computed: true, optional: false, required: false
  public get outputGuardrailMode() {
    return this.getStringAttribute('output_guardrail_mode');
  }
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigContentModerationConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigContentModerationConfigOutputReference {
    return new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigContentModerationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPersonallyIdentifiableInformationConfig {
}

export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPersonallyIdentifiableInformationConfigToTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPersonallyIdentifiableInformationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPersonallyIdentifiableInformationConfigToHclTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPersonallyIdentifiableInformationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPersonallyIdentifiableInformationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPersonallyIdentifiableInformationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPersonallyIdentifiableInformationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_guardrail_mode - computed: true, optional: false, required: false
  public get inputGuardrailMode() {
    return this.getStringAttribute('input_guardrail_mode');
  }

  // output_guardrail_mode - computed: true, optional: false, required: false
  public get outputGuardrailMode() {
    return this.getStringAttribute('output_guardrail_mode');
  }
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPersonallyIdentifiableInformationConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPersonallyIdentifiableInformationConfigOutputReference {
    return new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPersonallyIdentifiableInformationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPromptInjectionConfig {
}

export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPromptInjectionConfigToTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPromptInjectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPromptInjectionConfigToHclTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPromptInjectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPromptInjectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPromptInjectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPromptInjectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_guardrail_mode - computed: true, optional: false, required: false
  public get inputGuardrailMode() {
    return this.getStringAttribute('input_guardrail_mode');
  }
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPromptInjectionConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPromptInjectionConfigOutputReference {
    return new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPromptInjectionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfig {
}

export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigToTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigToHclTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_moderation_config - computed: true, optional: false, required: false
  private _contentModerationConfig = new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigContentModerationConfigList(this, "content_moderation_config", false);
  public get contentModerationConfig() {
    return this._contentModerationConfig;
  }

  // personally_identifiable_information_config - computed: true, optional: false, required: false
  private _personallyIdentifiableInformationConfig = new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPersonallyIdentifiableInformationConfigList(this, "personally_identifiable_information_config", false);
  public get personallyIdentifiableInformationConfig() {
    return this._personallyIdentifiableInformationConfig;
  }

  // prompt_injection_config - computed: true, optional: false, required: false
  private _promptInjectionConfig = new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigPromptInjectionConfigList(this, "prompt_injection_config", false);
  public get promptInjectionConfig() {
    return this._promptInjectionConfig;
  }
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigOutputReference {
    return new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsHumanInputConfig {
}

export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsHumanInputConfigToTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsHumanInputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsHumanInputConfigToHclTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsHumanInputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsHumanInputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsHumanInputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsHumanInputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // should_enable_human_input - computed: true, optional: false, required: false
  public get shouldEnableHumanInput() {
    return this.getBooleanAttribute('should_enable_human_input');
  }
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsHumanInputConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsHumanInputConfigOutputReference {
    return new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsHumanInputConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigOutputLocation {
}

export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigOutputLocationToTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigOutputLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigOutputLocationToHclTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigOutputLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigOutputLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigOutputLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigOutputLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // output_location_type - computed: true, optional: false, required: false
  public get outputLocationType() {
    return this.getStringAttribute('output_location_type');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigOutputLocationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigOutputLocationOutputReference {
    return new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigOutputLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfig {
}

export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigToTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigToHclTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // output_location - computed: true, optional: false, required: false
  private _outputLocation = new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigOutputLocationList(this, "output_location", false);
  public get outputLocation() {
    return this._outputLocation;
  }

  // retention_period_in_minutes - computed: true, optional: false, required: false
  public get retentionPeriodInMinutes() {
    return this.getNumberAttribute('retention_period_in_minutes');
  }
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigOutputReference {
    return new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig {
}

export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigToTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigToHclTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_timeout_in_seconds - computed: true, optional: false, required: false
  public get idleTimeoutInSeconds() {
    return this.getNumberAttribute('idle_timeout_in_seconds');
  }
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference {
    return new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems {
}

export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsToTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsToHclTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // content_moderation_config - computed: true, optional: false, required: false
  private _contentModerationConfig = new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsContentModerationConfigList(this, "content_moderation_config", false);
  public get contentModerationConfig() {
    return this._contentModerationConfig;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // guardrail_config - computed: true, optional: false, required: false
  private _guardrailConfig = new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsGuardrailConfigList(this, "guardrail_config", false);
  public get guardrailConfig() {
    return this._guardrailConfig;
  }

  // human_input_config - computed: true, optional: false, required: false
  private _humanInputConfig = new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsHumanInputConfigList(this, "human_input_config", false);
  public get humanInputConfig() {
    return this._humanInputConfig;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // output_config - computed: true, optional: false, required: false
  private _outputConfig = new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputConfigList(this, "output_config", false);
  public get outputConfig() {
    return this._outputConfig;
  }

  // session_config - computed: true, optional: false, required: false
  private _sessionConfig = new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsSessionConfigList(this, "session_config", false);
  public get sessionConfig() {
    return this._sessionConfig;
  }

  // should_enable_citation - computed: true, optional: false, required: false
  public get shouldEnableCitation() {
    return this.getBooleanAttribute('should_enable_citation');
  }

  // should_enable_multi_language - computed: true, optional: false, required: false
  public get shouldEnableMultiLanguage() {
    return this.getBooleanAttribute('should_enable_multi_language');
  }

  // should_enable_session - computed: true, optional: false, required: false
  public get shouldEnableSession() {
    return this.getBooleanAttribute('should_enable_session');
  }

  // should_enable_trace - computed: true, optional: false, required: false
  public get shouldEnableTrace() {
    return this.getBooleanAttribute('should_enable_trace');
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
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference {
    return new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection {
}

export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionToTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionToHclTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference {
    return new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentAgentEndpointsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_agent_endpoints#name DataOciGenerativeAiAgentAgentEndpoints#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_agent_endpoints#regex DataOciGenerativeAiAgentAgentEndpoints#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_agent_endpoints#values DataOciGenerativeAiAgentAgentEndpoints#values}
  */
  readonly values: string[];
}

export function dataOciGenerativeAiAgentAgentEndpointsFilterToTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciGenerativeAiAgentAgentEndpointsFilterToHclTerraform(struct?: DataOciGenerativeAiAgentAgentEndpointsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciGenerativeAiAgentAgentEndpointsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentAgentEndpointsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciGenerativeAiAgentAgentEndpointsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciGenerativeAiAgentAgentEndpointsFilter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference {
    return new DataOciGenerativeAiAgentAgentEndpointsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_agent_endpoints oci_generative_ai_agent_agent_endpoints}
*/
export class DataOciGenerativeAiAgentAgentEndpoints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_generative_ai_agent_agent_endpoints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciGenerativeAiAgentAgentEndpoints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciGenerativeAiAgentAgentEndpoints to import
  * @param importFromId The id of the existing DataOciGenerativeAiAgentAgentEndpoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_agent_endpoints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciGenerativeAiAgentAgentEndpoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_generative_ai_agent_agent_endpoints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_agent_agent_endpoints oci_generative_ai_agent_agent_endpoints} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGenerativeAiAgentAgentEndpointsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciGenerativeAiAgentAgentEndpointsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_generative_ai_agent_agent_endpoints',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_endpoint_collection - computed: true, optional: false, required: false
  private _agentEndpointCollection = new DataOciGenerativeAiAgentAgentEndpointsAgentEndpointCollectionList(this, "agent_endpoint_collection", false);
  public get agentEndpointCollection() {
    return this._agentEndpointCollection;
  }

  // agent_id - computed: false, optional: true, required: false
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  public resetAgentId() {
    this._agentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // display_name - computed: false, optional: true, required: false
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciGenerativeAiAgentAgentEndpointsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciGenerativeAiAgentAgentEndpointsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_id: cdktf.stringToTerraform(this._agentId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciGenerativeAiAgentAgentEndpointsFilterToTerraform, true)(this._filter.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciGenerativeAiAgentAgentEndpointsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciGenerativeAiAgentAgentEndpointsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
