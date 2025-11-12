// https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/enforcement_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBridgecrewEnforcementRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/enforcement_rules#id DataBridgecrewEnforcementRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * accountsnotinmainrule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/enforcement_rules#accountsnotinmainrule DataBridgecrewEnforcementRules#accountsnotinmainrule}
  */
  readonly accountsnotinmainrule?: DataBridgecrewEnforcementRulesAccountsnotinmainrule[] | cdktf.IResolvable;
}
export interface DataBridgecrewEnforcementRulesRulesCodecategoriesIac {
}

export function dataBridgecrewEnforcementRulesRulesCodecategoriesIacToTerraform(struct?: DataBridgecrewEnforcementRulesRulesCodecategoriesIac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBridgecrewEnforcementRulesRulesCodecategoriesIacToHclTerraform(struct?: DataBridgecrewEnforcementRulesRulesCodecategoriesIac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBridgecrewEnforcementRulesRulesCodecategoriesIacOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewEnforcementRulesRulesCodecategoriesIac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewEnforcementRulesRulesCodecategoriesIac | undefined) {
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

export class DataBridgecrewEnforcementRulesRulesCodecategoriesIacList extends cdktf.ComplexList {

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
  public get(index: number): DataBridgecrewEnforcementRulesRulesCodecategoriesIacOutputReference {
    return new DataBridgecrewEnforcementRulesRulesCodecategoriesIacOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBridgecrewEnforcementRulesRulesCodecategoriesImages {
}

export function dataBridgecrewEnforcementRulesRulesCodecategoriesImagesToTerraform(struct?: DataBridgecrewEnforcementRulesRulesCodecategoriesImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBridgecrewEnforcementRulesRulesCodecategoriesImagesToHclTerraform(struct?: DataBridgecrewEnforcementRulesRulesCodecategoriesImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBridgecrewEnforcementRulesRulesCodecategoriesImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewEnforcementRulesRulesCodecategoriesImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewEnforcementRulesRulesCodecategoriesImages | undefined) {
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

export class DataBridgecrewEnforcementRulesRulesCodecategoriesImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataBridgecrewEnforcementRulesRulesCodecategoriesImagesOutputReference {
    return new DataBridgecrewEnforcementRulesRulesCodecategoriesImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBridgecrewEnforcementRulesRulesCodecategoriesOpenSource {
}

export function dataBridgecrewEnforcementRulesRulesCodecategoriesOpenSourceToTerraform(struct?: DataBridgecrewEnforcementRulesRulesCodecategoriesOpenSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBridgecrewEnforcementRulesRulesCodecategoriesOpenSourceToHclTerraform(struct?: DataBridgecrewEnforcementRulesRulesCodecategoriesOpenSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBridgecrewEnforcementRulesRulesCodecategoriesOpenSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewEnforcementRulesRulesCodecategoriesOpenSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewEnforcementRulesRulesCodecategoriesOpenSource | undefined) {
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

export class DataBridgecrewEnforcementRulesRulesCodecategoriesOpenSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataBridgecrewEnforcementRulesRulesCodecategoriesOpenSourceOutputReference {
    return new DataBridgecrewEnforcementRulesRulesCodecategoriesOpenSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBridgecrewEnforcementRulesRulesCodecategoriesSecrets {
}

export function dataBridgecrewEnforcementRulesRulesCodecategoriesSecretsToTerraform(struct?: DataBridgecrewEnforcementRulesRulesCodecategoriesSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBridgecrewEnforcementRulesRulesCodecategoriesSecretsToHclTerraform(struct?: DataBridgecrewEnforcementRulesRulesCodecategoriesSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBridgecrewEnforcementRulesRulesCodecategoriesSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewEnforcementRulesRulesCodecategoriesSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewEnforcementRulesRulesCodecategoriesSecrets | undefined) {
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

export class DataBridgecrewEnforcementRulesRulesCodecategoriesSecretsList extends cdktf.ComplexList {

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
  public get(index: number): DataBridgecrewEnforcementRulesRulesCodecategoriesSecretsOutputReference {
    return new DataBridgecrewEnforcementRulesRulesCodecategoriesSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBridgecrewEnforcementRulesRulesCodecategoriesSupplyChain {
}

export function dataBridgecrewEnforcementRulesRulesCodecategoriesSupplyChainToTerraform(struct?: DataBridgecrewEnforcementRulesRulesCodecategoriesSupplyChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBridgecrewEnforcementRulesRulesCodecategoriesSupplyChainToHclTerraform(struct?: DataBridgecrewEnforcementRulesRulesCodecategoriesSupplyChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBridgecrewEnforcementRulesRulesCodecategoriesSupplyChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewEnforcementRulesRulesCodecategoriesSupplyChain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewEnforcementRulesRulesCodecategoriesSupplyChain | undefined) {
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

export class DataBridgecrewEnforcementRulesRulesCodecategoriesSupplyChainList extends cdktf.ComplexList {

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
  public get(index: number): DataBridgecrewEnforcementRulesRulesCodecategoriesSupplyChainOutputReference {
    return new DataBridgecrewEnforcementRulesRulesCodecategoriesSupplyChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBridgecrewEnforcementRulesRulesCodecategories {
}

export function dataBridgecrewEnforcementRulesRulesCodecategoriesToTerraform(struct?: DataBridgecrewEnforcementRulesRulesCodecategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBridgecrewEnforcementRulesRulesCodecategoriesToHclTerraform(struct?: DataBridgecrewEnforcementRulesRulesCodecategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBridgecrewEnforcementRulesRulesCodecategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewEnforcementRulesRulesCodecategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewEnforcementRulesRulesCodecategories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iac - computed: true, optional: false, required: false
  private _iac = new DataBridgecrewEnforcementRulesRulesCodecategoriesIacList(this, "iac", true);
  public get iac() {
    return this._iac;
  }

  // images - computed: true, optional: false, required: false
  private _images = new DataBridgecrewEnforcementRulesRulesCodecategoriesImagesList(this, "images", true);
  public get images() {
    return this._images;
  }

  // open_source - computed: true, optional: false, required: false
  private _openSource = new DataBridgecrewEnforcementRulesRulesCodecategoriesOpenSourceList(this, "open_source", true);
  public get openSource() {
    return this._openSource;
  }

  // secrets - computed: true, optional: false, required: false
  private _secrets = new DataBridgecrewEnforcementRulesRulesCodecategoriesSecretsList(this, "secrets", true);
  public get secrets() {
    return this._secrets;
  }

  // supply_chain - computed: true, optional: false, required: false
  private _supplyChain = new DataBridgecrewEnforcementRulesRulesCodecategoriesSupplyChainList(this, "supply_chain", true);
  public get supplyChain() {
    return this._supplyChain;
  }
}

export class DataBridgecrewEnforcementRulesRulesCodecategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataBridgecrewEnforcementRulesRulesCodecategoriesOutputReference {
    return new DataBridgecrewEnforcementRulesRulesCodecategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBridgecrewEnforcementRulesRules {
}

export function dataBridgecrewEnforcementRulesRulesToTerraform(struct?: DataBridgecrewEnforcementRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBridgecrewEnforcementRulesRulesToHclTerraform(struct?: DataBridgecrewEnforcementRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBridgecrewEnforcementRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewEnforcementRulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewEnforcementRulesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // codecategories - computed: true, optional: false, required: false
  private _codecategories = new DataBridgecrewEnforcementRulesRulesCodecategoriesList(this, "codecategories", true);
  public get codecategories() {
    return this._codecategories;
  }

  // createdby - computed: true, optional: false, required: false
  public get createdby() {
    return this.getStringAttribute('createdby');
  }

  // creationdate - computed: true, optional: false, required: false
  public get creationdate() {
    return this.getStringAttribute('creationdate');
  }

  // editable - computed: true, optional: false, required: false
  public get editable() {
    return this.getBooleanAttribute('editable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mainrule - computed: true, optional: false, required: false
  public get mainrule() {
    return this.getBooleanAttribute('mainrule');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // repositories - computed: true, optional: false, required: false
  public get repositories() {
    return this.getListAttribute('repositories');
  }
}

export class DataBridgecrewEnforcementRulesRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataBridgecrewEnforcementRulesRulesOutputReference {
    return new DataBridgecrewEnforcementRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBridgecrewEnforcementRulesAccountsnotinmainrule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/enforcement_rules#account_id DataBridgecrewEnforcementRules#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/enforcement_rules#account_name DataBridgecrewEnforcementRules#account_name}
  */
  readonly accountName: string;
}

export function dataBridgecrewEnforcementRulesAccountsnotinmainruleToTerraform(struct?: DataBridgecrewEnforcementRulesAccountsnotinmainrule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    account_name: cdktf.stringToTerraform(struct!.accountName),
  }
}


export function dataBridgecrewEnforcementRulesAccountsnotinmainruleToHclTerraform(struct?: DataBridgecrewEnforcementRulesAccountsnotinmainrule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBridgecrewEnforcementRulesAccountsnotinmainruleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewEnforcementRulesAccountsnotinmainrule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewEnforcementRulesAccountsnotinmainrule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._accountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._accountName = value.accountName;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }
}

export class DataBridgecrewEnforcementRulesAccountsnotinmainruleList extends cdktf.ComplexList {
  public internalValue? : DataBridgecrewEnforcementRulesAccountsnotinmainrule[] | cdktf.IResolvable

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
  public get(index: number): DataBridgecrewEnforcementRulesAccountsnotinmainruleOutputReference {
    return new DataBridgecrewEnforcementRulesAccountsnotinmainruleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/enforcement_rules bridgecrew_enforcement_rules}
*/
export class DataBridgecrewEnforcementRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bridgecrew_enforcement_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBridgecrewEnforcementRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBridgecrewEnforcementRules to import
  * @param importFromId The id of the existing DataBridgecrewEnforcementRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/enforcement_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBridgecrewEnforcementRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bridgecrew_enforcement_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/enforcement_rules bridgecrew_enforcement_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBridgecrewEnforcementRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBridgecrewEnforcementRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bridgecrew_enforcement_rules',
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
    this._accountsnotinmainrule.internalValue = config.accountsnotinmainrule;
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

  // rules - computed: true, optional: false, required: false
  private _rules = new DataBridgecrewEnforcementRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // accountsnotinmainrule - computed: false, optional: true, required: false
  private _accountsnotinmainrule = new DataBridgecrewEnforcementRulesAccountsnotinmainruleList(this, "accountsnotinmainrule", false);
  public get accountsnotinmainrule() {
    return this._accountsnotinmainrule;
  }
  public putAccountsnotinmainrule(value: DataBridgecrewEnforcementRulesAccountsnotinmainrule[] | cdktf.IResolvable) {
    this._accountsnotinmainrule.internalValue = value;
  }
  public resetAccountsnotinmainrule() {
    this._accountsnotinmainrule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsnotinmainruleInput() {
    return this._accountsnotinmainrule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      accountsnotinmainrule: cdktf.listMapper(dataBridgecrewEnforcementRulesAccountsnotinmainruleToTerraform, true)(this._accountsnotinmainrule.internalValue),
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
      accountsnotinmainrule: {
        value: cdktf.listMapperHcl(dataBridgecrewEnforcementRulesAccountsnotinmainruleToHclTerraform, true)(this._accountsnotinmainrule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataBridgecrewEnforcementRulesAccountsnotinmainruleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
