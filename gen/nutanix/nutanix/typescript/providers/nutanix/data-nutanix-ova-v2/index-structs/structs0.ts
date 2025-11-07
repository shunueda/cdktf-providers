import * as cdktf from 'cdktf';
export interface DataNutanixOvaV2ChecksumOvaSha1Checksum {
}

export function dataNutanixOvaV2ChecksumOvaSha1ChecksumToTerraform(struct?: DataNutanixOvaV2ChecksumOvaSha1Checksum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2ChecksumOvaSha1ChecksumToHclTerraform(struct?: DataNutanixOvaV2ChecksumOvaSha1Checksum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2ChecksumOvaSha1ChecksumOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2ChecksumOvaSha1Checksum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2ChecksumOvaSha1Checksum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hex_digest - computed: true, optional: false, required: false
  public get hexDigest() {
    return this.getStringAttribute('hex_digest');
  }
}

export class DataNutanixOvaV2ChecksumOvaSha1ChecksumList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2ChecksumOvaSha1ChecksumOutputReference {
    return new DataNutanixOvaV2ChecksumOvaSha1ChecksumOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2ChecksumOvaSha256Checksum {
}

export function dataNutanixOvaV2ChecksumOvaSha256ChecksumToTerraform(struct?: DataNutanixOvaV2ChecksumOvaSha256Checksum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2ChecksumOvaSha256ChecksumToHclTerraform(struct?: DataNutanixOvaV2ChecksumOvaSha256Checksum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2ChecksumOvaSha256ChecksumOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2ChecksumOvaSha256Checksum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2ChecksumOvaSha256Checksum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hex_digest - computed: true, optional: false, required: false
  public get hexDigest() {
    return this.getStringAttribute('hex_digest');
  }
}

export class DataNutanixOvaV2ChecksumOvaSha256ChecksumList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2ChecksumOvaSha256ChecksumOutputReference {
    return new DataNutanixOvaV2ChecksumOvaSha256ChecksumOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2Checksum {
}

export function dataNutanixOvaV2ChecksumToTerraform(struct?: DataNutanixOvaV2Checksum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2ChecksumToHclTerraform(struct?: DataNutanixOvaV2Checksum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2ChecksumOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2Checksum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2Checksum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ova_sha1_checksum - computed: true, optional: false, required: false
  private _ovaSha1Checksum = new DataNutanixOvaV2ChecksumOvaSha1ChecksumList(this, "ova_sha1_checksum", false);
  public get ovaSha1Checksum() {
    return this._ovaSha1Checksum;
  }

  // ova_sha256_checksum - computed: true, optional: false, required: false
  private _ovaSha256Checksum = new DataNutanixOvaV2ChecksumOvaSha256ChecksumList(this, "ova_sha256_checksum", false);
  public get ovaSha256Checksum() {
    return this._ovaSha256Checksum;
  }
}

export class DataNutanixOvaV2ChecksumList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2ChecksumOutputReference {
    return new DataNutanixOvaV2ChecksumOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2CreatedByAdditionalAttributesValueMapOfStrings {
}

export function dataNutanixOvaV2CreatedByAdditionalAttributesValueMapOfStringsToTerraform(struct?: DataNutanixOvaV2CreatedByAdditionalAttributesValueMapOfStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2CreatedByAdditionalAttributesValueMapOfStringsToHclTerraform(struct?: DataNutanixOvaV2CreatedByAdditionalAttributesValueMapOfStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2CreatedByAdditionalAttributesValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2CreatedByAdditionalAttributesValueMapOfStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2CreatedByAdditionalAttributesValueMapOfStrings | undefined) {
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

export class DataNutanixOvaV2CreatedByAdditionalAttributesValueMapOfStringsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2CreatedByAdditionalAttributesValueMapOfStringsOutputReference {
    return new DataNutanixOvaV2CreatedByAdditionalAttributesValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2CreatedByAdditionalAttributesValue {
}

export function dataNutanixOvaV2CreatedByAdditionalAttributesValueToTerraform(struct?: DataNutanixOvaV2CreatedByAdditionalAttributesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2CreatedByAdditionalAttributesValueToHclTerraform(struct?: DataNutanixOvaV2CreatedByAdditionalAttributesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2CreatedByAdditionalAttributesValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2CreatedByAdditionalAttributesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2CreatedByAdditionalAttributesValue | undefined) {
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
  private _mapOfStrings = new DataNutanixOvaV2CreatedByAdditionalAttributesValueMapOfStringsList(this, "map_of_strings", false);
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

export class DataNutanixOvaV2CreatedByAdditionalAttributesValueList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2CreatedByAdditionalAttributesValueOutputReference {
    return new DataNutanixOvaV2CreatedByAdditionalAttributesValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2CreatedByAdditionalAttributes {
}

export function dataNutanixOvaV2CreatedByAdditionalAttributesToTerraform(struct?: DataNutanixOvaV2CreatedByAdditionalAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2CreatedByAdditionalAttributesToHclTerraform(struct?: DataNutanixOvaV2CreatedByAdditionalAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2CreatedByAdditionalAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2CreatedByAdditionalAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2CreatedByAdditionalAttributes | undefined) {
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
  private _value = new DataNutanixOvaV2CreatedByAdditionalAttributesValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataNutanixOvaV2CreatedByAdditionalAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2CreatedByAdditionalAttributesOutputReference {
    return new DataNutanixOvaV2CreatedByAdditionalAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2CreatedByBucketsAccessKeysLinks {
}

export function dataNutanixOvaV2CreatedByBucketsAccessKeysLinksToTerraform(struct?: DataNutanixOvaV2CreatedByBucketsAccessKeysLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2CreatedByBucketsAccessKeysLinksToHclTerraform(struct?: DataNutanixOvaV2CreatedByBucketsAccessKeysLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2CreatedByBucketsAccessKeysLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2CreatedByBucketsAccessKeysLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2CreatedByBucketsAccessKeysLinks | undefined) {
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

export class DataNutanixOvaV2CreatedByBucketsAccessKeysLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2CreatedByBucketsAccessKeysLinksOutputReference {
    return new DataNutanixOvaV2CreatedByBucketsAccessKeysLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2CreatedByBucketsAccessKeys {
}

export function dataNutanixOvaV2CreatedByBucketsAccessKeysToTerraform(struct?: DataNutanixOvaV2CreatedByBucketsAccessKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2CreatedByBucketsAccessKeysToHclTerraform(struct?: DataNutanixOvaV2CreatedByBucketsAccessKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2CreatedByBucketsAccessKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2CreatedByBucketsAccessKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2CreatedByBucketsAccessKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key_name - computed: true, optional: false, required: false
  public get accessKeyName() {
    return this.getStringAttribute('access_key_name');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixOvaV2CreatedByBucketsAccessKeysLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // secret_access_key - computed: true, optional: false, required: false
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataNutanixOvaV2CreatedByBucketsAccessKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2CreatedByBucketsAccessKeysOutputReference {
    return new DataNutanixOvaV2CreatedByBucketsAccessKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2CreatedByLinks {
}

export function dataNutanixOvaV2CreatedByLinksToTerraform(struct?: DataNutanixOvaV2CreatedByLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2CreatedByLinksToHclTerraform(struct?: DataNutanixOvaV2CreatedByLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2CreatedByLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2CreatedByLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2CreatedByLinks | undefined) {
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

export class DataNutanixOvaV2CreatedByLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2CreatedByLinksOutputReference {
    return new DataNutanixOvaV2CreatedByLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2CreatedBy {
}

export function dataNutanixOvaV2CreatedByToTerraform(struct?: DataNutanixOvaV2CreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2CreatedByToHclTerraform(struct?: DataNutanixOvaV2CreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2CreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2CreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2CreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_attributes - computed: true, optional: false, required: false
  private _additionalAttributes = new DataNutanixOvaV2CreatedByAdditionalAttributesList(this, "additional_attributes", false);
  public get additionalAttributes() {
    return this._additionalAttributes;
  }

  // buckets_access_keys - computed: true, optional: false, required: false
  private _bucketsAccessKeys = new DataNutanixOvaV2CreatedByBucketsAccessKeysList(this, "buckets_access_keys", false);
  public get bucketsAccessKeys() {
    return this._bucketsAccessKeys;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // last_login_time - computed: true, optional: false, required: false
  public get lastLoginTime() {
    return this.getStringAttribute('last_login_time');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixOvaV2CreatedByLinksList(this, "links", false);
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

export class DataNutanixOvaV2CreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2CreatedByOutputReference {
    return new DataNutanixOvaV2CreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2Links {
}

export function dataNutanixOvaV2LinksToTerraform(struct?: DataNutanixOvaV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2LinksToHclTerraform(struct?: DataNutanixOvaV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2Links | undefined) {
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

export class DataNutanixOvaV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2LinksOutputReference {
    return new DataNutanixOvaV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2SourceObjectLiteSource {
}

export function dataNutanixOvaV2SourceObjectLiteSourceToTerraform(struct?: DataNutanixOvaV2SourceObjectLiteSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2SourceObjectLiteSourceToHclTerraform(struct?: DataNutanixOvaV2SourceObjectLiteSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2SourceObjectLiteSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2SourceObjectLiteSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2SourceObjectLiteSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export class DataNutanixOvaV2SourceObjectLiteSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2SourceObjectLiteSourceOutputReference {
    return new DataNutanixOvaV2SourceObjectLiteSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2SourceOvaUrlSourceBasicAuth {
}

export function dataNutanixOvaV2SourceOvaUrlSourceBasicAuthToTerraform(struct?: DataNutanixOvaV2SourceOvaUrlSourceBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2SourceOvaUrlSourceBasicAuthToHclTerraform(struct?: DataNutanixOvaV2SourceOvaUrlSourceBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2SourceOvaUrlSourceBasicAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2SourceOvaUrlSourceBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2SourceOvaUrlSourceBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataNutanixOvaV2SourceOvaUrlSourceBasicAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2SourceOvaUrlSourceBasicAuthOutputReference {
    return new DataNutanixOvaV2SourceOvaUrlSourceBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2SourceOvaUrlSource {
}

export function dataNutanixOvaV2SourceOvaUrlSourceToTerraform(struct?: DataNutanixOvaV2SourceOvaUrlSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2SourceOvaUrlSourceToHclTerraform(struct?: DataNutanixOvaV2SourceOvaUrlSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2SourceOvaUrlSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2SourceOvaUrlSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2SourceOvaUrlSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_auth - computed: true, optional: false, required: false
  private _basicAuth = new DataNutanixOvaV2SourceOvaUrlSourceBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataNutanixOvaV2SourceOvaUrlSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2SourceOvaUrlSourceOutputReference {
    return new DataNutanixOvaV2SourceOvaUrlSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2SourceOvaVmSource {
}

export function dataNutanixOvaV2SourceOvaVmSourceToTerraform(struct?: DataNutanixOvaV2SourceOvaVmSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2SourceOvaVmSourceToHclTerraform(struct?: DataNutanixOvaV2SourceOvaVmSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2SourceOvaVmSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2SourceOvaVmSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2SourceOvaVmSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_file_format - computed: true, optional: false, required: false
  public get diskFileFormat() {
    return this.getStringAttribute('disk_file_format');
  }

  // vm_ext_id - computed: true, optional: false, required: false
  public get vmExtId() {
    return this.getStringAttribute('vm_ext_id');
  }
}

export class DataNutanixOvaV2SourceOvaVmSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2SourceOvaVmSourceOutputReference {
    return new DataNutanixOvaV2SourceOvaVmSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2Source {
}

export function dataNutanixOvaV2SourceToTerraform(struct?: DataNutanixOvaV2Source): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2SourceToHclTerraform(struct?: DataNutanixOvaV2Source): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2SourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2Source | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2Source | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_lite_source - computed: true, optional: false, required: false
  private _objectLiteSource = new DataNutanixOvaV2SourceObjectLiteSourceList(this, "object_lite_source", false);
  public get objectLiteSource() {
    return this._objectLiteSource;
  }

  // ova_url_source - computed: true, optional: false, required: false
  private _ovaUrlSource = new DataNutanixOvaV2SourceOvaUrlSourceList(this, "ova_url_source", false);
  public get ovaUrlSource() {
    return this._ovaUrlSource;
  }

  // ova_vm_source - computed: true, optional: false, required: false
  private _ovaVmSource = new DataNutanixOvaV2SourceOvaVmSourceList(this, "ova_vm_source", false);
  public get ovaVmSource() {
    return this._ovaVmSource;
  }
}

export class DataNutanixOvaV2SourceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2SourceOutputReference {
    return new DataNutanixOvaV2SourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigApcConfigCpuModel {
}

export function dataNutanixOvaV2VmConfigApcConfigCpuModelToTerraform(struct?: DataNutanixOvaV2VmConfigApcConfigCpuModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigApcConfigCpuModelToHclTerraform(struct?: DataNutanixOvaV2VmConfigApcConfigCpuModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigApcConfigCpuModelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigApcConfigCpuModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigApcConfigCpuModel | undefined) {
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

export class DataNutanixOvaV2VmConfigApcConfigCpuModelList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigApcConfigCpuModelOutputReference {
    return new DataNutanixOvaV2VmConfigApcConfigCpuModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigApcConfig {
}

export function dataNutanixOvaV2VmConfigApcConfigToTerraform(struct?: DataNutanixOvaV2VmConfigApcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigApcConfigToHclTerraform(struct?: DataNutanixOvaV2VmConfigApcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigApcConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigApcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigApcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_model - computed: true, optional: false, required: false
  private _cpuModel = new DataNutanixOvaV2VmConfigApcConfigCpuModelList(this, "cpu_model", false);
  public get cpuModel() {
    return this._cpuModel;
  }

  // is_apc_enabled - computed: true, optional: false, required: false
  public get isApcEnabled() {
    return this.getBooleanAttribute('is_apc_enabled');
  }
}

export class DataNutanixOvaV2VmConfigApcConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigApcConfigOutputReference {
    return new DataNutanixOvaV2VmConfigApcConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigAvailabilityZone {
}

export function dataNutanixOvaV2VmConfigAvailabilityZoneToTerraform(struct?: DataNutanixOvaV2VmConfigAvailabilityZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigAvailabilityZoneToHclTerraform(struct?: DataNutanixOvaV2VmConfigAvailabilityZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigAvailabilityZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigAvailabilityZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigAvailabilityZone | undefined) {
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

export class DataNutanixOvaV2VmConfigAvailabilityZoneList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigAvailabilityZoneOutputReference {
    return new DataNutanixOvaV2VmConfigAvailabilityZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress {
}

export function dataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress | undefined) {
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

export class DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDisk {
}

export function dataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
}

export class DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNic {
}

export function dataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNicToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNicToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNic | undefined) {
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

export class DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNicList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNicOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDevice {
}

export function dataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_device_disk - computed: true, optional: false, required: false
  private _bootDeviceDisk = new DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceDiskList(this, "boot_device_disk", false);
  public get bootDeviceDisk() {
    return this._bootDeviceDisk;
  }

  // boot_device_nic - computed: true, optional: false, required: false
  private _bootDeviceNic = new DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceBootDeviceNicList(this, "boot_device_nic", false);
  public get bootDeviceNic() {
    return this._bootDeviceNic;
  }
}

export class DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigLegacyBoot {
}

export function dataNutanixOvaV2VmConfigBootConfigLegacyBootToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigLegacyBoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigLegacyBootToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigLegacyBoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigLegacyBootOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigLegacyBoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigLegacyBoot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_device - computed: true, optional: false, required: false
  private _bootDevice = new DataNutanixOvaV2VmConfigBootConfigLegacyBootBootDeviceList(this, "boot_device", false);
  public get bootDevice() {
    return this._bootDevice;
  }

  // boot_order - computed: true, optional: false, required: false
  public get bootOrder() {
    return this.getListAttribute('boot_order');
  }
}

export class DataNutanixOvaV2VmConfigBootConfigLegacyBootList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigLegacyBootOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigLegacyBootOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress {
}

export function dataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress | undefined) {
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

export class DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDisk {
}

export function dataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNic {
}

export function dataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNicToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNicToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNic | undefined) {
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

export class DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNicList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNicOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigUefiBootBootDevice {
}

export function dataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootBootDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootBootDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigUefiBootBootDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigUefiBootBootDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_device_disk - computed: true, optional: false, required: false
  private _bootDeviceDisk = new DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceDiskList(this, "boot_device_disk", false);
  public get bootDeviceDisk() {
    return this._bootDeviceDisk;
  }

  // boot_device_nic - computed: true, optional: false, required: false
  private _bootDeviceNic = new DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceBootDeviceNicList(this, "boot_device_nic", false);
  public get bootDeviceNic() {
    return this._bootDeviceNic;
  }
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference {
}

export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference | undefined) {
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

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress {
}

export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress | undefined) {
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

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference {
}

export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference | undefined) {
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

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference {
}

export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // vm_reference - computed: true, optional: false, required: false
  private _vmReference = new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference {
}

export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_reference - computed: true, optional: false, required: false
  private _imageReference = new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceList(this, "image_reference", false);
  public get imageReference() {
    return this._imageReference;
  }

  // vm_disk_reference - computed: true, optional: false, required: false
  private _vmDiskReference = new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceList(this, "vm_disk_reference", false);
  public get vmDiskReference() {
    return this._vmDiskReference;
  }
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource {
}

export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference - computed: true, optional: false, required: false
  private _reference = new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig {
}

export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig | undefined) {
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

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer {
}

export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer | undefined) {
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

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfo {
}

export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source - computed: true, optional: false, required: false
  private _dataSource = new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceList(this, "data_source", false);
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
  private _storageConfig = new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }

  // storage_container - computed: true, optional: false, required: false
  private _storageContainer = new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerList(this, "storage_container", false);
  public get storageContainer() {
    return this._storageContainer;
  }
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDevice {
}

export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backing_storage_info - computed: true, optional: false, required: false
  private _backingStorageInfo = new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceBackingStorageInfoList(this, "backing_storage_info", false);
  public get backingStorageInfo() {
    return this._backingStorageInfo;
  }
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfigUefiBoot {
}

export function dataNutanixOvaV2VmConfigBootConfigUefiBootToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigUefiBootToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfigUefiBoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfigUefiBoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfigUefiBoot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_device - computed: true, optional: false, required: false
  private _bootDevice = new DataNutanixOvaV2VmConfigBootConfigUefiBootBootDeviceList(this, "boot_device", false);
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
  private _nvramDevice = new DataNutanixOvaV2VmConfigBootConfigUefiBootNvramDeviceList(this, "nvram_device", false);
  public get nvramDevice() {
    return this._nvramDevice;
  }
}

export class DataNutanixOvaV2VmConfigBootConfigUefiBootList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigUefiBootOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigUefiBootOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigBootConfig {
}

export function dataNutanixOvaV2VmConfigBootConfigToTerraform(struct?: DataNutanixOvaV2VmConfigBootConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigBootConfigToHclTerraform(struct?: DataNutanixOvaV2VmConfigBootConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigBootConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigBootConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigBootConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // legacy_boot - computed: true, optional: false, required: false
  private _legacyBoot = new DataNutanixOvaV2VmConfigBootConfigLegacyBootList(this, "legacy_boot", false);
  public get legacyBoot() {
    return this._legacyBoot;
  }

  // uefi_boot - computed: true, optional: false, required: false
  private _uefiBoot = new DataNutanixOvaV2VmConfigBootConfigUefiBootList(this, "uefi_boot", false);
  public get uefiBoot() {
    return this._uefiBoot;
  }
}

export class DataNutanixOvaV2VmConfigBootConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigBootConfigOutputReference {
    return new DataNutanixOvaV2VmConfigBootConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigCategories {
}

export function dataNutanixOvaV2VmConfigCategoriesToTerraform(struct?: DataNutanixOvaV2VmConfigCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigCategoriesToHclTerraform(struct?: DataNutanixOvaV2VmConfigCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigCategories | undefined) {
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

export class DataNutanixOvaV2VmConfigCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigCategoriesOutputReference {
    return new DataNutanixOvaV2VmConfigCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReference {
}

export function dataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReferenceToTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReferenceToHclTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReference | undefined) {
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

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReferenceOutputReference {
    return new DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress {
}

export function dataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | undefined) {
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

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference {
    return new DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference {
}

export function dataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference | undefined) {
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

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference {
    return new DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReference {
}

export function dataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceToTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceToHclTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // vm_reference - computed: true, optional: false, required: false
  private _vmReference = new DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
}

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceOutputReference {
    return new DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReference {
}

export function dataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceToTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceToHclTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_reference - computed: true, optional: false, required: false
  private _imageReference = new DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceImageReferenceList(this, "image_reference", false);
  public get imageReference() {
    return this._imageReference;
  }

  // vm_disk_reference - computed: true, optional: false, required: false
  private _vmDiskReference = new DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceVmDiskReferenceList(this, "vm_disk_reference", false);
  public get vmDiskReference() {
    return this._vmDiskReference;
  }
}

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceOutputReference {
    return new DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSource {
}

export function dataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceToTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceToHclTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference - computed: true, optional: false, required: false
  private _reference = new DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
}

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceOutputReference {
    return new DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageConfig {
}

export function dataNutanixOvaV2VmConfigCdRomsBackingInfoStorageConfigToTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigCdRomsBackingInfoStorageConfigToHclTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageConfig | undefined) {
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

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageConfigOutputReference {
    return new DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageContainer {
}

export function dataNutanixOvaV2VmConfigCdRomsBackingInfoStorageContainerToTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigCdRomsBackingInfoStorageContainerToHclTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageContainer | undefined) {
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

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageContainerList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageContainerOutputReference {
    return new DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigCdRomsBackingInfo {
}

export function dataNutanixOvaV2VmConfigCdRomsBackingInfoToTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigCdRomsBackingInfoToHclTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigCdRomsBackingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigCdRomsBackingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source - computed: true, optional: false, required: false
  private _dataSource = new DataNutanixOvaV2VmConfigCdRomsBackingInfoDataSourceList(this, "data_source", false);
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
  private _storageConfig = new DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }

  // storage_container - computed: true, optional: false, required: false
  private _storageContainer = new DataNutanixOvaV2VmConfigCdRomsBackingInfoStorageContainerList(this, "storage_container", false);
  public get storageContainer() {
    return this._storageContainer;
  }
}

export class DataNutanixOvaV2VmConfigCdRomsBackingInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigCdRomsBackingInfoOutputReference {
    return new DataNutanixOvaV2VmConfigCdRomsBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigCdRomsDiskAddress {
}

export function dataNutanixOvaV2VmConfigCdRomsDiskAddressToTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigCdRomsDiskAddressToHclTerraform(struct?: DataNutanixOvaV2VmConfigCdRomsDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigCdRomsDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigCdRomsDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigCdRomsDiskAddress | undefined) {
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

export class DataNutanixOvaV2VmConfigCdRomsDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigCdRomsDiskAddressOutputReference {
    return new DataNutanixOvaV2VmConfigCdRomsDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigCdRoms {
}

export function dataNutanixOvaV2VmConfigCdRomsToTerraform(struct?: DataNutanixOvaV2VmConfigCdRoms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigCdRomsToHclTerraform(struct?: DataNutanixOvaV2VmConfigCdRoms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigCdRomsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigCdRoms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigCdRoms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backing_info - computed: true, optional: false, required: false
  private _backingInfo = new DataNutanixOvaV2VmConfigCdRomsBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new DataNutanixOvaV2VmConfigCdRomsDiskAddressList(this, "disk_address", false);
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

export class DataNutanixOvaV2VmConfigCdRomsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigCdRomsOutputReference {
    return new DataNutanixOvaV2VmConfigCdRomsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigCluster {
}

export function dataNutanixOvaV2VmConfigClusterToTerraform(struct?: DataNutanixOvaV2VmConfigCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigClusterToHclTerraform(struct?: DataNutanixOvaV2VmConfigCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigCluster | undefined) {
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

export class DataNutanixOvaV2VmConfigClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigClusterOutputReference {
    return new DataNutanixOvaV2VmConfigClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReference {
}

export function dataNutanixOvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReferenceToTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReferenceToHclTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReference | undefined) {
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

export class DataNutanixOvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReferenceOutputReference {
    return new DataNutanixOvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReference {
}

export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReferenceToTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReferenceToHclTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReference | undefined) {
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

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReferenceOutputReference {
    return new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress {
}

export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressToTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddress | undefined) {
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

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressOutputReference {
    return new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference {
}

export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceToTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReference | undefined) {
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

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceOutputReference {
    return new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference {
}

export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceToTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceToHclTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // vm_reference - computed: true, optional: false, required: false
  private _vmReference = new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
}

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceOutputReference {
    return new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReference {
}

export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceToTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceToHclTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_reference - computed: true, optional: false, required: false
  private _imageReference = new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceImageReferenceList(this, "image_reference", false);
  public get imageReference() {
    return this._imageReference;
  }

  // vm_disk_reference - computed: true, optional: false, required: false
  private _vmDiskReference = new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceVmDiskReferenceList(this, "vm_disk_reference", false);
  public get vmDiskReference() {
    return this._vmDiskReference;
  }
}

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceOutputReference {
    return new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSource {
}

export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceToTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceToHclTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference - computed: true, optional: false, required: false
  private _reference = new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
}

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceOutputReference {
    return new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageConfig {
}

export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageConfigToTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageConfigToHclTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageConfig | undefined) {
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

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageConfigOutputReference {
    return new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageContainer {
}

export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageContainerToTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageContainerToHclTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageContainer | undefined) {
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

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageContainerList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageContainerOutputReference {
    return new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigDisksBackingInfoVmDisk {
}

export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskToTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigDisksBackingInfoVmDiskToHclTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfoVmDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigDisksBackingInfoVmDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigDisksBackingInfoVmDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source - computed: true, optional: false, required: false
  private _dataSource = new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskDataSourceList(this, "data_source", false);
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
  private _storageConfig = new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }

  // storage_container - computed: true, optional: false, required: false
  private _storageContainer = new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskStorageContainerList(this, "storage_container", false);
  public get storageContainer() {
    return this._storageContainer;
  }
}

export class DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskOutputReference {
    return new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigDisksBackingInfo {
}

export function dataNutanixOvaV2VmConfigDisksBackingInfoToTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigDisksBackingInfoToHclTerraform(struct?: DataNutanixOvaV2VmConfigDisksBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigDisksBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigDisksBackingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigDisksBackingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adfs_volume_group_reference - computed: true, optional: false, required: false
  private _adfsVolumeGroupReference = new DataNutanixOvaV2VmConfigDisksBackingInfoAdfsVolumeGroupReferenceList(this, "adfs_volume_group_reference", false);
  public get adfsVolumeGroupReference() {
    return this._adfsVolumeGroupReference;
  }

  // vm_disk - computed: true, optional: false, required: false
  private _vmDisk = new DataNutanixOvaV2VmConfigDisksBackingInfoVmDiskList(this, "vm_disk", false);
  public get vmDisk() {
    return this._vmDisk;
  }
}

export class DataNutanixOvaV2VmConfigDisksBackingInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigDisksBackingInfoOutputReference {
    return new DataNutanixOvaV2VmConfigDisksBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigDisksDiskAddress {
}

export function dataNutanixOvaV2VmConfigDisksDiskAddressToTerraform(struct?: DataNutanixOvaV2VmConfigDisksDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigDisksDiskAddressToHclTerraform(struct?: DataNutanixOvaV2VmConfigDisksDiskAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigDisksDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigDisksDiskAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigDisksDiskAddress | undefined) {
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

export class DataNutanixOvaV2VmConfigDisksDiskAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigDisksDiskAddressOutputReference {
    return new DataNutanixOvaV2VmConfigDisksDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigDisks {
}

export function dataNutanixOvaV2VmConfigDisksToTerraform(struct?: DataNutanixOvaV2VmConfigDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigDisksToHclTerraform(struct?: DataNutanixOvaV2VmConfigDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backing_info - computed: true, optional: false, required: false
  private _backingInfo = new DataNutanixOvaV2VmConfigDisksBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }

  // disk_address - computed: true, optional: false, required: false
  private _diskAddress = new DataNutanixOvaV2VmConfigDisksDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
}

export class DataNutanixOvaV2VmConfigDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigDisksOutputReference {
    return new DataNutanixOvaV2VmConfigDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGpusLinks {
}

export function dataNutanixOvaV2VmConfigGpusLinksToTerraform(struct?: DataNutanixOvaV2VmConfigGpusLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGpusLinksToHclTerraform(struct?: DataNutanixOvaV2VmConfigGpusLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGpusLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGpusLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGpusLinks | undefined) {
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

export class DataNutanixOvaV2VmConfigGpusLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGpusLinksOutputReference {
    return new DataNutanixOvaV2VmConfigGpusLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGpusPciAddress {
}

export function dataNutanixOvaV2VmConfigGpusPciAddressToTerraform(struct?: DataNutanixOvaV2VmConfigGpusPciAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGpusPciAddressToHclTerraform(struct?: DataNutanixOvaV2VmConfigGpusPciAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGpusPciAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGpusPciAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGpusPciAddress | undefined) {
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

export class DataNutanixOvaV2VmConfigGpusPciAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGpusPciAddressOutputReference {
    return new DataNutanixOvaV2VmConfigGpusPciAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGpus {
}

export function dataNutanixOvaV2VmConfigGpusToTerraform(struct?: DataNutanixOvaV2VmConfigGpus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGpusToHclTerraform(struct?: DataNutanixOvaV2VmConfigGpus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGpusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGpus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGpus | undefined) {
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
  private _links = new DataNutanixOvaV2VmConfigGpusLinksList(this, "links", false);
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
  private _pciAddress = new DataNutanixOvaV2VmConfigGpusPciAddressList(this, "pci_address", false);
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

export class DataNutanixOvaV2VmConfigGpusList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGpusOutputReference {
    return new DataNutanixOvaV2VmConfigGpusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings {
}

export function dataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | undefined) {
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

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference {
    return new DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue {
}

export function dataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToHclTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | undefined) {
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
  private _mapOfStrings = new DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList(this, "map_of_strings", false);
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

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference {
    return new DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs {
}

export function dataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToHclTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | undefined) {
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
  private _value = new DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference {
    return new DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues {
}

export function dataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToHclTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_value_pairs - computed: true, optional: false, required: false
  private _keyValuePairs = new DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference {
    return new DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData {
}

export function dataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataToTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataToHclTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData | undefined) {
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

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference {
    return new DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScript {
}

export function dataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptToTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptToHclTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_key_values - computed: true, optional: false, required: false
  private _customKeyValues = new DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList(this, "custom_key_values", false);
  public get customKeyValues() {
    return this._customKeyValues;
  }

  // user_data - computed: true, optional: false, required: false
  private _userData = new DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataList(this, "user_data", false);
  public get userData() {
    return this._userData;
  }
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptOutputReference {
    return new DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInit {
}

export function dataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitToTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitToHclTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_init_script - computed: true, optional: false, required: false
  private _cloudInitScript = new DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitCloudInitScriptList(this, "cloud_init_script", false);
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

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitOutputReference {
    return new DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings {
}

export function dataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | undefined) {
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

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference {
    return new DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue {
}

export function dataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToHclTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | undefined) {
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
  private _mapOfStrings = new DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList(this, "map_of_strings", false);
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

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference {
    return new DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs {
}

export function dataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToHclTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | undefined) {
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
  private _value = new DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference {
    return new DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues {
}

export function dataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToHclTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_value_pairs - computed: true, optional: false, required: false
  private _keyValuePairs = new DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference {
    return new DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml {
}

export function dataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToHclTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml | undefined) {
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

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference {
    return new DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScript {
}

export function dataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptToTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptToHclTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_key_values - computed: true, optional: false, required: false
  private _customKeyValues = new DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList(this, "custom_key_values", false);
  public get customKeyValues() {
    return this._customKeyValues;
  }

  // unattend_xml - computed: true, optional: false, required: false
  private _unattendXml = new DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlList(this, "unattend_xml", false);
  public get unattendXml() {
    return this._unattendXml;
  }
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptOutputReference {
    return new DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprep {
}

export function dataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepToTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepToHclTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprep | undefined) {
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
  private _sysprepScript = new DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepSysprepScriptList(this, "sysprep_script", false);
  public get sysprepScript() {
    return this._sysprepScript;
  }
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepOutputReference {
    return new DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGuestCustomizationConfig {
}

export function dataNutanixOvaV2VmConfigGuestCustomizationConfigToTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGuestCustomizationConfigToHclTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGuestCustomizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGuestCustomizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_init - computed: true, optional: false, required: false
  private _cloudInit = new DataNutanixOvaV2VmConfigGuestCustomizationConfigCloudInitList(this, "cloud_init", false);
  public get cloudInit() {
    return this._cloudInit;
  }

  // sysprep - computed: true, optional: false, required: false
  private _sysprep = new DataNutanixOvaV2VmConfigGuestCustomizationConfigSysprepList(this, "sysprep", false);
  public get sysprep() {
    return this._sysprep;
  }
}

export class DataNutanixOvaV2VmConfigGuestCustomizationConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGuestCustomizationConfigOutputReference {
    return new DataNutanixOvaV2VmConfigGuestCustomizationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGuestCustomization {
}

export function dataNutanixOvaV2VmConfigGuestCustomizationToTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGuestCustomizationToHclTerraform(struct?: DataNutanixOvaV2VmConfigGuestCustomization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGuestCustomizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGuestCustomization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGuestCustomization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataNutanixOvaV2VmConfigGuestCustomizationConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
}

export class DataNutanixOvaV2VmConfigGuestCustomizationList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGuestCustomizationOutputReference {
    return new DataNutanixOvaV2VmConfigGuestCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigGuestTools {
}

export function dataNutanixOvaV2VmConfigGuestToolsToTerraform(struct?: DataNutanixOvaV2VmConfigGuestTools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigGuestToolsToHclTerraform(struct?: DataNutanixOvaV2VmConfigGuestTools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigGuestToolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigGuestTools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigGuestTools | undefined) {
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

export class DataNutanixOvaV2VmConfigGuestToolsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigGuestToolsOutputReference {
    return new DataNutanixOvaV2VmConfigGuestToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigHost {
}

export function dataNutanixOvaV2VmConfigHostToTerraform(struct?: DataNutanixOvaV2VmConfigHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigHostToHclTerraform(struct?: DataNutanixOvaV2VmConfigHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigHost | undefined) {
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

export class DataNutanixOvaV2VmConfigHostList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigHostOutputReference {
    return new DataNutanixOvaV2VmConfigHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigNicsBackingInfo {
}

export function dataNutanixOvaV2VmConfigNicsBackingInfoToTerraform(struct?: DataNutanixOvaV2VmConfigNicsBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigNicsBackingInfoToHclTerraform(struct?: DataNutanixOvaV2VmConfigNicsBackingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigNicsBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigNicsBackingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigNicsBackingInfo | undefined) {
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

export class DataNutanixOvaV2VmConfigNicsBackingInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigNicsBackingInfoOutputReference {
    return new DataNutanixOvaV2VmConfigNicsBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddress {
}

export function dataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddressToTerraform(struct?: DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddressToHclTerraform(struct?: DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddress | undefined) {
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

export class DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddressOutputReference {
    return new DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct {
}

export function dataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToTerraform(struct?: DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToHclTerraform(struct?: DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | undefined) {
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

export class DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference {
    return new DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4Config {
}

export function dataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigToTerraform(struct?: DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigToHclTerraform(struct?: DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  private _ipAddress = new DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }

  // secondary_ip_address_list - computed: true, optional: false, required: false
  private _secondaryIpAddressList = new DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructList(this, "secondary_ip_address_list", false);
  public get secondaryIpAddressList() {
    return this._secondaryIpAddressList;
  }

  // should_assign_ip - computed: true, optional: false, required: false
  public get shouldAssignIp() {
    return this.getBooleanAttribute('should_assign_ip');
  }
}

export class DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigOutputReference {
    return new DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses {
}

export function dataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesToTerraform(struct?: DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesToHclTerraform(struct?: DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses | undefined) {
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

export class DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference {
    return new DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4Info {
}

export function dataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoToTerraform(struct?: DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoToHclTerraform(struct?: DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4Info | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4Info | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // learned_ip_addresses - computed: true, optional: false, required: false
  private _learnedIpAddresses = new DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesList(this, "learned_ip_addresses", false);
  public get learnedIpAddresses() {
    return this._learnedIpAddresses;
  }
}

export class DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoOutputReference {
    return new DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigNicsNetworkInfoNetworkFunctionChain {
}

export function dataNutanixOvaV2VmConfigNicsNetworkInfoNetworkFunctionChainToTerraform(struct?: DataNutanixOvaV2VmConfigNicsNetworkInfoNetworkFunctionChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigNicsNetworkInfoNetworkFunctionChainToHclTerraform(struct?: DataNutanixOvaV2VmConfigNicsNetworkInfoNetworkFunctionChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigNicsNetworkInfoNetworkFunctionChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigNicsNetworkInfoNetworkFunctionChain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigNicsNetworkInfoNetworkFunctionChain | undefined) {
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

export class DataNutanixOvaV2VmConfigNicsNetworkInfoNetworkFunctionChainList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigNicsNetworkInfoNetworkFunctionChainOutputReference {
    return new DataNutanixOvaV2VmConfigNicsNetworkInfoNetworkFunctionChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigNicsNetworkInfoSubnet {
}

export function dataNutanixOvaV2VmConfigNicsNetworkInfoSubnetToTerraform(struct?: DataNutanixOvaV2VmConfigNicsNetworkInfoSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigNicsNetworkInfoSubnetToHclTerraform(struct?: DataNutanixOvaV2VmConfigNicsNetworkInfoSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigNicsNetworkInfoSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigNicsNetworkInfoSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigNicsNetworkInfoSubnet | undefined) {
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

export class DataNutanixOvaV2VmConfigNicsNetworkInfoSubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigNicsNetworkInfoSubnetOutputReference {
    return new DataNutanixOvaV2VmConfigNicsNetworkInfoSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigNicsNetworkInfo {
}

export function dataNutanixOvaV2VmConfigNicsNetworkInfoToTerraform(struct?: DataNutanixOvaV2VmConfigNicsNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigNicsNetworkInfoToHclTerraform(struct?: DataNutanixOvaV2VmConfigNicsNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigNicsNetworkInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigNicsNetworkInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigNicsNetworkInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_config - computed: true, optional: false, required: false
  private _ipv4Config = new DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4ConfigList(this, "ipv4_config", false);
  public get ipv4Config() {
    return this._ipv4Config;
  }

  // ipv4_info - computed: true, optional: false, required: false
  private _ipv4Info = new DataNutanixOvaV2VmConfigNicsNetworkInfoIpv4InfoList(this, "ipv4_info", false);
  public get ipv4Info() {
    return this._ipv4Info;
  }

  // network_function_chain - computed: true, optional: false, required: false
  private _networkFunctionChain = new DataNutanixOvaV2VmConfigNicsNetworkInfoNetworkFunctionChainList(this, "network_function_chain", false);
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
  private _subnet = new DataNutanixOvaV2VmConfigNicsNetworkInfoSubnetList(this, "subnet", false);
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

export class DataNutanixOvaV2VmConfigNicsNetworkInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigNicsNetworkInfoOutputReference {
    return new DataNutanixOvaV2VmConfigNicsNetworkInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigNics {
}

export function dataNutanixOvaV2VmConfigNicsToTerraform(struct?: DataNutanixOvaV2VmConfigNics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigNicsToHclTerraform(struct?: DataNutanixOvaV2VmConfigNics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigNicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigNics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigNics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backing_info - computed: true, optional: false, required: false
  private _backingInfo = new DataNutanixOvaV2VmConfigNicsBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // network_info - computed: true, optional: false, required: false
  private _networkInfo = new DataNutanixOvaV2VmConfigNicsNetworkInfoList(this, "network_info", false);
  public get networkInfo() {
    return this._networkInfo;
  }
}

export class DataNutanixOvaV2VmConfigNicsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigNicsOutputReference {
    return new DataNutanixOvaV2VmConfigNicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigOwnershipInfoOwner {
}

export function dataNutanixOvaV2VmConfigOwnershipInfoOwnerToTerraform(struct?: DataNutanixOvaV2VmConfigOwnershipInfoOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigOwnershipInfoOwnerToHclTerraform(struct?: DataNutanixOvaV2VmConfigOwnershipInfoOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigOwnershipInfoOwnerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigOwnershipInfoOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigOwnershipInfoOwner | undefined) {
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

export class DataNutanixOvaV2VmConfigOwnershipInfoOwnerList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigOwnershipInfoOwnerOutputReference {
    return new DataNutanixOvaV2VmConfigOwnershipInfoOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigOwnershipInfo {
}

export function dataNutanixOvaV2VmConfigOwnershipInfoToTerraform(struct?: DataNutanixOvaV2VmConfigOwnershipInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigOwnershipInfoToHclTerraform(struct?: DataNutanixOvaV2VmConfigOwnershipInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigOwnershipInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigOwnershipInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigOwnershipInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new DataNutanixOvaV2VmConfigOwnershipInfoOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }
}

export class DataNutanixOvaV2VmConfigOwnershipInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigOwnershipInfoOutputReference {
    return new DataNutanixOvaV2VmConfigOwnershipInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixOvaV2VmConfigProject {
}

export function dataNutanixOvaV2VmConfigProjectToTerraform(struct?: DataNutanixOvaV2VmConfigProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixOvaV2VmConfigProjectToHclTerraform(struct?: DataNutanixOvaV2VmConfigProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixOvaV2VmConfigProjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixOvaV2VmConfigProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixOvaV2VmConfigProject | undefined) {
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

export class DataNutanixOvaV2VmConfigProjectList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixOvaV2VmConfigProjectOutputReference {
    return new DataNutanixOvaV2VmConfigProjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
