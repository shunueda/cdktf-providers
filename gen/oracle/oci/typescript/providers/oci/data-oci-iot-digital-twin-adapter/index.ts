// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/iot_digital_twin_adapter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIotDigitalTwinAdapterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/iot_digital_twin_adapter#digital_twin_adapter_id DataOciIotDigitalTwinAdapter#digital_twin_adapter_id}
  */
  readonly digitalTwinAdapterId: string;
}
export interface DataOciIotDigitalTwinAdapterInboundEnvelopeEnvelopeMapping {
}

export function dataOciIotDigitalTwinAdapterInboundEnvelopeEnvelopeMappingToTerraform(struct?: DataOciIotDigitalTwinAdapterInboundEnvelopeEnvelopeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIotDigitalTwinAdapterInboundEnvelopeEnvelopeMappingToHclTerraform(struct?: DataOciIotDigitalTwinAdapterInboundEnvelopeEnvelopeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIotDigitalTwinAdapterInboundEnvelopeEnvelopeMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciIotDigitalTwinAdapterInboundEnvelopeEnvelopeMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIotDigitalTwinAdapterInboundEnvelopeEnvelopeMapping | undefined) {
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

export class DataOciIotDigitalTwinAdapterInboundEnvelopeEnvelopeMappingList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciIotDigitalTwinAdapterInboundEnvelopeEnvelopeMappingOutputReference {
    return new DataOciIotDigitalTwinAdapterInboundEnvelopeEnvelopeMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIotDigitalTwinAdapterInboundEnvelopeReferencePayload {
}

export function dataOciIotDigitalTwinAdapterInboundEnvelopeReferencePayloadToTerraform(struct?: DataOciIotDigitalTwinAdapterInboundEnvelopeReferencePayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIotDigitalTwinAdapterInboundEnvelopeReferencePayloadToHclTerraform(struct?: DataOciIotDigitalTwinAdapterInboundEnvelopeReferencePayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIotDigitalTwinAdapterInboundEnvelopeReferencePayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciIotDigitalTwinAdapterInboundEnvelopeReferencePayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIotDigitalTwinAdapterInboundEnvelopeReferencePayload | undefined) {
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

export class DataOciIotDigitalTwinAdapterInboundEnvelopeReferencePayloadList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciIotDigitalTwinAdapterInboundEnvelopeReferencePayloadOutputReference {
    return new DataOciIotDigitalTwinAdapterInboundEnvelopeReferencePayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIotDigitalTwinAdapterInboundEnvelope {
}

export function dataOciIotDigitalTwinAdapterInboundEnvelopeToTerraform(struct?: DataOciIotDigitalTwinAdapterInboundEnvelope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIotDigitalTwinAdapterInboundEnvelopeToHclTerraform(struct?: DataOciIotDigitalTwinAdapterInboundEnvelope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIotDigitalTwinAdapterInboundEnvelopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciIotDigitalTwinAdapterInboundEnvelope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIotDigitalTwinAdapterInboundEnvelope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // envelope_mapping - computed: true, optional: false, required: false
  private _envelopeMapping = new DataOciIotDigitalTwinAdapterInboundEnvelopeEnvelopeMappingList(this, "envelope_mapping", false);
  public get envelopeMapping() {
    return this._envelopeMapping;
  }

  // reference_endpoint - computed: true, optional: false, required: false
  public get referenceEndpoint() {
    return this.getStringAttribute('reference_endpoint');
  }

  // reference_payload - computed: true, optional: false, required: false
  private _referencePayload = new DataOciIotDigitalTwinAdapterInboundEnvelopeReferencePayloadList(this, "reference_payload", false);
  public get referencePayload() {
    return this._referencePayload;
  }
}

export class DataOciIotDigitalTwinAdapterInboundEnvelopeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciIotDigitalTwinAdapterInboundEnvelopeOutputReference {
    return new DataOciIotDigitalTwinAdapterInboundEnvelopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIotDigitalTwinAdapterInboundRoutesReferencePayload {
}

export function dataOciIotDigitalTwinAdapterInboundRoutesReferencePayloadToTerraform(struct?: DataOciIotDigitalTwinAdapterInboundRoutesReferencePayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIotDigitalTwinAdapterInboundRoutesReferencePayloadToHclTerraform(struct?: DataOciIotDigitalTwinAdapterInboundRoutesReferencePayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIotDigitalTwinAdapterInboundRoutesReferencePayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciIotDigitalTwinAdapterInboundRoutesReferencePayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIotDigitalTwinAdapterInboundRoutesReferencePayload | undefined) {
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

export class DataOciIotDigitalTwinAdapterInboundRoutesReferencePayloadList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciIotDigitalTwinAdapterInboundRoutesReferencePayloadOutputReference {
    return new DataOciIotDigitalTwinAdapterInboundRoutesReferencePayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIotDigitalTwinAdapterInboundRoutes {
}

export function dataOciIotDigitalTwinAdapterInboundRoutesToTerraform(struct?: DataOciIotDigitalTwinAdapterInboundRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIotDigitalTwinAdapterInboundRoutesToHclTerraform(struct?: DataOciIotDigitalTwinAdapterInboundRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIotDigitalTwinAdapterInboundRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciIotDigitalTwinAdapterInboundRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIotDigitalTwinAdapterInboundRoutes | undefined) {
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
  private _referencePayload = new DataOciIotDigitalTwinAdapterInboundRoutesReferencePayloadList(this, "reference_payload", false);
  public get referencePayload() {
    return this._referencePayload;
  }
}

export class DataOciIotDigitalTwinAdapterInboundRoutesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciIotDigitalTwinAdapterInboundRoutesOutputReference {
    return new DataOciIotDigitalTwinAdapterInboundRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/iot_digital_twin_adapter oci_iot_digital_twin_adapter}
*/
export class DataOciIotDigitalTwinAdapter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_iot_digital_twin_adapter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIotDigitalTwinAdapter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIotDigitalTwinAdapter to import
  * @param importFromId The id of the existing DataOciIotDigitalTwinAdapter that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/iot_digital_twin_adapter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIotDigitalTwinAdapter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_iot_digital_twin_adapter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/iot_digital_twin_adapter oci_iot_digital_twin_adapter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIotDigitalTwinAdapterConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIotDigitalTwinAdapterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_iot_digital_twin_adapter',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._digitalTwinAdapterId = config.digitalTwinAdapterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // digital_twin_adapter_id - computed: false, optional: false, required: true
  private _digitalTwinAdapterId?: string; 
  public get digitalTwinAdapterId() {
    return this.getStringAttribute('digital_twin_adapter_id');
  }
  public set digitalTwinAdapterId(value: string) {
    this._digitalTwinAdapterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalTwinAdapterIdInput() {
    return this._digitalTwinAdapterId;
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
  private _inboundEnvelope = new DataOciIotDigitalTwinAdapterInboundEnvelopeList(this, "inbound_envelope", false);
  public get inboundEnvelope() {
    return this._inboundEnvelope;
  }

  // inbound_routes - computed: true, optional: false, required: false
  private _inboundRoutes = new DataOciIotDigitalTwinAdapterInboundRoutesList(this, "inbound_routes", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      digital_twin_adapter_id: cdktf.stringToTerraform(this._digitalTwinAdapterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      digital_twin_adapter_id: {
        value: cdktf.stringToHclTerraform(this._digitalTwinAdapterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
