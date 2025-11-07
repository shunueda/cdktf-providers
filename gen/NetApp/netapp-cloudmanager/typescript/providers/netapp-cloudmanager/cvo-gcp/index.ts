// https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CvoGcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#backup_volumes_to_cbs CvoGcp#backup_volumes_to_cbs}
  */
  readonly backupVolumesToCbs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#capacity_package_name CvoGcp#capacity_package_name}
  */
  readonly capacityPackageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#capacity_tier CvoGcp#capacity_tier}
  */
  readonly capacityTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#client_id CvoGcp#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#connector_ip CvoGcp#connector_ip}
  */
  readonly connectorIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#data_encryption_type CvoGcp#data_encryption_type}
  */
  readonly dataEncryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#deployment_mode CvoGcp#deployment_mode}
  */
  readonly deploymentMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#enable_compliance CvoGcp#enable_compliance}
  */
  readonly enableCompliance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#firewall_ip_ranges CvoGcp#firewall_ip_ranges}
  */
  readonly firewallIpRanges?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#firewall_rule CvoGcp#firewall_rule}
  */
  readonly firewallRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#firewall_tag_name_rule CvoGcp#firewall_tag_name_rule}
  */
  readonly firewallTagNameRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#flash_cache CvoGcp#flash_cache}
  */
  readonly flashCache?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#gcp_encryption_parameters CvoGcp#gcp_encryption_parameters}
  */
  readonly gcpEncryptionParameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#gcp_service_account CvoGcp#gcp_service_account}
  */
  readonly gcpServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#gcp_volume_size CvoGcp#gcp_volume_size}
  */
  readonly gcpVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#gcp_volume_size_unit CvoGcp#gcp_volume_size_unit}
  */
  readonly gcpVolumeSizeUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#gcp_volume_type CvoGcp#gcp_volume_type}
  */
  readonly gcpVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#id CvoGcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#instance_type CvoGcp#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#is_ha CvoGcp#is_ha}
  */
  readonly isHa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#license_type CvoGcp#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#mediator_zone CvoGcp#mediator_zone}
  */
  readonly mediatorZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#name CvoGcp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#network_project_id CvoGcp#network_project_id}
  */
  readonly networkProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#node1_zone CvoGcp#node1_zone}
  */
  readonly node1Zone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#node2_zone CvoGcp#node2_zone}
  */
  readonly node2Zone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#nss_account CvoGcp#nss_account}
  */
  readonly nssAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#ontap_version CvoGcp#ontap_version}
  */
  readonly ontapVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#platform_serial_number_node1 CvoGcp#platform_serial_number_node1}
  */
  readonly platformSerialNumberNode1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#platform_serial_number_node2 CvoGcp#platform_serial_number_node2}
  */
  readonly platformSerialNumberNode2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#project_id CvoGcp#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#provided_license CvoGcp#provided_license}
  */
  readonly providedLicense?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#retries CvoGcp#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#saas_subscription_id CvoGcp#saas_subscription_id}
  */
  readonly saasSubscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#serial_number CvoGcp#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#subnet0_node_and_data_connectivity CvoGcp#subnet0_node_and_data_connectivity}
  */
  readonly subnet0NodeAndDataConnectivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#subnet1_cluster_connectivity CvoGcp#subnet1_cluster_connectivity}
  */
  readonly subnet1ClusterConnectivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#subnet2_ha_connectivity CvoGcp#subnet2_ha_connectivity}
  */
  readonly subnet2HaConnectivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#subnet3_data_replication CvoGcp#subnet3_data_replication}
  */
  readonly subnet3DataReplication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#subnet_id CvoGcp#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#svm_name CvoGcp#svm_name}
  */
  readonly svmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#svm_password CvoGcp#svm_password}
  */
  readonly svmPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#tenant_id CvoGcp#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#tier_level CvoGcp#tier_level}
  */
  readonly tierLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#upgrade_ontap_version CvoGcp#upgrade_ontap_version}
  */
  readonly upgradeOntapVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#use_latest_version CvoGcp#use_latest_version}
  */
  readonly useLatestVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#vpc0_firewall_rule_name CvoGcp#vpc0_firewall_rule_name}
  */
  readonly vpc0FirewallRuleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#vpc0_firewall_rule_tag_name CvoGcp#vpc0_firewall_rule_tag_name}
  */
  readonly vpc0FirewallRuleTagName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#vpc0_node_and_data_connectivity CvoGcp#vpc0_node_and_data_connectivity}
  */
  readonly vpc0NodeAndDataConnectivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#vpc1_cluster_connectivity CvoGcp#vpc1_cluster_connectivity}
  */
  readonly vpc1ClusterConnectivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#vpc1_firewall_rule_name CvoGcp#vpc1_firewall_rule_name}
  */
  readonly vpc1FirewallRuleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#vpc1_firewall_rule_tag_name CvoGcp#vpc1_firewall_rule_tag_name}
  */
  readonly vpc1FirewallRuleTagName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#vpc2_firewall_rule_name CvoGcp#vpc2_firewall_rule_name}
  */
  readonly vpc2FirewallRuleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#vpc2_firewall_rule_tag_name CvoGcp#vpc2_firewall_rule_tag_name}
  */
  readonly vpc2FirewallRuleTagName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#vpc2_ha_connectivity CvoGcp#vpc2_ha_connectivity}
  */
  readonly vpc2HaConnectivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#vpc3_data_replication CvoGcp#vpc3_data_replication}
  */
  readonly vpc3DataReplication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#vpc3_firewall_rule_name CvoGcp#vpc3_firewall_rule_name}
  */
  readonly vpc3FirewallRuleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#vpc3_firewall_rule_tag_name CvoGcp#vpc3_firewall_rule_tag_name}
  */
  readonly vpc3FirewallRuleTagName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#vpc_id CvoGcp#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#workspace_id CvoGcp#workspace_id}
  */
  readonly workspaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#worm_retention_period_length CvoGcp#worm_retention_period_length}
  */
  readonly wormRetentionPeriodLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#worm_retention_period_unit CvoGcp#worm_retention_period_unit}
  */
  readonly wormRetentionPeriodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#writing_speed_state CvoGcp#writing_speed_state}
  */
  readonly writingSpeedState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#zone CvoGcp#zone}
  */
  readonly zone?: string;
  /**
  * gcp_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#gcp_label CvoGcp#gcp_label}
  */
  readonly gcpLabel?: CvoGcpGcpLabel[] | cdktf.IResolvable;
  /**
  * svm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#svm CvoGcp#svm}
  */
  readonly svm?: CvoGcpSvm[] | cdktf.IResolvable;
}
export interface CvoGcpGcpLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#label_key CvoGcp#label_key}
  */
  readonly labelKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#label_value CvoGcp#label_value}
  */
  readonly labelValue?: string;
}

export function cvoGcpGcpLabelToTerraform(struct?: CvoGcpGcpLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_key: cdktf.stringToTerraform(struct!.labelKey),
    label_value: cdktf.stringToTerraform(struct!.labelValue),
  }
}


export function cvoGcpGcpLabelToHclTerraform(struct?: CvoGcpGcpLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_key: {
      value: cdktf.stringToHclTerraform(struct!.labelKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_value: {
      value: cdktf.stringToHclTerraform(struct!.labelValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvoGcpGcpLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvoGcpGcpLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelKey = this._labelKey;
    }
    if (this._labelValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelValue = this._labelValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvoGcpGcpLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelKey = undefined;
      this._labelValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelKey = value.labelKey;
      this._labelValue = value.labelValue;
    }
  }

  // label_key - computed: false, optional: false, required: true
  private _labelKey?: string; 
  public get labelKey() {
    return this.getStringAttribute('label_key');
  }
  public set labelKey(value: string) {
    this._labelKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelKeyInput() {
    return this._labelKey;
  }

  // label_value - computed: false, optional: true, required: false
  private _labelValue?: string; 
  public get labelValue() {
    return this.getStringAttribute('label_value');
  }
  public set labelValue(value: string) {
    this._labelValue = value;
  }
  public resetLabelValue() {
    this._labelValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelValueInput() {
    return this._labelValue;
  }
}

export class CvoGcpGcpLabelList extends cdktf.ComplexList {
  public internalValue? : CvoGcpGcpLabel[] | cdktf.IResolvable

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
  public get(index: number): CvoGcpGcpLabelOutputReference {
    return new CvoGcpGcpLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CvoGcpSvm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#svm_name CvoGcp#svm_name}
  */
  readonly svmName: string;
}

export function cvoGcpSvmToTerraform(struct?: CvoGcpSvm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    svm_name: cdktf.stringToTerraform(struct!.svmName),
  }
}


export function cvoGcpSvmToHclTerraform(struct?: CvoGcpSvm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    svm_name: {
      value: cdktf.stringToHclTerraform(struct!.svmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvoGcpSvmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvoGcpSvm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._svmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmName = this._svmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvoGcpSvm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._svmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._svmName = value.svmName;
    }
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }
}

export class CvoGcpSvmList extends cdktf.ComplexList {
  public internalValue? : CvoGcpSvm[] | cdktf.IResolvable

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
  public get(index: number): CvoGcpSvmOutputReference {
    return new CvoGcpSvmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp netapp-cloudmanager_cvo_gcp}
*/
export class CvoGcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-cloudmanager_cvo_gcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CvoGcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CvoGcp to import
  * @param importFromId The id of the existing CvoGcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CvoGcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-cloudmanager_cvo_gcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_gcp netapp-cloudmanager_cvo_gcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CvoGcpConfig
  */
  public constructor(scope: Construct, id: string, config: CvoGcpConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-cloudmanager_cvo_gcp',
      terraformGeneratorMetadata: {
        providerName: 'netapp-cloudmanager',
        providerVersion: '26.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupVolumesToCbs = config.backupVolumesToCbs;
    this._capacityPackageName = config.capacityPackageName;
    this._capacityTier = config.capacityTier;
    this._clientId = config.clientId;
    this._connectorIp = config.connectorIp;
    this._dataEncryptionType = config.dataEncryptionType;
    this._deploymentMode = config.deploymentMode;
    this._enableCompliance = config.enableCompliance;
    this._firewallIpRanges = config.firewallIpRanges;
    this._firewallRule = config.firewallRule;
    this._firewallTagNameRule = config.firewallTagNameRule;
    this._flashCache = config.flashCache;
    this._gcpEncryptionParameters = config.gcpEncryptionParameters;
    this._gcpServiceAccount = config.gcpServiceAccount;
    this._gcpVolumeSize = config.gcpVolumeSize;
    this._gcpVolumeSizeUnit = config.gcpVolumeSizeUnit;
    this._gcpVolumeType = config.gcpVolumeType;
    this._id = config.id;
    this._instanceType = config.instanceType;
    this._isHa = config.isHa;
    this._licenseType = config.licenseType;
    this._mediatorZone = config.mediatorZone;
    this._name = config.name;
    this._networkProjectId = config.networkProjectId;
    this._node1Zone = config.node1Zone;
    this._node2Zone = config.node2Zone;
    this._nssAccount = config.nssAccount;
    this._ontapVersion = config.ontapVersion;
    this._platformSerialNumberNode1 = config.platformSerialNumberNode1;
    this._platformSerialNumberNode2 = config.platformSerialNumberNode2;
    this._projectId = config.projectId;
    this._providedLicense = config.providedLicense;
    this._retries = config.retries;
    this._saasSubscriptionId = config.saasSubscriptionId;
    this._serialNumber = config.serialNumber;
    this._subnet0NodeAndDataConnectivity = config.subnet0NodeAndDataConnectivity;
    this._subnet1ClusterConnectivity = config.subnet1ClusterConnectivity;
    this._subnet2HaConnectivity = config.subnet2HaConnectivity;
    this._subnet3DataReplication = config.subnet3DataReplication;
    this._subnetId = config.subnetId;
    this._svmName = config.svmName;
    this._svmPassword = config.svmPassword;
    this._tenantId = config.tenantId;
    this._tierLevel = config.tierLevel;
    this._upgradeOntapVersion = config.upgradeOntapVersion;
    this._useLatestVersion = config.useLatestVersion;
    this._vpc0FirewallRuleName = config.vpc0FirewallRuleName;
    this._vpc0FirewallRuleTagName = config.vpc0FirewallRuleTagName;
    this._vpc0NodeAndDataConnectivity = config.vpc0NodeAndDataConnectivity;
    this._vpc1ClusterConnectivity = config.vpc1ClusterConnectivity;
    this._vpc1FirewallRuleName = config.vpc1FirewallRuleName;
    this._vpc1FirewallRuleTagName = config.vpc1FirewallRuleTagName;
    this._vpc2FirewallRuleName = config.vpc2FirewallRuleName;
    this._vpc2FirewallRuleTagName = config.vpc2FirewallRuleTagName;
    this._vpc2HaConnectivity = config.vpc2HaConnectivity;
    this._vpc3DataReplication = config.vpc3DataReplication;
    this._vpc3FirewallRuleName = config.vpc3FirewallRuleName;
    this._vpc3FirewallRuleTagName = config.vpc3FirewallRuleTagName;
    this._vpcId = config.vpcId;
    this._workspaceId = config.workspaceId;
    this._wormRetentionPeriodLength = config.wormRetentionPeriodLength;
    this._wormRetentionPeriodUnit = config.wormRetentionPeriodUnit;
    this._writingSpeedState = config.writingSpeedState;
    this._zone = config.zone;
    this._gcpLabel.internalValue = config.gcpLabel;
    this._svm.internalValue = config.svm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_volumes_to_cbs - computed: false, optional: true, required: false
  private _backupVolumesToCbs?: boolean | cdktf.IResolvable; 
  public get backupVolumesToCbs() {
    return this.getBooleanAttribute('backup_volumes_to_cbs');
  }
  public set backupVolumesToCbs(value: boolean | cdktf.IResolvable) {
    this._backupVolumesToCbs = value;
  }
  public resetBackupVolumesToCbs() {
    this._backupVolumesToCbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVolumesToCbsInput() {
    return this._backupVolumesToCbs;
  }

  // capacity_package_name - computed: false, optional: true, required: false
  private _capacityPackageName?: string; 
  public get capacityPackageName() {
    return this.getStringAttribute('capacity_package_name');
  }
  public set capacityPackageName(value: string) {
    this._capacityPackageName = value;
  }
  public resetCapacityPackageName() {
    this._capacityPackageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityPackageNameInput() {
    return this._capacityPackageName;
  }

  // capacity_tier - computed: false, optional: true, required: false
  private _capacityTier?: string; 
  public get capacityTier() {
    return this.getStringAttribute('capacity_tier');
  }
  public set capacityTier(value: string) {
    this._capacityTier = value;
  }
  public resetCapacityTier() {
    this._capacityTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityTierInput() {
    return this._capacityTier;
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

  // connector_ip - computed: false, optional: true, required: false
  private _connectorIp?: string; 
  public get connectorIp() {
    return this.getStringAttribute('connector_ip');
  }
  public set connectorIp(value: string) {
    this._connectorIp = value;
  }
  public resetConnectorIp() {
    this._connectorIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIpInput() {
    return this._connectorIp;
  }

  // data_encryption_type - computed: false, optional: true, required: false
  private _dataEncryptionType?: string; 
  public get dataEncryptionType() {
    return this.getStringAttribute('data_encryption_type');
  }
  public set dataEncryptionType(value: string) {
    this._dataEncryptionType = value;
  }
  public resetDataEncryptionType() {
    this._dataEncryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEncryptionTypeInput() {
    return this._dataEncryptionType;
  }

  // deployment_mode - computed: false, optional: true, required: false
  private _deploymentMode?: string; 
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }
  public set deploymentMode(value: string) {
    this._deploymentMode = value;
  }
  public resetDeploymentMode() {
    this._deploymentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModeInput() {
    return this._deploymentMode;
  }

  // enable_compliance - computed: false, optional: true, required: false
  private _enableCompliance?: boolean | cdktf.IResolvable; 
  public get enableCompliance() {
    return this.getBooleanAttribute('enable_compliance');
  }
  public set enableCompliance(value: boolean | cdktf.IResolvable) {
    this._enableCompliance = value;
  }
  public resetEnableCompliance() {
    this._enableCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableComplianceInput() {
    return this._enableCompliance;
  }

  // firewall_ip_ranges - computed: false, optional: true, required: false
  private _firewallIpRanges?: boolean | cdktf.IResolvable; 
  public get firewallIpRanges() {
    return this.getBooleanAttribute('firewall_ip_ranges');
  }
  public set firewallIpRanges(value: boolean | cdktf.IResolvable) {
    this._firewallIpRanges = value;
  }
  public resetFirewallIpRanges() {
    this._firewallIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallIpRangesInput() {
    return this._firewallIpRanges;
  }

  // firewall_rule - computed: false, optional: true, required: false
  private _firewallRule?: string; 
  public get firewallRule() {
    return this.getStringAttribute('firewall_rule');
  }
  public set firewallRule(value: string) {
    this._firewallRule = value;
  }
  public resetFirewallRule() {
    this._firewallRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallRuleInput() {
    return this._firewallRule;
  }

  // firewall_tag_name_rule - computed: false, optional: true, required: false
  private _firewallTagNameRule?: string; 
  public get firewallTagNameRule() {
    return this.getStringAttribute('firewall_tag_name_rule');
  }
  public set firewallTagNameRule(value: string) {
    this._firewallTagNameRule = value;
  }
  public resetFirewallTagNameRule() {
    this._firewallTagNameRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallTagNameRuleInput() {
    return this._firewallTagNameRule;
  }

  // flash_cache - computed: false, optional: true, required: false
  private _flashCache?: boolean | cdktf.IResolvable; 
  public get flashCache() {
    return this.getBooleanAttribute('flash_cache');
  }
  public set flashCache(value: boolean | cdktf.IResolvable) {
    this._flashCache = value;
  }
  public resetFlashCache() {
    this._flashCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flashCacheInput() {
    return this._flashCache;
  }

  // gcp_encryption_parameters - computed: false, optional: true, required: false
  private _gcpEncryptionParameters?: string; 
  public get gcpEncryptionParameters() {
    return this.getStringAttribute('gcp_encryption_parameters');
  }
  public set gcpEncryptionParameters(value: string) {
    this._gcpEncryptionParameters = value;
  }
  public resetGcpEncryptionParameters() {
    this._gcpEncryptionParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpEncryptionParametersInput() {
    return this._gcpEncryptionParameters;
  }

  // gcp_service_account - computed: false, optional: true, required: false
  private _gcpServiceAccount?: string; 
  public get gcpServiceAccount() {
    return this.getStringAttribute('gcp_service_account');
  }
  public set gcpServiceAccount(value: string) {
    this._gcpServiceAccount = value;
  }
  public resetGcpServiceAccount() {
    this._gcpServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountInput() {
    return this._gcpServiceAccount;
  }

  // gcp_volume_size - computed: false, optional: true, required: false
  private _gcpVolumeSize?: number; 
  public get gcpVolumeSize() {
    return this.getNumberAttribute('gcp_volume_size');
  }
  public set gcpVolumeSize(value: number) {
    this._gcpVolumeSize = value;
  }
  public resetGcpVolumeSize() {
    this._gcpVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpVolumeSizeInput() {
    return this._gcpVolumeSize;
  }

  // gcp_volume_size_unit - computed: false, optional: true, required: false
  private _gcpVolumeSizeUnit?: string; 
  public get gcpVolumeSizeUnit() {
    return this.getStringAttribute('gcp_volume_size_unit');
  }
  public set gcpVolumeSizeUnit(value: string) {
    this._gcpVolumeSizeUnit = value;
  }
  public resetGcpVolumeSizeUnit() {
    this._gcpVolumeSizeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpVolumeSizeUnitInput() {
    return this._gcpVolumeSizeUnit;
  }

  // gcp_volume_type - computed: false, optional: true, required: false
  private _gcpVolumeType?: string; 
  public get gcpVolumeType() {
    return this.getStringAttribute('gcp_volume_type');
  }
  public set gcpVolumeType(value: string) {
    this._gcpVolumeType = value;
  }
  public resetGcpVolumeType() {
    this._gcpVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpVolumeTypeInput() {
    return this._gcpVolumeType;
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

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // is_ha - computed: false, optional: true, required: false
  private _isHa?: boolean | cdktf.IResolvable; 
  public get isHa() {
    return this.getBooleanAttribute('is_ha');
  }
  public set isHa(value: boolean | cdktf.IResolvable) {
    this._isHa = value;
  }
  public resetIsHa() {
    this._isHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHaInput() {
    return this._isHa;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // mediator_zone - computed: false, optional: true, required: false
  private _mediatorZone?: string; 
  public get mediatorZone() {
    return this.getStringAttribute('mediator_zone');
  }
  public set mediatorZone(value: string) {
    this._mediatorZone = value;
  }
  public resetMediatorZone() {
    this._mediatorZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediatorZoneInput() {
    return this._mediatorZone;
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

  // network_project_id - computed: false, optional: true, required: false
  private _networkProjectId?: string; 
  public get networkProjectId() {
    return this.getStringAttribute('network_project_id');
  }
  public set networkProjectId(value: string) {
    this._networkProjectId = value;
  }
  public resetNetworkProjectId() {
    this._networkProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProjectIdInput() {
    return this._networkProjectId;
  }

  // node1_zone - computed: false, optional: true, required: false
  private _node1Zone?: string; 
  public get node1Zone() {
    return this.getStringAttribute('node1_zone');
  }
  public set node1Zone(value: string) {
    this._node1Zone = value;
  }
  public resetNode1Zone() {
    this._node1Zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get node1ZoneInput() {
    return this._node1Zone;
  }

  // node2_zone - computed: false, optional: true, required: false
  private _node2Zone?: string; 
  public get node2Zone() {
    return this.getStringAttribute('node2_zone');
  }
  public set node2Zone(value: string) {
    this._node2Zone = value;
  }
  public resetNode2Zone() {
    this._node2Zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get node2ZoneInput() {
    return this._node2Zone;
  }

  // nss_account - computed: false, optional: true, required: false
  private _nssAccount?: string; 
  public get nssAccount() {
    return this.getStringAttribute('nss_account');
  }
  public set nssAccount(value: string) {
    this._nssAccount = value;
  }
  public resetNssAccount() {
    this._nssAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssAccountInput() {
    return this._nssAccount;
  }

  // ontap_version - computed: false, optional: true, required: false
  private _ontapVersion?: string; 
  public get ontapVersion() {
    return this.getStringAttribute('ontap_version');
  }
  public set ontapVersion(value: string) {
    this._ontapVersion = value;
  }
  public resetOntapVersion() {
    this._ontapVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ontapVersionInput() {
    return this._ontapVersion;
  }

  // platform_serial_number_node1 - computed: false, optional: true, required: false
  private _platformSerialNumberNode1?: string; 
  public get platformSerialNumberNode1() {
    return this.getStringAttribute('platform_serial_number_node1');
  }
  public set platformSerialNumberNode1(value: string) {
    this._platformSerialNumberNode1 = value;
  }
  public resetPlatformSerialNumberNode1() {
    this._platformSerialNumberNode1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformSerialNumberNode1Input() {
    return this._platformSerialNumberNode1;
  }

  // platform_serial_number_node2 - computed: false, optional: true, required: false
  private _platformSerialNumberNode2?: string; 
  public get platformSerialNumberNode2() {
    return this.getStringAttribute('platform_serial_number_node2');
  }
  public set platformSerialNumberNode2(value: string) {
    this._platformSerialNumberNode2 = value;
  }
  public resetPlatformSerialNumberNode2() {
    this._platformSerialNumberNode2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformSerialNumberNode2Input() {
    return this._platformSerialNumberNode2;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // provided_license - computed: false, optional: true, required: false
  private _providedLicense?: string; 
  public get providedLicense() {
    return this.getStringAttribute('provided_license');
  }
  public set providedLicense(value: string) {
    this._providedLicense = value;
  }
  public resetProvidedLicense() {
    this._providedLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providedLicenseInput() {
    return this._providedLicense;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // saas_subscription_id - computed: false, optional: true, required: false
  private _saasSubscriptionId?: string; 
  public get saasSubscriptionId() {
    return this.getStringAttribute('saas_subscription_id');
  }
  public set saasSubscriptionId(value: string) {
    this._saasSubscriptionId = value;
  }
  public resetSaasSubscriptionId() {
    this._saasSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasSubscriptionIdInput() {
    return this._saasSubscriptionId;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // subnet0_node_and_data_connectivity - computed: false, optional: true, required: false
  private _subnet0NodeAndDataConnectivity?: string; 
  public get subnet0NodeAndDataConnectivity() {
    return this.getStringAttribute('subnet0_node_and_data_connectivity');
  }
  public set subnet0NodeAndDataConnectivity(value: string) {
    this._subnet0NodeAndDataConnectivity = value;
  }
  public resetSubnet0NodeAndDataConnectivity() {
    this._subnet0NodeAndDataConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet0NodeAndDataConnectivityInput() {
    return this._subnet0NodeAndDataConnectivity;
  }

  // subnet1_cluster_connectivity - computed: false, optional: true, required: false
  private _subnet1ClusterConnectivity?: string; 
  public get subnet1ClusterConnectivity() {
    return this.getStringAttribute('subnet1_cluster_connectivity');
  }
  public set subnet1ClusterConnectivity(value: string) {
    this._subnet1ClusterConnectivity = value;
  }
  public resetSubnet1ClusterConnectivity() {
    this._subnet1ClusterConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet1ClusterConnectivityInput() {
    return this._subnet1ClusterConnectivity;
  }

  // subnet2_ha_connectivity - computed: false, optional: true, required: false
  private _subnet2HaConnectivity?: string; 
  public get subnet2HaConnectivity() {
    return this.getStringAttribute('subnet2_ha_connectivity');
  }
  public set subnet2HaConnectivity(value: string) {
    this._subnet2HaConnectivity = value;
  }
  public resetSubnet2HaConnectivity() {
    this._subnet2HaConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet2HaConnectivityInput() {
    return this._subnet2HaConnectivity;
  }

  // subnet3_data_replication - computed: false, optional: true, required: false
  private _subnet3DataReplication?: string; 
  public get subnet3DataReplication() {
    return this.getStringAttribute('subnet3_data_replication');
  }
  public set subnet3DataReplication(value: string) {
    this._subnet3DataReplication = value;
  }
  public resetSubnet3DataReplication() {
    this._subnet3DataReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet3DataReplicationInput() {
    return this._subnet3DataReplication;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // svm_name - computed: false, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // svm_password - computed: false, optional: false, required: true
  private _svmPassword?: string; 
  public get svmPassword() {
    return this.getStringAttribute('svm_password');
  }
  public set svmPassword(value: string) {
    this._svmPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmPasswordInput() {
    return this._svmPassword;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // tier_level - computed: false, optional: true, required: false
  private _tierLevel?: string; 
  public get tierLevel() {
    return this.getStringAttribute('tier_level');
  }
  public set tierLevel(value: string) {
    this._tierLevel = value;
  }
  public resetTierLevel() {
    this._tierLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierLevelInput() {
    return this._tierLevel;
  }

  // upgrade_ontap_version - computed: false, optional: true, required: false
  private _upgradeOntapVersion?: boolean | cdktf.IResolvable; 
  public get upgradeOntapVersion() {
    return this.getBooleanAttribute('upgrade_ontap_version');
  }
  public set upgradeOntapVersion(value: boolean | cdktf.IResolvable) {
    this._upgradeOntapVersion = value;
  }
  public resetUpgradeOntapVersion() {
    this._upgradeOntapVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeOntapVersionInput() {
    return this._upgradeOntapVersion;
  }

  // use_latest_version - computed: false, optional: true, required: false
  private _useLatestVersion?: boolean | cdktf.IResolvable; 
  public get useLatestVersion() {
    return this.getBooleanAttribute('use_latest_version');
  }
  public set useLatestVersion(value: boolean | cdktf.IResolvable) {
    this._useLatestVersion = value;
  }
  public resetUseLatestVersion() {
    this._useLatestVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLatestVersionInput() {
    return this._useLatestVersion;
  }

  // vpc0_firewall_rule_name - computed: false, optional: true, required: false
  private _vpc0FirewallRuleName?: string; 
  public get vpc0FirewallRuleName() {
    return this.getStringAttribute('vpc0_firewall_rule_name');
  }
  public set vpc0FirewallRuleName(value: string) {
    this._vpc0FirewallRuleName = value;
  }
  public resetVpc0FirewallRuleName() {
    this._vpc0FirewallRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpc0FirewallRuleNameInput() {
    return this._vpc0FirewallRuleName;
  }

  // vpc0_firewall_rule_tag_name - computed: false, optional: true, required: false
  private _vpc0FirewallRuleTagName?: string; 
  public get vpc0FirewallRuleTagName() {
    return this.getStringAttribute('vpc0_firewall_rule_tag_name');
  }
  public set vpc0FirewallRuleTagName(value: string) {
    this._vpc0FirewallRuleTagName = value;
  }
  public resetVpc0FirewallRuleTagName() {
    this._vpc0FirewallRuleTagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpc0FirewallRuleTagNameInput() {
    return this._vpc0FirewallRuleTagName;
  }

  // vpc0_node_and_data_connectivity - computed: false, optional: true, required: false
  private _vpc0NodeAndDataConnectivity?: string; 
  public get vpc0NodeAndDataConnectivity() {
    return this.getStringAttribute('vpc0_node_and_data_connectivity');
  }
  public set vpc0NodeAndDataConnectivity(value: string) {
    this._vpc0NodeAndDataConnectivity = value;
  }
  public resetVpc0NodeAndDataConnectivity() {
    this._vpc0NodeAndDataConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpc0NodeAndDataConnectivityInput() {
    return this._vpc0NodeAndDataConnectivity;
  }

  // vpc1_cluster_connectivity - computed: false, optional: true, required: false
  private _vpc1ClusterConnectivity?: string; 
  public get vpc1ClusterConnectivity() {
    return this.getStringAttribute('vpc1_cluster_connectivity');
  }
  public set vpc1ClusterConnectivity(value: string) {
    this._vpc1ClusterConnectivity = value;
  }
  public resetVpc1ClusterConnectivity() {
    this._vpc1ClusterConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpc1ClusterConnectivityInput() {
    return this._vpc1ClusterConnectivity;
  }

  // vpc1_firewall_rule_name - computed: false, optional: true, required: false
  private _vpc1FirewallRuleName?: string; 
  public get vpc1FirewallRuleName() {
    return this.getStringAttribute('vpc1_firewall_rule_name');
  }
  public set vpc1FirewallRuleName(value: string) {
    this._vpc1FirewallRuleName = value;
  }
  public resetVpc1FirewallRuleName() {
    this._vpc1FirewallRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpc1FirewallRuleNameInput() {
    return this._vpc1FirewallRuleName;
  }

  // vpc1_firewall_rule_tag_name - computed: false, optional: true, required: false
  private _vpc1FirewallRuleTagName?: string; 
  public get vpc1FirewallRuleTagName() {
    return this.getStringAttribute('vpc1_firewall_rule_tag_name');
  }
  public set vpc1FirewallRuleTagName(value: string) {
    this._vpc1FirewallRuleTagName = value;
  }
  public resetVpc1FirewallRuleTagName() {
    this._vpc1FirewallRuleTagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpc1FirewallRuleTagNameInput() {
    return this._vpc1FirewallRuleTagName;
  }

  // vpc2_firewall_rule_name - computed: false, optional: true, required: false
  private _vpc2FirewallRuleName?: string; 
  public get vpc2FirewallRuleName() {
    return this.getStringAttribute('vpc2_firewall_rule_name');
  }
  public set vpc2FirewallRuleName(value: string) {
    this._vpc2FirewallRuleName = value;
  }
  public resetVpc2FirewallRuleName() {
    this._vpc2FirewallRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpc2FirewallRuleNameInput() {
    return this._vpc2FirewallRuleName;
  }

  // vpc2_firewall_rule_tag_name - computed: false, optional: true, required: false
  private _vpc2FirewallRuleTagName?: string; 
  public get vpc2FirewallRuleTagName() {
    return this.getStringAttribute('vpc2_firewall_rule_tag_name');
  }
  public set vpc2FirewallRuleTagName(value: string) {
    this._vpc2FirewallRuleTagName = value;
  }
  public resetVpc2FirewallRuleTagName() {
    this._vpc2FirewallRuleTagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpc2FirewallRuleTagNameInput() {
    return this._vpc2FirewallRuleTagName;
  }

  // vpc2_ha_connectivity - computed: false, optional: true, required: false
  private _vpc2HaConnectivity?: string; 
  public get vpc2HaConnectivity() {
    return this.getStringAttribute('vpc2_ha_connectivity');
  }
  public set vpc2HaConnectivity(value: string) {
    this._vpc2HaConnectivity = value;
  }
  public resetVpc2HaConnectivity() {
    this._vpc2HaConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpc2HaConnectivityInput() {
    return this._vpc2HaConnectivity;
  }

  // vpc3_data_replication - computed: false, optional: true, required: false
  private _vpc3DataReplication?: string; 
  public get vpc3DataReplication() {
    return this.getStringAttribute('vpc3_data_replication');
  }
  public set vpc3DataReplication(value: string) {
    this._vpc3DataReplication = value;
  }
  public resetVpc3DataReplication() {
    this._vpc3DataReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpc3DataReplicationInput() {
    return this._vpc3DataReplication;
  }

  // vpc3_firewall_rule_name - computed: false, optional: true, required: false
  private _vpc3FirewallRuleName?: string; 
  public get vpc3FirewallRuleName() {
    return this.getStringAttribute('vpc3_firewall_rule_name');
  }
  public set vpc3FirewallRuleName(value: string) {
    this._vpc3FirewallRuleName = value;
  }
  public resetVpc3FirewallRuleName() {
    this._vpc3FirewallRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpc3FirewallRuleNameInput() {
    return this._vpc3FirewallRuleName;
  }

  // vpc3_firewall_rule_tag_name - computed: false, optional: true, required: false
  private _vpc3FirewallRuleTagName?: string; 
  public get vpc3FirewallRuleTagName() {
    return this.getStringAttribute('vpc3_firewall_rule_tag_name');
  }
  public set vpc3FirewallRuleTagName(value: string) {
    this._vpc3FirewallRuleTagName = value;
  }
  public resetVpc3FirewallRuleTagName() {
    this._vpc3FirewallRuleTagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpc3FirewallRuleTagNameInput() {
    return this._vpc3FirewallRuleTagName;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // worm_retention_period_length - computed: false, optional: true, required: false
  private _wormRetentionPeriodLength?: number; 
  public get wormRetentionPeriodLength() {
    return this.getNumberAttribute('worm_retention_period_length');
  }
  public set wormRetentionPeriodLength(value: number) {
    this._wormRetentionPeriodLength = value;
  }
  public resetWormRetentionPeriodLength() {
    this._wormRetentionPeriodLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wormRetentionPeriodLengthInput() {
    return this._wormRetentionPeriodLength;
  }

  // worm_retention_period_unit - computed: false, optional: true, required: false
  private _wormRetentionPeriodUnit?: string; 
  public get wormRetentionPeriodUnit() {
    return this.getStringAttribute('worm_retention_period_unit');
  }
  public set wormRetentionPeriodUnit(value: string) {
    this._wormRetentionPeriodUnit = value;
  }
  public resetWormRetentionPeriodUnit() {
    this._wormRetentionPeriodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wormRetentionPeriodUnitInput() {
    return this._wormRetentionPeriodUnit;
  }

  // writing_speed_state - computed: true, optional: true, required: false
  private _writingSpeedState?: string; 
  public get writingSpeedState() {
    return this.getStringAttribute('writing_speed_state');
  }
  public set writingSpeedState(value: string) {
    this._writingSpeedState = value;
  }
  public resetWritingSpeedState() {
    this._writingSpeedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writingSpeedStateInput() {
    return this._writingSpeedState;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // gcp_label - computed: false, optional: true, required: false
  private _gcpLabel = new CvoGcpGcpLabelList(this, "gcp_label", true);
  public get gcpLabel() {
    return this._gcpLabel;
  }
  public putGcpLabel(value: CvoGcpGcpLabel[] | cdktf.IResolvable) {
    this._gcpLabel.internalValue = value;
  }
  public resetGcpLabel() {
    this._gcpLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpLabelInput() {
    return this._gcpLabel.internalValue;
  }

  // svm - computed: false, optional: true, required: false
  private _svm = new CvoGcpSvmList(this, "svm", true);
  public get svm() {
    return this._svm;
  }
  public putSvm(value: CvoGcpSvm[] | cdktf.IResolvable) {
    this._svm.internalValue = value;
  }
  public resetSvm() {
    this._svm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_volumes_to_cbs: cdktf.booleanToTerraform(this._backupVolumesToCbs),
      capacity_package_name: cdktf.stringToTerraform(this._capacityPackageName),
      capacity_tier: cdktf.stringToTerraform(this._capacityTier),
      client_id: cdktf.stringToTerraform(this._clientId),
      connector_ip: cdktf.stringToTerraform(this._connectorIp),
      data_encryption_type: cdktf.stringToTerraform(this._dataEncryptionType),
      deployment_mode: cdktf.stringToTerraform(this._deploymentMode),
      enable_compliance: cdktf.booleanToTerraform(this._enableCompliance),
      firewall_ip_ranges: cdktf.booleanToTerraform(this._firewallIpRanges),
      firewall_rule: cdktf.stringToTerraform(this._firewallRule),
      firewall_tag_name_rule: cdktf.stringToTerraform(this._firewallTagNameRule),
      flash_cache: cdktf.booleanToTerraform(this._flashCache),
      gcp_encryption_parameters: cdktf.stringToTerraform(this._gcpEncryptionParameters),
      gcp_service_account: cdktf.stringToTerraform(this._gcpServiceAccount),
      gcp_volume_size: cdktf.numberToTerraform(this._gcpVolumeSize),
      gcp_volume_size_unit: cdktf.stringToTerraform(this._gcpVolumeSizeUnit),
      gcp_volume_type: cdktf.stringToTerraform(this._gcpVolumeType),
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      is_ha: cdktf.booleanToTerraform(this._isHa),
      license_type: cdktf.stringToTerraform(this._licenseType),
      mediator_zone: cdktf.stringToTerraform(this._mediatorZone),
      name: cdktf.stringToTerraform(this._name),
      network_project_id: cdktf.stringToTerraform(this._networkProjectId),
      node1_zone: cdktf.stringToTerraform(this._node1Zone),
      node2_zone: cdktf.stringToTerraform(this._node2Zone),
      nss_account: cdktf.stringToTerraform(this._nssAccount),
      ontap_version: cdktf.stringToTerraform(this._ontapVersion),
      platform_serial_number_node1: cdktf.stringToTerraform(this._platformSerialNumberNode1),
      platform_serial_number_node2: cdktf.stringToTerraform(this._platformSerialNumberNode2),
      project_id: cdktf.stringToTerraform(this._projectId),
      provided_license: cdktf.stringToTerraform(this._providedLicense),
      retries: cdktf.numberToTerraform(this._retries),
      saas_subscription_id: cdktf.stringToTerraform(this._saasSubscriptionId),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      subnet0_node_and_data_connectivity: cdktf.stringToTerraform(this._subnet0NodeAndDataConnectivity),
      subnet1_cluster_connectivity: cdktf.stringToTerraform(this._subnet1ClusterConnectivity),
      subnet2_ha_connectivity: cdktf.stringToTerraform(this._subnet2HaConnectivity),
      subnet3_data_replication: cdktf.stringToTerraform(this._subnet3DataReplication),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      svm_name: cdktf.stringToTerraform(this._svmName),
      svm_password: cdktf.stringToTerraform(this._svmPassword),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      tier_level: cdktf.stringToTerraform(this._tierLevel),
      upgrade_ontap_version: cdktf.booleanToTerraform(this._upgradeOntapVersion),
      use_latest_version: cdktf.booleanToTerraform(this._useLatestVersion),
      vpc0_firewall_rule_name: cdktf.stringToTerraform(this._vpc0FirewallRuleName),
      vpc0_firewall_rule_tag_name: cdktf.stringToTerraform(this._vpc0FirewallRuleTagName),
      vpc0_node_and_data_connectivity: cdktf.stringToTerraform(this._vpc0NodeAndDataConnectivity),
      vpc1_cluster_connectivity: cdktf.stringToTerraform(this._vpc1ClusterConnectivity),
      vpc1_firewall_rule_name: cdktf.stringToTerraform(this._vpc1FirewallRuleName),
      vpc1_firewall_rule_tag_name: cdktf.stringToTerraform(this._vpc1FirewallRuleTagName),
      vpc2_firewall_rule_name: cdktf.stringToTerraform(this._vpc2FirewallRuleName),
      vpc2_firewall_rule_tag_name: cdktf.stringToTerraform(this._vpc2FirewallRuleTagName),
      vpc2_ha_connectivity: cdktf.stringToTerraform(this._vpc2HaConnectivity),
      vpc3_data_replication: cdktf.stringToTerraform(this._vpc3DataReplication),
      vpc3_firewall_rule_name: cdktf.stringToTerraform(this._vpc3FirewallRuleName),
      vpc3_firewall_rule_tag_name: cdktf.stringToTerraform(this._vpc3FirewallRuleTagName),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      worm_retention_period_length: cdktf.numberToTerraform(this._wormRetentionPeriodLength),
      worm_retention_period_unit: cdktf.stringToTerraform(this._wormRetentionPeriodUnit),
      writing_speed_state: cdktf.stringToTerraform(this._writingSpeedState),
      zone: cdktf.stringToTerraform(this._zone),
      gcp_label: cdktf.listMapper(cvoGcpGcpLabelToTerraform, true)(this._gcpLabel.internalValue),
      svm: cdktf.listMapper(cvoGcpSvmToTerraform, true)(this._svm.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_volumes_to_cbs: {
        value: cdktf.booleanToHclTerraform(this._backupVolumesToCbs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      capacity_package_name: {
        value: cdktf.stringToHclTerraform(this._capacityPackageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_tier: {
        value: cdktf.stringToHclTerraform(this._capacityTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_ip: {
        value: cdktf.stringToHclTerraform(this._connectorIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_encryption_type: {
        value: cdktf.stringToHclTerraform(this._dataEncryptionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_mode: {
        value: cdktf.stringToHclTerraform(this._deploymentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_compliance: {
        value: cdktf.booleanToHclTerraform(this._enableCompliance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firewall_ip_ranges: {
        value: cdktf.booleanToHclTerraform(this._firewallIpRanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firewall_rule: {
        value: cdktf.stringToHclTerraform(this._firewallRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_tag_name_rule: {
        value: cdktf.stringToHclTerraform(this._firewallTagNameRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flash_cache: {
        value: cdktf.booleanToHclTerraform(this._flashCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gcp_encryption_parameters: {
        value: cdktf.stringToHclTerraform(this._gcpEncryptionParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_service_account: {
        value: cdktf.stringToHclTerraform(this._gcpServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_volume_size: {
        value: cdktf.numberToHclTerraform(this._gcpVolumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gcp_volume_size_unit: {
        value: cdktf.stringToHclTerraform(this._gcpVolumeSizeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_volume_type: {
        value: cdktf.stringToHclTerraform(this._gcpVolumeType),
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
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_ha: {
        value: cdktf.booleanToHclTerraform(this._isHa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mediator_zone: {
        value: cdktf.stringToHclTerraform(this._mediatorZone),
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
      network_project_id: {
        value: cdktf.stringToHclTerraform(this._networkProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node1_zone: {
        value: cdktf.stringToHclTerraform(this._node1Zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node2_zone: {
        value: cdktf.stringToHclTerraform(this._node2Zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nss_account: {
        value: cdktf.stringToHclTerraform(this._nssAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ontap_version: {
        value: cdktf.stringToHclTerraform(this._ontapVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_serial_number_node1: {
        value: cdktf.stringToHclTerraform(this._platformSerialNumberNode1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_serial_number_node2: {
        value: cdktf.stringToHclTerraform(this._platformSerialNumberNode2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provided_license: {
        value: cdktf.stringToHclTerraform(this._providedLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      saas_subscription_id: {
        value: cdktf.stringToHclTerraform(this._saasSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet0_node_and_data_connectivity: {
        value: cdktf.stringToHclTerraform(this._subnet0NodeAndDataConnectivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet1_cluster_connectivity: {
        value: cdktf.stringToHclTerraform(this._subnet1ClusterConnectivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet2_ha_connectivity: {
        value: cdktf.stringToHclTerraform(this._subnet2HaConnectivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet3_data_replication: {
        value: cdktf.stringToHclTerraform(this._subnet3DataReplication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_password: {
        value: cdktf.stringToHclTerraform(this._svmPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier_level: {
        value: cdktf.stringToHclTerraform(this._tierLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_ontap_version: {
        value: cdktf.booleanToHclTerraform(this._upgradeOntapVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_latest_version: {
        value: cdktf.booleanToHclTerraform(this._useLatestVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpc0_firewall_rule_name: {
        value: cdktf.stringToHclTerraform(this._vpc0FirewallRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc0_firewall_rule_tag_name: {
        value: cdktf.stringToHclTerraform(this._vpc0FirewallRuleTagName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc0_node_and_data_connectivity: {
        value: cdktf.stringToHclTerraform(this._vpc0NodeAndDataConnectivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc1_cluster_connectivity: {
        value: cdktf.stringToHclTerraform(this._vpc1ClusterConnectivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc1_firewall_rule_name: {
        value: cdktf.stringToHclTerraform(this._vpc1FirewallRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc1_firewall_rule_tag_name: {
        value: cdktf.stringToHclTerraform(this._vpc1FirewallRuleTagName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc2_firewall_rule_name: {
        value: cdktf.stringToHclTerraform(this._vpc2FirewallRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc2_firewall_rule_tag_name: {
        value: cdktf.stringToHclTerraform(this._vpc2FirewallRuleTagName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc2_ha_connectivity: {
        value: cdktf.stringToHclTerraform(this._vpc2HaConnectivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc3_data_replication: {
        value: cdktf.stringToHclTerraform(this._vpc3DataReplication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc3_firewall_rule_name: {
        value: cdktf.stringToHclTerraform(this._vpc3FirewallRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc3_firewall_rule_tag_name: {
        value: cdktf.stringToHclTerraform(this._vpc3FirewallRuleTagName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
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
      worm_retention_period_length: {
        value: cdktf.numberToHclTerraform(this._wormRetentionPeriodLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      worm_retention_period_unit: {
        value: cdktf.stringToHclTerraform(this._wormRetentionPeriodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      writing_speed_state: {
        value: cdktf.stringToHclTerraform(this._writingSpeedState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_label: {
        value: cdktf.listMapperHcl(cvoGcpGcpLabelToHclTerraform, true)(this._gcpLabel.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CvoGcpGcpLabelList",
      },
      svm: {
        value: cdktf.listMapperHcl(cvoGcpSvmToHclTerraform, true)(this._svm.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CvoGcpSvmList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
