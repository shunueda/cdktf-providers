// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/application#id DataScmApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/application#name DataScmApplication#name}
  */
  readonly name?: string;
}
export interface DataScmApplicationDefaultIdentByIcmp6Type {
}

export function dataScmApplicationDefaultIdentByIcmp6TypeToTerraform(struct?: DataScmApplicationDefaultIdentByIcmp6Type): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmApplicationDefaultIdentByIcmp6TypeToHclTerraform(struct?: DataScmApplicationDefaultIdentByIcmp6Type): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmApplicationDefaultIdentByIcmp6TypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmApplicationDefaultIdentByIcmp6Type | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmApplicationDefaultIdentByIcmp6Type | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataScmApplicationDefaultIdentByIcmpType {
}

export function dataScmApplicationDefaultIdentByIcmpTypeToTerraform(struct?: DataScmApplicationDefaultIdentByIcmpType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmApplicationDefaultIdentByIcmpTypeToHclTerraform(struct?: DataScmApplicationDefaultIdentByIcmpType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmApplicationDefaultIdentByIcmpTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmApplicationDefaultIdentByIcmpType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmApplicationDefaultIdentByIcmpType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataScmApplicationDefault {
}

export function dataScmApplicationDefaultToTerraform(struct?: DataScmApplicationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmApplicationDefaultToHclTerraform(struct?: DataScmApplicationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmApplicationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmApplicationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmApplicationDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ident_by_icmp6_type - computed: true, optional: false, required: false
  private _identByIcmp6Type = new DataScmApplicationDefaultIdentByIcmp6TypeOutputReference(this, "ident_by_icmp6_type");
  public get identByIcmp6Type() {
    return this._identByIcmp6Type;
  }

  // ident_by_icmp_type - computed: true, optional: false, required: false
  private _identByIcmpType = new DataScmApplicationDefaultIdentByIcmpTypeOutputReference(this, "ident_by_icmp_type");
  public get identByIcmpType() {
    return this._identByIcmpType;
  }

  // ident_by_ip_protocol - computed: true, optional: false, required: false
  public get identByIpProtocol() {
    return this.getStringAttribute('ident_by_ip_protocol');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getListAttribute('port');
  }
}
export interface DataScmApplicationSignatureAndConditionOrConditionOperatorEqualTo {
}

export function dataScmApplicationSignatureAndConditionOrConditionOperatorEqualToToTerraform(struct?: DataScmApplicationSignatureAndConditionOrConditionOperatorEqualTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmApplicationSignatureAndConditionOrConditionOperatorEqualToToHclTerraform(struct?: DataScmApplicationSignatureAndConditionOrConditionOperatorEqualTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmApplicationSignatureAndConditionOrConditionOperatorEqualToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmApplicationSignatureAndConditionOrConditionOperatorEqualTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmApplicationSignatureAndConditionOrConditionOperatorEqualTo | undefined) {
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

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getStringAttribute('position');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier {
}

export function dataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierToTerraform(struct?: DataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierToHclTerraform(struct?: DataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier | undefined) {
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

export class DataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierList extends cdktf.ComplexList {

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
  public get(index: number): DataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierOutputReference {
    return new DataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThan {
}

export function dataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThanToTerraform(struct?: DataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThanToHclTerraform(struct?: DataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThan | undefined) {
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
  private _qualifier = new DataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataScmApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier {
}

export function dataScmApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierToTerraform(struct?: DataScmApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierToHclTerraform(struct?: DataScmApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier | undefined) {
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

export class DataScmApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierList extends cdktf.ComplexList {

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
  public get(index: number): DataScmApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierOutputReference {
    return new DataScmApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmApplicationSignatureAndConditionOrConditionOperatorLessThan {
}

export function dataScmApplicationSignatureAndConditionOrConditionOperatorLessThanToTerraform(struct?: DataScmApplicationSignatureAndConditionOrConditionOperatorLessThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmApplicationSignatureAndConditionOrConditionOperatorLessThanToHclTerraform(struct?: DataScmApplicationSignatureAndConditionOrConditionOperatorLessThan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmApplicationSignatureAndConditionOrConditionOperatorLessThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmApplicationSignatureAndConditionOrConditionOperatorLessThan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmApplicationSignatureAndConditionOrConditionOperatorLessThan | undefined) {
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
  private _qualifier = new DataScmApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier {
}

export function dataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierToTerraform(struct?: DataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierToHclTerraform(struct?: DataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier | undefined) {
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

export class DataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierList extends cdktf.ComplexList {

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
  public get(index: number): DataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierOutputReference {
    return new DataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatch {
}

export function dataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatchToTerraform(struct?: DataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatchToHclTerraform(struct?: DataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatch | undefined) {
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

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // qualifier - computed: true, optional: false, required: false
  private _qualifier = new DataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }
}
export interface DataScmApplicationSignatureAndConditionOrConditionOperator {
}

export function dataScmApplicationSignatureAndConditionOrConditionOperatorToTerraform(struct?: DataScmApplicationSignatureAndConditionOrConditionOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmApplicationSignatureAndConditionOrConditionOperatorToHclTerraform(struct?: DataScmApplicationSignatureAndConditionOrConditionOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmApplicationSignatureAndConditionOrConditionOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmApplicationSignatureAndConditionOrConditionOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmApplicationSignatureAndConditionOrConditionOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // equal_to - computed: true, optional: false, required: false
  private _equalTo = new DataScmApplicationSignatureAndConditionOrConditionOperatorEqualToOutputReference(this, "equal_to");
  public get equalTo() {
    return this._equalTo;
  }

  // greater_than - computed: true, optional: false, required: false
  private _greaterThan = new DataScmApplicationSignatureAndConditionOrConditionOperatorGreaterThanOutputReference(this, "greater_than");
  public get greaterThan() {
    return this._greaterThan;
  }

  // less_than - computed: true, optional: false, required: false
  private _lessThan = new DataScmApplicationSignatureAndConditionOrConditionOperatorLessThanOutputReference(this, "less_than");
  public get lessThan() {
    return this._lessThan;
  }

  // pattern_match - computed: true, optional: false, required: false
  private _patternMatch = new DataScmApplicationSignatureAndConditionOrConditionOperatorPatternMatchOutputReference(this, "pattern_match");
  public get patternMatch() {
    return this._patternMatch;
  }
}
export interface DataScmApplicationSignatureAndConditionOrCondition {
}

export function dataScmApplicationSignatureAndConditionOrConditionToTerraform(struct?: DataScmApplicationSignatureAndConditionOrCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmApplicationSignatureAndConditionOrConditionToHclTerraform(struct?: DataScmApplicationSignatureAndConditionOrCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmApplicationSignatureAndConditionOrConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmApplicationSignatureAndConditionOrCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmApplicationSignatureAndConditionOrCondition | undefined) {
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
  private _operator = new DataScmApplicationSignatureAndConditionOrConditionOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
}

export class DataScmApplicationSignatureAndConditionOrConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataScmApplicationSignatureAndConditionOrConditionOutputReference {
    return new DataScmApplicationSignatureAndConditionOrConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmApplicationSignatureAndCondition {
}

export function dataScmApplicationSignatureAndConditionToTerraform(struct?: DataScmApplicationSignatureAndCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmApplicationSignatureAndConditionToHclTerraform(struct?: DataScmApplicationSignatureAndCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmApplicationSignatureAndConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmApplicationSignatureAndCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmApplicationSignatureAndCondition | undefined) {
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
  private _orCondition = new DataScmApplicationSignatureAndConditionOrConditionList(this, "or_condition", false);
  public get orCondition() {
    return this._orCondition;
  }
}

export class DataScmApplicationSignatureAndConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataScmApplicationSignatureAndConditionOutputReference {
    return new DataScmApplicationSignatureAndConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmApplicationSignature {
}

export function dataScmApplicationSignatureToTerraform(struct?: DataScmApplicationSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmApplicationSignatureToHclTerraform(struct?: DataScmApplicationSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmApplicationSignatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmApplicationSignature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmApplicationSignature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_condition - computed: true, optional: false, required: false
  private _andCondition = new DataScmApplicationSignatureAndConditionList(this, "and_condition", false);
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

export class DataScmApplicationSignatureList extends cdktf.ComplexList {

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
  public get(index: number): DataScmApplicationSignatureOutputReference {
    return new DataScmApplicationSignatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/application scm_application}
*/
export class DataScmApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmApplication to import
  * @param importFromId The id of the existing DataScmApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/application scm_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_application',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // able_to_transfer_file - computed: true, optional: false, required: false
  public get ableToTransferFile() {
    return this.getBooleanAttribute('able_to_transfer_file');
  }

  // alg_disable_capability - computed: true, optional: false, required: false
  public get algDisableCapability() {
    return this.getStringAttribute('alg_disable_capability');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // consume_big_bandwidth - computed: true, optional: false, required: false
  public get consumeBigBandwidth() {
    return this.getBooleanAttribute('consume_big_bandwidth');
  }

  // data_ident - computed: true, optional: false, required: false
  public get dataIdent() {
    return this.getBooleanAttribute('data_ident');
  }

  // default - computed: true, optional: false, required: false
  private _default = new DataScmApplicationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // evasive_behavior - computed: true, optional: false, required: false
  public get evasiveBehavior() {
    return this.getBooleanAttribute('evasive_behavior');
  }

  // file_type_ident - computed: true, optional: false, required: false
  public get fileTypeIdent() {
    return this.getBooleanAttribute('file_type_ident');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // has_known_vulnerability - computed: true, optional: false, required: false
  public get hasKnownVulnerability() {
    return this.getBooleanAttribute('has_known_vulnerability');
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

  // no_appid_caching - computed: true, optional: false, required: false
  public get noAppidCaching() {
    return this.getBooleanAttribute('no_appid_caching');
  }

  // parent_app - computed: true, optional: false, required: false
  public get parentApp() {
    return this.getStringAttribute('parent_app');
  }

  // pervasive_use - computed: true, optional: false, required: false
  public get pervasiveUse() {
    return this.getBooleanAttribute('pervasive_use');
  }

  // prone_to_misuse - computed: true, optional: false, required: false
  public get proneToMisuse() {
    return this.getBooleanAttribute('prone_to_misuse');
  }

  // risk - computed: true, optional: false, required: false
  public get risk() {
    return this.getStringAttribute('risk');
  }

  // signature - computed: true, optional: false, required: false
  private _signature = new DataScmApplicationSignatureList(this, "signature", false);
  public get signature() {
    return this._signature;
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // subcategory - computed: true, optional: false, required: false
  public get subcategory() {
    return this.getStringAttribute('subcategory');
  }

  // tcp_half_closed_timeout - computed: true, optional: false, required: false
  public get tcpHalfClosedTimeout() {
    return this.getNumberAttribute('tcp_half_closed_timeout');
  }

  // tcp_time_wait_timeout - computed: true, optional: false, required: false
  public get tcpTimeWaitTimeout() {
    return this.getNumberAttribute('tcp_time_wait_timeout');
  }

  // tcp_timeout - computed: true, optional: false, required: false
  public get tcpTimeout() {
    return this.getNumberAttribute('tcp_timeout');
  }

  // technology - computed: true, optional: false, required: false
  public get technology() {
    return this.getStringAttribute('technology');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // tunnel_applications - computed: true, optional: false, required: false
  public get tunnelApplications() {
    return this.getBooleanAttribute('tunnel_applications');
  }

  // tunnel_other_application - computed: true, optional: false, required: false
  public get tunnelOtherApplication() {
    return this.getBooleanAttribute('tunnel_other_application');
  }

  // udp_timeout - computed: true, optional: false, required: false
  public get udpTimeout() {
    return this.getNumberAttribute('udp_timeout');
  }

  // used_by_malware - computed: true, optional: false, required: false
  public get usedByMalware() {
    return this.getBooleanAttribute('used_by_malware');
  }

  // virus_ident - computed: true, optional: false, required: false
  public get virusIdent() {
    return this.getBooleanAttribute('virus_ident');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
