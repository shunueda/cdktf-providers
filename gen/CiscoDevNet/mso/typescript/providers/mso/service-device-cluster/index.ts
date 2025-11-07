// https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceDeviceClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#description ServiceDeviceCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#device_mode ServiceDeviceCluster#device_mode}
  */
  readonly deviceMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#device_type ServiceDeviceCluster#device_type}
  */
  readonly deviceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#id ServiceDeviceCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#name ServiceDeviceCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#template_id ServiceDeviceCluster#template_id}
  */
  readonly templateId: string;
  /**
  * interface_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#interface_properties ServiceDeviceCluster#interface_properties}
  */
  readonly interfaceProperties: ServiceDeviceClusterInterfaceProperties[] | cdktf.IResolvable;
}
export interface ServiceDeviceClusterInterfaceProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#anycast ServiceDeviceCluster#anycast}
  */
  readonly anycast?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#bd_uuid ServiceDeviceCluster#bd_uuid}
  */
  readonly bdUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#config_static_mac ServiceDeviceCluster#config_static_mac}
  */
  readonly configStaticMac?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#external_epg_uuid ServiceDeviceCluster#external_epg_uuid}
  */
  readonly externalEpgUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#ipsla_monitoring_policy_uuid ServiceDeviceCluster#ipsla_monitoring_policy_uuid}
  */
  readonly ipslaMonitoringPolicyUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#is_backup_redirect_ip ServiceDeviceCluster#is_backup_redirect_ip}
  */
  readonly isBackupRedirectIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#load_balance_hashing ServiceDeviceCluster#load_balance_hashing}
  */
  readonly loadBalanceHashing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#max_threshold ServiceDeviceCluster#max_threshold}
  */
  readonly maxThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#min_threshold ServiceDeviceCluster#min_threshold}
  */
  readonly minThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#name ServiceDeviceCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#pod_aware_redirection ServiceDeviceCluster#pod_aware_redirection}
  */
  readonly podAwareRedirection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#preferred_group ServiceDeviceCluster#preferred_group}
  */
  readonly preferredGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#qos_policy_uuid ServiceDeviceCluster#qos_policy_uuid}
  */
  readonly qosPolicyUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#resilient_hashing ServiceDeviceCluster#resilient_hashing}
  */
  readonly resilientHashing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#rewrite_source_mac ServiceDeviceCluster#rewrite_source_mac}
  */
  readonly rewriteSourceMac?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#tag_based_sorting ServiceDeviceCluster#tag_based_sorting}
  */
  readonly tagBasedSorting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#threshold_down_action ServiceDeviceCluster#threshold_down_action}
  */
  readonly thresholdDownAction?: string;
}

export function serviceDeviceClusterInterfacePropertiesToTerraform(struct?: ServiceDeviceClusterInterfaceProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anycast: cdktf.booleanToTerraform(struct!.anycast),
    bd_uuid: cdktf.stringToTerraform(struct!.bdUuid),
    config_static_mac: cdktf.booleanToTerraform(struct!.configStaticMac),
    external_epg_uuid: cdktf.stringToTerraform(struct!.externalEpgUuid),
    ipsla_monitoring_policy_uuid: cdktf.stringToTerraform(struct!.ipslaMonitoringPolicyUuid),
    is_backup_redirect_ip: cdktf.booleanToTerraform(struct!.isBackupRedirectIp),
    load_balance_hashing: cdktf.stringToTerraform(struct!.loadBalanceHashing),
    max_threshold: cdktf.numberToTerraform(struct!.maxThreshold),
    min_threshold: cdktf.numberToTerraform(struct!.minThreshold),
    name: cdktf.stringToTerraform(struct!.name),
    pod_aware_redirection: cdktf.booleanToTerraform(struct!.podAwareRedirection),
    preferred_group: cdktf.booleanToTerraform(struct!.preferredGroup),
    qos_policy_uuid: cdktf.stringToTerraform(struct!.qosPolicyUuid),
    resilient_hashing: cdktf.booleanToTerraform(struct!.resilientHashing),
    rewrite_source_mac: cdktf.booleanToTerraform(struct!.rewriteSourceMac),
    tag_based_sorting: cdktf.booleanToTerraform(struct!.tagBasedSorting),
    threshold_down_action: cdktf.stringToTerraform(struct!.thresholdDownAction),
  }
}


export function serviceDeviceClusterInterfacePropertiesToHclTerraform(struct?: ServiceDeviceClusterInterfaceProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anycast: {
      value: cdktf.booleanToHclTerraform(struct!.anycast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bd_uuid: {
      value: cdktf.stringToHclTerraform(struct!.bdUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_static_mac: {
      value: cdktf.booleanToHclTerraform(struct!.configStaticMac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_epg_uuid: {
      value: cdktf.stringToHclTerraform(struct!.externalEpgUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsla_monitoring_policy_uuid: {
      value: cdktf.stringToHclTerraform(struct!.ipslaMonitoringPolicyUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_backup_redirect_ip: {
      value: cdktf.booleanToHclTerraform(struct!.isBackupRedirectIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_balance_hashing: {
      value: cdktf.stringToHclTerraform(struct!.loadBalanceHashing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maxThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_threshold: {
      value: cdktf.numberToHclTerraform(struct!.minThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_aware_redirection: {
      value: cdktf.booleanToHclTerraform(struct!.podAwareRedirection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preferred_group: {
      value: cdktf.booleanToHclTerraform(struct!.preferredGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qos_policy_uuid: {
      value: cdktf.stringToHclTerraform(struct!.qosPolicyUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resilient_hashing: {
      value: cdktf.booleanToHclTerraform(struct!.resilientHashing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rewrite_source_mac: {
      value: cdktf.booleanToHclTerraform(struct!.rewriteSourceMac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag_based_sorting: {
      value: cdktf.booleanToHclTerraform(struct!.tagBasedSorting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold_down_action: {
      value: cdktf.stringToHclTerraform(struct!.thresholdDownAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDeviceClusterInterfacePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDeviceClusterInterfaceProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anycast !== undefined) {
      hasAnyValues = true;
      internalValueResult.anycast = this._anycast;
    }
    if (this._bdUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.bdUuid = this._bdUuid;
    }
    if (this._configStaticMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.configStaticMac = this._configStaticMac;
    }
    if (this._externalEpgUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalEpgUuid = this._externalEpgUuid;
    }
    if (this._ipslaMonitoringPolicyUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipslaMonitoringPolicyUuid = this._ipslaMonitoringPolicyUuid;
    }
    if (this._isBackupRedirectIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBackupRedirectIp = this._isBackupRedirectIp;
    }
    if (this._loadBalanceHashing !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalanceHashing = this._loadBalanceHashing;
    }
    if (this._maxThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxThreshold = this._maxThreshold;
    }
    if (this._minThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.minThreshold = this._minThreshold;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._podAwareRedirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAwareRedirection = this._podAwareRedirection;
    }
    if (this._preferredGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredGroup = this._preferredGroup;
    }
    if (this._qosPolicyUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicyUuid = this._qosPolicyUuid;
    }
    if (this._resilientHashing !== undefined) {
      hasAnyValues = true;
      internalValueResult.resilientHashing = this._resilientHashing;
    }
    if (this._rewriteSourceMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteSourceMac = this._rewriteSourceMac;
    }
    if (this._tagBasedSorting !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagBasedSorting = this._tagBasedSorting;
    }
    if (this._thresholdDownAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdDownAction = this._thresholdDownAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDeviceClusterInterfaceProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anycast = undefined;
      this._bdUuid = undefined;
      this._configStaticMac = undefined;
      this._externalEpgUuid = undefined;
      this._ipslaMonitoringPolicyUuid = undefined;
      this._isBackupRedirectIp = undefined;
      this._loadBalanceHashing = undefined;
      this._maxThreshold = undefined;
      this._minThreshold = undefined;
      this._name = undefined;
      this._podAwareRedirection = undefined;
      this._preferredGroup = undefined;
      this._qosPolicyUuid = undefined;
      this._resilientHashing = undefined;
      this._rewriteSourceMac = undefined;
      this._tagBasedSorting = undefined;
      this._thresholdDownAction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anycast = value.anycast;
      this._bdUuid = value.bdUuid;
      this._configStaticMac = value.configStaticMac;
      this._externalEpgUuid = value.externalEpgUuid;
      this._ipslaMonitoringPolicyUuid = value.ipslaMonitoringPolicyUuid;
      this._isBackupRedirectIp = value.isBackupRedirectIp;
      this._loadBalanceHashing = value.loadBalanceHashing;
      this._maxThreshold = value.maxThreshold;
      this._minThreshold = value.minThreshold;
      this._name = value.name;
      this._podAwareRedirection = value.podAwareRedirection;
      this._preferredGroup = value.preferredGroup;
      this._qosPolicyUuid = value.qosPolicyUuid;
      this._resilientHashing = value.resilientHashing;
      this._rewriteSourceMac = value.rewriteSourceMac;
      this._tagBasedSorting = value.tagBasedSorting;
      this._thresholdDownAction = value.thresholdDownAction;
    }
  }

  // anycast - computed: true, optional: true, required: false
  private _anycast?: boolean | cdktf.IResolvable; 
  public get anycast() {
    return this.getBooleanAttribute('anycast');
  }
  public set anycast(value: boolean | cdktf.IResolvable) {
    this._anycast = value;
  }
  public resetAnycast() {
    this._anycast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastInput() {
    return this._anycast;
  }

  // bd_uuid - computed: true, optional: true, required: false
  private _bdUuid?: string; 
  public get bdUuid() {
    return this.getStringAttribute('bd_uuid');
  }
  public set bdUuid(value: string) {
    this._bdUuid = value;
  }
  public resetBdUuid() {
    this._bdUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdUuidInput() {
    return this._bdUuid;
  }

  // config_static_mac - computed: true, optional: true, required: false
  private _configStaticMac?: boolean | cdktf.IResolvable; 
  public get configStaticMac() {
    return this.getBooleanAttribute('config_static_mac');
  }
  public set configStaticMac(value: boolean | cdktf.IResolvable) {
    this._configStaticMac = value;
  }
  public resetConfigStaticMac() {
    this._configStaticMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configStaticMacInput() {
    return this._configStaticMac;
  }

  // external_epg_uuid - computed: true, optional: true, required: false
  private _externalEpgUuid?: string; 
  public get externalEpgUuid() {
    return this.getStringAttribute('external_epg_uuid');
  }
  public set externalEpgUuid(value: string) {
    this._externalEpgUuid = value;
  }
  public resetExternalEpgUuid() {
    this._externalEpgUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEpgUuidInput() {
    return this._externalEpgUuid;
  }

  // ipsla_monitoring_policy_uuid - computed: true, optional: true, required: false
  private _ipslaMonitoringPolicyUuid?: string; 
  public get ipslaMonitoringPolicyUuid() {
    return this.getStringAttribute('ipsla_monitoring_policy_uuid');
  }
  public set ipslaMonitoringPolicyUuid(value: string) {
    this._ipslaMonitoringPolicyUuid = value;
  }
  public resetIpslaMonitoringPolicyUuid() {
    this._ipslaMonitoringPolicyUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipslaMonitoringPolicyUuidInput() {
    return this._ipslaMonitoringPolicyUuid;
  }

  // is_backup_redirect_ip - computed: true, optional: true, required: false
  private _isBackupRedirectIp?: boolean | cdktf.IResolvable; 
  public get isBackupRedirectIp() {
    return this.getBooleanAttribute('is_backup_redirect_ip');
  }
  public set isBackupRedirectIp(value: boolean | cdktf.IResolvable) {
    this._isBackupRedirectIp = value;
  }
  public resetIsBackupRedirectIp() {
    this._isBackupRedirectIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBackupRedirectIpInput() {
    return this._isBackupRedirectIp;
  }

  // load_balance_hashing - computed: false, optional: true, required: false
  private _loadBalanceHashing?: string; 
  public get loadBalanceHashing() {
    return this.getStringAttribute('load_balance_hashing');
  }
  public set loadBalanceHashing(value: string) {
    this._loadBalanceHashing = value;
  }
  public resetLoadBalanceHashing() {
    this._loadBalanceHashing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceHashingInput() {
    return this._loadBalanceHashing;
  }

  // max_threshold - computed: true, optional: true, required: false
  private _maxThreshold?: number; 
  public get maxThreshold() {
    return this.getNumberAttribute('max_threshold');
  }
  public set maxThreshold(value: number) {
    this._maxThreshold = value;
  }
  public resetMaxThreshold() {
    this._maxThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThresholdInput() {
    return this._maxThreshold;
  }

  // min_threshold - computed: true, optional: true, required: false
  private _minThreshold?: number; 
  public get minThreshold() {
    return this.getNumberAttribute('min_threshold');
  }
  public set minThreshold(value: number) {
    this._minThreshold = value;
  }
  public resetMinThreshold() {
    this._minThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minThresholdInput() {
    return this._minThreshold;
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

  // pod_aware_redirection - computed: true, optional: true, required: false
  private _podAwareRedirection?: boolean | cdktf.IResolvable; 
  public get podAwareRedirection() {
    return this.getBooleanAttribute('pod_aware_redirection');
  }
  public set podAwareRedirection(value: boolean | cdktf.IResolvable) {
    this._podAwareRedirection = value;
  }
  public resetPodAwareRedirection() {
    this._podAwareRedirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAwareRedirectionInput() {
    return this._podAwareRedirection;
  }

  // preferred_group - computed: true, optional: true, required: false
  private _preferredGroup?: boolean | cdktf.IResolvable; 
  public get preferredGroup() {
    return this.getBooleanAttribute('preferred_group');
  }
  public set preferredGroup(value: boolean | cdktf.IResolvable) {
    this._preferredGroup = value;
  }
  public resetPreferredGroup() {
    this._preferredGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredGroupInput() {
    return this._preferredGroup;
  }

  // qos_policy_uuid - computed: true, optional: true, required: false
  private _qosPolicyUuid?: string; 
  public get qosPolicyUuid() {
    return this.getStringAttribute('qos_policy_uuid');
  }
  public set qosPolicyUuid(value: string) {
    this._qosPolicyUuid = value;
  }
  public resetQosPolicyUuid() {
    this._qosPolicyUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyUuidInput() {
    return this._qosPolicyUuid;
  }

  // resilient_hashing - computed: true, optional: true, required: false
  private _resilientHashing?: boolean | cdktf.IResolvable; 
  public get resilientHashing() {
    return this.getBooleanAttribute('resilient_hashing');
  }
  public set resilientHashing(value: boolean | cdktf.IResolvable) {
    this._resilientHashing = value;
  }
  public resetResilientHashing() {
    this._resilientHashing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resilientHashingInput() {
    return this._resilientHashing;
  }

  // rewrite_source_mac - computed: true, optional: true, required: false
  private _rewriteSourceMac?: boolean | cdktf.IResolvable; 
  public get rewriteSourceMac() {
    return this.getBooleanAttribute('rewrite_source_mac');
  }
  public set rewriteSourceMac(value: boolean | cdktf.IResolvable) {
    this._rewriteSourceMac = value;
  }
  public resetRewriteSourceMac() {
    this._rewriteSourceMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteSourceMacInput() {
    return this._rewriteSourceMac;
  }

  // tag_based_sorting - computed: true, optional: true, required: false
  private _tagBasedSorting?: boolean | cdktf.IResolvable; 
  public get tagBasedSorting() {
    return this.getBooleanAttribute('tag_based_sorting');
  }
  public set tagBasedSorting(value: boolean | cdktf.IResolvable) {
    this._tagBasedSorting = value;
  }
  public resetTagBasedSorting() {
    this._tagBasedSorting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagBasedSortingInput() {
    return this._tagBasedSorting;
  }

  // threshold_down_action - computed: false, optional: true, required: false
  private _thresholdDownAction?: string; 
  public get thresholdDownAction() {
    return this.getStringAttribute('threshold_down_action');
  }
  public set thresholdDownAction(value: string) {
    this._thresholdDownAction = value;
  }
  public resetThresholdDownAction() {
    this._thresholdDownAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdDownActionInput() {
    return this._thresholdDownAction;
  }
}

export class ServiceDeviceClusterInterfacePropertiesList extends cdktf.ComplexList {
  public internalValue? : ServiceDeviceClusterInterfaceProperties[] | cdktf.IResolvable

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
  public get(index: number): ServiceDeviceClusterInterfacePropertiesOutputReference {
    return new ServiceDeviceClusterInterfacePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster mso_service_device_cluster}
*/
export class ServiceDeviceCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_service_device_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceDeviceCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceDeviceCluster to import
  * @param importFromId The id of the existing ServiceDeviceCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceDeviceCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_service_device_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/service_device_cluster mso_service_device_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceDeviceClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceDeviceClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_service_device_cluster',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.6.0'
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
    this._deviceMode = config.deviceMode;
    this._deviceType = config.deviceType;
    this._id = config.id;
    this._name = config.name;
    this._templateId = config.templateId;
    this._interfaceProperties.internalValue = config.interfaceProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // device_mode - computed: false, optional: false, required: true
  private _deviceMode?: string; 
  public get deviceMode() {
    return this.getStringAttribute('device_mode');
  }
  public set deviceMode(value: string) {
    this._deviceMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceModeInput() {
    return this._deviceMode;
  }

  // device_type - computed: false, optional: false, required: true
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
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

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // interface_properties - computed: false, optional: false, required: true
  private _interfaceProperties = new ServiceDeviceClusterInterfacePropertiesList(this, "interface_properties", true);
  public get interfaceProperties() {
    return this._interfaceProperties;
  }
  public putInterfaceProperties(value: ServiceDeviceClusterInterfaceProperties[] | cdktf.IResolvable) {
    this._interfaceProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacePropertiesInput() {
    return this._interfaceProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_mode: cdktf.stringToTerraform(this._deviceMode),
      device_type: cdktf.stringToTerraform(this._deviceType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      template_id: cdktf.stringToTerraform(this._templateId),
      interface_properties: cdktf.listMapper(serviceDeviceClusterInterfacePropertiesToTerraform, true)(this._interfaceProperties.internalValue),
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
      device_mode: {
        value: cdktf.stringToHclTerraform(this._deviceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_properties: {
        value: cdktf.listMapperHcl(serviceDeviceClusterInterfacePropertiesToHclTerraform, true)(this._interfaceProperties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceDeviceClusterInterfacePropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
