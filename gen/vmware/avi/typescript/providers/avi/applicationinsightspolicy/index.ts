// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationinsightspolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#description Applicationinsightspolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#enable_application_insights Applicationinsightspolicy#enable_application_insights}
  */
  readonly enableApplicationInsights?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#id Applicationinsightspolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#name Applicationinsightspolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#tenant_ref Applicationinsightspolicy#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#uuid Applicationinsightspolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * application_insights_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#application_insights_params Applicationinsightspolicy#application_insights_params}
  */
  readonly applicationInsightsParams?: ApplicationinsightspolicyApplicationInsightsParams[] | cdktf.IResolvable;
  /**
  * application_sampling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#application_sampling_config Applicationinsightspolicy#application_sampling_config}
  */
  readonly applicationSamplingConfig?: ApplicationinsightspolicyApplicationSamplingConfig[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#configpb_attributes Applicationinsightspolicy#configpb_attributes}
  */
  readonly configpbAttributes?: ApplicationinsightspolicyConfigpbAttributes[] | cdktf.IResolvable;
}
export interface ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#type Applicationinsightspolicy#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#user_defined_type Applicationinsightspolicy#user_defined_type}
  */
  readonly userDefinedType?: string;
}

export function applicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassificationsToTerraform(struct?: ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_defined_type: cdktf.stringToTerraform(struct!.userDefinedType),
  }
}


export function applicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassificationsToHclTerraform(struct?: ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassifications | cdktf.IResolvable): any {
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

export class ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassifications | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassifications | cdktf.IResolvable | undefined) {
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

export class ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassificationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassifications[] | cdktf.IResolvable

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
  public get(index: number): ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassificationsOutputReference {
    return new ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightspolicyApplicationInsightsParamsLearnFromBots {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#match_operation Applicationinsightspolicy#match_operation}
  */
  readonly matchOperation: string;
  /**
  * classifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#classifications Applicationinsightspolicy#classifications}
  */
  readonly classifications?: ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassifications[] | cdktf.IResolvable;
}

export function applicationinsightspolicyApplicationInsightsParamsLearnFromBotsToTerraform(struct?: ApplicationinsightspolicyApplicationInsightsParamsLearnFromBots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    classifications: cdktf.listMapper(applicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassificationsToTerraform, true)(struct!.classifications),
  }
}


export function applicationinsightspolicyApplicationInsightsParamsLearnFromBotsToHclTerraform(struct?: ApplicationinsightspolicyApplicationInsightsParamsLearnFromBots | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(applicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassificationsToHclTerraform, true)(struct!.classifications),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationinsightspolicyApplicationInsightsParamsLearnFromBots | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationinsightspolicyApplicationInsightsParamsLearnFromBots | cdktf.IResolvable | undefined) {
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
  private _classifications = new ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassificationsList(this, "classifications", false);
  public get classifications() {
    return this._classifications;
  }
  public putClassifications(value: ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsClassifications[] | cdktf.IResolvable) {
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

export class ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsList extends cdktf.ComplexList {
  public internalValue? : ApplicationinsightspolicyApplicationInsightsParamsLearnFromBots[] | cdktf.IResolvable

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
  public get(index: number): ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsOutputReference {
    return new ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightspolicyApplicationInsightsParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#enable_learn_from_bots Applicationinsightspolicy#enable_learn_from_bots}
  */
  readonly enableLearnFromBots?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#enable_per_uri_learning Applicationinsightspolicy#enable_per_uri_learning}
  */
  readonly enablePerUriLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#learn_from_authenticated_clients_only Applicationinsightspolicy#learn_from_authenticated_clients_only}
  */
  readonly learnFromAuthenticatedClientsOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#learn_from_urls_without_args Applicationinsightspolicy#learn_from_urls_without_args}
  */
  readonly learnFromUrlsWithoutArgs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#max_params Applicationinsightspolicy#max_params}
  */
  readonly maxParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#max_uris Applicationinsightspolicy#max_uris}
  */
  readonly maxUris?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#trusted_ipgroup_ref Applicationinsightspolicy#trusted_ipgroup_ref}
  */
  readonly trustedIpgroupRef?: string;
  /**
  * learn_from_bots block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#learn_from_bots Applicationinsightspolicy#learn_from_bots}
  */
  readonly learnFromBots?: ApplicationinsightspolicyApplicationInsightsParamsLearnFromBots[] | cdktf.IResolvable;
}

export function applicationinsightspolicyApplicationInsightsParamsToTerraform(struct?: ApplicationinsightspolicyApplicationInsightsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_learn_from_bots: cdktf.stringToTerraform(struct!.enableLearnFromBots),
    enable_per_uri_learning: cdktf.stringToTerraform(struct!.enablePerUriLearning),
    learn_from_authenticated_clients_only: cdktf.stringToTerraform(struct!.learnFromAuthenticatedClientsOnly),
    learn_from_urls_without_args: cdktf.stringToTerraform(struct!.learnFromUrlsWithoutArgs),
    max_params: cdktf.stringToTerraform(struct!.maxParams),
    max_uris: cdktf.stringToTerraform(struct!.maxUris),
    trusted_ipgroup_ref: cdktf.stringToTerraform(struct!.trustedIpgroupRef),
    learn_from_bots: cdktf.listMapper(applicationinsightspolicyApplicationInsightsParamsLearnFromBotsToTerraform, true)(struct!.learnFromBots),
  }
}


export function applicationinsightspolicyApplicationInsightsParamsToHclTerraform(struct?: ApplicationinsightspolicyApplicationInsightsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_learn_from_bots: {
      value: cdktf.stringToHclTerraform(struct!.enableLearnFromBots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_per_uri_learning: {
      value: cdktf.stringToHclTerraform(struct!.enablePerUriLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    learn_from_authenticated_clients_only: {
      value: cdktf.stringToHclTerraform(struct!.learnFromAuthenticatedClientsOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    learn_from_urls_without_args: {
      value: cdktf.stringToHclTerraform(struct!.learnFromUrlsWithoutArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_params: {
      value: cdktf.stringToHclTerraform(struct!.maxParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_uris: {
      value: cdktf.stringToHclTerraform(struct!.maxUris),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_ipgroup_ref: {
      value: cdktf.stringToHclTerraform(struct!.trustedIpgroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    learn_from_bots: {
      value: cdktf.listMapperHcl(applicationinsightspolicyApplicationInsightsParamsLearnFromBotsToHclTerraform, true)(struct!.learnFromBots),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightspolicyApplicationInsightsParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationinsightspolicyApplicationInsightsParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableLearnFromBots !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLearnFromBots = this._enableLearnFromBots;
    }
    if (this._enablePerUriLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePerUriLearning = this._enablePerUriLearning;
    }
    if (this._learnFromAuthenticatedClientsOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.learnFromAuthenticatedClientsOnly = this._learnFromAuthenticatedClientsOnly;
    }
    if (this._learnFromUrlsWithoutArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.learnFromUrlsWithoutArgs = this._learnFromUrlsWithoutArgs;
    }
    if (this._maxParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParams = this._maxParams;
    }
    if (this._maxUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUris = this._maxUris;
    }
    if (this._trustedIpgroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedIpgroupRef = this._trustedIpgroupRef;
    }
    if (this._learnFromBots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.learnFromBots = this._learnFromBots?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightspolicyApplicationInsightsParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableLearnFromBots = undefined;
      this._enablePerUriLearning = undefined;
      this._learnFromAuthenticatedClientsOnly = undefined;
      this._learnFromUrlsWithoutArgs = undefined;
      this._maxParams = undefined;
      this._maxUris = undefined;
      this._trustedIpgroupRef = undefined;
      this._learnFromBots.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableLearnFromBots = value.enableLearnFromBots;
      this._enablePerUriLearning = value.enablePerUriLearning;
      this._learnFromAuthenticatedClientsOnly = value.learnFromAuthenticatedClientsOnly;
      this._learnFromUrlsWithoutArgs = value.learnFromUrlsWithoutArgs;
      this._maxParams = value.maxParams;
      this._maxUris = value.maxUris;
      this._trustedIpgroupRef = value.trustedIpgroupRef;
      this._learnFromBots.internalValue = value.learnFromBots;
    }
  }

  // enable_learn_from_bots - computed: false, optional: true, required: false
  private _enableLearnFromBots?: string; 
  public get enableLearnFromBots() {
    return this.getStringAttribute('enable_learn_from_bots');
  }
  public set enableLearnFromBots(value: string) {
    this._enableLearnFromBots = value;
  }
  public resetEnableLearnFromBots() {
    this._enableLearnFromBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLearnFromBotsInput() {
    return this._enableLearnFromBots;
  }

  // enable_per_uri_learning - computed: false, optional: true, required: false
  private _enablePerUriLearning?: string; 
  public get enablePerUriLearning() {
    return this.getStringAttribute('enable_per_uri_learning');
  }
  public set enablePerUriLearning(value: string) {
    this._enablePerUriLearning = value;
  }
  public resetEnablePerUriLearning() {
    this._enablePerUriLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePerUriLearningInput() {
    return this._enablePerUriLearning;
  }

  // learn_from_authenticated_clients_only - computed: false, optional: true, required: false
  private _learnFromAuthenticatedClientsOnly?: string; 
  public get learnFromAuthenticatedClientsOnly() {
    return this.getStringAttribute('learn_from_authenticated_clients_only');
  }
  public set learnFromAuthenticatedClientsOnly(value: string) {
    this._learnFromAuthenticatedClientsOnly = value;
  }
  public resetLearnFromAuthenticatedClientsOnly() {
    this._learnFromAuthenticatedClientsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnFromAuthenticatedClientsOnlyInput() {
    return this._learnFromAuthenticatedClientsOnly;
  }

  // learn_from_urls_without_args - computed: false, optional: true, required: false
  private _learnFromUrlsWithoutArgs?: string; 
  public get learnFromUrlsWithoutArgs() {
    return this.getStringAttribute('learn_from_urls_without_args');
  }
  public set learnFromUrlsWithoutArgs(value: string) {
    this._learnFromUrlsWithoutArgs = value;
  }
  public resetLearnFromUrlsWithoutArgs() {
    this._learnFromUrlsWithoutArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnFromUrlsWithoutArgsInput() {
    return this._learnFromUrlsWithoutArgs;
  }

  // max_params - computed: false, optional: true, required: false
  private _maxParams?: string; 
  public get maxParams() {
    return this.getStringAttribute('max_params');
  }
  public set maxParams(value: string) {
    this._maxParams = value;
  }
  public resetMaxParams() {
    this._maxParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParamsInput() {
    return this._maxParams;
  }

  // max_uris - computed: false, optional: true, required: false
  private _maxUris?: string; 
  public get maxUris() {
    return this.getStringAttribute('max_uris');
  }
  public set maxUris(value: string) {
    this._maxUris = value;
  }
  public resetMaxUris() {
    this._maxUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrisInput() {
    return this._maxUris;
  }

  // trusted_ipgroup_ref - computed: true, optional: true, required: false
  private _trustedIpgroupRef?: string; 
  public get trustedIpgroupRef() {
    return this.getStringAttribute('trusted_ipgroup_ref');
  }
  public set trustedIpgroupRef(value: string) {
    this._trustedIpgroupRef = value;
  }
  public resetTrustedIpgroupRef() {
    this._trustedIpgroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedIpgroupRefInput() {
    return this._trustedIpgroupRef;
  }

  // learn_from_bots - computed: false, optional: true, required: false
  private _learnFromBots = new ApplicationinsightspolicyApplicationInsightsParamsLearnFromBotsList(this, "learn_from_bots", true);
  public get learnFromBots() {
    return this._learnFromBots;
  }
  public putLearnFromBots(value: ApplicationinsightspolicyApplicationInsightsParamsLearnFromBots[] | cdktf.IResolvable) {
    this._learnFromBots.internalValue = value;
  }
  public resetLearnFromBots() {
    this._learnFromBots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnFromBotsInput() {
    return this._learnFromBots.internalValue;
  }
}

export class ApplicationinsightspolicyApplicationInsightsParamsList extends cdktf.ComplexList {
  public internalValue? : ApplicationinsightspolicyApplicationInsightsParams[] | cdktf.IResolvable

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
  public get(index: number): ApplicationinsightspolicyApplicationInsightsParamsOutputReference {
    return new ApplicationinsightspolicyApplicationInsightsParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightspolicyApplicationSamplingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#max_sampling_percent Applicationinsightspolicy#max_sampling_percent}
  */
  readonly maxSamplingPercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#min_update_interval Applicationinsightspolicy#min_update_interval}
  */
  readonly minUpdateInterval?: string;
}

export function applicationinsightspolicyApplicationSamplingConfigToTerraform(struct?: ApplicationinsightspolicyApplicationSamplingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_sampling_percent: cdktf.stringToTerraform(struct!.maxSamplingPercent),
    min_update_interval: cdktf.stringToTerraform(struct!.minUpdateInterval),
  }
}


export function applicationinsightspolicyApplicationSamplingConfigToHclTerraform(struct?: ApplicationinsightspolicyApplicationSamplingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_sampling_percent: {
      value: cdktf.stringToHclTerraform(struct!.maxSamplingPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_update_interval: {
      value: cdktf.stringToHclTerraform(struct!.minUpdateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationinsightspolicyApplicationSamplingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationinsightspolicyApplicationSamplingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSamplingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSamplingPercent = this._maxSamplingPercent;
    }
    if (this._minUpdateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minUpdateInterval = this._minUpdateInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationinsightspolicyApplicationSamplingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSamplingPercent = undefined;
      this._minUpdateInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSamplingPercent = value.maxSamplingPercent;
      this._minUpdateInterval = value.minUpdateInterval;
    }
  }

  // max_sampling_percent - computed: false, optional: true, required: false
  private _maxSamplingPercent?: string; 
  public get maxSamplingPercent() {
    return this.getStringAttribute('max_sampling_percent');
  }
  public set maxSamplingPercent(value: string) {
    this._maxSamplingPercent = value;
  }
  public resetMaxSamplingPercent() {
    this._maxSamplingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSamplingPercentInput() {
    return this._maxSamplingPercent;
  }

  // min_update_interval - computed: false, optional: true, required: false
  private _minUpdateInterval?: string; 
  public get minUpdateInterval() {
    return this.getStringAttribute('min_update_interval');
  }
  public set minUpdateInterval(value: string) {
    this._minUpdateInterval = value;
  }
  public resetMinUpdateInterval() {
    this._minUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUpdateIntervalInput() {
    return this._minUpdateInterval;
  }
}

export class ApplicationinsightspolicyApplicationSamplingConfigList extends cdktf.ComplexList {
  public internalValue? : ApplicationinsightspolicyApplicationSamplingConfig[] | cdktf.IResolvable

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
  public get(index: number): ApplicationinsightspolicyApplicationSamplingConfigOutputReference {
    return new ApplicationinsightspolicyApplicationSamplingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationinsightspolicyConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#version Applicationinsightspolicy#version}
  */
  readonly version?: string;
}

export function applicationinsightspolicyConfigpbAttributesToTerraform(struct?: ApplicationinsightspolicyConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function applicationinsightspolicyConfigpbAttributesToHclTerraform(struct?: ApplicationinsightspolicyConfigpbAttributes | cdktf.IResolvable): any {
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

export class ApplicationinsightspolicyConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationinsightspolicyConfigpbAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationinsightspolicyConfigpbAttributes | cdktf.IResolvable | undefined) {
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

export class ApplicationinsightspolicyConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : ApplicationinsightspolicyConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): ApplicationinsightspolicyConfigpbAttributesOutputReference {
    return new ApplicationinsightspolicyConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy avi_applicationinsightspolicy}
*/
export class Applicationinsightspolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_applicationinsightspolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Applicationinsightspolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Applicationinsightspolicy to import
  * @param importFromId The id of the existing Applicationinsightspolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Applicationinsightspolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_applicationinsightspolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationinsightspolicy avi_applicationinsightspolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationinsightspolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationinsightspolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_applicationinsightspolicy',
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
    this._enableApplicationInsights = config.enableApplicationInsights;
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._applicationInsightsParams.internalValue = config.applicationInsightsParams;
    this._applicationSamplingConfig.internalValue = config.applicationSamplingConfig;
    this._configpbAttributes.internalValue = config.configpbAttributes;
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

  // enable_application_insights - computed: false, optional: true, required: false
  private _enableApplicationInsights?: string; 
  public get enableApplicationInsights() {
    return this.getStringAttribute('enable_application_insights');
  }
  public set enableApplicationInsights(value: string) {
    this._enableApplicationInsights = value;
  }
  public resetEnableApplicationInsights() {
    this._enableApplicationInsights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableApplicationInsightsInput() {
    return this._enableApplicationInsights;
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

  // application_insights_params - computed: false, optional: true, required: false
  private _applicationInsightsParams = new ApplicationinsightspolicyApplicationInsightsParamsList(this, "application_insights_params", true);
  public get applicationInsightsParams() {
    return this._applicationInsightsParams;
  }
  public putApplicationInsightsParams(value: ApplicationinsightspolicyApplicationInsightsParams[] | cdktf.IResolvable) {
    this._applicationInsightsParams.internalValue = value;
  }
  public resetApplicationInsightsParams() {
    this._applicationInsightsParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsParamsInput() {
    return this._applicationInsightsParams.internalValue;
  }

  // application_sampling_config - computed: false, optional: true, required: false
  private _applicationSamplingConfig = new ApplicationinsightspolicyApplicationSamplingConfigList(this, "application_sampling_config", true);
  public get applicationSamplingConfig() {
    return this._applicationSamplingConfig;
  }
  public putApplicationSamplingConfig(value: ApplicationinsightspolicyApplicationSamplingConfig[] | cdktf.IResolvable) {
    this._applicationSamplingConfig.internalValue = value;
  }
  public resetApplicationSamplingConfig() {
    this._applicationSamplingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSamplingConfigInput() {
    return this._applicationSamplingConfig.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new ApplicationinsightspolicyConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: ApplicationinsightspolicyConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enable_application_insights: cdktf.stringToTerraform(this._enableApplicationInsights),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      application_insights_params: cdktf.listMapper(applicationinsightspolicyApplicationInsightsParamsToTerraform, true)(this._applicationInsightsParams.internalValue),
      application_sampling_config: cdktf.listMapper(applicationinsightspolicyApplicationSamplingConfigToTerraform, true)(this._applicationSamplingConfig.internalValue),
      configpb_attributes: cdktf.listMapper(applicationinsightspolicyConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
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
      enable_application_insights: {
        value: cdktf.stringToHclTerraform(this._enableApplicationInsights),
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
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
      application_insights_params: {
        value: cdktf.listMapperHcl(applicationinsightspolicyApplicationInsightsParamsToHclTerraform, true)(this._applicationInsightsParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationinsightspolicyApplicationInsightsParamsList",
      },
      application_sampling_config: {
        value: cdktf.listMapperHcl(applicationinsightspolicyApplicationSamplingConfigToHclTerraform, true)(this._applicationSamplingConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationinsightspolicyApplicationSamplingConfigList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(applicationinsightspolicyConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationinsightspolicyConfigpbAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
