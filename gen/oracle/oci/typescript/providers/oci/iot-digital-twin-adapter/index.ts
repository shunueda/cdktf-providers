// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotDigitalTwinAdapterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#defined_tags IotDigitalTwinAdapter#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#description IotDigitalTwinAdapter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#digital_twin_model_id IotDigitalTwinAdapter#digital_twin_model_id}
  */
  readonly digitalTwinModelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#digital_twin_model_spec_uri IotDigitalTwinAdapter#digital_twin_model_spec_uri}
  */
  readonly digitalTwinModelSpecUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#display_name IotDigitalTwinAdapter#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#freeform_tags IotDigitalTwinAdapter#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#id IotDigitalTwinAdapter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#iot_domain_id IotDigitalTwinAdapter#iot_domain_id}
  */
  readonly iotDomainId: string;
  /**
  * inbound_envelope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#inbound_envelope IotDigitalTwinAdapter#inbound_envelope}
  */
  readonly inboundEnvelope?: IotDigitalTwinAdapterInboundEnvelope;
  /**
  * inbound_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#inbound_routes IotDigitalTwinAdapter#inbound_routes}
  */
  readonly inboundRoutes?: IotDigitalTwinAdapterInboundRoutes[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#timeouts IotDigitalTwinAdapter#timeouts}
  */
  readonly timeouts?: IotDigitalTwinAdapterTimeouts;
}
export interface IotDigitalTwinAdapterInboundEnvelopeEnvelopeMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#time_observed IotDigitalTwinAdapter#time_observed}
  */
  readonly timeObserved?: string;
}

export function iotDigitalTwinAdapterInboundEnvelopeEnvelopeMappingToTerraform(struct?: IotDigitalTwinAdapterInboundEnvelopeEnvelopeMappingOutputReference | IotDigitalTwinAdapterInboundEnvelopeEnvelopeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_observed: cdktf.stringToTerraform(struct!.timeObserved),
  }
}


export function iotDigitalTwinAdapterInboundEnvelopeEnvelopeMappingToHclTerraform(struct?: IotDigitalTwinAdapterInboundEnvelopeEnvelopeMappingOutputReference | IotDigitalTwinAdapterInboundEnvelopeEnvelopeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_observed: {
      value: cdktf.stringToHclTerraform(struct!.timeObserved),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotDigitalTwinAdapterInboundEnvelopeEnvelopeMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotDigitalTwinAdapterInboundEnvelopeEnvelopeMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeObserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeObserved = this._timeObserved;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotDigitalTwinAdapterInboundEnvelopeEnvelopeMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeObserved = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeObserved = value.timeObserved;
    }
  }

  // time_observed - computed: true, optional: true, required: false
  private _timeObserved?: string; 
  public get timeObserved() {
    return this.getStringAttribute('time_observed');
  }
  public set timeObserved(value: string) {
    this._timeObserved = value;
  }
  public resetTimeObserved() {
    this._timeObserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeObservedInput() {
    return this._timeObserved;
  }
}
export interface IotDigitalTwinAdapterInboundEnvelopeReferencePayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#data IotDigitalTwinAdapter#data}
  */
  readonly data: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#data_format IotDigitalTwinAdapter#data_format}
  */
  readonly dataFormat: string;
}

export function iotDigitalTwinAdapterInboundEnvelopeReferencePayloadToTerraform(struct?: IotDigitalTwinAdapterInboundEnvelopeReferencePayloadOutputReference | IotDigitalTwinAdapterInboundEnvelopeReferencePayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    data_format: cdktf.stringToTerraform(struct!.dataFormat),
  }
}


export function iotDigitalTwinAdapterInboundEnvelopeReferencePayloadToHclTerraform(struct?: IotDigitalTwinAdapterInboundEnvelopeReferencePayloadOutputReference | IotDigitalTwinAdapterInboundEnvelopeReferencePayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.data),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    data_format: {
      value: cdktf.stringToHclTerraform(struct!.dataFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotDigitalTwinAdapterInboundEnvelopeReferencePayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotDigitalTwinAdapterInboundEnvelopeReferencePayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._dataFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotDigitalTwinAdapterInboundEnvelopeReferencePayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._dataFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._dataFormat = value.dataFormat;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // data_format - computed: false, optional: false, required: true
  private _dataFormat?: string; 
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string) {
    this._dataFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat;
  }
}
export interface IotDigitalTwinAdapterInboundEnvelope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#reference_endpoint IotDigitalTwinAdapter#reference_endpoint}
  */
  readonly referenceEndpoint: string;
  /**
  * envelope_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#envelope_mapping IotDigitalTwinAdapter#envelope_mapping}
  */
  readonly envelopeMapping?: IotDigitalTwinAdapterInboundEnvelopeEnvelopeMapping;
  /**
  * reference_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#reference_payload IotDigitalTwinAdapter#reference_payload}
  */
  readonly referencePayload?: IotDigitalTwinAdapterInboundEnvelopeReferencePayload;
}

export function iotDigitalTwinAdapterInboundEnvelopeToTerraform(struct?: IotDigitalTwinAdapterInboundEnvelopeOutputReference | IotDigitalTwinAdapterInboundEnvelope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference_endpoint: cdktf.stringToTerraform(struct!.referenceEndpoint),
    envelope_mapping: iotDigitalTwinAdapterInboundEnvelopeEnvelopeMappingToTerraform(struct!.envelopeMapping),
    reference_payload: iotDigitalTwinAdapterInboundEnvelopeReferencePayloadToTerraform(struct!.referencePayload),
  }
}


export function iotDigitalTwinAdapterInboundEnvelopeToHclTerraform(struct?: IotDigitalTwinAdapterInboundEnvelopeOutputReference | IotDigitalTwinAdapterInboundEnvelope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.referenceEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    envelope_mapping: {
      value: iotDigitalTwinAdapterInboundEnvelopeEnvelopeMappingToHclTerraform(struct!.envelopeMapping),
      isBlock: true,
      type: "list",
      storageClassType: "IotDigitalTwinAdapterInboundEnvelopeEnvelopeMappingList",
    },
    reference_payload: {
      value: iotDigitalTwinAdapterInboundEnvelopeReferencePayloadToHclTerraform(struct!.referencePayload),
      isBlock: true,
      type: "list",
      storageClassType: "IotDigitalTwinAdapterInboundEnvelopeReferencePayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotDigitalTwinAdapterInboundEnvelopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotDigitalTwinAdapterInboundEnvelope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceEndpoint = this._referenceEndpoint;
    }
    if (this._envelopeMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envelopeMapping = this._envelopeMapping?.internalValue;
    }
    if (this._referencePayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referencePayload = this._referencePayload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotDigitalTwinAdapterInboundEnvelope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._referenceEndpoint = undefined;
      this._envelopeMapping.internalValue = undefined;
      this._referencePayload.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._referenceEndpoint = value.referenceEndpoint;
      this._envelopeMapping.internalValue = value.envelopeMapping;
      this._referencePayload.internalValue = value.referencePayload;
    }
  }

  // reference_endpoint - computed: false, optional: false, required: true
  private _referenceEndpoint?: string; 
  public get referenceEndpoint() {
    return this.getStringAttribute('reference_endpoint');
  }
  public set referenceEndpoint(value: string) {
    this._referenceEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceEndpointInput() {
    return this._referenceEndpoint;
  }

  // envelope_mapping - computed: false, optional: true, required: false
  private _envelopeMapping = new IotDigitalTwinAdapterInboundEnvelopeEnvelopeMappingOutputReference(this, "envelope_mapping");
  public get envelopeMapping() {
    return this._envelopeMapping;
  }
  public putEnvelopeMapping(value: IotDigitalTwinAdapterInboundEnvelopeEnvelopeMapping) {
    this._envelopeMapping.internalValue = value;
  }
  public resetEnvelopeMapping() {
    this._envelopeMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envelopeMappingInput() {
    return this._envelopeMapping.internalValue;
  }

  // reference_payload - computed: false, optional: true, required: false
  private _referencePayload = new IotDigitalTwinAdapterInboundEnvelopeReferencePayloadOutputReference(this, "reference_payload");
  public get referencePayload() {
    return this._referencePayload;
  }
  public putReferencePayload(value: IotDigitalTwinAdapterInboundEnvelopeReferencePayload) {
    this._referencePayload.internalValue = value;
  }
  public resetReferencePayload() {
    this._referencePayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referencePayloadInput() {
    return this._referencePayload.internalValue;
  }
}
export interface IotDigitalTwinAdapterInboundRoutesReferencePayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#data IotDigitalTwinAdapter#data}
  */
  readonly data: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#data_format IotDigitalTwinAdapter#data_format}
  */
  readonly dataFormat: string;
}

export function iotDigitalTwinAdapterInboundRoutesReferencePayloadToTerraform(struct?: IotDigitalTwinAdapterInboundRoutesReferencePayloadOutputReference | IotDigitalTwinAdapterInboundRoutesReferencePayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    data_format: cdktf.stringToTerraform(struct!.dataFormat),
  }
}


export function iotDigitalTwinAdapterInboundRoutesReferencePayloadToHclTerraform(struct?: IotDigitalTwinAdapterInboundRoutesReferencePayloadOutputReference | IotDigitalTwinAdapterInboundRoutesReferencePayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.data),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    data_format: {
      value: cdktf.stringToHclTerraform(struct!.dataFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotDigitalTwinAdapterInboundRoutesReferencePayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotDigitalTwinAdapterInboundRoutesReferencePayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._dataFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotDigitalTwinAdapterInboundRoutesReferencePayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._dataFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._dataFormat = value.dataFormat;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // data_format - computed: false, optional: false, required: true
  private _dataFormat?: string; 
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string) {
    this._dataFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat;
  }
}
export interface IotDigitalTwinAdapterInboundRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#condition IotDigitalTwinAdapter#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#description IotDigitalTwinAdapter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#payload_mapping IotDigitalTwinAdapter#payload_mapping}
  */
  readonly payloadMapping?: { [key: string]: string };
  /**
  * reference_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#reference_payload IotDigitalTwinAdapter#reference_payload}
  */
  readonly referencePayload?: IotDigitalTwinAdapterInboundRoutesReferencePayload;
}

export function iotDigitalTwinAdapterInboundRoutesToTerraform(struct?: IotDigitalTwinAdapterInboundRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    description: cdktf.stringToTerraform(struct!.description),
    payload_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.payloadMapping),
    reference_payload: iotDigitalTwinAdapterInboundRoutesReferencePayloadToTerraform(struct!.referencePayload),
  }
}


export function iotDigitalTwinAdapterInboundRoutesToHclTerraform(struct?: IotDigitalTwinAdapterInboundRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_mapping: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.payloadMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    reference_payload: {
      value: iotDigitalTwinAdapterInboundRoutesReferencePayloadToHclTerraform(struct!.referencePayload),
      isBlock: true,
      type: "list",
      storageClassType: "IotDigitalTwinAdapterInboundRoutesReferencePayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotDigitalTwinAdapterInboundRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IotDigitalTwinAdapterInboundRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._payloadMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadMapping = this._payloadMapping;
    }
    if (this._referencePayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referencePayload = this._referencePayload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotDigitalTwinAdapterInboundRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._description = undefined;
      this._payloadMapping = undefined;
      this._referencePayload.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._description = value.description;
      this._payloadMapping = value.payloadMapping;
      this._referencePayload.internalValue = value.referencePayload;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // description - computed: true, optional: true, required: false
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

  // payload_mapping - computed: true, optional: true, required: false
  private _payloadMapping?: { [key: string]: string }; 
  public get payloadMapping() {
    return this.getStringMapAttribute('payload_mapping');
  }
  public set payloadMapping(value: { [key: string]: string }) {
    this._payloadMapping = value;
  }
  public resetPayloadMapping() {
    this._payloadMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadMappingInput() {
    return this._payloadMapping;
  }

  // reference_payload - computed: false, optional: true, required: false
  private _referencePayload = new IotDigitalTwinAdapterInboundRoutesReferencePayloadOutputReference(this, "reference_payload");
  public get referencePayload() {
    return this._referencePayload;
  }
  public putReferencePayload(value: IotDigitalTwinAdapterInboundRoutesReferencePayload) {
    this._referencePayload.internalValue = value;
  }
  public resetReferencePayload() {
    this._referencePayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referencePayloadInput() {
    return this._referencePayload.internalValue;
  }
}

export class IotDigitalTwinAdapterInboundRoutesList extends cdktf.ComplexList {
  public internalValue? : IotDigitalTwinAdapterInboundRoutes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IotDigitalTwinAdapterInboundRoutesOutputReference {
    return new IotDigitalTwinAdapterInboundRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotDigitalTwinAdapterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#create IotDigitalTwinAdapter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#delete IotDigitalTwinAdapter#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#update IotDigitalTwinAdapter#update}
  */
  readonly update?: string;
}

export function iotDigitalTwinAdapterTimeoutsToTerraform(struct?: IotDigitalTwinAdapterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function iotDigitalTwinAdapterTimeoutsToHclTerraform(struct?: IotDigitalTwinAdapterTimeouts | cdktf.IResolvable): any {
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

export class IotDigitalTwinAdapterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotDigitalTwinAdapterTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotDigitalTwinAdapterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter oci_iot_digital_twin_adapter}
*/
export class IotDigitalTwinAdapter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_iot_digital_twin_adapter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IotDigitalTwinAdapter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotDigitalTwinAdapter to import
  * @param importFromId The id of the existing IotDigitalTwinAdapter that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotDigitalTwinAdapter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_iot_digital_twin_adapter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/iot_digital_twin_adapter oci_iot_digital_twin_adapter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotDigitalTwinAdapterConfig
  */
  public constructor(scope: Construct, id: string, config: IotDigitalTwinAdapterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_iot_digital_twin_adapter',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._digitalTwinModelId = config.digitalTwinModelId;
    this._digitalTwinModelSpecUri = config.digitalTwinModelSpecUri;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._iotDomainId = config.iotDomainId;
    this._inboundEnvelope.internalValue = config.inboundEnvelope;
    this._inboundRoutes.internalValue = config.inboundRoutes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
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

  // digital_twin_model_id - computed: true, optional: true, required: false
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

  // digital_twin_model_spec_uri - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // inbound_envelope - computed: false, optional: true, required: false
  private _inboundEnvelope = new IotDigitalTwinAdapterInboundEnvelopeOutputReference(this, "inbound_envelope");
  public get inboundEnvelope() {
    return this._inboundEnvelope;
  }
  public putInboundEnvelope(value: IotDigitalTwinAdapterInboundEnvelope) {
    this._inboundEnvelope.internalValue = value;
  }
  public resetInboundEnvelope() {
    this._inboundEnvelope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundEnvelopeInput() {
    return this._inboundEnvelope.internalValue;
  }

  // inbound_routes - computed: false, optional: true, required: false
  private _inboundRoutes = new IotDigitalTwinAdapterInboundRoutesList(this, "inbound_routes", false);
  public get inboundRoutes() {
    return this._inboundRoutes;
  }
  public putInboundRoutes(value: IotDigitalTwinAdapterInboundRoutes[] | cdktf.IResolvable) {
    this._inboundRoutes.internalValue = value;
  }
  public resetInboundRoutes() {
    this._inboundRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundRoutesInput() {
    return this._inboundRoutes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IotDigitalTwinAdapterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IotDigitalTwinAdapterTimeouts) {
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
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      digital_twin_model_id: cdktf.stringToTerraform(this._digitalTwinModelId),
      digital_twin_model_spec_uri: cdktf.stringToTerraform(this._digitalTwinModelSpecUri),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      iot_domain_id: cdktf.stringToTerraform(this._iotDomainId),
      inbound_envelope: iotDigitalTwinAdapterInboundEnvelopeToTerraform(this._inboundEnvelope.internalValue),
      inbound_routes: cdktf.listMapper(iotDigitalTwinAdapterInboundRoutesToTerraform, true)(this._inboundRoutes.internalValue),
      timeouts: iotDigitalTwinAdapterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      inbound_envelope: {
        value: iotDigitalTwinAdapterInboundEnvelopeToHclTerraform(this._inboundEnvelope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotDigitalTwinAdapterInboundEnvelopeList",
      },
      inbound_routes: {
        value: cdktf.listMapperHcl(iotDigitalTwinAdapterInboundRoutesToHclTerraform, true)(this._inboundRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotDigitalTwinAdapterInboundRoutesList",
      },
      timeouts: {
        value: iotDigitalTwinAdapterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotDigitalTwinAdapterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
