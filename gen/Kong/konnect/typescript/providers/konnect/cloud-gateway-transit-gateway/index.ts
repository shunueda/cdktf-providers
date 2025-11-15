// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudGatewayTransitGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#aws_resource_endpoint_gateway CloudGatewayTransitGateway#aws_resource_endpoint_gateway}
  */
  readonly awsResourceEndpointGateway?: CloudGatewayTransitGatewayAwsResourceEndpointGateway;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#aws_transit_gateway CloudGatewayTransitGateway#aws_transit_gateway}
  */
  readonly awsTransitGateway?: CloudGatewayTransitGatewayAwsTransitGateway;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#aws_vpc_peering_gateway CloudGatewayTransitGateway#aws_vpc_peering_gateway}
  */
  readonly awsVpcPeeringGateway?: CloudGatewayTransitGatewayAwsVpcPeeringGateway;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#azure_transit_gateway CloudGatewayTransitGateway#azure_transit_gateway}
  */
  readonly azureTransitGateway?: CloudGatewayTransitGatewayAzureTransitGateway;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#gcp_vpc_peering_transit_gateway CloudGatewayTransitGateway#gcp_vpc_peering_transit_gateway}
  */
  readonly gcpVpcPeeringTransitGateway?: CloudGatewayTransitGatewayGcpVpcPeeringTransitGateway;
  /**
  * The network to operate on. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#network_id CloudGatewayTransitGateway#network_id}
  */
  readonly networkId: string;
}
export interface CloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfig {
  /**
  * Internal domain names to proxy for DNS resolution from the listed remote DNS server IP addresses,
  * for a transit gateway.
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#domain_proxy_list CloudGatewayTransitGateway#domain_proxy_list}
  */
  readonly domainProxyList: string[];
  /**
  * Remote DNS Server IP Addresses to connect to for resolving internal DNS via a transit gateway. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#remote_dns_server_ip_addresses CloudGatewayTransitGateway#remote_dns_server_ip_addresses}
  */
  readonly remoteDnsServerIpAddresses: string[];
}

export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfigToTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_proxy_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainProxyList),
    remote_dns_server_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteDnsServerIpAddresses),
  }
}


export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_proxy_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainProxyList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remote_dns_server_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteDnsServerIpAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainProxyList !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainProxyList = this._domainProxyList;
    }
    if (this._remoteDnsServerIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDnsServerIpAddresses = this._remoteDnsServerIpAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainProxyList = undefined;
      this._remoteDnsServerIpAddresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainProxyList = value.domainProxyList;
      this._remoteDnsServerIpAddresses = value.remoteDnsServerIpAddresses;
    }
  }

  // domain_proxy_list - computed: false, optional: false, required: true
  private _domainProxyList?: string[]; 
  public get domainProxyList() {
    return this.getListAttribute('domain_proxy_list');
  }
  public set domainProxyList(value: string[]) {
    this._domainProxyList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainProxyListInput() {
    return this._domainProxyList;
  }

  // remote_dns_server_ip_addresses - computed: false, optional: false, required: true
  private _remoteDnsServerIpAddresses?: string[]; 
  public get remoteDnsServerIpAddresses() {
    return this.getListAttribute('remote_dns_server_ip_addresses');
  }
  public set remoteDnsServerIpAddresses(value: string[]) {
    this._remoteDnsServerIpAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDnsServerIpAddressesInput() {
    return this._remoteDnsServerIpAddresses;
  }
}

export class CloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfigList extends cdktf.ComplexList {
  public internalValue? : CloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfigOutputReference {
    return new CloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfig {
  /**
  * Domain Name to uniquely identify a resource configuration. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#domain_name CloudGatewayTransitGateway#domain_name}
  */
  readonly domainName: string;
  /**
  * Resource Config ID to uniquely identify a resource configuration. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#resource_config_id CloudGatewayTransitGateway#resource_config_id}
  */
  readonly resourceConfigId: string;
}

export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfigToTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    resource_config_id: cdktf.stringToTerraform(struct!.resourceConfigId),
  }
}


export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_config_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._resourceConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfigId = this._resourceConfigId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
      this._resourceConfigId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainName = value.domainName;
      this._resourceConfigId = value.resourceConfigId;
    }
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // resource_config_id - computed: false, optional: false, required: true
  private _resourceConfigId?: string; 
  public get resourceConfigId() {
    return this.getStringAttribute('resource_config_id');
  }
  public set resourceConfigId(value: string) {
    this._resourceConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigIdInput() {
    return this._resourceConfigId;
  }
}

export class CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfigList extends cdktf.ComplexList {
  public internalValue? : CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfigOutputReference {
    return new CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfig {
  /**
  * must be "aws-resource-endpoint-attachment"; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#kind CloudGatewayTransitGateway#kind}
  */
  readonly kind: string;
  /**
  * Resource Share ARN to verify request to create transit gateway attachment. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#ram_share_arn CloudGatewayTransitGateway#ram_share_arn}
  */
  readonly ramShareArn: string;
  /**
  * List of unique resource config mapping for aws resource endpoint. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#resource_config CloudGatewayTransitGateway#resource_config}
  */
  readonly resourceConfig?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfig[] | cdktf.IResolvable;
}

export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigToTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    ram_share_arn: cdktf.stringToTerraform(struct!.ramShareArn),
    resource_config: cdktf.listMapper(cloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfigToTerraform, false)(struct!.resourceConfig),
  }
}


export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ram_share_arn: {
      value: cdktf.stringToHclTerraform(struct!.ramShareArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_config: {
      value: cdktf.listMapperHcl(cloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfigToHclTerraform, false)(struct!.resourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._ramShareArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ramShareArn = this._ramShareArn;
    }
    if (this._resourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfig = this._resourceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._ramShareArn = undefined;
      this._resourceConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._ramShareArn = value.ramShareArn;
      this._resourceConfig.internalValue = value.resourceConfig;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // ram_share_arn - computed: false, optional: false, required: true
  private _ramShareArn?: string; 
  public get ramShareArn() {
    return this.getStringAttribute('ram_share_arn');
  }
  public set ramShareArn(value: string) {
    this._ramShareArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ramShareArnInput() {
    return this._ramShareArn;
  }

  // resource_config - computed: false, optional: true, required: false
  private _resourceConfig = new CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfigList(this, "resource_config", false);
  public get resourceConfig() {
    return this._resourceConfig;
  }
  public putResourceConfig(value: CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigResourceConfig[] | cdktf.IResolvable) {
    this._resourceConfig.internalValue = value;
  }
  public resetResourceConfig() {
    this._resourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigInput() {
    return this._resourceConfig.internalValue;
  }
}
export interface CloudGatewayTransitGatewayAwsResourceEndpointGateway {
  /**
  * List of mappings from remote DNS server IP address sets to proxied internal domains, for a transit gateway
  * attachment.
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#dns_config CloudGatewayTransitGateway#dns_config}
  */
  readonly dnsConfig?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfig[] | cdktf.IResolvable;
  /**
  * Human-readable name of the transit gateway. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#name CloudGatewayTransitGateway#name}
  */
  readonly name: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#transit_gateway_attachment_config CloudGatewayTransitGateway#transit_gateway_attachment_config}
  */
  readonly transitGatewayAttachmentConfig: CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfig;
}

export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayToTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_config: cdktf.listMapper(cloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfigToTerraform, false)(struct!.dnsConfig),
    name: cdktf.stringToTerraform(struct!.name),
    transit_gateway_attachment_config: cloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigToTerraform(struct!.transitGatewayAttachmentConfig),
  }
}


export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayToHclTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_config: {
      value: cdktf.listMapperHcl(cloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfigToHclTerraform, false)(struct!.dnsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfigList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_gateway_attachment_config: {
      value: cloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigToHclTerraform(struct!.transitGatewayAttachmentConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayTransitGatewayAwsResourceEndpointGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAwsResourceEndpointGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._transitGatewayAttachmentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitGatewayAttachmentConfig = this._transitGatewayAttachmentConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsResourceEndpointGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsConfig.internalValue = undefined;
      this._name = undefined;
      this._transitGatewayAttachmentConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._name = value.name;
      this._transitGatewayAttachmentConfig.internalValue = value.transitGatewayAttachmentConfig;
    }
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new CloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfigList(this, "dns_config", false);
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: CloudGatewayTransitGatewayAwsResourceEndpointGatewayDnsConfig[] | cdktf.IResolvable) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
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

  // transit_gateway_attachment_config - computed: false, optional: false, required: true
  private _transitGatewayAttachmentConfig = new CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfigOutputReference(this, "transit_gateway_attachment_config");
  public get transitGatewayAttachmentConfig() {
    return this._transitGatewayAttachmentConfig;
  }
  public putTransitGatewayAttachmentConfig(value: CloudGatewayTransitGatewayAwsResourceEndpointGatewayTransitGatewayAttachmentConfig) {
    this._transitGatewayAttachmentConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAttachmentConfigInput() {
    return this._transitGatewayAttachmentConfig.internalValue;
  }
}
export interface CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseDnsConfig {
}

export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseDnsConfigToTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseDnsConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseDnsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_proxy_list - computed: true, optional: false, required: false
  public get domainProxyList() {
    return this.getListAttribute('domain_proxy_list');
  }

  // remote_dns_server_ip_addresses - computed: true, optional: false, required: false
  public get remoteDnsServerIpAddresses() {
    return this.getListAttribute('remote_dns_server_ip_addresses');
  }
}

export class CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseDnsConfigList extends cdktf.ComplexList {

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
  public get(index: number): CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseDnsConfigOutputReference {
    return new CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseDnsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseStateMetadata {
}

export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseStateMetadataToTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseStateMetadataToHclTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseStateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseStateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseStateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // reported_status - computed: true, optional: false, required: false
  public get reportedStatus() {
    return this.getStringAttribute('reported_status');
  }
}
export interface CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfigResourceConfig {
}

export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfigResourceConfigToTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfigResourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfigResourceConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfigResourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfigResourceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfigResourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfigResourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // resource_config_id - computed: true, optional: false, required: false
  public get resourceConfigId() {
    return this.getStringAttribute('resource_config_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfigResourceConfigList extends cdktf.ComplexList {

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
  public get(index: number): CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfigResourceConfigOutputReference {
    return new CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfigResourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfig {
}

export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfigToTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // ram_share_arn - computed: true, optional: false, required: false
  public get ramShareArn() {
    return this.getStringAttribute('ram_share_arn');
  }

  // resource_config - computed: true, optional: false, required: false
  private _resourceConfig = new CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfigResourceConfigList(this, "resource_config", false);
  public get resourceConfig() {
    return this._resourceConfig;
  }
}
export interface CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponse {
}

export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseToTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseToHclTerraform(struct?: CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dns_config - computed: true, optional: false, required: false
  private _dnsConfig = new CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseDnsConfigList(this, "dns_config", false);
  public get dnsConfig() {
    return this._dnsConfig;
  }

  // entity_version - computed: true, optional: false, required: false
  public get entityVersion() {
    return this.getNumberAttribute('entity_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_metadata - computed: true, optional: false, required: false
  private _stateMetadata = new CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseStateMetadataOutputReference(this, "state_metadata");
  public get stateMetadata() {
    return this._stateMetadata;
  }

  // transit_gateway_attachment_config - computed: true, optional: false, required: false
  private _transitGatewayAttachmentConfig = new CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseTransitGatewayAttachmentConfigOutputReference(this, "transit_gateway_attachment_config");
  public get transitGatewayAttachmentConfig() {
    return this._transitGatewayAttachmentConfig;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface CloudGatewayTransitGatewayAwsTransitGatewayDnsConfig {
  /**
  * Internal domain names to proxy for DNS resolution from the listed remote DNS server IP addresses,
  * for a transit gateway.
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#domain_proxy_list CloudGatewayTransitGateway#domain_proxy_list}
  */
  readonly domainProxyList: string[];
  /**
  * Remote DNS Server IP Addresses to connect to for resolving internal DNS via a transit gateway. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#remote_dns_server_ip_addresses CloudGatewayTransitGateway#remote_dns_server_ip_addresses}
  */
  readonly remoteDnsServerIpAddresses: string[];
}

export function cloudGatewayTransitGatewayAwsTransitGatewayDnsConfigToTerraform(struct?: CloudGatewayTransitGatewayAwsTransitGatewayDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_proxy_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainProxyList),
    remote_dns_server_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteDnsServerIpAddresses),
  }
}


export function cloudGatewayTransitGatewayAwsTransitGatewayDnsConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAwsTransitGatewayDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_proxy_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainProxyList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remote_dns_server_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteDnsServerIpAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayTransitGatewayAwsTransitGatewayDnsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGatewayTransitGatewayAwsTransitGatewayDnsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainProxyList !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainProxyList = this._domainProxyList;
    }
    if (this._remoteDnsServerIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDnsServerIpAddresses = this._remoteDnsServerIpAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsTransitGatewayDnsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainProxyList = undefined;
      this._remoteDnsServerIpAddresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainProxyList = value.domainProxyList;
      this._remoteDnsServerIpAddresses = value.remoteDnsServerIpAddresses;
    }
  }

  // domain_proxy_list - computed: false, optional: false, required: true
  private _domainProxyList?: string[]; 
  public get domainProxyList() {
    return this.getListAttribute('domain_proxy_list');
  }
  public set domainProxyList(value: string[]) {
    this._domainProxyList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainProxyListInput() {
    return this._domainProxyList;
  }

  // remote_dns_server_ip_addresses - computed: false, optional: false, required: true
  private _remoteDnsServerIpAddresses?: string[]; 
  public get remoteDnsServerIpAddresses() {
    return this.getListAttribute('remote_dns_server_ip_addresses');
  }
  public set remoteDnsServerIpAddresses(value: string[]) {
    this._remoteDnsServerIpAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDnsServerIpAddressesInput() {
    return this._remoteDnsServerIpAddresses;
  }
}

export class CloudGatewayTransitGatewayAwsTransitGatewayDnsConfigList extends cdktf.ComplexList {
  public internalValue? : CloudGatewayTransitGatewayAwsTransitGatewayDnsConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudGatewayTransitGatewayAwsTransitGatewayDnsConfigOutputReference {
    return new CloudGatewayTransitGatewayAwsTransitGatewayDnsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGatewayTransitGatewayAwsTransitGatewayTransitGatewayAttachmentConfig {
  /**
  * must be "aws-transit-gateway-attachment"; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#kind CloudGatewayTransitGateway#kind}
  */
  readonly kind: string;
  /**
  * Resource Share ARN to verify request to create transit gateway attachment. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#ram_share_arn CloudGatewayTransitGateway#ram_share_arn}
  */
  readonly ramShareArn: string;
  /**
  * AWS Transit Gateway ID to create attachment to. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#transit_gateway_id CloudGatewayTransitGateway#transit_gateway_id}
  */
  readonly transitGatewayId: string;
}

export function cloudGatewayTransitGatewayAwsTransitGatewayTransitGatewayAttachmentConfigToTerraform(struct?: CloudGatewayTransitGatewayAwsTransitGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    ram_share_arn: cdktf.stringToTerraform(struct!.ramShareArn),
    transit_gateway_id: cdktf.stringToTerraform(struct!.transitGatewayId),
  }
}


export function cloudGatewayTransitGatewayAwsTransitGatewayTransitGatewayAttachmentConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAwsTransitGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ram_share_arn: {
      value: cdktf.stringToHclTerraform(struct!.ramShareArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.transitGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayTransitGatewayAwsTransitGatewayTransitGatewayAttachmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAwsTransitGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._ramShareArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ramShareArn = this._ramShareArn;
    }
    if (this._transitGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitGatewayId = this._transitGatewayId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsTransitGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._ramShareArn = undefined;
      this._transitGatewayId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._ramShareArn = value.ramShareArn;
      this._transitGatewayId = value.transitGatewayId;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // ram_share_arn - computed: false, optional: false, required: true
  private _ramShareArn?: string; 
  public get ramShareArn() {
    return this.getStringAttribute('ram_share_arn');
  }
  public set ramShareArn(value: string) {
    this._ramShareArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ramShareArnInput() {
    return this._ramShareArn;
  }

  // transit_gateway_id - computed: false, optional: false, required: true
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }
}
export interface CloudGatewayTransitGatewayAwsTransitGateway {
  /**
  * CIDR blocks for constructing a route table for the transit gateway, when attaching to the owning
  * network.
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#cidr_blocks CloudGatewayTransitGateway#cidr_blocks}
  */
  readonly cidrBlocks: string[];
  /**
  * List of mappings from remote DNS server IP address sets to proxied internal domains, for a transit gateway
  * attachment.
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#dns_config CloudGatewayTransitGateway#dns_config}
  */
  readonly dnsConfig?: CloudGatewayTransitGatewayAwsTransitGatewayDnsConfig[] | cdktf.IResolvable;
  /**
  * Human-readable name of the transit gateway. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#name CloudGatewayTransitGateway#name}
  */
  readonly name: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#transit_gateway_attachment_config CloudGatewayTransitGateway#transit_gateway_attachment_config}
  */
  readonly transitGatewayAttachmentConfig: CloudGatewayTransitGatewayAwsTransitGatewayTransitGatewayAttachmentConfig;
}

export function cloudGatewayTransitGatewayAwsTransitGatewayToTerraform(struct?: CloudGatewayTransitGatewayAwsTransitGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
    dns_config: cdktf.listMapper(cloudGatewayTransitGatewayAwsTransitGatewayDnsConfigToTerraform, false)(struct!.dnsConfig),
    name: cdktf.stringToTerraform(struct!.name),
    transit_gateway_attachment_config: cloudGatewayTransitGatewayAwsTransitGatewayTransitGatewayAttachmentConfigToTerraform(struct!.transitGatewayAttachmentConfig),
  }
}


export function cloudGatewayTransitGatewayAwsTransitGatewayToHclTerraform(struct?: CloudGatewayTransitGatewayAwsTransitGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_config: {
      value: cdktf.listMapperHcl(cloudGatewayTransitGatewayAwsTransitGatewayDnsConfigToHclTerraform, false)(struct!.dnsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGatewayTransitGatewayAwsTransitGatewayDnsConfigList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_gateway_attachment_config: {
      value: cloudGatewayTransitGatewayAwsTransitGatewayTransitGatewayAttachmentConfigToHclTerraform(struct!.transitGatewayAttachmentConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudGatewayTransitGatewayAwsTransitGatewayTransitGatewayAttachmentConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayTransitGatewayAwsTransitGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAwsTransitGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._transitGatewayAttachmentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitGatewayAttachmentConfig = this._transitGatewayAttachmentConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsTransitGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlocks = undefined;
      this._dnsConfig.internalValue = undefined;
      this._name = undefined;
      this._transitGatewayAttachmentConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlocks = value.cidrBlocks;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._name = value.name;
      this._transitGatewayAttachmentConfig.internalValue = value.transitGatewayAttachmentConfig;
    }
  }

  // cidr_blocks - computed: false, optional: false, required: true
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new CloudGatewayTransitGatewayAwsTransitGatewayDnsConfigList(this, "dns_config", false);
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: CloudGatewayTransitGatewayAwsTransitGatewayDnsConfig[] | cdktf.IResolvable) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
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

  // transit_gateway_attachment_config - computed: false, optional: false, required: true
  private _transitGatewayAttachmentConfig = new CloudGatewayTransitGatewayAwsTransitGatewayTransitGatewayAttachmentConfigOutputReference(this, "transit_gateway_attachment_config");
  public get transitGatewayAttachmentConfig() {
    return this._transitGatewayAttachmentConfig;
  }
  public putTransitGatewayAttachmentConfig(value: CloudGatewayTransitGatewayAwsTransitGatewayTransitGatewayAttachmentConfig) {
    this._transitGatewayAttachmentConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAttachmentConfigInput() {
    return this._transitGatewayAttachmentConfig.internalValue;
  }
}
export interface CloudGatewayTransitGatewayAwsTransitGatewayResponseDnsConfig {
}

export function cloudGatewayTransitGatewayAwsTransitGatewayResponseDnsConfigToTerraform(struct?: CloudGatewayTransitGatewayAwsTransitGatewayResponseDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayAwsTransitGatewayResponseDnsConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAwsTransitGatewayResponseDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayAwsTransitGatewayResponseDnsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGatewayTransitGatewayAwsTransitGatewayResponseDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsTransitGatewayResponseDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_proxy_list - computed: true, optional: false, required: false
  public get domainProxyList() {
    return this.getListAttribute('domain_proxy_list');
  }

  // remote_dns_server_ip_addresses - computed: true, optional: false, required: false
  public get remoteDnsServerIpAddresses() {
    return this.getListAttribute('remote_dns_server_ip_addresses');
  }
}

export class CloudGatewayTransitGatewayAwsTransitGatewayResponseDnsConfigList extends cdktf.ComplexList {

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
  public get(index: number): CloudGatewayTransitGatewayAwsTransitGatewayResponseDnsConfigOutputReference {
    return new CloudGatewayTransitGatewayAwsTransitGatewayResponseDnsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGatewayTransitGatewayAwsTransitGatewayResponseStateMetadata {
}

export function cloudGatewayTransitGatewayAwsTransitGatewayResponseStateMetadataToTerraform(struct?: CloudGatewayTransitGatewayAwsTransitGatewayResponseStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayAwsTransitGatewayResponseStateMetadataToHclTerraform(struct?: CloudGatewayTransitGatewayAwsTransitGatewayResponseStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayAwsTransitGatewayResponseStateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAwsTransitGatewayResponseStateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsTransitGatewayResponseStateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // reported_status - computed: true, optional: false, required: false
  public get reportedStatus() {
    return this.getStringAttribute('reported_status');
  }
}
export interface CloudGatewayTransitGatewayAwsTransitGatewayResponseTransitGatewayAttachmentConfig {
}

export function cloudGatewayTransitGatewayAwsTransitGatewayResponseTransitGatewayAttachmentConfigToTerraform(struct?: CloudGatewayTransitGatewayAwsTransitGatewayResponseTransitGatewayAttachmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayAwsTransitGatewayResponseTransitGatewayAttachmentConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAwsTransitGatewayResponseTransitGatewayAttachmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayAwsTransitGatewayResponseTransitGatewayAttachmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAwsTransitGatewayResponseTransitGatewayAttachmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsTransitGatewayResponseTransitGatewayAttachmentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // ram_share_arn - computed: true, optional: false, required: false
  public get ramShareArn() {
    return this.getStringAttribute('ram_share_arn');
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
}
export interface CloudGatewayTransitGatewayAwsTransitGatewayResponse {
}

export function cloudGatewayTransitGatewayAwsTransitGatewayResponseToTerraform(struct?: CloudGatewayTransitGatewayAwsTransitGatewayResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayAwsTransitGatewayResponseToHclTerraform(struct?: CloudGatewayTransitGatewayAwsTransitGatewayResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayAwsTransitGatewayResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAwsTransitGatewayResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsTransitGatewayResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_blocks - computed: true, optional: false, required: false
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dns_config - computed: true, optional: false, required: false
  private _dnsConfig = new CloudGatewayTransitGatewayAwsTransitGatewayResponseDnsConfigList(this, "dns_config", false);
  public get dnsConfig() {
    return this._dnsConfig;
  }

  // entity_version - computed: true, optional: false, required: false
  public get entityVersion() {
    return this.getNumberAttribute('entity_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_metadata - computed: true, optional: false, required: false
  private _stateMetadata = new CloudGatewayTransitGatewayAwsTransitGatewayResponseStateMetadataOutputReference(this, "state_metadata");
  public get stateMetadata() {
    return this._stateMetadata;
  }

  // transit_gateway_attachment_config - computed: true, optional: false, required: false
  private _transitGatewayAttachmentConfig = new CloudGatewayTransitGatewayAwsTransitGatewayResponseTransitGatewayAttachmentConfigOutputReference(this, "transit_gateway_attachment_config");
  public get transitGatewayAttachmentConfig() {
    return this._transitGatewayAttachmentConfig;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface CloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfig {
  /**
  * Internal domain names to proxy for DNS resolution from the listed remote DNS server IP addresses,
  * for a transit gateway.
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#domain_proxy_list CloudGatewayTransitGateway#domain_proxy_list}
  */
  readonly domainProxyList: string[];
  /**
  * Remote DNS Server IP Addresses to connect to for resolving internal DNS via a transit gateway. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#remote_dns_server_ip_addresses CloudGatewayTransitGateway#remote_dns_server_ip_addresses}
  */
  readonly remoteDnsServerIpAddresses: string[];
}

export function cloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfigToTerraform(struct?: CloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_proxy_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainProxyList),
    remote_dns_server_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteDnsServerIpAddresses),
  }
}


export function cloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_proxy_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainProxyList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remote_dns_server_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteDnsServerIpAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainProxyList !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainProxyList = this._domainProxyList;
    }
    if (this._remoteDnsServerIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDnsServerIpAddresses = this._remoteDnsServerIpAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainProxyList = undefined;
      this._remoteDnsServerIpAddresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainProxyList = value.domainProxyList;
      this._remoteDnsServerIpAddresses = value.remoteDnsServerIpAddresses;
    }
  }

  // domain_proxy_list - computed: false, optional: false, required: true
  private _domainProxyList?: string[]; 
  public get domainProxyList() {
    return this.getListAttribute('domain_proxy_list');
  }
  public set domainProxyList(value: string[]) {
    this._domainProxyList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainProxyListInput() {
    return this._domainProxyList;
  }

  // remote_dns_server_ip_addresses - computed: false, optional: false, required: true
  private _remoteDnsServerIpAddresses?: string[]; 
  public get remoteDnsServerIpAddresses() {
    return this.getListAttribute('remote_dns_server_ip_addresses');
  }
  public set remoteDnsServerIpAddresses(value: string[]) {
    this._remoteDnsServerIpAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDnsServerIpAddressesInput() {
    return this._remoteDnsServerIpAddresses;
  }
}

export class CloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfigList extends cdktf.ComplexList {
  public internalValue? : CloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfigOutputReference {
    return new CloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGatewayTransitGatewayAwsVpcPeeringGatewayTransitGatewayAttachmentConfig {
  /**
  * must be "aws-vpc-peering-attachment"; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#kind CloudGatewayTransitGateway#kind}
  */
  readonly kind: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#peer_account_id CloudGatewayTransitGateway#peer_account_id}
  */
  readonly peerAccountId: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#peer_vpc_id CloudGatewayTransitGateway#peer_vpc_id}
  */
  readonly peerVpcId: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#peer_vpc_region CloudGatewayTransitGateway#peer_vpc_region}
  */
  readonly peerVpcRegion: string;
}

export function cloudGatewayTransitGatewayAwsVpcPeeringGatewayTransitGatewayAttachmentConfigToTerraform(struct?: CloudGatewayTransitGatewayAwsVpcPeeringGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    peer_account_id: cdktf.stringToTerraform(struct!.peerAccountId),
    peer_vpc_id: cdktf.stringToTerraform(struct!.peerVpcId),
    peer_vpc_region: cdktf.stringToTerraform(struct!.peerVpcRegion),
  }
}


export function cloudGatewayTransitGatewayAwsVpcPeeringGatewayTransitGatewayAttachmentConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAwsVpcPeeringGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_account_id: {
      value: cdktf.stringToHclTerraform(struct!.peerAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.peerVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_vpc_region: {
      value: cdktf.stringToHclTerraform(struct!.peerVpcRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayTransitGatewayAwsVpcPeeringGatewayTransitGatewayAttachmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAwsVpcPeeringGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._peerAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAccountId = this._peerAccountId;
    }
    if (this._peerVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerVpcId = this._peerVpcId;
    }
    if (this._peerVpcRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerVpcRegion = this._peerVpcRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsVpcPeeringGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._peerAccountId = undefined;
      this._peerVpcId = undefined;
      this._peerVpcRegion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._peerAccountId = value.peerAccountId;
      this._peerVpcId = value.peerVpcId;
      this._peerVpcRegion = value.peerVpcRegion;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // peer_account_id - computed: false, optional: false, required: true
  private _peerAccountId?: string; 
  public get peerAccountId() {
    return this.getStringAttribute('peer_account_id');
  }
  public set peerAccountId(value: string) {
    this._peerAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAccountIdInput() {
    return this._peerAccountId;
  }

  // peer_vpc_id - computed: false, optional: false, required: true
  private _peerVpcId?: string; 
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
  }
  public set peerVpcId(value: string) {
    this._peerVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVpcIdInput() {
    return this._peerVpcId;
  }

  // peer_vpc_region - computed: false, optional: false, required: true
  private _peerVpcRegion?: string; 
  public get peerVpcRegion() {
    return this.getStringAttribute('peer_vpc_region');
  }
  public set peerVpcRegion(value: string) {
    this._peerVpcRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVpcRegionInput() {
    return this._peerVpcRegion;
  }
}
export interface CloudGatewayTransitGatewayAwsVpcPeeringGateway {
  /**
  * CIDR blocks for constructing a route table for the transit gateway, when attaching to the owning
  * network.
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#cidr_blocks CloudGatewayTransitGateway#cidr_blocks}
  */
  readonly cidrBlocks: string[];
  /**
  * List of mappings from remote DNS server IP address sets to proxied internal domains, for a transit gateway
  * attachment.
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#dns_config CloudGatewayTransitGateway#dns_config}
  */
  readonly dnsConfig?: CloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfig[] | cdktf.IResolvable;
  /**
  * Human-readable name of the transit gateway. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#name CloudGatewayTransitGateway#name}
  */
  readonly name: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#transit_gateway_attachment_config CloudGatewayTransitGateway#transit_gateway_attachment_config}
  */
  readonly transitGatewayAttachmentConfig: CloudGatewayTransitGatewayAwsVpcPeeringGatewayTransitGatewayAttachmentConfig;
}

export function cloudGatewayTransitGatewayAwsVpcPeeringGatewayToTerraform(struct?: CloudGatewayTransitGatewayAwsVpcPeeringGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
    dns_config: cdktf.listMapper(cloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfigToTerraform, false)(struct!.dnsConfig),
    name: cdktf.stringToTerraform(struct!.name),
    transit_gateway_attachment_config: cloudGatewayTransitGatewayAwsVpcPeeringGatewayTransitGatewayAttachmentConfigToTerraform(struct!.transitGatewayAttachmentConfig),
  }
}


export function cloudGatewayTransitGatewayAwsVpcPeeringGatewayToHclTerraform(struct?: CloudGatewayTransitGatewayAwsVpcPeeringGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_config: {
      value: cdktf.listMapperHcl(cloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfigToHclTerraform, false)(struct!.dnsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfigList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_gateway_attachment_config: {
      value: cloudGatewayTransitGatewayAwsVpcPeeringGatewayTransitGatewayAttachmentConfigToHclTerraform(struct!.transitGatewayAttachmentConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudGatewayTransitGatewayAwsVpcPeeringGatewayTransitGatewayAttachmentConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayTransitGatewayAwsVpcPeeringGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAwsVpcPeeringGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._transitGatewayAttachmentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitGatewayAttachmentConfig = this._transitGatewayAttachmentConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsVpcPeeringGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlocks = undefined;
      this._dnsConfig.internalValue = undefined;
      this._name = undefined;
      this._transitGatewayAttachmentConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlocks = value.cidrBlocks;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._name = value.name;
      this._transitGatewayAttachmentConfig.internalValue = value.transitGatewayAttachmentConfig;
    }
  }

  // cidr_blocks - computed: false, optional: false, required: true
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new CloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfigList(this, "dns_config", false);
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: CloudGatewayTransitGatewayAwsVpcPeeringGatewayDnsConfig[] | cdktf.IResolvable) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
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

  // transit_gateway_attachment_config - computed: false, optional: false, required: true
  private _transitGatewayAttachmentConfig = new CloudGatewayTransitGatewayAwsVpcPeeringGatewayTransitGatewayAttachmentConfigOutputReference(this, "transit_gateway_attachment_config");
  public get transitGatewayAttachmentConfig() {
    return this._transitGatewayAttachmentConfig;
  }
  public putTransitGatewayAttachmentConfig(value: CloudGatewayTransitGatewayAwsVpcPeeringGatewayTransitGatewayAttachmentConfig) {
    this._transitGatewayAttachmentConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAttachmentConfigInput() {
    return this._transitGatewayAttachmentConfig.internalValue;
  }
}
export interface CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseDnsConfig {
}

export function cloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseDnsConfigToTerraform(struct?: CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseDnsConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseDnsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_proxy_list - computed: true, optional: false, required: false
  public get domainProxyList() {
    return this.getListAttribute('domain_proxy_list');
  }

  // remote_dns_server_ip_addresses - computed: true, optional: false, required: false
  public get remoteDnsServerIpAddresses() {
    return this.getListAttribute('remote_dns_server_ip_addresses');
  }
}

export class CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseDnsConfigList extends cdktf.ComplexList {

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
  public get(index: number): CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseDnsConfigOutputReference {
    return new CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseDnsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseStateMetadata {
}

export function cloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseStateMetadataToTerraform(struct?: CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseStateMetadataToHclTerraform(struct?: CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseStateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseStateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseStateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // reported_status - computed: true, optional: false, required: false
  public get reportedStatus() {
    return this.getStringAttribute('reported_status');
  }
}
export interface CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseTransitGatewayAttachmentConfig {
}

export function cloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseTransitGatewayAttachmentConfigToTerraform(struct?: CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseTransitGatewayAttachmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseTransitGatewayAttachmentConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseTransitGatewayAttachmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseTransitGatewayAttachmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseTransitGatewayAttachmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseTransitGatewayAttachmentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // peer_account_id - computed: true, optional: false, required: false
  public get peerAccountId() {
    return this.getStringAttribute('peer_account_id');
  }

  // peer_vpc_id - computed: true, optional: false, required: false
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
  }

  // peer_vpc_region - computed: true, optional: false, required: false
  public get peerVpcRegion() {
    return this.getStringAttribute('peer_vpc_region');
  }
}
export interface CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponse {
}

export function cloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseToTerraform(struct?: CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseToHclTerraform(struct?: CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_blocks - computed: true, optional: false, required: false
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dns_config - computed: true, optional: false, required: false
  private _dnsConfig = new CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseDnsConfigList(this, "dns_config", false);
  public get dnsConfig() {
    return this._dnsConfig;
  }

  // entity_version - computed: true, optional: false, required: false
  public get entityVersion() {
    return this.getNumberAttribute('entity_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_metadata - computed: true, optional: false, required: false
  private _stateMetadata = new CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseStateMetadataOutputReference(this, "state_metadata");
  public get stateMetadata() {
    return this._stateMetadata;
  }

  // transit_gateway_attachment_config - computed: true, optional: false, required: false
  private _transitGatewayAttachmentConfig = new CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseTransitGatewayAttachmentConfigOutputReference(this, "transit_gateway_attachment_config");
  public get transitGatewayAttachmentConfig() {
    return this._transitGatewayAttachmentConfig;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface CloudGatewayTransitGatewayAzureTransitGatewayDnsConfig {
  /**
  * Internal domain names to proxy for DNS resolution from the listed remote DNS server IP addresses,
  * for a transit gateway.
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#domain_proxy_list CloudGatewayTransitGateway#domain_proxy_list}
  */
  readonly domainProxyList: string[];
  /**
  * Remote DNS Server IP Addresses to connect to for resolving internal DNS via a transit gateway. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#remote_dns_server_ip_addresses CloudGatewayTransitGateway#remote_dns_server_ip_addresses}
  */
  readonly remoteDnsServerIpAddresses: string[];
}

export function cloudGatewayTransitGatewayAzureTransitGatewayDnsConfigToTerraform(struct?: CloudGatewayTransitGatewayAzureTransitGatewayDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_proxy_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainProxyList),
    remote_dns_server_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteDnsServerIpAddresses),
  }
}


export function cloudGatewayTransitGatewayAzureTransitGatewayDnsConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAzureTransitGatewayDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_proxy_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainProxyList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remote_dns_server_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteDnsServerIpAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayTransitGatewayAzureTransitGatewayDnsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGatewayTransitGatewayAzureTransitGatewayDnsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainProxyList !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainProxyList = this._domainProxyList;
    }
    if (this._remoteDnsServerIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDnsServerIpAddresses = this._remoteDnsServerIpAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAzureTransitGatewayDnsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainProxyList = undefined;
      this._remoteDnsServerIpAddresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainProxyList = value.domainProxyList;
      this._remoteDnsServerIpAddresses = value.remoteDnsServerIpAddresses;
    }
  }

  // domain_proxy_list - computed: false, optional: false, required: true
  private _domainProxyList?: string[]; 
  public get domainProxyList() {
    return this.getListAttribute('domain_proxy_list');
  }
  public set domainProxyList(value: string[]) {
    this._domainProxyList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainProxyListInput() {
    return this._domainProxyList;
  }

  // remote_dns_server_ip_addresses - computed: false, optional: false, required: true
  private _remoteDnsServerIpAddresses?: string[]; 
  public get remoteDnsServerIpAddresses() {
    return this.getListAttribute('remote_dns_server_ip_addresses');
  }
  public set remoteDnsServerIpAddresses(value: string[]) {
    this._remoteDnsServerIpAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDnsServerIpAddressesInput() {
    return this._remoteDnsServerIpAddresses;
  }
}

export class CloudGatewayTransitGatewayAzureTransitGatewayDnsConfigList extends cdktf.ComplexList {
  public internalValue? : CloudGatewayTransitGatewayAzureTransitGatewayDnsConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudGatewayTransitGatewayAzureTransitGatewayDnsConfigOutputReference {
    return new CloudGatewayTransitGatewayAzureTransitGatewayDnsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGatewayTransitGatewayAzureTransitGatewayTransitGatewayAttachmentConfig {
  /**
  * must be "azure-vnet-peering-attachment"; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#kind CloudGatewayTransitGateway#kind}
  */
  readonly kind: string;
  /**
  * Resource Group Name for the Azure VNET Peering attachment. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#resource_group_name CloudGatewayTransitGateway#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Subscription ID for the Azure VNET Peering attachment. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#subscription_id CloudGatewayTransitGateway#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Tenant ID for the Azure VNET Peering attachment. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#tenant_id CloudGatewayTransitGateway#tenant_id}
  */
  readonly tenantId: string;
  /**
  * VNET Name for the Azure VNET Peering attachment. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#vnet_name CloudGatewayTransitGateway#vnet_name}
  */
  readonly vnetName: string;
}

export function cloudGatewayTransitGatewayAzureTransitGatewayTransitGatewayAttachmentConfigToTerraform(struct?: CloudGatewayTransitGatewayAzureTransitGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    vnet_name: cdktf.stringToTerraform(struct!.vnetName),
  }
}


export function cloudGatewayTransitGatewayAzureTransitGatewayTransitGatewayAttachmentConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAzureTransitGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
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
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_name: {
      value: cdktf.stringToHclTerraform(struct!.vnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayTransitGatewayAzureTransitGatewayTransitGatewayAttachmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAzureTransitGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._vnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetName = this._vnetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAzureTransitGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._resourceGroupName = undefined;
      this._subscriptionId = undefined;
      this._tenantId = undefined;
      this._vnetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._resourceGroupName = value.resourceGroupName;
      this._subscriptionId = value.subscriptionId;
      this._tenantId = value.tenantId;
      this._vnetName = value.vnetName;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // vnet_name - computed: false, optional: false, required: true
  private _vnetName?: string; 
  public get vnetName() {
    return this.getStringAttribute('vnet_name');
  }
  public set vnetName(value: string) {
    this._vnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetNameInput() {
    return this._vnetName;
  }
}
export interface CloudGatewayTransitGatewayAzureTransitGateway {
  /**
  * List of mappings from remote DNS server IP address sets to proxied internal domains, for a transit gateway
  * attachment.
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#dns_config CloudGatewayTransitGateway#dns_config}
  */
  readonly dnsConfig?: CloudGatewayTransitGatewayAzureTransitGatewayDnsConfig[] | cdktf.IResolvable;
  /**
  * Human-readable name of the transit gateway. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#name CloudGatewayTransitGateway#name}
  */
  readonly name: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#transit_gateway_attachment_config CloudGatewayTransitGateway#transit_gateway_attachment_config}
  */
  readonly transitGatewayAttachmentConfig: CloudGatewayTransitGatewayAzureTransitGatewayTransitGatewayAttachmentConfig;
}

export function cloudGatewayTransitGatewayAzureTransitGatewayToTerraform(struct?: CloudGatewayTransitGatewayAzureTransitGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_config: cdktf.listMapper(cloudGatewayTransitGatewayAzureTransitGatewayDnsConfigToTerraform, false)(struct!.dnsConfig),
    name: cdktf.stringToTerraform(struct!.name),
    transit_gateway_attachment_config: cloudGatewayTransitGatewayAzureTransitGatewayTransitGatewayAttachmentConfigToTerraform(struct!.transitGatewayAttachmentConfig),
  }
}


export function cloudGatewayTransitGatewayAzureTransitGatewayToHclTerraform(struct?: CloudGatewayTransitGatewayAzureTransitGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_config: {
      value: cdktf.listMapperHcl(cloudGatewayTransitGatewayAzureTransitGatewayDnsConfigToHclTerraform, false)(struct!.dnsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGatewayTransitGatewayAzureTransitGatewayDnsConfigList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_gateway_attachment_config: {
      value: cloudGatewayTransitGatewayAzureTransitGatewayTransitGatewayAttachmentConfigToHclTerraform(struct!.transitGatewayAttachmentConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudGatewayTransitGatewayAzureTransitGatewayTransitGatewayAttachmentConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayTransitGatewayAzureTransitGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAzureTransitGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._transitGatewayAttachmentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitGatewayAttachmentConfig = this._transitGatewayAttachmentConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAzureTransitGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsConfig.internalValue = undefined;
      this._name = undefined;
      this._transitGatewayAttachmentConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._name = value.name;
      this._transitGatewayAttachmentConfig.internalValue = value.transitGatewayAttachmentConfig;
    }
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new CloudGatewayTransitGatewayAzureTransitGatewayDnsConfigList(this, "dns_config", false);
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: CloudGatewayTransitGatewayAzureTransitGatewayDnsConfig[] | cdktf.IResolvable) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
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

  // transit_gateway_attachment_config - computed: false, optional: false, required: true
  private _transitGatewayAttachmentConfig = new CloudGatewayTransitGatewayAzureTransitGatewayTransitGatewayAttachmentConfigOutputReference(this, "transit_gateway_attachment_config");
  public get transitGatewayAttachmentConfig() {
    return this._transitGatewayAttachmentConfig;
  }
  public putTransitGatewayAttachmentConfig(value: CloudGatewayTransitGatewayAzureTransitGatewayTransitGatewayAttachmentConfig) {
    this._transitGatewayAttachmentConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAttachmentConfigInput() {
    return this._transitGatewayAttachmentConfig.internalValue;
  }
}
export interface CloudGatewayTransitGatewayAzureTransitGatewayResponseDnsConfig {
}

export function cloudGatewayTransitGatewayAzureTransitGatewayResponseDnsConfigToTerraform(struct?: CloudGatewayTransitGatewayAzureTransitGatewayResponseDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayAzureTransitGatewayResponseDnsConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAzureTransitGatewayResponseDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayAzureTransitGatewayResponseDnsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGatewayTransitGatewayAzureTransitGatewayResponseDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAzureTransitGatewayResponseDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_proxy_list - computed: true, optional: false, required: false
  public get domainProxyList() {
    return this.getListAttribute('domain_proxy_list');
  }

  // remote_dns_server_ip_addresses - computed: true, optional: false, required: false
  public get remoteDnsServerIpAddresses() {
    return this.getListAttribute('remote_dns_server_ip_addresses');
  }
}

export class CloudGatewayTransitGatewayAzureTransitGatewayResponseDnsConfigList extends cdktf.ComplexList {

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
  public get(index: number): CloudGatewayTransitGatewayAzureTransitGatewayResponseDnsConfigOutputReference {
    return new CloudGatewayTransitGatewayAzureTransitGatewayResponseDnsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGatewayTransitGatewayAzureTransitGatewayResponseStateMetadata {
}

export function cloudGatewayTransitGatewayAzureTransitGatewayResponseStateMetadataToTerraform(struct?: CloudGatewayTransitGatewayAzureTransitGatewayResponseStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayAzureTransitGatewayResponseStateMetadataToHclTerraform(struct?: CloudGatewayTransitGatewayAzureTransitGatewayResponseStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayAzureTransitGatewayResponseStateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAzureTransitGatewayResponseStateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAzureTransitGatewayResponseStateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // reported_status - computed: true, optional: false, required: false
  public get reportedStatus() {
    return this.getStringAttribute('reported_status');
  }
}
export interface CloudGatewayTransitGatewayAzureTransitGatewayResponseTransitGatewayAttachmentConfig {
}

export function cloudGatewayTransitGatewayAzureTransitGatewayResponseTransitGatewayAttachmentConfigToTerraform(struct?: CloudGatewayTransitGatewayAzureTransitGatewayResponseTransitGatewayAttachmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayAzureTransitGatewayResponseTransitGatewayAttachmentConfigToHclTerraform(struct?: CloudGatewayTransitGatewayAzureTransitGatewayResponseTransitGatewayAttachmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayAzureTransitGatewayResponseTransitGatewayAttachmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAzureTransitGatewayResponseTransitGatewayAttachmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAzureTransitGatewayResponseTransitGatewayAttachmentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vnet_name - computed: true, optional: false, required: false
  public get vnetName() {
    return this.getStringAttribute('vnet_name');
  }
}
export interface CloudGatewayTransitGatewayAzureTransitGatewayResponse {
}

export function cloudGatewayTransitGatewayAzureTransitGatewayResponseToTerraform(struct?: CloudGatewayTransitGatewayAzureTransitGatewayResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayAzureTransitGatewayResponseToHclTerraform(struct?: CloudGatewayTransitGatewayAzureTransitGatewayResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayAzureTransitGatewayResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayAzureTransitGatewayResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayAzureTransitGatewayResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dns_config - computed: true, optional: false, required: false
  private _dnsConfig = new CloudGatewayTransitGatewayAzureTransitGatewayResponseDnsConfigList(this, "dns_config", false);
  public get dnsConfig() {
    return this._dnsConfig;
  }

  // entity_version - computed: true, optional: false, required: false
  public get entityVersion() {
    return this.getNumberAttribute('entity_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_metadata - computed: true, optional: false, required: false
  private _stateMetadata = new CloudGatewayTransitGatewayAzureTransitGatewayResponseStateMetadataOutputReference(this, "state_metadata");
  public get stateMetadata() {
    return this._stateMetadata;
  }

  // transit_gateway_attachment_config - computed: true, optional: false, required: false
  private _transitGatewayAttachmentConfig = new CloudGatewayTransitGatewayAzureTransitGatewayResponseTransitGatewayAttachmentConfigOutputReference(this, "transit_gateway_attachment_config");
  public get transitGatewayAttachmentConfig() {
    return this._transitGatewayAttachmentConfig;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfig {
  /**
  * Internal domain names to proxy for DNS resolution from the listed remote DNS server IP addresses,
  * for a transit gateway.
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#domain_proxy_list CloudGatewayTransitGateway#domain_proxy_list}
  */
  readonly domainProxyList: string[];
  /**
  * Remote DNS Server IP Addresses to connect to for resolving internal DNS via a transit gateway. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#remote_dns_server_ip_addresses CloudGatewayTransitGateway#remote_dns_server_ip_addresses}
  */
  readonly remoteDnsServerIpAddresses: string[];
}

export function cloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfigToTerraform(struct?: CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_proxy_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainProxyList),
    remote_dns_server_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteDnsServerIpAddresses),
  }
}


export function cloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfigToHclTerraform(struct?: CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_proxy_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainProxyList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remote_dns_server_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteDnsServerIpAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainProxyList !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainProxyList = this._domainProxyList;
    }
    if (this._remoteDnsServerIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDnsServerIpAddresses = this._remoteDnsServerIpAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainProxyList = undefined;
      this._remoteDnsServerIpAddresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainProxyList = value.domainProxyList;
      this._remoteDnsServerIpAddresses = value.remoteDnsServerIpAddresses;
    }
  }

  // domain_proxy_list - computed: false, optional: false, required: true
  private _domainProxyList?: string[]; 
  public get domainProxyList() {
    return this.getListAttribute('domain_proxy_list');
  }
  public set domainProxyList(value: string[]) {
    this._domainProxyList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainProxyListInput() {
    return this._domainProxyList;
  }

  // remote_dns_server_ip_addresses - computed: false, optional: false, required: true
  private _remoteDnsServerIpAddresses?: string[]; 
  public get remoteDnsServerIpAddresses() {
    return this.getListAttribute('remote_dns_server_ip_addresses');
  }
  public set remoteDnsServerIpAddresses(value: string[]) {
    this._remoteDnsServerIpAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDnsServerIpAddressesInput() {
    return this._remoteDnsServerIpAddresses;
  }
}

export class CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfigList extends cdktf.ComplexList {
  public internalValue? : CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfig[] | cdktf.IResolvable

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
  public get(index: number): CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfigOutputReference {
    return new CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayTransitGatewayAttachmentConfig {
  /**
  * must be "gcp-vpc-peering-attachment"; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#kind CloudGatewayTransitGateway#kind}
  */
  readonly kind: string;
  /**
  * GCP Project ID of the peer account to create attachment to. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#peer_project_id CloudGatewayTransitGateway#peer_project_id}
  */
  readonly peerProjectId: string;
  /**
  * GCP VPC Name of the peer account to create attachment to. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#peer_vpc_name CloudGatewayTransitGateway#peer_vpc_name}
  */
  readonly peerVpcName: string;
}

export function cloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayTransitGatewayAttachmentConfigToTerraform(struct?: CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    peer_project_id: cdktf.stringToTerraform(struct!.peerProjectId),
    peer_vpc_name: cdktf.stringToTerraform(struct!.peerVpcName),
  }
}


export function cloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayTransitGatewayAttachmentConfigToHclTerraform(struct?: CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_project_id: {
      value: cdktf.stringToHclTerraform(struct!.peerProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_vpc_name: {
      value: cdktf.stringToHclTerraform(struct!.peerVpcName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayTransitGatewayAttachmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._peerProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerProjectId = this._peerProjectId;
    }
    if (this._peerVpcName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerVpcName = this._peerVpcName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayTransitGatewayAttachmentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._peerProjectId = undefined;
      this._peerVpcName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._peerProjectId = value.peerProjectId;
      this._peerVpcName = value.peerVpcName;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // peer_project_id - computed: false, optional: false, required: true
  private _peerProjectId?: string; 
  public get peerProjectId() {
    return this.getStringAttribute('peer_project_id');
  }
  public set peerProjectId(value: string) {
    this._peerProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerProjectIdInput() {
    return this._peerProjectId;
  }

  // peer_vpc_name - computed: false, optional: false, required: true
  private _peerVpcName?: string; 
  public get peerVpcName() {
    return this.getStringAttribute('peer_vpc_name');
  }
  public set peerVpcName(value: string) {
    this._peerVpcName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVpcNameInput() {
    return this._peerVpcName;
  }
}
export interface CloudGatewayTransitGatewayGcpVpcPeeringTransitGateway {
  /**
  * List of mappings from remote DNS server IP address sets to proxied internal domains, for a transit gateway
  * attachment.
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#dns_config CloudGatewayTransitGateway#dns_config}
  */
  readonly dnsConfig?: CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfig[] | cdktf.IResolvable;
  /**
  * Human-readable name of the transit gateway. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#name CloudGatewayTransitGateway#name}
  */
  readonly name: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#transit_gateway_attachment_config CloudGatewayTransitGateway#transit_gateway_attachment_config}
  */
  readonly transitGatewayAttachmentConfig: CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayTransitGatewayAttachmentConfig;
}

export function cloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayToTerraform(struct?: CloudGatewayTransitGatewayGcpVpcPeeringTransitGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_config: cdktf.listMapper(cloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfigToTerraform, false)(struct!.dnsConfig),
    name: cdktf.stringToTerraform(struct!.name),
    transit_gateway_attachment_config: cloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayTransitGatewayAttachmentConfigToTerraform(struct!.transitGatewayAttachmentConfig),
  }
}


export function cloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayToHclTerraform(struct?: CloudGatewayTransitGatewayGcpVpcPeeringTransitGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_config: {
      value: cdktf.listMapperHcl(cloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfigToHclTerraform, false)(struct!.dnsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfigList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_gateway_attachment_config: {
      value: cloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayTransitGatewayAttachmentConfigToHclTerraform(struct!.transitGatewayAttachmentConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayTransitGatewayAttachmentConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayGcpVpcPeeringTransitGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._transitGatewayAttachmentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitGatewayAttachmentConfig = this._transitGatewayAttachmentConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayGcpVpcPeeringTransitGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsConfig.internalValue = undefined;
      this._name = undefined;
      this._transitGatewayAttachmentConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._name = value.name;
      this._transitGatewayAttachmentConfig.internalValue = value.transitGatewayAttachmentConfig;
    }
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfigList(this, "dns_config", false);
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayDnsConfig[] | cdktf.IResolvable) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
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

  // transit_gateway_attachment_config - computed: false, optional: false, required: true
  private _transitGatewayAttachmentConfig = new CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayTransitGatewayAttachmentConfigOutputReference(this, "transit_gateway_attachment_config");
  public get transitGatewayAttachmentConfig() {
    return this._transitGatewayAttachmentConfig;
  }
  public putTransitGatewayAttachmentConfig(value: CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayTransitGatewayAttachmentConfig) {
    this._transitGatewayAttachmentConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAttachmentConfigInput() {
    return this._transitGatewayAttachmentConfig.internalValue;
  }
}
export interface CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseDnsConfig {
}

export function cloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseDnsConfigToTerraform(struct?: CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseDnsConfigToHclTerraform(struct?: CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseDnsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_proxy_list - computed: true, optional: false, required: false
  public get domainProxyList() {
    return this.getListAttribute('domain_proxy_list');
  }

  // remote_dns_server_ip_addresses - computed: true, optional: false, required: false
  public get remoteDnsServerIpAddresses() {
    return this.getListAttribute('remote_dns_server_ip_addresses');
  }
}

export class CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseDnsConfigList extends cdktf.ComplexList {

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
  public get(index: number): CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseDnsConfigOutputReference {
    return new CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseDnsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseStateMetadata {
}

export function cloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseStateMetadataToTerraform(struct?: CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseStateMetadataToHclTerraform(struct?: CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseStateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseStateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseStateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // reported_status - computed: true, optional: false, required: false
  public get reportedStatus() {
    return this.getStringAttribute('reported_status');
  }
}
export interface CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseTransitGatewayAttachmentConfig {
}

export function cloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseTransitGatewayAttachmentConfigToTerraform(struct?: CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseTransitGatewayAttachmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseTransitGatewayAttachmentConfigToHclTerraform(struct?: CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseTransitGatewayAttachmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseTransitGatewayAttachmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseTransitGatewayAttachmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseTransitGatewayAttachmentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // peer_project_id - computed: true, optional: false, required: false
  public get peerProjectId() {
    return this.getStringAttribute('peer_project_id');
  }

  // peer_vpc_name - computed: true, optional: false, required: false
  public get peerVpcName() {
    return this.getStringAttribute('peer_vpc_name');
  }
}
export interface CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponse {
}

export function cloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseToTerraform(struct?: CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseToHclTerraform(struct?: CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dns_config - computed: true, optional: false, required: false
  private _dnsConfig = new CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseDnsConfigList(this, "dns_config", false);
  public get dnsConfig() {
    return this._dnsConfig;
  }

  // entity_version - computed: true, optional: false, required: false
  public get entityVersion() {
    return this.getNumberAttribute('entity_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_metadata - computed: true, optional: false, required: false
  private _stateMetadata = new CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseStateMetadataOutputReference(this, "state_metadata");
  public get stateMetadata() {
    return this._stateMetadata;
  }

  // transit_gateway_attachment_config - computed: true, optional: false, required: false
  private _transitGatewayAttachmentConfig = new CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseTransitGatewayAttachmentConfigOutputReference(this, "transit_gateway_attachment_config");
  public get transitGatewayAttachmentConfig() {
    return this._transitGatewayAttachmentConfig;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway konnect_cloud_gateway_transit_gateway}
*/
export class CloudGatewayTransitGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_cloud_gateway_transit_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudGatewayTransitGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudGatewayTransitGateway to import
  * @param importFromId The id of the existing CloudGatewayTransitGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudGatewayTransitGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_cloud_gateway_transit_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_transit_gateway konnect_cloud_gateway_transit_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudGatewayTransitGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: CloudGatewayTransitGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_cloud_gateway_transit_gateway',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsResourceEndpointGateway.internalValue = config.awsResourceEndpointGateway;
    this._awsTransitGateway.internalValue = config.awsTransitGateway;
    this._awsVpcPeeringGateway.internalValue = config.awsVpcPeeringGateway;
    this._azureTransitGateway.internalValue = config.azureTransitGateway;
    this._gcpVpcPeeringTransitGateway.internalValue = config.gcpVpcPeeringTransitGateway;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_resource_endpoint_gateway - computed: false, optional: true, required: false
  private _awsResourceEndpointGateway = new CloudGatewayTransitGatewayAwsResourceEndpointGatewayOutputReference(this, "aws_resource_endpoint_gateway");
  public get awsResourceEndpointGateway() {
    return this._awsResourceEndpointGateway;
  }
  public putAwsResourceEndpointGateway(value: CloudGatewayTransitGatewayAwsResourceEndpointGateway) {
    this._awsResourceEndpointGateway.internalValue = value;
  }
  public resetAwsResourceEndpointGateway() {
    this._awsResourceEndpointGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsResourceEndpointGatewayInput() {
    return this._awsResourceEndpointGateway.internalValue;
  }

  // aws_resource_endpoint_gateway_response - computed: true, optional: false, required: false
  private _awsResourceEndpointGatewayResponse = new CloudGatewayTransitGatewayAwsResourceEndpointGatewayResponseOutputReference(this, "aws_resource_endpoint_gateway_response");
  public get awsResourceEndpointGatewayResponse() {
    return this._awsResourceEndpointGatewayResponse;
  }

  // aws_transit_gateway - computed: false, optional: true, required: false
  private _awsTransitGateway = new CloudGatewayTransitGatewayAwsTransitGatewayOutputReference(this, "aws_transit_gateway");
  public get awsTransitGateway() {
    return this._awsTransitGateway;
  }
  public putAwsTransitGateway(value: CloudGatewayTransitGatewayAwsTransitGateway) {
    this._awsTransitGateway.internalValue = value;
  }
  public resetAwsTransitGateway() {
    this._awsTransitGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTransitGatewayInput() {
    return this._awsTransitGateway.internalValue;
  }

  // aws_transit_gateway_response - computed: true, optional: false, required: false
  private _awsTransitGatewayResponse = new CloudGatewayTransitGatewayAwsTransitGatewayResponseOutputReference(this, "aws_transit_gateway_response");
  public get awsTransitGatewayResponse() {
    return this._awsTransitGatewayResponse;
  }

  // aws_vpc_peering_gateway - computed: false, optional: true, required: false
  private _awsVpcPeeringGateway = new CloudGatewayTransitGatewayAwsVpcPeeringGatewayOutputReference(this, "aws_vpc_peering_gateway");
  public get awsVpcPeeringGateway() {
    return this._awsVpcPeeringGateway;
  }
  public putAwsVpcPeeringGateway(value: CloudGatewayTransitGatewayAwsVpcPeeringGateway) {
    this._awsVpcPeeringGateway.internalValue = value;
  }
  public resetAwsVpcPeeringGateway() {
    this._awsVpcPeeringGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsVpcPeeringGatewayInput() {
    return this._awsVpcPeeringGateway.internalValue;
  }

  // aws_vpc_peering_gateway_response - computed: true, optional: false, required: false
  private _awsVpcPeeringGatewayResponse = new CloudGatewayTransitGatewayAwsVpcPeeringGatewayResponseOutputReference(this, "aws_vpc_peering_gateway_response");
  public get awsVpcPeeringGatewayResponse() {
    return this._awsVpcPeeringGatewayResponse;
  }

  // azure_transit_gateway - computed: false, optional: true, required: false
  private _azureTransitGateway = new CloudGatewayTransitGatewayAzureTransitGatewayOutputReference(this, "azure_transit_gateway");
  public get azureTransitGateway() {
    return this._azureTransitGateway;
  }
  public putAzureTransitGateway(value: CloudGatewayTransitGatewayAzureTransitGateway) {
    this._azureTransitGateway.internalValue = value;
  }
  public resetAzureTransitGateway() {
    this._azureTransitGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTransitGatewayInput() {
    return this._azureTransitGateway.internalValue;
  }

  // azure_transit_gateway_response - computed: true, optional: false, required: false
  private _azureTransitGatewayResponse = new CloudGatewayTransitGatewayAzureTransitGatewayResponseOutputReference(this, "azure_transit_gateway_response");
  public get azureTransitGatewayResponse() {
    return this._azureTransitGatewayResponse;
  }

  // entity_version - computed: true, optional: false, required: false
  public get entityVersion() {
    return this.getNumberAttribute('entity_version');
  }

  // gcp_vpc_peering_transit_gateway - computed: false, optional: true, required: false
  private _gcpVpcPeeringTransitGateway = new CloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayOutputReference(this, "gcp_vpc_peering_transit_gateway");
  public get gcpVpcPeeringTransitGateway() {
    return this._gcpVpcPeeringTransitGateway;
  }
  public putGcpVpcPeeringTransitGateway(value: CloudGatewayTransitGatewayGcpVpcPeeringTransitGateway) {
    this._gcpVpcPeeringTransitGateway.internalValue = value;
  }
  public resetGcpVpcPeeringTransitGateway() {
    this._gcpVpcPeeringTransitGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpVpcPeeringTransitGatewayInput() {
    return this._gcpVpcPeeringTransitGateway.internalValue;
  }

  // gcpvpc_peering_gateway_response - computed: true, optional: false, required: false
  private _gcpvpcPeeringGatewayResponse = new CloudGatewayTransitGatewayGcpvpcPeeringGatewayResponseOutputReference(this, "gcpvpc_peering_gateway_response");
  public get gcpvpcPeeringGatewayResponse() {
    return this._gcpvpcPeeringGatewayResponse;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_resource_endpoint_gateway: cloudGatewayTransitGatewayAwsResourceEndpointGatewayToTerraform(this._awsResourceEndpointGateway.internalValue),
      aws_transit_gateway: cloudGatewayTransitGatewayAwsTransitGatewayToTerraform(this._awsTransitGateway.internalValue),
      aws_vpc_peering_gateway: cloudGatewayTransitGatewayAwsVpcPeeringGatewayToTerraform(this._awsVpcPeeringGateway.internalValue),
      azure_transit_gateway: cloudGatewayTransitGatewayAzureTransitGatewayToTerraform(this._azureTransitGateway.internalValue),
      gcp_vpc_peering_transit_gateway: cloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayToTerraform(this._gcpVpcPeeringTransitGateway.internalValue),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_resource_endpoint_gateway: {
        value: cloudGatewayTransitGatewayAwsResourceEndpointGatewayToHclTerraform(this._awsResourceEndpointGateway.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudGatewayTransitGatewayAwsResourceEndpointGateway",
      },
      aws_transit_gateway: {
        value: cloudGatewayTransitGatewayAwsTransitGatewayToHclTerraform(this._awsTransitGateway.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudGatewayTransitGatewayAwsTransitGateway",
      },
      aws_vpc_peering_gateway: {
        value: cloudGatewayTransitGatewayAwsVpcPeeringGatewayToHclTerraform(this._awsVpcPeeringGateway.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudGatewayTransitGatewayAwsVpcPeeringGateway",
      },
      azure_transit_gateway: {
        value: cloudGatewayTransitGatewayAzureTransitGatewayToHclTerraform(this._azureTransitGateway.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudGatewayTransitGatewayAzureTransitGateway",
      },
      gcp_vpc_peering_transit_gateway: {
        value: cloudGatewayTransitGatewayGcpVpcPeeringTransitGatewayToHclTerraform(this._gcpVpcPeeringTransitGateway.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudGatewayTransitGatewayGcpVpcPeeringTransitGateway",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
