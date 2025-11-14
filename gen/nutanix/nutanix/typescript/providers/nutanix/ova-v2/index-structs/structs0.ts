import * as cdktf from 'cdktf';
export interface OvaV2CreatedByAdditionalAttributesValueMapOfStrings {
}

export function ovaV2CreatedByAdditionalAttributesValueMapOfStringsToTerraform(struct?: OvaV2CreatedByAdditionalAttributesValueMapOfStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2CreatedByAdditionalAttributesValueMapOfStringsToHclTerraform(struct?: OvaV2CreatedByAdditionalAttributesValueMapOfStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2CreatedByAdditionalAttributesValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2CreatedByAdditionalAttributesValueMapOfStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2CreatedByAdditionalAttributesValueMapOfStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // map - computed: true, optional: false, required: false
  private _map = new cdktf.StringMap(this, "map");
  public get map() {
    return this._map;
  }
}

export class OvaV2CreatedByAdditionalAttributesValueMapOfStringsList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2CreatedByAdditionalAttributesValueMapOfStringsOutputReference {
    return new OvaV2CreatedByAdditionalAttributesValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2CreatedByAdditionalAttributesValue {
}

export function ovaV2CreatedByAdditionalAttributesValueToTerraform(struct?: OvaV2CreatedByAdditionalAttributesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2CreatedByAdditionalAttributesValueToHclTerraform(struct?: OvaV2CreatedByAdditionalAttributesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2CreatedByAdditionalAttributesValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2CreatedByAdditionalAttributesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2CreatedByAdditionalAttributesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean - computed: true, optional: false, required: false
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }

  // integer - computed: true, optional: false, required: false
  public get integer() {
    return this.getNumberAttribute('integer');
  }

  // integer_list - computed: true, optional: false, required: false
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }

  // map_of_strings - computed: true, optional: false, required: false
  private _mapOfStrings = new OvaV2CreatedByAdditionalAttributesValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }

  // object - computed: true, optional: false, required: false
  private _object = new cdktf.StringMap(this, "object");
  public get object() {
    return this._object;
  }

  // string - computed: true, optional: false, required: false
  public get string() {
    return this.getStringAttribute('string');
  }

  // string_list - computed: true, optional: false, required: false
  public get stringList() {
    return this.getListAttribute('string_list');
  }
}

export class OvaV2CreatedByAdditionalAttributesValueList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2CreatedByAdditionalAttributesValueOutputReference {
    return new OvaV2CreatedByAdditionalAttributesValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2CreatedByAdditionalAttributes {
}

export function ovaV2CreatedByAdditionalAttributesToTerraform(struct?: OvaV2CreatedByAdditionalAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2CreatedByAdditionalAttributesToHclTerraform(struct?: OvaV2CreatedByAdditionalAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2CreatedByAdditionalAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2CreatedByAdditionalAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2CreatedByAdditionalAttributes | undefined) {
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
  private _value = new OvaV2CreatedByAdditionalAttributesValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class OvaV2CreatedByAdditionalAttributesList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2CreatedByAdditionalAttributesOutputReference {
    return new OvaV2CreatedByAdditionalAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2CreatedByLinks {
}

export function ovaV2CreatedByLinksToTerraform(struct?: OvaV2CreatedByLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2CreatedByLinksToHclTerraform(struct?: OvaV2CreatedByLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2CreatedByLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2CreatedByLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2CreatedByLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class OvaV2CreatedByLinksList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2CreatedByLinksOutputReference {
    return new OvaV2CreatedByLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2CreatedBy {
}

export function ovaV2CreatedByToTerraform(struct?: OvaV2CreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2CreatedByToHclTerraform(struct?: OvaV2CreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2CreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2CreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2CreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_attributes - computed: true, optional: false, required: false
  private _additionalAttributes = new OvaV2CreatedByAdditionalAttributesList(this, "additional_attributes", false);
  public get additionalAttributes() {
    return this._additionalAttributes;
  }

  // creation_type - computed: true, optional: false, required: false
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // email_id - computed: true, optional: false, required: false
  public get emailId() {
    return this.getStringAttribute('email_id');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // idp_id - computed: true, optional: false, required: false
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }

  // is_force_reset_password_enabled - computed: true, optional: false, required: false
  public get isForceResetPasswordEnabled() {
    return this.getBooleanAttribute('is_force_reset_password_enabled');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // links - computed: true, optional: false, required: false
  private _links = new OvaV2CreatedByLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // middle_initial - computed: true, optional: false, required: false
  public get middleInitial() {
    return this.getStringAttribute('middle_initial');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // user_type - computed: true, optional: false, required: false
  public get userType() {
    return this.getStringAttribute('user_type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class OvaV2CreatedByList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2CreatedByOutputReference {
    return new OvaV2CreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2Links {
}

export function ovaV2LinksToTerraform(struct?: OvaV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2LinksToHclTerraform(struct?: OvaV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2Links | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class OvaV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2LinksOutputReference {
    return new OvaV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigApcConfigCpuModel {
}

export function ovaV2VmConfigApcConfigCpuModelToTerraform(struct?: OvaV2VmConfigApcConfigCpuModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigApcConfigCpuModelToHclTerraform(struct?: OvaV2VmConfigApcConfigCpuModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigApcConfigCpuModelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigApcConfigCpuModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigApcConfigCpuModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class OvaV2VmConfigApcConfigCpuModelList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigApcConfigCpuModelOutputReference {
    return new OvaV2VmConfigApcConfigCpuModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigApcConfig {
}

export function ovaV2VmConfigApcConfigToTerraform(struct?: OvaV2VmConfigApcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigApcConfigToHclTerraform(struct?: OvaV2VmConfigApcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigApcConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigApcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigApcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_model - computed: true, optional: false, required: false
  private _cpuModel = new OvaV2VmConfigApcConfigCpuModelList(this, "cpu_model", false);
  public get cpuModel() {
    return this._cpuModel;
  }

  // is_apc_enabled - computed: true, optional: false, required: false
  public get isApcEnabled() {
    return this.getBooleanAttribute('is_apc_enabled');
  }
}

export class OvaV2VmConfigApcConfigList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigApcConfigOutputReference {
    return new OvaV2VmConfigApcConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigAvailabilityZone {
}

export function ovaV2VmConfigAvailabilityZoneToTerraform(struct?: OvaV2VmConfigAvailabilityZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigAvailabilityZoneToHclTerraform(struct?: OvaV2VmConfigAvailabilityZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigAvailabilityZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigAvailabilityZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigAvailabilityZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class OvaV2VmConfigAvailabilityZoneList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigAvailabilityZoneOutputReference {
    return new OvaV2VmConfigAvailabilityZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress {
}

export function ovaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressToTerraform(struct?: OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressToHclTerraform(struct?: OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus_type - computed: true, optional: false, required: false
  public get busType() {
    return this.getStringAttribute('bus_type');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }
}

export class OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressOutputReference {
    return new OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDisk {
}

export function ovaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskToTerraform(struct?: OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskToHclTerraform(struct?: OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
}

export class OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskOutputReference {
    return new OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNic {
}

export function ovaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNicToTerraform(struct?: OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNicToHclTerraform(struct?: OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
}

export class OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNicList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNicOutputReference {
    return new OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigLegacyBootBootDevice {
}

export function ovaV2VmConfigBootConfigLegacyBootBootDeviceToTerraform(struct?: OvaV2VmConfigBootConfigLegacyBootBootDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigLegacyBootBootDeviceToHclTerraform(struct?: OvaV2VmConfigBootConfigLegacyBootBootDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigLegacyBootBootDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigLegacyBootBootDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigLegacyBootBootDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_device_disk - computed: true, optional: false, required: false
  private _bootDeviceDisk = new OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskList(this, "boot_device_disk", false);
  public get bootDeviceDisk() {
    return this._bootDeviceDisk;
  }

  // boot_device_nic - computed: true, optional: false, required: false
  private _bootDeviceNic = new OvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNicList(this, "boot_device_nic", false);
  public get bootDeviceNic() {
    return this._bootDeviceNic;
  }
}

export class OvaV2VmConfigBootConfigLegacyBootBootDeviceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigLegacyBootBootDeviceOutputReference {
    return new OvaV2VmConfigBootConfigLegacyBootBootDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigLegacyBoot {
}

export function ovaV2VmConfigBootConfigLegacyBootToTerraform(struct?: OvaV2VmConfigBootConfigLegacyBoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigLegacyBootToHclTerraform(struct?: OvaV2VmConfigBootConfigLegacyBoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigLegacyBootOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigLegacyBoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigLegacyBoot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_device - computed: true, optional: false, required: false
  private _bootDevice = new OvaV2VmConfigBootConfigLegacyBootBootDeviceList(this, "boot_device", false);
  public get bootDevice() {
    return this._bootDevice;
  }

  // boot_order - computed: true, optional: false, required: false
  public get bootOrder() {
    return this.getListAttribute('boot_order');
  }
}

export class OvaV2VmConfigBootConfigLegacyBootList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigLegacyBootOutputReference {
    return new OvaV2VmConfigBootConfigLegacyBootOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress {
}

export function ovaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressToTerraform(struct?: OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressToHclTerraform(struct?: OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus_type - computed: true, optional: false, required: false
  public get busType() {
    return this.getStringAttribute('bus_type');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }
}

export class OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressOutputReference {
    return new OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDisk {
}

export function ovaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskToTerraform(struct?: OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskToHclTerraform(struct?: OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
}

export class OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskOutputReference {
    return new OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNic {
}

export function ovaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNicToTerraform(struct?: OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNicToHclTerraform(struct?: OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
}

export class OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNicList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNicOutputReference {
    return new OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigUefiBootBootDevice {
}

export function ovaV2VmConfigBootConfigUefiBootBootDeviceToTerraform(struct?: OvaV2VmConfigBootConfigUefiBootBootDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigUefiBootBootDeviceToHclTerraform(struct?: OvaV2VmConfigBootConfigUefiBootBootDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigUefiBootBootDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigUefiBootBootDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigUefiBootBootDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_device_disk - computed: true, optional: false, required: false
  private _bootDeviceDisk = new OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskList(this, "boot_device_disk", false);
  public get bootDeviceDisk() {
    return this._bootDeviceDisk;
  }

  // boot_device_nic - computed: true, optional: false, required: false
  private _bootDeviceNic = new OvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNicList(this, "boot_device_nic", false);
  public get bootDeviceNic() {
    return this._bootDeviceNic;
  }
}

export class OvaV2VmConfigBootConfigUefiBootBootDeviceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigUefiBootBootDeviceOutputReference {
    return new OvaV2VmConfigBootConfigUefiBootBootDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference {
}

export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceToTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceToHclTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_ext_id - computed: true, optional: false, required: false
  public get imageExtId() {
    return this.getStringAttribute('image_ext_id');
  }
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceOutputReference {
    return new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress {
}

export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressToTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus_type - computed: true, optional: false, required: false
  public get busType() {
    return this.getStringAttribute('bus_type');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference {
    return new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference {
}

export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceToTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference {
    return new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference {
}

export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceToTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceToHclTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // vm_reference - computed: true, optional: false, required: false
  private _vmReference = new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceOutputReference {
    return new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference {
}

export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceToTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceToHclTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_reference - computed: true, optional: false, required: false
  private _imageReference = new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceList(this, "image_reference", false);
  public get imageReference() {
    return this._imageReference;
  }

  // vm_disk_reference - computed: true, optional: false, required: false
  private _vmDiskReference = new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceList(this, "vm_disk_reference", false);
  public get vmDiskReference() {
    return this._vmDiskReference;
  }
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceOutputReference {
    return new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource {
}

export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceToTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceToHclTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference - computed: true, optional: false, required: false
  private _reference = new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceOutputReference {
    return new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig {
}

export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigToTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigToHclTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_flash_mode_enabled - computed: true, optional: false, required: false
  public get isFlashModeEnabled() {
    return this.getBooleanAttribute('is_flash_mode_enabled');
  }
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigOutputReference {
    return new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer {
}

export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerToTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerToHclTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerOutputReference {
    return new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfo {
}

export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoToTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoToHclTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source - computed: true, optional: false, required: false
  private _dataSource = new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // disk_size_bytes - computed: true, optional: false, required: false
  public get diskSizeBytes() {
    return this.getNumberAttribute('disk_size_bytes');
  }

  // is_migration_in_progress - computed: true, optional: false, required: false
  public get isMigrationInProgress() {
    return this.getBooleanAttribute('is_migration_in_progress');
  }

  // storage_config - computed: true, optional: false, required: false
  private _storageConfig = new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }

  // storage_container - computed: true, optional: false, required: false
  private _storageContainer = new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerList(this, "storage_container", false);
  public get storageContainer() {
    return this._storageContainer;
  }
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoOutputReference {
    return new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigUefiBootNvramDevice {
}

export function ovaV2VmConfigBootConfigUefiBootNvramDeviceToTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigUefiBootNvramDeviceToHclTerraform(struct?: OvaV2VmConfigBootConfigUefiBootNvramDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigUefiBootNvramDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigUefiBootNvramDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backing_storage_info - computed: true, optional: false, required: false
  private _backingStorageInfo = new OvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoList(this, "backing_storage_info", false);
  public get backingStorageInfo() {
    return this._backingStorageInfo;
  }
}

export class OvaV2VmConfigBootConfigUefiBootNvramDeviceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigUefiBootNvramDeviceOutputReference {
    return new OvaV2VmConfigBootConfigUefiBootNvramDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfigUefiBoot {
}

export function ovaV2VmConfigBootConfigUefiBootToTerraform(struct?: OvaV2VmConfigBootConfigUefiBoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigUefiBootToHclTerraform(struct?: OvaV2VmConfigBootConfigUefiBoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigUefiBootOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfigUefiBoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfigUefiBoot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_device - computed: true, optional: false, required: false
  private _bootDevice = new OvaV2VmConfigBootConfigUefiBootBootDeviceList(this, "boot_device", false);
  public get bootDevice() {
    return this._bootDevice;
  }

  // boot_order - computed: true, optional: false, required: false
  public get bootOrder() {
    return this.getListAttribute('boot_order');
  }

  // is_secure_boot_enabled - computed: true, optional: false, required: false
  public get isSecureBootEnabled() {
    return this.getBooleanAttribute('is_secure_boot_enabled');
  }

  // nvram_device - computed: true, optional: false, required: false
  private _nvramDevice = new OvaV2VmConfigBootConfigUefiBootNvramDeviceList(this, "nvram_device", false);
  public get nvramDevice() {
    return this._nvramDevice;
  }
}

export class OvaV2VmConfigBootConfigUefiBootList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigUefiBootOutputReference {
    return new OvaV2VmConfigBootConfigUefiBootOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigBootConfig {
}

export function ovaV2VmConfigBootConfigToTerraform(struct?: OvaV2VmConfigBootConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigBootConfigToHclTerraform(struct?: OvaV2VmConfigBootConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigBootConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigBootConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigBootConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // legacy_boot - computed: true, optional: false, required: false
  private _legacyBoot = new OvaV2VmConfigBootConfigLegacyBootList(this, "legacy_boot", false);
  public get legacyBoot() {
    return this._legacyBoot;
  }

  // uefi_boot - computed: true, optional: false, required: false
  private _uefiBoot = new OvaV2VmConfigBootConfigUefiBootList(this, "uefi_boot", false);
  public get uefiBoot() {
    return this._uefiBoot;
  }
}

export class OvaV2VmConfigBootConfigList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigBootConfigOutputReference {
    return new OvaV2VmConfigBootConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigCategories {
}

export function ovaV2VmConfigCategoriesToTerraform(struct?: OvaV2VmConfigCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigCategoriesToHclTerraform(struct?: OvaV2VmConfigCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigCategories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class OvaV2VmConfigCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigCategoriesOutputReference {
    return new OvaV2VmConfigCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReference {
}

export function ovaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReferenceToTerraform(struct?: OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReferenceToHclTerraform(struct?: OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_ext_id - computed: true, optional: false, required: false
  public get imageExtId() {
    return this.getStringAttribute('image_ext_id');
  }
}

export class OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReferenceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReferenceOutputReference {
    return new OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress {
}

export function ovaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToTerraform(struct?: OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform(struct?: OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus_type - computed: true, optional: false, required: false
  public get busType() {
    return this.getStringAttribute('bus_type');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }
}

export class OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference {
    return new OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference {
}

export function ovaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToTerraform(struct?: OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform(struct?: OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference {
    return new OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReference {
}

export function ovaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceToTerraform(struct?: OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceToHclTerraform(struct?: OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // vm_reference - computed: true, optional: false, required: false
  private _vmReference = new OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
}

export class OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceOutputReference {
    return new OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigCdRomsBackingInfoDataSourceReference {
}

export function ovaV2VmConfigCdRomsBackingInfoDataSourceReferenceToTerraform(struct?: OvaV2VmConfigCdRomsBackingInfoDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigCdRomsBackingInfoDataSourceReferenceToHclTerraform(struct?: OvaV2VmConfigCdRomsBackingInfoDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigCdRomsBackingInfoDataSourceReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigCdRomsBackingInfoDataSourceReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_reference - computed: true, optional: false, required: false
  private _imageReference = new OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReferenceList(this, "image_reference", false);
  public get imageReference() {
    return this._imageReference;
  }

  // vm_disk_reference - computed: true, optional: false, required: false
  private _vmDiskReference = new OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceList(this, "vm_disk_reference", false);
  public get vmDiskReference() {
    return this._vmDiskReference;
  }
}

export class OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceOutputReference {
    return new OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigCdRomsBackingInfoDataSource {
}

export function ovaV2VmConfigCdRomsBackingInfoDataSourceToTerraform(struct?: OvaV2VmConfigCdRomsBackingInfoDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigCdRomsBackingInfoDataSourceToHclTerraform(struct?: OvaV2VmConfigCdRomsBackingInfoDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigCdRomsBackingInfoDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigCdRomsBackingInfoDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigCdRomsBackingInfoDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference - computed: true, optional: false, required: false
  private _reference = new OvaV2VmConfigCdRomsBackingInfoDataSourceReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
}

export class OvaV2VmConfigCdRomsBackingInfoDataSourceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigCdRomsBackingInfoDataSourceOutputReference {
    return new OvaV2VmConfigCdRomsBackingInfoDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigCdRomsBackingInfoStorageConfig {
}

export function ovaV2VmConfigCdRomsBackingInfoStorageConfigToTerraform(struct?: OvaV2VmConfigCdRomsBackingInfoStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigCdRomsBackingInfoStorageConfigToHclTerraform(struct?: OvaV2VmConfigCdRomsBackingInfoStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigCdRomsBackingInfoStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigCdRomsBackingInfoStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigCdRomsBackingInfoStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_flash_mode_enabled - computed: true, optional: false, required: false
  public get isFlashModeEnabled() {
    return this.getBooleanAttribute('is_flash_mode_enabled');
  }
}

export class OvaV2VmConfigCdRomsBackingInfoStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigCdRomsBackingInfoStorageConfigOutputReference {
    return new OvaV2VmConfigCdRomsBackingInfoStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigCdRomsBackingInfoStorageContainer {
}

export function ovaV2VmConfigCdRomsBackingInfoStorageContainerToTerraform(struct?: OvaV2VmConfigCdRomsBackingInfoStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigCdRomsBackingInfoStorageContainerToHclTerraform(struct?: OvaV2VmConfigCdRomsBackingInfoStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigCdRomsBackingInfoStorageContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigCdRomsBackingInfoStorageContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigCdRomsBackingInfoStorageContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class OvaV2VmConfigCdRomsBackingInfoStorageContainerList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigCdRomsBackingInfoStorageContainerOutputReference {
    return new OvaV2VmConfigCdRomsBackingInfoStorageContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigCdRomsBackingInfo {
}

export function ovaV2VmConfigCdRomsBackingInfoToTerraform(struct?: OvaV2VmConfigCdRomsBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigCdRomsBackingInfoToHclTerraform(struct?: OvaV2VmConfigCdRomsBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigCdRomsBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigCdRomsBackingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigCdRomsBackingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source - computed: true, optional: false, required: false
  private _dataSource = new OvaV2VmConfigCdRomsBackingInfoDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // disk_size_bytes - computed: true, optional: false, required: false
  public get diskSizeBytes() {
    return this.getNumberAttribute('disk_size_bytes');
  }

  // is_migration_in_progress - computed: true, optional: false, required: false
  public get isMigrationInProgress() {
    return this.getBooleanAttribute('is_migration_in_progress');
  }

  // storage_config - computed: true, optional: false, required: false
  private _storageConfig = new OvaV2VmConfigCdRomsBackingInfoStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }

  // storage_container - computed: true, optional: false, required: false
  private _storageContainer = new OvaV2VmConfigCdRomsBackingInfoStorageContainerList(this, "storage_container", false);
  public get storageContainer() {
    return this._storageContainer;
  }
}

export class OvaV2VmConfigCdRomsBackingInfoList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigCdRomsBackingInfoOutputReference {
    return new OvaV2VmConfigCdRomsBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigCdRomsDiskAddress {
}

export function ovaV2VmConfigCdRomsDiskAddressToTerraform(struct?: OvaV2VmConfigCdRomsDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigCdRomsDiskAddressToHclTerraform(struct?: OvaV2VmConfigCdRomsDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigCdRomsDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigCdRomsDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigCdRomsDiskAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus_type - computed: true, optional: false, required: false
  public get busType() {
    return this.getStringAttribute('bus_type');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }
}

export class OvaV2VmConfigCdRomsDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigCdRomsDiskAddressOutputReference {
    return new OvaV2VmConfigCdRomsDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigCdRoms {
}

export function ovaV2VmConfigCdRomsToTerraform(struct?: OvaV2VmConfigCdRoms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigCdRomsToHclTerraform(struct?: OvaV2VmConfigCdRoms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigCdRomsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigCdRoms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigCdRoms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backing_info - computed: true, optional: false, required: false
  private _backingInfo = new OvaV2VmConfigCdRomsBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new OvaV2VmConfigCdRomsDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // iso_type - computed: true, optional: false, required: false
  public get isoType() {
    return this.getStringAttribute('iso_type');
  }
}

export class OvaV2VmConfigCdRomsList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigCdRomsOutputReference {
    return new OvaV2VmConfigCdRomsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigCluster {
}

export function ovaV2VmConfigClusterToTerraform(struct?: OvaV2VmConfigCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigClusterToHclTerraform(struct?: OvaV2VmConfigCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class OvaV2VmConfigClusterList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigClusterOutputReference {
    return new OvaV2VmConfigClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReference {
}

export function ovaV2VmConfigDisksBackingInfoAdfsVolumeGroupReferenceToTerraform(struct?: OvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigDisksBackingInfoAdfsVolumeGroupReferenceToHclTerraform(struct?: OvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // volume_group_ext_id - computed: true, optional: false, required: false
  public get volumeGroupExtId() {
    return this.getStringAttribute('volume_group_ext_id');
  }
}

export class OvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReferenceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReferenceOutputReference {
    return new OvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReference {
}

export function ovaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReferenceToTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReferenceToHclTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_ext_id - computed: true, optional: false, required: false
  public get imageExtId() {
    return this.getStringAttribute('image_ext_id');
  }
}

export class OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReferenceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReferenceOutputReference {
    return new OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress {
}

export function ovaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressToTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus_type - computed: true, optional: false, required: false
  public get busType() {
    return this.getStringAttribute('bus_type');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }
}

export class OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressOutputReference {
    return new OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference {
}

export function ovaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceToTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceOutputReference {
    return new OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference {
}

export function ovaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceToTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceToHclTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // vm_reference - computed: true, optional: false, required: false
  private _vmReference = new OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
}

export class OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceOutputReference {
    return new OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReference {
}

export function ovaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceToTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceToHclTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_reference - computed: true, optional: false, required: false
  private _imageReference = new OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReferenceList(this, "image_reference", false);
  public get imageReference() {
    return this._imageReference;
  }

  // vm_disk_reference - computed: true, optional: false, required: false
  private _vmDiskReference = new OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceList(this, "vm_disk_reference", false);
  public get vmDiskReference() {
    return this._vmDiskReference;
  }
}

export class OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceOutputReference {
    return new OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigDisksBackingInfoVmDiskDataSource {
}

export function ovaV2VmConfigDisksBackingInfoVmDiskDataSourceToTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDiskDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigDisksBackingInfoVmDiskDataSourceToHclTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDiskDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigDisksBackingInfoVmDiskDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigDisksBackingInfoVmDiskDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigDisksBackingInfoVmDiskDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference - computed: true, optional: false, required: false
  private _reference = new OvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
}

export class OvaV2VmConfigDisksBackingInfoVmDiskDataSourceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigDisksBackingInfoVmDiskDataSourceOutputReference {
    return new OvaV2VmConfigDisksBackingInfoVmDiskDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigDisksBackingInfoVmDiskStorageConfig {
}

export function ovaV2VmConfigDisksBackingInfoVmDiskStorageConfigToTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDiskStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigDisksBackingInfoVmDiskStorageConfigToHclTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDiskStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigDisksBackingInfoVmDiskStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigDisksBackingInfoVmDiskStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigDisksBackingInfoVmDiskStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_flash_mode_enabled - computed: true, optional: false, required: false
  public get isFlashModeEnabled() {
    return this.getBooleanAttribute('is_flash_mode_enabled');
  }
}

export class OvaV2VmConfigDisksBackingInfoVmDiskStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigDisksBackingInfoVmDiskStorageConfigOutputReference {
    return new OvaV2VmConfigDisksBackingInfoVmDiskStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigDisksBackingInfoVmDiskStorageContainer {
}

export function ovaV2VmConfigDisksBackingInfoVmDiskStorageContainerToTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDiskStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigDisksBackingInfoVmDiskStorageContainerToHclTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDiskStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigDisksBackingInfoVmDiskStorageContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigDisksBackingInfoVmDiskStorageContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigDisksBackingInfoVmDiskStorageContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class OvaV2VmConfigDisksBackingInfoVmDiskStorageContainerList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigDisksBackingInfoVmDiskStorageContainerOutputReference {
    return new OvaV2VmConfigDisksBackingInfoVmDiskStorageContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigDisksBackingInfoVmDisk {
}

export function ovaV2VmConfigDisksBackingInfoVmDiskToTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigDisksBackingInfoVmDiskToHclTerraform(struct?: OvaV2VmConfigDisksBackingInfoVmDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigDisksBackingInfoVmDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigDisksBackingInfoVmDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigDisksBackingInfoVmDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source - computed: true, optional: false, required: false
  private _dataSource = new OvaV2VmConfigDisksBackingInfoVmDiskDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // disk_size_bytes - computed: true, optional: false, required: false
  public get diskSizeBytes() {
    return this.getNumberAttribute('disk_size_bytes');
  }

  // is_migration_in_progress - computed: true, optional: false, required: false
  public get isMigrationInProgress() {
    return this.getBooleanAttribute('is_migration_in_progress');
  }

  // storage_config - computed: true, optional: false, required: false
  private _storageConfig = new OvaV2VmConfigDisksBackingInfoVmDiskStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }

  // storage_container - computed: true, optional: false, required: false
  private _storageContainer = new OvaV2VmConfigDisksBackingInfoVmDiskStorageContainerList(this, "storage_container", false);
  public get storageContainer() {
    return this._storageContainer;
  }
}

export class OvaV2VmConfigDisksBackingInfoVmDiskList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigDisksBackingInfoVmDiskOutputReference {
    return new OvaV2VmConfigDisksBackingInfoVmDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigDisksBackingInfo {
}

export function ovaV2VmConfigDisksBackingInfoToTerraform(struct?: OvaV2VmConfigDisksBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigDisksBackingInfoToHclTerraform(struct?: OvaV2VmConfigDisksBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigDisksBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigDisksBackingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigDisksBackingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adfs_volume_group_reference - computed: true, optional: false, required: false
  private _adfsVolumeGroupReference = new OvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReferenceList(this, "adfs_volume_group_reference", false);
  public get adfsVolumeGroupReference() {
    return this._adfsVolumeGroupReference;
  }

  // vm_disk - computed: true, optional: false, required: false
  private _vmDisk = new OvaV2VmConfigDisksBackingInfoVmDiskList(this, "vm_disk", false);
  public get vmDisk() {
    return this._vmDisk;
  }
}

export class OvaV2VmConfigDisksBackingInfoList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigDisksBackingInfoOutputReference {
    return new OvaV2VmConfigDisksBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigDisksDiskAddress {
}

export function ovaV2VmConfigDisksDiskAddressToTerraform(struct?: OvaV2VmConfigDisksDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigDisksDiskAddressToHclTerraform(struct?: OvaV2VmConfigDisksDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigDisksDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigDisksDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigDisksDiskAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus_type - computed: true, optional: false, required: false
  public get busType() {
    return this.getStringAttribute('bus_type');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }
}

export class OvaV2VmConfigDisksDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigDisksDiskAddressOutputReference {
    return new OvaV2VmConfigDisksDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigDisks {
}

export function ovaV2VmConfigDisksToTerraform(struct?: OvaV2VmConfigDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigDisksToHclTerraform(struct?: OvaV2VmConfigDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backing_info - computed: true, optional: false, required: false
  private _backingInfo = new OvaV2VmConfigDisksBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new OvaV2VmConfigDisksDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class OvaV2VmConfigDisksList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigDisksOutputReference {
    return new OvaV2VmConfigDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGpusLinks {
}

export function ovaV2VmConfigGpusLinksToTerraform(struct?: OvaV2VmConfigGpusLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGpusLinksToHclTerraform(struct?: OvaV2VmConfigGpusLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGpusLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGpusLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGpusLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class OvaV2VmConfigGpusLinksList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGpusLinksOutputReference {
    return new OvaV2VmConfigGpusLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGpusPciAddress {
}

export function ovaV2VmConfigGpusPciAddressToTerraform(struct?: OvaV2VmConfigGpusPciAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGpusPciAddressToHclTerraform(struct?: OvaV2VmConfigGpusPciAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGpusPciAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGpusPciAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGpusPciAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bus - computed: true, optional: false, required: false
  public get bus() {
    return this.getNumberAttribute('bus');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getNumberAttribute('device');
  }

  // func - computed: true, optional: false, required: false
  public get func() {
    return this.getNumberAttribute('func');
  }

  // segment - computed: true, optional: false, required: false
  public get segment() {
    return this.getNumberAttribute('segment');
  }
}

export class OvaV2VmConfigGpusPciAddressList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGpusPciAddressOutputReference {
    return new OvaV2VmConfigGpusPciAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGpus {
}

export function ovaV2VmConfigGpusToTerraform(struct?: OvaV2VmConfigGpus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGpusToHclTerraform(struct?: OvaV2VmConfigGpus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGpusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGpus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGpus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // fraction - computed: true, optional: false, required: false
  public get fraction() {
    return this.getNumberAttribute('fraction');
  }

  // frame_buffer_size_bytes - computed: true, optional: false, required: false
  public get frameBufferSizeBytes() {
    return this.getNumberAttribute('frame_buffer_size_bytes');
  }

  // guest_driver_version - computed: true, optional: false, required: false
  public get guestDriverVersion() {
    return this.getStringAttribute('guest_driver_version');
  }

  // links - computed: true, optional: false, required: false
  private _links = new OvaV2VmConfigGpusLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_virtual_display_heads - computed: true, optional: false, required: false
  public get numVirtualDisplayHeads() {
    return this.getNumberAttribute('num_virtual_display_heads');
  }

  // pci_address - computed: true, optional: false, required: false
  private _pciAddress = new OvaV2VmConfigGpusPciAddressList(this, "pci_address", false);
  public get pciAddress() {
    return this._pciAddress;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
}

export class OvaV2VmConfigGpusList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGpusOutputReference {
    return new OvaV2VmConfigGpusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings {
}

export function ovaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // map - computed: true, optional: false, required: false
  private _map = new cdktf.StringMap(this, "map");
  public get map() {
    return this._map;
  }
}

export class OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference {
    return new OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue {
}

export function ovaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToHclTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean - computed: true, optional: false, required: false
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }

  // integer - computed: true, optional: false, required: false
  public get integer() {
    return this.getNumberAttribute('integer');
  }

  // integer_list - computed: true, optional: false, required: false
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }

  // map_of_strings - computed: true, optional: false, required: false
  private _mapOfStrings = new OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }

  // object - computed: true, optional: false, required: false
  private _object = new cdktf.StringMap(this, "object");
  public get object() {
    return this._object;
  }

  // string - computed: true, optional: false, required: false
  public get string() {
    return this.getStringAttribute('string');
  }

  // string_list - computed: true, optional: false, required: false
  public get stringList() {
    return this.getListAttribute('string_list');
  }
}

export class OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference {
    return new OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs {
}

export function ovaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToHclTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | undefined) {
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
  private _value = new OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference {
    return new OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues {
}

export function ovaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToHclTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_value_pairs - computed: true, optional: false, required: false
  private _keyValuePairs = new OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
}

export class OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference {
    return new OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData {
}

export function ovaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataToTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataToHclTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference {
    return new OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScript {
}

export function ovaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptToTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptToHclTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_key_values - computed: true, optional: false, required: false
  private _customKeyValues = new OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList(this, "custom_key_values", false);
  public get customKeyValues() {
    return this._customKeyValues;
  }

  // user_data - computed: true, optional: false, required: false
  private _userData = new OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataList(this, "user_data", false);
  public get userData() {
    return this._userData;
  }
}

export class OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptOutputReference {
    return new OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGuestCustomizationConfigCloudInit {
}

export function ovaV2VmConfigGuestCustomizationConfigCloudInitToTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigCloudInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGuestCustomizationConfigCloudInitToHclTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigCloudInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGuestCustomizationConfigCloudInitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGuestCustomizationConfigCloudInit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGuestCustomizationConfigCloudInit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_init_script - computed: true, optional: false, required: false
  private _cloudInitScript = new OvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptList(this, "cloud_init_script", false);
  public get cloudInitScript() {
    return this._cloudInitScript;
  }

  // datasource_type - computed: true, optional: false, required: false
  public get datasourceType() {
    return this.getStringAttribute('datasource_type');
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
}

export class OvaV2VmConfigGuestCustomizationConfigCloudInitList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGuestCustomizationConfigCloudInitOutputReference {
    return new OvaV2VmConfigGuestCustomizationConfigCloudInitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings {
}

export function ovaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // map - computed: true, optional: false, required: false
  private _map = new cdktf.StringMap(this, "map");
  public get map() {
    return this._map;
  }
}

export class OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference {
    return new OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue {
}

export function ovaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToHclTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean - computed: true, optional: false, required: false
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }

  // integer - computed: true, optional: false, required: false
  public get integer() {
    return this.getNumberAttribute('integer');
  }

  // integer_list - computed: true, optional: false, required: false
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }

  // map_of_strings - computed: true, optional: false, required: false
  private _mapOfStrings = new OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }

  // object - computed: true, optional: false, required: false
  private _object = new cdktf.StringMap(this, "object");
  public get object() {
    return this._object;
  }

  // string - computed: true, optional: false, required: false
  public get string() {
    return this.getStringAttribute('string');
  }

  // string_list - computed: true, optional: false, required: false
  public get stringList() {
    return this.getListAttribute('string_list');
  }
}

export class OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference {
    return new OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs {
}

export function ovaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToHclTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | undefined) {
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
  private _value = new OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference {
    return new OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues {
}

export function ovaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToHclTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_value_pairs - computed: true, optional: false, required: false
  private _keyValuePairs = new OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
}

export class OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference {
    return new OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml {
}

export function ovaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToHclTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference {
    return new OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScript {
}

export function ovaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptToTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptToHclTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_key_values - computed: true, optional: false, required: false
  private _customKeyValues = new OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList(this, "custom_key_values", false);
  public get customKeyValues() {
    return this._customKeyValues;
  }

  // unattend_xml - computed: true, optional: false, required: false
  private _unattendXml = new OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlList(this, "unattend_xml", false);
  public get unattendXml() {
    return this._unattendXml;
  }
}

export class OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptOutputReference {
    return new OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGuestCustomizationConfigSysprep {
}

export function ovaV2VmConfigGuestCustomizationConfigSysprepToTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigSysprep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGuestCustomizationConfigSysprepToHclTerraform(struct?: OvaV2VmConfigGuestCustomizationConfigSysprep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGuestCustomizationConfigSysprepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGuestCustomizationConfigSysprep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGuestCustomizationConfigSysprep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // install_type - computed: true, optional: false, required: false
  public get installType() {
    return this.getStringAttribute('install_type');
  }

  // sysprep_script - computed: true, optional: false, required: false
  private _sysprepScript = new OvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptList(this, "sysprep_script", false);
  public get sysprepScript() {
    return this._sysprepScript;
  }
}

export class OvaV2VmConfigGuestCustomizationConfigSysprepList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGuestCustomizationConfigSysprepOutputReference {
    return new OvaV2VmConfigGuestCustomizationConfigSysprepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGuestCustomizationConfig {
}

export function ovaV2VmConfigGuestCustomizationConfigToTerraform(struct?: OvaV2VmConfigGuestCustomizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGuestCustomizationConfigToHclTerraform(struct?: OvaV2VmConfigGuestCustomizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGuestCustomizationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGuestCustomizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGuestCustomizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_init - computed: true, optional: false, required: false
  private _cloudInit = new OvaV2VmConfigGuestCustomizationConfigCloudInitList(this, "cloud_init", false);
  public get cloudInit() {
    return this._cloudInit;
  }

  // sysprep - computed: true, optional: false, required: false
  private _sysprep = new OvaV2VmConfigGuestCustomizationConfigSysprepList(this, "sysprep", false);
  public get sysprep() {
    return this._sysprep;
  }
}

export class OvaV2VmConfigGuestCustomizationConfigList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGuestCustomizationConfigOutputReference {
    return new OvaV2VmConfigGuestCustomizationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGuestCustomization {
}

export function ovaV2VmConfigGuestCustomizationToTerraform(struct?: OvaV2VmConfigGuestCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGuestCustomizationToHclTerraform(struct?: OvaV2VmConfigGuestCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGuestCustomizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGuestCustomization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGuestCustomization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new OvaV2VmConfigGuestCustomizationConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
}

export class OvaV2VmConfigGuestCustomizationList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGuestCustomizationOutputReference {
    return new OvaV2VmConfigGuestCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigGuestTools {
}

export function ovaV2VmConfigGuestToolsToTerraform(struct?: OvaV2VmConfigGuestTools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigGuestToolsToHclTerraform(struct?: OvaV2VmConfigGuestTools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigGuestToolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigGuestTools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigGuestTools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_version - computed: true, optional: false, required: false
  public get availableVersion() {
    return this.getStringAttribute('available_version');
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }

  // guest_os_version - computed: true, optional: false, required: false
  public get guestOsVersion() {
    return this.getStringAttribute('guest_os_version');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_installed - computed: true, optional: false, required: false
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }

  // is_iso_inserted - computed: true, optional: false, required: false
  public get isIsoInserted() {
    return this.getBooleanAttribute('is_iso_inserted');
  }

  // is_reachable - computed: true, optional: false, required: false
  public get isReachable() {
    return this.getBooleanAttribute('is_reachable');
  }

  // is_vm_mobility_drivers_installed - computed: true, optional: false, required: false
  public get isVmMobilityDriversInstalled() {
    return this.getBooleanAttribute('is_vm_mobility_drivers_installed');
  }

  // is_vss_snapshot_capable - computed: true, optional: false, required: false
  public get isVssSnapshotCapable() {
    return this.getBooleanAttribute('is_vss_snapshot_capable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class OvaV2VmConfigGuestToolsList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigGuestToolsOutputReference {
    return new OvaV2VmConfigGuestToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigHost {
}

export function ovaV2VmConfigHostToTerraform(struct?: OvaV2VmConfigHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigHostToHclTerraform(struct?: OvaV2VmConfigHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class OvaV2VmConfigHostList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigHostOutputReference {
    return new OvaV2VmConfigHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigNicsBackingInfo {
}

export function ovaV2VmConfigNicsBackingInfoToTerraform(struct?: OvaV2VmConfigNicsBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigNicsBackingInfoToHclTerraform(struct?: OvaV2VmConfigNicsBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigNicsBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigNicsBackingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigNicsBackingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_connected - computed: true, optional: false, required: false
  public get isConnected() {
    return this.getBooleanAttribute('is_connected');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // num_queues - computed: true, optional: false, required: false
  public get numQueues() {
    return this.getNumberAttribute('num_queues');
  }
}

export class OvaV2VmConfigNicsBackingInfoList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigNicsBackingInfoOutputReference {
    return new OvaV2VmConfigNicsBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddress {
}

export function ovaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddressToTerraform(struct?: OvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddressToHclTerraform(struct?: OvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddressOutputReference {
    return new OvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct {
}

export function ovaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToTerraform(struct?: OvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToHclTerraform(struct?: OvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference {
    return new OvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigNicsNetworkInfoIpv4Config {
}

export function ovaV2VmConfigNicsNetworkInfoIpv4ConfigToTerraform(struct?: OvaV2VmConfigNicsNetworkInfoIpv4Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigNicsNetworkInfoIpv4ConfigToHclTerraform(struct?: OvaV2VmConfigNicsNetworkInfoIpv4Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigNicsNetworkInfoIpv4ConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigNicsNetworkInfoIpv4Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigNicsNetworkInfoIpv4Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  private _ipAddress = new OvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }

  // secondary_ip_address_list - computed: true, optional: false, required: false
  private _secondaryIpAddressList = new OvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructList(this, "secondary_ip_address_list", false);
  public get secondaryIpAddressList() {
    return this._secondaryIpAddressList;
  }

  // should_assign_ip - computed: true, optional: false, required: false
  public get shouldAssignIp() {
    return this.getBooleanAttribute('should_assign_ip');
  }
}

export class OvaV2VmConfigNicsNetworkInfoIpv4ConfigList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigNicsNetworkInfoIpv4ConfigOutputReference {
    return new OvaV2VmConfigNicsNetworkInfoIpv4ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses {
}

export function ovaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesToTerraform(struct?: OvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesToHclTerraform(struct?: OvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference {
    return new OvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigNicsNetworkInfoIpv4Info {
}

export function ovaV2VmConfigNicsNetworkInfoIpv4InfoToTerraform(struct?: OvaV2VmConfigNicsNetworkInfoIpv4Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigNicsNetworkInfoIpv4InfoToHclTerraform(struct?: OvaV2VmConfigNicsNetworkInfoIpv4Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigNicsNetworkInfoIpv4InfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigNicsNetworkInfoIpv4Info | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigNicsNetworkInfoIpv4Info | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // learned_ip_addresses - computed: true, optional: false, required: false
  private _learnedIpAddresses = new OvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesList(this, "learned_ip_addresses", false);
  public get learnedIpAddresses() {
    return this._learnedIpAddresses;
  }
}

export class OvaV2VmConfigNicsNetworkInfoIpv4InfoList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigNicsNetworkInfoIpv4InfoOutputReference {
    return new OvaV2VmConfigNicsNetworkInfoIpv4InfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigNicsNetworkInfoNetworkFunctionChain {
}

export function ovaV2VmConfigNicsNetworkInfoNetworkFunctionChainToTerraform(struct?: OvaV2VmConfigNicsNetworkInfoNetworkFunctionChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigNicsNetworkInfoNetworkFunctionChainToHclTerraform(struct?: OvaV2VmConfigNicsNetworkInfoNetworkFunctionChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigNicsNetworkInfoNetworkFunctionChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigNicsNetworkInfoNetworkFunctionChain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigNicsNetworkInfoNetworkFunctionChain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class OvaV2VmConfigNicsNetworkInfoNetworkFunctionChainList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigNicsNetworkInfoNetworkFunctionChainOutputReference {
    return new OvaV2VmConfigNicsNetworkInfoNetworkFunctionChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigNicsNetworkInfoSubnet {
}

export function ovaV2VmConfigNicsNetworkInfoSubnetToTerraform(struct?: OvaV2VmConfigNicsNetworkInfoSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigNicsNetworkInfoSubnetToHclTerraform(struct?: OvaV2VmConfigNicsNetworkInfoSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigNicsNetworkInfoSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigNicsNetworkInfoSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigNicsNetworkInfoSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class OvaV2VmConfigNicsNetworkInfoSubnetList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigNicsNetworkInfoSubnetOutputReference {
    return new OvaV2VmConfigNicsNetworkInfoSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigNicsNetworkInfo {
}

export function ovaV2VmConfigNicsNetworkInfoToTerraform(struct?: OvaV2VmConfigNicsNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigNicsNetworkInfoToHclTerraform(struct?: OvaV2VmConfigNicsNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigNicsNetworkInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigNicsNetworkInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigNicsNetworkInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_config - computed: true, optional: false, required: false
  private _ipv4Config = new OvaV2VmConfigNicsNetworkInfoIpv4ConfigList(this, "ipv4_config", false);
  public get ipv4Config() {
    return this._ipv4Config;
  }

  // ipv4_info - computed: true, optional: false, required: false
  private _ipv4Info = new OvaV2VmConfigNicsNetworkInfoIpv4InfoList(this, "ipv4_info", false);
  public get ipv4Info() {
    return this._ipv4Info;
  }

  // network_function_chain - computed: true, optional: false, required: false
  private _networkFunctionChain = new OvaV2VmConfigNicsNetworkInfoNetworkFunctionChainList(this, "network_function_chain", false);
  public get networkFunctionChain() {
    return this._networkFunctionChain;
  }

  // network_function_nic_type - computed: true, optional: false, required: false
  public get networkFunctionNicType() {
    return this.getStringAttribute('network_function_nic_type');
  }

  // nic_type - computed: true, optional: false, required: false
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }

  // should_allow_unknown_macs - computed: true, optional: false, required: false
  public get shouldAllowUnknownMacs() {
    return this.getBooleanAttribute('should_allow_unknown_macs');
  }

  // subnet - computed: true, optional: false, required: false
  private _subnet = new OvaV2VmConfigNicsNetworkInfoSubnetList(this, "subnet", false);
  public get subnet() {
    return this._subnet;
  }

  // trunked_vlans - computed: true, optional: false, required: false
  public get trunkedVlans() {
    return this.getNumberListAttribute('trunked_vlans');
  }

  // vlan_mode - computed: true, optional: false, required: false
  public get vlanMode() {
    return this.getStringAttribute('vlan_mode');
  }
}

export class OvaV2VmConfigNicsNetworkInfoList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigNicsNetworkInfoOutputReference {
    return new OvaV2VmConfigNicsNetworkInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigNics {
}

export function ovaV2VmConfigNicsToTerraform(struct?: OvaV2VmConfigNics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigNicsToHclTerraform(struct?: OvaV2VmConfigNics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigNicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigNics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigNics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backing_info - computed: true, optional: false, required: false
  private _backingInfo = new OvaV2VmConfigNicsBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // network_info - computed: true, optional: false, required: false
  private _networkInfo = new OvaV2VmConfigNicsNetworkInfoList(this, "network_info", false);
  public get networkInfo() {
    return this._networkInfo;
  }
}

export class OvaV2VmConfigNicsList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigNicsOutputReference {
    return new OvaV2VmConfigNicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigOwnershipInfoOwner {
}

export function ovaV2VmConfigOwnershipInfoOwnerToTerraform(struct?: OvaV2VmConfigOwnershipInfoOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigOwnershipInfoOwnerToHclTerraform(struct?: OvaV2VmConfigOwnershipInfoOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigOwnershipInfoOwnerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigOwnershipInfoOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigOwnershipInfoOwner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class OvaV2VmConfigOwnershipInfoOwnerList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigOwnershipInfoOwnerOutputReference {
    return new OvaV2VmConfigOwnershipInfoOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigOwnershipInfo {
}

export function ovaV2VmConfigOwnershipInfoToTerraform(struct?: OvaV2VmConfigOwnershipInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigOwnershipInfoToHclTerraform(struct?: OvaV2VmConfigOwnershipInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigOwnershipInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigOwnershipInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigOwnershipInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new OvaV2VmConfigOwnershipInfoOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }
}

export class OvaV2VmConfigOwnershipInfoList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigOwnershipInfoOutputReference {
    return new OvaV2VmConfigOwnershipInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigProject {
}

export function ovaV2VmConfigProjectToTerraform(struct?: OvaV2VmConfigProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigProjectToHclTerraform(struct?: OvaV2VmConfigProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigProjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class OvaV2VmConfigProjectList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigProjectOutputReference {
    return new OvaV2VmConfigProjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigProtectionPolicyStatePolicy {
}

export function ovaV2VmConfigProtectionPolicyStatePolicyToTerraform(struct?: OvaV2VmConfigProtectionPolicyStatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigProtectionPolicyStatePolicyToHclTerraform(struct?: OvaV2VmConfigProtectionPolicyStatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigProtectionPolicyStatePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigProtectionPolicyStatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigProtectionPolicyStatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class OvaV2VmConfigProtectionPolicyStatePolicyList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigProtectionPolicyStatePolicyOutputReference {
    return new OvaV2VmConfigProtectionPolicyStatePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigProtectionPolicyState {
}

export function ovaV2VmConfigProtectionPolicyStateToTerraform(struct?: OvaV2VmConfigProtectionPolicyState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigProtectionPolicyStateToHclTerraform(struct?: OvaV2VmConfigProtectionPolicyState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigProtectionPolicyStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigProtectionPolicyState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigProtectionPolicyState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy - computed: true, optional: false, required: false
  private _policy = new OvaV2VmConfigProtectionPolicyStatePolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }
}

export class OvaV2VmConfigProtectionPolicyStateList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigProtectionPolicyStateOutputReference {
    return new OvaV2VmConfigProtectionPolicyStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigSerialPorts {
}

export function ovaV2VmConfigSerialPortsToTerraform(struct?: OvaV2VmConfigSerialPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigSerialPortsToHclTerraform(struct?: OvaV2VmConfigSerialPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigSerialPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigSerialPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigSerialPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // is_connected - computed: true, optional: false, required: false
  public get isConnected() {
    return this.getBooleanAttribute('is_connected');
  }
}

export class OvaV2VmConfigSerialPortsList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigSerialPortsOutputReference {
    return new OvaV2VmConfigSerialPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigSource {
}

export function ovaV2VmConfigSourceToTerraform(struct?: OvaV2VmConfigSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigSourceToHclTerraform(struct?: OvaV2VmConfigSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class OvaV2VmConfigSourceList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigSourceOutputReference {
    return new OvaV2VmConfigSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigStorageConfigQosConfig {
}

export function ovaV2VmConfigStorageConfigQosConfigToTerraform(struct?: OvaV2VmConfigStorageConfigQosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigStorageConfigQosConfigToHclTerraform(struct?: OvaV2VmConfigStorageConfigQosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigStorageConfigQosConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigStorageConfigQosConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigStorageConfigQosConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // throttled_iops - computed: true, optional: false, required: false
  public get throttledIops() {
    return this.getNumberAttribute('throttled_iops');
  }
}

export class OvaV2VmConfigStorageConfigQosConfigList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigStorageConfigQosConfigOutputReference {
    return new OvaV2VmConfigStorageConfigQosConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigStorageConfig {
}

export function ovaV2VmConfigStorageConfigToTerraform(struct?: OvaV2VmConfigStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigStorageConfigToHclTerraform(struct?: OvaV2VmConfigStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_flash_mode_enabled - computed: true, optional: false, required: false
  public get isFlashModeEnabled() {
    return this.getBooleanAttribute('is_flash_mode_enabled');
  }

  // qos_config - computed: true, optional: false, required: false
  private _qosConfig = new OvaV2VmConfigStorageConfigQosConfigList(this, "qos_config", false);
  public get qosConfig() {
    return this._qosConfig;
  }
}

export class OvaV2VmConfigStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigStorageConfigOutputReference {
    return new OvaV2VmConfigStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfigVtpmConfig {
}

export function ovaV2VmConfigVtpmConfigToTerraform(struct?: OvaV2VmConfigVtpmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigVtpmConfigToHclTerraform(struct?: OvaV2VmConfigVtpmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigVtpmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfigVtpmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfigVtpmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_vtpm_enabled - computed: true, optional: false, required: false
  public get isVtpmEnabled() {
    return this.getBooleanAttribute('is_vtpm_enabled');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class OvaV2VmConfigVtpmConfigList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigVtpmConfigOutputReference {
    return new OvaV2VmConfigVtpmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2VmConfig {
}

export function ovaV2VmConfigToTerraform(struct?: OvaV2VmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ovaV2VmConfigToHclTerraform(struct?: OvaV2VmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OvaV2VmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2VmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2VmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apc_config - computed: true, optional: false, required: false
  private _apcConfig = new OvaV2VmConfigApcConfigList(this, "apc_config", false);
  public get apcConfig() {
    return this._apcConfig;
  }

  // availability_zone - computed: true, optional: false, required: false
  private _availabilityZone = new OvaV2VmConfigAvailabilityZoneList(this, "availability_zone", false);
  public get availabilityZone() {
    return this._availabilityZone;
  }

  // bios_uuid - computed: true, optional: false, required: false
  public get biosUuid() {
    return this.getStringAttribute('bios_uuid');
  }

  // boot_config - computed: true, optional: false, required: false
  private _bootConfig = new OvaV2VmConfigBootConfigList(this, "boot_config", false);
  public get bootConfig() {
    return this._bootConfig;
  }

  // categories - computed: true, optional: false, required: false
  private _categories = new OvaV2VmConfigCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }

  // cd_roms - computed: true, optional: false, required: false
  private _cdRoms = new OvaV2VmConfigCdRomsList(this, "cd_roms", false);
  public get cdRoms() {
    return this._cdRoms;
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new OvaV2VmConfigClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disks - computed: true, optional: false, required: false
  private _disks = new OvaV2VmConfigDisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }

  // enabled_cpu_features - computed: true, optional: false, required: false
  public get enabledCpuFeatures() {
    return this.getListAttribute('enabled_cpu_features');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // generation_uuid - computed: true, optional: false, required: false
  public get generationUuid() {
    return this.getStringAttribute('generation_uuid');
  }

  // gpus - computed: true, optional: false, required: false
  private _gpus = new OvaV2VmConfigGpusList(this, "gpus", false);
  public get gpus() {
    return this._gpus;
  }

  // guest_customization - computed: true, optional: false, required: false
  private _guestCustomization = new OvaV2VmConfigGuestCustomizationList(this, "guest_customization", false);
  public get guestCustomization() {
    return this._guestCustomization;
  }

  // guest_tools - computed: true, optional: false, required: false
  private _guestTools = new OvaV2VmConfigGuestToolsList(this, "guest_tools", false);
  public get guestTools() {
    return this._guestTools;
  }

  // hardware_clock_timezone - computed: true, optional: false, required: false
  public get hardwareClockTimezone() {
    return this.getStringAttribute('hardware_clock_timezone');
  }

  // host - computed: true, optional: false, required: false
  private _host = new OvaV2VmConfigHostList(this, "host", false);
  public get host() {
    return this._host;
  }

  // is_agent_vm - computed: true, optional: false, required: false
  public get isAgentVm() {
    return this.getBooleanAttribute('is_agent_vm');
  }

  // is_branding_enabled - computed: true, optional: false, required: false
  public get isBrandingEnabled() {
    return this.getBooleanAttribute('is_branding_enabled');
  }

  // is_cpu_hotplug_enabled - computed: true, optional: false, required: false
  public get isCpuHotplugEnabled() {
    return this.getBooleanAttribute('is_cpu_hotplug_enabled');
  }

  // is_cpu_passthrough_enabled - computed: true, optional: false, required: false
  public get isCpuPassthroughEnabled() {
    return this.getBooleanAttribute('is_cpu_passthrough_enabled');
  }

  // is_gpu_console_enabled - computed: true, optional: false, required: false
  public get isGpuConsoleEnabled() {
    return this.getBooleanAttribute('is_gpu_console_enabled');
  }

  // is_memory_overcommit_enabled - computed: true, optional: false, required: false
  public get isMemoryOvercommitEnabled() {
    return this.getBooleanAttribute('is_memory_overcommit_enabled');
  }

  // is_scsi_controller_enabled - computed: true, optional: false, required: false
  public get isScsiControllerEnabled() {
    return this.getBooleanAttribute('is_scsi_controller_enabled');
  }

  // is_vcpu_hard_pinning_enabled - computed: true, optional: false, required: false
  public get isVcpuHardPinningEnabled() {
    return this.getBooleanAttribute('is_vcpu_hard_pinning_enabled');
  }

  // is_vga_console_enabled - computed: true, optional: false, required: false
  public get isVgaConsoleEnabled() {
    return this.getBooleanAttribute('is_vga_console_enabled');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // memory_size_bytes - computed: true, optional: false, required: false
  public get memorySizeBytes() {
    return this.getNumberAttribute('memory_size_bytes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nics - computed: true, optional: false, required: false
  private _nics = new OvaV2VmConfigNicsList(this, "nics", false);
  public get nics() {
    return this._nics;
  }

  // num_cores_per_socket - computed: true, optional: false, required: false
  public get numCoresPerSocket() {
    return this.getNumberAttribute('num_cores_per_socket');
  }

  // num_numa_nodes - computed: true, optional: false, required: false
  public get numNumaNodes() {
    return this.getNumberAttribute('num_numa_nodes');
  }

  // num_sockets - computed: true, optional: false, required: false
  public get numSockets() {
    return this.getNumberAttribute('num_sockets');
  }

  // num_threads_per_core - computed: true, optional: false, required: false
  public get numThreadsPerCore() {
    return this.getNumberAttribute('num_threads_per_core');
  }

  // ownership_info - computed: true, optional: false, required: false
  private _ownershipInfo = new OvaV2VmConfigOwnershipInfoList(this, "ownership_info", false);
  public get ownershipInfo() {
    return this._ownershipInfo;
  }

  // power_state - computed: true, optional: false, required: false
  public get powerState() {
    return this.getStringAttribute('power_state');
  }

  // project - computed: true, optional: false, required: false
  private _project = new OvaV2VmConfigProjectList(this, "project", false);
  public get project() {
    return this._project;
  }

  // protection_policy_state - computed: true, optional: false, required: false
  private _protectionPolicyState = new OvaV2VmConfigProtectionPolicyStateList(this, "protection_policy_state", false);
  public get protectionPolicyState() {
    return this._protectionPolicyState;
  }

  // protection_type - computed: true, optional: false, required: false
  public get protectionType() {
    return this.getStringAttribute('protection_type');
  }

  // serial_ports - computed: true, optional: false, required: false
  private _serialPorts = new OvaV2VmConfigSerialPortsList(this, "serial_ports", false);
  public get serialPorts() {
    return this._serialPorts;
  }

  // source - computed: true, optional: false, required: false
  private _source = new OvaV2VmConfigSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // storage_config - computed: true, optional: false, required: false
  private _storageConfig = new OvaV2VmConfigStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // vtpm_config - computed: true, optional: false, required: false
  private _vtpmConfig = new OvaV2VmConfigVtpmConfigList(this, "vtpm_config", false);
  public get vtpmConfig() {
    return this._vtpmConfig;
  }
}

export class OvaV2VmConfigList extends cdktf.ComplexList {

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
  public get(index: number): OvaV2VmConfigOutputReference {
    return new OvaV2VmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2ChecksumOvaSha1Checksum {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ova_v2#hex_digest OvaV2#hex_digest}
  */
  readonly hexDigest: string;
}

export function ovaV2ChecksumOvaSha1ChecksumToTerraform(struct?: OvaV2ChecksumOvaSha1Checksum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hex_digest: cdktf.stringToTerraform(struct!.hexDigest),
  }
}


export function ovaV2ChecksumOvaSha1ChecksumToHclTerraform(struct?: OvaV2ChecksumOvaSha1Checksum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hex_digest: {
      value: cdktf.stringToHclTerraform(struct!.hexDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OvaV2ChecksumOvaSha1ChecksumOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2ChecksumOvaSha1Checksum | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hexDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.hexDigest = this._hexDigest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2ChecksumOvaSha1Checksum | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hexDigest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hexDigest = value.hexDigest;
    }
  }

  // hex_digest - computed: false, optional: false, required: true
  private _hexDigest?: string; 
  public get hexDigest() {
    return this.getStringAttribute('hex_digest');
  }
  public set hexDigest(value: string) {
    this._hexDigest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hexDigestInput() {
    return this._hexDigest;
  }
}

export class OvaV2ChecksumOvaSha1ChecksumList extends cdktf.ComplexList {
  public internalValue? : OvaV2ChecksumOvaSha1Checksum[] | cdktf.IResolvable

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
  public get(index: number): OvaV2ChecksumOvaSha1ChecksumOutputReference {
    return new OvaV2ChecksumOvaSha1ChecksumOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2ChecksumOvaSha256Checksum {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ova_v2#hex_digest OvaV2#hex_digest}
  */
  readonly hexDigest: string;
}

export function ovaV2ChecksumOvaSha256ChecksumToTerraform(struct?: OvaV2ChecksumOvaSha256Checksum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hex_digest: cdktf.stringToTerraform(struct!.hexDigest),
  }
}


export function ovaV2ChecksumOvaSha256ChecksumToHclTerraform(struct?: OvaV2ChecksumOvaSha256Checksum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hex_digest: {
      value: cdktf.stringToHclTerraform(struct!.hexDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OvaV2ChecksumOvaSha256ChecksumOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2ChecksumOvaSha256Checksum | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hexDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.hexDigest = this._hexDigest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2ChecksumOvaSha256Checksum | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hexDigest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hexDigest = value.hexDigest;
    }
  }

  // hex_digest - computed: false, optional: false, required: true
  private _hexDigest?: string; 
  public get hexDigest() {
    return this.getStringAttribute('hex_digest');
  }
  public set hexDigest(value: string) {
    this._hexDigest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hexDigestInput() {
    return this._hexDigest;
  }
}

export class OvaV2ChecksumOvaSha256ChecksumList extends cdktf.ComplexList {
  public internalValue? : OvaV2ChecksumOvaSha256Checksum[] | cdktf.IResolvable

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
  public get(index: number): OvaV2ChecksumOvaSha256ChecksumOutputReference {
    return new OvaV2ChecksumOvaSha256ChecksumOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
