// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivatelinkVpcEndpointServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service#address_ip_version PrivatelinkVpcEndpointService#address_ip_version}
  */
  readonly addressIpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service#auto_accept_connection PrivatelinkVpcEndpointService#auto_accept_connection}
  */
  readonly autoAcceptConnection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service#connect_bandwidth PrivatelinkVpcEndpointService#connect_bandwidth}
  */
  readonly connectBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service#dry_run PrivatelinkVpcEndpointService#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service#id PrivatelinkVpcEndpointService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service#payer PrivatelinkVpcEndpointService#payer}
  */
  readonly payer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service#resource_group_id PrivatelinkVpcEndpointService#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service#service_description PrivatelinkVpcEndpointService#service_description}
  */
  readonly serviceDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service#service_resource_type PrivatelinkVpcEndpointService#service_resource_type}
  */
  readonly serviceResourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service#service_support_ipv6 PrivatelinkVpcEndpointService#service_support_ipv6}
  */
  readonly serviceSupportIpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service#tags PrivatelinkVpcEndpointService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service#zone_affinity_enabled PrivatelinkVpcEndpointService#zone_affinity_enabled}
  */
  readonly zoneAffinityEnabled?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service#timeouts PrivatelinkVpcEndpointService#timeouts}
  */
  readonly timeouts?: PrivatelinkVpcEndpointServiceTimeouts;
}
export interface PrivatelinkVpcEndpointServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service#create PrivatelinkVpcEndpointService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service#delete PrivatelinkVpcEndpointService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service#update PrivatelinkVpcEndpointService#update}
  */
  readonly update?: string;
}

export function privatelinkVpcEndpointServiceTimeoutsToTerraform(struct?: PrivatelinkVpcEndpointServiceTimeouts | cdktf.IResolvable): any {
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


export function privatelinkVpcEndpointServiceTimeoutsToHclTerraform(struct?: PrivatelinkVpcEndpointServiceTimeouts | cdktf.IResolvable): any {
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

export class PrivatelinkVpcEndpointServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivatelinkVpcEndpointServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PrivatelinkVpcEndpointServiceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service alicloud_privatelink_vpc_endpoint_service}
*/
export class PrivatelinkVpcEndpointService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_privatelink_vpc_endpoint_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivatelinkVpcEndpointService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivatelinkVpcEndpointService to import
  * @param importFromId The id of the existing PrivatelinkVpcEndpointService that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivatelinkVpcEndpointService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_privatelink_vpc_endpoint_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/privatelink_vpc_endpoint_service alicloud_privatelink_vpc_endpoint_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivatelinkVpcEndpointServiceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PrivatelinkVpcEndpointServiceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_privatelink_vpc_endpoint_service',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressIpVersion = config.addressIpVersion;
    this._autoAcceptConnection = config.autoAcceptConnection;
    this._connectBandwidth = config.connectBandwidth;
    this._dryRun = config.dryRun;
    this._id = config.id;
    this._payer = config.payer;
    this._resourceGroupId = config.resourceGroupId;
    this._serviceDescription = config.serviceDescription;
    this._serviceResourceType = config.serviceResourceType;
    this._serviceSupportIpv6 = config.serviceSupportIpv6;
    this._tags = config.tags;
    this._zoneAffinityEnabled = config.zoneAffinityEnabled;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_ip_version - computed: true, optional: true, required: false
  private _addressIpVersion?: string; 
  public get addressIpVersion() {
    return this.getStringAttribute('address_ip_version');
  }
  public set addressIpVersion(value: string) {
    this._addressIpVersion = value;
  }
  public resetAddressIpVersion() {
    this._addressIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpVersionInput() {
    return this._addressIpVersion;
  }

  // auto_accept_connection - computed: false, optional: true, required: false
  private _autoAcceptConnection?: boolean | cdktf.IResolvable; 
  public get autoAcceptConnection() {
    return this.getBooleanAttribute('auto_accept_connection');
  }
  public set autoAcceptConnection(value: boolean | cdktf.IResolvable) {
    this._autoAcceptConnection = value;
  }
  public resetAutoAcceptConnection() {
    this._autoAcceptConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptConnectionInput() {
    return this._autoAcceptConnection;
  }

  // connect_bandwidth - computed: true, optional: true, required: false
  private _connectBandwidth?: number; 
  public get connectBandwidth() {
    return this.getNumberAttribute('connect_bandwidth');
  }
  public set connectBandwidth(value: number) {
    this._connectBandwidth = value;
  }
  public resetConnectBandwidth() {
    this._connectBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectBandwidthInput() {
    return this._connectBandwidth;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
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

  // payer - computed: true, optional: true, required: false
  private _payer?: string; 
  public get payer() {
    return this.getStringAttribute('payer');
  }
  public set payer(value: string) {
    this._payer = value;
  }
  public resetPayer() {
    this._payer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payerInput() {
    return this._payer;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // service_business_status - computed: true, optional: false, required: false
  public get serviceBusinessStatus() {
    return this.getStringAttribute('service_business_status');
  }

  // service_description - computed: false, optional: true, required: false
  private _serviceDescription?: string; 
  public get serviceDescription() {
    return this.getStringAttribute('service_description');
  }
  public set serviceDescription(value: string) {
    this._serviceDescription = value;
  }
  public resetServiceDescription() {
    this._serviceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDescriptionInput() {
    return this._serviceDescription;
  }

  // service_domain - computed: true, optional: false, required: false
  public get serviceDomain() {
    return this.getStringAttribute('service_domain');
  }

  // service_resource_type - computed: true, optional: true, required: false
  private _serviceResourceType?: string; 
  public get serviceResourceType() {
    return this.getStringAttribute('service_resource_type');
  }
  public set serviceResourceType(value: string) {
    this._serviceResourceType = value;
  }
  public resetServiceResourceType() {
    this._serviceResourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceResourceTypeInput() {
    return this._serviceResourceType;
  }

  // service_support_ipv6 - computed: true, optional: true, required: false
  private _serviceSupportIpv6?: boolean | cdktf.IResolvable; 
  public get serviceSupportIpv6() {
    return this.getBooleanAttribute('service_support_ipv6');
  }
  public set serviceSupportIpv6(value: boolean | cdktf.IResolvable) {
    this._serviceSupportIpv6 = value;
  }
  public resetServiceSupportIpv6() {
    this._serviceSupportIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSupportIpv6Input() {
    return this._serviceSupportIpv6;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_endpoint_service_name - computed: true, optional: false, required: false
  public get vpcEndpointServiceName() {
    return this.getStringAttribute('vpc_endpoint_service_name');
  }

  // zone_affinity_enabled - computed: true, optional: true, required: false
  private _zoneAffinityEnabled?: boolean | cdktf.IResolvable; 
  public get zoneAffinityEnabled() {
    return this.getBooleanAttribute('zone_affinity_enabled');
  }
  public set zoneAffinityEnabled(value: boolean | cdktf.IResolvable) {
    this._zoneAffinityEnabled = value;
  }
  public resetZoneAffinityEnabled() {
    this._zoneAffinityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAffinityEnabledInput() {
    return this._zoneAffinityEnabled;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrivatelinkVpcEndpointServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrivatelinkVpcEndpointServiceTimeouts) {
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
      address_ip_version: cdktf.stringToTerraform(this._addressIpVersion),
      auto_accept_connection: cdktf.booleanToTerraform(this._autoAcceptConnection),
      connect_bandwidth: cdktf.numberToTerraform(this._connectBandwidth),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      id: cdktf.stringToTerraform(this._id),
      payer: cdktf.stringToTerraform(this._payer),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      service_description: cdktf.stringToTerraform(this._serviceDescription),
      service_resource_type: cdktf.stringToTerraform(this._serviceResourceType),
      service_support_ipv6: cdktf.booleanToTerraform(this._serviceSupportIpv6),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zone_affinity_enabled: cdktf.booleanToTerraform(this._zoneAffinityEnabled),
      timeouts: privatelinkVpcEndpointServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_ip_version: {
        value: cdktf.stringToHclTerraform(this._addressIpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_accept_connection: {
        value: cdktf.booleanToHclTerraform(this._autoAcceptConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connect_bandwidth: {
        value: cdktf.numberToHclTerraform(this._connectBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payer: {
        value: cdktf.stringToHclTerraform(this._payer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_description: {
        value: cdktf.stringToHclTerraform(this._serviceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_resource_type: {
        value: cdktf.stringToHclTerraform(this._serviceResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_support_ipv6: {
        value: cdktf.booleanToHclTerraform(this._serviceSupportIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zone_affinity_enabled: {
        value: cdktf.booleanToHclTerraform(this._zoneAffinityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: privatelinkVpcEndpointServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivatelinkVpcEndpointServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
