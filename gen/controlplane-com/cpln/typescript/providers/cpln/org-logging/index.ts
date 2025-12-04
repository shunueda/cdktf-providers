// https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * cloud_watch_logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#cloud_watch_logging OrgLogging#cloud_watch_logging}
  */
  readonly cloudWatchLogging?: OrgLoggingCloudWatchLogging[] | cdktf.IResolvable;
  /**
  * coralogix_logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#coralogix_logging OrgLogging#coralogix_logging}
  */
  readonly coralogixLogging?: OrgLoggingCoralogixLogging[] | cdktf.IResolvable;
  /**
  * datadog_logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#datadog_logging OrgLogging#datadog_logging}
  */
  readonly datadogLogging?: OrgLoggingDatadogLogging[] | cdktf.IResolvable;
  /**
  * elastic_logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#elastic_logging OrgLogging#elastic_logging}
  */
  readonly elasticLogging?: OrgLoggingElasticLogging[] | cdktf.IResolvable;
  /**
  * fluentd_logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#fluentd_logging OrgLogging#fluentd_logging}
  */
  readonly fluentdLogging?: OrgLoggingFluentdLogging[] | cdktf.IResolvable;
  /**
  * logzio_logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#logzio_logging OrgLogging#logzio_logging}
  */
  readonly logzioLogging?: OrgLoggingLogzioLogging[] | cdktf.IResolvable;
  /**
  * s3_logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#s3_logging OrgLogging#s3_logging}
  */
  readonly s3Logging?: OrgLoggingS3Logging[] | cdktf.IResolvable;
  /**
  * stackdriver_logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#stackdriver_logging OrgLogging#stackdriver_logging}
  */
  readonly stackdriverLogging?: OrgLoggingStackdriverLogging[] | cdktf.IResolvable;
  /**
  * syslog_logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#syslog_logging OrgLogging#syslog_logging}
  */
  readonly syslogLogging?: OrgLoggingSyslogLogging[] | cdktf.IResolvable;
}
export interface OrgLoggingCloudWatchLogging {
  /**
  * Full Link to a secret of type `opaque`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#credentials OrgLogging#credentials}
  */
  readonly credentials: string;
  /**
  * Enable custom data extraction from log entries for enhanced querying and analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#extract_fields OrgLogging#extract_fields}
  */
  readonly extractFields?: { [key: string]: string };
  /**
  * A container for log streams with common settings like retention. Used to categorize logs by application or service type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#group_name OrgLogging#group_name}
  */
  readonly groupName: string;
  /**
  * Valid AWS region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#region OrgLogging#region}
  */
  readonly region: string;
  /**
  * Length, in days, for how log data is kept before it is automatically deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#retention_days OrgLogging#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * A sequence of log events from the same source within a log group. Typically represents individual instances of services or applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#stream_name OrgLogging#stream_name}
  */
  readonly streamName: string;
}

export function orgLoggingCloudWatchLoggingToTerraform(struct?: OrgLoggingCloudWatchLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
    extract_fields: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extractFields),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    region: cdktf.stringToTerraform(struct!.region),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}


export function orgLoggingCloudWatchLoggingToHclTerraform(struct?: OrgLoggingCloudWatchLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extract_fields: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extractFields),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_name: {
      value: cdktf.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgLoggingCloudWatchLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgLoggingCloudWatchLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._extractFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractFields = this._extractFields;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgLoggingCloudWatchLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials = undefined;
      this._extractFields = undefined;
      this._groupName = undefined;
      this._region = undefined;
      this._retentionDays = undefined;
      this._streamName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials = value.credentials;
      this._extractFields = value.extractFields;
      this._groupName = value.groupName;
      this._region = value.region;
      this._retentionDays = value.retentionDays;
      this._streamName = value.streamName;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // extract_fields - computed: false, optional: true, required: false
  private _extractFields?: { [key: string]: string }; 
  public get extractFields() {
    return this.getStringMapAttribute('extract_fields');
  }
  public set extractFields(value: { [key: string]: string }) {
    this._extractFields = value;
  }
  public resetExtractFields() {
    this._extractFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractFieldsInput() {
    return this._extractFields;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}

export class OrgLoggingCloudWatchLoggingList extends cdktf.ComplexList {
  public internalValue? : OrgLoggingCloudWatchLogging[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrgLoggingCloudWatchLoggingOutputReference {
    return new OrgLoggingCloudWatchLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgLoggingCoralogixLogging {
  /**
  * App name to be displayed in Coralogix dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#app OrgLogging#app}
  */
  readonly app?: string;
  /**
  * Coralogix cluster URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#cluster OrgLogging#cluster}
  */
  readonly cluster: string;
  /**
  * Full link to referenced Opaque Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#credentials OrgLogging#credentials}
  */
  readonly credentials: string;
  /**
  * Subsystem name to be displayed in Coralogix dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#subsystem OrgLogging#subsystem}
  */
  readonly subsystem?: string;
}

export function orgLoggingCoralogixLoggingToTerraform(struct?: OrgLoggingCoralogixLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app: cdktf.stringToTerraform(struct!.app),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    subsystem: cdktf.stringToTerraform(struct!.subsystem),
  }
}


export function orgLoggingCoralogixLoggingToHclTerraform(struct?: OrgLoggingCoralogixLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app: {
      value: cdktf.stringToHclTerraform(struct!.app),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subsystem: {
      value: cdktf.stringToHclTerraform(struct!.subsystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgLoggingCoralogixLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgLoggingCoralogixLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._app !== undefined) {
      hasAnyValues = true;
      internalValueResult.app = this._app;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._subsystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsystem = this._subsystem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgLoggingCoralogixLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._app = undefined;
      this._cluster = undefined;
      this._credentials = undefined;
      this._subsystem = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._app = value.app;
      this._cluster = value.cluster;
      this._credentials = value.credentials;
      this._subsystem = value.subsystem;
    }
  }

  // app - computed: false, optional: true, required: false
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  public resetApp() {
    this._app = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // subsystem - computed: false, optional: true, required: false
  private _subsystem?: string; 
  public get subsystem() {
    return this.getStringAttribute('subsystem');
  }
  public set subsystem(value: string) {
    this._subsystem = value;
  }
  public resetSubsystem() {
    this._subsystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsystemInput() {
    return this._subsystem;
  }
}

export class OrgLoggingCoralogixLoggingList extends cdktf.ComplexList {
  public internalValue? : OrgLoggingCoralogixLogging[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrgLoggingCoralogixLoggingOutputReference {
    return new OrgLoggingCoralogixLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgLoggingDatadogLogging {
  /**
  * Full link to referenced Opaque Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#credentials OrgLogging#credentials}
  */
  readonly credentials: string;
  /**
  * Datadog host URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#host OrgLogging#host}
  */
  readonly host: string;
}

export function orgLoggingDatadogLoggingToTerraform(struct?: OrgLoggingDatadogLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
    host: cdktf.stringToTerraform(struct!.host),
  }
}


export function orgLoggingDatadogLoggingToHclTerraform(struct?: OrgLoggingDatadogLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgLoggingDatadogLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgLoggingDatadogLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgLoggingDatadogLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials = undefined;
      this._host = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials = value.credentials;
      this._host = value.host;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }
}

export class OrgLoggingDatadogLoggingList extends cdktf.ComplexList {
  public internalValue? : OrgLoggingDatadogLogging[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrgLoggingDatadogLoggingOutputReference {
    return new OrgLoggingDatadogLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgLoggingElasticLoggingAws {
  /**
  * Full Link to a secret of type `aws`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#credentials OrgLogging#credentials}
  */
  readonly credentials: string;
  /**
  * A valid AWS ElasticSearch hostname (must end with es.amazonaws.com).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#host OrgLogging#host}
  */
  readonly host: string;
  /**
  * Logging Index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#index OrgLogging#index}
  */
  readonly index: string;
  /**
  * Port. Default: 443
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#port OrgLogging#port}
  */
  readonly port: number;
  /**
  * Valid AWS region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#region OrgLogging#region}
  */
  readonly region: string;
  /**
  * Logging Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#type OrgLogging#type}
  */
  readonly type: string;
}

export function orgLoggingElasticLoggingAwsToTerraform(struct?: OrgLoggingElasticLoggingAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
    host: cdktf.stringToTerraform(struct!.host),
    index: cdktf.stringToTerraform(struct!.index),
    port: cdktf.numberToTerraform(struct!.port),
    region: cdktf.stringToTerraform(struct!.region),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function orgLoggingElasticLoggingAwsToHclTerraform(struct?: OrgLoggingElasticLoggingAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgLoggingElasticLoggingAwsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgLoggingElasticLoggingAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgLoggingElasticLoggingAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials = undefined;
      this._host = undefined;
      this._index = undefined;
      this._port = undefined;
      this._region = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials = value.credentials;
      this._host = value.host;
      this._index = value.index;
      this._port = value.port;
      this._region = value.region;
      this._type = value.type;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OrgLoggingElasticLoggingAwsList extends cdktf.ComplexList {
  public internalValue? : OrgLoggingElasticLoggingAws[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrgLoggingElasticLoggingAwsOutputReference {
    return new OrgLoggingElasticLoggingAwsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgLoggingElasticLoggingElasticCloud {
  /**
  * [Cloud ID](https://www.elastic.co/guide/en/cloud/current/ec-cloud-id.html)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#cloud_id OrgLogging#cloud_id}
  */
  readonly cloudId: string;
  /**
  * Full Link to a secret of type `userpass`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#credentials OrgLogging#credentials}
  */
  readonly credentials: string;
  /**
  * Logging Index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#index OrgLogging#index}
  */
  readonly index: string;
  /**
  * Logging Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#type OrgLogging#type}
  */
  readonly type: string;
}

export function orgLoggingElasticLoggingElasticCloudToTerraform(struct?: OrgLoggingElasticLoggingElasticCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_id: cdktf.stringToTerraform(struct!.cloudId),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    index: cdktf.stringToTerraform(struct!.index),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function orgLoggingElasticLoggingElasticCloudToHclTerraform(struct?: OrgLoggingElasticLoggingElasticCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgLoggingElasticLoggingElasticCloudOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgLoggingElasticLoggingElasticCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudId = this._cloudId;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgLoggingElasticLoggingElasticCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudId = undefined;
      this._credentials = undefined;
      this._index = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudId = value.cloudId;
      this._credentials = value.credentials;
      this._index = value.index;
      this._type = value.type;
    }
  }

  // cloud_id - computed: false, optional: false, required: true
  private _cloudId?: string; 
  public get cloudId() {
    return this.getStringAttribute('cloud_id');
  }
  public set cloudId(value: string) {
    this._cloudId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIdInput() {
    return this._cloudId;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OrgLoggingElasticLoggingElasticCloudList extends cdktf.ComplexList {
  public internalValue? : OrgLoggingElasticLoggingElasticCloud[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrgLoggingElasticLoggingElasticCloudOutputReference {
    return new OrgLoggingElasticLoggingElasticCloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgLoggingElasticLoggingGeneric {
  /**
  * Full Link to a secret of type `userpass`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#credentials OrgLogging#credentials}
  */
  readonly credentials: string;
  /**
  * A valid Elastic Search provider hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#host OrgLogging#host}
  */
  readonly host: string;
  /**
  * Logging Index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#index OrgLogging#index}
  */
  readonly index: string;
  /**
  * Logging path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#path OrgLogging#path}
  */
  readonly path: string;
  /**
  * Port. Default: 443
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#port OrgLogging#port}
  */
  readonly port: number;
  /**
  * Logging Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#type OrgLogging#type}
  */
  readonly type: string;
}

export function orgLoggingElasticLoggingGenericToTerraform(struct?: OrgLoggingElasticLoggingGeneric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
    host: cdktf.stringToTerraform(struct!.host),
    index: cdktf.stringToTerraform(struct!.index),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function orgLoggingElasticLoggingGenericToHclTerraform(struct?: OrgLoggingElasticLoggingGeneric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgLoggingElasticLoggingGenericOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgLoggingElasticLoggingGeneric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgLoggingElasticLoggingGeneric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials = undefined;
      this._host = undefined;
      this._index = undefined;
      this._path = undefined;
      this._port = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials = value.credentials;
      this._host = value.host;
      this._index = value.index;
      this._path = value.path;
      this._port = value.port;
      this._type = value.type;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OrgLoggingElasticLoggingGenericList extends cdktf.ComplexList {
  public internalValue? : OrgLoggingElasticLoggingGeneric[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrgLoggingElasticLoggingGenericOutputReference {
    return new OrgLoggingElasticLoggingGenericOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgLoggingElasticLogging {
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#aws OrgLogging#aws}
  */
  readonly aws?: OrgLoggingElasticLoggingAws[] | cdktf.IResolvable;
  /**
  * elastic_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#elastic_cloud OrgLogging#elastic_cloud}
  */
  readonly elasticCloud?: OrgLoggingElasticLoggingElasticCloud[] | cdktf.IResolvable;
  /**
  * generic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#generic OrgLogging#generic}
  */
  readonly generic?: OrgLoggingElasticLoggingGeneric[] | cdktf.IResolvable;
}

export function orgLoggingElasticLoggingToTerraform(struct?: OrgLoggingElasticLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: cdktf.listMapper(orgLoggingElasticLoggingAwsToTerraform, true)(struct!.aws),
    elastic_cloud: cdktf.listMapper(orgLoggingElasticLoggingElasticCloudToTerraform, true)(struct!.elasticCloud),
    generic: cdktf.listMapper(orgLoggingElasticLoggingGenericToTerraform, true)(struct!.generic),
  }
}


export function orgLoggingElasticLoggingToHclTerraform(struct?: OrgLoggingElasticLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: cdktf.listMapperHcl(orgLoggingElasticLoggingAwsToHclTerraform, true)(struct!.aws),
      isBlock: true,
      type: "list",
      storageClassType: "OrgLoggingElasticLoggingAwsList",
    },
    elastic_cloud: {
      value: cdktf.listMapperHcl(orgLoggingElasticLoggingElasticCloudToHclTerraform, true)(struct!.elasticCloud),
      isBlock: true,
      type: "list",
      storageClassType: "OrgLoggingElasticLoggingElasticCloudList",
    },
    generic: {
      value: cdktf.listMapperHcl(orgLoggingElasticLoggingGenericToHclTerraform, true)(struct!.generic),
      isBlock: true,
      type: "list",
      storageClassType: "OrgLoggingElasticLoggingGenericList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgLoggingElasticLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgLoggingElasticLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._elasticCloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticCloud = this._elasticCloud?.internalValue;
    }
    if (this._generic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generic = this._generic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgLoggingElasticLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
      this._elasticCloud.internalValue = undefined;
      this._generic.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
      this._elasticCloud.internalValue = value.elasticCloud;
      this._generic.internalValue = value.generic;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new OrgLoggingElasticLoggingAwsList(this, "aws", false);
  public get aws() {
    return this._aws;
  }
  public putAws(value: OrgLoggingElasticLoggingAws[] | cdktf.IResolvable) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // elastic_cloud - computed: false, optional: true, required: false
  private _elasticCloud = new OrgLoggingElasticLoggingElasticCloudList(this, "elastic_cloud", false);
  public get elasticCloud() {
    return this._elasticCloud;
  }
  public putElasticCloud(value: OrgLoggingElasticLoggingElasticCloud[] | cdktf.IResolvable) {
    this._elasticCloud.internalValue = value;
  }
  public resetElasticCloud() {
    this._elasticCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticCloudInput() {
    return this._elasticCloud.internalValue;
  }

  // generic - computed: false, optional: true, required: false
  private _generic = new OrgLoggingElasticLoggingGenericList(this, "generic", false);
  public get generic() {
    return this._generic;
  }
  public putGeneric(value: OrgLoggingElasticLoggingGeneric[] | cdktf.IResolvable) {
    this._generic.internalValue = value;
  }
  public resetGeneric() {
    this._generic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericInput() {
    return this._generic.internalValue;
  }
}

export class OrgLoggingElasticLoggingList extends cdktf.ComplexList {
  public internalValue? : OrgLoggingElasticLogging[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrgLoggingElasticLoggingOutputReference {
    return new OrgLoggingElasticLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgLoggingFluentdLogging {
  /**
  * The hostname or IP address of a remote log storage system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#host OrgLogging#host}
  */
  readonly host: string;
  /**
  * Port. Default: 24224
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#port OrgLogging#port}
  */
  readonly port?: number;
}

export function orgLoggingFluentdLoggingToTerraform(struct?: OrgLoggingFluentdLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function orgLoggingFluentdLoggingToHclTerraform(struct?: OrgLoggingFluentdLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgLoggingFluentdLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgLoggingFluentdLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgLoggingFluentdLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class OrgLoggingFluentdLoggingList extends cdktf.ComplexList {
  public internalValue? : OrgLoggingFluentdLogging[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrgLoggingFluentdLoggingOutputReference {
    return new OrgLoggingFluentdLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgLoggingLogzioLogging {
  /**
  * Full link to referenced Opaque Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#credentials OrgLogging#credentials}
  */
  readonly credentials: string;
  /**
  * Logzio listener host URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#listener_host OrgLogging#listener_host}
  */
  readonly listenerHost: string;
}

export function orgLoggingLogzioLoggingToTerraform(struct?: OrgLoggingLogzioLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
    listener_host: cdktf.stringToTerraform(struct!.listenerHost),
  }
}


export function orgLoggingLogzioLoggingToHclTerraform(struct?: OrgLoggingLogzioLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener_host: {
      value: cdktf.stringToHclTerraform(struct!.listenerHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgLoggingLogzioLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgLoggingLogzioLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._listenerHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerHost = this._listenerHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgLoggingLogzioLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials = undefined;
      this._listenerHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials = value.credentials;
      this._listenerHost = value.listenerHost;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // listener_host - computed: false, optional: false, required: true
  private _listenerHost?: string; 
  public get listenerHost() {
    return this.getStringAttribute('listener_host');
  }
  public set listenerHost(value: string) {
    this._listenerHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerHostInput() {
    return this._listenerHost;
  }
}

export class OrgLoggingLogzioLoggingList extends cdktf.ComplexList {
  public internalValue? : OrgLoggingLogzioLogging[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrgLoggingLogzioLoggingOutputReference {
    return new OrgLoggingLogzioLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgLoggingS3Logging {
  /**
  * Name of S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#bucket OrgLogging#bucket}
  */
  readonly bucket: string;
  /**
  * Full link to referenced AWS Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#credentials OrgLogging#credentials}
  */
  readonly credentials: string;
  /**
  * Bucket path prefix. Default: "/".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#prefix OrgLogging#prefix}
  */
  readonly prefix?: string;
  /**
  * AWS region where bucket is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#region OrgLogging#region}
  */
  readonly region: string;
}

export function orgLoggingS3LoggingToTerraform(struct?: OrgLoggingS3Logging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function orgLoggingS3LoggingToHclTerraform(struct?: OrgLoggingS3Logging | cdktf.IResolvable): any {
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
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgLoggingS3LoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgLoggingS3Logging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgLoggingS3Logging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._credentials = undefined;
      this._prefix = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._credentials = value.credentials;
      this._prefix = value.prefix;
      this._region = value.region;
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

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class OrgLoggingS3LoggingList extends cdktf.ComplexList {
  public internalValue? : OrgLoggingS3Logging[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrgLoggingS3LoggingOutputReference {
    return new OrgLoggingS3LoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgLoggingStackdriverLogging {
  /**
  * Full Link to a secret of type `opaque`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#credentials OrgLogging#credentials}
  */
  readonly credentials: string;
  /**
  * A Google Cloud Provider region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#location OrgLogging#location}
  */
  readonly location: string;
}

export function orgLoggingStackdriverLoggingToTerraform(struct?: OrgLoggingStackdriverLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function orgLoggingStackdriverLoggingToHclTerraform(struct?: OrgLoggingStackdriverLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgLoggingStackdriverLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgLoggingStackdriverLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgLoggingStackdriverLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials = value.credentials;
      this._location = value.location;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class OrgLoggingStackdriverLoggingList extends cdktf.ComplexList {
  public internalValue? : OrgLoggingStackdriverLogging[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrgLoggingStackdriverLoggingOutputReference {
    return new OrgLoggingStackdriverLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgLoggingSyslogLogging {
  /**
  * Log Format. Valid values: RFC3164 or RFC5424.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#format OrgLogging#format}
  */
  readonly format?: string;
  /**
  * Hostname of Syslog Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#host OrgLogging#host}
  */
  readonly host: string;
  /**
  * Log Mode. Valid values: TCP, TLS, or UDP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#mode OrgLogging#mode}
  */
  readonly mode?: string;
  /**
  * Port of Syslog Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#port OrgLogging#port}
  */
  readonly port: number;
  /**
  * Severity Level. See documentation for details. Valid values: 0 to 7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#severity OrgLogging#severity}
  */
  readonly severity?: number;
}

export function orgLoggingSyslogLoggingToTerraform(struct?: OrgLoggingSyslogLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    host: cdktf.stringToTerraform(struct!.host),
    mode: cdktf.stringToTerraform(struct!.mode),
    port: cdktf.numberToTerraform(struct!.port),
    severity: cdktf.numberToTerraform(struct!.severity),
  }
}


export function orgLoggingSyslogLoggingToHclTerraform(struct?: OrgLoggingSyslogLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgLoggingSyslogLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgLoggingSyslogLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgLoggingSyslogLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._host = undefined;
      this._mode = undefined;
      this._port = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._host = value.host;
      this._mode = value.mode;
      this._port = value.port;
      this._severity = value.severity;
    }
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: number; 
  public get severity() {
    return this.getNumberAttribute('severity');
  }
  public set severity(value: number) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

export class OrgLoggingSyslogLoggingList extends cdktf.ComplexList {
  public internalValue? : OrgLoggingSyslogLogging[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrgLoggingSyslogLoggingOutputReference {
    return new OrgLoggingSyslogLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging cpln_org_logging}
*/
export class OrgLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cpln_org_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgLogging to import
  * @param importFromId The id of the existing OrgLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cpln_org_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/org_logging cpln_org_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgLoggingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrgLoggingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cpln_org_logging',
      terraformGeneratorMetadata: {
        providerName: 'cpln',
        providerVersion: '1.2.19',
        providerVersionConstraint: '1.2.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudWatchLogging.internalValue = config.cloudWatchLogging;
    this._coralogixLogging.internalValue = config.coralogixLogging;
    this._datadogLogging.internalValue = config.datadogLogging;
    this._elasticLogging.internalValue = config.elasticLogging;
    this._fluentdLogging.internalValue = config.fluentdLogging;
    this._logzioLogging.internalValue = config.logzioLogging;
    this._s3Logging.internalValue = config.s3Logging;
    this._stackdriverLogging.internalValue = config.stackdriverLogging;
    this._syslogLogging.internalValue = config.syslogLogging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpln_id - computed: true, optional: false, required: false
  public get cplnId() {
    return this.getStringAttribute('cpln_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // cloud_watch_logging - computed: false, optional: true, required: false
  private _cloudWatchLogging = new OrgLoggingCloudWatchLoggingList(this, "cloud_watch_logging", true);
  public get cloudWatchLogging() {
    return this._cloudWatchLogging;
  }
  public putCloudWatchLogging(value: OrgLoggingCloudWatchLogging[] | cdktf.IResolvable) {
    this._cloudWatchLogging.internalValue = value;
  }
  public resetCloudWatchLogging() {
    this._cloudWatchLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLoggingInput() {
    return this._cloudWatchLogging.internalValue;
  }

  // coralogix_logging - computed: false, optional: true, required: false
  private _coralogixLogging = new OrgLoggingCoralogixLoggingList(this, "coralogix_logging", true);
  public get coralogixLogging() {
    return this._coralogixLogging;
  }
  public putCoralogixLogging(value: OrgLoggingCoralogixLogging[] | cdktf.IResolvable) {
    this._coralogixLogging.internalValue = value;
  }
  public resetCoralogixLogging() {
    this._coralogixLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coralogixLoggingInput() {
    return this._coralogixLogging.internalValue;
  }

  // datadog_logging - computed: false, optional: true, required: false
  private _datadogLogging = new OrgLoggingDatadogLoggingList(this, "datadog_logging", true);
  public get datadogLogging() {
    return this._datadogLogging;
  }
  public putDatadogLogging(value: OrgLoggingDatadogLogging[] | cdktf.IResolvable) {
    this._datadogLogging.internalValue = value;
  }
  public resetDatadogLogging() {
    this._datadogLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogLoggingInput() {
    return this._datadogLogging.internalValue;
  }

  // elastic_logging - computed: false, optional: true, required: false
  private _elasticLogging = new OrgLoggingElasticLoggingList(this, "elastic_logging", true);
  public get elasticLogging() {
    return this._elasticLogging;
  }
  public putElasticLogging(value: OrgLoggingElasticLogging[] | cdktf.IResolvable) {
    this._elasticLogging.internalValue = value;
  }
  public resetElasticLogging() {
    this._elasticLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticLoggingInput() {
    return this._elasticLogging.internalValue;
  }

  // fluentd_logging - computed: false, optional: true, required: false
  private _fluentdLogging = new OrgLoggingFluentdLoggingList(this, "fluentd_logging", true);
  public get fluentdLogging() {
    return this._fluentdLogging;
  }
  public putFluentdLogging(value: OrgLoggingFluentdLogging[] | cdktf.IResolvable) {
    this._fluentdLogging.internalValue = value;
  }
  public resetFluentdLogging() {
    this._fluentdLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluentdLoggingInput() {
    return this._fluentdLogging.internalValue;
  }

  // logzio_logging - computed: false, optional: true, required: false
  private _logzioLogging = new OrgLoggingLogzioLoggingList(this, "logzio_logging", true);
  public get logzioLogging() {
    return this._logzioLogging;
  }
  public putLogzioLogging(value: OrgLoggingLogzioLogging[] | cdktf.IResolvable) {
    this._logzioLogging.internalValue = value;
  }
  public resetLogzioLogging() {
    this._logzioLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logzioLoggingInput() {
    return this._logzioLogging.internalValue;
  }

  // s3_logging - computed: false, optional: true, required: false
  private _s3Logging = new OrgLoggingS3LoggingList(this, "s3_logging", true);
  public get s3Logging() {
    return this._s3Logging;
  }
  public putS3Logging(value: OrgLoggingS3Logging[] | cdktf.IResolvable) {
    this._s3Logging.internalValue = value;
  }
  public resetS3Logging() {
    this._s3Logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LoggingInput() {
    return this._s3Logging.internalValue;
  }

  // stackdriver_logging - computed: false, optional: true, required: false
  private _stackdriverLogging = new OrgLoggingStackdriverLoggingList(this, "stackdriver_logging", true);
  public get stackdriverLogging() {
    return this._stackdriverLogging;
  }
  public putStackdriverLogging(value: OrgLoggingStackdriverLogging[] | cdktf.IResolvable) {
    this._stackdriverLogging.internalValue = value;
  }
  public resetStackdriverLogging() {
    this._stackdriverLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackdriverLoggingInput() {
    return this._stackdriverLogging.internalValue;
  }

  // syslog_logging - computed: false, optional: true, required: false
  private _syslogLogging = new OrgLoggingSyslogLoggingList(this, "syslog_logging", true);
  public get syslogLogging() {
    return this._syslogLogging;
  }
  public putSyslogLogging(value: OrgLoggingSyslogLogging[] | cdktf.IResolvable) {
    this._syslogLogging.internalValue = value;
  }
  public resetSyslogLogging() {
    this._syslogLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogLoggingInput() {
    return this._syslogLogging.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_watch_logging: cdktf.listMapper(orgLoggingCloudWatchLoggingToTerraform, true)(this._cloudWatchLogging.internalValue),
      coralogix_logging: cdktf.listMapper(orgLoggingCoralogixLoggingToTerraform, true)(this._coralogixLogging.internalValue),
      datadog_logging: cdktf.listMapper(orgLoggingDatadogLoggingToTerraform, true)(this._datadogLogging.internalValue),
      elastic_logging: cdktf.listMapper(orgLoggingElasticLoggingToTerraform, true)(this._elasticLogging.internalValue),
      fluentd_logging: cdktf.listMapper(orgLoggingFluentdLoggingToTerraform, true)(this._fluentdLogging.internalValue),
      logzio_logging: cdktf.listMapper(orgLoggingLogzioLoggingToTerraform, true)(this._logzioLogging.internalValue),
      s3_logging: cdktf.listMapper(orgLoggingS3LoggingToTerraform, true)(this._s3Logging.internalValue),
      stackdriver_logging: cdktf.listMapper(orgLoggingStackdriverLoggingToTerraform, true)(this._stackdriverLogging.internalValue),
      syslog_logging: cdktf.listMapper(orgLoggingSyslogLoggingToTerraform, true)(this._syslogLogging.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_watch_logging: {
        value: cdktf.listMapperHcl(orgLoggingCloudWatchLoggingToHclTerraform, true)(this._cloudWatchLogging.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgLoggingCloudWatchLoggingList",
      },
      coralogix_logging: {
        value: cdktf.listMapperHcl(orgLoggingCoralogixLoggingToHclTerraform, true)(this._coralogixLogging.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgLoggingCoralogixLoggingList",
      },
      datadog_logging: {
        value: cdktf.listMapperHcl(orgLoggingDatadogLoggingToHclTerraform, true)(this._datadogLogging.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgLoggingDatadogLoggingList",
      },
      elastic_logging: {
        value: cdktf.listMapperHcl(orgLoggingElasticLoggingToHclTerraform, true)(this._elasticLogging.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgLoggingElasticLoggingList",
      },
      fluentd_logging: {
        value: cdktf.listMapperHcl(orgLoggingFluentdLoggingToHclTerraform, true)(this._fluentdLogging.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgLoggingFluentdLoggingList",
      },
      logzio_logging: {
        value: cdktf.listMapperHcl(orgLoggingLogzioLoggingToHclTerraform, true)(this._logzioLogging.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgLoggingLogzioLoggingList",
      },
      s3_logging: {
        value: cdktf.listMapperHcl(orgLoggingS3LoggingToHclTerraform, true)(this._s3Logging.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgLoggingS3LoggingList",
      },
      stackdriver_logging: {
        value: cdktf.listMapperHcl(orgLoggingStackdriverLoggingToHclTerraform, true)(this._stackdriverLogging.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgLoggingStackdriverLoggingList",
      },
      syslog_logging: {
        value: cdktf.listMapperHcl(orgLoggingSyslogLoggingToHclTerraform, true)(this._syslogLogging.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgLoggingSyslogLoggingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
