// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebapputConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#cloud_ref Webapput#cloud_ref}
  */
  readonly cloudRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#default_fifth_int Webapput#default_fifth_int}
  */
  readonly defaultFifthInt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#default_first_int Webapput#default_first_int}
  */
  readonly defaultFirstInt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#default_fourth_int Webapput#default_fourth_int}
  */
  readonly defaultFourthInt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#default_string Webapput#default_string}
  */
  readonly defaultString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#id Webapput#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#name Webapput#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#skip_optional_check_tests Webapput#skip_optional_check_tests}
  */
  readonly skipOptionalCheckTests?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#tenant_ref Webapput#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_sensitive_string Webapput#test_sensitive_string}
  */
  readonly testSensitiveString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_string Webapput#test_string}
  */
  readonly testString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#uuid Webapput#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#configpb_attributes Webapput#configpb_attributes}
  */
  readonly configpbAttributes?: WebapputConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * mandatory_test block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_test Webapput#mandatory_test}
  */
  readonly mandatoryTest?: WebapputMandatoryTest[] | cdktf.IResolvable;
  /**
  * mandatory_tests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_tests Webapput#mandatory_tests}
  */
  readonly mandatoryTests?: WebapputMandatoryTests[] | cdktf.IResolvable;
  /**
  * sensitive_test block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_test Webapput#sensitive_test}
  */
  readonly sensitiveTest?: WebapputSensitiveTest[] | cdktf.IResolvable;
  /**
  * sensitive_tests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_tests Webapput#sensitive_tests}
  */
  readonly sensitiveTests?: WebapputSensitiveTests[] | cdktf.IResolvable;
  /**
  * string_length_test block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#string_length_test Webapput#string_length_test}
  */
  readonly stringLengthTest?: WebapputStringLengthTest[] | cdktf.IResolvable;
  /**
  * string_length_tests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#string_length_tests Webapput#string_length_tests}
  */
  readonly stringLengthTests?: WebapputStringLengthTests[] | cdktf.IResolvable;
}
export interface WebapputConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#version Webapput#version}
  */
  readonly version?: string;
}

export function webapputConfigpbAttributesToTerraform(struct?: WebapputConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function webapputConfigpbAttributesToHclTerraform(struct?: WebapputConfigpbAttributes | cdktf.IResolvable): any {
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

export class WebapputConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputConfigpbAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebapputConfigpbAttributes | cdktf.IResolvable | undefined) {
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

export class WebapputConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : WebapputConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): WebapputConfigpbAttributesOutputReference {
    return new WebapputConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputMandatoryTestMandatoryMessageMandatoryMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#optional_string Webapput#optional_string}
  */
  readonly optionalString?: string;
}

export function webapputMandatoryTestMandatoryMessageMandatoryMessageToTerraform(struct?: WebapputMandatoryTestMandatoryMessageMandatoryMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional_string: cdktf.stringToTerraform(struct!.optionalString),
  }
}


export function webapputMandatoryTestMandatoryMessageMandatoryMessageToHclTerraform(struct?: WebapputMandatoryTestMandatoryMessageMandatoryMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional_string: {
      value: cdktf.stringToHclTerraform(struct!.optionalString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputMandatoryTestMandatoryMessageMandatoryMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputMandatoryTestMandatoryMessageMandatoryMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionalString !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalString = this._optionalString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputMandatoryTestMandatoryMessageMandatoryMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionalString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionalString = value.optionalString;
    }
  }

  // optional_string - computed: true, optional: true, required: false
  private _optionalString?: string; 
  public get optionalString() {
    return this.getStringAttribute('optional_string');
  }
  public set optionalString(value: string) {
    this._optionalString = value;
  }
  public resetOptionalString() {
    this._optionalString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalStringInput() {
    return this._optionalString;
  }
}

export class WebapputMandatoryTestMandatoryMessageMandatoryMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputMandatoryTestMandatoryMessageMandatoryMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputMandatoryTestMandatoryMessageMandatoryMessageOutputReference {
    return new WebapputMandatoryTestMandatoryMessageMandatoryMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputMandatoryTestMandatoryMessageMandatoryMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#optional_string Webapput#optional_string}
  */
  readonly optionalString?: string;
}

export function webapputMandatoryTestMandatoryMessageMandatoryMessagesToTerraform(struct?: WebapputMandatoryTestMandatoryMessageMandatoryMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional_string: cdktf.stringToTerraform(struct!.optionalString),
  }
}


export function webapputMandatoryTestMandatoryMessageMandatoryMessagesToHclTerraform(struct?: WebapputMandatoryTestMandatoryMessageMandatoryMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional_string: {
      value: cdktf.stringToHclTerraform(struct!.optionalString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputMandatoryTestMandatoryMessageMandatoryMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputMandatoryTestMandatoryMessageMandatoryMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionalString !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalString = this._optionalString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputMandatoryTestMandatoryMessageMandatoryMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionalString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionalString = value.optionalString;
    }
  }

  // optional_string - computed: true, optional: true, required: false
  private _optionalString?: string; 
  public get optionalString() {
    return this.getStringAttribute('optional_string');
  }
  public set optionalString(value: string) {
    this._optionalString = value;
  }
  public resetOptionalString() {
    this._optionalString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalStringInput() {
    return this._optionalString;
  }
}

export class WebapputMandatoryTestMandatoryMessageMandatoryMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputMandatoryTestMandatoryMessageMandatoryMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputMandatoryTestMandatoryMessageMandatoryMessagesOutputReference {
    return new WebapputMandatoryTestMandatoryMessageMandatoryMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputMandatoryTestMandatoryMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_string Webapput#mandatory_string}
  */
  readonly mandatoryString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_strings Webapput#mandatory_strings}
  */
  readonly mandatoryStrings: string[];
  /**
  * mandatory_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_message Webapput#mandatory_message}
  */
  readonly mandatoryMessage: WebapputMandatoryTestMandatoryMessageMandatoryMessage[] | cdktf.IResolvable;
  /**
  * mandatory_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_messages Webapput#mandatory_messages}
  */
  readonly mandatoryMessages: WebapputMandatoryTestMandatoryMessageMandatoryMessages[] | cdktf.IResolvable;
}

export function webapputMandatoryTestMandatoryMessageToTerraform(struct?: WebapputMandatoryTestMandatoryMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mandatory_string: cdktf.stringToTerraform(struct!.mandatoryString),
    mandatory_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mandatoryStrings),
    mandatory_message: cdktf.listMapper(webapputMandatoryTestMandatoryMessageMandatoryMessageToTerraform, true)(struct!.mandatoryMessage),
    mandatory_messages: cdktf.listMapper(webapputMandatoryTestMandatoryMessageMandatoryMessagesToTerraform, true)(struct!.mandatoryMessages),
  }
}


export function webapputMandatoryTestMandatoryMessageToHclTerraform(struct?: WebapputMandatoryTestMandatoryMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mandatory_string: {
      value: cdktf.stringToHclTerraform(struct!.mandatoryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory_strings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mandatoryStrings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mandatory_message: {
      value: cdktf.listMapperHcl(webapputMandatoryTestMandatoryMessageMandatoryMessageToHclTerraform, true)(struct!.mandatoryMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputMandatoryTestMandatoryMessageMandatoryMessageList",
    },
    mandatory_messages: {
      value: cdktf.listMapperHcl(webapputMandatoryTestMandatoryMessageMandatoryMessagesToHclTerraform, true)(struct!.mandatoryMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputMandatoryTestMandatoryMessageMandatoryMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputMandatoryTestMandatoryMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputMandatoryTestMandatoryMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mandatoryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryString = this._mandatoryString;
    }
    if (this._mandatoryStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryStrings = this._mandatoryStrings;
    }
    if (this._mandatoryMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryMessage = this._mandatoryMessage?.internalValue;
    }
    if (this._mandatoryMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryMessages = this._mandatoryMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputMandatoryTestMandatoryMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mandatoryString = undefined;
      this._mandatoryStrings = undefined;
      this._mandatoryMessage.internalValue = undefined;
      this._mandatoryMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mandatoryString = value.mandatoryString;
      this._mandatoryStrings = value.mandatoryStrings;
      this._mandatoryMessage.internalValue = value.mandatoryMessage;
      this._mandatoryMessages.internalValue = value.mandatoryMessages;
    }
  }

  // mandatory_string - computed: false, optional: false, required: true
  private _mandatoryString?: string; 
  public get mandatoryString() {
    return this.getStringAttribute('mandatory_string');
  }
  public set mandatoryString(value: string) {
    this._mandatoryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryStringInput() {
    return this._mandatoryString;
  }

  // mandatory_strings - computed: false, optional: false, required: true
  private _mandatoryStrings?: string[]; 
  public get mandatoryStrings() {
    return this.getListAttribute('mandatory_strings');
  }
  public set mandatoryStrings(value: string[]) {
    this._mandatoryStrings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryStringsInput() {
    return this._mandatoryStrings;
  }

  // mandatory_message - computed: false, optional: false, required: true
  private _mandatoryMessage = new WebapputMandatoryTestMandatoryMessageMandatoryMessageList(this, "mandatory_message", true);
  public get mandatoryMessage() {
    return this._mandatoryMessage;
  }
  public putMandatoryMessage(value: WebapputMandatoryTestMandatoryMessageMandatoryMessage[] | cdktf.IResolvable) {
    this._mandatoryMessage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryMessageInput() {
    return this._mandatoryMessage.internalValue;
  }

  // mandatory_messages - computed: false, optional: false, required: true
  private _mandatoryMessages = new WebapputMandatoryTestMandatoryMessageMandatoryMessagesList(this, "mandatory_messages", false);
  public get mandatoryMessages() {
    return this._mandatoryMessages;
  }
  public putMandatoryMessages(value: WebapputMandatoryTestMandatoryMessageMandatoryMessages[] | cdktf.IResolvable) {
    this._mandatoryMessages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryMessagesInput() {
    return this._mandatoryMessages.internalValue;
  }
}

export class WebapputMandatoryTestMandatoryMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputMandatoryTestMandatoryMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputMandatoryTestMandatoryMessageOutputReference {
    return new WebapputMandatoryTestMandatoryMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputMandatoryTestMandatoryMessagesMandatoryMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#optional_string Webapput#optional_string}
  */
  readonly optionalString?: string;
}

export function webapputMandatoryTestMandatoryMessagesMandatoryMessageToTerraform(struct?: WebapputMandatoryTestMandatoryMessagesMandatoryMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional_string: cdktf.stringToTerraform(struct!.optionalString),
  }
}


export function webapputMandatoryTestMandatoryMessagesMandatoryMessageToHclTerraform(struct?: WebapputMandatoryTestMandatoryMessagesMandatoryMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional_string: {
      value: cdktf.stringToHclTerraform(struct!.optionalString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputMandatoryTestMandatoryMessagesMandatoryMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputMandatoryTestMandatoryMessagesMandatoryMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionalString !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalString = this._optionalString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputMandatoryTestMandatoryMessagesMandatoryMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionalString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionalString = value.optionalString;
    }
  }

  // optional_string - computed: true, optional: true, required: false
  private _optionalString?: string; 
  public get optionalString() {
    return this.getStringAttribute('optional_string');
  }
  public set optionalString(value: string) {
    this._optionalString = value;
  }
  public resetOptionalString() {
    this._optionalString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalStringInput() {
    return this._optionalString;
  }
}

export class WebapputMandatoryTestMandatoryMessagesMandatoryMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputMandatoryTestMandatoryMessagesMandatoryMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputMandatoryTestMandatoryMessagesMandatoryMessageOutputReference {
    return new WebapputMandatoryTestMandatoryMessagesMandatoryMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputMandatoryTestMandatoryMessagesMandatoryMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#optional_string Webapput#optional_string}
  */
  readonly optionalString?: string;
}

export function webapputMandatoryTestMandatoryMessagesMandatoryMessagesToTerraform(struct?: WebapputMandatoryTestMandatoryMessagesMandatoryMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional_string: cdktf.stringToTerraform(struct!.optionalString),
  }
}


export function webapputMandatoryTestMandatoryMessagesMandatoryMessagesToHclTerraform(struct?: WebapputMandatoryTestMandatoryMessagesMandatoryMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional_string: {
      value: cdktf.stringToHclTerraform(struct!.optionalString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputMandatoryTestMandatoryMessagesMandatoryMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputMandatoryTestMandatoryMessagesMandatoryMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionalString !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalString = this._optionalString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputMandatoryTestMandatoryMessagesMandatoryMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionalString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionalString = value.optionalString;
    }
  }

  // optional_string - computed: true, optional: true, required: false
  private _optionalString?: string; 
  public get optionalString() {
    return this.getStringAttribute('optional_string');
  }
  public set optionalString(value: string) {
    this._optionalString = value;
  }
  public resetOptionalString() {
    this._optionalString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalStringInput() {
    return this._optionalString;
  }
}

export class WebapputMandatoryTestMandatoryMessagesMandatoryMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputMandatoryTestMandatoryMessagesMandatoryMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputMandatoryTestMandatoryMessagesMandatoryMessagesOutputReference {
    return new WebapputMandatoryTestMandatoryMessagesMandatoryMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputMandatoryTestMandatoryMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_string Webapput#mandatory_string}
  */
  readonly mandatoryString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_strings Webapput#mandatory_strings}
  */
  readonly mandatoryStrings: string[];
  /**
  * mandatory_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_message Webapput#mandatory_message}
  */
  readonly mandatoryMessage: WebapputMandatoryTestMandatoryMessagesMandatoryMessage[] | cdktf.IResolvable;
  /**
  * mandatory_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_messages Webapput#mandatory_messages}
  */
  readonly mandatoryMessages: WebapputMandatoryTestMandatoryMessagesMandatoryMessages[] | cdktf.IResolvable;
}

export function webapputMandatoryTestMandatoryMessagesToTerraform(struct?: WebapputMandatoryTestMandatoryMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mandatory_string: cdktf.stringToTerraform(struct!.mandatoryString),
    mandatory_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mandatoryStrings),
    mandatory_message: cdktf.listMapper(webapputMandatoryTestMandatoryMessagesMandatoryMessageToTerraform, true)(struct!.mandatoryMessage),
    mandatory_messages: cdktf.listMapper(webapputMandatoryTestMandatoryMessagesMandatoryMessagesToTerraform, true)(struct!.mandatoryMessages),
  }
}


export function webapputMandatoryTestMandatoryMessagesToHclTerraform(struct?: WebapputMandatoryTestMandatoryMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mandatory_string: {
      value: cdktf.stringToHclTerraform(struct!.mandatoryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory_strings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mandatoryStrings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mandatory_message: {
      value: cdktf.listMapperHcl(webapputMandatoryTestMandatoryMessagesMandatoryMessageToHclTerraform, true)(struct!.mandatoryMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputMandatoryTestMandatoryMessagesMandatoryMessageList",
    },
    mandatory_messages: {
      value: cdktf.listMapperHcl(webapputMandatoryTestMandatoryMessagesMandatoryMessagesToHclTerraform, true)(struct!.mandatoryMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputMandatoryTestMandatoryMessagesMandatoryMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputMandatoryTestMandatoryMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputMandatoryTestMandatoryMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mandatoryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryString = this._mandatoryString;
    }
    if (this._mandatoryStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryStrings = this._mandatoryStrings;
    }
    if (this._mandatoryMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryMessage = this._mandatoryMessage?.internalValue;
    }
    if (this._mandatoryMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryMessages = this._mandatoryMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputMandatoryTestMandatoryMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mandatoryString = undefined;
      this._mandatoryStrings = undefined;
      this._mandatoryMessage.internalValue = undefined;
      this._mandatoryMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mandatoryString = value.mandatoryString;
      this._mandatoryStrings = value.mandatoryStrings;
      this._mandatoryMessage.internalValue = value.mandatoryMessage;
      this._mandatoryMessages.internalValue = value.mandatoryMessages;
    }
  }

  // mandatory_string - computed: false, optional: false, required: true
  private _mandatoryString?: string; 
  public get mandatoryString() {
    return this.getStringAttribute('mandatory_string');
  }
  public set mandatoryString(value: string) {
    this._mandatoryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryStringInput() {
    return this._mandatoryString;
  }

  // mandatory_strings - computed: false, optional: false, required: true
  private _mandatoryStrings?: string[]; 
  public get mandatoryStrings() {
    return this.getListAttribute('mandatory_strings');
  }
  public set mandatoryStrings(value: string[]) {
    this._mandatoryStrings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryStringsInput() {
    return this._mandatoryStrings;
  }

  // mandatory_message - computed: false, optional: false, required: true
  private _mandatoryMessage = new WebapputMandatoryTestMandatoryMessagesMandatoryMessageList(this, "mandatory_message", true);
  public get mandatoryMessage() {
    return this._mandatoryMessage;
  }
  public putMandatoryMessage(value: WebapputMandatoryTestMandatoryMessagesMandatoryMessage[] | cdktf.IResolvable) {
    this._mandatoryMessage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryMessageInput() {
    return this._mandatoryMessage.internalValue;
  }

  // mandatory_messages - computed: false, optional: false, required: true
  private _mandatoryMessages = new WebapputMandatoryTestMandatoryMessagesMandatoryMessagesList(this, "mandatory_messages", false);
  public get mandatoryMessages() {
    return this._mandatoryMessages;
  }
  public putMandatoryMessages(value: WebapputMandatoryTestMandatoryMessagesMandatoryMessages[] | cdktf.IResolvable) {
    this._mandatoryMessages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryMessagesInput() {
    return this._mandatoryMessages.internalValue;
  }
}

export class WebapputMandatoryTestMandatoryMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputMandatoryTestMandatoryMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputMandatoryTestMandatoryMessagesOutputReference {
    return new WebapputMandatoryTestMandatoryMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputMandatoryTest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_string Webapput#mandatory_string}
  */
  readonly mandatoryString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_strings Webapput#mandatory_strings}
  */
  readonly mandatoryStrings: string[];
  /**
  * mandatory_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_message Webapput#mandatory_message}
  */
  readonly mandatoryMessage: WebapputMandatoryTestMandatoryMessage[] | cdktf.IResolvable;
  /**
  * mandatory_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_messages Webapput#mandatory_messages}
  */
  readonly mandatoryMessages: WebapputMandatoryTestMandatoryMessages[] | cdktf.IResolvable;
}

export function webapputMandatoryTestToTerraform(struct?: WebapputMandatoryTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mandatory_string: cdktf.stringToTerraform(struct!.mandatoryString),
    mandatory_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mandatoryStrings),
    mandatory_message: cdktf.listMapper(webapputMandatoryTestMandatoryMessageToTerraform, true)(struct!.mandatoryMessage),
    mandatory_messages: cdktf.listMapper(webapputMandatoryTestMandatoryMessagesToTerraform, true)(struct!.mandatoryMessages),
  }
}


export function webapputMandatoryTestToHclTerraform(struct?: WebapputMandatoryTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mandatory_string: {
      value: cdktf.stringToHclTerraform(struct!.mandatoryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory_strings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mandatoryStrings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mandatory_message: {
      value: cdktf.listMapperHcl(webapputMandatoryTestMandatoryMessageToHclTerraform, true)(struct!.mandatoryMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputMandatoryTestMandatoryMessageList",
    },
    mandatory_messages: {
      value: cdktf.listMapperHcl(webapputMandatoryTestMandatoryMessagesToHclTerraform, true)(struct!.mandatoryMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputMandatoryTestMandatoryMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputMandatoryTestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputMandatoryTest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mandatoryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryString = this._mandatoryString;
    }
    if (this._mandatoryStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryStrings = this._mandatoryStrings;
    }
    if (this._mandatoryMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryMessage = this._mandatoryMessage?.internalValue;
    }
    if (this._mandatoryMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryMessages = this._mandatoryMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputMandatoryTest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mandatoryString = undefined;
      this._mandatoryStrings = undefined;
      this._mandatoryMessage.internalValue = undefined;
      this._mandatoryMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mandatoryString = value.mandatoryString;
      this._mandatoryStrings = value.mandatoryStrings;
      this._mandatoryMessage.internalValue = value.mandatoryMessage;
      this._mandatoryMessages.internalValue = value.mandatoryMessages;
    }
  }

  // mandatory_string - computed: false, optional: false, required: true
  private _mandatoryString?: string; 
  public get mandatoryString() {
    return this.getStringAttribute('mandatory_string');
  }
  public set mandatoryString(value: string) {
    this._mandatoryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryStringInput() {
    return this._mandatoryString;
  }

  // mandatory_strings - computed: false, optional: false, required: true
  private _mandatoryStrings?: string[]; 
  public get mandatoryStrings() {
    return this.getListAttribute('mandatory_strings');
  }
  public set mandatoryStrings(value: string[]) {
    this._mandatoryStrings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryStringsInput() {
    return this._mandatoryStrings;
  }

  // mandatory_message - computed: false, optional: false, required: true
  private _mandatoryMessage = new WebapputMandatoryTestMandatoryMessageList(this, "mandatory_message", true);
  public get mandatoryMessage() {
    return this._mandatoryMessage;
  }
  public putMandatoryMessage(value: WebapputMandatoryTestMandatoryMessage[] | cdktf.IResolvable) {
    this._mandatoryMessage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryMessageInput() {
    return this._mandatoryMessage.internalValue;
  }

  // mandatory_messages - computed: false, optional: false, required: true
  private _mandatoryMessages = new WebapputMandatoryTestMandatoryMessagesList(this, "mandatory_messages", false);
  public get mandatoryMessages() {
    return this._mandatoryMessages;
  }
  public putMandatoryMessages(value: WebapputMandatoryTestMandatoryMessages[] | cdktf.IResolvable) {
    this._mandatoryMessages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryMessagesInput() {
    return this._mandatoryMessages.internalValue;
  }
}

export class WebapputMandatoryTestList extends cdktf.ComplexList {
  public internalValue? : WebapputMandatoryTest[] | cdktf.IResolvable

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
  public get(index: number): WebapputMandatoryTestOutputReference {
    return new WebapputMandatoryTestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputMandatoryTestsMandatoryMessageMandatoryMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#optional_string Webapput#optional_string}
  */
  readonly optionalString?: string;
}

export function webapputMandatoryTestsMandatoryMessageMandatoryMessageToTerraform(struct?: WebapputMandatoryTestsMandatoryMessageMandatoryMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional_string: cdktf.stringToTerraform(struct!.optionalString),
  }
}


export function webapputMandatoryTestsMandatoryMessageMandatoryMessageToHclTerraform(struct?: WebapputMandatoryTestsMandatoryMessageMandatoryMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional_string: {
      value: cdktf.stringToHclTerraform(struct!.optionalString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputMandatoryTestsMandatoryMessageMandatoryMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputMandatoryTestsMandatoryMessageMandatoryMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionalString !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalString = this._optionalString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputMandatoryTestsMandatoryMessageMandatoryMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionalString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionalString = value.optionalString;
    }
  }

  // optional_string - computed: true, optional: true, required: false
  private _optionalString?: string; 
  public get optionalString() {
    return this.getStringAttribute('optional_string');
  }
  public set optionalString(value: string) {
    this._optionalString = value;
  }
  public resetOptionalString() {
    this._optionalString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalStringInput() {
    return this._optionalString;
  }
}

export class WebapputMandatoryTestsMandatoryMessageMandatoryMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputMandatoryTestsMandatoryMessageMandatoryMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputMandatoryTestsMandatoryMessageMandatoryMessageOutputReference {
    return new WebapputMandatoryTestsMandatoryMessageMandatoryMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputMandatoryTestsMandatoryMessageMandatoryMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#optional_string Webapput#optional_string}
  */
  readonly optionalString?: string;
}

export function webapputMandatoryTestsMandatoryMessageMandatoryMessagesToTerraform(struct?: WebapputMandatoryTestsMandatoryMessageMandatoryMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional_string: cdktf.stringToTerraform(struct!.optionalString),
  }
}


export function webapputMandatoryTestsMandatoryMessageMandatoryMessagesToHclTerraform(struct?: WebapputMandatoryTestsMandatoryMessageMandatoryMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional_string: {
      value: cdktf.stringToHclTerraform(struct!.optionalString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputMandatoryTestsMandatoryMessageMandatoryMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputMandatoryTestsMandatoryMessageMandatoryMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionalString !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalString = this._optionalString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputMandatoryTestsMandatoryMessageMandatoryMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionalString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionalString = value.optionalString;
    }
  }

  // optional_string - computed: true, optional: true, required: false
  private _optionalString?: string; 
  public get optionalString() {
    return this.getStringAttribute('optional_string');
  }
  public set optionalString(value: string) {
    this._optionalString = value;
  }
  public resetOptionalString() {
    this._optionalString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalStringInput() {
    return this._optionalString;
  }
}

export class WebapputMandatoryTestsMandatoryMessageMandatoryMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputMandatoryTestsMandatoryMessageMandatoryMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputMandatoryTestsMandatoryMessageMandatoryMessagesOutputReference {
    return new WebapputMandatoryTestsMandatoryMessageMandatoryMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputMandatoryTestsMandatoryMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_string Webapput#mandatory_string}
  */
  readonly mandatoryString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_strings Webapput#mandatory_strings}
  */
  readonly mandatoryStrings: string[];
  /**
  * mandatory_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_message Webapput#mandatory_message}
  */
  readonly mandatoryMessage: WebapputMandatoryTestsMandatoryMessageMandatoryMessage[] | cdktf.IResolvable;
  /**
  * mandatory_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_messages Webapput#mandatory_messages}
  */
  readonly mandatoryMessages: WebapputMandatoryTestsMandatoryMessageMandatoryMessages[] | cdktf.IResolvable;
}

export function webapputMandatoryTestsMandatoryMessageToTerraform(struct?: WebapputMandatoryTestsMandatoryMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mandatory_string: cdktf.stringToTerraform(struct!.mandatoryString),
    mandatory_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mandatoryStrings),
    mandatory_message: cdktf.listMapper(webapputMandatoryTestsMandatoryMessageMandatoryMessageToTerraform, true)(struct!.mandatoryMessage),
    mandatory_messages: cdktf.listMapper(webapputMandatoryTestsMandatoryMessageMandatoryMessagesToTerraform, true)(struct!.mandatoryMessages),
  }
}


export function webapputMandatoryTestsMandatoryMessageToHclTerraform(struct?: WebapputMandatoryTestsMandatoryMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mandatory_string: {
      value: cdktf.stringToHclTerraform(struct!.mandatoryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory_strings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mandatoryStrings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mandatory_message: {
      value: cdktf.listMapperHcl(webapputMandatoryTestsMandatoryMessageMandatoryMessageToHclTerraform, true)(struct!.mandatoryMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputMandatoryTestsMandatoryMessageMandatoryMessageList",
    },
    mandatory_messages: {
      value: cdktf.listMapperHcl(webapputMandatoryTestsMandatoryMessageMandatoryMessagesToHclTerraform, true)(struct!.mandatoryMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputMandatoryTestsMandatoryMessageMandatoryMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputMandatoryTestsMandatoryMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputMandatoryTestsMandatoryMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mandatoryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryString = this._mandatoryString;
    }
    if (this._mandatoryStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryStrings = this._mandatoryStrings;
    }
    if (this._mandatoryMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryMessage = this._mandatoryMessage?.internalValue;
    }
    if (this._mandatoryMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryMessages = this._mandatoryMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputMandatoryTestsMandatoryMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mandatoryString = undefined;
      this._mandatoryStrings = undefined;
      this._mandatoryMessage.internalValue = undefined;
      this._mandatoryMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mandatoryString = value.mandatoryString;
      this._mandatoryStrings = value.mandatoryStrings;
      this._mandatoryMessage.internalValue = value.mandatoryMessage;
      this._mandatoryMessages.internalValue = value.mandatoryMessages;
    }
  }

  // mandatory_string - computed: false, optional: false, required: true
  private _mandatoryString?: string; 
  public get mandatoryString() {
    return this.getStringAttribute('mandatory_string');
  }
  public set mandatoryString(value: string) {
    this._mandatoryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryStringInput() {
    return this._mandatoryString;
  }

  // mandatory_strings - computed: false, optional: false, required: true
  private _mandatoryStrings?: string[]; 
  public get mandatoryStrings() {
    return this.getListAttribute('mandatory_strings');
  }
  public set mandatoryStrings(value: string[]) {
    this._mandatoryStrings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryStringsInput() {
    return this._mandatoryStrings;
  }

  // mandatory_message - computed: false, optional: false, required: true
  private _mandatoryMessage = new WebapputMandatoryTestsMandatoryMessageMandatoryMessageList(this, "mandatory_message", true);
  public get mandatoryMessage() {
    return this._mandatoryMessage;
  }
  public putMandatoryMessage(value: WebapputMandatoryTestsMandatoryMessageMandatoryMessage[] | cdktf.IResolvable) {
    this._mandatoryMessage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryMessageInput() {
    return this._mandatoryMessage.internalValue;
  }

  // mandatory_messages - computed: false, optional: false, required: true
  private _mandatoryMessages = new WebapputMandatoryTestsMandatoryMessageMandatoryMessagesList(this, "mandatory_messages", false);
  public get mandatoryMessages() {
    return this._mandatoryMessages;
  }
  public putMandatoryMessages(value: WebapputMandatoryTestsMandatoryMessageMandatoryMessages[] | cdktf.IResolvable) {
    this._mandatoryMessages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryMessagesInput() {
    return this._mandatoryMessages.internalValue;
  }
}

export class WebapputMandatoryTestsMandatoryMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputMandatoryTestsMandatoryMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputMandatoryTestsMandatoryMessageOutputReference {
    return new WebapputMandatoryTestsMandatoryMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputMandatoryTestsMandatoryMessagesMandatoryMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#optional_string Webapput#optional_string}
  */
  readonly optionalString?: string;
}

export function webapputMandatoryTestsMandatoryMessagesMandatoryMessageToTerraform(struct?: WebapputMandatoryTestsMandatoryMessagesMandatoryMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional_string: cdktf.stringToTerraform(struct!.optionalString),
  }
}


export function webapputMandatoryTestsMandatoryMessagesMandatoryMessageToHclTerraform(struct?: WebapputMandatoryTestsMandatoryMessagesMandatoryMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional_string: {
      value: cdktf.stringToHclTerraform(struct!.optionalString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputMandatoryTestsMandatoryMessagesMandatoryMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputMandatoryTestsMandatoryMessagesMandatoryMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionalString !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalString = this._optionalString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputMandatoryTestsMandatoryMessagesMandatoryMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionalString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionalString = value.optionalString;
    }
  }

  // optional_string - computed: true, optional: true, required: false
  private _optionalString?: string; 
  public get optionalString() {
    return this.getStringAttribute('optional_string');
  }
  public set optionalString(value: string) {
    this._optionalString = value;
  }
  public resetOptionalString() {
    this._optionalString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalStringInput() {
    return this._optionalString;
  }
}

export class WebapputMandatoryTestsMandatoryMessagesMandatoryMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputMandatoryTestsMandatoryMessagesMandatoryMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputMandatoryTestsMandatoryMessagesMandatoryMessageOutputReference {
    return new WebapputMandatoryTestsMandatoryMessagesMandatoryMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputMandatoryTestsMandatoryMessagesMandatoryMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#optional_string Webapput#optional_string}
  */
  readonly optionalString?: string;
}

export function webapputMandatoryTestsMandatoryMessagesMandatoryMessagesToTerraform(struct?: WebapputMandatoryTestsMandatoryMessagesMandatoryMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional_string: cdktf.stringToTerraform(struct!.optionalString),
  }
}


export function webapputMandatoryTestsMandatoryMessagesMandatoryMessagesToHclTerraform(struct?: WebapputMandatoryTestsMandatoryMessagesMandatoryMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional_string: {
      value: cdktf.stringToHclTerraform(struct!.optionalString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputMandatoryTestsMandatoryMessagesMandatoryMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputMandatoryTestsMandatoryMessagesMandatoryMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionalString !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalString = this._optionalString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputMandatoryTestsMandatoryMessagesMandatoryMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionalString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionalString = value.optionalString;
    }
  }

  // optional_string - computed: true, optional: true, required: false
  private _optionalString?: string; 
  public get optionalString() {
    return this.getStringAttribute('optional_string');
  }
  public set optionalString(value: string) {
    this._optionalString = value;
  }
  public resetOptionalString() {
    this._optionalString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalStringInput() {
    return this._optionalString;
  }
}

export class WebapputMandatoryTestsMandatoryMessagesMandatoryMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputMandatoryTestsMandatoryMessagesMandatoryMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputMandatoryTestsMandatoryMessagesMandatoryMessagesOutputReference {
    return new WebapputMandatoryTestsMandatoryMessagesMandatoryMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputMandatoryTestsMandatoryMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_string Webapput#mandatory_string}
  */
  readonly mandatoryString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_strings Webapput#mandatory_strings}
  */
  readonly mandatoryStrings: string[];
  /**
  * mandatory_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_message Webapput#mandatory_message}
  */
  readonly mandatoryMessage: WebapputMandatoryTestsMandatoryMessagesMandatoryMessage[] | cdktf.IResolvable;
  /**
  * mandatory_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_messages Webapput#mandatory_messages}
  */
  readonly mandatoryMessages: WebapputMandatoryTestsMandatoryMessagesMandatoryMessages[] | cdktf.IResolvable;
}

export function webapputMandatoryTestsMandatoryMessagesToTerraform(struct?: WebapputMandatoryTestsMandatoryMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mandatory_string: cdktf.stringToTerraform(struct!.mandatoryString),
    mandatory_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mandatoryStrings),
    mandatory_message: cdktf.listMapper(webapputMandatoryTestsMandatoryMessagesMandatoryMessageToTerraform, true)(struct!.mandatoryMessage),
    mandatory_messages: cdktf.listMapper(webapputMandatoryTestsMandatoryMessagesMandatoryMessagesToTerraform, true)(struct!.mandatoryMessages),
  }
}


export function webapputMandatoryTestsMandatoryMessagesToHclTerraform(struct?: WebapputMandatoryTestsMandatoryMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mandatory_string: {
      value: cdktf.stringToHclTerraform(struct!.mandatoryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory_strings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mandatoryStrings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mandatory_message: {
      value: cdktf.listMapperHcl(webapputMandatoryTestsMandatoryMessagesMandatoryMessageToHclTerraform, true)(struct!.mandatoryMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputMandatoryTestsMandatoryMessagesMandatoryMessageList",
    },
    mandatory_messages: {
      value: cdktf.listMapperHcl(webapputMandatoryTestsMandatoryMessagesMandatoryMessagesToHclTerraform, true)(struct!.mandatoryMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputMandatoryTestsMandatoryMessagesMandatoryMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputMandatoryTestsMandatoryMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputMandatoryTestsMandatoryMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mandatoryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryString = this._mandatoryString;
    }
    if (this._mandatoryStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryStrings = this._mandatoryStrings;
    }
    if (this._mandatoryMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryMessage = this._mandatoryMessage?.internalValue;
    }
    if (this._mandatoryMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryMessages = this._mandatoryMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputMandatoryTestsMandatoryMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mandatoryString = undefined;
      this._mandatoryStrings = undefined;
      this._mandatoryMessage.internalValue = undefined;
      this._mandatoryMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mandatoryString = value.mandatoryString;
      this._mandatoryStrings = value.mandatoryStrings;
      this._mandatoryMessage.internalValue = value.mandatoryMessage;
      this._mandatoryMessages.internalValue = value.mandatoryMessages;
    }
  }

  // mandatory_string - computed: false, optional: false, required: true
  private _mandatoryString?: string; 
  public get mandatoryString() {
    return this.getStringAttribute('mandatory_string');
  }
  public set mandatoryString(value: string) {
    this._mandatoryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryStringInput() {
    return this._mandatoryString;
  }

  // mandatory_strings - computed: false, optional: false, required: true
  private _mandatoryStrings?: string[]; 
  public get mandatoryStrings() {
    return this.getListAttribute('mandatory_strings');
  }
  public set mandatoryStrings(value: string[]) {
    this._mandatoryStrings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryStringsInput() {
    return this._mandatoryStrings;
  }

  // mandatory_message - computed: false, optional: false, required: true
  private _mandatoryMessage = new WebapputMandatoryTestsMandatoryMessagesMandatoryMessageList(this, "mandatory_message", true);
  public get mandatoryMessage() {
    return this._mandatoryMessage;
  }
  public putMandatoryMessage(value: WebapputMandatoryTestsMandatoryMessagesMandatoryMessage[] | cdktf.IResolvable) {
    this._mandatoryMessage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryMessageInput() {
    return this._mandatoryMessage.internalValue;
  }

  // mandatory_messages - computed: false, optional: false, required: true
  private _mandatoryMessages = new WebapputMandatoryTestsMandatoryMessagesMandatoryMessagesList(this, "mandatory_messages", false);
  public get mandatoryMessages() {
    return this._mandatoryMessages;
  }
  public putMandatoryMessages(value: WebapputMandatoryTestsMandatoryMessagesMandatoryMessages[] | cdktf.IResolvable) {
    this._mandatoryMessages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryMessagesInput() {
    return this._mandatoryMessages.internalValue;
  }
}

export class WebapputMandatoryTestsMandatoryMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputMandatoryTestsMandatoryMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputMandatoryTestsMandatoryMessagesOutputReference {
    return new WebapputMandatoryTestsMandatoryMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputMandatoryTests {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_string Webapput#mandatory_string}
  */
  readonly mandatoryString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_strings Webapput#mandatory_strings}
  */
  readonly mandatoryStrings: string[];
  /**
  * mandatory_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_message Webapput#mandatory_message}
  */
  readonly mandatoryMessage: WebapputMandatoryTestsMandatoryMessage[] | cdktf.IResolvable;
  /**
  * mandatory_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#mandatory_messages Webapput#mandatory_messages}
  */
  readonly mandatoryMessages: WebapputMandatoryTestsMandatoryMessages[] | cdktf.IResolvable;
}

export function webapputMandatoryTestsToTerraform(struct?: WebapputMandatoryTests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mandatory_string: cdktf.stringToTerraform(struct!.mandatoryString),
    mandatory_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mandatoryStrings),
    mandatory_message: cdktf.listMapper(webapputMandatoryTestsMandatoryMessageToTerraform, true)(struct!.mandatoryMessage),
    mandatory_messages: cdktf.listMapper(webapputMandatoryTestsMandatoryMessagesToTerraform, true)(struct!.mandatoryMessages),
  }
}


export function webapputMandatoryTestsToHclTerraform(struct?: WebapputMandatoryTests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mandatory_string: {
      value: cdktf.stringToHclTerraform(struct!.mandatoryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory_strings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mandatoryStrings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mandatory_message: {
      value: cdktf.listMapperHcl(webapputMandatoryTestsMandatoryMessageToHclTerraform, true)(struct!.mandatoryMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputMandatoryTestsMandatoryMessageList",
    },
    mandatory_messages: {
      value: cdktf.listMapperHcl(webapputMandatoryTestsMandatoryMessagesToHclTerraform, true)(struct!.mandatoryMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputMandatoryTestsMandatoryMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputMandatoryTestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputMandatoryTests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mandatoryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryString = this._mandatoryString;
    }
    if (this._mandatoryStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryStrings = this._mandatoryStrings;
    }
    if (this._mandatoryMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryMessage = this._mandatoryMessage?.internalValue;
    }
    if (this._mandatoryMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryMessages = this._mandatoryMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputMandatoryTests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mandatoryString = undefined;
      this._mandatoryStrings = undefined;
      this._mandatoryMessage.internalValue = undefined;
      this._mandatoryMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mandatoryString = value.mandatoryString;
      this._mandatoryStrings = value.mandatoryStrings;
      this._mandatoryMessage.internalValue = value.mandatoryMessage;
      this._mandatoryMessages.internalValue = value.mandatoryMessages;
    }
  }

  // mandatory_string - computed: false, optional: false, required: true
  private _mandatoryString?: string; 
  public get mandatoryString() {
    return this.getStringAttribute('mandatory_string');
  }
  public set mandatoryString(value: string) {
    this._mandatoryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryStringInput() {
    return this._mandatoryString;
  }

  // mandatory_strings - computed: false, optional: false, required: true
  private _mandatoryStrings?: string[]; 
  public get mandatoryStrings() {
    return this.getListAttribute('mandatory_strings');
  }
  public set mandatoryStrings(value: string[]) {
    this._mandatoryStrings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryStringsInput() {
    return this._mandatoryStrings;
  }

  // mandatory_message - computed: false, optional: false, required: true
  private _mandatoryMessage = new WebapputMandatoryTestsMandatoryMessageList(this, "mandatory_message", true);
  public get mandatoryMessage() {
    return this._mandatoryMessage;
  }
  public putMandatoryMessage(value: WebapputMandatoryTestsMandatoryMessage[] | cdktf.IResolvable) {
    this._mandatoryMessage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryMessageInput() {
    return this._mandatoryMessage.internalValue;
  }

  // mandatory_messages - computed: false, optional: false, required: true
  private _mandatoryMessages = new WebapputMandatoryTestsMandatoryMessagesList(this, "mandatory_messages", false);
  public get mandatoryMessages() {
    return this._mandatoryMessages;
  }
  public putMandatoryMessages(value: WebapputMandatoryTestsMandatoryMessages[] | cdktf.IResolvable) {
    this._mandatoryMessages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryMessagesInput() {
    return this._mandatoryMessages.internalValue;
  }
}

export class WebapputMandatoryTestsList extends cdktf.ComplexList {
  public internalValue? : WebapputMandatoryTests[] | cdktf.IResolvable

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
  public get(index: number): WebapputMandatoryTestsOutputReference {
    return new WebapputMandatoryTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputSensitiveTestSensitiveMessageSensitiveMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#optional_sensitive_string Webapput#optional_sensitive_string}
  */
  readonly optionalSensitiveString?: string;
}

export function webapputSensitiveTestSensitiveMessageSensitiveMessageToTerraform(struct?: WebapputSensitiveTestSensitiveMessageSensitiveMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional_sensitive_string: cdktf.stringToTerraform(struct!.optionalSensitiveString),
  }
}


export function webapputSensitiveTestSensitiveMessageSensitiveMessageToHclTerraform(struct?: WebapputSensitiveTestSensitiveMessageSensitiveMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional_sensitive_string: {
      value: cdktf.stringToHclTerraform(struct!.optionalSensitiveString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputSensitiveTestSensitiveMessageSensitiveMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputSensitiveTestSensitiveMessageSensitiveMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionalSensitiveString !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalSensitiveString = this._optionalSensitiveString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputSensitiveTestSensitiveMessageSensitiveMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionalSensitiveString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionalSensitiveString = value.optionalSensitiveString;
    }
  }

  // optional_sensitive_string - computed: true, optional: true, required: false
  private _optionalSensitiveString?: string; 
  public get optionalSensitiveString() {
    return this.getStringAttribute('optional_sensitive_string');
  }
  public set optionalSensitiveString(value: string) {
    this._optionalSensitiveString = value;
  }
  public resetOptionalSensitiveString() {
    this._optionalSensitiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalSensitiveStringInput() {
    return this._optionalSensitiveString;
  }
}

export class WebapputSensitiveTestSensitiveMessageSensitiveMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputSensitiveTestSensitiveMessageSensitiveMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputSensitiveTestSensitiveMessageSensitiveMessageOutputReference {
    return new WebapputSensitiveTestSensitiveMessageSensitiveMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputSensitiveTestSensitiveMessageSensitiveMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#optional_sensitive_string Webapput#optional_sensitive_string}
  */
  readonly optionalSensitiveString?: string;
}

export function webapputSensitiveTestSensitiveMessageSensitiveMessagesToTerraform(struct?: WebapputSensitiveTestSensitiveMessageSensitiveMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional_sensitive_string: cdktf.stringToTerraform(struct!.optionalSensitiveString),
  }
}


export function webapputSensitiveTestSensitiveMessageSensitiveMessagesToHclTerraform(struct?: WebapputSensitiveTestSensitiveMessageSensitiveMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional_sensitive_string: {
      value: cdktf.stringToHclTerraform(struct!.optionalSensitiveString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputSensitiveTestSensitiveMessageSensitiveMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputSensitiveTestSensitiveMessageSensitiveMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionalSensitiveString !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalSensitiveString = this._optionalSensitiveString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputSensitiveTestSensitiveMessageSensitiveMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionalSensitiveString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionalSensitiveString = value.optionalSensitiveString;
    }
  }

  // optional_sensitive_string - computed: true, optional: true, required: false
  private _optionalSensitiveString?: string; 
  public get optionalSensitiveString() {
    return this.getStringAttribute('optional_sensitive_string');
  }
  public set optionalSensitiveString(value: string) {
    this._optionalSensitiveString = value;
  }
  public resetOptionalSensitiveString() {
    this._optionalSensitiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalSensitiveStringInput() {
    return this._optionalSensitiveString;
  }
}

export class WebapputSensitiveTestSensitiveMessageSensitiveMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputSensitiveTestSensitiveMessageSensitiveMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputSensitiveTestSensitiveMessageSensitiveMessagesOutputReference {
    return new WebapputSensitiveTestSensitiveMessageSensitiveMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputSensitiveTestSensitiveMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_string Webapput#sensitive_string}
  */
  readonly sensitiveString?: string;
  /**
  * sensitive_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_message Webapput#sensitive_message}
  */
  readonly sensitiveMessage?: WebapputSensitiveTestSensitiveMessageSensitiveMessage[] | cdktf.IResolvable;
  /**
  * sensitive_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_messages Webapput#sensitive_messages}
  */
  readonly sensitiveMessages?: WebapputSensitiveTestSensitiveMessageSensitiveMessages[] | cdktf.IResolvable;
}

export function webapputSensitiveTestSensitiveMessageToTerraform(struct?: WebapputSensitiveTestSensitiveMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitive_string: cdktf.stringToTerraform(struct!.sensitiveString),
    sensitive_message: cdktf.listMapper(webapputSensitiveTestSensitiveMessageSensitiveMessageToTerraform, true)(struct!.sensitiveMessage),
    sensitive_messages: cdktf.listMapper(webapputSensitiveTestSensitiveMessageSensitiveMessagesToTerraform, true)(struct!.sensitiveMessages),
  }
}


export function webapputSensitiveTestSensitiveMessageToHclTerraform(struct?: WebapputSensitiveTestSensitiveMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sensitive_string: {
      value: cdktf.stringToHclTerraform(struct!.sensitiveString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitive_message: {
      value: cdktf.listMapperHcl(webapputSensitiveTestSensitiveMessageSensitiveMessageToHclTerraform, true)(struct!.sensitiveMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputSensitiveTestSensitiveMessageSensitiveMessageList",
    },
    sensitive_messages: {
      value: cdktf.listMapperHcl(webapputSensitiveTestSensitiveMessageSensitiveMessagesToHclTerraform, true)(struct!.sensitiveMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputSensitiveTestSensitiveMessageSensitiveMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputSensitiveTestSensitiveMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputSensitiveTestSensitiveMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitiveString !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveString = this._sensitiveString;
    }
    if (this._sensitiveMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveMessage = this._sensitiveMessage?.internalValue;
    }
    if (this._sensitiveMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveMessages = this._sensitiveMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputSensitiveTestSensitiveMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sensitiveString = undefined;
      this._sensitiveMessage.internalValue = undefined;
      this._sensitiveMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sensitiveString = value.sensitiveString;
      this._sensitiveMessage.internalValue = value.sensitiveMessage;
      this._sensitiveMessages.internalValue = value.sensitiveMessages;
    }
  }

  // sensitive_string - computed: true, optional: true, required: false
  private _sensitiveString?: string; 
  public get sensitiveString() {
    return this.getStringAttribute('sensitive_string');
  }
  public set sensitiveString(value: string) {
    this._sensitiveString = value;
  }
  public resetSensitiveString() {
    this._sensitiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveStringInput() {
    return this._sensitiveString;
  }

  // sensitive_message - computed: false, optional: true, required: false
  private _sensitiveMessage = new WebapputSensitiveTestSensitiveMessageSensitiveMessageList(this, "sensitive_message", true);
  public get sensitiveMessage() {
    return this._sensitiveMessage;
  }
  public putSensitiveMessage(value: WebapputSensitiveTestSensitiveMessageSensitiveMessage[] | cdktf.IResolvable) {
    this._sensitiveMessage.internalValue = value;
  }
  public resetSensitiveMessage() {
    this._sensitiveMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveMessageInput() {
    return this._sensitiveMessage.internalValue;
  }

  // sensitive_messages - computed: false, optional: true, required: false
  private _sensitiveMessages = new WebapputSensitiveTestSensitiveMessageSensitiveMessagesList(this, "sensitive_messages", false);
  public get sensitiveMessages() {
    return this._sensitiveMessages;
  }
  public putSensitiveMessages(value: WebapputSensitiveTestSensitiveMessageSensitiveMessages[] | cdktf.IResolvable) {
    this._sensitiveMessages.internalValue = value;
  }
  public resetSensitiveMessages() {
    this._sensitiveMessages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveMessagesInput() {
    return this._sensitiveMessages.internalValue;
  }
}

export class WebapputSensitiveTestSensitiveMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputSensitiveTestSensitiveMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputSensitiveTestSensitiveMessageOutputReference {
    return new WebapputSensitiveTestSensitiveMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputSensitiveTestSensitiveMessagesSensitiveMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#optional_sensitive_string Webapput#optional_sensitive_string}
  */
  readonly optionalSensitiveString?: string;
}

export function webapputSensitiveTestSensitiveMessagesSensitiveMessageToTerraform(struct?: WebapputSensitiveTestSensitiveMessagesSensitiveMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional_sensitive_string: cdktf.stringToTerraform(struct!.optionalSensitiveString),
  }
}


export function webapputSensitiveTestSensitiveMessagesSensitiveMessageToHclTerraform(struct?: WebapputSensitiveTestSensitiveMessagesSensitiveMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional_sensitive_string: {
      value: cdktf.stringToHclTerraform(struct!.optionalSensitiveString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputSensitiveTestSensitiveMessagesSensitiveMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputSensitiveTestSensitiveMessagesSensitiveMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionalSensitiveString !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalSensitiveString = this._optionalSensitiveString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputSensitiveTestSensitiveMessagesSensitiveMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionalSensitiveString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionalSensitiveString = value.optionalSensitiveString;
    }
  }

  // optional_sensitive_string - computed: true, optional: true, required: false
  private _optionalSensitiveString?: string; 
  public get optionalSensitiveString() {
    return this.getStringAttribute('optional_sensitive_string');
  }
  public set optionalSensitiveString(value: string) {
    this._optionalSensitiveString = value;
  }
  public resetOptionalSensitiveString() {
    this._optionalSensitiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalSensitiveStringInput() {
    return this._optionalSensitiveString;
  }
}

export class WebapputSensitiveTestSensitiveMessagesSensitiveMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputSensitiveTestSensitiveMessagesSensitiveMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputSensitiveTestSensitiveMessagesSensitiveMessageOutputReference {
    return new WebapputSensitiveTestSensitiveMessagesSensitiveMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputSensitiveTestSensitiveMessagesSensitiveMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#optional_sensitive_string Webapput#optional_sensitive_string}
  */
  readonly optionalSensitiveString?: string;
}

export function webapputSensitiveTestSensitiveMessagesSensitiveMessagesToTerraform(struct?: WebapputSensitiveTestSensitiveMessagesSensitiveMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional_sensitive_string: cdktf.stringToTerraform(struct!.optionalSensitiveString),
  }
}


export function webapputSensitiveTestSensitiveMessagesSensitiveMessagesToHclTerraform(struct?: WebapputSensitiveTestSensitiveMessagesSensitiveMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional_sensitive_string: {
      value: cdktf.stringToHclTerraform(struct!.optionalSensitiveString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputSensitiveTestSensitiveMessagesSensitiveMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputSensitiveTestSensitiveMessagesSensitiveMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionalSensitiveString !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalSensitiveString = this._optionalSensitiveString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputSensitiveTestSensitiveMessagesSensitiveMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionalSensitiveString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionalSensitiveString = value.optionalSensitiveString;
    }
  }

  // optional_sensitive_string - computed: true, optional: true, required: false
  private _optionalSensitiveString?: string; 
  public get optionalSensitiveString() {
    return this.getStringAttribute('optional_sensitive_string');
  }
  public set optionalSensitiveString(value: string) {
    this._optionalSensitiveString = value;
  }
  public resetOptionalSensitiveString() {
    this._optionalSensitiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalSensitiveStringInput() {
    return this._optionalSensitiveString;
  }
}

export class WebapputSensitiveTestSensitiveMessagesSensitiveMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputSensitiveTestSensitiveMessagesSensitiveMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputSensitiveTestSensitiveMessagesSensitiveMessagesOutputReference {
    return new WebapputSensitiveTestSensitiveMessagesSensitiveMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputSensitiveTestSensitiveMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_string Webapput#sensitive_string}
  */
  readonly sensitiveString?: string;
  /**
  * sensitive_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_message Webapput#sensitive_message}
  */
  readonly sensitiveMessage?: WebapputSensitiveTestSensitiveMessagesSensitiveMessage[] | cdktf.IResolvable;
  /**
  * sensitive_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_messages Webapput#sensitive_messages}
  */
  readonly sensitiveMessages?: WebapputSensitiveTestSensitiveMessagesSensitiveMessages[] | cdktf.IResolvable;
}

export function webapputSensitiveTestSensitiveMessagesToTerraform(struct?: WebapputSensitiveTestSensitiveMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitive_string: cdktf.stringToTerraform(struct!.sensitiveString),
    sensitive_message: cdktf.listMapper(webapputSensitiveTestSensitiveMessagesSensitiveMessageToTerraform, true)(struct!.sensitiveMessage),
    sensitive_messages: cdktf.listMapper(webapputSensitiveTestSensitiveMessagesSensitiveMessagesToTerraform, true)(struct!.sensitiveMessages),
  }
}


export function webapputSensitiveTestSensitiveMessagesToHclTerraform(struct?: WebapputSensitiveTestSensitiveMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sensitive_string: {
      value: cdktf.stringToHclTerraform(struct!.sensitiveString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitive_message: {
      value: cdktf.listMapperHcl(webapputSensitiveTestSensitiveMessagesSensitiveMessageToHclTerraform, true)(struct!.sensitiveMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputSensitiveTestSensitiveMessagesSensitiveMessageList",
    },
    sensitive_messages: {
      value: cdktf.listMapperHcl(webapputSensitiveTestSensitiveMessagesSensitiveMessagesToHclTerraform, true)(struct!.sensitiveMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputSensitiveTestSensitiveMessagesSensitiveMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputSensitiveTestSensitiveMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputSensitiveTestSensitiveMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitiveString !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveString = this._sensitiveString;
    }
    if (this._sensitiveMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveMessage = this._sensitiveMessage?.internalValue;
    }
    if (this._sensitiveMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveMessages = this._sensitiveMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputSensitiveTestSensitiveMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sensitiveString = undefined;
      this._sensitiveMessage.internalValue = undefined;
      this._sensitiveMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sensitiveString = value.sensitiveString;
      this._sensitiveMessage.internalValue = value.sensitiveMessage;
      this._sensitiveMessages.internalValue = value.sensitiveMessages;
    }
  }

  // sensitive_string - computed: true, optional: true, required: false
  private _sensitiveString?: string; 
  public get sensitiveString() {
    return this.getStringAttribute('sensitive_string');
  }
  public set sensitiveString(value: string) {
    this._sensitiveString = value;
  }
  public resetSensitiveString() {
    this._sensitiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveStringInput() {
    return this._sensitiveString;
  }

  // sensitive_message - computed: false, optional: true, required: false
  private _sensitiveMessage = new WebapputSensitiveTestSensitiveMessagesSensitiveMessageList(this, "sensitive_message", true);
  public get sensitiveMessage() {
    return this._sensitiveMessage;
  }
  public putSensitiveMessage(value: WebapputSensitiveTestSensitiveMessagesSensitiveMessage[] | cdktf.IResolvable) {
    this._sensitiveMessage.internalValue = value;
  }
  public resetSensitiveMessage() {
    this._sensitiveMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveMessageInput() {
    return this._sensitiveMessage.internalValue;
  }

  // sensitive_messages - computed: false, optional: true, required: false
  private _sensitiveMessages = new WebapputSensitiveTestSensitiveMessagesSensitiveMessagesList(this, "sensitive_messages", false);
  public get sensitiveMessages() {
    return this._sensitiveMessages;
  }
  public putSensitiveMessages(value: WebapputSensitiveTestSensitiveMessagesSensitiveMessages[] | cdktf.IResolvable) {
    this._sensitiveMessages.internalValue = value;
  }
  public resetSensitiveMessages() {
    this._sensitiveMessages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveMessagesInput() {
    return this._sensitiveMessages.internalValue;
  }
}

export class WebapputSensitiveTestSensitiveMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputSensitiveTestSensitiveMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputSensitiveTestSensitiveMessagesOutputReference {
    return new WebapputSensitiveTestSensitiveMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputSensitiveTest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_string Webapput#sensitive_string}
  */
  readonly sensitiveString?: string;
  /**
  * sensitive_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_message Webapput#sensitive_message}
  */
  readonly sensitiveMessage?: WebapputSensitiveTestSensitiveMessage[] | cdktf.IResolvable;
  /**
  * sensitive_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_messages Webapput#sensitive_messages}
  */
  readonly sensitiveMessages?: WebapputSensitiveTestSensitiveMessages[] | cdktf.IResolvable;
}

export function webapputSensitiveTestToTerraform(struct?: WebapputSensitiveTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitive_string: cdktf.stringToTerraform(struct!.sensitiveString),
    sensitive_message: cdktf.listMapper(webapputSensitiveTestSensitiveMessageToTerraform, true)(struct!.sensitiveMessage),
    sensitive_messages: cdktf.listMapper(webapputSensitiveTestSensitiveMessagesToTerraform, true)(struct!.sensitiveMessages),
  }
}


export function webapputSensitiveTestToHclTerraform(struct?: WebapputSensitiveTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sensitive_string: {
      value: cdktf.stringToHclTerraform(struct!.sensitiveString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitive_message: {
      value: cdktf.listMapperHcl(webapputSensitiveTestSensitiveMessageToHclTerraform, true)(struct!.sensitiveMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputSensitiveTestSensitiveMessageList",
    },
    sensitive_messages: {
      value: cdktf.listMapperHcl(webapputSensitiveTestSensitiveMessagesToHclTerraform, true)(struct!.sensitiveMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputSensitiveTestSensitiveMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputSensitiveTestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputSensitiveTest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitiveString !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveString = this._sensitiveString;
    }
    if (this._sensitiveMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveMessage = this._sensitiveMessage?.internalValue;
    }
    if (this._sensitiveMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveMessages = this._sensitiveMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputSensitiveTest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sensitiveString = undefined;
      this._sensitiveMessage.internalValue = undefined;
      this._sensitiveMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sensitiveString = value.sensitiveString;
      this._sensitiveMessage.internalValue = value.sensitiveMessage;
      this._sensitiveMessages.internalValue = value.sensitiveMessages;
    }
  }

  // sensitive_string - computed: true, optional: true, required: false
  private _sensitiveString?: string; 
  public get sensitiveString() {
    return this.getStringAttribute('sensitive_string');
  }
  public set sensitiveString(value: string) {
    this._sensitiveString = value;
  }
  public resetSensitiveString() {
    this._sensitiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveStringInput() {
    return this._sensitiveString;
  }

  // sensitive_message - computed: false, optional: true, required: false
  private _sensitiveMessage = new WebapputSensitiveTestSensitiveMessageList(this, "sensitive_message", true);
  public get sensitiveMessage() {
    return this._sensitiveMessage;
  }
  public putSensitiveMessage(value: WebapputSensitiveTestSensitiveMessage[] | cdktf.IResolvable) {
    this._sensitiveMessage.internalValue = value;
  }
  public resetSensitiveMessage() {
    this._sensitiveMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveMessageInput() {
    return this._sensitiveMessage.internalValue;
  }

  // sensitive_messages - computed: false, optional: true, required: false
  private _sensitiveMessages = new WebapputSensitiveTestSensitiveMessagesList(this, "sensitive_messages", false);
  public get sensitiveMessages() {
    return this._sensitiveMessages;
  }
  public putSensitiveMessages(value: WebapputSensitiveTestSensitiveMessages[] | cdktf.IResolvable) {
    this._sensitiveMessages.internalValue = value;
  }
  public resetSensitiveMessages() {
    this._sensitiveMessages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveMessagesInput() {
    return this._sensitiveMessages.internalValue;
  }
}

export class WebapputSensitiveTestList extends cdktf.ComplexList {
  public internalValue? : WebapputSensitiveTest[] | cdktf.IResolvable

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
  public get(index: number): WebapputSensitiveTestOutputReference {
    return new WebapputSensitiveTestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputSensitiveTestsSensitiveMessageSensitiveMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#optional_sensitive_string Webapput#optional_sensitive_string}
  */
  readonly optionalSensitiveString?: string;
}

export function webapputSensitiveTestsSensitiveMessageSensitiveMessageToTerraform(struct?: WebapputSensitiveTestsSensitiveMessageSensitiveMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional_sensitive_string: cdktf.stringToTerraform(struct!.optionalSensitiveString),
  }
}


export function webapputSensitiveTestsSensitiveMessageSensitiveMessageToHclTerraform(struct?: WebapputSensitiveTestsSensitiveMessageSensitiveMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional_sensitive_string: {
      value: cdktf.stringToHclTerraform(struct!.optionalSensitiveString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputSensitiveTestsSensitiveMessageSensitiveMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputSensitiveTestsSensitiveMessageSensitiveMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionalSensitiveString !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalSensitiveString = this._optionalSensitiveString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputSensitiveTestsSensitiveMessageSensitiveMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionalSensitiveString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionalSensitiveString = value.optionalSensitiveString;
    }
  }

  // optional_sensitive_string - computed: true, optional: true, required: false
  private _optionalSensitiveString?: string; 
  public get optionalSensitiveString() {
    return this.getStringAttribute('optional_sensitive_string');
  }
  public set optionalSensitiveString(value: string) {
    this._optionalSensitiveString = value;
  }
  public resetOptionalSensitiveString() {
    this._optionalSensitiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalSensitiveStringInput() {
    return this._optionalSensitiveString;
  }
}

export class WebapputSensitiveTestsSensitiveMessageSensitiveMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputSensitiveTestsSensitiveMessageSensitiveMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputSensitiveTestsSensitiveMessageSensitiveMessageOutputReference {
    return new WebapputSensitiveTestsSensitiveMessageSensitiveMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputSensitiveTestsSensitiveMessageSensitiveMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#optional_sensitive_string Webapput#optional_sensitive_string}
  */
  readonly optionalSensitiveString?: string;
}

export function webapputSensitiveTestsSensitiveMessageSensitiveMessagesToTerraform(struct?: WebapputSensitiveTestsSensitiveMessageSensitiveMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional_sensitive_string: cdktf.stringToTerraform(struct!.optionalSensitiveString),
  }
}


export function webapputSensitiveTestsSensitiveMessageSensitiveMessagesToHclTerraform(struct?: WebapputSensitiveTestsSensitiveMessageSensitiveMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional_sensitive_string: {
      value: cdktf.stringToHclTerraform(struct!.optionalSensitiveString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputSensitiveTestsSensitiveMessageSensitiveMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputSensitiveTestsSensitiveMessageSensitiveMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionalSensitiveString !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalSensitiveString = this._optionalSensitiveString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputSensitiveTestsSensitiveMessageSensitiveMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionalSensitiveString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionalSensitiveString = value.optionalSensitiveString;
    }
  }

  // optional_sensitive_string - computed: true, optional: true, required: false
  private _optionalSensitiveString?: string; 
  public get optionalSensitiveString() {
    return this.getStringAttribute('optional_sensitive_string');
  }
  public set optionalSensitiveString(value: string) {
    this._optionalSensitiveString = value;
  }
  public resetOptionalSensitiveString() {
    this._optionalSensitiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalSensitiveStringInput() {
    return this._optionalSensitiveString;
  }
}

export class WebapputSensitiveTestsSensitiveMessageSensitiveMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputSensitiveTestsSensitiveMessageSensitiveMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputSensitiveTestsSensitiveMessageSensitiveMessagesOutputReference {
    return new WebapputSensitiveTestsSensitiveMessageSensitiveMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputSensitiveTestsSensitiveMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_string Webapput#sensitive_string}
  */
  readonly sensitiveString?: string;
  /**
  * sensitive_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_message Webapput#sensitive_message}
  */
  readonly sensitiveMessage?: WebapputSensitiveTestsSensitiveMessageSensitiveMessage[] | cdktf.IResolvable;
  /**
  * sensitive_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_messages Webapput#sensitive_messages}
  */
  readonly sensitiveMessages?: WebapputSensitiveTestsSensitiveMessageSensitiveMessages[] | cdktf.IResolvable;
}

export function webapputSensitiveTestsSensitiveMessageToTerraform(struct?: WebapputSensitiveTestsSensitiveMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitive_string: cdktf.stringToTerraform(struct!.sensitiveString),
    sensitive_message: cdktf.listMapper(webapputSensitiveTestsSensitiveMessageSensitiveMessageToTerraform, true)(struct!.sensitiveMessage),
    sensitive_messages: cdktf.listMapper(webapputSensitiveTestsSensitiveMessageSensitiveMessagesToTerraform, true)(struct!.sensitiveMessages),
  }
}


export function webapputSensitiveTestsSensitiveMessageToHclTerraform(struct?: WebapputSensitiveTestsSensitiveMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sensitive_string: {
      value: cdktf.stringToHclTerraform(struct!.sensitiveString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitive_message: {
      value: cdktf.listMapperHcl(webapputSensitiveTestsSensitiveMessageSensitiveMessageToHclTerraform, true)(struct!.sensitiveMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputSensitiveTestsSensitiveMessageSensitiveMessageList",
    },
    sensitive_messages: {
      value: cdktf.listMapperHcl(webapputSensitiveTestsSensitiveMessageSensitiveMessagesToHclTerraform, true)(struct!.sensitiveMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputSensitiveTestsSensitiveMessageSensitiveMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputSensitiveTestsSensitiveMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputSensitiveTestsSensitiveMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitiveString !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveString = this._sensitiveString;
    }
    if (this._sensitiveMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveMessage = this._sensitiveMessage?.internalValue;
    }
    if (this._sensitiveMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveMessages = this._sensitiveMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputSensitiveTestsSensitiveMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sensitiveString = undefined;
      this._sensitiveMessage.internalValue = undefined;
      this._sensitiveMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sensitiveString = value.sensitiveString;
      this._sensitiveMessage.internalValue = value.sensitiveMessage;
      this._sensitiveMessages.internalValue = value.sensitiveMessages;
    }
  }

  // sensitive_string - computed: true, optional: true, required: false
  private _sensitiveString?: string; 
  public get sensitiveString() {
    return this.getStringAttribute('sensitive_string');
  }
  public set sensitiveString(value: string) {
    this._sensitiveString = value;
  }
  public resetSensitiveString() {
    this._sensitiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveStringInput() {
    return this._sensitiveString;
  }

  // sensitive_message - computed: false, optional: true, required: false
  private _sensitiveMessage = new WebapputSensitiveTestsSensitiveMessageSensitiveMessageList(this, "sensitive_message", true);
  public get sensitiveMessage() {
    return this._sensitiveMessage;
  }
  public putSensitiveMessage(value: WebapputSensitiveTestsSensitiveMessageSensitiveMessage[] | cdktf.IResolvable) {
    this._sensitiveMessage.internalValue = value;
  }
  public resetSensitiveMessage() {
    this._sensitiveMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveMessageInput() {
    return this._sensitiveMessage.internalValue;
  }

  // sensitive_messages - computed: false, optional: true, required: false
  private _sensitiveMessages = new WebapputSensitiveTestsSensitiveMessageSensitiveMessagesList(this, "sensitive_messages", false);
  public get sensitiveMessages() {
    return this._sensitiveMessages;
  }
  public putSensitiveMessages(value: WebapputSensitiveTestsSensitiveMessageSensitiveMessages[] | cdktf.IResolvable) {
    this._sensitiveMessages.internalValue = value;
  }
  public resetSensitiveMessages() {
    this._sensitiveMessages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveMessagesInput() {
    return this._sensitiveMessages.internalValue;
  }
}

export class WebapputSensitiveTestsSensitiveMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputSensitiveTestsSensitiveMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputSensitiveTestsSensitiveMessageOutputReference {
    return new WebapputSensitiveTestsSensitiveMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputSensitiveTestsSensitiveMessagesSensitiveMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#optional_sensitive_string Webapput#optional_sensitive_string}
  */
  readonly optionalSensitiveString?: string;
}

export function webapputSensitiveTestsSensitiveMessagesSensitiveMessageToTerraform(struct?: WebapputSensitiveTestsSensitiveMessagesSensitiveMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional_sensitive_string: cdktf.stringToTerraform(struct!.optionalSensitiveString),
  }
}


export function webapputSensitiveTestsSensitiveMessagesSensitiveMessageToHclTerraform(struct?: WebapputSensitiveTestsSensitiveMessagesSensitiveMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional_sensitive_string: {
      value: cdktf.stringToHclTerraform(struct!.optionalSensitiveString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputSensitiveTestsSensitiveMessagesSensitiveMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputSensitiveTestsSensitiveMessagesSensitiveMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionalSensitiveString !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalSensitiveString = this._optionalSensitiveString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputSensitiveTestsSensitiveMessagesSensitiveMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionalSensitiveString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionalSensitiveString = value.optionalSensitiveString;
    }
  }

  // optional_sensitive_string - computed: true, optional: true, required: false
  private _optionalSensitiveString?: string; 
  public get optionalSensitiveString() {
    return this.getStringAttribute('optional_sensitive_string');
  }
  public set optionalSensitiveString(value: string) {
    this._optionalSensitiveString = value;
  }
  public resetOptionalSensitiveString() {
    this._optionalSensitiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalSensitiveStringInput() {
    return this._optionalSensitiveString;
  }
}

export class WebapputSensitiveTestsSensitiveMessagesSensitiveMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputSensitiveTestsSensitiveMessagesSensitiveMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputSensitiveTestsSensitiveMessagesSensitiveMessageOutputReference {
    return new WebapputSensitiveTestsSensitiveMessagesSensitiveMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputSensitiveTestsSensitiveMessagesSensitiveMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#optional_sensitive_string Webapput#optional_sensitive_string}
  */
  readonly optionalSensitiveString?: string;
}

export function webapputSensitiveTestsSensitiveMessagesSensitiveMessagesToTerraform(struct?: WebapputSensitiveTestsSensitiveMessagesSensitiveMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional_sensitive_string: cdktf.stringToTerraform(struct!.optionalSensitiveString),
  }
}


export function webapputSensitiveTestsSensitiveMessagesSensitiveMessagesToHclTerraform(struct?: WebapputSensitiveTestsSensitiveMessagesSensitiveMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional_sensitive_string: {
      value: cdktf.stringToHclTerraform(struct!.optionalSensitiveString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputSensitiveTestsSensitiveMessagesSensitiveMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputSensitiveTestsSensitiveMessagesSensitiveMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optionalSensitiveString !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalSensitiveString = this._optionalSensitiveString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputSensitiveTestsSensitiveMessagesSensitiveMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optionalSensitiveString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optionalSensitiveString = value.optionalSensitiveString;
    }
  }

  // optional_sensitive_string - computed: true, optional: true, required: false
  private _optionalSensitiveString?: string; 
  public get optionalSensitiveString() {
    return this.getStringAttribute('optional_sensitive_string');
  }
  public set optionalSensitiveString(value: string) {
    this._optionalSensitiveString = value;
  }
  public resetOptionalSensitiveString() {
    this._optionalSensitiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalSensitiveStringInput() {
    return this._optionalSensitiveString;
  }
}

export class WebapputSensitiveTestsSensitiveMessagesSensitiveMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputSensitiveTestsSensitiveMessagesSensitiveMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputSensitiveTestsSensitiveMessagesSensitiveMessagesOutputReference {
    return new WebapputSensitiveTestsSensitiveMessagesSensitiveMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputSensitiveTestsSensitiveMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_string Webapput#sensitive_string}
  */
  readonly sensitiveString?: string;
  /**
  * sensitive_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_message Webapput#sensitive_message}
  */
  readonly sensitiveMessage?: WebapputSensitiveTestsSensitiveMessagesSensitiveMessage[] | cdktf.IResolvable;
  /**
  * sensitive_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_messages Webapput#sensitive_messages}
  */
  readonly sensitiveMessages?: WebapputSensitiveTestsSensitiveMessagesSensitiveMessages[] | cdktf.IResolvable;
}

export function webapputSensitiveTestsSensitiveMessagesToTerraform(struct?: WebapputSensitiveTestsSensitiveMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitive_string: cdktf.stringToTerraform(struct!.sensitiveString),
    sensitive_message: cdktf.listMapper(webapputSensitiveTestsSensitiveMessagesSensitiveMessageToTerraform, true)(struct!.sensitiveMessage),
    sensitive_messages: cdktf.listMapper(webapputSensitiveTestsSensitiveMessagesSensitiveMessagesToTerraform, true)(struct!.sensitiveMessages),
  }
}


export function webapputSensitiveTestsSensitiveMessagesToHclTerraform(struct?: WebapputSensitiveTestsSensitiveMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sensitive_string: {
      value: cdktf.stringToHclTerraform(struct!.sensitiveString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitive_message: {
      value: cdktf.listMapperHcl(webapputSensitiveTestsSensitiveMessagesSensitiveMessageToHclTerraform, true)(struct!.sensitiveMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputSensitiveTestsSensitiveMessagesSensitiveMessageList",
    },
    sensitive_messages: {
      value: cdktf.listMapperHcl(webapputSensitiveTestsSensitiveMessagesSensitiveMessagesToHclTerraform, true)(struct!.sensitiveMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputSensitiveTestsSensitiveMessagesSensitiveMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputSensitiveTestsSensitiveMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputSensitiveTestsSensitiveMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitiveString !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveString = this._sensitiveString;
    }
    if (this._sensitiveMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveMessage = this._sensitiveMessage?.internalValue;
    }
    if (this._sensitiveMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveMessages = this._sensitiveMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputSensitiveTestsSensitiveMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sensitiveString = undefined;
      this._sensitiveMessage.internalValue = undefined;
      this._sensitiveMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sensitiveString = value.sensitiveString;
      this._sensitiveMessage.internalValue = value.sensitiveMessage;
      this._sensitiveMessages.internalValue = value.sensitiveMessages;
    }
  }

  // sensitive_string - computed: true, optional: true, required: false
  private _sensitiveString?: string; 
  public get sensitiveString() {
    return this.getStringAttribute('sensitive_string');
  }
  public set sensitiveString(value: string) {
    this._sensitiveString = value;
  }
  public resetSensitiveString() {
    this._sensitiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveStringInput() {
    return this._sensitiveString;
  }

  // sensitive_message - computed: false, optional: true, required: false
  private _sensitiveMessage = new WebapputSensitiveTestsSensitiveMessagesSensitiveMessageList(this, "sensitive_message", true);
  public get sensitiveMessage() {
    return this._sensitiveMessage;
  }
  public putSensitiveMessage(value: WebapputSensitiveTestsSensitiveMessagesSensitiveMessage[] | cdktf.IResolvable) {
    this._sensitiveMessage.internalValue = value;
  }
  public resetSensitiveMessage() {
    this._sensitiveMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveMessageInput() {
    return this._sensitiveMessage.internalValue;
  }

  // sensitive_messages - computed: false, optional: true, required: false
  private _sensitiveMessages = new WebapputSensitiveTestsSensitiveMessagesSensitiveMessagesList(this, "sensitive_messages", false);
  public get sensitiveMessages() {
    return this._sensitiveMessages;
  }
  public putSensitiveMessages(value: WebapputSensitiveTestsSensitiveMessagesSensitiveMessages[] | cdktf.IResolvable) {
    this._sensitiveMessages.internalValue = value;
  }
  public resetSensitiveMessages() {
    this._sensitiveMessages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveMessagesInput() {
    return this._sensitiveMessages.internalValue;
  }
}

export class WebapputSensitiveTestsSensitiveMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputSensitiveTestsSensitiveMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputSensitiveTestsSensitiveMessagesOutputReference {
    return new WebapputSensitiveTestsSensitiveMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputSensitiveTests {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_string Webapput#sensitive_string}
  */
  readonly sensitiveString?: string;
  /**
  * sensitive_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_message Webapput#sensitive_message}
  */
  readonly sensitiveMessage?: WebapputSensitiveTestsSensitiveMessage[] | cdktf.IResolvable;
  /**
  * sensitive_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#sensitive_messages Webapput#sensitive_messages}
  */
  readonly sensitiveMessages?: WebapputSensitiveTestsSensitiveMessages[] | cdktf.IResolvable;
}

export function webapputSensitiveTestsToTerraform(struct?: WebapputSensitiveTests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitive_string: cdktf.stringToTerraform(struct!.sensitiveString),
    sensitive_message: cdktf.listMapper(webapputSensitiveTestsSensitiveMessageToTerraform, true)(struct!.sensitiveMessage),
    sensitive_messages: cdktf.listMapper(webapputSensitiveTestsSensitiveMessagesToTerraform, true)(struct!.sensitiveMessages),
  }
}


export function webapputSensitiveTestsToHclTerraform(struct?: WebapputSensitiveTests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sensitive_string: {
      value: cdktf.stringToHclTerraform(struct!.sensitiveString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitive_message: {
      value: cdktf.listMapperHcl(webapputSensitiveTestsSensitiveMessageToHclTerraform, true)(struct!.sensitiveMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputSensitiveTestsSensitiveMessageList",
    },
    sensitive_messages: {
      value: cdktf.listMapperHcl(webapputSensitiveTestsSensitiveMessagesToHclTerraform, true)(struct!.sensitiveMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputSensitiveTestsSensitiveMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputSensitiveTestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputSensitiveTests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitiveString !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveString = this._sensitiveString;
    }
    if (this._sensitiveMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveMessage = this._sensitiveMessage?.internalValue;
    }
    if (this._sensitiveMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveMessages = this._sensitiveMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputSensitiveTests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sensitiveString = undefined;
      this._sensitiveMessage.internalValue = undefined;
      this._sensitiveMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sensitiveString = value.sensitiveString;
      this._sensitiveMessage.internalValue = value.sensitiveMessage;
      this._sensitiveMessages.internalValue = value.sensitiveMessages;
    }
  }

  // sensitive_string - computed: true, optional: true, required: false
  private _sensitiveString?: string; 
  public get sensitiveString() {
    return this.getStringAttribute('sensitive_string');
  }
  public set sensitiveString(value: string) {
    this._sensitiveString = value;
  }
  public resetSensitiveString() {
    this._sensitiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveStringInput() {
    return this._sensitiveString;
  }

  // sensitive_message - computed: false, optional: true, required: false
  private _sensitiveMessage = new WebapputSensitiveTestsSensitiveMessageList(this, "sensitive_message", true);
  public get sensitiveMessage() {
    return this._sensitiveMessage;
  }
  public putSensitiveMessage(value: WebapputSensitiveTestsSensitiveMessage[] | cdktf.IResolvable) {
    this._sensitiveMessage.internalValue = value;
  }
  public resetSensitiveMessage() {
    this._sensitiveMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveMessageInput() {
    return this._sensitiveMessage.internalValue;
  }

  // sensitive_messages - computed: false, optional: true, required: false
  private _sensitiveMessages = new WebapputSensitiveTestsSensitiveMessagesList(this, "sensitive_messages", false);
  public get sensitiveMessages() {
    return this._sensitiveMessages;
  }
  public putSensitiveMessages(value: WebapputSensitiveTestsSensitiveMessages[] | cdktf.IResolvable) {
    this._sensitiveMessages.internalValue = value;
  }
  public resetSensitiveMessages() {
    this._sensitiveMessages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveMessagesInput() {
    return this._sensitiveMessages.internalValue;
  }
}

export class WebapputSensitiveTestsList extends cdktf.ComplexList {
  public internalValue? : WebapputSensitiveTests[] | cdktf.IResolvable

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
  public get(index: number): WebapputSensitiveTestsOutputReference {
    return new WebapputSensitiveTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputStringLengthTestStringLengthMessageStringLengthMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_string Webapput#test_string}
  */
  readonly testString?: string;
}

export function webapputStringLengthTestStringLengthMessageStringLengthMessageToTerraform(struct?: WebapputStringLengthTestStringLengthMessageStringLengthMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_string: cdktf.stringToTerraform(struct!.testString),
  }
}


export function webapputStringLengthTestStringLengthMessageStringLengthMessageToHclTerraform(struct?: WebapputStringLengthTestStringLengthMessageStringLengthMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_string: {
      value: cdktf.stringToHclTerraform(struct!.testString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputStringLengthTestStringLengthMessageStringLengthMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputStringLengthTestStringLengthMessageStringLengthMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testString !== undefined) {
      hasAnyValues = true;
      internalValueResult.testString = this._testString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputStringLengthTestStringLengthMessageStringLengthMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testString = value.testString;
    }
  }

  // test_string - computed: true, optional: true, required: false
  private _testString?: string; 
  public get testString() {
    return this.getStringAttribute('test_string');
  }
  public set testString(value: string) {
    this._testString = value;
  }
  public resetTestString() {
    this._testString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringInput() {
    return this._testString;
  }
}

export class WebapputStringLengthTestStringLengthMessageStringLengthMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputStringLengthTestStringLengthMessageStringLengthMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputStringLengthTestStringLengthMessageStringLengthMessageOutputReference {
    return new WebapputStringLengthTestStringLengthMessageStringLengthMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputStringLengthTestStringLengthMessageStringLengthMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_string Webapput#test_string}
  */
  readonly testString?: string;
}

export function webapputStringLengthTestStringLengthMessageStringLengthMessagesToTerraform(struct?: WebapputStringLengthTestStringLengthMessageStringLengthMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_string: cdktf.stringToTerraform(struct!.testString),
  }
}


export function webapputStringLengthTestStringLengthMessageStringLengthMessagesToHclTerraform(struct?: WebapputStringLengthTestStringLengthMessageStringLengthMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_string: {
      value: cdktf.stringToHclTerraform(struct!.testString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputStringLengthTestStringLengthMessageStringLengthMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputStringLengthTestStringLengthMessageStringLengthMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testString !== undefined) {
      hasAnyValues = true;
      internalValueResult.testString = this._testString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputStringLengthTestStringLengthMessageStringLengthMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testString = value.testString;
    }
  }

  // test_string - computed: true, optional: true, required: false
  private _testString?: string; 
  public get testString() {
    return this.getStringAttribute('test_string');
  }
  public set testString(value: string) {
    this._testString = value;
  }
  public resetTestString() {
    this._testString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringInput() {
    return this._testString;
  }
}

export class WebapputStringLengthTestStringLengthMessageStringLengthMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputStringLengthTestStringLengthMessageStringLengthMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputStringLengthTestStringLengthMessageStringLengthMessagesOutputReference {
    return new WebapputStringLengthTestStringLengthMessageStringLengthMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputStringLengthTestStringLengthMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_string Webapput#test_string}
  */
  readonly testString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_strings Webapput#test_strings}
  */
  readonly testStrings?: string[];
  /**
  * string_length_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#string_length_message Webapput#string_length_message}
  */
  readonly stringLengthMessage?: WebapputStringLengthTestStringLengthMessageStringLengthMessage[] | cdktf.IResolvable;
  /**
  * string_length_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#string_length_messages Webapput#string_length_messages}
  */
  readonly stringLengthMessages?: WebapputStringLengthTestStringLengthMessageStringLengthMessages[] | cdktf.IResolvable;
}

export function webapputStringLengthTestStringLengthMessageToTerraform(struct?: WebapputStringLengthTestStringLengthMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_string: cdktf.stringToTerraform(struct!.testString),
    test_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.testStrings),
    string_length_message: cdktf.listMapper(webapputStringLengthTestStringLengthMessageStringLengthMessageToTerraform, true)(struct!.stringLengthMessage),
    string_length_messages: cdktf.listMapper(webapputStringLengthTestStringLengthMessageStringLengthMessagesToTerraform, true)(struct!.stringLengthMessages),
  }
}


export function webapputStringLengthTestStringLengthMessageToHclTerraform(struct?: WebapputStringLengthTestStringLengthMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_string: {
      value: cdktf.stringToHclTerraform(struct!.testString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_strings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.testStrings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_length_message: {
      value: cdktf.listMapperHcl(webapputStringLengthTestStringLengthMessageStringLengthMessageToHclTerraform, true)(struct!.stringLengthMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputStringLengthTestStringLengthMessageStringLengthMessageList",
    },
    string_length_messages: {
      value: cdktf.listMapperHcl(webapputStringLengthTestStringLengthMessageStringLengthMessagesToHclTerraform, true)(struct!.stringLengthMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputStringLengthTestStringLengthMessageStringLengthMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputStringLengthTestStringLengthMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputStringLengthTestStringLengthMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testString !== undefined) {
      hasAnyValues = true;
      internalValueResult.testString = this._testString;
    }
    if (this._testStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.testStrings = this._testStrings;
    }
    if (this._stringLengthMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringLengthMessage = this._stringLengthMessage?.internalValue;
    }
    if (this._stringLengthMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringLengthMessages = this._stringLengthMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputStringLengthTestStringLengthMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testString = undefined;
      this._testStrings = undefined;
      this._stringLengthMessage.internalValue = undefined;
      this._stringLengthMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testString = value.testString;
      this._testStrings = value.testStrings;
      this._stringLengthMessage.internalValue = value.stringLengthMessage;
      this._stringLengthMessages.internalValue = value.stringLengthMessages;
    }
  }

  // test_string - computed: true, optional: true, required: false
  private _testString?: string; 
  public get testString() {
    return this.getStringAttribute('test_string');
  }
  public set testString(value: string) {
    this._testString = value;
  }
  public resetTestString() {
    this._testString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringInput() {
    return this._testString;
  }

  // test_strings - computed: false, optional: true, required: false
  private _testStrings?: string[]; 
  public get testStrings() {
    return this.getListAttribute('test_strings');
  }
  public set testStrings(value: string[]) {
    this._testStrings = value;
  }
  public resetTestStrings() {
    this._testStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringsInput() {
    return this._testStrings;
  }

  // string_length_message - computed: false, optional: true, required: false
  private _stringLengthMessage = new WebapputStringLengthTestStringLengthMessageStringLengthMessageList(this, "string_length_message", true);
  public get stringLengthMessage() {
    return this._stringLengthMessage;
  }
  public putStringLengthMessage(value: WebapputStringLengthTestStringLengthMessageStringLengthMessage[] | cdktf.IResolvable) {
    this._stringLengthMessage.internalValue = value;
  }
  public resetStringLengthMessage() {
    this._stringLengthMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringLengthMessageInput() {
    return this._stringLengthMessage.internalValue;
  }

  // string_length_messages - computed: false, optional: true, required: false
  private _stringLengthMessages = new WebapputStringLengthTestStringLengthMessageStringLengthMessagesList(this, "string_length_messages", false);
  public get stringLengthMessages() {
    return this._stringLengthMessages;
  }
  public putStringLengthMessages(value: WebapputStringLengthTestStringLengthMessageStringLengthMessages[] | cdktf.IResolvable) {
    this._stringLengthMessages.internalValue = value;
  }
  public resetStringLengthMessages() {
    this._stringLengthMessages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringLengthMessagesInput() {
    return this._stringLengthMessages.internalValue;
  }
}

export class WebapputStringLengthTestStringLengthMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputStringLengthTestStringLengthMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputStringLengthTestStringLengthMessageOutputReference {
    return new WebapputStringLengthTestStringLengthMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputStringLengthTestStringLengthMessagesStringLengthMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_string Webapput#test_string}
  */
  readonly testString?: string;
}

export function webapputStringLengthTestStringLengthMessagesStringLengthMessageToTerraform(struct?: WebapputStringLengthTestStringLengthMessagesStringLengthMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_string: cdktf.stringToTerraform(struct!.testString),
  }
}


export function webapputStringLengthTestStringLengthMessagesStringLengthMessageToHclTerraform(struct?: WebapputStringLengthTestStringLengthMessagesStringLengthMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_string: {
      value: cdktf.stringToHclTerraform(struct!.testString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputStringLengthTestStringLengthMessagesStringLengthMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputStringLengthTestStringLengthMessagesStringLengthMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testString !== undefined) {
      hasAnyValues = true;
      internalValueResult.testString = this._testString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputStringLengthTestStringLengthMessagesStringLengthMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testString = value.testString;
    }
  }

  // test_string - computed: true, optional: true, required: false
  private _testString?: string; 
  public get testString() {
    return this.getStringAttribute('test_string');
  }
  public set testString(value: string) {
    this._testString = value;
  }
  public resetTestString() {
    this._testString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringInput() {
    return this._testString;
  }
}

export class WebapputStringLengthTestStringLengthMessagesStringLengthMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputStringLengthTestStringLengthMessagesStringLengthMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputStringLengthTestStringLengthMessagesStringLengthMessageOutputReference {
    return new WebapputStringLengthTestStringLengthMessagesStringLengthMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputStringLengthTestStringLengthMessagesStringLengthMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_string Webapput#test_string}
  */
  readonly testString?: string;
}

export function webapputStringLengthTestStringLengthMessagesStringLengthMessagesToTerraform(struct?: WebapputStringLengthTestStringLengthMessagesStringLengthMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_string: cdktf.stringToTerraform(struct!.testString),
  }
}


export function webapputStringLengthTestStringLengthMessagesStringLengthMessagesToHclTerraform(struct?: WebapputStringLengthTestStringLengthMessagesStringLengthMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_string: {
      value: cdktf.stringToHclTerraform(struct!.testString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputStringLengthTestStringLengthMessagesStringLengthMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputStringLengthTestStringLengthMessagesStringLengthMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testString !== undefined) {
      hasAnyValues = true;
      internalValueResult.testString = this._testString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputStringLengthTestStringLengthMessagesStringLengthMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testString = value.testString;
    }
  }

  // test_string - computed: true, optional: true, required: false
  private _testString?: string; 
  public get testString() {
    return this.getStringAttribute('test_string');
  }
  public set testString(value: string) {
    this._testString = value;
  }
  public resetTestString() {
    this._testString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringInput() {
    return this._testString;
  }
}

export class WebapputStringLengthTestStringLengthMessagesStringLengthMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputStringLengthTestStringLengthMessagesStringLengthMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputStringLengthTestStringLengthMessagesStringLengthMessagesOutputReference {
    return new WebapputStringLengthTestStringLengthMessagesStringLengthMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputStringLengthTestStringLengthMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_string Webapput#test_string}
  */
  readonly testString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_strings Webapput#test_strings}
  */
  readonly testStrings?: string[];
  /**
  * string_length_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#string_length_message Webapput#string_length_message}
  */
  readonly stringLengthMessage?: WebapputStringLengthTestStringLengthMessagesStringLengthMessage[] | cdktf.IResolvable;
  /**
  * string_length_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#string_length_messages Webapput#string_length_messages}
  */
  readonly stringLengthMessages?: WebapputStringLengthTestStringLengthMessagesStringLengthMessages[] | cdktf.IResolvable;
}

export function webapputStringLengthTestStringLengthMessagesToTerraform(struct?: WebapputStringLengthTestStringLengthMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_string: cdktf.stringToTerraform(struct!.testString),
    test_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.testStrings),
    string_length_message: cdktf.listMapper(webapputStringLengthTestStringLengthMessagesStringLengthMessageToTerraform, true)(struct!.stringLengthMessage),
    string_length_messages: cdktf.listMapper(webapputStringLengthTestStringLengthMessagesStringLengthMessagesToTerraform, true)(struct!.stringLengthMessages),
  }
}


export function webapputStringLengthTestStringLengthMessagesToHclTerraform(struct?: WebapputStringLengthTestStringLengthMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_string: {
      value: cdktf.stringToHclTerraform(struct!.testString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_strings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.testStrings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_length_message: {
      value: cdktf.listMapperHcl(webapputStringLengthTestStringLengthMessagesStringLengthMessageToHclTerraform, true)(struct!.stringLengthMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputStringLengthTestStringLengthMessagesStringLengthMessageList",
    },
    string_length_messages: {
      value: cdktf.listMapperHcl(webapputStringLengthTestStringLengthMessagesStringLengthMessagesToHclTerraform, true)(struct!.stringLengthMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputStringLengthTestStringLengthMessagesStringLengthMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputStringLengthTestStringLengthMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputStringLengthTestStringLengthMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testString !== undefined) {
      hasAnyValues = true;
      internalValueResult.testString = this._testString;
    }
    if (this._testStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.testStrings = this._testStrings;
    }
    if (this._stringLengthMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringLengthMessage = this._stringLengthMessage?.internalValue;
    }
    if (this._stringLengthMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringLengthMessages = this._stringLengthMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputStringLengthTestStringLengthMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testString = undefined;
      this._testStrings = undefined;
      this._stringLengthMessage.internalValue = undefined;
      this._stringLengthMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testString = value.testString;
      this._testStrings = value.testStrings;
      this._stringLengthMessage.internalValue = value.stringLengthMessage;
      this._stringLengthMessages.internalValue = value.stringLengthMessages;
    }
  }

  // test_string - computed: true, optional: true, required: false
  private _testString?: string; 
  public get testString() {
    return this.getStringAttribute('test_string');
  }
  public set testString(value: string) {
    this._testString = value;
  }
  public resetTestString() {
    this._testString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringInput() {
    return this._testString;
  }

  // test_strings - computed: false, optional: true, required: false
  private _testStrings?: string[]; 
  public get testStrings() {
    return this.getListAttribute('test_strings');
  }
  public set testStrings(value: string[]) {
    this._testStrings = value;
  }
  public resetTestStrings() {
    this._testStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringsInput() {
    return this._testStrings;
  }

  // string_length_message - computed: false, optional: true, required: false
  private _stringLengthMessage = new WebapputStringLengthTestStringLengthMessagesStringLengthMessageList(this, "string_length_message", true);
  public get stringLengthMessage() {
    return this._stringLengthMessage;
  }
  public putStringLengthMessage(value: WebapputStringLengthTestStringLengthMessagesStringLengthMessage[] | cdktf.IResolvable) {
    this._stringLengthMessage.internalValue = value;
  }
  public resetStringLengthMessage() {
    this._stringLengthMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringLengthMessageInput() {
    return this._stringLengthMessage.internalValue;
  }

  // string_length_messages - computed: false, optional: true, required: false
  private _stringLengthMessages = new WebapputStringLengthTestStringLengthMessagesStringLengthMessagesList(this, "string_length_messages", false);
  public get stringLengthMessages() {
    return this._stringLengthMessages;
  }
  public putStringLengthMessages(value: WebapputStringLengthTestStringLengthMessagesStringLengthMessages[] | cdktf.IResolvable) {
    this._stringLengthMessages.internalValue = value;
  }
  public resetStringLengthMessages() {
    this._stringLengthMessages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringLengthMessagesInput() {
    return this._stringLengthMessages.internalValue;
  }
}

export class WebapputStringLengthTestStringLengthMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputStringLengthTestStringLengthMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputStringLengthTestStringLengthMessagesOutputReference {
    return new WebapputStringLengthTestStringLengthMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputStringLengthTest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_string Webapput#test_string}
  */
  readonly testString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_strings Webapput#test_strings}
  */
  readonly testStrings?: string[];
  /**
  * string_length_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#string_length_message Webapput#string_length_message}
  */
  readonly stringLengthMessage?: WebapputStringLengthTestStringLengthMessage[] | cdktf.IResolvable;
  /**
  * string_length_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#string_length_messages Webapput#string_length_messages}
  */
  readonly stringLengthMessages?: WebapputStringLengthTestStringLengthMessages[] | cdktf.IResolvable;
}

export function webapputStringLengthTestToTerraform(struct?: WebapputStringLengthTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_string: cdktf.stringToTerraform(struct!.testString),
    test_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.testStrings),
    string_length_message: cdktf.listMapper(webapputStringLengthTestStringLengthMessageToTerraform, true)(struct!.stringLengthMessage),
    string_length_messages: cdktf.listMapper(webapputStringLengthTestStringLengthMessagesToTerraform, true)(struct!.stringLengthMessages),
  }
}


export function webapputStringLengthTestToHclTerraform(struct?: WebapputStringLengthTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_string: {
      value: cdktf.stringToHclTerraform(struct!.testString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_strings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.testStrings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_length_message: {
      value: cdktf.listMapperHcl(webapputStringLengthTestStringLengthMessageToHclTerraform, true)(struct!.stringLengthMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputStringLengthTestStringLengthMessageList",
    },
    string_length_messages: {
      value: cdktf.listMapperHcl(webapputStringLengthTestStringLengthMessagesToHclTerraform, true)(struct!.stringLengthMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputStringLengthTestStringLengthMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputStringLengthTestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputStringLengthTest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testString !== undefined) {
      hasAnyValues = true;
      internalValueResult.testString = this._testString;
    }
    if (this._testStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.testStrings = this._testStrings;
    }
    if (this._stringLengthMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringLengthMessage = this._stringLengthMessage?.internalValue;
    }
    if (this._stringLengthMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringLengthMessages = this._stringLengthMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputStringLengthTest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testString = undefined;
      this._testStrings = undefined;
      this._stringLengthMessage.internalValue = undefined;
      this._stringLengthMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testString = value.testString;
      this._testStrings = value.testStrings;
      this._stringLengthMessage.internalValue = value.stringLengthMessage;
      this._stringLengthMessages.internalValue = value.stringLengthMessages;
    }
  }

  // test_string - computed: true, optional: true, required: false
  private _testString?: string; 
  public get testString() {
    return this.getStringAttribute('test_string');
  }
  public set testString(value: string) {
    this._testString = value;
  }
  public resetTestString() {
    this._testString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringInput() {
    return this._testString;
  }

  // test_strings - computed: false, optional: true, required: false
  private _testStrings?: string[]; 
  public get testStrings() {
    return this.getListAttribute('test_strings');
  }
  public set testStrings(value: string[]) {
    this._testStrings = value;
  }
  public resetTestStrings() {
    this._testStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringsInput() {
    return this._testStrings;
  }

  // string_length_message - computed: false, optional: true, required: false
  private _stringLengthMessage = new WebapputStringLengthTestStringLengthMessageList(this, "string_length_message", true);
  public get stringLengthMessage() {
    return this._stringLengthMessage;
  }
  public putStringLengthMessage(value: WebapputStringLengthTestStringLengthMessage[] | cdktf.IResolvable) {
    this._stringLengthMessage.internalValue = value;
  }
  public resetStringLengthMessage() {
    this._stringLengthMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringLengthMessageInput() {
    return this._stringLengthMessage.internalValue;
  }

  // string_length_messages - computed: false, optional: true, required: false
  private _stringLengthMessages = new WebapputStringLengthTestStringLengthMessagesList(this, "string_length_messages", false);
  public get stringLengthMessages() {
    return this._stringLengthMessages;
  }
  public putStringLengthMessages(value: WebapputStringLengthTestStringLengthMessages[] | cdktf.IResolvable) {
    this._stringLengthMessages.internalValue = value;
  }
  public resetStringLengthMessages() {
    this._stringLengthMessages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringLengthMessagesInput() {
    return this._stringLengthMessages.internalValue;
  }
}

export class WebapputStringLengthTestList extends cdktf.ComplexList {
  public internalValue? : WebapputStringLengthTest[] | cdktf.IResolvable

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
  public get(index: number): WebapputStringLengthTestOutputReference {
    return new WebapputStringLengthTestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputStringLengthTestsStringLengthMessageStringLengthMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_string Webapput#test_string}
  */
  readonly testString?: string;
}

export function webapputStringLengthTestsStringLengthMessageStringLengthMessageToTerraform(struct?: WebapputStringLengthTestsStringLengthMessageStringLengthMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_string: cdktf.stringToTerraform(struct!.testString),
  }
}


export function webapputStringLengthTestsStringLengthMessageStringLengthMessageToHclTerraform(struct?: WebapputStringLengthTestsStringLengthMessageStringLengthMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_string: {
      value: cdktf.stringToHclTerraform(struct!.testString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputStringLengthTestsStringLengthMessageStringLengthMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputStringLengthTestsStringLengthMessageStringLengthMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testString !== undefined) {
      hasAnyValues = true;
      internalValueResult.testString = this._testString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputStringLengthTestsStringLengthMessageStringLengthMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testString = value.testString;
    }
  }

  // test_string - computed: true, optional: true, required: false
  private _testString?: string; 
  public get testString() {
    return this.getStringAttribute('test_string');
  }
  public set testString(value: string) {
    this._testString = value;
  }
  public resetTestString() {
    this._testString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringInput() {
    return this._testString;
  }
}

export class WebapputStringLengthTestsStringLengthMessageStringLengthMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputStringLengthTestsStringLengthMessageStringLengthMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputStringLengthTestsStringLengthMessageStringLengthMessageOutputReference {
    return new WebapputStringLengthTestsStringLengthMessageStringLengthMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputStringLengthTestsStringLengthMessageStringLengthMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_string Webapput#test_string}
  */
  readonly testString?: string;
}

export function webapputStringLengthTestsStringLengthMessageStringLengthMessagesToTerraform(struct?: WebapputStringLengthTestsStringLengthMessageStringLengthMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_string: cdktf.stringToTerraform(struct!.testString),
  }
}


export function webapputStringLengthTestsStringLengthMessageStringLengthMessagesToHclTerraform(struct?: WebapputStringLengthTestsStringLengthMessageStringLengthMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_string: {
      value: cdktf.stringToHclTerraform(struct!.testString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputStringLengthTestsStringLengthMessageStringLengthMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputStringLengthTestsStringLengthMessageStringLengthMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testString !== undefined) {
      hasAnyValues = true;
      internalValueResult.testString = this._testString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputStringLengthTestsStringLengthMessageStringLengthMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testString = value.testString;
    }
  }

  // test_string - computed: true, optional: true, required: false
  private _testString?: string; 
  public get testString() {
    return this.getStringAttribute('test_string');
  }
  public set testString(value: string) {
    this._testString = value;
  }
  public resetTestString() {
    this._testString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringInput() {
    return this._testString;
  }
}

export class WebapputStringLengthTestsStringLengthMessageStringLengthMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputStringLengthTestsStringLengthMessageStringLengthMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputStringLengthTestsStringLengthMessageStringLengthMessagesOutputReference {
    return new WebapputStringLengthTestsStringLengthMessageStringLengthMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputStringLengthTestsStringLengthMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_string Webapput#test_string}
  */
  readonly testString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_strings Webapput#test_strings}
  */
  readonly testStrings?: string[];
  /**
  * string_length_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#string_length_message Webapput#string_length_message}
  */
  readonly stringLengthMessage?: WebapputStringLengthTestsStringLengthMessageStringLengthMessage[] | cdktf.IResolvable;
  /**
  * string_length_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#string_length_messages Webapput#string_length_messages}
  */
  readonly stringLengthMessages?: WebapputStringLengthTestsStringLengthMessageStringLengthMessages[] | cdktf.IResolvable;
}

export function webapputStringLengthTestsStringLengthMessageToTerraform(struct?: WebapputStringLengthTestsStringLengthMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_string: cdktf.stringToTerraform(struct!.testString),
    test_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.testStrings),
    string_length_message: cdktf.listMapper(webapputStringLengthTestsStringLengthMessageStringLengthMessageToTerraform, true)(struct!.stringLengthMessage),
    string_length_messages: cdktf.listMapper(webapputStringLengthTestsStringLengthMessageStringLengthMessagesToTerraform, true)(struct!.stringLengthMessages),
  }
}


export function webapputStringLengthTestsStringLengthMessageToHclTerraform(struct?: WebapputStringLengthTestsStringLengthMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_string: {
      value: cdktf.stringToHclTerraform(struct!.testString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_strings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.testStrings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_length_message: {
      value: cdktf.listMapperHcl(webapputStringLengthTestsStringLengthMessageStringLengthMessageToHclTerraform, true)(struct!.stringLengthMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputStringLengthTestsStringLengthMessageStringLengthMessageList",
    },
    string_length_messages: {
      value: cdktf.listMapperHcl(webapputStringLengthTestsStringLengthMessageStringLengthMessagesToHclTerraform, true)(struct!.stringLengthMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputStringLengthTestsStringLengthMessageStringLengthMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputStringLengthTestsStringLengthMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputStringLengthTestsStringLengthMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testString !== undefined) {
      hasAnyValues = true;
      internalValueResult.testString = this._testString;
    }
    if (this._testStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.testStrings = this._testStrings;
    }
    if (this._stringLengthMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringLengthMessage = this._stringLengthMessage?.internalValue;
    }
    if (this._stringLengthMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringLengthMessages = this._stringLengthMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputStringLengthTestsStringLengthMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testString = undefined;
      this._testStrings = undefined;
      this._stringLengthMessage.internalValue = undefined;
      this._stringLengthMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testString = value.testString;
      this._testStrings = value.testStrings;
      this._stringLengthMessage.internalValue = value.stringLengthMessage;
      this._stringLengthMessages.internalValue = value.stringLengthMessages;
    }
  }

  // test_string - computed: true, optional: true, required: false
  private _testString?: string; 
  public get testString() {
    return this.getStringAttribute('test_string');
  }
  public set testString(value: string) {
    this._testString = value;
  }
  public resetTestString() {
    this._testString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringInput() {
    return this._testString;
  }

  // test_strings - computed: false, optional: true, required: false
  private _testStrings?: string[]; 
  public get testStrings() {
    return this.getListAttribute('test_strings');
  }
  public set testStrings(value: string[]) {
    this._testStrings = value;
  }
  public resetTestStrings() {
    this._testStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringsInput() {
    return this._testStrings;
  }

  // string_length_message - computed: false, optional: true, required: false
  private _stringLengthMessage = new WebapputStringLengthTestsStringLengthMessageStringLengthMessageList(this, "string_length_message", true);
  public get stringLengthMessage() {
    return this._stringLengthMessage;
  }
  public putStringLengthMessage(value: WebapputStringLengthTestsStringLengthMessageStringLengthMessage[] | cdktf.IResolvable) {
    this._stringLengthMessage.internalValue = value;
  }
  public resetStringLengthMessage() {
    this._stringLengthMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringLengthMessageInput() {
    return this._stringLengthMessage.internalValue;
  }

  // string_length_messages - computed: false, optional: true, required: false
  private _stringLengthMessages = new WebapputStringLengthTestsStringLengthMessageStringLengthMessagesList(this, "string_length_messages", false);
  public get stringLengthMessages() {
    return this._stringLengthMessages;
  }
  public putStringLengthMessages(value: WebapputStringLengthTestsStringLengthMessageStringLengthMessages[] | cdktf.IResolvable) {
    this._stringLengthMessages.internalValue = value;
  }
  public resetStringLengthMessages() {
    this._stringLengthMessages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringLengthMessagesInput() {
    return this._stringLengthMessages.internalValue;
  }
}

export class WebapputStringLengthTestsStringLengthMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputStringLengthTestsStringLengthMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputStringLengthTestsStringLengthMessageOutputReference {
    return new WebapputStringLengthTestsStringLengthMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputStringLengthTestsStringLengthMessagesStringLengthMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_string Webapput#test_string}
  */
  readonly testString?: string;
}

export function webapputStringLengthTestsStringLengthMessagesStringLengthMessageToTerraform(struct?: WebapputStringLengthTestsStringLengthMessagesStringLengthMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_string: cdktf.stringToTerraform(struct!.testString),
  }
}


export function webapputStringLengthTestsStringLengthMessagesStringLengthMessageToHclTerraform(struct?: WebapputStringLengthTestsStringLengthMessagesStringLengthMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_string: {
      value: cdktf.stringToHclTerraform(struct!.testString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputStringLengthTestsStringLengthMessagesStringLengthMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputStringLengthTestsStringLengthMessagesStringLengthMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testString !== undefined) {
      hasAnyValues = true;
      internalValueResult.testString = this._testString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputStringLengthTestsStringLengthMessagesStringLengthMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testString = value.testString;
    }
  }

  // test_string - computed: true, optional: true, required: false
  private _testString?: string; 
  public get testString() {
    return this.getStringAttribute('test_string');
  }
  public set testString(value: string) {
    this._testString = value;
  }
  public resetTestString() {
    this._testString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringInput() {
    return this._testString;
  }
}

export class WebapputStringLengthTestsStringLengthMessagesStringLengthMessageList extends cdktf.ComplexList {
  public internalValue? : WebapputStringLengthTestsStringLengthMessagesStringLengthMessage[] | cdktf.IResolvable

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
  public get(index: number): WebapputStringLengthTestsStringLengthMessagesStringLengthMessageOutputReference {
    return new WebapputStringLengthTestsStringLengthMessagesStringLengthMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputStringLengthTestsStringLengthMessagesStringLengthMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_string Webapput#test_string}
  */
  readonly testString?: string;
}

export function webapputStringLengthTestsStringLengthMessagesStringLengthMessagesToTerraform(struct?: WebapputStringLengthTestsStringLengthMessagesStringLengthMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_string: cdktf.stringToTerraform(struct!.testString),
  }
}


export function webapputStringLengthTestsStringLengthMessagesStringLengthMessagesToHclTerraform(struct?: WebapputStringLengthTestsStringLengthMessagesStringLengthMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_string: {
      value: cdktf.stringToHclTerraform(struct!.testString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputStringLengthTestsStringLengthMessagesStringLengthMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputStringLengthTestsStringLengthMessagesStringLengthMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testString !== undefined) {
      hasAnyValues = true;
      internalValueResult.testString = this._testString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputStringLengthTestsStringLengthMessagesStringLengthMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testString = value.testString;
    }
  }

  // test_string - computed: true, optional: true, required: false
  private _testString?: string; 
  public get testString() {
    return this.getStringAttribute('test_string');
  }
  public set testString(value: string) {
    this._testString = value;
  }
  public resetTestString() {
    this._testString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringInput() {
    return this._testString;
  }
}

export class WebapputStringLengthTestsStringLengthMessagesStringLengthMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputStringLengthTestsStringLengthMessagesStringLengthMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputStringLengthTestsStringLengthMessagesStringLengthMessagesOutputReference {
    return new WebapputStringLengthTestsStringLengthMessagesStringLengthMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputStringLengthTestsStringLengthMessages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_string Webapput#test_string}
  */
  readonly testString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_strings Webapput#test_strings}
  */
  readonly testStrings?: string[];
  /**
  * string_length_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#string_length_message Webapput#string_length_message}
  */
  readonly stringLengthMessage?: WebapputStringLengthTestsStringLengthMessagesStringLengthMessage[] | cdktf.IResolvable;
  /**
  * string_length_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#string_length_messages Webapput#string_length_messages}
  */
  readonly stringLengthMessages?: WebapputStringLengthTestsStringLengthMessagesStringLengthMessages[] | cdktf.IResolvable;
}

export function webapputStringLengthTestsStringLengthMessagesToTerraform(struct?: WebapputStringLengthTestsStringLengthMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_string: cdktf.stringToTerraform(struct!.testString),
    test_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.testStrings),
    string_length_message: cdktf.listMapper(webapputStringLengthTestsStringLengthMessagesStringLengthMessageToTerraform, true)(struct!.stringLengthMessage),
    string_length_messages: cdktf.listMapper(webapputStringLengthTestsStringLengthMessagesStringLengthMessagesToTerraform, true)(struct!.stringLengthMessages),
  }
}


export function webapputStringLengthTestsStringLengthMessagesToHclTerraform(struct?: WebapputStringLengthTestsStringLengthMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_string: {
      value: cdktf.stringToHclTerraform(struct!.testString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_strings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.testStrings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_length_message: {
      value: cdktf.listMapperHcl(webapputStringLengthTestsStringLengthMessagesStringLengthMessageToHclTerraform, true)(struct!.stringLengthMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputStringLengthTestsStringLengthMessagesStringLengthMessageList",
    },
    string_length_messages: {
      value: cdktf.listMapperHcl(webapputStringLengthTestsStringLengthMessagesStringLengthMessagesToHclTerraform, true)(struct!.stringLengthMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputStringLengthTestsStringLengthMessagesStringLengthMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputStringLengthTestsStringLengthMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputStringLengthTestsStringLengthMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testString !== undefined) {
      hasAnyValues = true;
      internalValueResult.testString = this._testString;
    }
    if (this._testStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.testStrings = this._testStrings;
    }
    if (this._stringLengthMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringLengthMessage = this._stringLengthMessage?.internalValue;
    }
    if (this._stringLengthMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringLengthMessages = this._stringLengthMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputStringLengthTestsStringLengthMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testString = undefined;
      this._testStrings = undefined;
      this._stringLengthMessage.internalValue = undefined;
      this._stringLengthMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testString = value.testString;
      this._testStrings = value.testStrings;
      this._stringLengthMessage.internalValue = value.stringLengthMessage;
      this._stringLengthMessages.internalValue = value.stringLengthMessages;
    }
  }

  // test_string - computed: true, optional: true, required: false
  private _testString?: string; 
  public get testString() {
    return this.getStringAttribute('test_string');
  }
  public set testString(value: string) {
    this._testString = value;
  }
  public resetTestString() {
    this._testString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringInput() {
    return this._testString;
  }

  // test_strings - computed: false, optional: true, required: false
  private _testStrings?: string[]; 
  public get testStrings() {
    return this.getListAttribute('test_strings');
  }
  public set testStrings(value: string[]) {
    this._testStrings = value;
  }
  public resetTestStrings() {
    this._testStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringsInput() {
    return this._testStrings;
  }

  // string_length_message - computed: false, optional: true, required: false
  private _stringLengthMessage = new WebapputStringLengthTestsStringLengthMessagesStringLengthMessageList(this, "string_length_message", true);
  public get stringLengthMessage() {
    return this._stringLengthMessage;
  }
  public putStringLengthMessage(value: WebapputStringLengthTestsStringLengthMessagesStringLengthMessage[] | cdktf.IResolvable) {
    this._stringLengthMessage.internalValue = value;
  }
  public resetStringLengthMessage() {
    this._stringLengthMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringLengthMessageInput() {
    return this._stringLengthMessage.internalValue;
  }

  // string_length_messages - computed: false, optional: true, required: false
  private _stringLengthMessages = new WebapputStringLengthTestsStringLengthMessagesStringLengthMessagesList(this, "string_length_messages", false);
  public get stringLengthMessages() {
    return this._stringLengthMessages;
  }
  public putStringLengthMessages(value: WebapputStringLengthTestsStringLengthMessagesStringLengthMessages[] | cdktf.IResolvable) {
    this._stringLengthMessages.internalValue = value;
  }
  public resetStringLengthMessages() {
    this._stringLengthMessages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringLengthMessagesInput() {
    return this._stringLengthMessages.internalValue;
  }
}

export class WebapputStringLengthTestsStringLengthMessagesList extends cdktf.ComplexList {
  public internalValue? : WebapputStringLengthTestsStringLengthMessages[] | cdktf.IResolvable

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
  public get(index: number): WebapputStringLengthTestsStringLengthMessagesOutputReference {
    return new WebapputStringLengthTestsStringLengthMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebapputStringLengthTests {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_string Webapput#test_string}
  */
  readonly testString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#test_strings Webapput#test_strings}
  */
  readonly testStrings?: string[];
  /**
  * string_length_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#string_length_message Webapput#string_length_message}
  */
  readonly stringLengthMessage?: WebapputStringLengthTestsStringLengthMessage[] | cdktf.IResolvable;
  /**
  * string_length_messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#string_length_messages Webapput#string_length_messages}
  */
  readonly stringLengthMessages?: WebapputStringLengthTestsStringLengthMessages[] | cdktf.IResolvable;
}

export function webapputStringLengthTestsToTerraform(struct?: WebapputStringLengthTests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_string: cdktf.stringToTerraform(struct!.testString),
    test_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.testStrings),
    string_length_message: cdktf.listMapper(webapputStringLengthTestsStringLengthMessageToTerraform, true)(struct!.stringLengthMessage),
    string_length_messages: cdktf.listMapper(webapputStringLengthTestsStringLengthMessagesToTerraform, true)(struct!.stringLengthMessages),
  }
}


export function webapputStringLengthTestsToHclTerraform(struct?: WebapputStringLengthTests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_string: {
      value: cdktf.stringToHclTerraform(struct!.testString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_strings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.testStrings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_length_message: {
      value: cdktf.listMapperHcl(webapputStringLengthTestsStringLengthMessageToHclTerraform, true)(struct!.stringLengthMessage),
      isBlock: true,
      type: "set",
      storageClassType: "WebapputStringLengthTestsStringLengthMessageList",
    },
    string_length_messages: {
      value: cdktf.listMapperHcl(webapputStringLengthTestsStringLengthMessagesToHclTerraform, true)(struct!.stringLengthMessages),
      isBlock: true,
      type: "list",
      storageClassType: "WebapputStringLengthTestsStringLengthMessagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebapputStringLengthTestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebapputStringLengthTests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testString !== undefined) {
      hasAnyValues = true;
      internalValueResult.testString = this._testString;
    }
    if (this._testStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.testStrings = this._testStrings;
    }
    if (this._stringLengthMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringLengthMessage = this._stringLengthMessage?.internalValue;
    }
    if (this._stringLengthMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringLengthMessages = this._stringLengthMessages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebapputStringLengthTests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testString = undefined;
      this._testStrings = undefined;
      this._stringLengthMessage.internalValue = undefined;
      this._stringLengthMessages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testString = value.testString;
      this._testStrings = value.testStrings;
      this._stringLengthMessage.internalValue = value.stringLengthMessage;
      this._stringLengthMessages.internalValue = value.stringLengthMessages;
    }
  }

  // test_string - computed: true, optional: true, required: false
  private _testString?: string; 
  public get testString() {
    return this.getStringAttribute('test_string');
  }
  public set testString(value: string) {
    this._testString = value;
  }
  public resetTestString() {
    this._testString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringInput() {
    return this._testString;
  }

  // test_strings - computed: false, optional: true, required: false
  private _testStrings?: string[]; 
  public get testStrings() {
    return this.getListAttribute('test_strings');
  }
  public set testStrings(value: string[]) {
    this._testStrings = value;
  }
  public resetTestStrings() {
    this._testStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringsInput() {
    return this._testStrings;
  }

  // string_length_message - computed: false, optional: true, required: false
  private _stringLengthMessage = new WebapputStringLengthTestsStringLengthMessageList(this, "string_length_message", true);
  public get stringLengthMessage() {
    return this._stringLengthMessage;
  }
  public putStringLengthMessage(value: WebapputStringLengthTestsStringLengthMessage[] | cdktf.IResolvable) {
    this._stringLengthMessage.internalValue = value;
  }
  public resetStringLengthMessage() {
    this._stringLengthMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringLengthMessageInput() {
    return this._stringLengthMessage.internalValue;
  }

  // string_length_messages - computed: false, optional: true, required: false
  private _stringLengthMessages = new WebapputStringLengthTestsStringLengthMessagesList(this, "string_length_messages", false);
  public get stringLengthMessages() {
    return this._stringLengthMessages;
  }
  public putStringLengthMessages(value: WebapputStringLengthTestsStringLengthMessages[] | cdktf.IResolvable) {
    this._stringLengthMessages.internalValue = value;
  }
  public resetStringLengthMessages() {
    this._stringLengthMessages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringLengthMessagesInput() {
    return this._stringLengthMessages.internalValue;
  }
}

export class WebapputStringLengthTestsList extends cdktf.ComplexList {
  public internalValue? : WebapputStringLengthTests[] | cdktf.IResolvable

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
  public get(index: number): WebapputStringLengthTestsOutputReference {
    return new WebapputStringLengthTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput avi_webapput}
*/
export class Webapput extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_webapput";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Webapput resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Webapput to import
  * @param importFromId The id of the existing Webapput that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Webapput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_webapput", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/webapput avi_webapput} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebapputConfig
  */
  public constructor(scope: Construct, id: string, config: WebapputConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_webapput',
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
    this._cloudRef = config.cloudRef;
    this._defaultFifthInt = config.defaultFifthInt;
    this._defaultFirstInt = config.defaultFirstInt;
    this._defaultFourthInt = config.defaultFourthInt;
    this._defaultString = config.defaultString;
    this._id = config.id;
    this._name = config.name;
    this._skipOptionalCheckTests = config.skipOptionalCheckTests;
    this._tenantRef = config.tenantRef;
    this._testSensitiveString = config.testSensitiveString;
    this._testString = config.testString;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._mandatoryTest.internalValue = config.mandatoryTest;
    this._mandatoryTests.internalValue = config.mandatoryTests;
    this._sensitiveTest.internalValue = config.sensitiveTest;
    this._sensitiveTests.internalValue = config.sensitiveTests;
    this._stringLengthTest.internalValue = config.stringLengthTest;
    this._stringLengthTests.internalValue = config.stringLengthTests;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_ref - computed: true, optional: true, required: false
  private _cloudRef?: string; 
  public get cloudRef() {
    return this.getStringAttribute('cloud_ref');
  }
  public set cloudRef(value: string) {
    this._cloudRef = value;
  }
  public resetCloudRef() {
    this._cloudRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRefInput() {
    return this._cloudRef;
  }

  // default_fifth_int - computed: false, optional: true, required: false
  private _defaultFifthInt?: string; 
  public get defaultFifthInt() {
    return this.getStringAttribute('default_fifth_int');
  }
  public set defaultFifthInt(value: string) {
    this._defaultFifthInt = value;
  }
  public resetDefaultFifthInt() {
    this._defaultFifthInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFifthIntInput() {
    return this._defaultFifthInt;
  }

  // default_first_int - computed: false, optional: true, required: false
  private _defaultFirstInt?: string; 
  public get defaultFirstInt() {
    return this.getStringAttribute('default_first_int');
  }
  public set defaultFirstInt(value: string) {
    this._defaultFirstInt = value;
  }
  public resetDefaultFirstInt() {
    this._defaultFirstInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFirstIntInput() {
    return this._defaultFirstInt;
  }

  // default_fourth_int - computed: false, optional: true, required: false
  private _defaultFourthInt?: string; 
  public get defaultFourthInt() {
    return this.getStringAttribute('default_fourth_int');
  }
  public set defaultFourthInt(value: string) {
    this._defaultFourthInt = value;
  }
  public resetDefaultFourthInt() {
    this._defaultFourthInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFourthIntInput() {
    return this._defaultFourthInt;
  }

  // default_string - computed: false, optional: true, required: false
  private _defaultString?: string; 
  public get defaultString() {
    return this.getStringAttribute('default_string');
  }
  public set defaultString(value: string) {
    this._defaultString = value;
  }
  public resetDefaultString() {
    this._defaultString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStringInput() {
    return this._defaultString;
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

  // skip_optional_check_tests - computed: true, optional: true, required: false
  private _skipOptionalCheckTests?: string; 
  public get skipOptionalCheckTests() {
    return this.getStringAttribute('skip_optional_check_tests');
  }
  public set skipOptionalCheckTests(value: string) {
    this._skipOptionalCheckTests = value;
  }
  public resetSkipOptionalCheckTests() {
    this._skipOptionalCheckTests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipOptionalCheckTestsInput() {
    return this._skipOptionalCheckTests;
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

  // test_sensitive_string - computed: true, optional: true, required: false
  private _testSensitiveString?: string; 
  public get testSensitiveString() {
    return this.getStringAttribute('test_sensitive_string');
  }
  public set testSensitiveString(value: string) {
    this._testSensitiveString = value;
  }
  public resetTestSensitiveString() {
    this._testSensitiveString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testSensitiveStringInput() {
    return this._testSensitiveString;
  }

  // test_string - computed: true, optional: true, required: false
  private _testString?: string; 
  public get testString() {
    return this.getStringAttribute('test_string');
  }
  public set testString(value: string) {
    this._testString = value;
  }
  public resetTestString() {
    this._testString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testStringInput() {
    return this._testString;
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

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new WebapputConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: WebapputConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // mandatory_test - computed: false, optional: true, required: false
  private _mandatoryTest = new WebapputMandatoryTestList(this, "mandatory_test", true);
  public get mandatoryTest() {
    return this._mandatoryTest;
  }
  public putMandatoryTest(value: WebapputMandatoryTest[] | cdktf.IResolvable) {
    this._mandatoryTest.internalValue = value;
  }
  public resetMandatoryTest() {
    this._mandatoryTest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryTestInput() {
    return this._mandatoryTest.internalValue;
  }

  // mandatory_tests - computed: false, optional: true, required: false
  private _mandatoryTests = new WebapputMandatoryTestsList(this, "mandatory_tests", false);
  public get mandatoryTests() {
    return this._mandatoryTests;
  }
  public putMandatoryTests(value: WebapputMandatoryTests[] | cdktf.IResolvable) {
    this._mandatoryTests.internalValue = value;
  }
  public resetMandatoryTests() {
    this._mandatoryTests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryTestsInput() {
    return this._mandatoryTests.internalValue;
  }

  // sensitive_test - computed: false, optional: true, required: false
  private _sensitiveTest = new WebapputSensitiveTestList(this, "sensitive_test", true);
  public get sensitiveTest() {
    return this._sensitiveTest;
  }
  public putSensitiveTest(value: WebapputSensitiveTest[] | cdktf.IResolvable) {
    this._sensitiveTest.internalValue = value;
  }
  public resetSensitiveTest() {
    this._sensitiveTest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveTestInput() {
    return this._sensitiveTest.internalValue;
  }

  // sensitive_tests - computed: false, optional: true, required: false
  private _sensitiveTests = new WebapputSensitiveTestsList(this, "sensitive_tests", false);
  public get sensitiveTests() {
    return this._sensitiveTests;
  }
  public putSensitiveTests(value: WebapputSensitiveTests[] | cdktf.IResolvable) {
    this._sensitiveTests.internalValue = value;
  }
  public resetSensitiveTests() {
    this._sensitiveTests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveTestsInput() {
    return this._sensitiveTests.internalValue;
  }

  // string_length_test - computed: false, optional: true, required: false
  private _stringLengthTest = new WebapputStringLengthTestList(this, "string_length_test", true);
  public get stringLengthTest() {
    return this._stringLengthTest;
  }
  public putStringLengthTest(value: WebapputStringLengthTest[] | cdktf.IResolvable) {
    this._stringLengthTest.internalValue = value;
  }
  public resetStringLengthTest() {
    this._stringLengthTest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringLengthTestInput() {
    return this._stringLengthTest.internalValue;
  }

  // string_length_tests - computed: false, optional: true, required: false
  private _stringLengthTests = new WebapputStringLengthTestsList(this, "string_length_tests", false);
  public get stringLengthTests() {
    return this._stringLengthTests;
  }
  public putStringLengthTests(value: WebapputStringLengthTests[] | cdktf.IResolvable) {
    this._stringLengthTests.internalValue = value;
  }
  public resetStringLengthTests() {
    this._stringLengthTests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringLengthTestsInput() {
    return this._stringLengthTests.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_ref: cdktf.stringToTerraform(this._cloudRef),
      default_fifth_int: cdktf.stringToTerraform(this._defaultFifthInt),
      default_first_int: cdktf.stringToTerraform(this._defaultFirstInt),
      default_fourth_int: cdktf.stringToTerraform(this._defaultFourthInt),
      default_string: cdktf.stringToTerraform(this._defaultString),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      skip_optional_check_tests: cdktf.stringToTerraform(this._skipOptionalCheckTests),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      test_sensitive_string: cdktf.stringToTerraform(this._testSensitiveString),
      test_string: cdktf.stringToTerraform(this._testString),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(webapputConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      mandatory_test: cdktf.listMapper(webapputMandatoryTestToTerraform, true)(this._mandatoryTest.internalValue),
      mandatory_tests: cdktf.listMapper(webapputMandatoryTestsToTerraform, true)(this._mandatoryTests.internalValue),
      sensitive_test: cdktf.listMapper(webapputSensitiveTestToTerraform, true)(this._sensitiveTest.internalValue),
      sensitive_tests: cdktf.listMapper(webapputSensitiveTestsToTerraform, true)(this._sensitiveTests.internalValue),
      string_length_test: cdktf.listMapper(webapputStringLengthTestToTerraform, true)(this._stringLengthTest.internalValue),
      string_length_tests: cdktf.listMapper(webapputStringLengthTestsToTerraform, true)(this._stringLengthTests.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_ref: {
        value: cdktf.stringToHclTerraform(this._cloudRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_fifth_int: {
        value: cdktf.stringToHclTerraform(this._defaultFifthInt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_first_int: {
        value: cdktf.stringToHclTerraform(this._defaultFirstInt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_fourth_int: {
        value: cdktf.stringToHclTerraform(this._defaultFourthInt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_string: {
        value: cdktf.stringToHclTerraform(this._defaultString),
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
      skip_optional_check_tests: {
        value: cdktf.stringToHclTerraform(this._skipOptionalCheckTests),
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
      test_sensitive_string: {
        value: cdktf.stringToHclTerraform(this._testSensitiveString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_string: {
        value: cdktf.stringToHclTerraform(this._testString),
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
      configpb_attributes: {
        value: cdktf.listMapperHcl(webapputConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebapputConfigpbAttributesList",
      },
      mandatory_test: {
        value: cdktf.listMapperHcl(webapputMandatoryTestToHclTerraform, true)(this._mandatoryTest.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebapputMandatoryTestList",
      },
      mandatory_tests: {
        value: cdktf.listMapperHcl(webapputMandatoryTestsToHclTerraform, true)(this._mandatoryTests.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebapputMandatoryTestsList",
      },
      sensitive_test: {
        value: cdktf.listMapperHcl(webapputSensitiveTestToHclTerraform, true)(this._sensitiveTest.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebapputSensitiveTestList",
      },
      sensitive_tests: {
        value: cdktf.listMapperHcl(webapputSensitiveTestsToHclTerraform, true)(this._sensitiveTests.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebapputSensitiveTestsList",
      },
      string_length_test: {
        value: cdktf.listMapperHcl(webapputStringLengthTestToHclTerraform, true)(this._stringLengthTest.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebapputStringLengthTestList",
      },
      string_length_tests: {
        value: cdktf.listMapperHcl(webapputStringLengthTestsToHclTerraform, true)(this._stringLengthTests.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebapputStringLengthTestsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
