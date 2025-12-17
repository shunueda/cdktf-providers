// https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/webapput
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviWebapputConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/webapput#id DataAviWebapput#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/webapput#name DataAviWebapput#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/webapput#tenant_ref DataAviWebapput#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/webapput#uuid DataAviWebapput#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviWebapputConfigpbAttributes {
}

export function dataAviWebapputConfigpbAttributesToTerraform(struct?: DataAviWebapputConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputConfigpbAttributesToHclTerraform(struct?: DataAviWebapputConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputConfigpbAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputConfigpbAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAviWebapputConfigpbAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputConfigpbAttributesOutputReference {
    return new DataAviWebapputConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessage {
}

export function dataAviWebapputMandatoryTestMandatoryMessageMandatoryMessageToTerraform(struct?: DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputMandatoryTestMandatoryMessageMandatoryMessageToHclTerraform(struct?: DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional_string - computed: true, optional: false, required: false
  public get optionalString() {
    return this.getStringAttribute('optional_string');
  }
}

export class DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessageOutputReference {
    return new DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessages {
}

export function dataAviWebapputMandatoryTestMandatoryMessageMandatoryMessagesToTerraform(struct?: DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputMandatoryTestMandatoryMessageMandatoryMessagesToHclTerraform(struct?: DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional_string - computed: true, optional: false, required: false
  public get optionalString() {
    return this.getStringAttribute('optional_string');
  }
}

export class DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessagesOutputReference {
    return new DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputMandatoryTestMandatoryMessage {
}

export function dataAviWebapputMandatoryTestMandatoryMessageToTerraform(struct?: DataAviWebapputMandatoryTestMandatoryMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputMandatoryTestMandatoryMessageToHclTerraform(struct?: DataAviWebapputMandatoryTestMandatoryMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputMandatoryTestMandatoryMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputMandatoryTestMandatoryMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputMandatoryTestMandatoryMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mandatory_message - computed: true, optional: false, required: false
  private _mandatoryMessage = new DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessageList(this, "mandatory_message", true);
  public get mandatoryMessage() {
    return this._mandatoryMessage;
  }

  // mandatory_messages - computed: true, optional: false, required: false
  private _mandatoryMessages = new DataAviWebapputMandatoryTestMandatoryMessageMandatoryMessagesList(this, "mandatory_messages", false);
  public get mandatoryMessages() {
    return this._mandatoryMessages;
  }

  // mandatory_string - computed: true, optional: false, required: false
  public get mandatoryString() {
    return this.getStringAttribute('mandatory_string');
  }

  // mandatory_strings - computed: true, optional: false, required: false
  public get mandatoryStrings() {
    return this.getListAttribute('mandatory_strings');
  }
}

export class DataAviWebapputMandatoryTestMandatoryMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputMandatoryTestMandatoryMessageOutputReference {
    return new DataAviWebapputMandatoryTestMandatoryMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessage {
}

export function dataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessageToTerraform(struct?: DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessageToHclTerraform(struct?: DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional_string - computed: true, optional: false, required: false
  public get optionalString() {
    return this.getStringAttribute('optional_string');
  }
}

export class DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessageOutputReference {
    return new DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessages {
}

export function dataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessagesToTerraform(struct?: DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessagesToHclTerraform(struct?: DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional_string - computed: true, optional: false, required: false
  public get optionalString() {
    return this.getStringAttribute('optional_string');
  }
}

export class DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessagesOutputReference {
    return new DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputMandatoryTestMandatoryMessages {
}

export function dataAviWebapputMandatoryTestMandatoryMessagesToTerraform(struct?: DataAviWebapputMandatoryTestMandatoryMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputMandatoryTestMandatoryMessagesToHclTerraform(struct?: DataAviWebapputMandatoryTestMandatoryMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputMandatoryTestMandatoryMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputMandatoryTestMandatoryMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputMandatoryTestMandatoryMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mandatory_message - computed: true, optional: false, required: false
  private _mandatoryMessage = new DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessageList(this, "mandatory_message", true);
  public get mandatoryMessage() {
    return this._mandatoryMessage;
  }

  // mandatory_messages - computed: true, optional: false, required: false
  private _mandatoryMessages = new DataAviWebapputMandatoryTestMandatoryMessagesMandatoryMessagesList(this, "mandatory_messages", false);
  public get mandatoryMessages() {
    return this._mandatoryMessages;
  }

  // mandatory_string - computed: true, optional: false, required: false
  public get mandatoryString() {
    return this.getStringAttribute('mandatory_string');
  }

  // mandatory_strings - computed: true, optional: false, required: false
  public get mandatoryStrings() {
    return this.getListAttribute('mandatory_strings');
  }
}

export class DataAviWebapputMandatoryTestMandatoryMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputMandatoryTestMandatoryMessagesOutputReference {
    return new DataAviWebapputMandatoryTestMandatoryMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputMandatoryTest {
}

export function dataAviWebapputMandatoryTestToTerraform(struct?: DataAviWebapputMandatoryTest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputMandatoryTestToHclTerraform(struct?: DataAviWebapputMandatoryTest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputMandatoryTestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputMandatoryTest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputMandatoryTest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mandatory_message - computed: true, optional: false, required: false
  private _mandatoryMessage = new DataAviWebapputMandatoryTestMandatoryMessageList(this, "mandatory_message", true);
  public get mandatoryMessage() {
    return this._mandatoryMessage;
  }

  // mandatory_messages - computed: true, optional: false, required: false
  private _mandatoryMessages = new DataAviWebapputMandatoryTestMandatoryMessagesList(this, "mandatory_messages", false);
  public get mandatoryMessages() {
    return this._mandatoryMessages;
  }

  // mandatory_string - computed: true, optional: false, required: false
  public get mandatoryString() {
    return this.getStringAttribute('mandatory_string');
  }

  // mandatory_strings - computed: true, optional: false, required: false
  public get mandatoryStrings() {
    return this.getListAttribute('mandatory_strings');
  }
}

export class DataAviWebapputMandatoryTestList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputMandatoryTestOutputReference {
    return new DataAviWebapputMandatoryTestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessage {
}

export function dataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessageToTerraform(struct?: DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessageToHclTerraform(struct?: DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional_string - computed: true, optional: false, required: false
  public get optionalString() {
    return this.getStringAttribute('optional_string');
  }
}

export class DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessageOutputReference {
    return new DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessages {
}

export function dataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessagesToTerraform(struct?: DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessagesToHclTerraform(struct?: DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional_string - computed: true, optional: false, required: false
  public get optionalString() {
    return this.getStringAttribute('optional_string');
  }
}

export class DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessagesOutputReference {
    return new DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputMandatoryTestsMandatoryMessage {
}

export function dataAviWebapputMandatoryTestsMandatoryMessageToTerraform(struct?: DataAviWebapputMandatoryTestsMandatoryMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputMandatoryTestsMandatoryMessageToHclTerraform(struct?: DataAviWebapputMandatoryTestsMandatoryMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputMandatoryTestsMandatoryMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputMandatoryTestsMandatoryMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputMandatoryTestsMandatoryMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mandatory_message - computed: true, optional: false, required: false
  private _mandatoryMessage = new DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessageList(this, "mandatory_message", true);
  public get mandatoryMessage() {
    return this._mandatoryMessage;
  }

  // mandatory_messages - computed: true, optional: false, required: false
  private _mandatoryMessages = new DataAviWebapputMandatoryTestsMandatoryMessageMandatoryMessagesList(this, "mandatory_messages", false);
  public get mandatoryMessages() {
    return this._mandatoryMessages;
  }

  // mandatory_string - computed: true, optional: false, required: false
  public get mandatoryString() {
    return this.getStringAttribute('mandatory_string');
  }

  // mandatory_strings - computed: true, optional: false, required: false
  public get mandatoryStrings() {
    return this.getListAttribute('mandatory_strings');
  }
}

export class DataAviWebapputMandatoryTestsMandatoryMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputMandatoryTestsMandatoryMessageOutputReference {
    return new DataAviWebapputMandatoryTestsMandatoryMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessage {
}

export function dataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessageToTerraform(struct?: DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessageToHclTerraform(struct?: DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional_string - computed: true, optional: false, required: false
  public get optionalString() {
    return this.getStringAttribute('optional_string');
  }
}

export class DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessageOutputReference {
    return new DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessages {
}

export function dataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessagesToTerraform(struct?: DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessagesToHclTerraform(struct?: DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional_string - computed: true, optional: false, required: false
  public get optionalString() {
    return this.getStringAttribute('optional_string');
  }
}

export class DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessagesOutputReference {
    return new DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputMandatoryTestsMandatoryMessages {
}

export function dataAviWebapputMandatoryTestsMandatoryMessagesToTerraform(struct?: DataAviWebapputMandatoryTestsMandatoryMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputMandatoryTestsMandatoryMessagesToHclTerraform(struct?: DataAviWebapputMandatoryTestsMandatoryMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputMandatoryTestsMandatoryMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputMandatoryTestsMandatoryMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputMandatoryTestsMandatoryMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mandatory_message - computed: true, optional: false, required: false
  private _mandatoryMessage = new DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessageList(this, "mandatory_message", true);
  public get mandatoryMessage() {
    return this._mandatoryMessage;
  }

  // mandatory_messages - computed: true, optional: false, required: false
  private _mandatoryMessages = new DataAviWebapputMandatoryTestsMandatoryMessagesMandatoryMessagesList(this, "mandatory_messages", false);
  public get mandatoryMessages() {
    return this._mandatoryMessages;
  }

  // mandatory_string - computed: true, optional: false, required: false
  public get mandatoryString() {
    return this.getStringAttribute('mandatory_string');
  }

  // mandatory_strings - computed: true, optional: false, required: false
  public get mandatoryStrings() {
    return this.getListAttribute('mandatory_strings');
  }
}

export class DataAviWebapputMandatoryTestsMandatoryMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputMandatoryTestsMandatoryMessagesOutputReference {
    return new DataAviWebapputMandatoryTestsMandatoryMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputMandatoryTests {
}

export function dataAviWebapputMandatoryTestsToTerraform(struct?: DataAviWebapputMandatoryTests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputMandatoryTestsToHclTerraform(struct?: DataAviWebapputMandatoryTests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputMandatoryTestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputMandatoryTests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputMandatoryTests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mandatory_message - computed: true, optional: false, required: false
  private _mandatoryMessage = new DataAviWebapputMandatoryTestsMandatoryMessageList(this, "mandatory_message", true);
  public get mandatoryMessage() {
    return this._mandatoryMessage;
  }

  // mandatory_messages - computed: true, optional: false, required: false
  private _mandatoryMessages = new DataAviWebapputMandatoryTestsMandatoryMessagesList(this, "mandatory_messages", false);
  public get mandatoryMessages() {
    return this._mandatoryMessages;
  }

  // mandatory_string - computed: true, optional: false, required: false
  public get mandatoryString() {
    return this.getStringAttribute('mandatory_string');
  }

  // mandatory_strings - computed: true, optional: false, required: false
  public get mandatoryStrings() {
    return this.getListAttribute('mandatory_strings');
  }
}

export class DataAviWebapputMandatoryTestsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputMandatoryTestsOutputReference {
    return new DataAviWebapputMandatoryTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessage {
}

export function dataAviWebapputSensitiveTestSensitiveMessageSensitiveMessageToTerraform(struct?: DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputSensitiveTestSensitiveMessageSensitiveMessageToHclTerraform(struct?: DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional_sensitive_string - computed: true, optional: false, required: false
  public get optionalSensitiveString() {
    return this.getStringAttribute('optional_sensitive_string');
  }
}

export class DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessageOutputReference {
    return new DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessages {
}

export function dataAviWebapputSensitiveTestSensitiveMessageSensitiveMessagesToTerraform(struct?: DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputSensitiveTestSensitiveMessageSensitiveMessagesToHclTerraform(struct?: DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional_sensitive_string - computed: true, optional: false, required: false
  public get optionalSensitiveString() {
    return this.getStringAttribute('optional_sensitive_string');
  }
}

export class DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessagesOutputReference {
    return new DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputSensitiveTestSensitiveMessage {
}

export function dataAviWebapputSensitiveTestSensitiveMessageToTerraform(struct?: DataAviWebapputSensitiveTestSensitiveMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputSensitiveTestSensitiveMessageToHclTerraform(struct?: DataAviWebapputSensitiveTestSensitiveMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputSensitiveTestSensitiveMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputSensitiveTestSensitiveMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputSensitiveTestSensitiveMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sensitive_message - computed: true, optional: false, required: false
  private _sensitiveMessage = new DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessageList(this, "sensitive_message", true);
  public get sensitiveMessage() {
    return this._sensitiveMessage;
  }

  // sensitive_messages - computed: true, optional: false, required: false
  private _sensitiveMessages = new DataAviWebapputSensitiveTestSensitiveMessageSensitiveMessagesList(this, "sensitive_messages", false);
  public get sensitiveMessages() {
    return this._sensitiveMessages;
  }

  // sensitive_string - computed: true, optional: false, required: false
  public get sensitiveString() {
    return this.getStringAttribute('sensitive_string');
  }
}

export class DataAviWebapputSensitiveTestSensitiveMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputSensitiveTestSensitiveMessageOutputReference {
    return new DataAviWebapputSensitiveTestSensitiveMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessage {
}

export function dataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessageToTerraform(struct?: DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessageToHclTerraform(struct?: DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional_sensitive_string - computed: true, optional: false, required: false
  public get optionalSensitiveString() {
    return this.getStringAttribute('optional_sensitive_string');
  }
}

export class DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessageOutputReference {
    return new DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessages {
}

export function dataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessagesToTerraform(struct?: DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessagesToHclTerraform(struct?: DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional_sensitive_string - computed: true, optional: false, required: false
  public get optionalSensitiveString() {
    return this.getStringAttribute('optional_sensitive_string');
  }
}

export class DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessagesOutputReference {
    return new DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputSensitiveTestSensitiveMessages {
}

export function dataAviWebapputSensitiveTestSensitiveMessagesToTerraform(struct?: DataAviWebapputSensitiveTestSensitiveMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputSensitiveTestSensitiveMessagesToHclTerraform(struct?: DataAviWebapputSensitiveTestSensitiveMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputSensitiveTestSensitiveMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputSensitiveTestSensitiveMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputSensitiveTestSensitiveMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sensitive_message - computed: true, optional: false, required: false
  private _sensitiveMessage = new DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessageList(this, "sensitive_message", true);
  public get sensitiveMessage() {
    return this._sensitiveMessage;
  }

  // sensitive_messages - computed: true, optional: false, required: false
  private _sensitiveMessages = new DataAviWebapputSensitiveTestSensitiveMessagesSensitiveMessagesList(this, "sensitive_messages", false);
  public get sensitiveMessages() {
    return this._sensitiveMessages;
  }

  // sensitive_string - computed: true, optional: false, required: false
  public get sensitiveString() {
    return this.getStringAttribute('sensitive_string');
  }
}

export class DataAviWebapputSensitiveTestSensitiveMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputSensitiveTestSensitiveMessagesOutputReference {
    return new DataAviWebapputSensitiveTestSensitiveMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputSensitiveTest {
}

export function dataAviWebapputSensitiveTestToTerraform(struct?: DataAviWebapputSensitiveTest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputSensitiveTestToHclTerraform(struct?: DataAviWebapputSensitiveTest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputSensitiveTestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputSensitiveTest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputSensitiveTest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sensitive_message - computed: true, optional: false, required: false
  private _sensitiveMessage = new DataAviWebapputSensitiveTestSensitiveMessageList(this, "sensitive_message", true);
  public get sensitiveMessage() {
    return this._sensitiveMessage;
  }

  // sensitive_messages - computed: true, optional: false, required: false
  private _sensitiveMessages = new DataAviWebapputSensitiveTestSensitiveMessagesList(this, "sensitive_messages", false);
  public get sensitiveMessages() {
    return this._sensitiveMessages;
  }

  // sensitive_string - computed: true, optional: false, required: false
  public get sensitiveString() {
    return this.getStringAttribute('sensitive_string');
  }
}

export class DataAviWebapputSensitiveTestList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputSensitiveTestOutputReference {
    return new DataAviWebapputSensitiveTestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessage {
}

export function dataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessageToTerraform(struct?: DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessageToHclTerraform(struct?: DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional_sensitive_string - computed: true, optional: false, required: false
  public get optionalSensitiveString() {
    return this.getStringAttribute('optional_sensitive_string');
  }
}

export class DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessageOutputReference {
    return new DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessages {
}

export function dataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessagesToTerraform(struct?: DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessagesToHclTerraform(struct?: DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional_sensitive_string - computed: true, optional: false, required: false
  public get optionalSensitiveString() {
    return this.getStringAttribute('optional_sensitive_string');
  }
}

export class DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessagesOutputReference {
    return new DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputSensitiveTestsSensitiveMessage {
}

export function dataAviWebapputSensitiveTestsSensitiveMessageToTerraform(struct?: DataAviWebapputSensitiveTestsSensitiveMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputSensitiveTestsSensitiveMessageToHclTerraform(struct?: DataAviWebapputSensitiveTestsSensitiveMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputSensitiveTestsSensitiveMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputSensitiveTestsSensitiveMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputSensitiveTestsSensitiveMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sensitive_message - computed: true, optional: false, required: false
  private _sensitiveMessage = new DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessageList(this, "sensitive_message", true);
  public get sensitiveMessage() {
    return this._sensitiveMessage;
  }

  // sensitive_messages - computed: true, optional: false, required: false
  private _sensitiveMessages = new DataAviWebapputSensitiveTestsSensitiveMessageSensitiveMessagesList(this, "sensitive_messages", false);
  public get sensitiveMessages() {
    return this._sensitiveMessages;
  }

  // sensitive_string - computed: true, optional: false, required: false
  public get sensitiveString() {
    return this.getStringAttribute('sensitive_string');
  }
}

export class DataAviWebapputSensitiveTestsSensitiveMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputSensitiveTestsSensitiveMessageOutputReference {
    return new DataAviWebapputSensitiveTestsSensitiveMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessage {
}

export function dataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessageToTerraform(struct?: DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessageToHclTerraform(struct?: DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional_sensitive_string - computed: true, optional: false, required: false
  public get optionalSensitiveString() {
    return this.getStringAttribute('optional_sensitive_string');
  }
}

export class DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessageOutputReference {
    return new DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessages {
}

export function dataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessagesToTerraform(struct?: DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessagesToHclTerraform(struct?: DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional_sensitive_string - computed: true, optional: false, required: false
  public get optionalSensitiveString() {
    return this.getStringAttribute('optional_sensitive_string');
  }
}

export class DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessagesOutputReference {
    return new DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputSensitiveTestsSensitiveMessages {
}

export function dataAviWebapputSensitiveTestsSensitiveMessagesToTerraform(struct?: DataAviWebapputSensitiveTestsSensitiveMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputSensitiveTestsSensitiveMessagesToHclTerraform(struct?: DataAviWebapputSensitiveTestsSensitiveMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputSensitiveTestsSensitiveMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputSensitiveTestsSensitiveMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputSensitiveTestsSensitiveMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sensitive_message - computed: true, optional: false, required: false
  private _sensitiveMessage = new DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessageList(this, "sensitive_message", true);
  public get sensitiveMessage() {
    return this._sensitiveMessage;
  }

  // sensitive_messages - computed: true, optional: false, required: false
  private _sensitiveMessages = new DataAviWebapputSensitiveTestsSensitiveMessagesSensitiveMessagesList(this, "sensitive_messages", false);
  public get sensitiveMessages() {
    return this._sensitiveMessages;
  }

  // sensitive_string - computed: true, optional: false, required: false
  public get sensitiveString() {
    return this.getStringAttribute('sensitive_string');
  }
}

export class DataAviWebapputSensitiveTestsSensitiveMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputSensitiveTestsSensitiveMessagesOutputReference {
    return new DataAviWebapputSensitiveTestsSensitiveMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputSensitiveTests {
}

export function dataAviWebapputSensitiveTestsToTerraform(struct?: DataAviWebapputSensitiveTests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputSensitiveTestsToHclTerraform(struct?: DataAviWebapputSensitiveTests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputSensitiveTestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputSensitiveTests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputSensitiveTests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sensitive_message - computed: true, optional: false, required: false
  private _sensitiveMessage = new DataAviWebapputSensitiveTestsSensitiveMessageList(this, "sensitive_message", true);
  public get sensitiveMessage() {
    return this._sensitiveMessage;
  }

  // sensitive_messages - computed: true, optional: false, required: false
  private _sensitiveMessages = new DataAviWebapputSensitiveTestsSensitiveMessagesList(this, "sensitive_messages", false);
  public get sensitiveMessages() {
    return this._sensitiveMessages;
  }

  // sensitive_string - computed: true, optional: false, required: false
  public get sensitiveString() {
    return this.getStringAttribute('sensitive_string');
  }
}

export class DataAviWebapputSensitiveTestsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputSensitiveTestsOutputReference {
    return new DataAviWebapputSensitiveTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessage {
}

export function dataAviWebapputStringLengthTestStringLengthMessageStringLengthMessageToTerraform(struct?: DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputStringLengthTestStringLengthMessageStringLengthMessageToHclTerraform(struct?: DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // test_string - computed: true, optional: false, required: false
  public get testString() {
    return this.getStringAttribute('test_string');
  }
}

export class DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessageOutputReference {
    return new DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessages {
}

export function dataAviWebapputStringLengthTestStringLengthMessageStringLengthMessagesToTerraform(struct?: DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputStringLengthTestStringLengthMessageStringLengthMessagesToHclTerraform(struct?: DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // test_string - computed: true, optional: false, required: false
  public get testString() {
    return this.getStringAttribute('test_string');
  }
}

export class DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessagesOutputReference {
    return new DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputStringLengthTestStringLengthMessage {
}

export function dataAviWebapputStringLengthTestStringLengthMessageToTerraform(struct?: DataAviWebapputStringLengthTestStringLengthMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputStringLengthTestStringLengthMessageToHclTerraform(struct?: DataAviWebapputStringLengthTestStringLengthMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputStringLengthTestStringLengthMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputStringLengthTestStringLengthMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputStringLengthTestStringLengthMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_length_message - computed: true, optional: false, required: false
  private _stringLengthMessage = new DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessageList(this, "string_length_message", true);
  public get stringLengthMessage() {
    return this._stringLengthMessage;
  }

  // string_length_messages - computed: true, optional: false, required: false
  private _stringLengthMessages = new DataAviWebapputStringLengthTestStringLengthMessageStringLengthMessagesList(this, "string_length_messages", false);
  public get stringLengthMessages() {
    return this._stringLengthMessages;
  }

  // test_string - computed: true, optional: false, required: false
  public get testString() {
    return this.getStringAttribute('test_string');
  }

  // test_strings - computed: true, optional: false, required: false
  public get testStrings() {
    return this.getListAttribute('test_strings');
  }
}

export class DataAviWebapputStringLengthTestStringLengthMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputStringLengthTestStringLengthMessageOutputReference {
    return new DataAviWebapputStringLengthTestStringLengthMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessage {
}

export function dataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessageToTerraform(struct?: DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessageToHclTerraform(struct?: DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // test_string - computed: true, optional: false, required: false
  public get testString() {
    return this.getStringAttribute('test_string');
  }
}

export class DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessageOutputReference {
    return new DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessages {
}

export function dataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessagesToTerraform(struct?: DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessagesToHclTerraform(struct?: DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // test_string - computed: true, optional: false, required: false
  public get testString() {
    return this.getStringAttribute('test_string');
  }
}

export class DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessagesOutputReference {
    return new DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputStringLengthTestStringLengthMessages {
}

export function dataAviWebapputStringLengthTestStringLengthMessagesToTerraform(struct?: DataAviWebapputStringLengthTestStringLengthMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputStringLengthTestStringLengthMessagesToHclTerraform(struct?: DataAviWebapputStringLengthTestStringLengthMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputStringLengthTestStringLengthMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputStringLengthTestStringLengthMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputStringLengthTestStringLengthMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_length_message - computed: true, optional: false, required: false
  private _stringLengthMessage = new DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessageList(this, "string_length_message", true);
  public get stringLengthMessage() {
    return this._stringLengthMessage;
  }

  // string_length_messages - computed: true, optional: false, required: false
  private _stringLengthMessages = new DataAviWebapputStringLengthTestStringLengthMessagesStringLengthMessagesList(this, "string_length_messages", false);
  public get stringLengthMessages() {
    return this._stringLengthMessages;
  }

  // test_string - computed: true, optional: false, required: false
  public get testString() {
    return this.getStringAttribute('test_string');
  }

  // test_strings - computed: true, optional: false, required: false
  public get testStrings() {
    return this.getListAttribute('test_strings');
  }
}

export class DataAviWebapputStringLengthTestStringLengthMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputStringLengthTestStringLengthMessagesOutputReference {
    return new DataAviWebapputStringLengthTestStringLengthMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputStringLengthTest {
}

export function dataAviWebapputStringLengthTestToTerraform(struct?: DataAviWebapputStringLengthTest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputStringLengthTestToHclTerraform(struct?: DataAviWebapputStringLengthTest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputStringLengthTestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputStringLengthTest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputStringLengthTest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_length_message - computed: true, optional: false, required: false
  private _stringLengthMessage = new DataAviWebapputStringLengthTestStringLengthMessageList(this, "string_length_message", true);
  public get stringLengthMessage() {
    return this._stringLengthMessage;
  }

  // string_length_messages - computed: true, optional: false, required: false
  private _stringLengthMessages = new DataAviWebapputStringLengthTestStringLengthMessagesList(this, "string_length_messages", false);
  public get stringLengthMessages() {
    return this._stringLengthMessages;
  }

  // test_string - computed: true, optional: false, required: false
  public get testString() {
    return this.getStringAttribute('test_string');
  }

  // test_strings - computed: true, optional: false, required: false
  public get testStrings() {
    return this.getListAttribute('test_strings');
  }
}

export class DataAviWebapputStringLengthTestList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputStringLengthTestOutputReference {
    return new DataAviWebapputStringLengthTestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessage {
}

export function dataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessageToTerraform(struct?: DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessageToHclTerraform(struct?: DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // test_string - computed: true, optional: false, required: false
  public get testString() {
    return this.getStringAttribute('test_string');
  }
}

export class DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessageOutputReference {
    return new DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessages {
}

export function dataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessagesToTerraform(struct?: DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessagesToHclTerraform(struct?: DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // test_string - computed: true, optional: false, required: false
  public get testString() {
    return this.getStringAttribute('test_string');
  }
}

export class DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessagesOutputReference {
    return new DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputStringLengthTestsStringLengthMessage {
}

export function dataAviWebapputStringLengthTestsStringLengthMessageToTerraform(struct?: DataAviWebapputStringLengthTestsStringLengthMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputStringLengthTestsStringLengthMessageToHclTerraform(struct?: DataAviWebapputStringLengthTestsStringLengthMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputStringLengthTestsStringLengthMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputStringLengthTestsStringLengthMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputStringLengthTestsStringLengthMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_length_message - computed: true, optional: false, required: false
  private _stringLengthMessage = new DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessageList(this, "string_length_message", true);
  public get stringLengthMessage() {
    return this._stringLengthMessage;
  }

  // string_length_messages - computed: true, optional: false, required: false
  private _stringLengthMessages = new DataAviWebapputStringLengthTestsStringLengthMessageStringLengthMessagesList(this, "string_length_messages", false);
  public get stringLengthMessages() {
    return this._stringLengthMessages;
  }

  // test_string - computed: true, optional: false, required: false
  public get testString() {
    return this.getStringAttribute('test_string');
  }

  // test_strings - computed: true, optional: false, required: false
  public get testStrings() {
    return this.getListAttribute('test_strings');
  }
}

export class DataAviWebapputStringLengthTestsStringLengthMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputStringLengthTestsStringLengthMessageOutputReference {
    return new DataAviWebapputStringLengthTestsStringLengthMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessage {
}

export function dataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessageToTerraform(struct?: DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessageToHclTerraform(struct?: DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // test_string - computed: true, optional: false, required: false
  public get testString() {
    return this.getStringAttribute('test_string');
  }
}

export class DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessageList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessageOutputReference {
    return new DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessages {
}

export function dataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessagesToTerraform(struct?: DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessagesToHclTerraform(struct?: DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // test_string - computed: true, optional: false, required: false
  public get testString() {
    return this.getStringAttribute('test_string');
  }
}

export class DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessagesOutputReference {
    return new DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputStringLengthTestsStringLengthMessages {
}

export function dataAviWebapputStringLengthTestsStringLengthMessagesToTerraform(struct?: DataAviWebapputStringLengthTestsStringLengthMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputStringLengthTestsStringLengthMessagesToHclTerraform(struct?: DataAviWebapputStringLengthTestsStringLengthMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputStringLengthTestsStringLengthMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputStringLengthTestsStringLengthMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputStringLengthTestsStringLengthMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_length_message - computed: true, optional: false, required: false
  private _stringLengthMessage = new DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessageList(this, "string_length_message", true);
  public get stringLengthMessage() {
    return this._stringLengthMessage;
  }

  // string_length_messages - computed: true, optional: false, required: false
  private _stringLengthMessages = new DataAviWebapputStringLengthTestsStringLengthMessagesStringLengthMessagesList(this, "string_length_messages", false);
  public get stringLengthMessages() {
    return this._stringLengthMessages;
  }

  // test_string - computed: true, optional: false, required: false
  public get testString() {
    return this.getStringAttribute('test_string');
  }

  // test_strings - computed: true, optional: false, required: false
  public get testStrings() {
    return this.getListAttribute('test_strings');
  }
}

export class DataAviWebapputStringLengthTestsStringLengthMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputStringLengthTestsStringLengthMessagesOutputReference {
    return new DataAviWebapputStringLengthTestsStringLengthMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviWebapputStringLengthTests {
}

export function dataAviWebapputStringLengthTestsToTerraform(struct?: DataAviWebapputStringLengthTests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviWebapputStringLengthTestsToHclTerraform(struct?: DataAviWebapputStringLengthTests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviWebapputStringLengthTestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviWebapputStringLengthTests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviWebapputStringLengthTests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_length_message - computed: true, optional: false, required: false
  private _stringLengthMessage = new DataAviWebapputStringLengthTestsStringLengthMessageList(this, "string_length_message", true);
  public get stringLengthMessage() {
    return this._stringLengthMessage;
  }

  // string_length_messages - computed: true, optional: false, required: false
  private _stringLengthMessages = new DataAviWebapputStringLengthTestsStringLengthMessagesList(this, "string_length_messages", false);
  public get stringLengthMessages() {
    return this._stringLengthMessages;
  }

  // test_string - computed: true, optional: false, required: false
  public get testString() {
    return this.getStringAttribute('test_string');
  }

  // test_strings - computed: true, optional: false, required: false
  public get testStrings() {
    return this.getListAttribute('test_strings');
  }
}

export class DataAviWebapputStringLengthTestsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviWebapputStringLengthTestsOutputReference {
    return new DataAviWebapputStringLengthTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/webapput avi_webapput}
*/
export class DataAviWebapput extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_webapput";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviWebapput resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviWebapput to import
  * @param importFromId The id of the existing DataAviWebapput that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/webapput#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviWebapput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_webapput", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/webapput avi_webapput} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviWebapputConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviWebapputConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_webapput',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.6',
        providerVersionConstraint: '30.2.6'
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
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviWebapputConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }

  // default_first_int - computed: true, optional: false, required: false
  public get defaultFirstInt() {
    return this.getStringAttribute('default_first_int');
  }

  // default_second_int - computed: true, optional: false, required: false
  public get defaultSecondInt() {
    return this.getStringAttribute('default_second_int');
  }

  // default_string - computed: true, optional: false, required: false
  public get defaultString() {
    return this.getStringAttribute('default_string');
  }

  // default_third_int - computed: true, optional: false, required: false
  public get defaultThirdInt() {
    return this.getStringAttribute('default_third_int');
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

  // mandatory_test - computed: true, optional: false, required: false
  private _mandatoryTest = new DataAviWebapputMandatoryTestList(this, "mandatory_test", true);
  public get mandatoryTest() {
    return this._mandatoryTest;
  }

  // mandatory_tests - computed: true, optional: false, required: false
  private _mandatoryTests = new DataAviWebapputMandatoryTestsList(this, "mandatory_tests", false);
  public get mandatoryTests() {
    return this._mandatoryTests;
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

  // sensitive_test - computed: true, optional: false, required: false
  private _sensitiveTest = new DataAviWebapputSensitiveTestList(this, "sensitive_test", true);
  public get sensitiveTest() {
    return this._sensitiveTest;
  }

  // sensitive_tests - computed: true, optional: false, required: false
  private _sensitiveTests = new DataAviWebapputSensitiveTestsList(this, "sensitive_tests", false);
  public get sensitiveTests() {
    return this._sensitiveTests;
  }

  // skip_optional_check_tests - computed: true, optional: false, required: false
  public get skipOptionalCheckTests() {
    return this.getStringAttribute('skip_optional_check_tests');
  }

  // string_length_test - computed: true, optional: false, required: false
  private _stringLengthTest = new DataAviWebapputStringLengthTestList(this, "string_length_test", true);
  public get stringLengthTest() {
    return this._stringLengthTest;
  }

  // string_length_tests - computed: true, optional: false, required: false
  private _stringLengthTests = new DataAviWebapputStringLengthTestsList(this, "string_length_tests", false);
  public get stringLengthTests() {
    return this._stringLengthTests;
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

  // test_sensitive_string - computed: true, optional: false, required: false
  public get testSensitiveString() {
    return this.getStringAttribute('test_sensitive_string');
  }

  // test_string - computed: true, optional: false, required: false
  public get testString() {
    return this.getStringAttribute('test_string');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
