// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/anti_spyware_signature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmAntiSpywareSignatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/anti_spyware_signature#id DataScmAntiSpywareSignature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataScmAntiSpywareSignatureDefaultActionAlert {
}

export function dataScmAntiSpywareSignatureDefaultActionAlertToTerraform(struct?: DataScmAntiSpywareSignatureDefaultActionAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureDefaultActionAlertToHclTerraform(struct?: DataScmAntiSpywareSignatureDefaultActionAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureDefaultActionAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureDefaultActionAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureDefaultActionAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmAntiSpywareSignatureDefaultActionAllow {
}

export function dataScmAntiSpywareSignatureDefaultActionAllowToTerraform(struct?: DataScmAntiSpywareSignatureDefaultActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureDefaultActionAllowToHclTerraform(struct?: DataScmAntiSpywareSignatureDefaultActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureDefaultActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureDefaultActionAllow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureDefaultActionAllow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmAntiSpywareSignatureDefaultActionBlockIp {
}

export function dataScmAntiSpywareSignatureDefaultActionBlockIpToTerraform(struct?: DataScmAntiSpywareSignatureDefaultActionBlockIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureDefaultActionBlockIpToHclTerraform(struct?: DataScmAntiSpywareSignatureDefaultActionBlockIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureDefaultActionBlockIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureDefaultActionBlockIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureDefaultActionBlockIp | undefined) {
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
export interface DataScmAntiSpywareSignatureDefaultActionDrop {
}

export function dataScmAntiSpywareSignatureDefaultActionDropToTerraform(struct?: DataScmAntiSpywareSignatureDefaultActionDrop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureDefaultActionDropToHclTerraform(struct?: DataScmAntiSpywareSignatureDefaultActionDrop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureDefaultActionDropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureDefaultActionDrop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureDefaultActionDrop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmAntiSpywareSignatureDefaultActionResetBoth {
}

export function dataScmAntiSpywareSignatureDefaultActionResetBothToTerraform(struct?: DataScmAntiSpywareSignatureDefaultActionResetBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureDefaultActionResetBothToHclTerraform(struct?: DataScmAntiSpywareSignatureDefaultActionResetBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureDefaultActionResetBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureDefaultActionResetBoth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureDefaultActionResetBoth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmAntiSpywareSignatureDefaultActionResetClient {
}

export function dataScmAntiSpywareSignatureDefaultActionResetClientToTerraform(struct?: DataScmAntiSpywareSignatureDefaultActionResetClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureDefaultActionResetClientToHclTerraform(struct?: DataScmAntiSpywareSignatureDefaultActionResetClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureDefaultActionResetClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureDefaultActionResetClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureDefaultActionResetClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmAntiSpywareSignatureDefaultActionResetServer {
}

export function dataScmAntiSpywareSignatureDefaultActionResetServerToTerraform(struct?: DataScmAntiSpywareSignatureDefaultActionResetServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureDefaultActionResetServerToHclTerraform(struct?: DataScmAntiSpywareSignatureDefaultActionResetServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureDefaultActionResetServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureDefaultActionResetServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureDefaultActionResetServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmAntiSpywareSignatureDefaultAction {
}

export function dataScmAntiSpywareSignatureDefaultActionToTerraform(struct?: DataScmAntiSpywareSignatureDefaultAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureDefaultActionToHclTerraform(struct?: DataScmAntiSpywareSignatureDefaultAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureDefaultActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureDefaultAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureDefaultAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert - computed: true, optional: false, required: false
  private _alert = new DataScmAntiSpywareSignatureDefaultActionAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }

  // allow - computed: true, optional: false, required: false
  private _allow = new DataScmAntiSpywareSignatureDefaultActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }

  // block_ip - computed: true, optional: false, required: false
  private _blockIp = new DataScmAntiSpywareSignatureDefaultActionBlockIpOutputReference(this, "block_ip");
  public get blockIp() {
    return this._blockIp;
  }

  // drop - computed: true, optional: false, required: false
  private _drop = new DataScmAntiSpywareSignatureDefaultActionDropOutputReference(this, "drop");
  public get drop() {
    return this._drop;
  }

  // reset_both - computed: true, optional: false, required: false
  private _resetBoth = new DataScmAntiSpywareSignatureDefaultActionResetBothOutputReference(this, "reset_both");
  public get resetBoth() {
    return this._resetBoth;
  }

  // reset_client - computed: true, optional: false, required: false
  private _resetClient = new DataScmAntiSpywareSignatureDefaultActionResetClientOutputReference(this, "reset_client");
  public get resetClient() {
    return this._resetClient;
  }

  // reset_server - computed: true, optional: false, required: false
  private _resetServer = new DataScmAntiSpywareSignatureDefaultActionResetServerOutputReference(this, "reset_server");
  public get resetServer() {
    return this._resetServer;
  }
}
export interface DataScmAntiSpywareSignatureSignatureCombinationAndConditionOrCondition {
}

export function dataScmAntiSpywareSignatureSignatureCombinationAndConditionOrConditionToTerraform(struct?: DataScmAntiSpywareSignatureSignatureCombinationAndConditionOrCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureSignatureCombinationAndConditionOrConditionToHclTerraform(struct?: DataScmAntiSpywareSignatureSignatureCombinationAndConditionOrCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureSignatureCombinationAndConditionOrConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureSignatureCombinationAndConditionOrCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureSignatureCombinationAndConditionOrCondition | undefined) {
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

export class DataScmAntiSpywareSignatureSignatureCombinationAndConditionOrConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureSignatureCombinationAndConditionOrConditionOutputReference {
    return new DataScmAntiSpywareSignatureSignatureCombinationAndConditionOrConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureSignatureCombinationAndCondition {
}

export function dataScmAntiSpywareSignatureSignatureCombinationAndConditionToTerraform(struct?: DataScmAntiSpywareSignatureSignatureCombinationAndCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureSignatureCombinationAndConditionToHclTerraform(struct?: DataScmAntiSpywareSignatureSignatureCombinationAndCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureSignatureCombinationAndConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureSignatureCombinationAndCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureSignatureCombinationAndCondition | undefined) {
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
  private _orCondition = new DataScmAntiSpywareSignatureSignatureCombinationAndConditionOrConditionList(this, "or_condition", false);
  public get orCondition() {
    return this._orCondition;
  }
}

export class DataScmAntiSpywareSignatureSignatureCombinationAndConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureSignatureCombinationAndConditionOutputReference {
    return new DataScmAntiSpywareSignatureSignatureCombinationAndConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureSignatureCombinationTimeAttribute {
}

export function dataScmAntiSpywareSignatureSignatureCombinationTimeAttributeToTerraform(struct?: DataScmAntiSpywareSignatureSignatureCombinationTimeAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureSignatureCombinationTimeAttributeToHclTerraform(struct?: DataScmAntiSpywareSignatureSignatureCombinationTimeAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureSignatureCombinationTimeAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureSignatureCombinationTimeAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureSignatureCombinationTimeAttribute | undefined) {
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
export interface DataScmAntiSpywareSignatureSignatureCombination {
}

export function dataScmAntiSpywareSignatureSignatureCombinationToTerraform(struct?: DataScmAntiSpywareSignatureSignatureCombination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureSignatureCombinationToHclTerraform(struct?: DataScmAntiSpywareSignatureSignatureCombination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureSignatureCombinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureSignatureCombination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureSignatureCombination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_condition - computed: true, optional: false, required: false
  private _andCondition = new DataScmAntiSpywareSignatureSignatureCombinationAndConditionList(this, "and_condition", false);
  public get andCondition() {
    return this._andCondition;
  }

  // order_free - computed: true, optional: false, required: false
  public get orderFree() {
    return this.getBooleanAttribute('order_free');
  }

  // time_attribute - computed: true, optional: false, required: false
  private _timeAttribute = new DataScmAntiSpywareSignatureSignatureCombinationTimeAttributeOutputReference(this, "time_attribute");
  public get timeAttribute() {
    return this._timeAttribute;
  }
}
export interface DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifier {
}

export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifierToTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifierToHclTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifier | undefined) {
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

export class DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifierList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifierOutputReference {
    return new DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualTo {
}

export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToToTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToToHclTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualTo | undefined) {
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
  private _qualifier = new DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier {
}

export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierToTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierToHclTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifier | undefined) {
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

export class DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierOutputReference {
    return new DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThan {
}

export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanToTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanToHclTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThan | undefined) {
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
  private _qualifier = new DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifier {
}

export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifierToTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifierToHclTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifier | undefined) {
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

export class DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifierList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifierOutputReference {
    return new DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThan {
}

export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanToTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanToHclTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThan | undefined) {
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
  private _qualifier = new DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier {
}

export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierToTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierToHclTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifier | undefined) {
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

export class DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierOutputReference {
    return new DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatch {
}

export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchToTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchToHclTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatch | undefined) {
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
  private _qualifier = new DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }
}
export interface DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperator {
}

export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorToTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorToHclTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // equal_to - computed: true, optional: false, required: false
  private _equalTo = new DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorEqualToOutputReference(this, "equal_to");
  public get equalTo() {
    return this._equalTo;
  }

  // greater_than - computed: true, optional: false, required: false
  private _greaterThan = new DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorGreaterThanOutputReference(this, "greater_than");
  public get greaterThan() {
    return this._greaterThan;
  }

  // less_than - computed: true, optional: false, required: false
  private _lessThan = new DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorLessThanOutputReference(this, "less_than");
  public get lessThan() {
    return this._lessThan;
  }

  // pattern_match - computed: true, optional: false, required: false
  private _patternMatch = new DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorPatternMatchOutputReference(this, "pattern_match");
  public get patternMatch() {
    return this._patternMatch;
  }
}
export interface DataScmAntiSpywareSignatureSignatureStandardAndConditionOrCondition {
}

export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionToTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionToHclTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureSignatureStandardAndConditionOrCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureSignatureStandardAndConditionOrCondition | undefined) {
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
  private _operator = new DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOutputReference {
    return new DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureSignatureStandardAndCondition {
}

export function dataScmAntiSpywareSignatureSignatureStandardAndConditionToTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureSignatureStandardAndConditionToHclTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandardAndCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureSignatureStandardAndConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureSignatureStandardAndCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureSignatureStandardAndCondition | undefined) {
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
  private _orCondition = new DataScmAntiSpywareSignatureSignatureStandardAndConditionOrConditionList(this, "or_condition", false);
  public get orCondition() {
    return this._orCondition;
  }
}

export class DataScmAntiSpywareSignatureSignatureStandardAndConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureSignatureStandardAndConditionOutputReference {
    return new DataScmAntiSpywareSignatureSignatureStandardAndConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureSignatureStandard {
}

export function dataScmAntiSpywareSignatureSignatureStandardToTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureSignatureStandardToHclTerraform(struct?: DataScmAntiSpywareSignatureSignatureStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureSignatureStandardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmAntiSpywareSignatureSignatureStandard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureSignatureStandard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_condition - computed: true, optional: false, required: false
  private _andCondition = new DataScmAntiSpywareSignatureSignatureStandardAndConditionList(this, "and_condition", false);
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

export class DataScmAntiSpywareSignatureSignatureStandardList extends cdktf.ComplexList {

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
  public get(index: number): DataScmAntiSpywareSignatureSignatureStandardOutputReference {
    return new DataScmAntiSpywareSignatureSignatureStandardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmAntiSpywareSignatureSignature {
}

export function dataScmAntiSpywareSignatureSignatureToTerraform(struct?: DataScmAntiSpywareSignatureSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmAntiSpywareSignatureSignatureToHclTerraform(struct?: DataScmAntiSpywareSignatureSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmAntiSpywareSignatureSignatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmAntiSpywareSignatureSignature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmAntiSpywareSignatureSignature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // combination - computed: true, optional: false, required: false
  private _combination = new DataScmAntiSpywareSignatureSignatureCombinationOutputReference(this, "combination");
  public get combination() {
    return this._combination;
  }

  // standard - computed: true, optional: false, required: false
  private _standard = new DataScmAntiSpywareSignatureSignatureStandardList(this, "standard", false);
  public get standard() {
    return this._standard;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/anti_spyware_signature scm_anti_spyware_signature}
*/
export class DataScmAntiSpywareSignature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_anti_spyware_signature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmAntiSpywareSignature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmAntiSpywareSignature to import
  * @param importFromId The id of the existing DataScmAntiSpywareSignature that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/anti_spyware_signature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmAntiSpywareSignature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_anti_spyware_signature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/anti_spyware_signature scm_anti_spyware_signature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmAntiSpywareSignatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmAntiSpywareSignatureConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_anti_spyware_signature',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
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
  private _defaultAction = new DataScmAntiSpywareSignatureDefaultActionOutputReference(this, "default_action");
  public get defaultAction() {
    return this._defaultAction;
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // id - computed: false, optional: false, required: true
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
  private _signature = new DataScmAntiSpywareSignatureSignatureOutputReference(this, "signature");
  public get signature() {
    return this._signature;
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
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
