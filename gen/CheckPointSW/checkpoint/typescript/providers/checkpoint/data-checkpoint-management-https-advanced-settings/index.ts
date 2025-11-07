// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_https_advanced_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementHttpsAdvancedSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_https_advanced_settings#id DataCheckpointManagementHttpsAdvancedSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataCheckpointManagementHttpsAdvancedSettingsBlockedCertificates {
}

export function dataCheckpointManagementHttpsAdvancedSettingsBlockedCertificatesToTerraform(struct?: DataCheckpointManagementHttpsAdvancedSettingsBlockedCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementHttpsAdvancedSettingsBlockedCertificatesToHclTerraform(struct?: DataCheckpointManagementHttpsAdvancedSettingsBlockedCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementHttpsAdvancedSettingsBlockedCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementHttpsAdvancedSettingsBlockedCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementHttpsAdvancedSettingsBlockedCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_serial_number - computed: true, optional: false, required: false
  public get certSerialNumber() {
    return this.getStringAttribute('cert_serial_number');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCheckpointManagementHttpsAdvancedSettingsBlockedCertificatesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementHttpsAdvancedSettingsBlockedCertificatesOutputReference {
    return new DataCheckpointManagementHttpsAdvancedSettingsBlockedCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementHttpsAdvancedSettingsServerCertificateValidationActions {
}

export function dataCheckpointManagementHttpsAdvancedSettingsServerCertificateValidationActionsToTerraform(struct?: DataCheckpointManagementHttpsAdvancedSettingsServerCertificateValidationActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementHttpsAdvancedSettingsServerCertificateValidationActionsToHclTerraform(struct?: DataCheckpointManagementHttpsAdvancedSettingsServerCertificateValidationActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementHttpsAdvancedSettingsServerCertificateValidationActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementHttpsAdvancedSettingsServerCertificateValidationActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementHttpsAdvancedSettingsServerCertificateValidationActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_expired - computed: true, optional: false, required: false
  public get blockExpired() {
    return this.getBooleanAttribute('block_expired');
  }

  // block_revoked - computed: true, optional: false, required: false
  public get blockRevoked() {
    return this.getBooleanAttribute('block_revoked');
  }

  // block_untrusted - computed: true, optional: false, required: false
  public get blockUntrusted() {
    return this.getBooleanAttribute('block_untrusted');
  }

  // track_errors - computed: true, optional: false, required: false
  public get trackErrors() {
    return this.getStringAttribute('track_errors');
  }
}

export class DataCheckpointManagementHttpsAdvancedSettingsServerCertificateValidationActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementHttpsAdvancedSettingsServerCertificateValidationActionsOutputReference {
    return new DataCheckpointManagementHttpsAdvancedSettingsServerCertificateValidationActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_https_advanced_settings checkpoint_management_https_advanced_settings}
*/
export class DataCheckpointManagementHttpsAdvancedSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_https_advanced_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementHttpsAdvancedSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementHttpsAdvancedSettings to import
  * @param importFromId The id of the existing DataCheckpointManagementHttpsAdvancedSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_https_advanced_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementHttpsAdvancedSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_https_advanced_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_https_advanced_settings checkpoint_management_https_advanced_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementHttpsAdvancedSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementHttpsAdvancedSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_https_advanced_settings',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked_certificate_tracking - computed: true, optional: false, required: false
  public get blockedCertificateTracking() {
    return this.getStringAttribute('blocked_certificate_tracking');
  }

  // blocked_certificates - computed: true, optional: false, required: false
  private _blockedCertificates = new DataCheckpointManagementHttpsAdvancedSettingsBlockedCertificatesList(this, "blocked_certificates", false);
  public get blockedCertificates() {
    return this._blockedCertificates;
  }

  // bypass_on_client_failure - computed: true, optional: false, required: false
  public get bypassOnClientFailure() {
    return this.getBooleanAttribute('bypass_on_client_failure');
  }

  // bypass_on_failure - computed: true, optional: false, required: false
  public get bypassOnFailure() {
    return this.getBooleanAttribute('bypass_on_failure');
  }

  // bypass_under_load - computed: true, optional: false, required: false
  private _bypassUnderLoad = new cdktf.StringMap(this, "bypass_under_load");
  public get bypassUnderLoad() {
    return this._bypassUnderLoad;
  }

  // bypass_update_services - computed: true, optional: false, required: false
  public get bypassUpdateServices() {
    return this.getBooleanAttribute('bypass_update_services');
  }

  // certificate_pinned_apps_action - computed: true, optional: false, required: false
  public get certificatePinnedAppsAction() {
    return this.getStringAttribute('certificate_pinned_apps_action');
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

  // log_sessions - computed: true, optional: false, required: false
  public get logSessions() {
    return this.getBooleanAttribute('log_sessions');
  }

  // retrieve_intermediate_ca_certificates - computed: true, optional: false, required: false
  public get retrieveIntermediateCaCertificates() {
    return this.getBooleanAttribute('retrieve_intermediate_ca_certificates');
  }

  // server_certificate_validation_actions - computed: true, optional: false, required: false
  private _serverCertificateValidationActions = new DataCheckpointManagementHttpsAdvancedSettingsServerCertificateValidationActionsList(this, "server_certificate_validation_actions", false);
  public get serverCertificateValidationActions() {
    return this._serverCertificateValidationActions;
  }

  // site_categorization_allow_mode - computed: true, optional: false, required: false
  public get siteCategorizationAllowMode() {
    return this.getStringAttribute('site_categorization_allow_mode');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
