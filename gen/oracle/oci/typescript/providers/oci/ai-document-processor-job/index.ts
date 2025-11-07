// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiDocumentProcessorJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#compartment_id AiDocumentProcessorJob#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#display_name AiDocumentProcessorJob#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#id AiDocumentProcessorJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * input_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#input_location AiDocumentProcessorJob#input_location}
  */
  readonly inputLocation: AiDocumentProcessorJobInputLocation;
  /**
  * output_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#output_location AiDocumentProcessorJob#output_location}
  */
  readonly outputLocation: AiDocumentProcessorJobOutputLocation;
  /**
  * processor_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#processor_config AiDocumentProcessorJob#processor_config}
  */
  readonly processorConfig: AiDocumentProcessorJobProcessorConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#timeouts AiDocumentProcessorJob#timeouts}
  */
  readonly timeouts?: AiDocumentProcessorJobTimeouts;
}
export interface AiDocumentProcessorJobInputLocationObjectLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#object AiDocumentProcessorJob#object}
  */
  readonly object?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#page_range AiDocumentProcessorJob#page_range}
  */
  readonly pageRange?: string[];
}

export function aiDocumentProcessorJobInputLocationObjectLocationsToTerraform(struct?: AiDocumentProcessorJobInputLocationObjectLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object: cdktf.stringToTerraform(struct!.object),
    page_range: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pageRange),
  }
}


export function aiDocumentProcessorJobInputLocationObjectLocationsToHclTerraform(struct?: AiDocumentProcessorJobInputLocationObjectLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    page_range: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pageRange),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiDocumentProcessorJobInputLocationObjectLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiDocumentProcessorJobInputLocationObjectLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._pageRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageRange = this._pageRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiDocumentProcessorJobInputLocationObjectLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._namespace = undefined;
      this._object = undefined;
      this._pageRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._namespace = value.namespace;
      this._object = value.object;
      this._pageRange = value.pageRange;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // page_range - computed: true, optional: true, required: false
  private _pageRange?: string[]; 
  public get pageRange() {
    return this.getListAttribute('page_range');
  }
  public set pageRange(value: string[]) {
    this._pageRange = value;
  }
  public resetPageRange() {
    this._pageRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageRangeInput() {
    return this._pageRange;
  }
}

export class AiDocumentProcessorJobInputLocationObjectLocationsList extends cdktf.ComplexList {
  public internalValue? : AiDocumentProcessorJobInputLocationObjectLocations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AiDocumentProcessorJobInputLocationObjectLocationsOutputReference {
    return new AiDocumentProcessorJobInputLocationObjectLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiDocumentProcessorJobInputLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#data AiDocumentProcessorJob#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#page_range AiDocumentProcessorJob#page_range}
  */
  readonly pageRange?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#source_type AiDocumentProcessorJob#source_type}
  */
  readonly sourceType: string;
  /**
  * object_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#object_locations AiDocumentProcessorJob#object_locations}
  */
  readonly objectLocations?: AiDocumentProcessorJobInputLocationObjectLocations[] | cdktf.IResolvable;
}

export function aiDocumentProcessorJobInputLocationToTerraform(struct?: AiDocumentProcessorJobInputLocationOutputReference | AiDocumentProcessorJobInputLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    page_range: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pageRange),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    object_locations: cdktf.listMapper(aiDocumentProcessorJobInputLocationObjectLocationsToTerraform, true)(struct!.objectLocations),
  }
}


export function aiDocumentProcessorJobInputLocationToHclTerraform(struct?: AiDocumentProcessorJobInputLocationOutputReference | AiDocumentProcessorJobInputLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    page_range: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pageRange),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_locations: {
      value: cdktf.listMapperHcl(aiDocumentProcessorJobInputLocationObjectLocationsToHclTerraform, true)(struct!.objectLocations),
      isBlock: true,
      type: "list",
      storageClassType: "AiDocumentProcessorJobInputLocationObjectLocationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiDocumentProcessorJobInputLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiDocumentProcessorJobInputLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._pageRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageRange = this._pageRange;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._objectLocations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectLocations = this._objectLocations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiDocumentProcessorJobInputLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._pageRange = undefined;
      this._sourceType = undefined;
      this._objectLocations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._pageRange = value.pageRange;
      this._sourceType = value.sourceType;
      this._objectLocations.internalValue = value.objectLocations;
    }
  }

  // data - computed: true, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // page_range - computed: true, optional: true, required: false
  private _pageRange?: string[]; 
  public get pageRange() {
    return this.getListAttribute('page_range');
  }
  public set pageRange(value: string[]) {
    this._pageRange = value;
  }
  public resetPageRange() {
    this._pageRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageRangeInput() {
    return this._pageRange;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // object_locations - computed: false, optional: true, required: false
  private _objectLocations = new AiDocumentProcessorJobInputLocationObjectLocationsList(this, "object_locations", false);
  public get objectLocations() {
    return this._objectLocations;
  }
  public putObjectLocations(value: AiDocumentProcessorJobInputLocationObjectLocations[] | cdktf.IResolvable) {
    this._objectLocations.internalValue = value;
  }
  public resetObjectLocations() {
    this._objectLocations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLocationsInput() {
    return this._objectLocations.internalValue;
  }
}
export interface AiDocumentProcessorJobOutputLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#prefix AiDocumentProcessorJob#prefix}
  */
  readonly prefix: string;
}

export function aiDocumentProcessorJobOutputLocationToTerraform(struct?: AiDocumentProcessorJobOutputLocationOutputReference | AiDocumentProcessorJobOutputLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function aiDocumentProcessorJobOutputLocationToHclTerraform(struct?: AiDocumentProcessorJobOutputLocationOutputReference | AiDocumentProcessorJobOutputLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiDocumentProcessorJobOutputLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiDocumentProcessorJobOutputLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiDocumentProcessorJobOutputLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._namespace = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._namespace = value.namespace;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface AiDocumentProcessorJobProcessorConfigFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#feature_type AiDocumentProcessorJob#feature_type}
  */
  readonly featureType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#generate_searchable_pdf AiDocumentProcessorJob#generate_searchable_pdf}
  */
  readonly generateSearchablePdf?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#max_results AiDocumentProcessorJob#max_results}
  */
  readonly maxResults?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#model_id AiDocumentProcessorJob#model_id}
  */
  readonly modelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#selection_mark_detection AiDocumentProcessorJob#selection_mark_detection}
  */
  readonly selectionMarkDetection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#tenancy_id AiDocumentProcessorJob#tenancy_id}
  */
  readonly tenancyId?: string;
}

export function aiDocumentProcessorJobProcessorConfigFeaturesToTerraform(struct?: AiDocumentProcessorJobProcessorConfigFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_type: cdktf.stringToTerraform(struct!.featureType),
    generate_searchable_pdf: cdktf.booleanToTerraform(struct!.generateSearchablePdf),
    max_results: cdktf.numberToTerraform(struct!.maxResults),
    model_id: cdktf.stringToTerraform(struct!.modelId),
    selection_mark_detection: cdktf.booleanToTerraform(struct!.selectionMarkDetection),
    tenancy_id: cdktf.stringToTerraform(struct!.tenancyId),
  }
}


export function aiDocumentProcessorJobProcessorConfigFeaturesToHclTerraform(struct?: AiDocumentProcessorJobProcessorConfigFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_type: {
      value: cdktf.stringToHclTerraform(struct!.featureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_searchable_pdf: {
      value: cdktf.booleanToHclTerraform(struct!.generateSearchablePdf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_results: {
      value: cdktf.numberToHclTerraform(struct!.maxResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_id: {
      value: cdktf.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_mark_detection: {
      value: cdktf.booleanToHclTerraform(struct!.selectionMarkDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tenancy_id: {
      value: cdktf.stringToHclTerraform(struct!.tenancyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiDocumentProcessorJobProcessorConfigFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiDocumentProcessorJobProcessorConfigFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureType = this._featureType;
    }
    if (this._generateSearchablePdf !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateSearchablePdf = this._generateSearchablePdf;
    }
    if (this._maxResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResults = this._maxResults;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._selectionMarkDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionMarkDetection = this._selectionMarkDetection;
    }
    if (this._tenancyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenancyId = this._tenancyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiDocumentProcessorJobProcessorConfigFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._featureType = undefined;
      this._generateSearchablePdf = undefined;
      this._maxResults = undefined;
      this._modelId = undefined;
      this._selectionMarkDetection = undefined;
      this._tenancyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._featureType = value.featureType;
      this._generateSearchablePdf = value.generateSearchablePdf;
      this._maxResults = value.maxResults;
      this._modelId = value.modelId;
      this._selectionMarkDetection = value.selectionMarkDetection;
      this._tenancyId = value.tenancyId;
    }
  }

  // feature_type - computed: false, optional: false, required: true
  private _featureType?: string; 
  public get featureType() {
    return this.getStringAttribute('feature_type');
  }
  public set featureType(value: string) {
    this._featureType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureTypeInput() {
    return this._featureType;
  }

  // generate_searchable_pdf - computed: true, optional: true, required: false
  private _generateSearchablePdf?: boolean | cdktf.IResolvable; 
  public get generateSearchablePdf() {
    return this.getBooleanAttribute('generate_searchable_pdf');
  }
  public set generateSearchablePdf(value: boolean | cdktf.IResolvable) {
    this._generateSearchablePdf = value;
  }
  public resetGenerateSearchablePdf() {
    this._generateSearchablePdf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateSearchablePdfInput() {
    return this._generateSearchablePdf;
  }

  // max_results - computed: true, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // model_id - computed: true, optional: true, required: false
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  public resetModelId() {
    this._modelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // selection_mark_detection - computed: true, optional: true, required: false
  private _selectionMarkDetection?: boolean | cdktf.IResolvable; 
  public get selectionMarkDetection() {
    return this.getBooleanAttribute('selection_mark_detection');
  }
  public set selectionMarkDetection(value: boolean | cdktf.IResolvable) {
    this._selectionMarkDetection = value;
  }
  public resetSelectionMarkDetection() {
    this._selectionMarkDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionMarkDetectionInput() {
    return this._selectionMarkDetection;
  }

  // tenancy_id - computed: true, optional: true, required: false
  private _tenancyId?: string; 
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }
  public resetTenancyId() {
    this._tenancyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyIdInput() {
    return this._tenancyId;
  }
}

export class AiDocumentProcessorJobProcessorConfigFeaturesList extends cdktf.ComplexList {
  public internalValue? : AiDocumentProcessorJobProcessorConfigFeatures[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AiDocumentProcessorJobProcessorConfigFeaturesOutputReference {
    return new AiDocumentProcessorJobProcessorConfigFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiDocumentProcessorJobProcessorConfigNormalizationFieldsMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#normalization_type AiDocumentProcessorJob#normalization_type}
  */
  readonly normalizationType?: string;
}

export function aiDocumentProcessorJobProcessorConfigNormalizationFieldsMapToTerraform(struct?: AiDocumentProcessorJobProcessorConfigNormalizationFieldsMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    normalization_type: cdktf.stringToTerraform(struct!.normalizationType),
  }
}


export function aiDocumentProcessorJobProcessorConfigNormalizationFieldsMapToHclTerraform(struct?: AiDocumentProcessorJobProcessorConfigNormalizationFieldsMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    normalization_type: {
      value: cdktf.stringToHclTerraform(struct!.normalizationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiDocumentProcessorJobProcessorConfigNormalizationFieldsMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiDocumentProcessorJobProcessorConfigNormalizationFieldsMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._normalizationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalizationType = this._normalizationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiDocumentProcessorJobProcessorConfigNormalizationFieldsMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._normalizationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._normalizationType = value.normalizationType;
    }
  }

  // normalization_type - computed: true, optional: true, required: false
  private _normalizationType?: string; 
  public get normalizationType() {
    return this.getStringAttribute('normalization_type');
  }
  public set normalizationType(value: string) {
    this._normalizationType = value;
  }
  public resetNormalizationType() {
    this._normalizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizationTypeInput() {
    return this._normalizationType;
  }
}

export class AiDocumentProcessorJobProcessorConfigNormalizationFieldsMapList extends cdktf.ComplexList {
  public internalValue? : AiDocumentProcessorJobProcessorConfigNormalizationFieldsMap[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AiDocumentProcessorJobProcessorConfigNormalizationFieldsMapOutputReference {
    return new AiDocumentProcessorJobProcessorConfigNormalizationFieldsMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiDocumentProcessorJobProcessorConfigNormalizationFields {
  /**
  * map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#map AiDocumentProcessorJob#map}
  */
  readonly map?: AiDocumentProcessorJobProcessorConfigNormalizationFieldsMap[] | cdktf.IResolvable;
}

export function aiDocumentProcessorJobProcessorConfigNormalizationFieldsToTerraform(struct?: AiDocumentProcessorJobProcessorConfigNormalizationFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map: cdktf.listMapper(aiDocumentProcessorJobProcessorConfigNormalizationFieldsMapToTerraform, true)(struct!.map),
  }
}


export function aiDocumentProcessorJobProcessorConfigNormalizationFieldsToHclTerraform(struct?: AiDocumentProcessorJobProcessorConfigNormalizationFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map: {
      value: cdktf.listMapperHcl(aiDocumentProcessorJobProcessorConfigNormalizationFieldsMapToHclTerraform, true)(struct!.map),
      isBlock: true,
      type: "list",
      storageClassType: "AiDocumentProcessorJobProcessorConfigNormalizationFieldsMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiDocumentProcessorJobProcessorConfigNormalizationFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiDocumentProcessorJobProcessorConfigNormalizationFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._map?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiDocumentProcessorJobProcessorConfigNormalizationFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._map.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._map.internalValue = value.map;
    }
  }

  // map - computed: false, optional: true, required: false
  private _map = new AiDocumentProcessorJobProcessorConfigNormalizationFieldsMapList(this, "map", false);
  public get map() {
    return this._map;
  }
  public putMap(value: AiDocumentProcessorJobProcessorConfigNormalizationFieldsMap[] | cdktf.IResolvable) {
    this._map.internalValue = value;
  }
  public resetMap() {
    this._map.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map.internalValue;
  }
}

export class AiDocumentProcessorJobProcessorConfigNormalizationFieldsList extends cdktf.ComplexList {
  public internalValue? : AiDocumentProcessorJobProcessorConfigNormalizationFields[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AiDocumentProcessorJobProcessorConfigNormalizationFieldsOutputReference {
    return new AiDocumentProcessorJobProcessorConfigNormalizationFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiDocumentProcessorJobProcessorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#document_type AiDocumentProcessorJob#document_type}
  */
  readonly documentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#is_zip_output_enabled AiDocumentProcessorJob#is_zip_output_enabled}
  */
  readonly isZipOutputEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#language AiDocumentProcessorJob#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#model_id AiDocumentProcessorJob#model_id}
  */
  readonly modelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#processor_type AiDocumentProcessorJob#processor_type}
  */
  readonly processorType: string;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#features AiDocumentProcessorJob#features}
  */
  readonly features: AiDocumentProcessorJobProcessorConfigFeatures[] | cdktf.IResolvable;
  /**
  * normalization_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#normalization_fields AiDocumentProcessorJob#normalization_fields}
  */
  readonly normalizationFields?: AiDocumentProcessorJobProcessorConfigNormalizationFields[] | cdktf.IResolvable;
}

export function aiDocumentProcessorJobProcessorConfigToTerraform(struct?: AiDocumentProcessorJobProcessorConfigOutputReference | AiDocumentProcessorJobProcessorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    document_type: cdktf.stringToTerraform(struct!.documentType),
    is_zip_output_enabled: cdktf.booleanToTerraform(struct!.isZipOutputEnabled),
    language: cdktf.stringToTerraform(struct!.language),
    model_id: cdktf.stringToTerraform(struct!.modelId),
    processor_type: cdktf.stringToTerraform(struct!.processorType),
    features: cdktf.listMapper(aiDocumentProcessorJobProcessorConfigFeaturesToTerraform, true)(struct!.features),
    normalization_fields: cdktf.listMapper(aiDocumentProcessorJobProcessorConfigNormalizationFieldsToTerraform, true)(struct!.normalizationFields),
  }
}


export function aiDocumentProcessorJobProcessorConfigToHclTerraform(struct?: AiDocumentProcessorJobProcessorConfigOutputReference | AiDocumentProcessorJobProcessorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    document_type: {
      value: cdktf.stringToHclTerraform(struct!.documentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_zip_output_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isZipOutputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id: {
      value: cdktf.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    processor_type: {
      value: cdktf.stringToHclTerraform(struct!.processorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    features: {
      value: cdktf.listMapperHcl(aiDocumentProcessorJobProcessorConfigFeaturesToHclTerraform, true)(struct!.features),
      isBlock: true,
      type: "list",
      storageClassType: "AiDocumentProcessorJobProcessorConfigFeaturesList",
    },
    normalization_fields: {
      value: cdktf.listMapperHcl(aiDocumentProcessorJobProcessorConfigNormalizationFieldsToHclTerraform, true)(struct!.normalizationFields),
      isBlock: true,
      type: "list",
      storageClassType: "AiDocumentProcessorJobProcessorConfigNormalizationFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiDocumentProcessorJobProcessorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiDocumentProcessorJobProcessorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentType = this._documentType;
    }
    if (this._isZipOutputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isZipOutputEnabled = this._isZipOutputEnabled;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._processorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.processorType = this._processorType;
    }
    if (this._features?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features?.internalValue;
    }
    if (this._normalizationFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalizationFields = this._normalizationFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiDocumentProcessorJobProcessorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._documentType = undefined;
      this._isZipOutputEnabled = undefined;
      this._language = undefined;
      this._modelId = undefined;
      this._processorType = undefined;
      this._features.internalValue = undefined;
      this._normalizationFields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._documentType = value.documentType;
      this._isZipOutputEnabled = value.isZipOutputEnabled;
      this._language = value.language;
      this._modelId = value.modelId;
      this._processorType = value.processorType;
      this._features.internalValue = value.features;
      this._normalizationFields.internalValue = value.normalizationFields;
    }
  }

  // document_type - computed: true, optional: true, required: false
  private _documentType?: string; 
  public get documentType() {
    return this.getStringAttribute('document_type');
  }
  public set documentType(value: string) {
    this._documentType = value;
  }
  public resetDocumentType() {
    this._documentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTypeInput() {
    return this._documentType;
  }

  // is_zip_output_enabled - computed: true, optional: true, required: false
  private _isZipOutputEnabled?: boolean | cdktf.IResolvable; 
  public get isZipOutputEnabled() {
    return this.getBooleanAttribute('is_zip_output_enabled');
  }
  public set isZipOutputEnabled(value: boolean | cdktf.IResolvable) {
    this._isZipOutputEnabled = value;
  }
  public resetIsZipOutputEnabled() {
    this._isZipOutputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isZipOutputEnabledInput() {
    return this._isZipOutputEnabled;
  }

  // language - computed: true, optional: true, required: false
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

  // model_id - computed: true, optional: true, required: false
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  public resetModelId() {
    this._modelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // processor_type - computed: false, optional: false, required: true
  private _processorType?: string; 
  public get processorType() {
    return this.getStringAttribute('processor_type');
  }
  public set processorType(value: string) {
    this._processorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processorTypeInput() {
    return this._processorType;
  }

  // features - computed: false, optional: false, required: true
  private _features = new AiDocumentProcessorJobProcessorConfigFeaturesList(this, "features", false);
  public get features() {
    return this._features;
  }
  public putFeatures(value: AiDocumentProcessorJobProcessorConfigFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // normalization_fields - computed: false, optional: true, required: false
  private _normalizationFields = new AiDocumentProcessorJobProcessorConfigNormalizationFieldsList(this, "normalization_fields", false);
  public get normalizationFields() {
    return this._normalizationFields;
  }
  public putNormalizationFields(value: AiDocumentProcessorJobProcessorConfigNormalizationFields[] | cdktf.IResolvable) {
    this._normalizationFields.internalValue = value;
  }
  public resetNormalizationFields() {
    this._normalizationFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizationFieldsInput() {
    return this._normalizationFields.internalValue;
  }
}
export interface AiDocumentProcessorJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#create AiDocumentProcessorJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#delete AiDocumentProcessorJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#update AiDocumentProcessorJob#update}
  */
  readonly update?: string;
}

export function aiDocumentProcessorJobTimeoutsToTerraform(struct?: AiDocumentProcessorJobTimeouts | cdktf.IResolvable): any {
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


export function aiDocumentProcessorJobTimeoutsToHclTerraform(struct?: AiDocumentProcessorJobTimeouts | cdktf.IResolvable): any {
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

export class AiDocumentProcessorJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiDocumentProcessorJobTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AiDocumentProcessorJobTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job oci_ai_document_processor_job}
*/
export class AiDocumentProcessorJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_document_processor_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AiDocumentProcessorJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiDocumentProcessorJob to import
  * @param importFromId The id of the existing AiDocumentProcessorJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiDocumentProcessorJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ai_document_processor_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ai_document_processor_job oci_ai_document_processor_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiDocumentProcessorJobConfig
  */
  public constructor(scope: Construct, id: string, config: AiDocumentProcessorJobConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ai_document_processor_job',
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
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._inputLocation.internalValue = config.inputLocation;
    this._outputLocation.internalValue = config.outputLocation;
    this._processorConfig.internalValue = config.processorConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // percent_complete - computed: true, optional: false, required: false
  public get percentComplete() {
    return this.getNumberAttribute('percent_complete');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_accepted - computed: true, optional: false, required: false
  public get timeAccepted() {
    return this.getStringAttribute('time_accepted');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // input_location - computed: false, optional: false, required: true
  private _inputLocation = new AiDocumentProcessorJobInputLocationOutputReference(this, "input_location");
  public get inputLocation() {
    return this._inputLocation;
  }
  public putInputLocation(value: AiDocumentProcessorJobInputLocation) {
    this._inputLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLocationInput() {
    return this._inputLocation.internalValue;
  }

  // output_location - computed: false, optional: false, required: true
  private _outputLocation = new AiDocumentProcessorJobOutputLocationOutputReference(this, "output_location");
  public get outputLocation() {
    return this._outputLocation;
  }
  public putOutputLocation(value: AiDocumentProcessorJobOutputLocation) {
    this._outputLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation.internalValue;
  }

  // processor_config - computed: false, optional: false, required: true
  private _processorConfig = new AiDocumentProcessorJobProcessorConfigOutputReference(this, "processor_config");
  public get processorConfig() {
    return this._processorConfig;
  }
  public putProcessorConfig(value: AiDocumentProcessorJobProcessorConfig) {
    this._processorConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processorConfigInput() {
    return this._processorConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AiDocumentProcessorJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AiDocumentProcessorJobTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      input_location: aiDocumentProcessorJobInputLocationToTerraform(this._inputLocation.internalValue),
      output_location: aiDocumentProcessorJobOutputLocationToTerraform(this._outputLocation.internalValue),
      processor_config: aiDocumentProcessorJobProcessorConfigToTerraform(this._processorConfig.internalValue),
      timeouts: aiDocumentProcessorJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      input_location: {
        value: aiDocumentProcessorJobInputLocationToHclTerraform(this._inputLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiDocumentProcessorJobInputLocationList",
      },
      output_location: {
        value: aiDocumentProcessorJobOutputLocationToHclTerraform(this._outputLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiDocumentProcessorJobOutputLocationList",
      },
      processor_config: {
        value: aiDocumentProcessorJobProcessorConfigToHclTerraform(this._processorConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiDocumentProcessorJobProcessorConfigList",
      },
      timeouts: {
        value: aiDocumentProcessorJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiDocumentProcessorJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
