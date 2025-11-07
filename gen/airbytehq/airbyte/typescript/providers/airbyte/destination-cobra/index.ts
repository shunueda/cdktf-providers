// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationCobraConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra#configuration DestinationCobra#configuration}
  */
  readonly configuration: DestinationCobraConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra#definition_id DestinationCobra#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra#name DestinationCobra#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra#workspace_id DestinationCobra#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationCobraConfigurationStreamMappings {
  /**
  * The name for the table to update the data in the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra#destination_table DestinationCobra#destination_table}
  */
  readonly destinationTable: string;
  /**
  * The name for the input stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra#source_stream DestinationCobra#source_stream}
  */
  readonly sourceStream: string;
  /**
  * How to update the data in the destination. must be one of ["INSERT", "UPDATE", "UPSERT", "DELETE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra#update_mode DestinationCobra#update_mode}
  */
  readonly updateMode: string;
  /**
  * Given the operation is an upsert, a field representing an external ID needs to be provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra#upsert_key DestinationCobra#upsert_key}
  */
  readonly upsertKey?: string;
}

export function destinationCobraConfigurationStreamMappingsToTerraform(struct?: DestinationCobraConfigurationStreamMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_table: cdktf.stringToTerraform(struct!.destinationTable),
    source_stream: cdktf.stringToTerraform(struct!.sourceStream),
    update_mode: cdktf.stringToTerraform(struct!.updateMode),
    upsert_key: cdktf.stringToTerraform(struct!.upsertKey),
  }
}


export function destinationCobraConfigurationStreamMappingsToHclTerraform(struct?: DestinationCobraConfigurationStreamMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_table: {
      value: cdktf.stringToHclTerraform(struct!.destinationTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_stream: {
      value: cdktf.stringToHclTerraform(struct!.sourceStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_mode: {
      value: cdktf.stringToHclTerraform(struct!.updateMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upsert_key: {
      value: cdktf.stringToHclTerraform(struct!.upsertKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationCobraConfigurationStreamMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationCobraConfigurationStreamMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTable = this._destinationTable;
    }
    if (this._sourceStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceStream = this._sourceStream;
    }
    if (this._updateMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateMode = this._updateMode;
    }
    if (this._upsertKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.upsertKey = this._upsertKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationCobraConfigurationStreamMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationTable = undefined;
      this._sourceStream = undefined;
      this._updateMode = undefined;
      this._upsertKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationTable = value.destinationTable;
      this._sourceStream = value.sourceStream;
      this._updateMode = value.updateMode;
      this._upsertKey = value.upsertKey;
    }
  }

  // destination_table - computed: false, optional: false, required: true
  private _destinationTable?: string; 
  public get destinationTable() {
    return this.getStringAttribute('destination_table');
  }
  public set destinationTable(value: string) {
    this._destinationTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTableInput() {
    return this._destinationTable;
  }

  // source_stream - computed: false, optional: false, required: true
  private _sourceStream?: string; 
  public get sourceStream() {
    return this.getStringAttribute('source_stream');
  }
  public set sourceStream(value: string) {
    this._sourceStream = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceStreamInput() {
    return this._sourceStream;
  }

  // update_mode - computed: false, optional: false, required: true
  private _updateMode?: string; 
  public get updateMode() {
    return this.getStringAttribute('update_mode');
  }
  public set updateMode(value: string) {
    this._updateMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateModeInput() {
    return this._updateMode;
  }

  // upsert_key - computed: false, optional: true, required: false
  private _upsertKey?: string; 
  public get upsertKey() {
    return this.getStringAttribute('upsert_key');
  }
  public set upsertKey(value: string) {
    this._upsertKey = value;
  }
  public resetUpsertKey() {
    this._upsertKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upsertKeyInput() {
    return this._upsertKey;
  }
}

export class DestinationCobraConfigurationStreamMappingsList extends cdktf.ComplexList {
  public internalValue? : DestinationCobraConfigurationStreamMappings[] | cdktf.IResolvable

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
  public get(index: number): DestinationCobraConfigurationStreamMappingsOutputReference {
    return new DestinationCobraConfigurationStreamMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationCobraConfiguration {
  /**
  * Enter your Salesforce developer application's <a href="https://developer.salesforce.com/forums/?id=9062I000000DLgbQAG">Client ID</a>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra#client_id DestinationCobra#client_id}
  */
  readonly clientId: string;
  /**
  * Enter your Salesforce developer application's <a href="https://developer.salesforce.com/forums/?id=9062I000000DLgbQAG">Client secret</a>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra#client_secret DestinationCobra#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Toggle if you're using a <a href="https://help.salesforce.com/s/articleView?id=sf.deploy_sandboxes_parent.htm&type=5">Salesforce Sandbox</a>. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra#is_sandbox DestinationCobra#is_sandbox}
  */
  readonly isSandbox?: boolean | cdktf.IResolvable;
  /**
  * If enabled, the records content will be printed as part of the log in case of failure which allows for easier debugging. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra#print_record_content_on_error DestinationCobra#print_record_content_on_error}
  */
  readonly printRecordContentOnError?: boolean | cdktf.IResolvable;
  /**
  * Enter your application's <a href="https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/oauth_refresh_token_flow.htm">Salesforce Refresh Token</a> used for Airbyte to access your Salesforce account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra#refresh_token DestinationCobra#refresh_token}
  */
  readonly refreshToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra#stream_mappings DestinationCobra#stream_mappings}
  */
  readonly streamMappings?: DestinationCobraConfigurationStreamMappings[] | cdktf.IResolvable;
  /**
  * The order in which the streams should be synced. Streams are synced in the order they are listed. Only those streams will be synced so make sure all the input streams are configured here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra#stream_order DestinationCobra#stream_order}
  */
  readonly streamOrder?: string[];
}

export function destinationCobraConfigurationToTerraform(struct?: DestinationCobraConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    is_sandbox: cdktf.booleanToTerraform(struct!.isSandbox),
    print_record_content_on_error: cdktf.booleanToTerraform(struct!.printRecordContentOnError),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
    stream_mappings: cdktf.listMapper(destinationCobraConfigurationStreamMappingsToTerraform, false)(struct!.streamMappings),
    stream_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streamOrder),
  }
}


export function destinationCobraConfigurationToHclTerraform(struct?: DestinationCobraConfiguration | cdktf.IResolvable): any {
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
    is_sandbox: {
      value: cdktf.booleanToHclTerraform(struct!.isSandbox),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    print_record_content_on_error: {
      value: cdktf.booleanToHclTerraform(struct!.printRecordContentOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_token: {
      value: cdktf.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_mappings: {
      value: cdktf.listMapperHcl(destinationCobraConfigurationStreamMappingsToHclTerraform, false)(struct!.streamMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationCobraConfigurationStreamMappingsList",
    },
    stream_order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streamOrder),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationCobraConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationCobraConfiguration | cdktf.IResolvable | undefined {
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
    if (this._isSandbox !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSandbox = this._isSandbox;
    }
    if (this._printRecordContentOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.printRecordContentOnError = this._printRecordContentOnError;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._streamMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamMappings = this._streamMappings?.internalValue;
    }
    if (this._streamOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamOrder = this._streamOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationCobraConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._isSandbox = undefined;
      this._printRecordContentOnError = undefined;
      this._refreshToken = undefined;
      this._streamMappings.internalValue = undefined;
      this._streamOrder = undefined;
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
      this._isSandbox = value.isSandbox;
      this._printRecordContentOnError = value.printRecordContentOnError;
      this._refreshToken = value.refreshToken;
      this._streamMappings.internalValue = value.streamMappings;
      this._streamOrder = value.streamOrder;
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

  // is_sandbox - computed: true, optional: true, required: false
  private _isSandbox?: boolean | cdktf.IResolvable; 
  public get isSandbox() {
    return this.getBooleanAttribute('is_sandbox');
  }
  public set isSandbox(value: boolean | cdktf.IResolvable) {
    this._isSandbox = value;
  }
  public resetIsSandbox() {
    this._isSandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSandboxInput() {
    return this._isSandbox;
  }

  // print_record_content_on_error - computed: true, optional: true, required: false
  private _printRecordContentOnError?: boolean | cdktf.IResolvable; 
  public get printRecordContentOnError() {
    return this.getBooleanAttribute('print_record_content_on_error');
  }
  public set printRecordContentOnError(value: boolean | cdktf.IResolvable) {
    this._printRecordContentOnError = value;
  }
  public resetPrintRecordContentOnError() {
    this._printRecordContentOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get printRecordContentOnErrorInput() {
    return this._printRecordContentOnError;
  }

  // refresh_token - computed: false, optional: false, required: true
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // stream_mappings - computed: false, optional: true, required: false
  private _streamMappings = new DestinationCobraConfigurationStreamMappingsList(this, "stream_mappings", false);
  public get streamMappings() {
    return this._streamMappings;
  }
  public putStreamMappings(value: DestinationCobraConfigurationStreamMappings[] | cdktf.IResolvable) {
    this._streamMappings.internalValue = value;
  }
  public resetStreamMappings() {
    this._streamMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamMappingsInput() {
    return this._streamMappings.internalValue;
  }

  // stream_order - computed: true, optional: true, required: false
  private _streamOrder?: string[]; 
  public get streamOrder() {
    return this.getListAttribute('stream_order');
  }
  public set streamOrder(value: string[]) {
    this._streamOrder = value;
  }
  public resetStreamOrder() {
    this._streamOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamOrderInput() {
    return this._streamOrder;
  }
}
export interface DestinationCobraResourceAllocationDefault {
}

export function destinationCobraResourceAllocationDefaultToTerraform(struct?: DestinationCobraResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationCobraResourceAllocationDefaultToHclTerraform(struct?: DestinationCobraResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationCobraResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationCobraResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationCobraResourceAllocationDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationCobraResourceAllocationJobSpecificResourceRequirements {
}

export function destinationCobraResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationCobraResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationCobraResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationCobraResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationCobraResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationCobraResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationCobraResourceAllocationJobSpecificResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationCobraResourceAllocationJobSpecific {
}

export function destinationCobraResourceAllocationJobSpecificToTerraform(struct?: DestinationCobraResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationCobraResourceAllocationJobSpecificToHclTerraform(struct?: DestinationCobraResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationCobraResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationCobraResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationCobraResourceAllocationJobSpecific | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new DestinationCobraResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationCobraResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): DestinationCobraResourceAllocationJobSpecificOutputReference {
    return new DestinationCobraResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationCobraResourceAllocation {
}

export function destinationCobraResourceAllocationToTerraform(struct?: DestinationCobraResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationCobraResourceAllocationToHclTerraform(struct?: DestinationCobraResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationCobraResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationCobraResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationCobraResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationCobraResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationCobraResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra airbyte_destination_cobra}
*/
export class DestinationCobra extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_cobra";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationCobra resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationCobra to import
  * @param importFromId The id of the existing DestinationCobra that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationCobra to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_cobra", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_cobra airbyte_destination_cobra} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationCobraConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationCobraConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_cobra',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._definitionId = config.definitionId;
    this._name = config.name;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new DestinationCobraConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationCobraConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // definition_id - computed: true, optional: true, required: false
  private _definitionId?: string; 
  public get definitionId() {
    return this.getStringAttribute('definition_id');
  }
  public set definitionId(value: string) {
    this._definitionId = value;
  }
  public resetDefinitionId() {
    this._definitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionIdInput() {
    return this._definitionId;
  }

  // destination_id - computed: true, optional: false, required: false
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
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

  // resource_allocation - computed: true, optional: false, required: false
  private _resourceAllocation = new DestinationCobraResourceAllocationOutputReference(this, "resource_allocation");
  public get resourceAllocation() {
    return this._resourceAllocation;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: destinationCobraConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationCobraConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationCobraConfiguration",
      },
      definition_id: {
        value: cdktf.stringToHclTerraform(this._definitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
