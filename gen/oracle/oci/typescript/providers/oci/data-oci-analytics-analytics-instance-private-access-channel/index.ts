// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/analytics_analytics_instance_private_access_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/analytics_analytics_instance_private_access_channel#analytics_instance_id DataOciAnalyticsAnalyticsInstancePrivateAccessChannel#analytics_instance_id}
  */
  readonly analyticsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/analytics_analytics_instance_private_access_channel#private_access_channel_key DataOciAnalyticsAnalyticsInstancePrivateAccessChannel#private_access_channel_key}
  */
  readonly privateAccessChannelKey: string;
}
export interface DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones {
}

export function dataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesToTerraform(struct?: DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesToHclTerraform(struct?: DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dns_zone - computed: true, optional: false, required: false
  public get dnsZone() {
    return this.getStringAttribute('dns_zone');
  }
}

export class DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference {
    return new DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts {
}

export function dataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsToTerraform(struct?: DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsToHclTerraform(struct?: DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // scan_hostname - computed: true, optional: false, required: false
  public get scanHostname() {
    return this.getStringAttribute('scan_hostname');
  }

  // scan_port - computed: true, optional: false, required: false
  public get scanPort() {
    return this.getNumberAttribute('scan_port');
  }
}

export class DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference {
    return new DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/analytics_analytics_instance_private_access_channel oci_analytics_analytics_instance_private_access_channel}
*/
export class DataOciAnalyticsAnalyticsInstancePrivateAccessChannel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_analytics_analytics_instance_private_access_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciAnalyticsAnalyticsInstancePrivateAccessChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciAnalyticsAnalyticsInstancePrivateAccessChannel to import
  * @param importFromId The id of the existing DataOciAnalyticsAnalyticsInstancePrivateAccessChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/analytics_analytics_instance_private_access_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciAnalyticsAnalyticsInstancePrivateAccessChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_analytics_analytics_instance_private_access_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/analytics_analytics_instance_private_access_channel oci_analytics_analytics_instance_private_access_channel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_analytics_analytics_instance_private_access_channel',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._analyticsInstanceId = config.analyticsInstanceId;
    this._privateAccessChannelKey = config.privateAccessChannelKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytics_instance_id - computed: false, optional: false, required: true
  private _analyticsInstanceId?: string; 
  public get analyticsInstanceId() {
    return this.getStringAttribute('analytics_instance_id');
  }
  public set analyticsInstanceId(value: string) {
    this._analyticsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsInstanceIdInput() {
    return this._analyticsInstanceId;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // egress_source_ip_addresses - computed: true, optional: false, required: false
  public get egressSourceIpAddresses() {
    return this.getListAttribute('egress_source_ip_addresses');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // network_security_group_ids - computed: true, optional: false, required: false
  public get networkSecurityGroupIds() {
    return this.getListAttribute('network_security_group_ids');
  }

  // private_access_channel_key - computed: false, optional: false, required: true
  private _privateAccessChannelKey?: string; 
  public get privateAccessChannelKey() {
    return this.getStringAttribute('private_access_channel_key');
  }
  public set privateAccessChannelKey(value: string) {
    this._privateAccessChannelKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessChannelKeyInput() {
    return this._privateAccessChannelKey;
  }

  // private_source_dns_zones - computed: true, optional: false, required: false
  private _privateSourceDnsZones = new DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList(this, "private_source_dns_zones", false);
  public get privateSourceDnsZones() {
    return this._privateSourceDnsZones;
  }

  // private_source_scan_hosts - computed: true, optional: false, required: false
  private _privateSourceScanHosts = new DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList(this, "private_source_scan_hosts", false);
  public get privateSourceScanHosts() {
    return this._privateSourceScanHosts;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analytics_instance_id: cdktf.stringToTerraform(this._analyticsInstanceId),
      private_access_channel_key: cdktf.stringToTerraform(this._privateAccessChannelKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analytics_instance_id: {
        value: cdktf.stringToHclTerraform(this._analyticsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_access_channel_key: {
        value: cdktf.stringToHclTerraform(this._privateAccessChannelKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
