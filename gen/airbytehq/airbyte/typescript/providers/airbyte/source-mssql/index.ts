// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceMssqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#configuration SourceMssql#configuration}
  */
  readonly configuration: SourceMssqlConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#definition_id SourceMssql#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#name SourceMssql#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#secret_id SourceMssql#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#workspace_id SourceMssql#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceMssqlConfigurationReplicationMethodReadChangesUsingChangeDataCaptureCdc {
  /**
  * The amount of time an initial load is allowed to continue for before catching up on CDC logs. Default: 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#initial_load_timeout_hours SourceMssql#initial_load_timeout_hours}
  */
  readonly initialLoadTimeoutHours?: number;
  /**
  * The amount of time the connector will wait when it launches to determine if there is new data to sync or not. Defaults to 300 seconds. Valid range: 120 seconds to 3600 seconds. Read about <a href="https://docs.airbyte.com/integrations/sources/mysql/#change-data-capture-cdc">initial waiting time</a>. Default: 300
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#initial_waiting_seconds SourceMssql#initial_waiting_seconds}
  */
  readonly initialWaitingSeconds?: number;
  /**
  * Determines whether Airbyte should fail or re-sync data in case of an stale/invalid cursor value into the WAL. If 'Fail sync' is chosen, a user will have to manually reset the connection before being able to continue syncing data. If 'Re-sync data' is chosen, Airbyte will automatically trigger a refresh but could lead to higher cloud costs and data loss. Default: "Fail sync"; must be one of ["Fail sync", "Re-sync data"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#invalid_cdc_cursor_position_behavior SourceMssql#invalid_cdc_cursor_position_behavior}
  */
  readonly invalidCdcCursorPositionBehavior?: string;
  /**
  * The size of the internal queue. This may interfere with memory consumption and efficiency of the connector, please be careful. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#queue_size SourceMssql#queue_size}
  */
  readonly queueSize?: number;
}

export function sourceMssqlConfigurationReplicationMethodReadChangesUsingChangeDataCaptureCdcToTerraform(struct?: SourceMssqlConfigurationReplicationMethodReadChangesUsingChangeDataCaptureCdc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial_load_timeout_hours: cdktf.numberToTerraform(struct!.initialLoadTimeoutHours),
    initial_waiting_seconds: cdktf.numberToTerraform(struct!.initialWaitingSeconds),
    invalid_cdc_cursor_position_behavior: cdktf.stringToTerraform(struct!.invalidCdcCursorPositionBehavior),
    queue_size: cdktf.numberToTerraform(struct!.queueSize),
  }
}


export function sourceMssqlConfigurationReplicationMethodReadChangesUsingChangeDataCaptureCdcToHclTerraform(struct?: SourceMssqlConfigurationReplicationMethodReadChangesUsingChangeDataCaptureCdc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initial_load_timeout_hours: {
      value: cdktf.numberToHclTerraform(struct!.initialLoadTimeoutHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_waiting_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialWaitingSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_cdc_cursor_position_behavior: {
      value: cdktf.stringToHclTerraform(struct!.invalidCdcCursorPositionBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_size: {
      value: cdktf.numberToHclTerraform(struct!.queueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMssqlConfigurationReplicationMethodReadChangesUsingChangeDataCaptureCdcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMssqlConfigurationReplicationMethodReadChangesUsingChangeDataCaptureCdc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialLoadTimeoutHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialLoadTimeoutHours = this._initialLoadTimeoutHours;
    }
    if (this._initialWaitingSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialWaitingSeconds = this._initialWaitingSeconds;
    }
    if (this._invalidCdcCursorPositionBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidCdcCursorPositionBehavior = this._invalidCdcCursorPositionBehavior;
    }
    if (this._queueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueSize = this._queueSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMssqlConfigurationReplicationMethodReadChangesUsingChangeDataCaptureCdc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initialLoadTimeoutHours = undefined;
      this._initialWaitingSeconds = undefined;
      this._invalidCdcCursorPositionBehavior = undefined;
      this._queueSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initialLoadTimeoutHours = value.initialLoadTimeoutHours;
      this._initialWaitingSeconds = value.initialWaitingSeconds;
      this._invalidCdcCursorPositionBehavior = value.invalidCdcCursorPositionBehavior;
      this._queueSize = value.queueSize;
    }
  }

  // initial_load_timeout_hours - computed: true, optional: true, required: false
  private _initialLoadTimeoutHours?: number; 
  public get initialLoadTimeoutHours() {
    return this.getNumberAttribute('initial_load_timeout_hours');
  }
  public set initialLoadTimeoutHours(value: number) {
    this._initialLoadTimeoutHours = value;
  }
  public resetInitialLoadTimeoutHours() {
    this._initialLoadTimeoutHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialLoadTimeoutHoursInput() {
    return this._initialLoadTimeoutHours;
  }

  // initial_waiting_seconds - computed: true, optional: true, required: false
  private _initialWaitingSeconds?: number; 
  public get initialWaitingSeconds() {
    return this.getNumberAttribute('initial_waiting_seconds');
  }
  public set initialWaitingSeconds(value: number) {
    this._initialWaitingSeconds = value;
  }
  public resetInitialWaitingSeconds() {
    this._initialWaitingSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialWaitingSecondsInput() {
    return this._initialWaitingSeconds;
  }

  // invalid_cdc_cursor_position_behavior - computed: true, optional: true, required: false
  private _invalidCdcCursorPositionBehavior?: string; 
  public get invalidCdcCursorPositionBehavior() {
    return this.getStringAttribute('invalid_cdc_cursor_position_behavior');
  }
  public set invalidCdcCursorPositionBehavior(value: string) {
    this._invalidCdcCursorPositionBehavior = value;
  }
  public resetInvalidCdcCursorPositionBehavior() {
    this._invalidCdcCursorPositionBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidCdcCursorPositionBehaviorInput() {
    return this._invalidCdcCursorPositionBehavior;
  }

  // queue_size - computed: true, optional: true, required: false
  private _queueSize?: number; 
  public get queueSize() {
    return this.getNumberAttribute('queue_size');
  }
  public set queueSize(value: number) {
    this._queueSize = value;
  }
  public resetQueueSize() {
    this._queueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueSizeInput() {
    return this._queueSize;
  }
}
export interface SourceMssqlConfigurationReplicationMethodScanChangesWithUserDefinedCursor {
}

export function sourceMssqlConfigurationReplicationMethodScanChangesWithUserDefinedCursorToTerraform(struct?: SourceMssqlConfigurationReplicationMethodScanChangesWithUserDefinedCursor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMssqlConfigurationReplicationMethodScanChangesWithUserDefinedCursorToHclTerraform(struct?: SourceMssqlConfigurationReplicationMethodScanChangesWithUserDefinedCursor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMssqlConfigurationReplicationMethodScanChangesWithUserDefinedCursorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMssqlConfigurationReplicationMethodScanChangesWithUserDefinedCursor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMssqlConfigurationReplicationMethodScanChangesWithUserDefinedCursor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface SourceMssqlConfigurationReplicationMethod {
  /**
  * <i>Recommended</i> - Incrementally reads new inserts, updates, and deletes using the SQL Server's <a href="https://docs.airbyte.com/integrations/sources/mssql/#change-data-capture-cdc">change data capture feature</a>. This must be enabled on your database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#read_changes_using_change_data_capture_cdc SourceMssql#read_changes_using_change_data_capture_cdc}
  */
  readonly readChangesUsingChangeDataCaptureCdc?: SourceMssqlConfigurationReplicationMethodReadChangesUsingChangeDataCaptureCdc;
  /**
  * Incrementally detects new inserts and updates using the <a href="https://docs.airbyte.com/understanding-airbyte/connections/incremental-append/#user-defined-cursor">cursor column</a> chosen when configuring a connection (e.g. created_at, updated_at).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#scan_changes_with_user_defined_cursor SourceMssql#scan_changes_with_user_defined_cursor}
  */
  readonly scanChangesWithUserDefinedCursor?: SourceMssqlConfigurationReplicationMethodScanChangesWithUserDefinedCursor;
}

export function sourceMssqlConfigurationReplicationMethodToTerraform(struct?: SourceMssqlConfigurationReplicationMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_changes_using_change_data_capture_cdc: sourceMssqlConfigurationReplicationMethodReadChangesUsingChangeDataCaptureCdcToTerraform(struct!.readChangesUsingChangeDataCaptureCdc),
    scan_changes_with_user_defined_cursor: sourceMssqlConfigurationReplicationMethodScanChangesWithUserDefinedCursorToTerraform(struct!.scanChangesWithUserDefinedCursor),
  }
}


export function sourceMssqlConfigurationReplicationMethodToHclTerraform(struct?: SourceMssqlConfigurationReplicationMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_changes_using_change_data_capture_cdc: {
      value: sourceMssqlConfigurationReplicationMethodReadChangesUsingChangeDataCaptureCdcToHclTerraform(struct!.readChangesUsingChangeDataCaptureCdc),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMssqlConfigurationReplicationMethodReadChangesUsingChangeDataCaptureCdc",
    },
    scan_changes_with_user_defined_cursor: {
      value: sourceMssqlConfigurationReplicationMethodScanChangesWithUserDefinedCursorToHclTerraform(struct!.scanChangesWithUserDefinedCursor),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMssqlConfigurationReplicationMethodScanChangesWithUserDefinedCursor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMssqlConfigurationReplicationMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMssqlConfigurationReplicationMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readChangesUsingChangeDataCaptureCdc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readChangesUsingChangeDataCaptureCdc = this._readChangesUsingChangeDataCaptureCdc?.internalValue;
    }
    if (this._scanChangesWithUserDefinedCursor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanChangesWithUserDefinedCursor = this._scanChangesWithUserDefinedCursor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMssqlConfigurationReplicationMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readChangesUsingChangeDataCaptureCdc.internalValue = undefined;
      this._scanChangesWithUserDefinedCursor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readChangesUsingChangeDataCaptureCdc.internalValue = value.readChangesUsingChangeDataCaptureCdc;
      this._scanChangesWithUserDefinedCursor.internalValue = value.scanChangesWithUserDefinedCursor;
    }
  }

  // read_changes_using_change_data_capture_cdc - computed: false, optional: true, required: false
  private _readChangesUsingChangeDataCaptureCdc = new SourceMssqlConfigurationReplicationMethodReadChangesUsingChangeDataCaptureCdcOutputReference(this, "read_changes_using_change_data_capture_cdc");
  public get readChangesUsingChangeDataCaptureCdc() {
    return this._readChangesUsingChangeDataCaptureCdc;
  }
  public putReadChangesUsingChangeDataCaptureCdc(value: SourceMssqlConfigurationReplicationMethodReadChangesUsingChangeDataCaptureCdc) {
    this._readChangesUsingChangeDataCaptureCdc.internalValue = value;
  }
  public resetReadChangesUsingChangeDataCaptureCdc() {
    this._readChangesUsingChangeDataCaptureCdc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readChangesUsingChangeDataCaptureCdcInput() {
    return this._readChangesUsingChangeDataCaptureCdc.internalValue;
  }

  // scan_changes_with_user_defined_cursor - computed: false, optional: true, required: false
  private _scanChangesWithUserDefinedCursor = new SourceMssqlConfigurationReplicationMethodScanChangesWithUserDefinedCursorOutputReference(this, "scan_changes_with_user_defined_cursor");
  public get scanChangesWithUserDefinedCursor() {
    return this._scanChangesWithUserDefinedCursor;
  }
  public putScanChangesWithUserDefinedCursor(value: SourceMssqlConfigurationReplicationMethodScanChangesWithUserDefinedCursor) {
    this._scanChangesWithUserDefinedCursor.internalValue = value;
  }
  public resetScanChangesWithUserDefinedCursor() {
    this._scanChangesWithUserDefinedCursor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanChangesWithUserDefinedCursorInput() {
    return this._scanChangesWithUserDefinedCursor.internalValue;
  }
}
export interface SourceMssqlConfigurationSslMethodEncryptedTrustServerCertificate {
}

export function sourceMssqlConfigurationSslMethodEncryptedTrustServerCertificateToTerraform(struct?: SourceMssqlConfigurationSslMethodEncryptedTrustServerCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMssqlConfigurationSslMethodEncryptedTrustServerCertificateToHclTerraform(struct?: SourceMssqlConfigurationSslMethodEncryptedTrustServerCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMssqlConfigurationSslMethodEncryptedTrustServerCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMssqlConfigurationSslMethodEncryptedTrustServerCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMssqlConfigurationSslMethodEncryptedTrustServerCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface SourceMssqlConfigurationSslMethodEncryptedVerifyCertificate {
  /**
  * certificate of the server, or of the CA that signed the server certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#certificate SourceMssql#certificate}
  */
  readonly certificate?: string;
  /**
  * Specifies the host name of the server. The value of this property must match the subject property of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#host_name_in_certificate SourceMssql#host_name_in_certificate}
  */
  readonly hostNameInCertificate?: string;
}

export function sourceMssqlConfigurationSslMethodEncryptedVerifyCertificateToTerraform(struct?: SourceMssqlConfigurationSslMethodEncryptedVerifyCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    host_name_in_certificate: cdktf.stringToTerraform(struct!.hostNameInCertificate),
  }
}


export function sourceMssqlConfigurationSslMethodEncryptedVerifyCertificateToHclTerraform(struct?: SourceMssqlConfigurationSslMethodEncryptedVerifyCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name_in_certificate: {
      value: cdktf.stringToHclTerraform(struct!.hostNameInCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMssqlConfigurationSslMethodEncryptedVerifyCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMssqlConfigurationSslMethodEncryptedVerifyCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._hostNameInCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNameInCertificate = this._hostNameInCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMssqlConfigurationSslMethodEncryptedVerifyCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._hostNameInCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._hostNameInCertificate = value.hostNameInCertificate;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // host_name_in_certificate - computed: false, optional: true, required: false
  private _hostNameInCertificate?: string; 
  public get hostNameInCertificate() {
    return this.getStringAttribute('host_name_in_certificate');
  }
  public set hostNameInCertificate(value: string) {
    this._hostNameInCertificate = value;
  }
  public resetHostNameInCertificate() {
    this._hostNameInCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInCertificateInput() {
    return this._hostNameInCertificate;
  }
}
export interface SourceMssqlConfigurationSslMethodUnencrypted {
}

export function sourceMssqlConfigurationSslMethodUnencryptedToTerraform(struct?: SourceMssqlConfigurationSslMethodUnencrypted | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMssqlConfigurationSslMethodUnencryptedToHclTerraform(struct?: SourceMssqlConfigurationSslMethodUnencrypted | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMssqlConfigurationSslMethodUnencryptedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMssqlConfigurationSslMethodUnencrypted | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMssqlConfigurationSslMethodUnencrypted | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface SourceMssqlConfigurationSslMethod {
  /**
  * Use the certificate provided by the server without verification. (For testing purposes only!)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#encrypted_trust_server_certificate SourceMssql#encrypted_trust_server_certificate}
  */
  readonly encryptedTrustServerCertificate?: SourceMssqlConfigurationSslMethodEncryptedTrustServerCertificate;
  /**
  * Verify and use the certificate provided by the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#encrypted_verify_certificate SourceMssql#encrypted_verify_certificate}
  */
  readonly encryptedVerifyCertificate?: SourceMssqlConfigurationSslMethodEncryptedVerifyCertificate;
  /**
  * Data transfer will not be encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#unencrypted SourceMssql#unencrypted}
  */
  readonly unencrypted?: SourceMssqlConfigurationSslMethodUnencrypted;
}

export function sourceMssqlConfigurationSslMethodToTerraform(struct?: SourceMssqlConfigurationSslMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_trust_server_certificate: sourceMssqlConfigurationSslMethodEncryptedTrustServerCertificateToTerraform(struct!.encryptedTrustServerCertificate),
    encrypted_verify_certificate: sourceMssqlConfigurationSslMethodEncryptedVerifyCertificateToTerraform(struct!.encryptedVerifyCertificate),
    unencrypted: sourceMssqlConfigurationSslMethodUnencryptedToTerraform(struct!.unencrypted),
  }
}


export function sourceMssqlConfigurationSslMethodToHclTerraform(struct?: SourceMssqlConfigurationSslMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_trust_server_certificate: {
      value: sourceMssqlConfigurationSslMethodEncryptedTrustServerCertificateToHclTerraform(struct!.encryptedTrustServerCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMssqlConfigurationSslMethodEncryptedTrustServerCertificate",
    },
    encrypted_verify_certificate: {
      value: sourceMssqlConfigurationSslMethodEncryptedVerifyCertificateToHclTerraform(struct!.encryptedVerifyCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMssqlConfigurationSslMethodEncryptedVerifyCertificate",
    },
    unencrypted: {
      value: sourceMssqlConfigurationSslMethodUnencryptedToHclTerraform(struct!.unencrypted),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMssqlConfigurationSslMethodUnencrypted",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMssqlConfigurationSslMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMssqlConfigurationSslMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedTrustServerCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedTrustServerCertificate = this._encryptedTrustServerCertificate?.internalValue;
    }
    if (this._encryptedVerifyCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedVerifyCertificate = this._encryptedVerifyCertificate?.internalValue;
    }
    if (this._unencrypted?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unencrypted = this._unencrypted?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMssqlConfigurationSslMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptedTrustServerCertificate.internalValue = undefined;
      this._encryptedVerifyCertificate.internalValue = undefined;
      this._unencrypted.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptedTrustServerCertificate.internalValue = value.encryptedTrustServerCertificate;
      this._encryptedVerifyCertificate.internalValue = value.encryptedVerifyCertificate;
      this._unencrypted.internalValue = value.unencrypted;
    }
  }

  // encrypted_trust_server_certificate - computed: false, optional: true, required: false
  private _encryptedTrustServerCertificate = new SourceMssqlConfigurationSslMethodEncryptedTrustServerCertificateOutputReference(this, "encrypted_trust_server_certificate");
  public get encryptedTrustServerCertificate() {
    return this._encryptedTrustServerCertificate;
  }
  public putEncryptedTrustServerCertificate(value: SourceMssqlConfigurationSslMethodEncryptedTrustServerCertificate) {
    this._encryptedTrustServerCertificate.internalValue = value;
  }
  public resetEncryptedTrustServerCertificate() {
    this._encryptedTrustServerCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedTrustServerCertificateInput() {
    return this._encryptedTrustServerCertificate.internalValue;
  }

  // encrypted_verify_certificate - computed: false, optional: true, required: false
  private _encryptedVerifyCertificate = new SourceMssqlConfigurationSslMethodEncryptedVerifyCertificateOutputReference(this, "encrypted_verify_certificate");
  public get encryptedVerifyCertificate() {
    return this._encryptedVerifyCertificate;
  }
  public putEncryptedVerifyCertificate(value: SourceMssqlConfigurationSslMethodEncryptedVerifyCertificate) {
    this._encryptedVerifyCertificate.internalValue = value;
  }
  public resetEncryptedVerifyCertificate() {
    this._encryptedVerifyCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedVerifyCertificateInput() {
    return this._encryptedVerifyCertificate.internalValue;
  }

  // unencrypted - computed: false, optional: true, required: false
  private _unencrypted = new SourceMssqlConfigurationSslMethodUnencryptedOutputReference(this, "unencrypted");
  public get unencrypted() {
    return this._unencrypted;
  }
  public putUnencrypted(value: SourceMssqlConfigurationSslMethodUnencrypted) {
    this._unencrypted.internalValue = value;
  }
  public resetUnencrypted() {
    this._unencrypted.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unencryptedInput() {
    return this._unencrypted.internalValue;
  }
}
export interface SourceMssqlConfigurationTunnelMethodNoTunnel {
}

export function sourceMssqlConfigurationTunnelMethodNoTunnelToTerraform(struct?: SourceMssqlConfigurationTunnelMethodNoTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMssqlConfigurationTunnelMethodNoTunnelToHclTerraform(struct?: SourceMssqlConfigurationTunnelMethodNoTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMssqlConfigurationTunnelMethodNoTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMssqlConfigurationTunnelMethodNoTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMssqlConfigurationTunnelMethodNoTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface SourceMssqlConfigurationTunnelMethodPasswordAuthentication {
  /**
  * Hostname of the jump server host that allows inbound ssh tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#tunnel_host SourceMssql#tunnel_host}
  */
  readonly tunnelHost: string;
  /**
  * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#tunnel_port SourceMssql#tunnel_port}
  */
  readonly tunnelPort?: number;
  /**
  * OS-level username for logging into the jump server host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#tunnel_user SourceMssql#tunnel_user}
  */
  readonly tunnelUser: string;
  /**
  * OS-level password for logging into the jump server host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#tunnel_user_password SourceMssql#tunnel_user_password}
  */
  readonly tunnelUserPassword: string;
}

export function sourceMssqlConfigurationTunnelMethodPasswordAuthenticationToTerraform(struct?: SourceMssqlConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tunnel_host: cdktf.stringToTerraform(struct!.tunnelHost),
    tunnel_port: cdktf.numberToTerraform(struct!.tunnelPort),
    tunnel_user: cdktf.stringToTerraform(struct!.tunnelUser),
    tunnel_user_password: cdktf.stringToTerraform(struct!.tunnelUserPassword),
  }
}


export function sourceMssqlConfigurationTunnelMethodPasswordAuthenticationToHclTerraform(struct?: SourceMssqlConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tunnel_host: {
      value: cdktf.stringToHclTerraform(struct!.tunnelHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_port: {
      value: cdktf.numberToHclTerraform(struct!.tunnelPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_user: {
      value: cdktf.stringToHclTerraform(struct!.tunnelUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_user_password: {
      value: cdktf.stringToHclTerraform(struct!.tunnelUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMssqlConfigurationTunnelMethodPasswordAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMssqlConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tunnelHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelHost = this._tunnelHost;
    }
    if (this._tunnelPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelPort = this._tunnelPort;
    }
    if (this._tunnelUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelUser = this._tunnelUser;
    }
    if (this._tunnelUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelUserPassword = this._tunnelUserPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMssqlConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tunnelHost = undefined;
      this._tunnelPort = undefined;
      this._tunnelUser = undefined;
      this._tunnelUserPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tunnelHost = value.tunnelHost;
      this._tunnelPort = value.tunnelPort;
      this._tunnelUser = value.tunnelUser;
      this._tunnelUserPassword = value.tunnelUserPassword;
    }
  }

  // tunnel_host - computed: false, optional: false, required: true
  private _tunnelHost?: string; 
  public get tunnelHost() {
    return this.getStringAttribute('tunnel_host');
  }
  public set tunnelHost(value: string) {
    this._tunnelHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelHostInput() {
    return this._tunnelHost;
  }

  // tunnel_port - computed: true, optional: true, required: false
  private _tunnelPort?: number; 
  public get tunnelPort() {
    return this.getNumberAttribute('tunnel_port');
  }
  public set tunnelPort(value: number) {
    this._tunnelPort = value;
  }
  public resetTunnelPort() {
    this._tunnelPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPortInput() {
    return this._tunnelPort;
  }

  // tunnel_user - computed: false, optional: false, required: true
  private _tunnelUser?: string; 
  public get tunnelUser() {
    return this.getStringAttribute('tunnel_user');
  }
  public set tunnelUser(value: string) {
    this._tunnelUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUserInput() {
    return this._tunnelUser;
  }

  // tunnel_user_password - computed: false, optional: false, required: true
  private _tunnelUserPassword?: string; 
  public get tunnelUserPassword() {
    return this.getStringAttribute('tunnel_user_password');
  }
  public set tunnelUserPassword(value: string) {
    this._tunnelUserPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUserPasswordInput() {
    return this._tunnelUserPassword;
  }
}
export interface SourceMssqlConfigurationTunnelMethodSshKeyAuthentication {
  /**
  * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#ssh_key SourceMssql#ssh_key}
  */
  readonly sshKey: string;
  /**
  * Hostname of the jump server host that allows inbound ssh tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#tunnel_host SourceMssql#tunnel_host}
  */
  readonly tunnelHost: string;
  /**
  * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#tunnel_port SourceMssql#tunnel_port}
  */
  readonly tunnelPort?: number;
  /**
  * OS-level username for logging into the jump server host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#tunnel_user SourceMssql#tunnel_user}
  */
  readonly tunnelUser: string;
}

export function sourceMssqlConfigurationTunnelMethodSshKeyAuthenticationToTerraform(struct?: SourceMssqlConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    tunnel_host: cdktf.stringToTerraform(struct!.tunnelHost),
    tunnel_port: cdktf.numberToTerraform(struct!.tunnelPort),
    tunnel_user: cdktf.stringToTerraform(struct!.tunnelUser),
  }
}


export function sourceMssqlConfigurationTunnelMethodSshKeyAuthenticationToHclTerraform(struct?: SourceMssqlConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_host: {
      value: cdktf.stringToHclTerraform(struct!.tunnelHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_port: {
      value: cdktf.numberToHclTerraform(struct!.tunnelPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_user: {
      value: cdktf.stringToHclTerraform(struct!.tunnelUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMssqlConfigurationTunnelMethodSshKeyAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMssqlConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._tunnelHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelHost = this._tunnelHost;
    }
    if (this._tunnelPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelPort = this._tunnelPort;
    }
    if (this._tunnelUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelUser = this._tunnelUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMssqlConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sshKey = undefined;
      this._tunnelHost = undefined;
      this._tunnelPort = undefined;
      this._tunnelUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sshKey = value.sshKey;
      this._tunnelHost = value.tunnelHost;
      this._tunnelPort = value.tunnelPort;
      this._tunnelUser = value.tunnelUser;
    }
  }

  // ssh_key - computed: false, optional: false, required: true
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // tunnel_host - computed: false, optional: false, required: true
  private _tunnelHost?: string; 
  public get tunnelHost() {
    return this.getStringAttribute('tunnel_host');
  }
  public set tunnelHost(value: string) {
    this._tunnelHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelHostInput() {
    return this._tunnelHost;
  }

  // tunnel_port - computed: true, optional: true, required: false
  private _tunnelPort?: number; 
  public get tunnelPort() {
    return this.getNumberAttribute('tunnel_port');
  }
  public set tunnelPort(value: number) {
    this._tunnelPort = value;
  }
  public resetTunnelPort() {
    this._tunnelPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPortInput() {
    return this._tunnelPort;
  }

  // tunnel_user - computed: false, optional: false, required: true
  private _tunnelUser?: string; 
  public get tunnelUser() {
    return this.getStringAttribute('tunnel_user');
  }
  public set tunnelUser(value: string) {
    this._tunnelUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUserInput() {
    return this._tunnelUser;
  }
}
export interface SourceMssqlConfigurationTunnelMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#no_tunnel SourceMssql#no_tunnel}
  */
  readonly noTunnel?: SourceMssqlConfigurationTunnelMethodNoTunnel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#password_authentication SourceMssql#password_authentication}
  */
  readonly passwordAuthentication?: SourceMssqlConfigurationTunnelMethodPasswordAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#ssh_key_authentication SourceMssql#ssh_key_authentication}
  */
  readonly sshKeyAuthentication?: SourceMssqlConfigurationTunnelMethodSshKeyAuthentication;
}

export function sourceMssqlConfigurationTunnelMethodToTerraform(struct?: SourceMssqlConfigurationTunnelMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_tunnel: sourceMssqlConfigurationTunnelMethodNoTunnelToTerraform(struct!.noTunnel),
    password_authentication: sourceMssqlConfigurationTunnelMethodPasswordAuthenticationToTerraform(struct!.passwordAuthentication),
    ssh_key_authentication: sourceMssqlConfigurationTunnelMethodSshKeyAuthenticationToTerraform(struct!.sshKeyAuthentication),
  }
}


export function sourceMssqlConfigurationTunnelMethodToHclTerraform(struct?: SourceMssqlConfigurationTunnelMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_tunnel: {
      value: sourceMssqlConfigurationTunnelMethodNoTunnelToHclTerraform(struct!.noTunnel),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMssqlConfigurationTunnelMethodNoTunnel",
    },
    password_authentication: {
      value: sourceMssqlConfigurationTunnelMethodPasswordAuthenticationToHclTerraform(struct!.passwordAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMssqlConfigurationTunnelMethodPasswordAuthentication",
    },
    ssh_key_authentication: {
      value: sourceMssqlConfigurationTunnelMethodSshKeyAuthenticationToHclTerraform(struct!.sshKeyAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMssqlConfigurationTunnelMethodSshKeyAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMssqlConfigurationTunnelMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMssqlConfigurationTunnelMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noTunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTunnel = this._noTunnel?.internalValue;
    }
    if (this._passwordAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordAuthentication = this._passwordAuthentication?.internalValue;
    }
    if (this._sshKeyAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyAuthentication = this._sshKeyAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMssqlConfigurationTunnelMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noTunnel.internalValue = undefined;
      this._passwordAuthentication.internalValue = undefined;
      this._sshKeyAuthentication.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noTunnel.internalValue = value.noTunnel;
      this._passwordAuthentication.internalValue = value.passwordAuthentication;
      this._sshKeyAuthentication.internalValue = value.sshKeyAuthentication;
    }
  }

  // no_tunnel - computed: false, optional: true, required: false
  private _noTunnel = new SourceMssqlConfigurationTunnelMethodNoTunnelOutputReference(this, "no_tunnel");
  public get noTunnel() {
    return this._noTunnel;
  }
  public putNoTunnel(value: SourceMssqlConfigurationTunnelMethodNoTunnel) {
    this._noTunnel.internalValue = value;
  }
  public resetNoTunnel() {
    this._noTunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTunnelInput() {
    return this._noTunnel.internalValue;
  }

  // password_authentication - computed: false, optional: true, required: false
  private _passwordAuthentication = new SourceMssqlConfigurationTunnelMethodPasswordAuthenticationOutputReference(this, "password_authentication");
  public get passwordAuthentication() {
    return this._passwordAuthentication;
  }
  public putPasswordAuthentication(value: SourceMssqlConfigurationTunnelMethodPasswordAuthentication) {
    this._passwordAuthentication.internalValue = value;
  }
  public resetPasswordAuthentication() {
    this._passwordAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAuthenticationInput() {
    return this._passwordAuthentication.internalValue;
  }

  // ssh_key_authentication - computed: false, optional: true, required: false
  private _sshKeyAuthentication = new SourceMssqlConfigurationTunnelMethodSshKeyAuthenticationOutputReference(this, "ssh_key_authentication");
  public get sshKeyAuthentication() {
    return this._sshKeyAuthentication;
  }
  public putSshKeyAuthentication(value: SourceMssqlConfigurationTunnelMethodSshKeyAuthentication) {
    this._sshKeyAuthentication.internalValue = value;
  }
  public resetSshKeyAuthentication() {
    this._sshKeyAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyAuthenticationInput() {
    return this._sshKeyAuthentication.internalValue;
  }
}
export interface SourceMssqlConfiguration {
  /**
  * The name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#database SourceMssql#database}
  */
  readonly database: string;
  /**
  * The hostname of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#host SourceMssql#host}
  */
  readonly host: string;
  /**
  * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#jdbc_url_params SourceMssql#jdbc_url_params}
  */
  readonly jdbcUrlParams?: string;
  /**
  * The password associated with the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#password SourceMssql#password}
  */
  readonly password: string;
  /**
  * The port of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#port SourceMssql#port}
  */
  readonly port: number;
  /**
  * Configures how data is extracted from the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#replication_method SourceMssql#replication_method}
  */
  readonly replicationMethod?: SourceMssqlConfigurationReplicationMethod;
  /**
  * The list of schemas to sync from. Defaults to user. Case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#schemas SourceMssql#schemas}
  */
  readonly schemas?: string[];
  /**
  * The encryption method which is used when communicating with the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#ssl_method SourceMssql#ssl_method}
  */
  readonly sslMethod?: SourceMssqlConfigurationSslMethod;
  /**
  * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#tunnel_method SourceMssql#tunnel_method}
  */
  readonly tunnelMethod?: SourceMssqlConfigurationTunnelMethod;
  /**
  * The username which is used to access the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#username SourceMssql#username}
  */
  readonly username: string;
}

export function sourceMssqlConfigurationToTerraform(struct?: SourceMssqlConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    jdbc_url_params: cdktf.stringToTerraform(struct!.jdbcUrlParams),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    replication_method: sourceMssqlConfigurationReplicationMethodToTerraform(struct!.replicationMethod),
    schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.schemas),
    ssl_method: sourceMssqlConfigurationSslMethodToTerraform(struct!.sslMethod),
    tunnel_method: sourceMssqlConfigurationTunnelMethodToTerraform(struct!.tunnelMethod),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function sourceMssqlConfigurationToHclTerraform(struct?: SourceMssqlConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
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
    jdbc_url_params: {
      value: cdktf.stringToHclTerraform(struct!.jdbcUrlParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
    replication_method: {
      value: sourceMssqlConfigurationReplicationMethodToHclTerraform(struct!.replicationMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMssqlConfigurationReplicationMethod",
    },
    schemas: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.schemas),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssl_method: {
      value: sourceMssqlConfigurationSslMethodToHclTerraform(struct!.sslMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMssqlConfigurationSslMethod",
    },
    tunnel_method: {
      value: sourceMssqlConfigurationTunnelMethodToHclTerraform(struct!.tunnelMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMssqlConfigurationTunnelMethod",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMssqlConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMssqlConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._jdbcUrlParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.jdbcUrlParams = this._jdbcUrlParams;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._replicationMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationMethod = this._replicationMethod?.internalValue;
    }
    if (this._schemas !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas;
    }
    if (this._sslMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMethod = this._sslMethod?.internalValue;
    }
    if (this._tunnelMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelMethod = this._tunnelMethod?.internalValue;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMssqlConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._jdbcUrlParams = undefined;
      this._password = undefined;
      this._port = undefined;
      this._replicationMethod.internalValue = undefined;
      this._schemas = undefined;
      this._sslMethod.internalValue = undefined;
      this._tunnelMethod.internalValue = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._jdbcUrlParams = value.jdbcUrlParams;
      this._password = value.password;
      this._port = value.port;
      this._replicationMethod.internalValue = value.replicationMethod;
      this._schemas = value.schemas;
      this._sslMethod.internalValue = value.sslMethod;
      this._tunnelMethod.internalValue = value.tunnelMethod;
      this._username = value.username;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // jdbc_url_params - computed: false, optional: true, required: false
  private _jdbcUrlParams?: string; 
  public get jdbcUrlParams() {
    return this.getStringAttribute('jdbc_url_params');
  }
  public set jdbcUrlParams(value: string) {
    this._jdbcUrlParams = value;
  }
  public resetJdbcUrlParams() {
    this._jdbcUrlParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcUrlParamsInput() {
    return this._jdbcUrlParams;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // replication_method - computed: false, optional: true, required: false
  private _replicationMethod = new SourceMssqlConfigurationReplicationMethodOutputReference(this, "replication_method");
  public get replicationMethod() {
    return this._replicationMethod;
  }
  public putReplicationMethod(value: SourceMssqlConfigurationReplicationMethod) {
    this._replicationMethod.internalValue = value;
  }
  public resetReplicationMethod() {
    this._replicationMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationMethodInput() {
    return this._replicationMethod.internalValue;
  }

  // schemas - computed: false, optional: true, required: false
  private _schemas?: string[]; 
  public get schemas() {
    return this.getListAttribute('schemas');
  }
  public set schemas(value: string[]) {
    this._schemas = value;
  }
  public resetSchemas() {
    this._schemas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas;
  }

  // ssl_method - computed: false, optional: true, required: false
  private _sslMethod = new SourceMssqlConfigurationSslMethodOutputReference(this, "ssl_method");
  public get sslMethod() {
    return this._sslMethod;
  }
  public putSslMethod(value: SourceMssqlConfigurationSslMethod) {
    this._sslMethod.internalValue = value;
  }
  public resetSslMethod() {
    this._sslMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMethodInput() {
    return this._sslMethod.internalValue;
  }

  // tunnel_method - computed: false, optional: true, required: false
  private _tunnelMethod = new SourceMssqlConfigurationTunnelMethodOutputReference(this, "tunnel_method");
  public get tunnelMethod() {
    return this._tunnelMethod;
  }
  public putTunnelMethod(value: SourceMssqlConfigurationTunnelMethod) {
    this._tunnelMethod.internalValue = value;
  }
  public resetTunnelMethod() {
    this._tunnelMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMethodInput() {
    return this._tunnelMethod.internalValue;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface SourceMssqlResourceAllocationDefault {
}

export function sourceMssqlResourceAllocationDefaultToTerraform(struct?: SourceMssqlResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMssqlResourceAllocationDefaultToHclTerraform(struct?: SourceMssqlResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMssqlResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMssqlResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMssqlResourceAllocationDefault | undefined) {
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
export interface SourceMssqlResourceAllocationJobSpecificResourceRequirements {
}

export function sourceMssqlResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceMssqlResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMssqlResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceMssqlResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMssqlResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMssqlResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMssqlResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface SourceMssqlResourceAllocationJobSpecific {
}

export function sourceMssqlResourceAllocationJobSpecificToTerraform(struct?: SourceMssqlResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMssqlResourceAllocationJobSpecificToHclTerraform(struct?: SourceMssqlResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMssqlResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceMssqlResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMssqlResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new SourceMssqlResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceMssqlResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceMssqlResourceAllocationJobSpecificOutputReference {
    return new SourceMssqlResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceMssqlResourceAllocation {
}

export function sourceMssqlResourceAllocationToTerraform(struct?: SourceMssqlResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMssqlResourceAllocationToHclTerraform(struct?: SourceMssqlResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMssqlResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMssqlResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMssqlResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceMssqlResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceMssqlResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql airbyte_source_mssql}
*/
export class SourceMssql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_mssql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceMssql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceMssql to import
  * @param importFromId The id of the existing SourceMssql that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceMssql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_mssql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mssql airbyte_source_mssql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceMssqlConfig
  */
  public constructor(scope: Construct, id: string, config: SourceMssqlConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_mssql',
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
    this._secretId = config.secretId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new SourceMssqlConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceMssqlConfiguration) {
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
  private _resourceAllocation = new SourceMssqlResourceAllocationOutputReference(this, "resource_allocation");
  public get resourceAllocation() {
    return this._resourceAllocation;
  }

  // secret_id - computed: false, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
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
      configuration: sourceMssqlConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceMssqlConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceMssqlConfiguration",
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
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
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
