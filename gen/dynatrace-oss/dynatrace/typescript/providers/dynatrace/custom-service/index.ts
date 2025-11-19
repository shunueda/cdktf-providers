// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom service enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#enabled CustomService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#id CustomService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the custom service, displayed in the UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#name CustomService#name}
  */
  readonly name: string;
  /**
  * The list of process groups the custom service should belong to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#process_groups CustomService#process_groups}
  */
  readonly processGroups?: string[];
  /**
  * The queue entry point flag. Set to `true` for custom messaging services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#queue_entry_point CustomService#queue_entry_point}
  */
  readonly queueEntryPoint?: boolean | cdktf.IResolvable;
  /**
  * The queue entry point type (IBM_MQ, JMS, KAFKA, MSMQ or RABBIT_MQ)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#queue_entry_point_type CustomService#queue_entry_point_type}
  */
  readonly queueEntryPointType?: string;
  /**
  * Matcher applying to the file name (ENDS_WITH, EQUALS or STARTS_WITH). Default value is ENDS_WITH (if applicable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#technology CustomService#technology}
  */
  readonly technology: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#unknowns CustomService#unknowns}
  */
  readonly unknowns?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#rule CustomService#rule}
  */
  readonly rule?: CustomServiceRule[] | cdktf.IResolvable;
}
export interface CustomServiceRuleClass {
  /**
  * Matcher applying to the class name (ENDS_WITH, EQUALS or STARTS_WITH). STARTS_WITH can only be used if there is at least one annotation defined. Default value is EQUALS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#match CustomService#match}
  */
  readonly match?: string;
  /**
  * The full name of the class / the name to match the class name with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#name CustomService#name}
  */
  readonly name: string;
}

export function customServiceRuleClassToTerraform(struct?: CustomServiceRuleClassOutputReference | CustomServiceRuleClass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function customServiceRuleClassToHclTerraform(struct?: CustomServiceRuleClassOutputReference | CustomServiceRuleClass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomServiceRuleClassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomServiceRuleClass | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomServiceRuleClass | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._match = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._match = value.match;
      this._name = value.name;
    }
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
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
}
export interface CustomServiceRuleFile {
  /**
  * Matcher applying to the file name (ENDS_WITH, EQUALS or STARTS_WITH). Default value is ENDS_WITH (if applicable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#match CustomService#match}
  */
  readonly match?: string;
  /**
  * The full name of the file / the name to match the file name with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#name CustomService#name}
  */
  readonly name: string;
}

export function customServiceRuleFileToTerraform(struct?: CustomServiceRuleFileOutputReference | CustomServiceRuleFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function customServiceRuleFileToHclTerraform(struct?: CustomServiceRuleFileOutputReference | CustomServiceRuleFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomServiceRuleFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomServiceRuleFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomServiceRuleFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._match = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._match = value.match;
      this._name = value.name;
    }
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
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
}
export interface CustomServiceRuleMethod {
  /**
  * Fully qualified types of argument the method expects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#arguments CustomService#arguments}
  */
  readonly arguments?: string[];
  /**
  * The modifiers of the method rule. Possible values are `ABSTRACT`, `EXTERN`, `FINAL`, `NATIVE` and `STATIC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#modifiers CustomService#modifiers}
  */
  readonly modifiers?: string[];
  /**
  * The method to instrument
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#name CustomService#name}
  */
  readonly name: string;
  /**
  * Fully qualified type the method returns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#returns CustomService#returns}
  */
  readonly returns?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#unknowns CustomService#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The visibility of the method rule. Possible values are `INTERNAL`, `PACKAGE_PROTECTED`, `PRIVATE`, `PROTECTED` and `PUBLIC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#visibility CustomService#visibility}
  */
  readonly visibility?: string;
}

export function customServiceRuleMethodToTerraform(struct?: CustomServiceRuleMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.arguments),
    modifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.modifiers),
    name: cdktf.stringToTerraform(struct!.name),
    returns: cdktf.stringToTerraform(struct!.returns),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}


export function customServiceRuleMethodToHclTerraform(struct?: CustomServiceRuleMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.arguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    modifiers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.modifiers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    returns: {
      value: cdktf.stringToHclTerraform(struct!.returns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visibility: {
      value: cdktf.stringToHclTerraform(struct!.visibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomServiceRuleMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomServiceRuleMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._modifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifiers = this._modifiers;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._returns !== undefined) {
      hasAnyValues = true;
      internalValueResult.returns = this._returns;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomServiceRuleMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arguments = undefined;
      this._modifiers = undefined;
      this._name = undefined;
      this._returns = undefined;
      this._unknowns = undefined;
      this._visibility = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arguments = value.arguments;
      this._modifiers = value.modifiers;
      this._name = value.name;
      this._returns = value.returns;
      this._unknowns = value.unknowns;
      this._visibility = value.visibility;
    }
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: string[]; 
  public get arguments() {
    return this.getListAttribute('arguments');
  }
  public set arguments(value: string[]) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modifiers - computed: false, optional: true, required: false
  private _modifiers?: string[]; 
  public get modifiers() {
    return this.getListAttribute('modifiers');
  }
  public set modifiers(value: string[]) {
    this._modifiers = value;
  }
  public resetModifiers() {
    this._modifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiersInput() {
    return this._modifiers;
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

  // returns - computed: false, optional: true, required: false
  private _returns?: string; 
  public get returns() {
    return this.getStringAttribute('returns');
  }
  public set returns(value: string) {
    this._returns = value;
  }
  public resetReturns() {
    this._returns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnsInput() {
    return this._returns;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}

export class CustomServiceRuleMethodList extends cdktf.ComplexList {
  public internalValue? : CustomServiceRuleMethod[] | cdktf.IResolvable

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
  public get(index: number): CustomServiceRuleMethodOutputReference {
    return new CustomServiceRuleMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomServiceRule {
  /**
  * Additional annotations filter of the rule. Only classes where all listed annotations are available in the class itself or any of its superclasses are instrumented. Not applicable to PHP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#annotations CustomService#annotations}
  */
  readonly annotations?: string[];
  /**
  * Rule enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#enabled CustomService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#unknowns CustomService#unknowns}
  */
  readonly unknowns?: string;
  /**
  * class block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#class CustomService#class}
  */
  readonly class?: CustomServiceRuleClass;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#file CustomService#file}
  */
  readonly file?: CustomServiceRuleFile;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#method CustomService#method}
  */
  readonly method: CustomServiceRuleMethod[] | cdktf.IResolvable;
}

export function customServiceRuleToTerraform(struct?: CustomServiceRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.annotations),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    class: customServiceRuleClassToTerraform(struct!.class),
    file: customServiceRuleFileToTerraform(struct!.file),
    method: cdktf.listMapper(customServiceRuleMethodToTerraform, true)(struct!.method),
  }
}


export function customServiceRuleToHclTerraform(struct?: CustomServiceRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.annotations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class: {
      value: customServiceRuleClassToHclTerraform(struct!.class),
      isBlock: true,
      type: "list",
      storageClassType: "CustomServiceRuleClassList",
    },
    file: {
      value: customServiceRuleFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "CustomServiceRuleFileList",
    },
    method: {
      value: cdktf.listMapperHcl(customServiceRuleMethodToHclTerraform, true)(struct!.method),
      isBlock: true,
      type: "list",
      storageClassType: "CustomServiceRuleMethodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomServiceRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomServiceRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._class?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomServiceRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._enabled = undefined;
      this._unknowns = undefined;
      this._class.internalValue = undefined;
      this._file.internalValue = undefined;
      this._method.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._enabled = value.enabled;
      this._unknowns = value.unknowns;
      this._class.internalValue = value.class;
      this._file.internalValue = value.file;
      this._method.internalValue = value.method;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string[]; 
  public get annotations() {
    return cdktf.Fn.tolist(this.getListAttribute('annotations'));
  }
  public set annotations(value: string[]) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // class - computed: false, optional: true, required: false
  private _class = new CustomServiceRuleClassOutputReference(this, "class");
  public get class() {
    return this._class;
  }
  public putClass(value: CustomServiceRuleClass) {
    this._class.internalValue = value;
  }
  public resetClass() {
    this._class.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new CustomServiceRuleFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: CustomServiceRuleFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // method - computed: false, optional: false, required: true
  private _method = new CustomServiceRuleMethodList(this, "method", false);
  public get method() {
    return this._method;
  }
  public putMethod(value: CustomServiceRuleMethod[] | cdktf.IResolvable) {
    this._method.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }
}

export class CustomServiceRuleList extends cdktf.ComplexList {
  public internalValue? : CustomServiceRule[] | cdktf.IResolvable

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
  public get(index: number): CustomServiceRuleOutputReference {
    return new CustomServiceRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service dynatrace_custom_service}
*/
export class CustomService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_custom_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomService to import
  * @param importFromId The id of the existing CustomService that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_custom_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/custom_service dynatrace_custom_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomServiceConfig
  */
  public constructor(scope: Construct, id: string, config: CustomServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_custom_service',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._processGroups = config.processGroups;
    this._queueEntryPoint = config.queueEntryPoint;
    this._queueEntryPointType = config.queueEntryPointType;
    this._technology = config.technology;
    this._unknowns = config.unknowns;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // process_groups - computed: false, optional: true, required: false
  private _processGroups?: string[]; 
  public get processGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('process_groups'));
  }
  public set processGroups(value: string[]) {
    this._processGroups = value;
  }
  public resetProcessGroups() {
    this._processGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processGroupsInput() {
    return this._processGroups;
  }

  // queue_entry_point - computed: false, optional: true, required: false
  private _queueEntryPoint?: boolean | cdktf.IResolvable; 
  public get queueEntryPoint() {
    return this.getBooleanAttribute('queue_entry_point');
  }
  public set queueEntryPoint(value: boolean | cdktf.IResolvable) {
    this._queueEntryPoint = value;
  }
  public resetQueueEntryPoint() {
    this._queueEntryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueEntryPointInput() {
    return this._queueEntryPoint;
  }

  // queue_entry_point_type - computed: false, optional: true, required: false
  private _queueEntryPointType?: string; 
  public get queueEntryPointType() {
    return this.getStringAttribute('queue_entry_point_type');
  }
  public set queueEntryPointType(value: string) {
    this._queueEntryPointType = value;
  }
  public resetQueueEntryPointType() {
    this._queueEntryPointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueEntryPointTypeInput() {
    return this._queueEntryPointType;
  }

  // technology - computed: false, optional: false, required: true
  private _technology?: string; 
  public get technology() {
    return this.getStringAttribute('technology');
  }
  public set technology(value: string) {
    this._technology = value;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyInput() {
    return this._technology;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new CustomServiceRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: CustomServiceRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      process_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._processGroups),
      queue_entry_point: cdktf.booleanToTerraform(this._queueEntryPoint),
      queue_entry_point_type: cdktf.stringToTerraform(this._queueEntryPointType),
      technology: cdktf.stringToTerraform(this._technology),
      unknowns: cdktf.stringToTerraform(this._unknowns),
      rule: cdktf.listMapper(customServiceRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      process_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._processGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      queue_entry_point: {
        value: cdktf.booleanToHclTerraform(this._queueEntryPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      queue_entry_point_type: {
        value: cdktf.stringToHclTerraform(this._queueEntryPointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      technology: {
        value: cdktf.stringToHclTerraform(this._technology),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknowns: {
        value: cdktf.stringToHclTerraform(this._unknowns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(customServiceRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomServiceRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
