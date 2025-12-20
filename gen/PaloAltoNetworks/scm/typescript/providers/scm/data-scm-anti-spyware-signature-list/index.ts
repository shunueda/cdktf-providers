// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/anti_spyware_signature_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmAntiSpywareSignatureListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/anti_spyware_signature_list#device DataScmAntiSpywareSignatureList#device}
  */
  readonly device?: string;
  /**
  * The folder of the item. Default: Shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/anti_spyware_signature_list#folder DataScmAntiSpywareSignatureList#folder}
  */
  readonly folder?: string;
  /**
  * The max number of items to return. Default: 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/anti_spyware_signature_list#limit DataScmAntiSpywareSignatureList#limit}
  */
  readonly limit?: number;
  /**
  * The name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/anti_spyware_signature_list#name DataScmAntiSpywareSignatureList#name}
  */
  readonly name?: string;
  /**
  * The offset of the first item to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/anti_spyware_signature_list#offset DataScmAntiSpywareSignatureList#offset}
  */
  readonly offset?: number;
  /**
  * The snippet of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/anti_spyware_signature_list#snippet DataScmAntiSpywareSignatureList#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmAntiSpywareSignatureListDataDefaultActionAlert {
}

export function dataScmAntiSpywareSignatureListDataDefaultActionAlertToTerraform(struct?: DataScmAntiSpywareSignatureListDataDefaultActionAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataDefaultActionAlertToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataDefaultActionAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataDefaultActionAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureListDataDefaultActionAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataDefaultActionAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmAntiSpywareSignatureListDataDefaultActionAllow {
}

export function dataScmAntiSpywareSignatureListDataDefaultActionAllowToTerraform(struct?: DataScmAntiSpywareSignatureListDataDefaultActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataDefaultActionAllowToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataDefaultActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataDefaultActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureListDataDefaultActionAllow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataDefaultActionAllow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmAntiSpywareSignatureListDataDefaultActionBlockIp {
}

export function dataScmAntiSpywareSignatureListDataDefaultActionBlockIpToTerraform(struct?: DataScmAntiSpywareSignatureListDataDefaultActionBlockIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataDefaultActionBlockIpToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataDefaultActionBlockIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataDefaultActionBlockIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureListDataDefaultActionBlockIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataDefaultActionBlockIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // track_by - computed: true, optional: false, required: false
  public get trackBy() {
    return this.getStringAttribute('track_by');
  }
}
export interface DataScmAntiSpywareSignatureListDataDefaultActionDrop {
}

export function dataScmAntiSpywareSignatureListDataDefaultActionDropToTerraform(struct?: DataScmAntiSpywareSignatureListDataDefaultActionDrop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataDefaultActionDropToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataDefaultActionDrop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataDefaultActionDropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureListDataDefaultActionDrop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataDefaultActionDrop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmAntiSpywareSignatureListDataDefaultActionResetBoth {
}

export function dataScmAntiSpywareSignatureListDataDefaultActionResetBothToTerraform(struct?: DataScmAntiSpywareSignatureListDataDefaultActionResetBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataDefaultActionResetBothToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataDefaultActionResetBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataDefaultActionResetBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureListDataDefaultActionResetBoth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataDefaultActionResetBoth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmAntiSpywareSignatureListDataDefaultActionResetClient {
}

export function dataScmAntiSpywareSignatureListDataDefaultActionResetClientToTerraform(struct?: DataScmAntiSpywareSignatureListDataDefaultActionResetClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataDefaultActionResetClientToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataDefaultActionResetClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataDefaultActionResetClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureListDataDefaultActionResetClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataDefaultActionResetClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmAntiSpywareSignatureListDataDefaultActionResetServer {
}

export function dataScmAntiSpywareSignatureListDataDefaultActionResetServerToTerraform(struct?: DataScmAntiSpywareSignatureListDataDefaultActionResetServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataDefaultActionResetServerToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataDefaultActionResetServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataDefaultActionResetServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureListDataDefaultActionResetServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataDefaultActionResetServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmAntiSpywareSignatureListDataDefaultAction {
}

export function dataScmAntiSpywareSignatureListDataDefaultActionToTerraform(struct?: DataScmAntiSpywareSignatureListDataDefaultAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataDefaultActionToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataDefaultAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataDefaultActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureListDataDefaultAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataDefaultAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert - computed: true, optional: false, required: false
  private _alert = new DataScmAntiSpywareSignatureListDataDefaultActionAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }

  // allow - computed: true, optional: false, required: false
  private _allow = new DataScmAntiSpywareSignatureListDataDefaultActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }

  // block_ip - computed: true, optional: false, required: false
  private _blockIp = new DataScmAntiSpywareSignatureListDataDefaultActionBlockIpOutputReference(this, "block_ip");
  public get blockIp() {
    return this._blockIp;
  }

  // drop - computed: true, optional: false, required: false
  private _drop = new DataScmAntiSpywareSignatureListDataDefaultActionDropOutputReference(this, "drop");
  public get drop() {
    return this._drop;
  }

  // reset_both - computed: true, optional: false, required: false
  private _resetBoth = new DataScmAntiSpywareSignatureListDataDefaultActionResetBothOutputReference(this, "reset_both");
  public get resetBoth() {
    return this._resetBoth;
  }

  // reset_client - computed: true, optional: false, required: false
  private _resetClient = new DataScmAntiSpywareSignatureListDataDefaultActionResetClientOutputReference(this, "reset_client");
  public get resetClient() {
    return this._resetClient;
  }

  // reset_server - computed: true, optional: false, required: false
  private _resetServer = new DataScmAntiSpywareSignatureListDataDefaultActionResetServerOutputReference(this, "reset_server");
  public get resetServer() {
    return this._resetServer;
  }
}
export interface DataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionOrCondition {
}

export function dataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionOrConditionToTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionOrCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionOrConditionToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionOrCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionOrConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionOrCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionOrCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // threat_id - computed: true, optional: false, required: false
  public get threatId() {
    return this.getStringAttribute('threat_id');
  }
}

export class DataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionOrConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionOrConditionOutputReference {
    return new DataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionOrConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureListDataSignatureCombinationAndCondition {
}

export function dataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionToTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureCombinationAndCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureCombinationAndCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureListDataSignatureCombinationAndCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataSignatureCombinationAndCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // or_condition - computed: true, optional: false, required: false
  private _orCondition = new DataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionOrConditionList(this, "or_condition", false);
  public get orCondition() {
    return this._orCondition;
  }
}

export class DataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionOutputReference {
    return new DataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureListDataSignatureCombinationTimeAttribute {
}

export function dataScmAntiSpywareSignatureListDataSignatureCombinationTimeAttributeToTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureCombinationTimeAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataSignatureCombinationTimeAttributeToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureCombinationTimeAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataSignatureCombinationTimeAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureListDataSignatureCombinationTimeAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataSignatureCombinationTimeAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // track_by - computed: true, optional: false, required: false
  public get trackBy() {
    return this.getStringAttribute('track_by');
  }
}
export interface DataScmAntiSpywareSignatureListDataSignatureCombination {
}

export function dataScmAntiSpywareSignatureListDataSignatureCombinationToTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureCombination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataSignatureCombinationToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureCombination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataSignatureCombinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureListDataSignatureCombination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataSignatureCombination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_condition - computed: true, optional: false, required: false
  private _andCondition = new DataScmAntiSpywareSignatureListDataSignatureCombinationAndConditionList(this, "and_condition", false);
  public get andCondition() {
    return this._andCondition;
  }

  // order_free - computed: true, optional: false, required: false
  public get orderFree() {
    return this.getBooleanAttribute('order_free');
  }

  // time_attribute - computed: true, optional: false, required: false
  private _timeAttribute = new DataScmAntiSpywareSignatureListDataSignatureCombinationTimeAttributeOutputReference(this, "time_attribute");
  public get timeAttribute() {
    return this._timeAttribute;
  }
}
export interface DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualToQualifier {
}

export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualToQualifierToTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualToQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualToQualifierToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualToQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualToQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualToQualifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualToQualifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualToQualifierList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualToQualifierOutputReference {
    return new DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualToQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualTo {
}

export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualToToTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualToToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // context - computed: true, optional: false, required: false
  public get context() {
    return this.getStringAttribute('context');
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // qualifier - computed: true, optional: false, required: false
  private _qualifier = new DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualToQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier {
}

export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierToTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierOutputReference {
    return new DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThan {
}

export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThanToTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThanToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // context - computed: true, optional: false, required: false
  public get context() {
    return this.getStringAttribute('context');
  }

  // qualifier - computed: true, optional: false, required: false
  private _qualifier = new DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThanQualifier {
}

export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThanQualifierToTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThanQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThanQualifierToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThanQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThanQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThanQualifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThanQualifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThanQualifierList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThanQualifierOutputReference {
    return new DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThanQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThan {
}

export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThanToTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThanToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // context - computed: true, optional: false, required: false
  public get context() {
    return this.getStringAttribute('context');
  }

  // qualifier - computed: true, optional: false, required: false
  private _qualifier = new DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThanQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier {
}

export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierToTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierOutputReference {
    return new DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatch {
}

export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatchToTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatchToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // context - computed: true, optional: false, required: false
  public get context() {
    return this.getStringAttribute('context');
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // qualifier - computed: true, optional: false, required: false
  private _qualifier = new DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }
}
export interface DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperator {
}

export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorToTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // equal_to - computed: true, optional: false, required: false
  private _equalTo = new DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorEqualToOutputReference(this, "equal_to");
  public get equalTo() {
    return this._equalTo;
  }

  // greater_than - computed: true, optional: false, required: false
  private _greaterThan = new DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorGreaterThanOutputReference(this, "greater_than");
  public get greaterThan() {
    return this._greaterThan;
  }

  // less_than - computed: true, optional: false, required: false
  private _lessThan = new DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorLessThanOutputReference(this, "less_than");
  public get lessThan() {
    return this._lessThan;
  }

  // pattern_match - computed: true, optional: false, required: false
  private _patternMatch = new DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorPatternMatchOutputReference(this, "pattern_match");
  public get patternMatch() {
    return this._patternMatch;
  }
}
export interface DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrCondition {
}

export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionToTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operator - computed: true, optional: false, required: false
  private _operator = new DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOutputReference {
    return new DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureListDataSignatureStandardAndCondition {
}

export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionToTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataSignatureStandardAndConditionToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandardAndCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureListDataSignatureStandardAndCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataSignatureStandardAndCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // or_condition - computed: true, optional: false, required: false
  private _orCondition = new DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOrConditionList(this, "or_condition", false);
  public get orCondition() {
    return this._orCondition;
  }
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOutputReference {
    return new DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureListDataSignatureStandard {
}

export function dataScmAntiSpywareSignatureListDataSignatureStandardToTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataSignatureStandardToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataSignatureStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureListDataSignatureStandard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataSignatureStandard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_condition - computed: true, optional: false, required: false
  private _andCondition = new DataScmAntiSpywareSignatureListDataSignatureStandardAndConditionList(this, "and_condition", false);
  public get andCondition() {
    return this._andCondition;
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // order_free - computed: true, optional: false, required: false
  public get orderFree() {
    return this.getBooleanAttribute('order_free');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}

export class DataScmAntiSpywareSignatureListDataSignatureStandardList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureListDataSignatureStandardOutputReference {
    return new DataScmAntiSpywareSignatureListDataSignatureStandardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureListDataSignature {
}

export function dataScmAntiSpywareSignatureListDataSignatureToTerraform(struct?: DataScmAntiSpywareSignatureListDataSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureListDataSignatureToHclTerraform(struct?: DataScmAntiSpywareSignatureListDataSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureListDataSignatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureListDataSignature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListDataSignature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // combination - computed: true, optional: false, required: false
  private _combination = new DataScmAntiSpywareSignatureListDataSignatureCombinationOutputReference(this, "combination");
  public get combination() {
    return this._combination;
  }

  // standard - computed: true, optional: false, required: false
  private _standard = new DataScmAntiSpywareSignatureListDataSignatureStandardList(this, "standard", false);
  public get standard() {
    return this._standard;
  }
}
export interface DataScmAntiSpywareSignatureListData {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/anti_spyware_signature_list#device DataScmAntiSpywareSignatureList#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/anti_spyware_signature_list#folder DataScmAntiSpywareSignatureList#folder}
  */
  readonly folder?: string;
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/anti_spyware_signature_list#id DataScmAntiSpywareSignatureList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/anti_spyware_signature_list#snippet DataScmAntiSpywareSignatureList#snippet}
  */
  readonly snippet?: string;
}

export function dataScmAntiSpywareSignatureListDataToTerraform(struct?: DataScmAntiSpywareSignatureListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    folder: cdktf.stringToTerraform(struct!.folder),
    id: cdktf.stringToTerraform(struct!.id),
    snippet: cdktf.stringToTerraform(struct!.snippet),
  }
}


export function dataScmAntiSpywareSignatureListDataToHclTerraform(struct?: DataScmAntiSpywareSignatureListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snippet: {
      value: cdktf.stringToHclTerraform(struct!.snippet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataScmAntiSpywareSignatureListDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._snippet !== undefined) {
      hasAnyValues = true;
      internalValueResult.snippet = this._snippet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._folder = undefined;
      this._id = undefined;
      this._snippet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._folder = value.folder;
      this._id = value.id;
      this._snippet = value.snippet;
    }
  }

  // bugtraq - computed: true, optional: false, required: false
  public get bugtraq() {
    return this.getListAttribute('bugtraq');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // cve - computed: true, optional: false, required: false
  public get cve() {
    return this.getListAttribute('cve');
  }

  // default_action - computed: true, optional: false, required: false
  private _defaultAction = new DataScmAntiSpywareSignatureListDataDefaultActionOutputReference(this, "default_action");
  public get defaultAction() {
    return this._defaultAction;
  }

  // device - computed: true, optional: true, required: false
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

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // folder - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getListAttribute('reference');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // signature - computed: true, optional: false, required: false
  private _signature = new DataScmAntiSpywareSignatureListDataSignatureOutputReference(this, "signature");
  public get signature() {
    return this._signature;
  }

  // snippet - computed: true, optional: true, required: false
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

  // threat_id - computed: true, optional: false, required: false
  public get threatId() {
    return this.getStringAttribute('threat_id');
  }

  // threatname - computed: true, optional: false, required: false
  public get threatname() {
    return this.getStringAttribute('threatname');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getListAttribute('vendor');
  }
}

export class DataScmAntiSpywareSignatureListDataList extends cdktf.ComplexList {
  public internalValue? : DataScmAntiSpywareSignatureListData[] | cdktf.IResolvable

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
  public get(index: number): DataScmAntiSpywareSignatureListDataOutputReference {
    return new DataScmAntiSpywareSignatureListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/anti_spyware_signature_list scm_anti_spyware_signature_list}
*/
export class DataScmAntiSpywareSignatureList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_anti_spyware_signature_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmAntiSpywareSignatureList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmAntiSpywareSignatureList to import
  * @param importFromId The id of the existing DataScmAntiSpywareSignatureList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/anti_spyware_signature_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmAntiSpywareSignatureList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_anti_spyware_signature_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/anti_spyware_signature_list scm_anti_spyware_signature_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmAntiSpywareSignatureListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataScmAntiSpywareSignatureListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_anti_spyware_signature_list',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._limit = config.limit;
    this._name = config.name;
    this._offset = config.offset;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataScmAntiSpywareSignatureListDataList(this, "data", false);
  public get data() {
    return this._data;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // name - computed: false, optional: true, required: false
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

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
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

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      offset: cdktf.numberToTerraform(this._offset),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
