// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#autoscale_polling_interval Cloud#autoscale_polling_interval}
  */
  readonly autoscalePollingInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#dhcp_enabled Cloud#dhcp_enabled}
  */
  readonly dhcpEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#dns_provider_ref Cloud#dns_provider_ref}
  */
  readonly dnsProviderRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#dns_resolution_on_se Cloud#dns_resolution_on_se}
  */
  readonly dnsResolutionOnSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#east_west_dns_provider_ref Cloud#east_west_dns_provider_ref}
  */
  readonly eastWestDnsProviderRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#east_west_ipam_provider_ref Cloud#east_west_ipam_provider_ref}
  */
  readonly eastWestIpamProviderRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#enable_vip_on_all_interfaces Cloud#enable_vip_on_all_interfaces}
  */
  readonly enableVipOnAllInterfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#enable_vip_static_routes Cloud#enable_vip_static_routes}
  */
  readonly enableVipStaticRoutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#id Cloud#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ip6_autocfg_enabled Cloud#ip6_autocfg_enabled}
  */
  readonly ip6AutocfgEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ipam_provider_ref Cloud#ipam_provider_ref}
  */
  readonly ipamProviderRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#license_tier Cloud#license_tier}
  */
  readonly licenseTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#license_type Cloud#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#maintenance_mode Cloud#maintenance_mode}
  */
  readonly maintenanceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#metrics_polling_interval Cloud#metrics_polling_interval}
  */
  readonly metricsPollingInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#mgmt_ip_v4_enabled Cloud#mgmt_ip_v4_enabled}
  */
  readonly mgmtIpV4Enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#mgmt_ip_v6_enabled Cloud#mgmt_ip_v6_enabled}
  */
  readonly mgmtIpV6Enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#mtu Cloud#mtu}
  */
  readonly mtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#name Cloud#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#obj_name_prefix Cloud#obj_name_prefix}
  */
  readonly objNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#prefer_static_routes Cloud#prefer_static_routes}
  */
  readonly preferStaticRoutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#resolve_fqdn_to_ipv6 Cloud#resolve_fqdn_to_ipv6}
  */
  readonly resolveFqdnToIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_group_template_ref Cloud#se_group_template_ref}
  */
  readonly seGroupTemplateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#state_based_dns_registration Cloud#state_based_dns_registration}
  */
  readonly stateBasedDnsRegistration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#tenant_ref Cloud#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#uuid Cloud#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vmc_deployment Cloud#vmc_deployment}
  */
  readonly vmcDeployment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vtype Cloud#vtype}
  */
  readonly vtype: string;
  /**
  * aws_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#aws_configuration Cloud#aws_configuration}
  */
  readonly awsConfiguration?: CloudAwsConfiguration[] | cdktf.IResolvable;
  /**
  * azure_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#azure_configuration Cloud#azure_configuration}
  */
  readonly azureConfiguration?: CloudAzureConfiguration[] | cdktf.IResolvable;
  /**
  * cloudstack_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#cloudstack_configuration Cloud#cloudstack_configuration}
  */
  readonly cloudstackConfiguration?: CloudCloudstackConfiguration[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#configpb_attributes Cloud#configpb_attributes}
  */
  readonly configpbAttributes?: CloudConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * custom_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#custom_tags Cloud#custom_tags}
  */
  readonly customTags?: CloudCustomTags[] | cdktf.IResolvable;
  /**
  * dns_resolvers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#dns_resolvers Cloud#dns_resolvers}
  */
  readonly dnsResolvers?: CloudDnsResolvers[] | cdktf.IResolvable;
  /**
  * docker_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#docker_configuration Cloud#docker_configuration}
  */
  readonly dockerConfiguration?: CloudDockerConfiguration[] | cdktf.IResolvable;
  /**
  * gcp_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#gcp_configuration Cloud#gcp_configuration}
  */
  readonly gcpConfiguration?: CloudGcpConfiguration[] | cdktf.IResolvable;
  /**
  * linuxserver_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#linuxserver_configuration Cloud#linuxserver_configuration}
  */
  readonly linuxserverConfiguration?: CloudLinuxserverConfiguration[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#markers Cloud#markers}
  */
  readonly markers?: CloudMarkers[] | cdktf.IResolvable;
  /**
  * nsxt_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#nsxt_configuration Cloud#nsxt_configuration}
  */
  readonly nsxtConfiguration?: CloudNsxtConfiguration[] | cdktf.IResolvable;
  /**
  * ntp_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ntp_configuration Cloud#ntp_configuration}
  */
  readonly ntpConfiguration?: CloudNtpConfiguration[] | cdktf.IResolvable;
  /**
  * proxy_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#proxy_configuration Cloud#proxy_configuration}
  */
  readonly proxyConfiguration?: CloudProxyConfiguration[] | cdktf.IResolvable;
  /**
  * rancher_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#rancher_configuration Cloud#rancher_configuration}
  */
  readonly rancherConfiguration?: CloudRancherConfiguration[] | cdktf.IResolvable;
  /**
  * vca_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vca_configuration Cloud#vca_configuration}
  */
  readonly vcaConfiguration?: CloudVcaConfiguration[] | cdktf.IResolvable;
  /**
  * vcenter_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vcenter_configuration Cloud#vcenter_configuration}
  */
  readonly vcenterConfiguration?: CloudVcenterConfiguration[] | cdktf.IResolvable;
}
export interface CloudAwsConfigurationEbsEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#master_key Cloud#master_key}
  */
  readonly masterKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#mode Cloud#mode}
  */
  readonly mode?: string;
}

export function cloudAwsConfigurationEbsEncryptionToTerraform(struct?: CloudAwsConfigurationEbsEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master_key: cdktf.stringToTerraform(struct!.masterKey),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function cloudAwsConfigurationEbsEncryptionToHclTerraform(struct?: CloudAwsConfigurationEbsEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    master_key: {
      value: cdktf.stringToHclTerraform(struct!.masterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsConfigurationEbsEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAwsConfigurationEbsEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterKey = this._masterKey;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsConfigurationEbsEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._masterKey = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._masterKey = value.masterKey;
      this._mode = value.mode;
    }
  }

  // master_key - computed: true, optional: true, required: false
  private _masterKey?: string; 
  public get masterKey() {
    return this.getStringAttribute('master_key');
  }
  public set masterKey(value: string) {
    this._masterKey = value;
  }
  public resetMasterKey() {
    this._masterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterKeyInput() {
    return this._masterKey;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class CloudAwsConfigurationEbsEncryptionList extends cdktf.ComplexList {
  public internalValue? : CloudAwsConfigurationEbsEncryption[] | cdktf.IResolvable

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
  public get(index: number): CloudAwsConfigurationEbsEncryptionOutputReference {
    return new CloudAwsConfigurationEbsEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudAwsConfigurationS3Encryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#master_key Cloud#master_key}
  */
  readonly masterKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#mode Cloud#mode}
  */
  readonly mode?: string;
}

export function cloudAwsConfigurationS3EncryptionToTerraform(struct?: CloudAwsConfigurationS3Encryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master_key: cdktf.stringToTerraform(struct!.masterKey),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function cloudAwsConfigurationS3EncryptionToHclTerraform(struct?: CloudAwsConfigurationS3Encryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    master_key: {
      value: cdktf.stringToHclTerraform(struct!.masterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsConfigurationS3EncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAwsConfigurationS3Encryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterKey = this._masterKey;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsConfigurationS3Encryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._masterKey = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._masterKey = value.masterKey;
      this._mode = value.mode;
    }
  }

  // master_key - computed: true, optional: true, required: false
  private _masterKey?: string; 
  public get masterKey() {
    return this.getStringAttribute('master_key');
  }
  public set masterKey(value: string) {
    this._masterKey = value;
  }
  public resetMasterKey() {
    this._masterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterKeyInput() {
    return this._masterKey;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class CloudAwsConfigurationS3EncryptionList extends cdktf.ComplexList {
  public internalValue? : CloudAwsConfigurationS3Encryption[] | cdktf.IResolvable

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
  public get(index: number): CloudAwsConfigurationS3EncryptionOutputReference {
    return new CloudAwsConfigurationS3EncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudAwsConfigurationSqsEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#master_key Cloud#master_key}
  */
  readonly masterKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#mode Cloud#mode}
  */
  readonly mode?: string;
}

export function cloudAwsConfigurationSqsEncryptionToTerraform(struct?: CloudAwsConfigurationSqsEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master_key: cdktf.stringToTerraform(struct!.masterKey),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function cloudAwsConfigurationSqsEncryptionToHclTerraform(struct?: CloudAwsConfigurationSqsEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    master_key: {
      value: cdktf.stringToHclTerraform(struct!.masterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsConfigurationSqsEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAwsConfigurationSqsEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterKey = this._masterKey;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsConfigurationSqsEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._masterKey = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._masterKey = value.masterKey;
      this._mode = value.mode;
    }
  }

  // master_key - computed: true, optional: true, required: false
  private _masterKey?: string; 
  public get masterKey() {
    return this.getStringAttribute('master_key');
  }
  public set masterKey(value: string) {
    this._masterKey = value;
  }
  public resetMasterKey() {
    this._masterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterKeyInput() {
    return this._masterKey;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class CloudAwsConfigurationSqsEncryptionList extends cdktf.ComplexList {
  public internalValue? : CloudAwsConfigurationSqsEncryption[] | cdktf.IResolvable

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
  public get(index: number): CloudAwsConfigurationSqsEncryptionOutputReference {
    return new CloudAwsConfigurationSqsEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudAwsConfigurationZones {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#availability_zone Cloud#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#mgmt_network_name Cloud#mgmt_network_name}
  */
  readonly mgmtNetworkName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#mgmt_network_uuid Cloud#mgmt_network_uuid}
  */
  readonly mgmtNetworkUuid?: string;
}

export function cloudAwsConfigurationZonesToTerraform(struct?: CloudAwsConfigurationZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    mgmt_network_name: cdktf.stringToTerraform(struct!.mgmtNetworkName),
    mgmt_network_uuid: cdktf.stringToTerraform(struct!.mgmtNetworkUuid),
  }
}


export function cloudAwsConfigurationZonesToHclTerraform(struct?: CloudAwsConfigurationZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_network_name: {
      value: cdktf.stringToHclTerraform(struct!.mgmtNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_network_uuid: {
      value: cdktf.stringToHclTerraform(struct!.mgmtNetworkUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsConfigurationZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAwsConfigurationZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._mgmtNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtNetworkName = this._mgmtNetworkName;
    }
    if (this._mgmtNetworkUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtNetworkUuid = this._mgmtNetworkUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsConfigurationZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._mgmtNetworkName = undefined;
      this._mgmtNetworkUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._mgmtNetworkName = value.mgmtNetworkName;
      this._mgmtNetworkUuid = value.mgmtNetworkUuid;
    }
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // mgmt_network_name - computed: false, optional: false, required: true
  private _mgmtNetworkName?: string; 
  public get mgmtNetworkName() {
    return this.getStringAttribute('mgmt_network_name');
  }
  public set mgmtNetworkName(value: string) {
    this._mgmtNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtNetworkNameInput() {
    return this._mgmtNetworkName;
  }

  // mgmt_network_uuid - computed: true, optional: true, required: false
  private _mgmtNetworkUuid?: string; 
  public get mgmtNetworkUuid() {
    return this.getStringAttribute('mgmt_network_uuid');
  }
  public set mgmtNetworkUuid(value: string) {
    this._mgmtNetworkUuid = value;
  }
  public resetMgmtNetworkUuid() {
    this._mgmtNetworkUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtNetworkUuidInput() {
    return this._mgmtNetworkUuid;
  }
}

export class CloudAwsConfigurationZonesList extends cdktf.ComplexList {
  public internalValue? : CloudAwsConfigurationZones[] | cdktf.IResolvable

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
  public get(index: number): CloudAwsConfigurationZonesOutputReference {
    return new CloudAwsConfigurationZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudAwsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#access_key_id Cloud#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#asg_poll_interval Cloud#asg_poll_interval}
  */
  readonly asgPollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#free_elasticips Cloud#free_elasticips}
  */
  readonly freeElasticips?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#iam_assume_role Cloud#iam_assume_role}
  */
  readonly iamAssumeRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#publish_vip_to_public_zone Cloud#publish_vip_to_public_zone}
  */
  readonly publishVipToPublicZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#region Cloud#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#route53_integration Cloud#route53_integration}
  */
  readonly route53Integration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#secret_access_key Cloud#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ttl Cloud#ttl}
  */
  readonly ttl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#use_iam_roles Cloud#use_iam_roles}
  */
  readonly useIamRoles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#use_sns_sqs Cloud#use_sns_sqs}
  */
  readonly useSnsSqs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vpc Cloud#vpc}
  */
  readonly vpc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vpc_id Cloud#vpc_id}
  */
  readonly vpcId: string;
  /**
  * ebs_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ebs_encryption Cloud#ebs_encryption}
  */
  readonly ebsEncryption?: CloudAwsConfigurationEbsEncryption[] | cdktf.IResolvable;
  /**
  * s3_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#s3_encryption Cloud#s3_encryption}
  */
  readonly s3Encryption?: CloudAwsConfigurationS3Encryption[] | cdktf.IResolvable;
  /**
  * sqs_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#sqs_encryption Cloud#sqs_encryption}
  */
  readonly sqsEncryption?: CloudAwsConfigurationSqsEncryption[] | cdktf.IResolvable;
  /**
  * zones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#zones Cloud#zones}
  */
  readonly zones?: CloudAwsConfigurationZones[] | cdktf.IResolvable;
}

export function cloudAwsConfigurationToTerraform(struct?: CloudAwsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    asg_poll_interval: cdktf.stringToTerraform(struct!.asgPollInterval),
    free_elasticips: cdktf.stringToTerraform(struct!.freeElasticips),
    iam_assume_role: cdktf.stringToTerraform(struct!.iamAssumeRole),
    publish_vip_to_public_zone: cdktf.stringToTerraform(struct!.publishVipToPublicZone),
    region: cdktf.stringToTerraform(struct!.region),
    route53_integration: cdktf.stringToTerraform(struct!.route53Integration),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    use_iam_roles: cdktf.stringToTerraform(struct!.useIamRoles),
    use_sns_sqs: cdktf.stringToTerraform(struct!.useSnsSqs),
    vpc: cdktf.stringToTerraform(struct!.vpc),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    ebs_encryption: cdktf.listMapper(cloudAwsConfigurationEbsEncryptionToTerraform, true)(struct!.ebsEncryption),
    s3_encryption: cdktf.listMapper(cloudAwsConfigurationS3EncryptionToTerraform, true)(struct!.s3Encryption),
    sqs_encryption: cdktf.listMapper(cloudAwsConfigurationSqsEncryptionToTerraform, true)(struct!.sqsEncryption),
    zones: cdktf.listMapper(cloudAwsConfigurationZonesToTerraform, true)(struct!.zones),
  }
}


export function cloudAwsConfigurationToHclTerraform(struct?: CloudAwsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asg_poll_interval: {
      value: cdktf.stringToHclTerraform(struct!.asgPollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    free_elasticips: {
      value: cdktf.stringToHclTerraform(struct!.freeElasticips),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_assume_role: {
      value: cdktf.stringToHclTerraform(struct!.iamAssumeRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publish_vip_to_public_zone: {
      value: cdktf.stringToHclTerraform(struct!.publishVipToPublicZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53_integration: {
      value: cdktf.stringToHclTerraform(struct!.route53Integration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_iam_roles: {
      value: cdktf.stringToHclTerraform(struct!.useIamRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_sns_sqs: {
      value: cdktf.stringToHclTerraform(struct!.useSnsSqs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: cdktf.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs_encryption: {
      value: cdktf.listMapperHcl(cloudAwsConfigurationEbsEncryptionToHclTerraform, true)(struct!.ebsEncryption),
      isBlock: true,
      type: "set",
      storageClassType: "CloudAwsConfigurationEbsEncryptionList",
    },
    s3_encryption: {
      value: cdktf.listMapperHcl(cloudAwsConfigurationS3EncryptionToHclTerraform, true)(struct!.s3Encryption),
      isBlock: true,
      type: "set",
      storageClassType: "CloudAwsConfigurationS3EncryptionList",
    },
    sqs_encryption: {
      value: cdktf.listMapperHcl(cloudAwsConfigurationSqsEncryptionToHclTerraform, true)(struct!.sqsEncryption),
      isBlock: true,
      type: "set",
      storageClassType: "CloudAwsConfigurationSqsEncryptionList",
    },
    zones: {
      value: cdktf.listMapperHcl(cloudAwsConfigurationZonesToHclTerraform, true)(struct!.zones),
      isBlock: true,
      type: "list",
      storageClassType: "CloudAwsConfigurationZonesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAwsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAwsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._asgPollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.asgPollInterval = this._asgPollInterval;
    }
    if (this._freeElasticips !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeElasticips = this._freeElasticips;
    }
    if (this._iamAssumeRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamAssumeRole = this._iamAssumeRole;
    }
    if (this._publishVipToPublicZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishVipToPublicZone = this._publishVipToPublicZone;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._route53Integration !== undefined) {
      hasAnyValues = true;
      internalValueResult.route53Integration = this._route53Integration;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._useIamRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIamRoles = this._useIamRoles;
    }
    if (this._useSnsSqs !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSnsSqs = this._useSnsSqs;
    }
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._ebsEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsEncryption = this._ebsEncryption?.internalValue;
    }
    if (this._s3Encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Encryption = this._s3Encryption?.internalValue;
    }
    if (this._sqsEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsEncryption = this._sqsEncryption?.internalValue;
    }
    if (this._zones?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAwsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._asgPollInterval = undefined;
      this._freeElasticips = undefined;
      this._iamAssumeRole = undefined;
      this._publishVipToPublicZone = undefined;
      this._region = undefined;
      this._route53Integration = undefined;
      this._secretAccessKey = undefined;
      this._ttl = undefined;
      this._useIamRoles = undefined;
      this._useSnsSqs = undefined;
      this._vpc = undefined;
      this._vpcId = undefined;
      this._ebsEncryption.internalValue = undefined;
      this._s3Encryption.internalValue = undefined;
      this._sqsEncryption.internalValue = undefined;
      this._zones.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._asgPollInterval = value.asgPollInterval;
      this._freeElasticips = value.freeElasticips;
      this._iamAssumeRole = value.iamAssumeRole;
      this._publishVipToPublicZone = value.publishVipToPublicZone;
      this._region = value.region;
      this._route53Integration = value.route53Integration;
      this._secretAccessKey = value.secretAccessKey;
      this._ttl = value.ttl;
      this._useIamRoles = value.useIamRoles;
      this._useSnsSqs = value.useSnsSqs;
      this._vpc = value.vpc;
      this._vpcId = value.vpcId;
      this._ebsEncryption.internalValue = value.ebsEncryption;
      this._s3Encryption.internalValue = value.s3Encryption;
      this._sqsEncryption.internalValue = value.sqsEncryption;
      this._zones.internalValue = value.zones;
    }
  }

  // access_key_id - computed: true, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // asg_poll_interval - computed: false, optional: true, required: false
  private _asgPollInterval?: string; 
  public get asgPollInterval() {
    return this.getStringAttribute('asg_poll_interval');
  }
  public set asgPollInterval(value: string) {
    this._asgPollInterval = value;
  }
  public resetAsgPollInterval() {
    this._asgPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asgPollIntervalInput() {
    return this._asgPollInterval;
  }

  // free_elasticips - computed: false, optional: true, required: false
  private _freeElasticips?: string; 
  public get freeElasticips() {
    return this.getStringAttribute('free_elasticips');
  }
  public set freeElasticips(value: string) {
    this._freeElasticips = value;
  }
  public resetFreeElasticips() {
    this._freeElasticips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeElasticipsInput() {
    return this._freeElasticips;
  }

  // iam_assume_role - computed: true, optional: true, required: false
  private _iamAssumeRole?: string; 
  public get iamAssumeRole() {
    return this.getStringAttribute('iam_assume_role');
  }
  public set iamAssumeRole(value: string) {
    this._iamAssumeRole = value;
  }
  public resetIamAssumeRole() {
    this._iamAssumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamAssumeRoleInput() {
    return this._iamAssumeRole;
  }

  // publish_vip_to_public_zone - computed: false, optional: true, required: false
  private _publishVipToPublicZone?: string; 
  public get publishVipToPublicZone() {
    return this.getStringAttribute('publish_vip_to_public_zone');
  }
  public set publishVipToPublicZone(value: string) {
    this._publishVipToPublicZone = value;
  }
  public resetPublishVipToPublicZone() {
    this._publishVipToPublicZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishVipToPublicZoneInput() {
    return this._publishVipToPublicZone;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // route53_integration - computed: false, optional: true, required: false
  private _route53Integration?: string; 
  public get route53Integration() {
    return this.getStringAttribute('route53_integration');
  }
  public set route53Integration(value: string) {
    this._route53Integration = value;
  }
  public resetRoute53Integration() {
    this._route53Integration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get route53IntegrationInput() {
    return this._route53Integration;
  }

  // secret_access_key - computed: true, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // use_iam_roles - computed: false, optional: true, required: false
  private _useIamRoles?: string; 
  public get useIamRoles() {
    return this.getStringAttribute('use_iam_roles');
  }
  public set useIamRoles(value: string) {
    this._useIamRoles = value;
  }
  public resetUseIamRoles() {
    this._useIamRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIamRolesInput() {
    return this._useIamRoles;
  }

  // use_sns_sqs - computed: false, optional: true, required: false
  private _useSnsSqs?: string; 
  public get useSnsSqs() {
    return this.getStringAttribute('use_sns_sqs');
  }
  public set useSnsSqs(value: string) {
    this._useSnsSqs = value;
  }
  public resetUseSnsSqs() {
    this._useSnsSqs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSnsSqsInput() {
    return this._useSnsSqs;
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // ebs_encryption - computed: false, optional: true, required: false
  private _ebsEncryption = new CloudAwsConfigurationEbsEncryptionList(this, "ebs_encryption", true);
  public get ebsEncryption() {
    return this._ebsEncryption;
  }
  public putEbsEncryption(value: CloudAwsConfigurationEbsEncryption[] | cdktf.IResolvable) {
    this._ebsEncryption.internalValue = value;
  }
  public resetEbsEncryption() {
    this._ebsEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsEncryptionInput() {
    return this._ebsEncryption.internalValue;
  }

  // s3_encryption - computed: false, optional: true, required: false
  private _s3Encryption = new CloudAwsConfigurationS3EncryptionList(this, "s3_encryption", true);
  public get s3Encryption() {
    return this._s3Encryption;
  }
  public putS3Encryption(value: CloudAwsConfigurationS3Encryption[] | cdktf.IResolvable) {
    this._s3Encryption.internalValue = value;
  }
  public resetS3Encryption() {
    this._s3Encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EncryptionInput() {
    return this._s3Encryption.internalValue;
  }

  // sqs_encryption - computed: false, optional: true, required: false
  private _sqsEncryption = new CloudAwsConfigurationSqsEncryptionList(this, "sqs_encryption", true);
  public get sqsEncryption() {
    return this._sqsEncryption;
  }
  public putSqsEncryption(value: CloudAwsConfigurationSqsEncryption[] | cdktf.IResolvable) {
    this._sqsEncryption.internalValue = value;
  }
  public resetSqsEncryption() {
    this._sqsEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsEncryptionInput() {
    return this._sqsEncryption.internalValue;
  }

  // zones - computed: false, optional: true, required: false
  private _zones = new CloudAwsConfigurationZonesList(this, "zones", false);
  public get zones() {
    return this._zones;
  }
  public putZones(value: CloudAwsConfigurationZones[] | cdktf.IResolvable) {
    this._zones.internalValue = value;
  }
  public resetZones() {
    this._zones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones.internalValue;
  }
}

export class CloudAwsConfigurationList extends cdktf.ComplexList {
  public internalValue? : CloudAwsConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CloudAwsConfigurationOutputReference {
    return new CloudAwsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudAzureConfigurationNetworkInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#management_network_id Cloud#management_network_id}
  */
  readonly managementNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_network_id Cloud#se_network_id}
  */
  readonly seNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#virtual_network_id Cloud#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
}

export function cloudAzureConfigurationNetworkInfoToTerraform(struct?: CloudAzureConfigurationNetworkInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management_network_id: cdktf.stringToTerraform(struct!.managementNetworkId),
    se_network_id: cdktf.stringToTerraform(struct!.seNetworkId),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
  }
}


export function cloudAzureConfigurationNetworkInfoToHclTerraform(struct?: CloudAzureConfigurationNetworkInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    management_network_id: {
      value: cdktf.stringToHclTerraform(struct!.managementNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_network_id: {
      value: cdktf.stringToHclTerraform(struct!.seNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureConfigurationNetworkInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAzureConfigurationNetworkInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managementNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementNetworkId = this._managementNetworkId;
    }
    if (this._seNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.seNetworkId = this._seNetworkId;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureConfigurationNetworkInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managementNetworkId = undefined;
      this._seNetworkId = undefined;
      this._virtualNetworkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managementNetworkId = value.managementNetworkId;
      this._seNetworkId = value.seNetworkId;
      this._virtualNetworkId = value.virtualNetworkId;
    }
  }

  // management_network_id - computed: true, optional: true, required: false
  private _managementNetworkId?: string; 
  public get managementNetworkId() {
    return this.getStringAttribute('management_network_id');
  }
  public set managementNetworkId(value: string) {
    this._managementNetworkId = value;
  }
  public resetManagementNetworkId() {
    this._managementNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementNetworkIdInput() {
    return this._managementNetworkId;
  }

  // se_network_id - computed: true, optional: true, required: false
  private _seNetworkId?: string; 
  public get seNetworkId() {
    return this.getStringAttribute('se_network_id');
  }
  public set seNetworkId(value: string) {
    this._seNetworkId = value;
  }
  public resetSeNetworkId() {
    this._seNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seNetworkIdInput() {
    return this._seNetworkId;
  }

  // virtual_network_id - computed: true, optional: true, required: false
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }
}

export class CloudAzureConfigurationNetworkInfoList extends cdktf.ComplexList {
  public internalValue? : CloudAzureConfigurationNetworkInfo[] | cdktf.IResolvable

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
  public get(index: number): CloudAzureConfigurationNetworkInfoOutputReference {
    return new CloudAzureConfigurationNetworkInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudAzureConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#availability_zones Cloud#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#cloud_credentials_ref Cloud#cloud_credentials_ref}
  */
  readonly cloudCredentialsRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#des_id Cloud#des_id}
  */
  readonly desId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#location Cloud#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#resource_group Cloud#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_storage_account Cloud#se_storage_account}
  */
  readonly seStorageAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#subscription_id Cloud#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#use_azure_dns Cloud#use_azure_dns}
  */
  readonly useAzureDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#use_enhanced_ha Cloud#use_enhanced_ha}
  */
  readonly useEnhancedHa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#use_managed_disks Cloud#use_managed_disks}
  */
  readonly useManagedDisks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#use_standard_alb Cloud#use_standard_alb}
  */
  readonly useStandardAlb?: string;
  /**
  * network_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#network_info Cloud#network_info}
  */
  readonly networkInfo: CloudAzureConfigurationNetworkInfo[] | cdktf.IResolvable;
}

export function cloudAzureConfigurationToTerraform(struct?: CloudAzureConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityZones),
    cloud_credentials_ref: cdktf.stringToTerraform(struct!.cloudCredentialsRef),
    des_id: cdktf.stringToTerraform(struct!.desId),
    location: cdktf.stringToTerraform(struct!.location),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    se_storage_account: cdktf.stringToTerraform(struct!.seStorageAccount),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    use_azure_dns: cdktf.stringToTerraform(struct!.useAzureDns),
    use_enhanced_ha: cdktf.stringToTerraform(struct!.useEnhancedHa),
    use_managed_disks: cdktf.stringToTerraform(struct!.useManagedDisks),
    use_standard_alb: cdktf.stringToTerraform(struct!.useStandardAlb),
    network_info: cdktf.listMapper(cloudAzureConfigurationNetworkInfoToTerraform, true)(struct!.networkInfo),
  }
}


export function cloudAzureConfigurationToHclTerraform(struct?: CloudAzureConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cloud_credentials_ref: {
      value: cdktf.stringToHclTerraform(struct!.cloudCredentialsRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    des_id: {
      value: cdktf.stringToHclTerraform(struct!.desId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_storage_account: {
      value: cdktf.stringToHclTerraform(struct!.seStorageAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_azure_dns: {
      value: cdktf.stringToHclTerraform(struct!.useAzureDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_enhanced_ha: {
      value: cdktf.stringToHclTerraform(struct!.useEnhancedHa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_managed_disks: {
      value: cdktf.stringToHclTerraform(struct!.useManagedDisks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_standard_alb: {
      value: cdktf.stringToHclTerraform(struct!.useStandardAlb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_info: {
      value: cdktf.listMapperHcl(cloudAzureConfigurationNetworkInfoToHclTerraform, true)(struct!.networkInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CloudAzureConfigurationNetworkInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudAzureConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._cloudCredentialsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredentialsRef = this._cloudCredentialsRef;
    }
    if (this._desId !== undefined) {
      hasAnyValues = true;
      internalValueResult.desId = this._desId;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._seStorageAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.seStorageAccount = this._seStorageAccount;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._useAzureDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAzureDns = this._useAzureDns;
    }
    if (this._useEnhancedHa !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEnhancedHa = this._useEnhancedHa;
    }
    if (this._useManagedDisks !== undefined) {
      hasAnyValues = true;
      internalValueResult.useManagedDisks = this._useManagedDisks;
    }
    if (this._useStandardAlb !== undefined) {
      hasAnyValues = true;
      internalValueResult.useStandardAlb = this._useStandardAlb;
    }
    if (this._networkInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInfo = this._networkInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZones = undefined;
      this._cloudCredentialsRef = undefined;
      this._desId = undefined;
      this._location = undefined;
      this._resourceGroup = undefined;
      this._seStorageAccount = undefined;
      this._subscriptionId = undefined;
      this._useAzureDns = undefined;
      this._useEnhancedHa = undefined;
      this._useManagedDisks = undefined;
      this._useStandardAlb = undefined;
      this._networkInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZones = value.availabilityZones;
      this._cloudCredentialsRef = value.cloudCredentialsRef;
      this._desId = value.desId;
      this._location = value.location;
      this._resourceGroup = value.resourceGroup;
      this._seStorageAccount = value.seStorageAccount;
      this._subscriptionId = value.subscriptionId;
      this._useAzureDns = value.useAzureDns;
      this._useEnhancedHa = value.useEnhancedHa;
      this._useManagedDisks = value.useManagedDisks;
      this._useStandardAlb = value.useStandardAlb;
      this._networkInfo.internalValue = value.networkInfo;
    }
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // cloud_credentials_ref - computed: true, optional: true, required: false
  private _cloudCredentialsRef?: string; 
  public get cloudCredentialsRef() {
    return this.getStringAttribute('cloud_credentials_ref');
  }
  public set cloudCredentialsRef(value: string) {
    this._cloudCredentialsRef = value;
  }
  public resetCloudCredentialsRef() {
    this._cloudCredentialsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredentialsRefInput() {
    return this._cloudCredentialsRef;
  }

  // des_id - computed: true, optional: true, required: false
  private _desId?: string; 
  public get desId() {
    return this.getStringAttribute('des_id');
  }
  public set desId(value: string) {
    this._desId = value;
  }
  public resetDesId() {
    this._desId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desIdInput() {
    return this._desId;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // se_storage_account - computed: true, optional: true, required: false
  private _seStorageAccount?: string; 
  public get seStorageAccount() {
    return this.getStringAttribute('se_storage_account');
  }
  public set seStorageAccount(value: string) {
    this._seStorageAccount = value;
  }
  public resetSeStorageAccount() {
    this._seStorageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seStorageAccountInput() {
    return this._seStorageAccount;
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // use_azure_dns - computed: false, optional: true, required: false
  private _useAzureDns?: string; 
  public get useAzureDns() {
    return this.getStringAttribute('use_azure_dns');
  }
  public set useAzureDns(value: string) {
    this._useAzureDns = value;
  }
  public resetUseAzureDns() {
    this._useAzureDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAzureDnsInput() {
    return this._useAzureDns;
  }

  // use_enhanced_ha - computed: false, optional: true, required: false
  private _useEnhancedHa?: string; 
  public get useEnhancedHa() {
    return this.getStringAttribute('use_enhanced_ha');
  }
  public set useEnhancedHa(value: string) {
    this._useEnhancedHa = value;
  }
  public resetUseEnhancedHa() {
    this._useEnhancedHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEnhancedHaInput() {
    return this._useEnhancedHa;
  }

  // use_managed_disks - computed: false, optional: true, required: false
  private _useManagedDisks?: string; 
  public get useManagedDisks() {
    return this.getStringAttribute('use_managed_disks');
  }
  public set useManagedDisks(value: string) {
    this._useManagedDisks = value;
  }
  public resetUseManagedDisks() {
    this._useManagedDisks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useManagedDisksInput() {
    return this._useManagedDisks;
  }

  // use_standard_alb - computed: false, optional: true, required: false
  private _useStandardAlb?: string; 
  public get useStandardAlb() {
    return this.getStringAttribute('use_standard_alb');
  }
  public set useStandardAlb(value: string) {
    this._useStandardAlb = value;
  }
  public resetUseStandardAlb() {
    this._useStandardAlb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStandardAlbInput() {
    return this._useStandardAlb;
  }

  // network_info - computed: false, optional: false, required: true
  private _networkInfo = new CloudAzureConfigurationNetworkInfoList(this, "network_info", false);
  public get networkInfo() {
    return this._networkInfo;
  }
  public putNetworkInfo(value: CloudAzureConfigurationNetworkInfo[] | cdktf.IResolvable) {
    this._networkInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInfoInput() {
    return this._networkInfo.internalValue;
  }
}

export class CloudAzureConfigurationList extends cdktf.ComplexList {
  public internalValue? : CloudAzureConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CloudAzureConfigurationOutputReference {
    return new CloudAzureConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudCloudstackConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#access_key_id Cloud#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#api_url Cloud#api_url}
  */
  readonly apiUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#cntr_public_ip Cloud#cntr_public_ip}
  */
  readonly cntrPublicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#hypervisor Cloud#hypervisor}
  */
  readonly hypervisor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#mgmt_network_name Cloud#mgmt_network_name}
  */
  readonly mgmtNetworkName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#mgmt_network_uuid Cloud#mgmt_network_uuid}
  */
  readonly mgmtNetworkUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#secret_access_key Cloud#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function cloudCloudstackConfigurationToTerraform(struct?: CloudCloudstackConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
    cntr_public_ip: cdktf.stringToTerraform(struct!.cntrPublicIp),
    hypervisor: cdktf.stringToTerraform(struct!.hypervisor),
    mgmt_network_name: cdktf.stringToTerraform(struct!.mgmtNetworkName),
    mgmt_network_uuid: cdktf.stringToTerraform(struct!.mgmtNetworkUuid),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function cloudCloudstackConfigurationToHclTerraform(struct?: CloudCloudstackConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_url: {
      value: cdktf.stringToHclTerraform(struct!.apiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cntr_public_ip: {
      value: cdktf.stringToHclTerraform(struct!.cntrPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor: {
      value: cdktf.stringToHclTerraform(struct!.hypervisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_network_name: {
      value: cdktf.stringToHclTerraform(struct!.mgmtNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_network_uuid: {
      value: cdktf.stringToHclTerraform(struct!.mgmtNetworkUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudCloudstackConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudCloudstackConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    if (this._cntrPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cntrPublicIp = this._cntrPublicIp;
    }
    if (this._hypervisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisor = this._hypervisor;
    }
    if (this._mgmtNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtNetworkName = this._mgmtNetworkName;
    }
    if (this._mgmtNetworkUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtNetworkUuid = this._mgmtNetworkUuid;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudCloudstackConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._apiUrl = undefined;
      this._cntrPublicIp = undefined;
      this._hypervisor = undefined;
      this._mgmtNetworkName = undefined;
      this._mgmtNetworkUuid = undefined;
      this._secretAccessKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._apiUrl = value.apiUrl;
      this._cntrPublicIp = value.cntrPublicIp;
      this._hypervisor = value.hypervisor;
      this._mgmtNetworkName = value.mgmtNetworkName;
      this._mgmtNetworkUuid = value.mgmtNetworkUuid;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // api_url - computed: false, optional: false, required: true
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // cntr_public_ip - computed: true, optional: true, required: false
  private _cntrPublicIp?: string; 
  public get cntrPublicIp() {
    return this.getStringAttribute('cntr_public_ip');
  }
  public set cntrPublicIp(value: string) {
    this._cntrPublicIp = value;
  }
  public resetCntrPublicIp() {
    this._cntrPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cntrPublicIpInput() {
    return this._cntrPublicIp;
  }

  // hypervisor - computed: false, optional: true, required: false
  private _hypervisor?: string; 
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }
  public set hypervisor(value: string) {
    this._hypervisor = value;
  }
  public resetHypervisor() {
    this._hypervisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor;
  }

  // mgmt_network_name - computed: false, optional: false, required: true
  private _mgmtNetworkName?: string; 
  public get mgmtNetworkName() {
    return this.getStringAttribute('mgmt_network_name');
  }
  public set mgmtNetworkName(value: string) {
    this._mgmtNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtNetworkNameInput() {
    return this._mgmtNetworkName;
  }

  // mgmt_network_uuid - computed: true, optional: true, required: false
  private _mgmtNetworkUuid?: string; 
  public get mgmtNetworkUuid() {
    return this.getStringAttribute('mgmt_network_uuid');
  }
  public set mgmtNetworkUuid(value: string) {
    this._mgmtNetworkUuid = value;
  }
  public resetMgmtNetworkUuid() {
    this._mgmtNetworkUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtNetworkUuidInput() {
    return this._mgmtNetworkUuid;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}

export class CloudCloudstackConfigurationList extends cdktf.ComplexList {
  public internalValue? : CloudCloudstackConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CloudCloudstackConfigurationOutputReference {
    return new CloudCloudstackConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#version Cloud#version}
  */
  readonly version?: string;
}

export function cloudConfigpbAttributesToTerraform(struct?: CloudConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function cloudConfigpbAttributesToHclTerraform(struct?: CloudConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class CloudConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : CloudConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): CloudConfigpbAttributesOutputReference {
    return new CloudConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudCustomTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#tag_key Cloud#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#tag_val Cloud#tag_val}
  */
  readonly tagVal?: string;
}

export function cloudCustomTagsToTerraform(struct?: CloudCustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_val: cdktf.stringToTerraform(struct!.tagVal),
  }
}


export function cloudCustomTagsToHclTerraform(struct?: CloudCustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_val: {
      value: cdktf.stringToHclTerraform(struct!.tagVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudCustomTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudCustomTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagVal = this._tagVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudCustomTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagVal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagVal = value.tagVal;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_val - computed: true, optional: true, required: false
  private _tagVal?: string; 
  public get tagVal() {
    return this.getStringAttribute('tag_val');
  }
  public set tagVal(value: string) {
    this._tagVal = value;
  }
  public resetTagVal() {
    this._tagVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValInput() {
    return this._tagVal;
  }
}

export class CloudCustomTagsList extends cdktf.ComplexList {
  public internalValue? : CloudCustomTags[] | cdktf.IResolvable

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
  public get(index: number): CloudCustomTagsOutputReference {
    return new CloudCustomTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudDnsResolversNameserverIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#addr Cloud#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#type Cloud#type}
  */
  readonly type: string;
}

export function cloudDnsResolversNameserverIpsToTerraform(struct?: CloudDnsResolversNameserverIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudDnsResolversNameserverIpsToHclTerraform(struct?: CloudDnsResolversNameserverIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDnsResolversNameserverIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudDnsResolversNameserverIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDnsResolversNameserverIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CloudDnsResolversNameserverIpsList extends cdktf.ComplexList {
  public internalValue? : CloudDnsResolversNameserverIps[] | cdktf.IResolvable

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
  public get(index: number): CloudDnsResolversNameserverIpsOutputReference {
    return new CloudDnsResolversNameserverIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudDnsResolvers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#fixed_ttl Cloud#fixed_ttl}
  */
  readonly fixedTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#min_ttl Cloud#min_ttl}
  */
  readonly minTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#resolver_name Cloud#resolver_name}
  */
  readonly resolverName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#use_mgmt Cloud#use_mgmt}
  */
  readonly useMgmt?: string;
  /**
  * nameserver_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#nameserver_ips Cloud#nameserver_ips}
  */
  readonly nameserverIps: CloudDnsResolversNameserverIps[] | cdktf.IResolvable;
}

export function cloudDnsResolversToTerraform(struct?: CloudDnsResolvers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_ttl: cdktf.stringToTerraform(struct!.fixedTtl),
    min_ttl: cdktf.stringToTerraform(struct!.minTtl),
    resolver_name: cdktf.stringToTerraform(struct!.resolverName),
    use_mgmt: cdktf.stringToTerraform(struct!.useMgmt),
    nameserver_ips: cdktf.listMapper(cloudDnsResolversNameserverIpsToTerraform, true)(struct!.nameserverIps),
  }
}


export function cloudDnsResolversToHclTerraform(struct?: CloudDnsResolvers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_ttl: {
      value: cdktf.stringToHclTerraform(struct!.fixedTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_ttl: {
      value: cdktf.stringToHclTerraform(struct!.minTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolver_name: {
      value: cdktf.stringToHclTerraform(struct!.resolverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_mgmt: {
      value: cdktf.stringToHclTerraform(struct!.useMgmt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nameserver_ips: {
      value: cdktf.listMapperHcl(cloudDnsResolversNameserverIpsToHclTerraform, true)(struct!.nameserverIps),
      isBlock: true,
      type: "list",
      storageClassType: "CloudDnsResolversNameserverIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDnsResolversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudDnsResolvers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedTtl = this._fixedTtl;
    }
    if (this._minTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTtl = this._minTtl;
    }
    if (this._resolverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolverName = this._resolverName;
    }
    if (this._useMgmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmt = this._useMgmt;
    }
    if (this._nameserverIps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameserverIps = this._nameserverIps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDnsResolvers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fixedTtl = undefined;
      this._minTtl = undefined;
      this._resolverName = undefined;
      this._useMgmt = undefined;
      this._nameserverIps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fixedTtl = value.fixedTtl;
      this._minTtl = value.minTtl;
      this._resolverName = value.resolverName;
      this._useMgmt = value.useMgmt;
      this._nameserverIps.internalValue = value.nameserverIps;
    }
  }

  // fixed_ttl - computed: true, optional: true, required: false
  private _fixedTtl?: string; 
  public get fixedTtl() {
    return this.getStringAttribute('fixed_ttl');
  }
  public set fixedTtl(value: string) {
    this._fixedTtl = value;
  }
  public resetFixedTtl() {
    this._fixedTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedTtlInput() {
    return this._fixedTtl;
  }

  // min_ttl - computed: false, optional: true, required: false
  private _minTtl?: string; 
  public get minTtl() {
    return this.getStringAttribute('min_ttl');
  }
  public set minTtl(value: string) {
    this._minTtl = value;
  }
  public resetMinTtl() {
    this._minTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTtlInput() {
    return this._minTtl;
  }

  // resolver_name - computed: false, optional: false, required: true
  private _resolverName?: string; 
  public get resolverName() {
    return this.getStringAttribute('resolver_name');
  }
  public set resolverName(value: string) {
    this._resolverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverNameInput() {
    return this._resolverName;
  }

  // use_mgmt - computed: false, optional: true, required: false
  private _useMgmt?: string; 
  public get useMgmt() {
    return this.getStringAttribute('use_mgmt');
  }
  public set useMgmt(value: string) {
    this._useMgmt = value;
  }
  public resetUseMgmt() {
    this._useMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtInput() {
    return this._useMgmt;
  }

  // nameserver_ips - computed: false, optional: false, required: true
  private _nameserverIps = new CloudDnsResolversNameserverIpsList(this, "nameserver_ips", false);
  public get nameserverIps() {
    return this._nameserverIps;
  }
  public putNameserverIps(value: CloudDnsResolversNameserverIps[] | cdktf.IResolvable) {
    this._nameserverIps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverIpsInput() {
    return this._nameserverIps.internalValue;
  }
}

export class CloudDnsResolversList extends cdktf.ComplexList {
  public internalValue? : CloudDnsResolvers[] | cdktf.IResolvable

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
  public get(index: number): CloudDnsResolversOutputReference {
    return new CloudDnsResolversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#addr Cloud#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#type Cloud#type}
  */
  readonly type: string;
}

export function cloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVipToTerraform(struct?: CloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVipToHclTerraform(struct?: CloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVipList extends cdktf.ComplexList {
  public internalValue? : CloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVip[] | cdktf.IResolvable

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
  public get(index: number): CloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVipOutputReference {
    return new CloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudDockerConfigurationDockerRegistrySeOshiftRegistry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#registry_namespace Cloud#registry_namespace}
  */
  readonly registryNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#registry_service Cloud#registry_service}
  */
  readonly registryService?: string;
  /**
  * registry_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#registry_vip Cloud#registry_vip}
  */
  readonly registryVip?: CloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVip[] | cdktf.IResolvable;
}

export function cloudDockerConfigurationDockerRegistrySeOshiftRegistryToTerraform(struct?: CloudDockerConfigurationDockerRegistrySeOshiftRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    registry_namespace: cdktf.stringToTerraform(struct!.registryNamespace),
    registry_service: cdktf.stringToTerraform(struct!.registryService),
    registry_vip: cdktf.listMapper(cloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVipToTerraform, true)(struct!.registryVip),
  }
}


export function cloudDockerConfigurationDockerRegistrySeOshiftRegistryToHclTerraform(struct?: CloudDockerConfigurationDockerRegistrySeOshiftRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    registry_namespace: {
      value: cdktf.stringToHclTerraform(struct!.registryNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_service: {
      value: cdktf.stringToHclTerraform(struct!.registryService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_vip: {
      value: cdktf.listMapperHcl(cloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVipToHclTerraform, true)(struct!.registryVip),
      isBlock: true,
      type: "set",
      storageClassType: "CloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVipList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDockerConfigurationDockerRegistrySeOshiftRegistryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudDockerConfigurationDockerRegistrySeOshiftRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._registryNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryNamespace = this._registryNamespace;
    }
    if (this._registryService !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryService = this._registryService;
    }
    if (this._registryVip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryVip = this._registryVip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDockerConfigurationDockerRegistrySeOshiftRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._registryNamespace = undefined;
      this._registryService = undefined;
      this._registryVip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._registryNamespace = value.registryNamespace;
      this._registryService = value.registryService;
      this._registryVip.internalValue = value.registryVip;
    }
  }

  // registry_namespace - computed: false, optional: true, required: false
  private _registryNamespace?: string; 
  public get registryNamespace() {
    return this.getStringAttribute('registry_namespace');
  }
  public set registryNamespace(value: string) {
    this._registryNamespace = value;
  }
  public resetRegistryNamespace() {
    this._registryNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNamespaceInput() {
    return this._registryNamespace;
  }

  // registry_service - computed: false, optional: true, required: false
  private _registryService?: string; 
  public get registryService() {
    return this.getStringAttribute('registry_service');
  }
  public set registryService(value: string) {
    this._registryService = value;
  }
  public resetRegistryService() {
    this._registryService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryServiceInput() {
    return this._registryService;
  }

  // registry_vip - computed: false, optional: true, required: false
  private _registryVip = new CloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVipList(this, "registry_vip", true);
  public get registryVip() {
    return this._registryVip;
  }
  public putRegistryVip(value: CloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVip[] | cdktf.IResolvable) {
    this._registryVip.internalValue = value;
  }
  public resetRegistryVip() {
    this._registryVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryVipInput() {
    return this._registryVip.internalValue;
  }
}

export class CloudDockerConfigurationDockerRegistrySeOshiftRegistryList extends cdktf.ComplexList {
  public internalValue? : CloudDockerConfigurationDockerRegistrySeOshiftRegistry[] | cdktf.IResolvable

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
  public get(index: number): CloudDockerConfigurationDockerRegistrySeOshiftRegistryOutputReference {
    return new CloudDockerConfigurationDockerRegistrySeOshiftRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudDockerConfigurationDockerRegistrySe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#password Cloud#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#private Cloud#private}
  */
  readonly private?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#registry Cloud#registry}
  */
  readonly registry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#username Cloud#username}
  */
  readonly username?: string;
  /**
  * oshift_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#oshift_registry Cloud#oshift_registry}
  */
  readonly oshiftRegistry?: CloudDockerConfigurationDockerRegistrySeOshiftRegistry[] | cdktf.IResolvable;
}

export function cloudDockerConfigurationDockerRegistrySeToTerraform(struct?: CloudDockerConfigurationDockerRegistrySe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    private: cdktf.stringToTerraform(struct!.private),
    registry: cdktf.stringToTerraform(struct!.registry),
    username: cdktf.stringToTerraform(struct!.username),
    oshift_registry: cdktf.listMapper(cloudDockerConfigurationDockerRegistrySeOshiftRegistryToTerraform, true)(struct!.oshiftRegistry),
  }
}


export function cloudDockerConfigurationDockerRegistrySeToHclTerraform(struct?: CloudDockerConfigurationDockerRegistrySe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private: {
      value: cdktf.stringToHclTerraform(struct!.private),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oshift_registry: {
      value: cdktf.listMapperHcl(cloudDockerConfigurationDockerRegistrySeOshiftRegistryToHclTerraform, true)(struct!.oshiftRegistry),
      isBlock: true,
      type: "set",
      storageClassType: "CloudDockerConfigurationDockerRegistrySeOshiftRegistryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDockerConfigurationDockerRegistrySeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudDockerConfigurationDockerRegistrySe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._private !== undefined) {
      hasAnyValues = true;
      internalValueResult.private = this._private;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._oshiftRegistry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oshiftRegistry = this._oshiftRegistry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDockerConfigurationDockerRegistrySe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._private = undefined;
      this._registry = undefined;
      this._username = undefined;
      this._oshiftRegistry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._private = value.private;
      this._registry = value.registry;
      this._username = value.username;
      this._oshiftRegistry.internalValue = value.oshiftRegistry;
    }
  }

  // password - computed: true, optional: true, required: false
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

  // private - computed: false, optional: true, required: false
  private _private?: string; 
  public get private() {
    return this.getStringAttribute('private');
  }
  public set private(value: string) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // oshift_registry - computed: false, optional: true, required: false
  private _oshiftRegistry = new CloudDockerConfigurationDockerRegistrySeOshiftRegistryList(this, "oshift_registry", true);
  public get oshiftRegistry() {
    return this._oshiftRegistry;
  }
  public putOshiftRegistry(value: CloudDockerConfigurationDockerRegistrySeOshiftRegistry[] | cdktf.IResolvable) {
    this._oshiftRegistry.internalValue = value;
  }
  public resetOshiftRegistry() {
    this._oshiftRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oshiftRegistryInput() {
    return this._oshiftRegistry.internalValue;
  }
}

export class CloudDockerConfigurationDockerRegistrySeList extends cdktf.ComplexList {
  public internalValue? : CloudDockerConfigurationDockerRegistrySe[] | cdktf.IResolvable

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
  public get(index: number): CloudDockerConfigurationDockerRegistrySeOutputReference {
    return new CloudDockerConfigurationDockerRegistrySeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudDockerConfigurationEastWestPlacementSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#addr Cloud#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#type Cloud#type}
  */
  readonly type: string;
}

export function cloudDockerConfigurationEastWestPlacementSubnetIpAddrToTerraform(struct?: CloudDockerConfigurationEastWestPlacementSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudDockerConfigurationEastWestPlacementSubnetIpAddrToHclTerraform(struct?: CloudDockerConfigurationEastWestPlacementSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDockerConfigurationEastWestPlacementSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudDockerConfigurationEastWestPlacementSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDockerConfigurationEastWestPlacementSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CloudDockerConfigurationEastWestPlacementSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : CloudDockerConfigurationEastWestPlacementSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): CloudDockerConfigurationEastWestPlacementSubnetIpAddrOutputReference {
    return new CloudDockerConfigurationEastWestPlacementSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudDockerConfigurationEastWestPlacementSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#mask Cloud#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ip_addr Cloud#ip_addr}
  */
  readonly ipAddr: CloudDockerConfigurationEastWestPlacementSubnetIpAddr[] | cdktf.IResolvable;
}

export function cloudDockerConfigurationEastWestPlacementSubnetToTerraform(struct?: CloudDockerConfigurationEastWestPlacementSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(cloudDockerConfigurationEastWestPlacementSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function cloudDockerConfigurationEastWestPlacementSubnetToHclTerraform(struct?: CloudDockerConfigurationEastWestPlacementSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(cloudDockerConfigurationEastWestPlacementSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "CloudDockerConfigurationEastWestPlacementSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDockerConfigurationEastWestPlacementSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudDockerConfigurationEastWestPlacementSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDockerConfigurationEastWestPlacementSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new CloudDockerConfigurationEastWestPlacementSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: CloudDockerConfigurationEastWestPlacementSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class CloudDockerConfigurationEastWestPlacementSubnetList extends cdktf.ComplexList {
  public internalValue? : CloudDockerConfigurationEastWestPlacementSubnet[] | cdktf.IResolvable

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
  public get(index: number): CloudDockerConfigurationEastWestPlacementSubnetOutputReference {
    return new CloudDockerConfigurationEastWestPlacementSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudDockerConfigurationSeExcludeAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#attribute Cloud#attribute}
  */
  readonly attribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#value Cloud#value}
  */
  readonly value?: string;
}

export function cloudDockerConfigurationSeExcludeAttributesToTerraform(struct?: CloudDockerConfigurationSeExcludeAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudDockerConfigurationSeExcludeAttributesToHclTerraform(struct?: CloudDockerConfigurationSeExcludeAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDockerConfigurationSeExcludeAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudDockerConfigurationSeExcludeAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDockerConfigurationSeExcludeAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._value = value.value;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // value - computed: true, optional: true, required: false
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
}

export class CloudDockerConfigurationSeExcludeAttributesList extends cdktf.ComplexList {
  public internalValue? : CloudDockerConfigurationSeExcludeAttributes[] | cdktf.IResolvable

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
  public get(index: number): CloudDockerConfigurationSeExcludeAttributesOutputReference {
    return new CloudDockerConfigurationSeExcludeAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudDockerConfigurationSeIncludeAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#attribute Cloud#attribute}
  */
  readonly attribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#value Cloud#value}
  */
  readonly value?: string;
}

export function cloudDockerConfigurationSeIncludeAttributesToTerraform(struct?: CloudDockerConfigurationSeIncludeAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudDockerConfigurationSeIncludeAttributesToHclTerraform(struct?: CloudDockerConfigurationSeIncludeAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDockerConfigurationSeIncludeAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudDockerConfigurationSeIncludeAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDockerConfigurationSeIncludeAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._value = value.value;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // value - computed: true, optional: true, required: false
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
}

export class CloudDockerConfigurationSeIncludeAttributesList extends cdktf.ComplexList {
  public internalValue? : CloudDockerConfigurationSeIncludeAttributes[] | cdktf.IResolvable

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
  public get(index: number): CloudDockerConfigurationSeIncludeAttributesOutputReference {
    return new CloudDockerConfigurationSeIncludeAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudDockerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#app_sync_frequency Cloud#app_sync_frequency}
  */
  readonly appSyncFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ca_tls_key_and_certificate_ref Cloud#ca_tls_key_and_certificate_ref}
  */
  readonly caTlsKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#client_tls_key_and_certificate_ref Cloud#client_tls_key_and_certificate_ref}
  */
  readonly clientTlsKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#container_port_match_http_service Cloud#container_port_match_http_service}
  */
  readonly containerPortMatchHttpService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#coredump_directory Cloud#coredump_directory}
  */
  readonly coredumpDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#disable_auto_backend_service_sync Cloud#disable_auto_backend_service_sync}
  */
  readonly disableAutoBackendServiceSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#disable_auto_frontend_service_sync Cloud#disable_auto_frontend_service_sync}
  */
  readonly disableAutoFrontendServiceSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#disable_auto_se_creation Cloud#disable_auto_se_creation}
  */
  readonly disableAutoSeCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#enable_event_subscription Cloud#enable_event_subscription}
  */
  readonly enableEventSubscription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#feproxy_container_port_as_service Cloud#feproxy_container_port_as_service}
  */
  readonly feproxyContainerPortAsService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#feproxy_vips_enable_proxy_arp Cloud#feproxy_vips_enable_proxy_arp}
  */
  readonly feproxyVipsEnableProxyArp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#fleet_endpoint Cloud#fleet_endpoint}
  */
  readonly fleetEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#http_container_ports Cloud#http_container_ports}
  */
  readonly httpContainerPorts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_deployment_method Cloud#se_deployment_method}
  */
  readonly seDeploymentMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_spawn_rate Cloud#se_spawn_rate}
  */
  readonly seSpawnRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_volume Cloud#se_volume}
  */
  readonly seVolume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#services_accessible_all_interfaces Cloud#services_accessible_all_interfaces}
  */
  readonly servicesAccessibleAllInterfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ssh_user_ref Cloud#ssh_user_ref}
  */
  readonly sshUserRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ucp_nodes Cloud#ucp_nodes}
  */
  readonly ucpNodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#use_container_ip_port Cloud#use_container_ip_port}
  */
  readonly useContainerIpPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#use_controller_image Cloud#use_controller_image}
  */
  readonly useControllerImage?: string;
  /**
  * docker_registry_se block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#docker_registry_se Cloud#docker_registry_se}
  */
  readonly dockerRegistrySe?: CloudDockerConfigurationDockerRegistrySe[] | cdktf.IResolvable;
  /**
  * east_west_placement_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#east_west_placement_subnet Cloud#east_west_placement_subnet}
  */
  readonly eastWestPlacementSubnet?: CloudDockerConfigurationEastWestPlacementSubnet[] | cdktf.IResolvable;
  /**
  * se_exclude_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_exclude_attributes Cloud#se_exclude_attributes}
  */
  readonly seExcludeAttributes?: CloudDockerConfigurationSeExcludeAttributes[] | cdktf.IResolvable;
  /**
  * se_include_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_include_attributes Cloud#se_include_attributes}
  */
  readonly seIncludeAttributes?: CloudDockerConfigurationSeIncludeAttributes[] | cdktf.IResolvable;
}

export function cloudDockerConfigurationToTerraform(struct?: CloudDockerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_sync_frequency: cdktf.stringToTerraform(struct!.appSyncFrequency),
    ca_tls_key_and_certificate_ref: cdktf.stringToTerraform(struct!.caTlsKeyAndCertificateRef),
    client_tls_key_and_certificate_ref: cdktf.stringToTerraform(struct!.clientTlsKeyAndCertificateRef),
    container_port_match_http_service: cdktf.stringToTerraform(struct!.containerPortMatchHttpService),
    coredump_directory: cdktf.stringToTerraform(struct!.coredumpDirectory),
    disable_auto_backend_service_sync: cdktf.stringToTerraform(struct!.disableAutoBackendServiceSync),
    disable_auto_frontend_service_sync: cdktf.stringToTerraform(struct!.disableAutoFrontendServiceSync),
    disable_auto_se_creation: cdktf.stringToTerraform(struct!.disableAutoSeCreation),
    enable_event_subscription: cdktf.stringToTerraform(struct!.enableEventSubscription),
    feproxy_container_port_as_service: cdktf.stringToTerraform(struct!.feproxyContainerPortAsService),
    feproxy_vips_enable_proxy_arp: cdktf.stringToTerraform(struct!.feproxyVipsEnableProxyArp),
    fleet_endpoint: cdktf.stringToTerraform(struct!.fleetEndpoint),
    http_container_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.httpContainerPorts),
    se_deployment_method: cdktf.stringToTerraform(struct!.seDeploymentMethod),
    se_spawn_rate: cdktf.stringToTerraform(struct!.seSpawnRate),
    se_volume: cdktf.stringToTerraform(struct!.seVolume),
    services_accessible_all_interfaces: cdktf.stringToTerraform(struct!.servicesAccessibleAllInterfaces),
    ssh_user_ref: cdktf.stringToTerraform(struct!.sshUserRef),
    ucp_nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ucpNodes),
    use_container_ip_port: cdktf.stringToTerraform(struct!.useContainerIpPort),
    use_controller_image: cdktf.stringToTerraform(struct!.useControllerImage),
    docker_registry_se: cdktf.listMapper(cloudDockerConfigurationDockerRegistrySeToTerraform, true)(struct!.dockerRegistrySe),
    east_west_placement_subnet: cdktf.listMapper(cloudDockerConfigurationEastWestPlacementSubnetToTerraform, true)(struct!.eastWestPlacementSubnet),
    se_exclude_attributes: cdktf.listMapper(cloudDockerConfigurationSeExcludeAttributesToTerraform, true)(struct!.seExcludeAttributes),
    se_include_attributes: cdktf.listMapper(cloudDockerConfigurationSeIncludeAttributesToTerraform, true)(struct!.seIncludeAttributes),
  }
}


export function cloudDockerConfigurationToHclTerraform(struct?: CloudDockerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_sync_frequency: {
      value: cdktf.stringToHclTerraform(struct!.appSyncFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_tls_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.caTlsKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_tls_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.clientTlsKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_port_match_http_service: {
      value: cdktf.stringToHclTerraform(struct!.containerPortMatchHttpService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coredump_directory: {
      value: cdktf.stringToHclTerraform(struct!.coredumpDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_auto_backend_service_sync: {
      value: cdktf.stringToHclTerraform(struct!.disableAutoBackendServiceSync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_auto_frontend_service_sync: {
      value: cdktf.stringToHclTerraform(struct!.disableAutoFrontendServiceSync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_auto_se_creation: {
      value: cdktf.stringToHclTerraform(struct!.disableAutoSeCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_event_subscription: {
      value: cdktf.stringToHclTerraform(struct!.enableEventSubscription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feproxy_container_port_as_service: {
      value: cdktf.stringToHclTerraform(struct!.feproxyContainerPortAsService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feproxy_vips_enable_proxy_arp: {
      value: cdktf.stringToHclTerraform(struct!.feproxyVipsEnableProxyArp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fleet_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.fleetEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_container_ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.httpContainerPorts),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    se_deployment_method: {
      value: cdktf.stringToHclTerraform(struct!.seDeploymentMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_spawn_rate: {
      value: cdktf.stringToHclTerraform(struct!.seSpawnRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_volume: {
      value: cdktf.stringToHclTerraform(struct!.seVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_accessible_all_interfaces: {
      value: cdktf.stringToHclTerraform(struct!.servicesAccessibleAllInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_user_ref: {
      value: cdktf.stringToHclTerraform(struct!.sshUserRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ucp_nodes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ucpNodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_container_ip_port: {
      value: cdktf.stringToHclTerraform(struct!.useContainerIpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_controller_image: {
      value: cdktf.stringToHclTerraform(struct!.useControllerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_registry_se: {
      value: cdktf.listMapperHcl(cloudDockerConfigurationDockerRegistrySeToHclTerraform, true)(struct!.dockerRegistrySe),
      isBlock: true,
      type: "set",
      storageClassType: "CloudDockerConfigurationDockerRegistrySeList",
    },
    east_west_placement_subnet: {
      value: cdktf.listMapperHcl(cloudDockerConfigurationEastWestPlacementSubnetToHclTerraform, true)(struct!.eastWestPlacementSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "CloudDockerConfigurationEastWestPlacementSubnetList",
    },
    se_exclude_attributes: {
      value: cdktf.listMapperHcl(cloudDockerConfigurationSeExcludeAttributesToHclTerraform, true)(struct!.seExcludeAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "CloudDockerConfigurationSeExcludeAttributesList",
    },
    se_include_attributes: {
      value: cdktf.listMapperHcl(cloudDockerConfigurationSeIncludeAttributesToHclTerraform, true)(struct!.seIncludeAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "CloudDockerConfigurationSeIncludeAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDockerConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudDockerConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appSyncFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSyncFrequency = this._appSyncFrequency;
    }
    if (this._caTlsKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.caTlsKeyAndCertificateRef = this._caTlsKeyAndCertificateRef;
    }
    if (this._clientTlsKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTlsKeyAndCertificateRef = this._clientTlsKeyAndCertificateRef;
    }
    if (this._containerPortMatchHttpService !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPortMatchHttpService = this._containerPortMatchHttpService;
    }
    if (this._coredumpDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.coredumpDirectory = this._coredumpDirectory;
    }
    if (this._disableAutoBackendServiceSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoBackendServiceSync = this._disableAutoBackendServiceSync;
    }
    if (this._disableAutoFrontendServiceSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoFrontendServiceSync = this._disableAutoFrontendServiceSync;
    }
    if (this._disableAutoSeCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoSeCreation = this._disableAutoSeCreation;
    }
    if (this._enableEventSubscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEventSubscription = this._enableEventSubscription;
    }
    if (this._feproxyContainerPortAsService !== undefined) {
      hasAnyValues = true;
      internalValueResult.feproxyContainerPortAsService = this._feproxyContainerPortAsService;
    }
    if (this._feproxyVipsEnableProxyArp !== undefined) {
      hasAnyValues = true;
      internalValueResult.feproxyVipsEnableProxyArp = this._feproxyVipsEnableProxyArp;
    }
    if (this._fleetEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetEndpoint = this._fleetEndpoint;
    }
    if (this._httpContainerPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpContainerPorts = this._httpContainerPorts;
    }
    if (this._seDeploymentMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.seDeploymentMethod = this._seDeploymentMethod;
    }
    if (this._seSpawnRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.seSpawnRate = this._seSpawnRate;
    }
    if (this._seVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.seVolume = this._seVolume;
    }
    if (this._servicesAccessibleAllInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesAccessibleAllInterfaces = this._servicesAccessibleAllInterfaces;
    }
    if (this._sshUserRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshUserRef = this._sshUserRef;
    }
    if (this._ucpNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucpNodes = this._ucpNodes;
    }
    if (this._useContainerIpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useContainerIpPort = this._useContainerIpPort;
    }
    if (this._useControllerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.useControllerImage = this._useControllerImage;
    }
    if (this._dockerRegistrySe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerRegistrySe = this._dockerRegistrySe?.internalValue;
    }
    if (this._eastWestPlacementSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eastWestPlacementSubnet = this._eastWestPlacementSubnet?.internalValue;
    }
    if (this._seExcludeAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seExcludeAttributes = this._seExcludeAttributes?.internalValue;
    }
    if (this._seIncludeAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seIncludeAttributes = this._seIncludeAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDockerConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appSyncFrequency = undefined;
      this._caTlsKeyAndCertificateRef = undefined;
      this._clientTlsKeyAndCertificateRef = undefined;
      this._containerPortMatchHttpService = undefined;
      this._coredumpDirectory = undefined;
      this._disableAutoBackendServiceSync = undefined;
      this._disableAutoFrontendServiceSync = undefined;
      this._disableAutoSeCreation = undefined;
      this._enableEventSubscription = undefined;
      this._feproxyContainerPortAsService = undefined;
      this._feproxyVipsEnableProxyArp = undefined;
      this._fleetEndpoint = undefined;
      this._httpContainerPorts = undefined;
      this._seDeploymentMethod = undefined;
      this._seSpawnRate = undefined;
      this._seVolume = undefined;
      this._servicesAccessibleAllInterfaces = undefined;
      this._sshUserRef = undefined;
      this._ucpNodes = undefined;
      this._useContainerIpPort = undefined;
      this._useControllerImage = undefined;
      this._dockerRegistrySe.internalValue = undefined;
      this._eastWestPlacementSubnet.internalValue = undefined;
      this._seExcludeAttributes.internalValue = undefined;
      this._seIncludeAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appSyncFrequency = value.appSyncFrequency;
      this._caTlsKeyAndCertificateRef = value.caTlsKeyAndCertificateRef;
      this._clientTlsKeyAndCertificateRef = value.clientTlsKeyAndCertificateRef;
      this._containerPortMatchHttpService = value.containerPortMatchHttpService;
      this._coredumpDirectory = value.coredumpDirectory;
      this._disableAutoBackendServiceSync = value.disableAutoBackendServiceSync;
      this._disableAutoFrontendServiceSync = value.disableAutoFrontendServiceSync;
      this._disableAutoSeCreation = value.disableAutoSeCreation;
      this._enableEventSubscription = value.enableEventSubscription;
      this._feproxyContainerPortAsService = value.feproxyContainerPortAsService;
      this._feproxyVipsEnableProxyArp = value.feproxyVipsEnableProxyArp;
      this._fleetEndpoint = value.fleetEndpoint;
      this._httpContainerPorts = value.httpContainerPorts;
      this._seDeploymentMethod = value.seDeploymentMethod;
      this._seSpawnRate = value.seSpawnRate;
      this._seVolume = value.seVolume;
      this._servicesAccessibleAllInterfaces = value.servicesAccessibleAllInterfaces;
      this._sshUserRef = value.sshUserRef;
      this._ucpNodes = value.ucpNodes;
      this._useContainerIpPort = value.useContainerIpPort;
      this._useControllerImage = value.useControllerImage;
      this._dockerRegistrySe.internalValue = value.dockerRegistrySe;
      this._eastWestPlacementSubnet.internalValue = value.eastWestPlacementSubnet;
      this._seExcludeAttributes.internalValue = value.seExcludeAttributes;
      this._seIncludeAttributes.internalValue = value.seIncludeAttributes;
    }
  }

  // app_sync_frequency - computed: false, optional: true, required: false
  private _appSyncFrequency?: string; 
  public get appSyncFrequency() {
    return this.getStringAttribute('app_sync_frequency');
  }
  public set appSyncFrequency(value: string) {
    this._appSyncFrequency = value;
  }
  public resetAppSyncFrequency() {
    this._appSyncFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSyncFrequencyInput() {
    return this._appSyncFrequency;
  }

  // ca_tls_key_and_certificate_ref - computed: true, optional: true, required: false
  private _caTlsKeyAndCertificateRef?: string; 
  public get caTlsKeyAndCertificateRef() {
    return this.getStringAttribute('ca_tls_key_and_certificate_ref');
  }
  public set caTlsKeyAndCertificateRef(value: string) {
    this._caTlsKeyAndCertificateRef = value;
  }
  public resetCaTlsKeyAndCertificateRef() {
    this._caTlsKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caTlsKeyAndCertificateRefInput() {
    return this._caTlsKeyAndCertificateRef;
  }

  // client_tls_key_and_certificate_ref - computed: true, optional: true, required: false
  private _clientTlsKeyAndCertificateRef?: string; 
  public get clientTlsKeyAndCertificateRef() {
    return this.getStringAttribute('client_tls_key_and_certificate_ref');
  }
  public set clientTlsKeyAndCertificateRef(value: string) {
    this._clientTlsKeyAndCertificateRef = value;
  }
  public resetClientTlsKeyAndCertificateRef() {
    this._clientTlsKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsKeyAndCertificateRefInput() {
    return this._clientTlsKeyAndCertificateRef;
  }

  // container_port_match_http_service - computed: false, optional: true, required: false
  private _containerPortMatchHttpService?: string; 
  public get containerPortMatchHttpService() {
    return this.getStringAttribute('container_port_match_http_service');
  }
  public set containerPortMatchHttpService(value: string) {
    this._containerPortMatchHttpService = value;
  }
  public resetContainerPortMatchHttpService() {
    this._containerPortMatchHttpService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortMatchHttpServiceInput() {
    return this._containerPortMatchHttpService;
  }

  // coredump_directory - computed: false, optional: true, required: false
  private _coredumpDirectory?: string; 
  public get coredumpDirectory() {
    return this.getStringAttribute('coredump_directory');
  }
  public set coredumpDirectory(value: string) {
    this._coredumpDirectory = value;
  }
  public resetCoredumpDirectory() {
    this._coredumpDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coredumpDirectoryInput() {
    return this._coredumpDirectory;
  }

  // disable_auto_backend_service_sync - computed: false, optional: true, required: false
  private _disableAutoBackendServiceSync?: string; 
  public get disableAutoBackendServiceSync() {
    return this.getStringAttribute('disable_auto_backend_service_sync');
  }
  public set disableAutoBackendServiceSync(value: string) {
    this._disableAutoBackendServiceSync = value;
  }
  public resetDisableAutoBackendServiceSync() {
    this._disableAutoBackendServiceSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoBackendServiceSyncInput() {
    return this._disableAutoBackendServiceSync;
  }

  // disable_auto_frontend_service_sync - computed: false, optional: true, required: false
  private _disableAutoFrontendServiceSync?: string; 
  public get disableAutoFrontendServiceSync() {
    return this.getStringAttribute('disable_auto_frontend_service_sync');
  }
  public set disableAutoFrontendServiceSync(value: string) {
    this._disableAutoFrontendServiceSync = value;
  }
  public resetDisableAutoFrontendServiceSync() {
    this._disableAutoFrontendServiceSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoFrontendServiceSyncInput() {
    return this._disableAutoFrontendServiceSync;
  }

  // disable_auto_se_creation - computed: false, optional: true, required: false
  private _disableAutoSeCreation?: string; 
  public get disableAutoSeCreation() {
    return this.getStringAttribute('disable_auto_se_creation');
  }
  public set disableAutoSeCreation(value: string) {
    this._disableAutoSeCreation = value;
  }
  public resetDisableAutoSeCreation() {
    this._disableAutoSeCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoSeCreationInput() {
    return this._disableAutoSeCreation;
  }

  // enable_event_subscription - computed: false, optional: true, required: false
  private _enableEventSubscription?: string; 
  public get enableEventSubscription() {
    return this.getStringAttribute('enable_event_subscription');
  }
  public set enableEventSubscription(value: string) {
    this._enableEventSubscription = value;
  }
  public resetEnableEventSubscription() {
    this._enableEventSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEventSubscriptionInput() {
    return this._enableEventSubscription;
  }

  // feproxy_container_port_as_service - computed: false, optional: true, required: false
  private _feproxyContainerPortAsService?: string; 
  public get feproxyContainerPortAsService() {
    return this.getStringAttribute('feproxy_container_port_as_service');
  }
  public set feproxyContainerPortAsService(value: string) {
    this._feproxyContainerPortAsService = value;
  }
  public resetFeproxyContainerPortAsService() {
    this._feproxyContainerPortAsService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feproxyContainerPortAsServiceInput() {
    return this._feproxyContainerPortAsService;
  }

  // feproxy_vips_enable_proxy_arp - computed: false, optional: true, required: false
  private _feproxyVipsEnableProxyArp?: string; 
  public get feproxyVipsEnableProxyArp() {
    return this.getStringAttribute('feproxy_vips_enable_proxy_arp');
  }
  public set feproxyVipsEnableProxyArp(value: string) {
    this._feproxyVipsEnableProxyArp = value;
  }
  public resetFeproxyVipsEnableProxyArp() {
    this._feproxyVipsEnableProxyArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feproxyVipsEnableProxyArpInput() {
    return this._feproxyVipsEnableProxyArp;
  }

  // fleet_endpoint - computed: true, optional: true, required: false
  private _fleetEndpoint?: string; 
  public get fleetEndpoint() {
    return this.getStringAttribute('fleet_endpoint');
  }
  public set fleetEndpoint(value: string) {
    this._fleetEndpoint = value;
  }
  public resetFleetEndpoint() {
    this._fleetEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetEndpointInput() {
    return this._fleetEndpoint;
  }

  // http_container_ports - computed: false, optional: true, required: false
  private _httpContainerPorts?: number[]; 
  public get httpContainerPorts() {
    return this.getNumberListAttribute('http_container_ports');
  }
  public set httpContainerPorts(value: number[]) {
    this._httpContainerPorts = value;
  }
  public resetHttpContainerPorts() {
    this._httpContainerPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpContainerPortsInput() {
    return this._httpContainerPorts;
  }

  // se_deployment_method - computed: false, optional: true, required: false
  private _seDeploymentMethod?: string; 
  public get seDeploymentMethod() {
    return this.getStringAttribute('se_deployment_method');
  }
  public set seDeploymentMethod(value: string) {
    this._seDeploymentMethod = value;
  }
  public resetSeDeploymentMethod() {
    this._seDeploymentMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDeploymentMethodInput() {
    return this._seDeploymentMethod;
  }

  // se_spawn_rate - computed: false, optional: true, required: false
  private _seSpawnRate?: string; 
  public get seSpawnRate() {
    return this.getStringAttribute('se_spawn_rate');
  }
  public set seSpawnRate(value: string) {
    this._seSpawnRate = value;
  }
  public resetSeSpawnRate() {
    this._seSpawnRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seSpawnRateInput() {
    return this._seSpawnRate;
  }

  // se_volume - computed: false, optional: true, required: false
  private _seVolume?: string; 
  public get seVolume() {
    return this.getStringAttribute('se_volume');
  }
  public set seVolume(value: string) {
    this._seVolume = value;
  }
  public resetSeVolume() {
    this._seVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seVolumeInput() {
    return this._seVolume;
  }

  // services_accessible_all_interfaces - computed: false, optional: true, required: false
  private _servicesAccessibleAllInterfaces?: string; 
  public get servicesAccessibleAllInterfaces() {
    return this.getStringAttribute('services_accessible_all_interfaces');
  }
  public set servicesAccessibleAllInterfaces(value: string) {
    this._servicesAccessibleAllInterfaces = value;
  }
  public resetServicesAccessibleAllInterfaces() {
    this._servicesAccessibleAllInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesAccessibleAllInterfacesInput() {
    return this._servicesAccessibleAllInterfaces;
  }

  // ssh_user_ref - computed: true, optional: true, required: false
  private _sshUserRef?: string; 
  public get sshUserRef() {
    return this.getStringAttribute('ssh_user_ref');
  }
  public set sshUserRef(value: string) {
    this._sshUserRef = value;
  }
  public resetSshUserRef() {
    this._sshUserRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUserRefInput() {
    return this._sshUserRef;
  }

  // ucp_nodes - computed: false, optional: true, required: false
  private _ucpNodes?: string[]; 
  public get ucpNodes() {
    return this.getListAttribute('ucp_nodes');
  }
  public set ucpNodes(value: string[]) {
    this._ucpNodes = value;
  }
  public resetUcpNodes() {
    this._ucpNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucpNodesInput() {
    return this._ucpNodes;
  }

  // use_container_ip_port - computed: false, optional: true, required: false
  private _useContainerIpPort?: string; 
  public get useContainerIpPort() {
    return this.getStringAttribute('use_container_ip_port');
  }
  public set useContainerIpPort(value: string) {
    this._useContainerIpPort = value;
  }
  public resetUseContainerIpPort() {
    this._useContainerIpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useContainerIpPortInput() {
    return this._useContainerIpPort;
  }

  // use_controller_image - computed: false, optional: true, required: false
  private _useControllerImage?: string; 
  public get useControllerImage() {
    return this.getStringAttribute('use_controller_image');
  }
  public set useControllerImage(value: string) {
    this._useControllerImage = value;
  }
  public resetUseControllerImage() {
    this._useControllerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useControllerImageInput() {
    return this._useControllerImage;
  }

  // docker_registry_se - computed: false, optional: true, required: false
  private _dockerRegistrySe = new CloudDockerConfigurationDockerRegistrySeList(this, "docker_registry_se", true);
  public get dockerRegistrySe() {
    return this._dockerRegistrySe;
  }
  public putDockerRegistrySe(value: CloudDockerConfigurationDockerRegistrySe[] | cdktf.IResolvable) {
    this._dockerRegistrySe.internalValue = value;
  }
  public resetDockerRegistrySe() {
    this._dockerRegistrySe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerRegistrySeInput() {
    return this._dockerRegistrySe.internalValue;
  }

  // east_west_placement_subnet - computed: false, optional: true, required: false
  private _eastWestPlacementSubnet = new CloudDockerConfigurationEastWestPlacementSubnetList(this, "east_west_placement_subnet", true);
  public get eastWestPlacementSubnet() {
    return this._eastWestPlacementSubnet;
  }
  public putEastWestPlacementSubnet(value: CloudDockerConfigurationEastWestPlacementSubnet[] | cdktf.IResolvable) {
    this._eastWestPlacementSubnet.internalValue = value;
  }
  public resetEastWestPlacementSubnet() {
    this._eastWestPlacementSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestPlacementSubnetInput() {
    return this._eastWestPlacementSubnet.internalValue;
  }

  // se_exclude_attributes - computed: false, optional: true, required: false
  private _seExcludeAttributes = new CloudDockerConfigurationSeExcludeAttributesList(this, "se_exclude_attributes", false);
  public get seExcludeAttributes() {
    return this._seExcludeAttributes;
  }
  public putSeExcludeAttributes(value: CloudDockerConfigurationSeExcludeAttributes[] | cdktf.IResolvable) {
    this._seExcludeAttributes.internalValue = value;
  }
  public resetSeExcludeAttributes() {
    this._seExcludeAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seExcludeAttributesInput() {
    return this._seExcludeAttributes.internalValue;
  }

  // se_include_attributes - computed: false, optional: true, required: false
  private _seIncludeAttributes = new CloudDockerConfigurationSeIncludeAttributesList(this, "se_include_attributes", false);
  public get seIncludeAttributes() {
    return this._seIncludeAttributes;
  }
  public putSeIncludeAttributes(value: CloudDockerConfigurationSeIncludeAttributes[] | cdktf.IResolvable) {
    this._seIncludeAttributes.internalValue = value;
  }
  public resetSeIncludeAttributes() {
    this._seIncludeAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seIncludeAttributesInput() {
    return this._seIncludeAttributes.internalValue;
  }
}

export class CloudDockerConfigurationList extends cdktf.ComplexList {
  public internalValue? : CloudDockerConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CloudDockerConfigurationOutputReference {
    return new CloudDockerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGcpConfigurationEncryptionKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#gcs_bucket_kms_key_id Cloud#gcs_bucket_kms_key_id}
  */
  readonly gcsBucketKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#gcs_objects_kms_key_id Cloud#gcs_objects_kms_key_id}
  */
  readonly gcsObjectsKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_disk_kms_key_id Cloud#se_disk_kms_key_id}
  */
  readonly seDiskKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_image_kms_key_id Cloud#se_image_kms_key_id}
  */
  readonly seImageKmsKeyId?: string;
}

export function cloudGcpConfigurationEncryptionKeysToTerraform(struct?: CloudGcpConfigurationEncryptionKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcs_bucket_kms_key_id: cdktf.stringToTerraform(struct!.gcsBucketKmsKeyId),
    gcs_objects_kms_key_id: cdktf.stringToTerraform(struct!.gcsObjectsKmsKeyId),
    se_disk_kms_key_id: cdktf.stringToTerraform(struct!.seDiskKmsKeyId),
    se_image_kms_key_id: cdktf.stringToTerraform(struct!.seImageKmsKeyId),
  }
}


export function cloudGcpConfigurationEncryptionKeysToHclTerraform(struct?: CloudGcpConfigurationEncryptionKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcs_bucket_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.gcsBucketKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_objects_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.gcsObjectsKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_disk_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.seDiskKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_image_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.seImageKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpConfigurationEncryptionKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGcpConfigurationEncryptionKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcsBucketKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsBucketKmsKeyId = this._gcsBucketKmsKeyId;
    }
    if (this._gcsObjectsKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsObjectsKmsKeyId = this._gcsObjectsKmsKeyId;
    }
    if (this._seDiskKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.seDiskKmsKeyId = this._seDiskKmsKeyId;
    }
    if (this._seImageKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.seImageKmsKeyId = this._seImageKmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpConfigurationEncryptionKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gcsBucketKmsKeyId = undefined;
      this._gcsObjectsKmsKeyId = undefined;
      this._seDiskKmsKeyId = undefined;
      this._seImageKmsKeyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gcsBucketKmsKeyId = value.gcsBucketKmsKeyId;
      this._gcsObjectsKmsKeyId = value.gcsObjectsKmsKeyId;
      this._seDiskKmsKeyId = value.seDiskKmsKeyId;
      this._seImageKmsKeyId = value.seImageKmsKeyId;
    }
  }

  // gcs_bucket_kms_key_id - computed: true, optional: true, required: false
  private _gcsBucketKmsKeyId?: string; 
  public get gcsBucketKmsKeyId() {
    return this.getStringAttribute('gcs_bucket_kms_key_id');
  }
  public set gcsBucketKmsKeyId(value: string) {
    this._gcsBucketKmsKeyId = value;
  }
  public resetGcsBucketKmsKeyId() {
    this._gcsBucketKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsBucketKmsKeyIdInput() {
    return this._gcsBucketKmsKeyId;
  }

  // gcs_objects_kms_key_id - computed: true, optional: true, required: false
  private _gcsObjectsKmsKeyId?: string; 
  public get gcsObjectsKmsKeyId() {
    return this.getStringAttribute('gcs_objects_kms_key_id');
  }
  public set gcsObjectsKmsKeyId(value: string) {
    this._gcsObjectsKmsKeyId = value;
  }
  public resetGcsObjectsKmsKeyId() {
    this._gcsObjectsKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsObjectsKmsKeyIdInput() {
    return this._gcsObjectsKmsKeyId;
  }

  // se_disk_kms_key_id - computed: true, optional: true, required: false
  private _seDiskKmsKeyId?: string; 
  public get seDiskKmsKeyId() {
    return this.getStringAttribute('se_disk_kms_key_id');
  }
  public set seDiskKmsKeyId(value: string) {
    this._seDiskKmsKeyId = value;
  }
  public resetSeDiskKmsKeyId() {
    this._seDiskKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDiskKmsKeyIdInput() {
    return this._seDiskKmsKeyId;
  }

  // se_image_kms_key_id - computed: true, optional: true, required: false
  private _seImageKmsKeyId?: string; 
  public get seImageKmsKeyId() {
    return this.getStringAttribute('se_image_kms_key_id');
  }
  public set seImageKmsKeyId(value: string) {
    this._seImageKmsKeyId = value;
  }
  public resetSeImageKmsKeyId() {
    this._seImageKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seImageKmsKeyIdInput() {
    return this._seImageKmsKeyId;
  }
}

export class CloudGcpConfigurationEncryptionKeysList extends cdktf.ComplexList {
  public internalValue? : CloudGcpConfigurationEncryptionKeys[] | cdktf.IResolvable

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
  public get(index: number): CloudGcpConfigurationEncryptionKeysOutputReference {
    return new CloudGcpConfigurationEncryptionKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGcpConfigurationNetworkConfigInband {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vpc_network_name Cloud#vpc_network_name}
  */
  readonly vpcNetworkName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vpc_project_id Cloud#vpc_project_id}
  */
  readonly vpcProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vpc_subnet_name Cloud#vpc_subnet_name}
  */
  readonly vpcSubnetName: string;
}

export function cloudGcpConfigurationNetworkConfigInbandToTerraform(struct?: CloudGcpConfigurationNetworkConfigInband | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpc_network_name: cdktf.stringToTerraform(struct!.vpcNetworkName),
    vpc_project_id: cdktf.stringToTerraform(struct!.vpcProjectId),
    vpc_subnet_name: cdktf.stringToTerraform(struct!.vpcSubnetName),
  }
}


export function cloudGcpConfigurationNetworkConfigInbandToHclTerraform(struct?: CloudGcpConfigurationNetworkConfigInband | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpc_network_name: {
      value: cdktf.stringToHclTerraform(struct!.vpcNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_project_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.vpcSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpConfigurationNetworkConfigInbandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGcpConfigurationNetworkConfigInband | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcNetworkName = this._vpcNetworkName;
    }
    if (this._vpcProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcProjectId = this._vpcProjectId;
    }
    if (this._vpcSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcSubnetName = this._vpcSubnetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpConfigurationNetworkConfigInband | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcNetworkName = undefined;
      this._vpcProjectId = undefined;
      this._vpcSubnetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcNetworkName = value.vpcNetworkName;
      this._vpcProjectId = value.vpcProjectId;
      this._vpcSubnetName = value.vpcSubnetName;
    }
  }

  // vpc_network_name - computed: false, optional: false, required: true
  private _vpcNetworkName?: string; 
  public get vpcNetworkName() {
    return this.getStringAttribute('vpc_network_name');
  }
  public set vpcNetworkName(value: string) {
    this._vpcNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNetworkNameInput() {
    return this._vpcNetworkName;
  }

  // vpc_project_id - computed: true, optional: true, required: false
  private _vpcProjectId?: string; 
  public get vpcProjectId() {
    return this.getStringAttribute('vpc_project_id');
  }
  public set vpcProjectId(value: string) {
    this._vpcProjectId = value;
  }
  public resetVpcProjectId() {
    this._vpcProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcProjectIdInput() {
    return this._vpcProjectId;
  }

  // vpc_subnet_name - computed: false, optional: false, required: true
  private _vpcSubnetName?: string; 
  public get vpcSubnetName() {
    return this.getStringAttribute('vpc_subnet_name');
  }
  public set vpcSubnetName(value: string) {
    this._vpcSubnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSubnetNameInput() {
    return this._vpcSubnetName;
  }
}

export class CloudGcpConfigurationNetworkConfigInbandList extends cdktf.ComplexList {
  public internalValue? : CloudGcpConfigurationNetworkConfigInband[] | cdktf.IResolvable

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
  public get(index: number): CloudGcpConfigurationNetworkConfigInbandOutputReference {
    return new CloudGcpConfigurationNetworkConfigInbandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGcpConfigurationNetworkConfigOneArm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#data_vpc_network_name Cloud#data_vpc_network_name}
  */
  readonly dataVpcNetworkName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#data_vpc_project_id Cloud#data_vpc_project_id}
  */
  readonly dataVpcProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#data_vpc_subnet_name Cloud#data_vpc_subnet_name}
  */
  readonly dataVpcSubnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#management_vpc_network_name Cloud#management_vpc_network_name}
  */
  readonly managementVpcNetworkName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#management_vpc_project_id Cloud#management_vpc_project_id}
  */
  readonly managementVpcProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#management_vpc_subnet_name Cloud#management_vpc_subnet_name}
  */
  readonly managementVpcSubnetName: string;
}

export function cloudGcpConfigurationNetworkConfigOneArmToTerraform(struct?: CloudGcpConfigurationNetworkConfigOneArm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_vpc_network_name: cdktf.stringToTerraform(struct!.dataVpcNetworkName),
    data_vpc_project_id: cdktf.stringToTerraform(struct!.dataVpcProjectId),
    data_vpc_subnet_name: cdktf.stringToTerraform(struct!.dataVpcSubnetName),
    management_vpc_network_name: cdktf.stringToTerraform(struct!.managementVpcNetworkName),
    management_vpc_project_id: cdktf.stringToTerraform(struct!.managementVpcProjectId),
    management_vpc_subnet_name: cdktf.stringToTerraform(struct!.managementVpcSubnetName),
  }
}


export function cloudGcpConfigurationNetworkConfigOneArmToHclTerraform(struct?: CloudGcpConfigurationNetworkConfigOneArm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_vpc_network_name: {
      value: cdktf.stringToHclTerraform(struct!.dataVpcNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_vpc_project_id: {
      value: cdktf.stringToHclTerraform(struct!.dataVpcProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_vpc_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.dataVpcSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_vpc_network_name: {
      value: cdktf.stringToHclTerraform(struct!.managementVpcNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_vpc_project_id: {
      value: cdktf.stringToHclTerraform(struct!.managementVpcProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_vpc_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.managementVpcSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpConfigurationNetworkConfigOneArmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGcpConfigurationNetworkConfigOneArm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataVpcNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVpcNetworkName = this._dataVpcNetworkName;
    }
    if (this._dataVpcProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVpcProjectId = this._dataVpcProjectId;
    }
    if (this._dataVpcSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVpcSubnetName = this._dataVpcSubnetName;
    }
    if (this._managementVpcNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementVpcNetworkName = this._managementVpcNetworkName;
    }
    if (this._managementVpcProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementVpcProjectId = this._managementVpcProjectId;
    }
    if (this._managementVpcSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementVpcSubnetName = this._managementVpcSubnetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpConfigurationNetworkConfigOneArm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataVpcNetworkName = undefined;
      this._dataVpcProjectId = undefined;
      this._dataVpcSubnetName = undefined;
      this._managementVpcNetworkName = undefined;
      this._managementVpcProjectId = undefined;
      this._managementVpcSubnetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataVpcNetworkName = value.dataVpcNetworkName;
      this._dataVpcProjectId = value.dataVpcProjectId;
      this._dataVpcSubnetName = value.dataVpcSubnetName;
      this._managementVpcNetworkName = value.managementVpcNetworkName;
      this._managementVpcProjectId = value.managementVpcProjectId;
      this._managementVpcSubnetName = value.managementVpcSubnetName;
    }
  }

  // data_vpc_network_name - computed: false, optional: false, required: true
  private _dataVpcNetworkName?: string; 
  public get dataVpcNetworkName() {
    return this.getStringAttribute('data_vpc_network_name');
  }
  public set dataVpcNetworkName(value: string) {
    this._dataVpcNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVpcNetworkNameInput() {
    return this._dataVpcNetworkName;
  }

  // data_vpc_project_id - computed: true, optional: true, required: false
  private _dataVpcProjectId?: string; 
  public get dataVpcProjectId() {
    return this.getStringAttribute('data_vpc_project_id');
  }
  public set dataVpcProjectId(value: string) {
    this._dataVpcProjectId = value;
  }
  public resetDataVpcProjectId() {
    this._dataVpcProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVpcProjectIdInput() {
    return this._dataVpcProjectId;
  }

  // data_vpc_subnet_name - computed: false, optional: false, required: true
  private _dataVpcSubnetName?: string; 
  public get dataVpcSubnetName() {
    return this.getStringAttribute('data_vpc_subnet_name');
  }
  public set dataVpcSubnetName(value: string) {
    this._dataVpcSubnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVpcSubnetNameInput() {
    return this._dataVpcSubnetName;
  }

  // management_vpc_network_name - computed: false, optional: false, required: true
  private _managementVpcNetworkName?: string; 
  public get managementVpcNetworkName() {
    return this.getStringAttribute('management_vpc_network_name');
  }
  public set managementVpcNetworkName(value: string) {
    this._managementVpcNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementVpcNetworkNameInput() {
    return this._managementVpcNetworkName;
  }

  // management_vpc_project_id - computed: true, optional: true, required: false
  private _managementVpcProjectId?: string; 
  public get managementVpcProjectId() {
    return this.getStringAttribute('management_vpc_project_id');
  }
  public set managementVpcProjectId(value: string) {
    this._managementVpcProjectId = value;
  }
  public resetManagementVpcProjectId() {
    this._managementVpcProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementVpcProjectIdInput() {
    return this._managementVpcProjectId;
  }

  // management_vpc_subnet_name - computed: false, optional: false, required: true
  private _managementVpcSubnetName?: string; 
  public get managementVpcSubnetName() {
    return this.getStringAttribute('management_vpc_subnet_name');
  }
  public set managementVpcSubnetName(value: string) {
    this._managementVpcSubnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementVpcSubnetNameInput() {
    return this._managementVpcSubnetName;
  }
}

export class CloudGcpConfigurationNetworkConfigOneArmList extends cdktf.ComplexList {
  public internalValue? : CloudGcpConfigurationNetworkConfigOneArm[] | cdktf.IResolvable

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
  public get(index: number): CloudGcpConfigurationNetworkConfigOneArmOutputReference {
    return new CloudGcpConfigurationNetworkConfigOneArmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGcpConfigurationNetworkConfigTwoArm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#backend_data_vpc_network_name Cloud#backend_data_vpc_network_name}
  */
  readonly backendDataVpcNetworkName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#backend_data_vpc_project_id Cloud#backend_data_vpc_project_id}
  */
  readonly backendDataVpcProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#backend_data_vpc_subnet_name Cloud#backend_data_vpc_subnet_name}
  */
  readonly backendDataVpcSubnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#frontend_data_vpc_network_name Cloud#frontend_data_vpc_network_name}
  */
  readonly frontendDataVpcNetworkName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#frontend_data_vpc_project_id Cloud#frontend_data_vpc_project_id}
  */
  readonly frontendDataVpcProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#frontend_data_vpc_subnet_name Cloud#frontend_data_vpc_subnet_name}
  */
  readonly frontendDataVpcSubnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#management_vpc_network_name Cloud#management_vpc_network_name}
  */
  readonly managementVpcNetworkName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#management_vpc_project_id Cloud#management_vpc_project_id}
  */
  readonly managementVpcProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#management_vpc_subnet_name Cloud#management_vpc_subnet_name}
  */
  readonly managementVpcSubnetName: string;
}

export function cloudGcpConfigurationNetworkConfigTwoArmToTerraform(struct?: CloudGcpConfigurationNetworkConfigTwoArm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_data_vpc_network_name: cdktf.stringToTerraform(struct!.backendDataVpcNetworkName),
    backend_data_vpc_project_id: cdktf.stringToTerraform(struct!.backendDataVpcProjectId),
    backend_data_vpc_subnet_name: cdktf.stringToTerraform(struct!.backendDataVpcSubnetName),
    frontend_data_vpc_network_name: cdktf.stringToTerraform(struct!.frontendDataVpcNetworkName),
    frontend_data_vpc_project_id: cdktf.stringToTerraform(struct!.frontendDataVpcProjectId),
    frontend_data_vpc_subnet_name: cdktf.stringToTerraform(struct!.frontendDataVpcSubnetName),
    management_vpc_network_name: cdktf.stringToTerraform(struct!.managementVpcNetworkName),
    management_vpc_project_id: cdktf.stringToTerraform(struct!.managementVpcProjectId),
    management_vpc_subnet_name: cdktf.stringToTerraform(struct!.managementVpcSubnetName),
  }
}


export function cloudGcpConfigurationNetworkConfigTwoArmToHclTerraform(struct?: CloudGcpConfigurationNetworkConfigTwoArm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_data_vpc_network_name: {
      value: cdktf.stringToHclTerraform(struct!.backendDataVpcNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_data_vpc_project_id: {
      value: cdktf.stringToHclTerraform(struct!.backendDataVpcProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_data_vpc_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.backendDataVpcSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frontend_data_vpc_network_name: {
      value: cdktf.stringToHclTerraform(struct!.frontendDataVpcNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frontend_data_vpc_project_id: {
      value: cdktf.stringToHclTerraform(struct!.frontendDataVpcProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frontend_data_vpc_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.frontendDataVpcSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_vpc_network_name: {
      value: cdktf.stringToHclTerraform(struct!.managementVpcNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_vpc_project_id: {
      value: cdktf.stringToHclTerraform(struct!.managementVpcProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_vpc_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.managementVpcSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpConfigurationNetworkConfigTwoArmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGcpConfigurationNetworkConfigTwoArm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendDataVpcNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendDataVpcNetworkName = this._backendDataVpcNetworkName;
    }
    if (this._backendDataVpcProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendDataVpcProjectId = this._backendDataVpcProjectId;
    }
    if (this._backendDataVpcSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendDataVpcSubnetName = this._backendDataVpcSubnetName;
    }
    if (this._frontendDataVpcNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontendDataVpcNetworkName = this._frontendDataVpcNetworkName;
    }
    if (this._frontendDataVpcProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontendDataVpcProjectId = this._frontendDataVpcProjectId;
    }
    if (this._frontendDataVpcSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontendDataVpcSubnetName = this._frontendDataVpcSubnetName;
    }
    if (this._managementVpcNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementVpcNetworkName = this._managementVpcNetworkName;
    }
    if (this._managementVpcProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementVpcProjectId = this._managementVpcProjectId;
    }
    if (this._managementVpcSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementVpcSubnetName = this._managementVpcSubnetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpConfigurationNetworkConfigTwoArm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendDataVpcNetworkName = undefined;
      this._backendDataVpcProjectId = undefined;
      this._backendDataVpcSubnetName = undefined;
      this._frontendDataVpcNetworkName = undefined;
      this._frontendDataVpcProjectId = undefined;
      this._frontendDataVpcSubnetName = undefined;
      this._managementVpcNetworkName = undefined;
      this._managementVpcProjectId = undefined;
      this._managementVpcSubnetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendDataVpcNetworkName = value.backendDataVpcNetworkName;
      this._backendDataVpcProjectId = value.backendDataVpcProjectId;
      this._backendDataVpcSubnetName = value.backendDataVpcSubnetName;
      this._frontendDataVpcNetworkName = value.frontendDataVpcNetworkName;
      this._frontendDataVpcProjectId = value.frontendDataVpcProjectId;
      this._frontendDataVpcSubnetName = value.frontendDataVpcSubnetName;
      this._managementVpcNetworkName = value.managementVpcNetworkName;
      this._managementVpcProjectId = value.managementVpcProjectId;
      this._managementVpcSubnetName = value.managementVpcSubnetName;
    }
  }

  // backend_data_vpc_network_name - computed: false, optional: false, required: true
  private _backendDataVpcNetworkName?: string; 
  public get backendDataVpcNetworkName() {
    return this.getStringAttribute('backend_data_vpc_network_name');
  }
  public set backendDataVpcNetworkName(value: string) {
    this._backendDataVpcNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendDataVpcNetworkNameInput() {
    return this._backendDataVpcNetworkName;
  }

  // backend_data_vpc_project_id - computed: true, optional: true, required: false
  private _backendDataVpcProjectId?: string; 
  public get backendDataVpcProjectId() {
    return this.getStringAttribute('backend_data_vpc_project_id');
  }
  public set backendDataVpcProjectId(value: string) {
    this._backendDataVpcProjectId = value;
  }
  public resetBackendDataVpcProjectId() {
    this._backendDataVpcProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendDataVpcProjectIdInput() {
    return this._backendDataVpcProjectId;
  }

  // backend_data_vpc_subnet_name - computed: false, optional: false, required: true
  private _backendDataVpcSubnetName?: string; 
  public get backendDataVpcSubnetName() {
    return this.getStringAttribute('backend_data_vpc_subnet_name');
  }
  public set backendDataVpcSubnetName(value: string) {
    this._backendDataVpcSubnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendDataVpcSubnetNameInput() {
    return this._backendDataVpcSubnetName;
  }

  // frontend_data_vpc_network_name - computed: false, optional: false, required: true
  private _frontendDataVpcNetworkName?: string; 
  public get frontendDataVpcNetworkName() {
    return this.getStringAttribute('frontend_data_vpc_network_name');
  }
  public set frontendDataVpcNetworkName(value: string) {
    this._frontendDataVpcNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendDataVpcNetworkNameInput() {
    return this._frontendDataVpcNetworkName;
  }

  // frontend_data_vpc_project_id - computed: true, optional: true, required: false
  private _frontendDataVpcProjectId?: string; 
  public get frontendDataVpcProjectId() {
    return this.getStringAttribute('frontend_data_vpc_project_id');
  }
  public set frontendDataVpcProjectId(value: string) {
    this._frontendDataVpcProjectId = value;
  }
  public resetFrontendDataVpcProjectId() {
    this._frontendDataVpcProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendDataVpcProjectIdInput() {
    return this._frontendDataVpcProjectId;
  }

  // frontend_data_vpc_subnet_name - computed: false, optional: false, required: true
  private _frontendDataVpcSubnetName?: string; 
  public get frontendDataVpcSubnetName() {
    return this.getStringAttribute('frontend_data_vpc_subnet_name');
  }
  public set frontendDataVpcSubnetName(value: string) {
    this._frontendDataVpcSubnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendDataVpcSubnetNameInput() {
    return this._frontendDataVpcSubnetName;
  }

  // management_vpc_network_name - computed: false, optional: false, required: true
  private _managementVpcNetworkName?: string; 
  public get managementVpcNetworkName() {
    return this.getStringAttribute('management_vpc_network_name');
  }
  public set managementVpcNetworkName(value: string) {
    this._managementVpcNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementVpcNetworkNameInput() {
    return this._managementVpcNetworkName;
  }

  // management_vpc_project_id - computed: true, optional: true, required: false
  private _managementVpcProjectId?: string; 
  public get managementVpcProjectId() {
    return this.getStringAttribute('management_vpc_project_id');
  }
  public set managementVpcProjectId(value: string) {
    this._managementVpcProjectId = value;
  }
  public resetManagementVpcProjectId() {
    this._managementVpcProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementVpcProjectIdInput() {
    return this._managementVpcProjectId;
  }

  // management_vpc_subnet_name - computed: false, optional: false, required: true
  private _managementVpcSubnetName?: string; 
  public get managementVpcSubnetName() {
    return this.getStringAttribute('management_vpc_subnet_name');
  }
  public set managementVpcSubnetName(value: string) {
    this._managementVpcSubnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementVpcSubnetNameInput() {
    return this._managementVpcSubnetName;
  }
}

export class CloudGcpConfigurationNetworkConfigTwoArmList extends cdktf.ComplexList {
  public internalValue? : CloudGcpConfigurationNetworkConfigTwoArm[] | cdktf.IResolvable

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
  public get(index: number): CloudGcpConfigurationNetworkConfigTwoArmOutputReference {
    return new CloudGcpConfigurationNetworkConfigTwoArmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGcpConfigurationNetworkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#config Cloud#config}
  */
  readonly config: string;
  /**
  * inband block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#inband Cloud#inband}
  */
  readonly inband?: CloudGcpConfigurationNetworkConfigInband[] | cdktf.IResolvable;
  /**
  * one_arm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#one_arm Cloud#one_arm}
  */
  readonly oneArm?: CloudGcpConfigurationNetworkConfigOneArm[] | cdktf.IResolvable;
  /**
  * two_arm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#two_arm Cloud#two_arm}
  */
  readonly twoArm?: CloudGcpConfigurationNetworkConfigTwoArm[] | cdktf.IResolvable;
}

export function cloudGcpConfigurationNetworkConfigToTerraform(struct?: CloudGcpConfigurationNetworkConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    inband: cdktf.listMapper(cloudGcpConfigurationNetworkConfigInbandToTerraform, true)(struct!.inband),
    one_arm: cdktf.listMapper(cloudGcpConfigurationNetworkConfigOneArmToTerraform, true)(struct!.oneArm),
    two_arm: cdktf.listMapper(cloudGcpConfigurationNetworkConfigTwoArmToTerraform, true)(struct!.twoArm),
  }
}


export function cloudGcpConfigurationNetworkConfigToHclTerraform(struct?: CloudGcpConfigurationNetworkConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inband: {
      value: cdktf.listMapperHcl(cloudGcpConfigurationNetworkConfigInbandToHclTerraform, true)(struct!.inband),
      isBlock: true,
      type: "set",
      storageClassType: "CloudGcpConfigurationNetworkConfigInbandList",
    },
    one_arm: {
      value: cdktf.listMapperHcl(cloudGcpConfigurationNetworkConfigOneArmToHclTerraform, true)(struct!.oneArm),
      isBlock: true,
      type: "set",
      storageClassType: "CloudGcpConfigurationNetworkConfigOneArmList",
    },
    two_arm: {
      value: cdktf.listMapperHcl(cloudGcpConfigurationNetworkConfigTwoArmToHclTerraform, true)(struct!.twoArm),
      isBlock: true,
      type: "set",
      storageClassType: "CloudGcpConfigurationNetworkConfigTwoArmList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpConfigurationNetworkConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGcpConfigurationNetworkConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._inband?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inband = this._inband?.internalValue;
    }
    if (this._oneArm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneArm = this._oneArm?.internalValue;
    }
    if (this._twoArm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoArm = this._twoArm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpConfigurationNetworkConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._inband.internalValue = undefined;
      this._oneArm.internalValue = undefined;
      this._twoArm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._inband.internalValue = value.inband;
      this._oneArm.internalValue = value.oneArm;
      this._twoArm.internalValue = value.twoArm;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // inband - computed: false, optional: true, required: false
  private _inband = new CloudGcpConfigurationNetworkConfigInbandList(this, "inband", true);
  public get inband() {
    return this._inband;
  }
  public putInband(value: CloudGcpConfigurationNetworkConfigInband[] | cdktf.IResolvable) {
    this._inband.internalValue = value;
  }
  public resetInband() {
    this._inband.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inbandInput() {
    return this._inband.internalValue;
  }

  // one_arm - computed: false, optional: true, required: false
  private _oneArm = new CloudGcpConfigurationNetworkConfigOneArmList(this, "one_arm", true);
  public get oneArm() {
    return this._oneArm;
  }
  public putOneArm(value: CloudGcpConfigurationNetworkConfigOneArm[] | cdktf.IResolvable) {
    this._oneArm.internalValue = value;
  }
  public resetOneArm() {
    this._oneArm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneArmInput() {
    return this._oneArm.internalValue;
  }

  // two_arm - computed: false, optional: true, required: false
  private _twoArm = new CloudGcpConfigurationNetworkConfigTwoArmList(this, "two_arm", true);
  public get twoArm() {
    return this._twoArm;
  }
  public putTwoArm(value: CloudGcpConfigurationNetworkConfigTwoArm[] | cdktf.IResolvable) {
    this._twoArm.internalValue = value;
  }
  public resetTwoArm() {
    this._twoArm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoArmInput() {
    return this._twoArm.internalValue;
  }
}

export class CloudGcpConfigurationNetworkConfigList extends cdktf.ComplexList {
  public internalValue? : CloudGcpConfigurationNetworkConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudGcpConfigurationNetworkConfigOutputReference {
    return new CloudGcpConfigurationNetworkConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGcpConfigurationVipAllocationStrategyIlb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#cloud_router_names Cloud#cloud_router_names}
  */
  readonly cloudRouterNames?: string[];
}

export function cloudGcpConfigurationVipAllocationStrategyIlbToTerraform(struct?: CloudGcpConfigurationVipAllocationStrategyIlb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_router_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cloudRouterNames),
  }
}


export function cloudGcpConfigurationVipAllocationStrategyIlbToHclTerraform(struct?: CloudGcpConfigurationVipAllocationStrategyIlb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_router_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cloudRouterNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpConfigurationVipAllocationStrategyIlbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGcpConfigurationVipAllocationStrategyIlb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudRouterNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudRouterNames = this._cloudRouterNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpConfigurationVipAllocationStrategyIlb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudRouterNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudRouterNames = value.cloudRouterNames;
    }
  }

  // cloud_router_names - computed: false, optional: true, required: false
  private _cloudRouterNames?: string[]; 
  public get cloudRouterNames() {
    return this.getListAttribute('cloud_router_names');
  }
  public set cloudRouterNames(value: string[]) {
    this._cloudRouterNames = value;
  }
  public resetCloudRouterNames() {
    this._cloudRouterNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRouterNamesInput() {
    return this._cloudRouterNames;
  }
}

export class CloudGcpConfigurationVipAllocationStrategyIlbList extends cdktf.ComplexList {
  public internalValue? : CloudGcpConfigurationVipAllocationStrategyIlb[] | cdktf.IResolvable

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
  public get(index: number): CloudGcpConfigurationVipAllocationStrategyIlbOutputReference {
    return new CloudGcpConfigurationVipAllocationStrategyIlbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGcpConfigurationVipAllocationStrategyRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#match_se_group_subnet Cloud#match_se_group_subnet}
  */
  readonly matchSeGroupSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#route_priority Cloud#route_priority}
  */
  readonly routePriority?: string;
}

export function cloudGcpConfigurationVipAllocationStrategyRoutesToTerraform(struct?: CloudGcpConfigurationVipAllocationStrategyRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_se_group_subnet: cdktf.stringToTerraform(struct!.matchSeGroupSubnet),
    route_priority: cdktf.stringToTerraform(struct!.routePriority),
  }
}


export function cloudGcpConfigurationVipAllocationStrategyRoutesToHclTerraform(struct?: CloudGcpConfigurationVipAllocationStrategyRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_se_group_subnet: {
      value: cdktf.stringToHclTerraform(struct!.matchSeGroupSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_priority: {
      value: cdktf.stringToHclTerraform(struct!.routePriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpConfigurationVipAllocationStrategyRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGcpConfigurationVipAllocationStrategyRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchSeGroupSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchSeGroupSubnet = this._matchSeGroupSubnet;
    }
    if (this._routePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePriority = this._routePriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpConfigurationVipAllocationStrategyRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchSeGroupSubnet = undefined;
      this._routePriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchSeGroupSubnet = value.matchSeGroupSubnet;
      this._routePriority = value.routePriority;
    }
  }

  // match_se_group_subnet - computed: false, optional: true, required: false
  private _matchSeGroupSubnet?: string; 
  public get matchSeGroupSubnet() {
    return this.getStringAttribute('match_se_group_subnet');
  }
  public set matchSeGroupSubnet(value: string) {
    this._matchSeGroupSubnet = value;
  }
  public resetMatchSeGroupSubnet() {
    this._matchSeGroupSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSeGroupSubnetInput() {
    return this._matchSeGroupSubnet;
  }

  // route_priority - computed: false, optional: true, required: false
  private _routePriority?: string; 
  public get routePriority() {
    return this.getStringAttribute('route_priority');
  }
  public set routePriority(value: string) {
    this._routePriority = value;
  }
  public resetRoutePriority() {
    this._routePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePriorityInput() {
    return this._routePriority;
  }
}

export class CloudGcpConfigurationVipAllocationStrategyRoutesList extends cdktf.ComplexList {
  public internalValue? : CloudGcpConfigurationVipAllocationStrategyRoutes[] | cdktf.IResolvable

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
  public get(index: number): CloudGcpConfigurationVipAllocationStrategyRoutesOutputReference {
    return new CloudGcpConfigurationVipAllocationStrategyRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGcpConfigurationVipAllocationStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#mode Cloud#mode}
  */
  readonly mode?: string;
  /**
  * ilb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ilb Cloud#ilb}
  */
  readonly ilb?: CloudGcpConfigurationVipAllocationStrategyIlb[] | cdktf.IResolvable;
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#routes Cloud#routes}
  */
  readonly routes?: CloudGcpConfigurationVipAllocationStrategyRoutes[] | cdktf.IResolvable;
}

export function cloudGcpConfigurationVipAllocationStrategyToTerraform(struct?: CloudGcpConfigurationVipAllocationStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    ilb: cdktf.listMapper(cloudGcpConfigurationVipAllocationStrategyIlbToTerraform, true)(struct!.ilb),
    routes: cdktf.listMapper(cloudGcpConfigurationVipAllocationStrategyRoutesToTerraform, true)(struct!.routes),
  }
}


export function cloudGcpConfigurationVipAllocationStrategyToHclTerraform(struct?: CloudGcpConfigurationVipAllocationStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ilb: {
      value: cdktf.listMapperHcl(cloudGcpConfigurationVipAllocationStrategyIlbToHclTerraform, true)(struct!.ilb),
      isBlock: true,
      type: "set",
      storageClassType: "CloudGcpConfigurationVipAllocationStrategyIlbList",
    },
    routes: {
      value: cdktf.listMapperHcl(cloudGcpConfigurationVipAllocationStrategyRoutesToHclTerraform, true)(struct!.routes),
      isBlock: true,
      type: "set",
      storageClassType: "CloudGcpConfigurationVipAllocationStrategyRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpConfigurationVipAllocationStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGcpConfigurationVipAllocationStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._ilb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ilb = this._ilb?.internalValue;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpConfigurationVipAllocationStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._ilb.internalValue = undefined;
      this._routes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._ilb.internalValue = value.ilb;
      this._routes.internalValue = value.routes;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // ilb - computed: false, optional: true, required: false
  private _ilb = new CloudGcpConfigurationVipAllocationStrategyIlbList(this, "ilb", true);
  public get ilb() {
    return this._ilb;
  }
  public putIlb(value: CloudGcpConfigurationVipAllocationStrategyIlb[] | cdktf.IResolvable) {
    this._ilb.internalValue = value;
  }
  public resetIlb() {
    this._ilb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ilbInput() {
    return this._ilb.internalValue;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new CloudGcpConfigurationVipAllocationStrategyRoutesList(this, "routes", true);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: CloudGcpConfigurationVipAllocationStrategyRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }
}

export class CloudGcpConfigurationVipAllocationStrategyList extends cdktf.ComplexList {
  public internalValue? : CloudGcpConfigurationVipAllocationStrategy[] | cdktf.IResolvable

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
  public get(index: number): CloudGcpConfigurationVipAllocationStrategyOutputReference {
    return new CloudGcpConfigurationVipAllocationStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGcpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#cloud_credentials_ref Cloud#cloud_credentials_ref}
  */
  readonly cloudCredentialsRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#firewall_target_tags Cloud#firewall_target_tags}
  */
  readonly firewallTargetTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#gcp_service_account_email Cloud#gcp_service_account_email}
  */
  readonly gcpServiceAccountEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#gcs_bucket_name Cloud#gcs_bucket_name}
  */
  readonly gcsBucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#gcs_project_id Cloud#gcs_project_id}
  */
  readonly gcsProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#region_name Cloud#region_name}
  */
  readonly regionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_project_id Cloud#se_project_id}
  */
  readonly seProjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#zones Cloud#zones}
  */
  readonly zones: string[];
  /**
  * encryption_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#encryption_keys Cloud#encryption_keys}
  */
  readonly encryptionKeys?: CloudGcpConfigurationEncryptionKeys[] | cdktf.IResolvable;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#network_config Cloud#network_config}
  */
  readonly networkConfig: CloudGcpConfigurationNetworkConfig[] | cdktf.IResolvable;
  /**
  * vip_allocation_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vip_allocation_strategy Cloud#vip_allocation_strategy}
  */
  readonly vipAllocationStrategy: CloudGcpConfigurationVipAllocationStrategy[] | cdktf.IResolvable;
}

export function cloudGcpConfigurationToTerraform(struct?: CloudGcpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_credentials_ref: cdktf.stringToTerraform(struct!.cloudCredentialsRef),
    firewall_target_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.firewallTargetTags),
    gcp_service_account_email: cdktf.stringToTerraform(struct!.gcpServiceAccountEmail),
    gcs_bucket_name: cdktf.stringToTerraform(struct!.gcsBucketName),
    gcs_project_id: cdktf.stringToTerraform(struct!.gcsProjectId),
    region_name: cdktf.stringToTerraform(struct!.regionName),
    se_project_id: cdktf.stringToTerraform(struct!.seProjectId),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
    encryption_keys: cdktf.listMapper(cloudGcpConfigurationEncryptionKeysToTerraform, true)(struct!.encryptionKeys),
    network_config: cdktf.listMapper(cloudGcpConfigurationNetworkConfigToTerraform, true)(struct!.networkConfig),
    vip_allocation_strategy: cdktf.listMapper(cloudGcpConfigurationVipAllocationStrategyToTerraform, true)(struct!.vipAllocationStrategy),
  }
}


export function cloudGcpConfigurationToHclTerraform(struct?: CloudGcpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_credentials_ref: {
      value: cdktf.stringToHclTerraform(struct!.cloudCredentialsRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firewall_target_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.firewallTargetTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gcp_service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.gcpServiceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.gcsBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_project_id: {
      value: cdktf.stringToHclTerraform(struct!.gcsProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_name: {
      value: cdktf.stringToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_project_id: {
      value: cdktf.stringToHclTerraform(struct!.seProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    encryption_keys: {
      value: cdktf.listMapperHcl(cloudGcpConfigurationEncryptionKeysToHclTerraform, true)(struct!.encryptionKeys),
      isBlock: true,
      type: "set",
      storageClassType: "CloudGcpConfigurationEncryptionKeysList",
    },
    network_config: {
      value: cdktf.listMapperHcl(cloudGcpConfigurationNetworkConfigToHclTerraform, true)(struct!.networkConfig),
      isBlock: true,
      type: "set",
      storageClassType: "CloudGcpConfigurationNetworkConfigList",
    },
    vip_allocation_strategy: {
      value: cdktf.listMapperHcl(cloudGcpConfigurationVipAllocationStrategyToHclTerraform, true)(struct!.vipAllocationStrategy),
      isBlock: true,
      type: "set",
      storageClassType: "CloudGcpConfigurationVipAllocationStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGcpConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGcpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudCredentialsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredentialsRef = this._cloudCredentialsRef;
    }
    if (this._firewallTargetTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallTargetTags = this._firewallTargetTags;
    }
    if (this._gcpServiceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccountEmail = this._gcpServiceAccountEmail;
    }
    if (this._gcsBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsBucketName = this._gcsBucketName;
    }
    if (this._gcsProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsProjectId = this._gcsProjectId;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    if (this._seProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.seProjectId = this._seProjectId;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    if (this._encryptionKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeys = this._encryptionKeys?.internalValue;
    }
    if (this._networkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfig = this._networkConfig?.internalValue;
    }
    if (this._vipAllocationStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipAllocationStrategy = this._vipAllocationStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGcpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudCredentialsRef = undefined;
      this._firewallTargetTags = undefined;
      this._gcpServiceAccountEmail = undefined;
      this._gcsBucketName = undefined;
      this._gcsProjectId = undefined;
      this._regionName = undefined;
      this._seProjectId = undefined;
      this._zones = undefined;
      this._encryptionKeys.internalValue = undefined;
      this._networkConfig.internalValue = undefined;
      this._vipAllocationStrategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudCredentialsRef = value.cloudCredentialsRef;
      this._firewallTargetTags = value.firewallTargetTags;
      this._gcpServiceAccountEmail = value.gcpServiceAccountEmail;
      this._gcsBucketName = value.gcsBucketName;
      this._gcsProjectId = value.gcsProjectId;
      this._regionName = value.regionName;
      this._seProjectId = value.seProjectId;
      this._zones = value.zones;
      this._encryptionKeys.internalValue = value.encryptionKeys;
      this._networkConfig.internalValue = value.networkConfig;
      this._vipAllocationStrategy.internalValue = value.vipAllocationStrategy;
    }
  }

  // cloud_credentials_ref - computed: true, optional: true, required: false
  private _cloudCredentialsRef?: string; 
  public get cloudCredentialsRef() {
    return this.getStringAttribute('cloud_credentials_ref');
  }
  public set cloudCredentialsRef(value: string) {
    this._cloudCredentialsRef = value;
  }
  public resetCloudCredentialsRef() {
    this._cloudCredentialsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredentialsRefInput() {
    return this._cloudCredentialsRef;
  }

  // firewall_target_tags - computed: false, optional: true, required: false
  private _firewallTargetTags?: string[]; 
  public get firewallTargetTags() {
    return this.getListAttribute('firewall_target_tags');
  }
  public set firewallTargetTags(value: string[]) {
    this._firewallTargetTags = value;
  }
  public resetFirewallTargetTags() {
    this._firewallTargetTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallTargetTagsInput() {
    return this._firewallTargetTags;
  }

  // gcp_service_account_email - computed: true, optional: true, required: false
  private _gcpServiceAccountEmail?: string; 
  public get gcpServiceAccountEmail() {
    return this.getStringAttribute('gcp_service_account_email');
  }
  public set gcpServiceAccountEmail(value: string) {
    this._gcpServiceAccountEmail = value;
  }
  public resetGcpServiceAccountEmail() {
    this._gcpServiceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountEmailInput() {
    return this._gcpServiceAccountEmail;
  }

  // gcs_bucket_name - computed: true, optional: true, required: false
  private _gcsBucketName?: string; 
  public get gcsBucketName() {
    return this.getStringAttribute('gcs_bucket_name');
  }
  public set gcsBucketName(value: string) {
    this._gcsBucketName = value;
  }
  public resetGcsBucketName() {
    this._gcsBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsBucketNameInput() {
    return this._gcsBucketName;
  }

  // gcs_project_id - computed: true, optional: true, required: false
  private _gcsProjectId?: string; 
  public get gcsProjectId() {
    return this.getStringAttribute('gcs_project_id');
  }
  public set gcsProjectId(value: string) {
    this._gcsProjectId = value;
  }
  public resetGcsProjectId() {
    this._gcsProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsProjectIdInput() {
    return this._gcsProjectId;
  }

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // se_project_id - computed: false, optional: false, required: true
  private _seProjectId?: string; 
  public get seProjectId() {
    return this.getStringAttribute('se_project_id');
  }
  public set seProjectId(value: string) {
    this._seProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seProjectIdInput() {
    return this._seProjectId;
  }

  // zones - computed: false, optional: false, required: true
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // encryption_keys - computed: false, optional: true, required: false
  private _encryptionKeys = new CloudGcpConfigurationEncryptionKeysList(this, "encryption_keys", true);
  public get encryptionKeys() {
    return this._encryptionKeys;
  }
  public putEncryptionKeys(value: CloudGcpConfigurationEncryptionKeys[] | cdktf.IResolvable) {
    this._encryptionKeys.internalValue = value;
  }
  public resetEncryptionKeys() {
    this._encryptionKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeysInput() {
    return this._encryptionKeys.internalValue;
  }

  // network_config - computed: false, optional: false, required: true
  private _networkConfig = new CloudGcpConfigurationNetworkConfigList(this, "network_config", true);
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: CloudGcpConfigurationNetworkConfig[] | cdktf.IResolvable) {
    this._networkConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // vip_allocation_strategy - computed: false, optional: false, required: true
  private _vipAllocationStrategy = new CloudGcpConfigurationVipAllocationStrategyList(this, "vip_allocation_strategy", true);
  public get vipAllocationStrategy() {
    return this._vipAllocationStrategy;
  }
  public putVipAllocationStrategy(value: CloudGcpConfigurationVipAllocationStrategy[] | cdktf.IResolvable) {
    this._vipAllocationStrategy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipAllocationStrategyInput() {
    return this._vipAllocationStrategy.internalValue;
  }
}

export class CloudGcpConfigurationList extends cdktf.ComplexList {
  public internalValue? : CloudGcpConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CloudGcpConfigurationOutputReference {
    return new CloudGcpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudLinuxserverConfigurationHostsHostAttr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#attr_key Cloud#attr_key}
  */
  readonly attrKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#attr_val Cloud#attr_val}
  */
  readonly attrVal?: string;
}

export function cloudLinuxserverConfigurationHostsHostAttrToTerraform(struct?: CloudLinuxserverConfigurationHostsHostAttr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attr_key: cdktf.stringToTerraform(struct!.attrKey),
    attr_val: cdktf.stringToTerraform(struct!.attrVal),
  }
}


export function cloudLinuxserverConfigurationHostsHostAttrToHclTerraform(struct?: CloudLinuxserverConfigurationHostsHostAttr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attr_key: {
      value: cdktf.stringToHclTerraform(struct!.attrKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_val: {
      value: cdktf.stringToHclTerraform(struct!.attrVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudLinuxserverConfigurationHostsHostAttrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudLinuxserverConfigurationHostsHostAttr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrKey = this._attrKey;
    }
    if (this._attrVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrVal = this._attrVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinuxserverConfigurationHostsHostAttr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrKey = undefined;
      this._attrVal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrKey = value.attrKey;
      this._attrVal = value.attrVal;
    }
  }

  // attr_key - computed: false, optional: false, required: true
  private _attrKey?: string; 
  public get attrKey() {
    return this.getStringAttribute('attr_key');
  }
  public set attrKey(value: string) {
    this._attrKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attrKeyInput() {
    return this._attrKey;
  }

  // attr_val - computed: true, optional: true, required: false
  private _attrVal?: string; 
  public get attrVal() {
    return this.getStringAttribute('attr_val');
  }
  public set attrVal(value: string) {
    this._attrVal = value;
  }
  public resetAttrVal() {
    this._attrVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrValInput() {
    return this._attrVal;
  }
}

export class CloudLinuxserverConfigurationHostsHostAttrList extends cdktf.ComplexList {
  public internalValue? : CloudLinuxserverConfigurationHostsHostAttr[] | cdktf.IResolvable

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
  public get(index: number): CloudLinuxserverConfigurationHostsHostAttrOutputReference {
    return new CloudLinuxserverConfigurationHostsHostAttrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudLinuxserverConfigurationHostsHostIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#addr Cloud#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#type Cloud#type}
  */
  readonly type: string;
}

export function cloudLinuxserverConfigurationHostsHostIpToTerraform(struct?: CloudLinuxserverConfigurationHostsHostIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudLinuxserverConfigurationHostsHostIpToHclTerraform(struct?: CloudLinuxserverConfigurationHostsHostIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudLinuxserverConfigurationHostsHostIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudLinuxserverConfigurationHostsHostIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinuxserverConfigurationHostsHostIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CloudLinuxserverConfigurationHostsHostIpList extends cdktf.ComplexList {
  public internalValue? : CloudLinuxserverConfigurationHostsHostIp[] | cdktf.IResolvable

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
  public get(index: number): CloudLinuxserverConfigurationHostsHostIpOutputReference {
    return new CloudLinuxserverConfigurationHostsHostIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudLinuxserverConfigurationHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#node_availability_zone Cloud#node_availability_zone}
  */
  readonly nodeAvailabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_group_ref Cloud#se_group_ref}
  */
  readonly seGroupRef?: string;
  /**
  * host_attr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#host_attr Cloud#host_attr}
  */
  readonly hostAttr?: CloudLinuxserverConfigurationHostsHostAttr[] | cdktf.IResolvable;
  /**
  * host_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#host_ip Cloud#host_ip}
  */
  readonly hostIp: CloudLinuxserverConfigurationHostsHostIp[] | cdktf.IResolvable;
}

export function cloudLinuxserverConfigurationHostsToTerraform(struct?: CloudLinuxserverConfigurationHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_availability_zone: cdktf.stringToTerraform(struct!.nodeAvailabilityZone),
    se_group_ref: cdktf.stringToTerraform(struct!.seGroupRef),
    host_attr: cdktf.listMapper(cloudLinuxserverConfigurationHostsHostAttrToTerraform, true)(struct!.hostAttr),
    host_ip: cdktf.listMapper(cloudLinuxserverConfigurationHostsHostIpToTerraform, true)(struct!.hostIp),
  }
}


export function cloudLinuxserverConfigurationHostsToHclTerraform(struct?: CloudLinuxserverConfigurationHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.nodeAvailabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.seGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_attr: {
      value: cdktf.listMapperHcl(cloudLinuxserverConfigurationHostsHostAttrToHclTerraform, true)(struct!.hostAttr),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinuxserverConfigurationHostsHostAttrList",
    },
    host_ip: {
      value: cdktf.listMapperHcl(cloudLinuxserverConfigurationHostsHostIpToHclTerraform, true)(struct!.hostIp),
      isBlock: true,
      type: "set",
      storageClassType: "CloudLinuxserverConfigurationHostsHostIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudLinuxserverConfigurationHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudLinuxserverConfigurationHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAvailabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAvailabilityZone = this._nodeAvailabilityZone;
    }
    if (this._seGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupRef = this._seGroupRef;
    }
    if (this._hostAttr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAttr = this._hostAttr?.internalValue;
    }
    if (this._hostIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIp = this._hostIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinuxserverConfigurationHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAvailabilityZone = undefined;
      this._seGroupRef = undefined;
      this._hostAttr.internalValue = undefined;
      this._hostIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAvailabilityZone = value.nodeAvailabilityZone;
      this._seGroupRef = value.seGroupRef;
      this._hostAttr.internalValue = value.hostAttr;
      this._hostIp.internalValue = value.hostIp;
    }
  }

  // node_availability_zone - computed: true, optional: true, required: false
  private _nodeAvailabilityZone?: string; 
  public get nodeAvailabilityZone() {
    return this.getStringAttribute('node_availability_zone');
  }
  public set nodeAvailabilityZone(value: string) {
    this._nodeAvailabilityZone = value;
  }
  public resetNodeAvailabilityZone() {
    this._nodeAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAvailabilityZoneInput() {
    return this._nodeAvailabilityZone;
  }

  // se_group_ref - computed: true, optional: true, required: false
  private _seGroupRef?: string; 
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }
  public set seGroupRef(value: string) {
    this._seGroupRef = value;
  }
  public resetSeGroupRef() {
    this._seGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupRefInput() {
    return this._seGroupRef;
  }

  // host_attr - computed: false, optional: true, required: false
  private _hostAttr = new CloudLinuxserverConfigurationHostsHostAttrList(this, "host_attr", false);
  public get hostAttr() {
    return this._hostAttr;
  }
  public putHostAttr(value: CloudLinuxserverConfigurationHostsHostAttr[] | cdktf.IResolvable) {
    this._hostAttr.internalValue = value;
  }
  public resetHostAttr() {
    this._hostAttr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAttrInput() {
    return this._hostAttr.internalValue;
  }

  // host_ip - computed: false, optional: false, required: true
  private _hostIp = new CloudLinuxserverConfigurationHostsHostIpList(this, "host_ip", true);
  public get hostIp() {
    return this._hostIp;
  }
  public putHostIp(value: CloudLinuxserverConfigurationHostsHostIp[] | cdktf.IResolvable) {
    this._hostIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpInput() {
    return this._hostIp.internalValue;
  }
}

export class CloudLinuxserverConfigurationHostsList extends cdktf.ComplexList {
  public internalValue? : CloudLinuxserverConfigurationHosts[] | cdktf.IResolvable

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
  public get(index: number): CloudLinuxserverConfigurationHostsOutputReference {
    return new CloudLinuxserverConfigurationHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudLinuxserverConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_inband_mgmt Cloud#se_inband_mgmt}
  */
  readonly seInbandMgmt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_log_disk_path Cloud#se_log_disk_path}
  */
  readonly seLogDiskPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_log_disk_size_gb Cloud#se_log_disk_size_gb}
  */
  readonly seLogDiskSizeGb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_sys_disk_path Cloud#se_sys_disk_path}
  */
  readonly seSysDiskPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_sys_disk_size_gb Cloud#se_sys_disk_size_gb}
  */
  readonly seSysDiskSizeGb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ssh_user_ref Cloud#ssh_user_ref}
  */
  readonly sshUserRef?: string;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#hosts Cloud#hosts}
  */
  readonly hosts?: CloudLinuxserverConfigurationHosts[] | cdktf.IResolvable;
}

export function cloudLinuxserverConfigurationToTerraform(struct?: CloudLinuxserverConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    se_inband_mgmt: cdktf.stringToTerraform(struct!.seInbandMgmt),
    se_log_disk_path: cdktf.stringToTerraform(struct!.seLogDiskPath),
    se_log_disk_size_gb: cdktf.stringToTerraform(struct!.seLogDiskSizeGb),
    se_sys_disk_path: cdktf.stringToTerraform(struct!.seSysDiskPath),
    se_sys_disk_size_gb: cdktf.stringToTerraform(struct!.seSysDiskSizeGb),
    ssh_user_ref: cdktf.stringToTerraform(struct!.sshUserRef),
    hosts: cdktf.listMapper(cloudLinuxserverConfigurationHostsToTerraform, true)(struct!.hosts),
  }
}


export function cloudLinuxserverConfigurationToHclTerraform(struct?: CloudLinuxserverConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    se_inband_mgmt: {
      value: cdktf.stringToHclTerraform(struct!.seInbandMgmt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_log_disk_path: {
      value: cdktf.stringToHclTerraform(struct!.seLogDiskPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_log_disk_size_gb: {
      value: cdktf.stringToHclTerraform(struct!.seLogDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_sys_disk_path: {
      value: cdktf.stringToHclTerraform(struct!.seSysDiskPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_sys_disk_size_gb: {
      value: cdktf.stringToHclTerraform(struct!.seSysDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_user_ref: {
      value: cdktf.stringToHclTerraform(struct!.sshUserRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(cloudLinuxserverConfigurationHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinuxserverConfigurationHostsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudLinuxserverConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudLinuxserverConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seInbandMgmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.seInbandMgmt = this._seInbandMgmt;
    }
    if (this._seLogDiskPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLogDiskPath = this._seLogDiskPath;
    }
    if (this._seLogDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLogDiskSizeGb = this._seLogDiskSizeGb;
    }
    if (this._seSysDiskPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.seSysDiskPath = this._seSysDiskPath;
    }
    if (this._seSysDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.seSysDiskSizeGb = this._seSysDiskSizeGb;
    }
    if (this._sshUserRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshUserRef = this._sshUserRef;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinuxserverConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seInbandMgmt = undefined;
      this._seLogDiskPath = undefined;
      this._seLogDiskSizeGb = undefined;
      this._seSysDiskPath = undefined;
      this._seSysDiskSizeGb = undefined;
      this._sshUserRef = undefined;
      this._hosts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seInbandMgmt = value.seInbandMgmt;
      this._seLogDiskPath = value.seLogDiskPath;
      this._seLogDiskSizeGb = value.seLogDiskSizeGb;
      this._seSysDiskPath = value.seSysDiskPath;
      this._seSysDiskSizeGb = value.seSysDiskSizeGb;
      this._sshUserRef = value.sshUserRef;
      this._hosts.internalValue = value.hosts;
    }
  }

  // se_inband_mgmt - computed: false, optional: true, required: false
  private _seInbandMgmt?: string; 
  public get seInbandMgmt() {
    return this.getStringAttribute('se_inband_mgmt');
  }
  public set seInbandMgmt(value: string) {
    this._seInbandMgmt = value;
  }
  public resetSeInbandMgmt() {
    this._seInbandMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seInbandMgmtInput() {
    return this._seInbandMgmt;
  }

  // se_log_disk_path - computed: true, optional: true, required: false
  private _seLogDiskPath?: string; 
  public get seLogDiskPath() {
    return this.getStringAttribute('se_log_disk_path');
  }
  public set seLogDiskPath(value: string) {
    this._seLogDiskPath = value;
  }
  public resetSeLogDiskPath() {
    this._seLogDiskPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLogDiskPathInput() {
    return this._seLogDiskPath;
  }

  // se_log_disk_size_gb - computed: false, optional: true, required: false
  private _seLogDiskSizeGb?: string; 
  public get seLogDiskSizeGb() {
    return this.getStringAttribute('se_log_disk_size_gb');
  }
  public set seLogDiskSizeGb(value: string) {
    this._seLogDiskSizeGb = value;
  }
  public resetSeLogDiskSizeGb() {
    this._seLogDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLogDiskSizeGbInput() {
    return this._seLogDiskSizeGb;
  }

  // se_sys_disk_path - computed: true, optional: true, required: false
  private _seSysDiskPath?: string; 
  public get seSysDiskPath() {
    return this.getStringAttribute('se_sys_disk_path');
  }
  public set seSysDiskPath(value: string) {
    this._seSysDiskPath = value;
  }
  public resetSeSysDiskPath() {
    this._seSysDiskPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seSysDiskPathInput() {
    return this._seSysDiskPath;
  }

  // se_sys_disk_size_gb - computed: false, optional: true, required: false
  private _seSysDiskSizeGb?: string; 
  public get seSysDiskSizeGb() {
    return this.getStringAttribute('se_sys_disk_size_gb');
  }
  public set seSysDiskSizeGb(value: string) {
    this._seSysDiskSizeGb = value;
  }
  public resetSeSysDiskSizeGb() {
    this._seSysDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seSysDiskSizeGbInput() {
    return this._seSysDiskSizeGb;
  }

  // ssh_user_ref - computed: true, optional: true, required: false
  private _sshUserRef?: string; 
  public get sshUserRef() {
    return this.getStringAttribute('ssh_user_ref');
  }
  public set sshUserRef(value: string) {
    this._sshUserRef = value;
  }
  public resetSshUserRef() {
    this._sshUserRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUserRefInput() {
    return this._sshUserRef;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new CloudLinuxserverConfigurationHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: CloudLinuxserverConfigurationHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }
}

export class CloudLinuxserverConfigurationList extends cdktf.ComplexList {
  public internalValue? : CloudLinuxserverConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CloudLinuxserverConfigurationOutputReference {
    return new CloudLinuxserverConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#key Cloud#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#values Cloud#values}
  */
  readonly values?: string[];
}

export function cloudMarkersToTerraform(struct?: CloudMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function cloudMarkersToHclTerraform(struct?: CloudMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CloudMarkersList extends cdktf.ComplexList {
  public internalValue? : CloudMarkers[] | cdktf.IResolvable

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
  public get(index: number): CloudMarkersOutputReference {
    return new CloudMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#addr Cloud#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#type Cloud#type}
  */
  readonly type: string;
}

export function cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddrToTerraform(struct?: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddrToHclTerraform(struct?: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddrOutputReference {
    return new CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#mask Cloud#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ip_addr Cloud#ip_addr}
  */
  readonly ipAddr: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddr[] | cdktf.IResolvable;
}

export function cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetToTerraform(struct?: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetToHclTerraform(struct?: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetList extends cdktf.ComplexList {
  public internalValue? : CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnet[] | cdktf.IResolvable

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
  public get(index: number): CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetOutputReference {
    return new CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomatic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#num_se_per_segment Cloud#num_se_per_segment}
  */
  readonly numSePerSegment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#tier1_lr_ids Cloud#tier1_lr_ids}
  */
  readonly tier1LrIds: string[];
  /**
  * nsxt_segment_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#nsxt_segment_subnet Cloud#nsxt_segment_subnet}
  */
  readonly nsxtSegmentSubnet: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnet[] | cdktf.IResolvable;
}

export function cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticToTerraform(struct?: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_se_per_segment: cdktf.stringToTerraform(struct!.numSePerSegment),
    tier1_lr_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tier1LrIds),
    nsxt_segment_subnet: cdktf.listMapper(cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetToTerraform, true)(struct!.nsxtSegmentSubnet),
  }
}


export function cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticToHclTerraform(struct?: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_se_per_segment: {
      value: cdktf.stringToHclTerraform(struct!.numSePerSegment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tier1_lr_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tier1LrIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    nsxt_segment_subnet: {
      value: cdktf.listMapperHcl(cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetToHclTerraform, true)(struct!.nsxtSegmentSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numSePerSegment !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSePerSegment = this._numSePerSegment;
    }
    if (this._tier1LrIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier1LrIds = this._tier1LrIds;
    }
    if (this._nsxtSegmentSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxtSegmentSubnet = this._nsxtSegmentSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numSePerSegment = undefined;
      this._tier1LrIds = undefined;
      this._nsxtSegmentSubnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numSePerSegment = value.numSePerSegment;
      this._tier1LrIds = value.tier1LrIds;
      this._nsxtSegmentSubnet.internalValue = value.nsxtSegmentSubnet;
    }
  }

  // num_se_per_segment - computed: false, optional: true, required: false
  private _numSePerSegment?: string; 
  public get numSePerSegment() {
    return this.getStringAttribute('num_se_per_segment');
  }
  public set numSePerSegment(value: string) {
    this._numSePerSegment = value;
  }
  public resetNumSePerSegment() {
    this._numSePerSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSePerSegmentInput() {
    return this._numSePerSegment;
  }

  // tier1_lr_ids - computed: false, optional: false, required: true
  private _tier1LrIds?: string[]; 
  public get tier1LrIds() {
    return this.getListAttribute('tier1_lr_ids');
  }
  public set tier1LrIds(value: string[]) {
    this._tier1LrIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tier1LrIdsInput() {
    return this._tier1LrIds;
  }

  // nsxt_segment_subnet - computed: false, optional: false, required: true
  private _nsxtSegmentSubnet = new CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetList(this, "nsxt_segment_subnet", true);
  public get nsxtSegmentSubnet() {
    return this._nsxtSegmentSubnet;
  }
  public putNsxtSegmentSubnet(value: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnet[] | cdktf.IResolvable) {
    this._nsxtSegmentSubnet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtSegmentSubnetInput() {
    return this._nsxtSegmentSubnet.internalValue;
  }
}

export class CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticList extends cdktf.ComplexList {
  public internalValue? : CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomatic[] | cdktf.IResolvable

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
  public get(index: number): CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticOutputReference {
    return new CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1Lrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#locale_service Cloud#locale_service}
  */
  readonly localeService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#segment_id Cloud#segment_id}
  */
  readonly segmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#tier1_lr_id Cloud#tier1_lr_id}
  */
  readonly tier1LrId: string;
}

export function cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1LrsToTerraform(struct?: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1Lrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locale_service: cdktf.stringToTerraform(struct!.localeService),
    segment_id: cdktf.stringToTerraform(struct!.segmentId),
    tier1_lr_id: cdktf.stringToTerraform(struct!.tier1LrId),
  }
}


export function cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1LrsToHclTerraform(struct?: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1Lrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locale_service: {
      value: cdktf.stringToHclTerraform(struct!.localeService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_id: {
      value: cdktf.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tier1_lr_id: {
      value: cdktf.stringToHclTerraform(struct!.tier1LrId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1LrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1Lrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localeService !== undefined) {
      hasAnyValues = true;
      internalValueResult.localeService = this._localeService;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    if (this._tier1LrId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier1LrId = this._tier1LrId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1Lrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localeService = undefined;
      this._segmentId = undefined;
      this._tier1LrId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localeService = value.localeService;
      this._segmentId = value.segmentId;
      this._tier1LrId = value.tier1LrId;
    }
  }

  // locale_service - computed: true, optional: true, required: false
  private _localeService?: string; 
  public get localeService() {
    return this.getStringAttribute('locale_service');
  }
  public set localeService(value: string) {
    this._localeService = value;
  }
  public resetLocaleService() {
    this._localeService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeServiceInput() {
    return this._localeService;
  }

  // segment_id - computed: true, optional: true, required: false
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  public resetSegmentId() {
    this._segmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // tier1_lr_id - computed: false, optional: false, required: true
  private _tier1LrId?: string; 
  public get tier1LrId() {
    return this.getStringAttribute('tier1_lr_id');
  }
  public set tier1LrId(value: string) {
    this._tier1LrId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tier1LrIdInput() {
    return this._tier1LrId;
  }
}

export class CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1LrsList extends cdktf.ComplexList {
  public internalValue? : CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1Lrs[] | cdktf.IResolvable

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
  public get(index: number): CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1LrsOutputReference {
    return new CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1LrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManual {
  /**
  * tier1_lrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#tier1_lrs Cloud#tier1_lrs}
  */
  readonly tier1Lrs: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1Lrs[] | cdktf.IResolvable;
}

export function cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualToTerraform(struct?: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tier1_lrs: cdktf.listMapper(cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1LrsToTerraform, true)(struct!.tier1Lrs),
  }
}


export function cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualToHclTerraform(struct?: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tier1_lrs: {
      value: cdktf.listMapperHcl(cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1LrsToHclTerraform, true)(struct!.tier1Lrs),
      isBlock: true,
      type: "list",
      storageClassType: "CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1LrsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManual | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tier1Lrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier1Lrs = this._tier1Lrs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManual | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tier1Lrs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tier1Lrs.internalValue = value.tier1Lrs;
    }
  }

  // tier1_lrs - computed: false, optional: false, required: true
  private _tier1Lrs = new CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1LrsList(this, "tier1_lrs", false);
  public get tier1Lrs() {
    return this._tier1Lrs;
  }
  public putTier1Lrs(value: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1Lrs[] | cdktf.IResolvable) {
    this._tier1Lrs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tier1LrsInput() {
    return this._tier1Lrs.internalValue;
  }
}

export class CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualList extends cdktf.ComplexList {
  public internalValue? : CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManual[] | cdktf.IResolvable

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
  public get(index: number): CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualOutputReference {
    return new CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#segment_config_mode Cloud#segment_config_mode}
  */
  readonly segmentConfigMode?: string;
  /**
  * automatic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#automatic Cloud#automatic}
  */
  readonly automatic?: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomatic[] | cdktf.IResolvable;
  /**
  * manual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#manual Cloud#manual}
  */
  readonly manual?: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManual[] | cdktf.IResolvable;
}

export function cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigToTerraform(struct?: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segment_config_mode: cdktf.stringToTerraform(struct!.segmentConfigMode),
    automatic: cdktf.listMapper(cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticToTerraform, true)(struct!.automatic),
    manual: cdktf.listMapper(cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualToTerraform, true)(struct!.manual),
  }
}


export function cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigToHclTerraform(struct?: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segment_config_mode: {
      value: cdktf.stringToHclTerraform(struct!.segmentConfigMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    automatic: {
      value: cdktf.listMapperHcl(cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticToHclTerraform, true)(struct!.automatic),
      isBlock: true,
      type: "set",
      storageClassType: "CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticList",
    },
    manual: {
      value: cdktf.listMapperHcl(cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualToHclTerraform, true)(struct!.manual),
      isBlock: true,
      type: "set",
      storageClassType: "CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segmentConfigMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentConfigMode = this._segmentConfigMode;
    }
    if (this._automatic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatic = this._automatic?.internalValue;
    }
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._segmentConfigMode = undefined;
      this._automatic.internalValue = undefined;
      this._manual.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._segmentConfigMode = value.segmentConfigMode;
      this._automatic.internalValue = value.automatic;
      this._manual.internalValue = value.manual;
    }
  }

  // segment_config_mode - computed: false, optional: true, required: false
  private _segmentConfigMode?: string; 
  public get segmentConfigMode() {
    return this.getStringAttribute('segment_config_mode');
  }
  public set segmentConfigMode(value: string) {
    this._segmentConfigMode = value;
  }
  public resetSegmentConfigMode() {
    this._segmentConfigMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentConfigModeInput() {
    return this._segmentConfigMode;
  }

  // automatic - computed: false, optional: true, required: false
  private _automatic = new CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticList(this, "automatic", true);
  public get automatic() {
    return this._automatic;
  }
  public putAutomatic(value: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomatic[] | cdktf.IResolvable) {
    this._automatic.internalValue = value;
  }
  public resetAutomatic() {
    this._automatic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic.internalValue;
  }

  // manual - computed: false, optional: true, required: false
  private _manual = new CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualList(this, "manual", true);
  public get manual() {
    return this._manual;
  }
  public putManual(value: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManual[] | cdktf.IResolvable) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }
}

export class CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigList extends cdktf.ComplexList {
  public internalValue? : CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigOutputReference {
    return new CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudNsxtConfigurationDataNetworkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#transport_zone Cloud#transport_zone}
  */
  readonly transportZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#tz_type Cloud#tz_type}
  */
  readonly tzType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vlan_segments Cloud#vlan_segments}
  */
  readonly vlanSegments?: string[];
  /**
  * tier1_segment_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#tier1_segment_config Cloud#tier1_segment_config}
  */
  readonly tier1SegmentConfig?: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfig[] | cdktf.IResolvable;
}

export function cloudNsxtConfigurationDataNetworkConfigToTerraform(struct?: CloudNsxtConfigurationDataNetworkConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transport_zone: cdktf.stringToTerraform(struct!.transportZone),
    tz_type: cdktf.stringToTerraform(struct!.tzType),
    vlan_segments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vlanSegments),
    tier1_segment_config: cdktf.listMapper(cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigToTerraform, true)(struct!.tier1SegmentConfig),
  }
}


export function cloudNsxtConfigurationDataNetworkConfigToHclTerraform(struct?: CloudNsxtConfigurationDataNetworkConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transport_zone: {
      value: cdktf.stringToHclTerraform(struct!.transportZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tz_type: {
      value: cdktf.stringToHclTerraform(struct!.tzType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_segments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vlanSegments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tier1_segment_config: {
      value: cdktf.listMapperHcl(cloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigToHclTerraform, true)(struct!.tier1SegmentConfig),
      isBlock: true,
      type: "set",
      storageClassType: "CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNsxtConfigurationDataNetworkConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudNsxtConfigurationDataNetworkConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transportZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportZone = this._transportZone;
    }
    if (this._tzType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tzType = this._tzType;
    }
    if (this._vlanSegments !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanSegments = this._vlanSegments;
    }
    if (this._tier1SegmentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier1SegmentConfig = this._tier1SegmentConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNsxtConfigurationDataNetworkConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transportZone = undefined;
      this._tzType = undefined;
      this._vlanSegments = undefined;
      this._tier1SegmentConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transportZone = value.transportZone;
      this._tzType = value.tzType;
      this._vlanSegments = value.vlanSegments;
      this._tier1SegmentConfig.internalValue = value.tier1SegmentConfig;
    }
  }

  // transport_zone - computed: true, optional: true, required: false
  private _transportZone?: string; 
  public get transportZone() {
    return this.getStringAttribute('transport_zone');
  }
  public set transportZone(value: string) {
    this._transportZone = value;
  }
  public resetTransportZone() {
    this._transportZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportZoneInput() {
    return this._transportZone;
  }

  // tz_type - computed: true, optional: true, required: false
  private _tzType?: string; 
  public get tzType() {
    return this.getStringAttribute('tz_type');
  }
  public set tzType(value: string) {
    this._tzType = value;
  }
  public resetTzType() {
    this._tzType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tzTypeInput() {
    return this._tzType;
  }

  // vlan_segments - computed: false, optional: true, required: false
  private _vlanSegments?: string[]; 
  public get vlanSegments() {
    return this.getListAttribute('vlan_segments');
  }
  public set vlanSegments(value: string[]) {
    this._vlanSegments = value;
  }
  public resetVlanSegments() {
    this._vlanSegments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanSegmentsInput() {
    return this._vlanSegments;
  }

  // tier1_segment_config - computed: false, optional: true, required: false
  private _tier1SegmentConfig = new CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigList(this, "tier1_segment_config", true);
  public get tier1SegmentConfig() {
    return this._tier1SegmentConfig;
  }
  public putTier1SegmentConfig(value: CloudNsxtConfigurationDataNetworkConfigTier1SegmentConfig[] | cdktf.IResolvable) {
    this._tier1SegmentConfig.internalValue = value;
  }
  public resetTier1SegmentConfig() {
    this._tier1SegmentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tier1SegmentConfigInput() {
    return this._tier1SegmentConfig.internalValue;
  }
}

export class CloudNsxtConfigurationDataNetworkConfigList extends cdktf.ComplexList {
  public internalValue? : CloudNsxtConfigurationDataNetworkConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudNsxtConfigurationDataNetworkConfigOutputReference {
    return new CloudNsxtConfigurationDataNetworkConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudNsxtConfigurationManagementNetworkConfigOverlaySegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#locale_service Cloud#locale_service}
  */
  readonly localeService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#segment_id Cloud#segment_id}
  */
  readonly segmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#tier1_lr_id Cloud#tier1_lr_id}
  */
  readonly tier1LrId: string;
}

export function cloudNsxtConfigurationManagementNetworkConfigOverlaySegmentToTerraform(struct?: CloudNsxtConfigurationManagementNetworkConfigOverlaySegment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locale_service: cdktf.stringToTerraform(struct!.localeService),
    segment_id: cdktf.stringToTerraform(struct!.segmentId),
    tier1_lr_id: cdktf.stringToTerraform(struct!.tier1LrId),
  }
}


export function cloudNsxtConfigurationManagementNetworkConfigOverlaySegmentToHclTerraform(struct?: CloudNsxtConfigurationManagementNetworkConfigOverlaySegment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locale_service: {
      value: cdktf.stringToHclTerraform(struct!.localeService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_id: {
      value: cdktf.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tier1_lr_id: {
      value: cdktf.stringToHclTerraform(struct!.tier1LrId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNsxtConfigurationManagementNetworkConfigOverlaySegmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudNsxtConfigurationManagementNetworkConfigOverlaySegment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localeService !== undefined) {
      hasAnyValues = true;
      internalValueResult.localeService = this._localeService;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    if (this._tier1LrId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier1LrId = this._tier1LrId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNsxtConfigurationManagementNetworkConfigOverlaySegment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localeService = undefined;
      this._segmentId = undefined;
      this._tier1LrId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localeService = value.localeService;
      this._segmentId = value.segmentId;
      this._tier1LrId = value.tier1LrId;
    }
  }

  // locale_service - computed: true, optional: true, required: false
  private _localeService?: string; 
  public get localeService() {
    return this.getStringAttribute('locale_service');
  }
  public set localeService(value: string) {
    this._localeService = value;
  }
  public resetLocaleService() {
    this._localeService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeServiceInput() {
    return this._localeService;
  }

  // segment_id - computed: true, optional: true, required: false
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  public resetSegmentId() {
    this._segmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // tier1_lr_id - computed: false, optional: false, required: true
  private _tier1LrId?: string; 
  public get tier1LrId() {
    return this.getStringAttribute('tier1_lr_id');
  }
  public set tier1LrId(value: string) {
    this._tier1LrId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tier1LrIdInput() {
    return this._tier1LrId;
  }
}

export class CloudNsxtConfigurationManagementNetworkConfigOverlaySegmentList extends cdktf.ComplexList {
  public internalValue? : CloudNsxtConfigurationManagementNetworkConfigOverlaySegment[] | cdktf.IResolvable

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
  public get(index: number): CloudNsxtConfigurationManagementNetworkConfigOverlaySegmentOutputReference {
    return new CloudNsxtConfigurationManagementNetworkConfigOverlaySegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudNsxtConfigurationManagementNetworkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#transport_zone Cloud#transport_zone}
  */
  readonly transportZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#tz_type Cloud#tz_type}
  */
  readonly tzType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vlan_segment Cloud#vlan_segment}
  */
  readonly vlanSegment?: string;
  /**
  * overlay_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#overlay_segment Cloud#overlay_segment}
  */
  readonly overlaySegment?: CloudNsxtConfigurationManagementNetworkConfigOverlaySegment[] | cdktf.IResolvable;
}

export function cloudNsxtConfigurationManagementNetworkConfigToTerraform(struct?: CloudNsxtConfigurationManagementNetworkConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transport_zone: cdktf.stringToTerraform(struct!.transportZone),
    tz_type: cdktf.stringToTerraform(struct!.tzType),
    vlan_segment: cdktf.stringToTerraform(struct!.vlanSegment),
    overlay_segment: cdktf.listMapper(cloudNsxtConfigurationManagementNetworkConfigOverlaySegmentToTerraform, true)(struct!.overlaySegment),
  }
}


export function cloudNsxtConfigurationManagementNetworkConfigToHclTerraform(struct?: CloudNsxtConfigurationManagementNetworkConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transport_zone: {
      value: cdktf.stringToHclTerraform(struct!.transportZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tz_type: {
      value: cdktf.stringToHclTerraform(struct!.tzType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_segment: {
      value: cdktf.stringToHclTerraform(struct!.vlanSegment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overlay_segment: {
      value: cdktf.listMapperHcl(cloudNsxtConfigurationManagementNetworkConfigOverlaySegmentToHclTerraform, true)(struct!.overlaySegment),
      isBlock: true,
      type: "set",
      storageClassType: "CloudNsxtConfigurationManagementNetworkConfigOverlaySegmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNsxtConfigurationManagementNetworkConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudNsxtConfigurationManagementNetworkConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transportZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportZone = this._transportZone;
    }
    if (this._tzType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tzType = this._tzType;
    }
    if (this._vlanSegment !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanSegment = this._vlanSegment;
    }
    if (this._overlaySegment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlaySegment = this._overlaySegment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNsxtConfigurationManagementNetworkConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transportZone = undefined;
      this._tzType = undefined;
      this._vlanSegment = undefined;
      this._overlaySegment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transportZone = value.transportZone;
      this._tzType = value.tzType;
      this._vlanSegment = value.vlanSegment;
      this._overlaySegment.internalValue = value.overlaySegment;
    }
  }

  // transport_zone - computed: false, optional: false, required: true
  private _transportZone?: string; 
  public get transportZone() {
    return this.getStringAttribute('transport_zone');
  }
  public set transportZone(value: string) {
    this._transportZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportZoneInput() {
    return this._transportZone;
  }

  // tz_type - computed: false, optional: false, required: true
  private _tzType?: string; 
  public get tzType() {
    return this.getStringAttribute('tz_type');
  }
  public set tzType(value: string) {
    this._tzType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tzTypeInput() {
    return this._tzType;
  }

  // vlan_segment - computed: true, optional: true, required: false
  private _vlanSegment?: string; 
  public get vlanSegment() {
    return this.getStringAttribute('vlan_segment');
  }
  public set vlanSegment(value: string) {
    this._vlanSegment = value;
  }
  public resetVlanSegment() {
    this._vlanSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanSegmentInput() {
    return this._vlanSegment;
  }

  // overlay_segment - computed: false, optional: true, required: false
  private _overlaySegment = new CloudNsxtConfigurationManagementNetworkConfigOverlaySegmentList(this, "overlay_segment", true);
  public get overlaySegment() {
    return this._overlaySegment;
  }
  public putOverlaySegment(value: CloudNsxtConfigurationManagementNetworkConfigOverlaySegment[] | cdktf.IResolvable) {
    this._overlaySegment.internalValue = value;
  }
  public resetOverlaySegment() {
    this._overlaySegment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlaySegmentInput() {
    return this._overlaySegment.internalValue;
  }
}

export class CloudNsxtConfigurationManagementNetworkConfigList extends cdktf.ComplexList {
  public internalValue? : CloudNsxtConfigurationManagementNetworkConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudNsxtConfigurationManagementNetworkConfigOutputReference {
    return new CloudNsxtConfigurationManagementNetworkConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudNsxtConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#automate_dfw_objects Cloud#automate_dfw_objects}
  */
  readonly automateDfwObjects?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#automate_dfw_rules Cloud#automate_dfw_rules}
  */
  readonly automateDfwRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#domain_id Cloud#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#enforcementpoint_id Cloud#enforcementpoint_id}
  */
  readonly enforcementpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#nsxt_credentials_ref Cloud#nsxt_credentials_ref}
  */
  readonly nsxtCredentialsRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#nsxt_url Cloud#nsxt_url}
  */
  readonly nsxtUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#site_id Cloud#site_id}
  */
  readonly siteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#verify_certificate Cloud#verify_certificate}
  */
  readonly verifyCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vmc_mode Cloud#vmc_mode}
  */
  readonly vmcMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vpc_mode Cloud#vpc_mode}
  */
  readonly vpcMode?: string;
  /**
  * data_network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#data_network_config Cloud#data_network_config}
  */
  readonly dataNetworkConfig?: CloudNsxtConfigurationDataNetworkConfig[] | cdktf.IResolvable;
  /**
  * management_network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#management_network_config Cloud#management_network_config}
  */
  readonly managementNetworkConfig?: CloudNsxtConfigurationManagementNetworkConfig[] | cdktf.IResolvable;
}

export function cloudNsxtConfigurationToTerraform(struct?: CloudNsxtConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automate_dfw_objects: cdktf.stringToTerraform(struct!.automateDfwObjects),
    automate_dfw_rules: cdktf.stringToTerraform(struct!.automateDfwRules),
    domain_id: cdktf.stringToTerraform(struct!.domainId),
    enforcementpoint_id: cdktf.stringToTerraform(struct!.enforcementpointId),
    nsxt_credentials_ref: cdktf.stringToTerraform(struct!.nsxtCredentialsRef),
    nsxt_url: cdktf.stringToTerraform(struct!.nsxtUrl),
    site_id: cdktf.stringToTerraform(struct!.siteId),
    verify_certificate: cdktf.stringToTerraform(struct!.verifyCertificate),
    vmc_mode: cdktf.stringToTerraform(struct!.vmcMode),
    vpc_mode: cdktf.stringToTerraform(struct!.vpcMode),
    data_network_config: cdktf.listMapper(cloudNsxtConfigurationDataNetworkConfigToTerraform, true)(struct!.dataNetworkConfig),
    management_network_config: cdktf.listMapper(cloudNsxtConfigurationManagementNetworkConfigToTerraform, true)(struct!.managementNetworkConfig),
  }
}


export function cloudNsxtConfigurationToHclTerraform(struct?: CloudNsxtConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automate_dfw_objects: {
      value: cdktf.stringToHclTerraform(struct!.automateDfwObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    automate_dfw_rules: {
      value: cdktf.stringToHclTerraform(struct!.automateDfwRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_id: {
      value: cdktf.stringToHclTerraform(struct!.domainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforcementpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.enforcementpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsxt_credentials_ref: {
      value: cdktf.stringToHclTerraform(struct!.nsxtCredentialsRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsxt_url: {
      value: cdktf.stringToHclTerraform(struct!.nsxtUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_id: {
      value: cdktf.stringToHclTerraform(struct!.siteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_certificate: {
      value: cdktf.stringToHclTerraform(struct!.verifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmc_mode: {
      value: cdktf.stringToHclTerraform(struct!.vmcMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_mode: {
      value: cdktf.stringToHclTerraform(struct!.vpcMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_network_config: {
      value: cdktf.listMapperHcl(cloudNsxtConfigurationDataNetworkConfigToHclTerraform, true)(struct!.dataNetworkConfig),
      isBlock: true,
      type: "set",
      storageClassType: "CloudNsxtConfigurationDataNetworkConfigList",
    },
    management_network_config: {
      value: cdktf.listMapperHcl(cloudNsxtConfigurationManagementNetworkConfigToHclTerraform, true)(struct!.managementNetworkConfig),
      isBlock: true,
      type: "set",
      storageClassType: "CloudNsxtConfigurationManagementNetworkConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNsxtConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudNsxtConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automateDfwObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.automateDfwObjects = this._automateDfwObjects;
    }
    if (this._automateDfwRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.automateDfwRules = this._automateDfwRules;
    }
    if (this._domainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainId = this._domainId;
    }
    if (this._enforcementpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementpointId = this._enforcementpointId;
    }
    if (this._nsxtCredentialsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxtCredentialsRef = this._nsxtCredentialsRef;
    }
    if (this._nsxtUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxtUrl = this._nsxtUrl;
    }
    if (this._siteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteId = this._siteId;
    }
    if (this._verifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificate = this._verifyCertificate;
    }
    if (this._vmcMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmcMode = this._vmcMode;
    }
    if (this._vpcMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcMode = this._vpcMode;
    }
    if (this._dataNetworkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNetworkConfig = this._dataNetworkConfig?.internalValue;
    }
    if (this._managementNetworkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementNetworkConfig = this._managementNetworkConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNsxtConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automateDfwObjects = undefined;
      this._automateDfwRules = undefined;
      this._domainId = undefined;
      this._enforcementpointId = undefined;
      this._nsxtCredentialsRef = undefined;
      this._nsxtUrl = undefined;
      this._siteId = undefined;
      this._verifyCertificate = undefined;
      this._vmcMode = undefined;
      this._vpcMode = undefined;
      this._dataNetworkConfig.internalValue = undefined;
      this._managementNetworkConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automateDfwObjects = value.automateDfwObjects;
      this._automateDfwRules = value.automateDfwRules;
      this._domainId = value.domainId;
      this._enforcementpointId = value.enforcementpointId;
      this._nsxtCredentialsRef = value.nsxtCredentialsRef;
      this._nsxtUrl = value.nsxtUrl;
      this._siteId = value.siteId;
      this._verifyCertificate = value.verifyCertificate;
      this._vmcMode = value.vmcMode;
      this._vpcMode = value.vpcMode;
      this._dataNetworkConfig.internalValue = value.dataNetworkConfig;
      this._managementNetworkConfig.internalValue = value.managementNetworkConfig;
    }
  }

  // automate_dfw_objects - computed: false, optional: true, required: false
  private _automateDfwObjects?: string; 
  public get automateDfwObjects() {
    return this.getStringAttribute('automate_dfw_objects');
  }
  public set automateDfwObjects(value: string) {
    this._automateDfwObjects = value;
  }
  public resetAutomateDfwObjects() {
    this._automateDfwObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automateDfwObjectsInput() {
    return this._automateDfwObjects;
  }

  // automate_dfw_rules - computed: false, optional: true, required: false
  private _automateDfwRules?: string; 
  public get automateDfwRules() {
    return this.getStringAttribute('automate_dfw_rules');
  }
  public set automateDfwRules(value: string) {
    this._automateDfwRules = value;
  }
  public resetAutomateDfwRules() {
    this._automateDfwRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automateDfwRulesInput() {
    return this._automateDfwRules;
  }

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // enforcementpoint_id - computed: false, optional: true, required: false
  private _enforcementpointId?: string; 
  public get enforcementpointId() {
    return this.getStringAttribute('enforcementpoint_id');
  }
  public set enforcementpointId(value: string) {
    this._enforcementpointId = value;
  }
  public resetEnforcementpointId() {
    this._enforcementpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementpointIdInput() {
    return this._enforcementpointId;
  }

  // nsxt_credentials_ref - computed: true, optional: true, required: false
  private _nsxtCredentialsRef?: string; 
  public get nsxtCredentialsRef() {
    return this.getStringAttribute('nsxt_credentials_ref');
  }
  public set nsxtCredentialsRef(value: string) {
    this._nsxtCredentialsRef = value;
  }
  public resetNsxtCredentialsRef() {
    this._nsxtCredentialsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtCredentialsRefInput() {
    return this._nsxtCredentialsRef;
  }

  // nsxt_url - computed: true, optional: true, required: false
  private _nsxtUrl?: string; 
  public get nsxtUrl() {
    return this.getStringAttribute('nsxt_url');
  }
  public set nsxtUrl(value: string) {
    this._nsxtUrl = value;
  }
  public resetNsxtUrl() {
    this._nsxtUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtUrlInput() {
    return this._nsxtUrl;
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // verify_certificate - computed: false, optional: true, required: false
  private _verifyCertificate?: string; 
  public get verifyCertificate() {
    return this.getStringAttribute('verify_certificate');
  }
  public set verifyCertificate(value: string) {
    this._verifyCertificate = value;
  }
  public resetVerifyCertificate() {
    this._verifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateInput() {
    return this._verifyCertificate;
  }

  // vmc_mode - computed: false, optional: true, required: false
  private _vmcMode?: string; 
  public get vmcMode() {
    return this.getStringAttribute('vmc_mode');
  }
  public set vmcMode(value: string) {
    this._vmcMode = value;
  }
  public resetVmcMode() {
    this._vmcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmcModeInput() {
    return this._vmcMode;
  }

  // vpc_mode - computed: true, optional: true, required: false
  private _vpcMode?: string; 
  public get vpcMode() {
    return this.getStringAttribute('vpc_mode');
  }
  public set vpcMode(value: string) {
    this._vpcMode = value;
  }
  public resetVpcMode() {
    this._vpcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcModeInput() {
    return this._vpcMode;
  }

  // data_network_config - computed: false, optional: true, required: false
  private _dataNetworkConfig = new CloudNsxtConfigurationDataNetworkConfigList(this, "data_network_config", true);
  public get dataNetworkConfig() {
    return this._dataNetworkConfig;
  }
  public putDataNetworkConfig(value: CloudNsxtConfigurationDataNetworkConfig[] | cdktf.IResolvable) {
    this._dataNetworkConfig.internalValue = value;
  }
  public resetDataNetworkConfig() {
    this._dataNetworkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNetworkConfigInput() {
    return this._dataNetworkConfig.internalValue;
  }

  // management_network_config - computed: false, optional: true, required: false
  private _managementNetworkConfig = new CloudNsxtConfigurationManagementNetworkConfigList(this, "management_network_config", true);
  public get managementNetworkConfig() {
    return this._managementNetworkConfig;
  }
  public putManagementNetworkConfig(value: CloudNsxtConfigurationManagementNetworkConfig[] | cdktf.IResolvable) {
    this._managementNetworkConfig.internalValue = value;
  }
  public resetManagementNetworkConfig() {
    this._managementNetworkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementNetworkConfigInput() {
    return this._managementNetworkConfig.internalValue;
  }
}

export class CloudNsxtConfigurationList extends cdktf.ComplexList {
  public internalValue? : CloudNsxtConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CloudNsxtConfigurationOutputReference {
    return new CloudNsxtConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudNtpConfigurationNtpAuthenticationKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#algorithm Cloud#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#key Cloud#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#key_number Cloud#key_number}
  */
  readonly keyNumber: string;
}

export function cloudNtpConfigurationNtpAuthenticationKeysToTerraform(struct?: CloudNtpConfigurationNtpAuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    key: cdktf.stringToTerraform(struct!.key),
    key_number: cdktf.stringToTerraform(struct!.keyNumber),
  }
}


export function cloudNtpConfigurationNtpAuthenticationKeysToHclTerraform(struct?: CloudNtpConfigurationNtpAuthenticationKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
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
    key_number: {
      value: cdktf.stringToHclTerraform(struct!.keyNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNtpConfigurationNtpAuthenticationKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudNtpConfigurationNtpAuthenticationKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyNumber = this._keyNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNtpConfigurationNtpAuthenticationKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._key = undefined;
      this._keyNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._key = value.key;
      this._keyNumber = value.keyNumber;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_number - computed: false, optional: false, required: true
  private _keyNumber?: string; 
  public get keyNumber() {
    return this.getStringAttribute('key_number');
  }
  public set keyNumber(value: string) {
    this._keyNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNumberInput() {
    return this._keyNumber;
  }
}

export class CloudNtpConfigurationNtpAuthenticationKeysList extends cdktf.ComplexList {
  public internalValue? : CloudNtpConfigurationNtpAuthenticationKeys[] | cdktf.IResolvable

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
  public get(index: number): CloudNtpConfigurationNtpAuthenticationKeysOutputReference {
    return new CloudNtpConfigurationNtpAuthenticationKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudNtpConfigurationNtpServerListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#addr Cloud#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#type Cloud#type}
  */
  readonly type: string;
}

export function cloudNtpConfigurationNtpServerListStructToTerraform(struct?: CloudNtpConfigurationNtpServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudNtpConfigurationNtpServerListStructToHclTerraform(struct?: CloudNtpConfigurationNtpServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNtpConfigurationNtpServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudNtpConfigurationNtpServerListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNtpConfigurationNtpServerListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CloudNtpConfigurationNtpServerListStructList extends cdktf.ComplexList {
  public internalValue? : CloudNtpConfigurationNtpServerListStruct[] | cdktf.IResolvable

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
  public get(index: number): CloudNtpConfigurationNtpServerListStructOutputReference {
    return new CloudNtpConfigurationNtpServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudNtpConfigurationNtpServersServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#addr Cloud#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#type Cloud#type}
  */
  readonly type: string;
}

export function cloudNtpConfigurationNtpServersServerToTerraform(struct?: CloudNtpConfigurationNtpServersServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudNtpConfigurationNtpServersServerToHclTerraform(struct?: CloudNtpConfigurationNtpServersServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNtpConfigurationNtpServersServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudNtpConfigurationNtpServersServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNtpConfigurationNtpServersServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CloudNtpConfigurationNtpServersServerList extends cdktf.ComplexList {
  public internalValue? : CloudNtpConfigurationNtpServersServer[] | cdktf.IResolvable

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
  public get(index: number): CloudNtpConfigurationNtpServersServerOutputReference {
    return new CloudNtpConfigurationNtpServersServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudNtpConfigurationNtpServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#key_number Cloud#key_number}
  */
  readonly keyNumber?: string;
  /**
  * server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#server Cloud#server}
  */
  readonly server: CloudNtpConfigurationNtpServersServer[] | cdktf.IResolvable;
}

export function cloudNtpConfigurationNtpServersToTerraform(struct?: CloudNtpConfigurationNtpServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_number: cdktf.stringToTerraform(struct!.keyNumber),
    server: cdktf.listMapper(cloudNtpConfigurationNtpServersServerToTerraform, true)(struct!.server),
  }
}


export function cloudNtpConfigurationNtpServersToHclTerraform(struct?: CloudNtpConfigurationNtpServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_number: {
      value: cdktf.stringToHclTerraform(struct!.keyNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.listMapperHcl(cloudNtpConfigurationNtpServersServerToHclTerraform, true)(struct!.server),
      isBlock: true,
      type: "set",
      storageClassType: "CloudNtpConfigurationNtpServersServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNtpConfigurationNtpServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudNtpConfigurationNtpServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyNumber = this._keyNumber;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNtpConfigurationNtpServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyNumber = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyNumber = value.keyNumber;
      this._server.internalValue = value.server;
    }
  }

  // key_number - computed: true, optional: true, required: false
  private _keyNumber?: string; 
  public get keyNumber() {
    return this.getStringAttribute('key_number');
  }
  public set keyNumber(value: string) {
    this._keyNumber = value;
  }
  public resetKeyNumber() {
    this._keyNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNumberInput() {
    return this._keyNumber;
  }

  // server - computed: false, optional: false, required: true
  private _server = new CloudNtpConfigurationNtpServersServerList(this, "server", true);
  public get server() {
    return this._server;
  }
  public putServer(value: CloudNtpConfigurationNtpServersServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}

export class CloudNtpConfigurationNtpServersList extends cdktf.ComplexList {
  public internalValue? : CloudNtpConfigurationNtpServers[] | cdktf.IResolvable

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
  public get(index: number): CloudNtpConfigurationNtpServersOutputReference {
    return new CloudNtpConfigurationNtpServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudNtpConfiguration {
  /**
  * ntp_authentication_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ntp_authentication_keys Cloud#ntp_authentication_keys}
  */
  readonly ntpAuthenticationKeys?: CloudNtpConfigurationNtpAuthenticationKeys[] | cdktf.IResolvable;
  /**
  * ntp_server_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ntp_server_list Cloud#ntp_server_list}
  */
  readonly ntpServerList?: CloudNtpConfigurationNtpServerListStruct[] | cdktf.IResolvable;
  /**
  * ntp_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ntp_servers Cloud#ntp_servers}
  */
  readonly ntpServers?: CloudNtpConfigurationNtpServers[] | cdktf.IResolvable;
}

export function cloudNtpConfigurationToTerraform(struct?: CloudNtpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ntp_authentication_keys: cdktf.listMapper(cloudNtpConfigurationNtpAuthenticationKeysToTerraform, true)(struct!.ntpAuthenticationKeys),
    ntp_server_list: cdktf.listMapper(cloudNtpConfigurationNtpServerListStructToTerraform, true)(struct!.ntpServerList),
    ntp_servers: cdktf.listMapper(cloudNtpConfigurationNtpServersToTerraform, true)(struct!.ntpServers),
  }
}


export function cloudNtpConfigurationToHclTerraform(struct?: CloudNtpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ntp_authentication_keys: {
      value: cdktf.listMapperHcl(cloudNtpConfigurationNtpAuthenticationKeysToHclTerraform, true)(struct!.ntpAuthenticationKeys),
      isBlock: true,
      type: "list",
      storageClassType: "CloudNtpConfigurationNtpAuthenticationKeysList",
    },
    ntp_server_list: {
      value: cdktf.listMapperHcl(cloudNtpConfigurationNtpServerListStructToHclTerraform, true)(struct!.ntpServerList),
      isBlock: true,
      type: "list",
      storageClassType: "CloudNtpConfigurationNtpServerListStructList",
    },
    ntp_servers: {
      value: cdktf.listMapperHcl(cloudNtpConfigurationNtpServersToHclTerraform, true)(struct!.ntpServers),
      isBlock: true,
      type: "list",
      storageClassType: "CloudNtpConfigurationNtpServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudNtpConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudNtpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ntpAuthenticationKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpAuthenticationKeys = this._ntpAuthenticationKeys?.internalValue;
    }
    if (this._ntpServerList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServerList = this._ntpServerList?.internalValue;
    }
    if (this._ntpServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServers = this._ntpServers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudNtpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ntpAuthenticationKeys.internalValue = undefined;
      this._ntpServerList.internalValue = undefined;
      this._ntpServers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ntpAuthenticationKeys.internalValue = value.ntpAuthenticationKeys;
      this._ntpServerList.internalValue = value.ntpServerList;
      this._ntpServers.internalValue = value.ntpServers;
    }
  }

  // ntp_authentication_keys - computed: false, optional: true, required: false
  private _ntpAuthenticationKeys = new CloudNtpConfigurationNtpAuthenticationKeysList(this, "ntp_authentication_keys", false);
  public get ntpAuthenticationKeys() {
    return this._ntpAuthenticationKeys;
  }
  public putNtpAuthenticationKeys(value: CloudNtpConfigurationNtpAuthenticationKeys[] | cdktf.IResolvable) {
    this._ntpAuthenticationKeys.internalValue = value;
  }
  public resetNtpAuthenticationKeys() {
    this._ntpAuthenticationKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpAuthenticationKeysInput() {
    return this._ntpAuthenticationKeys.internalValue;
  }

  // ntp_server_list - computed: false, optional: true, required: false
  private _ntpServerList = new CloudNtpConfigurationNtpServerListStructList(this, "ntp_server_list", false);
  public get ntpServerList() {
    return this._ntpServerList;
  }
  public putNtpServerList(value: CloudNtpConfigurationNtpServerListStruct[] | cdktf.IResolvable) {
    this._ntpServerList.internalValue = value;
  }
  public resetNtpServerList() {
    this._ntpServerList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServerListInput() {
    return this._ntpServerList.internalValue;
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers = new CloudNtpConfigurationNtpServersList(this, "ntp_servers", false);
  public get ntpServers() {
    return this._ntpServers;
  }
  public putNtpServers(value: CloudNtpConfigurationNtpServers[] | cdktf.IResolvable) {
    this._ntpServers.internalValue = value;
  }
  public resetNtpServers() {
    this._ntpServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers.internalValue;
  }
}

export class CloudNtpConfigurationList extends cdktf.ComplexList {
  public internalValue? : CloudNtpConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CloudNtpConfigurationOutputReference {
    return new CloudNtpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProxyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#host Cloud#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#password Cloud#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#port Cloud#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#username Cloud#username}
  */
  readonly username?: string;
}

export function cloudProxyConfigurationToTerraform(struct?: CloudProxyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function cloudProxyConfigurationToHclTerraform(struct?: CloudProxyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class CloudProxyConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProxyConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProxyConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._username = value.username;
    }
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

  // password - computed: true, optional: true, required: false
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class CloudProxyConfigurationList extends cdktf.ComplexList {
  public internalValue? : CloudProxyConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CloudProxyConfigurationOutputReference {
    return new CloudProxyConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#addr Cloud#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#type Cloud#type}
  */
  readonly type: string;
}

export function cloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVipToTerraform(struct?: CloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVipToHclTerraform(struct?: CloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVipList extends cdktf.ComplexList {
  public internalValue? : CloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVip[] | cdktf.IResolvable

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
  public get(index: number): CloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVipOutputReference {
    return new CloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRancherConfigurationDockerRegistrySeOshiftRegistry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#registry_namespace Cloud#registry_namespace}
  */
  readonly registryNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#registry_service Cloud#registry_service}
  */
  readonly registryService?: string;
  /**
  * registry_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#registry_vip Cloud#registry_vip}
  */
  readonly registryVip?: CloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVip[] | cdktf.IResolvable;
}

export function cloudRancherConfigurationDockerRegistrySeOshiftRegistryToTerraform(struct?: CloudRancherConfigurationDockerRegistrySeOshiftRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    registry_namespace: cdktf.stringToTerraform(struct!.registryNamespace),
    registry_service: cdktf.stringToTerraform(struct!.registryService),
    registry_vip: cdktf.listMapper(cloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVipToTerraform, true)(struct!.registryVip),
  }
}


export function cloudRancherConfigurationDockerRegistrySeOshiftRegistryToHclTerraform(struct?: CloudRancherConfigurationDockerRegistrySeOshiftRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    registry_namespace: {
      value: cdktf.stringToHclTerraform(struct!.registryNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_service: {
      value: cdktf.stringToHclTerraform(struct!.registryService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_vip: {
      value: cdktf.listMapperHcl(cloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVipToHclTerraform, true)(struct!.registryVip),
      isBlock: true,
      type: "set",
      storageClassType: "CloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVipList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRancherConfigurationDockerRegistrySeOshiftRegistryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRancherConfigurationDockerRegistrySeOshiftRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._registryNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryNamespace = this._registryNamespace;
    }
    if (this._registryService !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryService = this._registryService;
    }
    if (this._registryVip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryVip = this._registryVip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRancherConfigurationDockerRegistrySeOshiftRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._registryNamespace = undefined;
      this._registryService = undefined;
      this._registryVip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._registryNamespace = value.registryNamespace;
      this._registryService = value.registryService;
      this._registryVip.internalValue = value.registryVip;
    }
  }

  // registry_namespace - computed: false, optional: true, required: false
  private _registryNamespace?: string; 
  public get registryNamespace() {
    return this.getStringAttribute('registry_namespace');
  }
  public set registryNamespace(value: string) {
    this._registryNamespace = value;
  }
  public resetRegistryNamespace() {
    this._registryNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNamespaceInput() {
    return this._registryNamespace;
  }

  // registry_service - computed: false, optional: true, required: false
  private _registryService?: string; 
  public get registryService() {
    return this.getStringAttribute('registry_service');
  }
  public set registryService(value: string) {
    this._registryService = value;
  }
  public resetRegistryService() {
    this._registryService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryServiceInput() {
    return this._registryService;
  }

  // registry_vip - computed: false, optional: true, required: false
  private _registryVip = new CloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVipList(this, "registry_vip", true);
  public get registryVip() {
    return this._registryVip;
  }
  public putRegistryVip(value: CloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVip[] | cdktf.IResolvable) {
    this._registryVip.internalValue = value;
  }
  public resetRegistryVip() {
    this._registryVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryVipInput() {
    return this._registryVip.internalValue;
  }
}

export class CloudRancherConfigurationDockerRegistrySeOshiftRegistryList extends cdktf.ComplexList {
  public internalValue? : CloudRancherConfigurationDockerRegistrySeOshiftRegistry[] | cdktf.IResolvable

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
  public get(index: number): CloudRancherConfigurationDockerRegistrySeOshiftRegistryOutputReference {
    return new CloudRancherConfigurationDockerRegistrySeOshiftRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRancherConfigurationDockerRegistrySe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#password Cloud#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#private Cloud#private}
  */
  readonly private?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#registry Cloud#registry}
  */
  readonly registry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#username Cloud#username}
  */
  readonly username?: string;
  /**
  * oshift_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#oshift_registry Cloud#oshift_registry}
  */
  readonly oshiftRegistry?: CloudRancherConfigurationDockerRegistrySeOshiftRegistry[] | cdktf.IResolvable;
}

export function cloudRancherConfigurationDockerRegistrySeToTerraform(struct?: CloudRancherConfigurationDockerRegistrySe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    private: cdktf.stringToTerraform(struct!.private),
    registry: cdktf.stringToTerraform(struct!.registry),
    username: cdktf.stringToTerraform(struct!.username),
    oshift_registry: cdktf.listMapper(cloudRancherConfigurationDockerRegistrySeOshiftRegistryToTerraform, true)(struct!.oshiftRegistry),
  }
}


export function cloudRancherConfigurationDockerRegistrySeToHclTerraform(struct?: CloudRancherConfigurationDockerRegistrySe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private: {
      value: cdktf.stringToHclTerraform(struct!.private),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oshift_registry: {
      value: cdktf.listMapperHcl(cloudRancherConfigurationDockerRegistrySeOshiftRegistryToHclTerraform, true)(struct!.oshiftRegistry),
      isBlock: true,
      type: "set",
      storageClassType: "CloudRancherConfigurationDockerRegistrySeOshiftRegistryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRancherConfigurationDockerRegistrySeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRancherConfigurationDockerRegistrySe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._private !== undefined) {
      hasAnyValues = true;
      internalValueResult.private = this._private;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._oshiftRegistry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oshiftRegistry = this._oshiftRegistry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRancherConfigurationDockerRegistrySe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._private = undefined;
      this._registry = undefined;
      this._username = undefined;
      this._oshiftRegistry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._private = value.private;
      this._registry = value.registry;
      this._username = value.username;
      this._oshiftRegistry.internalValue = value.oshiftRegistry;
    }
  }

  // password - computed: true, optional: true, required: false
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

  // private - computed: false, optional: true, required: false
  private _private?: string; 
  public get private() {
    return this.getStringAttribute('private');
  }
  public set private(value: string) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // oshift_registry - computed: false, optional: true, required: false
  private _oshiftRegistry = new CloudRancherConfigurationDockerRegistrySeOshiftRegistryList(this, "oshift_registry", true);
  public get oshiftRegistry() {
    return this._oshiftRegistry;
  }
  public putOshiftRegistry(value: CloudRancherConfigurationDockerRegistrySeOshiftRegistry[] | cdktf.IResolvable) {
    this._oshiftRegistry.internalValue = value;
  }
  public resetOshiftRegistry() {
    this._oshiftRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oshiftRegistryInput() {
    return this._oshiftRegistry.internalValue;
  }
}

export class CloudRancherConfigurationDockerRegistrySeList extends cdktf.ComplexList {
  public internalValue? : CloudRancherConfigurationDockerRegistrySe[] | cdktf.IResolvable

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
  public get(index: number): CloudRancherConfigurationDockerRegistrySeOutputReference {
    return new CloudRancherConfigurationDockerRegistrySeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRancherConfigurationEastWestPlacementSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#addr Cloud#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#type Cloud#type}
  */
  readonly type: string;
}

export function cloudRancherConfigurationEastWestPlacementSubnetIpAddrToTerraform(struct?: CloudRancherConfigurationEastWestPlacementSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudRancherConfigurationEastWestPlacementSubnetIpAddrToHclTerraform(struct?: CloudRancherConfigurationEastWestPlacementSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRancherConfigurationEastWestPlacementSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRancherConfigurationEastWestPlacementSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRancherConfigurationEastWestPlacementSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CloudRancherConfigurationEastWestPlacementSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : CloudRancherConfigurationEastWestPlacementSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): CloudRancherConfigurationEastWestPlacementSubnetIpAddrOutputReference {
    return new CloudRancherConfigurationEastWestPlacementSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRancherConfigurationEastWestPlacementSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#mask Cloud#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ip_addr Cloud#ip_addr}
  */
  readonly ipAddr: CloudRancherConfigurationEastWestPlacementSubnetIpAddr[] | cdktf.IResolvable;
}

export function cloudRancherConfigurationEastWestPlacementSubnetToTerraform(struct?: CloudRancherConfigurationEastWestPlacementSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(cloudRancherConfigurationEastWestPlacementSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function cloudRancherConfigurationEastWestPlacementSubnetToHclTerraform(struct?: CloudRancherConfigurationEastWestPlacementSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(cloudRancherConfigurationEastWestPlacementSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "CloudRancherConfigurationEastWestPlacementSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRancherConfigurationEastWestPlacementSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRancherConfigurationEastWestPlacementSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRancherConfigurationEastWestPlacementSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new CloudRancherConfigurationEastWestPlacementSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: CloudRancherConfigurationEastWestPlacementSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class CloudRancherConfigurationEastWestPlacementSubnetList extends cdktf.ComplexList {
  public internalValue? : CloudRancherConfigurationEastWestPlacementSubnet[] | cdktf.IResolvable

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
  public get(index: number): CloudRancherConfigurationEastWestPlacementSubnetOutputReference {
    return new CloudRancherConfigurationEastWestPlacementSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRancherConfigurationNuageController {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#nuage_organization Cloud#nuage_organization}
  */
  readonly nuageOrganization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#nuage_password Cloud#nuage_password}
  */
  readonly nuagePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#nuage_port Cloud#nuage_port}
  */
  readonly nuagePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#nuage_username Cloud#nuage_username}
  */
  readonly nuageUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#nuage_vsd_host Cloud#nuage_vsd_host}
  */
  readonly nuageVsdHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_domain Cloud#se_domain}
  */
  readonly seDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_enterprise Cloud#se_enterprise}
  */
  readonly seEnterprise?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_network Cloud#se_network}
  */
  readonly seNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_policy_group Cloud#se_policy_group}
  */
  readonly sePolicyGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_user Cloud#se_user}
  */
  readonly seUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_zone Cloud#se_zone}
  */
  readonly seZone?: string;
}

export function cloudRancherConfigurationNuageControllerToTerraform(struct?: CloudRancherConfigurationNuageController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nuage_organization: cdktf.stringToTerraform(struct!.nuageOrganization),
    nuage_password: cdktf.stringToTerraform(struct!.nuagePassword),
    nuage_port: cdktf.stringToTerraform(struct!.nuagePort),
    nuage_username: cdktf.stringToTerraform(struct!.nuageUsername),
    nuage_vsd_host: cdktf.stringToTerraform(struct!.nuageVsdHost),
    se_domain: cdktf.stringToTerraform(struct!.seDomain),
    se_enterprise: cdktf.stringToTerraform(struct!.seEnterprise),
    se_network: cdktf.stringToTerraform(struct!.seNetwork),
    se_policy_group: cdktf.stringToTerraform(struct!.sePolicyGroup),
    se_user: cdktf.stringToTerraform(struct!.seUser),
    se_zone: cdktf.stringToTerraform(struct!.seZone),
  }
}


export function cloudRancherConfigurationNuageControllerToHclTerraform(struct?: CloudRancherConfigurationNuageController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nuage_organization: {
      value: cdktf.stringToHclTerraform(struct!.nuageOrganization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nuage_password: {
      value: cdktf.stringToHclTerraform(struct!.nuagePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nuage_port: {
      value: cdktf.stringToHclTerraform(struct!.nuagePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nuage_username: {
      value: cdktf.stringToHclTerraform(struct!.nuageUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nuage_vsd_host: {
      value: cdktf.stringToHclTerraform(struct!.nuageVsdHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_domain: {
      value: cdktf.stringToHclTerraform(struct!.seDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_enterprise: {
      value: cdktf.stringToHclTerraform(struct!.seEnterprise),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_network: {
      value: cdktf.stringToHclTerraform(struct!.seNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_policy_group: {
      value: cdktf.stringToHclTerraform(struct!.sePolicyGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_user: {
      value: cdktf.stringToHclTerraform(struct!.seUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_zone: {
      value: cdktf.stringToHclTerraform(struct!.seZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRancherConfigurationNuageControllerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRancherConfigurationNuageController | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nuageOrganization !== undefined) {
      hasAnyValues = true;
      internalValueResult.nuageOrganization = this._nuageOrganization;
    }
    if (this._nuagePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.nuagePassword = this._nuagePassword;
    }
    if (this._nuagePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nuagePort = this._nuagePort;
    }
    if (this._nuageUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.nuageUsername = this._nuageUsername;
    }
    if (this._nuageVsdHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.nuageVsdHost = this._nuageVsdHost;
    }
    if (this._seDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.seDomain = this._seDomain;
    }
    if (this._seEnterprise !== undefined) {
      hasAnyValues = true;
      internalValueResult.seEnterprise = this._seEnterprise;
    }
    if (this._seNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.seNetwork = this._seNetwork;
    }
    if (this._sePolicyGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.sePolicyGroup = this._sePolicyGroup;
    }
    if (this._seUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.seUser = this._seUser;
    }
    if (this._seZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.seZone = this._seZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRancherConfigurationNuageController | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nuageOrganization = undefined;
      this._nuagePassword = undefined;
      this._nuagePort = undefined;
      this._nuageUsername = undefined;
      this._nuageVsdHost = undefined;
      this._seDomain = undefined;
      this._seEnterprise = undefined;
      this._seNetwork = undefined;
      this._sePolicyGroup = undefined;
      this._seUser = undefined;
      this._seZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nuageOrganization = value.nuageOrganization;
      this._nuagePassword = value.nuagePassword;
      this._nuagePort = value.nuagePort;
      this._nuageUsername = value.nuageUsername;
      this._nuageVsdHost = value.nuageVsdHost;
      this._seDomain = value.seDomain;
      this._seEnterprise = value.seEnterprise;
      this._seNetwork = value.seNetwork;
      this._sePolicyGroup = value.sePolicyGroup;
      this._seUser = value.seUser;
      this._seZone = value.seZone;
    }
  }

  // nuage_organization - computed: true, optional: true, required: false
  private _nuageOrganization?: string; 
  public get nuageOrganization() {
    return this.getStringAttribute('nuage_organization');
  }
  public set nuageOrganization(value: string) {
    this._nuageOrganization = value;
  }
  public resetNuageOrganization() {
    this._nuageOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nuageOrganizationInput() {
    return this._nuageOrganization;
  }

  // nuage_password - computed: true, optional: true, required: false
  private _nuagePassword?: string; 
  public get nuagePassword() {
    return this.getStringAttribute('nuage_password');
  }
  public set nuagePassword(value: string) {
    this._nuagePassword = value;
  }
  public resetNuagePassword() {
    this._nuagePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nuagePasswordInput() {
    return this._nuagePassword;
  }

  // nuage_port - computed: false, optional: true, required: false
  private _nuagePort?: string; 
  public get nuagePort() {
    return this.getStringAttribute('nuage_port');
  }
  public set nuagePort(value: string) {
    this._nuagePort = value;
  }
  public resetNuagePort() {
    this._nuagePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nuagePortInput() {
    return this._nuagePort;
  }

  // nuage_username - computed: true, optional: true, required: false
  private _nuageUsername?: string; 
  public get nuageUsername() {
    return this.getStringAttribute('nuage_username');
  }
  public set nuageUsername(value: string) {
    this._nuageUsername = value;
  }
  public resetNuageUsername() {
    this._nuageUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nuageUsernameInput() {
    return this._nuageUsername;
  }

  // nuage_vsd_host - computed: true, optional: true, required: false
  private _nuageVsdHost?: string; 
  public get nuageVsdHost() {
    return this.getStringAttribute('nuage_vsd_host');
  }
  public set nuageVsdHost(value: string) {
    this._nuageVsdHost = value;
  }
  public resetNuageVsdHost() {
    this._nuageVsdHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nuageVsdHostInput() {
    return this._nuageVsdHost;
  }

  // se_domain - computed: true, optional: true, required: false
  private _seDomain?: string; 
  public get seDomain() {
    return this.getStringAttribute('se_domain');
  }
  public set seDomain(value: string) {
    this._seDomain = value;
  }
  public resetSeDomain() {
    this._seDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDomainInput() {
    return this._seDomain;
  }

  // se_enterprise - computed: true, optional: true, required: false
  private _seEnterprise?: string; 
  public get seEnterprise() {
    return this.getStringAttribute('se_enterprise');
  }
  public set seEnterprise(value: string) {
    this._seEnterprise = value;
  }
  public resetSeEnterprise() {
    this._seEnterprise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seEnterpriseInput() {
    return this._seEnterprise;
  }

  // se_network - computed: true, optional: true, required: false
  private _seNetwork?: string; 
  public get seNetwork() {
    return this.getStringAttribute('se_network');
  }
  public set seNetwork(value: string) {
    this._seNetwork = value;
  }
  public resetSeNetwork() {
    this._seNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seNetworkInput() {
    return this._seNetwork;
  }

  // se_policy_group - computed: true, optional: true, required: false
  private _sePolicyGroup?: string; 
  public get sePolicyGroup() {
    return this.getStringAttribute('se_policy_group');
  }
  public set sePolicyGroup(value: string) {
    this._sePolicyGroup = value;
  }
  public resetSePolicyGroup() {
    this._sePolicyGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sePolicyGroupInput() {
    return this._sePolicyGroup;
  }

  // se_user - computed: true, optional: true, required: false
  private _seUser?: string; 
  public get seUser() {
    return this.getStringAttribute('se_user');
  }
  public set seUser(value: string) {
    this._seUser = value;
  }
  public resetSeUser() {
    this._seUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUserInput() {
    return this._seUser;
  }

  // se_zone - computed: true, optional: true, required: false
  private _seZone?: string; 
  public get seZone() {
    return this.getStringAttribute('se_zone');
  }
  public set seZone(value: string) {
    this._seZone = value;
  }
  public resetSeZone() {
    this._seZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seZoneInput() {
    return this._seZone;
  }
}

export class CloudRancherConfigurationNuageControllerList extends cdktf.ComplexList {
  public internalValue? : CloudRancherConfigurationNuageController[] | cdktf.IResolvable

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
  public get(index: number): CloudRancherConfigurationNuageControllerOutputReference {
    return new CloudRancherConfigurationNuageControllerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRancherConfigurationSeExcludeAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#attribute Cloud#attribute}
  */
  readonly attribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#value Cloud#value}
  */
  readonly value?: string;
}

export function cloudRancherConfigurationSeExcludeAttributesToTerraform(struct?: CloudRancherConfigurationSeExcludeAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudRancherConfigurationSeExcludeAttributesToHclTerraform(struct?: CloudRancherConfigurationSeExcludeAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRancherConfigurationSeExcludeAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRancherConfigurationSeExcludeAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRancherConfigurationSeExcludeAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._value = value.value;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // value - computed: true, optional: true, required: false
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
}

export class CloudRancherConfigurationSeExcludeAttributesList extends cdktf.ComplexList {
  public internalValue? : CloudRancherConfigurationSeExcludeAttributes[] | cdktf.IResolvable

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
  public get(index: number): CloudRancherConfigurationSeExcludeAttributesOutputReference {
    return new CloudRancherConfigurationSeExcludeAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRancherConfigurationSeIncludeAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#attribute Cloud#attribute}
  */
  readonly attribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#value Cloud#value}
  */
  readonly value?: string;
}

export function cloudRancherConfigurationSeIncludeAttributesToTerraform(struct?: CloudRancherConfigurationSeIncludeAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudRancherConfigurationSeIncludeAttributesToHclTerraform(struct?: CloudRancherConfigurationSeIncludeAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRancherConfigurationSeIncludeAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRancherConfigurationSeIncludeAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRancherConfigurationSeIncludeAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._value = value.value;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // value - computed: true, optional: true, required: false
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
}

export class CloudRancherConfigurationSeIncludeAttributesList extends cdktf.ComplexList {
  public internalValue? : CloudRancherConfigurationSeIncludeAttributes[] | cdktf.IResolvable

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
  public get(index: number): CloudRancherConfigurationSeIncludeAttributesOutputReference {
    return new CloudRancherConfigurationSeIncludeAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRancherConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#access_key Cloud#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#app_sync_frequency Cloud#app_sync_frequency}
  */
  readonly appSyncFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#container_port_match_http_service Cloud#container_port_match_http_service}
  */
  readonly containerPortMatchHttpService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#coredump_directory Cloud#coredump_directory}
  */
  readonly coredumpDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#disable_auto_backend_service_sync Cloud#disable_auto_backend_service_sync}
  */
  readonly disableAutoBackendServiceSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#disable_auto_frontend_service_sync Cloud#disable_auto_frontend_service_sync}
  */
  readonly disableAutoFrontendServiceSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#disable_auto_se_creation Cloud#disable_auto_se_creation}
  */
  readonly disableAutoSeCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#enable_event_subscription Cloud#enable_event_subscription}
  */
  readonly enableEventSubscription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#feproxy_container_port_as_service Cloud#feproxy_container_port_as_service}
  */
  readonly feproxyContainerPortAsService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#feproxy_vips_enable_proxy_arp Cloud#feproxy_vips_enable_proxy_arp}
  */
  readonly feproxyVipsEnableProxyArp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#fleet_endpoint Cloud#fleet_endpoint}
  */
  readonly fleetEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#http_container_ports Cloud#http_container_ports}
  */
  readonly httpContainerPorts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#rancher_servers Cloud#rancher_servers}
  */
  readonly rancherServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_deployment_method Cloud#se_deployment_method}
  */
  readonly seDeploymentMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_spawn_rate Cloud#se_spawn_rate}
  */
  readonly seSpawnRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_volume Cloud#se_volume}
  */
  readonly seVolume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#secret_key Cloud#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#services_accessible_all_interfaces Cloud#services_accessible_all_interfaces}
  */
  readonly servicesAccessibleAllInterfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ssh_user_ref Cloud#ssh_user_ref}
  */
  readonly sshUserRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#use_container_ip_port Cloud#use_container_ip_port}
  */
  readonly useContainerIpPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#use_controller_image Cloud#use_controller_image}
  */
  readonly useControllerImage?: string;
  /**
  * docker_registry_se block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#docker_registry_se Cloud#docker_registry_se}
  */
  readonly dockerRegistrySe?: CloudRancherConfigurationDockerRegistrySe[] | cdktf.IResolvable;
  /**
  * east_west_placement_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#east_west_placement_subnet Cloud#east_west_placement_subnet}
  */
  readonly eastWestPlacementSubnet?: CloudRancherConfigurationEastWestPlacementSubnet[] | cdktf.IResolvable;
  /**
  * nuage_controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#nuage_controller Cloud#nuage_controller}
  */
  readonly nuageController?: CloudRancherConfigurationNuageController[] | cdktf.IResolvable;
  /**
  * se_exclude_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_exclude_attributes Cloud#se_exclude_attributes}
  */
  readonly seExcludeAttributes?: CloudRancherConfigurationSeExcludeAttributes[] | cdktf.IResolvable;
  /**
  * se_include_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#se_include_attributes Cloud#se_include_attributes}
  */
  readonly seIncludeAttributes?: CloudRancherConfigurationSeIncludeAttributes[] | cdktf.IResolvable;
}

export function cloudRancherConfigurationToTerraform(struct?: CloudRancherConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    app_sync_frequency: cdktf.stringToTerraform(struct!.appSyncFrequency),
    container_port_match_http_service: cdktf.stringToTerraform(struct!.containerPortMatchHttpService),
    coredump_directory: cdktf.stringToTerraform(struct!.coredumpDirectory),
    disable_auto_backend_service_sync: cdktf.stringToTerraform(struct!.disableAutoBackendServiceSync),
    disable_auto_frontend_service_sync: cdktf.stringToTerraform(struct!.disableAutoFrontendServiceSync),
    disable_auto_se_creation: cdktf.stringToTerraform(struct!.disableAutoSeCreation),
    enable_event_subscription: cdktf.stringToTerraform(struct!.enableEventSubscription),
    feproxy_container_port_as_service: cdktf.stringToTerraform(struct!.feproxyContainerPortAsService),
    feproxy_vips_enable_proxy_arp: cdktf.stringToTerraform(struct!.feproxyVipsEnableProxyArp),
    fleet_endpoint: cdktf.stringToTerraform(struct!.fleetEndpoint),
    http_container_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.httpContainerPorts),
    rancher_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rancherServers),
    se_deployment_method: cdktf.stringToTerraform(struct!.seDeploymentMethod),
    se_spawn_rate: cdktf.stringToTerraform(struct!.seSpawnRate),
    se_volume: cdktf.stringToTerraform(struct!.seVolume),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    services_accessible_all_interfaces: cdktf.stringToTerraform(struct!.servicesAccessibleAllInterfaces),
    ssh_user_ref: cdktf.stringToTerraform(struct!.sshUserRef),
    use_container_ip_port: cdktf.stringToTerraform(struct!.useContainerIpPort),
    use_controller_image: cdktf.stringToTerraform(struct!.useControllerImage),
    docker_registry_se: cdktf.listMapper(cloudRancherConfigurationDockerRegistrySeToTerraform, true)(struct!.dockerRegistrySe),
    east_west_placement_subnet: cdktf.listMapper(cloudRancherConfigurationEastWestPlacementSubnetToTerraform, true)(struct!.eastWestPlacementSubnet),
    nuage_controller: cdktf.listMapper(cloudRancherConfigurationNuageControllerToTerraform, true)(struct!.nuageController),
    se_exclude_attributes: cdktf.listMapper(cloudRancherConfigurationSeExcludeAttributesToTerraform, true)(struct!.seExcludeAttributes),
    se_include_attributes: cdktf.listMapper(cloudRancherConfigurationSeIncludeAttributesToTerraform, true)(struct!.seIncludeAttributes),
  }
}


export function cloudRancherConfigurationToHclTerraform(struct?: CloudRancherConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_sync_frequency: {
      value: cdktf.stringToHclTerraform(struct!.appSyncFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_port_match_http_service: {
      value: cdktf.stringToHclTerraform(struct!.containerPortMatchHttpService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coredump_directory: {
      value: cdktf.stringToHclTerraform(struct!.coredumpDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_auto_backend_service_sync: {
      value: cdktf.stringToHclTerraform(struct!.disableAutoBackendServiceSync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_auto_frontend_service_sync: {
      value: cdktf.stringToHclTerraform(struct!.disableAutoFrontendServiceSync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_auto_se_creation: {
      value: cdktf.stringToHclTerraform(struct!.disableAutoSeCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_event_subscription: {
      value: cdktf.stringToHclTerraform(struct!.enableEventSubscription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feproxy_container_port_as_service: {
      value: cdktf.stringToHclTerraform(struct!.feproxyContainerPortAsService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feproxy_vips_enable_proxy_arp: {
      value: cdktf.stringToHclTerraform(struct!.feproxyVipsEnableProxyArp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fleet_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.fleetEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_container_ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.httpContainerPorts),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    rancher_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rancherServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_deployment_method: {
      value: cdktf.stringToHclTerraform(struct!.seDeploymentMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_spawn_rate: {
      value: cdktf.stringToHclTerraform(struct!.seSpawnRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_volume: {
      value: cdktf.stringToHclTerraform(struct!.seVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_accessible_all_interfaces: {
      value: cdktf.stringToHclTerraform(struct!.servicesAccessibleAllInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_user_ref: {
      value: cdktf.stringToHclTerraform(struct!.sshUserRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_container_ip_port: {
      value: cdktf.stringToHclTerraform(struct!.useContainerIpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_controller_image: {
      value: cdktf.stringToHclTerraform(struct!.useControllerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_registry_se: {
      value: cdktf.listMapperHcl(cloudRancherConfigurationDockerRegistrySeToHclTerraform, true)(struct!.dockerRegistrySe),
      isBlock: true,
      type: "set",
      storageClassType: "CloudRancherConfigurationDockerRegistrySeList",
    },
    east_west_placement_subnet: {
      value: cdktf.listMapperHcl(cloudRancherConfigurationEastWestPlacementSubnetToHclTerraform, true)(struct!.eastWestPlacementSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "CloudRancherConfigurationEastWestPlacementSubnetList",
    },
    nuage_controller: {
      value: cdktf.listMapperHcl(cloudRancherConfigurationNuageControllerToHclTerraform, true)(struct!.nuageController),
      isBlock: true,
      type: "set",
      storageClassType: "CloudRancherConfigurationNuageControllerList",
    },
    se_exclude_attributes: {
      value: cdktf.listMapperHcl(cloudRancherConfigurationSeExcludeAttributesToHclTerraform, true)(struct!.seExcludeAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRancherConfigurationSeExcludeAttributesList",
    },
    se_include_attributes: {
      value: cdktf.listMapperHcl(cloudRancherConfigurationSeIncludeAttributesToHclTerraform, true)(struct!.seIncludeAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRancherConfigurationSeIncludeAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRancherConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRancherConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._appSyncFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSyncFrequency = this._appSyncFrequency;
    }
    if (this._containerPortMatchHttpService !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPortMatchHttpService = this._containerPortMatchHttpService;
    }
    if (this._coredumpDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.coredumpDirectory = this._coredumpDirectory;
    }
    if (this._disableAutoBackendServiceSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoBackendServiceSync = this._disableAutoBackendServiceSync;
    }
    if (this._disableAutoFrontendServiceSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoFrontendServiceSync = this._disableAutoFrontendServiceSync;
    }
    if (this._disableAutoSeCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoSeCreation = this._disableAutoSeCreation;
    }
    if (this._enableEventSubscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEventSubscription = this._enableEventSubscription;
    }
    if (this._feproxyContainerPortAsService !== undefined) {
      hasAnyValues = true;
      internalValueResult.feproxyContainerPortAsService = this._feproxyContainerPortAsService;
    }
    if (this._feproxyVipsEnableProxyArp !== undefined) {
      hasAnyValues = true;
      internalValueResult.feproxyVipsEnableProxyArp = this._feproxyVipsEnableProxyArp;
    }
    if (this._fleetEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetEndpoint = this._fleetEndpoint;
    }
    if (this._httpContainerPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpContainerPorts = this._httpContainerPorts;
    }
    if (this._rancherServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.rancherServers = this._rancherServers;
    }
    if (this._seDeploymentMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.seDeploymentMethod = this._seDeploymentMethod;
    }
    if (this._seSpawnRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.seSpawnRate = this._seSpawnRate;
    }
    if (this._seVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.seVolume = this._seVolume;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._servicesAccessibleAllInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesAccessibleAllInterfaces = this._servicesAccessibleAllInterfaces;
    }
    if (this._sshUserRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshUserRef = this._sshUserRef;
    }
    if (this._useContainerIpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useContainerIpPort = this._useContainerIpPort;
    }
    if (this._useControllerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.useControllerImage = this._useControllerImage;
    }
    if (this._dockerRegistrySe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerRegistrySe = this._dockerRegistrySe?.internalValue;
    }
    if (this._eastWestPlacementSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eastWestPlacementSubnet = this._eastWestPlacementSubnet?.internalValue;
    }
    if (this._nuageController?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nuageController = this._nuageController?.internalValue;
    }
    if (this._seExcludeAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seExcludeAttributes = this._seExcludeAttributes?.internalValue;
    }
    if (this._seIncludeAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seIncludeAttributes = this._seIncludeAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRancherConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._appSyncFrequency = undefined;
      this._containerPortMatchHttpService = undefined;
      this._coredumpDirectory = undefined;
      this._disableAutoBackendServiceSync = undefined;
      this._disableAutoFrontendServiceSync = undefined;
      this._disableAutoSeCreation = undefined;
      this._enableEventSubscription = undefined;
      this._feproxyContainerPortAsService = undefined;
      this._feproxyVipsEnableProxyArp = undefined;
      this._fleetEndpoint = undefined;
      this._httpContainerPorts = undefined;
      this._rancherServers = undefined;
      this._seDeploymentMethod = undefined;
      this._seSpawnRate = undefined;
      this._seVolume = undefined;
      this._secretKey = undefined;
      this._servicesAccessibleAllInterfaces = undefined;
      this._sshUserRef = undefined;
      this._useContainerIpPort = undefined;
      this._useControllerImage = undefined;
      this._dockerRegistrySe.internalValue = undefined;
      this._eastWestPlacementSubnet.internalValue = undefined;
      this._nuageController.internalValue = undefined;
      this._seExcludeAttributes.internalValue = undefined;
      this._seIncludeAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._appSyncFrequency = value.appSyncFrequency;
      this._containerPortMatchHttpService = value.containerPortMatchHttpService;
      this._coredumpDirectory = value.coredumpDirectory;
      this._disableAutoBackendServiceSync = value.disableAutoBackendServiceSync;
      this._disableAutoFrontendServiceSync = value.disableAutoFrontendServiceSync;
      this._disableAutoSeCreation = value.disableAutoSeCreation;
      this._enableEventSubscription = value.enableEventSubscription;
      this._feproxyContainerPortAsService = value.feproxyContainerPortAsService;
      this._feproxyVipsEnableProxyArp = value.feproxyVipsEnableProxyArp;
      this._fleetEndpoint = value.fleetEndpoint;
      this._httpContainerPorts = value.httpContainerPorts;
      this._rancherServers = value.rancherServers;
      this._seDeploymentMethod = value.seDeploymentMethod;
      this._seSpawnRate = value.seSpawnRate;
      this._seVolume = value.seVolume;
      this._secretKey = value.secretKey;
      this._servicesAccessibleAllInterfaces = value.servicesAccessibleAllInterfaces;
      this._sshUserRef = value.sshUserRef;
      this._useContainerIpPort = value.useContainerIpPort;
      this._useControllerImage = value.useControllerImage;
      this._dockerRegistrySe.internalValue = value.dockerRegistrySe;
      this._eastWestPlacementSubnet.internalValue = value.eastWestPlacementSubnet;
      this._nuageController.internalValue = value.nuageController;
      this._seExcludeAttributes.internalValue = value.seExcludeAttributes;
      this._seIncludeAttributes.internalValue = value.seIncludeAttributes;
    }
  }

  // access_key - computed: true, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // app_sync_frequency - computed: false, optional: true, required: false
  private _appSyncFrequency?: string; 
  public get appSyncFrequency() {
    return this.getStringAttribute('app_sync_frequency');
  }
  public set appSyncFrequency(value: string) {
    this._appSyncFrequency = value;
  }
  public resetAppSyncFrequency() {
    this._appSyncFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSyncFrequencyInput() {
    return this._appSyncFrequency;
  }

  // container_port_match_http_service - computed: false, optional: true, required: false
  private _containerPortMatchHttpService?: string; 
  public get containerPortMatchHttpService() {
    return this.getStringAttribute('container_port_match_http_service');
  }
  public set containerPortMatchHttpService(value: string) {
    this._containerPortMatchHttpService = value;
  }
  public resetContainerPortMatchHttpService() {
    this._containerPortMatchHttpService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortMatchHttpServiceInput() {
    return this._containerPortMatchHttpService;
  }

  // coredump_directory - computed: false, optional: true, required: false
  private _coredumpDirectory?: string; 
  public get coredumpDirectory() {
    return this.getStringAttribute('coredump_directory');
  }
  public set coredumpDirectory(value: string) {
    this._coredumpDirectory = value;
  }
  public resetCoredumpDirectory() {
    this._coredumpDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coredumpDirectoryInput() {
    return this._coredumpDirectory;
  }

  // disable_auto_backend_service_sync - computed: false, optional: true, required: false
  private _disableAutoBackendServiceSync?: string; 
  public get disableAutoBackendServiceSync() {
    return this.getStringAttribute('disable_auto_backend_service_sync');
  }
  public set disableAutoBackendServiceSync(value: string) {
    this._disableAutoBackendServiceSync = value;
  }
  public resetDisableAutoBackendServiceSync() {
    this._disableAutoBackendServiceSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoBackendServiceSyncInput() {
    return this._disableAutoBackendServiceSync;
  }

  // disable_auto_frontend_service_sync - computed: false, optional: true, required: false
  private _disableAutoFrontendServiceSync?: string; 
  public get disableAutoFrontendServiceSync() {
    return this.getStringAttribute('disable_auto_frontend_service_sync');
  }
  public set disableAutoFrontendServiceSync(value: string) {
    this._disableAutoFrontendServiceSync = value;
  }
  public resetDisableAutoFrontendServiceSync() {
    this._disableAutoFrontendServiceSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoFrontendServiceSyncInput() {
    return this._disableAutoFrontendServiceSync;
  }

  // disable_auto_se_creation - computed: false, optional: true, required: false
  private _disableAutoSeCreation?: string; 
  public get disableAutoSeCreation() {
    return this.getStringAttribute('disable_auto_se_creation');
  }
  public set disableAutoSeCreation(value: string) {
    this._disableAutoSeCreation = value;
  }
  public resetDisableAutoSeCreation() {
    this._disableAutoSeCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoSeCreationInput() {
    return this._disableAutoSeCreation;
  }

  // enable_event_subscription - computed: false, optional: true, required: false
  private _enableEventSubscription?: string; 
  public get enableEventSubscription() {
    return this.getStringAttribute('enable_event_subscription');
  }
  public set enableEventSubscription(value: string) {
    this._enableEventSubscription = value;
  }
  public resetEnableEventSubscription() {
    this._enableEventSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEventSubscriptionInput() {
    return this._enableEventSubscription;
  }

  // feproxy_container_port_as_service - computed: false, optional: true, required: false
  private _feproxyContainerPortAsService?: string; 
  public get feproxyContainerPortAsService() {
    return this.getStringAttribute('feproxy_container_port_as_service');
  }
  public set feproxyContainerPortAsService(value: string) {
    this._feproxyContainerPortAsService = value;
  }
  public resetFeproxyContainerPortAsService() {
    this._feproxyContainerPortAsService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feproxyContainerPortAsServiceInput() {
    return this._feproxyContainerPortAsService;
  }

  // feproxy_vips_enable_proxy_arp - computed: false, optional: true, required: false
  private _feproxyVipsEnableProxyArp?: string; 
  public get feproxyVipsEnableProxyArp() {
    return this.getStringAttribute('feproxy_vips_enable_proxy_arp');
  }
  public set feproxyVipsEnableProxyArp(value: string) {
    this._feproxyVipsEnableProxyArp = value;
  }
  public resetFeproxyVipsEnableProxyArp() {
    this._feproxyVipsEnableProxyArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feproxyVipsEnableProxyArpInput() {
    return this._feproxyVipsEnableProxyArp;
  }

  // fleet_endpoint - computed: true, optional: true, required: false
  private _fleetEndpoint?: string; 
  public get fleetEndpoint() {
    return this.getStringAttribute('fleet_endpoint');
  }
  public set fleetEndpoint(value: string) {
    this._fleetEndpoint = value;
  }
  public resetFleetEndpoint() {
    this._fleetEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetEndpointInput() {
    return this._fleetEndpoint;
  }

  // http_container_ports - computed: false, optional: true, required: false
  private _httpContainerPorts?: number[]; 
  public get httpContainerPorts() {
    return this.getNumberListAttribute('http_container_ports');
  }
  public set httpContainerPorts(value: number[]) {
    this._httpContainerPorts = value;
  }
  public resetHttpContainerPorts() {
    this._httpContainerPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpContainerPortsInput() {
    return this._httpContainerPorts;
  }

  // rancher_servers - computed: false, optional: true, required: false
  private _rancherServers?: string[]; 
  public get rancherServers() {
    return this.getListAttribute('rancher_servers');
  }
  public set rancherServers(value: string[]) {
    this._rancherServers = value;
  }
  public resetRancherServers() {
    this._rancherServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rancherServersInput() {
    return this._rancherServers;
  }

  // se_deployment_method - computed: false, optional: true, required: false
  private _seDeploymentMethod?: string; 
  public get seDeploymentMethod() {
    return this.getStringAttribute('se_deployment_method');
  }
  public set seDeploymentMethod(value: string) {
    this._seDeploymentMethod = value;
  }
  public resetSeDeploymentMethod() {
    this._seDeploymentMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDeploymentMethodInput() {
    return this._seDeploymentMethod;
  }

  // se_spawn_rate - computed: false, optional: true, required: false
  private _seSpawnRate?: string; 
  public get seSpawnRate() {
    return this.getStringAttribute('se_spawn_rate');
  }
  public set seSpawnRate(value: string) {
    this._seSpawnRate = value;
  }
  public resetSeSpawnRate() {
    this._seSpawnRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seSpawnRateInput() {
    return this._seSpawnRate;
  }

  // se_volume - computed: false, optional: true, required: false
  private _seVolume?: string; 
  public get seVolume() {
    return this.getStringAttribute('se_volume');
  }
  public set seVolume(value: string) {
    this._seVolume = value;
  }
  public resetSeVolume() {
    this._seVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seVolumeInput() {
    return this._seVolume;
  }

  // secret_key - computed: true, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // services_accessible_all_interfaces - computed: false, optional: true, required: false
  private _servicesAccessibleAllInterfaces?: string; 
  public get servicesAccessibleAllInterfaces() {
    return this.getStringAttribute('services_accessible_all_interfaces');
  }
  public set servicesAccessibleAllInterfaces(value: string) {
    this._servicesAccessibleAllInterfaces = value;
  }
  public resetServicesAccessibleAllInterfaces() {
    this._servicesAccessibleAllInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesAccessibleAllInterfacesInput() {
    return this._servicesAccessibleAllInterfaces;
  }

  // ssh_user_ref - computed: true, optional: true, required: false
  private _sshUserRef?: string; 
  public get sshUserRef() {
    return this.getStringAttribute('ssh_user_ref');
  }
  public set sshUserRef(value: string) {
    this._sshUserRef = value;
  }
  public resetSshUserRef() {
    this._sshUserRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUserRefInput() {
    return this._sshUserRef;
  }

  // use_container_ip_port - computed: false, optional: true, required: false
  private _useContainerIpPort?: string; 
  public get useContainerIpPort() {
    return this.getStringAttribute('use_container_ip_port');
  }
  public set useContainerIpPort(value: string) {
    this._useContainerIpPort = value;
  }
  public resetUseContainerIpPort() {
    this._useContainerIpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useContainerIpPortInput() {
    return this._useContainerIpPort;
  }

  // use_controller_image - computed: false, optional: true, required: false
  private _useControllerImage?: string; 
  public get useControllerImage() {
    return this.getStringAttribute('use_controller_image');
  }
  public set useControllerImage(value: string) {
    this._useControllerImage = value;
  }
  public resetUseControllerImage() {
    this._useControllerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useControllerImageInput() {
    return this._useControllerImage;
  }

  // docker_registry_se - computed: false, optional: true, required: false
  private _dockerRegistrySe = new CloudRancherConfigurationDockerRegistrySeList(this, "docker_registry_se", true);
  public get dockerRegistrySe() {
    return this._dockerRegistrySe;
  }
  public putDockerRegistrySe(value: CloudRancherConfigurationDockerRegistrySe[] | cdktf.IResolvable) {
    this._dockerRegistrySe.internalValue = value;
  }
  public resetDockerRegistrySe() {
    this._dockerRegistrySe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerRegistrySeInput() {
    return this._dockerRegistrySe.internalValue;
  }

  // east_west_placement_subnet - computed: false, optional: true, required: false
  private _eastWestPlacementSubnet = new CloudRancherConfigurationEastWestPlacementSubnetList(this, "east_west_placement_subnet", true);
  public get eastWestPlacementSubnet() {
    return this._eastWestPlacementSubnet;
  }
  public putEastWestPlacementSubnet(value: CloudRancherConfigurationEastWestPlacementSubnet[] | cdktf.IResolvable) {
    this._eastWestPlacementSubnet.internalValue = value;
  }
  public resetEastWestPlacementSubnet() {
    this._eastWestPlacementSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestPlacementSubnetInput() {
    return this._eastWestPlacementSubnet.internalValue;
  }

  // nuage_controller - computed: false, optional: true, required: false
  private _nuageController = new CloudRancherConfigurationNuageControllerList(this, "nuage_controller", true);
  public get nuageController() {
    return this._nuageController;
  }
  public putNuageController(value: CloudRancherConfigurationNuageController[] | cdktf.IResolvable) {
    this._nuageController.internalValue = value;
  }
  public resetNuageController() {
    this._nuageController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nuageControllerInput() {
    return this._nuageController.internalValue;
  }

  // se_exclude_attributes - computed: false, optional: true, required: false
  private _seExcludeAttributes = new CloudRancherConfigurationSeExcludeAttributesList(this, "se_exclude_attributes", false);
  public get seExcludeAttributes() {
    return this._seExcludeAttributes;
  }
  public putSeExcludeAttributes(value: CloudRancherConfigurationSeExcludeAttributes[] | cdktf.IResolvable) {
    this._seExcludeAttributes.internalValue = value;
  }
  public resetSeExcludeAttributes() {
    this._seExcludeAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seExcludeAttributesInput() {
    return this._seExcludeAttributes.internalValue;
  }

  // se_include_attributes - computed: false, optional: true, required: false
  private _seIncludeAttributes = new CloudRancherConfigurationSeIncludeAttributesList(this, "se_include_attributes", false);
  public get seIncludeAttributes() {
    return this._seIncludeAttributes;
  }
  public putSeIncludeAttributes(value: CloudRancherConfigurationSeIncludeAttributes[] | cdktf.IResolvable) {
    this._seIncludeAttributes.internalValue = value;
  }
  public resetSeIncludeAttributes() {
    this._seIncludeAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seIncludeAttributesInput() {
    return this._seIncludeAttributes.internalValue;
  }
}

export class CloudRancherConfigurationList extends cdktf.ComplexList {
  public internalValue? : CloudRancherConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CloudRancherConfigurationOutputReference {
    return new CloudRancherConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudVcaConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#privilege Cloud#privilege}
  */
  readonly privilege: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vca_host Cloud#vca_host}
  */
  readonly vcaHost: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vca_instance Cloud#vca_instance}
  */
  readonly vcaInstance: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vca_mgmt_network Cloud#vca_mgmt_network}
  */
  readonly vcaMgmtNetwork: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vca_orgnization Cloud#vca_orgnization}
  */
  readonly vcaOrgnization: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vca_password Cloud#vca_password}
  */
  readonly vcaPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vca_username Cloud#vca_username}
  */
  readonly vcaUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vca_vdc Cloud#vca_vdc}
  */
  readonly vcaVdc: string;
}

export function cloudVcaConfigurationToTerraform(struct?: CloudVcaConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    privilege: cdktf.stringToTerraform(struct!.privilege),
    vca_host: cdktf.stringToTerraform(struct!.vcaHost),
    vca_instance: cdktf.stringToTerraform(struct!.vcaInstance),
    vca_mgmt_network: cdktf.stringToTerraform(struct!.vcaMgmtNetwork),
    vca_orgnization: cdktf.stringToTerraform(struct!.vcaOrgnization),
    vca_password: cdktf.stringToTerraform(struct!.vcaPassword),
    vca_username: cdktf.stringToTerraform(struct!.vcaUsername),
    vca_vdc: cdktf.stringToTerraform(struct!.vcaVdc),
  }
}


export function cloudVcaConfigurationToHclTerraform(struct?: CloudVcaConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    privilege: {
      value: cdktf.stringToHclTerraform(struct!.privilege),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vca_host: {
      value: cdktf.stringToHclTerraform(struct!.vcaHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vca_instance: {
      value: cdktf.stringToHclTerraform(struct!.vcaInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vca_mgmt_network: {
      value: cdktf.stringToHclTerraform(struct!.vcaMgmtNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vca_orgnization: {
      value: cdktf.stringToHclTerraform(struct!.vcaOrgnization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vca_password: {
      value: cdktf.stringToHclTerraform(struct!.vcaPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vca_username: {
      value: cdktf.stringToHclTerraform(struct!.vcaUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vca_vdc: {
      value: cdktf.stringToHclTerraform(struct!.vcaVdc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudVcaConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudVcaConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privilege !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilege = this._privilege;
    }
    if (this._vcaHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcaHost = this._vcaHost;
    }
    if (this._vcaInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcaInstance = this._vcaInstance;
    }
    if (this._vcaMgmtNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcaMgmtNetwork = this._vcaMgmtNetwork;
    }
    if (this._vcaOrgnization !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcaOrgnization = this._vcaOrgnization;
    }
    if (this._vcaPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcaPassword = this._vcaPassword;
    }
    if (this._vcaUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcaUsername = this._vcaUsername;
    }
    if (this._vcaVdc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcaVdc = this._vcaVdc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudVcaConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._privilege = undefined;
      this._vcaHost = undefined;
      this._vcaInstance = undefined;
      this._vcaMgmtNetwork = undefined;
      this._vcaOrgnization = undefined;
      this._vcaPassword = undefined;
      this._vcaUsername = undefined;
      this._vcaVdc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._privilege = value.privilege;
      this._vcaHost = value.vcaHost;
      this._vcaInstance = value.vcaInstance;
      this._vcaMgmtNetwork = value.vcaMgmtNetwork;
      this._vcaOrgnization = value.vcaOrgnization;
      this._vcaPassword = value.vcaPassword;
      this._vcaUsername = value.vcaUsername;
      this._vcaVdc = value.vcaVdc;
    }
  }

  // privilege - computed: false, optional: false, required: true
  private _privilege?: string; 
  public get privilege() {
    return this.getStringAttribute('privilege');
  }
  public set privilege(value: string) {
    this._privilege = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeInput() {
    return this._privilege;
  }

  // vca_host - computed: false, optional: false, required: true
  private _vcaHost?: string; 
  public get vcaHost() {
    return this.getStringAttribute('vca_host');
  }
  public set vcaHost(value: string) {
    this._vcaHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcaHostInput() {
    return this._vcaHost;
  }

  // vca_instance - computed: false, optional: false, required: true
  private _vcaInstance?: string; 
  public get vcaInstance() {
    return this.getStringAttribute('vca_instance');
  }
  public set vcaInstance(value: string) {
    this._vcaInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcaInstanceInput() {
    return this._vcaInstance;
  }

  // vca_mgmt_network - computed: false, optional: false, required: true
  private _vcaMgmtNetwork?: string; 
  public get vcaMgmtNetwork() {
    return this.getStringAttribute('vca_mgmt_network');
  }
  public set vcaMgmtNetwork(value: string) {
    this._vcaMgmtNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcaMgmtNetworkInput() {
    return this._vcaMgmtNetwork;
  }

  // vca_orgnization - computed: false, optional: false, required: true
  private _vcaOrgnization?: string; 
  public get vcaOrgnization() {
    return this.getStringAttribute('vca_orgnization');
  }
  public set vcaOrgnization(value: string) {
    this._vcaOrgnization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcaOrgnizationInput() {
    return this._vcaOrgnization;
  }

  // vca_password - computed: false, optional: false, required: true
  private _vcaPassword?: string; 
  public get vcaPassword() {
    return this.getStringAttribute('vca_password');
  }
  public set vcaPassword(value: string) {
    this._vcaPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcaPasswordInput() {
    return this._vcaPassword;
  }

  // vca_username - computed: false, optional: false, required: true
  private _vcaUsername?: string; 
  public get vcaUsername() {
    return this.getStringAttribute('vca_username');
  }
  public set vcaUsername(value: string) {
    this._vcaUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcaUsernameInput() {
    return this._vcaUsername;
  }

  // vca_vdc - computed: false, optional: false, required: true
  private _vcaVdc?: string; 
  public get vcaVdc() {
    return this.getStringAttribute('vca_vdc');
  }
  public set vcaVdc(value: string) {
    this._vcaVdc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcaVdcInput() {
    return this._vcaVdc;
  }
}

export class CloudVcaConfigurationList extends cdktf.ComplexList {
  public internalValue? : CloudVcaConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CloudVcaConfigurationOutputReference {
    return new CloudVcaConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudVcenterConfigurationContentLib {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#id Cloud#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#name Cloud#name}
  */
  readonly name?: string;
}

export function cloudVcenterConfigurationContentLibToTerraform(struct?: CloudVcenterConfigurationContentLib | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cloudVcenterConfigurationContentLibToHclTerraform(struct?: CloudVcenterConfigurationContentLib | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudVcenterConfigurationContentLibOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudVcenterConfigurationContentLib | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudVcenterConfigurationContentLib | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
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

  // name - computed: true, optional: true, required: false
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
}

export class CloudVcenterConfigurationContentLibList extends cdktf.ComplexList {
  public internalValue? : CloudVcenterConfigurationContentLib[] | cdktf.IResolvable

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
  public get(index: number): CloudVcenterConfigurationContentLibOutputReference {
    return new CloudVcenterConfigurationContentLibOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudVcenterConfigurationManagementIpSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#addr Cloud#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#type Cloud#type}
  */
  readonly type: string;
}

export function cloudVcenterConfigurationManagementIpSubnetIpAddrToTerraform(struct?: CloudVcenterConfigurationManagementIpSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudVcenterConfigurationManagementIpSubnetIpAddrToHclTerraform(struct?: CloudVcenterConfigurationManagementIpSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudVcenterConfigurationManagementIpSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudVcenterConfigurationManagementIpSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudVcenterConfigurationManagementIpSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CloudVcenterConfigurationManagementIpSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : CloudVcenterConfigurationManagementIpSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): CloudVcenterConfigurationManagementIpSubnetIpAddrOutputReference {
    return new CloudVcenterConfigurationManagementIpSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudVcenterConfigurationManagementIpSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#mask Cloud#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#ip_addr Cloud#ip_addr}
  */
  readonly ipAddr: CloudVcenterConfigurationManagementIpSubnetIpAddr[] | cdktf.IResolvable;
}

export function cloudVcenterConfigurationManagementIpSubnetToTerraform(struct?: CloudVcenterConfigurationManagementIpSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(cloudVcenterConfigurationManagementIpSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function cloudVcenterConfigurationManagementIpSubnetToHclTerraform(struct?: CloudVcenterConfigurationManagementIpSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(cloudVcenterConfigurationManagementIpSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "CloudVcenterConfigurationManagementIpSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudVcenterConfigurationManagementIpSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudVcenterConfigurationManagementIpSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudVcenterConfigurationManagementIpSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new CloudVcenterConfigurationManagementIpSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: CloudVcenterConfigurationManagementIpSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class CloudVcenterConfigurationManagementIpSubnetList extends cdktf.ComplexList {
  public internalValue? : CloudVcenterConfigurationManagementIpSubnet[] | cdktf.IResolvable

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
  public get(index: number): CloudVcenterConfigurationManagementIpSubnetOutputReference {
    return new CloudVcenterConfigurationManagementIpSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudVcenterConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#datacenter Cloud#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#datacenter_managed_object_id Cloud#datacenter_managed_object_id}
  */
  readonly datacenterManagedObjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#is_nsx_environment Cloud#is_nsx_environment}
  */
  readonly isNsxEnvironment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#management_network Cloud#management_network}
  */
  readonly managementNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#password Cloud#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#privilege Cloud#privilege}
  */
  readonly privilege: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#use_content_lib Cloud#use_content_lib}
  */
  readonly useContentLib?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#username Cloud#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vcenter_template_se_location Cloud#vcenter_template_se_location}
  */
  readonly vcenterTemplateSeLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#vcenter_url Cloud#vcenter_url}
  */
  readonly vcenterUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#verify_certificate Cloud#verify_certificate}
  */
  readonly verifyCertificate?: string;
  /**
  * content_lib block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#content_lib Cloud#content_lib}
  */
  readonly contentLib?: CloudVcenterConfigurationContentLib[] | cdktf.IResolvable;
  /**
  * management_ip_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#management_ip_subnet Cloud#management_ip_subnet}
  */
  readonly managementIpSubnet?: CloudVcenterConfigurationManagementIpSubnet[] | cdktf.IResolvable;
}

export function cloudVcenterConfigurationToTerraform(struct?: CloudVcenterConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    datacenter_managed_object_id: cdktf.stringToTerraform(struct!.datacenterManagedObjectId),
    is_nsx_environment: cdktf.stringToTerraform(struct!.isNsxEnvironment),
    management_network: cdktf.stringToTerraform(struct!.managementNetwork),
    password: cdktf.stringToTerraform(struct!.password),
    privilege: cdktf.stringToTerraform(struct!.privilege),
    use_content_lib: cdktf.stringToTerraform(struct!.useContentLib),
    username: cdktf.stringToTerraform(struct!.username),
    vcenter_template_se_location: cdktf.stringToTerraform(struct!.vcenterTemplateSeLocation),
    vcenter_url: cdktf.stringToTerraform(struct!.vcenterUrl),
    verify_certificate: cdktf.stringToTerraform(struct!.verifyCertificate),
    content_lib: cdktf.listMapper(cloudVcenterConfigurationContentLibToTerraform, true)(struct!.contentLib),
    management_ip_subnet: cdktf.listMapper(cloudVcenterConfigurationManagementIpSubnetToTerraform, true)(struct!.managementIpSubnet),
  }
}


export function cloudVcenterConfigurationToHclTerraform(struct?: CloudVcenterConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenter_managed_object_id: {
      value: cdktf.stringToHclTerraform(struct!.datacenterManagedObjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_nsx_environment: {
      value: cdktf.stringToHclTerraform(struct!.isNsxEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_network: {
      value: cdktf.stringToHclTerraform(struct!.managementNetwork),
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
    privilege: {
      value: cdktf.stringToHclTerraform(struct!.privilege),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_content_lib: {
      value: cdktf.stringToHclTerraform(struct!.useContentLib),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcenter_template_se_location: {
      value: cdktf.stringToHclTerraform(struct!.vcenterTemplateSeLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcenter_url: {
      value: cdktf.stringToHclTerraform(struct!.vcenterUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_certificate: {
      value: cdktf.stringToHclTerraform(struct!.verifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_lib: {
      value: cdktf.listMapperHcl(cloudVcenterConfigurationContentLibToHclTerraform, true)(struct!.contentLib),
      isBlock: true,
      type: "set",
      storageClassType: "CloudVcenterConfigurationContentLibList",
    },
    management_ip_subnet: {
      value: cdktf.listMapperHcl(cloudVcenterConfigurationManagementIpSubnetToHclTerraform, true)(struct!.managementIpSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "CloudVcenterConfigurationManagementIpSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudVcenterConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudVcenterConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._datacenterManagedObjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterManagedObjectId = this._datacenterManagedObjectId;
    }
    if (this._isNsxEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNsxEnvironment = this._isNsxEnvironment;
    }
    if (this._managementNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementNetwork = this._managementNetwork;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._privilege !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilege = this._privilege;
    }
    if (this._useContentLib !== undefined) {
      hasAnyValues = true;
      internalValueResult.useContentLib = this._useContentLib;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._vcenterTemplateSeLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterTemplateSeLocation = this._vcenterTemplateSeLocation;
    }
    if (this._vcenterUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterUrl = this._vcenterUrl;
    }
    if (this._verifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificate = this._verifyCertificate;
    }
    if (this._contentLib?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentLib = this._contentLib?.internalValue;
    }
    if (this._managementIpSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementIpSubnet = this._managementIpSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudVcenterConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenter = undefined;
      this._datacenterManagedObjectId = undefined;
      this._isNsxEnvironment = undefined;
      this._managementNetwork = undefined;
      this._password = undefined;
      this._privilege = undefined;
      this._useContentLib = undefined;
      this._username = undefined;
      this._vcenterTemplateSeLocation = undefined;
      this._vcenterUrl = undefined;
      this._verifyCertificate = undefined;
      this._contentLib.internalValue = undefined;
      this._managementIpSubnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenter = value.datacenter;
      this._datacenterManagedObjectId = value.datacenterManagedObjectId;
      this._isNsxEnvironment = value.isNsxEnvironment;
      this._managementNetwork = value.managementNetwork;
      this._password = value.password;
      this._privilege = value.privilege;
      this._useContentLib = value.useContentLib;
      this._username = value.username;
      this._vcenterTemplateSeLocation = value.vcenterTemplateSeLocation;
      this._vcenterUrl = value.vcenterUrl;
      this._verifyCertificate = value.verifyCertificate;
      this._contentLib.internalValue = value.contentLib;
      this._managementIpSubnet.internalValue = value.managementIpSubnet;
    }
  }

  // datacenter - computed: true, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // datacenter_managed_object_id - computed: true, optional: true, required: false
  private _datacenterManagedObjectId?: string; 
  public get datacenterManagedObjectId() {
    return this.getStringAttribute('datacenter_managed_object_id');
  }
  public set datacenterManagedObjectId(value: string) {
    this._datacenterManagedObjectId = value;
  }
  public resetDatacenterManagedObjectId() {
    this._datacenterManagedObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterManagedObjectIdInput() {
    return this._datacenterManagedObjectId;
  }

  // is_nsx_environment - computed: false, optional: true, required: false
  private _isNsxEnvironment?: string; 
  public get isNsxEnvironment() {
    return this.getStringAttribute('is_nsx_environment');
  }
  public set isNsxEnvironment(value: string) {
    this._isNsxEnvironment = value;
  }
  public resetIsNsxEnvironment() {
    this._isNsxEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNsxEnvironmentInput() {
    return this._isNsxEnvironment;
  }

  // management_network - computed: true, optional: true, required: false
  private _managementNetwork?: string; 
  public get managementNetwork() {
    return this.getStringAttribute('management_network');
  }
  public set managementNetwork(value: string) {
    this._managementNetwork = value;
  }
  public resetManagementNetwork() {
    this._managementNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementNetworkInput() {
    return this._managementNetwork;
  }

  // password - computed: true, optional: true, required: false
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

  // privilege - computed: false, optional: false, required: true
  private _privilege?: string; 
  public get privilege() {
    return this.getStringAttribute('privilege');
  }
  public set privilege(value: string) {
    this._privilege = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeInput() {
    return this._privilege;
  }

  // use_content_lib - computed: false, optional: true, required: false
  private _useContentLib?: string; 
  public get useContentLib() {
    return this.getStringAttribute('use_content_lib');
  }
  public set useContentLib(value: string) {
    this._useContentLib = value;
  }
  public resetUseContentLib() {
    this._useContentLib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useContentLibInput() {
    return this._useContentLib;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vcenter_template_se_location - computed: true, optional: true, required: false
  private _vcenterTemplateSeLocation?: string; 
  public get vcenterTemplateSeLocation() {
    return this.getStringAttribute('vcenter_template_se_location');
  }
  public set vcenterTemplateSeLocation(value: string) {
    this._vcenterTemplateSeLocation = value;
  }
  public resetVcenterTemplateSeLocation() {
    this._vcenterTemplateSeLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterTemplateSeLocationInput() {
    return this._vcenterTemplateSeLocation;
  }

  // vcenter_url - computed: true, optional: true, required: false
  private _vcenterUrl?: string; 
  public get vcenterUrl() {
    return this.getStringAttribute('vcenter_url');
  }
  public set vcenterUrl(value: string) {
    this._vcenterUrl = value;
  }
  public resetVcenterUrl() {
    this._vcenterUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterUrlInput() {
    return this._vcenterUrl;
  }

  // verify_certificate - computed: false, optional: true, required: false
  private _verifyCertificate?: string; 
  public get verifyCertificate() {
    return this.getStringAttribute('verify_certificate');
  }
  public set verifyCertificate(value: string) {
    this._verifyCertificate = value;
  }
  public resetVerifyCertificate() {
    this._verifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateInput() {
    return this._verifyCertificate;
  }

  // content_lib - computed: false, optional: true, required: false
  private _contentLib = new CloudVcenterConfigurationContentLibList(this, "content_lib", true);
  public get contentLib() {
    return this._contentLib;
  }
  public putContentLib(value: CloudVcenterConfigurationContentLib[] | cdktf.IResolvable) {
    this._contentLib.internalValue = value;
  }
  public resetContentLib() {
    this._contentLib.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLibInput() {
    return this._contentLib.internalValue;
  }

  // management_ip_subnet - computed: false, optional: true, required: false
  private _managementIpSubnet = new CloudVcenterConfigurationManagementIpSubnetList(this, "management_ip_subnet", true);
  public get managementIpSubnet() {
    return this._managementIpSubnet;
  }
  public putManagementIpSubnet(value: CloudVcenterConfigurationManagementIpSubnet[] | cdktf.IResolvable) {
    this._managementIpSubnet.internalValue = value;
  }
  public resetManagementIpSubnet() {
    this._managementIpSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementIpSubnetInput() {
    return this._managementIpSubnet.internalValue;
  }
}

export class CloudVcenterConfigurationList extends cdktf.ComplexList {
  public internalValue? : CloudVcenterConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CloudVcenterConfigurationOutputReference {
    return new CloudVcenterConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud avi_cloud}
*/
export class Cloud extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cloud resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cloud to import
  * @param importFromId The id of the existing Cloud that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cloud to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/cloud avi_cloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudConfig
  */
  public constructor(scope: Construct, id: string, config: CloudConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_cloud',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoscalePollingInterval = config.autoscalePollingInterval;
    this._dhcpEnabled = config.dhcpEnabled;
    this._dnsProviderRef = config.dnsProviderRef;
    this._dnsResolutionOnSe = config.dnsResolutionOnSe;
    this._eastWestDnsProviderRef = config.eastWestDnsProviderRef;
    this._eastWestIpamProviderRef = config.eastWestIpamProviderRef;
    this._enableVipOnAllInterfaces = config.enableVipOnAllInterfaces;
    this._enableVipStaticRoutes = config.enableVipStaticRoutes;
    this._id = config.id;
    this._ip6AutocfgEnabled = config.ip6AutocfgEnabled;
    this._ipamProviderRef = config.ipamProviderRef;
    this._licenseTier = config.licenseTier;
    this._licenseType = config.licenseType;
    this._maintenanceMode = config.maintenanceMode;
    this._metricsPollingInterval = config.metricsPollingInterval;
    this._mgmtIpV4Enabled = config.mgmtIpV4Enabled;
    this._mgmtIpV6Enabled = config.mgmtIpV6Enabled;
    this._mtu = config.mtu;
    this._name = config.name;
    this._objNamePrefix = config.objNamePrefix;
    this._preferStaticRoutes = config.preferStaticRoutes;
    this._resolveFqdnToIpv6 = config.resolveFqdnToIpv6;
    this._seGroupTemplateRef = config.seGroupTemplateRef;
    this._stateBasedDnsRegistration = config.stateBasedDnsRegistration;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._vmcDeployment = config.vmcDeployment;
    this._vtype = config.vtype;
    this._awsConfiguration.internalValue = config.awsConfiguration;
    this._azureConfiguration.internalValue = config.azureConfiguration;
    this._cloudstackConfiguration.internalValue = config.cloudstackConfiguration;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._customTags.internalValue = config.customTags;
    this._dnsResolvers.internalValue = config.dnsResolvers;
    this._dockerConfiguration.internalValue = config.dockerConfiguration;
    this._gcpConfiguration.internalValue = config.gcpConfiguration;
    this._linuxserverConfiguration.internalValue = config.linuxserverConfiguration;
    this._markers.internalValue = config.markers;
    this._nsxtConfiguration.internalValue = config.nsxtConfiguration;
    this._ntpConfiguration.internalValue = config.ntpConfiguration;
    this._proxyConfiguration.internalValue = config.proxyConfiguration;
    this._rancherConfiguration.internalValue = config.rancherConfiguration;
    this._vcaConfiguration.internalValue = config.vcaConfiguration;
    this._vcenterConfiguration.internalValue = config.vcenterConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscale_polling_interval - computed: false, optional: true, required: false
  private _autoscalePollingInterval?: string; 
  public get autoscalePollingInterval() {
    return this.getStringAttribute('autoscale_polling_interval');
  }
  public set autoscalePollingInterval(value: string) {
    this._autoscalePollingInterval = value;
  }
  public resetAutoscalePollingInterval() {
    this._autoscalePollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalePollingIntervalInput() {
    return this._autoscalePollingInterval;
  }

  // dhcp_enabled - computed: false, optional: true, required: false
  private _dhcpEnabled?: string; 
  public get dhcpEnabled() {
    return this.getStringAttribute('dhcp_enabled');
  }
  public set dhcpEnabled(value: string) {
    this._dhcpEnabled = value;
  }
  public resetDhcpEnabled() {
    this._dhcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEnabledInput() {
    return this._dhcpEnabled;
  }

  // dns_provider_ref - computed: true, optional: true, required: false
  private _dnsProviderRef?: string; 
  public get dnsProviderRef() {
    return this.getStringAttribute('dns_provider_ref');
  }
  public set dnsProviderRef(value: string) {
    this._dnsProviderRef = value;
  }
  public resetDnsProviderRef() {
    this._dnsProviderRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsProviderRefInput() {
    return this._dnsProviderRef;
  }

  // dns_resolution_on_se - computed: false, optional: true, required: false
  private _dnsResolutionOnSe?: string; 
  public get dnsResolutionOnSe() {
    return this.getStringAttribute('dns_resolution_on_se');
  }
  public set dnsResolutionOnSe(value: string) {
    this._dnsResolutionOnSe = value;
  }
  public resetDnsResolutionOnSe() {
    this._dnsResolutionOnSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolutionOnSeInput() {
    return this._dnsResolutionOnSe;
  }

  // east_west_dns_provider_ref - computed: true, optional: true, required: false
  private _eastWestDnsProviderRef?: string; 
  public get eastWestDnsProviderRef() {
    return this.getStringAttribute('east_west_dns_provider_ref');
  }
  public set eastWestDnsProviderRef(value: string) {
    this._eastWestDnsProviderRef = value;
  }
  public resetEastWestDnsProviderRef() {
    this._eastWestDnsProviderRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestDnsProviderRefInput() {
    return this._eastWestDnsProviderRef;
  }

  // east_west_ipam_provider_ref - computed: true, optional: true, required: false
  private _eastWestIpamProviderRef?: string; 
  public get eastWestIpamProviderRef() {
    return this.getStringAttribute('east_west_ipam_provider_ref');
  }
  public set eastWestIpamProviderRef(value: string) {
    this._eastWestIpamProviderRef = value;
  }
  public resetEastWestIpamProviderRef() {
    this._eastWestIpamProviderRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestIpamProviderRefInput() {
    return this._eastWestIpamProviderRef;
  }

  // enable_vip_on_all_interfaces - computed: false, optional: true, required: false
  private _enableVipOnAllInterfaces?: string; 
  public get enableVipOnAllInterfaces() {
    return this.getStringAttribute('enable_vip_on_all_interfaces');
  }
  public set enableVipOnAllInterfaces(value: string) {
    this._enableVipOnAllInterfaces = value;
  }
  public resetEnableVipOnAllInterfaces() {
    this._enableVipOnAllInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVipOnAllInterfacesInput() {
    return this._enableVipOnAllInterfaces;
  }

  // enable_vip_static_routes - computed: false, optional: true, required: false
  private _enableVipStaticRoutes?: string; 
  public get enableVipStaticRoutes() {
    return this.getStringAttribute('enable_vip_static_routes');
  }
  public set enableVipStaticRoutes(value: string) {
    this._enableVipStaticRoutes = value;
  }
  public resetEnableVipStaticRoutes() {
    this._enableVipStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVipStaticRoutesInput() {
    return this._enableVipStaticRoutes;
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

  // ip6_autocfg_enabled - computed: false, optional: true, required: false
  private _ip6AutocfgEnabled?: string; 
  public get ip6AutocfgEnabled() {
    return this.getStringAttribute('ip6_autocfg_enabled');
  }
  public set ip6AutocfgEnabled(value: string) {
    this._ip6AutocfgEnabled = value;
  }
  public resetIp6AutocfgEnabled() {
    this._ip6AutocfgEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AutocfgEnabledInput() {
    return this._ip6AutocfgEnabled;
  }

  // ipam_provider_ref - computed: true, optional: true, required: false
  private _ipamProviderRef?: string; 
  public get ipamProviderRef() {
    return this.getStringAttribute('ipam_provider_ref');
  }
  public set ipamProviderRef(value: string) {
    this._ipamProviderRef = value;
  }
  public resetIpamProviderRef() {
    this._ipamProviderRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamProviderRefInput() {
    return this._ipamProviderRef;
  }

  // license_tier - computed: true, optional: true, required: false
  private _licenseTier?: string; 
  public get licenseTier() {
    return this.getStringAttribute('license_tier');
  }
  public set licenseTier(value: string) {
    this._licenseTier = value;
  }
  public resetLicenseTier() {
    this._licenseTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTierInput() {
    return this._licenseTier;
  }

  // license_type - computed: true, optional: true, required: false
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

  // maintenance_mode - computed: false, optional: true, required: false
  private _maintenanceMode?: string; 
  public get maintenanceMode() {
    return this.getStringAttribute('maintenance_mode');
  }
  public set maintenanceMode(value: string) {
    this._maintenanceMode = value;
  }
  public resetMaintenanceMode() {
    this._maintenanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceModeInput() {
    return this._maintenanceMode;
  }

  // metrics_polling_interval - computed: false, optional: true, required: false
  private _metricsPollingInterval?: string; 
  public get metricsPollingInterval() {
    return this.getStringAttribute('metrics_polling_interval');
  }
  public set metricsPollingInterval(value: string) {
    this._metricsPollingInterval = value;
  }
  public resetMetricsPollingInterval() {
    this._metricsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPollingIntervalInput() {
    return this._metricsPollingInterval;
  }

  // mgmt_ip_v4_enabled - computed: false, optional: true, required: false
  private _mgmtIpV4Enabled?: string; 
  public get mgmtIpV4Enabled() {
    return this.getStringAttribute('mgmt_ip_v4_enabled');
  }
  public set mgmtIpV4Enabled(value: string) {
    this._mgmtIpV4Enabled = value;
  }
  public resetMgmtIpV4Enabled() {
    this._mgmtIpV4Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtIpV4EnabledInput() {
    return this._mgmtIpV4Enabled;
  }

  // mgmt_ip_v6_enabled - computed: false, optional: true, required: false
  private _mgmtIpV6Enabled?: string; 
  public get mgmtIpV6Enabled() {
    return this.getStringAttribute('mgmt_ip_v6_enabled');
  }
  public set mgmtIpV6Enabled(value: string) {
    this._mgmtIpV6Enabled = value;
  }
  public resetMgmtIpV6Enabled() {
    this._mgmtIpV6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtIpV6EnabledInput() {
    return this._mgmtIpV6Enabled;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // obj_name_prefix - computed: true, optional: true, required: false
  private _objNamePrefix?: string; 
  public get objNamePrefix() {
    return this.getStringAttribute('obj_name_prefix');
  }
  public set objNamePrefix(value: string) {
    this._objNamePrefix = value;
  }
  public resetObjNamePrefix() {
    this._objNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objNamePrefixInput() {
    return this._objNamePrefix;
  }

  // prefer_static_routes - computed: false, optional: true, required: false
  private _preferStaticRoutes?: string; 
  public get preferStaticRoutes() {
    return this.getStringAttribute('prefer_static_routes');
  }
  public set preferStaticRoutes(value: string) {
    this._preferStaticRoutes = value;
  }
  public resetPreferStaticRoutes() {
    this._preferStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferStaticRoutesInput() {
    return this._preferStaticRoutes;
  }

  // resolve_fqdn_to_ipv6 - computed: false, optional: true, required: false
  private _resolveFqdnToIpv6?: string; 
  public get resolveFqdnToIpv6() {
    return this.getStringAttribute('resolve_fqdn_to_ipv6');
  }
  public set resolveFqdnToIpv6(value: string) {
    this._resolveFqdnToIpv6 = value;
  }
  public resetResolveFqdnToIpv6() {
    this._resolveFqdnToIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveFqdnToIpv6Input() {
    return this._resolveFqdnToIpv6;
  }

  // se_group_template_ref - computed: true, optional: true, required: false
  private _seGroupTemplateRef?: string; 
  public get seGroupTemplateRef() {
    return this.getStringAttribute('se_group_template_ref');
  }
  public set seGroupTemplateRef(value: string) {
    this._seGroupTemplateRef = value;
  }
  public resetSeGroupTemplateRef() {
    this._seGroupTemplateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupTemplateRefInput() {
    return this._seGroupTemplateRef;
  }

  // state_based_dns_registration - computed: false, optional: true, required: false
  private _stateBasedDnsRegistration?: string; 
  public get stateBasedDnsRegistration() {
    return this.getStringAttribute('state_based_dns_registration');
  }
  public set stateBasedDnsRegistration(value: string) {
    this._stateBasedDnsRegistration = value;
  }
  public resetStateBasedDnsRegistration() {
    this._stateBasedDnsRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateBasedDnsRegistrationInput() {
    return this._stateBasedDnsRegistration;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vmc_deployment - computed: false, optional: true, required: false
  private _vmcDeployment?: string; 
  public get vmcDeployment() {
    return this.getStringAttribute('vmc_deployment');
  }
  public set vmcDeployment(value: string) {
    this._vmcDeployment = value;
  }
  public resetVmcDeployment() {
    this._vmcDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmcDeploymentInput() {
    return this._vmcDeployment;
  }

  // vtype - computed: false, optional: false, required: true
  private _vtype?: string; 
  public get vtype() {
    return this.getStringAttribute('vtype');
  }
  public set vtype(value: string) {
    this._vtype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vtypeInput() {
    return this._vtype;
  }

  // aws_configuration - computed: false, optional: true, required: false
  private _awsConfiguration = new CloudAwsConfigurationList(this, "aws_configuration", true);
  public get awsConfiguration() {
    return this._awsConfiguration;
  }
  public putAwsConfiguration(value: CloudAwsConfiguration[] | cdktf.IResolvable) {
    this._awsConfiguration.internalValue = value;
  }
  public resetAwsConfiguration() {
    this._awsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsConfigurationInput() {
    return this._awsConfiguration.internalValue;
  }

  // azure_configuration - computed: false, optional: true, required: false
  private _azureConfiguration = new CloudAzureConfigurationList(this, "azure_configuration", true);
  public get azureConfiguration() {
    return this._azureConfiguration;
  }
  public putAzureConfiguration(value: CloudAzureConfiguration[] | cdktf.IResolvable) {
    this._azureConfiguration.internalValue = value;
  }
  public resetAzureConfiguration() {
    this._azureConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureConfigurationInput() {
    return this._azureConfiguration.internalValue;
  }

  // cloudstack_configuration - computed: false, optional: true, required: false
  private _cloudstackConfiguration = new CloudCloudstackConfigurationList(this, "cloudstack_configuration", true);
  public get cloudstackConfiguration() {
    return this._cloudstackConfiguration;
  }
  public putCloudstackConfiguration(value: CloudCloudstackConfiguration[] | cdktf.IResolvable) {
    this._cloudstackConfiguration.internalValue = value;
  }
  public resetCloudstackConfiguration() {
    this._cloudstackConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudstackConfigurationInput() {
    return this._cloudstackConfiguration.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new CloudConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: CloudConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags = new CloudCustomTagsList(this, "custom_tags", false);
  public get customTags() {
    return this._customTags;
  }
  public putCustomTags(value: CloudCustomTags[] | cdktf.IResolvable) {
    this._customTags.internalValue = value;
  }
  public resetCustomTags() {
    this._customTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags.internalValue;
  }

  // dns_resolvers - computed: false, optional: true, required: false
  private _dnsResolvers = new CloudDnsResolversList(this, "dns_resolvers", false);
  public get dnsResolvers() {
    return this._dnsResolvers;
  }
  public putDnsResolvers(value: CloudDnsResolvers[] | cdktf.IResolvable) {
    this._dnsResolvers.internalValue = value;
  }
  public resetDnsResolvers() {
    this._dnsResolvers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolversInput() {
    return this._dnsResolvers.internalValue;
  }

  // docker_configuration - computed: false, optional: true, required: false
  private _dockerConfiguration = new CloudDockerConfigurationList(this, "docker_configuration", true);
  public get dockerConfiguration() {
    return this._dockerConfiguration;
  }
  public putDockerConfiguration(value: CloudDockerConfiguration[] | cdktf.IResolvable) {
    this._dockerConfiguration.internalValue = value;
  }
  public resetDockerConfiguration() {
    this._dockerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerConfigurationInput() {
    return this._dockerConfiguration.internalValue;
  }

  // gcp_configuration - computed: false, optional: true, required: false
  private _gcpConfiguration = new CloudGcpConfigurationList(this, "gcp_configuration", true);
  public get gcpConfiguration() {
    return this._gcpConfiguration;
  }
  public putGcpConfiguration(value: CloudGcpConfiguration[] | cdktf.IResolvable) {
    this._gcpConfiguration.internalValue = value;
  }
  public resetGcpConfiguration() {
    this._gcpConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpConfigurationInput() {
    return this._gcpConfiguration.internalValue;
  }

  // linuxserver_configuration - computed: false, optional: true, required: false
  private _linuxserverConfiguration = new CloudLinuxserverConfigurationList(this, "linuxserver_configuration", true);
  public get linuxserverConfiguration() {
    return this._linuxserverConfiguration;
  }
  public putLinuxserverConfiguration(value: CloudLinuxserverConfiguration[] | cdktf.IResolvable) {
    this._linuxserverConfiguration.internalValue = value;
  }
  public resetLinuxserverConfiguration() {
    this._linuxserverConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxserverConfigurationInput() {
    return this._linuxserverConfiguration.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new CloudMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: CloudMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // nsxt_configuration - computed: false, optional: true, required: false
  private _nsxtConfiguration = new CloudNsxtConfigurationList(this, "nsxt_configuration", true);
  public get nsxtConfiguration() {
    return this._nsxtConfiguration;
  }
  public putNsxtConfiguration(value: CloudNsxtConfiguration[] | cdktf.IResolvable) {
    this._nsxtConfiguration.internalValue = value;
  }
  public resetNsxtConfiguration() {
    this._nsxtConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtConfigurationInput() {
    return this._nsxtConfiguration.internalValue;
  }

  // ntp_configuration - computed: false, optional: true, required: false
  private _ntpConfiguration = new CloudNtpConfigurationList(this, "ntp_configuration", true);
  public get ntpConfiguration() {
    return this._ntpConfiguration;
  }
  public putNtpConfiguration(value: CloudNtpConfiguration[] | cdktf.IResolvable) {
    this._ntpConfiguration.internalValue = value;
  }
  public resetNtpConfiguration() {
    this._ntpConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpConfigurationInput() {
    return this._ntpConfiguration.internalValue;
  }

  // proxy_configuration - computed: false, optional: true, required: false
  private _proxyConfiguration = new CloudProxyConfigurationList(this, "proxy_configuration", true);
  public get proxyConfiguration() {
    return this._proxyConfiguration;
  }
  public putProxyConfiguration(value: CloudProxyConfiguration[] | cdktf.IResolvable) {
    this._proxyConfiguration.internalValue = value;
  }
  public resetProxyConfiguration() {
    this._proxyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigurationInput() {
    return this._proxyConfiguration.internalValue;
  }

  // rancher_configuration - computed: false, optional: true, required: false
  private _rancherConfiguration = new CloudRancherConfigurationList(this, "rancher_configuration", true);
  public get rancherConfiguration() {
    return this._rancherConfiguration;
  }
  public putRancherConfiguration(value: CloudRancherConfiguration[] | cdktf.IResolvable) {
    this._rancherConfiguration.internalValue = value;
  }
  public resetRancherConfiguration() {
    this._rancherConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rancherConfigurationInput() {
    return this._rancherConfiguration.internalValue;
  }

  // vca_configuration - computed: false, optional: true, required: false
  private _vcaConfiguration = new CloudVcaConfigurationList(this, "vca_configuration", true);
  public get vcaConfiguration() {
    return this._vcaConfiguration;
  }
  public putVcaConfiguration(value: CloudVcaConfiguration[] | cdktf.IResolvable) {
    this._vcaConfiguration.internalValue = value;
  }
  public resetVcaConfiguration() {
    this._vcaConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcaConfigurationInput() {
    return this._vcaConfiguration.internalValue;
  }

  // vcenter_configuration - computed: false, optional: true, required: false
  private _vcenterConfiguration = new CloudVcenterConfigurationList(this, "vcenter_configuration", true);
  public get vcenterConfiguration() {
    return this._vcenterConfiguration;
  }
  public putVcenterConfiguration(value: CloudVcenterConfiguration[] | cdktf.IResolvable) {
    this._vcenterConfiguration.internalValue = value;
  }
  public resetVcenterConfiguration() {
    this._vcenterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterConfigurationInput() {
    return this._vcenterConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autoscale_polling_interval: cdktf.stringToTerraform(this._autoscalePollingInterval),
      dhcp_enabled: cdktf.stringToTerraform(this._dhcpEnabled),
      dns_provider_ref: cdktf.stringToTerraform(this._dnsProviderRef),
      dns_resolution_on_se: cdktf.stringToTerraform(this._dnsResolutionOnSe),
      east_west_dns_provider_ref: cdktf.stringToTerraform(this._eastWestDnsProviderRef),
      east_west_ipam_provider_ref: cdktf.stringToTerraform(this._eastWestIpamProviderRef),
      enable_vip_on_all_interfaces: cdktf.stringToTerraform(this._enableVipOnAllInterfaces),
      enable_vip_static_routes: cdktf.stringToTerraform(this._enableVipStaticRoutes),
      id: cdktf.stringToTerraform(this._id),
      ip6_autocfg_enabled: cdktf.stringToTerraform(this._ip6AutocfgEnabled),
      ipam_provider_ref: cdktf.stringToTerraform(this._ipamProviderRef),
      license_tier: cdktf.stringToTerraform(this._licenseTier),
      license_type: cdktf.stringToTerraform(this._licenseType),
      maintenance_mode: cdktf.stringToTerraform(this._maintenanceMode),
      metrics_polling_interval: cdktf.stringToTerraform(this._metricsPollingInterval),
      mgmt_ip_v4_enabled: cdktf.stringToTerraform(this._mgmtIpV4Enabled),
      mgmt_ip_v6_enabled: cdktf.stringToTerraform(this._mgmtIpV6Enabled),
      mtu: cdktf.stringToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      obj_name_prefix: cdktf.stringToTerraform(this._objNamePrefix),
      prefer_static_routes: cdktf.stringToTerraform(this._preferStaticRoutes),
      resolve_fqdn_to_ipv6: cdktf.stringToTerraform(this._resolveFqdnToIpv6),
      se_group_template_ref: cdktf.stringToTerraform(this._seGroupTemplateRef),
      state_based_dns_registration: cdktf.stringToTerraform(this._stateBasedDnsRegistration),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      vmc_deployment: cdktf.stringToTerraform(this._vmcDeployment),
      vtype: cdktf.stringToTerraform(this._vtype),
      aws_configuration: cdktf.listMapper(cloudAwsConfigurationToTerraform, true)(this._awsConfiguration.internalValue),
      azure_configuration: cdktf.listMapper(cloudAzureConfigurationToTerraform, true)(this._azureConfiguration.internalValue),
      cloudstack_configuration: cdktf.listMapper(cloudCloudstackConfigurationToTerraform, true)(this._cloudstackConfiguration.internalValue),
      configpb_attributes: cdktf.listMapper(cloudConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      custom_tags: cdktf.listMapper(cloudCustomTagsToTerraform, true)(this._customTags.internalValue),
      dns_resolvers: cdktf.listMapper(cloudDnsResolversToTerraform, true)(this._dnsResolvers.internalValue),
      docker_configuration: cdktf.listMapper(cloudDockerConfigurationToTerraform, true)(this._dockerConfiguration.internalValue),
      gcp_configuration: cdktf.listMapper(cloudGcpConfigurationToTerraform, true)(this._gcpConfiguration.internalValue),
      linuxserver_configuration: cdktf.listMapper(cloudLinuxserverConfigurationToTerraform, true)(this._linuxserverConfiguration.internalValue),
      markers: cdktf.listMapper(cloudMarkersToTerraform, true)(this._markers.internalValue),
      nsxt_configuration: cdktf.listMapper(cloudNsxtConfigurationToTerraform, true)(this._nsxtConfiguration.internalValue),
      ntp_configuration: cdktf.listMapper(cloudNtpConfigurationToTerraform, true)(this._ntpConfiguration.internalValue),
      proxy_configuration: cdktf.listMapper(cloudProxyConfigurationToTerraform, true)(this._proxyConfiguration.internalValue),
      rancher_configuration: cdktf.listMapper(cloudRancherConfigurationToTerraform, true)(this._rancherConfiguration.internalValue),
      vca_configuration: cdktf.listMapper(cloudVcaConfigurationToTerraform, true)(this._vcaConfiguration.internalValue),
      vcenter_configuration: cdktf.listMapper(cloudVcenterConfigurationToTerraform, true)(this._vcenterConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autoscale_polling_interval: {
        value: cdktf.stringToHclTerraform(this._autoscalePollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_enabled: {
        value: cdktf.stringToHclTerraform(this._dhcpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_provider_ref: {
        value: cdktf.stringToHclTerraform(this._dnsProviderRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_resolution_on_se: {
        value: cdktf.stringToHclTerraform(this._dnsResolutionOnSe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      east_west_dns_provider_ref: {
        value: cdktf.stringToHclTerraform(this._eastWestDnsProviderRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      east_west_ipam_provider_ref: {
        value: cdktf.stringToHclTerraform(this._eastWestIpamProviderRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_vip_on_all_interfaces: {
        value: cdktf.stringToHclTerraform(this._enableVipOnAllInterfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_vip_static_routes: {
        value: cdktf.stringToHclTerraform(this._enableVipStaticRoutes),
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
      ip6_autocfg_enabled: {
        value: cdktf.stringToHclTerraform(this._ip6AutocfgEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_provider_ref: {
        value: cdktf.stringToHclTerraform(this._ipamProviderRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_tier: {
        value: cdktf.stringToHclTerraform(this._licenseTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_mode: {
        value: cdktf.stringToHclTerraform(this._maintenanceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics_polling_interval: {
        value: cdktf.stringToHclTerraform(this._metricsPollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_ip_v4_enabled: {
        value: cdktf.stringToHclTerraform(this._mgmtIpV4Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_ip_v6_enabled: {
        value: cdktf.stringToHclTerraform(this._mgmtIpV6Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.stringToHclTerraform(this._mtu),
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
      obj_name_prefix: {
        value: cdktf.stringToHclTerraform(this._objNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefer_static_routes: {
        value: cdktf.stringToHclTerraform(this._preferStaticRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_fqdn_to_ipv6: {
        value: cdktf.stringToHclTerraform(this._resolveFqdnToIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_group_template_ref: {
        value: cdktf.stringToHclTerraform(this._seGroupTemplateRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_based_dns_registration: {
        value: cdktf.stringToHclTerraform(this._stateBasedDnsRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmc_deployment: {
        value: cdktf.stringToHclTerraform(this._vmcDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vtype: {
        value: cdktf.stringToHclTerraform(this._vtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_configuration: {
        value: cdktf.listMapperHcl(cloudAwsConfigurationToHclTerraform, true)(this._awsConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudAwsConfigurationList",
      },
      azure_configuration: {
        value: cdktf.listMapperHcl(cloudAzureConfigurationToHclTerraform, true)(this._azureConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudAzureConfigurationList",
      },
      cloudstack_configuration: {
        value: cdktf.listMapperHcl(cloudCloudstackConfigurationToHclTerraform, true)(this._cloudstackConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudCloudstackConfigurationList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(cloudConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudConfigpbAttributesList",
      },
      custom_tags: {
        value: cdktf.listMapperHcl(cloudCustomTagsToHclTerraform, true)(this._customTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudCustomTagsList",
      },
      dns_resolvers: {
        value: cdktf.listMapperHcl(cloudDnsResolversToHclTerraform, true)(this._dnsResolvers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudDnsResolversList",
      },
      docker_configuration: {
        value: cdktf.listMapperHcl(cloudDockerConfigurationToHclTerraform, true)(this._dockerConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudDockerConfigurationList",
      },
      gcp_configuration: {
        value: cdktf.listMapperHcl(cloudGcpConfigurationToHclTerraform, true)(this._gcpConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudGcpConfigurationList",
      },
      linuxserver_configuration: {
        value: cdktf.listMapperHcl(cloudLinuxserverConfigurationToHclTerraform, true)(this._linuxserverConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudLinuxserverConfigurationList",
      },
      markers: {
        value: cdktf.listMapperHcl(cloudMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudMarkersList",
      },
      nsxt_configuration: {
        value: cdktf.listMapperHcl(cloudNsxtConfigurationToHclTerraform, true)(this._nsxtConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNsxtConfigurationList",
      },
      ntp_configuration: {
        value: cdktf.listMapperHcl(cloudNtpConfigurationToHclTerraform, true)(this._ntpConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudNtpConfigurationList",
      },
      proxy_configuration: {
        value: cdktf.listMapperHcl(cloudProxyConfigurationToHclTerraform, true)(this._proxyConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudProxyConfigurationList",
      },
      rancher_configuration: {
        value: cdktf.listMapperHcl(cloudRancherConfigurationToHclTerraform, true)(this._rancherConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudRancherConfigurationList",
      },
      vca_configuration: {
        value: cdktf.listMapperHcl(cloudVcaConfigurationToHclTerraform, true)(this._vcaConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudVcaConfigurationList",
      },
      vcenter_configuration: {
        value: cdktf.listMapperHcl(cloudVcenterConfigurationToHclTerraform, true)(this._vcenterConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudVcenterConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
