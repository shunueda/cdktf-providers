// https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human-readable description of the Event Destination. Optional, max 255 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#description EventDestination#description}
  */
  readonly description?: string;
  /**
  * The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#format EventDestination#format}
  */
  readonly format?: string;
  /**
  * Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#metadata EventDestination#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#verify_with_test_event EventDestination#verify_with_test_event}
  */
  readonly verifyWithTestEvent?: boolean | cdktf.IResolvable;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#target EventDestination#target}
  */
  readonly target?: EventDestinationTarget[] | cdktf.IResolvable;
}
export interface EventDestinationTargetAzureLogsIngestion {
  /**
  * Client ID for the application client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#client_id EventDestination#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret for the application client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#client_secret EventDestination#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Data collection rule immutable ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#data_collection_rule_id EventDestination#data_collection_rule_id}
  */
  readonly dataCollectionRuleId: string;
  /**
  * Data collection stream name to use as destination, located inside the DCR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#data_collection_stream_name EventDestination#data_collection_stream_name}
  */
  readonly dataCollectionStreamName: string;
  /**
  * Data collection endpoint logs ingestion URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#logs_ingestion_uri EventDestination#logs_ingestion_uri}
  */
  readonly logsIngestionUri: string;
  /**
  * Tenant ID for the Azure account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#tenant_id EventDestination#tenant_id}
  */
  readonly tenantId: string;
}

export function eventDestinationTargetAzureLogsIngestionToTerraform(struct?: EventDestinationTargetAzureLogsIngestion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    data_collection_rule_id: cdktf.stringToTerraform(struct!.dataCollectionRuleId),
    data_collection_stream_name: cdktf.stringToTerraform(struct!.dataCollectionStreamName),
    logs_ingestion_uri: cdktf.stringToTerraform(struct!.logsIngestionUri),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function eventDestinationTargetAzureLogsIngestionToHclTerraform(struct?: EventDestinationTargetAzureLogsIngestion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_collection_rule_id: {
      value: cdktf.stringToHclTerraform(struct!.dataCollectionRuleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_collection_stream_name: {
      value: cdktf.stringToHclTerraform(struct!.dataCollectionStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logs_ingestion_uri: {
      value: cdktf.stringToHclTerraform(struct!.logsIngestionUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDestinationTargetAzureLogsIngestionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventDestinationTargetAzureLogsIngestion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._dataCollectionRuleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCollectionRuleId = this._dataCollectionRuleId;
    }
    if (this._dataCollectionStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCollectionStreamName = this._dataCollectionStreamName;
    }
    if (this._logsIngestionUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsIngestionUri = this._logsIngestionUri;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDestinationTargetAzureLogsIngestion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._dataCollectionRuleId = undefined;
      this._dataCollectionStreamName = undefined;
      this._logsIngestionUri = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._dataCollectionRuleId = value.dataCollectionRuleId;
      this._dataCollectionStreamName = value.dataCollectionStreamName;
      this._logsIngestionUri = value.logsIngestionUri;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // data_collection_rule_id - computed: false, optional: false, required: true
  private _dataCollectionRuleId?: string; 
  public get dataCollectionRuleId() {
    return this.getStringAttribute('data_collection_rule_id');
  }
  public set dataCollectionRuleId(value: string) {
    this._dataCollectionRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCollectionRuleIdInput() {
    return this._dataCollectionRuleId;
  }

  // data_collection_stream_name - computed: false, optional: false, required: true
  private _dataCollectionStreamName?: string; 
  public get dataCollectionStreamName() {
    return this.getStringAttribute('data_collection_stream_name');
  }
  public set dataCollectionStreamName(value: string) {
    this._dataCollectionStreamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCollectionStreamNameInput() {
    return this._dataCollectionStreamName;
  }

  // logs_ingestion_uri - computed: false, optional: false, required: true
  private _logsIngestionUri?: string; 
  public get logsIngestionUri() {
    return this.getStringAttribute('logs_ingestion_uri');
  }
  public set logsIngestionUri(value: string) {
    this._logsIngestionUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logsIngestionUriInput() {
    return this._logsIngestionUri;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class EventDestinationTargetAzureLogsIngestionList extends cdktf.ComplexList {
  public internalValue? : EventDestinationTargetAzureLogsIngestion[] | cdktf.IResolvable

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
  public get(index: number): EventDestinationTargetAzureLogsIngestionOutputReference {
    return new EventDestinationTargetAzureLogsIngestionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventDestinationTargetCloudwatchLogsAuthCreds {
  /**
  * The ID portion of an AWS access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#aws_access_key_id EventDestination#aws_access_key_id}
  */
  readonly awsAccessKeyId: string;
  /**
  * The secret portion of an AWS access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#aws_secret_access_key EventDestination#aws_secret_access_key}
  */
  readonly awsSecretAccessKey: string;
}

export function eventDestinationTargetCloudwatchLogsAuthCredsToTerraform(struct?: EventDestinationTargetCloudwatchLogsAuthCreds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_access_key_id: cdktf.stringToTerraform(struct!.awsAccessKeyId),
    aws_secret_access_key: cdktf.stringToTerraform(struct!.awsSecretAccessKey),
  }
}


export function eventDestinationTargetCloudwatchLogsAuthCredsToHclTerraform(struct?: EventDestinationTargetCloudwatchLogsAuthCreds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDestinationTargetCloudwatchLogsAuthCredsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventDestinationTargetCloudwatchLogsAuthCreds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKeyId = this._awsAccessKeyId;
    }
    if (this._awsSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretAccessKey = this._awsSecretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDestinationTargetCloudwatchLogsAuthCreds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccessKeyId = undefined;
      this._awsSecretAccessKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccessKeyId = value.awsAccessKeyId;
      this._awsSecretAccessKey = value.awsSecretAccessKey;
    }
  }

  // aws_access_key_id - computed: false, optional: false, required: true
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_secret_access_key - computed: false, optional: false, required: true
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }
}

export class EventDestinationTargetCloudwatchLogsAuthCredsList extends cdktf.ComplexList {
  public internalValue? : EventDestinationTargetCloudwatchLogsAuthCreds[] | cdktf.IResolvable

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
  public get(index: number): EventDestinationTargetCloudwatchLogsAuthCredsOutputReference {
    return new EventDestinationTargetCloudwatchLogsAuthCredsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventDestinationTargetCloudwatchLogsAuthRole {
  /**
  * An ARN that specifies the role that ngrok should use to deliver to the configured target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#role_arn EventDestination#role_arn}
  */
  readonly roleArn: string;
}

export function eventDestinationTargetCloudwatchLogsAuthRoleToTerraform(struct?: EventDestinationTargetCloudwatchLogsAuthRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function eventDestinationTargetCloudwatchLogsAuthRoleToHclTerraform(struct?: EventDestinationTargetCloudwatchLogsAuthRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDestinationTargetCloudwatchLogsAuthRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventDestinationTargetCloudwatchLogsAuthRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDestinationTargetCloudwatchLogsAuthRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
    }
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class EventDestinationTargetCloudwatchLogsAuthRoleList extends cdktf.ComplexList {
  public internalValue? : EventDestinationTargetCloudwatchLogsAuthRole[] | cdktf.IResolvable

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
  public get(index: number): EventDestinationTargetCloudwatchLogsAuthRoleOutputReference {
    return new EventDestinationTargetCloudwatchLogsAuthRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventDestinationTargetCloudwatchLogsAuth {
  /**
  * creds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#creds EventDestination#creds}
  */
  readonly creds?: EventDestinationTargetCloudwatchLogsAuthCreds[] | cdktf.IResolvable;
  /**
  * role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#role EventDestination#role}
  */
  readonly role?: EventDestinationTargetCloudwatchLogsAuthRole[] | cdktf.IResolvable;
}

export function eventDestinationTargetCloudwatchLogsAuthToTerraform(struct?: EventDestinationTargetCloudwatchLogsAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creds: cdktf.listMapper(eventDestinationTargetCloudwatchLogsAuthCredsToTerraform, true)(struct!.creds),
    role: cdktf.listMapper(eventDestinationTargetCloudwatchLogsAuthRoleToTerraform, true)(struct!.role),
  }
}


export function eventDestinationTargetCloudwatchLogsAuthToHclTerraform(struct?: EventDestinationTargetCloudwatchLogsAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creds: {
      value: cdktf.listMapperHcl(eventDestinationTargetCloudwatchLogsAuthCredsToHclTerraform, true)(struct!.creds),
      isBlock: true,
      type: "set",
      storageClassType: "EventDestinationTargetCloudwatchLogsAuthCredsList",
    },
    role: {
      value: cdktf.listMapperHcl(eventDestinationTargetCloudwatchLogsAuthRoleToHclTerraform, true)(struct!.role),
      isBlock: true,
      type: "set",
      storageClassType: "EventDestinationTargetCloudwatchLogsAuthRoleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDestinationTargetCloudwatchLogsAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventDestinationTargetCloudwatchLogsAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.creds = this._creds?.internalValue;
    }
    if (this._role?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDestinationTargetCloudwatchLogsAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creds.internalValue = undefined;
      this._role.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creds.internalValue = value.creds;
      this._role.internalValue = value.role;
    }
  }

  // creds - computed: false, optional: true, required: false
  private _creds = new EventDestinationTargetCloudwatchLogsAuthCredsList(this, "creds", true);
  public get creds() {
    return this._creds;
  }
  public putCreds(value: EventDestinationTargetCloudwatchLogsAuthCreds[] | cdktf.IResolvable) {
    this._creds.internalValue = value;
  }
  public resetCreds() {
    this._creds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credsInput() {
    return this._creds.internalValue;
  }

  // role - computed: false, optional: true, required: false
  private _role = new EventDestinationTargetCloudwatchLogsAuthRoleList(this, "role", true);
  public get role() {
    return this._role;
  }
  public putRole(value: EventDestinationTargetCloudwatchLogsAuthRole[] | cdktf.IResolvable) {
    this._role.internalValue = value;
  }
  public resetRole() {
    this._role.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role.internalValue;
  }
}

export class EventDestinationTargetCloudwatchLogsAuthList extends cdktf.ComplexList {
  public internalValue? : EventDestinationTargetCloudwatchLogsAuth[] | cdktf.IResolvable

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
  public get(index: number): EventDestinationTargetCloudwatchLogsAuthOutputReference {
    return new EventDestinationTargetCloudwatchLogsAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventDestinationTargetCloudwatchLogs {
  /**
  * An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#log_group_arn EventDestination#log_group_arn}
  */
  readonly logGroupArn?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#auth EventDestination#auth}
  */
  readonly auth?: EventDestinationTargetCloudwatchLogsAuth[] | cdktf.IResolvable;
}

export function eventDestinationTargetCloudwatchLogsToTerraform(struct?: EventDestinationTargetCloudwatchLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_arn: cdktf.stringToTerraform(struct!.logGroupArn),
    auth: cdktf.listMapper(eventDestinationTargetCloudwatchLogsAuthToTerraform, true)(struct!.auth),
  }
}


export function eventDestinationTargetCloudwatchLogsToHclTerraform(struct?: EventDestinationTargetCloudwatchLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.logGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktf.listMapperHcl(eventDestinationTargetCloudwatchLogsAuthToHclTerraform, true)(struct!.auth),
      isBlock: true,
      type: "set",
      storageClassType: "EventDestinationTargetCloudwatchLogsAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDestinationTargetCloudwatchLogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventDestinationTargetCloudwatchLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupArn = this._logGroupArn;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDestinationTargetCloudwatchLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroupArn = undefined;
      this._auth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroupArn = value.logGroupArn;
      this._auth.internalValue = value.auth;
    }
  }

  // log_group_arn - computed: false, optional: true, required: false
  private _logGroupArn?: string; 
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
  public set logGroupArn(value: string) {
    this._logGroupArn = value;
  }
  public resetLogGroupArn() {
    this._logGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupArnInput() {
    return this._logGroupArn;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new EventDestinationTargetCloudwatchLogsAuthList(this, "auth", true);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: EventDestinationTargetCloudwatchLogsAuth[] | cdktf.IResolvable) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }
}

export class EventDestinationTargetCloudwatchLogsList extends cdktf.ComplexList {
  public internalValue? : EventDestinationTargetCloudwatchLogs[] | cdktf.IResolvable

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
  public get(index: number): EventDestinationTargetCloudwatchLogsOutputReference {
    return new EventDestinationTargetCloudwatchLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventDestinationTargetDatadog {
  /**
  * Datadog API key to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#api_key EventDestination#api_key}
  */
  readonly apiKey?: string;
  /**
  * Datadog site to send event to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#ddsite EventDestination#ddsite}
  */
  readonly ddsite?: string;
  /**
  * Tags to send with the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#ddtags EventDestination#ddtags}
  */
  readonly ddtags?: string;
  /**
  * Service name to send with the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#service EventDestination#service}
  */
  readonly service?: string;
}

export function eventDestinationTargetDatadogToTerraform(struct?: EventDestinationTargetDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    ddsite: cdktf.stringToTerraform(struct!.ddsite),
    ddtags: cdktf.stringToTerraform(struct!.ddtags),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function eventDestinationTargetDatadogToHclTerraform(struct?: EventDestinationTargetDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddsite: {
      value: cdktf.stringToHclTerraform(struct!.ddsite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddtags: {
      value: cdktf.stringToHclTerraform(struct!.ddtags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDestinationTargetDatadogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventDestinationTargetDatadog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._ddsite !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddsite = this._ddsite;
    }
    if (this._ddtags !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddtags = this._ddtags;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDestinationTargetDatadog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._ddsite = undefined;
      this._ddtags = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._ddsite = value.ddsite;
      this._ddtags = value.ddtags;
      this._service = value.service;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // ddsite - computed: false, optional: true, required: false
  private _ddsite?: string; 
  public get ddsite() {
    return this.getStringAttribute('ddsite');
  }
  public set ddsite(value: string) {
    this._ddsite = value;
  }
  public resetDdsite() {
    this._ddsite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddsiteInput() {
    return this._ddsite;
  }

  // ddtags - computed: false, optional: true, required: false
  private _ddtags?: string; 
  public get ddtags() {
    return this.getStringAttribute('ddtags');
  }
  public set ddtags(value: string) {
    this._ddtags = value;
  }
  public resetDdtags() {
    this._ddtags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddtagsInput() {
    return this._ddtags;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class EventDestinationTargetDatadogList extends cdktf.ComplexList {
  public internalValue? : EventDestinationTargetDatadog[] | cdktf.IResolvable

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
  public get(index: number): EventDestinationTargetDatadogOutputReference {
    return new EventDestinationTargetDatadogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventDestinationTargetDebug {
  /**
  * URL to send events to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#callback_url EventDestination#callback_url}
  */
  readonly callbackUrl?: string;
  /**
  * Whether or not to output to publisher service logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#log EventDestination#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
}

export function eventDestinationTargetDebugToTerraform(struct?: EventDestinationTargetDebug | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    callback_url: cdktf.stringToTerraform(struct!.callbackUrl),
    log: cdktf.booleanToTerraform(struct!.log),
  }
}


export function eventDestinationTargetDebugToHclTerraform(struct?: EventDestinationTargetDebug | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    callback_url: {
      value: cdktf.stringToHclTerraform(struct!.callbackUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.booleanToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDestinationTargetDebugOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventDestinationTargetDebug | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callbackUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.callbackUrl = this._callbackUrl;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDestinationTargetDebug | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._callbackUrl = undefined;
      this._log = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._callbackUrl = value.callbackUrl;
      this._log = value.log;
    }
  }

  // callback_url - computed: false, optional: true, required: false
  private _callbackUrl?: string; 
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }
  public set callbackUrl(value: string) {
    this._callbackUrl = value;
  }
  public resetCallbackUrl() {
    this._callbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlInput() {
    return this._callbackUrl;
  }

  // log - computed: false, optional: true, required: false
  private _log?: boolean | cdktf.IResolvable; 
  public get log() {
    return this.getBooleanAttribute('log');
  }
  public set log(value: boolean | cdktf.IResolvable) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }
}

export class EventDestinationTargetDebugList extends cdktf.ComplexList {
  public internalValue? : EventDestinationTargetDebug[] | cdktf.IResolvable

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
  public get(index: number): EventDestinationTargetDebugOutputReference {
    return new EventDestinationTargetDebugOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventDestinationTargetFirehoseAuthCreds {
  /**
  * The ID portion of an AWS access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#aws_access_key_id EventDestination#aws_access_key_id}
  */
  readonly awsAccessKeyId: string;
  /**
  * The secret portion of an AWS access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#aws_secret_access_key EventDestination#aws_secret_access_key}
  */
  readonly awsSecretAccessKey: string;
}

export function eventDestinationTargetFirehoseAuthCredsToTerraform(struct?: EventDestinationTargetFirehoseAuthCreds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_access_key_id: cdktf.stringToTerraform(struct!.awsAccessKeyId),
    aws_secret_access_key: cdktf.stringToTerraform(struct!.awsSecretAccessKey),
  }
}


export function eventDestinationTargetFirehoseAuthCredsToHclTerraform(struct?: EventDestinationTargetFirehoseAuthCreds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDestinationTargetFirehoseAuthCredsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventDestinationTargetFirehoseAuthCreds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKeyId = this._awsAccessKeyId;
    }
    if (this._awsSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretAccessKey = this._awsSecretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDestinationTargetFirehoseAuthCreds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccessKeyId = undefined;
      this._awsSecretAccessKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccessKeyId = value.awsAccessKeyId;
      this._awsSecretAccessKey = value.awsSecretAccessKey;
    }
  }

  // aws_access_key_id - computed: false, optional: false, required: true
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_secret_access_key - computed: false, optional: false, required: true
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }
}

export class EventDestinationTargetFirehoseAuthCredsList extends cdktf.ComplexList {
  public internalValue? : EventDestinationTargetFirehoseAuthCreds[] | cdktf.IResolvable

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
  public get(index: number): EventDestinationTargetFirehoseAuthCredsOutputReference {
    return new EventDestinationTargetFirehoseAuthCredsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventDestinationTargetFirehoseAuthRole {
  /**
  * An ARN that specifies the role that ngrok should use to deliver to the configured target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#role_arn EventDestination#role_arn}
  */
  readonly roleArn: string;
}

export function eventDestinationTargetFirehoseAuthRoleToTerraform(struct?: EventDestinationTargetFirehoseAuthRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function eventDestinationTargetFirehoseAuthRoleToHclTerraform(struct?: EventDestinationTargetFirehoseAuthRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDestinationTargetFirehoseAuthRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventDestinationTargetFirehoseAuthRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDestinationTargetFirehoseAuthRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
    }
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class EventDestinationTargetFirehoseAuthRoleList extends cdktf.ComplexList {
  public internalValue? : EventDestinationTargetFirehoseAuthRole[] | cdktf.IResolvable

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
  public get(index: number): EventDestinationTargetFirehoseAuthRoleOutputReference {
    return new EventDestinationTargetFirehoseAuthRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventDestinationTargetFirehoseAuth {
  /**
  * creds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#creds EventDestination#creds}
  */
  readonly creds?: EventDestinationTargetFirehoseAuthCreds[] | cdktf.IResolvable;
  /**
  * role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#role EventDestination#role}
  */
  readonly role?: EventDestinationTargetFirehoseAuthRole[] | cdktf.IResolvable;
}

export function eventDestinationTargetFirehoseAuthToTerraform(struct?: EventDestinationTargetFirehoseAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creds: cdktf.listMapper(eventDestinationTargetFirehoseAuthCredsToTerraform, true)(struct!.creds),
    role: cdktf.listMapper(eventDestinationTargetFirehoseAuthRoleToTerraform, true)(struct!.role),
  }
}


export function eventDestinationTargetFirehoseAuthToHclTerraform(struct?: EventDestinationTargetFirehoseAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creds: {
      value: cdktf.listMapperHcl(eventDestinationTargetFirehoseAuthCredsToHclTerraform, true)(struct!.creds),
      isBlock: true,
      type: "set",
      storageClassType: "EventDestinationTargetFirehoseAuthCredsList",
    },
    role: {
      value: cdktf.listMapperHcl(eventDestinationTargetFirehoseAuthRoleToHclTerraform, true)(struct!.role),
      isBlock: true,
      type: "set",
      storageClassType: "EventDestinationTargetFirehoseAuthRoleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDestinationTargetFirehoseAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventDestinationTargetFirehoseAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.creds = this._creds?.internalValue;
    }
    if (this._role?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDestinationTargetFirehoseAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creds.internalValue = undefined;
      this._role.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creds.internalValue = value.creds;
      this._role.internalValue = value.role;
    }
  }

  // creds - computed: false, optional: true, required: false
  private _creds = new EventDestinationTargetFirehoseAuthCredsList(this, "creds", true);
  public get creds() {
    return this._creds;
  }
  public putCreds(value: EventDestinationTargetFirehoseAuthCreds[] | cdktf.IResolvable) {
    this._creds.internalValue = value;
  }
  public resetCreds() {
    this._creds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credsInput() {
    return this._creds.internalValue;
  }

  // role - computed: false, optional: true, required: false
  private _role = new EventDestinationTargetFirehoseAuthRoleList(this, "role", true);
  public get role() {
    return this._role;
  }
  public putRole(value: EventDestinationTargetFirehoseAuthRole[] | cdktf.IResolvable) {
    this._role.internalValue = value;
  }
  public resetRole() {
    this._role.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role.internalValue;
  }
}

export class EventDestinationTargetFirehoseAuthList extends cdktf.ComplexList {
  public internalValue? : EventDestinationTargetFirehoseAuth[] | cdktf.IResolvable

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
  public get(index: number): EventDestinationTargetFirehoseAuthOutputReference {
    return new EventDestinationTargetFirehoseAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventDestinationTargetFirehose {
  /**
  * An Amazon Resource Name specifying the Firehose delivery stream to deposit events into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#delivery_stream_arn EventDestination#delivery_stream_arn}
  */
  readonly deliveryStreamArn?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#auth EventDestination#auth}
  */
  readonly auth?: EventDestinationTargetFirehoseAuth[] | cdktf.IResolvable;
}

export function eventDestinationTargetFirehoseToTerraform(struct?: EventDestinationTargetFirehose | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delivery_stream_arn: cdktf.stringToTerraform(struct!.deliveryStreamArn),
    auth: cdktf.listMapper(eventDestinationTargetFirehoseAuthToTerraform, true)(struct!.auth),
  }
}


export function eventDestinationTargetFirehoseToHclTerraform(struct?: EventDestinationTargetFirehose | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delivery_stream_arn: {
      value: cdktf.stringToHclTerraform(struct!.deliveryStreamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktf.listMapperHcl(eventDestinationTargetFirehoseAuthToHclTerraform, true)(struct!.auth),
      isBlock: true,
      type: "set",
      storageClassType: "EventDestinationTargetFirehoseAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDestinationTargetFirehoseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventDestinationTargetFirehose | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStreamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStreamArn = this._deliveryStreamArn;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDestinationTargetFirehose | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deliveryStreamArn = undefined;
      this._auth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deliveryStreamArn = value.deliveryStreamArn;
      this._auth.internalValue = value.auth;
    }
  }

  // delivery_stream_arn - computed: false, optional: true, required: false
  private _deliveryStreamArn?: string; 
  public get deliveryStreamArn() {
    return this.getStringAttribute('delivery_stream_arn');
  }
  public set deliveryStreamArn(value: string) {
    this._deliveryStreamArn = value;
  }
  public resetDeliveryStreamArn() {
    this._deliveryStreamArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamArnInput() {
    return this._deliveryStreamArn;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new EventDestinationTargetFirehoseAuthList(this, "auth", true);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: EventDestinationTargetFirehoseAuth[] | cdktf.IResolvable) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }
}

export class EventDestinationTargetFirehoseList extends cdktf.ComplexList {
  public internalValue? : EventDestinationTargetFirehose[] | cdktf.IResolvable

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
  public get(index: number): EventDestinationTargetFirehoseOutputReference {
    return new EventDestinationTargetFirehoseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventDestinationTargetKinesisAuthCreds {
  /**
  * The ID portion of an AWS access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#aws_access_key_id EventDestination#aws_access_key_id}
  */
  readonly awsAccessKeyId: string;
  /**
  * The secret portion of an AWS access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#aws_secret_access_key EventDestination#aws_secret_access_key}
  */
  readonly awsSecretAccessKey: string;
}

export function eventDestinationTargetKinesisAuthCredsToTerraform(struct?: EventDestinationTargetKinesisAuthCreds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_access_key_id: cdktf.stringToTerraform(struct!.awsAccessKeyId),
    aws_secret_access_key: cdktf.stringToTerraform(struct!.awsSecretAccessKey),
  }
}


export function eventDestinationTargetKinesisAuthCredsToHclTerraform(struct?: EventDestinationTargetKinesisAuthCreds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDestinationTargetKinesisAuthCredsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventDestinationTargetKinesisAuthCreds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKeyId = this._awsAccessKeyId;
    }
    if (this._awsSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretAccessKey = this._awsSecretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDestinationTargetKinesisAuthCreds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccessKeyId = undefined;
      this._awsSecretAccessKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccessKeyId = value.awsAccessKeyId;
      this._awsSecretAccessKey = value.awsSecretAccessKey;
    }
  }

  // aws_access_key_id - computed: false, optional: false, required: true
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_secret_access_key - computed: false, optional: false, required: true
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }
}

export class EventDestinationTargetKinesisAuthCredsList extends cdktf.ComplexList {
  public internalValue? : EventDestinationTargetKinesisAuthCreds[] | cdktf.IResolvable

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
  public get(index: number): EventDestinationTargetKinesisAuthCredsOutputReference {
    return new EventDestinationTargetKinesisAuthCredsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventDestinationTargetKinesisAuthRole {
  /**
  * An ARN that specifies the role that ngrok should use to deliver to the configured target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#role_arn EventDestination#role_arn}
  */
  readonly roleArn: string;
}

export function eventDestinationTargetKinesisAuthRoleToTerraform(struct?: EventDestinationTargetKinesisAuthRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function eventDestinationTargetKinesisAuthRoleToHclTerraform(struct?: EventDestinationTargetKinesisAuthRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDestinationTargetKinesisAuthRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventDestinationTargetKinesisAuthRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDestinationTargetKinesisAuthRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
    }
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class EventDestinationTargetKinesisAuthRoleList extends cdktf.ComplexList {
  public internalValue? : EventDestinationTargetKinesisAuthRole[] | cdktf.IResolvable

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
  public get(index: number): EventDestinationTargetKinesisAuthRoleOutputReference {
    return new EventDestinationTargetKinesisAuthRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventDestinationTargetKinesisAuth {
  /**
  * creds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#creds EventDestination#creds}
  */
  readonly creds?: EventDestinationTargetKinesisAuthCreds[] | cdktf.IResolvable;
  /**
  * role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#role EventDestination#role}
  */
  readonly role?: EventDestinationTargetKinesisAuthRole[] | cdktf.IResolvable;
}

export function eventDestinationTargetKinesisAuthToTerraform(struct?: EventDestinationTargetKinesisAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creds: cdktf.listMapper(eventDestinationTargetKinesisAuthCredsToTerraform, true)(struct!.creds),
    role: cdktf.listMapper(eventDestinationTargetKinesisAuthRoleToTerraform, true)(struct!.role),
  }
}


export function eventDestinationTargetKinesisAuthToHclTerraform(struct?: EventDestinationTargetKinesisAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creds: {
      value: cdktf.listMapperHcl(eventDestinationTargetKinesisAuthCredsToHclTerraform, true)(struct!.creds),
      isBlock: true,
      type: "set",
      storageClassType: "EventDestinationTargetKinesisAuthCredsList",
    },
    role: {
      value: cdktf.listMapperHcl(eventDestinationTargetKinesisAuthRoleToHclTerraform, true)(struct!.role),
      isBlock: true,
      type: "set",
      storageClassType: "EventDestinationTargetKinesisAuthRoleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDestinationTargetKinesisAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventDestinationTargetKinesisAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.creds = this._creds?.internalValue;
    }
    if (this._role?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDestinationTargetKinesisAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creds.internalValue = undefined;
      this._role.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creds.internalValue = value.creds;
      this._role.internalValue = value.role;
    }
  }

  // creds - computed: false, optional: true, required: false
  private _creds = new EventDestinationTargetKinesisAuthCredsList(this, "creds", true);
  public get creds() {
    return this._creds;
  }
  public putCreds(value: EventDestinationTargetKinesisAuthCreds[] | cdktf.IResolvable) {
    this._creds.internalValue = value;
  }
  public resetCreds() {
    this._creds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credsInput() {
    return this._creds.internalValue;
  }

  // role - computed: false, optional: true, required: false
  private _role = new EventDestinationTargetKinesisAuthRoleList(this, "role", true);
  public get role() {
    return this._role;
  }
  public putRole(value: EventDestinationTargetKinesisAuthRole[] | cdktf.IResolvable) {
    this._role.internalValue = value;
  }
  public resetRole() {
    this._role.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role.internalValue;
  }
}

export class EventDestinationTargetKinesisAuthList extends cdktf.ComplexList {
  public internalValue? : EventDestinationTargetKinesisAuth[] | cdktf.IResolvable

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
  public get(index: number): EventDestinationTargetKinesisAuthOutputReference {
    return new EventDestinationTargetKinesisAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventDestinationTargetKinesis {
  /**
  * An Amazon Resource Name specifying the Kinesis stream to deposit events into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#stream_arn EventDestination#stream_arn}
  */
  readonly streamArn?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#auth EventDestination#auth}
  */
  readonly auth?: EventDestinationTargetKinesisAuth[] | cdktf.IResolvable;
}

export function eventDestinationTargetKinesisToTerraform(struct?: EventDestinationTargetKinesis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stream_arn: cdktf.stringToTerraform(struct!.streamArn),
    auth: cdktf.listMapper(eventDestinationTargetKinesisAuthToTerraform, true)(struct!.auth),
  }
}


export function eventDestinationTargetKinesisToHclTerraform(struct?: EventDestinationTargetKinesis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stream_arn: {
      value: cdktf.stringToHclTerraform(struct!.streamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktf.listMapperHcl(eventDestinationTargetKinesisAuthToHclTerraform, true)(struct!.auth),
      isBlock: true,
      type: "set",
      storageClassType: "EventDestinationTargetKinesisAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDestinationTargetKinesisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventDestinationTargetKinesis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamArn = this._streamArn;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDestinationTargetKinesis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._streamArn = undefined;
      this._auth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._streamArn = value.streamArn;
      this._auth.internalValue = value.auth;
    }
  }

  // stream_arn - computed: false, optional: true, required: false
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  public resetStreamArn() {
    this._streamArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new EventDestinationTargetKinesisAuthList(this, "auth", true);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: EventDestinationTargetKinesisAuth[] | cdktf.IResolvable) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }
}

export class EventDestinationTargetKinesisList extends cdktf.ComplexList {
  public internalValue? : EventDestinationTargetKinesis[] | cdktf.IResolvable

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
  public get(index: number): EventDestinationTargetKinesisOutputReference {
    return new EventDestinationTargetKinesisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventDestinationTarget {
  /**
  * azure_logs_ingestion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#azure_logs_ingestion EventDestination#azure_logs_ingestion}
  */
  readonly azureLogsIngestion?: EventDestinationTargetAzureLogsIngestion[] | cdktf.IResolvable;
  /**
  * cloudwatch_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#cloudwatch_logs EventDestination#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: EventDestinationTargetCloudwatchLogs[] | cdktf.IResolvable;
  /**
  * datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#datadog EventDestination#datadog}
  */
  readonly datadog?: EventDestinationTargetDatadog[] | cdktf.IResolvable;
  /**
  * debug block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#debug EventDestination#debug}
  */
  readonly debug?: EventDestinationTargetDebug[] | cdktf.IResolvable;
  /**
  * firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#firehose EventDestination#firehose}
  */
  readonly firehose?: EventDestinationTargetFirehose[] | cdktf.IResolvable;
  /**
  * kinesis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#kinesis EventDestination#kinesis}
  */
  readonly kinesis?: EventDestinationTargetKinesis[] | cdktf.IResolvable;
}

export function eventDestinationTargetToTerraform(struct?: EventDestinationTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_logs_ingestion: cdktf.listMapper(eventDestinationTargetAzureLogsIngestionToTerraform, true)(struct!.azureLogsIngestion),
    cloudwatch_logs: cdktf.listMapper(eventDestinationTargetCloudwatchLogsToTerraform, true)(struct!.cloudwatchLogs),
    datadog: cdktf.listMapper(eventDestinationTargetDatadogToTerraform, true)(struct!.datadog),
    debug: cdktf.listMapper(eventDestinationTargetDebugToTerraform, true)(struct!.debug),
    firehose: cdktf.listMapper(eventDestinationTargetFirehoseToTerraform, true)(struct!.firehose),
    kinesis: cdktf.listMapper(eventDestinationTargetKinesisToTerraform, true)(struct!.kinesis),
  }
}


export function eventDestinationTargetToHclTerraform(struct?: EventDestinationTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_logs_ingestion: {
      value: cdktf.listMapperHcl(eventDestinationTargetAzureLogsIngestionToHclTerraform, true)(struct!.azureLogsIngestion),
      isBlock: true,
      type: "set",
      storageClassType: "EventDestinationTargetAzureLogsIngestionList",
    },
    cloudwatch_logs: {
      value: cdktf.listMapperHcl(eventDestinationTargetCloudwatchLogsToHclTerraform, true)(struct!.cloudwatchLogs),
      isBlock: true,
      type: "set",
      storageClassType: "EventDestinationTargetCloudwatchLogsList",
    },
    datadog: {
      value: cdktf.listMapperHcl(eventDestinationTargetDatadogToHclTerraform, true)(struct!.datadog),
      isBlock: true,
      type: "set",
      storageClassType: "EventDestinationTargetDatadogList",
    },
    debug: {
      value: cdktf.listMapperHcl(eventDestinationTargetDebugToHclTerraform, true)(struct!.debug),
      isBlock: true,
      type: "set",
      storageClassType: "EventDestinationTargetDebugList",
    },
    firehose: {
      value: cdktf.listMapperHcl(eventDestinationTargetFirehoseToHclTerraform, true)(struct!.firehose),
      isBlock: true,
      type: "set",
      storageClassType: "EventDestinationTargetFirehoseList",
    },
    kinesis: {
      value: cdktf.listMapperHcl(eventDestinationTargetKinesisToHclTerraform, true)(struct!.kinesis),
      isBlock: true,
      type: "set",
      storageClassType: "EventDestinationTargetKinesisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventDestinationTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventDestinationTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureLogsIngestion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureLogsIngestion = this._azureLogsIngestion?.internalValue;
    }
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._debug?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug?.internalValue;
    }
    if (this._firehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehose = this._firehose?.internalValue;
    }
    if (this._kinesis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesis = this._kinesis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventDestinationTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureLogsIngestion.internalValue = undefined;
      this._cloudwatchLogs.internalValue = undefined;
      this._datadog.internalValue = undefined;
      this._debug.internalValue = undefined;
      this._firehose.internalValue = undefined;
      this._kinesis.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureLogsIngestion.internalValue = value.azureLogsIngestion;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
      this._datadog.internalValue = value.datadog;
      this._debug.internalValue = value.debug;
      this._firehose.internalValue = value.firehose;
      this._kinesis.internalValue = value.kinesis;
    }
  }

  // azure_logs_ingestion - computed: false, optional: true, required: false
  private _azureLogsIngestion = new EventDestinationTargetAzureLogsIngestionList(this, "azure_logs_ingestion", true);
  public get azureLogsIngestion() {
    return this._azureLogsIngestion;
  }
  public putAzureLogsIngestion(value: EventDestinationTargetAzureLogsIngestion[] | cdktf.IResolvable) {
    this._azureLogsIngestion.internalValue = value;
  }
  public resetAzureLogsIngestion() {
    this._azureLogsIngestion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureLogsIngestionInput() {
    return this._azureLogsIngestion.internalValue;
  }

  // cloudwatch_logs - computed: false, optional: true, required: false
  private _cloudwatchLogs = new EventDestinationTargetCloudwatchLogsList(this, "cloudwatch_logs", true);
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: EventDestinationTargetCloudwatchLogs[] | cdktf.IResolvable) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new EventDestinationTargetDatadogList(this, "datadog", true);
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: EventDestinationTargetDatadog[] | cdktf.IResolvable) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // debug - computed: false, optional: true, required: false
  private _debug = new EventDestinationTargetDebugList(this, "debug", true);
  public get debug() {
    return this._debug;
  }
  public putDebug(value: EventDestinationTargetDebug[] | cdktf.IResolvable) {
    this._debug.internalValue = value;
  }
  public resetDebug() {
    this._debug.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug.internalValue;
  }

  // firehose - computed: false, optional: true, required: false
  private _firehose = new EventDestinationTargetFirehoseList(this, "firehose", true);
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: EventDestinationTargetFirehose[] | cdktf.IResolvable) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // kinesis - computed: false, optional: true, required: false
  private _kinesis = new EventDestinationTargetKinesisList(this, "kinesis", true);
  public get kinesis() {
    return this._kinesis;
  }
  public putKinesis(value: EventDestinationTargetKinesis[] | cdktf.IResolvable) {
    this._kinesis.internalValue = value;
  }
  public resetKinesis() {
    this._kinesis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisInput() {
    return this._kinesis.internalValue;
  }
}

export class EventDestinationTargetList extends cdktf.ComplexList {
  public internalValue? : EventDestinationTarget[] | cdktf.IResolvable

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
  public get(index: number): EventDestinationTargetOutputReference {
    return new EventDestinationTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination ngrok_event_destination}
*/
export class EventDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ngrok_event_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventDestination to import
  * @param importFromId The id of the existing EventDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ngrok_event_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_destination ngrok_event_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventDestinationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EventDestinationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ngrok_event_destination',
      terraformGeneratorMetadata: {
        providerName: 'ngrok',
        providerVersion: '0.5.0',
        providerVersionConstraint: '0.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._format = config.format;
    this._metadata = config.metadata;
    this._verifyWithTestEvent = config.verifyWithTestEvent;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // format - computed: false, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // verify_with_test_event - computed: false, optional: true, required: false
  private _verifyWithTestEvent?: boolean | cdktf.IResolvable; 
  public get verifyWithTestEvent() {
    return this.getBooleanAttribute('verify_with_test_event');
  }
  public set verifyWithTestEvent(value: boolean | cdktf.IResolvable) {
    this._verifyWithTestEvent = value;
  }
  public resetVerifyWithTestEvent() {
    this._verifyWithTestEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyWithTestEventInput() {
    return this._verifyWithTestEvent;
  }

  // target - computed: false, optional: true, required: false
  private _target = new EventDestinationTargetList(this, "target", true);
  public get target() {
    return this._target;
  }
  public putTarget(value: EventDestinationTarget[] | cdktf.IResolvable) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      format: cdktf.stringToTerraform(this._format),
      metadata: cdktf.stringToTerraform(this._metadata),
      verify_with_test_event: cdktf.booleanToTerraform(this._verifyWithTestEvent),
      target: cdktf.listMapper(eventDestinationTargetToTerraform, true)(this._target.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_with_test_event: {
        value: cdktf.booleanToHclTerraform(this._verifyWithTestEvent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target: {
        value: cdktf.listMapperHcl(eventDestinationTargetToHclTerraform, true)(this._target.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EventDestinationTargetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
