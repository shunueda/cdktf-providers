// https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/code_reviews
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBridgecrewCodeReviewsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/code_reviews#id DataBridgecrewCodeReviews#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleIac {
}

export function dataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleIacToTerraform(struct?: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleIac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleIacToHclTerraform(struct?: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleIac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleIacOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleIac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleIac | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comments_bot_threshold - computed: true, optional: false, required: false
  public get commentsBotThreshold() {
    return this.getStringAttribute('comments_bot_threshold');
  }

  // hard_fail_threshold - computed: true, optional: false, required: false
  public get hardFailThreshold() {
    return this.getStringAttribute('hard_fail_threshold');
  }

  // soft_fail_threshold - computed: true, optional: false, required: false
  public get softFailThreshold() {
    return this.getStringAttribute('soft_fail_threshold');
  }
}

export class DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleIacList extends cdktf.ComplexList {

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
  public get(index: number): DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleIacOutputReference {
    return new DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleIacOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleImages {
}

export function dataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleImagesToTerraform(struct?: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleImagesToHclTerraform(struct?: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comments_bot_threshold - computed: true, optional: false, required: false
  public get commentsBotThreshold() {
    return this.getStringAttribute('comments_bot_threshold');
  }

  // hard_fail_threshold - computed: true, optional: false, required: false
  public get hardFailThreshold() {
    return this.getStringAttribute('hard_fail_threshold');
  }

  // soft_fail_threshold - computed: true, optional: false, required: false
  public get softFailThreshold() {
    return this.getStringAttribute('soft_fail_threshold');
  }
}

export class DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleImagesOutputReference {
    return new DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleOpenSource {
}

export function dataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleOpenSourceToTerraform(struct?: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleOpenSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleOpenSourceToHclTerraform(struct?: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleOpenSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleOpenSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleOpenSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleOpenSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comments_bot_threshold - computed: true, optional: false, required: false
  public get commentsBotThreshold() {
    return this.getStringAttribute('comments_bot_threshold');
  }

  // hard_fail_threshold - computed: true, optional: false, required: false
  public get hardFailThreshold() {
    return this.getStringAttribute('hard_fail_threshold');
  }

  // soft_fail_threshold - computed: true, optional: false, required: false
  public get softFailThreshold() {
    return this.getStringAttribute('soft_fail_threshold');
  }
}

export class DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleOpenSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleOpenSourceOutputReference {
    return new DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleOpenSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSecrets {
}

export function dataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSecretsToTerraform(struct?: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSecretsToHclTerraform(struct?: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comments_bot_threshold - computed: true, optional: false, required: false
  public get commentsBotThreshold() {
    return this.getStringAttribute('comments_bot_threshold');
  }

  // hard_fail_threshold - computed: true, optional: false, required: false
  public get hardFailThreshold() {
    return this.getStringAttribute('hard_fail_threshold');
  }

  // soft_fail_threshold - computed: true, optional: false, required: false
  public get softFailThreshold() {
    return this.getStringAttribute('soft_fail_threshold');
  }
}

export class DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSecretsList extends cdktf.ComplexList {

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
  public get(index: number): DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSecretsOutputReference {
    return new DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSupplyChain {
}

export function dataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSupplyChainToTerraform(struct?: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSupplyChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSupplyChainToHclTerraform(struct?: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSupplyChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSupplyChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSupplyChain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSupplyChain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comments_bot_threshold - computed: true, optional: false, required: false
  public get commentsBotThreshold() {
    return this.getStringAttribute('comments_bot_threshold');
  }

  // hard_fail_threshold - computed: true, optional: false, required: false
  public get hardFailThreshold() {
    return this.getStringAttribute('hard_fail_threshold');
  }

  // soft_fail_threshold - computed: true, optional: false, required: false
  public get softFailThreshold() {
    return this.getStringAttribute('soft_fail_threshold');
  }
}

export class DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSupplyChainList extends cdktf.ComplexList {

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
  public get(index: number): DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSupplyChainOutputReference {
    return new DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSupplyChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBridgecrewCodeReviewsCodereviewsPrEnforcementRule {
}

export function dataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleToTerraform(struct?: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleToHclTerraform(struct?: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewCodeReviewsCodereviewsPrEnforcementRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewCodeReviewsCodereviewsPrEnforcementRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iac - computed: true, optional: false, required: false
  private _iac = new DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleIacList(this, "iac", true);
  public get iac() {
    return this._iac;
  }

  // images - computed: true, optional: false, required: false
  private _images = new DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleImagesList(this, "images", true);
  public get images() {
    return this._images;
  }

  // open_source - computed: true, optional: false, required: false
  private _openSource = new DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleOpenSourceList(this, "open_source", true);
  public get openSource() {
    return this._openSource;
  }

  // secrets - computed: true, optional: false, required: false
  private _secrets = new DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSecretsList(this, "secrets", true);
  public get secrets() {
    return this._secrets;
  }

  // supply_chain - computed: true, optional: false, required: false
  private _supplyChain = new DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleSupplyChainList(this, "supply_chain", true);
  public get supplyChain() {
    return this._supplyChain;
  }
}

export class DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleOutputReference {
    return new DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBridgecrewCodeReviewsCodereviewsPr {
}

export function dataBridgecrewCodeReviewsCodereviewsPrToTerraform(struct?: DataBridgecrewCodeReviewsCodereviewsPr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBridgecrewCodeReviewsCodereviewsPrToHclTerraform(struct?: DataBridgecrewCodeReviewsCodereviewsPr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBridgecrewCodeReviewsCodereviewsPrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewCodeReviewsCodereviewsPr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewCodeReviewsCodereviewsPr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforcement_rule - computed: true, optional: false, required: false
  private _enforcementRule = new DataBridgecrewCodeReviewsCodereviewsPrEnforcementRuleList(this, "enforcement_rule", true);
  public get enforcementRule() {
    return this._enforcementRule;
  }

  // from_branch - computed: true, optional: false, required: false
  public get fromBranch() {
    return this.getStringAttribute('from_branch');
  }

  // into_branch - computed: true, optional: false, required: false
  public get intoBranch() {
    return this.getStringAttribute('into_branch');
  }

  // pr_number - computed: true, optional: false, required: false
  public get prNumber() {
    return this.getStringAttribute('pr_number');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataBridgecrewCodeReviewsCodereviewsPrList extends cdktf.ComplexList {

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
  public get(index: number): DataBridgecrewCodeReviewsCodereviewsPrOutputReference {
    return new DataBridgecrewCodeReviewsCodereviewsPrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBridgecrewCodeReviewsCodereviewsResults {
}

export function dataBridgecrewCodeReviewsCodereviewsResultsToTerraform(struct?: DataBridgecrewCodeReviewsCodereviewsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBridgecrewCodeReviewsCodereviewsResultsToHclTerraform(struct?: DataBridgecrewCodeReviewsCodereviewsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBridgecrewCodeReviewsCodereviewsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewCodeReviewsCodereviewsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewCodeReviewsCodereviewsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getNumberAttribute('critical');
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getNumberAttribute('high');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getNumberAttribute('low');
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getNumberAttribute('medium');
  }
}

export class DataBridgecrewCodeReviewsCodereviewsResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataBridgecrewCodeReviewsCodereviewsResultsOutputReference {
    return new DataBridgecrewCodeReviewsCodereviewsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBridgecrewCodeReviewsCodereviews {
}

export function dataBridgecrewCodeReviewsCodereviewsToTerraform(struct?: DataBridgecrewCodeReviewsCodereviews): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBridgecrewCodeReviewsCodereviewsToHclTerraform(struct?: DataBridgecrewCodeReviewsCodereviews): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBridgecrewCodeReviewsCodereviewsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewCodeReviewsCodereviews | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewCodeReviewsCodereviews | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commit_id - computed: true, optional: false, required: false
  public get commitId() {
    return this.getStringAttribute('commit_id');
  }

  // creationdate - computed: true, optional: false, required: false
  public get creationdate() {
    return this.getStringAttribute('creationdate');
  }

  // customer_name - computed: true, optional: false, required: false
  public get customerName() {
    return this.getStringAttribute('customer_name');
  }

  // git_user - computed: true, optional: false, required: false
  public get gitUser() {
    return this.getStringAttribute('git_user');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // lastscandate - computed: true, optional: false, required: false
  public get lastscandate() {
    return this.getStringAttribute('lastscandate');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // pr - computed: true, optional: false, required: false
  private _pr = new DataBridgecrewCodeReviewsCodereviewsPrList(this, "pr", true);
  public get pr() {
    return this._pr;
  }

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataBridgecrewCodeReviewsCodereviewsResultsList(this, "results", true);
  public get results() {
    return this._results;
  }

  // run_id - computed: true, optional: false, required: false
  public get runId() {
    return this.getNumberAttribute('run_id');
  }

  // scan_status - computed: true, optional: false, required: false
  public get scanStatus() {
    return this.getStringAttribute('scan_status');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataBridgecrewCodeReviewsCodereviewsList extends cdktf.ComplexList {

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
  public get(index: number): DataBridgecrewCodeReviewsCodereviewsOutputReference {
    return new DataBridgecrewCodeReviewsCodereviewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/code_reviews bridgecrew_code_reviews}
*/
export class DataBridgecrewCodeReviews extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bridgecrew_code_reviews";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBridgecrewCodeReviews resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBridgecrewCodeReviews to import
  * @param importFromId The id of the existing DataBridgecrewCodeReviews that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/code_reviews#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBridgecrewCodeReviews to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bridgecrew_code_reviews", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/code_reviews bridgecrew_code_reviews} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBridgecrewCodeReviewsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBridgecrewCodeReviewsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bridgecrew_code_reviews',
      terraformGeneratorMetadata: {
        providerName: 'bridgecrew',
        providerVersion: '0.3.7',
        providerVersionConstraint: '0.3.7'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // codereviews - computed: true, optional: false, required: false
  private _codereviews = new DataBridgecrewCodeReviewsCodereviewsList(this, "codereviews", false);
  public get codereviews() {
    return this._codereviews;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
