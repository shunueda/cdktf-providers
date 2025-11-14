// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightComputeServerSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#account_moid DataIntersightComputeServerSetting#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * User configured state of the locator LED for the server.
  * * `None` - No operation property for locator led.
  * * `On` - The Locator Led is turned on.
  * * `Off` - The Locator Led is turned off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#admin_locator_led_state DataIntersightComputeServerSetting#admin_locator_led_state}
  */
  readonly adminLocatorLedState?: string;
  /**
  * User configured power state of the server.
  * * `Policy` - Power state is set to the default value in the policy.
  * * `PowerOn` - Power state of the server is set to On.
  * * `PowerOff` - Power state is the server set to Off.
  * * `PowerCycle` - Power state the server is reset.
  * * `HardReset` - Power state the server is hard reset.
  * * `Shutdown` - Operating system on the server is shut down.
  * * `Reboot` - Power state of IMC is rebooted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#admin_power_state DataIntersightComputeServerSetting#admin_power_state}
  */
  readonly adminPowerState?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * Clear system event log on a server.
  * * `Ready` - Clear system event log operation is allowed on the server in this state.
  * * `Clear` - Trigger a clear system event log operation on a server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#clear_sel DataIntersightComputeServerSetting#clear_sel}
  */
  readonly clearSel?: string;
  /**
  * The allowed actions on the CMOS Reset.
  * * `Ready` - CMOS Reset operation is allowed to be done on the server in this state.
  * * `Pending` - The identifier to state that the previous CMOS Reset operation on this server has not completed due to a pending power cycle. CMOS Reset operation cannot be done on the server when in this state.
  * * `Reset` - The value that the UI/API needs to provide to trigger a CMOS Reset operation on a server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#cmos_reset DataIntersightComputeServerSetting#cmos_reset}
  */
  readonly cmosReset?: string;
  /**
  * Collect system event log from a server.
  * * `Ready` - Collect system event log operation is allowed on the server in this state.
  * * `Collect` - Trigger a collect system event log operation on a server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#collect_sel DataIntersightComputeServerSetting#collect_sel}
  */
  readonly collectSel?: string;
  /**
  * The configured state of these settings in the target server. The value is any one of Applied, Applying, Failed. Applied - This state denotes that the settings are applied successfully in the target server. Applying - This state denotes that the settings are being applied in the target server. Failed - This state denotes that the settings could not be applied in the target server.
  * * `Applied` - User configured settings are in applied state.
  * * `Applying` - User settings are being applied on the target server.
  * * `Scheduled` - User configured settings are scheduled to be applied.
  * * `Failed` - User configured settings could not be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#config_state DataIntersightComputeServerSetting#config_state}
  */
  readonly configState?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#create_time DataIntersightComputeServerSetting#create_time}
  */
  readonly createTime?: string;
  /**
  * The database identifier of the registered device of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#device_mo_id DataIntersightComputeServerSetting#device_mo_id}
  */
  readonly deviceMoId?: string;
  /**
  * The Distinguished Name unambiguously identifies an object in the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#dn DataIntersightComputeServerSetting#dn}
  */
  readonly dn?: string;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#domain_group_moid DataIntersightComputeServerSetting#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * The allowed actions on the Front Panel Lock.
  * * `None` - Front Panel of the server is set to None state. It is required so that the next frontPanelLockState operation can be triggered.
  * * `Lock` - Front Panel of the server is set to Locked state.
  * * `Unlock` - Front Panel of the server is set to Unlocked state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#front_panel_lock_state DataIntersightComputeServerSetting#front_panel_lock_state}
  */
  readonly frontPanelLockState?: string;
  /**
  * The JSON formatted host initialization configuration containing the basic information for doing an initial boot. The information will be sent to CIMC and stored in host-init.json file on the server. The stored file can only be access using IPMI tool on the host OS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#host_init_configuration DataIntersightComputeServerSetting#host_init_configuration}
  */
  readonly hostInitConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#id DataIntersightComputeServerSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The allowed actions on the vKVM Reset.
  * * `Ready` - Reset vKVM operation is allowed to be done on the server in this state.
  * * `Reset` - The value that the UI/API needs to provide to trigger a Reset vKVM operation on a server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#kvm_reset DataIntersightComputeServerSetting#kvm_reset}
  */
  readonly kvmReset?: string;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#mod_time DataIntersightComputeServerSetting#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#moid DataIntersightComputeServerSetting#moid}
  */
  readonly moid?: string;
  /**
  * The property used to identify the name of the server it is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#name DataIntersightComputeServerSetting#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * The name of the device chosen by user for configuring One-Time Boot device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#one_time_boot_device DataIntersightComputeServerSetting#one_time_boot_device}
  */
  readonly oneTimeBootDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#owners DataIntersightComputeServerSetting#owners}
  */
  readonly owners?: string[];
  /**
  * Reset Correctable and Uncorrectable ECC errors on all the DIMMs present in the server.
  * * `Ready` - Reset memory errors operation is allowed on the server in this state.
  * * `Reset` - Trigger reset memory errors operation on a server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#reset_memory_errors DataIntersightComputeServerSetting#reset_memory_errors}
  */
  readonly resetMemoryErrors?: string;
  /**
  * The Relative Name uniquely identifies an object within a given context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#rn DataIntersightComputeServerSetting#rn}
  */
  readonly rn?: string;
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#shared_scope DataIntersightComputeServerSetting#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * Clear the configuration of TPM chip in the server.
  * * `None` - Perform no action on the TPM.
  * * `ClearTpm` - Clear the configuration and restore factory defaults of TPM chip in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#tpm_reset DataIntersightComputeServerSetting#tpm_reset}
  */
  readonly tpmReset?: string;
  /**
  * By default, the tunneled vKVM property appears in Ready state. The property can be configured by performing allowed actions. Once the property is configured, it reverts to Ready state.
  * * `Ready` - Tunneled vKVM is ready to be configured on the server.
  * * `Enable` - Tunneled vKVM is enabled for the server.
  * * `Disable` - Tunneled vKVM is disabled for the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#tunneled_kvm_state DataIntersightComputeServerSetting#tunneled_kvm_state}
  */
  readonly tunneledKvmState?: string;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#ancestors DataIntersightComputeServerSetting#ancestors}
  */
  readonly ancestors?: DataIntersightComputeServerSettingAncestors[] | cdktf.IResolvable;
  /**
  * certificates_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#certificates_action DataIntersightComputeServerSetting#certificates_action}
  */
  readonly certificatesAction?: DataIntersightComputeServerSettingCertificatesAction;
  /**
  * locator_led block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#locator_led DataIntersightComputeServerSetting#locator_led}
  */
  readonly locatorLed?: DataIntersightComputeServerSettingLocatorLed;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#parent DataIntersightComputeServerSetting#parent}
  */
  readonly parent?: DataIntersightComputeServerSettingParent;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#permission_resources DataIntersightComputeServerSetting#permission_resources}
  */
  readonly permissionResources?: DataIntersightComputeServerSettingPermissionResources[] | cdktf.IResolvable;
  /**
  * persistent_memory_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#persistent_memory_operation DataIntersightComputeServerSetting#persistent_memory_operation}
  */
  readonly persistentMemoryOperation?: DataIntersightComputeServerSettingPersistentMemoryOperation;
  /**
  * personality_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#personality_setting DataIntersightComputeServerSetting#personality_setting}
  */
  readonly personalitySetting?: DataIntersightComputeServerSettingPersonalitySetting;
  /**
  * registered_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#registered_device DataIntersightComputeServerSetting#registered_device}
  */
  readonly registeredDevice?: DataIntersightComputeServerSettingRegisteredDevice;
  /**
  * running_workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#running_workflow DataIntersightComputeServerSetting#running_workflow}
  */
  readonly runningWorkflow?: DataIntersightComputeServerSettingRunningWorkflow;
  /**
  * server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#server DataIntersightComputeServerSetting#server}
  */
  readonly server?: DataIntersightComputeServerSettingServer;
  /**
  * server_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#server_config DataIntersightComputeServerSetting#server_config}
  */
  readonly serverConfig?: DataIntersightComputeServerSettingServerConfig;
  /**
  * server_op_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#server_op_status DataIntersightComputeServerSetting#server_op_status}
  */
  readonly serverOpStatus?: DataIntersightComputeServerSettingServerOpStatus[] | cdktf.IResolvable;
  /**
  * storage_controller_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#storage_controller_operation DataIntersightComputeServerSetting#storage_controller_operation}
  */
  readonly storageControllerOperation?: DataIntersightComputeServerSettingStorageControllerOperation;
  /**
  * storage_physical_drive_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#storage_physical_drive_operation DataIntersightComputeServerSetting#storage_physical_drive_operation}
  */
  readonly storagePhysicalDriveOperation?: DataIntersightComputeServerSettingStoragePhysicalDriveOperation;
  /**
  * storage_utility_image_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#storage_utility_image_operation DataIntersightComputeServerSetting#storage_utility_image_operation}
  */
  readonly storageUtilityImageOperation?: DataIntersightComputeServerSettingStorageUtilityImageOperation;
  /**
  * storage_virtual_drive_operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#storage_virtual_drive_operation DataIntersightComputeServerSetting#storage_virtual_drive_operation}
  */
  readonly storageVirtualDriveOperation?: DataIntersightComputeServerSettingStorageVirtualDriveOperation;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#tags DataIntersightComputeServerSetting#tags}
  */
  readonly tags?: DataIntersightComputeServerSettingTags[] | cdktf.IResolvable;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#version_context DataIntersightComputeServerSetting#version_context}
  */
  readonly versionContext?: DataIntersightComputeServerSettingVersionContext;
}
export interface DataIntersightComputeServerSettingResultsAncestors {
}

export function dataIntersightComputeServerSettingResultsAncestorsToTerraform(struct?: DataIntersightComputeServerSettingResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsAncestorsToHclTerraform(struct?: DataIntersightComputeServerSettingResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsAncestors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightComputeServerSettingResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsAncestorsOutputReference {
    return new DataIntersightComputeServerSettingResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsCertificatesActionCertificateIssuer {
}

export function dataIntersightComputeServerSettingResultsCertificatesActionCertificateIssuerToTerraform(struct?: DataIntersightComputeServerSettingResultsCertificatesActionCertificateIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsCertificatesActionCertificateIssuerToHclTerraform(struct?: DataIntersightComputeServerSettingResultsCertificatesActionCertificateIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsCertificatesActionCertificateIssuerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsCertificatesActionCertificateIssuer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsCertificatesActionCertificateIssuer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getListAttribute('country');
  }

  // locality - computed: true, optional: false, required: false
  public get locality() {
    return this.getListAttribute('locality');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getListAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getListAttribute('organizational_unit');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getListAttribute('state');
  }
}

export class DataIntersightComputeServerSettingResultsCertificatesActionCertificateIssuerList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsCertificatesActionCertificateIssuerOutputReference {
    return new DataIntersightComputeServerSettingResultsCertificatesActionCertificateIssuerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsCertificatesActionCertificateSubject {
}

export function dataIntersightComputeServerSettingResultsCertificatesActionCertificateSubjectToTerraform(struct?: DataIntersightComputeServerSettingResultsCertificatesActionCertificateSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsCertificatesActionCertificateSubjectToHclTerraform(struct?: DataIntersightComputeServerSettingResultsCertificatesActionCertificateSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsCertificatesActionCertificateSubjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsCertificatesActionCertificateSubject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsCertificatesActionCertificateSubject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getListAttribute('country');
  }

  // locality - computed: true, optional: false, required: false
  public get locality() {
    return this.getListAttribute('locality');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getListAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getListAttribute('organizational_unit');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getListAttribute('state');
  }
}

export class DataIntersightComputeServerSettingResultsCertificatesActionCertificateSubjectList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsCertificatesActionCertificateSubjectOutputReference {
    return new DataIntersightComputeServerSettingResultsCertificatesActionCertificateSubjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsCertificatesActionCertificate {
}

export function dataIntersightComputeServerSettingResultsCertificatesActionCertificateToTerraform(struct?: DataIntersightComputeServerSettingResultsCertificatesActionCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsCertificatesActionCertificateToHclTerraform(struct?: DataIntersightComputeServerSettingResultsCertificatesActionCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsCertificatesActionCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsCertificatesActionCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsCertificatesActionCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // issuer - computed: true, optional: false, required: false
  private _issuer = new DataIntersightComputeServerSettingResultsCertificatesActionCertificateIssuerList(this, "issuer", false);
  public get issuer() {
    return this._issuer;
  }

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // pem_certificate - computed: true, optional: false, required: false
  public get pemCertificate() {
    return this.getStringAttribute('pem_certificate');
  }

  // sha256_fingerprint - computed: true, optional: false, required: false
  public get sha256Fingerprint() {
    return this.getStringAttribute('sha256_fingerprint');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // subject - computed: true, optional: false, required: false
  private _subject = new DataIntersightComputeServerSettingResultsCertificatesActionCertificateSubjectList(this, "subject", false);
  public get subject() {
    return this._subject;
  }
}

export class DataIntersightComputeServerSettingResultsCertificatesActionCertificateList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsCertificatesActionCertificateOutputReference {
    return new DataIntersightComputeServerSettingResultsCertificatesActionCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsCertificatesAction {
}

export function dataIntersightComputeServerSettingResultsCertificatesActionToTerraform(struct?: DataIntersightComputeServerSettingResultsCertificatesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsCertificatesActionToHclTerraform(struct?: DataIntersightComputeServerSettingResultsCertificatesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsCertificatesActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsCertificatesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsCertificatesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // certificate - computed: true, optional: false, required: false
  private _certificate = new DataIntersightComputeServerSettingResultsCertificatesActionCertificateList(this, "certificate", false);
  public get certificate() {
    return this._certificate;
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightComputeServerSettingResultsCertificatesActionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsCertificatesActionOutputReference {
    return new DataIntersightComputeServerSettingResultsCertificatesActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsLocatorLed {
}

export function dataIntersightComputeServerSettingResultsLocatorLedToTerraform(struct?: DataIntersightComputeServerSettingResultsLocatorLed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsLocatorLedToHclTerraform(struct?: DataIntersightComputeServerSettingResultsLocatorLed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsLocatorLedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsLocatorLed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsLocatorLed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightComputeServerSettingResultsLocatorLedList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsLocatorLedOutputReference {
    return new DataIntersightComputeServerSettingResultsLocatorLedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsParent {
}

export function dataIntersightComputeServerSettingResultsParentToTerraform(struct?: DataIntersightComputeServerSettingResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsParentToHclTerraform(struct?: DataIntersightComputeServerSettingResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightComputeServerSettingResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsParentOutputReference {
    return new DataIntersightComputeServerSettingResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsPermissionResources {
}

export function dataIntersightComputeServerSettingResultsPermissionResourcesToTerraform(struct?: DataIntersightComputeServerSettingResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsPermissionResourcesToHclTerraform(struct?: DataIntersightComputeServerSettingResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsPermissionResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightComputeServerSettingResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsPermissionResourcesOutputReference {
    return new DataIntersightComputeServerSettingResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsPersistentMemoryOperationModules {
}

export function dataIntersightComputeServerSettingResultsPersistentMemoryOperationModulesToTerraform(struct?: DataIntersightComputeServerSettingResultsPersistentMemoryOperationModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsPersistentMemoryOperationModulesToHclTerraform(struct?: DataIntersightComputeServerSettingResultsPersistentMemoryOperationModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsPersistentMemoryOperationModulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsPersistentMemoryOperationModules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsPersistentMemoryOperationModules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // socket_id - computed: true, optional: false, required: false
  public get socketId() {
    return this.getStringAttribute('socket_id');
  }

  // socket_memory_id - computed: true, optional: false, required: false
  public get socketMemoryId() {
    return this.getStringAttribute('socket_memory_id');
  }
}

export class DataIntersightComputeServerSettingResultsPersistentMemoryOperationModulesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsPersistentMemoryOperationModulesOutputReference {
    return new DataIntersightComputeServerSettingResultsPersistentMemoryOperationModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsPersistentMemoryOperation {
}

export function dataIntersightComputeServerSettingResultsPersistentMemoryOperationToTerraform(struct?: DataIntersightComputeServerSettingResultsPersistentMemoryOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsPersistentMemoryOperationToHclTerraform(struct?: DataIntersightComputeServerSettingResultsPersistentMemoryOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsPersistentMemoryOperationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsPersistentMemoryOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsPersistentMemoryOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // admin_action - computed: true, optional: false, required: false
  public get adminAction() {
    return this.getStringAttribute('admin_action');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // is_secure_passphrase_set - computed: true, optional: false, required: false
  public get isSecurePassphraseSet() {
    return this.getBooleanAttribute('is_secure_passphrase_set');
  }

  // modules - computed: true, optional: false, required: false
  private _modules = new DataIntersightComputeServerSettingResultsPersistentMemoryOperationModulesList(this, "modules", false);
  public get modules() {
    return this._modules;
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // secure_passphrase - computed: true, optional: false, required: false
  public get securePassphrase() {
    return this.getStringAttribute('secure_passphrase');
  }
}

export class DataIntersightComputeServerSettingResultsPersistentMemoryOperationList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsPersistentMemoryOperationOutputReference {
    return new DataIntersightComputeServerSettingResultsPersistentMemoryOperationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsPersonalitySetting {
}

export function dataIntersightComputeServerSettingResultsPersonalitySettingToTerraform(struct?: DataIntersightComputeServerSettingResultsPersonalitySetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsPersonalitySettingToHclTerraform(struct?: DataIntersightComputeServerSettingResultsPersonalitySetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsPersonalitySettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsPersonalitySetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsPersonalitySetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_information - computed: true, optional: false, required: false
  public get additionalInformation() {
    return this.getStringAttribute('additional_information');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // personality - computed: true, optional: false, required: false
  public get personality() {
    return this.getStringAttribute('personality');
  }
}

export class DataIntersightComputeServerSettingResultsPersonalitySettingList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsPersonalitySettingOutputReference {
    return new DataIntersightComputeServerSettingResultsPersonalitySettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsRegisteredDevice {
}

export function dataIntersightComputeServerSettingResultsRegisteredDeviceToTerraform(struct?: DataIntersightComputeServerSettingResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsRegisteredDeviceToHclTerraform(struct?: DataIntersightComputeServerSettingResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsRegisteredDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsRegisteredDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsRegisteredDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightComputeServerSettingResultsRegisteredDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsRegisteredDeviceOutputReference {
    return new DataIntersightComputeServerSettingResultsRegisteredDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsRunningWorkflow {
}

export function dataIntersightComputeServerSettingResultsRunningWorkflowToTerraform(struct?: DataIntersightComputeServerSettingResultsRunningWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsRunningWorkflowToHclTerraform(struct?: DataIntersightComputeServerSettingResultsRunningWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsRunningWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsRunningWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsRunningWorkflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightComputeServerSettingResultsRunningWorkflowList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsRunningWorkflowOutputReference {
    return new DataIntersightComputeServerSettingResultsRunningWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsServer {
}

export function dataIntersightComputeServerSettingResultsServerToTerraform(struct?: DataIntersightComputeServerSettingResultsServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsServerToHclTerraform(struct?: DataIntersightComputeServerSettingResultsServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightComputeServerSettingResultsServerList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsServerOutputReference {
    return new DataIntersightComputeServerSettingResultsServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsServerConfig {
}

export function dataIntersightComputeServerSettingResultsServerConfigToTerraform(struct?: DataIntersightComputeServerSettingResultsServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsServerConfigToHclTerraform(struct?: DataIntersightComputeServerSettingResultsServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsServerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // asset_tag - computed: true, optional: false, required: false
  public get assetTag() {
    return this.getStringAttribute('asset_tag');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // user_label - computed: true, optional: false, required: false
  public get userLabel() {
    return this.getStringAttribute('user_label');
  }
}

export class DataIntersightComputeServerSettingResultsServerConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsServerConfigOutputReference {
    return new DataIntersightComputeServerSettingResultsServerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsServerOpStatus {
}

export function dataIntersightComputeServerSettingResultsServerOpStatusToTerraform(struct?: DataIntersightComputeServerSettingResultsServerOpStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsServerOpStatusToHclTerraform(struct?: DataIntersightComputeServerSettingResultsServerOpStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsServerOpStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsServerOpStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsServerOpStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // config_state - computed: true, optional: false, required: false
  public get configState() {
    return this.getStringAttribute('config_state');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // workflow_info_moid - computed: true, optional: false, required: false
  public get workflowInfoMoid() {
    return this.getStringAttribute('workflow_info_moid');
  }

  // workflow_type - computed: true, optional: false, required: false
  public get workflowType() {
    return this.getStringAttribute('workflow_type');
  }
}

export class DataIntersightComputeServerSettingResultsServerOpStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsServerOpStatusOutputReference {
    return new DataIntersightComputeServerSettingResultsServerOpStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsStorageControllerOperation {
}

export function dataIntersightComputeServerSettingResultsStorageControllerOperationToTerraform(struct?: DataIntersightComputeServerSettingResultsStorageControllerOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsStorageControllerOperationToHclTerraform(struct?: DataIntersightComputeServerSettingResultsStorageControllerOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsStorageControllerOperationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsStorageControllerOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsStorageControllerOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // admin_action - computed: true, optional: false, required: false
  public get adminAction() {
    return this.getStringAttribute('admin_action');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // controller_id - computed: true, optional: false, required: false
  public get controllerId() {
    return this.getStringAttribute('controller_id');
  }

  // encryption_key - computed: true, optional: false, required: false
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // remote_mode - computed: true, optional: false, required: false
  public get remoteMode() {
    return this.getBooleanAttribute('remote_mode');
  }
}

export class DataIntersightComputeServerSettingResultsStorageControllerOperationList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsStorageControllerOperationOutputReference {
    return new DataIntersightComputeServerSettingResultsStorageControllerOperationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationPhysicalDrives {
}

export function dataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationPhysicalDrivesToTerraform(struct?: DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationPhysicalDrives): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationPhysicalDrivesToHclTerraform(struct?: DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationPhysicalDrives): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationPhysicalDrivesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationPhysicalDrives | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationPhysicalDrives | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // slot_number - computed: true, optional: false, required: false
  public get slotNumber() {
    return this.getNumberAttribute('slot_number');
  }
}

export class DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationPhysicalDrivesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationPhysicalDrivesOutputReference {
    return new DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationPhysicalDrivesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperation {
}

export function dataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationToTerraform(struct?: DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationToHclTerraform(struct?: DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // admin_action - computed: true, optional: false, required: false
  public get adminAction() {
    return this.getStringAttribute('admin_action');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // controller_id - computed: true, optional: false, required: false
  public get controllerId() {
    return this.getStringAttribute('controller_id');
  }

  // drive_slots - computed: true, optional: false, required: false
  public get driveSlots() {
    return this.getListAttribute('drive_slots');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // physical_drives - computed: true, optional: false, required: false
  private _physicalDrives = new DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationPhysicalDrivesList(this, "physical_drives", false);
  public get physicalDrives() {
    return this._physicalDrives;
  }
}

export class DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationOutputReference {
    return new DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsStorageUtilityImageOperation {
}

export function dataIntersightComputeServerSettingResultsStorageUtilityImageOperationToTerraform(struct?: DataIntersightComputeServerSettingResultsStorageUtilityImageOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsStorageUtilityImageOperationToHclTerraform(struct?: DataIntersightComputeServerSettingResultsStorageUtilityImageOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsStorageUtilityImageOperationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsStorageUtilityImageOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsStorageUtilityImageOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightComputeServerSettingResultsStorageUtilityImageOperationList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsStorageUtilityImageOperationOutputReference {
    return new DataIntersightComputeServerSettingResultsStorageUtilityImageOperationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsStorageVirtualDriveOperationVirtualDrives {
}

export function dataIntersightComputeServerSettingResultsStorageVirtualDriveOperationVirtualDrivesToTerraform(struct?: DataIntersightComputeServerSettingResultsStorageVirtualDriveOperationVirtualDrives): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsStorageVirtualDriveOperationVirtualDrivesToHclTerraform(struct?: DataIntersightComputeServerSettingResultsStorageVirtualDriveOperationVirtualDrives): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsStorageVirtualDriveOperationVirtualDrivesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsStorageVirtualDriveOperationVirtualDrives | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsStorageVirtualDriveOperationVirtualDrives | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightComputeServerSettingResultsStorageVirtualDriveOperationVirtualDrivesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsStorageVirtualDriveOperationVirtualDrivesOutputReference {
    return new DataIntersightComputeServerSettingResultsStorageVirtualDriveOperationVirtualDrivesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsStorageVirtualDriveOperation {
}

export function dataIntersightComputeServerSettingResultsStorageVirtualDriveOperationToTerraform(struct?: DataIntersightComputeServerSettingResultsStorageVirtualDriveOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsStorageVirtualDriveOperationToHclTerraform(struct?: DataIntersightComputeServerSettingResultsStorageVirtualDriveOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsStorageVirtualDriveOperationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsStorageVirtualDriveOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsStorageVirtualDriveOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // admin_action - computed: true, optional: false, required: false
  public get adminAction() {
    return this.getStringAttribute('admin_action');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // controller_id - computed: true, optional: false, required: false
  public get controllerId() {
    return this.getStringAttribute('controller_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // virtual_drives - computed: true, optional: false, required: false
  private _virtualDrives = new DataIntersightComputeServerSettingResultsStorageVirtualDriveOperationVirtualDrivesList(this, "virtual_drives", false);
  public get virtualDrives() {
    return this._virtualDrives;
  }
}

export class DataIntersightComputeServerSettingResultsStorageVirtualDriveOperationList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsStorageVirtualDriveOperationOutputReference {
    return new DataIntersightComputeServerSettingResultsStorageVirtualDriveOperationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsTagsAncestorDefinitions {
}

export function dataIntersightComputeServerSettingResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightComputeServerSettingResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightComputeServerSettingResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsTagsAncestorDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightComputeServerSettingResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightComputeServerSettingResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsTagsDefinition {
}

export function dataIntersightComputeServerSettingResultsTagsDefinitionToTerraform(struct?: DataIntersightComputeServerSettingResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsTagsDefinitionToHclTerraform(struct?: DataIntersightComputeServerSettingResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightComputeServerSettingResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsTagsDefinitionOutputReference {
    return new DataIntersightComputeServerSettingResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsTags {
}

export function dataIntersightComputeServerSettingResultsTagsToTerraform(struct?: DataIntersightComputeServerSettingResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsTagsToHclTerraform(struct?: DataIntersightComputeServerSettingResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestor_definitions - computed: true, optional: false, required: false
  private _ancestorDefinitions = new DataIntersightComputeServerSettingResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightComputeServerSettingResultsTagsDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // propagated - computed: true, optional: false, required: false
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }

  // sys_tag - computed: true, optional: false, required: false
  public get sysTag() {
    return this.getBooleanAttribute('sys_tag');
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

export class DataIntersightComputeServerSettingResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsTagsOutputReference {
    return new DataIntersightComputeServerSettingResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsVersionContextInterestedMos {
}

export function dataIntersightComputeServerSettingResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightComputeServerSettingResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightComputeServerSettingResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsVersionContextInterestedMos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightComputeServerSettingResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightComputeServerSettingResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsVersionContextRefMo {
}

export function dataIntersightComputeServerSettingResultsVersionContextRefMoToTerraform(struct?: DataIntersightComputeServerSettingResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightComputeServerSettingResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightComputeServerSettingResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsVersionContextRefMoOutputReference {
    return new DataIntersightComputeServerSettingResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResultsVersionContext {
}

export function dataIntersightComputeServerSettingResultsVersionContextToTerraform(struct?: DataIntersightComputeServerSettingResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsVersionContextToHclTerraform(struct?: DataIntersightComputeServerSettingResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResultsVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // interested_mos - computed: true, optional: false, required: false
  private _interestedMos = new DataIntersightComputeServerSettingResultsVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }

  // marked_for_deletion - computed: true, optional: false, required: false
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ref_mo - computed: true, optional: false, required: false
  private _refMo = new DataIntersightComputeServerSettingResultsVersionContextRefMoList(this, "ref_mo", false);
  public get refMo() {
    return this._refMo;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // version_type - computed: true, optional: false, required: false
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
}

export class DataIntersightComputeServerSettingResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsVersionContextOutputReference {
    return new DataIntersightComputeServerSettingResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingResults {
}

export function dataIntersightComputeServerSettingResultsToTerraform(struct?: DataIntersightComputeServerSettingResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightComputeServerSettingResultsToHclTerraform(struct?: DataIntersightComputeServerSettingResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightComputeServerSettingResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_moid - computed: true, optional: false, required: false
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // admin_locator_led_state - computed: true, optional: false, required: false
  public get adminLocatorLedState() {
    return this.getStringAttribute('admin_locator_led_state');
  }

  // admin_power_state - computed: true, optional: false, required: false
  public get adminPowerState() {
    return this.getStringAttribute('admin_power_state');
  }

  // ancestors - computed: true, optional: false, required: false
  private _ancestors = new DataIntersightComputeServerSettingResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // certificates_action - computed: true, optional: false, required: false
  private _certificatesAction = new DataIntersightComputeServerSettingResultsCertificatesActionList(this, "certificates_action", false);
  public get certificatesAction() {
    return this._certificatesAction;
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // clear_sel - computed: true, optional: false, required: false
  public get clearSel() {
    return this.getStringAttribute('clear_sel');
  }

  // cmos_reset - computed: true, optional: false, required: false
  public get cmosReset() {
    return this.getStringAttribute('cmos_reset');
  }

  // collect_sel - computed: true, optional: false, required: false
  public get collectSel() {
    return this.getStringAttribute('collect_sel');
  }

  // config_state - computed: true, optional: false, required: false
  public get configState() {
    return this.getStringAttribute('config_state');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // device_mo_id - computed: true, optional: false, required: false
  public get deviceMoId() {
    return this.getStringAttribute('device_mo_id');
  }

  // dn - computed: true, optional: false, required: false
  public get dn() {
    return this.getStringAttribute('dn');
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // front_panel_lock_state - computed: true, optional: false, required: false
  public get frontPanelLockState() {
    return this.getStringAttribute('front_panel_lock_state');
  }

  // host_init_configuration - computed: true, optional: false, required: false
  public get hostInitConfiguration() {
    return this.getStringAttribute('host_init_configuration');
  }

  // kvm_reset - computed: true, optional: false, required: false
  public get kvmReset() {
    return this.getStringAttribute('kvm_reset');
  }

  // locator_led - computed: true, optional: false, required: false
  private _locatorLed = new DataIntersightComputeServerSettingResultsLocatorLedList(this, "locator_led", false);
  public get locatorLed() {
    return this._locatorLed;
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // one_time_boot_device - computed: true, optional: false, required: false
  public get oneTimeBootDevice() {
    return this.getStringAttribute('one_time_boot_device');
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataIntersightComputeServerSettingResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightComputeServerSettingResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }

  // persistent_memory_operation - computed: true, optional: false, required: false
  private _persistentMemoryOperation = new DataIntersightComputeServerSettingResultsPersistentMemoryOperationList(this, "persistent_memory_operation", false);
  public get persistentMemoryOperation() {
    return this._persistentMemoryOperation;
  }

  // personality_setting - computed: true, optional: false, required: false
  private _personalitySetting = new DataIntersightComputeServerSettingResultsPersonalitySettingList(this, "personality_setting", false);
  public get personalitySetting() {
    return this._personalitySetting;
  }

  // registered_device - computed: true, optional: false, required: false
  private _registeredDevice = new DataIntersightComputeServerSettingResultsRegisteredDeviceList(this, "registered_device", false);
  public get registeredDevice() {
    return this._registeredDevice;
  }

  // reset_memory_errors - computed: true, optional: false, required: false
  public get resetMemoryErrors() {
    return this.getStringAttribute('reset_memory_errors');
  }

  // rn - computed: true, optional: false, required: false
  public get rn() {
    return this.getStringAttribute('rn');
  }

  // running_workflow - computed: true, optional: false, required: false
  private _runningWorkflow = new DataIntersightComputeServerSettingResultsRunningWorkflowList(this, "running_workflow", false);
  public get runningWorkflow() {
    return this._runningWorkflow;
  }

  // server - computed: true, optional: false, required: false
  private _server = new DataIntersightComputeServerSettingResultsServerList(this, "server", false);
  public get server() {
    return this._server;
  }

  // server_config - computed: true, optional: false, required: false
  private _serverConfig = new DataIntersightComputeServerSettingResultsServerConfigList(this, "server_config", false);
  public get serverConfig() {
    return this._serverConfig;
  }

  // server_op_status - computed: true, optional: false, required: false
  private _serverOpStatus = new DataIntersightComputeServerSettingResultsServerOpStatusList(this, "server_op_status", false);
  public get serverOpStatus() {
    return this._serverOpStatus;
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // storage_controller_operation - computed: true, optional: false, required: false
  private _storageControllerOperation = new DataIntersightComputeServerSettingResultsStorageControllerOperationList(this, "storage_controller_operation", false);
  public get storageControllerOperation() {
    return this._storageControllerOperation;
  }

  // storage_physical_drive_operation - computed: true, optional: false, required: false
  private _storagePhysicalDriveOperation = new DataIntersightComputeServerSettingResultsStoragePhysicalDriveOperationList(this, "storage_physical_drive_operation", false);
  public get storagePhysicalDriveOperation() {
    return this._storagePhysicalDriveOperation;
  }

  // storage_utility_image_operation - computed: true, optional: false, required: false
  private _storageUtilityImageOperation = new DataIntersightComputeServerSettingResultsStorageUtilityImageOperationList(this, "storage_utility_image_operation", false);
  public get storageUtilityImageOperation() {
    return this._storageUtilityImageOperation;
  }

  // storage_virtual_drive_operation - computed: true, optional: false, required: false
  private _storageVirtualDriveOperation = new DataIntersightComputeServerSettingResultsStorageVirtualDriveOperationList(this, "storage_virtual_drive_operation", false);
  public get storageVirtualDriveOperation() {
    return this._storageVirtualDriveOperation;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightComputeServerSettingResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tpm_reset - computed: true, optional: false, required: false
  public get tpmReset() {
    return this.getStringAttribute('tpm_reset');
  }

  // tunneled_kvm_state - computed: true, optional: false, required: false
  public get tunneledKvmState() {
    return this.getStringAttribute('tunneled_kvm_state');
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightComputeServerSettingResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }
}

export class DataIntersightComputeServerSettingResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightComputeServerSettingResultsOutputReference {
    return new DataIntersightComputeServerSettingResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#moid DataIntersightComputeServerSetting#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#selector DataIntersightComputeServerSetting#selector}
  */
  readonly selector?: string;
}

export function dataIntersightComputeServerSettingAncestorsToTerraform(struct?: DataIntersightComputeServerSettingAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightComputeServerSettingAncestorsToHclTerraform(struct?: DataIntersightComputeServerSettingAncestors | cdktf.IResolvable): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingAncestors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingAncestors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightComputeServerSettingAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightComputeServerSettingAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightComputeServerSettingAncestorsOutputReference {
    return new DataIntersightComputeServerSettingAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingCertificatesActionCertificateIssuer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * A required component that identifies a person or an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#common_name DataIntersightComputeServerSetting#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#country DataIntersightComputeServerSetting#country}
  */
  readonly country?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#locality DataIntersightComputeServerSetting#locality}
  */
  readonly locality?: string[];
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#organization DataIntersightComputeServerSetting#organization}
  */
  readonly organization?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#organizational_unit DataIntersightComputeServerSetting#organizational_unit}
  */
  readonly organizationalUnit?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#state DataIntersightComputeServerSetting#state}
  */
  readonly state?: string[];
}

export function dataIntersightComputeServerSettingCertificatesActionCertificateIssuerToTerraform(struct?: DataIntersightComputeServerSettingCertificatesActionCertificateIssuerOutputReference | DataIntersightComputeServerSettingCertificatesActionCertificateIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.country),
    locality: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locality),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    organization: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organization),
    organizational_unit: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organizationalUnit),
    state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.state),
  }
}


export function dataIntersightComputeServerSettingCertificatesActionCertificateIssuerToHclTerraform(struct?: DataIntersightComputeServerSettingCertificatesActionCertificateIssuerOutputReference | DataIntersightComputeServerSettingCertificatesActionCertificateIssuer): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.country),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    locality: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locality),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.organization),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    organizational_unit: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.organizationalUnit),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.state),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingCertificatesActionCertificateIssuerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingCertificatesActionCertificateIssuer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingCertificatesActionCertificateIssuer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._locality = undefined;
      this._objectType = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._commonName = value.commonName;
      this._country = value.country;
      this._locality = value.locality;
      this._objectType = value.objectType;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._state = value.state;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string[]; 
  public get country() {
    return this.getListAttribute('country');
  }
  public set country(value: string[]) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string[]; 
  public get locality() {
    return this.getListAttribute('locality');
  }
  public set locality(value: string[]) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string[]; 
  public get organization() {
    return this.getListAttribute('organization');
  }
  public set organization(value: string[]) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string[]; 
  public get organizationalUnit() {
    return this.getListAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string[]) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string[]; 
  public get state() {
    return this.getListAttribute('state');
  }
  public set state(value: string[]) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface DataIntersightComputeServerSettingCertificatesActionCertificateSubject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * A required component that identifies a person or an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#common_name DataIntersightComputeServerSetting#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#country DataIntersightComputeServerSetting#country}
  */
  readonly country?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#locality DataIntersightComputeServerSetting#locality}
  */
  readonly locality?: string[];
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#organization DataIntersightComputeServerSetting#organization}
  */
  readonly organization?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#organizational_unit DataIntersightComputeServerSetting#organizational_unit}
  */
  readonly organizationalUnit?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#state DataIntersightComputeServerSetting#state}
  */
  readonly state?: string[];
}

export function dataIntersightComputeServerSettingCertificatesActionCertificateSubjectToTerraform(struct?: DataIntersightComputeServerSettingCertificatesActionCertificateSubjectOutputReference | DataIntersightComputeServerSettingCertificatesActionCertificateSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.country),
    locality: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locality),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    organization: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organization),
    organizational_unit: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organizationalUnit),
    state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.state),
  }
}


export function dataIntersightComputeServerSettingCertificatesActionCertificateSubjectToHclTerraform(struct?: DataIntersightComputeServerSettingCertificatesActionCertificateSubjectOutputReference | DataIntersightComputeServerSettingCertificatesActionCertificateSubject): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.country),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    locality: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locality),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.organization),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    organizational_unit: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.organizationalUnit),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.state),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingCertificatesActionCertificateSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingCertificatesActionCertificateSubject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingCertificatesActionCertificateSubject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._locality = undefined;
      this._objectType = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._commonName = value.commonName;
      this._country = value.country;
      this._locality = value.locality;
      this._objectType = value.objectType;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._state = value.state;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string[]; 
  public get country() {
    return this.getListAttribute('country');
  }
  public set country(value: string[]) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string[]; 
  public get locality() {
    return this.getListAttribute('locality');
  }
  public set locality(value: string[]) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string[]; 
  public get organization() {
    return this.getListAttribute('organization');
  }
  public set organization(value: string[]) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string[]; 
  public get organizationalUnit() {
    return this.getListAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string[]) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string[]; 
  public get state() {
    return this.getListAttribute('state');
  }
  public set state(value: string[]) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface DataIntersightComputeServerSettingCertificatesActionCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The date on which the certificate's validity period ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#not_after DataIntersightComputeServerSetting#not_after}
  */
  readonly notAfter?: string;
  /**
  * The date on which the certificate's validity period begins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#not_before DataIntersightComputeServerSetting#not_before}
  */
  readonly notBefore?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * The base64 encoded certificate in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#pem_certificate DataIntersightComputeServerSetting#pem_certificate}
  */
  readonly pemCertificate?: string;
  /**
  * The computed SHA-256 fingerprint of the certificate. Equivalent to 'openssl x509 -fingerprint -sha256'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#sha256_fingerprint DataIntersightComputeServerSetting#sha256_fingerprint}
  */
  readonly sha256Fingerprint?: string;
  /**
  * Signature algorithm, as specified in [RFC 5280](https://tools.ietf.org/html/rfc5280).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#signature_algorithm DataIntersightComputeServerSetting#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * issuer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#issuer DataIntersightComputeServerSetting#issuer}
  */
  readonly issuer?: DataIntersightComputeServerSettingCertificatesActionCertificateIssuer;
  /**
  * subject block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#subject DataIntersightComputeServerSetting#subject}
  */
  readonly subject?: DataIntersightComputeServerSettingCertificatesActionCertificateSubject;
}

export function dataIntersightComputeServerSettingCertificatesActionCertificateToTerraform(struct?: DataIntersightComputeServerSettingCertificatesActionCertificateOutputReference | DataIntersightComputeServerSettingCertificatesActionCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    not_after: cdktf.stringToTerraform(struct!.notAfter),
    not_before: cdktf.stringToTerraform(struct!.notBefore),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    pem_certificate: cdktf.stringToTerraform(struct!.pemCertificate),
    sha256_fingerprint: cdktf.stringToTerraform(struct!.sha256Fingerprint),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
    issuer: dataIntersightComputeServerSettingCertificatesActionCertificateIssuerToTerraform(struct!.issuer),
    subject: dataIntersightComputeServerSettingCertificatesActionCertificateSubjectToTerraform(struct!.subject),
  }
}


export function dataIntersightComputeServerSettingCertificatesActionCertificateToHclTerraform(struct?: DataIntersightComputeServerSettingCertificatesActionCertificateOutputReference | DataIntersightComputeServerSettingCertificatesActionCertificate): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_after: {
      value: cdktf.stringToHclTerraform(struct!.notAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_before: {
      value: cdktf.stringToHclTerraform(struct!.notBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pem_certificate: {
      value: cdktf.stringToHclTerraform(struct!.pemCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sha256_fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.sha256Fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: dataIntersightComputeServerSettingCertificatesActionCertificateIssuerToHclTerraform(struct!.issuer),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightComputeServerSettingCertificatesActionCertificateIssuerList",
    },
    subject: {
      value: dataIntersightComputeServerSettingCertificatesActionCertificateSubjectToHclTerraform(struct!.subject),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightComputeServerSettingCertificatesActionCertificateSubjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingCertificatesActionCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingCertificatesActionCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._notAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAfter = this._notAfter;
    }
    if (this._notBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.notBefore = this._notBefore;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._pemCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemCertificate = this._pemCertificate;
    }
    if (this._sha256Fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Fingerprint = this._sha256Fingerprint;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    if (this._issuer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer?.internalValue;
    }
    if (this._subject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingCertificatesActionCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._notAfter = undefined;
      this._notBefore = undefined;
      this._objectType = undefined;
      this._pemCertificate = undefined;
      this._sha256Fingerprint = undefined;
      this._signatureAlgorithm = undefined;
      this._issuer.internalValue = undefined;
      this._subject.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._notAfter = value.notAfter;
      this._notBefore = value.notBefore;
      this._objectType = value.objectType;
      this._pemCertificate = value.pemCertificate;
      this._sha256Fingerprint = value.sha256Fingerprint;
      this._signatureAlgorithm = value.signatureAlgorithm;
      this._issuer.internalValue = value.issuer;
      this._subject.internalValue = value.subject;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // not_after - computed: false, optional: true, required: false
  private _notAfter?: string; 
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }
  public set notAfter(value: string) {
    this._notAfter = value;
  }
  public resetNotAfter() {
    this._notAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAfterInput() {
    return this._notAfter;
  }

  // not_before - computed: false, optional: true, required: false
  private _notBefore?: string; 
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }
  public set notBefore(value: string) {
    this._notBefore = value;
  }
  public resetNotBefore() {
    this._notBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notBeforeInput() {
    return this._notBefore;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // pem_certificate - computed: false, optional: true, required: false
  private _pemCertificate?: string; 
  public get pemCertificate() {
    return this.getStringAttribute('pem_certificate');
  }
  public set pemCertificate(value: string) {
    this._pemCertificate = value;
  }
  public resetPemCertificate() {
    this._pemCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemCertificateInput() {
    return this._pemCertificate;
  }

  // sha256_fingerprint - computed: false, optional: true, required: false
  private _sha256Fingerprint?: string; 
  public get sha256Fingerprint() {
    return this.getStringAttribute('sha256_fingerprint');
  }
  public set sha256Fingerprint(value: string) {
    this._sha256Fingerprint = value;
  }
  public resetSha256Fingerprint() {
    this._sha256Fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256FingerprintInput() {
    return this._sha256Fingerprint;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer = new DataIntersightComputeServerSettingCertificatesActionCertificateIssuerOutputReference(this, "issuer");
  public get issuer() {
    return this._issuer;
  }
  public putIssuer(value: DataIntersightComputeServerSettingCertificatesActionCertificateIssuer) {
    this._issuer.internalValue = value;
  }
  public resetIssuer() {
    this._issuer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer.internalValue;
  }

  // subject - computed: false, optional: true, required: false
  private _subject = new DataIntersightComputeServerSettingCertificatesActionCertificateSubjectOutputReference(this, "subject");
  public get subject() {
    return this._subject;
  }
  public putSubject(value: DataIntersightComputeServerSettingCertificatesActionCertificateSubject) {
    this._subject.internalValue = value;
  }
  public resetSubject() {
    this._subject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }
}
export interface DataIntersightComputeServerSettingCertificatesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  * The enum values provides the list of concrete types that can be instantiated from this abstract type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * Enable/Disable the certificate in Certificate Management policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#enabled DataIntersightComputeServerSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  * The enum values provides the list of concrete types that can be instantiated from this abstract type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#certificate DataIntersightComputeServerSetting#certificate}
  */
  readonly certificate?: DataIntersightComputeServerSettingCertificatesActionCertificate;
}

export function dataIntersightComputeServerSettingCertificatesActionToTerraform(struct?: DataIntersightComputeServerSettingCertificatesActionOutputReference | DataIntersightComputeServerSettingCertificatesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    certificate: dataIntersightComputeServerSettingCertificatesActionCertificateToTerraform(struct!.certificate),
  }
}


export function dataIntersightComputeServerSettingCertificatesActionToHclTerraform(struct?: DataIntersightComputeServerSettingCertificatesActionOutputReference | DataIntersightComputeServerSettingCertificatesAction): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: dataIntersightComputeServerSettingCertificatesActionCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightComputeServerSettingCertificatesActionCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingCertificatesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingCertificatesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingCertificatesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._enabled = undefined;
      this._objectType = undefined;
      this._certificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._enabled = value.enabled;
      this._objectType = value.objectType;
      this._certificate.internalValue = value.certificate;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new DataIntersightComputeServerSettingCertificatesActionCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: DataIntersightComputeServerSettingCertificatesActionCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }
}
export interface DataIntersightComputeServerSettingLocatorLed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#moid DataIntersightComputeServerSetting#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#selector DataIntersightComputeServerSetting#selector}
  */
  readonly selector?: string;
}

export function dataIntersightComputeServerSettingLocatorLedToTerraform(struct?: DataIntersightComputeServerSettingLocatorLedOutputReference | DataIntersightComputeServerSettingLocatorLed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightComputeServerSettingLocatorLedToHclTerraform(struct?: DataIntersightComputeServerSettingLocatorLedOutputReference | DataIntersightComputeServerSettingLocatorLed): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingLocatorLedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingLocatorLed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingLocatorLed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightComputeServerSettingParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#moid DataIntersightComputeServerSetting#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#selector DataIntersightComputeServerSetting#selector}
  */
  readonly selector?: string;
}

export function dataIntersightComputeServerSettingParentToTerraform(struct?: DataIntersightComputeServerSettingParentOutputReference | DataIntersightComputeServerSettingParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightComputeServerSettingParentToHclTerraform(struct?: DataIntersightComputeServerSettingParentOutputReference | DataIntersightComputeServerSettingParent): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightComputeServerSettingPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#moid DataIntersightComputeServerSetting#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#selector DataIntersightComputeServerSetting#selector}
  */
  readonly selector?: string;
}

export function dataIntersightComputeServerSettingPermissionResourcesToTerraform(struct?: DataIntersightComputeServerSettingPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightComputeServerSettingPermissionResourcesToHclTerraform(struct?: DataIntersightComputeServerSettingPermissionResources | cdktf.IResolvable): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingPermissionResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingPermissionResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightComputeServerSettingPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightComputeServerSettingPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightComputeServerSettingPermissionResourcesOutputReference {
    return new DataIntersightComputeServerSettingPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingPersistentMemoryOperationModules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * Socket ID of the Persistent Memory Module on the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#socket_id DataIntersightComputeServerSetting#socket_id}
  */
  readonly socketId?: string;
  /**
  * Socket Memory ID of the Persistent Memory Module on the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#socket_memory_id DataIntersightComputeServerSetting#socket_memory_id}
  */
  readonly socketMemoryId?: string;
}

export function dataIntersightComputeServerSettingPersistentMemoryOperationModulesToTerraform(struct?: DataIntersightComputeServerSettingPersistentMemoryOperationModules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    socket_id: cdktf.stringToTerraform(struct!.socketId),
    socket_memory_id: cdktf.stringToTerraform(struct!.socketMemoryId),
  }
}


export function dataIntersightComputeServerSettingPersistentMemoryOperationModulesToHclTerraform(struct?: DataIntersightComputeServerSettingPersistentMemoryOperationModules | cdktf.IResolvable): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socket_id: {
      value: cdktf.stringToHclTerraform(struct!.socketId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socket_memory_id: {
      value: cdktf.stringToHclTerraform(struct!.socketMemoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingPersistentMemoryOperationModulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingPersistentMemoryOperationModules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._socketId !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketId = this._socketId;
    }
    if (this._socketMemoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketMemoryId = this._socketMemoryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingPersistentMemoryOperationModules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._socketId = undefined;
      this._socketMemoryId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._socketId = value.socketId;
      this._socketMemoryId = value.socketMemoryId;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // socket_id - computed: false, optional: true, required: false
  private _socketId?: string; 
  public get socketId() {
    return this.getStringAttribute('socket_id');
  }
  public set socketId(value: string) {
    this._socketId = value;
  }
  public resetSocketId() {
    this._socketId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketIdInput() {
    return this._socketId;
  }

  // socket_memory_id - computed: false, optional: true, required: false
  private _socketMemoryId?: string; 
  public get socketMemoryId() {
    return this.getStringAttribute('socket_memory_id');
  }
  public set socketMemoryId(value: string) {
    this._socketMemoryId = value;
  }
  public resetSocketMemoryId() {
    this._socketMemoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketMemoryIdInput() {
    return this._socketMemoryId;
  }
}

export class DataIntersightComputeServerSettingPersistentMemoryOperationModulesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightComputeServerSettingPersistentMemoryOperationModules[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightComputeServerSettingPersistentMemoryOperationModulesOutputReference {
    return new DataIntersightComputeServerSettingPersistentMemoryOperationModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingPersistentMemoryOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Administrative actions that can be performed on the Persistent Memory Modules.
  * * `None` - No action on the selected Persistent Memory Modules.
  * * `SecureErase` - Secure Erase action on the selected Persistent Memory Modules.
  * * `Unlock` - Unlock action on the selected Persistent Memory Modules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#admin_action DataIntersightComputeServerSetting#admin_action}
  */
  readonly adminAction?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * Indicates whether the value of the 'securePassphrase' property has been set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#is_secure_passphrase_set DataIntersightComputeServerSetting#is_secure_passphrase_set}
  */
  readonly isSecurePassphraseSet?: boolean | cdktf.IResolvable;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * Secure passphrase of the Persistent Memory Modules of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#secure_passphrase DataIntersightComputeServerSetting#secure_passphrase}
  */
  readonly securePassphrase?: string;
  /**
  * modules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#modules DataIntersightComputeServerSetting#modules}
  */
  readonly modules?: DataIntersightComputeServerSettingPersistentMemoryOperationModules[] | cdktf.IResolvable;
}

export function dataIntersightComputeServerSettingPersistentMemoryOperationToTerraform(struct?: DataIntersightComputeServerSettingPersistentMemoryOperationOutputReference | DataIntersightComputeServerSettingPersistentMemoryOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    admin_action: cdktf.stringToTerraform(struct!.adminAction),
    class_id: cdktf.stringToTerraform(struct!.classId),
    is_secure_passphrase_set: cdktf.booleanToTerraform(struct!.isSecurePassphraseSet),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    secure_passphrase: cdktf.stringToTerraform(struct!.securePassphrase),
    modules: cdktf.listMapper(dataIntersightComputeServerSettingPersistentMemoryOperationModulesToTerraform, true)(struct!.modules),
  }
}


export function dataIntersightComputeServerSettingPersistentMemoryOperationToHclTerraform(struct?: DataIntersightComputeServerSettingPersistentMemoryOperationOutputReference | DataIntersightComputeServerSettingPersistentMemoryOperation): any {
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
    admin_action: {
      value: cdktf.stringToHclTerraform(struct!.adminAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_secure_passphrase_set: {
      value: cdktf.booleanToHclTerraform(struct!.isSecurePassphraseSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.securePassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modules: {
      value: cdktf.listMapperHcl(dataIntersightComputeServerSettingPersistentMemoryOperationModulesToHclTerraform, true)(struct!.modules),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightComputeServerSettingPersistentMemoryOperationModulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingPersistentMemoryOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingPersistentMemoryOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._adminAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminAction = this._adminAction;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._isSecurePassphraseSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSecurePassphraseSet = this._isSecurePassphraseSet;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._securePassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.securePassphrase = this._securePassphrase;
    }
    if (this._modules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modules = this._modules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingPersistentMemoryOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._adminAction = undefined;
      this._classId = undefined;
      this._isSecurePassphraseSet = undefined;
      this._objectType = undefined;
      this._securePassphrase = undefined;
      this._modules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._adminAction = value.adminAction;
      this._classId = value.classId;
      this._isSecurePassphraseSet = value.isSecurePassphraseSet;
      this._objectType = value.objectType;
      this._securePassphrase = value.securePassphrase;
      this._modules.internalValue = value.modules;
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

  // admin_action - computed: false, optional: true, required: false
  private _adminAction?: string; 
  public get adminAction() {
    return this.getStringAttribute('admin_action');
  }
  public set adminAction(value: string) {
    this._adminAction = value;
  }
  public resetAdminAction() {
    this._adminAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminActionInput() {
    return this._adminAction;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // is_secure_passphrase_set - computed: false, optional: true, required: false
  private _isSecurePassphraseSet?: boolean | cdktf.IResolvable; 
  public get isSecurePassphraseSet() {
    return this.getBooleanAttribute('is_secure_passphrase_set');
  }
  public set isSecurePassphraseSet(value: boolean | cdktf.IResolvable) {
    this._isSecurePassphraseSet = value;
  }
  public resetIsSecurePassphraseSet() {
    this._isSecurePassphraseSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecurePassphraseSetInput() {
    return this._isSecurePassphraseSet;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // secure_passphrase - computed: false, optional: true, required: false
  private _securePassphrase?: string; 
  public get securePassphrase() {
    return this.getStringAttribute('secure_passphrase');
  }
  public set securePassphrase(value: string) {
    this._securePassphrase = value;
  }
  public resetSecurePassphrase() {
    this._securePassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securePassphraseInput() {
    return this._securePassphrase;
  }

  // modules - computed: false, optional: true, required: false
  private _modules = new DataIntersightComputeServerSettingPersistentMemoryOperationModulesList(this, "modules", false);
  public get modules() {
    return this._modules;
  }
  public putModules(value: DataIntersightComputeServerSettingPersistentMemoryOperationModules[] | cdktf.IResolvable) {
    this._modules.internalValue = value;
  }
  public resetModules() {
    this._modules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulesInput() {
    return this._modules.internalValue;
  }
}
export interface DataIntersightComputeServerSettingPersonalitySetting {
  /**
  * Additional information to be set along with the personality value. This can include information like the
  * hypervisor type, last update time etc..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_information DataIntersightComputeServerSetting#additional_information}
  */
  readonly additionalInformation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * The personality value that is to be set for the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#personality DataIntersightComputeServerSetting#personality}
  */
  readonly personality?: string;
}

export function dataIntersightComputeServerSettingPersonalitySettingToTerraform(struct?: DataIntersightComputeServerSettingPersonalitySettingOutputReference | DataIntersightComputeServerSettingPersonalitySetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_information: cdktf.stringToTerraform(struct!.additionalInformation),
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    personality: cdktf.stringToTerraform(struct!.personality),
  }
}


export function dataIntersightComputeServerSettingPersonalitySettingToHclTerraform(struct?: DataIntersightComputeServerSettingPersonalitySettingOutputReference | DataIntersightComputeServerSettingPersonalitySetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_information: {
      value: cdktf.stringToHclTerraform(struct!.additionalInformation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    personality: {
      value: cdktf.stringToHclTerraform(struct!.personality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingPersonalitySettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingPersonalitySetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalInformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalInformation = this._additionalInformation;
    }
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._personality !== undefined) {
      hasAnyValues = true;
      internalValueResult.personality = this._personality;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingPersonalitySetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalInformation = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._personality = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalInformation = value.additionalInformation;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._personality = value.personality;
    }
  }

  // additional_information - computed: false, optional: true, required: false
  private _additionalInformation?: string; 
  public get additionalInformation() {
    return this.getStringAttribute('additional_information');
  }
  public set additionalInformation(value: string) {
    this._additionalInformation = value;
  }
  public resetAdditionalInformation() {
    this._additionalInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInformationInput() {
    return this._additionalInformation;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // personality - computed: false, optional: true, required: false
  private _personality?: string; 
  public get personality() {
    return this.getStringAttribute('personality');
  }
  public set personality(value: string) {
    this._personality = value;
  }
  public resetPersonality() {
    this._personality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalityInput() {
    return this._personality;
  }
}
export interface DataIntersightComputeServerSettingRegisteredDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#moid DataIntersightComputeServerSetting#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#selector DataIntersightComputeServerSetting#selector}
  */
  readonly selector?: string;
}

export function dataIntersightComputeServerSettingRegisteredDeviceToTerraform(struct?: DataIntersightComputeServerSettingRegisteredDeviceOutputReference | DataIntersightComputeServerSettingRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightComputeServerSettingRegisteredDeviceToHclTerraform(struct?: DataIntersightComputeServerSettingRegisteredDeviceOutputReference | DataIntersightComputeServerSettingRegisteredDevice): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingRegisteredDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingRegisteredDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingRegisteredDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightComputeServerSettingRunningWorkflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#moid DataIntersightComputeServerSetting#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#selector DataIntersightComputeServerSetting#selector}
  */
  readonly selector?: string;
}

export function dataIntersightComputeServerSettingRunningWorkflowToTerraform(struct?: DataIntersightComputeServerSettingRunningWorkflowOutputReference | DataIntersightComputeServerSettingRunningWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightComputeServerSettingRunningWorkflowToHclTerraform(struct?: DataIntersightComputeServerSettingRunningWorkflowOutputReference | DataIntersightComputeServerSettingRunningWorkflow): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingRunningWorkflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingRunningWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingRunningWorkflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightComputeServerSettingServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#moid DataIntersightComputeServerSetting#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#selector DataIntersightComputeServerSetting#selector}
  */
  readonly selector?: string;
}

export function dataIntersightComputeServerSettingServerToTerraform(struct?: DataIntersightComputeServerSettingServerOutputReference | DataIntersightComputeServerSettingServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightComputeServerSettingServerToHclTerraform(struct?: DataIntersightComputeServerSettingServerOutputReference | DataIntersightComputeServerSettingServer): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightComputeServerSettingServerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * User defined asset tag of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#asset_tag DataIntersightComputeServerSetting#asset_tag}
  */
  readonly assetTag?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * User defined description of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#user_label DataIntersightComputeServerSetting#user_label}
  */
  readonly userLabel?: string;
}

export function dataIntersightComputeServerSettingServerConfigToTerraform(struct?: DataIntersightComputeServerSettingServerConfigOutputReference | DataIntersightComputeServerSettingServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    asset_tag: cdktf.stringToTerraform(struct!.assetTag),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    user_label: cdktf.stringToTerraform(struct!.userLabel),
  }
}


export function dataIntersightComputeServerSettingServerConfigToHclTerraform(struct?: DataIntersightComputeServerSettingServerConfigOutputReference | DataIntersightComputeServerSettingServerConfig): any {
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
    asset_tag: {
      value: cdktf.stringToHclTerraform(struct!.assetTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_label: {
      value: cdktf.stringToHclTerraform(struct!.userLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._assetTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetTag = this._assetTag;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._userLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.userLabel = this._userLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._assetTag = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._userLabel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._assetTag = value.assetTag;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._userLabel = value.userLabel;
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

  // asset_tag - computed: false, optional: true, required: false
  private _assetTag?: string; 
  public get assetTag() {
    return this.getStringAttribute('asset_tag');
  }
  public set assetTag(value: string) {
    this._assetTag = value;
  }
  public resetAssetTag() {
    this._assetTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTagInput() {
    return this._assetTag;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // user_label - computed: false, optional: true, required: false
  private _userLabel?: string; 
  public get userLabel() {
    return this.getStringAttribute('user_label');
  }
  public set userLabel(value: string) {
    this._userLabel = value;
  }
  public resetUserLabel() {
    this._userLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLabelInput() {
    return this._userLabel;
  }
}
export interface DataIntersightComputeServerSettingServerOpStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The configured state of these settings in the target server. The value is any one of Applied, Applying, Failed. Applied - The state denotes that the settings are applied successfully in the target server. Applying - The state denotes that the settings are being applied in the target server. Failed - The state denotes that the settings could not be applied in the target server.
  * * `Applied` - User configured settings are in applied state.
  * * `Applying` - User settings are being applied on the target server.
  * * `Scheduled` - User configured settings are scheduled to be applied.
  * * `Failed` - User configured settings could not be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#config_state DataIntersightComputeServerSetting#config_state}
  */
  readonly configState?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * The WorkflowInfoMo moid that is running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#workflow_info_moid DataIntersightComputeServerSetting#workflow_info_moid}
  */
  readonly workflowInfoMoid?: string;
  /**
  * The workflow type being started. The workflow name to distinguish workflow by type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#workflow_type DataIntersightComputeServerSetting#workflow_type}
  */
  readonly workflowType?: string;
}

export function dataIntersightComputeServerSettingServerOpStatusToTerraform(struct?: DataIntersightComputeServerSettingServerOpStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    config_state: cdktf.stringToTerraform(struct!.configState),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    workflow_info_moid: cdktf.stringToTerraform(struct!.workflowInfoMoid),
    workflow_type: cdktf.stringToTerraform(struct!.workflowType),
  }
}


export function dataIntersightComputeServerSettingServerOpStatusToHclTerraform(struct?: DataIntersightComputeServerSettingServerOpStatus | cdktf.IResolvable): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_state: {
      value: cdktf.stringToHclTerraform(struct!.configState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_info_moid: {
      value: cdktf.stringToHclTerraform(struct!.workflowInfoMoid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_type: {
      value: cdktf.stringToHclTerraform(struct!.workflowType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingServerOpStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingServerOpStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._configState !== undefined) {
      hasAnyValues = true;
      internalValueResult.configState = this._configState;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._workflowInfoMoid !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowInfoMoid = this._workflowInfoMoid;
    }
    if (this._workflowType !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowType = this._workflowType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingServerOpStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._configState = undefined;
      this._objectType = undefined;
      this._workflowInfoMoid = undefined;
      this._workflowType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._configState = value.configState;
      this._objectType = value.objectType;
      this._workflowInfoMoid = value.workflowInfoMoid;
      this._workflowType = value.workflowType;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // config_state - computed: false, optional: true, required: false
  private _configState?: string; 
  public get configState() {
    return this.getStringAttribute('config_state');
  }
  public set configState(value: string) {
    this._configState = value;
  }
  public resetConfigState() {
    this._configState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configStateInput() {
    return this._configState;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // workflow_info_moid - computed: false, optional: true, required: false
  private _workflowInfoMoid?: string; 
  public get workflowInfoMoid() {
    return this.getStringAttribute('workflow_info_moid');
  }
  public set workflowInfoMoid(value: string) {
    this._workflowInfoMoid = value;
  }
  public resetWorkflowInfoMoid() {
    this._workflowInfoMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInfoMoidInput() {
    return this._workflowInfoMoid;
  }

  // workflow_type - computed: false, optional: true, required: false
  private _workflowType?: string; 
  public get workflowType() {
    return this.getStringAttribute('workflow_type');
  }
  public set workflowType(value: string) {
    this._workflowType = value;
  }
  public resetWorkflowType() {
    this._workflowType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowTypeInput() {
    return this._workflowType;
  }
}

export class DataIntersightComputeServerSettingServerOpStatusList extends cdktf.ComplexList {
  public internalValue? : DataIntersightComputeServerSettingServerOpStatus[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightComputeServerSettingServerOpStatusOutputReference {
    return new DataIntersightComputeServerSettingServerOpStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingStorageControllerOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Administrative actions that can be performed on the Storage Controller.
  * * `None` - No action on the selected Storage Controller.
  * * `Import` - Import Foreign config action on the selected Storage Controller.
  * * `Clear` - Clear Foreign config action on the selected Storage Controller.
  * * `ClearConfig` - Clear Config action on the selected Storage Controller.
  * * `ModifySecurity` - Modify Security on the selected Storage Controller.
  * * `DisableSecurity` - Disable Security on the selected Storage Controller.
  * * `UnlockDrives` - Set Unlock action state on the selected Storage Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#admin_action DataIntersightComputeServerSetting#admin_action}
  */
  readonly adminAction?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * Storage Controller Id of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#controller_id DataIntersightComputeServerSetting#controller_id}
  */
  readonly controllerId?: string;
  /**
  * EncryptionKey of the Storage Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#encryption_key DataIntersightComputeServerSetting#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * RemoteMode on the Storage Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#remote_mode DataIntersightComputeServerSetting#remote_mode}
  */
  readonly remoteMode?: boolean | cdktf.IResolvable;
}

export function dataIntersightComputeServerSettingStorageControllerOperationToTerraform(struct?: DataIntersightComputeServerSettingStorageControllerOperationOutputReference | DataIntersightComputeServerSettingStorageControllerOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    admin_action: cdktf.stringToTerraform(struct!.adminAction),
    class_id: cdktf.stringToTerraform(struct!.classId),
    controller_id: cdktf.stringToTerraform(struct!.controllerId),
    encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    remote_mode: cdktf.booleanToTerraform(struct!.remoteMode),
  }
}


export function dataIntersightComputeServerSettingStorageControllerOperationToHclTerraform(struct?: DataIntersightComputeServerSettingStorageControllerOperationOutputReference | DataIntersightComputeServerSettingStorageControllerOperation): any {
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
    admin_action: {
      value: cdktf.stringToHclTerraform(struct!.adminAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_id: {
      value: cdktf.stringToHclTerraform(struct!.controllerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_mode: {
      value: cdktf.booleanToHclTerraform(struct!.remoteMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingStorageControllerOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingStorageControllerOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._adminAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminAction = this._adminAction;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._controllerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerId = this._controllerId;
    }
    if (this._encryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._remoteMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteMode = this._remoteMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingStorageControllerOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._adminAction = undefined;
      this._classId = undefined;
      this._controllerId = undefined;
      this._encryptionKey = undefined;
      this._objectType = undefined;
      this._remoteMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._adminAction = value.adminAction;
      this._classId = value.classId;
      this._controllerId = value.controllerId;
      this._encryptionKey = value.encryptionKey;
      this._objectType = value.objectType;
      this._remoteMode = value.remoteMode;
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

  // admin_action - computed: false, optional: true, required: false
  private _adminAction?: string; 
  public get adminAction() {
    return this.getStringAttribute('admin_action');
  }
  public set adminAction(value: string) {
    this._adminAction = value;
  }
  public resetAdminAction() {
    this._adminAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminActionInput() {
    return this._adminAction;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // controller_id - computed: false, optional: true, required: false
  private _controllerId?: string; 
  public get controllerId() {
    return this.getStringAttribute('controller_id');
  }
  public set controllerId(value: string) {
    this._controllerId = value;
  }
  public resetControllerId() {
    this._controllerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerIdInput() {
    return this._controllerId;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // remote_mode - computed: false, optional: true, required: false
  private _remoteMode?: boolean | cdktf.IResolvable; 
  public get remoteMode() {
    return this.getBooleanAttribute('remote_mode');
  }
  public set remoteMode(value: boolean | cdktf.IResolvable) {
    this._remoteMode = value;
  }
  public resetRemoteMode() {
    this._remoteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteModeInput() {
    return this._remoteMode;
  }
}
export interface DataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrives {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * Physical Drive ID of the storage on the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#slot_number DataIntersightComputeServerSetting#slot_number}
  */
  readonly slotNumber?: number;
}

export function dataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrivesToTerraform(struct?: DataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrives | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    slot_number: cdktf.numberToTerraform(struct!.slotNumber),
  }
}


export function dataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrivesToHclTerraform(struct?: DataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrives | cdktf.IResolvable): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot_number: {
      value: cdktf.numberToHclTerraform(struct!.slotNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrivesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrives | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._slotNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotNumber = this._slotNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrives | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._slotNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._slotNumber = value.slotNumber;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // slot_number - computed: false, optional: true, required: false
  private _slotNumber?: number; 
  public get slotNumber() {
    return this.getNumberAttribute('slot_number');
  }
  public set slotNumber(value: number) {
    this._slotNumber = value;
  }
  public resetSlotNumber() {
    this._slotNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotNumberInput() {
    return this._slotNumber;
  }
}

export class DataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrivesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrives[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrivesOutputReference {
    return new DataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrivesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingStoragePhysicalDriveOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Administrative actions that can be performed on the Storage Physical Drives.
  * * `None` - No action on the selected Storage Physical Drives.
  * * `SetJbod` - Set Jbod action state on the selected Storage Physical Drives.
  * * `SetUnconfiguredGood` - Set Unconfigured Good action state on the selected Storage Physical Drives.
  * * `Erase` - Set Erase action state on the selected Storage Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#admin_action DataIntersightComputeServerSetting#admin_action}
  */
  readonly adminAction?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * Storage Controller Id of the storage Physical Drives of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#controller_id DataIntersightComputeServerSetting#controller_id}
  */
  readonly controllerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#drive_slots DataIntersightComputeServerSetting#drive_slots}
  */
  readonly driveSlots?: string[];
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * physical_drives block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#physical_drives DataIntersightComputeServerSetting#physical_drives}
  */
  readonly physicalDrives?: DataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrives[] | cdktf.IResolvable;
}

export function dataIntersightComputeServerSettingStoragePhysicalDriveOperationToTerraform(struct?: DataIntersightComputeServerSettingStoragePhysicalDriveOperationOutputReference | DataIntersightComputeServerSettingStoragePhysicalDriveOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    admin_action: cdktf.stringToTerraform(struct!.adminAction),
    class_id: cdktf.stringToTerraform(struct!.classId),
    controller_id: cdktf.stringToTerraform(struct!.controllerId),
    drive_slots: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.driveSlots),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    physical_drives: cdktf.listMapper(dataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrivesToTerraform, true)(struct!.physicalDrives),
  }
}


export function dataIntersightComputeServerSettingStoragePhysicalDriveOperationToHclTerraform(struct?: DataIntersightComputeServerSettingStoragePhysicalDriveOperationOutputReference | DataIntersightComputeServerSettingStoragePhysicalDriveOperation): any {
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
    admin_action: {
      value: cdktf.stringToHclTerraform(struct!.adminAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_id: {
      value: cdktf.stringToHclTerraform(struct!.controllerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drive_slots: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.driveSlots),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    physical_drives: {
      value: cdktf.listMapperHcl(dataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrivesToHclTerraform, true)(struct!.physicalDrives),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrivesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingStoragePhysicalDriveOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingStoragePhysicalDriveOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._adminAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminAction = this._adminAction;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._controllerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerId = this._controllerId;
    }
    if (this._driveSlots !== undefined) {
      hasAnyValues = true;
      internalValueResult.driveSlots = this._driveSlots;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._physicalDrives?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalDrives = this._physicalDrives?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingStoragePhysicalDriveOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._adminAction = undefined;
      this._classId = undefined;
      this._controllerId = undefined;
      this._driveSlots = undefined;
      this._objectType = undefined;
      this._physicalDrives.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._adminAction = value.adminAction;
      this._classId = value.classId;
      this._controllerId = value.controllerId;
      this._driveSlots = value.driveSlots;
      this._objectType = value.objectType;
      this._physicalDrives.internalValue = value.physicalDrives;
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

  // admin_action - computed: false, optional: true, required: false
  private _adminAction?: string; 
  public get adminAction() {
    return this.getStringAttribute('admin_action');
  }
  public set adminAction(value: string) {
    this._adminAction = value;
  }
  public resetAdminAction() {
    this._adminAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminActionInput() {
    return this._adminAction;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // controller_id - computed: false, optional: true, required: false
  private _controllerId?: string; 
  public get controllerId() {
    return this.getStringAttribute('controller_id');
  }
  public set controllerId(value: string) {
    this._controllerId = value;
  }
  public resetControllerId() {
    this._controllerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerIdInput() {
    return this._controllerId;
  }

  // drive_slots - computed: false, optional: true, required: false
  private _driveSlots?: string[]; 
  public get driveSlots() {
    return this.getListAttribute('drive_slots');
  }
  public set driveSlots(value: string[]) {
    this._driveSlots = value;
  }
  public resetDriveSlots() {
    this._driveSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driveSlotsInput() {
    return this._driveSlots;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // physical_drives - computed: false, optional: true, required: false
  private _physicalDrives = new DataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrivesList(this, "physical_drives", false);
  public get physicalDrives() {
    return this._physicalDrives;
  }
  public putPhysicalDrives(value: DataIntersightComputeServerSettingStoragePhysicalDriveOperationPhysicalDrives[] | cdktf.IResolvable) {
    this._physicalDrives.internalValue = value;
  }
  public resetPhysicalDrives() {
    this._physicalDrives.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalDrivesInput() {
    return this._physicalDrives.internalValue;
  }
}
export interface DataIntersightComputeServerSettingStorageUtilityImageOperation {
  /**
  * Actions that can be performed by the storage utility.
  * * `None` - No action by storage utility.
  * * `Upload` - Upload action by storage utility.
  * * `TurnOnImageVisibility` - Turn on image's visibility.
  * * `TurnOffImageVisibility` - Turn off image's visibility.
  * * `Remove` - Removes images from a server's utility storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#action DataIntersightComputeServerSetting#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The image name this action operates on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#image_name DataIntersightComputeServerSetting#image_name}
  */
  readonly imageName?: string;
  /**
  * The image type this action operates on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#image_type DataIntersightComputeServerSetting#image_type}
  */
  readonly imageType?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightComputeServerSettingStorageUtilityImageOperationToTerraform(struct?: DataIntersightComputeServerSettingStorageUtilityImageOperationOutputReference | DataIntersightComputeServerSettingStorageUtilityImageOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightComputeServerSettingStorageUtilityImageOperationToHclTerraform(struct?: DataIntersightComputeServerSettingStorageUtilityImageOperationOutputReference | DataIntersightComputeServerSettingStorageUtilityImageOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_type: {
      value: cdktf.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingStorageUtilityImageOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingStorageUtilityImageOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingStorageUtilityImageOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._imageName = undefined;
      this._imageType = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._imageName = value.imageName;
      this._imageType = value.imageType;
      this._objectType = value.objectType;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_type - computed: false, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrives {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * Virtual Drive ID of the storage on the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#id DataIntersightComputeServerSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrivesToTerraform(struct?: DataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrives | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    id: cdktf.stringToTerraform(struct!.id),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrivesToHclTerraform(struct?: DataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrives | cdktf.IResolvable): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrivesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrives | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrives | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._id = undefined;
      this._objectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._id = value.id;
      this._objectType = value.objectType;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // id - computed: false, optional: true, required: false
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

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class DataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrivesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrives[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrivesOutputReference {
    return new DataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrivesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingStorageVirtualDriveOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Administrative actions that can be performed on the Storage Virtual Drives.
  * * `None` - No action on the selected Storage virtual Drives.
  * * `Delete` - Delete action on the selected Storage Virtual Drives.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#admin_action DataIntersightComputeServerSetting#admin_action}
  */
  readonly adminAction?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * Storage Controller Id of the storage Virtual Drives of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#controller_id DataIntersightComputeServerSetting#controller_id}
  */
  readonly controllerId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * virtual_drives block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#virtual_drives DataIntersightComputeServerSetting#virtual_drives}
  */
  readonly virtualDrives?: DataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrives[] | cdktf.IResolvable;
}

export function dataIntersightComputeServerSettingStorageVirtualDriveOperationToTerraform(struct?: DataIntersightComputeServerSettingStorageVirtualDriveOperationOutputReference | DataIntersightComputeServerSettingStorageVirtualDriveOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    admin_action: cdktf.stringToTerraform(struct!.adminAction),
    class_id: cdktf.stringToTerraform(struct!.classId),
    controller_id: cdktf.stringToTerraform(struct!.controllerId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    virtual_drives: cdktf.listMapper(dataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrivesToTerraform, true)(struct!.virtualDrives),
  }
}


export function dataIntersightComputeServerSettingStorageVirtualDriveOperationToHclTerraform(struct?: DataIntersightComputeServerSettingStorageVirtualDriveOperationOutputReference | DataIntersightComputeServerSettingStorageVirtualDriveOperation): any {
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
    admin_action: {
      value: cdktf.stringToHclTerraform(struct!.adminAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_id: {
      value: cdktf.stringToHclTerraform(struct!.controllerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_drives: {
      value: cdktf.listMapperHcl(dataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrivesToHclTerraform, true)(struct!.virtualDrives),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrivesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingStorageVirtualDriveOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingStorageVirtualDriveOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._adminAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminAction = this._adminAction;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._controllerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerId = this._controllerId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._virtualDrives?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualDrives = this._virtualDrives?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingStorageVirtualDriveOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._adminAction = undefined;
      this._classId = undefined;
      this._controllerId = undefined;
      this._objectType = undefined;
      this._virtualDrives.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._adminAction = value.adminAction;
      this._classId = value.classId;
      this._controllerId = value.controllerId;
      this._objectType = value.objectType;
      this._virtualDrives.internalValue = value.virtualDrives;
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

  // admin_action - computed: false, optional: true, required: false
  private _adminAction?: string; 
  public get adminAction() {
    return this.getStringAttribute('admin_action');
  }
  public set adminAction(value: string) {
    this._adminAction = value;
  }
  public resetAdminAction() {
    this._adminAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminActionInput() {
    return this._adminAction;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // controller_id - computed: false, optional: true, required: false
  private _controllerId?: string; 
  public get controllerId() {
    return this.getStringAttribute('controller_id');
  }
  public set controllerId(value: string) {
    this._controllerId = value;
  }
  public resetControllerId() {
    this._controllerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerIdInput() {
    return this._controllerId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // virtual_drives - computed: false, optional: true, required: false
  private _virtualDrives = new DataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrivesList(this, "virtual_drives", false);
  public get virtualDrives() {
    return this._virtualDrives;
  }
  public putVirtualDrives(value: DataIntersightComputeServerSettingStorageVirtualDriveOperationVirtualDrives[] | cdktf.IResolvable) {
    this._virtualDrives.internalValue = value;
  }
  public resetVirtualDrives() {
    this._virtualDrives.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualDrivesInput() {
    return this._virtualDrives.internalValue;
  }
}
export interface DataIntersightComputeServerSettingTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#moid DataIntersightComputeServerSetting#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#selector DataIntersightComputeServerSetting#selector}
  */
  readonly selector?: string;
}

export function dataIntersightComputeServerSettingTagsAncestorDefinitionsToTerraform(struct?: DataIntersightComputeServerSettingTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightComputeServerSettingTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightComputeServerSettingTagsAncestorDefinitions | cdktf.IResolvable): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingTagsAncestorDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightComputeServerSettingTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightComputeServerSettingTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightComputeServerSettingTagsAncestorDefinitionsOutputReference {
    return new DataIntersightComputeServerSettingTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#moid DataIntersightComputeServerSetting#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#selector DataIntersightComputeServerSetting#selector}
  */
  readonly selector?: string;
}

export function dataIntersightComputeServerSettingTagsDefinitionToTerraform(struct?: DataIntersightComputeServerSettingTagsDefinitionOutputReference | DataIntersightComputeServerSettingTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightComputeServerSettingTagsDefinitionToHclTerraform(struct?: DataIntersightComputeServerSettingTagsDefinitionOutputReference | DataIntersightComputeServerSettingTagsDefinition): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightComputeServerSettingTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#key DataIntersightComputeServerSetting#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#propagated DataIntersightComputeServerSetting#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the tag is user-defined or owned by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#sys_tag DataIntersightComputeServerSetting#sys_tag}
  */
  readonly sysTag?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#type DataIntersightComputeServerSetting#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#value DataIntersightComputeServerSetting#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#ancestor_definitions DataIntersightComputeServerSetting#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightComputeServerSettingTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#definition DataIntersightComputeServerSetting#definition}
  */
  readonly definition?: DataIntersightComputeServerSettingTagsDefinition;
}

export function dataIntersightComputeServerSettingTagsToTerraform(struct?: DataIntersightComputeServerSettingTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    sys_tag: cdktf.booleanToTerraform(struct!.sysTag),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    ancestor_definitions: cdktf.listMapper(dataIntersightComputeServerSettingTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightComputeServerSettingTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightComputeServerSettingTagsToHclTerraform(struct?: DataIntersightComputeServerSettingTags | cdktf.IResolvable): any {
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagated: {
      value: cdktf.booleanToHclTerraform(struct!.propagated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sys_tag: {
      value: cdktf.booleanToHclTerraform(struct!.sysTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ancestor_definitions: {
      value: cdktf.listMapperHcl(dataIntersightComputeServerSettingTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightComputeServerSettingTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightComputeServerSettingTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightComputeServerSettingTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propagated !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagated = this._propagated;
    }
    if (this._sysTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysTag = this._sysTag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._ancestorDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestorDefinitions = this._ancestorDefinitions?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._key = undefined;
      this._propagated = undefined;
      this._sysTag = undefined;
      this._type = undefined;
      this._value = undefined;
      this._ancestorDefinitions.internalValue = undefined;
      this._definition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._key = value.key;
      this._propagated = value.propagated;
      this._sysTag = value.sysTag;
      this._type = value.type;
      this._value = value.value;
      this._ancestorDefinitions.internalValue = value.ancestorDefinitions;
      this._definition.internalValue = value.definition;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // propagated - computed: false, optional: true, required: false
  private _propagated?: boolean | cdktf.IResolvable; 
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }
  public set propagated(value: boolean | cdktf.IResolvable) {
    this._propagated = value;
  }
  public resetPropagated() {
    this._propagated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedInput() {
    return this._propagated;
  }

  // sys_tag - computed: false, optional: true, required: false
  private _sysTag?: boolean | cdktf.IResolvable; 
  public get sysTag() {
    return this.getBooleanAttribute('sys_tag');
  }
  public set sysTag(value: boolean | cdktf.IResolvable) {
    this._sysTag = value;
  }
  public resetSysTag() {
    this._sysTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysTagInput() {
    return this._sysTag;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // ancestor_definitions - computed: false, optional: true, required: false
  private _ancestorDefinitions = new DataIntersightComputeServerSettingTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightComputeServerSettingTagsAncestorDefinitions[] | cdktf.IResolvable) {
    this._ancestorDefinitions.internalValue = value;
  }
  public resetAncestorDefinitions() {
    this._ancestorDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorDefinitionsInput() {
    return this._ancestorDefinitions.internalValue;
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new DataIntersightComputeServerSettingTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightComputeServerSettingTagsDefinition) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }
}

export class DataIntersightComputeServerSettingTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightComputeServerSettingTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightComputeServerSettingTagsOutputReference {
    return new DataIntersightComputeServerSettingTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#moid DataIntersightComputeServerSetting#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#selector DataIntersightComputeServerSetting#selector}
  */
  readonly selector?: string;
}

export function dataIntersightComputeServerSettingVersionContextInterestedMosToTerraform(struct?: DataIntersightComputeServerSettingVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightComputeServerSettingVersionContextInterestedMosToHclTerraform(struct?: DataIntersightComputeServerSettingVersionContextInterestedMos | cdktf.IResolvable): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightComputeServerSettingVersionContextInterestedMos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingVersionContextInterestedMos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightComputeServerSettingVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightComputeServerSettingVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightComputeServerSettingVersionContextInterestedMosOutputReference {
    return new DataIntersightComputeServerSettingVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightComputeServerSettingVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#moid DataIntersightComputeServerSetting#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#selector DataIntersightComputeServerSetting#selector}
  */
  readonly selector?: string;
}

export function dataIntersightComputeServerSettingVersionContextRefMoToTerraform(struct?: DataIntersightComputeServerSettingVersionContextRefMoOutputReference | DataIntersightComputeServerSettingVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightComputeServerSettingVersionContextRefMoToHclTerraform(struct?: DataIntersightComputeServerSettingVersionContextRefMoOutputReference | DataIntersightComputeServerSettingVersionContextRefMo): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightComputeServerSettingVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#additional_properties DataIntersightComputeServerSetting#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#class_id DataIntersightComputeServerSetting#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#marked_for_deletion DataIntersightComputeServerSetting#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#nr_version DataIntersightComputeServerSetting#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#object_type DataIntersightComputeServerSetting#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#timestamp DataIntersightComputeServerSetting#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Specifies type of version. Currently the only supported value is "Configured"
  * that is used to keep track of snapshots of policies and profiles that are intended
  * to be configured to target endpoints.
  * * `Modified` - Version created every time an object is modified.
  * * `Configured` - Version created every time an object is configured to the service profile.
  * * `Deployed` - Version created for objects related to a service profile when it is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#version_type DataIntersightComputeServerSetting#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#interested_mos DataIntersightComputeServerSetting#interested_mos}
  */
  readonly interestedMos?: DataIntersightComputeServerSettingVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#ref_mo DataIntersightComputeServerSetting#ref_mo}
  */
  readonly refMo?: DataIntersightComputeServerSettingVersionContextRefMo;
}

export function dataIntersightComputeServerSettingVersionContextToTerraform(struct?: DataIntersightComputeServerSettingVersionContextOutputReference | DataIntersightComputeServerSettingVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    marked_for_deletion: cdktf.booleanToTerraform(struct!.markedForDeletion),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    version_type: cdktf.stringToTerraform(struct!.versionType),
    interested_mos: cdktf.listMapper(dataIntersightComputeServerSettingVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightComputeServerSettingVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightComputeServerSettingVersionContextToHclTerraform(struct?: DataIntersightComputeServerSettingVersionContextOutputReference | DataIntersightComputeServerSettingVersionContext): any {
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
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marked_for_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.markedForDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nr_version: {
      value: cdktf.stringToHclTerraform(struct!.nrVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_type: {
      value: cdktf.stringToHclTerraform(struct!.versionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interested_mos: {
      value: cdktf.listMapperHcl(dataIntersightComputeServerSettingVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightComputeServerSettingVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightComputeServerSettingVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightComputeServerSettingVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightComputeServerSettingVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightComputeServerSettingVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._markedForDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.markedForDeletion = this._markedForDeletion;
    }
    if (this._nrVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrVersion = this._nrVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    if (this._interestedMos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interestedMos = this._interestedMos?.internalValue;
    }
    if (this._refMo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refMo = this._refMo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightComputeServerSettingVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._markedForDeletion = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._timestamp = undefined;
      this._versionType = undefined;
      this._interestedMos.internalValue = undefined;
      this._refMo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._markedForDeletion = value.markedForDeletion;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._timestamp = value.timestamp;
      this._versionType = value.versionType;
      this._interestedMos.internalValue = value.interestedMos;
      this._refMo.internalValue = value.refMo;
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // marked_for_deletion - computed: false, optional: true, required: false
  private _markedForDeletion?: boolean | cdktf.IResolvable; 
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }
  public set markedForDeletion(value: boolean | cdktf.IResolvable) {
    this._markedForDeletion = value;
  }
  public resetMarkedForDeletion() {
    this._markedForDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markedForDeletionInput() {
    return this._markedForDeletion;
  }

  // nr_version - computed: false, optional: true, required: false
  private _nrVersion?: string; 
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }
  public set nrVersion(value: string) {
    this._nrVersion = value;
  }
  public resetNrVersion() {
    this._nrVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrVersionInput() {
    return this._nrVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // version_type - computed: false, optional: true, required: false
  private _versionType?: string; 
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
  public set versionType(value: string) {
    this._versionType = value;
  }
  public resetVersionType() {
    this._versionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTypeInput() {
    return this._versionType;
  }

  // interested_mos - computed: false, optional: true, required: false
  private _interestedMos = new DataIntersightComputeServerSettingVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightComputeServerSettingVersionContextInterestedMos[] | cdktf.IResolvable) {
    this._interestedMos.internalValue = value;
  }
  public resetInterestedMos() {
    this._interestedMos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interestedMosInput() {
    return this._interestedMos.internalValue;
  }

  // ref_mo - computed: false, optional: true, required: false
  private _refMo = new DataIntersightComputeServerSettingVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightComputeServerSettingVersionContextRefMo) {
    this._refMo.internalValue = value;
  }
  public resetRefMo() {
    this._refMo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refMoInput() {
    return this._refMo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting intersight_compute_server_setting}
*/
export class DataIntersightComputeServerSetting extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_compute_server_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightComputeServerSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightComputeServerSetting to import
  * @param importFromId The id of the existing DataIntersightComputeServerSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightComputeServerSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_compute_server_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/compute_server_setting intersight_compute_server_setting} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightComputeServerSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightComputeServerSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_compute_server_setting',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.73',
        providerVersionConstraint: '1.0.73'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountMoid = config.accountMoid;
    this._additionalProperties = config.additionalProperties;
    this._adminLocatorLedState = config.adminLocatorLedState;
    this._adminPowerState = config.adminPowerState;
    this._classId = config.classId;
    this._clearSel = config.clearSel;
    this._cmosReset = config.cmosReset;
    this._collectSel = config.collectSel;
    this._configState = config.configState;
    this._createTime = config.createTime;
    this._deviceMoId = config.deviceMoId;
    this._dn = config.dn;
    this._domainGroupMoid = config.domainGroupMoid;
    this._frontPanelLockState = config.frontPanelLockState;
    this._hostInitConfiguration = config.hostInitConfiguration;
    this._id = config.id;
    this._kvmReset = config.kvmReset;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._name = config.name;
    this._objectType = config.objectType;
    this._oneTimeBootDevice = config.oneTimeBootDevice;
    this._owners = config.owners;
    this._resetMemoryErrors = config.resetMemoryErrors;
    this._rn = config.rn;
    this._sharedScope = config.sharedScope;
    this._tpmReset = config.tpmReset;
    this._tunneledKvmState = config.tunneledKvmState;
    this._ancestors.internalValue = config.ancestors;
    this._certificatesAction.internalValue = config.certificatesAction;
    this._locatorLed.internalValue = config.locatorLed;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._persistentMemoryOperation.internalValue = config.persistentMemoryOperation;
    this._personalitySetting.internalValue = config.personalitySetting;
    this._registeredDevice.internalValue = config.registeredDevice;
    this._runningWorkflow.internalValue = config.runningWorkflow;
    this._server.internalValue = config.server;
    this._serverConfig.internalValue = config.serverConfig;
    this._serverOpStatus.internalValue = config.serverOpStatus;
    this._storageControllerOperation.internalValue = config.storageControllerOperation;
    this._storagePhysicalDriveOperation.internalValue = config.storagePhysicalDriveOperation;
    this._storageUtilityImageOperation.internalValue = config.storageUtilityImageOperation;
    this._storageVirtualDriveOperation.internalValue = config.storageVirtualDriveOperation;
    this._tags.internalValue = config.tags;
    this._versionContext.internalValue = config.versionContext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_moid - computed: false, optional: true, required: false
  private _accountMoid?: string; 
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }
  public set accountMoid(value: string) {
    this._accountMoid = value;
  }
  public resetAccountMoid() {
    this._accountMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountMoidInput() {
    return this._accountMoid;
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

  // admin_locator_led_state - computed: false, optional: true, required: false
  private _adminLocatorLedState?: string; 
  public get adminLocatorLedState() {
    return this.getStringAttribute('admin_locator_led_state');
  }
  public set adminLocatorLedState(value: string) {
    this._adminLocatorLedState = value;
  }
  public resetAdminLocatorLedState() {
    this._adminLocatorLedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLocatorLedStateInput() {
    return this._adminLocatorLedState;
  }

  // admin_power_state - computed: false, optional: true, required: false
  private _adminPowerState?: string; 
  public get adminPowerState() {
    return this.getStringAttribute('admin_power_state');
  }
  public set adminPowerState(value: string) {
    this._adminPowerState = value;
  }
  public resetAdminPowerState() {
    this._adminPowerState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPowerStateInput() {
    return this._adminPowerState;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // clear_sel - computed: false, optional: true, required: false
  private _clearSel?: string; 
  public get clearSel() {
    return this.getStringAttribute('clear_sel');
  }
  public set clearSel(value: string) {
    this._clearSel = value;
  }
  public resetClearSel() {
    this._clearSel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSelInput() {
    return this._clearSel;
  }

  // cmos_reset - computed: false, optional: true, required: false
  private _cmosReset?: string; 
  public get cmosReset() {
    return this.getStringAttribute('cmos_reset');
  }
  public set cmosReset(value: string) {
    this._cmosReset = value;
  }
  public resetCmosReset() {
    this._cmosReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmosResetInput() {
    return this._cmosReset;
  }

  // collect_sel - computed: false, optional: true, required: false
  private _collectSel?: string; 
  public get collectSel() {
    return this.getStringAttribute('collect_sel');
  }
  public set collectSel(value: string) {
    this._collectSel = value;
  }
  public resetCollectSel() {
    this._collectSel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectSelInput() {
    return this._collectSel;
  }

  // config_state - computed: false, optional: true, required: false
  private _configState?: string; 
  public get configState() {
    return this.getStringAttribute('config_state');
  }
  public set configState(value: string) {
    this._configState = value;
  }
  public resetConfigState() {
    this._configState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configStateInput() {
    return this._configState;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // device_mo_id - computed: false, optional: true, required: false
  private _deviceMoId?: string; 
  public get deviceMoId() {
    return this.getStringAttribute('device_mo_id');
  }
  public set deviceMoId(value: string) {
    this._deviceMoId = value;
  }
  public resetDeviceMoId() {
    this._deviceMoId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceMoIdInput() {
    return this._deviceMoId;
  }

  // dn - computed: false, optional: true, required: false
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  public resetDn() {
    this._dn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
  }

  // domain_group_moid - computed: false, optional: true, required: false
  private _domainGroupMoid?: string; 
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }
  public set domainGroupMoid(value: string) {
    this._domainGroupMoid = value;
  }
  public resetDomainGroupMoid() {
    this._domainGroupMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupMoidInput() {
    return this._domainGroupMoid;
  }

  // front_panel_lock_state - computed: false, optional: true, required: false
  private _frontPanelLockState?: string; 
  public get frontPanelLockState() {
    return this.getStringAttribute('front_panel_lock_state');
  }
  public set frontPanelLockState(value: string) {
    this._frontPanelLockState = value;
  }
  public resetFrontPanelLockState() {
    this._frontPanelLockState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontPanelLockStateInput() {
    return this._frontPanelLockState;
  }

  // host_init_configuration - computed: false, optional: true, required: false
  private _hostInitConfiguration?: string; 
  public get hostInitConfiguration() {
    return this.getStringAttribute('host_init_configuration');
  }
  public set hostInitConfiguration(value: string) {
    this._hostInitConfiguration = value;
  }
  public resetHostInitConfiguration() {
    this._hostInitConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInitConfigurationInput() {
    return this._hostInitConfiguration;
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

  // kvm_reset - computed: false, optional: true, required: false
  private _kvmReset?: string; 
  public get kvmReset() {
    return this.getStringAttribute('kvm_reset');
  }
  public set kvmReset(value: string) {
    this._kvmReset = value;
  }
  public resetKvmReset() {
    this._kvmReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvmResetInput() {
    return this._kvmReset;
  }

  // mod_time - computed: false, optional: true, required: false
  private _modTime?: string; 
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }
  public set modTime(value: string) {
    this._modTime = value;
  }
  public resetModTime() {
    this._modTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modTimeInput() {
    return this._modTime;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // one_time_boot_device - computed: false, optional: true, required: false
  private _oneTimeBootDevice?: string; 
  public get oneTimeBootDevice() {
    return this.getStringAttribute('one_time_boot_device');
  }
  public set oneTimeBootDevice(value: string) {
    this._oneTimeBootDevice = value;
  }
  public resetOneTimeBootDevice() {
    this._oneTimeBootDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimeBootDeviceInput() {
    return this._oneTimeBootDevice;
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // reset_memory_errors - computed: false, optional: true, required: false
  private _resetMemoryErrors?: string; 
  public get resetMemoryErrors() {
    return this.getStringAttribute('reset_memory_errors');
  }
  public set resetMemoryErrors(value: string) {
    this._resetMemoryErrors = value;
  }
  public resetResetMemoryErrors() {
    this._resetMemoryErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetMemoryErrorsInput() {
    return this._resetMemoryErrors;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightComputeServerSettingResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // rn - computed: false, optional: true, required: false
  private _rn?: string; 
  public get rn() {
    return this.getStringAttribute('rn');
  }
  public set rn(value: string) {
    this._rn = value;
  }
  public resetRn() {
    this._rn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rnInput() {
    return this._rn;
  }

  // shared_scope - computed: false, optional: true, required: false
  private _sharedScope?: string; 
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }
  public set sharedScope(value: string) {
    this._sharedScope = value;
  }
  public resetSharedScope() {
    this._sharedScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedScopeInput() {
    return this._sharedScope;
  }

  // tpm_reset - computed: false, optional: true, required: false
  private _tpmReset?: string; 
  public get tpmReset() {
    return this.getStringAttribute('tpm_reset');
  }
  public set tpmReset(value: string) {
    this._tpmReset = value;
  }
  public resetTpmReset() {
    this._tpmReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpmResetInput() {
    return this._tpmReset;
  }

  // tunneled_kvm_state - computed: false, optional: true, required: false
  private _tunneledKvmState?: string; 
  public get tunneledKvmState() {
    return this.getStringAttribute('tunneled_kvm_state');
  }
  public set tunneledKvmState(value: string) {
    this._tunneledKvmState = value;
  }
  public resetTunneledKvmState() {
    this._tunneledKvmState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunneledKvmStateInput() {
    return this._tunneledKvmState;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataIntersightComputeServerSettingAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightComputeServerSettingAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // certificates_action - computed: false, optional: true, required: false
  private _certificatesAction = new DataIntersightComputeServerSettingCertificatesActionOutputReference(this, "certificates_action");
  public get certificatesAction() {
    return this._certificatesAction;
  }
  public putCertificatesAction(value: DataIntersightComputeServerSettingCertificatesAction) {
    this._certificatesAction.internalValue = value;
  }
  public resetCertificatesAction() {
    this._certificatesAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesActionInput() {
    return this._certificatesAction.internalValue;
  }

  // locator_led - computed: false, optional: true, required: false
  private _locatorLed = new DataIntersightComputeServerSettingLocatorLedOutputReference(this, "locator_led");
  public get locatorLed() {
    return this._locatorLed;
  }
  public putLocatorLed(value: DataIntersightComputeServerSettingLocatorLed) {
    this._locatorLed.internalValue = value;
  }
  public resetLocatorLed() {
    this._locatorLed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorLedInput() {
    return this._locatorLed.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightComputeServerSettingParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightComputeServerSettingParent) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // permission_resources - computed: false, optional: true, required: false
  private _permissionResources = new DataIntersightComputeServerSettingPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightComputeServerSettingPermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // persistent_memory_operation - computed: false, optional: true, required: false
  private _persistentMemoryOperation = new DataIntersightComputeServerSettingPersistentMemoryOperationOutputReference(this, "persistent_memory_operation");
  public get persistentMemoryOperation() {
    return this._persistentMemoryOperation;
  }
  public putPersistentMemoryOperation(value: DataIntersightComputeServerSettingPersistentMemoryOperation) {
    this._persistentMemoryOperation.internalValue = value;
  }
  public resetPersistentMemoryOperation() {
    this._persistentMemoryOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentMemoryOperationInput() {
    return this._persistentMemoryOperation.internalValue;
  }

  // personality_setting - computed: false, optional: true, required: false
  private _personalitySetting = new DataIntersightComputeServerSettingPersonalitySettingOutputReference(this, "personality_setting");
  public get personalitySetting() {
    return this._personalitySetting;
  }
  public putPersonalitySetting(value: DataIntersightComputeServerSettingPersonalitySetting) {
    this._personalitySetting.internalValue = value;
  }
  public resetPersonalitySetting() {
    this._personalitySetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalitySettingInput() {
    return this._personalitySetting.internalValue;
  }

  // registered_device - computed: false, optional: true, required: false
  private _registeredDevice = new DataIntersightComputeServerSettingRegisteredDeviceOutputReference(this, "registered_device");
  public get registeredDevice() {
    return this._registeredDevice;
  }
  public putRegisteredDevice(value: DataIntersightComputeServerSettingRegisteredDevice) {
    this._registeredDevice.internalValue = value;
  }
  public resetRegisteredDevice() {
    this._registeredDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredDeviceInput() {
    return this._registeredDevice.internalValue;
  }

  // running_workflow - computed: false, optional: true, required: false
  private _runningWorkflow = new DataIntersightComputeServerSettingRunningWorkflowOutputReference(this, "running_workflow");
  public get runningWorkflow() {
    return this._runningWorkflow;
  }
  public putRunningWorkflow(value: DataIntersightComputeServerSettingRunningWorkflow) {
    this._runningWorkflow.internalValue = value;
  }
  public resetRunningWorkflow() {
    this._runningWorkflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningWorkflowInput() {
    return this._runningWorkflow.internalValue;
  }

  // server - computed: false, optional: true, required: false
  private _server = new DataIntersightComputeServerSettingServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataIntersightComputeServerSettingServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // server_config - computed: false, optional: true, required: false
  private _serverConfig = new DataIntersightComputeServerSettingServerConfigOutputReference(this, "server_config");
  public get serverConfig() {
    return this._serverConfig;
  }
  public putServerConfig(value: DataIntersightComputeServerSettingServerConfig) {
    this._serverConfig.internalValue = value;
  }
  public resetServerConfig() {
    this._serverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConfigInput() {
    return this._serverConfig.internalValue;
  }

  // server_op_status - computed: false, optional: true, required: false
  private _serverOpStatus = new DataIntersightComputeServerSettingServerOpStatusList(this, "server_op_status", false);
  public get serverOpStatus() {
    return this._serverOpStatus;
  }
  public putServerOpStatus(value: DataIntersightComputeServerSettingServerOpStatus[] | cdktf.IResolvable) {
    this._serverOpStatus.internalValue = value;
  }
  public resetServerOpStatus() {
    this._serverOpStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverOpStatusInput() {
    return this._serverOpStatus.internalValue;
  }

  // storage_controller_operation - computed: false, optional: true, required: false
  private _storageControllerOperation = new DataIntersightComputeServerSettingStorageControllerOperationOutputReference(this, "storage_controller_operation");
  public get storageControllerOperation() {
    return this._storageControllerOperation;
  }
  public putStorageControllerOperation(value: DataIntersightComputeServerSettingStorageControllerOperation) {
    this._storageControllerOperation.internalValue = value;
  }
  public resetStorageControllerOperation() {
    this._storageControllerOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageControllerOperationInput() {
    return this._storageControllerOperation.internalValue;
  }

  // storage_physical_drive_operation - computed: false, optional: true, required: false
  private _storagePhysicalDriveOperation = new DataIntersightComputeServerSettingStoragePhysicalDriveOperationOutputReference(this, "storage_physical_drive_operation");
  public get storagePhysicalDriveOperation() {
    return this._storagePhysicalDriveOperation;
  }
  public putStoragePhysicalDriveOperation(value: DataIntersightComputeServerSettingStoragePhysicalDriveOperation) {
    this._storagePhysicalDriveOperation.internalValue = value;
  }
  public resetStoragePhysicalDriveOperation() {
    this._storagePhysicalDriveOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePhysicalDriveOperationInput() {
    return this._storagePhysicalDriveOperation.internalValue;
  }

  // storage_utility_image_operation - computed: false, optional: true, required: false
  private _storageUtilityImageOperation = new DataIntersightComputeServerSettingStorageUtilityImageOperationOutputReference(this, "storage_utility_image_operation");
  public get storageUtilityImageOperation() {
    return this._storageUtilityImageOperation;
  }
  public putStorageUtilityImageOperation(value: DataIntersightComputeServerSettingStorageUtilityImageOperation) {
    this._storageUtilityImageOperation.internalValue = value;
  }
  public resetStorageUtilityImageOperation() {
    this._storageUtilityImageOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUtilityImageOperationInput() {
    return this._storageUtilityImageOperation.internalValue;
  }

  // storage_virtual_drive_operation - computed: false, optional: true, required: false
  private _storageVirtualDriveOperation = new DataIntersightComputeServerSettingStorageVirtualDriveOperationOutputReference(this, "storage_virtual_drive_operation");
  public get storageVirtualDriveOperation() {
    return this._storageVirtualDriveOperation;
  }
  public putStorageVirtualDriveOperation(value: DataIntersightComputeServerSettingStorageVirtualDriveOperation) {
    this._storageVirtualDriveOperation.internalValue = value;
  }
  public resetStorageVirtualDriveOperation() {
    this._storageVirtualDriveOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageVirtualDriveOperationInput() {
    return this._storageVirtualDriveOperation.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataIntersightComputeServerSettingTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightComputeServerSettingTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // version_context - computed: false, optional: true, required: false
  private _versionContext = new DataIntersightComputeServerSettingVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightComputeServerSettingVersionContext) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      admin_locator_led_state: cdktf.stringToTerraform(this._adminLocatorLedState),
      admin_power_state: cdktf.stringToTerraform(this._adminPowerState),
      class_id: cdktf.stringToTerraform(this._classId),
      clear_sel: cdktf.stringToTerraform(this._clearSel),
      cmos_reset: cdktf.stringToTerraform(this._cmosReset),
      collect_sel: cdktf.stringToTerraform(this._collectSel),
      config_state: cdktf.stringToTerraform(this._configState),
      create_time: cdktf.stringToTerraform(this._createTime),
      device_mo_id: cdktf.stringToTerraform(this._deviceMoId),
      dn: cdktf.stringToTerraform(this._dn),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      front_panel_lock_state: cdktf.stringToTerraform(this._frontPanelLockState),
      host_init_configuration: cdktf.stringToTerraform(this._hostInitConfiguration),
      id: cdktf.stringToTerraform(this._id),
      kvm_reset: cdktf.stringToTerraform(this._kvmReset),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      name: cdktf.stringToTerraform(this._name),
      object_type: cdktf.stringToTerraform(this._objectType),
      one_time_boot_device: cdktf.stringToTerraform(this._oneTimeBootDevice),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      reset_memory_errors: cdktf.stringToTerraform(this._resetMemoryErrors),
      rn: cdktf.stringToTerraform(this._rn),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      tpm_reset: cdktf.stringToTerraform(this._tpmReset),
      tunneled_kvm_state: cdktf.stringToTerraform(this._tunneledKvmState),
      ancestors: cdktf.listMapper(dataIntersightComputeServerSettingAncestorsToTerraform, true)(this._ancestors.internalValue),
      certificates_action: dataIntersightComputeServerSettingCertificatesActionToTerraform(this._certificatesAction.internalValue),
      locator_led: dataIntersightComputeServerSettingLocatorLedToTerraform(this._locatorLed.internalValue),
      parent: dataIntersightComputeServerSettingParentToTerraform(this._parent.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightComputeServerSettingPermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      persistent_memory_operation: dataIntersightComputeServerSettingPersistentMemoryOperationToTerraform(this._persistentMemoryOperation.internalValue),
      personality_setting: dataIntersightComputeServerSettingPersonalitySettingToTerraform(this._personalitySetting.internalValue),
      registered_device: dataIntersightComputeServerSettingRegisteredDeviceToTerraform(this._registeredDevice.internalValue),
      running_workflow: dataIntersightComputeServerSettingRunningWorkflowToTerraform(this._runningWorkflow.internalValue),
      server: dataIntersightComputeServerSettingServerToTerraform(this._server.internalValue),
      server_config: dataIntersightComputeServerSettingServerConfigToTerraform(this._serverConfig.internalValue),
      server_op_status: cdktf.listMapper(dataIntersightComputeServerSettingServerOpStatusToTerraform, true)(this._serverOpStatus.internalValue),
      storage_controller_operation: dataIntersightComputeServerSettingStorageControllerOperationToTerraform(this._storageControllerOperation.internalValue),
      storage_physical_drive_operation: dataIntersightComputeServerSettingStoragePhysicalDriveOperationToTerraform(this._storagePhysicalDriveOperation.internalValue),
      storage_utility_image_operation: dataIntersightComputeServerSettingStorageUtilityImageOperationToTerraform(this._storageUtilityImageOperation.internalValue),
      storage_virtual_drive_operation: dataIntersightComputeServerSettingStorageVirtualDriveOperationToTerraform(this._storageVirtualDriveOperation.internalValue),
      tags: cdktf.listMapper(dataIntersightComputeServerSettingTagsToTerraform, true)(this._tags.internalValue),
      version_context: dataIntersightComputeServerSettingVersionContextToTerraform(this._versionContext.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_moid: {
        value: cdktf.stringToHclTerraform(this._accountMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_properties: {
        value: cdktf.stringToHclTerraform(this._additionalProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_locator_led_state: {
        value: cdktf.stringToHclTerraform(this._adminLocatorLedState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_power_state: {
        value: cdktf.stringToHclTerraform(this._adminPowerState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear_sel: {
        value: cdktf.stringToHclTerraform(this._clearSel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmos_reset: {
        value: cdktf.stringToHclTerraform(this._cmosReset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collect_sel: {
        value: cdktf.stringToHclTerraform(this._collectSel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_state: {
        value: cdktf.stringToHclTerraform(this._configState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_mo_id: {
        value: cdktf.stringToHclTerraform(this._deviceMoId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dn: {
        value: cdktf.stringToHclTerraform(this._dn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_group_moid: {
        value: cdktf.stringToHclTerraform(this._domainGroupMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      front_panel_lock_state: {
        value: cdktf.stringToHclTerraform(this._frontPanelLockState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_init_configuration: {
        value: cdktf.stringToHclTerraform(this._hostInitConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kvm_reset: {
        value: cdktf.stringToHclTerraform(this._kvmReset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mod_time: {
        value: cdktf.stringToHclTerraform(this._modTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      moid: {
        value: cdktf.stringToHclTerraform(this._moid),
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
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      one_time_boot_device: {
        value: cdktf.stringToHclTerraform(this._oneTimeBootDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      reset_memory_errors: {
        value: cdktf.stringToHclTerraform(this._resetMemoryErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rn: {
        value: cdktf.stringToHclTerraform(this._rn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_scope: {
        value: cdktf.stringToHclTerraform(this._sharedScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpm_reset: {
        value: cdktf.stringToHclTerraform(this._tpmReset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunneled_kvm_state: {
        value: cdktf.stringToHclTerraform(this._tunneledKvmState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightComputeServerSettingAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingAncestorsList",
      },
      certificates_action: {
        value: dataIntersightComputeServerSettingCertificatesActionToHclTerraform(this._certificatesAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingCertificatesActionList",
      },
      locator_led: {
        value: dataIntersightComputeServerSettingLocatorLedToHclTerraform(this._locatorLed.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingLocatorLedList",
      },
      parent: {
        value: dataIntersightComputeServerSettingParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightComputeServerSettingPermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingPermissionResourcesList",
      },
      persistent_memory_operation: {
        value: dataIntersightComputeServerSettingPersistentMemoryOperationToHclTerraform(this._persistentMemoryOperation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingPersistentMemoryOperationList",
      },
      personality_setting: {
        value: dataIntersightComputeServerSettingPersonalitySettingToHclTerraform(this._personalitySetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingPersonalitySettingList",
      },
      registered_device: {
        value: dataIntersightComputeServerSettingRegisteredDeviceToHclTerraform(this._registeredDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingRegisteredDeviceList",
      },
      running_workflow: {
        value: dataIntersightComputeServerSettingRunningWorkflowToHclTerraform(this._runningWorkflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingRunningWorkflowList",
      },
      server: {
        value: dataIntersightComputeServerSettingServerToHclTerraform(this._server.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingServerList",
      },
      server_config: {
        value: dataIntersightComputeServerSettingServerConfigToHclTerraform(this._serverConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingServerConfigList",
      },
      server_op_status: {
        value: cdktf.listMapperHcl(dataIntersightComputeServerSettingServerOpStatusToHclTerraform, true)(this._serverOpStatus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingServerOpStatusList",
      },
      storage_controller_operation: {
        value: dataIntersightComputeServerSettingStorageControllerOperationToHclTerraform(this._storageControllerOperation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingStorageControllerOperationList",
      },
      storage_physical_drive_operation: {
        value: dataIntersightComputeServerSettingStoragePhysicalDriveOperationToHclTerraform(this._storagePhysicalDriveOperation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingStoragePhysicalDriveOperationList",
      },
      storage_utility_image_operation: {
        value: dataIntersightComputeServerSettingStorageUtilityImageOperationToHclTerraform(this._storageUtilityImageOperation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingStorageUtilityImageOperationList",
      },
      storage_virtual_drive_operation: {
        value: dataIntersightComputeServerSettingStorageVirtualDriveOperationToHclTerraform(this._storageVirtualDriveOperation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingStorageVirtualDriveOperationList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightComputeServerSettingTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingTagsList",
      },
      version_context: {
        value: dataIntersightComputeServerSettingVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightComputeServerSettingVersionContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
