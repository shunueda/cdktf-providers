// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiLanguageJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#compartment_id AiLanguageJob#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#description AiLanguageJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#display_name AiLanguageJob#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#id AiLanguageJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * input_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#input_configuration AiLanguageJob#input_configuration}
  */
  readonly inputConfiguration?: AiLanguageJobInputConfiguration;
  /**
  * input_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#input_location AiLanguageJob#input_location}
  */
  readonly inputLocation: AiLanguageJobInputLocation;
  /**
  * model_metadata_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#model_metadata_details AiLanguageJob#model_metadata_details}
  */
  readonly modelMetadataDetails: AiLanguageJobModelMetadataDetails[] | cdktf.IResolvable;
  /**
  * output_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#output_location AiLanguageJob#output_location}
  */
  readonly outputLocation: AiLanguageJobOutputLocation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#timeouts AiLanguageJob#timeouts}
  */
  readonly timeouts?: AiLanguageJobTimeouts;
}
export interface AiLanguageJobInputConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#configuration AiLanguageJob#configuration}
  */
  readonly configuration?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#document_types AiLanguageJob#document_types}
  */
  readonly documentTypes?: string[];
}

export function aiLanguageJobInputConfigurationToTerraform(struct?: AiLanguageJobInputConfigurationOutputReference | AiLanguageJobInputConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configuration),
    document_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.documentTypes),
  }
}


export function aiLanguageJobInputConfigurationToHclTerraform(struct?: AiLanguageJobInputConfigurationOutputReference | AiLanguageJobInputConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    document_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.documentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiLanguageJobInputConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiLanguageJobInputConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._documentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentTypes = this._documentTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiLanguageJobInputConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration = undefined;
      this._documentTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration = value.configuration;
      this._documentTypes = value.documentTypes;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configuration() {
    return this.interpolationForAttribute('configuration');
  }
  public set configuration(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // document_types - computed: true, optional: true, required: false
  private _documentTypes?: string[]; 
  public get documentTypes() {
    return this.getListAttribute('document_types');
  }
  public set documentTypes(value: string[]) {
    this._documentTypes = value;
  }
  public resetDocumentTypes() {
    this._documentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTypesInput() {
    return this._documentTypes;
  }
}
export interface AiLanguageJobInputLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#bucket AiLanguageJob#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#location_type AiLanguageJob#location_type}
  */
  readonly locationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#namespace AiLanguageJob#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#object_names AiLanguageJob#object_names}
  */
  readonly objectNames?: string[];
}

export function aiLanguageJobInputLocationToTerraform(struct?: AiLanguageJobInputLocationOutputReference | AiLanguageJobInputLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    location_type: cdktf.stringToTerraform(struct!.locationType),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.objectNames),
  }
}


export function aiLanguageJobInputLocationToHclTerraform(struct?: AiLanguageJobInputLocationOutputReference | AiLanguageJobInputLocation): any {
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
    location_type: {
      value: cdktf.stringToHclTerraform(struct!.locationType),
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
    object_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.objectNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiLanguageJobInputLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiLanguageJobInputLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._locationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationType = this._locationType;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._objectNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectNames = this._objectNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiLanguageJobInputLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._locationType = undefined;
      this._namespace = undefined;
      this._objectNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._locationType = value.locationType;
      this._namespace = value.namespace;
      this._objectNames = value.objectNames;
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

  // location_type - computed: false, optional: false, required: true
  private _locationType?: string; 
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string) {
    this._locationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType;
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

  // object_names - computed: false, optional: true, required: false
  private _objectNames?: string[]; 
  public get objectNames() {
    return this.getListAttribute('object_names');
  }
  public set objectNames(value: string[]) {
    this._objectNames = value;
  }
  public resetObjectNames() {
    this._objectNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNamesInput() {
    return this._objectNames;
  }
}
export interface AiLanguageJobModelMetadataDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#configuration AiLanguageJob#configuration}
  */
  readonly configuration?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#endpoint_id AiLanguageJob#endpoint_id}
  */
  readonly endpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#language_code AiLanguageJob#language_code}
  */
  readonly languageCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#model_id AiLanguageJob#model_id}
  */
  readonly modelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#model_type AiLanguageJob#model_type}
  */
  readonly modelType?: string;
}

export function aiLanguageJobModelMetadataDetailsToTerraform(struct?: AiLanguageJobModelMetadataDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configuration),
    endpoint_id: cdktf.stringToTerraform(struct!.endpointId),
    language_code: cdktf.stringToTerraform(struct!.languageCode),
    model_id: cdktf.stringToTerraform(struct!.modelId),
    model_type: cdktf.stringToTerraform(struct!.modelType),
  }
}


export function aiLanguageJobModelMetadataDetailsToHclTerraform(struct?: AiLanguageJobModelMetadataDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.endpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language_code: {
      value: cdktf.stringToHclTerraform(struct!.languageCode),
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
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiLanguageJobModelMetadataDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiLanguageJobModelMetadataDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._endpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointId = this._endpointId;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiLanguageJobModelMetadataDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._endpointId = undefined;
      this._languageCode = undefined;
      this._modelId = undefined;
      this._modelType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._endpointId = value.endpointId;
      this._languageCode = value.languageCode;
      this._modelId = value.modelId;
      this._modelType = value.modelType;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configuration() {
    return this.interpolationForAttribute('configuration');
  }
  public set configuration(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // endpoint_id - computed: true, optional: true, required: false
  private _endpointId?: string; 
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }
  public resetEndpointId() {
    this._endpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
  }

  // language_code - computed: true, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
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

  // model_type - computed: true, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
  }
}

export class AiLanguageJobModelMetadataDetailsList extends cdktf.ComplexList {
  public internalValue? : AiLanguageJobModelMetadataDetails[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AiLanguageJobModelMetadataDetailsOutputReference {
    return new AiLanguageJobModelMetadataDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiLanguageJobOutputLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#bucket AiLanguageJob#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#namespace AiLanguageJob#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#prefix AiLanguageJob#prefix}
  */
  readonly prefix?: string;
}

export function aiLanguageJobOutputLocationToTerraform(struct?: AiLanguageJobOutputLocationOutputReference | AiLanguageJobOutputLocation): any {
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


export function aiLanguageJobOutputLocationToHclTerraform(struct?: AiLanguageJobOutputLocationOutputReference | AiLanguageJobOutputLocation): any {
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

export class AiLanguageJobOutputLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiLanguageJobOutputLocation | undefined {
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

  public set internalValue(value: AiLanguageJobOutputLocation | undefined) {
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

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface AiLanguageJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#create AiLanguageJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#delete AiLanguageJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#update AiLanguageJob#update}
  */
  readonly update?: string;
}

export function aiLanguageJobTimeoutsToTerraform(struct?: AiLanguageJobTimeouts | cdktf.IResolvable): any {
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


export function aiLanguageJobTimeoutsToHclTerraform(struct?: AiLanguageJobTimeouts | cdktf.IResolvable): any {
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

export class AiLanguageJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiLanguageJobTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AiLanguageJobTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job oci_ai_language_job}
*/
export class AiLanguageJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_language_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AiLanguageJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiLanguageJob to import
  * @param importFromId The id of the existing AiLanguageJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiLanguageJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ai_language_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_language_job oci_ai_language_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiLanguageJobConfig
  */
  public constructor(scope: Construct, id: string, config: AiLanguageJobConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ai_language_job',
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
    this._compartmentId = config.compartmentId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._inputConfiguration.internalValue = config.inputConfiguration;
    this._inputLocation.internalValue = config.inputLocation;
    this._modelMetadataDetails.internalValue = config.modelMetadataDetails;
    this._outputLocation.internalValue = config.outputLocation;
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

  // completed_documents - computed: true, optional: false, required: false
  public get completedDocuments() {
    return this.getNumberAttribute('completed_documents');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // failed_documents - computed: true, optional: false, required: false
  public get failedDocuments() {
    return this.getNumberAttribute('failed_documents');
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

  // pending_documents - computed: true, optional: false, required: false
  public get pendingDocuments() {
    return this.getNumberAttribute('pending_documents');
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

  // time_completed - computed: true, optional: false, required: false
  public get timeCompleted() {
    return this.getStringAttribute('time_completed');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // total_documents - computed: true, optional: false, required: false
  public get totalDocuments() {
    return this.getNumberAttribute('total_documents');
  }

  // ttl_in_days - computed: true, optional: false, required: false
  public get ttlInDays() {
    return this.getNumberAttribute('ttl_in_days');
  }

  // warnings_count - computed: true, optional: false, required: false
  public get warningsCount() {
    return this.getNumberAttribute('warnings_count');
  }

  // input_configuration - computed: false, optional: true, required: false
  private _inputConfiguration = new AiLanguageJobInputConfigurationOutputReference(this, "input_configuration");
  public get inputConfiguration() {
    return this._inputConfiguration;
  }
  public putInputConfiguration(value: AiLanguageJobInputConfiguration) {
    this._inputConfiguration.internalValue = value;
  }
  public resetInputConfiguration() {
    this._inputConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputConfigurationInput() {
    return this._inputConfiguration.internalValue;
  }

  // input_location - computed: false, optional: false, required: true
  private _inputLocation = new AiLanguageJobInputLocationOutputReference(this, "input_location");
  public get inputLocation() {
    return this._inputLocation;
  }
  public putInputLocation(value: AiLanguageJobInputLocation) {
    this._inputLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLocationInput() {
    return this._inputLocation.internalValue;
  }

  // model_metadata_details - computed: false, optional: false, required: true
  private _modelMetadataDetails = new AiLanguageJobModelMetadataDetailsList(this, "model_metadata_details", false);
  public get modelMetadataDetails() {
    return this._modelMetadataDetails;
  }
  public putModelMetadataDetails(value: AiLanguageJobModelMetadataDetails[] | cdktf.IResolvable) {
    this._modelMetadataDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelMetadataDetailsInput() {
    return this._modelMetadataDetails.internalValue;
  }

  // output_location - computed: false, optional: false, required: true
  private _outputLocation = new AiLanguageJobOutputLocationOutputReference(this, "output_location");
  public get outputLocation() {
    return this._outputLocation;
  }
  public putOutputLocation(value: AiLanguageJobOutputLocation) {
    this._outputLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AiLanguageJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AiLanguageJobTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      input_configuration: aiLanguageJobInputConfigurationToTerraform(this._inputConfiguration.internalValue),
      input_location: aiLanguageJobInputLocationToTerraform(this._inputLocation.internalValue),
      model_metadata_details: cdktf.listMapper(aiLanguageJobModelMetadataDetailsToTerraform, true)(this._modelMetadataDetails.internalValue),
      output_location: aiLanguageJobOutputLocationToTerraform(this._outputLocation.internalValue),
      timeouts: aiLanguageJobTimeoutsToTerraform(this._timeouts.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      input_configuration: {
        value: aiLanguageJobInputConfigurationToHclTerraform(this._inputConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiLanguageJobInputConfigurationList",
      },
      input_location: {
        value: aiLanguageJobInputLocationToHclTerraform(this._inputLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiLanguageJobInputLocationList",
      },
      model_metadata_details: {
        value: cdktf.listMapperHcl(aiLanguageJobModelMetadataDetailsToHclTerraform, true)(this._modelMetadataDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiLanguageJobModelMetadataDetailsList",
      },
      output_location: {
        value: aiLanguageJobOutputLocationToHclTerraform(this._outputLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiLanguageJobOutputLocationList",
      },
      timeouts: {
        value: aiLanguageJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiLanguageJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
