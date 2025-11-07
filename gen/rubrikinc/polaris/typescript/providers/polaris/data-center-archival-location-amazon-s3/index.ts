// https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCenterArchivalLocationAmazonS3Config extends cdktf.TerraformMetaArguments {
  /**
  * AWS bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#bucket_name DataCenterArchivalLocationAmazonS3#bucket_name}
  */
  readonly bucketName: string;
  /**
  * RSC data center cloud account ID (UUID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#cloud_account_id DataCenterArchivalLocationAmazonS3#cloud_account_id}
  */
  readonly cloudAccountId: string;
  /**
  * Rubrik cluster ID (UUID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#cluster_id DataCenterArchivalLocationAmazonS3#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Encryption password. Password encryption is available only for immutable archival locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#encryption_password DataCenterArchivalLocationAmazonS3#encryption_password}
  */
  readonly encryptionPassword?: string;
  /**
  * AWS KMS master key ID. Cannot be used with immutable archival locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#kms_master_key DataCenterArchivalLocationAmazonS3#kms_master_key}
  */
  readonly kmsMasterKey?: string;
  /**
  * Data center archival location name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#name DataCenterArchivalLocationAmazonS3#name}
  */
  readonly name: string;
  /**
  * AWS region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#region DataCenterArchivalLocationAmazonS3#region}
  */
  readonly region: string;
  /**
  * AWS bucket retrieval tier. Determines the speed and cost of retrieving data from the Glacier and Glacier Flexible Retrieval storage classes. Possible values are `BULK_TIER`, `EXPEDITED_TIER` and `STANDARD_TIER`. Default value is `STANDARD_TIER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#retrieval_tier DataCenterArchivalLocationAmazonS3#retrieval_tier}
  */
  readonly retrievalTier?: string;
  /**
  * PEM encoded private RSA key. Cannot be used with immutable archival locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#rsa_key DataCenterArchivalLocationAmazonS3#rsa_key}
  */
  readonly rsaKey?: string;
  /**
  * AWS bucket storage class. Possible values are `STANDARD`, `STANDARD_IA` and `ONEZONE_IA`. Default value is `STANDARD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#storage_class DataCenterArchivalLocationAmazonS3#storage_class}
  */
  readonly storageClass?: string;
  /**
  * archival_proxy_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#archival_proxy_settings DataCenterArchivalLocationAmazonS3#archival_proxy_settings}
  */
  readonly archivalProxySettings?: DataCenterArchivalLocationAmazonS3ArchivalProxySettings;
  /**
  * cloud_compute_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#cloud_compute_settings DataCenterArchivalLocationAmazonS3#cloud_compute_settings}
  */
  readonly cloudComputeSettings?: DataCenterArchivalLocationAmazonS3CloudComputeSettings;
  /**
  * compute_proxy_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#compute_proxy_settings DataCenterArchivalLocationAmazonS3#compute_proxy_settings}
  */
  readonly computeProxySettings?: DataCenterArchivalLocationAmazonS3ComputeProxySettings;
  /**
  * endpoint_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#endpoint_settings DataCenterArchivalLocationAmazonS3#endpoint_settings}
  */
  readonly endpointSettings?: DataCenterArchivalLocationAmazonS3EndpointSettings;
  /**
  * immutability_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#immutability_settings DataCenterArchivalLocationAmazonS3#immutability_settings}
  */
  readonly immutabilitySettings?: DataCenterArchivalLocationAmazonS3ImmutabilitySettings;
}
export interface DataCenterArchivalLocationAmazonS3ArchivalProxySettings {
  /**
  * When true, the system proxy will not be used to route the archival requests and data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#bypass_proxy DataCenterArchivalLocationAmazonS3#bypass_proxy}
  */
  readonly bypassProxy?: boolean | cdktf.IResolvable;
  /**
  * Proxy password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#password DataCenterArchivalLocationAmazonS3#password}
  */
  readonly password?: string;
  /**
  * Proxy port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#port_number DataCenterArchivalLocationAmazonS3#port_number}
  */
  readonly portNumber?: number;
  /**
  * Proxy protocol. Possible values are `HTTP`, `HTTPS` and `SOCKS5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#protocol DataCenterArchivalLocationAmazonS3#protocol}
  */
  readonly protocol?: string;
  /**
  * Proxy server IP address or FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#proxy_server DataCenterArchivalLocationAmazonS3#proxy_server}
  */
  readonly proxyServer?: string;
  /**
  * Proxy username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#username DataCenterArchivalLocationAmazonS3#username}
  */
  readonly username?: string;
}

export function dataCenterArchivalLocationAmazonS3ArchivalProxySettingsToTerraform(struct?: DataCenterArchivalLocationAmazonS3ArchivalProxySettingsOutputReference | DataCenterArchivalLocationAmazonS3ArchivalProxySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_proxy: cdktf.booleanToTerraform(struct!.bypassProxy),
    password: cdktf.stringToTerraform(struct!.password),
    port_number: cdktf.numberToTerraform(struct!.portNumber),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    proxy_server: cdktf.stringToTerraform(struct!.proxyServer),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataCenterArchivalLocationAmazonS3ArchivalProxySettingsToHclTerraform(struct?: DataCenterArchivalLocationAmazonS3ArchivalProxySettingsOutputReference | DataCenterArchivalLocationAmazonS3ArchivalProxySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.bypassProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_server: {
      value: cdktf.stringToHclTerraform(struct!.proxyServer),
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

export class DataCenterArchivalLocationAmazonS3ArchivalProxySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCenterArchivalLocationAmazonS3ArchivalProxySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassProxy = this._bypassProxy;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._proxyServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyServer = this._proxyServer;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCenterArchivalLocationAmazonS3ArchivalProxySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypassProxy = undefined;
      this._password = undefined;
      this._portNumber = undefined;
      this._protocol = undefined;
      this._proxyServer = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypassProxy = value.bypassProxy;
      this._password = value.password;
      this._portNumber = value.portNumber;
      this._protocol = value.protocol;
      this._proxyServer = value.proxyServer;
      this._username = value.username;
    }
  }

  // bypass_proxy - computed: false, optional: true, required: false
  private _bypassProxy?: boolean | cdktf.IResolvable; 
  public get bypassProxy() {
    return this.getBooleanAttribute('bypass_proxy');
  }
  public set bypassProxy(value: boolean | cdktf.IResolvable) {
    this._bypassProxy = value;
  }
  public resetBypassProxy() {
    this._bypassProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassProxyInput() {
    return this._bypassProxy;
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

  // port_number - computed: false, optional: true, required: false
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  public resetPortNumber() {
    this._portNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // proxy_server - computed: false, optional: true, required: false
  private _proxyServer?: string; 
  public get proxyServer() {
    return this.getStringAttribute('proxy_server');
  }
  public set proxyServer(value: string) {
    this._proxyServer = value;
  }
  public resetProxyServer() {
    this._proxyServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyServerInput() {
    return this._proxyServer;
  }

  // username - computed: false, optional: true, required: false
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
export interface DataCenterArchivalLocationAmazonS3CloudComputeSettings {
  /**
  * When true, archival consolidation is enabled. Archival consolidation frees up storage. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#archival_consolidation DataCenterArchivalLocationAmazonS3#archival_consolidation}
  */
  readonly archivalConsolidation?: boolean | cdktf.IResolvable;
  /**
  * AWS security group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#security_group_id DataCenterArchivalLocationAmazonS3#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * AWS subnet ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#subnet_id DataCenterArchivalLocationAmazonS3#subnet_id}
  */
  readonly subnetId: string;
  /**
  * AWS VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#vpc_id DataCenterArchivalLocationAmazonS3#vpc_id}
  */
  readonly vpcId: string;
}

export function dataCenterArchivalLocationAmazonS3CloudComputeSettingsToTerraform(struct?: DataCenterArchivalLocationAmazonS3CloudComputeSettingsOutputReference | DataCenterArchivalLocationAmazonS3CloudComputeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archival_consolidation: cdktf.booleanToTerraform(struct!.archivalConsolidation),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dataCenterArchivalLocationAmazonS3CloudComputeSettingsToHclTerraform(struct?: DataCenterArchivalLocationAmazonS3CloudComputeSettingsOutputReference | DataCenterArchivalLocationAmazonS3CloudComputeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archival_consolidation: {
      value: cdktf.booleanToHclTerraform(struct!.archivalConsolidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCenterArchivalLocationAmazonS3CloudComputeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCenterArchivalLocationAmazonS3CloudComputeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archivalConsolidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.archivalConsolidation = this._archivalConsolidation;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCenterArchivalLocationAmazonS3CloudComputeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archivalConsolidation = undefined;
      this._securityGroupId = undefined;
      this._subnetId = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archivalConsolidation = value.archivalConsolidation;
      this._securityGroupId = value.securityGroupId;
      this._subnetId = value.subnetId;
      this._vpcId = value.vpcId;
    }
  }

  // archival_consolidation - computed: false, optional: true, required: false
  private _archivalConsolidation?: boolean | cdktf.IResolvable; 
  public get archivalConsolidation() {
    return this.getBooleanAttribute('archival_consolidation');
  }
  public set archivalConsolidation(value: boolean | cdktf.IResolvable) {
    this._archivalConsolidation = value;
  }
  public resetArchivalConsolidation() {
    this._archivalConsolidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivalConsolidationInput() {
    return this._archivalConsolidation;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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
}
export interface DataCenterArchivalLocationAmazonS3ComputeProxySettings {
  /**
  * Proxy password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#password DataCenterArchivalLocationAmazonS3#password}
  */
  readonly password?: string;
  /**
  * Proxy port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#port_number DataCenterArchivalLocationAmazonS3#port_number}
  */
  readonly portNumber: number;
  /**
  * Proxy protocol. Possible values are `HTTP`, `HTTPS` and `SOCKS5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#protocol DataCenterArchivalLocationAmazonS3#protocol}
  */
  readonly protocol: string;
  /**
  * Proxy server IP address or FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#proxy_server DataCenterArchivalLocationAmazonS3#proxy_server}
  */
  readonly proxyServer: string;
  /**
  * Proxy username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#username DataCenterArchivalLocationAmazonS3#username}
  */
  readonly username?: string;
}

export function dataCenterArchivalLocationAmazonS3ComputeProxySettingsToTerraform(struct?: DataCenterArchivalLocationAmazonS3ComputeProxySettingsOutputReference | DataCenterArchivalLocationAmazonS3ComputeProxySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    port_number: cdktf.numberToTerraform(struct!.portNumber),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    proxy_server: cdktf.stringToTerraform(struct!.proxyServer),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataCenterArchivalLocationAmazonS3ComputeProxySettingsToHclTerraform(struct?: DataCenterArchivalLocationAmazonS3ComputeProxySettingsOutputReference | DataCenterArchivalLocationAmazonS3ComputeProxySettings): any {
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
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_server: {
      value: cdktf.stringToHclTerraform(struct!.proxyServer),
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

export class DataCenterArchivalLocationAmazonS3ComputeProxySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCenterArchivalLocationAmazonS3ComputeProxySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._proxyServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyServer = this._proxyServer;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCenterArchivalLocationAmazonS3ComputeProxySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._portNumber = undefined;
      this._protocol = undefined;
      this._proxyServer = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._portNumber = value.portNumber;
      this._protocol = value.protocol;
      this._proxyServer = value.proxyServer;
      this._username = value.username;
    }
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

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // proxy_server - computed: false, optional: false, required: true
  private _proxyServer?: string; 
  public get proxyServer() {
    return this.getStringAttribute('proxy_server');
  }
  public set proxyServer(value: string) {
    this._proxyServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyServerInput() {
    return this._proxyServer;
  }

  // username - computed: false, optional: true, required: false
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
export interface DataCenterArchivalLocationAmazonS3EndpointSettings {
  /**
  * AWS KMS endpoint. A KMS endpoint can only be specified when a KMS key is used for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#kms_endpoint DataCenterArchivalLocationAmazonS3#kms_endpoint}
  */
  readonly kmsEndpoint?: string;
  /**
  * AWS S3 endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#s3_endpoint DataCenterArchivalLocationAmazonS3#s3_endpoint}
  */
  readonly s3Endpoint?: string;
}

export function dataCenterArchivalLocationAmazonS3EndpointSettingsToTerraform(struct?: DataCenterArchivalLocationAmazonS3EndpointSettingsOutputReference | DataCenterArchivalLocationAmazonS3EndpointSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_endpoint: cdktf.stringToTerraform(struct!.kmsEndpoint),
    s3_endpoint: cdktf.stringToTerraform(struct!.s3Endpoint),
  }
}


export function dataCenterArchivalLocationAmazonS3EndpointSettingsToHclTerraform(struct?: DataCenterArchivalLocationAmazonS3EndpointSettingsOutputReference | DataCenterArchivalLocationAmazonS3EndpointSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.kmsEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.s3Endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCenterArchivalLocationAmazonS3EndpointSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCenterArchivalLocationAmazonS3EndpointSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsEndpoint = this._kmsEndpoint;
    }
    if (this._s3Endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Endpoint = this._s3Endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCenterArchivalLocationAmazonS3EndpointSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsEndpoint = undefined;
      this._s3Endpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsEndpoint = value.kmsEndpoint;
      this._s3Endpoint = value.s3Endpoint;
    }
  }

  // kms_endpoint - computed: false, optional: true, required: false
  private _kmsEndpoint?: string; 
  public get kmsEndpoint() {
    return this.getStringAttribute('kms_endpoint');
  }
  public set kmsEndpoint(value: string) {
    this._kmsEndpoint = value;
  }
  public resetKmsEndpoint() {
    this._kmsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEndpointInput() {
    return this._kmsEndpoint;
  }

  // s3_endpoint - computed: false, optional: true, required: false
  private _s3Endpoint?: string; 
  public get s3Endpoint() {
    return this.getStringAttribute('s3_endpoint');
  }
  public set s3Endpoint(value: string) {
    this._s3Endpoint = value;
  }
  public resetS3Endpoint() {
    this._s3Endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EndpointInput() {
    return this._s3Endpoint;
  }
}
export interface DataCenterArchivalLocationAmazonS3ImmutabilitySettings {
  /**
  * Immutability lock period (days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#lock_period DataCenterArchivalLocationAmazonS3#lock_period}
  */
  readonly lockPeriod: number;
}

export function dataCenterArchivalLocationAmazonS3ImmutabilitySettingsToTerraform(struct?: DataCenterArchivalLocationAmazonS3ImmutabilitySettingsOutputReference | DataCenterArchivalLocationAmazonS3ImmutabilitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lock_period: cdktf.numberToTerraform(struct!.lockPeriod),
  }
}


export function dataCenterArchivalLocationAmazonS3ImmutabilitySettingsToHclTerraform(struct?: DataCenterArchivalLocationAmazonS3ImmutabilitySettingsOutputReference | DataCenterArchivalLocationAmazonS3ImmutabilitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lock_period: {
      value: cdktf.numberToHclTerraform(struct!.lockPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCenterArchivalLocationAmazonS3ImmutabilitySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCenterArchivalLocationAmazonS3ImmutabilitySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockPeriod = this._lockPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCenterArchivalLocationAmazonS3ImmutabilitySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lockPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lockPeriod = value.lockPeriod;
    }
  }

  // lock_period - computed: false, optional: false, required: true
  private _lockPeriod?: number; 
  public get lockPeriod() {
    return this.getNumberAttribute('lock_period');
  }
  public set lockPeriod(value: number) {
    this._lockPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lockPeriodInput() {
    return this._lockPeriod;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3 polaris_data_center_archival_location_amazon_s3}
*/
export class DataCenterArchivalLocationAmazonS3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_data_center_archival_location_amazon_s3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCenterArchivalLocationAmazonS3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCenterArchivalLocationAmazonS3 to import
  * @param importFromId The id of the existing DataCenterArchivalLocationAmazonS3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCenterArchivalLocationAmazonS3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_data_center_archival_location_amazon_s3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/data_center_archival_location_amazon_s3 polaris_data_center_archival_location_amazon_s3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCenterArchivalLocationAmazonS3Config
  */
  public constructor(scope: Construct, id: string, config: DataCenterArchivalLocationAmazonS3Config) {
    super(scope, id, {
      terraformResourceType: 'polaris_data_center_archival_location_amazon_s3',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketName = config.bucketName;
    this._cloudAccountId = config.cloudAccountId;
    this._clusterId = config.clusterId;
    this._encryptionPassword = config.encryptionPassword;
    this._kmsMasterKey = config.kmsMasterKey;
    this._name = config.name;
    this._region = config.region;
    this._retrievalTier = config.retrievalTier;
    this._rsaKey = config.rsaKey;
    this._storageClass = config.storageClass;
    this._archivalProxySettings.internalValue = config.archivalProxySettings;
    this._cloudComputeSettings.internalValue = config.cloudComputeSettings;
    this._computeProxySettings.internalValue = config.computeProxySettings;
    this._endpointSettings.internalValue = config.endpointSettings;
    this._immutabilitySettings.internalValue = config.immutabilitySettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // cloud_account_id - computed: false, optional: false, required: true
  private _cloudAccountId?: string; 
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }
  public set cloudAccountId(value: string) {
    this._cloudAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountIdInput() {
    return this._cloudAccountId;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // encryption_password - computed: false, optional: true, required: false
  private _encryptionPassword?: string; 
  public get encryptionPassword() {
    return this.getStringAttribute('encryption_password');
  }
  public set encryptionPassword(value: string) {
    this._encryptionPassword = value;
  }
  public resetEncryptionPassword() {
    this._encryptionPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionPasswordInput() {
    return this._encryptionPassword;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_master_key - computed: false, optional: true, required: false
  private _kmsMasterKey?: string; 
  public get kmsMasterKey() {
    return this.getStringAttribute('kms_master_key');
  }
  public set kmsMasterKey(value: string) {
    this._kmsMasterKey = value;
  }
  public resetKmsMasterKey() {
    this._kmsMasterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsMasterKeyInput() {
    return this._kmsMasterKey;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // retrieval_tier - computed: false, optional: true, required: false
  private _retrievalTier?: string; 
  public get retrievalTier() {
    return this.getStringAttribute('retrieval_tier');
  }
  public set retrievalTier(value: string) {
    this._retrievalTier = value;
  }
  public resetRetrievalTier() {
    this._retrievalTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalTierInput() {
    return this._retrievalTier;
  }

  // rsa_key - computed: false, optional: true, required: false
  private _rsaKey?: string; 
  public get rsaKey() {
    return this.getStringAttribute('rsa_key');
  }
  public set rsaKey(value: string) {
    this._rsaKey = value;
  }
  public resetRsaKey() {
    this._rsaKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaKeyInput() {
    return this._rsaKey;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // sync_status - computed: true, optional: false, required: false
  public get syncStatus() {
    return this.getStringAttribute('sync_status');
  }

  // archival_proxy_settings - computed: false, optional: true, required: false
  private _archivalProxySettings = new DataCenterArchivalLocationAmazonS3ArchivalProxySettingsOutputReference(this, "archival_proxy_settings");
  public get archivalProxySettings() {
    return this._archivalProxySettings;
  }
  public putArchivalProxySettings(value: DataCenterArchivalLocationAmazonS3ArchivalProxySettings) {
    this._archivalProxySettings.internalValue = value;
  }
  public resetArchivalProxySettings() {
    this._archivalProxySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivalProxySettingsInput() {
    return this._archivalProxySettings.internalValue;
  }

  // cloud_compute_settings - computed: false, optional: true, required: false
  private _cloudComputeSettings = new DataCenterArchivalLocationAmazonS3CloudComputeSettingsOutputReference(this, "cloud_compute_settings");
  public get cloudComputeSettings() {
    return this._cloudComputeSettings;
  }
  public putCloudComputeSettings(value: DataCenterArchivalLocationAmazonS3CloudComputeSettings) {
    this._cloudComputeSettings.internalValue = value;
  }
  public resetCloudComputeSettings() {
    this._cloudComputeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudComputeSettingsInput() {
    return this._cloudComputeSettings.internalValue;
  }

  // compute_proxy_settings - computed: false, optional: true, required: false
  private _computeProxySettings = new DataCenterArchivalLocationAmazonS3ComputeProxySettingsOutputReference(this, "compute_proxy_settings");
  public get computeProxySettings() {
    return this._computeProxySettings;
  }
  public putComputeProxySettings(value: DataCenterArchivalLocationAmazonS3ComputeProxySettings) {
    this._computeProxySettings.internalValue = value;
  }
  public resetComputeProxySettings() {
    this._computeProxySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeProxySettingsInput() {
    return this._computeProxySettings.internalValue;
  }

  // endpoint_settings - computed: false, optional: true, required: false
  private _endpointSettings = new DataCenterArchivalLocationAmazonS3EndpointSettingsOutputReference(this, "endpoint_settings");
  public get endpointSettings() {
    return this._endpointSettings;
  }
  public putEndpointSettings(value: DataCenterArchivalLocationAmazonS3EndpointSettings) {
    this._endpointSettings.internalValue = value;
  }
  public resetEndpointSettings() {
    this._endpointSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSettingsInput() {
    return this._endpointSettings.internalValue;
  }

  // immutability_settings - computed: false, optional: true, required: false
  private _immutabilitySettings = new DataCenterArchivalLocationAmazonS3ImmutabilitySettingsOutputReference(this, "immutability_settings");
  public get immutabilitySettings() {
    return this._immutabilitySettings;
  }
  public putImmutabilitySettings(value: DataCenterArchivalLocationAmazonS3ImmutabilitySettings) {
    this._immutabilitySettings.internalValue = value;
  }
  public resetImmutabilitySettings() {
    this._immutabilitySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immutabilitySettingsInput() {
    return this._immutabilitySettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      cloud_account_id: cdktf.stringToTerraform(this._cloudAccountId),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      encryption_password: cdktf.stringToTerraform(this._encryptionPassword),
      kms_master_key: cdktf.stringToTerraform(this._kmsMasterKey),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      retrieval_tier: cdktf.stringToTerraform(this._retrievalTier),
      rsa_key: cdktf.stringToTerraform(this._rsaKey),
      storage_class: cdktf.stringToTerraform(this._storageClass),
      archival_proxy_settings: dataCenterArchivalLocationAmazonS3ArchivalProxySettingsToTerraform(this._archivalProxySettings.internalValue),
      cloud_compute_settings: dataCenterArchivalLocationAmazonS3CloudComputeSettingsToTerraform(this._cloudComputeSettings.internalValue),
      compute_proxy_settings: dataCenterArchivalLocationAmazonS3ComputeProxySettingsToTerraform(this._computeProxySettings.internalValue),
      endpoint_settings: dataCenterArchivalLocationAmazonS3EndpointSettingsToTerraform(this._endpointSettings.internalValue),
      immutability_settings: dataCenterArchivalLocationAmazonS3ImmutabilitySettingsToTerraform(this._immutabilitySettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_account_id: {
        value: cdktf.stringToHclTerraform(this._cloudAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_password: {
        value: cdktf.stringToHclTerraform(this._encryptionPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_master_key: {
        value: cdktf.stringToHclTerraform(this._kmsMasterKey),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retrieval_tier: {
        value: cdktf.stringToHclTerraform(this._retrievalTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsa_key: {
        value: cdktf.stringToHclTerraform(this._rsaKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_class: {
        value: cdktf.stringToHclTerraform(this._storageClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      archival_proxy_settings: {
        value: dataCenterArchivalLocationAmazonS3ArchivalProxySettingsToHclTerraform(this._archivalProxySettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCenterArchivalLocationAmazonS3ArchivalProxySettingsList",
      },
      cloud_compute_settings: {
        value: dataCenterArchivalLocationAmazonS3CloudComputeSettingsToHclTerraform(this._cloudComputeSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCenterArchivalLocationAmazonS3CloudComputeSettingsList",
      },
      compute_proxy_settings: {
        value: dataCenterArchivalLocationAmazonS3ComputeProxySettingsToHclTerraform(this._computeProxySettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCenterArchivalLocationAmazonS3ComputeProxySettingsList",
      },
      endpoint_settings: {
        value: dataCenterArchivalLocationAmazonS3EndpointSettingsToHclTerraform(this._endpointSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCenterArchivalLocationAmazonS3EndpointSettingsList",
      },
      immutability_settings: {
        value: dataCenterArchivalLocationAmazonS3ImmutabilitySettingsToHclTerraform(this._immutabilitySettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCenterArchivalLocationAmazonS3ImmutabilitySettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
