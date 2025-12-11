// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatascienceMlApplicationImplementationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#allowed_migration_destinations DatascienceMlApplicationImplementation#allowed_migration_destinations}
  */
  readonly allowedMigrationDestinations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#compartment_id DatascienceMlApplicationImplementation#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#defined_tags DatascienceMlApplicationImplementation#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#freeform_tags DatascienceMlApplicationImplementation#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#id DatascienceMlApplicationImplementation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#ml_application_id DatascienceMlApplicationImplementation#ml_application_id}
  */
  readonly mlApplicationId: string;
  /**
  * Specifies the ML application package as a map of key-value pairs. Valid keys include 'source_type', 'path', and 'uri'. Use 'file://' for local paths or 'https://' for object storage URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#ml_application_package DatascienceMlApplicationImplementation#ml_application_package}
  */
  readonly mlApplicationPackage?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#name DatascienceMlApplicationImplementation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#opc_ml_app_package_args DatascienceMlApplicationImplementation#opc_ml_app_package_args}
  */
  readonly opcMlAppPackageArgs?: { [key: string]: string };
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#logging DatascienceMlApplicationImplementation#logging}
  */
  readonly logging?: DatascienceMlApplicationImplementationLogging;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#timeouts DatascienceMlApplicationImplementation#timeouts}
  */
  readonly timeouts?: DatascienceMlApplicationImplementationTimeouts;
}
export interface DatascienceMlApplicationImplementationApplicationComponents {
}

export function datascienceMlApplicationImplementationApplicationComponentsToTerraform(struct?: DatascienceMlApplicationImplementationApplicationComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datascienceMlApplicationImplementationApplicationComponentsToHclTerraform(struct?: DatascienceMlApplicationImplementationApplicationComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatascienceMlApplicationImplementationApplicationComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceMlApplicationImplementationApplicationComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceMlApplicationImplementationApplicationComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // component_name - computed: true, optional: false, required: false
  public get componentName() {
    return this.getStringAttribute('component_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DatascienceMlApplicationImplementationApplicationComponentsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatascienceMlApplicationImplementationApplicationComponentsOutputReference {
    return new DatascienceMlApplicationImplementationApplicationComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceMlApplicationImplementationConfigurationSchema {
}

export function datascienceMlApplicationImplementationConfigurationSchemaToTerraform(struct?: DatascienceMlApplicationImplementationConfigurationSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datascienceMlApplicationImplementationConfigurationSchemaToHclTerraform(struct?: DatascienceMlApplicationImplementationConfigurationSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatascienceMlApplicationImplementationConfigurationSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceMlApplicationImplementationConfigurationSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceMlApplicationImplementationConfigurationSchema | undefined) {
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

  // is_mandatory - computed: true, optional: false, required: false
  public get isMandatory() {
    return this.getBooleanAttribute('is_mandatory');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // sample_value - computed: true, optional: false, required: false
  public get sampleValue() {
    return this.getStringAttribute('sample_value');
  }

  // validation_regexp - computed: true, optional: false, required: false
  public get validationRegexp() {
    return this.getStringAttribute('validation_regexp');
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
}

export class DatascienceMlApplicationImplementationConfigurationSchemaList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatascienceMlApplicationImplementationConfigurationSchemaOutputReference {
    return new DatascienceMlApplicationImplementationConfigurationSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceMlApplicationImplementationMlApplicationPackageArgumentsArguments {
}

export function datascienceMlApplicationImplementationMlApplicationPackageArgumentsArgumentsToTerraform(struct?: DatascienceMlApplicationImplementationMlApplicationPackageArgumentsArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datascienceMlApplicationImplementationMlApplicationPackageArgumentsArgumentsToHclTerraform(struct?: DatascienceMlApplicationImplementationMlApplicationPackageArgumentsArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatascienceMlApplicationImplementationMlApplicationPackageArgumentsArgumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceMlApplicationImplementationMlApplicationPackageArgumentsArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceMlApplicationImplementationMlApplicationPackageArgumentsArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_mandatory - computed: true, optional: false, required: false
  public get isMandatory() {
    return this.getBooleanAttribute('is_mandatory');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DatascienceMlApplicationImplementationMlApplicationPackageArgumentsArgumentsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatascienceMlApplicationImplementationMlApplicationPackageArgumentsArgumentsOutputReference {
    return new DatascienceMlApplicationImplementationMlApplicationPackageArgumentsArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceMlApplicationImplementationMlApplicationPackageArguments {
}

export function datascienceMlApplicationImplementationMlApplicationPackageArgumentsToTerraform(struct?: DatascienceMlApplicationImplementationMlApplicationPackageArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datascienceMlApplicationImplementationMlApplicationPackageArgumentsToHclTerraform(struct?: DatascienceMlApplicationImplementationMlApplicationPackageArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatascienceMlApplicationImplementationMlApplicationPackageArgumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceMlApplicationImplementationMlApplicationPackageArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceMlApplicationImplementationMlApplicationPackageArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arguments - computed: true, optional: false, required: false
  private _arguments = new DatascienceMlApplicationImplementationMlApplicationPackageArgumentsArgumentsList(this, "arguments", false);
  public get arguments() {
    return this._arguments;
  }
}

export class DatascienceMlApplicationImplementationMlApplicationPackageArgumentsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatascienceMlApplicationImplementationMlApplicationPackageArgumentsOutputReference {
    return new DatascienceMlApplicationImplementationMlApplicationPackageArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceMlApplicationImplementationLoggingAggregatedInstanceViewLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#enable_logging DatascienceMlApplicationImplementation#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#log_group_id DatascienceMlApplicationImplementation#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#log_id DatascienceMlApplicationImplementation#log_id}
  */
  readonly logId?: string;
}

export function datascienceMlApplicationImplementationLoggingAggregatedInstanceViewLogToTerraform(struct?: DatascienceMlApplicationImplementationLoggingAggregatedInstanceViewLogOutputReference | DatascienceMlApplicationImplementationLoggingAggregatedInstanceViewLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_logging: cdktf.booleanToTerraform(struct!.enableLogging),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    log_id: cdktf.stringToTerraform(struct!.logId),
  }
}


export function datascienceMlApplicationImplementationLoggingAggregatedInstanceViewLogToHclTerraform(struct?: DatascienceMlApplicationImplementationLoggingAggregatedInstanceViewLogOutputReference | DatascienceMlApplicationImplementationLoggingAggregatedInstanceViewLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_id: {
      value: cdktf.stringToHclTerraform(struct!.logId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceMlApplicationImplementationLoggingAggregatedInstanceViewLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceMlApplicationImplementationLoggingAggregatedInstanceViewLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLogging = this._enableLogging;
    }
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._logId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logId = this._logId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceMlApplicationImplementationLoggingAggregatedInstanceViewLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableLogging = undefined;
      this._logGroupId = undefined;
      this._logId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableLogging = value.enableLogging;
      this._logGroupId = value.logGroupId;
      this._logId = value.logId;
    }
  }

  // enable_logging - computed: true, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // log_group_id - computed: true, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_id - computed: true, optional: true, required: false
  private _logId?: string; 
  public get logId() {
    return this.getStringAttribute('log_id');
  }
  public set logId(value: string) {
    this._logId = value;
  }
  public resetLogId() {
    this._logId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIdInput() {
    return this._logId;
  }
}
export interface DatascienceMlApplicationImplementationLoggingImplementationLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#enable_logging DatascienceMlApplicationImplementation#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#log_group_id DatascienceMlApplicationImplementation#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#log_id DatascienceMlApplicationImplementation#log_id}
  */
  readonly logId?: string;
}

export function datascienceMlApplicationImplementationLoggingImplementationLogToTerraform(struct?: DatascienceMlApplicationImplementationLoggingImplementationLogOutputReference | DatascienceMlApplicationImplementationLoggingImplementationLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_logging: cdktf.booleanToTerraform(struct!.enableLogging),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    log_id: cdktf.stringToTerraform(struct!.logId),
  }
}


export function datascienceMlApplicationImplementationLoggingImplementationLogToHclTerraform(struct?: DatascienceMlApplicationImplementationLoggingImplementationLogOutputReference | DatascienceMlApplicationImplementationLoggingImplementationLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_id: {
      value: cdktf.stringToHclTerraform(struct!.logId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceMlApplicationImplementationLoggingImplementationLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceMlApplicationImplementationLoggingImplementationLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLogging = this._enableLogging;
    }
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._logId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logId = this._logId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceMlApplicationImplementationLoggingImplementationLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableLogging = undefined;
      this._logGroupId = undefined;
      this._logId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableLogging = value.enableLogging;
      this._logGroupId = value.logGroupId;
      this._logId = value.logId;
    }
  }

  // enable_logging - computed: true, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // log_group_id - computed: true, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_id - computed: true, optional: true, required: false
  private _logId?: string; 
  public get logId() {
    return this.getStringAttribute('log_id');
  }
  public set logId(value: string) {
    this._logId = value;
  }
  public resetLogId() {
    this._logId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIdInput() {
    return this._logId;
  }
}
export interface DatascienceMlApplicationImplementationLoggingTriggerLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#enable_logging DatascienceMlApplicationImplementation#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#log_group_id DatascienceMlApplicationImplementation#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#log_id DatascienceMlApplicationImplementation#log_id}
  */
  readonly logId?: string;
}

export function datascienceMlApplicationImplementationLoggingTriggerLogToTerraform(struct?: DatascienceMlApplicationImplementationLoggingTriggerLogOutputReference | DatascienceMlApplicationImplementationLoggingTriggerLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_logging: cdktf.booleanToTerraform(struct!.enableLogging),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    log_id: cdktf.stringToTerraform(struct!.logId),
  }
}


export function datascienceMlApplicationImplementationLoggingTriggerLogToHclTerraform(struct?: DatascienceMlApplicationImplementationLoggingTriggerLogOutputReference | DatascienceMlApplicationImplementationLoggingTriggerLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_id: {
      value: cdktf.stringToHclTerraform(struct!.logId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceMlApplicationImplementationLoggingTriggerLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceMlApplicationImplementationLoggingTriggerLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLogging = this._enableLogging;
    }
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._logId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logId = this._logId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceMlApplicationImplementationLoggingTriggerLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableLogging = undefined;
      this._logGroupId = undefined;
      this._logId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableLogging = value.enableLogging;
      this._logGroupId = value.logGroupId;
      this._logId = value.logId;
    }
  }

  // enable_logging - computed: true, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // log_group_id - computed: true, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_id - computed: true, optional: true, required: false
  private _logId?: string; 
  public get logId() {
    return this.getStringAttribute('log_id');
  }
  public set logId(value: string) {
    this._logId = value;
  }
  public resetLogId() {
    this._logId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIdInput() {
    return this._logId;
  }
}
export interface DatascienceMlApplicationImplementationLogging {
  /**
  * aggregated_instance_view_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#aggregated_instance_view_log DatascienceMlApplicationImplementation#aggregated_instance_view_log}
  */
  readonly aggregatedInstanceViewLog?: DatascienceMlApplicationImplementationLoggingAggregatedInstanceViewLog;
  /**
  * implementation_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#implementation_log DatascienceMlApplicationImplementation#implementation_log}
  */
  readonly implementationLog?: DatascienceMlApplicationImplementationLoggingImplementationLog;
  /**
  * trigger_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#trigger_log DatascienceMlApplicationImplementation#trigger_log}
  */
  readonly triggerLog?: DatascienceMlApplicationImplementationLoggingTriggerLog;
}

export function datascienceMlApplicationImplementationLoggingToTerraform(struct?: DatascienceMlApplicationImplementationLoggingOutputReference | DatascienceMlApplicationImplementationLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregated_instance_view_log: datascienceMlApplicationImplementationLoggingAggregatedInstanceViewLogToTerraform(struct!.aggregatedInstanceViewLog),
    implementation_log: datascienceMlApplicationImplementationLoggingImplementationLogToTerraform(struct!.implementationLog),
    trigger_log: datascienceMlApplicationImplementationLoggingTriggerLogToTerraform(struct!.triggerLog),
  }
}


export function datascienceMlApplicationImplementationLoggingToHclTerraform(struct?: DatascienceMlApplicationImplementationLoggingOutputReference | DatascienceMlApplicationImplementationLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregated_instance_view_log: {
      value: datascienceMlApplicationImplementationLoggingAggregatedInstanceViewLogToHclTerraform(struct!.aggregatedInstanceViewLog),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceMlApplicationImplementationLoggingAggregatedInstanceViewLogList",
    },
    implementation_log: {
      value: datascienceMlApplicationImplementationLoggingImplementationLogToHclTerraform(struct!.implementationLog),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceMlApplicationImplementationLoggingImplementationLogList",
    },
    trigger_log: {
      value: datascienceMlApplicationImplementationLoggingTriggerLogToHclTerraform(struct!.triggerLog),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceMlApplicationImplementationLoggingTriggerLogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceMlApplicationImplementationLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceMlApplicationImplementationLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregatedInstanceViewLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregatedInstanceViewLog = this._aggregatedInstanceViewLog?.internalValue;
    }
    if (this._implementationLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.implementationLog = this._implementationLog?.internalValue;
    }
    if (this._triggerLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerLog = this._triggerLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceMlApplicationImplementationLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregatedInstanceViewLog.internalValue = undefined;
      this._implementationLog.internalValue = undefined;
      this._triggerLog.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregatedInstanceViewLog.internalValue = value.aggregatedInstanceViewLog;
      this._implementationLog.internalValue = value.implementationLog;
      this._triggerLog.internalValue = value.triggerLog;
    }
  }

  // aggregated_instance_view_log - computed: false, optional: true, required: false
  private _aggregatedInstanceViewLog = new DatascienceMlApplicationImplementationLoggingAggregatedInstanceViewLogOutputReference(this, "aggregated_instance_view_log");
  public get aggregatedInstanceViewLog() {
    return this._aggregatedInstanceViewLog;
  }
  public putAggregatedInstanceViewLog(value: DatascienceMlApplicationImplementationLoggingAggregatedInstanceViewLog) {
    this._aggregatedInstanceViewLog.internalValue = value;
  }
  public resetAggregatedInstanceViewLog() {
    this._aggregatedInstanceViewLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatedInstanceViewLogInput() {
    return this._aggregatedInstanceViewLog.internalValue;
  }

  // implementation_log - computed: false, optional: true, required: false
  private _implementationLog = new DatascienceMlApplicationImplementationLoggingImplementationLogOutputReference(this, "implementation_log");
  public get implementationLog() {
    return this._implementationLog;
  }
  public putImplementationLog(value: DatascienceMlApplicationImplementationLoggingImplementationLog) {
    this._implementationLog.internalValue = value;
  }
  public resetImplementationLog() {
    this._implementationLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implementationLogInput() {
    return this._implementationLog.internalValue;
  }

  // trigger_log - computed: false, optional: true, required: false
  private _triggerLog = new DatascienceMlApplicationImplementationLoggingTriggerLogOutputReference(this, "trigger_log");
  public get triggerLog() {
    return this._triggerLog;
  }
  public putTriggerLog(value: DatascienceMlApplicationImplementationLoggingTriggerLog) {
    this._triggerLog.internalValue = value;
  }
  public resetTriggerLog() {
    this._triggerLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerLogInput() {
    return this._triggerLog.internalValue;
  }
}
export interface DatascienceMlApplicationImplementationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#create DatascienceMlApplicationImplementation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#delete DatascienceMlApplicationImplementation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#update DatascienceMlApplicationImplementation#update}
  */
  readonly update?: string;
}

export function datascienceMlApplicationImplementationTimeoutsToTerraform(struct?: DatascienceMlApplicationImplementationTimeouts | cdktf.IResolvable): any {
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


export function datascienceMlApplicationImplementationTimeoutsToHclTerraform(struct?: DatascienceMlApplicationImplementationTimeouts | cdktf.IResolvable): any {
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

export class DatascienceMlApplicationImplementationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatascienceMlApplicationImplementationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatascienceMlApplicationImplementationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation oci_datascience_ml_application_implementation}
*/
export class DatascienceMlApplicationImplementation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_ml_application_implementation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatascienceMlApplicationImplementation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatascienceMlApplicationImplementation to import
  * @param importFromId The id of the existing DatascienceMlApplicationImplementation that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatascienceMlApplicationImplementation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_ml_application_implementation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/datascience_ml_application_implementation oci_datascience_ml_application_implementation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatascienceMlApplicationImplementationConfig
  */
  public constructor(scope: Construct, id: string, config: DatascienceMlApplicationImplementationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_ml_application_implementation',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedMigrationDestinations = config.allowedMigrationDestinations;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._mlApplicationId = config.mlApplicationId;
    this._mlApplicationPackage = config.mlApplicationPackage;
    this._name = config.name;
    this._opcMlAppPackageArgs = config.opcMlAppPackageArgs;
    this._logging.internalValue = config.logging;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_migration_destinations - computed: true, optional: true, required: false
  private _allowedMigrationDestinations?: string[]; 
  public get allowedMigrationDestinations() {
    return this.getListAttribute('allowed_migration_destinations');
  }
  public set allowedMigrationDestinations(value: string[]) {
    this._allowedMigrationDestinations = value;
  }
  public resetAllowedMigrationDestinations() {
    this._allowedMigrationDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMigrationDestinationsInput() {
    return this._allowedMigrationDestinations;
  }

  // application_components - computed: true, optional: false, required: false
  private _applicationComponents = new DatascienceMlApplicationImplementationApplicationComponentsList(this, "application_components", false);
  public get applicationComponents() {
    return this._applicationComponents;
  }

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

  // configuration_schema - computed: true, optional: false, required: false
  private _configurationSchema = new DatascienceMlApplicationImplementationConfigurationSchemaList(this, "configuration_schema", false);
  public get configurationSchema() {
    return this._configurationSchema;
  }

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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // ml_application_id - computed: false, optional: false, required: true
  private _mlApplicationId?: string; 
  public get mlApplicationId() {
    return this.getStringAttribute('ml_application_id');
  }
  public set mlApplicationId(value: string) {
    this._mlApplicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mlApplicationIdInput() {
    return this._mlApplicationId;
  }

  // ml_application_name - computed: true, optional: false, required: false
  public get mlApplicationName() {
    return this.getStringAttribute('ml_application_name');
  }

  // ml_application_package - computed: true, optional: true, required: false
  private _mlApplicationPackage?: { [key: string]: string }; 
  public get mlApplicationPackage() {
    return this.getStringMapAttribute('ml_application_package');
  }
  public set mlApplicationPackage(value: { [key: string]: string }) {
    this._mlApplicationPackage = value;
  }
  public resetMlApplicationPackage() {
    this._mlApplicationPackage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlApplicationPackageInput() {
    return this._mlApplicationPackage;
  }

  // ml_application_package_arguments - computed: true, optional: false, required: false
  private _mlApplicationPackageArguments = new DatascienceMlApplicationImplementationMlApplicationPackageArgumentsList(this, "ml_application_package_arguments", false);
  public get mlApplicationPackageArguments() {
    return this._mlApplicationPackageArguments;
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

  // opc_ml_app_package_args - computed: false, optional: true, required: false
  private _opcMlAppPackageArgs?: { [key: string]: string }; 
  public get opcMlAppPackageArgs() {
    return this.getStringMapAttribute('opc_ml_app_package_args');
  }
  public set opcMlAppPackageArgs(value: { [key: string]: string }) {
    this._opcMlAppPackageArgs = value;
  }
  public resetOpcMlAppPackageArgs() {
    this._opcMlAppPackageArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcMlAppPackageArgsInput() {
    return this._opcMlAppPackageArgs;
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
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

  // logging - computed: false, optional: true, required: false
  private _logging = new DatascienceMlApplicationImplementationLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DatascienceMlApplicationImplementationLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatascienceMlApplicationImplementationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatascienceMlApplicationImplementationTimeouts) {
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
      allowed_migration_destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedMigrationDestinations),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      ml_application_id: cdktf.stringToTerraform(this._mlApplicationId),
      ml_application_package: cdktf.hashMapper(cdktf.stringToTerraform)(this._mlApplicationPackage),
      name: cdktf.stringToTerraform(this._name),
      opc_ml_app_package_args: cdktf.hashMapper(cdktf.stringToTerraform)(this._opcMlAppPackageArgs),
      logging: datascienceMlApplicationImplementationLoggingToTerraform(this._logging.internalValue),
      timeouts: datascienceMlApplicationImplementationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_migration_destinations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedMigrationDestinations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      ml_application_id: {
        value: cdktf.stringToHclTerraform(this._mlApplicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ml_application_package: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._mlApplicationPackage),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opc_ml_app_package_args: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._opcMlAppPackageArgs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      logging: {
        value: datascienceMlApplicationImplementationLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceMlApplicationImplementationLoggingList",
      },
      timeouts: {
        value: datascienceMlApplicationImplementationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatascienceMlApplicationImplementationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
