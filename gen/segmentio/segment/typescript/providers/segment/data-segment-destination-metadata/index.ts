// https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/destination_metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSegmentDestinationMetadataAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the Destination metadata. Config API note: analogous to `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/destination_metadata#id DataSegmentDestinationMetadataA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSegmentDestinationMetadataActionsFieldsA {
}

export function dataSegmentDestinationMetadataActionsFieldsAToTerraform(struct?: DataSegmentDestinationMetadataActionsFieldsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentDestinationMetadataActionsFieldsAToHclTerraform(struct?: DataSegmentDestinationMetadataActionsFieldsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentDestinationMetadataActionsFieldsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSegmentDestinationMetadataActionsFieldsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentDestinationMetadataActionsFieldsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_null - computed: true, optional: false, required: false
  public get allowNull() {
    return this.getBooleanAttribute('allow_null');
  }

  // choices - computed: true, optional: false, required: false
  public get choices() {
    return this.getStringAttribute('choices');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // field_key - computed: true, optional: false, required: false
  public get fieldKey() {
    return this.getStringAttribute('field_key');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // multiple - computed: true, optional: false, required: false
  public get multiple() {
    return this.getBooleanAttribute('multiple');
  }

  // placeholder - computed: true, optional: false, required: false
  public get placeholder() {
    return this.getStringAttribute('placeholder');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // sort_order - computed: true, optional: false, required: false
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSegmentDestinationMetadataActionsFieldsAList extends cdktf.ComplexList {

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
  public get(index: number): DataSegmentDestinationMetadataActionsFieldsAOutputReference {
    return new DataSegmentDestinationMetadataActionsFieldsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSegmentDestinationMetadataActionsA {
  /**
  * The default value used as the trigger when connecting this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/destination_metadata#default_trigger DataSegmentDestinationMetadataA#default_trigger}
  */
  readonly defaultTrigger?: string;
}

export function dataSegmentDestinationMetadataActionsAToTerraform(struct?: DataSegmentDestinationMetadataActionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_trigger: cdktf.stringToTerraform(struct!.defaultTrigger),
  }
}


export function dataSegmentDestinationMetadataActionsAToHclTerraform(struct?: DataSegmentDestinationMetadataActionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_trigger: {
      value: cdktf.stringToHclTerraform(struct!.defaultTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSegmentDestinationMetadataActionsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSegmentDestinationMetadataActionsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTrigger = this._defaultTrigger;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentDestinationMetadataActionsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTrigger = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultTrigger = value.defaultTrigger;
    }
  }

  // default_trigger - computed: true, optional: true, required: false
  private _defaultTrigger?: string; 
  public get defaultTrigger() {
    return this.getStringAttribute('default_trigger');
  }
  public set defaultTrigger(value: string) {
    this._defaultTrigger = value;
  }
  public resetDefaultTrigger() {
    this._defaultTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTriggerInput() {
    return this._defaultTrigger;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new DataSegmentDestinationMetadataActionsFieldsAList(this, "fields", false);
  public get fields() {
    return this._fields;
  }

  // hidden - computed: true, optional: false, required: false
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }
}

export class DataSegmentDestinationMetadataActionsAList extends cdktf.ComplexList {
  public internalValue? : DataSegmentDestinationMetadataActionsA[] | cdktf.IResolvable

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
  public get(index: number): DataSegmentDestinationMetadataActionsAOutputReference {
    return new DataSegmentDestinationMetadataActionsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSegmentDestinationMetadataComponentsA {
}

export function dataSegmentDestinationMetadataComponentsAToTerraform(struct?: DataSegmentDestinationMetadataComponentsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentDestinationMetadataComponentsAToHclTerraform(struct?: DataSegmentDestinationMetadataComponentsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentDestinationMetadataComponentsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSegmentDestinationMetadataComponentsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentDestinationMetadataComponentsA | undefined) {
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSegmentDestinationMetadataComponentsAList extends cdktf.ComplexList {

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
  public get(index: number): DataSegmentDestinationMetadataComponentsAOutputReference {
    return new DataSegmentDestinationMetadataComponentsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSegmentDestinationMetadataContactsA {
}

export function dataSegmentDestinationMetadataContactsAToTerraform(struct?: DataSegmentDestinationMetadataContactsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentDestinationMetadataContactsAToHclTerraform(struct?: DataSegmentDestinationMetadataContactsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentDestinationMetadataContactsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSegmentDestinationMetadataContactsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentDestinationMetadataContactsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataSegmentDestinationMetadataContactsAList extends cdktf.ComplexList {

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
  public get(index: number): DataSegmentDestinationMetadataContactsAOutputReference {
    return new DataSegmentDestinationMetadataContactsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSegmentDestinationMetadataLogosA {
}

export function dataSegmentDestinationMetadataLogosAToTerraform(struct?: DataSegmentDestinationMetadataLogosA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentDestinationMetadataLogosAToHclTerraform(struct?: DataSegmentDestinationMetadataLogosA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentDestinationMetadataLogosAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSegmentDestinationMetadataLogosA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentDestinationMetadataLogosA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alt - computed: true, optional: false, required: false
  public get alt() {
    return this.getStringAttribute('alt');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // mark - computed: true, optional: false, required: false
  public get mark() {
    return this.getStringAttribute('mark');
  }
}
export interface DataSegmentDestinationMetadataOptionsA {
}

export function dataSegmentDestinationMetadataOptionsAToTerraform(struct?: DataSegmentDestinationMetadataOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentDestinationMetadataOptionsAToHclTerraform(struct?: DataSegmentDestinationMetadataOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentDestinationMetadataOptionsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSegmentDestinationMetadataOptionsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentDestinationMetadataOptionsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSegmentDestinationMetadataOptionsAList extends cdktf.ComplexList {

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
  public get(index: number): DataSegmentDestinationMetadataOptionsAOutputReference {
    return new DataSegmentDestinationMetadataOptionsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSegmentDestinationMetadataPresetsA {
}

export function dataSegmentDestinationMetadataPresetsAToTerraform(struct?: DataSegmentDestinationMetadataPresetsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentDestinationMetadataPresetsAToHclTerraform(struct?: DataSegmentDestinationMetadataPresetsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentDestinationMetadataPresetsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSegmentDestinationMetadataPresetsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentDestinationMetadataPresetsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_id - computed: true, optional: false, required: false
  public get actionId() {
    return this.getStringAttribute('action_id');
  }

  // fields - computed: true, optional: false, required: false
  public get fields() {
    return this.getStringAttribute('fields');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // trigger - computed: true, optional: false, required: false
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
}

export class DataSegmentDestinationMetadataPresetsAList extends cdktf.ComplexList {

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
  public get(index: number): DataSegmentDestinationMetadataPresetsAOutputReference {
    return new DataSegmentDestinationMetadataPresetsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSegmentDestinationMetadataSupportedFeaturesA {
}

export function dataSegmentDestinationMetadataSupportedFeaturesAToTerraform(struct?: DataSegmentDestinationMetadataSupportedFeaturesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentDestinationMetadataSupportedFeaturesAToHclTerraform(struct?: DataSegmentDestinationMetadataSupportedFeaturesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentDestinationMetadataSupportedFeaturesAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSegmentDestinationMetadataSupportedFeaturesA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentDestinationMetadataSupportedFeaturesA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // browser_unbundling - computed: true, optional: false, required: false
  public get browserUnbundling() {
    return this.getBooleanAttribute('browser_unbundling');
  }

  // browser_unbundling_public - computed: true, optional: false, required: false
  public get browserUnbundlingPublic() {
    return this.getBooleanAttribute('browser_unbundling_public');
  }

  // cloud_mode_instances - computed: true, optional: false, required: false
  public get cloudModeInstances() {
    return this.getStringAttribute('cloud_mode_instances');
  }

  // device_mode_instances - computed: true, optional: false, required: false
  public get deviceModeInstances() {
    return this.getStringAttribute('device_mode_instances');
  }

  // replay - computed: true, optional: false, required: false
  public get replay() {
    return this.getBooleanAttribute('replay');
  }
}
export interface DataSegmentDestinationMetadataSupportedMethodsA {
}

export function dataSegmentDestinationMetadataSupportedMethodsAToTerraform(struct?: DataSegmentDestinationMetadataSupportedMethodsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentDestinationMetadataSupportedMethodsAToHclTerraform(struct?: DataSegmentDestinationMetadataSupportedMethodsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentDestinationMetadataSupportedMethodsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSegmentDestinationMetadataSupportedMethodsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentDestinationMetadataSupportedMethodsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getBooleanAttribute('alias');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getBooleanAttribute('group');
  }

  // identify - computed: true, optional: false, required: false
  public get identify() {
    return this.getBooleanAttribute('identify');
  }

  // pageview - computed: true, optional: false, required: false
  public get pageview() {
    return this.getBooleanAttribute('pageview');
  }

  // track - computed: true, optional: false, required: false
  public get track() {
    return this.getBooleanAttribute('track');
  }
}
export interface DataSegmentDestinationMetadataSupportedPlatformsA {
}

export function dataSegmentDestinationMetadataSupportedPlatformsAToTerraform(struct?: DataSegmentDestinationMetadataSupportedPlatformsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSegmentDestinationMetadataSupportedPlatformsAToHclTerraform(struct?: DataSegmentDestinationMetadataSupportedPlatformsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSegmentDestinationMetadataSupportedPlatformsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSegmentDestinationMetadataSupportedPlatformsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSegmentDestinationMetadataSupportedPlatformsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // browser - computed: true, optional: false, required: false
  public get browser() {
    return this.getBooleanAttribute('browser');
  }

  // mobile - computed: true, optional: false, required: false
  public get mobile() {
    return this.getBooleanAttribute('mobile');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getBooleanAttribute('server');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/destination_metadata segment_destination_metadata}
*/
export class DataSegmentDestinationMetadataA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "segment_destination_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSegmentDestinationMetadataA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSegmentDestinationMetadataA to import
  * @param importFromId The id of the existing DataSegmentDestinationMetadataA that should be imported. Refer to the {@link https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/destination_metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSegmentDestinationMetadataA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "segment_destination_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/segmentio/segment/1.6.1/docs/data-sources/destination_metadata segment_destination_metadata} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSegmentDestinationMetadataAConfig
  */
  public constructor(scope: Construct, id: string, config: DataSegmentDestinationMetadataAConfig) {
    super(scope, id, {
      terraformResourceType: 'segment_destination_metadata',
      terraformGeneratorMetadata: {
        providerName: 'segment',
        providerVersion: '1.6.1',
        providerVersionConstraint: '1.6.1'
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

  // actions - computed: true, optional: false, required: false
  private _actions = new DataSegmentDestinationMetadataActionsAList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // categories - computed: true, optional: false, required: false
  public get categories() {
    return this.getListAttribute('categories');
  }

  // components - computed: true, optional: false, required: false
  private _components = new DataSegmentDestinationMetadataComponentsAList(this, "components", false);
  public get components() {
    return this._components;
  }

  // contacts - computed: true, optional: false, required: false
  private _contacts = new DataSegmentDestinationMetadataContactsAList(this, "contacts", false);
  public get contacts() {
    return this._contacts;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // logos - computed: true, optional: false, required: false
  private _logos = new DataSegmentDestinationMetadataLogosAOutputReference(this, "logos");
  public get logos() {
    return this._logos;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataSegmentDestinationMetadataOptionsAList(this, "options", false);
  public get options() {
    return this._options;
  }

  // partner_owned - computed: true, optional: false, required: false
  public get partnerOwned() {
    return this.getBooleanAttribute('partner_owned');
  }

  // presets - computed: true, optional: false, required: false
  private _presets = new DataSegmentDestinationMetadataPresetsAList(this, "presets", false);
  public get presets() {
    return this._presets;
  }

  // previous_names - computed: true, optional: false, required: false
  public get previousNames() {
    return this.getListAttribute('previous_names');
  }

  // region_endpoints - computed: true, optional: false, required: false
  public get regionEndpoints() {
    return this.getListAttribute('region_endpoints');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // supported_features - computed: true, optional: false, required: false
  private _supportedFeatures = new DataSegmentDestinationMetadataSupportedFeaturesAOutputReference(this, "supported_features");
  public get supportedFeatures() {
    return this._supportedFeatures;
  }

  // supported_methods - computed: true, optional: false, required: false
  private _supportedMethods = new DataSegmentDestinationMetadataSupportedMethodsAOutputReference(this, "supported_methods");
  public get supportedMethods() {
    return this._supportedMethods;
  }

  // supported_platforms - computed: true, optional: false, required: false
  private _supportedPlatforms = new DataSegmentDestinationMetadataSupportedPlatformsAOutputReference(this, "supported_platforms");
  public get supportedPlatforms() {
    return this._supportedPlatforms;
  }

  // supported_regions - computed: true, optional: false, required: false
  public get supportedRegions() {
    return this.getListAttribute('supported_regions');
  }

  // website - computed: true, optional: false, required: false
  public get website() {
    return this.getStringAttribute('website');
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
