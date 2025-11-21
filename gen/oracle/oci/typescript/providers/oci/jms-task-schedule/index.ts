// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JmsTaskScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#execution_recurrences JmsTaskSchedule#execution_recurrences}
  */
  readonly executionRecurrences: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#fleet_id JmsTaskSchedule#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#id JmsTaskSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * task_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#task_details JmsTaskSchedule#task_details}
  */
  readonly taskDetails: JmsTaskScheduleTaskDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#timeouts JmsTaskSchedule#timeouts}
  */
  readonly timeouts?: JmsTaskScheduleTimeouts;
}
export interface JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSites {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#artifact_content_type JmsTaskSchedule#artifact_content_type}
  */
  readonly artifactContentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#force_install JmsTaskSchedule#force_install}
  */
  readonly forceInstall?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#headless_mode JmsTaskSchedule#headless_mode}
  */
  readonly headlessMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#installation_path JmsTaskSchedule#installation_path}
  */
  readonly installationPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#managed_instance_id JmsTaskSchedule#managed_instance_id}
  */
  readonly managedInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#release_version JmsTaskSchedule#release_version}
  */
  readonly releaseVersion?: string;
}

export function jmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSitesToTerraform(struct?: JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_content_type: cdktf.stringToTerraform(struct!.artifactContentType),
    force_install: cdktf.booleanToTerraform(struct!.forceInstall),
    headless_mode: cdktf.booleanToTerraform(struct!.headlessMode),
    installation_path: cdktf.stringToTerraform(struct!.installationPath),
    managed_instance_id: cdktf.stringToTerraform(struct!.managedInstanceId),
    release_version: cdktf.stringToTerraform(struct!.releaseVersion),
  }
}


export function jmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSitesToHclTerraform(struct?: JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_content_type: {
      value: cdktf.stringToHclTerraform(struct!.artifactContentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_install: {
      value: cdktf.booleanToHclTerraform(struct!.forceInstall),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headless_mode: {
      value: cdktf.booleanToHclTerraform(struct!.headlessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    installation_path: {
      value: cdktf.stringToHclTerraform(struct!.installationPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.managedInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    release_version: {
      value: cdktf.stringToHclTerraform(struct!.releaseVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactContentType = this._artifactContentType;
    }
    if (this._forceInstall !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceInstall = this._forceInstall;
    }
    if (this._headlessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.headlessMode = this._headlessMode;
    }
    if (this._installationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.installationPath = this._installationPath;
    }
    if (this._managedInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedInstanceId = this._managedInstanceId;
    }
    if (this._releaseVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseVersion = this._releaseVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactContentType = undefined;
      this._forceInstall = undefined;
      this._headlessMode = undefined;
      this._installationPath = undefined;
      this._managedInstanceId = undefined;
      this._releaseVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactContentType = value.artifactContentType;
      this._forceInstall = value.forceInstall;
      this._headlessMode = value.headlessMode;
      this._installationPath = value.installationPath;
      this._managedInstanceId = value.managedInstanceId;
      this._releaseVersion = value.releaseVersion;
    }
  }

  // artifact_content_type - computed: true, optional: true, required: false
  private _artifactContentType?: string; 
  public get artifactContentType() {
    return this.getStringAttribute('artifact_content_type');
  }
  public set artifactContentType(value: string) {
    this._artifactContentType = value;
  }
  public resetArtifactContentType() {
    this._artifactContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactContentTypeInput() {
    return this._artifactContentType;
  }

  // force_install - computed: true, optional: true, required: false
  private _forceInstall?: boolean | cdktf.IResolvable; 
  public get forceInstall() {
    return this.getBooleanAttribute('force_install');
  }
  public set forceInstall(value: boolean | cdktf.IResolvable) {
    this._forceInstall = value;
  }
  public resetForceInstall() {
    this._forceInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInstallInput() {
    return this._forceInstall;
  }

  // headless_mode - computed: true, optional: true, required: false
  private _headlessMode?: boolean | cdktf.IResolvable; 
  public get headlessMode() {
    return this.getBooleanAttribute('headless_mode');
  }
  public set headlessMode(value: boolean | cdktf.IResolvable) {
    this._headlessMode = value;
  }
  public resetHeadlessMode() {
    this._headlessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headlessModeInput() {
    return this._headlessMode;
  }

  // installation_path - computed: true, optional: true, required: false
  private _installationPath?: string; 
  public get installationPath() {
    return this.getStringAttribute('installation_path');
  }
  public set installationPath(value: string) {
    this._installationPath = value;
  }
  public resetInstallationPath() {
    this._installationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationPathInput() {
    return this._installationPath;
  }

  // managed_instance_id - computed: true, optional: true, required: false
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  public resetManagedInstanceId() {
    this._managedInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // release_version - computed: true, optional: true, required: false
  private _releaseVersion?: string; 
  public get releaseVersion() {
    return this.getStringAttribute('release_version');
  }
  public set releaseVersion(value: string) {
    this._releaseVersion = value;
  }
  public resetReleaseVersion() {
    this._releaseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseVersionInput() {
    return this._releaseVersion;
  }
}

export class JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSitesList extends cdktf.ComplexList {
  public internalValue? : JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSites[] | cdktf.IResolvable

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
  public get(index: number): JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSitesOutputReference {
    return new JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#post_installation_actions JmsTaskSchedule#post_installation_actions}
  */
  readonly postInstallationActions?: string[];
  /**
  * installation_sites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#installation_sites JmsTaskSchedule#installation_sites}
  */
  readonly installationSites?: JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSites[] | cdktf.IResolvable;
}

export function jmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestToTerraform(struct?: JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestOutputReference | JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_installation_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.postInstallationActions),
    installation_sites: cdktf.listMapper(jmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSitesToTerraform, true)(struct!.installationSites),
  }
}


export function jmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestToHclTerraform(struct?: JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestOutputReference | JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_installation_actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.postInstallationActions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    installation_sites: {
      value: cdktf.listMapperHcl(jmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSitesToHclTerraform, true)(struct!.installationSites),
      isBlock: true,
      type: "list",
      storageClassType: "JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSitesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postInstallationActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.postInstallationActions = this._postInstallationActions;
    }
    if (this._installationSites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.installationSites = this._installationSites?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postInstallationActions = undefined;
      this._installationSites.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postInstallationActions = value.postInstallationActions;
      this._installationSites.internalValue = value.installationSites;
    }
  }

  // post_installation_actions - computed: true, optional: true, required: false
  private _postInstallationActions?: string[]; 
  public get postInstallationActions() {
    return this.getListAttribute('post_installation_actions');
  }
  public set postInstallationActions(value: string[]) {
    this._postInstallationActions = value;
  }
  public resetPostInstallationActions() {
    this._postInstallationActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postInstallationActionsInput() {
    return this._postInstallationActions;
  }

  // installation_sites - computed: false, optional: true, required: false
  private _installationSites = new JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSitesList(this, "installation_sites", false);
  public get installationSites() {
    return this._installationSites;
  }
  public putInstallationSites(value: JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSites[] | cdktf.IResolvable) {
    this._installationSites.internalValue = value;
  }
  public resetInstallationSites() {
    this._installationSites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationSitesInput() {
    return this._installationSites.internalValue;
  }
}
export interface JmsTaskScheduleTaskDetailsCryptoTaskRequestTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#application_installation_key JmsTaskSchedule#application_installation_key}
  */
  readonly applicationInstallationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#application_key JmsTaskSchedule#application_key}
  */
  readonly applicationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#container_key JmsTaskSchedule#container_key}
  */
  readonly containerKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#jre_key JmsTaskSchedule#jre_key}
  */
  readonly jreKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#managed_instance_id JmsTaskSchedule#managed_instance_id}
  */
  readonly managedInstanceId?: string;
}

export function jmsTaskScheduleTaskDetailsCryptoTaskRequestTargetsToTerraform(struct?: JmsTaskScheduleTaskDetailsCryptoTaskRequestTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_installation_key: cdktf.stringToTerraform(struct!.applicationInstallationKey),
    application_key: cdktf.stringToTerraform(struct!.applicationKey),
    container_key: cdktf.stringToTerraform(struct!.containerKey),
    jre_key: cdktf.stringToTerraform(struct!.jreKey),
    managed_instance_id: cdktf.stringToTerraform(struct!.managedInstanceId),
  }
}


export function jmsTaskScheduleTaskDetailsCryptoTaskRequestTargetsToHclTerraform(struct?: JmsTaskScheduleTaskDetailsCryptoTaskRequestTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_installation_key: {
      value: cdktf.stringToHclTerraform(struct!.applicationInstallationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_key: {
      value: cdktf.stringToHclTerraform(struct!.applicationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_key: {
      value: cdktf.stringToHclTerraform(struct!.containerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jre_key: {
      value: cdktf.stringToHclTerraform(struct!.jreKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.managedInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTaskDetailsCryptoTaskRequestTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JmsTaskScheduleTaskDetailsCryptoTaskRequestTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationInstallationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationInstallationKey = this._applicationInstallationKey;
    }
    if (this._applicationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationKey = this._applicationKey;
    }
    if (this._containerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerKey = this._containerKey;
    }
    if (this._jreKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jreKey = this._jreKey;
    }
    if (this._managedInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedInstanceId = this._managedInstanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTaskDetailsCryptoTaskRequestTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationInstallationKey = undefined;
      this._applicationKey = undefined;
      this._containerKey = undefined;
      this._jreKey = undefined;
      this._managedInstanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationInstallationKey = value.applicationInstallationKey;
      this._applicationKey = value.applicationKey;
      this._containerKey = value.containerKey;
      this._jreKey = value.jreKey;
      this._managedInstanceId = value.managedInstanceId;
    }
  }

  // application_installation_key - computed: true, optional: true, required: false
  private _applicationInstallationKey?: string; 
  public get applicationInstallationKey() {
    return this.getStringAttribute('application_installation_key');
  }
  public set applicationInstallationKey(value: string) {
    this._applicationInstallationKey = value;
  }
  public resetApplicationInstallationKey() {
    this._applicationInstallationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInstallationKeyInput() {
    return this._applicationInstallationKey;
  }

  // application_key - computed: true, optional: true, required: false
  private _applicationKey?: string; 
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }
  public set applicationKey(value: string) {
    this._applicationKey = value;
  }
  public resetApplicationKey() {
    this._applicationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyInput() {
    return this._applicationKey;
  }

  // container_key - computed: true, optional: true, required: false
  private _containerKey?: string; 
  public get containerKey() {
    return this.getStringAttribute('container_key');
  }
  public set containerKey(value: string) {
    this._containerKey = value;
  }
  public resetContainerKey() {
    this._containerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerKeyInput() {
    return this._containerKey;
  }

  // jre_key - computed: true, optional: true, required: false
  private _jreKey?: string; 
  public get jreKey() {
    return this.getStringAttribute('jre_key');
  }
  public set jreKey(value: string) {
    this._jreKey = value;
  }
  public resetJreKey() {
    this._jreKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jreKeyInput() {
    return this._jreKey;
  }

  // managed_instance_id - computed: true, optional: true, required: false
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  public resetManagedInstanceId() {
    this._managedInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }
}

export class JmsTaskScheduleTaskDetailsCryptoTaskRequestTargetsList extends cdktf.ComplexList {
  public internalValue? : JmsTaskScheduleTaskDetailsCryptoTaskRequestTargets[] | cdktf.IResolvable

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
  public get(index: number): JmsTaskScheduleTaskDetailsCryptoTaskRequestTargetsOutputReference {
    return new JmsTaskScheduleTaskDetailsCryptoTaskRequestTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JmsTaskScheduleTaskDetailsCryptoTaskRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#recording_duration_in_minutes JmsTaskSchedule#recording_duration_in_minutes}
  */
  readonly recordingDurationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#waiting_period_in_minutes JmsTaskSchedule#waiting_period_in_minutes}
  */
  readonly waitingPeriodInMinutes?: number;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#targets JmsTaskSchedule#targets}
  */
  readonly targets?: JmsTaskScheduleTaskDetailsCryptoTaskRequestTargets[] | cdktf.IResolvable;
}

export function jmsTaskScheduleTaskDetailsCryptoTaskRequestToTerraform(struct?: JmsTaskScheduleTaskDetailsCryptoTaskRequestOutputReference | JmsTaskScheduleTaskDetailsCryptoTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recording_duration_in_minutes: cdktf.numberToTerraform(struct!.recordingDurationInMinutes),
    waiting_period_in_minutes: cdktf.numberToTerraform(struct!.waitingPeriodInMinutes),
    targets: cdktf.listMapper(jmsTaskScheduleTaskDetailsCryptoTaskRequestTargetsToTerraform, true)(struct!.targets),
  }
}


export function jmsTaskScheduleTaskDetailsCryptoTaskRequestToHclTerraform(struct?: JmsTaskScheduleTaskDetailsCryptoTaskRequestOutputReference | JmsTaskScheduleTaskDetailsCryptoTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recording_duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.recordingDurationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    waiting_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.waitingPeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    targets: {
      value: cdktf.listMapperHcl(jmsTaskScheduleTaskDetailsCryptoTaskRequestTargetsToHclTerraform, true)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "JmsTaskScheduleTaskDetailsCryptoTaskRequestTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTaskDetailsCryptoTaskRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsTaskScheduleTaskDetailsCryptoTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordingDurationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingDurationInMinutes = this._recordingDurationInMinutes;
    }
    if (this._waitingPeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitingPeriodInMinutes = this._waitingPeriodInMinutes;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTaskDetailsCryptoTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordingDurationInMinutes = undefined;
      this._waitingPeriodInMinutes = undefined;
      this._targets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordingDurationInMinutes = value.recordingDurationInMinutes;
      this._waitingPeriodInMinutes = value.waitingPeriodInMinutes;
      this._targets.internalValue = value.targets;
    }
  }

  // recording_duration_in_minutes - computed: true, optional: true, required: false
  private _recordingDurationInMinutes?: number; 
  public get recordingDurationInMinutes() {
    return this.getNumberAttribute('recording_duration_in_minutes');
  }
  public set recordingDurationInMinutes(value: number) {
    this._recordingDurationInMinutes = value;
  }
  public resetRecordingDurationInMinutes() {
    this._recordingDurationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingDurationInMinutesInput() {
    return this._recordingDurationInMinutes;
  }

  // waiting_period_in_minutes - computed: true, optional: true, required: false
  private _waitingPeriodInMinutes?: number; 
  public get waitingPeriodInMinutes() {
    return this.getNumberAttribute('waiting_period_in_minutes');
  }
  public set waitingPeriodInMinutes(value: number) {
    this._waitingPeriodInMinutes = value;
  }
  public resetWaitingPeriodInMinutes() {
    this._waitingPeriodInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitingPeriodInMinutesInput() {
    return this._waitingPeriodInMinutes;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new JmsTaskScheduleTaskDetailsCryptoTaskRequestTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: JmsTaskScheduleTaskDetailsCryptoTaskRequestTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}
export interface JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#deployed_application_installation_key JmsTaskSchedule#deployed_application_installation_key}
  */
  readonly deployedApplicationInstallationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#exclude_package_prefixes JmsTaskSchedule#exclude_package_prefixes}
  */
  readonly excludePackagePrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#include_package_prefixes JmsTaskSchedule#include_package_prefixes}
  */
  readonly includePackagePrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#managed_instance_id JmsTaskSchedule#managed_instance_id}
  */
  readonly managedInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#source_jdk_version JmsTaskSchedule#source_jdk_version}
  */
  readonly sourceJdkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#target_jdk_version JmsTaskSchedule#target_jdk_version}
  */
  readonly targetJdkVersion?: string;
}

export function jmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargetsToTerraform(struct?: JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployed_application_installation_key: cdktf.stringToTerraform(struct!.deployedApplicationInstallationKey),
    exclude_package_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePackagePrefixes),
    include_package_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePackagePrefixes),
    managed_instance_id: cdktf.stringToTerraform(struct!.managedInstanceId),
    source_jdk_version: cdktf.stringToTerraform(struct!.sourceJdkVersion),
    target_jdk_version: cdktf.stringToTerraform(struct!.targetJdkVersion),
  }
}


export function jmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargetsToHclTerraform(struct?: JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployed_application_installation_key: {
      value: cdktf.stringToHclTerraform(struct!.deployedApplicationInstallationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_package_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePackagePrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_package_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePackagePrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    managed_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.managedInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_jdk_version: {
      value: cdktf.stringToHclTerraform(struct!.sourceJdkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_jdk_version: {
      value: cdktf.stringToHclTerraform(struct!.targetJdkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployedApplicationInstallationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployedApplicationInstallationKey = this._deployedApplicationInstallationKey;
    }
    if (this._excludePackagePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePackagePrefixes = this._excludePackagePrefixes;
    }
    if (this._includePackagePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePackagePrefixes = this._includePackagePrefixes;
    }
    if (this._managedInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedInstanceId = this._managedInstanceId;
    }
    if (this._sourceJdkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceJdkVersion = this._sourceJdkVersion;
    }
    if (this._targetJdkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetJdkVersion = this._targetJdkVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deployedApplicationInstallationKey = undefined;
      this._excludePackagePrefixes = undefined;
      this._includePackagePrefixes = undefined;
      this._managedInstanceId = undefined;
      this._sourceJdkVersion = undefined;
      this._targetJdkVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deployedApplicationInstallationKey = value.deployedApplicationInstallationKey;
      this._excludePackagePrefixes = value.excludePackagePrefixes;
      this._includePackagePrefixes = value.includePackagePrefixes;
      this._managedInstanceId = value.managedInstanceId;
      this._sourceJdkVersion = value.sourceJdkVersion;
      this._targetJdkVersion = value.targetJdkVersion;
    }
  }

  // deployed_application_installation_key - computed: true, optional: true, required: false
  private _deployedApplicationInstallationKey?: string; 
  public get deployedApplicationInstallationKey() {
    return this.getStringAttribute('deployed_application_installation_key');
  }
  public set deployedApplicationInstallationKey(value: string) {
    this._deployedApplicationInstallationKey = value;
  }
  public resetDeployedApplicationInstallationKey() {
    this._deployedApplicationInstallationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployedApplicationInstallationKeyInput() {
    return this._deployedApplicationInstallationKey;
  }

  // exclude_package_prefixes - computed: true, optional: true, required: false
  private _excludePackagePrefixes?: string[]; 
  public get excludePackagePrefixes() {
    return this.getListAttribute('exclude_package_prefixes');
  }
  public set excludePackagePrefixes(value: string[]) {
    this._excludePackagePrefixes = value;
  }
  public resetExcludePackagePrefixes() {
    this._excludePackagePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePackagePrefixesInput() {
    return this._excludePackagePrefixes;
  }

  // include_package_prefixes - computed: true, optional: true, required: false
  private _includePackagePrefixes?: string[]; 
  public get includePackagePrefixes() {
    return this.getListAttribute('include_package_prefixes');
  }
  public set includePackagePrefixes(value: string[]) {
    this._includePackagePrefixes = value;
  }
  public resetIncludePackagePrefixes() {
    this._includePackagePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePackagePrefixesInput() {
    return this._includePackagePrefixes;
  }

  // managed_instance_id - computed: true, optional: true, required: false
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  public resetManagedInstanceId() {
    this._managedInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // source_jdk_version - computed: true, optional: true, required: false
  private _sourceJdkVersion?: string; 
  public get sourceJdkVersion() {
    return this.getStringAttribute('source_jdk_version');
  }
  public set sourceJdkVersion(value: string) {
    this._sourceJdkVersion = value;
  }
  public resetSourceJdkVersion() {
    this._sourceJdkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceJdkVersionInput() {
    return this._sourceJdkVersion;
  }

  // target_jdk_version - computed: true, optional: true, required: false
  private _targetJdkVersion?: string; 
  public get targetJdkVersion() {
    return this.getStringAttribute('target_jdk_version');
  }
  public set targetJdkVersion(value: string) {
    this._targetJdkVersion = value;
  }
  public resetTargetJdkVersion() {
    this._targetJdkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetJdkVersionInput() {
    return this._targetJdkVersion;
  }
}

export class JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargetsList extends cdktf.ComplexList {
  public internalValue? : JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargets[] | cdktf.IResolvable

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
  public get(index: number): JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargetsOutputReference {
    return new JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequest {
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#targets JmsTaskSchedule#targets}
  */
  readonly targets?: JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargets[] | cdktf.IResolvable;
}

export function jmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestToTerraform(struct?: JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestOutputReference | JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    targets: cdktf.listMapper(jmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargetsToTerraform, true)(struct!.targets),
  }
}


export function jmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestToHclTerraform(struct?: JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestOutputReference | JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    targets: {
      value: cdktf.listMapperHcl(jmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargetsToHclTerraform, true)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targets.internalValue = value.targets;
    }
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}
export interface JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#application_installation_key JmsTaskSchedule#application_installation_key}
  */
  readonly applicationInstallationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#exclude_package_prefixes JmsTaskSchedule#exclude_package_prefixes}
  */
  readonly excludePackagePrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#include_package_prefixes JmsTaskSchedule#include_package_prefixes}
  */
  readonly includePackagePrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#managed_instance_id JmsTaskSchedule#managed_instance_id}
  */
  readonly managedInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#source_jdk_version JmsTaskSchedule#source_jdk_version}
  */
  readonly sourceJdkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#target_jdk_version JmsTaskSchedule#target_jdk_version}
  */
  readonly targetJdkVersion?: string;
}

export function jmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargetsToTerraform(struct?: JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_installation_key: cdktf.stringToTerraform(struct!.applicationInstallationKey),
    exclude_package_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePackagePrefixes),
    include_package_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePackagePrefixes),
    managed_instance_id: cdktf.stringToTerraform(struct!.managedInstanceId),
    source_jdk_version: cdktf.stringToTerraform(struct!.sourceJdkVersion),
    target_jdk_version: cdktf.stringToTerraform(struct!.targetJdkVersion),
  }
}


export function jmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargetsToHclTerraform(struct?: JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_installation_key: {
      value: cdktf.stringToHclTerraform(struct!.applicationInstallationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_package_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePackagePrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_package_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePackagePrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    managed_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.managedInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_jdk_version: {
      value: cdktf.stringToHclTerraform(struct!.sourceJdkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_jdk_version: {
      value: cdktf.stringToHclTerraform(struct!.targetJdkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationInstallationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationInstallationKey = this._applicationInstallationKey;
    }
    if (this._excludePackagePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePackagePrefixes = this._excludePackagePrefixes;
    }
    if (this._includePackagePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePackagePrefixes = this._includePackagePrefixes;
    }
    if (this._managedInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedInstanceId = this._managedInstanceId;
    }
    if (this._sourceJdkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceJdkVersion = this._sourceJdkVersion;
    }
    if (this._targetJdkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetJdkVersion = this._targetJdkVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationInstallationKey = undefined;
      this._excludePackagePrefixes = undefined;
      this._includePackagePrefixes = undefined;
      this._managedInstanceId = undefined;
      this._sourceJdkVersion = undefined;
      this._targetJdkVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationInstallationKey = value.applicationInstallationKey;
      this._excludePackagePrefixes = value.excludePackagePrefixes;
      this._includePackagePrefixes = value.includePackagePrefixes;
      this._managedInstanceId = value.managedInstanceId;
      this._sourceJdkVersion = value.sourceJdkVersion;
      this._targetJdkVersion = value.targetJdkVersion;
    }
  }

  // application_installation_key - computed: true, optional: true, required: false
  private _applicationInstallationKey?: string; 
  public get applicationInstallationKey() {
    return this.getStringAttribute('application_installation_key');
  }
  public set applicationInstallationKey(value: string) {
    this._applicationInstallationKey = value;
  }
  public resetApplicationInstallationKey() {
    this._applicationInstallationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInstallationKeyInput() {
    return this._applicationInstallationKey;
  }

  // exclude_package_prefixes - computed: true, optional: true, required: false
  private _excludePackagePrefixes?: string[]; 
  public get excludePackagePrefixes() {
    return this.getListAttribute('exclude_package_prefixes');
  }
  public set excludePackagePrefixes(value: string[]) {
    this._excludePackagePrefixes = value;
  }
  public resetExcludePackagePrefixes() {
    this._excludePackagePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePackagePrefixesInput() {
    return this._excludePackagePrefixes;
  }

  // include_package_prefixes - computed: true, optional: true, required: false
  private _includePackagePrefixes?: string[]; 
  public get includePackagePrefixes() {
    return this.getListAttribute('include_package_prefixes');
  }
  public set includePackagePrefixes(value: string[]) {
    this._includePackagePrefixes = value;
  }
  public resetIncludePackagePrefixes() {
    this._includePackagePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePackagePrefixesInput() {
    return this._includePackagePrefixes;
  }

  // managed_instance_id - computed: true, optional: true, required: false
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  public resetManagedInstanceId() {
    this._managedInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // source_jdk_version - computed: true, optional: true, required: false
  private _sourceJdkVersion?: string; 
  public get sourceJdkVersion() {
    return this.getStringAttribute('source_jdk_version');
  }
  public set sourceJdkVersion(value: string) {
    this._sourceJdkVersion = value;
  }
  public resetSourceJdkVersion() {
    this._sourceJdkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceJdkVersionInput() {
    return this._sourceJdkVersion;
  }

  // target_jdk_version - computed: true, optional: true, required: false
  private _targetJdkVersion?: string; 
  public get targetJdkVersion() {
    return this.getStringAttribute('target_jdk_version');
  }
  public set targetJdkVersion(value: string) {
    this._targetJdkVersion = value;
  }
  public resetTargetJdkVersion() {
    this._targetJdkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetJdkVersionInput() {
    return this._targetJdkVersion;
  }
}

export class JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargetsList extends cdktf.ComplexList {
  public internalValue? : JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargets[] | cdktf.IResolvable

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
  public get(index: number): JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargetsOutputReference {
    return new JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JmsTaskScheduleTaskDetailsJavaMigrationTaskRequest {
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#targets JmsTaskSchedule#targets}
  */
  readonly targets?: JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargets[] | cdktf.IResolvable;
}

export function jmsTaskScheduleTaskDetailsJavaMigrationTaskRequestToTerraform(struct?: JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestOutputReference | JmsTaskScheduleTaskDetailsJavaMigrationTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    targets: cdktf.listMapper(jmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargetsToTerraform, true)(struct!.targets),
  }
}


export function jmsTaskScheduleTaskDetailsJavaMigrationTaskRequestToHclTerraform(struct?: JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestOutputReference | JmsTaskScheduleTaskDetailsJavaMigrationTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    targets: {
      value: cdktf.listMapperHcl(jmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargetsToHclTerraform, true)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsTaskScheduleTaskDetailsJavaMigrationTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTaskDetailsJavaMigrationTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targets.internalValue = value.targets;
    }
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}
export interface JmsTaskScheduleTaskDetailsJfrTaskRequestTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#application_installation_key JmsTaskSchedule#application_installation_key}
  */
  readonly applicationInstallationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#application_key JmsTaskSchedule#application_key}
  */
  readonly applicationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#container_key JmsTaskSchedule#container_key}
  */
  readonly containerKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#jre_key JmsTaskSchedule#jre_key}
  */
  readonly jreKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#managed_instance_id JmsTaskSchedule#managed_instance_id}
  */
  readonly managedInstanceId?: string;
}

export function jmsTaskScheduleTaskDetailsJfrTaskRequestTargetsToTerraform(struct?: JmsTaskScheduleTaskDetailsJfrTaskRequestTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_installation_key: cdktf.stringToTerraform(struct!.applicationInstallationKey),
    application_key: cdktf.stringToTerraform(struct!.applicationKey),
    container_key: cdktf.stringToTerraform(struct!.containerKey),
    jre_key: cdktf.stringToTerraform(struct!.jreKey),
    managed_instance_id: cdktf.stringToTerraform(struct!.managedInstanceId),
  }
}


export function jmsTaskScheduleTaskDetailsJfrTaskRequestTargetsToHclTerraform(struct?: JmsTaskScheduleTaskDetailsJfrTaskRequestTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_installation_key: {
      value: cdktf.stringToHclTerraform(struct!.applicationInstallationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_key: {
      value: cdktf.stringToHclTerraform(struct!.applicationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_key: {
      value: cdktf.stringToHclTerraform(struct!.containerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jre_key: {
      value: cdktf.stringToHclTerraform(struct!.jreKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.managedInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTaskDetailsJfrTaskRequestTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JmsTaskScheduleTaskDetailsJfrTaskRequestTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationInstallationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationInstallationKey = this._applicationInstallationKey;
    }
    if (this._applicationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationKey = this._applicationKey;
    }
    if (this._containerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerKey = this._containerKey;
    }
    if (this._jreKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jreKey = this._jreKey;
    }
    if (this._managedInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedInstanceId = this._managedInstanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTaskDetailsJfrTaskRequestTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationInstallationKey = undefined;
      this._applicationKey = undefined;
      this._containerKey = undefined;
      this._jreKey = undefined;
      this._managedInstanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationInstallationKey = value.applicationInstallationKey;
      this._applicationKey = value.applicationKey;
      this._containerKey = value.containerKey;
      this._jreKey = value.jreKey;
      this._managedInstanceId = value.managedInstanceId;
    }
  }

  // application_installation_key - computed: true, optional: true, required: false
  private _applicationInstallationKey?: string; 
  public get applicationInstallationKey() {
    return this.getStringAttribute('application_installation_key');
  }
  public set applicationInstallationKey(value: string) {
    this._applicationInstallationKey = value;
  }
  public resetApplicationInstallationKey() {
    this._applicationInstallationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInstallationKeyInput() {
    return this._applicationInstallationKey;
  }

  // application_key - computed: true, optional: true, required: false
  private _applicationKey?: string; 
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }
  public set applicationKey(value: string) {
    this._applicationKey = value;
  }
  public resetApplicationKey() {
    this._applicationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyInput() {
    return this._applicationKey;
  }

  // container_key - computed: true, optional: true, required: false
  private _containerKey?: string; 
  public get containerKey() {
    return this.getStringAttribute('container_key');
  }
  public set containerKey(value: string) {
    this._containerKey = value;
  }
  public resetContainerKey() {
    this._containerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerKeyInput() {
    return this._containerKey;
  }

  // jre_key - computed: true, optional: true, required: false
  private _jreKey?: string; 
  public get jreKey() {
    return this.getStringAttribute('jre_key');
  }
  public set jreKey(value: string) {
    this._jreKey = value;
  }
  public resetJreKey() {
    this._jreKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jreKeyInput() {
    return this._jreKey;
  }

  // managed_instance_id - computed: true, optional: true, required: false
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  public resetManagedInstanceId() {
    this._managedInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }
}

export class JmsTaskScheduleTaskDetailsJfrTaskRequestTargetsList extends cdktf.ComplexList {
  public internalValue? : JmsTaskScheduleTaskDetailsJfrTaskRequestTargets[] | cdktf.IResolvable

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
  public get(index: number): JmsTaskScheduleTaskDetailsJfrTaskRequestTargetsOutputReference {
    return new JmsTaskScheduleTaskDetailsJfrTaskRequestTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JmsTaskScheduleTaskDetailsJfrTaskRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#jfc_profile_name JmsTaskSchedule#jfc_profile_name}
  */
  readonly jfcProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#jfc_v1 JmsTaskSchedule#jfc_v1}
  */
  readonly jfcV1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#jfc_v2 JmsTaskSchedule#jfc_v2}
  */
  readonly jfcV2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#recording_duration_in_minutes JmsTaskSchedule#recording_duration_in_minutes}
  */
  readonly recordingDurationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#recording_size_in_mb JmsTaskSchedule#recording_size_in_mb}
  */
  readonly recordingSizeInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#waiting_period_in_minutes JmsTaskSchedule#waiting_period_in_minutes}
  */
  readonly waitingPeriodInMinutes?: number;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#targets JmsTaskSchedule#targets}
  */
  readonly targets?: JmsTaskScheduleTaskDetailsJfrTaskRequestTargets[] | cdktf.IResolvable;
}

export function jmsTaskScheduleTaskDetailsJfrTaskRequestToTerraform(struct?: JmsTaskScheduleTaskDetailsJfrTaskRequestOutputReference | JmsTaskScheduleTaskDetailsJfrTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jfc_profile_name: cdktf.stringToTerraform(struct!.jfcProfileName),
    jfc_v1: cdktf.stringToTerraform(struct!.jfcV1),
    jfc_v2: cdktf.stringToTerraform(struct!.jfcV2),
    recording_duration_in_minutes: cdktf.numberToTerraform(struct!.recordingDurationInMinutes),
    recording_size_in_mb: cdktf.numberToTerraform(struct!.recordingSizeInMb),
    waiting_period_in_minutes: cdktf.numberToTerraform(struct!.waitingPeriodInMinutes),
    targets: cdktf.listMapper(jmsTaskScheduleTaskDetailsJfrTaskRequestTargetsToTerraform, true)(struct!.targets),
  }
}


export function jmsTaskScheduleTaskDetailsJfrTaskRequestToHclTerraform(struct?: JmsTaskScheduleTaskDetailsJfrTaskRequestOutputReference | JmsTaskScheduleTaskDetailsJfrTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jfc_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.jfcProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jfc_v1: {
      value: cdktf.stringToHclTerraform(struct!.jfcV1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jfc_v2: {
      value: cdktf.stringToHclTerraform(struct!.jfcV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recording_duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.recordingDurationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recording_size_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.recordingSizeInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    waiting_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.waitingPeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    targets: {
      value: cdktf.listMapperHcl(jmsTaskScheduleTaskDetailsJfrTaskRequestTargetsToHclTerraform, true)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "JmsTaskScheduleTaskDetailsJfrTaskRequestTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTaskDetailsJfrTaskRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsTaskScheduleTaskDetailsJfrTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jfcProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.jfcProfileName = this._jfcProfileName;
    }
    if (this._jfcV1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.jfcV1 = this._jfcV1;
    }
    if (this._jfcV2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.jfcV2 = this._jfcV2;
    }
    if (this._recordingDurationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingDurationInMinutes = this._recordingDurationInMinutes;
    }
    if (this._recordingSizeInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingSizeInMb = this._recordingSizeInMb;
    }
    if (this._waitingPeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitingPeriodInMinutes = this._waitingPeriodInMinutes;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTaskDetailsJfrTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jfcProfileName = undefined;
      this._jfcV1 = undefined;
      this._jfcV2 = undefined;
      this._recordingDurationInMinutes = undefined;
      this._recordingSizeInMb = undefined;
      this._waitingPeriodInMinutes = undefined;
      this._targets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jfcProfileName = value.jfcProfileName;
      this._jfcV1 = value.jfcV1;
      this._jfcV2 = value.jfcV2;
      this._recordingDurationInMinutes = value.recordingDurationInMinutes;
      this._recordingSizeInMb = value.recordingSizeInMb;
      this._waitingPeriodInMinutes = value.waitingPeriodInMinutes;
      this._targets.internalValue = value.targets;
    }
  }

  // jfc_profile_name - computed: true, optional: true, required: false
  private _jfcProfileName?: string; 
  public get jfcProfileName() {
    return this.getStringAttribute('jfc_profile_name');
  }
  public set jfcProfileName(value: string) {
    this._jfcProfileName = value;
  }
  public resetJfcProfileName() {
    this._jfcProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jfcProfileNameInput() {
    return this._jfcProfileName;
  }

  // jfc_v1 - computed: true, optional: true, required: false
  private _jfcV1?: string; 
  public get jfcV1() {
    return this.getStringAttribute('jfc_v1');
  }
  public set jfcV1(value: string) {
    this._jfcV1 = value;
  }
  public resetJfcV1() {
    this._jfcV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jfcV1Input() {
    return this._jfcV1;
  }

  // jfc_v2 - computed: true, optional: true, required: false
  private _jfcV2?: string; 
  public get jfcV2() {
    return this.getStringAttribute('jfc_v2');
  }
  public set jfcV2(value: string) {
    this._jfcV2 = value;
  }
  public resetJfcV2() {
    this._jfcV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jfcV2Input() {
    return this._jfcV2;
  }

  // recording_duration_in_minutes - computed: true, optional: true, required: false
  private _recordingDurationInMinutes?: number; 
  public get recordingDurationInMinutes() {
    return this.getNumberAttribute('recording_duration_in_minutes');
  }
  public set recordingDurationInMinutes(value: number) {
    this._recordingDurationInMinutes = value;
  }
  public resetRecordingDurationInMinutes() {
    this._recordingDurationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingDurationInMinutesInput() {
    return this._recordingDurationInMinutes;
  }

  // recording_size_in_mb - computed: true, optional: true, required: false
  private _recordingSizeInMb?: number; 
  public get recordingSizeInMb() {
    return this.getNumberAttribute('recording_size_in_mb');
  }
  public set recordingSizeInMb(value: number) {
    this._recordingSizeInMb = value;
  }
  public resetRecordingSizeInMb() {
    this._recordingSizeInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingSizeInMbInput() {
    return this._recordingSizeInMb;
  }

  // waiting_period_in_minutes - computed: true, optional: true, required: false
  private _waitingPeriodInMinutes?: number; 
  public get waitingPeriodInMinutes() {
    return this.getNumberAttribute('waiting_period_in_minutes');
  }
  public set waitingPeriodInMinutes(value: number) {
    this._waitingPeriodInMinutes = value;
  }
  public resetWaitingPeriodInMinutes() {
    this._waitingPeriodInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitingPeriodInMinutesInput() {
    return this._waitingPeriodInMinutes;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new JmsTaskScheduleTaskDetailsJfrTaskRequestTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: JmsTaskScheduleTaskDetailsJfrTaskRequestTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}
export interface JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#application_installation_key JmsTaskSchedule#application_installation_key}
  */
  readonly applicationInstallationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#application_key JmsTaskSchedule#application_key}
  */
  readonly applicationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#container_key JmsTaskSchedule#container_key}
  */
  readonly containerKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#jre_key JmsTaskSchedule#jre_key}
  */
  readonly jreKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#managed_instance_id JmsTaskSchedule#managed_instance_id}
  */
  readonly managedInstanceId?: string;
}

export function jmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargetsToTerraform(struct?: JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_installation_key: cdktf.stringToTerraform(struct!.applicationInstallationKey),
    application_key: cdktf.stringToTerraform(struct!.applicationKey),
    container_key: cdktf.stringToTerraform(struct!.containerKey),
    jre_key: cdktf.stringToTerraform(struct!.jreKey),
    managed_instance_id: cdktf.stringToTerraform(struct!.managedInstanceId),
  }
}


export function jmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargetsToHclTerraform(struct?: JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_installation_key: {
      value: cdktf.stringToHclTerraform(struct!.applicationInstallationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_key: {
      value: cdktf.stringToHclTerraform(struct!.applicationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_key: {
      value: cdktf.stringToHclTerraform(struct!.containerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jre_key: {
      value: cdktf.stringToHclTerraform(struct!.jreKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.managedInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationInstallationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationInstallationKey = this._applicationInstallationKey;
    }
    if (this._applicationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationKey = this._applicationKey;
    }
    if (this._containerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerKey = this._containerKey;
    }
    if (this._jreKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jreKey = this._jreKey;
    }
    if (this._managedInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedInstanceId = this._managedInstanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationInstallationKey = undefined;
      this._applicationKey = undefined;
      this._containerKey = undefined;
      this._jreKey = undefined;
      this._managedInstanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationInstallationKey = value.applicationInstallationKey;
      this._applicationKey = value.applicationKey;
      this._containerKey = value.containerKey;
      this._jreKey = value.jreKey;
      this._managedInstanceId = value.managedInstanceId;
    }
  }

  // application_installation_key - computed: true, optional: true, required: false
  private _applicationInstallationKey?: string; 
  public get applicationInstallationKey() {
    return this.getStringAttribute('application_installation_key');
  }
  public set applicationInstallationKey(value: string) {
    this._applicationInstallationKey = value;
  }
  public resetApplicationInstallationKey() {
    this._applicationInstallationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInstallationKeyInput() {
    return this._applicationInstallationKey;
  }

  // application_key - computed: true, optional: true, required: false
  private _applicationKey?: string; 
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }
  public set applicationKey(value: string) {
    this._applicationKey = value;
  }
  public resetApplicationKey() {
    this._applicationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyInput() {
    return this._applicationKey;
  }

  // container_key - computed: true, optional: true, required: false
  private _containerKey?: string; 
  public get containerKey() {
    return this.getStringAttribute('container_key');
  }
  public set containerKey(value: string) {
    this._containerKey = value;
  }
  public resetContainerKey() {
    this._containerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerKeyInput() {
    return this._containerKey;
  }

  // jre_key - computed: true, optional: true, required: false
  private _jreKey?: string; 
  public get jreKey() {
    return this.getStringAttribute('jre_key');
  }
  public set jreKey(value: string) {
    this._jreKey = value;
  }
  public resetJreKey() {
    this._jreKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jreKeyInput() {
    return this._jreKey;
  }

  // managed_instance_id - computed: true, optional: true, required: false
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  public resetManagedInstanceId() {
    this._managedInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }
}

export class JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargetsList extends cdktf.ComplexList {
  public internalValue? : JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargets[] | cdktf.IResolvable

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
  public get(index: number): JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargetsOutputReference {
    return new JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#recording_duration_in_minutes JmsTaskSchedule#recording_duration_in_minutes}
  */
  readonly recordingDurationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#waiting_period_in_minutes JmsTaskSchedule#waiting_period_in_minutes}
  */
  readonly waitingPeriodInMinutes?: number;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#targets JmsTaskSchedule#targets}
  */
  readonly targets?: JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargets[] | cdktf.IResolvable;
}

export function jmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestToTerraform(struct?: JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestOutputReference | JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recording_duration_in_minutes: cdktf.numberToTerraform(struct!.recordingDurationInMinutes),
    waiting_period_in_minutes: cdktf.numberToTerraform(struct!.waitingPeriodInMinutes),
    targets: cdktf.listMapper(jmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargetsToTerraform, true)(struct!.targets),
  }
}


export function jmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestToHclTerraform(struct?: JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestOutputReference | JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recording_duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.recordingDurationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    waiting_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.waitingPeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    targets: {
      value: cdktf.listMapperHcl(jmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargetsToHclTerraform, true)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordingDurationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingDurationInMinutes = this._recordingDurationInMinutes;
    }
    if (this._waitingPeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitingPeriodInMinutes = this._waitingPeriodInMinutes;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordingDurationInMinutes = undefined;
      this._waitingPeriodInMinutes = undefined;
      this._targets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordingDurationInMinutes = value.recordingDurationInMinutes;
      this._waitingPeriodInMinutes = value.waitingPeriodInMinutes;
      this._targets.internalValue = value.targets;
    }
  }

  // recording_duration_in_minutes - computed: true, optional: true, required: false
  private _recordingDurationInMinutes?: number; 
  public get recordingDurationInMinutes() {
    return this.getNumberAttribute('recording_duration_in_minutes');
  }
  public set recordingDurationInMinutes(value: number) {
    this._recordingDurationInMinutes = value;
  }
  public resetRecordingDurationInMinutes() {
    this._recordingDurationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingDurationInMinutesInput() {
    return this._recordingDurationInMinutes;
  }

  // waiting_period_in_minutes - computed: true, optional: true, required: false
  private _waitingPeriodInMinutes?: number; 
  public get waitingPeriodInMinutes() {
    return this.getNumberAttribute('waiting_period_in_minutes');
  }
  public set waitingPeriodInMinutes(value: number) {
    this._waitingPeriodInMinutes = value;
  }
  public resetWaitingPeriodInMinutes() {
    this._waitingPeriodInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitingPeriodInMinutesInput() {
    return this._waitingPeriodInMinutes;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}
export interface JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#installation_key JmsTaskSchedule#installation_key}
  */
  readonly installationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#managed_instance_id JmsTaskSchedule#managed_instance_id}
  */
  readonly managedInstanceId?: string;
}

export function jmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesToTerraform(struct?: JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    installation_key: cdktf.stringToTerraform(struct!.installationKey),
    managed_instance_id: cdktf.stringToTerraform(struct!.managedInstanceId),
  }
}


export function jmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesToHclTerraform(struct?: JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    installation_key: {
      value: cdktf.stringToHclTerraform(struct!.installationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.managedInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._installationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.installationKey = this._installationKey;
    }
    if (this._managedInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedInstanceId = this._managedInstanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._installationKey = undefined;
      this._managedInstanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._installationKey = value.installationKey;
      this._managedInstanceId = value.managedInstanceId;
    }
  }

  // installation_key - computed: true, optional: true, required: false
  private _installationKey?: string; 
  public get installationKey() {
    return this.getStringAttribute('installation_key');
  }
  public set installationKey(value: string) {
    this._installationKey = value;
  }
  public resetInstallationKey() {
    this._installationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationKeyInput() {
    return this._installationKey;
  }

  // managed_instance_id - computed: true, optional: true, required: false
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  public resetManagedInstanceId() {
    this._managedInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }
}

export class JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesList extends cdktf.ComplexList {
  public internalValue? : JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites[] | cdktf.IResolvable

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
  public get(index: number): JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesOutputReference {
    return new JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequest {
  /**
  * installation_sites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#installation_sites JmsTaskSchedule#installation_sites}
  */
  readonly installationSites?: JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites[] | cdktf.IResolvable;
}

export function jmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestToTerraform(struct?: JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestOutputReference | JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    installation_sites: cdktf.listMapper(jmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesToTerraform, true)(struct!.installationSites),
  }
}


export function jmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestToHclTerraform(struct?: JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestOutputReference | JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    installation_sites: {
      value: cdktf.listMapperHcl(jmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesToHclTerraform, true)(struct!.installationSites),
      isBlock: true,
      type: "list",
      storageClassType: "JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._installationSites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.installationSites = this._installationSites?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._installationSites.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._installationSites.internalValue = value.installationSites;
    }
  }

  // installation_sites - computed: false, optional: true, required: false
  private _installationSites = new JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesList(this, "installation_sites", false);
  public get installationSites() {
    return this._installationSites;
  }
  public putInstallationSites(value: JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites[] | cdktf.IResolvable) {
    this._installationSites.internalValue = value;
  }
  public resetInstallationSites() {
    this._installationSites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationSitesInput() {
    return this._installationSites.internalValue;
  }
}
export interface JmsTaskScheduleTaskDetailsScanJavaServerTaskRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#managed_instance_ids JmsTaskSchedule#managed_instance_ids}
  */
  readonly managedInstanceIds?: string[];
}

export function jmsTaskScheduleTaskDetailsScanJavaServerTaskRequestToTerraform(struct?: JmsTaskScheduleTaskDetailsScanJavaServerTaskRequestOutputReference | JmsTaskScheduleTaskDetailsScanJavaServerTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedInstanceIds),
  }
}


export function jmsTaskScheduleTaskDetailsScanJavaServerTaskRequestToHclTerraform(struct?: JmsTaskScheduleTaskDetailsScanJavaServerTaskRequestOutputReference | JmsTaskScheduleTaskDetailsScanJavaServerTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_instance_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedInstanceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTaskDetailsScanJavaServerTaskRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsTaskScheduleTaskDetailsScanJavaServerTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedInstanceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedInstanceIds = this._managedInstanceIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTaskDetailsScanJavaServerTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedInstanceIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedInstanceIds = value.managedInstanceIds;
    }
  }

  // managed_instance_ids - computed: true, optional: true, required: false
  private _managedInstanceIds?: string[]; 
  public get managedInstanceIds() {
    return this.getListAttribute('managed_instance_ids');
  }
  public set managedInstanceIds(value: string[]) {
    this._managedInstanceIds = value;
  }
  public resetManagedInstanceIds() {
    this._managedInstanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdsInput() {
    return this._managedInstanceIds;
  }
}
export interface JmsTaskScheduleTaskDetailsScanLibraryTaskRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#dynamic_scan_duration_in_minutes JmsTaskSchedule#dynamic_scan_duration_in_minutes}
  */
  readonly dynamicScanDurationInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#is_dynamic_scan JmsTaskSchedule#is_dynamic_scan}
  */
  readonly isDynamicScan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#managed_instance_ids JmsTaskSchedule#managed_instance_ids}
  */
  readonly managedInstanceIds?: string[];
}

export function jmsTaskScheduleTaskDetailsScanLibraryTaskRequestToTerraform(struct?: JmsTaskScheduleTaskDetailsScanLibraryTaskRequestOutputReference | JmsTaskScheduleTaskDetailsScanLibraryTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_scan_duration_in_minutes: cdktf.numberToTerraform(struct!.dynamicScanDurationInMinutes),
    is_dynamic_scan: cdktf.booleanToTerraform(struct!.isDynamicScan),
    managed_instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedInstanceIds),
  }
}


export function jmsTaskScheduleTaskDetailsScanLibraryTaskRequestToHclTerraform(struct?: JmsTaskScheduleTaskDetailsScanLibraryTaskRequestOutputReference | JmsTaskScheduleTaskDetailsScanLibraryTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic_scan_duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.dynamicScanDurationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_dynamic_scan: {
      value: cdktf.booleanToHclTerraform(struct!.isDynamicScan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    managed_instance_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedInstanceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTaskDetailsScanLibraryTaskRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsTaskScheduleTaskDetailsScanLibraryTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicScanDurationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicScanDurationInMinutes = this._dynamicScanDurationInMinutes;
    }
    if (this._isDynamicScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDynamicScan = this._isDynamicScan;
    }
    if (this._managedInstanceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedInstanceIds = this._managedInstanceIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTaskDetailsScanLibraryTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dynamicScanDurationInMinutes = undefined;
      this._isDynamicScan = undefined;
      this._managedInstanceIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dynamicScanDurationInMinutes = value.dynamicScanDurationInMinutes;
      this._isDynamicScan = value.isDynamicScan;
      this._managedInstanceIds = value.managedInstanceIds;
    }
  }

  // dynamic_scan_duration_in_minutes - computed: true, optional: true, required: false
  private _dynamicScanDurationInMinutes?: number; 
  public get dynamicScanDurationInMinutes() {
    return this.getNumberAttribute('dynamic_scan_duration_in_minutes');
  }
  public set dynamicScanDurationInMinutes(value: number) {
    this._dynamicScanDurationInMinutes = value;
  }
  public resetDynamicScanDurationInMinutes() {
    this._dynamicScanDurationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicScanDurationInMinutesInput() {
    return this._dynamicScanDurationInMinutes;
  }

  // is_dynamic_scan - computed: true, optional: true, required: false
  private _isDynamicScan?: boolean | cdktf.IResolvable; 
  public get isDynamicScan() {
    return this.getBooleanAttribute('is_dynamic_scan');
  }
  public set isDynamicScan(value: boolean | cdktf.IResolvable) {
    this._isDynamicScan = value;
  }
  public resetIsDynamicScan() {
    this._isDynamicScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDynamicScanInput() {
    return this._isDynamicScan;
  }

  // managed_instance_ids - computed: true, optional: true, required: false
  private _managedInstanceIds?: string[]; 
  public get managedInstanceIds() {
    return this.getListAttribute('managed_instance_ids');
  }
  public set managedInstanceIds(value: string[]) {
    this._managedInstanceIds = value;
  }
  public resetManagedInstanceIds() {
    this._managedInstanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdsInput() {
    return this._managedInstanceIds;
  }
}
export interface JmsTaskScheduleTaskDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#task_type JmsTaskSchedule#task_type}
  */
  readonly taskType: string;
  /**
  * add_installation_site_task_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#add_installation_site_task_request JmsTaskSchedule#add_installation_site_task_request}
  */
  readonly addInstallationSiteTaskRequest?: JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequest;
  /**
  * crypto_task_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#crypto_task_request JmsTaskSchedule#crypto_task_request}
  */
  readonly cryptoTaskRequest?: JmsTaskScheduleTaskDetailsCryptoTaskRequest;
  /**
  * deployed_application_migration_task_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#deployed_application_migration_task_request JmsTaskSchedule#deployed_application_migration_task_request}
  */
  readonly deployedApplicationMigrationTaskRequest?: JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequest;
  /**
  * java_migration_task_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#java_migration_task_request JmsTaskSchedule#java_migration_task_request}
  */
  readonly javaMigrationTaskRequest?: JmsTaskScheduleTaskDetailsJavaMigrationTaskRequest;
  /**
  * jfr_task_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#jfr_task_request JmsTaskSchedule#jfr_task_request}
  */
  readonly jfrTaskRequest?: JmsTaskScheduleTaskDetailsJfrTaskRequest;
  /**
  * performance_tuning_task_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#performance_tuning_task_request JmsTaskSchedule#performance_tuning_task_request}
  */
  readonly performanceTuningTaskRequest?: JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequest;
  /**
  * remove_installation_site_task_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#remove_installation_site_task_request JmsTaskSchedule#remove_installation_site_task_request}
  */
  readonly removeInstallationSiteTaskRequest?: JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequest;
  /**
  * scan_java_server_task_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#scan_java_server_task_request JmsTaskSchedule#scan_java_server_task_request}
  */
  readonly scanJavaServerTaskRequest?: JmsTaskScheduleTaskDetailsScanJavaServerTaskRequest;
  /**
  * scan_library_task_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#scan_library_task_request JmsTaskSchedule#scan_library_task_request}
  */
  readonly scanLibraryTaskRequest?: JmsTaskScheduleTaskDetailsScanLibraryTaskRequest;
}

export function jmsTaskScheduleTaskDetailsToTerraform(struct?: JmsTaskScheduleTaskDetailsOutputReference | JmsTaskScheduleTaskDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    task_type: cdktf.stringToTerraform(struct!.taskType),
    add_installation_site_task_request: jmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestToTerraform(struct!.addInstallationSiteTaskRequest),
    crypto_task_request: jmsTaskScheduleTaskDetailsCryptoTaskRequestToTerraform(struct!.cryptoTaskRequest),
    deployed_application_migration_task_request: jmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestToTerraform(struct!.deployedApplicationMigrationTaskRequest),
    java_migration_task_request: jmsTaskScheduleTaskDetailsJavaMigrationTaskRequestToTerraform(struct!.javaMigrationTaskRequest),
    jfr_task_request: jmsTaskScheduleTaskDetailsJfrTaskRequestToTerraform(struct!.jfrTaskRequest),
    performance_tuning_task_request: jmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestToTerraform(struct!.performanceTuningTaskRequest),
    remove_installation_site_task_request: jmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestToTerraform(struct!.removeInstallationSiteTaskRequest),
    scan_java_server_task_request: jmsTaskScheduleTaskDetailsScanJavaServerTaskRequestToTerraform(struct!.scanJavaServerTaskRequest),
    scan_library_task_request: jmsTaskScheduleTaskDetailsScanLibraryTaskRequestToTerraform(struct!.scanLibraryTaskRequest),
  }
}


export function jmsTaskScheduleTaskDetailsToHclTerraform(struct?: JmsTaskScheduleTaskDetailsOutputReference | JmsTaskScheduleTaskDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_installation_site_task_request: {
      value: jmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestToHclTerraform(struct!.addInstallationSiteTaskRequest),
      isBlock: true,
      type: "list",
      storageClassType: "JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestList",
    },
    crypto_task_request: {
      value: jmsTaskScheduleTaskDetailsCryptoTaskRequestToHclTerraform(struct!.cryptoTaskRequest),
      isBlock: true,
      type: "list",
      storageClassType: "JmsTaskScheduleTaskDetailsCryptoTaskRequestList",
    },
    deployed_application_migration_task_request: {
      value: jmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestToHclTerraform(struct!.deployedApplicationMigrationTaskRequest),
      isBlock: true,
      type: "list",
      storageClassType: "JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestList",
    },
    java_migration_task_request: {
      value: jmsTaskScheduleTaskDetailsJavaMigrationTaskRequestToHclTerraform(struct!.javaMigrationTaskRequest),
      isBlock: true,
      type: "list",
      storageClassType: "JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestList",
    },
    jfr_task_request: {
      value: jmsTaskScheduleTaskDetailsJfrTaskRequestToHclTerraform(struct!.jfrTaskRequest),
      isBlock: true,
      type: "list",
      storageClassType: "JmsTaskScheduleTaskDetailsJfrTaskRequestList",
    },
    performance_tuning_task_request: {
      value: jmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestToHclTerraform(struct!.performanceTuningTaskRequest),
      isBlock: true,
      type: "list",
      storageClassType: "JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestList",
    },
    remove_installation_site_task_request: {
      value: jmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestToHclTerraform(struct!.removeInstallationSiteTaskRequest),
      isBlock: true,
      type: "list",
      storageClassType: "JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestList",
    },
    scan_java_server_task_request: {
      value: jmsTaskScheduleTaskDetailsScanJavaServerTaskRequestToHclTerraform(struct!.scanJavaServerTaskRequest),
      isBlock: true,
      type: "list",
      storageClassType: "JmsTaskScheduleTaskDetailsScanJavaServerTaskRequestList",
    },
    scan_library_task_request: {
      value: jmsTaskScheduleTaskDetailsScanLibraryTaskRequestToHclTerraform(struct!.scanLibraryTaskRequest),
      isBlock: true,
      type: "list",
      storageClassType: "JmsTaskScheduleTaskDetailsScanLibraryTaskRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTaskDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JmsTaskScheduleTaskDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._addInstallationSiteTaskRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addInstallationSiteTaskRequest = this._addInstallationSiteTaskRequest?.internalValue;
    }
    if (this._cryptoTaskRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoTaskRequest = this._cryptoTaskRequest?.internalValue;
    }
    if (this._deployedApplicationMigrationTaskRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployedApplicationMigrationTaskRequest = this._deployedApplicationMigrationTaskRequest?.internalValue;
    }
    if (this._javaMigrationTaskRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaMigrationTaskRequest = this._javaMigrationTaskRequest?.internalValue;
    }
    if (this._jfrTaskRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jfrTaskRequest = this._jfrTaskRequest?.internalValue;
    }
    if (this._performanceTuningTaskRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceTuningTaskRequest = this._performanceTuningTaskRequest?.internalValue;
    }
    if (this._removeInstallationSiteTaskRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeInstallationSiteTaskRequest = this._removeInstallationSiteTaskRequest?.internalValue;
    }
    if (this._scanJavaServerTaskRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanJavaServerTaskRequest = this._scanJavaServerTaskRequest?.internalValue;
    }
    if (this._scanLibraryTaskRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanLibraryTaskRequest = this._scanLibraryTaskRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTaskDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._taskType = undefined;
      this._addInstallationSiteTaskRequest.internalValue = undefined;
      this._cryptoTaskRequest.internalValue = undefined;
      this._deployedApplicationMigrationTaskRequest.internalValue = undefined;
      this._javaMigrationTaskRequest.internalValue = undefined;
      this._jfrTaskRequest.internalValue = undefined;
      this._performanceTuningTaskRequest.internalValue = undefined;
      this._removeInstallationSiteTaskRequest.internalValue = undefined;
      this._scanJavaServerTaskRequest.internalValue = undefined;
      this._scanLibraryTaskRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._taskType = value.taskType;
      this._addInstallationSiteTaskRequest.internalValue = value.addInstallationSiteTaskRequest;
      this._cryptoTaskRequest.internalValue = value.cryptoTaskRequest;
      this._deployedApplicationMigrationTaskRequest.internalValue = value.deployedApplicationMigrationTaskRequest;
      this._javaMigrationTaskRequest.internalValue = value.javaMigrationTaskRequest;
      this._jfrTaskRequest.internalValue = value.jfrTaskRequest;
      this._performanceTuningTaskRequest.internalValue = value.performanceTuningTaskRequest;
      this._removeInstallationSiteTaskRequest.internalValue = value.removeInstallationSiteTaskRequest;
      this._scanJavaServerTaskRequest.internalValue = value.scanJavaServerTaskRequest;
      this._scanLibraryTaskRequest.internalValue = value.scanLibraryTaskRequest;
    }
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // add_installation_site_task_request - computed: false, optional: true, required: false
  private _addInstallationSiteTaskRequest = new JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestOutputReference(this, "add_installation_site_task_request");
  public get addInstallationSiteTaskRequest() {
    return this._addInstallationSiteTaskRequest;
  }
  public putAddInstallationSiteTaskRequest(value: JmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequest) {
    this._addInstallationSiteTaskRequest.internalValue = value;
  }
  public resetAddInstallationSiteTaskRequest() {
    this._addInstallationSiteTaskRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInstallationSiteTaskRequestInput() {
    return this._addInstallationSiteTaskRequest.internalValue;
  }

  // crypto_task_request - computed: false, optional: true, required: false
  private _cryptoTaskRequest = new JmsTaskScheduleTaskDetailsCryptoTaskRequestOutputReference(this, "crypto_task_request");
  public get cryptoTaskRequest() {
    return this._cryptoTaskRequest;
  }
  public putCryptoTaskRequest(value: JmsTaskScheduleTaskDetailsCryptoTaskRequest) {
    this._cryptoTaskRequest.internalValue = value;
  }
  public resetCryptoTaskRequest() {
    this._cryptoTaskRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoTaskRequestInput() {
    return this._cryptoTaskRequest.internalValue;
  }

  // deployed_application_migration_task_request - computed: false, optional: true, required: false
  private _deployedApplicationMigrationTaskRequest = new JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestOutputReference(this, "deployed_application_migration_task_request");
  public get deployedApplicationMigrationTaskRequest() {
    return this._deployedApplicationMigrationTaskRequest;
  }
  public putDeployedApplicationMigrationTaskRequest(value: JmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequest) {
    this._deployedApplicationMigrationTaskRequest.internalValue = value;
  }
  public resetDeployedApplicationMigrationTaskRequest() {
    this._deployedApplicationMigrationTaskRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployedApplicationMigrationTaskRequestInput() {
    return this._deployedApplicationMigrationTaskRequest.internalValue;
  }

  // java_migration_task_request - computed: false, optional: true, required: false
  private _javaMigrationTaskRequest = new JmsTaskScheduleTaskDetailsJavaMigrationTaskRequestOutputReference(this, "java_migration_task_request");
  public get javaMigrationTaskRequest() {
    return this._javaMigrationTaskRequest;
  }
  public putJavaMigrationTaskRequest(value: JmsTaskScheduleTaskDetailsJavaMigrationTaskRequest) {
    this._javaMigrationTaskRequest.internalValue = value;
  }
  public resetJavaMigrationTaskRequest() {
    this._javaMigrationTaskRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaMigrationTaskRequestInput() {
    return this._javaMigrationTaskRequest.internalValue;
  }

  // jfr_task_request - computed: false, optional: true, required: false
  private _jfrTaskRequest = new JmsTaskScheduleTaskDetailsJfrTaskRequestOutputReference(this, "jfr_task_request");
  public get jfrTaskRequest() {
    return this._jfrTaskRequest;
  }
  public putJfrTaskRequest(value: JmsTaskScheduleTaskDetailsJfrTaskRequest) {
    this._jfrTaskRequest.internalValue = value;
  }
  public resetJfrTaskRequest() {
    this._jfrTaskRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jfrTaskRequestInput() {
    return this._jfrTaskRequest.internalValue;
  }

  // performance_tuning_task_request - computed: false, optional: true, required: false
  private _performanceTuningTaskRequest = new JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestOutputReference(this, "performance_tuning_task_request");
  public get performanceTuningTaskRequest() {
    return this._performanceTuningTaskRequest;
  }
  public putPerformanceTuningTaskRequest(value: JmsTaskScheduleTaskDetailsPerformanceTuningTaskRequest) {
    this._performanceTuningTaskRequest.internalValue = value;
  }
  public resetPerformanceTuningTaskRequest() {
    this._performanceTuningTaskRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceTuningTaskRequestInput() {
    return this._performanceTuningTaskRequest.internalValue;
  }

  // remove_installation_site_task_request - computed: false, optional: true, required: false
  private _removeInstallationSiteTaskRequest = new JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestOutputReference(this, "remove_installation_site_task_request");
  public get removeInstallationSiteTaskRequest() {
    return this._removeInstallationSiteTaskRequest;
  }
  public putRemoveInstallationSiteTaskRequest(value: JmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequest) {
    this._removeInstallationSiteTaskRequest.internalValue = value;
  }
  public resetRemoveInstallationSiteTaskRequest() {
    this._removeInstallationSiteTaskRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInstallationSiteTaskRequestInput() {
    return this._removeInstallationSiteTaskRequest.internalValue;
  }

  // scan_java_server_task_request - computed: false, optional: true, required: false
  private _scanJavaServerTaskRequest = new JmsTaskScheduleTaskDetailsScanJavaServerTaskRequestOutputReference(this, "scan_java_server_task_request");
  public get scanJavaServerTaskRequest() {
    return this._scanJavaServerTaskRequest;
  }
  public putScanJavaServerTaskRequest(value: JmsTaskScheduleTaskDetailsScanJavaServerTaskRequest) {
    this._scanJavaServerTaskRequest.internalValue = value;
  }
  public resetScanJavaServerTaskRequest() {
    this._scanJavaServerTaskRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanJavaServerTaskRequestInput() {
    return this._scanJavaServerTaskRequest.internalValue;
  }

  // scan_library_task_request - computed: false, optional: true, required: false
  private _scanLibraryTaskRequest = new JmsTaskScheduleTaskDetailsScanLibraryTaskRequestOutputReference(this, "scan_library_task_request");
  public get scanLibraryTaskRequest() {
    return this._scanLibraryTaskRequest;
  }
  public putScanLibraryTaskRequest(value: JmsTaskScheduleTaskDetailsScanLibraryTaskRequest) {
    this._scanLibraryTaskRequest.internalValue = value;
  }
  public resetScanLibraryTaskRequest() {
    this._scanLibraryTaskRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanLibraryTaskRequestInput() {
    return this._scanLibraryTaskRequest.internalValue;
  }
}
export interface JmsTaskScheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#create JmsTaskSchedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#delete JmsTaskSchedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#update JmsTaskSchedule#update}
  */
  readonly update?: string;
}

export function jmsTaskScheduleTimeoutsToTerraform(struct?: JmsTaskScheduleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function jmsTaskScheduleTimeoutsToHclTerraform(struct?: JmsTaskScheduleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JmsTaskScheduleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JmsTaskScheduleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JmsTaskScheduleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule oci_jms_task_schedule}
*/
export class JmsTaskSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_task_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JmsTaskSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JmsTaskSchedule to import
  * @param importFromId The id of the existing JmsTaskSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JmsTaskSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_task_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/jms_task_schedule oci_jms_task_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JmsTaskScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: JmsTaskScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_task_schedule',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._executionRecurrences = config.executionRecurrences;
    this._fleetId = config.fleetId;
    this._id = config.id;
    this._taskDetails.internalValue = config.taskDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // execution_recurrences - computed: false, optional: false, required: true
  private _executionRecurrences?: string; 
  public get executionRecurrences() {
    return this.getStringAttribute('execution_recurrences');
  }
  public set executionRecurrences(value: string) {
    this._executionRecurrences = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRecurrencesInput() {
    return this._executionRecurrences;
  }

  // fleet_id - computed: false, optional: false, required: true
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_run - computed: true, optional: false, required: false
  public get timeLastRun() {
    return this.getStringAttribute('time_last_run');
  }

  // time_last_updated - computed: true, optional: false, required: false
  public get timeLastUpdated() {
    return this.getStringAttribute('time_last_updated');
  }

  // time_next_run - computed: true, optional: false, required: false
  public get timeNextRun() {
    return this.getStringAttribute('time_next_run');
  }

  // task_details - computed: false, optional: false, required: true
  private _taskDetails = new JmsTaskScheduleTaskDetailsOutputReference(this, "task_details");
  public get taskDetails() {
    return this._taskDetails;
  }
  public putTaskDetails(value: JmsTaskScheduleTaskDetails) {
    this._taskDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDetailsInput() {
    return this._taskDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new JmsTaskScheduleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: JmsTaskScheduleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      execution_recurrences: cdktf.stringToTerraform(this._executionRecurrences),
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      id: cdktf.stringToTerraform(this._id),
      task_details: jmsTaskScheduleTaskDetailsToTerraform(this._taskDetails.internalValue),
      timeouts: jmsTaskScheduleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      execution_recurrences: {
        value: cdktf.stringToHclTerraform(this._executionRecurrences),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet_id: {
        value: cdktf.stringToHclTerraform(this._fleetId),
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
      task_details: {
        value: jmsTaskScheduleTaskDetailsToHclTerraform(this._taskDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JmsTaskScheduleTaskDetailsList",
      },
      timeouts: {
        value: jmsTaskScheduleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "JmsTaskScheduleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
