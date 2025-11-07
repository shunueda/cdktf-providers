// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcDhcpOptionsSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set#dhcp_options_set_description VpcDhcpOptionsSet#dhcp_options_set_description}
  */
  readonly dhcpOptionsSetDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set#dhcp_options_set_name VpcDhcpOptionsSet#dhcp_options_set_name}
  */
  readonly dhcpOptionsSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set#domain_name VpcDhcpOptionsSet#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set#domain_name_servers VpcDhcpOptionsSet#domain_name_servers}
  */
  readonly domainNameServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set#dry_run VpcDhcpOptionsSet#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set#id VpcDhcpOptionsSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set#ipv6_lease_time VpcDhcpOptionsSet#ipv6_lease_time}
  */
  readonly ipv6LeaseTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set#lease_time VpcDhcpOptionsSet#lease_time}
  */
  readonly leaseTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set#resource_group_id VpcDhcpOptionsSet#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set#tags VpcDhcpOptionsSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * associate_vpcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set#associate_vpcs VpcDhcpOptionsSet#associate_vpcs}
  */
  readonly associateVpcs?: VpcDhcpOptionsSetAssociateVpcs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set#timeouts VpcDhcpOptionsSet#timeouts}
  */
  readonly timeouts?: VpcDhcpOptionsSetTimeouts;
}
export interface VpcDhcpOptionsSetAssociateVpcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set#vpc_id VpcDhcpOptionsSet#vpc_id}
  */
  readonly vpcId: string;
}

export function vpcDhcpOptionsSetAssociateVpcsToTerraform(struct?: VpcDhcpOptionsSetAssociateVpcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function vpcDhcpOptionsSetAssociateVpcsToHclTerraform(struct?: VpcDhcpOptionsSetAssociateVpcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VpcDhcpOptionsSetAssociateVpcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcDhcpOptionsSetAssociateVpcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcDhcpOptionsSetAssociateVpcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcId = value.vpcId;
    }
  }

  // associate_status - computed: true, optional: false, required: false
  public get associateStatus() {
    return this.getStringAttribute('associate_status');
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

export class VpcDhcpOptionsSetAssociateVpcsList extends cdktf.ComplexList {
  public internalValue? : VpcDhcpOptionsSetAssociateVpcs[] | cdktf.IResolvable

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
  public get(index: number): VpcDhcpOptionsSetAssociateVpcsOutputReference {
    return new VpcDhcpOptionsSetAssociateVpcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcDhcpOptionsSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set#create VpcDhcpOptionsSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set#delete VpcDhcpOptionsSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set#update VpcDhcpOptionsSet#update}
  */
  readonly update?: string;
}

export function vpcDhcpOptionsSetTimeoutsToTerraform(struct?: VpcDhcpOptionsSetTimeouts | cdktf.IResolvable): any {
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


export function vpcDhcpOptionsSetTimeoutsToHclTerraform(struct?: VpcDhcpOptionsSetTimeouts | cdktf.IResolvable): any {
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

export class VpcDhcpOptionsSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcDhcpOptionsSetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcDhcpOptionsSetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set alicloud_vpc_dhcp_options_set}
*/
export class VpcDhcpOptionsSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_dhcp_options_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcDhcpOptionsSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcDhcpOptionsSet to import
  * @param importFromId The id of the existing VpcDhcpOptionsSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcDhcpOptionsSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_dhcp_options_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_dhcp_options_set alicloud_vpc_dhcp_options_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcDhcpOptionsSetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpcDhcpOptionsSetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_dhcp_options_set',
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
    this._dhcpOptionsSetDescription = config.dhcpOptionsSetDescription;
    this._dhcpOptionsSetName = config.dhcpOptionsSetName;
    this._domainName = config.domainName;
    this._domainNameServers = config.domainNameServers;
    this._dryRun = config.dryRun;
    this._id = config.id;
    this._ipv6LeaseTime = config.ipv6LeaseTime;
    this._leaseTime = config.leaseTime;
    this._resourceGroupId = config.resourceGroupId;
    this._tags = config.tags;
    this._associateVpcs.internalValue = config.associateVpcs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcp_options_set_description - computed: false, optional: true, required: false
  private _dhcpOptionsSetDescription?: string; 
  public get dhcpOptionsSetDescription() {
    return this.getStringAttribute('dhcp_options_set_description');
  }
  public set dhcpOptionsSetDescription(value: string) {
    this._dhcpOptionsSetDescription = value;
  }
  public resetDhcpOptionsSetDescription() {
    this._dhcpOptionsSetDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsSetDescriptionInput() {
    return this._dhcpOptionsSetDescription;
  }

  // dhcp_options_set_name - computed: false, optional: true, required: false
  private _dhcpOptionsSetName?: string; 
  public get dhcpOptionsSetName() {
    return this.getStringAttribute('dhcp_options_set_name');
  }
  public set dhcpOptionsSetName(value: string) {
    this._dhcpOptionsSetName = value;
  }
  public resetDhcpOptionsSetName() {
    this._dhcpOptionsSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsSetNameInput() {
    return this._dhcpOptionsSetName;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_name_servers - computed: false, optional: true, required: false
  private _domainNameServers?: string; 
  public get domainNameServers() {
    return this.getStringAttribute('domain_name_servers');
  }
  public set domainNameServers(value: string) {
    this._domainNameServers = value;
  }
  public resetDomainNameServers() {
    this._domainNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameServersInput() {
    return this._domainNameServers;
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

  // ipv6_lease_time - computed: true, optional: true, required: false
  private _ipv6LeaseTime?: string; 
  public get ipv6LeaseTime() {
    return this.getStringAttribute('ipv6_lease_time');
  }
  public set ipv6LeaseTime(value: string) {
    this._ipv6LeaseTime = value;
  }
  public resetIpv6LeaseTime() {
    this._ipv6LeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LeaseTimeInput() {
    return this._ipv6LeaseTime;
  }

  // lease_time - computed: true, optional: true, required: false
  private _leaseTime?: string; 
  public get leaseTime() {
    return this.getStringAttribute('lease_time');
  }
  public set leaseTime(value: string) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getNumberAttribute('owner_id');
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

  // associate_vpcs - computed: false, optional: true, required: false
  private _associateVpcs = new VpcDhcpOptionsSetAssociateVpcsList(this, "associate_vpcs", true);
  public get associateVpcs() {
    return this._associateVpcs;
  }
  public putAssociateVpcs(value: VpcDhcpOptionsSetAssociateVpcs[] | cdktf.IResolvable) {
    this._associateVpcs.internalValue = value;
  }
  public resetAssociateVpcs() {
    this._associateVpcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associateVpcsInput() {
    return this._associateVpcs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcDhcpOptionsSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcDhcpOptionsSetTimeouts) {
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
      dhcp_options_set_description: cdktf.stringToTerraform(this._dhcpOptionsSetDescription),
      dhcp_options_set_name: cdktf.stringToTerraform(this._dhcpOptionsSetName),
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_name_servers: cdktf.stringToTerraform(this._domainNameServers),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      id: cdktf.stringToTerraform(this._id),
      ipv6_lease_time: cdktf.stringToTerraform(this._ipv6LeaseTime),
      lease_time: cdktf.stringToTerraform(this._leaseTime),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      associate_vpcs: cdktf.listMapper(vpcDhcpOptionsSetAssociateVpcsToTerraform, true)(this._associateVpcs.internalValue),
      timeouts: vpcDhcpOptionsSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dhcp_options_set_description: {
        value: cdktf.stringToHclTerraform(this._dhcpOptionsSetDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_options_set_name: {
        value: cdktf.stringToHclTerraform(this._dhcpOptionsSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name_servers: {
        value: cdktf.stringToHclTerraform(this._domainNameServers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      ipv6_lease_time: {
        value: cdktf.stringToHclTerraform(this._ipv6LeaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lease_time: {
        value: cdktf.stringToHclTerraform(this._leaseTime),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      associate_vpcs: {
        value: cdktf.listMapperHcl(vpcDhcpOptionsSetAssociateVpcsToHclTerraform, true)(this._associateVpcs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpcDhcpOptionsSetAssociateVpcsList",
      },
      timeouts: {
        value: vpcDhcpOptionsSetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcDhcpOptionsSetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
