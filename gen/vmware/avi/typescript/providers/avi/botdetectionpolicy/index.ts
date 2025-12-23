// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotdetectionpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#description Botdetectionpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#id Botdetectionpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#name Botdetectionpolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#system_bot_mapping_ref Botdetectionpolicy#system_bot_mapping_ref}
  */
  readonly systemBotMappingRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#system_consolidator_ref Botdetectionpolicy#system_consolidator_ref}
  */
  readonly systemConsolidatorRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#tenant_ref Botdetectionpolicy#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#user_bot_mapping_ref Botdetectionpolicy#user_bot_mapping_ref}
  */
  readonly userBotMappingRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#user_consolidator_ref Botdetectionpolicy#user_consolidator_ref}
  */
  readonly userConsolidatorRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#uuid Botdetectionpolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * allow_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#allow_list Botdetectionpolicy#allow_list}
  */
  readonly allowList?: BotdetectionpolicyAllowListStruct[] | cdktf.IResolvable;
  /**
  * client_behavior_detector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#client_behavior_detector Botdetectionpolicy#client_behavior_detector}
  */
  readonly clientBehaviorDetector?: BotdetectionpolicyClientBehaviorDetector[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#configpb_attributes Botdetectionpolicy#configpb_attributes}
  */
  readonly configpbAttributes?: BotdetectionpolicyConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * ip_location_detector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#ip_location_detector Botdetectionpolicy#ip_location_detector}
  */
  readonly ipLocationDetector: BotdetectionpolicyIpLocationDetector[] | cdktf.IResolvable;
  /**
  * ip_reputation_detector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#ip_reputation_detector Botdetectionpolicy#ip_reputation_detector}
  */
  readonly ipReputationDetector: BotdetectionpolicyIpReputationDetector[] | cdktf.IResolvable;
  /**
  * user_agent_detector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#user_agent_detector Botdetectionpolicy#user_agent_detector}
  */
  readonly userAgentDetector: BotdetectionpolicyUserAgentDetector[] | cdktf.IResolvable;
}
export interface BotdetectionpolicyAllowListRulesConditionBotDetectionResultClassifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#type Botdetectionpolicy#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#user_defined_type Botdetectionpolicy#user_defined_type}
  */
  readonly userDefinedType?: string;
}

export function botdetectionpolicyAllowListRulesConditionBotDetectionResultClassificationsToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionBotDetectionResultClassifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_defined_type: cdktf.stringToTerraform(struct!.userDefinedType),
  }
}


export function botdetectionpolicyAllowListRulesConditionBotDetectionResultClassificationsToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionBotDetectionResultClassifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_defined_type: {
      value: cdktf.stringToHclTerraform(struct!.userDefinedType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionBotDetectionResultClassificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionBotDetectionResultClassifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userDefinedType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedType = this._userDefinedType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionBotDetectionResultClassifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._userDefinedType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._userDefinedType = value.userDefinedType;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_defined_type - computed: true, optional: true, required: false
  private _userDefinedType?: string; 
  public get userDefinedType() {
    return this.getStringAttribute('user_defined_type');
  }
  public set userDefinedType(value: string) {
    this._userDefinedType = value;
  }
  public resetUserDefinedType() {
    this._userDefinedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedTypeInput() {
    return this._userDefinedType;
  }
}

export class BotdetectionpolicyAllowListRulesConditionBotDetectionResultClassificationsList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionBotDetectionResultClassifications[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionBotDetectionResultClassificationsOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionBotDetectionResultClassificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionBotDetectionResult {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_operation Botdetectionpolicy#match_operation}
  */
  readonly matchOperation: string;
  /**
  * classifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#classifications Botdetectionpolicy#classifications}
  */
  readonly classifications?: BotdetectionpolicyAllowListRulesConditionBotDetectionResultClassifications[] | cdktf.IResolvable;
}

export function botdetectionpolicyAllowListRulesConditionBotDetectionResultToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionBotDetectionResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    classifications: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionBotDetectionResultClassificationsToTerraform, true)(struct!.classifications),
  }
}


export function botdetectionpolicyAllowListRulesConditionBotDetectionResultToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionBotDetectionResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_operation: {
      value: cdktf.stringToHclTerraform(struct!.matchOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    classifications: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionBotDetectionResultClassificationsToHclTerraform, true)(struct!.classifications),
      isBlock: true,
      type: "list",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionBotDetectionResultClassificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionBotDetectionResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionBotDetectionResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperation = this._matchOperation;
    }
    if (this._classifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifications = this._classifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionBotDetectionResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchOperation = undefined;
      this._classifications.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchOperation = value.matchOperation;
      this._classifications.internalValue = value.classifications;
    }
  }

  // match_operation - computed: false, optional: false, required: true
  private _matchOperation?: string; 
  public get matchOperation() {
    return this.getStringAttribute('match_operation');
  }
  public set matchOperation(value: string) {
    this._matchOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperationInput() {
    return this._matchOperation;
  }

  // classifications - computed: false, optional: true, required: false
  private _classifications = new BotdetectionpolicyAllowListRulesConditionBotDetectionResultClassificationsList(this, "classifications", false);
  public get classifications() {
    return this._classifications;
  }
  public putClassifications(value: BotdetectionpolicyAllowListRulesConditionBotDetectionResultClassifications[] | cdktf.IResolvable) {
    this._classifications.internalValue = value;
  }
  public resetClassifications() {
    this._classifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationsInput() {
    return this._classifications.internalValue;
  }
}

export class BotdetectionpolicyAllowListRulesConditionBotDetectionResultList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionBotDetectionResult[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionBotDetectionResultOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionBotDetectionResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionClientIpAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#addr Botdetectionpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#type Botdetectionpolicy#type}
  */
  readonly type: string;
}

export function botdetectionpolicyAllowListRulesConditionClientIpAddrsToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionClientIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function botdetectionpolicyAllowListRulesConditionClientIpAddrsToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionClientIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionClientIpAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionClientIpAddrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionClientIpAddrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class BotdetectionpolicyAllowListRulesConditionClientIpAddrsList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionClientIpAddrs[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionClientIpAddrsOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionClientIpAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#addr Botdetectionpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#type Botdetectionpolicy#type}
  */
  readonly type: string;
}

export function botdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddrToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function botdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddrToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class BotdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddrOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionClientIpPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#mask Botdetectionpolicy#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#ip_addr Botdetectionpolicy#ip_addr}
  */
  readonly ipAddr: BotdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddr[] | cdktf.IResolvable;
}

export function botdetectionpolicyAllowListRulesConditionClientIpPrefixesToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionClientIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function botdetectionpolicyAllowListRulesConditionClientIpPrefixesToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionClientIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionClientIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionClientIpPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionClientIpPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new BotdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: BotdetectionpolicyAllowListRulesConditionClientIpPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class BotdetectionpolicyAllowListRulesConditionClientIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionClientIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionClientIpPrefixesOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionClientIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionClientIpRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#addr Botdetectionpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#type Botdetectionpolicy#type}
  */
  readonly type: string;
}

export function botdetectionpolicyAllowListRulesConditionClientIpRangesBeginToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionClientIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function botdetectionpolicyAllowListRulesConditionClientIpRangesBeginToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionClientIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionClientIpRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionClientIpRangesBegin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionClientIpRangesBegin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class BotdetectionpolicyAllowListRulesConditionClientIpRangesBeginList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionClientIpRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionClientIpRangesBeginOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionClientIpRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionClientIpRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#addr Botdetectionpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#type Botdetectionpolicy#type}
  */
  readonly type: string;
}

export function botdetectionpolicyAllowListRulesConditionClientIpRangesEndToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionClientIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function botdetectionpolicyAllowListRulesConditionClientIpRangesEndToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionClientIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionClientIpRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionClientIpRangesEnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionClientIpRangesEnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class BotdetectionpolicyAllowListRulesConditionClientIpRangesEndList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionClientIpRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionClientIpRangesEndOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionClientIpRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionClientIpRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#begin Botdetectionpolicy#begin}
  */
  readonly begin: BotdetectionpolicyAllowListRulesConditionClientIpRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#end Botdetectionpolicy#end}
  */
  readonly end: BotdetectionpolicyAllowListRulesConditionClientIpRangesEnd[] | cdktf.IResolvable;
}

export function botdetectionpolicyAllowListRulesConditionClientIpRangesToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionClientIpRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionClientIpRangesEndToTerraform, true)(struct!.end),
  }
}


export function botdetectionpolicyAllowListRulesConditionClientIpRangesToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionClientIpRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionClientIpRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionClientIpRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionClientIpRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionClientIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionClientIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin?.internalValue;
    }
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionClientIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin.internalValue = undefined;
      this._end.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin.internalValue = value.begin;
      this._end.internalValue = value.end;
    }
  }

  // begin - computed: false, optional: false, required: true
  private _begin = new BotdetectionpolicyAllowListRulesConditionClientIpRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: BotdetectionpolicyAllowListRulesConditionClientIpRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new BotdetectionpolicyAllowListRulesConditionClientIpRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: BotdetectionpolicyAllowListRulesConditionClientIpRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class BotdetectionpolicyAllowListRulesConditionClientIpRangesList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionClientIpRanges[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionClientIpRangesOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionClientIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionClientIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#group_refs Botdetectionpolicy#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_criteria Botdetectionpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#addrs Botdetectionpolicy#addrs}
  */
  readonly addrs?: BotdetectionpolicyAllowListRulesConditionClientIpAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#prefixes Botdetectionpolicy#prefixes}
  */
  readonly prefixes?: BotdetectionpolicyAllowListRulesConditionClientIpPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#ranges Botdetectionpolicy#ranges}
  */
  readonly ranges?: BotdetectionpolicyAllowListRulesConditionClientIpRanges[] | cdktf.IResolvable;
}

export function botdetectionpolicyAllowListRulesConditionClientIpToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionClientIpAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionClientIpPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionClientIpRangesToTerraform, true)(struct!.ranges),
  }
}


export function botdetectionpolicyAllowListRulesConditionClientIpToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addrs: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionClientIpAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionClientIpAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionClientIpPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionClientIpPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionClientIpRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionClientIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionClientIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionClientIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRefs = this._groupRefs;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._addrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs?.internalValue;
    }
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionClientIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupRefs = undefined;
      this._matchCriteria = undefined;
      this._addrs.internalValue = undefined;
      this._prefixes.internalValue = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupRefs = value.groupRefs;
      this._matchCriteria = value.matchCriteria;
      this._addrs.internalValue = value.addrs;
      this._prefixes.internalValue = value.prefixes;
      this._ranges.internalValue = value.ranges;
    }
  }

  // group_refs - computed: false, optional: true, required: false
  private _groupRefs?: string[]; 
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }
  public set groupRefs(value: string[]) {
    this._groupRefs = value;
  }
  public resetGroupRefs() {
    this._groupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRefsInput() {
    return this._groupRefs;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs = new BotdetectionpolicyAllowListRulesConditionClientIpAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: BotdetectionpolicyAllowListRulesConditionClientIpAddrs[] | cdktf.IResolvable) {
    this._addrs.internalValue = value;
  }
  public resetAddrs() {
    this._addrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs.internalValue;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new BotdetectionpolicyAllowListRulesConditionClientIpPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: BotdetectionpolicyAllowListRulesConditionClientIpPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new BotdetectionpolicyAllowListRulesConditionClientIpRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: BotdetectionpolicyAllowListRulesConditionClientIpRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class BotdetectionpolicyAllowListRulesConditionClientIpList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionClientIp[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionClientIpOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionClientIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_case Botdetectionpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_criteria Botdetectionpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#name Botdetectionpolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#value Botdetectionpolicy#value}
  */
  readonly value?: string;
}

export function botdetectionpolicyAllowListRulesConditionCookieToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function botdetectionpolicyAllowListRulesConditionCookieToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BotdetectionpolicyAllowListRulesConditionCookieList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionCookie[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionCookieOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionGeoMatches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#attribute Botdetectionpolicy#attribute}
  */
  readonly attribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_operation Botdetectionpolicy#match_operation}
  */
  readonly matchOperation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#values Botdetectionpolicy#values}
  */
  readonly values: string[];
}

export function botdetectionpolicyAllowListRulesConditionGeoMatchesToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionGeoMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function botdetectionpolicyAllowListRulesConditionGeoMatchesToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionGeoMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_operation: {
      value: cdktf.stringToHclTerraform(struct!.matchOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class BotdetectionpolicyAllowListRulesConditionGeoMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionGeoMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._matchOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperation = this._matchOperation;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionGeoMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._matchOperation = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._matchOperation = value.matchOperation;
      this._values = value.values;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // match_operation - computed: false, optional: false, required: true
  private _matchOperation?: string; 
  public get matchOperation() {
    return this.getStringAttribute('match_operation');
  }
  public set matchOperation(value: string) {
    this._matchOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperationInput() {
    return this._matchOperation;
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

export class BotdetectionpolicyAllowListRulesConditionGeoMatchesList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionGeoMatches[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionGeoMatchesOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionGeoMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionHdrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#hdr Botdetectionpolicy#hdr}
  */
  readonly hdr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_case Botdetectionpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_criteria Botdetectionpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#string_group_refs Botdetectionpolicy#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#value Botdetectionpolicy#value}
  */
  readonly value?: string[];
}

export function botdetectionpolicyAllowListRulesConditionHdrsToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionHdrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hdr: cdktf.stringToTerraform(struct!.hdr),
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function botdetectionpolicyAllowListRulesConditionHdrsToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionHdrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hdr: {
      value: cdktf.stringToHclTerraform(struct!.hdr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionHdrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionHdrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdr = this._hdr;
    }
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionHdrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hdr = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._stringGroupRefs = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hdr = value.hdr;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._stringGroupRefs = value.stringGroupRefs;
      this._value = value.value;
    }
  }

  // hdr - computed: false, optional: false, required: true
  private _hdr?: string; 
  public get hdr() {
    return this.getStringAttribute('hdr');
  }
  public set hdr(value: string) {
    this._hdr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrInput() {
    return this._hdr;
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BotdetectionpolicyAllowListRulesConditionHdrsList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionHdrs[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionHdrsOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionHdrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionHostHdr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_case Botdetectionpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_criteria Botdetectionpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#value Botdetectionpolicy#value}
  */
  readonly value?: string[];
}

export function botdetectionpolicyAllowListRulesConditionHostHdrToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionHostHdr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function botdetectionpolicyAllowListRulesConditionHostHdrToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionHostHdr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionHostHdrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionHostHdr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionHostHdr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._value = value.value;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BotdetectionpolicyAllowListRulesConditionHostHdrList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionHostHdr[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionHostHdrOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionHostHdrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionIpReputationType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_operation Botdetectionpolicy#match_operation}
  */
  readonly matchOperation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#reputation_types Botdetectionpolicy#reputation_types}
  */
  readonly reputationTypes: string[];
}

export function botdetectionpolicyAllowListRulesConditionIpReputationTypeToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionIpReputationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    reputation_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reputationTypes),
  }
}


export function botdetectionpolicyAllowListRulesConditionIpReputationTypeToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionIpReputationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_operation: {
      value: cdktf.stringToHclTerraform(struct!.matchOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reputation_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reputationTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionIpReputationTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionIpReputationType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperation = this._matchOperation;
    }
    if (this._reputationTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.reputationTypes = this._reputationTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionIpReputationType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchOperation = undefined;
      this._reputationTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchOperation = value.matchOperation;
      this._reputationTypes = value.reputationTypes;
    }
  }

  // match_operation - computed: false, optional: false, required: true
  private _matchOperation?: string; 
  public get matchOperation() {
    return this.getStringAttribute('match_operation');
  }
  public set matchOperation(value: string) {
    this._matchOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperationInput() {
    return this._matchOperation;
  }

  // reputation_types - computed: false, optional: false, required: true
  private _reputationTypes?: string[]; 
  public get reputationTypes() {
    return this.getListAttribute('reputation_types');
  }
  public set reputationTypes(value: string[]) {
    this._reputationTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationTypesInput() {
    return this._reputationTypes;
  }
}

export class BotdetectionpolicyAllowListRulesConditionIpReputationTypeList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionIpReputationType[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionIpReputationTypeOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionIpReputationTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_criteria Botdetectionpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#methods Botdetectionpolicy#methods}
  */
  readonly methods: string[];
}

export function botdetectionpolicyAllowListRulesConditionMethodToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function botdetectionpolicyAllowListRulesConditionMethodToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._methods = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._methods = value.methods;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // methods - computed: false, optional: false, required: true
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}

export class BotdetectionpolicyAllowListRulesConditionMethodList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionMethod[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionMethodOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_case Botdetectionpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_criteria Botdetectionpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_decoded_string Botdetectionpolicy#match_decoded_string}
  */
  readonly matchDecodedString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_str Botdetectionpolicy#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#string_group_refs Botdetectionpolicy#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function botdetectionpolicyAllowListRulesConditionPathToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    match_decoded_string: cdktf.stringToTerraform(struct!.matchDecodedString),
    match_str: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchStr),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function botdetectionpolicyAllowListRulesConditionPathToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_decoded_string: {
      value: cdktf.stringToHclTerraform(struct!.matchDecodedString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_str: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchStr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._matchDecodedString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDecodedString = this._matchDecodedString;
    }
    if (this._matchStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStr = this._matchStr;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._matchDecodedString = undefined;
      this._matchStr = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._matchDecodedString = value.matchDecodedString;
      this._matchStr = value.matchStr;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // match_decoded_string - computed: false, optional: true, required: false
  private _matchDecodedString?: string; 
  public get matchDecodedString() {
    return this.getStringAttribute('match_decoded_string');
  }
  public set matchDecodedString(value: string) {
    this._matchDecodedString = value;
  }
  public resetMatchDecodedString() {
    this._matchDecodedString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDecodedStringInput() {
    return this._matchDecodedString;
  }

  // match_str - computed: false, optional: true, required: false
  private _matchStr?: string[]; 
  public get matchStr() {
    return this.getListAttribute('match_str');
  }
  public set matchStr(value: string[]) {
    this._matchStr = value;
  }
  public resetMatchStr() {
    this._matchStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStrInput() {
    return this._matchStr;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }
}

export class BotdetectionpolicyAllowListRulesConditionPathList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionPath[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionPathOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_criteria Botdetectionpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#protocols Botdetectionpolicy#protocols}
  */
  readonly protocols: string;
}

export function botdetectionpolicyAllowListRulesConditionProtocolToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    protocols: cdktf.stringToTerraform(struct!.protocols),
  }
}


export function botdetectionpolicyAllowListRulesConditionProtocolToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocols: {
      value: cdktf.stringToHclTerraform(struct!.protocols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionProtocolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._protocols = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._protocols = value.protocols;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // protocols - computed: false, optional: false, required: true
  private _protocols?: string; 
  public get protocols() {
    return this.getStringAttribute('protocols');
  }
  public set protocols(value: string) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }
}

export class BotdetectionpolicyAllowListRulesConditionProtocolList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionProtocol[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionProtocolOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_case Botdetectionpolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_criteria Botdetectionpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_decoded_string Botdetectionpolicy#match_decoded_string}
  */
  readonly matchDecodedString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_str Botdetectionpolicy#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#string_group_refs Botdetectionpolicy#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function botdetectionpolicyAllowListRulesConditionQueryToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    match_decoded_string: cdktf.stringToTerraform(struct!.matchDecodedString),
    match_str: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchStr),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function botdetectionpolicyAllowListRulesConditionQueryToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_decoded_string: {
      value: cdktf.stringToHclTerraform(struct!.matchDecodedString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_str: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchStr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._matchDecodedString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDecodedString = this._matchDecodedString;
    }
    if (this._matchStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStr = this._matchStr;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._matchDecodedString = undefined;
      this._matchStr = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._matchDecodedString = value.matchDecodedString;
      this._matchStr = value.matchStr;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // match_decoded_string - computed: false, optional: true, required: false
  private _matchDecodedString?: string; 
  public get matchDecodedString() {
    return this.getStringAttribute('match_decoded_string');
  }
  public set matchDecodedString(value: string) {
    this._matchDecodedString = value;
  }
  public resetMatchDecodedString() {
    this._matchDecodedString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDecodedStringInput() {
    return this._matchDecodedString;
  }

  // match_str - computed: false, optional: true, required: false
  private _matchStr?: string[]; 
  public get matchStr() {
    return this.getListAttribute('match_str');
  }
  public set matchStr(value: string[]) {
    this._matchStr = value;
  }
  public resetMatchStr() {
    this._matchStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStrInput() {
    return this._matchStr;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }
}

export class BotdetectionpolicyAllowListRulesConditionQueryList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionQuery[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionQueryOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionSourceIpAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#addr Botdetectionpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#type Botdetectionpolicy#type}
  */
  readonly type: string;
}

export function botdetectionpolicyAllowListRulesConditionSourceIpAddrsToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionSourceIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function botdetectionpolicyAllowListRulesConditionSourceIpAddrsToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionSourceIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionSourceIpAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionSourceIpAddrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionSourceIpAddrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class BotdetectionpolicyAllowListRulesConditionSourceIpAddrsList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionSourceIpAddrs[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionSourceIpAddrsOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionSourceIpAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#addr Botdetectionpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#type Botdetectionpolicy#type}
  */
  readonly type: string;
}

export function botdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddrToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function botdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddrToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddrOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionSourceIpPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#mask Botdetectionpolicy#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#ip_addr Botdetectionpolicy#ip_addr}
  */
  readonly ipAddr: BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddr[] | cdktf.IResolvable;
}

export function botdetectionpolicyAllowListRulesConditionSourceIpPrefixesToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionSourceIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function botdetectionpolicyAllowListRulesConditionSourceIpPrefixesToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionSourceIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionSourceIpPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionSourceIpPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionSourceIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionSourceIpRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#addr Botdetectionpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#type Botdetectionpolicy#type}
  */
  readonly type: string;
}

export function botdetectionpolicyAllowListRulesConditionSourceIpRangesBeginToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionSourceIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function botdetectionpolicyAllowListRulesConditionSourceIpRangesBeginToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionSourceIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionSourceIpRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionSourceIpRangesBegin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionSourceIpRangesBegin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class BotdetectionpolicyAllowListRulesConditionSourceIpRangesBeginList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionSourceIpRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionSourceIpRangesBeginOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionSourceIpRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionSourceIpRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#addr Botdetectionpolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#type Botdetectionpolicy#type}
  */
  readonly type: string;
}

export function botdetectionpolicyAllowListRulesConditionSourceIpRangesEndToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionSourceIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function botdetectionpolicyAllowListRulesConditionSourceIpRangesEndToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionSourceIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionSourceIpRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionSourceIpRangesEnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionSourceIpRangesEnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class BotdetectionpolicyAllowListRulesConditionSourceIpRangesEndList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionSourceIpRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionSourceIpRangesEndOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionSourceIpRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionSourceIpRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#begin Botdetectionpolicy#begin}
  */
  readonly begin: BotdetectionpolicyAllowListRulesConditionSourceIpRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#end Botdetectionpolicy#end}
  */
  readonly end: BotdetectionpolicyAllowListRulesConditionSourceIpRangesEnd[] | cdktf.IResolvable;
}

export function botdetectionpolicyAllowListRulesConditionSourceIpRangesToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionSourceIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionSourceIpRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionSourceIpRangesEndToTerraform, true)(struct!.end),
  }
}


export function botdetectionpolicyAllowListRulesConditionSourceIpRangesToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionSourceIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionSourceIpRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionSourceIpRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionSourceIpRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionSourceIpRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionSourceIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionSourceIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin?.internalValue;
    }
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionSourceIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin.internalValue = undefined;
      this._end.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin.internalValue = value.begin;
      this._end.internalValue = value.end;
    }
  }

  // begin - computed: false, optional: false, required: true
  private _begin = new BotdetectionpolicyAllowListRulesConditionSourceIpRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: BotdetectionpolicyAllowListRulesConditionSourceIpRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new BotdetectionpolicyAllowListRulesConditionSourceIpRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: BotdetectionpolicyAllowListRulesConditionSourceIpRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class BotdetectionpolicyAllowListRulesConditionSourceIpRangesList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionSourceIpRanges[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionSourceIpRangesOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionSourceIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionSourceIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#group_refs Botdetectionpolicy#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_criteria Botdetectionpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#addrs Botdetectionpolicy#addrs}
  */
  readonly addrs?: BotdetectionpolicyAllowListRulesConditionSourceIpAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#prefixes Botdetectionpolicy#prefixes}
  */
  readonly prefixes?: BotdetectionpolicyAllowListRulesConditionSourceIpPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#ranges Botdetectionpolicy#ranges}
  */
  readonly ranges?: BotdetectionpolicyAllowListRulesConditionSourceIpRanges[] | cdktf.IResolvable;
}

export function botdetectionpolicyAllowListRulesConditionSourceIpToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionSourceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionSourceIpAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionSourceIpPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionSourceIpRangesToTerraform, true)(struct!.ranges),
  }
}


export function botdetectionpolicyAllowListRulesConditionSourceIpToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionSourceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addrs: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionSourceIpAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionSourceIpAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionSourceIpPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionSourceIpRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionSourceIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionSourceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionSourceIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRefs = this._groupRefs;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._addrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs?.internalValue;
    }
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionSourceIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupRefs = undefined;
      this._matchCriteria = undefined;
      this._addrs.internalValue = undefined;
      this._prefixes.internalValue = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupRefs = value.groupRefs;
      this._matchCriteria = value.matchCriteria;
      this._addrs.internalValue = value.addrs;
      this._prefixes.internalValue = value.prefixes;
      this._ranges.internalValue = value.ranges;
    }
  }

  // group_refs - computed: false, optional: true, required: false
  private _groupRefs?: string[]; 
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }
  public set groupRefs(value: string[]) {
    this._groupRefs = value;
  }
  public resetGroupRefs() {
    this._groupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRefsInput() {
    return this._groupRefs;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs = new BotdetectionpolicyAllowListRulesConditionSourceIpAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: BotdetectionpolicyAllowListRulesConditionSourceIpAddrs[] | cdktf.IResolvable) {
    this._addrs.internalValue = value;
  }
  public resetAddrs() {
    this._addrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs.internalValue;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new BotdetectionpolicyAllowListRulesConditionSourceIpPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: BotdetectionpolicyAllowListRulesConditionSourceIpPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new BotdetectionpolicyAllowListRulesConditionSourceIpRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: BotdetectionpolicyAllowListRulesConditionSourceIpRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class BotdetectionpolicyAllowListRulesConditionSourceIpList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionSourceIp[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionSourceIpOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionSourceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionTlsFingerprintMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#fingerprints Botdetectionpolicy#fingerprints}
  */
  readonly fingerprints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_operation Botdetectionpolicy#match_operation}
  */
  readonly matchOperation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#string_group_refs Botdetectionpolicy#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function botdetectionpolicyAllowListRulesConditionTlsFingerprintMatchToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionTlsFingerprintMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fingerprints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fingerprints),
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function botdetectionpolicyAllowListRulesConditionTlsFingerprintMatchToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionTlsFingerprintMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fingerprints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fingerprints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_operation: {
      value: cdktf.stringToHclTerraform(struct!.matchOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionTlsFingerprintMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionTlsFingerprintMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fingerprints !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprints = this._fingerprints;
    }
    if (this._matchOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperation = this._matchOperation;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionTlsFingerprintMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fingerprints = undefined;
      this._matchOperation = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fingerprints = value.fingerprints;
      this._matchOperation = value.matchOperation;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // fingerprints - computed: false, optional: true, required: false
  private _fingerprints?: string[]; 
  public get fingerprints() {
    return this.getListAttribute('fingerprints');
  }
  public set fingerprints(value: string[]) {
    this._fingerprints = value;
  }
  public resetFingerprints() {
    this._fingerprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintsInput() {
    return this._fingerprints;
  }

  // match_operation - computed: false, optional: false, required: true
  private _matchOperation?: string; 
  public get matchOperation() {
    return this.getStringAttribute('match_operation');
  }
  public set matchOperation(value: string) {
    this._matchOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperationInput() {
    return this._matchOperation;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }
}

export class BotdetectionpolicyAllowListRulesConditionTlsFingerprintMatchList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionTlsFingerprintMatch[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionTlsFingerprintMatchOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionTlsFingerprintMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_criteria Botdetectionpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#versions Botdetectionpolicy#versions}
  */
  readonly versions: string[];
}

export function botdetectionpolicyAllowListRulesConditionVersionToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versions),
  }
}


export function botdetectionpolicyAllowListRulesConditionVersionToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.versions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._versions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._versions = value.versions;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // versions - computed: false, optional: false, required: true
  private _versions?: string[]; 
  public get versions() {
    return this.getListAttribute('versions');
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }
}

export class BotdetectionpolicyAllowListRulesConditionVersionList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionVersion[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionVersionOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesConditionVsPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#match_criteria Botdetectionpolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#ports Botdetectionpolicy#ports}
  */
  readonly ports: number[];
}

export function botdetectionpolicyAllowListRulesConditionVsPortToTerraform(struct?: BotdetectionpolicyAllowListRulesConditionVsPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
  }
}


export function botdetectionpolicyAllowListRulesConditionVsPortToHclTerraform(struct?: BotdetectionpolicyAllowListRulesConditionVsPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionVsPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesConditionVsPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesConditionVsPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._ports = value.ports;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}

export class BotdetectionpolicyAllowListRulesConditionVsPortList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesConditionVsPort[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionVsPortOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionVsPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRulesCondition {
  /**
  * bot_detection_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#bot_detection_result Botdetectionpolicy#bot_detection_result}
  */
  readonly botDetectionResult?: BotdetectionpolicyAllowListRulesConditionBotDetectionResult[] | cdktf.IResolvable;
  /**
  * client_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#client_ip Botdetectionpolicy#client_ip}
  */
  readonly clientIp?: BotdetectionpolicyAllowListRulesConditionClientIp[] | cdktf.IResolvable;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#cookie Botdetectionpolicy#cookie}
  */
  readonly cookie?: BotdetectionpolicyAllowListRulesConditionCookie[] | cdktf.IResolvable;
  /**
  * geo_matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#geo_matches Botdetectionpolicy#geo_matches}
  */
  readonly geoMatches?: BotdetectionpolicyAllowListRulesConditionGeoMatches[] | cdktf.IResolvable;
  /**
  * hdrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#hdrs Botdetectionpolicy#hdrs}
  */
  readonly hdrs?: BotdetectionpolicyAllowListRulesConditionHdrs[] | cdktf.IResolvable;
  /**
  * host_hdr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#host_hdr Botdetectionpolicy#host_hdr}
  */
  readonly hostHdr?: BotdetectionpolicyAllowListRulesConditionHostHdr[] | cdktf.IResolvable;
  /**
  * ip_reputation_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#ip_reputation_type Botdetectionpolicy#ip_reputation_type}
  */
  readonly ipReputationType?: BotdetectionpolicyAllowListRulesConditionIpReputationType[] | cdktf.IResolvable;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#method Botdetectionpolicy#method}
  */
  readonly method?: BotdetectionpolicyAllowListRulesConditionMethod[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#path Botdetectionpolicy#path}
  */
  readonly path?: BotdetectionpolicyAllowListRulesConditionPath[] | cdktf.IResolvable;
  /**
  * protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#protocol Botdetectionpolicy#protocol}
  */
  readonly protocol?: BotdetectionpolicyAllowListRulesConditionProtocol[] | cdktf.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#query Botdetectionpolicy#query}
  */
  readonly query?: BotdetectionpolicyAllowListRulesConditionQuery[] | cdktf.IResolvable;
  /**
  * source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#source_ip Botdetectionpolicy#source_ip}
  */
  readonly sourceIp?: BotdetectionpolicyAllowListRulesConditionSourceIp[] | cdktf.IResolvable;
  /**
  * tls_fingerprint_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#tls_fingerprint_match Botdetectionpolicy#tls_fingerprint_match}
  */
  readonly tlsFingerprintMatch?: BotdetectionpolicyAllowListRulesConditionTlsFingerprintMatch[] | cdktf.IResolvable;
  /**
  * version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#version Botdetectionpolicy#version}
  */
  readonly version?: BotdetectionpolicyAllowListRulesConditionVersion[] | cdktf.IResolvable;
  /**
  * vs_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#vs_port Botdetectionpolicy#vs_port}
  */
  readonly vsPort?: BotdetectionpolicyAllowListRulesConditionVsPort[] | cdktf.IResolvable;
}

export function botdetectionpolicyAllowListRulesConditionToTerraform(struct?: BotdetectionpolicyAllowListRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bot_detection_result: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionBotDetectionResultToTerraform, true)(struct!.botDetectionResult),
    client_ip: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionClientIpToTerraform, true)(struct!.clientIp),
    cookie: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionCookieToTerraform, true)(struct!.cookie),
    geo_matches: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionGeoMatchesToTerraform, true)(struct!.geoMatches),
    hdrs: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionHdrsToTerraform, true)(struct!.hdrs),
    host_hdr: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionHostHdrToTerraform, true)(struct!.hostHdr),
    ip_reputation_type: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionIpReputationTypeToTerraform, true)(struct!.ipReputationType),
    method: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionMethodToTerraform, true)(struct!.method),
    path: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionPathToTerraform, true)(struct!.path),
    protocol: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionProtocolToTerraform, true)(struct!.protocol),
    query: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionQueryToTerraform, true)(struct!.query),
    source_ip: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionSourceIpToTerraform, true)(struct!.sourceIp),
    tls_fingerprint_match: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionTlsFingerprintMatchToTerraform, true)(struct!.tlsFingerprintMatch),
    version: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionVersionToTerraform, true)(struct!.version),
    vs_port: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionVsPortToTerraform, true)(struct!.vsPort),
  }
}


export function botdetectionpolicyAllowListRulesConditionToHclTerraform(struct?: BotdetectionpolicyAllowListRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bot_detection_result: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionBotDetectionResultToHclTerraform, true)(struct!.botDetectionResult),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionBotDetectionResultList",
    },
    client_ip: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionClientIpToHclTerraform, true)(struct!.clientIp),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionClientIpList",
    },
    cookie: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionCookieToHclTerraform, true)(struct!.cookie),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionCookieList",
    },
    geo_matches: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionGeoMatchesToHclTerraform, true)(struct!.geoMatches),
      isBlock: true,
      type: "list",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionGeoMatchesList",
    },
    hdrs: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionHdrsToHclTerraform, true)(struct!.hdrs),
      isBlock: true,
      type: "list",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionHdrsList",
    },
    host_hdr: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionHostHdrToHclTerraform, true)(struct!.hostHdr),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionHostHdrList",
    },
    ip_reputation_type: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionIpReputationTypeToHclTerraform, true)(struct!.ipReputationType),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionIpReputationTypeList",
    },
    method: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionMethodToHclTerraform, true)(struct!.method),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionMethodList",
    },
    path: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionPathList",
    },
    protocol: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionProtocolToHclTerraform, true)(struct!.protocol),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionProtocolList",
    },
    query: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionQueryList",
    },
    source_ip: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionSourceIpToHclTerraform, true)(struct!.sourceIp),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionSourceIpList",
    },
    tls_fingerprint_match: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionTlsFingerprintMatchToHclTerraform, true)(struct!.tlsFingerprintMatch),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionTlsFingerprintMatchList",
    },
    version: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionVersionToHclTerraform, true)(struct!.version),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionVersionList",
    },
    vs_port: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionVsPortToHclTerraform, true)(struct!.vsPort),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionVsPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRulesCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botDetectionResult?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.botDetectionResult = this._botDetectionResult?.internalValue;
    }
    if (this._clientIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp?.internalValue;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._geoMatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoMatches = this._geoMatches?.internalValue;
    }
    if (this._hdrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdrs = this._hdrs?.internalValue;
    }
    if (this._hostHdr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHdr = this._hostHdr?.internalValue;
    }
    if (this._ipReputationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipReputationType = this._ipReputationType?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._protocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._sourceIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp?.internalValue;
    }
    if (this._tlsFingerprintMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatch = this._tlsFingerprintMatch?.internalValue;
    }
    if (this._version?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version?.internalValue;
    }
    if (this._vsPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsPort = this._vsPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRulesCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._botDetectionResult.internalValue = undefined;
      this._clientIp.internalValue = undefined;
      this._cookie.internalValue = undefined;
      this._geoMatches.internalValue = undefined;
      this._hdrs.internalValue = undefined;
      this._hostHdr.internalValue = undefined;
      this._ipReputationType.internalValue = undefined;
      this._method.internalValue = undefined;
      this._path.internalValue = undefined;
      this._protocol.internalValue = undefined;
      this._query.internalValue = undefined;
      this._sourceIp.internalValue = undefined;
      this._tlsFingerprintMatch.internalValue = undefined;
      this._version.internalValue = undefined;
      this._vsPort.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._botDetectionResult.internalValue = value.botDetectionResult;
      this._clientIp.internalValue = value.clientIp;
      this._cookie.internalValue = value.cookie;
      this._geoMatches.internalValue = value.geoMatches;
      this._hdrs.internalValue = value.hdrs;
      this._hostHdr.internalValue = value.hostHdr;
      this._ipReputationType.internalValue = value.ipReputationType;
      this._method.internalValue = value.method;
      this._path.internalValue = value.path;
      this._protocol.internalValue = value.protocol;
      this._query.internalValue = value.query;
      this._sourceIp.internalValue = value.sourceIp;
      this._tlsFingerprintMatch.internalValue = value.tlsFingerprintMatch;
      this._version.internalValue = value.version;
      this._vsPort.internalValue = value.vsPort;
    }
  }

  // bot_detection_result - computed: false, optional: true, required: false
  private _botDetectionResult = new BotdetectionpolicyAllowListRulesConditionBotDetectionResultList(this, "bot_detection_result", true);
  public get botDetectionResult() {
    return this._botDetectionResult;
  }
  public putBotDetectionResult(value: BotdetectionpolicyAllowListRulesConditionBotDetectionResult[] | cdktf.IResolvable) {
    this._botDetectionResult.internalValue = value;
  }
  public resetBotDetectionResult() {
    this._botDetectionResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botDetectionResultInput() {
    return this._botDetectionResult.internalValue;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp = new BotdetectionpolicyAllowListRulesConditionClientIpList(this, "client_ip", true);
  public get clientIp() {
    return this._clientIp;
  }
  public putClientIp(value: BotdetectionpolicyAllowListRulesConditionClientIp[] | cdktf.IResolvable) {
    this._clientIp.internalValue = value;
  }
  public resetClientIp() {
    this._clientIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp.internalValue;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new BotdetectionpolicyAllowListRulesConditionCookieList(this, "cookie", true);
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: BotdetectionpolicyAllowListRulesConditionCookie[] | cdktf.IResolvable) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // geo_matches - computed: false, optional: true, required: false
  private _geoMatches = new BotdetectionpolicyAllowListRulesConditionGeoMatchesList(this, "geo_matches", false);
  public get geoMatches() {
    return this._geoMatches;
  }
  public putGeoMatches(value: BotdetectionpolicyAllowListRulesConditionGeoMatches[] | cdktf.IResolvable) {
    this._geoMatches.internalValue = value;
  }
  public resetGeoMatches() {
    this._geoMatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoMatchesInput() {
    return this._geoMatches.internalValue;
  }

  // hdrs - computed: false, optional: true, required: false
  private _hdrs = new BotdetectionpolicyAllowListRulesConditionHdrsList(this, "hdrs", false);
  public get hdrs() {
    return this._hdrs;
  }
  public putHdrs(value: BotdetectionpolicyAllowListRulesConditionHdrs[] | cdktf.IResolvable) {
    this._hdrs.internalValue = value;
  }
  public resetHdrs() {
    this._hdrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrsInput() {
    return this._hdrs.internalValue;
  }

  // host_hdr - computed: false, optional: true, required: false
  private _hostHdr = new BotdetectionpolicyAllowListRulesConditionHostHdrList(this, "host_hdr", true);
  public get hostHdr() {
    return this._hostHdr;
  }
  public putHostHdr(value: BotdetectionpolicyAllowListRulesConditionHostHdr[] | cdktf.IResolvable) {
    this._hostHdr.internalValue = value;
  }
  public resetHostHdr() {
    this._hostHdr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHdrInput() {
    return this._hostHdr.internalValue;
  }

  // ip_reputation_type - computed: false, optional: true, required: false
  private _ipReputationType = new BotdetectionpolicyAllowListRulesConditionIpReputationTypeList(this, "ip_reputation_type", true);
  public get ipReputationType() {
    return this._ipReputationType;
  }
  public putIpReputationType(value: BotdetectionpolicyAllowListRulesConditionIpReputationType[] | cdktf.IResolvable) {
    this._ipReputationType.internalValue = value;
  }
  public resetIpReputationType() {
    this._ipReputationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationTypeInput() {
    return this._ipReputationType.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new BotdetectionpolicyAllowListRulesConditionMethodList(this, "method", true);
  public get method() {
    return this._method;
  }
  public putMethod(value: BotdetectionpolicyAllowListRulesConditionMethod[] | cdktf.IResolvable) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new BotdetectionpolicyAllowListRulesConditionPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: BotdetectionpolicyAllowListRulesConditionPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol = new BotdetectionpolicyAllowListRulesConditionProtocolList(this, "protocol", true);
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: BotdetectionpolicyAllowListRulesConditionProtocol[] | cdktf.IResolvable) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new BotdetectionpolicyAllowListRulesConditionQueryList(this, "query", true);
  public get query() {
    return this._query;
  }
  public putQuery(value: BotdetectionpolicyAllowListRulesConditionQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp = new BotdetectionpolicyAllowListRulesConditionSourceIpList(this, "source_ip", true);
  public get sourceIp() {
    return this._sourceIp;
  }
  public putSourceIp(value: BotdetectionpolicyAllowListRulesConditionSourceIp[] | cdktf.IResolvable) {
    this._sourceIp.internalValue = value;
  }
  public resetSourceIp() {
    this._sourceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp.internalValue;
  }

  // tls_fingerprint_match - computed: false, optional: true, required: false
  private _tlsFingerprintMatch = new BotdetectionpolicyAllowListRulesConditionTlsFingerprintMatchList(this, "tls_fingerprint_match", true);
  public get tlsFingerprintMatch() {
    return this._tlsFingerprintMatch;
  }
  public putTlsFingerprintMatch(value: BotdetectionpolicyAllowListRulesConditionTlsFingerprintMatch[] | cdktf.IResolvable) {
    this._tlsFingerprintMatch.internalValue = value;
  }
  public resetTlsFingerprintMatch() {
    this._tlsFingerprintMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatchInput() {
    return this._tlsFingerprintMatch.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version = new BotdetectionpolicyAllowListRulesConditionVersionList(this, "version", true);
  public get version() {
    return this._version;
  }
  public putVersion(value: BotdetectionpolicyAllowListRulesConditionVersion[] | cdktf.IResolvable) {
    this._version.internalValue = value;
  }
  public resetVersion() {
    this._version.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }

  // vs_port - computed: false, optional: true, required: false
  private _vsPort = new BotdetectionpolicyAllowListRulesConditionVsPortList(this, "vs_port", true);
  public get vsPort() {
    return this._vsPort;
  }
  public putVsPort(value: BotdetectionpolicyAllowListRulesConditionVsPort[] | cdktf.IResolvable) {
    this._vsPort.internalValue = value;
  }
  public resetVsPort() {
    this._vsPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsPortInput() {
    return this._vsPort.internalValue;
  }
}

export class BotdetectionpolicyAllowListRulesConditionList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRulesCondition[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesConditionOutputReference {
    return new BotdetectionpolicyAllowListRulesConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#action Botdetectionpolicy#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#index Botdetectionpolicy#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#name Botdetectionpolicy#name}
  */
  readonly name?: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#condition Botdetectionpolicy#condition}
  */
  readonly condition: BotdetectionpolicyAllowListRulesCondition[] | cdktf.IResolvable;
}

export function botdetectionpolicyAllowListRulesToTerraform(struct?: BotdetectionpolicyAllowListRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    index: cdktf.stringToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    condition: cdktf.listMapper(botdetectionpolicyAllowListRulesConditionToTerraform, true)(struct!.condition),
  }
}


export function botdetectionpolicyAllowListRulesToHclTerraform(struct?: BotdetectionpolicyAllowListRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "set",
      storageClassType: "BotdetectionpolicyAllowListRulesConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._index = undefined;
      this._name = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._index = value.index;
      this._name = value.name;
      this._condition.internalValue = value.condition;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new BotdetectionpolicyAllowListRulesConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: BotdetectionpolicyAllowListRulesCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class BotdetectionpolicyAllowListRulesList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListRules[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListRulesOutputReference {
    return new BotdetectionpolicyAllowListRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyAllowListStruct {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#rules Botdetectionpolicy#rules}
  */
  readonly rules?: BotdetectionpolicyAllowListRules[] | cdktf.IResolvable;
}

export function botdetectionpolicyAllowListStructToTerraform(struct?: BotdetectionpolicyAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(botdetectionpolicyAllowListRulesToTerraform, true)(struct!.rules),
  }
}


export function botdetectionpolicyAllowListStructToHclTerraform(struct?: BotdetectionpolicyAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(botdetectionpolicyAllowListRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "BotdetectionpolicyAllowListRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new BotdetectionpolicyAllowListRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: BotdetectionpolicyAllowListRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class BotdetectionpolicyAllowListStructList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyAllowListStructOutputReference {
    return new BotdetectionpolicyAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyClientBehaviorDetector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#bad_request_percent Botdetectionpolicy#bad_request_percent}
  */
  readonly badRequestPercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#enabled Botdetectionpolicy#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#minimum_requests Botdetectionpolicy#minimum_requests}
  */
  readonly minimumRequests?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#minimum_requests_with_referer Botdetectionpolicy#minimum_requests_with_referer}
  */
  readonly minimumRequestsWithReferer?: string;
}

export function botdetectionpolicyClientBehaviorDetectorToTerraform(struct?: BotdetectionpolicyClientBehaviorDetector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_request_percent: cdktf.stringToTerraform(struct!.badRequestPercent),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    minimum_requests: cdktf.stringToTerraform(struct!.minimumRequests),
    minimum_requests_with_referer: cdktf.stringToTerraform(struct!.minimumRequestsWithReferer),
  }
}


export function botdetectionpolicyClientBehaviorDetectorToHclTerraform(struct?: BotdetectionpolicyClientBehaviorDetector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_request_percent: {
      value: cdktf.stringToHclTerraform(struct!.badRequestPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_requests: {
      value: cdktf.stringToHclTerraform(struct!.minimumRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_requests_with_referer: {
      value: cdktf.stringToHclTerraform(struct!.minimumRequestsWithReferer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyClientBehaviorDetectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyClientBehaviorDetector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badRequestPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.badRequestPercent = this._badRequestPercent;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._minimumRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRequests = this._minimumRequests;
    }
    if (this._minimumRequestsWithReferer !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRequestsWithReferer = this._minimumRequestsWithReferer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyClientBehaviorDetector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._badRequestPercent = undefined;
      this._enabled = undefined;
      this._minimumRequests = undefined;
      this._minimumRequestsWithReferer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._badRequestPercent = value.badRequestPercent;
      this._enabled = value.enabled;
      this._minimumRequests = value.minimumRequests;
      this._minimumRequestsWithReferer = value.minimumRequestsWithReferer;
    }
  }

  // bad_request_percent - computed: false, optional: true, required: false
  private _badRequestPercent?: string; 
  public get badRequestPercent() {
    return this.getStringAttribute('bad_request_percent');
  }
  public set badRequestPercent(value: string) {
    this._badRequestPercent = value;
  }
  public resetBadRequestPercent() {
    this._badRequestPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badRequestPercentInput() {
    return this._badRequestPercent;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // minimum_requests - computed: false, optional: true, required: false
  private _minimumRequests?: string; 
  public get minimumRequests() {
    return this.getStringAttribute('minimum_requests');
  }
  public set minimumRequests(value: string) {
    this._minimumRequests = value;
  }
  public resetMinimumRequests() {
    this._minimumRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRequestsInput() {
    return this._minimumRequests;
  }

  // minimum_requests_with_referer - computed: false, optional: true, required: false
  private _minimumRequestsWithReferer?: string; 
  public get minimumRequestsWithReferer() {
    return this.getStringAttribute('minimum_requests_with_referer');
  }
  public set minimumRequestsWithReferer(value: string) {
    this._minimumRequestsWithReferer = value;
  }
  public resetMinimumRequestsWithReferer() {
    this._minimumRequestsWithReferer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRequestsWithRefererInput() {
    return this._minimumRequestsWithReferer;
  }
}

export class BotdetectionpolicyClientBehaviorDetectorList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyClientBehaviorDetector[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyClientBehaviorDetectorOutputReference {
    return new BotdetectionpolicyClientBehaviorDetectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#version Botdetectionpolicy#version}
  */
  readonly version?: string;
}

export function botdetectionpolicyConfigpbAttributesToTerraform(struct?: BotdetectionpolicyConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function botdetectionpolicyConfigpbAttributesToHclTerraform(struct?: BotdetectionpolicyConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class BotdetectionpolicyConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyConfigpbAttributesOutputReference {
    return new BotdetectionpolicyConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyIpLocationDetector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#enabled Botdetectionpolicy#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#ip_location_db_ref Botdetectionpolicy#ip_location_db_ref}
  */
  readonly ipLocationDbRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#system_cloud_providers_ref Botdetectionpolicy#system_cloud_providers_ref}
  */
  readonly systemCloudProvidersRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#system_search_engines_ref Botdetectionpolicy#system_search_engines_ref}
  */
  readonly systemSearchEnginesRef?: string;
}

export function botdetectionpolicyIpLocationDetectorToTerraform(struct?: BotdetectionpolicyIpLocationDetector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.stringToTerraform(struct!.enabled),
    ip_location_db_ref: cdktf.stringToTerraform(struct!.ipLocationDbRef),
    system_cloud_providers_ref: cdktf.stringToTerraform(struct!.systemCloudProvidersRef),
    system_search_engines_ref: cdktf.stringToTerraform(struct!.systemSearchEnginesRef),
  }
}


export function botdetectionpolicyIpLocationDetectorToHclTerraform(struct?: BotdetectionpolicyIpLocationDetector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_location_db_ref: {
      value: cdktf.stringToHclTerraform(struct!.ipLocationDbRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_cloud_providers_ref: {
      value: cdktf.stringToHclTerraform(struct!.systemCloudProvidersRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_search_engines_ref: {
      value: cdktf.stringToHclTerraform(struct!.systemSearchEnginesRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyIpLocationDetectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyIpLocationDetector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ipLocationDbRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipLocationDbRef = this._ipLocationDbRef;
    }
    if (this._systemCloudProvidersRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCloudProvidersRef = this._systemCloudProvidersRef;
    }
    if (this._systemSearchEnginesRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemSearchEnginesRef = this._systemSearchEnginesRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyIpLocationDetector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._ipLocationDbRef = undefined;
      this._systemCloudProvidersRef = undefined;
      this._systemSearchEnginesRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._ipLocationDbRef = value.ipLocationDbRef;
      this._systemCloudProvidersRef = value.systemCloudProvidersRef;
      this._systemSearchEnginesRef = value.systemSearchEnginesRef;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ip_location_db_ref - computed: true, optional: true, required: false
  private _ipLocationDbRef?: string; 
  public get ipLocationDbRef() {
    return this.getStringAttribute('ip_location_db_ref');
  }
  public set ipLocationDbRef(value: string) {
    this._ipLocationDbRef = value;
  }
  public resetIpLocationDbRef() {
    this._ipLocationDbRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipLocationDbRefInput() {
    return this._ipLocationDbRef;
  }

  // system_cloud_providers_ref - computed: true, optional: true, required: false
  private _systemCloudProvidersRef?: string; 
  public get systemCloudProvidersRef() {
    return this.getStringAttribute('system_cloud_providers_ref');
  }
  public set systemCloudProvidersRef(value: string) {
    this._systemCloudProvidersRef = value;
  }
  public resetSystemCloudProvidersRef() {
    this._systemCloudProvidersRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCloudProvidersRefInput() {
    return this._systemCloudProvidersRef;
  }

  // system_search_engines_ref - computed: true, optional: true, required: false
  private _systemSearchEnginesRef?: string; 
  public get systemSearchEnginesRef() {
    return this.getStringAttribute('system_search_engines_ref');
  }
  public set systemSearchEnginesRef(value: string) {
    this._systemSearchEnginesRef = value;
  }
  public resetSystemSearchEnginesRef() {
    this._systemSearchEnginesRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSearchEnginesRefInput() {
    return this._systemSearchEnginesRef;
  }
}

export class BotdetectionpolicyIpLocationDetectorList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyIpLocationDetector[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyIpLocationDetectorOutputReference {
    return new BotdetectionpolicyIpLocationDetectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyIpReputationDetector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#enabled Botdetectionpolicy#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#ip_reputation_db_ref Botdetectionpolicy#ip_reputation_db_ref}
  */
  readonly ipReputationDbRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#system_ip_reputation_mapping_ref Botdetectionpolicy#system_ip_reputation_mapping_ref}
  */
  readonly systemIpReputationMappingRef?: string;
}

export function botdetectionpolicyIpReputationDetectorToTerraform(struct?: BotdetectionpolicyIpReputationDetector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.stringToTerraform(struct!.enabled),
    ip_reputation_db_ref: cdktf.stringToTerraform(struct!.ipReputationDbRef),
    system_ip_reputation_mapping_ref: cdktf.stringToTerraform(struct!.systemIpReputationMappingRef),
  }
}


export function botdetectionpolicyIpReputationDetectorToHclTerraform(struct?: BotdetectionpolicyIpReputationDetector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_reputation_db_ref: {
      value: cdktf.stringToHclTerraform(struct!.ipReputationDbRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_ip_reputation_mapping_ref: {
      value: cdktf.stringToHclTerraform(struct!.systemIpReputationMappingRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyIpReputationDetectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyIpReputationDetector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ipReputationDbRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipReputationDbRef = this._ipReputationDbRef;
    }
    if (this._systemIpReputationMappingRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemIpReputationMappingRef = this._systemIpReputationMappingRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyIpReputationDetector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._ipReputationDbRef = undefined;
      this._systemIpReputationMappingRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._ipReputationDbRef = value.ipReputationDbRef;
      this._systemIpReputationMappingRef = value.systemIpReputationMappingRef;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ip_reputation_db_ref - computed: true, optional: true, required: false
  private _ipReputationDbRef?: string; 
  public get ipReputationDbRef() {
    return this.getStringAttribute('ip_reputation_db_ref');
  }
  public set ipReputationDbRef(value: string) {
    this._ipReputationDbRef = value;
  }
  public resetIpReputationDbRef() {
    this._ipReputationDbRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationDbRefInput() {
    return this._ipReputationDbRef;
  }

  // system_ip_reputation_mapping_ref - computed: true, optional: true, required: false
  private _systemIpReputationMappingRef?: string; 
  public get systemIpReputationMappingRef() {
    return this.getStringAttribute('system_ip_reputation_mapping_ref');
  }
  public set systemIpReputationMappingRef(value: string) {
    this._systemIpReputationMappingRef = value;
  }
  public resetSystemIpReputationMappingRef() {
    this._systemIpReputationMappingRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIpReputationMappingRefInput() {
    return this._systemIpReputationMappingRef;
  }
}

export class BotdetectionpolicyIpReputationDetectorList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyIpReputationDetector[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyIpReputationDetectorOutputReference {
    return new BotdetectionpolicyIpReputationDetectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotdetectionpolicyUserAgentDetector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#enabled Botdetectionpolicy#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#use_tls_fingerprint Botdetectionpolicy#use_tls_fingerprint}
  */
  readonly useTlsFingerprint?: string;
}

export function botdetectionpolicyUserAgentDetectorToTerraform(struct?: BotdetectionpolicyUserAgentDetector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.stringToTerraform(struct!.enabled),
    use_tls_fingerprint: cdktf.stringToTerraform(struct!.useTlsFingerprint),
  }
}


export function botdetectionpolicyUserAgentDetectorToHclTerraform(struct?: BotdetectionpolicyUserAgentDetector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_tls_fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.useTlsFingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotdetectionpolicyUserAgentDetectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BotdetectionpolicyUserAgentDetector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._useTlsFingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTlsFingerprint = this._useTlsFingerprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotdetectionpolicyUserAgentDetector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._useTlsFingerprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._useTlsFingerprint = value.useTlsFingerprint;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // use_tls_fingerprint - computed: false, optional: true, required: false
  private _useTlsFingerprint?: string; 
  public get useTlsFingerprint() {
    return this.getStringAttribute('use_tls_fingerprint');
  }
  public set useTlsFingerprint(value: string) {
    this._useTlsFingerprint = value;
  }
  public resetUseTlsFingerprint() {
    this._useTlsFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsFingerprintInput() {
    return this._useTlsFingerprint;
  }
}

export class BotdetectionpolicyUserAgentDetectorList extends cdktf.ComplexList {
  public internalValue? : BotdetectionpolicyUserAgentDetector[] | cdktf.IResolvable

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
  public get(index: number): BotdetectionpolicyUserAgentDetectorOutputReference {
    return new BotdetectionpolicyUserAgentDetectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy avi_botdetectionpolicy}
*/
export class Botdetectionpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_botdetectionpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Botdetectionpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Botdetectionpolicy to import
  * @param importFromId The id of the existing Botdetectionpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Botdetectionpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_botdetectionpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/botdetectionpolicy avi_botdetectionpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotdetectionpolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BotdetectionpolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_botdetectionpolicy',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
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
    this._name = config.name;
    this._systemBotMappingRef = config.systemBotMappingRef;
    this._systemConsolidatorRef = config.systemConsolidatorRef;
    this._tenantRef = config.tenantRef;
    this._userBotMappingRef = config.userBotMappingRef;
    this._userConsolidatorRef = config.userConsolidatorRef;
    this._uuid = config.uuid;
    this._allowList.internalValue = config.allowList;
    this._clientBehaviorDetector.internalValue = config.clientBehaviorDetector;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._ipLocationDetector.internalValue = config.ipLocationDetector;
    this._ipReputationDetector.internalValue = config.ipReputationDetector;
    this._userAgentDetector.internalValue = config.userAgentDetector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // system_bot_mapping_ref - computed: true, optional: true, required: false
  private _systemBotMappingRef?: string; 
  public get systemBotMappingRef() {
    return this.getStringAttribute('system_bot_mapping_ref');
  }
  public set systemBotMappingRef(value: string) {
    this._systemBotMappingRef = value;
  }
  public resetSystemBotMappingRef() {
    this._systemBotMappingRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemBotMappingRefInput() {
    return this._systemBotMappingRef;
  }

  // system_consolidator_ref - computed: true, optional: true, required: false
  private _systemConsolidatorRef?: string; 
  public get systemConsolidatorRef() {
    return this.getStringAttribute('system_consolidator_ref');
  }
  public set systemConsolidatorRef(value: string) {
    this._systemConsolidatorRef = value;
  }
  public resetSystemConsolidatorRef() {
    this._systemConsolidatorRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemConsolidatorRefInput() {
    return this._systemConsolidatorRef;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // user_bot_mapping_ref - computed: true, optional: true, required: false
  private _userBotMappingRef?: string; 
  public get userBotMappingRef() {
    return this.getStringAttribute('user_bot_mapping_ref');
  }
  public set userBotMappingRef(value: string) {
    this._userBotMappingRef = value;
  }
  public resetUserBotMappingRef() {
    this._userBotMappingRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBotMappingRefInput() {
    return this._userBotMappingRef;
  }

  // user_consolidator_ref - computed: true, optional: true, required: false
  private _userConsolidatorRef?: string; 
  public get userConsolidatorRef() {
    return this.getStringAttribute('user_consolidator_ref');
  }
  public set userConsolidatorRef(value: string) {
    this._userConsolidatorRef = value;
  }
  public resetUserConsolidatorRef() {
    this._userConsolidatorRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userConsolidatorRefInput() {
    return this._userConsolidatorRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // allow_list - computed: false, optional: true, required: false
  private _allowList = new BotdetectionpolicyAllowListStructList(this, "allow_list", true);
  public get allowList() {
    return this._allowList;
  }
  public putAllowList(value: BotdetectionpolicyAllowListStruct[] | cdktf.IResolvable) {
    this._allowList.internalValue = value;
  }
  public resetAllowList() {
    this._allowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList.internalValue;
  }

  // client_behavior_detector - computed: false, optional: true, required: false
  private _clientBehaviorDetector = new BotdetectionpolicyClientBehaviorDetectorList(this, "client_behavior_detector", true);
  public get clientBehaviorDetector() {
    return this._clientBehaviorDetector;
  }
  public putClientBehaviorDetector(value: BotdetectionpolicyClientBehaviorDetector[] | cdktf.IResolvable) {
    this._clientBehaviorDetector.internalValue = value;
  }
  public resetClientBehaviorDetector() {
    this._clientBehaviorDetector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientBehaviorDetectorInput() {
    return this._clientBehaviorDetector.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new BotdetectionpolicyConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: BotdetectionpolicyConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // ip_location_detector - computed: false, optional: false, required: true
  private _ipLocationDetector = new BotdetectionpolicyIpLocationDetectorList(this, "ip_location_detector", true);
  public get ipLocationDetector() {
    return this._ipLocationDetector;
  }
  public putIpLocationDetector(value: BotdetectionpolicyIpLocationDetector[] | cdktf.IResolvable) {
    this._ipLocationDetector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipLocationDetectorInput() {
    return this._ipLocationDetector.internalValue;
  }

  // ip_reputation_detector - computed: false, optional: false, required: true
  private _ipReputationDetector = new BotdetectionpolicyIpReputationDetectorList(this, "ip_reputation_detector", true);
  public get ipReputationDetector() {
    return this._ipReputationDetector;
  }
  public putIpReputationDetector(value: BotdetectionpolicyIpReputationDetector[] | cdktf.IResolvable) {
    this._ipReputationDetector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationDetectorInput() {
    return this._ipReputationDetector.internalValue;
  }

  // user_agent_detector - computed: false, optional: false, required: true
  private _userAgentDetector = new BotdetectionpolicyUserAgentDetectorList(this, "user_agent_detector", true);
  public get userAgentDetector() {
    return this._userAgentDetector;
  }
  public putUserAgentDetector(value: BotdetectionpolicyUserAgentDetector[] | cdktf.IResolvable) {
    this._userAgentDetector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentDetectorInput() {
    return this._userAgentDetector.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      system_bot_mapping_ref: cdktf.stringToTerraform(this._systemBotMappingRef),
      system_consolidator_ref: cdktf.stringToTerraform(this._systemConsolidatorRef),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      user_bot_mapping_ref: cdktf.stringToTerraform(this._userBotMappingRef),
      user_consolidator_ref: cdktf.stringToTerraform(this._userConsolidatorRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      allow_list: cdktf.listMapper(botdetectionpolicyAllowListStructToTerraform, true)(this._allowList.internalValue),
      client_behavior_detector: cdktf.listMapper(botdetectionpolicyClientBehaviorDetectorToTerraform, true)(this._clientBehaviorDetector.internalValue),
      configpb_attributes: cdktf.listMapper(botdetectionpolicyConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      ip_location_detector: cdktf.listMapper(botdetectionpolicyIpLocationDetectorToTerraform, true)(this._ipLocationDetector.internalValue),
      ip_reputation_detector: cdktf.listMapper(botdetectionpolicyIpReputationDetectorToTerraform, true)(this._ipReputationDetector.internalValue),
      user_agent_detector: cdktf.listMapper(botdetectionpolicyUserAgentDetectorToTerraform, true)(this._userAgentDetector.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_bot_mapping_ref: {
        value: cdktf.stringToHclTerraform(this._systemBotMappingRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_consolidator_ref: {
        value: cdktf.stringToHclTerraform(this._systemConsolidatorRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_bot_mapping_ref: {
        value: cdktf.stringToHclTerraform(this._userBotMappingRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_consolidator_ref: {
        value: cdktf.stringToHclTerraform(this._userConsolidatorRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_list: {
        value: cdktf.listMapperHcl(botdetectionpolicyAllowListStructToHclTerraform, true)(this._allowList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BotdetectionpolicyAllowListStructList",
      },
      client_behavior_detector: {
        value: cdktf.listMapperHcl(botdetectionpolicyClientBehaviorDetectorToHclTerraform, true)(this._clientBehaviorDetector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BotdetectionpolicyClientBehaviorDetectorList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(botdetectionpolicyConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BotdetectionpolicyConfigpbAttributesList",
      },
      ip_location_detector: {
        value: cdktf.listMapperHcl(botdetectionpolicyIpLocationDetectorToHclTerraform, true)(this._ipLocationDetector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BotdetectionpolicyIpLocationDetectorList",
      },
      ip_reputation_detector: {
        value: cdktf.listMapperHcl(botdetectionpolicyIpReputationDetectorToHclTerraform, true)(this._ipReputationDetector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BotdetectionpolicyIpReputationDetectorList",
      },
      user_agent_detector: {
        value: cdktf.listMapperHcl(botdetectionpolicyUserAgentDetectorToHclTerraform, true)(this._userAgentDetector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BotdetectionpolicyUserAgentDetectorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
