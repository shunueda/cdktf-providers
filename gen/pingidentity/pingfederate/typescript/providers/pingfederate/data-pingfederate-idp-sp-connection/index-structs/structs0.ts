import * as cdktf from 'cdktf';
export interface DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfigurationAdditionalAllowedEntities {
}

export function dataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfigurationAdditionalAllowedEntitiesToTerraform(struct?: DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfigurationAdditionalAllowedEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfigurationAdditionalAllowedEntitiesToHclTerraform(struct?: DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfigurationAdditionalAllowedEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfigurationAdditionalAllowedEntitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfigurationAdditionalAllowedEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfigurationAdditionalAllowedEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_description - computed: true, optional: false, required: false
  public get entityDescription() {
    return this.getStringAttribute('entity_description');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
}

export class DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfigurationAdditionalAllowedEntitiesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfigurationAdditionalAllowedEntitiesOutputReference {
    return new DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfigurationAdditionalAllowedEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfiguration {
}

export function dataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfigurationToTerraform(struct?: DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfigurationToHclTerraform(struct?: DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_allowed_entities - computed: true, optional: false, required: false
  private _additionalAllowedEntities = new DataPingfederateIdpSpConnectionAdditionalAllowedEntitiesConfigurationAdditionalAllowedEntitiesList(this, "additional_allowed_entities", true);
  public get additionalAllowedEntities() {
    return this._additionalAllowedEntities;
  }

  // allow_additional_entities - computed: true, optional: false, required: false
  public get allowAdditionalEntities() {
    return this.getBooleanAttribute('allow_additional_entities');
  }

  // allow_all_entities - computed: true, optional: false, required: false
  public get allowAllEntities() {
    return this.getBooleanAttribute('allow_all_entities');
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceDataStoreRef {
}

export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceFilterFields {
}

export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceFilterFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceFilterFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceFilterFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceFilterFields | undefined) {
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

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceFilterFieldsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference {
    return new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSource {
}

export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter_fields - computed: true, optional: false, required: false
  private _filterFields = new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceFilterFieldsList(this, "filter_fields", true);
  public get filterFields() {
    return this._filterFields;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceDataStoreRef {
}

export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSource {
}

export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // column_names - computed: true, optional: false, required: false
  public get columnNames() {
    return cdktf.Fn.tolist(this.getListAttribute('column_names'));
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceBinaryAttributeSettings {
}

export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceBinaryAttributeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceBinaryAttributeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binary_encoding - computed: true, optional: false, required: false
  public get binaryEncoding() {
    return this.getStringAttribute('binary_encoding');
  }
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference {
    return new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceDataStoreRef {
}

export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSource {
  /**
  * A list of LDAP attributes returned from search and available for mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#search_attributes DataPingfederateIdpSpConnection#search_attributes}
  */
  readonly searchAttributes?: string[];
}

export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAttributes),
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    search_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchAttributes = this._searchAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._searchAttributes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._searchAttributes = value.searchAttributes;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // binary_attribute_settings - computed: true, optional: false, required: false
  private _binaryAttributeSettings = new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap(this, "binary_attribute_settings");
  public get binaryAttributeSettings() {
    return this._binaryAttributeSettings;
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_of_nested_group - computed: true, optional: false, required: false
  public get memberOfNestedGroup() {
    return this.getBooleanAttribute('member_of_nested_group');
  }

  // search_attributes - computed: true, optional: true, required: false
  private _searchAttributes?: string[]; 
  public get searchAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('search_attributes'));
  }
  public set searchAttributes(value: string[]) {
    this._searchAttributes = value;
  }
  public resetSearchAttributes() {
    this._searchAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchAttributesInput() {
    return this._searchAttributes;
  }

  // search_filter - computed: true, optional: false, required: false
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }

  // search_scope - computed: true, optional: false, required: false
  public get searchScope() {
    return this.getStringAttribute('search_scope');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryAttributeSources {
}

export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryAttributeSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryAttributeSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryAttributeSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_attribute_source - computed: true, optional: false, required: false
  private _customAttributeSource = new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesCustomAttributeSourceOutputReference(this, "custom_attribute_source");
  public get customAttributeSource() {
    return this._customAttributeSource;
  }

  // jdbc_attribute_source - computed: true, optional: false, required: false
  private _jdbcAttributeSource = new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesJdbcAttributeSourceOutputReference(this, "jdbc_attribute_source");
  public get jdbcAttributeSource() {
    return this._jdbcAttributeSource;
  }

  // ldap_attribute_source - computed: true, optional: false, required: false
  private _ldapAttributeSource = new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesLdapAttributeSourceOutputReference(this, "ldap_attribute_source");
  public get ldapAttributeSource() {
    return this._ldapAttributeSource;
  }
}

export class DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesOutputReference {
    return new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteriaSource {
}

export function dataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteriaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteriaSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteriaSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteria {
}

export function dataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteriaToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteriaToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // error_result - computed: true, optional: false, required: false
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteriaSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteriaList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteriaOutputReference {
    return new DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaExpressionCriteria {
}

export function dataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaExpressionCriteriaToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaExpressionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaExpressionCriteriaToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaExpressionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaExpressionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaExpressionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaExpressionCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_result - computed: true, optional: false, required: false
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaExpressionCriteriaList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaExpressionCriteriaOutputReference {
    return new DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteria {
}

export function dataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditional_criteria - computed: true, optional: false, required: false
  private _conditionalCriteria = new DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaConditionalCriteriaList(this, "conditional_criteria", true);
  public get conditionalCriteria() {
    return this._conditionalCriteria;
  }

  // expression_criteria - computed: true, optional: false, required: false
  private _expressionCriteria = new DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaExpressionCriteriaList(this, "expression_criteria", true);
  public get expressionCriteria() {
    return this._expressionCriteria;
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQueryPolicy {
}

export function dataPingfederateIdpSpConnectionAttributeQueryPolicyToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryPolicyToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQueryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQueryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQueryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encrypt_assertion - computed: true, optional: false, required: false
  public get encryptAssertion() {
    return this.getBooleanAttribute('encrypt_assertion');
  }

  // require_encrypted_name_id - computed: true, optional: false, required: false
  public get requireEncryptedNameId() {
    return this.getBooleanAttribute('require_encrypted_name_id');
  }

  // require_signed_attribute_query - computed: true, optional: false, required: false
  public get requireSignedAttributeQuery() {
    return this.getBooleanAttribute('require_signed_attribute_query');
  }

  // sign_assertion - computed: true, optional: false, required: false
  public get signAssertion() {
    return this.getBooleanAttribute('sign_assertion');
  }

  // sign_response - computed: true, optional: false, required: false
  public get signResponse() {
    return this.getBooleanAttribute('sign_response');
  }
}
export interface DataPingfederateIdpSpConnectionAttributeQuery {
}

export function dataPingfederateIdpSpConnectionAttributeQueryToTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionAttributeQueryToHclTerraform(struct?: DataPingfederateIdpSpConnectionAttributeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionAttributeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionAttributeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionAttributeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionAttributeQueryAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // attribute_sources - computed: true, optional: false, required: false
  private _attributeSources = new DataPingfederateIdpSpConnectionAttributeQueryAttributeSourcesList(this, "attribute_sources", true);
  public get attributeSources() {
    return this._attributeSources;
  }

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes'));
  }

  // issuance_criteria - computed: true, optional: false, required: false
  private _issuanceCriteria = new DataPingfederateIdpSpConnectionAttributeQueryIssuanceCriteriaOutputReference(this, "issuance_criteria");
  public get issuanceCriteria() {
    return this._issuanceCriteria;
  }

  // policy - computed: true, optional: false, required: false
  private _policy = new DataPingfederateIdpSpConnectionAttributeQueryPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
}
export interface DataPingfederateIdpSpConnectionContactInfo {
}

export function dataPingfederateIdpSpConnectionContactInfoToTerraform(struct?: DataPingfederateIdpSpConnectionContactInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionContactInfoToHclTerraform(struct?: DataPingfederateIdpSpConnectionContactInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionContactInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionContactInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionContactInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // company - computed: true, optional: false, required: false
  public get company() {
    return this.getStringAttribute('company');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // phone - computed: true, optional: false, required: false
  public get phone() {
    return this.getStringAttribute('phone');
  }
}
export interface DataPingfederateIdpSpConnectionCredentialsCertsCertView {
}

export function dataPingfederateIdpSpConnectionCredentialsCertsCertViewToTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsCertsCertView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionCredentialsCertsCertViewToHclTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsCertsCertView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionCredentialsCertsCertViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionCredentialsCertsCertView | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionCredentialsCertsCertView | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crypto_provider - computed: true, optional: false, required: false
  public get cryptoProvider() {
    return this.getStringAttribute('crypto_provider');
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer_dn - computed: true, optional: false, required: false
  public get issuerDn() {
    return this.getStringAttribute('issuer_dn');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // key_size - computed: true, optional: false, required: false
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // sha1_fingerprint - computed: true, optional: false, required: false
  public get sha1Fingerprint() {
    return this.getStringAttribute('sha1_fingerprint');
  }

  // sha256_fingerprint - computed: true, optional: false, required: false
  public get sha256Fingerprint() {
    return this.getStringAttribute('sha256_fingerprint');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject_alternative_names - computed: true, optional: false, required: false
  public get subjectAlternativeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('subject_alternative_names'));
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}
export interface DataPingfederateIdpSpConnectionCredentialsCertsX509File {
}

export function dataPingfederateIdpSpConnectionCredentialsCertsX509FileToTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsCertsX509File): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionCredentialsCertsX509FileToHclTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsCertsX509File): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionCredentialsCertsX509FileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionCredentialsCertsX509File | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionCredentialsCertsX509File | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crypto_provider - computed: true, optional: false, required: false
  public get cryptoProvider() {
    return this.getStringAttribute('crypto_provider');
  }

  // file_data - computed: true, optional: false, required: false
  public get fileData() {
    return this.getStringAttribute('file_data');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionCredentialsCerts {
}

export function dataPingfederateIdpSpConnectionCredentialsCertsToTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionCredentialsCertsToHclTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionCredentialsCertsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionCredentialsCerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionCredentialsCerts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_verification_cert - computed: true, optional: false, required: false
  public get activeVerificationCert() {
    return this.getBooleanAttribute('active_verification_cert');
  }

  // cert_view - computed: true, optional: false, required: false
  private _certView = new DataPingfederateIdpSpConnectionCredentialsCertsCertViewOutputReference(this, "cert_view");
  public get certView() {
    return this._certView;
  }

  // encryption_cert - computed: true, optional: false, required: false
  public get encryptionCert() {
    return this.getBooleanAttribute('encryption_cert');
  }

  // primary_verification_cert - computed: true, optional: false, required: false
  public get primaryVerificationCert() {
    return this.getBooleanAttribute('primary_verification_cert');
  }

  // secondary_verification_cert - computed: true, optional: false, required: false
  public get secondaryVerificationCert() {
    return this.getBooleanAttribute('secondary_verification_cert');
  }

  // x509_file - computed: true, optional: false, required: false
  private _x509File = new DataPingfederateIdpSpConnectionCredentialsCertsX509FileOutputReference(this, "x509_file");
  public get x509File() {
    return this._x509File;
  }
}

export class DataPingfederateIdpSpConnectionCredentialsCertsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionCredentialsCertsOutputReference {
    return new DataPingfederateIdpSpConnectionCredentialsCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionCredentialsDecryptionKeyPairRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#id DataPingfederateIdpSpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataPingfederateIdpSpConnectionCredentialsDecryptionKeyPairRefToTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsDecryptionKeyPairRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPingfederateIdpSpConnectionCredentialsDecryptionKeyPairRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsDecryptionKeyPairRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionCredentialsDecryptionKeyPairRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionCredentialsDecryptionKeyPairRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionCredentialsDecryptionKeyPairRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}
export interface DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsCertView {
}

export function dataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsCertViewToTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsCertView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsCertViewToHclTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsCertView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsCertViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsCertView | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsCertView | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crypto_provider - computed: true, optional: false, required: false
  public get cryptoProvider() {
    return this.getStringAttribute('crypto_provider');
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer_dn - computed: true, optional: false, required: false
  public get issuerDn() {
    return this.getStringAttribute('issuer_dn');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // key_size - computed: true, optional: false, required: false
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // sha1_fingerprint - computed: true, optional: false, required: false
  public get sha1Fingerprint() {
    return this.getStringAttribute('sha1_fingerprint');
  }

  // sha256_fingerprint - computed: true, optional: false, required: false
  public get sha256Fingerprint() {
    return this.getStringAttribute('sha256_fingerprint');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject_alternative_names - computed: true, optional: false, required: false
  public get subjectAlternativeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('subject_alternative_names'));
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}
export interface DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsX509File {
}

export function dataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsX509FileToTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsX509File): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsX509FileToHclTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsX509File): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsX509FileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsX509File | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsX509File | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crypto_provider - computed: true, optional: false, required: false
  public get cryptoProvider() {
    return this.getStringAttribute('crypto_provider');
  }

  // file_data - computed: true, optional: false, required: false
  public get fileData() {
    return this.getStringAttribute('file_data');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCerts {
}

export function dataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsToTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsToHclTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCerts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_verification_cert - computed: true, optional: false, required: false
  public get activeVerificationCert() {
    return this.getBooleanAttribute('active_verification_cert');
  }

  // cert_view - computed: true, optional: false, required: false
  private _certView = new DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsCertViewOutputReference(this, "cert_view");
  public get certView() {
    return this._certView;
  }

  // encryption_cert - computed: true, optional: false, required: false
  public get encryptionCert() {
    return this.getBooleanAttribute('encryption_cert');
  }

  // primary_verification_cert - computed: true, optional: false, required: false
  public get primaryVerificationCert() {
    return this.getBooleanAttribute('primary_verification_cert');
  }

  // secondary_verification_cert - computed: true, optional: false, required: false
  public get secondaryVerificationCert() {
    return this.getBooleanAttribute('secondary_verification_cert');
  }

  // x509_file - computed: true, optional: false, required: false
  private _x509File = new DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsX509FileOutputReference(this, "x509_file");
  public get x509File() {
    return this._x509File;
  }
}

export class DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsOutputReference {
    return new DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthHttpBasicCredentials {
}

export function dataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthHttpBasicCredentialsToTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthHttpBasicCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthHttpBasicCredentialsToHclTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthHttpBasicCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthHttpBasicCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthHttpBasicCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthHttpBasicCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encrypted_password - computed: true, optional: false, required: false
  public get encryptedPassword() {
    return this.getStringAttribute('encrypted_password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuth {
}

export function dataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthToTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthToHclTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certs - computed: true, optional: false, required: false
  private _certs = new DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthCertsList(this, "certs", false);
  public get certs() {
    return this._certs;
  }

  // digital_signature - computed: true, optional: false, required: false
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature');
  }

  // http_basic_credentials - computed: true, optional: false, required: false
  private _httpBasicCredentials = new DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthHttpBasicCredentialsOutputReference(this, "http_basic_credentials");
  public get httpBasicCredentials() {
    return this._httpBasicCredentials;
  }

  // require_ssl - computed: true, optional: false, required: false
  public get requireSsl() {
    return this.getBooleanAttribute('require_ssl');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // verification_issuer_dn - computed: true, optional: false, required: false
  public get verificationIssuerDn() {
    return this.getStringAttribute('verification_issuer_dn');
  }

  // verification_subject_dn - computed: true, optional: false, required: false
  public get verificationSubjectDn() {
    return this.getStringAttribute('verification_subject_dn');
  }
}
export interface DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthHttpBasicCredentials {
}

export function dataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthHttpBasicCredentialsToTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthHttpBasicCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthHttpBasicCredentialsToHclTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthHttpBasicCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthHttpBasicCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthHttpBasicCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthHttpBasicCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encrypted_password - computed: true, optional: false, required: false
  public get encryptedPassword() {
    return this.getStringAttribute('encrypted_password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthSslAuthKeyPairRef {
}

export function dataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthSslAuthKeyPairRefToTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthSslAuthKeyPairRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthSslAuthKeyPairRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthSslAuthKeyPairRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthSslAuthKeyPairRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthSslAuthKeyPairRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthSslAuthKeyPairRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuth {
}

export function dataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthToTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthToHclTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // digital_signature - computed: true, optional: false, required: false
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature');
  }

  // http_basic_credentials - computed: true, optional: false, required: false
  private _httpBasicCredentials = new DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthHttpBasicCredentialsOutputReference(this, "http_basic_credentials");
  public get httpBasicCredentials() {
    return this._httpBasicCredentials;
  }

  // ssl_auth_key_pair_ref - computed: true, optional: false, required: false
  private _sslAuthKeyPairRef = new DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthSslAuthKeyPairRefOutputReference(this, "ssl_auth_key_pair_ref");
  public get sslAuthKeyPairRef() {
    return this._sslAuthKeyPairRef;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // validate_partner_cert - computed: true, optional: false, required: false
  public get validatePartnerCert() {
    return this.getBooleanAttribute('validate_partner_cert');
  }
}
export interface DataPingfederateIdpSpConnectionCredentialsSecondaryDecryptionKeyPairRef {
}

export function dataPingfederateIdpSpConnectionCredentialsSecondaryDecryptionKeyPairRefToTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsSecondaryDecryptionKeyPairRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionCredentialsSecondaryDecryptionKeyPairRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsSecondaryDecryptionKeyPairRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionCredentialsSecondaryDecryptionKeyPairRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionCredentialsSecondaryDecryptionKeyPairRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionCredentialsSecondaryDecryptionKeyPairRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionCredentialsSigningSettingsAlternativeSigningKeyPairRefs {
}

export function dataPingfederateIdpSpConnectionCredentialsSigningSettingsAlternativeSigningKeyPairRefsToTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsSigningSettingsAlternativeSigningKeyPairRefs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionCredentialsSigningSettingsAlternativeSigningKeyPairRefsToHclTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsSigningSettingsAlternativeSigningKeyPairRefs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionCredentialsSigningSettingsAlternativeSigningKeyPairRefsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionCredentialsSigningSettingsAlternativeSigningKeyPairRefs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionCredentialsSigningSettingsAlternativeSigningKeyPairRefs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataPingfederateIdpSpConnectionCredentialsSigningSettingsAlternativeSigningKeyPairRefsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionCredentialsSigningSettingsAlternativeSigningKeyPairRefsOutputReference {
    return new DataPingfederateIdpSpConnectionCredentialsSigningSettingsAlternativeSigningKeyPairRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionCredentialsSigningSettingsSigningKeyPairRef {
}

export function dataPingfederateIdpSpConnectionCredentialsSigningSettingsSigningKeyPairRefToTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsSigningSettingsSigningKeyPairRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionCredentialsSigningSettingsSigningKeyPairRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsSigningSettingsSigningKeyPairRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionCredentialsSigningSettingsSigningKeyPairRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionCredentialsSigningSettingsSigningKeyPairRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionCredentialsSigningSettingsSigningKeyPairRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionCredentialsSigningSettings {
}

export function dataPingfederateIdpSpConnectionCredentialsSigningSettingsToTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsSigningSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionCredentialsSigningSettingsToHclTerraform(struct?: DataPingfederateIdpSpConnectionCredentialsSigningSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionCredentialsSigningSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionCredentialsSigningSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionCredentialsSigningSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // alternative_signing_key_pair_refs - computed: true, optional: false, required: false
  private _alternativeSigningKeyPairRefs = new DataPingfederateIdpSpConnectionCredentialsSigningSettingsAlternativeSigningKeyPairRefsList(this, "alternative_signing_key_pair_refs", true);
  public get alternativeSigningKeyPairRefs() {
    return this._alternativeSigningKeyPairRefs;
  }

  // include_cert_in_signature - computed: true, optional: false, required: false
  public get includeCertInSignature() {
    return this.getBooleanAttribute('include_cert_in_signature');
  }

  // include_raw_key_in_signature - computed: true, optional: false, required: false
  public get includeRawKeyInSignature() {
    return this.getBooleanAttribute('include_raw_key_in_signature');
  }

  // signing_key_pair_ref - computed: true, optional: false, required: false
  private _signingKeyPairRef = new DataPingfederateIdpSpConnectionCredentialsSigningSettingsSigningKeyPairRefOutputReference(this, "signing_key_pair_ref");
  public get signingKeyPairRef() {
    return this._signingKeyPairRef;
  }
}
export interface DataPingfederateIdpSpConnectionCredentials {
  /**
  * A reference to a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#decryption_key_pair_ref DataPingfederateIdpSpConnection#decryption_key_pair_ref}
  */
  readonly decryptionKeyPairRef?: DataPingfederateIdpSpConnectionCredentialsDecryptionKeyPairRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#outbound_back_channel_auth DataPingfederateIdpSpConnection#outbound_back_channel_auth}
  */
  readonly outboundBackChannelAuth?: DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuth;
}

export function dataPingfederateIdpSpConnectionCredentialsToTerraform(struct?: DataPingfederateIdpSpConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_key_pair_ref: dataPingfederateIdpSpConnectionCredentialsDecryptionKeyPairRefToTerraform(struct!.decryptionKeyPairRef),
    outbound_back_channel_auth: dataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthToTerraform(struct!.outboundBackChannelAuth),
  }
}


export function dataPingfederateIdpSpConnectionCredentialsToHclTerraform(struct?: DataPingfederateIdpSpConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_key_pair_ref: {
      value: dataPingfederateIdpSpConnectionCredentialsDecryptionKeyPairRefToHclTerraform(struct!.decryptionKeyPairRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateIdpSpConnectionCredentialsDecryptionKeyPairRef",
    },
    outbound_back_channel_auth: {
      value: dataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthToHclTerraform(struct!.outboundBackChannelAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionKeyPairRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionKeyPairRef = this._decryptionKeyPairRef?.internalValue;
    }
    if (this._outboundBackChannelAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundBackChannelAuth = this._outboundBackChannelAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionKeyPairRef.internalValue = undefined;
      this._outboundBackChannelAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionKeyPairRef.internalValue = value.decryptionKeyPairRef;
      this._outboundBackChannelAuth.internalValue = value.outboundBackChannelAuth;
    }
  }

  // block_encryption_algorithm - computed: true, optional: false, required: false
  public get blockEncryptionAlgorithm() {
    return this.getStringAttribute('block_encryption_algorithm');
  }

  // certs - computed: true, optional: false, required: false
  private _certs = new DataPingfederateIdpSpConnectionCredentialsCertsList(this, "certs", false);
  public get certs() {
    return this._certs;
  }

  // decryption_key_pair_ref - computed: true, optional: true, required: false
  private _decryptionKeyPairRef = new DataPingfederateIdpSpConnectionCredentialsDecryptionKeyPairRefOutputReference(this, "decryption_key_pair_ref");
  public get decryptionKeyPairRef() {
    return this._decryptionKeyPairRef;
  }
  public putDecryptionKeyPairRef(value: DataPingfederateIdpSpConnectionCredentialsDecryptionKeyPairRef) {
    this._decryptionKeyPairRef.internalValue = value;
  }
  public resetDecryptionKeyPairRef() {
    this._decryptionKeyPairRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionKeyPairRefInput() {
    return this._decryptionKeyPairRef.internalValue;
  }

  // inbound_back_channel_auth - computed: true, optional: false, required: false
  private _inboundBackChannelAuth = new DataPingfederateIdpSpConnectionCredentialsInboundBackChannelAuthOutputReference(this, "inbound_back_channel_auth");
  public get inboundBackChannelAuth() {
    return this._inboundBackChannelAuth;
  }

  // key_transport_algorithm - computed: true, optional: false, required: false
  public get keyTransportAlgorithm() {
    return this.getStringAttribute('key_transport_algorithm');
  }

  // outbound_back_channel_auth - computed: true, optional: true, required: false
  private _outboundBackChannelAuth = new DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuthOutputReference(this, "outbound_back_channel_auth");
  public get outboundBackChannelAuth() {
    return this._outboundBackChannelAuth;
  }
  public putOutboundBackChannelAuth(value: DataPingfederateIdpSpConnectionCredentialsOutboundBackChannelAuth) {
    this._outboundBackChannelAuth.internalValue = value;
  }
  public resetOutboundBackChannelAuth() {
    this._outboundBackChannelAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundBackChannelAuthInput() {
    return this._outboundBackChannelAuth.internalValue;
  }

  // secondary_decryption_key_pair_ref - computed: true, optional: false, required: false
  private _secondaryDecryptionKeyPairRef = new DataPingfederateIdpSpConnectionCredentialsSecondaryDecryptionKeyPairRefOutputReference(this, "secondary_decryption_key_pair_ref");
  public get secondaryDecryptionKeyPairRef() {
    return this._secondaryDecryptionKeyPairRef;
  }

  // signing_settings - computed: true, optional: false, required: false
  private _signingSettings = new DataPingfederateIdpSpConnectionCredentialsSigningSettingsOutputReference(this, "signing_settings");
  public get signingSettings() {
    return this._signingSettings;
  }

  // verification_issuer_dn - computed: true, optional: false, required: false
  public get verificationIssuerDn() {
    return this.getStringAttribute('verification_issuer_dn');
  }

  // verification_subject_dn - computed: true, optional: false, required: false
  public get verificationSubjectDn() {
    return this.getStringAttribute('verification_subject_dn');
  }
}
export interface DataPingfederateIdpSpConnectionExtendedProperties {
}

export function dataPingfederateIdpSpConnectionExtendedPropertiesToTerraform(struct?: DataPingfederateIdpSpConnectionExtendedProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionExtendedPropertiesToHclTerraform(struct?: DataPingfederateIdpSpConnectionExtendedProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionExtendedPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionExtendedProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionExtendedProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataPingfederateIdpSpConnectionExtendedPropertiesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionExtendedPropertiesOutputReference {
    return new DataPingfederateIdpSpConnectionExtendedPropertiesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionMetadataReloadSettingsMetadataUrlRef {
}

export function dataPingfederateIdpSpConnectionMetadataReloadSettingsMetadataUrlRefToTerraform(struct?: DataPingfederateIdpSpConnectionMetadataReloadSettingsMetadataUrlRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionMetadataReloadSettingsMetadataUrlRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionMetadataReloadSettingsMetadataUrlRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionMetadataReloadSettingsMetadataUrlRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionMetadataReloadSettingsMetadataUrlRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionMetadataReloadSettingsMetadataUrlRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionMetadataReloadSettings {
}

export function dataPingfederateIdpSpConnectionMetadataReloadSettingsToTerraform(struct?: DataPingfederateIdpSpConnectionMetadataReloadSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionMetadataReloadSettingsToHclTerraform(struct?: DataPingfederateIdpSpConnectionMetadataReloadSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionMetadataReloadSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionMetadataReloadSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionMetadataReloadSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_auto_metadata_update - computed: true, optional: false, required: false
  public get enableAutoMetadataUpdate() {
    return this.getBooleanAttribute('enable_auto_metadata_update');
  }

  // metadata_url_ref - computed: true, optional: false, required: false
  private _metadataUrlRef = new DataPingfederateIdpSpConnectionMetadataReloadSettingsMetadataUrlRefOutputReference(this, "metadata_url_ref");
  public get metadataUrlRef() {
    return this._metadataUrlRef;
  }
}
export interface DataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMappingSaasFieldInfo {
  /**
  * The character case of the field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#character_case DataPingfederateIdpSpConnection#character_case}
  */
  readonly characterCase?: string;
  /**
  * Indicates whether this field is a create only field and cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#create_only DataPingfederateIdpSpConnection#create_only}
  */
  readonly createOnly?: boolean | cdktf.IResolvable;
  /**
  * The default value for the target field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#default_value DataPingfederateIdpSpConnection#default_value}
  */
  readonly defaultValue?: string;
  /**
  * An OGNL expression to obtain a value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#expression DataPingfederateIdpSpConnection#expression}
  */
  readonly expression?: string;
  /**
  * Indicates whether the attribute should be masked in server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#masked DataPingfederateIdpSpConnection#masked}
  */
  readonly masked?: boolean | cdktf.IResolvable;
  /**
  * Indicates how the field shall be parsed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#parser DataPingfederateIdpSpConnection#parser}
  */
  readonly parser?: string;
  /**
  * Indicates whether field should be trimmed before provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#trim DataPingfederateIdpSpConnection#trim}
  */
  readonly trim?: boolean | cdktf.IResolvable;
}

export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMappingSaasFieldInfoToTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMappingSaasFieldInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    character_case: cdktf.stringToTerraform(struct!.characterCase),
    create_only: cdktf.booleanToTerraform(struct!.createOnly),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    expression: cdktf.stringToTerraform(struct!.expression),
    masked: cdktf.booleanToTerraform(struct!.masked),
    parser: cdktf.stringToTerraform(struct!.parser),
    trim: cdktf.booleanToTerraform(struct!.trim),
  }
}


export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMappingSaasFieldInfoToHclTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMappingSaasFieldInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    character_case: {
      value: cdktf.stringToHclTerraform(struct!.characterCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_only: {
      value: cdktf.booleanToHclTerraform(struct!.createOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    masked: {
      value: cdktf.booleanToHclTerraform(struct!.masked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parser: {
      value: cdktf.stringToHclTerraform(struct!.parser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim: {
      value: cdktf.booleanToHclTerraform(struct!.trim),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMappingSaasFieldInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMappingSaasFieldInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._characterCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterCase = this._characterCase;
    }
    if (this._createOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.createOnly = this._createOnly;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._masked !== undefined) {
      hasAnyValues = true;
      internalValueResult.masked = this._masked;
    }
    if (this._parser !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser;
    }
    if (this._trim !== undefined) {
      hasAnyValues = true;
      internalValueResult.trim = this._trim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMappingSaasFieldInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._characterCase = undefined;
      this._createOnly = undefined;
      this._defaultValue = undefined;
      this._expression = undefined;
      this._masked = undefined;
      this._parser = undefined;
      this._trim = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._characterCase = value.characterCase;
      this._createOnly = value.createOnly;
      this._defaultValue = value.defaultValue;
      this._expression = value.expression;
      this._masked = value.masked;
      this._parser = value.parser;
      this._trim = value.trim;
    }
  }

  // attribute_names - computed: true, optional: false, required: false
  public get attributeNames() {
    return this.getListAttribute('attribute_names');
  }

  // character_case - computed: true, optional: true, required: false
  private _characterCase?: string; 
  public get characterCase() {
    return this.getStringAttribute('character_case');
  }
  public set characterCase(value: string) {
    this._characterCase = value;
  }
  public resetCharacterCase() {
    this._characterCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterCaseInput() {
    return this._characterCase;
  }

  // create_only - computed: true, optional: true, required: false
  private _createOnly?: boolean | cdktf.IResolvable; 
  public get createOnly() {
    return this.getBooleanAttribute('create_only');
  }
  public set createOnly(value: boolean | cdktf.IResolvable) {
    this._createOnly = value;
  }
  public resetCreateOnly() {
    this._createOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createOnlyInput() {
    return this._createOnly;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // masked - computed: true, optional: true, required: false
  private _masked?: boolean | cdktf.IResolvable; 
  public get masked() {
    return this.getBooleanAttribute('masked');
  }
  public set masked(value: boolean | cdktf.IResolvable) {
    this._masked = value;
  }
  public resetMasked() {
    this._masked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskedInput() {
    return this._masked;
  }

  // parser - computed: true, optional: true, required: false
  private _parser?: string; 
  public get parser() {
    return this.getStringAttribute('parser');
  }
  public set parser(value: string) {
    this._parser = value;
  }
  public resetParser() {
    this._parser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser;
  }

  // trim - computed: true, optional: true, required: false
  private _trim?: boolean | cdktf.IResolvable; 
  public get trim() {
    return this.getBooleanAttribute('trim');
  }
  public set trim(value: boolean | cdktf.IResolvable) {
    this._trim = value;
  }
  public resetTrim() {
    this._trim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimInput() {
    return this._trim;
  }
}
export interface DataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMapping {
}

export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMappingToTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMappingToHclTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // saas_field_info - computed: true, optional: false, required: false
  private _saasFieldInfo = new DataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMappingSaasFieldInfoOutputReference(this, "saas_field_info");
  public get saasFieldInfo() {
    return this._saasFieldInfo;
  }
}

export class DataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMappingList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMappingOutputReference {
    return new DataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceAccountManagementSettings {
}

export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceAccountManagementSettingsToTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceAccountManagementSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceAccountManagementSettingsToHclTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceAccountManagementSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceAccountManagementSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceAccountManagementSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceAccountManagementSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_status_algorithm - computed: true, optional: false, required: false
  public get accountStatusAlgorithm() {
    return this.getStringAttribute('account_status_algorithm');
  }

  // account_status_attribute_name - computed: true, optional: false, required: false
  public get accountStatusAttributeName() {
    return this.getStringAttribute('account_status_attribute_name');
  }

  // default_status - computed: true, optional: false, required: false
  public get defaultStatus() {
    return this.getBooleanAttribute('default_status');
  }

  // flag_comparison_status - computed: true, optional: false, required: false
  public get flagComparisonStatus() {
    return this.getBooleanAttribute('flag_comparison_status');
  }

  // flag_comparison_value - computed: true, optional: false, required: false
  public get flagComparisonValue() {
    return this.getStringAttribute('flag_comparison_value');
  }
}
export interface DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceChangeDetectionSettings {
}

export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceChangeDetectionSettingsToTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceChangeDetectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceChangeDetectionSettingsToHclTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceChangeDetectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceChangeDetectionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceChangeDetectionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceChangeDetectionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // changed_users_algorithm - computed: true, optional: false, required: false
  public get changedUsersAlgorithm() {
    return this.getStringAttribute('changed_users_algorithm');
  }

  // group_object_class - computed: true, optional: false, required: false
  public get groupObjectClass() {
    return this.getStringAttribute('group_object_class');
  }

  // time_stamp_attribute_name - computed: true, optional: false, required: false
  public get timeStampAttributeName() {
    return this.getStringAttribute('time_stamp_attribute_name');
  }

  // user_object_class - computed: true, optional: false, required: false
  public get userObjectClass() {
    return this.getStringAttribute('user_object_class');
  }

  // usn_attribute_name - computed: true, optional: false, required: false
  public get usnAttributeName() {
    return this.getStringAttribute('usn_attribute_name');
  }
}
export interface DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceDataSource {
}

export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceDataSourceToTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceDataSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupMembershipDetection {
}

export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupMembershipDetectionToTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupMembershipDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupMembershipDetectionToHclTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupMembershipDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupMembershipDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupMembershipDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupMembershipDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_member_attribute_name - computed: true, optional: false, required: false
  public get groupMemberAttributeName() {
    return this.getStringAttribute('group_member_attribute_name');
  }

  // member_of_group_attribute_name - computed: true, optional: false, required: false
  public get memberOfGroupAttributeName() {
    return this.getStringAttribute('member_of_group_attribute_name');
  }
}
export interface DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupSourceLocation {
}

export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupSourceLocationToTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupSourceLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupSourceLocationToHclTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupSourceLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupSourceLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupSourceLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupSourceLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // group_dn - computed: true, optional: false, required: false
  public get groupDn() {
    return this.getStringAttribute('group_dn');
  }

  // nested_search - computed: true, optional: false, required: false
  public get nestedSearch() {
    return this.getBooleanAttribute('nested_search');
  }
}
export interface DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceUserSourceLocation {
}

export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceUserSourceLocationToTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceUserSourceLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceUserSourceLocationToHclTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceUserSourceLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceUserSourceLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceUserSourceLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceUserSourceLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // group_dn - computed: true, optional: false, required: false
  public get groupDn() {
    return this.getStringAttribute('group_dn');
  }

  // nested_search - computed: true, optional: false, required: false
  public get nestedSearch() {
    return this.getBooleanAttribute('nested_search');
  }
}
export interface DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSource {
}

export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceToTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_management_settings - computed: true, optional: false, required: false
  private _accountManagementSettings = new DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceAccountManagementSettingsOutputReference(this, "account_management_settings");
  public get accountManagementSettings() {
    return this._accountManagementSettings;
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // change_detection_settings - computed: true, optional: false, required: false
  private _changeDetectionSettings = new DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceChangeDetectionSettingsOutputReference(this, "change_detection_settings");
  public get changeDetectionSettings() {
    return this._changeDetectionSettings;
  }

  // data_source - computed: true, optional: false, required: false
  private _dataSource = new DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }

  // group_membership_detection - computed: true, optional: false, required: false
  private _groupMembershipDetection = new DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupMembershipDetectionOutputReference(this, "group_membership_detection");
  public get groupMembershipDetection() {
    return this._groupMembershipDetection;
  }

  // group_source_location - computed: true, optional: false, required: false
  private _groupSourceLocation = new DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceGroupSourceLocationOutputReference(this, "group_source_location");
  public get groupSourceLocation() {
    return this._groupSourceLocation;
  }

  // guid_attribute_name - computed: true, optional: false, required: false
  public get guidAttributeName() {
    return this.getStringAttribute('guid_attribute_name');
  }

  // guid_binary - computed: true, optional: false, required: false
  public get guidBinary() {
    return this.getBooleanAttribute('guid_binary');
  }

  // user_source_location - computed: true, optional: false, required: false
  private _userSourceLocation = new DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceUserSourceLocationOutputReference(this, "user_source_location");
  public get userSourceLocation() {
    return this._userSourceLocation;
  }
}
export interface DataPingfederateIdpSpConnectionOutboundProvisionChannels {
}

export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsToTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionOutboundProvisionChannelsToHclTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionChannels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionOutboundProvisionChannelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionOutboundProvisionChannels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionOutboundProvisionChannels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // attribute_mapping - computed: true, optional: false, required: false
  private _attributeMapping = new DataPingfederateIdpSpConnectionOutboundProvisionChannelsAttributeMappingList(this, "attribute_mapping", true);
  public get attributeMapping() {
    return this._attributeMapping;
  }

  // channel_source - computed: true, optional: false, required: false
  private _channelSource = new DataPingfederateIdpSpConnectionOutboundProvisionChannelsChannelSourceOutputReference(this, "channel_source");
  public get channelSource() {
    return this._channelSource;
  }

  // max_threads - computed: true, optional: false, required: false
  public get maxThreads() {
    return this.getNumberAttribute('max_threads');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}

export class DataPingfederateIdpSpConnectionOutboundProvisionChannelsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionOutboundProvisionChannelsOutputReference {
    return new DataPingfederateIdpSpConnectionOutboundProvisionChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionOutboundProvisionCustomSchemaAttributes {
}

export function dataPingfederateIdpSpConnectionOutboundProvisionCustomSchemaAttributesToTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionCustomSchemaAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionOutboundProvisionCustomSchemaAttributesToHclTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionCustomSchemaAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionOutboundProvisionCustomSchemaAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionOutboundProvisionCustomSchemaAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionOutboundProvisionCustomSchemaAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multi_valued - computed: true, optional: false, required: false
  public get multiValued() {
    return this.getBooleanAttribute('multi_valued');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sub_attributes - computed: true, optional: false, required: false
  public get subAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('sub_attributes'));
  }

  // types - computed: true, optional: false, required: false
  public get types() {
    return cdktf.Fn.tolist(this.getListAttribute('types'));
  }
}

export class DataPingfederateIdpSpConnectionOutboundProvisionCustomSchemaAttributesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionOutboundProvisionCustomSchemaAttributesOutputReference {
    return new DataPingfederateIdpSpConnectionOutboundProvisionCustomSchemaAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionOutboundProvisionCustomSchema {
}

export function dataPingfederateIdpSpConnectionOutboundProvisionCustomSchemaToTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionCustomSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionOutboundProvisionCustomSchemaToHclTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionCustomSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionOutboundProvisionCustomSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionOutboundProvisionCustomSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionOutboundProvisionCustomSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataPingfederateIdpSpConnectionOutboundProvisionCustomSchemaAttributesList(this, "attributes", true);
  public get attributes() {
    return this._attributes;
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export interface DataPingfederateIdpSpConnectionOutboundProvisionTargetSettings {
}

export function dataPingfederateIdpSpConnectionOutboundProvisionTargetSettingsToTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionTargetSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionOutboundProvisionTargetSettingsToHclTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvisionTargetSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionOutboundProvisionTargetSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionOutboundProvisionTargetSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionOutboundProvisionTargetSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encrypted_value - computed: true, optional: false, required: false
  public get encryptedValue() {
    return this.getStringAttribute('encrypted_value');
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

export class DataPingfederateIdpSpConnectionOutboundProvisionTargetSettingsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionOutboundProvisionTargetSettingsOutputReference {
    return new DataPingfederateIdpSpConnectionOutboundProvisionTargetSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionOutboundProvision {
}

export function dataPingfederateIdpSpConnectionOutboundProvisionToTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionOutboundProvisionToHclTerraform(struct?: DataPingfederateIdpSpConnectionOutboundProvision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionOutboundProvisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionOutboundProvision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionOutboundProvision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channels - computed: true, optional: false, required: false
  private _channels = new DataPingfederateIdpSpConnectionOutboundProvisionChannelsList(this, "channels", false);
  public get channels() {
    return this._channels;
  }

  // custom_schema - computed: true, optional: false, required: false
  private _customSchema = new DataPingfederateIdpSpConnectionOutboundProvisionCustomSchemaOutputReference(this, "custom_schema");
  public get customSchema() {
    return this._customSchema;
  }

  // target_settings - computed: true, optional: false, required: false
  private _targetSettings = new DataPingfederateIdpSpConnectionOutboundProvisionTargetSettingsList(this, "target_settings", true);
  public get targetSettings() {
    return this._targetSettings;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractCoreAttributes {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractCoreAttributesToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractCoreAttributesToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractCoreAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractCoreAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractCoreAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // masked - computed: true, optional: false, required: false
  public get masked() {
    return this.getBooleanAttribute('masked');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pseudonym - computed: true, optional: false, required: false
  public get pseudonym() {
    return this.getBooleanAttribute('pseudonym');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractCoreAttributesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractCoreAttributesOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractCoreAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractExtendedAttributes {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractExtendedAttributesToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractExtendedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractExtendedAttributesToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractExtendedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractExtendedAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractExtendedAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractExtendedAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // masked - computed: true, optional: false, required: false
  public get masked() {
    return this.getBooleanAttribute('masked');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pseudonym - computed: true, optional: false, required: false
  public get pseudonym() {
    return this.getBooleanAttribute('pseudonym');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractExtendedAttributesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractExtendedAttributesOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContract {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_attributes - computed: true, optional: false, required: false
  private _coreAttributes = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractCoreAttributesList(this, "core_attributes", true);
  public get coreAttributes() {
    return this._coreAttributes;
  }

  // extended_attributes - computed: true, optional: false, required: false
  private _extendedAttributes = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractExtendedAttributesList(this, "extended_attributes", true);
  public get extendedAttributes() {
    return this._extendedAttributes;
  }

  // mask_ognl_values - computed: true, optional: false, required: false
  public get maskOgnlValues() {
    return this.getBooleanAttribute('mask_ognl_values');
  }

  // unique_user_key_attribute - computed: true, optional: false, required: false
  public get uniqueUserKeyAttribute() {
    return this.getStringAttribute('unique_user_key_attribute');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceFilterFields | undefined) {
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

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter_fields - computed: true, optional: false, required: false
  private _filterFields = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceFilterFieldsList(this, "filter_fields", true);
  public get filterFields() {
    return this._filterFields;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // column_names - computed: true, optional: false, required: false
  public get columnNames() {
    return cdktf.Fn.tolist(this.getListAttribute('column_names'));
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binary_encoding - computed: true, optional: false, required: false
  public get binaryEncoding() {
    return this.getStringAttribute('binary_encoding');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSource {
  /**
  * A list of LDAP attributes returned from search and available for mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#search_attributes DataPingfederateIdpSpConnection#search_attributes}
  */
  readonly searchAttributes?: string[];
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAttributes),
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    search_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchAttributes = this._searchAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._searchAttributes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._searchAttributes = value.searchAttributes;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // binary_attribute_settings - computed: true, optional: false, required: false
  private _binaryAttributeSettings = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap(this, "binary_attribute_settings");
  public get binaryAttributeSettings() {
    return this._binaryAttributeSettings;
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_of_nested_group - computed: true, optional: false, required: false
  public get memberOfNestedGroup() {
    return this.getBooleanAttribute('member_of_nested_group');
  }

  // search_attributes - computed: true, optional: true, required: false
  private _searchAttributes?: string[]; 
  public get searchAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('search_attributes'));
  }
  public set searchAttributes(value: string[]) {
    this._searchAttributes = value;
  }
  public resetSearchAttributes() {
    this._searchAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchAttributesInput() {
    return this._searchAttributes;
  }

  // search_filter - computed: true, optional: false, required: false
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }

  // search_scope - computed: true, optional: false, required: false
  public get searchScope() {
    return this.getStringAttribute('search_scope');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSources {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_attribute_source - computed: true, optional: false, required: false
  private _customAttributeSource = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesCustomAttributeSourceOutputReference(this, "custom_attribute_source");
  public get customAttributeSource() {
    return this._customAttributeSource;
  }

  // jdbc_attribute_source - computed: true, optional: false, required: false
  private _jdbcAttributeSource = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesJdbcAttributeSourceOutputReference(this, "jdbc_attribute_source");
  public get jdbcAttributeSource() {
    return this._jdbcAttributeSource;
  }

  // ldap_attribute_source - computed: true, optional: false, required: false
  private _ldapAttributeSource = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesLdapAttributeSourceOutputReference(this, "ldap_attribute_source");
  public get ldapAttributeSource() {
    return this._ldapAttributeSource;
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteriaSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteriaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteriaSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteriaSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteria {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteriaToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteriaToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // error_result - computed: true, optional: false, required: false
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteriaSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteriaList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteriaOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaExpressionCriteria {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaExpressionCriteriaToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaExpressionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaExpressionCriteriaToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaExpressionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaExpressionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaExpressionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaExpressionCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_result - computed: true, optional: false, required: false
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaExpressionCriteriaList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaExpressionCriteriaOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteria {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditional_criteria - computed: true, optional: false, required: false
  private _conditionalCriteria = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaConditionalCriteriaList(this, "conditional_criteria", true);
  public get conditionalCriteria() {
    return this._conditionalCriteria;
  }

  // expression_criteria - computed: true, optional: false, required: false
  private _expressionCriteria = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaExpressionCriteriaList(this, "expression_criteria", true);
  public get expressionCriteria() {
    return this._expressionCriteria;
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMapping {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // attribute_sources - computed: true, optional: false, required: false
  private _attributeSources = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingAttributeSourcesList(this, "attribute_sources", true);
  public get attributeSources() {
    return this._attributeSources;
  }

  // issuance_criteria - computed: true, optional: false, required: false
  private _issuanceCriteria = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingIssuanceCriteriaOutputReference(this, "issuance_criteria");
  public get issuanceCriteria() {
    return this._issuanceCriteria;
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#name DataPingfederateIdpSpConnection#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#value DataPingfederateIdpSpConnection#value}
  */
  readonly value: string;
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFields | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFields[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsAll {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#name DataPingfederateIdpSpConnection#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#value DataPingfederateIdpSpConnection#value}
  */
  readonly value: string;
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsAllToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsAllToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsAll): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsAllList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsAll[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsAllOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFields {
  /**
  * For encrypted or hashed fields, this attribute contains the encrypted representation of the field's value, if a value is defined. Either this attribute or `value` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#encrypted_value DataPingfederateIdpSpConnection#encrypted_value}
  */
  readonly encryptedValue?: string;
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#name DataPingfederateIdpSpConnection#name}
  */
  readonly name: string;
  /**
  * The sensitive value for the configuration field. Either this attribute or `encrypted_value` must be specified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#value DataPingfederateIdpSpConnection#value}
  */
  readonly value?: string;
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFieldsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_value: cdktf.stringToTerraform(struct!.encryptedValue),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFieldsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_value: {
      value: cdktf.stringToHclTerraform(struct!.encryptedValue),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedValue = this._encryptedValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptedValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptedValue = value.encryptedValue;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // encrypted_value - computed: true, optional: true, required: false
  private _encryptedValue?: string; 
  public get encryptedValue() {
    return this.getStringAttribute('encrypted_value');
  }
  public set encryptedValue(value: string) {
    this._encryptedValue = value;
  }
  public resetEncryptedValue() {
    this._encryptedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedValueInput() {
    return this._encryptedValue;
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFieldsList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFields[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFieldsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#name DataPingfederateIdpSpConnection#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#value DataPingfederateIdpSpConnection#value}
  */
  readonly value: string;
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFieldsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFieldsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFields | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFieldsList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFields[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFieldsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFields {
  /**
  * For encrypted or hashed fields, this attribute contains the encrypted representation of the field's value, if a value is defined. Either this attribute or `value` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#encrypted_value DataPingfederateIdpSpConnection#encrypted_value}
  */
  readonly encryptedValue?: string;
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#name DataPingfederateIdpSpConnection#name}
  */
  readonly name: string;
  /**
  * The sensitive value for the configuration field. Either this attribute or `encrypted_value` must be specified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#value DataPingfederateIdpSpConnection#value}
  */
  readonly value?: string;
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFieldsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_value: cdktf.stringToTerraform(struct!.encryptedValue),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFieldsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_value: {
      value: cdktf.stringToHclTerraform(struct!.encryptedValue),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedValue = this._encryptedValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptedValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptedValue = value.encryptedValue;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // encrypted_value - computed: true, optional: true, required: false
  private _encryptedValue?: string; 
  public get encryptedValue() {
    return this.getStringAttribute('encrypted_value');
  }
  public set encryptedValue(value: string) {
    this._encryptedValue = value;
  }
  public resetEncryptedValue() {
    this._encryptedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedValueInput() {
    return this._encryptedValue;
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFieldsList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFieldsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRows {
  /**
  * Whether this row is the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#default_row DataPingfederateIdpSpConnection#default_row}
  */
  readonly defaultRow?: boolean | cdktf.IResolvable;
  /**
  * The configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#fields DataPingfederateIdpSpConnection#fields}
  */
  readonly fields?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFields[] | cdktf.IResolvable;
  /**
  * The sensitive configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#sensitive_fields DataPingfederateIdpSpConnection#sensitive_fields}
  */
  readonly sensitiveFields?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable;
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_row: cdktf.booleanToTerraform(struct!.defaultRow),
    fields: cdktf.listMapper(dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFieldsToTerraform, false)(struct!.fields),
    sensitive_fields: cdktf.listMapper(dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFieldsToTerraform, false)(struct!.sensitiveFields),
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_row: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fields: {
      value: cdktf.listMapperHcl(dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFieldsList",
    },
    sensitive_fields: {
      value: cdktf.listMapperHcl(dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFieldsToHclTerraform, false)(struct!.sensitiveFields),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRow !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRow = this._defaultRow;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._sensitiveFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveFields = this._sensitiveFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultRow = undefined;
      this._fields.internalValue = undefined;
      this._sensitiveFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultRow = value.defaultRow;
      this._fields.internalValue = value.fields;
      this._sensitiveFields.internalValue = value.sensitiveFields;
    }
  }

  // default_row - computed: true, optional: true, required: false
  private _defaultRow?: boolean | cdktf.IResolvable; 
  public get defaultRow() {
    return this.getBooleanAttribute('default_row');
  }
  public set defaultRow(value: boolean | cdktf.IResolvable) {
    this._defaultRow = value;
  }
  public resetDefaultRow() {
    this._defaultRow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRowInput() {
    return this._defaultRow;
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // sensitive_fields - computed: true, optional: true, required: false
  private _sensitiveFields = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFieldsList(this, "sensitive_fields", true);
  public get sensitiveFields() {
    return this._sensitiveFields;
  }
  public putSensitiveFields(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable) {
    this._sensitiveFields.internalValue = value;
  }
  public resetSensitiveFields() {
    this._sensitiveFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveFieldsInput() {
    return this._sensitiveFields.internalValue;
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRows[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTables {
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#name DataPingfederateIdpSpConnection#name}
  */
  readonly name: string;
  /**
  * List of table rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#rows DataPingfederateIdpSpConnection#rows}
  */
  readonly rows?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRows[] | cdktf.IResolvable;
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rows: cdktf.listMapper(dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsToTerraform, false)(struct!.rows),
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTables | cdktf.IResolvable): any {
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
    rows: {
      value: cdktf.listMapperHcl(dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsToHclTerraform, false)(struct!.rows),
      isBlock: true,
      type: "list",
      storageClassType: "DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rows.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rows.internalValue = value.rows;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // rows - computed: true, optional: true, required: false
  private _rows = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesRows[] | cdktf.IResolvable) {
    this._rows.internalValue = value;
  }
  public resetRows() {
    this._rows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows.internalValue;
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTables[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#name DataPingfederateIdpSpConnection#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#value DataPingfederateIdpSpConnection#value}
  */
  readonly value: string;
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFieldsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFieldsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFields | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFieldsList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFields[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFieldsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRows {
  /**
  * Whether this row is the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#default_row DataPingfederateIdpSpConnection#default_row}
  */
  readonly defaultRow?: boolean | cdktf.IResolvable;
  /**
  * The configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#fields DataPingfederateIdpSpConnection#fields}
  */
  readonly fields?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFields[] | cdktf.IResolvable;
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_row: cdktf.booleanToTerraform(struct!.defaultRow),
    fields: cdktf.listMapper(dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFieldsToTerraform, false)(struct!.fields),
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_row: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fields: {
      value: cdktf.listMapperHcl(dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRow !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRow = this._defaultRow;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultRow = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultRow = value.defaultRow;
      this._fields.internalValue = value.fields;
    }
  }

  // default_row - computed: true, optional: true, required: false
  private _defaultRow?: boolean | cdktf.IResolvable; 
  public get defaultRow() {
    return this.getBooleanAttribute('default_row');
  }
  public set defaultRow(value: boolean | cdktf.IResolvable) {
    this._defaultRow = value;
  }
  public resetDefaultRow() {
    this._defaultRow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRowInput() {
    return this._defaultRow;
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRows[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAll {
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#name DataPingfederateIdpSpConnection#name}
  */
  readonly name: string;
  /**
  * List of table rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#rows DataPingfederateIdpSpConnection#rows}
  */
  readonly rows?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRows[] | cdktf.IResolvable;
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rows: cdktf.listMapper(dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsToTerraform, false)(struct!.rows),
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAll): any {
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
    rows: {
      value: cdktf.listMapperHcl(dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsToHclTerraform, false)(struct!.rows),
      isBlock: true,
      type: "list",
      storageClassType: "DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._rows.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._rows.internalValue = value.rows;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // rows - computed: true, optional: true, required: false
  private _rows = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllRows[] | cdktf.IResolvable) {
    this._rows.internalValue = value;
  }
  public resetRows() {
    this._rows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows.internalValue;
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllList extends cdktf.ComplexList {
  public internalValue? : DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAll[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfiguration {
  /**
  * List of configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#fields DataPingfederateIdpSpConnection#fields}
  */
  readonly fields?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFields[] | cdktf.IResolvable;
  /**
  * List of sensitive configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#sensitive_fields DataPingfederateIdpSpConnection#sensitive_fields}
  */
  readonly sensitiveFields?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFields[] | cdktf.IResolvable;
  /**
  * List of configuration tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#tables DataPingfederateIdpSpConnection#tables}
  */
  readonly tables?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTables[] | cdktf.IResolvable;
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsToTerraform, false)(struct!.fields),
    sensitive_fields: cdktf.listMapper(dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFieldsToTerraform, false)(struct!.sensitiveFields),
    tables: cdktf.listMapper(dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesToTerraform, false)(struct!.tables),
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsList",
    },
    sensitive_fields: {
      value: cdktf.listMapperHcl(dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFieldsToHclTerraform, false)(struct!.sensitiveFields),
      isBlock: true,
      type: "set",
      storageClassType: "DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFieldsList",
    },
    tables: {
      value: cdktf.listMapperHcl(dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesToHclTerraform, false)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._sensitiveFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveFields = this._sensitiveFields?.internalValue;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields.internalValue = undefined;
      this._sensitiveFields.internalValue = undefined;
      this._tables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields.internalValue = value.fields;
      this._sensitiveFields.internalValue = value.sensitiveFields;
      this._tables.internalValue = value.tables;
    }
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // fields_all - computed: true, optional: false, required: false
  private _fieldsAll = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationFieldsAllList(this, "fields_all", true);
  public get fieldsAll() {
    return this._fieldsAll;
  }

  // sensitive_fields - computed: true, optional: true, required: false
  private _sensitiveFields = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFieldsList(this, "sensitive_fields", true);
  public get sensitiveFields() {
    return this._sensitiveFields;
  }
  public putSensitiveFields(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationSensitiveFields[] | cdktf.IResolvable) {
    this._sensitiveFields.internalValue = value;
  }
  public resetSensitiveFields() {
    this._sensitiveFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveFieldsInput() {
    return this._sensitiveFields.internalValue;
  }

  // tables - computed: true, optional: true, required: false
  private _tables = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTables[] | cdktf.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }

  // tables_all - computed: true, optional: false, required: false
  private _tablesAll = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationTablesAllList(this, "tables_all", false);
  public get tablesAll() {
    return this._tablesAll;
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsParentRef {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsParentRefToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsParentRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsPluginDescriptorRef {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsPluginDescriptorRefToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsPluginDescriptorRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsPluginDescriptorRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsPluginDescriptorRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsPluginDescriptorRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsPluginDescriptorRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsPluginDescriptorRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettings {
  /**
  * Plugin instance configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#configuration DataPingfederateIdpSpConnection#configuration}
  */
  readonly configuration: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfiguration;
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationToTerraform(struct!.configuration),
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration.internalValue = value.configuration;
    }
  }

  // attribute_contract - computed: true, optional: false, required: false
  private _attributeContract = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeContractOutputReference(this, "attribute_contract");
  public get attributeContract() {
    return this._attributeContract;
  }

  // attribute_mapping - computed: true, optional: false, required: false
  private _attributeMapping = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsAttributeMappingOutputReference(this, "attribute_mapping");
  public get attributeMapping() {
    return this._attributeMapping;
  }

  // authn_ctx_class_ref - computed: true, optional: false, required: false
  public get authnCtxClassRef() {
    return this.getStringAttribute('authn_ctx_class_ref');
  }

  // configuration - computed: true, optional: false, required: true
  private _configuration = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }

  // plugin_descriptor_ref - computed: true, optional: false, required: false
  private _pluginDescriptorRef = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsPluginDescriptorRefOutputReference(this, "plugin_descriptor_ref");
  public get pluginDescriptorRef() {
    return this._pluginDescriptorRef;
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceDataStoreRef {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceFilterFields {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceFilterFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceFilterFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceFilterFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceFilterFields | undefined) {
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

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceFilterFieldsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter_fields - computed: true, optional: false, required: false
  private _filterFields = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceFilterFieldsList(this, "filter_fields", true);
  public get filterFields() {
    return this._filterFields;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // column_names - computed: true, optional: false, required: false
  public get columnNames() {
    return cdktf.Fn.tolist(this.getListAttribute('column_names'));
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binary_encoding - computed: true, optional: false, required: false
  public get binaryEncoding() {
    return this.getStringAttribute('binary_encoding');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceDataStoreRef {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSource {
  /**
  * A list of LDAP attributes returned from search and available for mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/idp_sp_connection#search_attributes DataPingfederateIdpSpConnection#search_attributes}
  */
  readonly searchAttributes?: string[];
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAttributes),
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    search_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchAttributes = this._searchAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._searchAttributes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._searchAttributes = value.searchAttributes;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // binary_attribute_settings - computed: true, optional: false, required: false
  private _binaryAttributeSettings = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap(this, "binary_attribute_settings");
  public get binaryAttributeSettings() {
    return this._binaryAttributeSettings;
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_of_nested_group - computed: true, optional: false, required: false
  public get memberOfNestedGroup() {
    return this.getBooleanAttribute('member_of_nested_group');
  }

  // search_attributes - computed: true, optional: true, required: false
  private _searchAttributes?: string[]; 
  public get searchAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('search_attributes'));
  }
  public set searchAttributes(value: string[]) {
    this._searchAttributes = value;
  }
  public resetSearchAttributes() {
    this._searchAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchAttributesInput() {
    return this._searchAttributes;
  }

  // search_filter - computed: true, optional: false, required: false
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }

  // search_scope - computed: true, optional: false, required: false
  public get searchScope() {
    return this.getStringAttribute('search_scope');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSources {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_attribute_source - computed: true, optional: false, required: false
  private _customAttributeSource = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesCustomAttributeSourceOutputReference(this, "custom_attribute_source");
  public get customAttributeSource() {
    return this._customAttributeSource;
  }

  // jdbc_attribute_source - computed: true, optional: false, required: false
  private _jdbcAttributeSource = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesJdbcAttributeSourceOutputReference(this, "jdbc_attribute_source");
  public get jdbcAttributeSource() {
    return this._jdbcAttributeSource;
  }

  // ldap_attribute_source - computed: true, optional: false, required: false
  private _ldapAttributeSource = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesLdapAttributeSourceOutputReference(this, "ldap_attribute_source");
  public get ldapAttributeSource() {
    return this._ldapAttributeSource;
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIdpAdapterRef {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIdpAdapterRefToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIdpAdapterRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIdpAdapterRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIdpAdapterRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIdpAdapterRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIdpAdapterRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIdpAdapterRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteriaSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteriaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteriaSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteriaSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteria {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteriaToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteriaToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // error_result - computed: true, optional: false, required: false
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteriaSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteriaList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteriaOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaExpressionCriteria {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaExpressionCriteriaToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaExpressionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaExpressionCriteriaToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaExpressionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaExpressionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaExpressionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaExpressionCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_result - computed: true, optional: false, required: false
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaExpressionCriteriaList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaExpressionCriteriaOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteria {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditional_criteria - computed: true, optional: false, required: false
  private _conditionalCriteria = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaConditionalCriteriaList(this, "conditional_criteria", true);
  public get conditionalCriteria() {
    return this._conditionalCriteria;
  }

  // expression_criteria - computed: true, optional: false, required: false
  private _expressionCriteria = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaExpressionCriteriaList(this, "expression_criteria", true);
  public get expressionCriteria() {
    return this._expressionCriteria;
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappings {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abort_sso_transaction_as_fail_safe - computed: true, optional: false, required: false
  public get abortSsoTransactionAsFailSafe() {
    return this.getBooleanAttribute('abort_sso_transaction_as_fail_safe');
  }

  // adapter_override_settings - computed: true, optional: false, required: false
  private _adapterOverrideSettings = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAdapterOverrideSettingsOutputReference(this, "adapter_override_settings");
  public get adapterOverrideSettings() {
    return this._adapterOverrideSettings;
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // attribute_sources - computed: true, optional: false, required: false
  private _attributeSources = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsAttributeSourcesList(this, "attribute_sources", true);
  public get attributeSources() {
    return this._attributeSources;
  }

  // idp_adapter_ref - computed: true, optional: false, required: false
  private _idpAdapterRef = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIdpAdapterRefOutputReference(this, "idp_adapter_ref");
  public get idpAdapterRef() {
    return this._idpAdapterRef;
  }

  // issuance_criteria - computed: true, optional: false, required: false
  private _issuanceCriteria = new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsIssuanceCriteriaOutputReference(this, "issuance_criteria");
  public get issuanceCriteria() {
    return this._issuanceCriteria;
  }

  // restrict_virtual_entity_ids - computed: true, optional: false, required: false
  public get restrictVirtualEntityIds() {
    return this.getBooleanAttribute('restrict_virtual_entity_ids');
  }

  // restricted_virtual_entity_ids - computed: true, optional: false, required: false
  public get restrictedVirtualEntityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_virtual_entity_ids'));
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAdapterMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoArtifactResolverLocations {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoArtifactResolverLocationsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoArtifactResolverLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoArtifactResolverLocationsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoArtifactResolverLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoArtifactResolverLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoArtifactResolverLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoArtifactResolverLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoArtifactResolverLocationsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoArtifactResolverLocationsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoArtifactResolverLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoArtifact {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoArtifactToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoArtifactToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoArtifactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoArtifact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoArtifact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lifetime - computed: true, optional: false, required: false
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }

  // resolver_locations - computed: true, optional: false, required: false
  private _resolverLocations = new DataPingfederateIdpSpConnectionSpBrowserSsoArtifactResolverLocationsList(this, "resolver_locations", true);
  public get resolverLocations() {
    return this._resolverLocations;
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAssertionLifetime {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAssertionLifetimeToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAssertionLifetime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAssertionLifetimeToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAssertionLifetime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAssertionLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAssertionLifetime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAssertionLifetime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // minutes_after - computed: true, optional: false, required: false
  public get minutesAfter() {
    return this.getNumberAttribute('minutes_after');
  }

  // minutes_before - computed: true, optional: false, required: false
  public get minutesBefore() {
    return this.getNumberAttribute('minutes_before');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractCoreAttributes {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractCoreAttributesToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractCoreAttributesToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractCoreAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractCoreAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractCoreAttributes | undefined) {
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

  // name_format - computed: true, optional: false, required: false
  public get nameFormat() {
    return this.getStringAttribute('name_format');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractCoreAttributesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractCoreAttributesOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractCoreAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractExtendedAttributes {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractExtendedAttributesToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractExtendedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractExtendedAttributesToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractExtendedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractExtendedAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractExtendedAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractExtendedAttributes | undefined) {
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

  // name_format - computed: true, optional: false, required: false
  public get nameFormat() {
    return this.getStringAttribute('name_format');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractExtendedAttributesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractExtendedAttributesOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContract {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_attributes - computed: true, optional: false, required: false
  private _coreAttributes = new DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractCoreAttributesList(this, "core_attributes", true);
  public get coreAttributes() {
    return this._coreAttributes;
  }

  // extended_attributes - computed: true, optional: false, required: false
  private _extendedAttributes = new DataPingfederateIdpSpConnectionSpBrowserSsoAttributeContractExtendedAttributesList(this, "extended_attributes", true);
  public get extendedAttributes() {
    return this._extendedAttributes;
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceDataStoreRef {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceFilterFields {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceFilterFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceFilterFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceFilterFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceFilterFields | undefined) {
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

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceFilterFieldsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter_fields - computed: true, optional: false, required: false
  private _filterFields = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesCustomAttributeSourceFilterFieldsList(this, "filter_fields", true);
  public get filterFields() {
    return this._filterFields;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: false, required: false
  private _attributeContractFulfillment = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }

  // column_names - computed: true, optional: false, required: false
  public get columnNames() {
    return cdktf.Fn.tolist(this.getListAttribute('column_names'));
  }

  // data_store_ref - computed: true, optional: false, required: false
  private _dataStoreRef = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings {
}

export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform(struct?: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binary_encoding - computed: true, optional: false, required: false
  public get binaryEncoding() {
    return this.getStringAttribute('binary_encoding');
  }
}

export class DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference {
    return new DataPingfederateIdpSpConnectionSpBrowserSsoAuthenticationPolicyContractAssertionMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
