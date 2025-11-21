// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_adapters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIotDigitalTwinAdaptersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_adapters#digital_twin_model_id DataOciIotDigitalTwinAdapters#digital_twin_model_id}
  */
  readonly digitalTwinModelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_adapters#digital_twin_model_spec_uri DataOciIotDigitalTwinAdapters#digital_twin_model_spec_uri}
  */
  readonly digitalTwinModelSpecUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_adapters#display_name DataOciIotDigitalTwinAdapters#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_adapters#id DataOciIotDigitalTwinAdapters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_adapters#iot_domain_id DataOciIotDigitalTwinAdapters#iot_domain_id}
  */
  readonly iotDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_adapters#state DataOciIotDigitalTwinAdapters#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_adapters#filter DataOciIotDigitalTwinAdapters#filter}
  */
  readonly filter?: DataOciIotDigitalTwinAdaptersFilter[] | cdktf.IResolvable;
}
export interface DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeEnvelopeMapping {
}

export function dataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeEnvelopeMappingToTerraform(struct?: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeEnvelopeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeEnvelopeMappingToHclTerraform(struct?: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeEnvelopeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeEnvelopeMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeEnvelopeMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeEnvelopeMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time_observed - computed: true, optional: false, required: false
  public get timeObserved() {
    return this.getStringAttribute('time_observed');
  }
}

export class DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeEnvelopeMappingList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeEnvelopeMappingOutputReference {
    return new DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeEnvelopeMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeReferencePayload {
}

export function dataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeReferencePayloadToTerraform(struct?: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeReferencePayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeReferencePayloadToHclTerraform(struct?: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeReferencePayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeReferencePayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeReferencePayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeReferencePayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data - computed: true, optional: false, required: false
  private _data = new cdktf.StringMap(this, "data");
  public get data() {
    return this._data;
  }

  // data_format - computed: true, optional: false, required: false
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
}

export class DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeReferencePayloadList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeReferencePayloadOutputReference {
    return new DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeReferencePayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelope {
}

export function dataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeToTerraform(struct?: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeToHclTerraform(struct?: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // envelope_mapping - computed: true, optional: false, required: false
  private _envelopeMapping = new DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeEnvelopeMappingList(this, "envelope_mapping", false);
  public get envelopeMapping() {
    return this._envelopeMapping;
  }

  // reference_endpoint - computed: true, optional: false, required: false
  public get referenceEndpoint() {
    return this.getStringAttribute('reference_endpoint');
  }

  // reference_payload - computed: true, optional: false, required: false
  private _referencePayload = new DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeReferencePayloadList(this, "reference_payload", false);
  public get referencePayload() {
    return this._referencePayload;
  }
}

export class DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeOutputReference {
    return new DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesReferencePayload {
}

export function dataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesReferencePayloadToTerraform(struct?: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesReferencePayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesReferencePayloadToHclTerraform(struct?: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesReferencePayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesReferencePayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesReferencePayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesReferencePayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data - computed: true, optional: false, required: false
  private _data = new cdktf.StringMap(this, "data");
  public get data() {
    return this._data;
  }

  // data_format - computed: true, optional: false, required: false
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
}

export class DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesReferencePayloadList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesReferencePayloadOutputReference {
    return new DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesReferencePayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutes {
}

export function dataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesToTerraform(struct?: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesToHclTerraform(struct?: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // payload_mapping - computed: true, optional: false, required: false
  private _payloadMapping = new cdktf.StringMap(this, "payload_mapping");
  public get payloadMapping() {
    return this._payloadMapping;
  }

  // reference_payload - computed: true, optional: false, required: false
  private _referencePayload = new DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesReferencePayloadList(this, "reference_payload", false);
  public get referencePayload() {
    return this._referencePayload;
  }
}

export class DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesOutputReference {
    return new DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItems {
}

export function dataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsToTerraform(struct?: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsToHclTerraform(struct?: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // digital_twin_model_id - computed: true, optional: false, required: false
  public get digitalTwinModelId() {
    return this.getStringAttribute('digital_twin_model_id');
  }

  // digital_twin_model_spec_uri - computed: true, optional: false, required: false
  public get digitalTwinModelSpecUri() {
    return this.getStringAttribute('digital_twin_model_spec_uri');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inbound_envelope - computed: true, optional: false, required: false
  private _inboundEnvelope = new DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundEnvelopeList(this, "inbound_envelope", false);
  public get inboundEnvelope() {
    return this._inboundEnvelope;
  }

  // inbound_routes - computed: true, optional: false, required: false
  private _inboundRoutes = new DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsInboundRoutesList(this, "inbound_routes", false);
  public get inboundRoutes() {
    return this._inboundRoutes;
  }

  // iot_domain_id - computed: true, optional: false, required: false
  public get iotDomainId() {
    return this.getStringAttribute('iot_domain_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsOutputReference {
    return new DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollection {
}

export function dataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionToTerraform(struct?: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionToHclTerraform(struct?: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionOutputReference {
    return new DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIotDigitalTwinAdaptersFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_adapters#name DataOciIotDigitalTwinAdapters#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_adapters#regex DataOciIotDigitalTwinAdapters#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_adapters#values DataOciIotDigitalTwinAdapters#values}
  */
  readonly values: string[];
}

export function dataOciIotDigitalTwinAdaptersFilterToTerraform(struct?: DataOciIotDigitalTwinAdaptersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciIotDigitalTwinAdaptersFilterToHclTerraform(struct?: DataOciIotDigitalTwinAdaptersFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciIotDigitalTwinAdaptersFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIotDigitalTwinAdaptersFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIotDigitalTwinAdaptersFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciIotDigitalTwinAdaptersFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciIotDigitalTwinAdaptersFilter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciIotDigitalTwinAdaptersFilterOutputReference {
    return new DataOciIotDigitalTwinAdaptersFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_adapters oci_iot_digital_twin_adapters}
*/
export class DataOciIotDigitalTwinAdapters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_iot_digital_twin_adapters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIotDigitalTwinAdapters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIotDigitalTwinAdapters to import
  * @param importFromId The id of the existing DataOciIotDigitalTwinAdapters that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_adapters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIotDigitalTwinAdapters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_iot_digital_twin_adapters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_adapters oci_iot_digital_twin_adapters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIotDigitalTwinAdaptersConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIotDigitalTwinAdaptersConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_iot_digital_twin_adapters',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._digitalTwinModelId = config.digitalTwinModelId;
    this._digitalTwinModelSpecUri = config.digitalTwinModelSpecUri;
    this._displayName = config.displayName;
    this._id = config.id;
    this._iotDomainId = config.iotDomainId;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // digital_twin_adapter_collection - computed: true, optional: false, required: false
  private _digitalTwinAdapterCollection = new DataOciIotDigitalTwinAdaptersDigitalTwinAdapterCollectionList(this, "digital_twin_adapter_collection", false);
  public get digitalTwinAdapterCollection() {
    return this._digitalTwinAdapterCollection;
  }

  // digital_twin_model_id - computed: false, optional: true, required: false
  private _digitalTwinModelId?: string; 
  public get digitalTwinModelId() {
    return this.getStringAttribute('digital_twin_model_id');
  }
  public set digitalTwinModelId(value: string) {
    this._digitalTwinModelId = value;
  }
  public resetDigitalTwinModelId() {
    this._digitalTwinModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalTwinModelIdInput() {
    return this._digitalTwinModelId;
  }

  // digital_twin_model_spec_uri - computed: false, optional: true, required: false
  private _digitalTwinModelSpecUri?: string; 
  public get digitalTwinModelSpecUri() {
    return this.getStringAttribute('digital_twin_model_spec_uri');
  }
  public set digitalTwinModelSpecUri(value: string) {
    this._digitalTwinModelSpecUri = value;
  }
  public resetDigitalTwinModelSpecUri() {
    this._digitalTwinModelSpecUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalTwinModelSpecUriInput() {
    return this._digitalTwinModelSpecUri;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: false, optional: true, required: false
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

  // iot_domain_id - computed: false, optional: false, required: true
  private _iotDomainId?: string; 
  public get iotDomainId() {
    return this.getStringAttribute('iot_domain_id');
  }
  public set iotDomainId(value: string) {
    this._iotDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iotDomainIdInput() {
    return this._iotDomainId;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciIotDigitalTwinAdaptersFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciIotDigitalTwinAdaptersFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      digital_twin_model_id: cdktf.stringToTerraform(this._digitalTwinModelId),
      digital_twin_model_spec_uri: cdktf.stringToTerraform(this._digitalTwinModelSpecUri),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      iot_domain_id: cdktf.stringToTerraform(this._iotDomainId),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciIotDigitalTwinAdaptersFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      digital_twin_model_id: {
        value: cdktf.stringToHclTerraform(this._digitalTwinModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digital_twin_model_spec_uri: {
        value: cdktf.stringToHclTerraform(this._digitalTwinModelSpecUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      iot_domain_id: {
        value: cdktf.stringToHclTerraform(this._iotDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciIotDigitalTwinAdaptersFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciIotDigitalTwinAdaptersFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
