// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProcessGroupDetectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#enabled ProcessGroupDetection#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#id ProcessGroupDetection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#insert_after ProcessGroupDetection#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * group_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#group_extraction ProcessGroupDetection#group_extraction}
  */
  readonly groupExtraction: ProcessGroupDetectionGroupExtraction;
  /**
  * instance_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#instance_extraction ProcessGroupDetection#instance_extraction}
  */
  readonly instanceExtraction?: ProcessGroupDetectionInstanceExtraction;
  /**
  * process_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#process_detection ProcessGroupDetection#process_detection}
  */
  readonly processDetection: ProcessGroupDetectionProcessDetection;
}
export interface ProcessGroupDetectionGroupExtractionDelimiter {
  /**
  * Delimit from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#from ProcessGroupDetection#from}
  */
  readonly from?: string;
  /**
  * (e.g. versions, hex, dates, and build numbers)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#remove_ids ProcessGroupDetection#remove_ids}
  */
  readonly removeIds: boolean | cdktf.IResolvable;
  /**
  * Delimit to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#to ProcessGroupDetection#to}
  */
  readonly to?: string;
}

export function processGroupDetectionGroupExtractionDelimiterToTerraform(struct?: ProcessGroupDetectionGroupExtractionDelimiterOutputReference | ProcessGroupDetectionGroupExtractionDelimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    remove_ids: cdktf.booleanToTerraform(struct!.removeIds),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function processGroupDetectionGroupExtractionDelimiterToHclTerraform(struct?: ProcessGroupDetectionGroupExtractionDelimiterOutputReference | ProcessGroupDetectionGroupExtractionDelimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_ids: {
      value: cdktf.booleanToHclTerraform(struct!.removeIds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessGroupDetectionGroupExtractionDelimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessGroupDetectionGroupExtractionDelimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._removeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeIds = this._removeIds;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessGroupDetectionGroupExtractionDelimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._removeIds = undefined;
      this._to = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._removeIds = value.removeIds;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // remove_ids - computed: false, optional: false, required: true
  private _removeIds?: boolean | cdktf.IResolvable; 
  public get removeIds() {
    return this.getBooleanAttribute('remove_ids');
  }
  public set removeIds(value: boolean | cdktf.IResolvable) {
    this._removeIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get removeIdsInput() {
    return this._removeIds;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}
export interface ProcessGroupDetectionGroupExtraction {
  /**
  * Possible values: `DOTNET_COMMAND`, `DOTNET_COMMAND_PATH`, `ASP_NET_CORE_APPLICATION_PATH`, `AWS_ECR_ACCOUNT_ID`, `AWS_ECR_REGION`, `AWS_ECS_CLUSTER`, `AWS_ECS_CONTAINERNAME`, `AWS_ECS_FAMILY`, `AWS_ECS_REVISION`, `AWS_LAMBDA_FUNCTION_NAME`, `AWS_REGION`, `APACHE_SPARK_MASTER_IP_ADDRESS`, `APACHE_CONFIG_PATH`, `CATALINA_BASE`, `CATALINA_HOME`, `CLOUD_FOUNDRY_APP_NAME`, `CLOUD_FOUNDRY_APPLICATION_ID`, `CLOUD_FOUNDRY_INSTANCE_INDEX`, `CLOUD_FOUNDRY_SPACE_NAME`, `CLOUD_FOUNDRY_SPACE_ID`, `COLDFUSION_JVM_CONFIG_FILE`, `SERVICE_NAME`, `COMMAND_LINE_ARGS`, `CONTAINER_ID`, `CONTAINER_IMAGE_VERSION`, `CONTAINER_NAME`, `DECLARATIVE_ID`, `CONTAINER_IMAGE_NAME`, `RUXIT_CLUSTER_ID`, `RUXIT_NODE_ID`, `EXE_NAME`, `EXE_PATH`, `ELASTIC_SEARCH_CLUSTER_NAME`, `ELASTIC_SEARCH_NODE_NAME`, `EQUINOX_CONFIG_PATH`, `GLASSFISH_DOMAIN_NAME`, `GLASSFISH_INSTANCE_NAME`, `PG_ID_CALC_INPUT_KEY_LINKAGE`, `GAE_INSTANCE`, `GAE_SERVICE`, `GOOGLE_CLOUD_PROJECT`, `HYBRIS_BIN_DIR`, `HYBRIS_CONFIG_DIR`, `HYBRIS_DATA_DIR`, `IBM_CICS_REGION`, `IBM_CICS_IMS_APPLID`, `IBM_CICS_IMS_JOBNAME`, `IBM_CTG_NAME`, `IBM_IMS_CONNECT`, `IBM_IMS_CONTROL`, `IBM_IMS_MPR`, `IBM_IMS_SOAP_GW_NAME`, `IIB_BROKER_NAME`, `IIB_EXECUTION_GROUP_NAME`, `IIS_APP_POOL`, `IIS_ROLE_NAME`, `JBOSS_HOME`, `JBOSS_MODE`, `JBOSS_SERVER_NAME`, `JAVA_JAR_FILE`, `JAVA_JAR_PATH`, `JAVA_MAIN_CLASS`, `KUBERNETES_BASEPODNAME`, `KUBERNETES_CONTAINERNAME`, `KUBERNETES_FULLPODNAME`, `KUBERNETES_NAMESPACE`, `KUBERNETES_PODUID`, `MSSQL_INSTANCE_NAME`, `NODEJS_APP_NAME`, `NODEJS_APP_BASE_DIR`, `NODEJS_SCRIPT_NAME`, `ORACLE_SID`, `PHP_CLI_SCRIPT_PATH`, `PHP_CLI_WORKING_DIR`, `SOFTWAREAG_INSTALL_ROOT`, `SOFTWAREAG_PRODUCTPROPNAME`, `SPRINGBOOT_APP_NAME`, `SPRINGBOOT_PROFILE_NAME`, `SPRINGBOOT_STARTUP_CLASS`, `TIBCO_BUSINESSWORKS_CE_APP_NAME`, `TIBCO_BUSINESSWORKS_CE_VERSION`, `TIBCO_BUSINESSWORKS_APP_NODE_NAME`, `TIBCO_BUSINESSWORKS_APP_SPACE_NAME`, `TIBCO_BUSINESSWORKS_DOMAIN_NAME`, `TIPCO_BUSINESSWORKS_PROPERTY_FILE`, `TIPCO_BUSINESSWORKS_PROPERTY_FILE_PATH`, `TIBCO_BUSINESSWORKS_HOME`, `VARNISH_INSTANCE_NAME`, `WEBLOGIC_NAME`, `WEBLOGIC_CLUSTER_NAME`, `WEBLOGIC_DOMAIN_NAME`, `WEBLOGIC_HOME`, `WEBSPHERE_LIBERTY_SERVER_NAME`, `WEBSPHERE_CELL_NAME`, `WEBSPHERE_CLUSTER_NAME`, `WEBSPHERE_NODE_NAME`, `WEBSPHERE_SERVER_NAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#property ProcessGroupDetection#property}
  */
  readonly property: string;
  /**
  * If this option is selected, the default Dynatrace behavior is disabled for these detected processes. Only this rule is used to separate the process group.
  * 
  * If this option is not selected, this rule contributes to the default Dynatrace process group detection. 
  * 
  * [See our help page for examples.](https://dt-url.net/1722wrz)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#standalone_rule ProcessGroupDetection#standalone_rule}
  */
  readonly standaloneRule?: boolean | cdktf.IResolvable;
  /**
  * delimiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#delimiter ProcessGroupDetection#delimiter}
  */
  readonly delimiter: ProcessGroupDetectionGroupExtractionDelimiter;
}

export function processGroupDetectionGroupExtractionToTerraform(struct?: ProcessGroupDetectionGroupExtractionOutputReference | ProcessGroupDetectionGroupExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property: cdktf.stringToTerraform(struct!.property),
    standalone_rule: cdktf.booleanToTerraform(struct!.standaloneRule),
    delimiter: processGroupDetectionGroupExtractionDelimiterToTerraform(struct!.delimiter),
  }
}


export function processGroupDetectionGroupExtractionToHclTerraform(struct?: ProcessGroupDetectionGroupExtractionOutputReference | ProcessGroupDetectionGroupExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standalone_rule: {
      value: cdktf.booleanToHclTerraform(struct!.standaloneRule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delimiter: {
      value: processGroupDetectionGroupExtractionDelimiterToHclTerraform(struct!.delimiter),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessGroupDetectionGroupExtractionDelimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessGroupDetectionGroupExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessGroupDetectionGroupExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._standaloneRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.standaloneRule = this._standaloneRule;
    }
    if (this._delimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessGroupDetectionGroupExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._property = undefined;
      this._standaloneRule = undefined;
      this._delimiter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._property = value.property;
      this._standaloneRule = value.standaloneRule;
      this._delimiter.internalValue = value.delimiter;
    }
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // standalone_rule - computed: false, optional: true, required: false
  private _standaloneRule?: boolean | cdktf.IResolvable; 
  public get standaloneRule() {
    return this.getBooleanAttribute('standalone_rule');
  }
  public set standaloneRule(value: boolean | cdktf.IResolvable) {
    this._standaloneRule = value;
  }
  public resetStandaloneRule() {
    this._standaloneRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneRuleInput() {
    return this._standaloneRule;
  }

  // delimiter - computed: false, optional: false, required: true
  private _delimiter = new ProcessGroupDetectionGroupExtractionDelimiterOutputReference(this, "delimiter");
  public get delimiter() {
    return this._delimiter;
  }
  public putDelimiter(value: ProcessGroupDetectionGroupExtractionDelimiter) {
    this._delimiter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter.internalValue;
  }
}
export interface ProcessGroupDetectionInstanceExtractionDelimiter {
  /**
  * Delimit from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#from ProcessGroupDetection#from}
  */
  readonly from?: string;
  /**
  * (e.g. versions, hex, dates, and build numbers)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#remove_ids ProcessGroupDetection#remove_ids}
  */
  readonly removeIds: boolean | cdktf.IResolvable;
  /**
  * Delimit to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#to ProcessGroupDetection#to}
  */
  readonly to?: string;
}

export function processGroupDetectionInstanceExtractionDelimiterToTerraform(struct?: ProcessGroupDetectionInstanceExtractionDelimiterOutputReference | ProcessGroupDetectionInstanceExtractionDelimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    remove_ids: cdktf.booleanToTerraform(struct!.removeIds),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function processGroupDetectionInstanceExtractionDelimiterToHclTerraform(struct?: ProcessGroupDetectionInstanceExtractionDelimiterOutputReference | ProcessGroupDetectionInstanceExtractionDelimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_ids: {
      value: cdktf.booleanToHclTerraform(struct!.removeIds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessGroupDetectionInstanceExtractionDelimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessGroupDetectionInstanceExtractionDelimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._removeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeIds = this._removeIds;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessGroupDetectionInstanceExtractionDelimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._removeIds = undefined;
      this._to = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._removeIds = value.removeIds;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // remove_ids - computed: false, optional: false, required: true
  private _removeIds?: boolean | cdktf.IResolvable; 
  public get removeIds() {
    return this.getBooleanAttribute('remove_ids');
  }
  public set removeIds(value: boolean | cdktf.IResolvable) {
    this._removeIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get removeIdsInput() {
    return this._removeIds;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}
export interface ProcessGroupDetectionInstanceExtraction {
  /**
  * Possible values: `DOTNET_COMMAND`, `DOTNET_COMMAND_PATH`, `ASP_NET_CORE_APPLICATION_PATH`, `AWS_ECR_ACCOUNT_ID`, `AWS_ECR_REGION`, `AWS_ECS_CLUSTER`, `AWS_ECS_CONTAINERNAME`, `AWS_ECS_FAMILY`, `AWS_ECS_REVISION`, `AWS_LAMBDA_FUNCTION_NAME`, `AWS_REGION`, `APACHE_SPARK_MASTER_IP_ADDRESS`, `APACHE_CONFIG_PATH`, `CATALINA_BASE`, `CATALINA_HOME`, `CLOUD_FOUNDRY_APP_NAME`, `CLOUD_FOUNDRY_APPLICATION_ID`, `CLOUD_FOUNDRY_INSTANCE_INDEX`, `CLOUD_FOUNDRY_SPACE_NAME`, `CLOUD_FOUNDRY_SPACE_ID`, `COLDFUSION_JVM_CONFIG_FILE`, `SERVICE_NAME`, `COMMAND_LINE_ARGS`, `CONTAINER_ID`, `CONTAINER_IMAGE_VERSION`, `CONTAINER_NAME`, `DECLARATIVE_ID`, `CONTAINER_IMAGE_NAME`, `RUXIT_CLUSTER_ID`, `RUXIT_NODE_ID`, `EXE_NAME`, `EXE_PATH`, `ELASTIC_SEARCH_CLUSTER_NAME`, `ELASTIC_SEARCH_NODE_NAME`, `EQUINOX_CONFIG_PATH`, `GLASSFISH_DOMAIN_NAME`, `GLASSFISH_INSTANCE_NAME`, `PG_ID_CALC_INPUT_KEY_LINKAGE`, `GAE_INSTANCE`, `GAE_SERVICE`, `GOOGLE_CLOUD_PROJECT`, `HYBRIS_BIN_DIR`, `HYBRIS_CONFIG_DIR`, `HYBRIS_DATA_DIR`, `IBM_CICS_REGION`, `IBM_CICS_IMS_APPLID`, `IBM_CICS_IMS_JOBNAME`, `IBM_CTG_NAME`, `IBM_IMS_CONNECT`, `IBM_IMS_CONTROL`, `IBM_IMS_MPR`, `IBM_IMS_SOAP_GW_NAME`, `IIB_BROKER_NAME`, `IIB_EXECUTION_GROUP_NAME`, `IIS_APP_POOL`, `IIS_ROLE_NAME`, `JBOSS_HOME`, `JBOSS_MODE`, `JBOSS_SERVER_NAME`, `JAVA_JAR_FILE`, `JAVA_JAR_PATH`, `JAVA_MAIN_CLASS`, `KUBERNETES_BASEPODNAME`, `KUBERNETES_CONTAINERNAME`, `KUBERNETES_FULLPODNAME`, `KUBERNETES_NAMESPACE`, `KUBERNETES_PODUID`, `MSSQL_INSTANCE_NAME`, `NODEJS_APP_NAME`, `NODEJS_APP_BASE_DIR`, `NODEJS_SCRIPT_NAME`, `ORACLE_SID`, `PHP_CLI_SCRIPT_PATH`, `PHP_CLI_WORKING_DIR`, `SOFTWAREAG_INSTALL_ROOT`, `SOFTWAREAG_PRODUCTPROPNAME`, `SPRINGBOOT_APP_NAME`, `SPRINGBOOT_PROFILE_NAME`, `SPRINGBOOT_STARTUP_CLASS`, `TIBCO_BUSINESSWORKS_CE_APP_NAME`, `TIBCO_BUSINESSWORKS_CE_VERSION`, `TIBCO_BUSINESSWORKS_APP_NODE_NAME`, `TIBCO_BUSINESSWORKS_APP_SPACE_NAME`, `TIBCO_BUSINESSWORKS_DOMAIN_NAME`, `TIPCO_BUSINESSWORKS_PROPERTY_FILE`, `TIPCO_BUSINESSWORKS_PROPERTY_FILE_PATH`, `TIBCO_BUSINESSWORKS_HOME`, `VARNISH_INSTANCE_NAME`, `WEBLOGIC_NAME`, `WEBLOGIC_CLUSTER_NAME`, `WEBLOGIC_DOMAIN_NAME`, `WEBLOGIC_HOME`, `WEBSPHERE_LIBERTY_SERVER_NAME`, `WEBSPHERE_CELL_NAME`, `WEBSPHERE_CLUSTER_NAME`, `WEBSPHERE_NODE_NAME`, `WEBSPHERE_SERVER_NAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#property ProcessGroupDetection#property}
  */
  readonly property?: string;
  /**
  * delimiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#delimiter ProcessGroupDetection#delimiter}
  */
  readonly delimiter?: ProcessGroupDetectionInstanceExtractionDelimiter;
}

export function processGroupDetectionInstanceExtractionToTerraform(struct?: ProcessGroupDetectionInstanceExtractionOutputReference | ProcessGroupDetectionInstanceExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property: cdktf.stringToTerraform(struct!.property),
    delimiter: processGroupDetectionInstanceExtractionDelimiterToTerraform(struct!.delimiter),
  }
}


export function processGroupDetectionInstanceExtractionToHclTerraform(struct?: ProcessGroupDetectionInstanceExtractionOutputReference | ProcessGroupDetectionInstanceExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delimiter: {
      value: processGroupDetectionInstanceExtractionDelimiterToHclTerraform(struct!.delimiter),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessGroupDetectionInstanceExtractionDelimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessGroupDetectionInstanceExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessGroupDetectionInstanceExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._delimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessGroupDetectionInstanceExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._property = undefined;
      this._delimiter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._property = value.property;
      this._delimiter.internalValue = value.delimiter;
    }
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter = new ProcessGroupDetectionInstanceExtractionDelimiterOutputReference(this, "delimiter");
  public get delimiter() {
    return this._delimiter;
  }
  public putDelimiter(value: ProcessGroupDetectionInstanceExtractionDelimiter) {
    this._delimiter.internalValue = value;
  }
  public resetDelimiter() {
    this._delimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter.internalValue;
  }
}
export interface ProcessGroupDetectionProcessDetection {
  /**
  * The substring to be contained in the value `property` refers to. Case Sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#contained_string ProcessGroupDetection#contained_string}
  */
  readonly containedString: string;
  /**
  * Possible values: `DOTNET_COMMAND`, `DOTNET_COMMAND_PATH`, `ASP_NET_CORE_APPLICATION_PATH`, `AWS_ECR_ACCOUNT_ID`, `AWS_ECR_REGION`, `AWS_ECS_CLUSTER`, `AWS_ECS_CONTAINERNAME`, `AWS_ECS_FAMILY`, `AWS_ECS_REVISION`, `AWS_LAMBDA_FUNCTION_NAME`, `AWS_REGION`, `APACHE_SPARK_MASTER_IP_ADDRESS`, `APACHE_CONFIG_PATH`, `CATALINA_BASE`, `CATALINA_HOME`, `CLOUD_FOUNDRY_APP_NAME`, `CLOUD_FOUNDRY_APPLICATION_ID`, `CLOUD_FOUNDRY_INSTANCE_INDEX`, `CLOUD_FOUNDRY_SPACE_NAME`, `CLOUD_FOUNDRY_SPACE_ID`, `COLDFUSION_JVM_CONFIG_FILE`, `SERVICE_NAME`, `COMMAND_LINE_ARGS`, `CONTAINER_ID`, `CONTAINER_IMAGE_VERSION`, `CONTAINER_NAME`, `DECLARATIVE_ID`, `CONTAINER_IMAGE_NAME`, `RUXIT_CLUSTER_ID`, `RUXIT_NODE_ID`, `EXE_NAME`, `EXE_PATH`, `ELASTIC_SEARCH_CLUSTER_NAME`, `ELASTIC_SEARCH_NODE_NAME`, `EQUINOX_CONFIG_PATH`, `GLASSFISH_DOMAIN_NAME`, `GLASSFISH_INSTANCE_NAME`, `PG_ID_CALC_INPUT_KEY_LINKAGE`, `GAE_INSTANCE`, `GAE_SERVICE`, `GOOGLE_CLOUD_PROJECT`, `HYBRIS_BIN_DIR`, `HYBRIS_CONFIG_DIR`, `HYBRIS_DATA_DIR`, `IBM_CICS_REGION`, `IBM_CICS_IMS_APPLID`, `IBM_CICS_IMS_JOBNAME`, `IBM_CTG_NAME`, `IBM_IMS_CONNECT`, `IBM_IMS_CONTROL`, `IBM_IMS_MPR`, `IBM_IMS_SOAP_GW_NAME`, `IIB_BROKER_NAME`, `IIB_EXECUTION_GROUP_NAME`, `IIS_APP_POOL`, `IIS_ROLE_NAME`, `JBOSS_HOME`, `JBOSS_MODE`, `JBOSS_SERVER_NAME`, `JAVA_JAR_FILE`, `JAVA_JAR_PATH`, `JAVA_MAIN_CLASS`, `KUBERNETES_BASEPODNAME`, `KUBERNETES_CONTAINERNAME`, `KUBERNETES_FULLPODNAME`, `KUBERNETES_NAMESPACE`, `KUBERNETES_PODUID`, `MSSQL_INSTANCE_NAME`, `NODEJS_APP_NAME`, `NODEJS_APP_BASE_DIR`, `NODEJS_SCRIPT_NAME`, `ORACLE_SID`, `PHP_CLI_SCRIPT_PATH`, `PHP_CLI_WORKING_DIR`, `SOFTWAREAG_INSTALL_ROOT`, `SOFTWAREAG_PRODUCTPROPNAME`, `SPRINGBOOT_APP_NAME`, `SPRINGBOOT_PROFILE_NAME`, `SPRINGBOOT_STARTUP_CLASS`, `TIBCO_BUSINESSWORKS_CE_APP_NAME`, `TIBCO_BUSINESSWORKS_CE_VERSION`, `TIBCO_BUSINESSWORKS_APP_NODE_NAME`, `TIBCO_BUSINESSWORKS_APP_SPACE_NAME`, `TIBCO_BUSINESSWORKS_DOMAIN_NAME`, `TIPCO_BUSINESSWORKS_PROPERTY_FILE`, `TIPCO_BUSINESSWORKS_PROPERTY_FILE_PATH`, `TIBCO_BUSINESSWORKS_HOME`, `VARNISH_INSTANCE_NAME`, `WEBLOGIC_NAME`, `WEBLOGIC_CLUSTER_NAME`, `WEBLOGIC_DOMAIN_NAME`, `WEBLOGIC_HOME`, `WEBSPHERE_LIBERTY_SERVER_NAME`, `WEBSPHERE_CELL_NAME`, `WEBSPHERE_CLUSTER_NAME`, `WEBSPHERE_NODE_NAME`, `WEBSPHERE_SERVER_NAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#property ProcessGroupDetection#property}
  */
  readonly property: string;
  /**
  * Restrict this rule to specific process types. Note: Not all types can be detected at startup. Possible values: `PROCESS_TYPE_APACHE_HTTPD`, `PROCESS_TYPE_GLASSFISH`, `PROCESS_TYPE_GO`, `PROCESS_TYPE_IIS_APP_POOL`, `PROCESS_TYPE_JBOSS`, `PROCESS_TYPE_JAVA`, `PROCESS_TYPE_NGINX`, `PROCESS_TYPE_NODE_JS`, `PROCESS_TYPE_PHP`, `PROCESS_TYPE_TOMCAT`, `PROCESS_TYPE_WEBLOGIC`, `PROCESS_TYPE_WEBSPHERE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#restrict_to_process_type ProcessGroupDetection#restrict_to_process_type}
  */
  readonly restrictToProcessType?: string;
}

export function processGroupDetectionProcessDetectionToTerraform(struct?: ProcessGroupDetectionProcessDetectionOutputReference | ProcessGroupDetectionProcessDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contained_string: cdktf.stringToTerraform(struct!.containedString),
    property: cdktf.stringToTerraform(struct!.property),
    restrict_to_process_type: cdktf.stringToTerraform(struct!.restrictToProcessType),
  }
}


export function processGroupDetectionProcessDetectionToHclTerraform(struct?: ProcessGroupDetectionProcessDetectionOutputReference | ProcessGroupDetectionProcessDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contained_string: {
      value: cdktf.stringToHclTerraform(struct!.containedString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restrict_to_process_type: {
      value: cdktf.stringToHclTerraform(struct!.restrictToProcessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessGroupDetectionProcessDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessGroupDetectionProcessDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containedString !== undefined) {
      hasAnyValues = true;
      internalValueResult.containedString = this._containedString;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._restrictToProcessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictToProcessType = this._restrictToProcessType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessGroupDetectionProcessDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containedString = undefined;
      this._property = undefined;
      this._restrictToProcessType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containedString = value.containedString;
      this._property = value.property;
      this._restrictToProcessType = value.restrictToProcessType;
    }
  }

  // contained_string - computed: false, optional: false, required: true
  private _containedString?: string; 
  public get containedString() {
    return this.getStringAttribute('contained_string');
  }
  public set containedString(value: string) {
    this._containedString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containedStringInput() {
    return this._containedString;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // restrict_to_process_type - computed: false, optional: true, required: false
  private _restrictToProcessType?: string; 
  public get restrictToProcessType() {
    return this.getStringAttribute('restrict_to_process_type');
  }
  public set restrictToProcessType(value: string) {
    this._restrictToProcessType = value;
  }
  public resetRestrictToProcessType() {
    this._restrictToProcessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictToProcessTypeInput() {
    return this._restrictToProcessType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection dynatrace_process_group_detection}
*/
export class ProcessGroupDetection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_process_group_detection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProcessGroupDetection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProcessGroupDetection to import
  * @param importFromId The id of the existing ProcessGroupDetection that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProcessGroupDetection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_process_group_detection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_group_detection dynatrace_process_group_detection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProcessGroupDetectionConfig
  */
  public constructor(scope: Construct, id: string, config: ProcessGroupDetectionConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_process_group_detection',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._groupExtraction.internalValue = config.groupExtraction;
    this._instanceExtraction.internalValue = config.instanceExtraction;
    this._processDetection.internalValue = config.processDetection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
  }

  // group_extraction - computed: false, optional: false, required: true
  private _groupExtraction = new ProcessGroupDetectionGroupExtractionOutputReference(this, "group_extraction");
  public get groupExtraction() {
    return this._groupExtraction;
  }
  public putGroupExtraction(value: ProcessGroupDetectionGroupExtraction) {
    this._groupExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupExtractionInput() {
    return this._groupExtraction.internalValue;
  }

  // instance_extraction - computed: false, optional: true, required: false
  private _instanceExtraction = new ProcessGroupDetectionInstanceExtractionOutputReference(this, "instance_extraction");
  public get instanceExtraction() {
    return this._instanceExtraction;
  }
  public putInstanceExtraction(value: ProcessGroupDetectionInstanceExtraction) {
    this._instanceExtraction.internalValue = value;
  }
  public resetInstanceExtraction() {
    this._instanceExtraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceExtractionInput() {
    return this._instanceExtraction.internalValue;
  }

  // process_detection - computed: false, optional: false, required: true
  private _processDetection = new ProcessGroupDetectionProcessDetectionOutputReference(this, "process_detection");
  public get processDetection() {
    return this._processDetection;
  }
  public putProcessDetection(value: ProcessGroupDetectionProcessDetection) {
    this._processDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processDetectionInput() {
    return this._processDetection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      group_extraction: processGroupDetectionGroupExtractionToTerraform(this._groupExtraction.internalValue),
      instance_extraction: processGroupDetectionInstanceExtractionToTerraform(this._instanceExtraction.internalValue),
      process_detection: processGroupDetectionProcessDetectionToTerraform(this._processDetection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_extraction: {
        value: processGroupDetectionGroupExtractionToHclTerraform(this._groupExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProcessGroupDetectionGroupExtractionList",
      },
      instance_extraction: {
        value: processGroupDetectionInstanceExtractionToHclTerraform(this._instanceExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProcessGroupDetectionInstanceExtractionList",
      },
      process_detection: {
        value: processGroupDetectionProcessDetectionToHclTerraform(this._processDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProcessGroupDetectionProcessDetectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
