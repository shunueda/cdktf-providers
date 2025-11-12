// https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CallFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#id CallFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#language CallFlow#language}
  */
  readonly language: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#name CallFlow#name}
  */
  readonly name: string;
  /**
  * root_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#root_node CallFlow#root_node}
  */
  readonly rootNode: CallFlowRootNode;
  /**
  * team block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#team CallFlow#team}
  */
  readonly team?: CallFlowTeam[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#timeouts CallFlow#timeouts}
  */
  readonly timeouts?: CallFlowTimeouts;
}
export interface CallFlowAssignedNumberPhoneNumber {
}

export function callFlowAssignedNumberPhoneNumberToTerraform(struct?: CallFlowAssignedNumberPhoneNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function callFlowAssignedNumberPhoneNumberToHclTerraform(struct?: CallFlowAssignedNumberPhoneNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CallFlowAssignedNumberPhoneNumberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CallFlowAssignedNumberPhoneNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowAssignedNumberPhoneNumber | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getStringAttribute('number');
  }

  // region_code - computed: true, optional: false, required: false
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }
}

export class CallFlowAssignedNumberPhoneNumberList extends cdktf.ComplexList {

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
  public get(index: number): CallFlowAssignedNumberPhoneNumberOutputReference {
    return new CallFlowAssignedNumberPhoneNumberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CallFlowAssignedNumber {
}

export function callFlowAssignedNumberToTerraform(struct?: CallFlowAssignedNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function callFlowAssignedNumberToHclTerraform(struct?: CallFlowAssignedNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CallFlowAssignedNumberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CallFlowAssignedNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowAssignedNumber | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // phone_number - computed: true, optional: false, required: false
  private _phoneNumber = new CallFlowAssignedNumberPhoneNumberList(this, "phone_number", false);
  public get phoneNumber() {
    return this._phoneNumber;
  }
}

export class CallFlowAssignedNumberList extends cdktf.ComplexList {

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
  public get(index: number): CallFlowAssignedNumberOutputReference {
    return new CallFlowAssignedNumberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CallFlowRootNodeBranchesTargetMetadataCodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#code CallFlow#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#label CallFlow#label}
  */
  readonly label: string;
}

export function callFlowRootNodeBranchesTargetMetadataCodesToTerraform(struct?: CallFlowRootNodeBranchesTargetMetadataCodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    label: cdktf.stringToTerraform(struct!.label),
  }
}


export function callFlowRootNodeBranchesTargetMetadataCodesToHclTerraform(struct?: CallFlowRootNodeBranchesTargetMetadataCodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CallFlowRootNodeBranchesTargetMetadataCodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CallFlowRootNodeBranchesTargetMetadataCodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowRootNodeBranchesTargetMetadataCodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._label = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._label = value.label;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}

export class CallFlowRootNodeBranchesTargetMetadataCodesList extends cdktf.ComplexList {
  public internalValue? : CallFlowRootNodeBranchesTargetMetadataCodes[] | cdktf.IResolvable

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
  public get(index: number): CallFlowRootNodeBranchesTargetMetadataCodesOutputReference {
    return new CallFlowRootNodeBranchesTargetMetadataCodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CallFlowRootNodeBranchesTargetMetadataEnrichmentSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#id CallFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#type CallFlow#type}
  */
  readonly type: string;
}

export function callFlowRootNodeBranchesTargetMetadataEnrichmentSourcesToTerraform(struct?: CallFlowRootNodeBranchesTargetMetadataEnrichmentSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function callFlowRootNodeBranchesTargetMetadataEnrichmentSourcesToHclTerraform(struct?: CallFlowRootNodeBranchesTargetMetadataEnrichmentSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class CallFlowRootNodeBranchesTargetMetadataEnrichmentSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CallFlowRootNodeBranchesTargetMetadataEnrichmentSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowRootNodeBranchesTargetMetadataEnrichmentSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class CallFlowRootNodeBranchesTargetMetadataEnrichmentSourcesList extends cdktf.ComplexList {
  public internalValue? : CallFlowRootNodeBranchesTargetMetadataEnrichmentSources[] | cdktf.IResolvable

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
  public get(index: number): CallFlowRootNodeBranchesTargetMetadataEnrichmentSourcesOutputReference {
    return new CallFlowRootNodeBranchesTargetMetadataEnrichmentSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CallFlowRootNodeBranchesTargetMetadataEnrichment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#enabled CallFlow#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#information_types CallFlow#information_types}
  */
  readonly informationTypes?: { [key: string]: string };
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#sources CallFlow#sources}
  */
  readonly sources?: CallFlowRootNodeBranchesTargetMetadataEnrichmentSources[] | cdktf.IResolvable;
}

export function callFlowRootNodeBranchesTargetMetadataEnrichmentToTerraform(struct?: CallFlowRootNodeBranchesTargetMetadataEnrichmentOutputReference | CallFlowRootNodeBranchesTargetMetadataEnrichment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    information_types: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.informationTypes),
    sources: cdktf.listMapper(callFlowRootNodeBranchesTargetMetadataEnrichmentSourcesToTerraform, true)(struct!.sources),
  }
}


export function callFlowRootNodeBranchesTargetMetadataEnrichmentToHclTerraform(struct?: CallFlowRootNodeBranchesTargetMetadataEnrichmentOutputReference | CallFlowRootNodeBranchesTargetMetadataEnrichment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    information_types: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.informationTypes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sources: {
      value: cdktf.listMapperHcl(callFlowRootNodeBranchesTargetMetadataEnrichmentSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "CallFlowRootNodeBranchesTargetMetadataEnrichmentSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CallFlowRootNodeBranchesTargetMetadataEnrichmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CallFlowRootNodeBranchesTargetMetadataEnrichment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._informationTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.informationTypes = this._informationTypes;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowRootNodeBranchesTargetMetadataEnrichment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._informationTypes = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._informationTypes = value.informationTypes;
      this._sources.internalValue = value.sources;
    }
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

  // information_types - computed: false, optional: true, required: false
  private _informationTypes?: { [key: string]: string }; 
  public get informationTypes() {
    return this.getStringMapAttribute('information_types');
  }
  public set informationTypes(value: { [key: string]: string }) {
    this._informationTypes = value;
  }
  public resetInformationTypes() {
    this._informationTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get informationTypesInput() {
    return this._informationTypes;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new CallFlowRootNodeBranchesTargetMetadataEnrichmentSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: CallFlowRootNodeBranchesTargetMetadataEnrichmentSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface CallFlowRootNodeBranchesTargetMetadataGathers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#label CallFlow#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#question CallFlow#question}
  */
  readonly question?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#required CallFlow#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#type CallFlow#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#var_type CallFlow#var_type}
  */
  readonly varType?: string;
}

export function callFlowRootNodeBranchesTargetMetadataGathersToTerraform(struct?: CallFlowRootNodeBranchesTargetMetadataGathers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    question: cdktf.stringToTerraform(struct!.question),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    var_type: cdktf.stringToTerraform(struct!.varType),
  }
}


export function callFlowRootNodeBranchesTargetMetadataGathersToHclTerraform(struct?: CallFlowRootNodeBranchesTargetMetadataGathers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    question: {
      value: cdktf.stringToHclTerraform(struct!.question),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    var_type: {
      value: cdktf.stringToHclTerraform(struct!.varType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CallFlowRootNodeBranchesTargetMetadataGathersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CallFlowRootNodeBranchesTargetMetadataGathers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._question !== undefined) {
      hasAnyValues = true;
      internalValueResult.question = this._question;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._varType !== undefined) {
      hasAnyValues = true;
      internalValueResult.varType = this._varType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowRootNodeBranchesTargetMetadataGathers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._question = undefined;
      this._required = undefined;
      this._type = undefined;
      this._varType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._question = value.question;
      this._required = value.required;
      this._type = value.type;
      this._varType = value.varType;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // question - computed: false, optional: true, required: false
  private _question?: string; 
  public get question() {
    return this.getStringAttribute('question');
  }
  public set question(value: string) {
    this._question = value;
  }
  public resetQuestion() {
    this._question = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get questionInput() {
    return this._question;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // var_type - computed: false, optional: true, required: false
  private _varType?: string; 
  public get varType() {
    return this.getStringAttribute('var_type');
  }
  public set varType(value: string) {
    this._varType = value;
  }
  public resetVarType() {
    this._varType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varTypeInput() {
    return this._varType;
  }
}

export class CallFlowRootNodeBranchesTargetMetadataGathersList extends cdktf.ComplexList {
  public internalValue? : CallFlowRootNodeBranchesTargetMetadataGathers[] | cdktf.IResolvable

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
  public get(index: number): CallFlowRootNodeBranchesTargetMetadataGathersOutputReference {
    return new CallFlowRootNodeBranchesTargetMetadataGathersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CallFlowRootNodeBranchesTargetMetadataIntents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#description CallFlow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#examples CallFlow#examples}
  */
  readonly examples?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#label CallFlow#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#type CallFlow#type}
  */
  readonly type?: string;
}

export function callFlowRootNodeBranchesTargetMetadataIntentsToTerraform(struct?: CallFlowRootNodeBranchesTargetMetadataIntents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    examples: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.examples),
    label: cdktf.stringToTerraform(struct!.label),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function callFlowRootNodeBranchesTargetMetadataIntentsToHclTerraform(struct?: CallFlowRootNodeBranchesTargetMetadataIntents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    examples: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.examples),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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

export class CallFlowRootNodeBranchesTargetMetadataIntentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CallFlowRootNodeBranchesTargetMetadataIntents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._examples !== undefined) {
      hasAnyValues = true;
      internalValueResult.examples = this._examples;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowRootNodeBranchesTargetMetadataIntents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._examples = undefined;
      this._label = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._examples = value.examples;
      this._label = value.label;
      this._type = value.type;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // examples - computed: false, optional: true, required: false
  private _examples?: string[]; 
  public get examples() {
    return this.getListAttribute('examples');
  }
  public set examples(value: string[]) {
    this._examples = value;
  }
  public resetExamples() {
    this._examples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get examplesInput() {
    return this._examples;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CallFlowRootNodeBranchesTargetMetadataIntentsList extends cdktf.ComplexList {
  public internalValue? : CallFlowRootNodeBranchesTargetMetadataIntents[] | cdktf.IResolvable

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
  public get(index: number): CallFlowRootNodeBranchesTargetMetadataIntentsOutputReference {
    return new CallFlowRootNodeBranchesTargetMetadataIntentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CallFlowRootNodeBranchesTargetMetadataTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#target CallFlow#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#type CallFlow#type}
  */
  readonly type: string;
}

export function callFlowRootNodeBranchesTargetMetadataTargetsToTerraform(struct?: CallFlowRootNodeBranchesTargetMetadataTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function callFlowRootNodeBranchesTargetMetadataTargetsToHclTerraform(struct?: CallFlowRootNodeBranchesTargetMetadataTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
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

export class CallFlowRootNodeBranchesTargetMetadataTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CallFlowRootNodeBranchesTargetMetadataTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowRootNodeBranchesTargetMetadataTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
      this._type = value.type;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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

export class CallFlowRootNodeBranchesTargetMetadataTargetsList extends cdktf.ComplexList {
  public internalValue? : CallFlowRootNodeBranchesTargetMetadataTargets[] | cdktf.IResolvable

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
  public get(index: number): CallFlowRootNodeBranchesTargetMetadataTargetsOutputReference {
    return new CallFlowRootNodeBranchesTargetMetadataTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CallFlowRootNodeBranchesTargetMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#ai_voice_model CallFlow#ai_voice_model}
  */
  readonly aiVoiceModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#alert_source_id CallFlow#alert_source_id}
  */
  readonly alertSourceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#blacklist CallFlow#blacklist}
  */
  readonly blacklist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#call_style CallFlow#call_style}
  */
  readonly callStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#call_timeout_sec CallFlow#call_timeout_sec}
  */
  readonly callTimeoutSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#custom_audio_url CallFlow#custom_audio_url}
  */
  readonly customAudioUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#enabled_options CallFlow#enabled_options}
  */
  readonly enabledOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#hold_audio_url CallFlow#hold_audio_url}
  */
  readonly holdAudioUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#language CallFlow#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#retries CallFlow#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#support_hours_id CallFlow#support_hours_id}
  */
  readonly supportHoursId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#text_message CallFlow#text_message}
  */
  readonly textMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#var_key CallFlow#var_key}
  */
  readonly varKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#var_value CallFlow#var_value}
  */
  readonly varValue?: string;
  /**
  * codes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#codes CallFlow#codes}
  */
  readonly codes?: CallFlowRootNodeBranchesTargetMetadataCodes[] | cdktf.IResolvable;
  /**
  * enrichment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#enrichment CallFlow#enrichment}
  */
  readonly enrichment?: CallFlowRootNodeBranchesTargetMetadataEnrichment;
  /**
  * gathers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#gathers CallFlow#gathers}
  */
  readonly gathers?: CallFlowRootNodeBranchesTargetMetadataGathers[] | cdktf.IResolvable;
  /**
  * intents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#intents CallFlow#intents}
  */
  readonly intents?: CallFlowRootNodeBranchesTargetMetadataIntents[] | cdktf.IResolvable;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#targets CallFlow#targets}
  */
  readonly targets?: CallFlowRootNodeBranchesTargetMetadataTargets[] | cdktf.IResolvable;
}

export function callFlowRootNodeBranchesTargetMetadataToTerraform(struct?: CallFlowRootNodeBranchesTargetMetadataOutputReference | CallFlowRootNodeBranchesTargetMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai_voice_model: cdktf.stringToTerraform(struct!.aiVoiceModel),
    alert_source_id: cdktf.numberToTerraform(struct!.alertSourceId),
    blacklist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blacklist),
    call_style: cdktf.stringToTerraform(struct!.callStyle),
    call_timeout_sec: cdktf.numberToTerraform(struct!.callTimeoutSec),
    custom_audio_url: cdktf.stringToTerraform(struct!.customAudioUrl),
    enabled_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledOptions),
    hold_audio_url: cdktf.stringToTerraform(struct!.holdAudioUrl),
    language: cdktf.stringToTerraform(struct!.language),
    retries: cdktf.numberToTerraform(struct!.retries),
    support_hours_id: cdktf.numberToTerraform(struct!.supportHoursId),
    text_message: cdktf.stringToTerraform(struct!.textMessage),
    var_key: cdktf.stringToTerraform(struct!.varKey),
    var_value: cdktf.stringToTerraform(struct!.varValue),
    codes: cdktf.listMapper(callFlowRootNodeBranchesTargetMetadataCodesToTerraform, true)(struct!.codes),
    enrichment: callFlowRootNodeBranchesTargetMetadataEnrichmentToTerraform(struct!.enrichment),
    gathers: cdktf.listMapper(callFlowRootNodeBranchesTargetMetadataGathersToTerraform, true)(struct!.gathers),
    intents: cdktf.listMapper(callFlowRootNodeBranchesTargetMetadataIntentsToTerraform, true)(struct!.intents),
    targets: cdktf.listMapper(callFlowRootNodeBranchesTargetMetadataTargetsToTerraform, true)(struct!.targets),
  }
}


export function callFlowRootNodeBranchesTargetMetadataToHclTerraform(struct?: CallFlowRootNodeBranchesTargetMetadataOutputReference | CallFlowRootNodeBranchesTargetMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai_voice_model: {
      value: cdktf.stringToHclTerraform(struct!.aiVoiceModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_source_id: {
      value: cdktf.numberToHclTerraform(struct!.alertSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blacklist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blacklist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    call_style: {
      value: cdktf.stringToHclTerraform(struct!.callStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    call_timeout_sec: {
      value: cdktf.numberToHclTerraform(struct!.callTimeoutSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_audio_url: {
      value: cdktf.stringToHclTerraform(struct!.customAudioUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hold_audio_url: {
      value: cdktf.stringToHclTerraform(struct!.holdAudioUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    support_hours_id: {
      value: cdktf.numberToHclTerraform(struct!.supportHoursId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_message: {
      value: cdktf.stringToHclTerraform(struct!.textMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    var_key: {
      value: cdktf.stringToHclTerraform(struct!.varKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    var_value: {
      value: cdktf.stringToHclTerraform(struct!.varValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codes: {
      value: cdktf.listMapperHcl(callFlowRootNodeBranchesTargetMetadataCodesToHclTerraform, true)(struct!.codes),
      isBlock: true,
      type: "list",
      storageClassType: "CallFlowRootNodeBranchesTargetMetadataCodesList",
    },
    enrichment: {
      value: callFlowRootNodeBranchesTargetMetadataEnrichmentToHclTerraform(struct!.enrichment),
      isBlock: true,
      type: "list",
      storageClassType: "CallFlowRootNodeBranchesTargetMetadataEnrichmentList",
    },
    gathers: {
      value: cdktf.listMapperHcl(callFlowRootNodeBranchesTargetMetadataGathersToHclTerraform, true)(struct!.gathers),
      isBlock: true,
      type: "list",
      storageClassType: "CallFlowRootNodeBranchesTargetMetadataGathersList",
    },
    intents: {
      value: cdktf.listMapperHcl(callFlowRootNodeBranchesTargetMetadataIntentsToHclTerraform, true)(struct!.intents),
      isBlock: true,
      type: "list",
      storageClassType: "CallFlowRootNodeBranchesTargetMetadataIntentsList",
    },
    targets: {
      value: cdktf.listMapperHcl(callFlowRootNodeBranchesTargetMetadataTargetsToHclTerraform, true)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "CallFlowRootNodeBranchesTargetMetadataTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CallFlowRootNodeBranchesTargetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CallFlowRootNodeBranchesTargetMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiVoiceModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiVoiceModel = this._aiVoiceModel;
    }
    if (this._alertSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertSourceId = this._alertSourceId;
    }
    if (this._blacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklist = this._blacklist;
    }
    if (this._callStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.callStyle = this._callStyle;
    }
    if (this._callTimeoutSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.callTimeoutSec = this._callTimeoutSec;
    }
    if (this._customAudioUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAudioUrl = this._customAudioUrl;
    }
    if (this._enabledOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledOptions = this._enabledOptions;
    }
    if (this._holdAudioUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdAudioUrl = this._holdAudioUrl;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._supportHoursId !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportHoursId = this._supportHoursId;
    }
    if (this._textMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.textMessage = this._textMessage;
    }
    if (this._varKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.varKey = this._varKey;
    }
    if (this._varValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.varValue = this._varValue;
    }
    if (this._codes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codes = this._codes?.internalValue;
    }
    if (this._enrichment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrichment = this._enrichment?.internalValue;
    }
    if (this._gathers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gathers = this._gathers?.internalValue;
    }
    if (this._intents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intents = this._intents?.internalValue;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowRootNodeBranchesTargetMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aiVoiceModel = undefined;
      this._alertSourceId = undefined;
      this._blacklist = undefined;
      this._callStyle = undefined;
      this._callTimeoutSec = undefined;
      this._customAudioUrl = undefined;
      this._enabledOptions = undefined;
      this._holdAudioUrl = undefined;
      this._language = undefined;
      this._retries = undefined;
      this._supportHoursId = undefined;
      this._textMessage = undefined;
      this._varKey = undefined;
      this._varValue = undefined;
      this._codes.internalValue = undefined;
      this._enrichment.internalValue = undefined;
      this._gathers.internalValue = undefined;
      this._intents.internalValue = undefined;
      this._targets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aiVoiceModel = value.aiVoiceModel;
      this._alertSourceId = value.alertSourceId;
      this._blacklist = value.blacklist;
      this._callStyle = value.callStyle;
      this._callTimeoutSec = value.callTimeoutSec;
      this._customAudioUrl = value.customAudioUrl;
      this._enabledOptions = value.enabledOptions;
      this._holdAudioUrl = value.holdAudioUrl;
      this._language = value.language;
      this._retries = value.retries;
      this._supportHoursId = value.supportHoursId;
      this._textMessage = value.textMessage;
      this._varKey = value.varKey;
      this._varValue = value.varValue;
      this._codes.internalValue = value.codes;
      this._enrichment.internalValue = value.enrichment;
      this._gathers.internalValue = value.gathers;
      this._intents.internalValue = value.intents;
      this._targets.internalValue = value.targets;
    }
  }

  // ai_voice_model - computed: false, optional: true, required: false
  private _aiVoiceModel?: string; 
  public get aiVoiceModel() {
    return this.getStringAttribute('ai_voice_model');
  }
  public set aiVoiceModel(value: string) {
    this._aiVoiceModel = value;
  }
  public resetAiVoiceModel() {
    this._aiVoiceModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiVoiceModelInput() {
    return this._aiVoiceModel;
  }

  // alert_source_id - computed: false, optional: true, required: false
  private _alertSourceId?: number; 
  public get alertSourceId() {
    return this.getNumberAttribute('alert_source_id');
  }
  public set alertSourceId(value: number) {
    this._alertSourceId = value;
  }
  public resetAlertSourceId() {
    this._alertSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSourceIdInput() {
    return this._alertSourceId;
  }

  // blacklist - computed: false, optional: true, required: false
  private _blacklist?: string[]; 
  public get blacklist() {
    return this.getListAttribute('blacklist');
  }
  public set blacklist(value: string[]) {
    this._blacklist = value;
  }
  public resetBlacklist() {
    this._blacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistInput() {
    return this._blacklist;
  }

  // call_style - computed: false, optional: true, required: false
  private _callStyle?: string; 
  public get callStyle() {
    return this.getStringAttribute('call_style');
  }
  public set callStyle(value: string) {
    this._callStyle = value;
  }
  public resetCallStyle() {
    this._callStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callStyleInput() {
    return this._callStyle;
  }

  // call_timeout_sec - computed: false, optional: true, required: false
  private _callTimeoutSec?: number; 
  public get callTimeoutSec() {
    return this.getNumberAttribute('call_timeout_sec');
  }
  public set callTimeoutSec(value: number) {
    this._callTimeoutSec = value;
  }
  public resetCallTimeoutSec() {
    this._callTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callTimeoutSecInput() {
    return this._callTimeoutSec;
  }

  // custom_audio_url - computed: false, optional: true, required: false
  private _customAudioUrl?: string; 
  public get customAudioUrl() {
    return this.getStringAttribute('custom_audio_url');
  }
  public set customAudioUrl(value: string) {
    this._customAudioUrl = value;
  }
  public resetCustomAudioUrl() {
    this._customAudioUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAudioUrlInput() {
    return this._customAudioUrl;
  }

  // enabled_options - computed: false, optional: true, required: false
  private _enabledOptions?: string[]; 
  public get enabledOptions() {
    return this.getListAttribute('enabled_options');
  }
  public set enabledOptions(value: string[]) {
    this._enabledOptions = value;
  }
  public resetEnabledOptions() {
    this._enabledOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledOptionsInput() {
    return this._enabledOptions;
  }

  // hold_audio_url - computed: false, optional: true, required: false
  private _holdAudioUrl?: string; 
  public get holdAudioUrl() {
    return this.getStringAttribute('hold_audio_url');
  }
  public set holdAudioUrl(value: string) {
    this._holdAudioUrl = value;
  }
  public resetHoldAudioUrl() {
    this._holdAudioUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdAudioUrlInput() {
    return this._holdAudioUrl;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // support_hours_id - computed: false, optional: true, required: false
  private _supportHoursId?: number; 
  public get supportHoursId() {
    return this.getNumberAttribute('support_hours_id');
  }
  public set supportHoursId(value: number) {
    this._supportHoursId = value;
  }
  public resetSupportHoursId() {
    this._supportHoursId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportHoursIdInput() {
    return this._supportHoursId;
  }

  // text_message - computed: false, optional: true, required: false
  private _textMessage?: string; 
  public get textMessage() {
    return this.getStringAttribute('text_message');
  }
  public set textMessage(value: string) {
    this._textMessage = value;
  }
  public resetTextMessage() {
    this._textMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textMessageInput() {
    return this._textMessage;
  }

  // var_key - computed: false, optional: true, required: false
  private _varKey?: string; 
  public get varKey() {
    return this.getStringAttribute('var_key');
  }
  public set varKey(value: string) {
    this._varKey = value;
  }
  public resetVarKey() {
    this._varKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varKeyInput() {
    return this._varKey;
  }

  // var_value - computed: false, optional: true, required: false
  private _varValue?: string; 
  public get varValue() {
    return this.getStringAttribute('var_value');
  }
  public set varValue(value: string) {
    this._varValue = value;
  }
  public resetVarValue() {
    this._varValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varValueInput() {
    return this._varValue;
  }

  // codes - computed: false, optional: true, required: false
  private _codes = new CallFlowRootNodeBranchesTargetMetadataCodesList(this, "codes", false);
  public get codes() {
    return this._codes;
  }
  public putCodes(value: CallFlowRootNodeBranchesTargetMetadataCodes[] | cdktf.IResolvable) {
    this._codes.internalValue = value;
  }
  public resetCodes() {
    this._codes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codesInput() {
    return this._codes.internalValue;
  }

  // enrichment - computed: false, optional: true, required: false
  private _enrichment = new CallFlowRootNodeBranchesTargetMetadataEnrichmentOutputReference(this, "enrichment");
  public get enrichment() {
    return this._enrichment;
  }
  public putEnrichment(value: CallFlowRootNodeBranchesTargetMetadataEnrichment) {
    this._enrichment.internalValue = value;
  }
  public resetEnrichment() {
    this._enrichment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentInput() {
    return this._enrichment.internalValue;
  }

  // gathers - computed: false, optional: true, required: false
  private _gathers = new CallFlowRootNodeBranchesTargetMetadataGathersList(this, "gathers", false);
  public get gathers() {
    return this._gathers;
  }
  public putGathers(value: CallFlowRootNodeBranchesTargetMetadataGathers[] | cdktf.IResolvable) {
    this._gathers.internalValue = value;
  }
  public resetGathers() {
    this._gathers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gathersInput() {
    return this._gathers.internalValue;
  }

  // intents - computed: false, optional: true, required: false
  private _intents = new CallFlowRootNodeBranchesTargetMetadataIntentsList(this, "intents", false);
  public get intents() {
    return this._intents;
  }
  public putIntents(value: CallFlowRootNodeBranchesTargetMetadataIntents[] | cdktf.IResolvable) {
    this._intents.internalValue = value;
  }
  public resetIntents() {
    this._intents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intentsInput() {
    return this._intents.internalValue;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new CallFlowRootNodeBranchesTargetMetadataTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: CallFlowRootNodeBranchesTargetMetadataTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}
export interface CallFlowRootNodeBranchesTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#name CallFlow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#node_type CallFlow#node_type}
  */
  readonly nodeType: string;
  /**
  * branches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#branches CallFlow#branches}
  */
  readonly branches?: CallFlowRootNodeBranches[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#metadata CallFlow#metadata}
  */
  readonly metadata?: CallFlowRootNodeBranchesTargetMetadata;
}

export function callFlowRootNodeBranchesTargetToTerraform(struct?: CallFlowRootNodeBranchesTargetOutputReference | CallFlowRootNodeBranchesTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    branches: cdktf.listMapper(callFlowRootNodeBranchesToTerraform, true)(struct!.branches),
    metadata: callFlowRootNodeBranchesTargetMetadataToTerraform(struct!.metadata),
  }
}


export function callFlowRootNodeBranchesTargetToHclTerraform(struct?: CallFlowRootNodeBranchesTargetOutputReference | CallFlowRootNodeBranchesTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branches: {
      value: cdktf.listMapperHcl(callFlowRootNodeBranchesToHclTerraform, true)(struct!.branches),
      isBlock: true,
      type: "list",
      storageClassType: "CallFlowRootNodeBranchesList",
    },
    metadata: {
      value: callFlowRootNodeBranchesTargetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CallFlowRootNodeBranchesTargetMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CallFlowRootNodeBranchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CallFlowRootNodeBranchesTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._branches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowRootNodeBranchesTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._nodeType = undefined;
      this._branches.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._nodeType = value.nodeType;
      this._branches.internalValue = value.branches;
      this._metadata.internalValue = value.metadata;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // branches - computed: false, optional: true, required: false
  private _branches = new CallFlowRootNodeBranchesList(this, "branches", false);
  public get branches() {
    return this._branches;
  }
  public putBranches(value: CallFlowRootNodeBranches[] | cdktf.IResolvable) {
    this._branches.internalValue = value;
  }
  public resetBranches() {
    this._branches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new CallFlowRootNodeBranchesTargetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CallFlowRootNodeBranchesTargetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}
export interface CallFlowRootNodeBranches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#branch_type CallFlow#branch_type}
  */
  readonly branchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#condition CallFlow#condition}
  */
  readonly condition?: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#target CallFlow#target}
  */
  readonly target?: CallFlowRootNodeBranchesTarget;
}

export function callFlowRootNodeBranchesToTerraform(struct?: CallFlowRootNodeBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch_type: cdktf.stringToTerraform(struct!.branchType),
    condition: cdktf.stringToTerraform(struct!.condition),
    target: callFlowRootNodeBranchesTargetToTerraform(struct!.target),
  }
}


export function callFlowRootNodeBranchesToHclTerraform(struct?: CallFlowRootNodeBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch_type: {
      value: cdktf.stringToHclTerraform(struct!.branchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: callFlowRootNodeBranchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "CallFlowRootNodeBranchesTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CallFlowRootNodeBranchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CallFlowRootNodeBranches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchType = this._branchType;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowRootNodeBranches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branchType = undefined;
      this._condition = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branchType = value.branchType;
      this._condition = value.condition;
      this._target.internalValue = value.target;
    }
  }

  // branch_type - computed: false, optional: false, required: true
  private _branchType?: string; 
  public get branchType() {
    return this.getStringAttribute('branch_type');
  }
  public set branchType(value: string) {
    this._branchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchTypeInput() {
    return this._branchType;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // target - computed: false, optional: true, required: false
  private _target = new CallFlowRootNodeBranchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: CallFlowRootNodeBranchesTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class CallFlowRootNodeBranchesList extends cdktf.ComplexList {
  public internalValue? : CallFlowRootNodeBranches[] | cdktf.IResolvable

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
  public get(index: number): CallFlowRootNodeBranchesOutputReference {
    return new CallFlowRootNodeBranchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CallFlowRootNodeMetadataCodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#code CallFlow#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#label CallFlow#label}
  */
  readonly label: string;
}

export function callFlowRootNodeMetadataCodesToTerraform(struct?: CallFlowRootNodeMetadataCodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    label: cdktf.stringToTerraform(struct!.label),
  }
}


export function callFlowRootNodeMetadataCodesToHclTerraform(struct?: CallFlowRootNodeMetadataCodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CallFlowRootNodeMetadataCodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CallFlowRootNodeMetadataCodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowRootNodeMetadataCodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._label = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._label = value.label;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}

export class CallFlowRootNodeMetadataCodesList extends cdktf.ComplexList {
  public internalValue? : CallFlowRootNodeMetadataCodes[] | cdktf.IResolvable

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
  public get(index: number): CallFlowRootNodeMetadataCodesOutputReference {
    return new CallFlowRootNodeMetadataCodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CallFlowRootNodeMetadataEnrichmentSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#id CallFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#type CallFlow#type}
  */
  readonly type: string;
}

export function callFlowRootNodeMetadataEnrichmentSourcesToTerraform(struct?: CallFlowRootNodeMetadataEnrichmentSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function callFlowRootNodeMetadataEnrichmentSourcesToHclTerraform(struct?: CallFlowRootNodeMetadataEnrichmentSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class CallFlowRootNodeMetadataEnrichmentSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CallFlowRootNodeMetadataEnrichmentSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowRootNodeMetadataEnrichmentSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class CallFlowRootNodeMetadataEnrichmentSourcesList extends cdktf.ComplexList {
  public internalValue? : CallFlowRootNodeMetadataEnrichmentSources[] | cdktf.IResolvable

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
  public get(index: number): CallFlowRootNodeMetadataEnrichmentSourcesOutputReference {
    return new CallFlowRootNodeMetadataEnrichmentSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CallFlowRootNodeMetadataEnrichment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#enabled CallFlow#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#information_types CallFlow#information_types}
  */
  readonly informationTypes?: { [key: string]: string };
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#sources CallFlow#sources}
  */
  readonly sources?: CallFlowRootNodeMetadataEnrichmentSources[] | cdktf.IResolvable;
}

export function callFlowRootNodeMetadataEnrichmentToTerraform(struct?: CallFlowRootNodeMetadataEnrichmentOutputReference | CallFlowRootNodeMetadataEnrichment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    information_types: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.informationTypes),
    sources: cdktf.listMapper(callFlowRootNodeMetadataEnrichmentSourcesToTerraform, true)(struct!.sources),
  }
}


export function callFlowRootNodeMetadataEnrichmentToHclTerraform(struct?: CallFlowRootNodeMetadataEnrichmentOutputReference | CallFlowRootNodeMetadataEnrichment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    information_types: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.informationTypes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sources: {
      value: cdktf.listMapperHcl(callFlowRootNodeMetadataEnrichmentSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "CallFlowRootNodeMetadataEnrichmentSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CallFlowRootNodeMetadataEnrichmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CallFlowRootNodeMetadataEnrichment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._informationTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.informationTypes = this._informationTypes;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowRootNodeMetadataEnrichment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._informationTypes = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._informationTypes = value.informationTypes;
      this._sources.internalValue = value.sources;
    }
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

  // information_types - computed: false, optional: true, required: false
  private _informationTypes?: { [key: string]: string }; 
  public get informationTypes() {
    return this.getStringMapAttribute('information_types');
  }
  public set informationTypes(value: { [key: string]: string }) {
    this._informationTypes = value;
  }
  public resetInformationTypes() {
    this._informationTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get informationTypesInput() {
    return this._informationTypes;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new CallFlowRootNodeMetadataEnrichmentSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: CallFlowRootNodeMetadataEnrichmentSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface CallFlowRootNodeMetadataGathers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#label CallFlow#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#question CallFlow#question}
  */
  readonly question?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#required CallFlow#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#type CallFlow#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#var_type CallFlow#var_type}
  */
  readonly varType?: string;
}

export function callFlowRootNodeMetadataGathersToTerraform(struct?: CallFlowRootNodeMetadataGathers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    question: cdktf.stringToTerraform(struct!.question),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    var_type: cdktf.stringToTerraform(struct!.varType),
  }
}


export function callFlowRootNodeMetadataGathersToHclTerraform(struct?: CallFlowRootNodeMetadataGathers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    question: {
      value: cdktf.stringToHclTerraform(struct!.question),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    var_type: {
      value: cdktf.stringToHclTerraform(struct!.varType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CallFlowRootNodeMetadataGathersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CallFlowRootNodeMetadataGathers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._question !== undefined) {
      hasAnyValues = true;
      internalValueResult.question = this._question;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._varType !== undefined) {
      hasAnyValues = true;
      internalValueResult.varType = this._varType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowRootNodeMetadataGathers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._question = undefined;
      this._required = undefined;
      this._type = undefined;
      this._varType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._question = value.question;
      this._required = value.required;
      this._type = value.type;
      this._varType = value.varType;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // question - computed: false, optional: true, required: false
  private _question?: string; 
  public get question() {
    return this.getStringAttribute('question');
  }
  public set question(value: string) {
    this._question = value;
  }
  public resetQuestion() {
    this._question = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get questionInput() {
    return this._question;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // var_type - computed: false, optional: true, required: false
  private _varType?: string; 
  public get varType() {
    return this.getStringAttribute('var_type');
  }
  public set varType(value: string) {
    this._varType = value;
  }
  public resetVarType() {
    this._varType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varTypeInput() {
    return this._varType;
  }
}

export class CallFlowRootNodeMetadataGathersList extends cdktf.ComplexList {
  public internalValue? : CallFlowRootNodeMetadataGathers[] | cdktf.IResolvable

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
  public get(index: number): CallFlowRootNodeMetadataGathersOutputReference {
    return new CallFlowRootNodeMetadataGathersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CallFlowRootNodeMetadataIntents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#description CallFlow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#examples CallFlow#examples}
  */
  readonly examples?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#label CallFlow#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#type CallFlow#type}
  */
  readonly type?: string;
}

export function callFlowRootNodeMetadataIntentsToTerraform(struct?: CallFlowRootNodeMetadataIntents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    examples: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.examples),
    label: cdktf.stringToTerraform(struct!.label),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function callFlowRootNodeMetadataIntentsToHclTerraform(struct?: CallFlowRootNodeMetadataIntents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    examples: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.examples),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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

export class CallFlowRootNodeMetadataIntentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CallFlowRootNodeMetadataIntents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._examples !== undefined) {
      hasAnyValues = true;
      internalValueResult.examples = this._examples;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowRootNodeMetadataIntents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._examples = undefined;
      this._label = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._examples = value.examples;
      this._label = value.label;
      this._type = value.type;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // examples - computed: false, optional: true, required: false
  private _examples?: string[]; 
  public get examples() {
    return this.getListAttribute('examples');
  }
  public set examples(value: string[]) {
    this._examples = value;
  }
  public resetExamples() {
    this._examples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get examplesInput() {
    return this._examples;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CallFlowRootNodeMetadataIntentsList extends cdktf.ComplexList {
  public internalValue? : CallFlowRootNodeMetadataIntents[] | cdktf.IResolvable

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
  public get(index: number): CallFlowRootNodeMetadataIntentsOutputReference {
    return new CallFlowRootNodeMetadataIntentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CallFlowRootNodeMetadataTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#target CallFlow#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#type CallFlow#type}
  */
  readonly type: string;
}

export function callFlowRootNodeMetadataTargetsToTerraform(struct?: CallFlowRootNodeMetadataTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function callFlowRootNodeMetadataTargetsToHclTerraform(struct?: CallFlowRootNodeMetadataTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
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

export class CallFlowRootNodeMetadataTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CallFlowRootNodeMetadataTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowRootNodeMetadataTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
      this._type = value.type;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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

export class CallFlowRootNodeMetadataTargetsList extends cdktf.ComplexList {
  public internalValue? : CallFlowRootNodeMetadataTargets[] | cdktf.IResolvable

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
  public get(index: number): CallFlowRootNodeMetadataTargetsOutputReference {
    return new CallFlowRootNodeMetadataTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CallFlowRootNodeMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#ai_voice_model CallFlow#ai_voice_model}
  */
  readonly aiVoiceModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#alert_source_id CallFlow#alert_source_id}
  */
  readonly alertSourceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#blacklist CallFlow#blacklist}
  */
  readonly blacklist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#call_style CallFlow#call_style}
  */
  readonly callStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#call_timeout_sec CallFlow#call_timeout_sec}
  */
  readonly callTimeoutSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#custom_audio_url CallFlow#custom_audio_url}
  */
  readonly customAudioUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#enabled_options CallFlow#enabled_options}
  */
  readonly enabledOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#hold_audio_url CallFlow#hold_audio_url}
  */
  readonly holdAudioUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#language CallFlow#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#retries CallFlow#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#support_hours_id CallFlow#support_hours_id}
  */
  readonly supportHoursId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#text_message CallFlow#text_message}
  */
  readonly textMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#var_key CallFlow#var_key}
  */
  readonly varKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#var_value CallFlow#var_value}
  */
  readonly varValue?: string;
  /**
  * codes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#codes CallFlow#codes}
  */
  readonly codes?: CallFlowRootNodeMetadataCodes[] | cdktf.IResolvable;
  /**
  * enrichment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#enrichment CallFlow#enrichment}
  */
  readonly enrichment?: CallFlowRootNodeMetadataEnrichment;
  /**
  * gathers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#gathers CallFlow#gathers}
  */
  readonly gathers?: CallFlowRootNodeMetadataGathers[] | cdktf.IResolvable;
  /**
  * intents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#intents CallFlow#intents}
  */
  readonly intents?: CallFlowRootNodeMetadataIntents[] | cdktf.IResolvable;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#targets CallFlow#targets}
  */
  readonly targets?: CallFlowRootNodeMetadataTargets[] | cdktf.IResolvable;
}

export function callFlowRootNodeMetadataToTerraform(struct?: CallFlowRootNodeMetadataOutputReference | CallFlowRootNodeMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai_voice_model: cdktf.stringToTerraform(struct!.aiVoiceModel),
    alert_source_id: cdktf.numberToTerraform(struct!.alertSourceId),
    blacklist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blacklist),
    call_style: cdktf.stringToTerraform(struct!.callStyle),
    call_timeout_sec: cdktf.numberToTerraform(struct!.callTimeoutSec),
    custom_audio_url: cdktf.stringToTerraform(struct!.customAudioUrl),
    enabled_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledOptions),
    hold_audio_url: cdktf.stringToTerraform(struct!.holdAudioUrl),
    language: cdktf.stringToTerraform(struct!.language),
    retries: cdktf.numberToTerraform(struct!.retries),
    support_hours_id: cdktf.numberToTerraform(struct!.supportHoursId),
    text_message: cdktf.stringToTerraform(struct!.textMessage),
    var_key: cdktf.stringToTerraform(struct!.varKey),
    var_value: cdktf.stringToTerraform(struct!.varValue),
    codes: cdktf.listMapper(callFlowRootNodeMetadataCodesToTerraform, true)(struct!.codes),
    enrichment: callFlowRootNodeMetadataEnrichmentToTerraform(struct!.enrichment),
    gathers: cdktf.listMapper(callFlowRootNodeMetadataGathersToTerraform, true)(struct!.gathers),
    intents: cdktf.listMapper(callFlowRootNodeMetadataIntentsToTerraform, true)(struct!.intents),
    targets: cdktf.listMapper(callFlowRootNodeMetadataTargetsToTerraform, true)(struct!.targets),
  }
}


export function callFlowRootNodeMetadataToHclTerraform(struct?: CallFlowRootNodeMetadataOutputReference | CallFlowRootNodeMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai_voice_model: {
      value: cdktf.stringToHclTerraform(struct!.aiVoiceModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_source_id: {
      value: cdktf.numberToHclTerraform(struct!.alertSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blacklist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blacklist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    call_style: {
      value: cdktf.stringToHclTerraform(struct!.callStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    call_timeout_sec: {
      value: cdktf.numberToHclTerraform(struct!.callTimeoutSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_audio_url: {
      value: cdktf.stringToHclTerraform(struct!.customAudioUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hold_audio_url: {
      value: cdktf.stringToHclTerraform(struct!.holdAudioUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    support_hours_id: {
      value: cdktf.numberToHclTerraform(struct!.supportHoursId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_message: {
      value: cdktf.stringToHclTerraform(struct!.textMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    var_key: {
      value: cdktf.stringToHclTerraform(struct!.varKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    var_value: {
      value: cdktf.stringToHclTerraform(struct!.varValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codes: {
      value: cdktf.listMapperHcl(callFlowRootNodeMetadataCodesToHclTerraform, true)(struct!.codes),
      isBlock: true,
      type: "list",
      storageClassType: "CallFlowRootNodeMetadataCodesList",
    },
    enrichment: {
      value: callFlowRootNodeMetadataEnrichmentToHclTerraform(struct!.enrichment),
      isBlock: true,
      type: "list",
      storageClassType: "CallFlowRootNodeMetadataEnrichmentList",
    },
    gathers: {
      value: cdktf.listMapperHcl(callFlowRootNodeMetadataGathersToHclTerraform, true)(struct!.gathers),
      isBlock: true,
      type: "list",
      storageClassType: "CallFlowRootNodeMetadataGathersList",
    },
    intents: {
      value: cdktf.listMapperHcl(callFlowRootNodeMetadataIntentsToHclTerraform, true)(struct!.intents),
      isBlock: true,
      type: "list",
      storageClassType: "CallFlowRootNodeMetadataIntentsList",
    },
    targets: {
      value: cdktf.listMapperHcl(callFlowRootNodeMetadataTargetsToHclTerraform, true)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "CallFlowRootNodeMetadataTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CallFlowRootNodeMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CallFlowRootNodeMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiVoiceModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiVoiceModel = this._aiVoiceModel;
    }
    if (this._alertSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertSourceId = this._alertSourceId;
    }
    if (this._blacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklist = this._blacklist;
    }
    if (this._callStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.callStyle = this._callStyle;
    }
    if (this._callTimeoutSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.callTimeoutSec = this._callTimeoutSec;
    }
    if (this._customAudioUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAudioUrl = this._customAudioUrl;
    }
    if (this._enabledOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledOptions = this._enabledOptions;
    }
    if (this._holdAudioUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdAudioUrl = this._holdAudioUrl;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._supportHoursId !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportHoursId = this._supportHoursId;
    }
    if (this._textMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.textMessage = this._textMessage;
    }
    if (this._varKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.varKey = this._varKey;
    }
    if (this._varValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.varValue = this._varValue;
    }
    if (this._codes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codes = this._codes?.internalValue;
    }
    if (this._enrichment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrichment = this._enrichment?.internalValue;
    }
    if (this._gathers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gathers = this._gathers?.internalValue;
    }
    if (this._intents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intents = this._intents?.internalValue;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowRootNodeMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aiVoiceModel = undefined;
      this._alertSourceId = undefined;
      this._blacklist = undefined;
      this._callStyle = undefined;
      this._callTimeoutSec = undefined;
      this._customAudioUrl = undefined;
      this._enabledOptions = undefined;
      this._holdAudioUrl = undefined;
      this._language = undefined;
      this._retries = undefined;
      this._supportHoursId = undefined;
      this._textMessage = undefined;
      this._varKey = undefined;
      this._varValue = undefined;
      this._codes.internalValue = undefined;
      this._enrichment.internalValue = undefined;
      this._gathers.internalValue = undefined;
      this._intents.internalValue = undefined;
      this._targets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aiVoiceModel = value.aiVoiceModel;
      this._alertSourceId = value.alertSourceId;
      this._blacklist = value.blacklist;
      this._callStyle = value.callStyle;
      this._callTimeoutSec = value.callTimeoutSec;
      this._customAudioUrl = value.customAudioUrl;
      this._enabledOptions = value.enabledOptions;
      this._holdAudioUrl = value.holdAudioUrl;
      this._language = value.language;
      this._retries = value.retries;
      this._supportHoursId = value.supportHoursId;
      this._textMessage = value.textMessage;
      this._varKey = value.varKey;
      this._varValue = value.varValue;
      this._codes.internalValue = value.codes;
      this._enrichment.internalValue = value.enrichment;
      this._gathers.internalValue = value.gathers;
      this._intents.internalValue = value.intents;
      this._targets.internalValue = value.targets;
    }
  }

  // ai_voice_model - computed: false, optional: true, required: false
  private _aiVoiceModel?: string; 
  public get aiVoiceModel() {
    return this.getStringAttribute('ai_voice_model');
  }
  public set aiVoiceModel(value: string) {
    this._aiVoiceModel = value;
  }
  public resetAiVoiceModel() {
    this._aiVoiceModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiVoiceModelInput() {
    return this._aiVoiceModel;
  }

  // alert_source_id - computed: false, optional: true, required: false
  private _alertSourceId?: number; 
  public get alertSourceId() {
    return this.getNumberAttribute('alert_source_id');
  }
  public set alertSourceId(value: number) {
    this._alertSourceId = value;
  }
  public resetAlertSourceId() {
    this._alertSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSourceIdInput() {
    return this._alertSourceId;
  }

  // blacklist - computed: false, optional: true, required: false
  private _blacklist?: string[]; 
  public get blacklist() {
    return this.getListAttribute('blacklist');
  }
  public set blacklist(value: string[]) {
    this._blacklist = value;
  }
  public resetBlacklist() {
    this._blacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistInput() {
    return this._blacklist;
  }

  // call_style - computed: false, optional: true, required: false
  private _callStyle?: string; 
  public get callStyle() {
    return this.getStringAttribute('call_style');
  }
  public set callStyle(value: string) {
    this._callStyle = value;
  }
  public resetCallStyle() {
    this._callStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callStyleInput() {
    return this._callStyle;
  }

  // call_timeout_sec - computed: false, optional: true, required: false
  private _callTimeoutSec?: number; 
  public get callTimeoutSec() {
    return this.getNumberAttribute('call_timeout_sec');
  }
  public set callTimeoutSec(value: number) {
    this._callTimeoutSec = value;
  }
  public resetCallTimeoutSec() {
    this._callTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callTimeoutSecInput() {
    return this._callTimeoutSec;
  }

  // custom_audio_url - computed: false, optional: true, required: false
  private _customAudioUrl?: string; 
  public get customAudioUrl() {
    return this.getStringAttribute('custom_audio_url');
  }
  public set customAudioUrl(value: string) {
    this._customAudioUrl = value;
  }
  public resetCustomAudioUrl() {
    this._customAudioUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAudioUrlInput() {
    return this._customAudioUrl;
  }

  // enabled_options - computed: false, optional: true, required: false
  private _enabledOptions?: string[]; 
  public get enabledOptions() {
    return this.getListAttribute('enabled_options');
  }
  public set enabledOptions(value: string[]) {
    this._enabledOptions = value;
  }
  public resetEnabledOptions() {
    this._enabledOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledOptionsInput() {
    return this._enabledOptions;
  }

  // hold_audio_url - computed: false, optional: true, required: false
  private _holdAudioUrl?: string; 
  public get holdAudioUrl() {
    return this.getStringAttribute('hold_audio_url');
  }
  public set holdAudioUrl(value: string) {
    this._holdAudioUrl = value;
  }
  public resetHoldAudioUrl() {
    this._holdAudioUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdAudioUrlInput() {
    return this._holdAudioUrl;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // support_hours_id - computed: false, optional: true, required: false
  private _supportHoursId?: number; 
  public get supportHoursId() {
    return this.getNumberAttribute('support_hours_id');
  }
  public set supportHoursId(value: number) {
    this._supportHoursId = value;
  }
  public resetSupportHoursId() {
    this._supportHoursId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportHoursIdInput() {
    return this._supportHoursId;
  }

  // text_message - computed: false, optional: true, required: false
  private _textMessage?: string; 
  public get textMessage() {
    return this.getStringAttribute('text_message');
  }
  public set textMessage(value: string) {
    this._textMessage = value;
  }
  public resetTextMessage() {
    this._textMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textMessageInput() {
    return this._textMessage;
  }

  // var_key - computed: false, optional: true, required: false
  private _varKey?: string; 
  public get varKey() {
    return this.getStringAttribute('var_key');
  }
  public set varKey(value: string) {
    this._varKey = value;
  }
  public resetVarKey() {
    this._varKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varKeyInput() {
    return this._varKey;
  }

  // var_value - computed: false, optional: true, required: false
  private _varValue?: string; 
  public get varValue() {
    return this.getStringAttribute('var_value');
  }
  public set varValue(value: string) {
    this._varValue = value;
  }
  public resetVarValue() {
    this._varValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varValueInput() {
    return this._varValue;
  }

  // codes - computed: false, optional: true, required: false
  private _codes = new CallFlowRootNodeMetadataCodesList(this, "codes", false);
  public get codes() {
    return this._codes;
  }
  public putCodes(value: CallFlowRootNodeMetadataCodes[] | cdktf.IResolvable) {
    this._codes.internalValue = value;
  }
  public resetCodes() {
    this._codes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codesInput() {
    return this._codes.internalValue;
  }

  // enrichment - computed: false, optional: true, required: false
  private _enrichment = new CallFlowRootNodeMetadataEnrichmentOutputReference(this, "enrichment");
  public get enrichment() {
    return this._enrichment;
  }
  public putEnrichment(value: CallFlowRootNodeMetadataEnrichment) {
    this._enrichment.internalValue = value;
  }
  public resetEnrichment() {
    this._enrichment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentInput() {
    return this._enrichment.internalValue;
  }

  // gathers - computed: false, optional: true, required: false
  private _gathers = new CallFlowRootNodeMetadataGathersList(this, "gathers", false);
  public get gathers() {
    return this._gathers;
  }
  public putGathers(value: CallFlowRootNodeMetadataGathers[] | cdktf.IResolvable) {
    this._gathers.internalValue = value;
  }
  public resetGathers() {
    this._gathers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gathersInput() {
    return this._gathers.internalValue;
  }

  // intents - computed: false, optional: true, required: false
  private _intents = new CallFlowRootNodeMetadataIntentsList(this, "intents", false);
  public get intents() {
    return this._intents;
  }
  public putIntents(value: CallFlowRootNodeMetadataIntents[] | cdktf.IResolvable) {
    this._intents.internalValue = value;
  }
  public resetIntents() {
    this._intents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intentsInput() {
    return this._intents.internalValue;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new CallFlowRootNodeMetadataTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: CallFlowRootNodeMetadataTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}
export interface CallFlowRootNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#name CallFlow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#node_type CallFlow#node_type}
  */
  readonly nodeType: string;
  /**
  * branches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#branches CallFlow#branches}
  */
  readonly branches?: CallFlowRootNodeBranches[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#metadata CallFlow#metadata}
  */
  readonly metadata?: CallFlowRootNodeMetadata;
}

export function callFlowRootNodeToTerraform(struct?: CallFlowRootNodeOutputReference | CallFlowRootNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    branches: cdktf.listMapper(callFlowRootNodeBranchesToTerraform, true)(struct!.branches),
    metadata: callFlowRootNodeMetadataToTerraform(struct!.metadata),
  }
}


export function callFlowRootNodeToHclTerraform(struct?: CallFlowRootNodeOutputReference | CallFlowRootNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branches: {
      value: cdktf.listMapperHcl(callFlowRootNodeBranchesToHclTerraform, true)(struct!.branches),
      isBlock: true,
      type: "list",
      storageClassType: "CallFlowRootNodeBranchesList",
    },
    metadata: {
      value: callFlowRootNodeMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CallFlowRootNodeMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CallFlowRootNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CallFlowRootNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._branches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowRootNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._nodeType = undefined;
      this._branches.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._nodeType = value.nodeType;
      this._branches.internalValue = value.branches;
      this._metadata.internalValue = value.metadata;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // branches - computed: false, optional: true, required: false
  private _branches = new CallFlowRootNodeBranchesList(this, "branches", false);
  public get branches() {
    return this._branches;
  }
  public putBranches(value: CallFlowRootNodeBranches[] | cdktf.IResolvable) {
    this._branches.internalValue = value;
  }
  public resetBranches() {
    this._branches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new CallFlowRootNodeMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CallFlowRootNodeMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}
export interface CallFlowTeam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#id CallFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#name CallFlow#name}
  */
  readonly name?: string;
}

export function callFlowTeamToTerraform(struct?: CallFlowTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function callFlowTeamToHclTerraform(struct?: CallFlowTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class CallFlowTeamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CallFlowTeam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowTeam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class CallFlowTeamList extends cdktf.ComplexList {
  public internalValue? : CallFlowTeam[] | cdktf.IResolvable

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
  public get(index: number): CallFlowTeamOutputReference {
    return new CallFlowTeamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CallFlowTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#create CallFlow#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#delete CallFlow#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#read CallFlow#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#update CallFlow#update}
  */
  readonly update?: string;
}

export function callFlowTimeoutsToTerraform(struct?: CallFlowTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function callFlowTimeoutsToHclTerraform(struct?: CallFlowTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CallFlowTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CallFlowTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CallFlowTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow ilert_call_flow}
*/
export class CallFlow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ilert_call_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CallFlow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CallFlow to import
  * @param importFromId The id of the existing CallFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CallFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ilert_call_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/call_flow ilert_call_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CallFlowConfig
  */
  public constructor(scope: Construct, id: string, config: CallFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'ilert_call_flow',
      terraformGeneratorMetadata: {
        providerName: 'ilert',
        providerVersion: '2.14.3',
        providerVersionConstraint: '2.14.3'
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
    this._language = config.language;
    this._name = config.name;
    this._rootNode.internalValue = config.rootNode;
    this._team.internalValue = config.team;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_number - computed: true, optional: false, required: false
  private _assignedNumber = new CallFlowAssignedNumberList(this, "assigned_number", false);
  public get assignedNumber() {
    return this._assignedNumber;
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

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
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

  // root_node - computed: false, optional: false, required: true
  private _rootNode = new CallFlowRootNodeOutputReference(this, "root_node");
  public get rootNode() {
    return this._rootNode;
  }
  public putRootNode(value: CallFlowRootNode) {
    this._rootNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootNodeInput() {
    return this._rootNode.internalValue;
  }

  // team - computed: false, optional: true, required: false
  private _team = new CallFlowTeamList(this, "team", false);
  public get team() {
    return this._team;
  }
  public putTeam(value: CallFlowTeam[] | cdktf.IResolvable) {
    this._team.internalValue = value;
  }
  public resetTeam() {
    this._team.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CallFlowTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CallFlowTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      language: cdktf.stringToTerraform(this._language),
      name: cdktf.stringToTerraform(this._name),
      root_node: callFlowRootNodeToTerraform(this._rootNode.internalValue),
      team: cdktf.listMapper(callFlowTeamToTerraform, true)(this._team.internalValue),
      timeouts: callFlowTimeoutsToTerraform(this._timeouts.internalValue),
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
      language: {
        value: cdktf.stringToHclTerraform(this._language),
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
      root_node: {
        value: callFlowRootNodeToHclTerraform(this._rootNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CallFlowRootNodeList",
      },
      team: {
        value: cdktf.listMapperHcl(callFlowTeamToHclTerraform, true)(this._team.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CallFlowTeamList",
      },
      timeouts: {
        value: callFlowTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CallFlowTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
