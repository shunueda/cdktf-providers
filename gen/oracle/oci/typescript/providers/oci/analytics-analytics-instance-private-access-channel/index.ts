// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnalyticsAnalyticsInstancePrivateAccessChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#analytics_instance_id AnalyticsAnalyticsInstancePrivateAccessChannel#analytics_instance_id}
  */
  readonly analyticsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#display_name AnalyticsAnalyticsInstancePrivateAccessChannel#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#id AnalyticsAnalyticsInstancePrivateAccessChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#network_security_group_ids AnalyticsAnalyticsInstancePrivateAccessChannel#network_security_group_ids}
  */
  readonly networkSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#subnet_id AnalyticsAnalyticsInstancePrivateAccessChannel#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#vcn_id AnalyticsAnalyticsInstancePrivateAccessChannel#vcn_id}
  */
  readonly vcnId: string;
  /**
  * private_source_dns_zones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#private_source_dns_zones AnalyticsAnalyticsInstancePrivateAccessChannel#private_source_dns_zones}
  */
  readonly privateSourceDnsZones: AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones[] | cdktf.IResolvable;
  /**
  * private_source_scan_hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#private_source_scan_hosts AnalyticsAnalyticsInstancePrivateAccessChannel#private_source_scan_hosts}
  */
  readonly privateSourceScanHosts?: AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#timeouts AnalyticsAnalyticsInstancePrivateAccessChannel#timeouts}
  */
  readonly timeouts?: AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts;
}
export interface AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#description AnalyticsAnalyticsInstancePrivateAccessChannel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#dns_zone AnalyticsAnalyticsInstancePrivateAccessChannel#dns_zone}
  */
  readonly dnsZone: string;
}

export function analyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesToTerraform(struct?: AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dns_zone: cdktf.stringToTerraform(struct!.dnsZone),
  }
}


export function analyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesToHclTerraform(struct?: AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_zone: {
      value: cdktf.stringToHclTerraform(struct!.dnsZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dnsZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZone = this._dnsZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dnsZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dnsZone = value.dnsZone;
    }
  }

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

  // dns_zone - computed: false, optional: false, required: true
  private _dnsZone?: string; 
  public get dnsZone() {
    return this.getStringAttribute('dns_zone');
  }
  public set dnsZone(value: string) {
    this._dnsZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneInput() {
    return this._dnsZone;
  }
}

export class AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList extends cdktf.ComplexList {
  public internalValue? : AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference {
    return new AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#description AnalyticsAnalyticsInstancePrivateAccessChannel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#scan_hostname AnalyticsAnalyticsInstancePrivateAccessChannel#scan_hostname}
  */
  readonly scanHostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#scan_port AnalyticsAnalyticsInstancePrivateAccessChannel#scan_port}
  */
  readonly scanPort: number;
}

export function analyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsToTerraform(struct?: AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    scan_hostname: cdktf.stringToTerraform(struct!.scanHostname),
    scan_port: cdktf.numberToTerraform(struct!.scanPort),
  }
}


export function analyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsToHclTerraform(struct?: AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_hostname: {
      value: cdktf.stringToHclTerraform(struct!.scanHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_port: {
      value: cdktf.numberToHclTerraform(struct!.scanPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._scanHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanHostname = this._scanHostname;
    }
    if (this._scanPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanPort = this._scanPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._scanHostname = undefined;
      this._scanPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._scanHostname = value.scanHostname;
      this._scanPort = value.scanPort;
    }
  }

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

  // scan_hostname - computed: false, optional: false, required: true
  private _scanHostname?: string; 
  public get scanHostname() {
    return this.getStringAttribute('scan_hostname');
  }
  public set scanHostname(value: string) {
    this._scanHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanHostnameInput() {
    return this._scanHostname;
  }

  // scan_port - computed: false, optional: false, required: true
  private _scanPort?: number; 
  public get scanPort() {
    return this.getNumberAttribute('scan_port');
  }
  public set scanPort(value: number) {
    this._scanPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanPortInput() {
    return this._scanPort;
  }
}

export class AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList extends cdktf.ComplexList {
  public internalValue? : AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference {
    return new AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#create AnalyticsAnalyticsInstancePrivateAccessChannel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#delete AnalyticsAnalyticsInstancePrivateAccessChannel#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#update AnalyticsAnalyticsInstancePrivateAccessChannel#update}
  */
  readonly update?: string;
}

export function analyticsAnalyticsInstancePrivateAccessChannelTimeoutsToTerraform(struct?: AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts | cdktf.IResolvable): any {
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


export function analyticsAnalyticsInstancePrivateAccessChannelTimeoutsToHclTerraform(struct?: AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts | cdktf.IResolvable): any {
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

export class AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel oci_analytics_analytics_instance_private_access_channel}
*/
export class AnalyticsAnalyticsInstancePrivateAccessChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_analytics_analytics_instance_private_access_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AnalyticsAnalyticsInstancePrivateAccessChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AnalyticsAnalyticsInstancePrivateAccessChannel to import
  * @param importFromId The id of the existing AnalyticsAnalyticsInstancePrivateAccessChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AnalyticsAnalyticsInstancePrivateAccessChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_analytics_analytics_instance_private_access_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/analytics_analytics_instance_private_access_channel oci_analytics_analytics_instance_private_access_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnalyticsAnalyticsInstancePrivateAccessChannelConfig
  */
  public constructor(scope: Construct, id: string, config: AnalyticsAnalyticsInstancePrivateAccessChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_analytics_analytics_instance_private_access_channel',
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
    this._analyticsInstanceId = config.analyticsInstanceId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._networkSecurityGroupIds = config.networkSecurityGroupIds;
    this._subnetId = config.subnetId;
    this._vcnId = config.vcnId;
    this._privateSourceDnsZones.internalValue = config.privateSourceDnsZones;
    this._privateSourceScanHosts.internalValue = config.privateSourceScanHosts;
    this._timeouts.internalValue = config.timeouts;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // egress_source_ip_addresses - computed: true, optional: false, required: false
  public get egressSourceIpAddresses() {
    return this.getListAttribute('egress_source_ip_addresses');
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // network_security_group_ids - computed: true, optional: true, required: false
  private _networkSecurityGroupIds?: string[]; 
  public get networkSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('network_security_group_ids'));
  }
  public set networkSecurityGroupIds(value: string[]) {
    this._networkSecurityGroupIds = value;
  }
  public resetNetworkSecurityGroupIds() {
    this._networkSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupIdsInput() {
    return this._networkSecurityGroupIds;
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

  // vcn_id - computed: false, optional: false, required: true
  private _vcnId?: string; 
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
  public set vcnId(value: string) {
    this._vcnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnIdInput() {
    return this._vcnId;
  }

  // private_source_dns_zones - computed: false, optional: false, required: true
  private _privateSourceDnsZones = new AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList(this, "private_source_dns_zones", false);
  public get privateSourceDnsZones() {
    return this._privateSourceDnsZones;
  }
  public putPrivateSourceDnsZones(value: AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones[] | cdktf.IResolvable) {
    this._privateSourceDnsZones.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSourceDnsZonesInput() {
    return this._privateSourceDnsZones.internalValue;
  }

  // private_source_scan_hosts - computed: false, optional: true, required: false
  private _privateSourceScanHosts = new AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList(this, "private_source_scan_hosts", false);
  public get privateSourceScanHosts() {
    return this._privateSourceScanHosts;
  }
  public putPrivateSourceScanHosts(value: AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts[] | cdktf.IResolvable) {
    this._privateSourceScanHosts.internalValue = value;
  }
  public resetPrivateSourceScanHosts() {
    this._privateSourceScanHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSourceScanHostsInput() {
    return this._privateSourceScanHosts.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AnalyticsAnalyticsInstancePrivateAccessChannelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts) {
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
      analytics_instance_id: cdktf.stringToTerraform(this._analyticsInstanceId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      network_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkSecurityGroupIds),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vcn_id: cdktf.stringToTerraform(this._vcnId),
      private_source_dns_zones: cdktf.listMapper(analyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesToTerraform, true)(this._privateSourceDnsZones.internalValue),
      private_source_scan_hosts: cdktf.listMapper(analyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsToTerraform, true)(this._privateSourceScanHosts.internalValue),
      timeouts: analyticsAnalyticsInstancePrivateAccessChannelTimeoutsToTerraform(this._timeouts.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      network_security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkSecurityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcn_id: {
        value: cdktf.stringToHclTerraform(this._vcnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_source_dns_zones: {
        value: cdktf.listMapperHcl(analyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesToHclTerraform, true)(this._privateSourceDnsZones.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList",
      },
      private_source_scan_hosts: {
        value: cdktf.listMapperHcl(analyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsToHclTerraform, true)(this._privateSourceScanHosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList",
      },
      timeouts: {
        value: analyticsAnalyticsInstancePrivateAccessChannelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AnalyticsAnalyticsInstancePrivateAccessChannelTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
