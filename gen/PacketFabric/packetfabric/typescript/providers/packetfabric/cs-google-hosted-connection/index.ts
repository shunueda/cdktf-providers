// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsGoogleHostedConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID for the billing account that should be billed. Can also be set with the PF_ACCOUNT_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#account_uuid CsGoogleHostedConnection#account_uuid}
  */
  readonly accountUuid: string;
  /**
  * A brief description of this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#description CsGoogleHostedConnection#description}
  */
  readonly description: string;
  /**
  * The Google pairing key to use for this connection. This is provided when you create the VLAN attachment from the Google Cloud console. Required if not using cloud_settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#google_pairing_key CsGoogleHostedConnection#google_pairing_key}
  */
  readonly googlePairingKey?: string;
  /**
  * The name you used for your VLAN attachment in Google. Required if not using cloud_settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#google_vlan_attachment_name CsGoogleHostedConnection#google_vlan_attachment_name}
  */
  readonly googleVlanAttachmentName?: string;
  /**
  * Label value linked to an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#labels CsGoogleHostedConnection#labels}
  */
  readonly labels?: string[];
  /**
  * Purchase order number or identifier of a service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#po_number CsGoogleHostedConnection#po_number}
  */
  readonly poNumber?: string;
  /**
  * The POP in which the hosted connection should be provisioned (the cloud on-ramp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#pop CsGoogleHostedConnection#pop}
  */
  readonly pop: string;
  /**
  * The circuit ID of the PacketFabric port you wish to connect to Google. This starts with "PF-AP-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#port CsGoogleHostedConnection#port}
  */
  readonly port: string;
  /**
  * The speed of the new connection.
  * 
  * 	 Available: 50Mbps 100Mbps 200Mbps 300Mbps 400Mbps 500Mbps 1Gbps 2Gbps 5Gbps 10Gbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#speed CsGoogleHostedConnection#speed}
  */
  readonly speed: string;
  /**
  * Valid S-VLAN range is from 4-4094, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#src_svlan CsGoogleHostedConnection#src_svlan}
  */
  readonly srcSvlan?: number;
  /**
  * Valid VLAN range is from 4-4094, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#vlan CsGoogleHostedConnection#vlan}
  */
  readonly vlan: number;
  /**
  * cloud_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#cloud_settings CsGoogleHostedConnection#cloud_settings}
  */
  readonly cloudSettings?: CsGoogleHostedConnectionCloudSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#timeouts CsGoogleHostedConnection#timeouts}
  */
  readonly timeouts?: CsGoogleHostedConnectionTimeouts;
}
export interface CsGoogleHostedConnectionCloudSettingsBgpSettings {
  /**
  * The customer ASN of this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#customer_asn CsGoogleHostedConnection#customer_asn}
  */
  readonly customerAsn: number;
  /**
  * An array of prefixes that will be advertised. Advertise Mode set to DEFAULT if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#google_advertised_ip_ranges CsGoogleHostedConnection#google_advertised_ip_ranges}
  */
  readonly googleAdvertisedIpRanges?: string[];
  /**
  * The Keepalive Interval. Must be between 20 and 60. Defaults: 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#google_keepalive_interval CsGoogleHostedConnection#google_keepalive_interval}
  */
  readonly googleKeepaliveInterval?: number;
  /**
  * The MD5 value of the authenticated BGP sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#md5 CsGoogleHostedConnection#md5}
  */
  readonly md5?: string;
  /**
  * The Google ASN of this connection. Must be 16550, between 64512 and 65534, or between 4200000000 and 4294967294.Defaults: 16550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#remote_asn CsGoogleHostedConnection#remote_asn}
  */
  readonly remoteAsn?: number;
}

export function csGoogleHostedConnectionCloudSettingsBgpSettingsToTerraform(struct?: CsGoogleHostedConnectionCloudSettingsBgpSettingsOutputReference | CsGoogleHostedConnectionCloudSettingsBgpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_asn: cdktf.numberToTerraform(struct!.customerAsn),
    google_advertised_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.googleAdvertisedIpRanges),
    google_keepalive_interval: cdktf.numberToTerraform(struct!.googleKeepaliveInterval),
    md5: cdktf.stringToTerraform(struct!.md5),
    remote_asn: cdktf.numberToTerraform(struct!.remoteAsn),
  }
}


export function csGoogleHostedConnectionCloudSettingsBgpSettingsToHclTerraform(struct?: CsGoogleHostedConnectionCloudSettingsBgpSettingsOutputReference | CsGoogleHostedConnectionCloudSettingsBgpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_asn: {
      value: cdktf.numberToHclTerraform(struct!.customerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    google_advertised_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.googleAdvertisedIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    google_keepalive_interval: {
      value: cdktf.numberToHclTerraform(struct!.googleKeepaliveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    md5: {
      value: cdktf.stringToHclTerraform(struct!.md5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_asn: {
      value: cdktf.numberToHclTerraform(struct!.remoteAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsGoogleHostedConnectionCloudSettingsBgpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsGoogleHostedConnectionCloudSettingsBgpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerAsn = this._customerAsn;
    }
    if (this._googleAdvertisedIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleAdvertisedIpRanges = this._googleAdvertisedIpRanges;
    }
    if (this._googleKeepaliveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleKeepaliveInterval = this._googleKeepaliveInterval;
    }
    if (this._md5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5;
    }
    if (this._remoteAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAsn = this._remoteAsn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsGoogleHostedConnectionCloudSettingsBgpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customerAsn = undefined;
      this._googleAdvertisedIpRanges = undefined;
      this._googleKeepaliveInterval = undefined;
      this._md5 = undefined;
      this._remoteAsn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customerAsn = value.customerAsn;
      this._googleAdvertisedIpRanges = value.googleAdvertisedIpRanges;
      this._googleKeepaliveInterval = value.googleKeepaliveInterval;
      this._md5 = value.md5;
      this._remoteAsn = value.remoteAsn;
    }
  }

  // customer_asn - computed: false, optional: false, required: true
  private _customerAsn?: number; 
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }
  public set customerAsn(value: number) {
    this._customerAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAsnInput() {
    return this._customerAsn;
  }

  // google_advertised_ip_ranges - computed: false, optional: true, required: false
  private _googleAdvertisedIpRanges?: string[]; 
  public get googleAdvertisedIpRanges() {
    return this.getListAttribute('google_advertised_ip_ranges');
  }
  public set googleAdvertisedIpRanges(value: string[]) {
    this._googleAdvertisedIpRanges = value;
  }
  public resetGoogleAdvertisedIpRanges() {
    this._googleAdvertisedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAdvertisedIpRangesInput() {
    return this._googleAdvertisedIpRanges;
  }

  // google_keepalive_interval - computed: false, optional: true, required: false
  private _googleKeepaliveInterval?: number; 
  public get googleKeepaliveInterval() {
    return this.getNumberAttribute('google_keepalive_interval');
  }
  public set googleKeepaliveInterval(value: number) {
    this._googleKeepaliveInterval = value;
  }
  public resetGoogleKeepaliveInterval() {
    this._googleKeepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleKeepaliveIntervalInput() {
    return this._googleKeepaliveInterval;
  }

  // md5 - computed: false, optional: true, required: false
  private _md5?: string; 
  public get md5() {
    return this.getStringAttribute('md5');
  }
  public set md5(value: string) {
    this._md5 = value;
  }
  public resetMd5() {
    this._md5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5;
  }

  // remote_asn - computed: false, optional: true, required: false
  private _remoteAsn?: number; 
  public get remoteAsn() {
    return this.getNumberAttribute('remote_asn');
  }
  public set remoteAsn(value: number) {
    this._remoteAsn = value;
  }
  public resetRemoteAsn() {
    this._remoteAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsnInput() {
    return this._remoteAsn;
  }
}
export interface CsGoogleHostedConnectionCloudSettings {
  /**
  * The UUID of the credentials to be used with this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#credentials_uuid CsGoogleHostedConnection#credentials_uuid}
  */
  readonly credentialsUuid: string;
  /**
  * The Google Cloud Router Attachment name. No whitespace allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#google_cloud_router_name CsGoogleHostedConnection#google_cloud_router_name}
  */
  readonly googleCloudRouterName: string;
  /**
  * The Google Edge Availability Domain. Must be 1 (primary) or 2 (secondary).
  * 
  * 	Enum: ["1", "2"] Defaults: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#google_edge_availability_domain CsGoogleHostedConnection#google_edge_availability_domain}
  */
  readonly googleEdgeAvailabilityDomain?: number;
  /**
  * The Google Project Id to be used. If not present the project id of the credentials will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#google_project_id CsGoogleHostedConnection#google_project_id}
  */
  readonly googleProjectId?: string;
  /**
  * The Google region that should be used.
  * 
  * 	Enum: ["asia-east1", "asia-east2", "asia-northeast1", "asia-northeast2", "asia-northeast3", "asia-south1", "asia-southeast1", "asia-southeast2", "australia-southeast1", "europe-north1", "europe-west1", "europe-west2", "europe-west3", "europe-west4", "europe-west6", "northamerica-northeast1", "southamerica-east1", "us-central1", "us-east1", "us-east4", "us-west1", "us-west2", "us-west3", "us-west4"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#google_region CsGoogleHostedConnection#google_region}
  */
  readonly googleRegion: string;
  /**
  * The Google Interconnect Attachment name. No whitespace allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#google_vlan_attachment_name CsGoogleHostedConnection#google_vlan_attachment_name}
  */
  readonly googleVlanAttachmentName: string;
  /**
  * The Google VPC name. Required if a new router needs to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#google_vpc_name CsGoogleHostedConnection#google_vpc_name}
  */
  readonly googleVpcName?: string;
  /**
  * Maximum Transmission Unit this port supports (size of the largest supported PDU).
  * 
  * 	Enum: ["1500", "1440"] Defaults: 1500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#mtu CsGoogleHostedConnection#mtu}
  */
  readonly mtu?: number;
  /**
  * bgp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#bgp_settings CsGoogleHostedConnection#bgp_settings}
  */
  readonly bgpSettings: CsGoogleHostedConnectionCloudSettingsBgpSettings;
}

export function csGoogleHostedConnectionCloudSettingsToTerraform(struct?: CsGoogleHostedConnectionCloudSettingsOutputReference | CsGoogleHostedConnectionCloudSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_uuid: cdktf.stringToTerraform(struct!.credentialsUuid),
    google_cloud_router_name: cdktf.stringToTerraform(struct!.googleCloudRouterName),
    google_edge_availability_domain: cdktf.numberToTerraform(struct!.googleEdgeAvailabilityDomain),
    google_project_id: cdktf.stringToTerraform(struct!.googleProjectId),
    google_region: cdktf.stringToTerraform(struct!.googleRegion),
    google_vlan_attachment_name: cdktf.stringToTerraform(struct!.googleVlanAttachmentName),
    google_vpc_name: cdktf.stringToTerraform(struct!.googleVpcName),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    bgp_settings: csGoogleHostedConnectionCloudSettingsBgpSettingsToTerraform(struct!.bgpSettings),
  }
}


export function csGoogleHostedConnectionCloudSettingsToHclTerraform(struct?: CsGoogleHostedConnectionCloudSettingsOutputReference | CsGoogleHostedConnectionCloudSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_uuid: {
      value: cdktf.stringToHclTerraform(struct!.credentialsUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_cloud_router_name: {
      value: cdktf.stringToHclTerraform(struct!.googleCloudRouterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_edge_availability_domain: {
      value: cdktf.numberToHclTerraform(struct!.googleEdgeAvailabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    google_project_id: {
      value: cdktf.stringToHclTerraform(struct!.googleProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_region: {
      value: cdktf.stringToHclTerraform(struct!.googleRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_vlan_attachment_name: {
      value: cdktf.stringToHclTerraform(struct!.googleVlanAttachmentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_vpc_name: {
      value: cdktf.stringToHclTerraform(struct!.googleVpcName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgp_settings: {
      value: csGoogleHostedConnectionCloudSettingsBgpSettingsToHclTerraform(struct!.bgpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CsGoogleHostedConnectionCloudSettingsBgpSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsGoogleHostedConnectionCloudSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsGoogleHostedConnectionCloudSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsUuid = this._credentialsUuid;
    }
    if (this._googleCloudRouterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudRouterName = this._googleCloudRouterName;
    }
    if (this._googleEdgeAvailabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleEdgeAvailabilityDomain = this._googleEdgeAvailabilityDomain;
    }
    if (this._googleProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleProjectId = this._googleProjectId;
    }
    if (this._googleRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleRegion = this._googleRegion;
    }
    if (this._googleVlanAttachmentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleVlanAttachmentName = this._googleVlanAttachmentName;
    }
    if (this._googleVpcName !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleVpcName = this._googleVpcName;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._bgpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpSettings = this._bgpSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsGoogleHostedConnectionCloudSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialsUuid = undefined;
      this._googleCloudRouterName = undefined;
      this._googleEdgeAvailabilityDomain = undefined;
      this._googleProjectId = undefined;
      this._googleRegion = undefined;
      this._googleVlanAttachmentName = undefined;
      this._googleVpcName = undefined;
      this._mtu = undefined;
      this._bgpSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialsUuid = value.credentialsUuid;
      this._googleCloudRouterName = value.googleCloudRouterName;
      this._googleEdgeAvailabilityDomain = value.googleEdgeAvailabilityDomain;
      this._googleProjectId = value.googleProjectId;
      this._googleRegion = value.googleRegion;
      this._googleVlanAttachmentName = value.googleVlanAttachmentName;
      this._googleVpcName = value.googleVpcName;
      this._mtu = value.mtu;
      this._bgpSettings.internalValue = value.bgpSettings;
    }
  }

  // credentials_uuid - computed: false, optional: false, required: true
  private _credentialsUuid?: string; 
  public get credentialsUuid() {
    return this.getStringAttribute('credentials_uuid');
  }
  public set credentialsUuid(value: string) {
    this._credentialsUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsUuidInput() {
    return this._credentialsUuid;
  }

  // google_cloud_router_name - computed: false, optional: false, required: true
  private _googleCloudRouterName?: string; 
  public get googleCloudRouterName() {
    return this.getStringAttribute('google_cloud_router_name');
  }
  public set googleCloudRouterName(value: string) {
    this._googleCloudRouterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudRouterNameInput() {
    return this._googleCloudRouterName;
  }

  // google_edge_availability_domain - computed: false, optional: true, required: false
  private _googleEdgeAvailabilityDomain?: number; 
  public get googleEdgeAvailabilityDomain() {
    return this.getNumberAttribute('google_edge_availability_domain');
  }
  public set googleEdgeAvailabilityDomain(value: number) {
    this._googleEdgeAvailabilityDomain = value;
  }
  public resetGoogleEdgeAvailabilityDomain() {
    this._googleEdgeAvailabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleEdgeAvailabilityDomainInput() {
    return this._googleEdgeAvailabilityDomain;
  }

  // google_project_id - computed: false, optional: true, required: false
  private _googleProjectId?: string; 
  public get googleProjectId() {
    return this.getStringAttribute('google_project_id');
  }
  public set googleProjectId(value: string) {
    this._googleProjectId = value;
  }
  public resetGoogleProjectId() {
    this._googleProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleProjectIdInput() {
    return this._googleProjectId;
  }

  // google_region - computed: false, optional: false, required: true
  private _googleRegion?: string; 
  public get googleRegion() {
    return this.getStringAttribute('google_region');
  }
  public set googleRegion(value: string) {
    this._googleRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleRegionInput() {
    return this._googleRegion;
  }

  // google_vlan_attachment_name - computed: false, optional: false, required: true
  private _googleVlanAttachmentName?: string; 
  public get googleVlanAttachmentName() {
    return this.getStringAttribute('google_vlan_attachment_name');
  }
  public set googleVlanAttachmentName(value: string) {
    this._googleVlanAttachmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleVlanAttachmentNameInput() {
    return this._googleVlanAttachmentName;
  }

  // google_vpc_name - computed: false, optional: true, required: false
  private _googleVpcName?: string; 
  public get googleVpcName() {
    return this.getStringAttribute('google_vpc_name');
  }
  public set googleVpcName(value: string) {
    this._googleVpcName = value;
  }
  public resetGoogleVpcName() {
    this._googleVpcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleVpcNameInput() {
    return this._googleVpcName;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // bgp_settings - computed: false, optional: false, required: true
  private _bgpSettings = new CsGoogleHostedConnectionCloudSettingsBgpSettingsOutputReference(this, "bgp_settings");
  public get bgpSettings() {
    return this._bgpSettings;
  }
  public putBgpSettings(value: CsGoogleHostedConnectionCloudSettingsBgpSettings) {
    this._bgpSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSettingsInput() {
    return this._bgpSettings.internalValue;
  }
}
export interface CsGoogleHostedConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#create CsGoogleHostedConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#delete CsGoogleHostedConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#read CsGoogleHostedConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#update CsGoogleHostedConnection#update}
  */
  readonly update?: string;
}

export function csGoogleHostedConnectionTimeoutsToTerraform(struct?: CsGoogleHostedConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function csGoogleHostedConnectionTimeoutsToHclTerraform(struct?: CsGoogleHostedConnectionTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class CsGoogleHostedConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsGoogleHostedConnectionTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsGoogleHostedConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection packetfabric_cs_google_hosted_connection}
*/
export class CsGoogleHostedConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_cs_google_hosted_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsGoogleHostedConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsGoogleHostedConnection to import
  * @param importFromId The id of the existing CsGoogleHostedConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsGoogleHostedConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_cs_google_hosted_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_google_hosted_connection packetfabric_cs_google_hosted_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsGoogleHostedConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: CsGoogleHostedConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_cs_google_hosted_connection',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountUuid = config.accountUuid;
    this._description = config.description;
    this._googlePairingKey = config.googlePairingKey;
    this._googleVlanAttachmentName = config.googleVlanAttachmentName;
    this._labels = config.labels;
    this._poNumber = config.poNumber;
    this._pop = config.pop;
    this._port = config.port;
    this._speed = config.speed;
    this._srcSvlan = config.srcSvlan;
    this._vlan = config.vlan;
    this._cloudSettings.internalValue = config.cloudSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_uuid - computed: false, optional: false, required: true
  private _accountUuid?: string; 
  public get accountUuid() {
    return this.getStringAttribute('account_uuid');
  }
  public set accountUuid(value: string) {
    this._accountUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUuidInput() {
    return this._accountUuid;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // etl - computed: true, optional: false, required: false
  public get etl() {
    return this.getNumberAttribute('etl');
  }

  // google_pairing_key - computed: false, optional: true, required: false
  private _googlePairingKey?: string; 
  public get googlePairingKey() {
    return this.getStringAttribute('google_pairing_key');
  }
  public set googlePairingKey(value: string) {
    this._googlePairingKey = value;
  }
  public resetGooglePairingKey() {
    this._googlePairingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googlePairingKeyInput() {
    return this._googlePairingKey;
  }

  // google_vlan_attachment_name - computed: false, optional: true, required: false
  private _googleVlanAttachmentName?: string; 
  public get googleVlanAttachmentName() {
    return this.getStringAttribute('google_vlan_attachment_name');
  }
  public set googleVlanAttachmentName(value: string) {
    this._googleVlanAttachmentName = value;
  }
  public resetGoogleVlanAttachmentName() {
    this._googleVlanAttachmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleVlanAttachmentNameInput() {
    return this._googleVlanAttachmentName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // po_number - computed: false, optional: true, required: false
  private _poNumber?: string; 
  public get poNumber() {
    return this.getStringAttribute('po_number');
  }
  public set poNumber(value: string) {
    this._poNumber = value;
  }
  public resetPoNumber() {
    this._poNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poNumberInput() {
    return this._poNumber;
  }

  // pop - computed: false, optional: false, required: true
  private _pop?: string; 
  public get pop() {
    return this.getStringAttribute('pop');
  }
  public set pop(value: string) {
    this._pop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get popInput() {
    return this._pop;
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

  // speed - computed: false, optional: false, required: true
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // src_svlan - computed: false, optional: true, required: false
  private _srcSvlan?: number; 
  public get srcSvlan() {
    return this.getNumberAttribute('src_svlan');
  }
  public set srcSvlan(value: number) {
    this._srcSvlan = value;
  }
  public resetSrcSvlan() {
    this._srcSvlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSvlanInput() {
    return this._srcSvlan;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // cloud_settings - computed: false, optional: true, required: false
  private _cloudSettings = new CsGoogleHostedConnectionCloudSettingsOutputReference(this, "cloud_settings");
  public get cloudSettings() {
    return this._cloudSettings;
  }
  public putCloudSettings(value: CsGoogleHostedConnectionCloudSettings) {
    this._cloudSettings.internalValue = value;
  }
  public resetCloudSettings() {
    this._cloudSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSettingsInput() {
    return this._cloudSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CsGoogleHostedConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CsGoogleHostedConnectionTimeouts) {
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
      account_uuid: cdktf.stringToTerraform(this._accountUuid),
      description: cdktf.stringToTerraform(this._description),
      google_pairing_key: cdktf.stringToTerraform(this._googlePairingKey),
      google_vlan_attachment_name: cdktf.stringToTerraform(this._googleVlanAttachmentName),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      po_number: cdktf.stringToTerraform(this._poNumber),
      pop: cdktf.stringToTerraform(this._pop),
      port: cdktf.stringToTerraform(this._port),
      speed: cdktf.stringToTerraform(this._speed),
      src_svlan: cdktf.numberToTerraform(this._srcSvlan),
      vlan: cdktf.numberToTerraform(this._vlan),
      cloud_settings: csGoogleHostedConnectionCloudSettingsToTerraform(this._cloudSettings.internalValue),
      timeouts: csGoogleHostedConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_uuid: {
        value: cdktf.stringToHclTerraform(this._accountUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      google_pairing_key: {
        value: cdktf.stringToHclTerraform(this._googlePairingKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      google_vlan_attachment_name: {
        value: cdktf.stringToHclTerraform(this._googleVlanAttachmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      po_number: {
        value: cdktf.stringToHclTerraform(this._poNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pop: {
        value: cdktf.stringToHclTerraform(this._pop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_svlan: {
        value: cdktf.numberToHclTerraform(this._srcSvlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cloud_settings: {
        value: csGoogleHostedConnectionCloudSettingsToHclTerraform(this._cloudSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsGoogleHostedConnectionCloudSettingsList",
      },
      timeouts: {
        value: csGoogleHostedConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CsGoogleHostedConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
