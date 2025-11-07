// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_cme_gw_configurations_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementCmeGwConfigurationsGcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_cme_gw_configurations_gcp#id DataCheckpointManagementCmeGwConfigurationsGcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_cme_gw_configurations_gcp#name DataCheckpointManagementCmeGwConfigurationsGcp#name}
  */
  readonly name: string;
}
export interface DataCheckpointManagementCmeGwConfigurationsGcpBlades {
}

export function dataCheckpointManagementCmeGwConfigurationsGcpBladesToTerraform(struct?: DataCheckpointManagementCmeGwConfigurationsGcpBlades): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementCmeGwConfigurationsGcpBladesToHclTerraform(struct?: DataCheckpointManagementCmeGwConfigurationsGcpBlades): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementCmeGwConfigurationsGcpBladesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementCmeGwConfigurationsGcpBlades | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementCmeGwConfigurationsGcpBlades | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anti_bot - computed: true, optional: false, required: false
  public get antiBot() {
    return this.getBooleanAttribute('anti_bot');
  }

  // anti_virus - computed: true, optional: false, required: false
  public get antiVirus() {
    return this.getBooleanAttribute('anti_virus');
  }

  // application_control - computed: true, optional: false, required: false
  public get applicationControl() {
    return this.getBooleanAttribute('application_control');
  }

  // autonomous_threat_prevention - computed: true, optional: false, required: false
  public get autonomousThreatPrevention() {
    return this.getBooleanAttribute('autonomous_threat_prevention');
  }

  // content_awareness - computed: true, optional: false, required: false
  public get contentAwareness() {
    return this.getBooleanAttribute('content_awareness');
  }

  // https_inspection - computed: true, optional: false, required: false
  public get httpsInspection() {
    return this.getBooleanAttribute('https_inspection');
  }

  // identity_awareness - computed: true, optional: false, required: false
  public get identityAwareness() {
    return this.getBooleanAttribute('identity_awareness');
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getBooleanAttribute('ips');
  }

  // ipsec_vpn - computed: true, optional: false, required: false
  public get ipsecVpn() {
    return this.getBooleanAttribute('ipsec_vpn');
  }

  // threat_emulation - computed: true, optional: false, required: false
  public get threatEmulation() {
    return this.getBooleanAttribute('threat_emulation');
  }

  // url_filtering - computed: true, optional: false, required: false
  public get urlFiltering() {
    return this.getBooleanAttribute('url_filtering');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getBooleanAttribute('vpn');
  }
}

export class DataCheckpointManagementCmeGwConfigurationsGcpBladesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementCmeGwConfigurationsGcpBladesOutputReference {
    return new DataCheckpointManagementCmeGwConfigurationsGcpBladesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementCmeGwConfigurationsGcpIdentityAwarenessSettings {
}

export function dataCheckpointManagementCmeGwConfigurationsGcpIdentityAwarenessSettingsToTerraform(struct?: DataCheckpointManagementCmeGwConfigurationsGcpIdentityAwarenessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementCmeGwConfigurationsGcpIdentityAwarenessSettingsToHclTerraform(struct?: DataCheckpointManagementCmeGwConfigurationsGcpIdentityAwarenessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementCmeGwConfigurationsGcpIdentityAwarenessSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementCmeGwConfigurationsGcpIdentityAwarenessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementCmeGwConfigurationsGcpIdentityAwarenessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_cloudguard_controller - computed: true, optional: false, required: false
  public get enableCloudguardController() {
    return this.getBooleanAttribute('enable_cloudguard_controller');
  }

  // receive_identities_from - computed: true, optional: false, required: false
  public get receiveIdentitiesFrom() {
    return this.getListAttribute('receive_identities_from');
  }
}

export class DataCheckpointManagementCmeGwConfigurationsGcpIdentityAwarenessSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementCmeGwConfigurationsGcpIdentityAwarenessSettingsOutputReference {
    return new DataCheckpointManagementCmeGwConfigurationsGcpIdentityAwarenessSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementCmeGwConfigurationsGcpRepositoryGatewayScripts {
}

export function dataCheckpointManagementCmeGwConfigurationsGcpRepositoryGatewayScriptsToTerraform(struct?: DataCheckpointManagementCmeGwConfigurationsGcpRepositoryGatewayScripts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementCmeGwConfigurationsGcpRepositoryGatewayScriptsToHclTerraform(struct?: DataCheckpointManagementCmeGwConfigurationsGcpRepositoryGatewayScripts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementCmeGwConfigurationsGcpRepositoryGatewayScriptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementCmeGwConfigurationsGcpRepositoryGatewayScripts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementCmeGwConfigurationsGcpRepositoryGatewayScripts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getStringAttribute('parameters');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementCmeGwConfigurationsGcpRepositoryGatewayScriptsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementCmeGwConfigurationsGcpRepositoryGatewayScriptsOutputReference {
    return new DataCheckpointManagementCmeGwConfigurationsGcpRepositoryGatewayScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_cme_gw_configurations_gcp checkpoint_management_cme_gw_configurations_gcp}
*/
export class DataCheckpointManagementCmeGwConfigurationsGcp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_cme_gw_configurations_gcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementCmeGwConfigurationsGcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementCmeGwConfigurationsGcp to import
  * @param importFromId The id of the existing DataCheckpointManagementCmeGwConfigurationsGcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_cme_gw_configurations_gcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementCmeGwConfigurationsGcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_cme_gw_configurations_gcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_cme_gw_configurations_gcp checkpoint_management_cme_gw_configurations_gcp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementCmeGwConfigurationsGcpConfig
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementCmeGwConfigurationsGcpConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_cme_gw_configurations_gcp',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blades - computed: true, optional: false, required: false
  private _blades = new DataCheckpointManagementCmeGwConfigurationsGcpBladesList(this, "blades", false);
  public get blades() {
    return this._blades;
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // communication_with_servers_behind_nat - computed: true, optional: false, required: false
  public get communicationWithServersBehindNat() {
    return this.getStringAttribute('communication_with_servers_behind_nat');
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

  // identity_awareness_settings - computed: true, optional: false, required: false
  private _identityAwarenessSettings = new DataCheckpointManagementCmeGwConfigurationsGcpIdentityAwarenessSettingsList(this, "identity_awareness_settings", false);
  public get identityAwarenessSettings() {
    return this._identityAwarenessSettings;
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

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // related_account - computed: true, optional: false, required: false
  public get relatedAccount() {
    return this.getStringAttribute('related_account');
  }

  // repository_gateway_scripts - computed: true, optional: false, required: false
  private _repositoryGatewayScripts = new DataCheckpointManagementCmeGwConfigurationsGcpRepositoryGatewayScriptsList(this, "repository_gateway_scripts", false);
  public get repositoryGatewayScripts() {
    return this._repositoryGatewayScripts;
  }

  // section_name - computed: true, optional: false, required: false
  public get sectionName() {
    return this.getStringAttribute('section_name');
  }

  // send_alerts_to_server - computed: true, optional: false, required: false
  public get sendAlertsToServer() {
    return this.getListAttribute('send_alerts_to_server');
  }

  // send_logs_to_backup_server - computed: true, optional: false, required: false
  public get sendLogsToBackupServer() {
    return this.getListAttribute('send_logs_to_backup_server');
  }

  // send_logs_to_server - computed: true, optional: false, required: false
  public get sendLogsToServer() {
    return this.getListAttribute('send_logs_to_server');
  }

  // sic_key - computed: true, optional: false, required: false
  public get sicKey() {
    return this.getStringAttribute('sic_key');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // x_forwarded_for - computed: true, optional: false, required: false
  public get xForwardedFor() {
    return this.getBooleanAttribute('x_forwarded_for');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
