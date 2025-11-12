// https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/enforcer_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAquasecEnforcerGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Select Enabled to send activity logs in your containers to the Aqua Server for forensics purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/enforcer_groups#forensics DataAquasecEnforcerGroups#forensics}
  */
  readonly forensics?: boolean | cdktf.IResolvable;
  /**
  * The ID of the Enforcer group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/enforcer_groups#group_id DataAquasecEnforcerGroups#group_id}
  */
  readonly groupId: string;
  /**
  * Select Enabled to send activity logs in your host to the Aqua Server for forensics purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/enforcer_groups#host_forensics_collection DataAquasecEnforcerGroups#host_forensics_collection}
  */
  readonly hostForensicsCollection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/enforcer_groups#id DataAquasecEnforcerGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataAquasecEnforcerGroupsCommand {
}

export function dataAquasecEnforcerGroupsCommandToTerraform(struct?: DataAquasecEnforcerGroupsCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecEnforcerGroupsCommandToHclTerraform(struct?: DataAquasecEnforcerGroupsCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecEnforcerGroupsCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecEnforcerGroupsCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecEnforcerGroupsCommand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // kubernetes - computed: true, optional: false, required: false
  public get kubernetes() {
    return this.getStringAttribute('kubernetes');
  }

  // swarm - computed: true, optional: false, required: false
  public get swarm() {
    return this.getStringAttribute('swarm');
  }

  // windows - computed: true, optional: false, required: false
  public get windows() {
    return this.getStringAttribute('windows');
  }
}

export class DataAquasecEnforcerGroupsCommandList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecEnforcerGroupsCommandOutputReference {
    return new DataAquasecEnforcerGroupsCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecEnforcerGroupsOrchestrator {
}

export function dataAquasecEnforcerGroupsOrchestratorToTerraform(struct?: DataAquasecEnforcerGroupsOrchestrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecEnforcerGroupsOrchestratorToHclTerraform(struct?: DataAquasecEnforcerGroupsOrchestrator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecEnforcerGroupsOrchestratorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecEnforcerGroupsOrchestrator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecEnforcerGroupsOrchestrator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // master - computed: true, optional: false, required: false
  public get master() {
    return this.getBooleanAttribute('master');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAquasecEnforcerGroupsOrchestratorList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecEnforcerGroupsOrchestratorOutputReference {
    return new DataAquasecEnforcerGroupsOrchestratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecEnforcerGroupsScheduleScanSettings {
}

export function dataAquasecEnforcerGroupsScheduleScanSettingsToTerraform(struct?: DataAquasecEnforcerGroupsScheduleScanSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecEnforcerGroupsScheduleScanSettingsToHclTerraform(struct?: DataAquasecEnforcerGroupsScheduleScanSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecEnforcerGroupsScheduleScanSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecEnforcerGroupsScheduleScanSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecEnforcerGroupsScheduleScanSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberListAttribute('days');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // is_custom - computed: true, optional: false, required: false
  public get isCustom() {
    return this.getBooleanAttribute('is_custom');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getNumberListAttribute('time');
  }
}

export class DataAquasecEnforcerGroupsScheduleScanSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecEnforcerGroupsScheduleScanSettingsOutputReference {
    return new DataAquasecEnforcerGroupsScheduleScanSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/enforcer_groups aquasec_enforcer_groups}
*/
export class DataAquasecEnforcerGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_enforcer_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAquasecEnforcerGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAquasecEnforcerGroups to import
  * @param importFromId The id of the existing DataAquasecEnforcerGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/enforcer_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAquasecEnforcerGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_enforcer_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/enforcer_groups aquasec_enforcer_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAquasecEnforcerGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAquasecEnforcerGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_enforcer_groups',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._forensics = config.forensics;
    this._groupId = config.groupId;
    this._hostForensicsCollection = config.hostForensicsCollection;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admission_control - computed: true, optional: false, required: false
  public get admissionControl() {
    return this.getBooleanAttribute('admission_control');
  }

  // allow_kube_enforcer_audit - computed: true, optional: false, required: false
  public get allowKubeEnforcerAudit() {
    return this.getBooleanAttribute('allow_kube_enforcer_audit');
  }

  // allowed_applications - computed: true, optional: false, required: false
  public get allowedApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_applications'));
  }

  // allowed_labels - computed: true, optional: false, required: false
  public get allowedLabels() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_labels'));
  }

  // allowed_registries - computed: true, optional: false, required: false
  public get allowedRegistries() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_registries'));
  }

  // antivirus_protection - computed: true, optional: false, required: false
  public get antivirusProtection() {
    return this.getBooleanAttribute('antivirus_protection');
  }

  // aqua_version - computed: true, optional: false, required: false
  public get aquaVersion() {
    return this.getStringAttribute('aqua_version');
  }

  // audit_all - computed: true, optional: false, required: false
  public get auditAll() {
    return this.getBooleanAttribute('audit_all');
  }

  // auto_copy_secrets - computed: true, optional: false, required: false
  public get autoCopySecrets() {
    return this.getBooleanAttribute('auto_copy_secrets');
  }

  // auto_discover_configure_registries - computed: true, optional: false, required: false
  public get autoDiscoverConfigureRegistries() {
    return this.getBooleanAttribute('auto_discover_configure_registries');
  }

  // auto_discovery_enabled - computed: true, optional: false, required: false
  public get autoDiscoveryEnabled() {
    return this.getBooleanAttribute('auto_discovery_enabled');
  }

  // auto_scan_discovered_images_running_containers - computed: true, optional: false, required: false
  public get autoScanDiscoveredImagesRunningContainers() {
    return this.getBooleanAttribute('auto_scan_discovered_images_running_containers');
  }

  // behavioral_engine - computed: true, optional: false, required: false
  public get behavioralEngine() {
    return this.getBooleanAttribute('behavioral_engine');
  }

  // block_admission_control - computed: true, optional: false, required: false
  public get blockAdmissionControl() {
    return this.getBooleanAttribute('block_admission_control');
  }

  // command - computed: true, optional: false, required: false
  private _command = new DataAquasecEnforcerGroupsCommandList(this, "command", false);
  public get command() {
    return this._command;
  }

  // connected_count - computed: true, optional: false, required: false
  public get connectedCount() {
    return this.getNumberAttribute('connected_count');
  }

  // container_activity_protection - computed: true, optional: false, required: false
  public get containerActivityProtection() {
    return this.getBooleanAttribute('container_activity_protection');
  }

  // container_antivirus_protection - computed: true, optional: false, required: false
  public get containerAntivirusProtection() {
    return this.getBooleanAttribute('container_antivirus_protection');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disconnected_count - computed: true, optional: false, required: false
  public get disconnectedCount() {
    return this.getNumberAttribute('disconnected_count');
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }

  // enforcer_image_name - computed: true, optional: false, required: false
  public get enforcerImageName() {
    return this.getStringAttribute('enforcer_image_name');
  }

  // forensics - computed: false, optional: true, required: false
  private _forensics?: boolean | cdktf.IResolvable; 
  public get forensics() {
    return this.getBooleanAttribute('forensics');
  }
  public set forensics(value: boolean | cdktf.IResolvable) {
    this._forensics = value;
  }
  public resetForensics() {
    this._forensics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forensicsInput() {
    return this._forensics;
  }

  // gateway_address - computed: true, optional: false, required: false
  public get gatewayAddress() {
    return this.getStringAttribute('gateway_address');
  }

  // gateway_name - computed: true, optional: false, required: false
  public get gatewayName() {
    return this.getStringAttribute('gateway_name');
  }

  // gateways - computed: true, optional: false, required: false
  public get gateways() {
    return this.getListAttribute('gateways');
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // high_vulns - computed: true, optional: false, required: false
  public get highVulns() {
    return this.getNumberAttribute('high_vulns');
  }

  // host_assurance - computed: true, optional: false, required: false
  public get hostAssurance() {
    return this.getBooleanAttribute('host_assurance');
  }

  // host_behavioral_engine - computed: true, optional: false, required: false
  public get hostBehavioralEngine() {
    return this.getBooleanAttribute('host_behavioral_engine');
  }

  // host_forensics_collection - computed: false, optional: true, required: false
  private _hostForensicsCollection?: boolean | cdktf.IResolvable; 
  public get hostForensicsCollection() {
    return this.getBooleanAttribute('host_forensics_collection');
  }
  public set hostForensicsCollection(value: boolean | cdktf.IResolvable) {
    this._hostForensicsCollection = value;
  }
  public resetHostForensicsCollection() {
    this._hostForensicsCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostForensicsCollectionInput() {
    return this._hostForensicsCollection;
  }

  // host_network_protection - computed: true, optional: false, required: false
  public get hostNetworkProtection() {
    return this.getBooleanAttribute('host_network_protection');
  }

  // host_os - computed: true, optional: false, required: false
  public get hostOs() {
    return this.getStringAttribute('host_os');
  }

  // host_protection - computed: true, optional: false, required: false
  public get hostProtection() {
    return this.getBooleanAttribute('host_protection');
  }

  // host_user_protection - computed: true, optional: false, required: false
  public get hostUserProtection() {
    return this.getBooleanAttribute('host_user_protection');
  }

  // hosts_count - computed: true, optional: false, required: false
  public get hostsCount() {
    return this.getNumberAttribute('hosts_count');
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

  // image_assurance - computed: true, optional: false, required: false
  public get imageAssurance() {
    return this.getBooleanAttribute('image_assurance');
  }

  // install_command - computed: true, optional: false, required: false
  public get installCommand() {
    return this.getStringAttribute('install_command');
  }

  // kube_bench_image_name - computed: true, optional: false, required: false
  public get kubeBenchImageName() {
    return this.getStringAttribute('kube_bench_image_name');
  }

  // last_update - computed: true, optional: false, required: false
  public get lastUpdate() {
    return this.getNumberAttribute('last_update');
  }

  // logical_name - computed: true, optional: false, required: false
  public get logicalName() {
    return this.getStringAttribute('logical_name');
  }

  // low_vulns - computed: true, optional: false, required: false
  public get lowVulns() {
    return this.getNumberAttribute('low_vulns');
  }

  // med_vulns - computed: true, optional: false, required: false
  public get medVulns() {
    return this.getNumberAttribute('med_vulns');
  }

  // micro_enforcer_certs_secrets_name - computed: true, optional: false, required: false
  public get microEnforcerCertsSecretsName() {
    return this.getStringAttribute('micro_enforcer_certs_secrets_name');
  }

  // micro_enforcer_image_name - computed: true, optional: false, required: false
  public get microEnforcerImageName() {
    return this.getStringAttribute('micro_enforcer_image_name');
  }

  // micro_enforcer_injection - computed: true, optional: false, required: false
  public get microEnforcerInjection() {
    return this.getBooleanAttribute('micro_enforcer_injection');
  }

  // micro_enforcer_secrets_name - computed: true, optional: false, required: false
  public get microEnforcerSecretsName() {
    return this.getStringAttribute('micro_enforcer_secrets_name');
  }

  // neg_vulns - computed: true, optional: false, required: false
  public get negVulns() {
    return this.getNumberAttribute('neg_vulns');
  }

  // network_protection - computed: true, optional: false, required: false
  public get networkProtection() {
    return this.getBooleanAttribute('network_protection');
  }

  // orchestrator - computed: true, optional: false, required: false
  private _orchestrator = new DataAquasecEnforcerGroupsOrchestratorList(this, "orchestrator", false);
  public get orchestrator() {
    return this._orchestrator;
  }

  // pas_deployment_link - computed: true, optional: false, required: false
  public get pasDeploymentLink() {
    return this.getStringAttribute('pas_deployment_link');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // risk_explorer_auto_discovery - computed: true, optional: false, required: false
  public get riskExplorerAutoDiscovery() {
    return this.getBooleanAttribute('risk_explorer_auto_discovery');
  }

  // runtime_policy_name - computed: true, optional: false, required: false
  public get runtimePolicyName() {
    return this.getStringAttribute('runtime_policy_name');
  }

  // runtime_type - computed: true, optional: false, required: false
  public get runtimeType() {
    return this.getStringAttribute('runtime_type');
  }

  // schedule_scan_settings - computed: true, optional: false, required: false
  private _scheduleScanSettings = new DataAquasecEnforcerGroupsScheduleScanSettingsList(this, "schedule_scan_settings", false);
  public get scheduleScanSettings() {
    return this._scheduleScanSettings;
  }

  // sync_host_images - computed: true, optional: false, required: false
  public get syncHostImages() {
    return this.getBooleanAttribute('sync_host_images');
  }

  // syscall_enabled - computed: true, optional: false, required: false
  public get syscallEnabled() {
    return this.getBooleanAttribute('syscall_enabled');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_access_control - computed: true, optional: false, required: false
  public get userAccessControl() {
    return this.getBooleanAttribute('user_access_control');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      forensics: cdktf.booleanToTerraform(this._forensics),
      group_id: cdktf.stringToTerraform(this._groupId),
      host_forensics_collection: cdktf.booleanToTerraform(this._hostForensicsCollection),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      forensics: {
        value: cdktf.booleanToHclTerraform(this._forensics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_forensics_collection: {
        value: cdktf.booleanToHclTerraform(this._hostForensicsCollection),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
