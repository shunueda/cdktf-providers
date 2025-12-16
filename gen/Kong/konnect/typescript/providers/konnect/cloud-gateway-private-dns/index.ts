// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudGatewayPrivateDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human-readable name of the Private DNS. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns#name CloudGatewayPrivateDns#name}
  */
  readonly name?: string;
  /**
  * The network to operate on. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns#network_id CloudGatewayPrivateDns#network_id}
  */
  readonly networkId: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns#private_dns_attachment_config CloudGatewayPrivateDns#private_dns_attachment_config}
  */
  readonly privateDnsAttachmentConfig?: CloudGatewayPrivateDnsPrivateDnsAttachmentConfig;
}
export interface CloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfigDnsConfig {
}

export function cloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfigDnsConfigToTerraform(struct?: CloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfigDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfigDnsConfigToHclTerraform(struct?: CloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfigDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfigDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): CloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfigDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfigDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // remote_dns_server_ip_addresses - computed: true, optional: false, required: false
  public get remoteDnsServerIpAddresses() {
    return this.getListAttribute('remote_dns_server_ip_addresses');
  }
}

export class CloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfigDnsConfigMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): CloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfigDnsConfigOutputReference {
    return new CloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfigDnsConfigOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface CloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfig {
}

export function cloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfigToTerraform(struct?: CloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfigToHclTerraform(struct?: CloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_config - computed: true, optional: false, required: false
  private _dnsConfig = new CloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfigDnsConfigMap(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }
}
export interface CloudGatewayPrivateDnsAwsPrivateDnsResolverResponseStateMetadata {
}

export function cloudGatewayPrivateDnsAwsPrivateDnsResolverResponseStateMetadataToTerraform(struct?: CloudGatewayPrivateDnsAwsPrivateDnsResolverResponseStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayPrivateDnsAwsPrivateDnsResolverResponseStateMetadataToHclTerraform(struct?: CloudGatewayPrivateDnsAwsPrivateDnsResolverResponseStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayPrivateDnsAwsPrivateDnsResolverResponseStateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayPrivateDnsAwsPrivateDnsResolverResponseStateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayPrivateDnsAwsPrivateDnsResolverResponseStateMetadata | undefined) {
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
export interface CloudGatewayPrivateDnsAwsPrivateDnsResolverResponse {
}

export function cloudGatewayPrivateDnsAwsPrivateDnsResolverResponseToTerraform(struct?: CloudGatewayPrivateDnsAwsPrivateDnsResolverResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayPrivateDnsAwsPrivateDnsResolverResponseToHclTerraform(struct?: CloudGatewayPrivateDnsAwsPrivateDnsResolverResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayPrivateDnsAwsPrivateDnsResolverResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayPrivateDnsAwsPrivateDnsResolverResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayPrivateDnsAwsPrivateDnsResolverResponse | undefined) {
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

  // private_dns_attachment_config - computed: true, optional: false, required: false
  private _privateDnsAttachmentConfig = new CloudGatewayPrivateDnsAwsPrivateDnsResolverResponsePrivateDnsAttachmentConfigOutputReference(this, "private_dns_attachment_config");
  public get privateDnsAttachmentConfig() {
    return this._privateDnsAttachmentConfig;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_metadata - computed: true, optional: false, required: false
  private _stateMetadata = new CloudGatewayPrivateDnsAwsPrivateDnsResolverResponseStateMetadataOutputReference(this, "state_metadata");
  public get stateMetadata() {
    return this._stateMetadata;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface CloudGatewayPrivateDnsAwsPrivateHostedZoneResponsePrivateDnsAttachmentConfig {
}

export function cloudGatewayPrivateDnsAwsPrivateHostedZoneResponsePrivateDnsAttachmentConfigToTerraform(struct?: CloudGatewayPrivateDnsAwsPrivateHostedZoneResponsePrivateDnsAttachmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayPrivateDnsAwsPrivateHostedZoneResponsePrivateDnsAttachmentConfigToHclTerraform(struct?: CloudGatewayPrivateDnsAwsPrivateHostedZoneResponsePrivateDnsAttachmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayPrivateDnsAwsPrivateHostedZoneResponsePrivateDnsAttachmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayPrivateDnsAwsPrivateHostedZoneResponsePrivateDnsAttachmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayPrivateDnsAwsPrivateHostedZoneResponsePrivateDnsAttachmentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }
}
export interface CloudGatewayPrivateDnsAwsPrivateHostedZoneResponseStateMetadata {
}

export function cloudGatewayPrivateDnsAwsPrivateHostedZoneResponseStateMetadataToTerraform(struct?: CloudGatewayPrivateDnsAwsPrivateHostedZoneResponseStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayPrivateDnsAwsPrivateHostedZoneResponseStateMetadataToHclTerraform(struct?: CloudGatewayPrivateDnsAwsPrivateHostedZoneResponseStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayPrivateDnsAwsPrivateHostedZoneResponseStateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayPrivateDnsAwsPrivateHostedZoneResponseStateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayPrivateDnsAwsPrivateHostedZoneResponseStateMetadata | undefined) {
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
export interface CloudGatewayPrivateDnsAwsPrivateHostedZoneResponse {
}

export function cloudGatewayPrivateDnsAwsPrivateHostedZoneResponseToTerraform(struct?: CloudGatewayPrivateDnsAwsPrivateHostedZoneResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayPrivateDnsAwsPrivateHostedZoneResponseToHclTerraform(struct?: CloudGatewayPrivateDnsAwsPrivateHostedZoneResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayPrivateDnsAwsPrivateHostedZoneResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayPrivateDnsAwsPrivateHostedZoneResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayPrivateDnsAwsPrivateHostedZoneResponse | undefined) {
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

  // private_dns_attachment_config - computed: true, optional: false, required: false
  private _privateDnsAttachmentConfig = new CloudGatewayPrivateDnsAwsPrivateHostedZoneResponsePrivateDnsAttachmentConfigOutputReference(this, "private_dns_attachment_config");
  public get privateDnsAttachmentConfig() {
    return this._privateDnsAttachmentConfig;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_metadata - computed: true, optional: false, required: false
  private _stateMetadata = new CloudGatewayPrivateDnsAwsPrivateHostedZoneResponseStateMetadataOutputReference(this, "state_metadata");
  public get stateMetadata() {
    return this._stateMetadata;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface CloudGatewayPrivateDnsGcpPrivateHostedZoneResponsePrivateDnsAttachmentConfig {
}

export function cloudGatewayPrivateDnsGcpPrivateHostedZoneResponsePrivateDnsAttachmentConfigToTerraform(struct?: CloudGatewayPrivateDnsGcpPrivateHostedZoneResponsePrivateDnsAttachmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayPrivateDnsGcpPrivateHostedZoneResponsePrivateDnsAttachmentConfigToHclTerraform(struct?: CloudGatewayPrivateDnsGcpPrivateHostedZoneResponsePrivateDnsAttachmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayPrivateDnsGcpPrivateHostedZoneResponsePrivateDnsAttachmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayPrivateDnsGcpPrivateHostedZoneResponsePrivateDnsAttachmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayPrivateDnsGcpPrivateHostedZoneResponsePrivateDnsAttachmentConfig | undefined) {
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
export interface CloudGatewayPrivateDnsGcpPrivateHostedZoneResponseStateMetadata {
}

export function cloudGatewayPrivateDnsGcpPrivateHostedZoneResponseStateMetadataToTerraform(struct?: CloudGatewayPrivateDnsGcpPrivateHostedZoneResponseStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayPrivateDnsGcpPrivateHostedZoneResponseStateMetadataToHclTerraform(struct?: CloudGatewayPrivateDnsGcpPrivateHostedZoneResponseStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayPrivateDnsGcpPrivateHostedZoneResponseStateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayPrivateDnsGcpPrivateHostedZoneResponseStateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayPrivateDnsGcpPrivateHostedZoneResponseStateMetadata | undefined) {
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
export interface CloudGatewayPrivateDnsGcpPrivateHostedZoneResponse {
}

export function cloudGatewayPrivateDnsGcpPrivateHostedZoneResponseToTerraform(struct?: CloudGatewayPrivateDnsGcpPrivateHostedZoneResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayPrivateDnsGcpPrivateHostedZoneResponseToHclTerraform(struct?: CloudGatewayPrivateDnsGcpPrivateHostedZoneResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayPrivateDnsGcpPrivateHostedZoneResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayPrivateDnsGcpPrivateHostedZoneResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayPrivateDnsGcpPrivateHostedZoneResponse | undefined) {
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

  // private_dns_attachment_config - computed: true, optional: false, required: false
  private _privateDnsAttachmentConfig = new CloudGatewayPrivateDnsGcpPrivateHostedZoneResponsePrivateDnsAttachmentConfigOutputReference(this, "private_dns_attachment_config");
  public get privateDnsAttachmentConfig() {
    return this._privateDnsAttachmentConfig;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_metadata - computed: true, optional: false, required: false
  private _stateMetadata = new CloudGatewayPrivateDnsGcpPrivateHostedZoneResponseStateMetadataOutputReference(this, "state_metadata");
  public get stateMetadata() {
    return this._stateMetadata;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfig {
  /**
  * IP addresses of remote DNS servers used by the Private DNS Resolver for DNS resolution. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns#remote_dns_server_ip_addresses CloudGatewayPrivateDns#remote_dns_server_ip_addresses}
  */
  readonly remoteDnsServerIpAddresses: string[];
}

export function cloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfigToTerraform(struct?: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remote_dns_server_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteDnsServerIpAddresses),
  }
}


export function cloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfigToHclTerraform(struct?: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remoteDnsServerIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDnsServerIpAddresses = this._remoteDnsServerIpAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remoteDnsServerIpAddresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remoteDnsServerIpAddresses = value.remoteDnsServerIpAddresses;
    }
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

export class CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfigMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfig } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfigOutputReference {
    return new CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfigOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfig {
  /**
  * Object that contains mappings from proxied internal domains to remote DNS server IP address for a Private DNS Resolver. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns#dns_config CloudGatewayPrivateDns#dns_config}
  */
  readonly dnsConfig: { [key: string]: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfig } | cdktf.IResolvable;
  /**
  * must be "aws-outbound-resolver"; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns#kind CloudGatewayPrivateDns#kind}
  */
  readonly kind: string;
}

export function cloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigToTerraform(struct?: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_config: cdktf.hashMapper(cloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfigToTerraform)(struct!.dnsConfig),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function cloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigToHclTerraform(struct?: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_config: {
      value: cdktf.hashMapperHcl(cloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfigToHclTerraform)(struct!.dnsConfig),
      isBlock: true,
      type: "map",
      storageClassType: "CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfigMap",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsConfig.internalValue = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._kind = value.kind;
    }
  }

  // dns_config - computed: false, optional: false, required: true
  private _dnsConfig = new CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfigMap(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: { [key: string]: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigDnsConfig } | cdktf.IResolvable) {
    this._dnsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
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
}
export interface CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateHostedZoneAttachmentConfig {
  /**
  * AWS Hosted Zone to create attachment to. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns#hosted_zone_id CloudGatewayPrivateDns#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * must be "aws-private-hosted-zone-attachment"; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns#kind CloudGatewayPrivateDns#kind}
  */
  readonly kind: string;
}

export function cloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateHostedZoneAttachmentConfigToTerraform(struct?: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateHostedZoneAttachmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosted_zone_id: cdktf.stringToTerraform(struct!.hostedZoneId),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function cloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateHostedZoneAttachmentConfigToHclTerraform(struct?: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateHostedZoneAttachmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosted_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.hostedZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateHostedZoneAttachmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateHostedZoneAttachmentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostedZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedZoneId = this._hostedZoneId;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateHostedZoneAttachmentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostedZoneId = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostedZoneId = value.hostedZoneId;
      this._kind = value.kind;
    }
  }

  // hosted_zone_id - computed: false, optional: false, required: true
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
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
}
export interface CloudGatewayPrivateDnsPrivateDnsAttachmentConfigGcpPrivateHostedZoneAttachmentConfig {
  /**
  * Domain name to create attachment to. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns#domain_name CloudGatewayPrivateDns#domain_name}
  */
  readonly domainName: string;
  /**
  * must be "gcp-private-hosted-zone-attachment"; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns#kind CloudGatewayPrivateDns#kind}
  */
  readonly kind: string;
  /**
  * Customer's GCP Project ID. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns#peer_project_id CloudGatewayPrivateDns#peer_project_id}
  */
  readonly peerProjectId: string;
  /**
  * Customer's GCP VPC ID. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns#peer_vpc_name CloudGatewayPrivateDns#peer_vpc_name}
  */
  readonly peerVpcName: string;
}

export function cloudGatewayPrivateDnsPrivateDnsAttachmentConfigGcpPrivateHostedZoneAttachmentConfigToTerraform(struct?: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigGcpPrivateHostedZoneAttachmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    kind: cdktf.stringToTerraform(struct!.kind),
    peer_project_id: cdktf.stringToTerraform(struct!.peerProjectId),
    peer_vpc_name: cdktf.stringToTerraform(struct!.peerVpcName),
  }
}


export function cloudGatewayPrivateDnsPrivateDnsAttachmentConfigGcpPrivateHostedZoneAttachmentConfigToHclTerraform(struct?: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigGcpPrivateHostedZoneAttachmentConfig | cdktf.IResolvable): any {
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

export class CloudGatewayPrivateDnsPrivateDnsAttachmentConfigGcpPrivateHostedZoneAttachmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayPrivateDnsPrivateDnsAttachmentConfigGcpPrivateHostedZoneAttachmentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
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

  public set internalValue(value: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigGcpPrivateHostedZoneAttachmentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
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
      this._domainName = value.domainName;
      this._kind = value.kind;
      this._peerProjectId = value.peerProjectId;
      this._peerVpcName = value.peerVpcName;
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
export interface CloudGatewayPrivateDnsPrivateDnsAttachmentConfig {
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns#aws_private_dns_resolver_attachment_config CloudGatewayPrivateDns#aws_private_dns_resolver_attachment_config}
  */
  readonly awsPrivateDnsResolverAttachmentConfig?: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfig;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns#aws_private_hosted_zone_attachment_config CloudGatewayPrivateDns#aws_private_hosted_zone_attachment_config}
  */
  readonly awsPrivateHostedZoneAttachmentConfig?: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateHostedZoneAttachmentConfig;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns#gcp_private_hosted_zone_attachment_config CloudGatewayPrivateDns#gcp_private_hosted_zone_attachment_config}
  */
  readonly gcpPrivateHostedZoneAttachmentConfig?: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigGcpPrivateHostedZoneAttachmentConfig;
}

export function cloudGatewayPrivateDnsPrivateDnsAttachmentConfigToTerraform(struct?: CloudGatewayPrivateDnsPrivateDnsAttachmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_private_dns_resolver_attachment_config: cloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigToTerraform(struct!.awsPrivateDnsResolverAttachmentConfig),
    aws_private_hosted_zone_attachment_config: cloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateHostedZoneAttachmentConfigToTerraform(struct!.awsPrivateHostedZoneAttachmentConfig),
    gcp_private_hosted_zone_attachment_config: cloudGatewayPrivateDnsPrivateDnsAttachmentConfigGcpPrivateHostedZoneAttachmentConfigToTerraform(struct!.gcpPrivateHostedZoneAttachmentConfig),
  }
}


export function cloudGatewayPrivateDnsPrivateDnsAttachmentConfigToHclTerraform(struct?: CloudGatewayPrivateDnsPrivateDnsAttachmentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_private_dns_resolver_attachment_config: {
      value: cloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigToHclTerraform(struct!.awsPrivateDnsResolverAttachmentConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfig",
    },
    aws_private_hosted_zone_attachment_config: {
      value: cloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateHostedZoneAttachmentConfigToHclTerraform(struct!.awsPrivateHostedZoneAttachmentConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateHostedZoneAttachmentConfig",
    },
    gcp_private_hosted_zone_attachment_config: {
      value: cloudGatewayPrivateDnsPrivateDnsAttachmentConfigGcpPrivateHostedZoneAttachmentConfigToHclTerraform(struct!.gcpPrivateHostedZoneAttachmentConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudGatewayPrivateDnsPrivateDnsAttachmentConfigGcpPrivateHostedZoneAttachmentConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayPrivateDnsPrivateDnsAttachmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayPrivateDnsPrivateDnsAttachmentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsPrivateDnsResolverAttachmentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsPrivateDnsResolverAttachmentConfig = this._awsPrivateDnsResolverAttachmentConfig?.internalValue;
    }
    if (this._awsPrivateHostedZoneAttachmentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsPrivateHostedZoneAttachmentConfig = this._awsPrivateHostedZoneAttachmentConfig?.internalValue;
    }
    if (this._gcpPrivateHostedZoneAttachmentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpPrivateHostedZoneAttachmentConfig = this._gcpPrivateHostedZoneAttachmentConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayPrivateDnsPrivateDnsAttachmentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsPrivateDnsResolverAttachmentConfig.internalValue = undefined;
      this._awsPrivateHostedZoneAttachmentConfig.internalValue = undefined;
      this._gcpPrivateHostedZoneAttachmentConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsPrivateDnsResolverAttachmentConfig.internalValue = value.awsPrivateDnsResolverAttachmentConfig;
      this._awsPrivateHostedZoneAttachmentConfig.internalValue = value.awsPrivateHostedZoneAttachmentConfig;
      this._gcpPrivateHostedZoneAttachmentConfig.internalValue = value.gcpPrivateHostedZoneAttachmentConfig;
    }
  }

  // aws_private_dns_resolver_attachment_config - computed: false, optional: true, required: false
  private _awsPrivateDnsResolverAttachmentConfig = new CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfigOutputReference(this, "aws_private_dns_resolver_attachment_config");
  public get awsPrivateDnsResolverAttachmentConfig() {
    return this._awsPrivateDnsResolverAttachmentConfig;
  }
  public putAwsPrivateDnsResolverAttachmentConfig(value: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateDnsResolverAttachmentConfig) {
    this._awsPrivateDnsResolverAttachmentConfig.internalValue = value;
  }
  public resetAwsPrivateDnsResolverAttachmentConfig() {
    this._awsPrivateDnsResolverAttachmentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPrivateDnsResolverAttachmentConfigInput() {
    return this._awsPrivateDnsResolverAttachmentConfig.internalValue;
  }

  // aws_private_hosted_zone_attachment_config - computed: false, optional: true, required: false
  private _awsPrivateHostedZoneAttachmentConfig = new CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateHostedZoneAttachmentConfigOutputReference(this, "aws_private_hosted_zone_attachment_config");
  public get awsPrivateHostedZoneAttachmentConfig() {
    return this._awsPrivateHostedZoneAttachmentConfig;
  }
  public putAwsPrivateHostedZoneAttachmentConfig(value: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigAwsPrivateHostedZoneAttachmentConfig) {
    this._awsPrivateHostedZoneAttachmentConfig.internalValue = value;
  }
  public resetAwsPrivateHostedZoneAttachmentConfig() {
    this._awsPrivateHostedZoneAttachmentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPrivateHostedZoneAttachmentConfigInput() {
    return this._awsPrivateHostedZoneAttachmentConfig.internalValue;
  }

  // gcp_private_hosted_zone_attachment_config - computed: false, optional: true, required: false
  private _gcpPrivateHostedZoneAttachmentConfig = new CloudGatewayPrivateDnsPrivateDnsAttachmentConfigGcpPrivateHostedZoneAttachmentConfigOutputReference(this, "gcp_private_hosted_zone_attachment_config");
  public get gcpPrivateHostedZoneAttachmentConfig() {
    return this._gcpPrivateHostedZoneAttachmentConfig;
  }
  public putGcpPrivateHostedZoneAttachmentConfig(value: CloudGatewayPrivateDnsPrivateDnsAttachmentConfigGcpPrivateHostedZoneAttachmentConfig) {
    this._gcpPrivateHostedZoneAttachmentConfig.internalValue = value;
  }
  public resetGcpPrivateHostedZoneAttachmentConfig() {
    this._gcpPrivateHostedZoneAttachmentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpPrivateHostedZoneAttachmentConfigInput() {
    return this._gcpPrivateHostedZoneAttachmentConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns konnect_cloud_gateway_private_dns}
*/
export class CloudGatewayPrivateDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_cloud_gateway_private_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudGatewayPrivateDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudGatewayPrivateDns to import
  * @param importFromId The id of the existing CloudGatewayPrivateDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudGatewayPrivateDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_cloud_gateway_private_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_private_dns konnect_cloud_gateway_private_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudGatewayPrivateDnsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudGatewayPrivateDnsConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_cloud_gateway_private_dns',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._networkId = config.networkId;
    this._privateDnsAttachmentConfig.internalValue = config.privateDnsAttachmentConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_private_dns_resolver_response - computed: true, optional: false, required: false
  private _awsPrivateDnsResolverResponse = new CloudGatewayPrivateDnsAwsPrivateDnsResolverResponseOutputReference(this, "aws_private_dns_resolver_response");
  public get awsPrivateDnsResolverResponse() {
    return this._awsPrivateDnsResolverResponse;
  }

  // aws_private_hosted_zone_response - computed: true, optional: false, required: false
  private _awsPrivateHostedZoneResponse = new CloudGatewayPrivateDnsAwsPrivateHostedZoneResponseOutputReference(this, "aws_private_hosted_zone_response");
  public get awsPrivateHostedZoneResponse() {
    return this._awsPrivateHostedZoneResponse;
  }

  // entity_version - computed: true, optional: false, required: false
  public get entityVersion() {
    return this.getNumberAttribute('entity_version');
  }

  // gcp_private_hosted_zone_response - computed: true, optional: false, required: false
  private _gcpPrivateHostedZoneResponse = new CloudGatewayPrivateDnsGcpPrivateHostedZoneResponseOutputReference(this, "gcp_private_hosted_zone_response");
  public get gcpPrivateHostedZoneResponse() {
    return this._gcpPrivateHostedZoneResponse;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // private_dns_attachment_config - computed: false, optional: true, required: false
  private _privateDnsAttachmentConfig = new CloudGatewayPrivateDnsPrivateDnsAttachmentConfigOutputReference(this, "private_dns_attachment_config");
  public get privateDnsAttachmentConfig() {
    return this._privateDnsAttachmentConfig;
  }
  public putPrivateDnsAttachmentConfig(value: CloudGatewayPrivateDnsPrivateDnsAttachmentConfig) {
    this._privateDnsAttachmentConfig.internalValue = value;
  }
  public resetPrivateDnsAttachmentConfig() {
    this._privateDnsAttachmentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsAttachmentConfigInput() {
    return this._privateDnsAttachmentConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      private_dns_attachment_config: cloudGatewayPrivateDnsPrivateDnsAttachmentConfigToTerraform(this._privateDnsAttachmentConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_dns_attachment_config: {
        value: cloudGatewayPrivateDnsPrivateDnsAttachmentConfigToHclTerraform(this._privateDnsAttachmentConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudGatewayPrivateDnsPrivateDnsAttachmentConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
