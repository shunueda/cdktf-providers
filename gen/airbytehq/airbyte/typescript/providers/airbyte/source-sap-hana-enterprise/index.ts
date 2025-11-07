// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceSapHanaEnterpriseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#configuration SourceSapHanaEnterprise#configuration}
  */
  readonly configuration: SourceSapHanaEnterpriseConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#definition_id SourceSapHanaEnterprise#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#name SourceSapHanaEnterprise#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#secret_id SourceSapHanaEnterprise#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#workspace_id SourceSapHanaEnterprise#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceSapHanaEnterpriseConfigurationCursorReadChangesUsingChangeDataCaptureCdc {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#additional_properties SourceSapHanaEnterprise#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "cdc"; must be "cdc"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#cursor_method SourceSapHanaEnterprise#cursor_method}
  */
  readonly cursorMethod?: string;
  /**
  * The amount of time an initial load is allowed to continue for before catching up on CDC events. Default: 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#initial_load_timeout_hours SourceSapHanaEnterprise#initial_load_timeout_hours}
  */
  readonly initialLoadTimeoutHours?: number;
  /**
  * Determines whether Airbyte should fail or re-sync data in case of an stale/invalid cursor value in the mined logs. If 'Fail sync' is chosen, a user will have to manually reset the connection before being able to continue syncing data. If 'Re-sync data' is chosen, Airbyte will automatically trigger a refresh but could lead to higher cloud costs and data loss. Default: "Fail sync"; must be one of ["Fail sync", "Re-sync data"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#invalid_cdc_cursor_position_behavior SourceSapHanaEnterprise#invalid_cdc_cursor_position_behavior}
  */
  readonly invalidCdcCursorPositionBehavior?: string;
}

export function sourceSapHanaEnterpriseConfigurationCursorReadChangesUsingChangeDataCaptureCdcToTerraform(struct?: SourceSapHanaEnterpriseConfigurationCursorReadChangesUsingChangeDataCaptureCdc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    cursor_method: cdktf.stringToTerraform(struct!.cursorMethod),
    initial_load_timeout_hours: cdktf.numberToTerraform(struct!.initialLoadTimeoutHours),
    invalid_cdc_cursor_position_behavior: cdktf.stringToTerraform(struct!.invalidCdcCursorPositionBehavior),
  }
}


export function sourceSapHanaEnterpriseConfigurationCursorReadChangesUsingChangeDataCaptureCdcToHclTerraform(struct?: SourceSapHanaEnterpriseConfigurationCursorReadChangesUsingChangeDataCaptureCdc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cursor_method: {
      value: cdktf.stringToHclTerraform(struct!.cursorMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_load_timeout_hours: {
      value: cdktf.numberToHclTerraform(struct!.initialLoadTimeoutHours),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSapHanaEnterpriseConfigurationCursorReadChangesUsingChangeDataCaptureCdcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSapHanaEnterpriseConfigurationCursorReadChangesUsingChangeDataCaptureCdc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._cursorMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cursorMethod = this._cursorMethod;
    }
    if (this._initialLoadTimeoutHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialLoadTimeoutHours = this._initialLoadTimeoutHours;
    }
    if (this._invalidCdcCursorPositionBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidCdcCursorPositionBehavior = this._invalidCdcCursorPositionBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSapHanaEnterpriseConfigurationCursorReadChangesUsingChangeDataCaptureCdc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._cursorMethod = undefined;
      this._initialLoadTimeoutHours = undefined;
      this._invalidCdcCursorPositionBehavior = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._cursorMethod = value.cursorMethod;
      this._initialLoadTimeoutHours = value.initialLoadTimeoutHours;
      this._invalidCdcCursorPositionBehavior = value.invalidCdcCursorPositionBehavior;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // cursor_method - computed: true, optional: true, required: false
  private _cursorMethod?: string; 
  public get cursorMethod() {
    return this.getStringAttribute('cursor_method');
  }
  public set cursorMethod(value: string) {
    this._cursorMethod = value;
  }
  public resetCursorMethod() {
    this._cursorMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorMethodInput() {
    return this._cursorMethod;
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
}
export interface SourceSapHanaEnterpriseConfigurationCursorScanChangesWithUserDefinedCursor {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#additional_properties SourceSapHanaEnterprise#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "user_defined"; must be "user_defined"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#cursor_method SourceSapHanaEnterprise#cursor_method}
  */
  readonly cursorMethod?: string;
}

export function sourceSapHanaEnterpriseConfigurationCursorScanChangesWithUserDefinedCursorToTerraform(struct?: SourceSapHanaEnterpriseConfigurationCursorScanChangesWithUserDefinedCursor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    cursor_method: cdktf.stringToTerraform(struct!.cursorMethod),
  }
}


export function sourceSapHanaEnterpriseConfigurationCursorScanChangesWithUserDefinedCursorToHclTerraform(struct?: SourceSapHanaEnterpriseConfigurationCursorScanChangesWithUserDefinedCursor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cursor_method: {
      value: cdktf.stringToHclTerraform(struct!.cursorMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSapHanaEnterpriseConfigurationCursorScanChangesWithUserDefinedCursorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSapHanaEnterpriseConfigurationCursorScanChangesWithUserDefinedCursor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._cursorMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cursorMethod = this._cursorMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSapHanaEnterpriseConfigurationCursorScanChangesWithUserDefinedCursor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._cursorMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._cursorMethod = value.cursorMethod;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // cursor_method - computed: true, optional: true, required: false
  private _cursorMethod?: string; 
  public get cursorMethod() {
    return this.getStringAttribute('cursor_method');
  }
  public set cursorMethod(value: string) {
    this._cursorMethod = value;
  }
  public resetCursorMethod() {
    this._cursorMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorMethodInput() {
    return this._cursorMethod;
  }
}
export interface SourceSapHanaEnterpriseConfigurationCursor {
  /**
  * <i>Recommended</i> - Incrementally reads new inserts, updates, and deletes using change data capture feature. This must be enabled on your database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#read_changes_using_change_data_capture_cdc SourceSapHanaEnterprise#read_changes_using_change_data_capture_cdc}
  */
  readonly readChangesUsingChangeDataCaptureCdc?: SourceSapHanaEnterpriseConfigurationCursorReadChangesUsingChangeDataCaptureCdc;
  /**
  * Incrementally detects new inserts and updates using the <a href="https://docs.airbyte.com/understanding-airbyte/connections/incremental-append/#user-defined-cursor">cursor column</a> chosen when configuring a connection (e.g. created_at, updated_at).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#scan_changes_with_user_defined_cursor SourceSapHanaEnterprise#scan_changes_with_user_defined_cursor}
  */
  readonly scanChangesWithUserDefinedCursor?: SourceSapHanaEnterpriseConfigurationCursorScanChangesWithUserDefinedCursor;
}

export function sourceSapHanaEnterpriseConfigurationCursorToTerraform(struct?: SourceSapHanaEnterpriseConfigurationCursor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_changes_using_change_data_capture_cdc: sourceSapHanaEnterpriseConfigurationCursorReadChangesUsingChangeDataCaptureCdcToTerraform(struct!.readChangesUsingChangeDataCaptureCdc),
    scan_changes_with_user_defined_cursor: sourceSapHanaEnterpriseConfigurationCursorScanChangesWithUserDefinedCursorToTerraform(struct!.scanChangesWithUserDefinedCursor),
  }
}


export function sourceSapHanaEnterpriseConfigurationCursorToHclTerraform(struct?: SourceSapHanaEnterpriseConfigurationCursor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_changes_using_change_data_capture_cdc: {
      value: sourceSapHanaEnterpriseConfigurationCursorReadChangesUsingChangeDataCaptureCdcToHclTerraform(struct!.readChangesUsingChangeDataCaptureCdc),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSapHanaEnterpriseConfigurationCursorReadChangesUsingChangeDataCaptureCdc",
    },
    scan_changes_with_user_defined_cursor: {
      value: sourceSapHanaEnterpriseConfigurationCursorScanChangesWithUserDefinedCursorToHclTerraform(struct!.scanChangesWithUserDefinedCursor),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSapHanaEnterpriseConfigurationCursorScanChangesWithUserDefinedCursor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSapHanaEnterpriseConfigurationCursorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSapHanaEnterpriseConfigurationCursor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceSapHanaEnterpriseConfigurationCursor | cdktf.IResolvable | undefined) {
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
  private _readChangesUsingChangeDataCaptureCdc = new SourceSapHanaEnterpriseConfigurationCursorReadChangesUsingChangeDataCaptureCdcOutputReference(this, "read_changes_using_change_data_capture_cdc");
  public get readChangesUsingChangeDataCaptureCdc() {
    return this._readChangesUsingChangeDataCaptureCdc;
  }
  public putReadChangesUsingChangeDataCaptureCdc(value: SourceSapHanaEnterpriseConfigurationCursorReadChangesUsingChangeDataCaptureCdc) {
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
  private _scanChangesWithUserDefinedCursor = new SourceSapHanaEnterpriseConfigurationCursorScanChangesWithUserDefinedCursorOutputReference(this, "scan_changes_with_user_defined_cursor");
  public get scanChangesWithUserDefinedCursor() {
    return this._scanChangesWithUserDefinedCursor;
  }
  public putScanChangesWithUserDefinedCursor(value: SourceSapHanaEnterpriseConfigurationCursorScanChangesWithUserDefinedCursor) {
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
export interface SourceSapHanaEnterpriseConfigurationEncryptionNativeNetworkEncryptionNne {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#additional_properties SourceSapHanaEnterprise#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * This parameter defines what encryption algorithm is used. Default: "AES256"; must be one of ["AES256", "RC4_56", "3DES168"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#encryption_algorithm SourceSapHanaEnterprise#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Default: "client_nne"; must be "client_nne"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#encryption_method SourceSapHanaEnterprise#encryption_method}
  */
  readonly encryptionMethod?: string;
}

export function sourceSapHanaEnterpriseConfigurationEncryptionNativeNetworkEncryptionNneToTerraform(struct?: SourceSapHanaEnterpriseConfigurationEncryptionNativeNetworkEncryptionNne | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    encryption_algorithm: cdktf.stringToTerraform(struct!.encryptionAlgorithm),
    encryption_method: cdktf.stringToTerraform(struct!.encryptionMethod),
  }
}


export function sourceSapHanaEnterpriseConfigurationEncryptionNativeNetworkEncryptionNneToHclTerraform(struct?: SourceSapHanaEnterpriseConfigurationEncryptionNativeNetworkEncryptionNne | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.encryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_method: {
      value: cdktf.stringToHclTerraform(struct!.encryptionMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSapHanaEnterpriseConfigurationEncryptionNativeNetworkEncryptionNneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSapHanaEnterpriseConfigurationEncryptionNativeNetworkEncryptionNne | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._encryptionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionMethod = this._encryptionMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSapHanaEnterpriseConfigurationEncryptionNativeNetworkEncryptionNne | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._encryptionAlgorithm = undefined;
      this._encryptionMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._encryptionMethod = value.encryptionMethod;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // encryption_algorithm - computed: true, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // encryption_method - computed: true, optional: true, required: false
  private _encryptionMethod?: string; 
  public get encryptionMethod() {
    return this.getStringAttribute('encryption_method');
  }
  public set encryptionMethod(value: string) {
    this._encryptionMethod = value;
  }
  public resetEncryptionMethod() {
    this._encryptionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionMethodInput() {
    return this._encryptionMethod;
  }
}
export interface SourceSapHanaEnterpriseConfigurationEncryptionTlsEncryptedVerifyCertificate {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#additional_properties SourceSapHanaEnterprise#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "encrypted_verify_certificate"; must be "encrypted_verify_certificate"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#encryption_method SourceSapHanaEnterprise#encryption_method}
  */
  readonly encryptionMethod?: string;
  /**
  * Privacy Enhanced Mail (PEM) files are concatenated certificate containers frequently used in certificate installations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#ssl_certificate SourceSapHanaEnterprise#ssl_certificate}
  */
  readonly sslCertificate: string;
}

export function sourceSapHanaEnterpriseConfigurationEncryptionTlsEncryptedVerifyCertificateToTerraform(struct?: SourceSapHanaEnterpriseConfigurationEncryptionTlsEncryptedVerifyCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    encryption_method: cdktf.stringToTerraform(struct!.encryptionMethod),
    ssl_certificate: cdktf.stringToTerraform(struct!.sslCertificate),
  }
}


export function sourceSapHanaEnterpriseConfigurationEncryptionTlsEncryptedVerifyCertificateToHclTerraform(struct?: SourceSapHanaEnterpriseConfigurationEncryptionTlsEncryptedVerifyCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_method: {
      value: cdktf.stringToHclTerraform(struct!.encryptionMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSapHanaEnterpriseConfigurationEncryptionTlsEncryptedVerifyCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSapHanaEnterpriseConfigurationEncryptionTlsEncryptedVerifyCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._encryptionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionMethod = this._encryptionMethod;
    }
    if (this._sslCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificate = this._sslCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSapHanaEnterpriseConfigurationEncryptionTlsEncryptedVerifyCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._encryptionMethod = undefined;
      this._sslCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._encryptionMethod = value.encryptionMethod;
      this._sslCertificate = value.sslCertificate;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // encryption_method - computed: true, optional: true, required: false
  private _encryptionMethod?: string; 
  public get encryptionMethod() {
    return this.getStringAttribute('encryption_method');
  }
  public set encryptionMethod(value: string) {
    this._encryptionMethod = value;
  }
  public resetEncryptionMethod() {
    this._encryptionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionMethodInput() {
    return this._encryptionMethod;
  }

  // ssl_certificate - computed: false, optional: false, required: true
  private _sslCertificate?: string; 
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }
  public set sslCertificate(value: string) {
    this._sslCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
  }
}
export interface SourceSapHanaEnterpriseConfigurationEncryptionUnencrypted {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#additional_properties SourceSapHanaEnterprise#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "unencrypted"; must be "unencrypted"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#encryption_method SourceSapHanaEnterprise#encryption_method}
  */
  readonly encryptionMethod?: string;
}

export function sourceSapHanaEnterpriseConfigurationEncryptionUnencryptedToTerraform(struct?: SourceSapHanaEnterpriseConfigurationEncryptionUnencrypted | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    encryption_method: cdktf.stringToTerraform(struct!.encryptionMethod),
  }
}


export function sourceSapHanaEnterpriseConfigurationEncryptionUnencryptedToHclTerraform(struct?: SourceSapHanaEnterpriseConfigurationEncryptionUnencrypted | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_method: {
      value: cdktf.stringToHclTerraform(struct!.encryptionMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSapHanaEnterpriseConfigurationEncryptionUnencryptedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSapHanaEnterpriseConfigurationEncryptionUnencrypted | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._encryptionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionMethod = this._encryptionMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSapHanaEnterpriseConfigurationEncryptionUnencrypted | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._encryptionMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._encryptionMethod = value.encryptionMethod;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // encryption_method - computed: true, optional: true, required: false
  private _encryptionMethod?: string; 
  public get encryptionMethod() {
    return this.getStringAttribute('encryption_method');
  }
  public set encryptionMethod(value: string) {
    this._encryptionMethod = value;
  }
  public resetEncryptionMethod() {
    this._encryptionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionMethodInput() {
    return this._encryptionMethod;
  }
}
export interface SourceSapHanaEnterpriseConfigurationEncryption {
  /**
  * The native network encryption gives you the ability to encrypt database connections, without the configuration overhead of TCP/IP and SSL/TLS and without the need to open and listen on different ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#native_network_encryption_nne SourceSapHanaEnterprise#native_network_encryption_nne}
  */
  readonly nativeNetworkEncryptionNne?: SourceSapHanaEnterpriseConfigurationEncryptionNativeNetworkEncryptionNne;
  /**
  * Verify and use the certificate provided by the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#tls_encrypted_verify_certificate SourceSapHanaEnterprise#tls_encrypted_verify_certificate}
  */
  readonly tlsEncryptedVerifyCertificate?: SourceSapHanaEnterpriseConfigurationEncryptionTlsEncryptedVerifyCertificate;
  /**
  * Data transfer will not be encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#unencrypted SourceSapHanaEnterprise#unencrypted}
  */
  readonly unencrypted?: SourceSapHanaEnterpriseConfigurationEncryptionUnencrypted;
}

export function sourceSapHanaEnterpriseConfigurationEncryptionToTerraform(struct?: SourceSapHanaEnterpriseConfigurationEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    native_network_encryption_nne: sourceSapHanaEnterpriseConfigurationEncryptionNativeNetworkEncryptionNneToTerraform(struct!.nativeNetworkEncryptionNne),
    tls_encrypted_verify_certificate: sourceSapHanaEnterpriseConfigurationEncryptionTlsEncryptedVerifyCertificateToTerraform(struct!.tlsEncryptedVerifyCertificate),
    unencrypted: sourceSapHanaEnterpriseConfigurationEncryptionUnencryptedToTerraform(struct!.unencrypted),
  }
}


export function sourceSapHanaEnterpriseConfigurationEncryptionToHclTerraform(struct?: SourceSapHanaEnterpriseConfigurationEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    native_network_encryption_nne: {
      value: sourceSapHanaEnterpriseConfigurationEncryptionNativeNetworkEncryptionNneToHclTerraform(struct!.nativeNetworkEncryptionNne),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSapHanaEnterpriseConfigurationEncryptionNativeNetworkEncryptionNne",
    },
    tls_encrypted_verify_certificate: {
      value: sourceSapHanaEnterpriseConfigurationEncryptionTlsEncryptedVerifyCertificateToHclTerraform(struct!.tlsEncryptedVerifyCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSapHanaEnterpriseConfigurationEncryptionTlsEncryptedVerifyCertificate",
    },
    unencrypted: {
      value: sourceSapHanaEnterpriseConfigurationEncryptionUnencryptedToHclTerraform(struct!.unencrypted),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSapHanaEnterpriseConfigurationEncryptionUnencrypted",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSapHanaEnterpriseConfigurationEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSapHanaEnterpriseConfigurationEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nativeNetworkEncryptionNne?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeNetworkEncryptionNne = this._nativeNetworkEncryptionNne?.internalValue;
    }
    if (this._tlsEncryptedVerifyCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEncryptedVerifyCertificate = this._tlsEncryptedVerifyCertificate?.internalValue;
    }
    if (this._unencrypted?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unencrypted = this._unencrypted?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSapHanaEnterpriseConfigurationEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nativeNetworkEncryptionNne.internalValue = undefined;
      this._tlsEncryptedVerifyCertificate.internalValue = undefined;
      this._unencrypted.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nativeNetworkEncryptionNne.internalValue = value.nativeNetworkEncryptionNne;
      this._tlsEncryptedVerifyCertificate.internalValue = value.tlsEncryptedVerifyCertificate;
      this._unencrypted.internalValue = value.unencrypted;
    }
  }

  // native_network_encryption_nne - computed: false, optional: true, required: false
  private _nativeNetworkEncryptionNne = new SourceSapHanaEnterpriseConfigurationEncryptionNativeNetworkEncryptionNneOutputReference(this, "native_network_encryption_nne");
  public get nativeNetworkEncryptionNne() {
    return this._nativeNetworkEncryptionNne;
  }
  public putNativeNetworkEncryptionNne(value: SourceSapHanaEnterpriseConfigurationEncryptionNativeNetworkEncryptionNne) {
    this._nativeNetworkEncryptionNne.internalValue = value;
  }
  public resetNativeNetworkEncryptionNne() {
    this._nativeNetworkEncryptionNne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeNetworkEncryptionNneInput() {
    return this._nativeNetworkEncryptionNne.internalValue;
  }

  // tls_encrypted_verify_certificate - computed: false, optional: true, required: false
  private _tlsEncryptedVerifyCertificate = new SourceSapHanaEnterpriseConfigurationEncryptionTlsEncryptedVerifyCertificateOutputReference(this, "tls_encrypted_verify_certificate");
  public get tlsEncryptedVerifyCertificate() {
    return this._tlsEncryptedVerifyCertificate;
  }
  public putTlsEncryptedVerifyCertificate(value: SourceSapHanaEnterpriseConfigurationEncryptionTlsEncryptedVerifyCertificate) {
    this._tlsEncryptedVerifyCertificate.internalValue = value;
  }
  public resetTlsEncryptedVerifyCertificate() {
    this._tlsEncryptedVerifyCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEncryptedVerifyCertificateInput() {
    return this._tlsEncryptedVerifyCertificate.internalValue;
  }

  // unencrypted - computed: false, optional: true, required: false
  private _unencrypted = new SourceSapHanaEnterpriseConfigurationEncryptionUnencryptedOutputReference(this, "unencrypted");
  public get unencrypted() {
    return this._unencrypted;
  }
  public putUnencrypted(value: SourceSapHanaEnterpriseConfigurationEncryptionUnencrypted) {
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
export interface SourceSapHanaEnterpriseConfigurationTunnelMethodNoTunnel {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#additional_properties SourceSapHanaEnterprise#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "NO_TUNNEL"; must be "NO_TUNNEL"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#tunnel_method SourceSapHanaEnterprise#tunnel_method}
  */
  readonly tunnelMethod?: string;
}

export function sourceSapHanaEnterpriseConfigurationTunnelMethodNoTunnelToTerraform(struct?: SourceSapHanaEnterpriseConfigurationTunnelMethodNoTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    tunnel_method: cdktf.stringToTerraform(struct!.tunnelMethod),
  }
}


export function sourceSapHanaEnterpriseConfigurationTunnelMethodNoTunnelToHclTerraform(struct?: SourceSapHanaEnterpriseConfigurationTunnelMethodNoTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_method: {
      value: cdktf.stringToHclTerraform(struct!.tunnelMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSapHanaEnterpriseConfigurationTunnelMethodNoTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSapHanaEnterpriseConfigurationTunnelMethodNoTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._tunnelMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelMethod = this._tunnelMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSapHanaEnterpriseConfigurationTunnelMethodNoTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._tunnelMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._tunnelMethod = value.tunnelMethod;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // tunnel_method - computed: true, optional: true, required: false
  private _tunnelMethod?: string; 
  public get tunnelMethod() {
    return this.getStringAttribute('tunnel_method');
  }
  public set tunnelMethod(value: string) {
    this._tunnelMethod = value;
  }
  public resetTunnelMethod() {
    this._tunnelMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMethodInput() {
    return this._tunnelMethod;
  }
}
export interface SourceSapHanaEnterpriseConfigurationTunnelMethodPasswordAuthentication {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#additional_properties SourceSapHanaEnterprise#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Hostname of the jump server host that allows inbound ssh tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#tunnel_host SourceSapHanaEnterprise#tunnel_host}
  */
  readonly tunnelHost: string;
  /**
  * Default: "SSH_PASSWORD_AUTH"; must be "SSH_PASSWORD_AUTH"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#tunnel_method SourceSapHanaEnterprise#tunnel_method}
  */
  readonly tunnelMethod?: string;
  /**
  * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#tunnel_port SourceSapHanaEnterprise#tunnel_port}
  */
  readonly tunnelPort?: number;
  /**
  * OS-level username for logging into the jump server host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#tunnel_user SourceSapHanaEnterprise#tunnel_user}
  */
  readonly tunnelUser: string;
  /**
  * OS-level password for logging into the jump server host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#tunnel_user_password SourceSapHanaEnterprise#tunnel_user_password}
  */
  readonly tunnelUserPassword: string;
}

export function sourceSapHanaEnterpriseConfigurationTunnelMethodPasswordAuthenticationToTerraform(struct?: SourceSapHanaEnterpriseConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    tunnel_host: cdktf.stringToTerraform(struct!.tunnelHost),
    tunnel_method: cdktf.stringToTerraform(struct!.tunnelMethod),
    tunnel_port: cdktf.numberToTerraform(struct!.tunnelPort),
    tunnel_user: cdktf.stringToTerraform(struct!.tunnelUser),
    tunnel_user_password: cdktf.stringToTerraform(struct!.tunnelUserPassword),
  }
}


export function sourceSapHanaEnterpriseConfigurationTunnelMethodPasswordAuthenticationToHclTerraform(struct?: SourceSapHanaEnterpriseConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
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
    tunnel_method: {
      value: cdktf.stringToHclTerraform(struct!.tunnelMethod),
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

export class SourceSapHanaEnterpriseConfigurationTunnelMethodPasswordAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSapHanaEnterpriseConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._tunnelHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelHost = this._tunnelHost;
    }
    if (this._tunnelMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelMethod = this._tunnelMethod;
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

  public set internalValue(value: SourceSapHanaEnterpriseConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._tunnelHost = undefined;
      this._tunnelMethod = undefined;
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
      this._additionalProperties = value.additionalProperties;
      this._tunnelHost = value.tunnelHost;
      this._tunnelMethod = value.tunnelMethod;
      this._tunnelPort = value.tunnelPort;
      this._tunnelUser = value.tunnelUser;
      this._tunnelUserPassword = value.tunnelUserPassword;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
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

  // tunnel_method - computed: true, optional: true, required: false
  private _tunnelMethod?: string; 
  public get tunnelMethod() {
    return this.getStringAttribute('tunnel_method');
  }
  public set tunnelMethod(value: string) {
    this._tunnelMethod = value;
  }
  public resetTunnelMethod() {
    this._tunnelMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMethodInput() {
    return this._tunnelMethod;
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
export interface SourceSapHanaEnterpriseConfigurationTunnelMethodSshKeyAuthentication {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#additional_properties SourceSapHanaEnterprise#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#ssh_key SourceSapHanaEnterprise#ssh_key}
  */
  readonly sshKey: string;
  /**
  * Hostname of the jump server host that allows inbound ssh tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#tunnel_host SourceSapHanaEnterprise#tunnel_host}
  */
  readonly tunnelHost: string;
  /**
  * Default: "SSH_KEY_AUTH"; must be "SSH_KEY_AUTH"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#tunnel_method SourceSapHanaEnterprise#tunnel_method}
  */
  readonly tunnelMethod?: string;
  /**
  * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#tunnel_port SourceSapHanaEnterprise#tunnel_port}
  */
  readonly tunnelPort?: number;
  /**
  * OS-level username for logging into the jump server host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#tunnel_user SourceSapHanaEnterprise#tunnel_user}
  */
  readonly tunnelUser: string;
}

export function sourceSapHanaEnterpriseConfigurationTunnelMethodSshKeyAuthenticationToTerraform(struct?: SourceSapHanaEnterpriseConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    tunnel_host: cdktf.stringToTerraform(struct!.tunnelHost),
    tunnel_method: cdktf.stringToTerraform(struct!.tunnelMethod),
    tunnel_port: cdktf.numberToTerraform(struct!.tunnelPort),
    tunnel_user: cdktf.stringToTerraform(struct!.tunnelUser),
  }
}


export function sourceSapHanaEnterpriseConfigurationTunnelMethodSshKeyAuthenticationToHclTerraform(struct?: SourceSapHanaEnterpriseConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    tunnel_method: {
      value: cdktf.stringToHclTerraform(struct!.tunnelMethod),
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

export class SourceSapHanaEnterpriseConfigurationTunnelMethodSshKeyAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSapHanaEnterpriseConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._tunnelHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelHost = this._tunnelHost;
    }
    if (this._tunnelMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelMethod = this._tunnelMethod;
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

  public set internalValue(value: SourceSapHanaEnterpriseConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._sshKey = undefined;
      this._tunnelHost = undefined;
      this._tunnelMethod = undefined;
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
      this._additionalProperties = value.additionalProperties;
      this._sshKey = value.sshKey;
      this._tunnelHost = value.tunnelHost;
      this._tunnelMethod = value.tunnelMethod;
      this._tunnelPort = value.tunnelPort;
      this._tunnelUser = value.tunnelUser;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
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

  // tunnel_method - computed: true, optional: true, required: false
  private _tunnelMethod?: string; 
  public get tunnelMethod() {
    return this.getStringAttribute('tunnel_method');
  }
  public set tunnelMethod(value: string) {
    this._tunnelMethod = value;
  }
  public resetTunnelMethod() {
    this._tunnelMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMethodInput() {
    return this._tunnelMethod;
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
export interface SourceSapHanaEnterpriseConfigurationTunnelMethod {
  /**
  * No ssh tunnel needed to connect to database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#no_tunnel SourceSapHanaEnterprise#no_tunnel}
  */
  readonly noTunnel?: SourceSapHanaEnterpriseConfigurationTunnelMethodNoTunnel;
  /**
  * Connect through a jump server tunnel host using username and password authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#password_authentication SourceSapHanaEnterprise#password_authentication}
  */
  readonly passwordAuthentication?: SourceSapHanaEnterpriseConfigurationTunnelMethodPasswordAuthentication;
  /**
  * Connect through a jump server tunnel host using username and ssh key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#ssh_key_authentication SourceSapHanaEnterprise#ssh_key_authentication}
  */
  readonly sshKeyAuthentication?: SourceSapHanaEnterpriseConfigurationTunnelMethodSshKeyAuthentication;
}

export function sourceSapHanaEnterpriseConfigurationTunnelMethodToTerraform(struct?: SourceSapHanaEnterpriseConfigurationTunnelMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_tunnel: sourceSapHanaEnterpriseConfigurationTunnelMethodNoTunnelToTerraform(struct!.noTunnel),
    password_authentication: sourceSapHanaEnterpriseConfigurationTunnelMethodPasswordAuthenticationToTerraform(struct!.passwordAuthentication),
    ssh_key_authentication: sourceSapHanaEnterpriseConfigurationTunnelMethodSshKeyAuthenticationToTerraform(struct!.sshKeyAuthentication),
  }
}


export function sourceSapHanaEnterpriseConfigurationTunnelMethodToHclTerraform(struct?: SourceSapHanaEnterpriseConfigurationTunnelMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_tunnel: {
      value: sourceSapHanaEnterpriseConfigurationTunnelMethodNoTunnelToHclTerraform(struct!.noTunnel),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSapHanaEnterpriseConfigurationTunnelMethodNoTunnel",
    },
    password_authentication: {
      value: sourceSapHanaEnterpriseConfigurationTunnelMethodPasswordAuthenticationToHclTerraform(struct!.passwordAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSapHanaEnterpriseConfigurationTunnelMethodPasswordAuthentication",
    },
    ssh_key_authentication: {
      value: sourceSapHanaEnterpriseConfigurationTunnelMethodSshKeyAuthenticationToHclTerraform(struct!.sshKeyAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSapHanaEnterpriseConfigurationTunnelMethodSshKeyAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSapHanaEnterpriseConfigurationTunnelMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSapHanaEnterpriseConfigurationTunnelMethod | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SourceSapHanaEnterpriseConfigurationTunnelMethod | cdktf.IResolvable | undefined) {
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
  private _noTunnel = new SourceSapHanaEnterpriseConfigurationTunnelMethodNoTunnelOutputReference(this, "no_tunnel");
  public get noTunnel() {
    return this._noTunnel;
  }
  public putNoTunnel(value: SourceSapHanaEnterpriseConfigurationTunnelMethodNoTunnel) {
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
  private _passwordAuthentication = new SourceSapHanaEnterpriseConfigurationTunnelMethodPasswordAuthenticationOutputReference(this, "password_authentication");
  public get passwordAuthentication() {
    return this._passwordAuthentication;
  }
  public putPasswordAuthentication(value: SourceSapHanaEnterpriseConfigurationTunnelMethodPasswordAuthentication) {
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
  private _sshKeyAuthentication = new SourceSapHanaEnterpriseConfigurationTunnelMethodSshKeyAuthenticationOutputReference(this, "ssh_key_authentication");
  public get sshKeyAuthentication() {
    return this._sshKeyAuthentication;
  }
  public putSshKeyAuthentication(value: SourceSapHanaEnterpriseConfigurationTunnelMethodSshKeyAuthentication) {
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
export interface SourceSapHanaEnterpriseConfiguration {
  /**
  * When this feature is enabled, during schema discovery the connector will query each table or view individually to check access privileges and inaccessible tables, views, or columns therein will be removed. In large schemas, this might cause schema discovery to take too long, in which case it might be advisable to disable this feature. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#check_privileges SourceSapHanaEnterprise#check_privileges}
  */
  readonly checkPrivileges?: boolean | cdktf.IResolvable;
  /**
  * How often (in seconds) a stream should checkpoint, when possible. Default: 300
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#checkpoint_target_interval_seconds SourceSapHanaEnterprise#checkpoint_target_interval_seconds}
  */
  readonly checkpointTargetIntervalSeconds?: number;
  /**
  * Maximum number of concurrent queries to the database. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#concurrency SourceSapHanaEnterprise#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Configures how data is extracted from the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#cursor SourceSapHanaEnterprise#cursor}
  */
  readonly cursor: SourceSapHanaEnterpriseConfigurationCursor;
  /**
  * The encryption method with is used when communicating with the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#encryption SourceSapHanaEnterprise#encryption}
  */
  readonly encryption: SourceSapHanaEnterpriseConfigurationEncryption;
  /**
  * Hostname of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#host SourceSapHanaEnterprise#host}
  */
  readonly host: string;
  /**
  * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#jdbc_url_params SourceSapHanaEnterprise#jdbc_url_params}
  */
  readonly jdbcUrlParams?: string;
  /**
  * The password associated with the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#password SourceSapHanaEnterprise#password}
  */
  readonly password?: string;
  /**
  * Port of the database.
  * SapHana Corporations recommends the following port numbers:
  * 443 - Default listening port for SAP HANA cloud client connections to the listener.
  * Default: 443
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#port SourceSapHanaEnterprise#port}
  */
  readonly port?: number;
  /**
  * The list of schemas to sync from. Defaults to user. Case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#schemas SourceSapHanaEnterprise#schemas}
  */
  readonly schemas?: string[];
  /**
  * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#tunnel_method SourceSapHanaEnterprise#tunnel_method}
  */
  readonly tunnelMethod: SourceSapHanaEnterpriseConfigurationTunnelMethod;
  /**
  * The username which is used to access the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#username SourceSapHanaEnterprise#username}
  */
  readonly username: string;
}

export function sourceSapHanaEnterpriseConfigurationToTerraform(struct?: SourceSapHanaEnterpriseConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_privileges: cdktf.booleanToTerraform(struct!.checkPrivileges),
    checkpoint_target_interval_seconds: cdktf.numberToTerraform(struct!.checkpointTargetIntervalSeconds),
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    cursor: sourceSapHanaEnterpriseConfigurationCursorToTerraform(struct!.cursor),
    encryption: sourceSapHanaEnterpriseConfigurationEncryptionToTerraform(struct!.encryption),
    host: cdktf.stringToTerraform(struct!.host),
    jdbc_url_params: cdktf.stringToTerraform(struct!.jdbcUrlParams),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.schemas),
    tunnel_method: sourceSapHanaEnterpriseConfigurationTunnelMethodToTerraform(struct!.tunnelMethod),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function sourceSapHanaEnterpriseConfigurationToHclTerraform(struct?: SourceSapHanaEnterpriseConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_privileges: {
      value: cdktf.booleanToHclTerraform(struct!.checkPrivileges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    checkpoint_target_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.checkpointTargetIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cursor: {
      value: sourceSapHanaEnterpriseConfigurationCursorToHclTerraform(struct!.cursor),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSapHanaEnterpriseConfigurationCursor",
    },
    encryption: {
      value: sourceSapHanaEnterpriseConfigurationEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSapHanaEnterpriseConfigurationEncryption",
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
    schemas: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.schemas),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tunnel_method: {
      value: sourceSapHanaEnterpriseConfigurationTunnelMethodToHclTerraform(struct!.tunnelMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSapHanaEnterpriseConfigurationTunnelMethod",
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

export class SourceSapHanaEnterpriseConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSapHanaEnterpriseConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkPrivileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPrivileges = this._checkPrivileges;
    }
    if (this._checkpointTargetIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointTargetIntervalSeconds = this._checkpointTargetIntervalSeconds;
    }
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._cursor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cursor = this._cursor?.internalValue;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
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
    if (this._schemas !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas;
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

  public set internalValue(value: SourceSapHanaEnterpriseConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkPrivileges = undefined;
      this._checkpointTargetIntervalSeconds = undefined;
      this._concurrency = undefined;
      this._cursor.internalValue = undefined;
      this._encryption.internalValue = undefined;
      this._host = undefined;
      this._jdbcUrlParams = undefined;
      this._password = undefined;
      this._port = undefined;
      this._schemas = undefined;
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
      this._checkPrivileges = value.checkPrivileges;
      this._checkpointTargetIntervalSeconds = value.checkpointTargetIntervalSeconds;
      this._concurrency = value.concurrency;
      this._cursor.internalValue = value.cursor;
      this._encryption.internalValue = value.encryption;
      this._host = value.host;
      this._jdbcUrlParams = value.jdbcUrlParams;
      this._password = value.password;
      this._port = value.port;
      this._schemas = value.schemas;
      this._tunnelMethod.internalValue = value.tunnelMethod;
      this._username = value.username;
    }
  }

  // check_privileges - computed: true, optional: true, required: false
  private _checkPrivileges?: boolean | cdktf.IResolvable; 
  public get checkPrivileges() {
    return this.getBooleanAttribute('check_privileges');
  }
  public set checkPrivileges(value: boolean | cdktf.IResolvable) {
    this._checkPrivileges = value;
  }
  public resetCheckPrivileges() {
    this._checkPrivileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPrivilegesInput() {
    return this._checkPrivileges;
  }

  // checkpoint_target_interval_seconds - computed: true, optional: true, required: false
  private _checkpointTargetIntervalSeconds?: number; 
  public get checkpointTargetIntervalSeconds() {
    return this.getNumberAttribute('checkpoint_target_interval_seconds');
  }
  public set checkpointTargetIntervalSeconds(value: number) {
    this._checkpointTargetIntervalSeconds = value;
  }
  public resetCheckpointTargetIntervalSeconds() {
    this._checkpointTargetIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointTargetIntervalSecondsInput() {
    return this._checkpointTargetIntervalSeconds;
  }

  // concurrency - computed: true, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // cursor - computed: false, optional: false, required: true
  private _cursor = new SourceSapHanaEnterpriseConfigurationCursorOutputReference(this, "cursor");
  public get cursor() {
    return this._cursor;
  }
  public putCursor(value: SourceSapHanaEnterpriseConfigurationCursor) {
    this._cursor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorInput() {
    return this._cursor.internalValue;
  }

  // encryption - computed: false, optional: false, required: true
  private _encryption = new SourceSapHanaEnterpriseConfigurationEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: SourceSapHanaEnterpriseConfigurationEncryption) {
    this._encryption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // tunnel_method - computed: false, optional: false, required: true
  private _tunnelMethod = new SourceSapHanaEnterpriseConfigurationTunnelMethodOutputReference(this, "tunnel_method");
  public get tunnelMethod() {
    return this._tunnelMethod;
  }
  public putTunnelMethod(value: SourceSapHanaEnterpriseConfigurationTunnelMethod) {
    this._tunnelMethod.internalValue = value;
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
export interface SourceSapHanaEnterpriseResourceAllocationDefault {
}

export function sourceSapHanaEnterpriseResourceAllocationDefaultToTerraform(struct?: SourceSapHanaEnterpriseResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSapHanaEnterpriseResourceAllocationDefaultToHclTerraform(struct?: SourceSapHanaEnterpriseResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSapHanaEnterpriseResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSapHanaEnterpriseResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSapHanaEnterpriseResourceAllocationDefault | undefined) {
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
export interface SourceSapHanaEnterpriseResourceAllocationJobSpecificResourceRequirements {
}

export function sourceSapHanaEnterpriseResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceSapHanaEnterpriseResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSapHanaEnterpriseResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceSapHanaEnterpriseResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSapHanaEnterpriseResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSapHanaEnterpriseResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSapHanaEnterpriseResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface SourceSapHanaEnterpriseResourceAllocationJobSpecific {
}

export function sourceSapHanaEnterpriseResourceAllocationJobSpecificToTerraform(struct?: SourceSapHanaEnterpriseResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSapHanaEnterpriseResourceAllocationJobSpecificToHclTerraform(struct?: SourceSapHanaEnterpriseResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSapHanaEnterpriseResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceSapHanaEnterpriseResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSapHanaEnterpriseResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new SourceSapHanaEnterpriseResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceSapHanaEnterpriseResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceSapHanaEnterpriseResourceAllocationJobSpecificOutputReference {
    return new SourceSapHanaEnterpriseResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceSapHanaEnterpriseResourceAllocation {
}

export function sourceSapHanaEnterpriseResourceAllocationToTerraform(struct?: SourceSapHanaEnterpriseResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSapHanaEnterpriseResourceAllocationToHclTerraform(struct?: SourceSapHanaEnterpriseResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSapHanaEnterpriseResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSapHanaEnterpriseResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSapHanaEnterpriseResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceSapHanaEnterpriseResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceSapHanaEnterpriseResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise airbyte_source_sap_hana_enterprise}
*/
export class SourceSapHanaEnterprise extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_sap_hana_enterprise";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceSapHanaEnterprise resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceSapHanaEnterprise to import
  * @param importFromId The id of the existing SourceSapHanaEnterprise that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceSapHanaEnterprise to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_sap_hana_enterprise", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sap_hana_enterprise airbyte_source_sap_hana_enterprise} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceSapHanaEnterpriseConfig
  */
  public constructor(scope: Construct, id: string, config: SourceSapHanaEnterpriseConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_sap_hana_enterprise',
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
  private _configuration = new SourceSapHanaEnterpriseConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceSapHanaEnterpriseConfiguration) {
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
  private _resourceAllocation = new SourceSapHanaEnterpriseResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: sourceSapHanaEnterpriseConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceSapHanaEnterpriseConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceSapHanaEnterpriseConfiguration",
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
