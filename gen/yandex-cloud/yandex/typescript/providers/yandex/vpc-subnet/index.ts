// https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#description VpcSubnet#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#folder_id VpcSubnet#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#id VpcSubnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#labels VpcSubnet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#name VpcSubnet#name}
  */
  readonly name?: string;
  /**
  * ID of the network this subnet belongs to. Only networks that are in the distributed mode can have subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#network_id VpcSubnet#network_id}
  */
  readonly networkId: string;
  /**
  * The ID of the route table to assign to this subnet. Assigned route table should belong to the same network as this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#route_table_id VpcSubnet#route_table_id}
  */
  readonly routeTableId?: string;
  /**
  * A list of blocks of internal IPv4 addresses that are owned by this subnet. Provide this property when you create the subnet. For example, `10.0.0.0/22` or `192.168.0.0/16`. Blocks of addresses must be unique and non-overlapping within a network. Minimum subnet size is `/28`, and maximum subnet size is `/16`. Only IPv4 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#v4_cidr_blocks VpcSubnet#v4_cidr_blocks}
  */
  readonly v4CidrBlocks: string[];
  /**
  * The [availability zone](https://yandex.cloud/docs/overview/concepts/geo-scope) where resource is located. If it is not provided, the default provider zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#zone VpcSubnet#zone}
  */
  readonly zone?: string;
  /**
  * dhcp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#dhcp_options VpcSubnet#dhcp_options}
  */
  readonly dhcpOptions?: VpcSubnetDhcpOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#timeouts VpcSubnet#timeouts}
  */
  readonly timeouts?: VpcSubnetTimeouts;
}
export interface VpcSubnetDhcpOptions {
  /**
  * Domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#domain_name VpcSubnet#domain_name}
  */
  readonly domainName?: string;
  /**
  * Domain name server IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#domain_name_servers VpcSubnet#domain_name_servers}
  */
  readonly domainNameServers?: string[];
  /**
  * NTP server IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#ntp_servers VpcSubnet#ntp_servers}
  */
  readonly ntpServers?: string[];
}

export function vpcSubnetDhcpOptionsToTerraform(struct?: VpcSubnetDhcpOptionsOutputReference | VpcSubnetDhcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainNameServers),
    ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ntpServers),
  }
}


export function vpcSubnetDhcpOptionsToHclTerraform(struct?: VpcSubnetDhcpOptionsOutputReference | VpcSubnetDhcpOptions): any {
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
    domain_name_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainNameServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ntp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ntpServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSubnetDhcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcSubnetDhcpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._domainNameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNameServers = this._domainNameServers;
    }
    if (this._ntpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServers = this._ntpServers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSubnetDhcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainName = undefined;
      this._domainNameServers = undefined;
      this._ntpServers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainName = value.domainName;
      this._domainNameServers = value.domainNameServers;
      this._ntpServers = value.ntpServers;
    }
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
  private _domainNameServers?: string[]; 
  public get domainNameServers() {
    return this.getListAttribute('domain_name_servers');
  }
  public set domainNameServers(value: string[]) {
    this._domainNameServers = value;
  }
  public resetDomainNameServers() {
    this._domainNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameServersInput() {
    return this._domainNameServers;
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  public resetNtpServers() {
    this._ntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }
}
export interface VpcSubnetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#create VpcSubnet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#delete VpcSubnet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#update VpcSubnet#update}
  */
  readonly update?: string;
}

export function vpcSubnetTimeoutsToTerraform(struct?: VpcSubnetTimeouts | cdktf.IResolvable): any {
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


export function vpcSubnetTimeoutsToHclTerraform(struct?: VpcSubnetTimeouts | cdktf.IResolvable): any {
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

export class VpcSubnetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcSubnetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcSubnetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet yandex_vpc_subnet}
*/
export class VpcSubnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_vpc_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcSubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcSubnet to import
  * @param importFromId The id of the existing VpcSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_vpc_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_subnet yandex_vpc_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcSubnetConfig
  */
  public constructor(scope: Construct, id: string, config: VpcSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_vpc_subnet',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.173.0',
        providerVersionConstraint: '0.173.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._networkId = config.networkId;
    this._routeTableId = config.routeTableId;
    this._v4CidrBlocks = config.v4CidrBlocks;
    this._zone = config.zone;
    this._dhcpOptions.internalValue = config.dhcpOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
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

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // route_table_id - computed: false, optional: true, required: false
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  public resetRouteTableId() {
    this._routeTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }

  // v4_cidr_blocks - computed: false, optional: false, required: true
  private _v4CidrBlocks?: string[]; 
  public get v4CidrBlocks() {
    return this.getListAttribute('v4_cidr_blocks');
  }
  public set v4CidrBlocks(value: string[]) {
    this._v4CidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get v4CidrBlocksInput() {
    return this._v4CidrBlocks;
  }

  // v6_cidr_blocks - computed: true, optional: false, required: false
  public get v6CidrBlocks() {
    return this.getListAttribute('v6_cidr_blocks');
  }

  // zone - computed: true, optional: true, required: false
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

  // dhcp_options - computed: false, optional: true, required: false
  private _dhcpOptions = new VpcSubnetDhcpOptionsOutputReference(this, "dhcp_options");
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: VpcSubnetDhcpOptions) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcSubnetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcSubnetTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
      v4_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._v4CidrBlocks),
      zone: cdktf.stringToTerraform(this._zone),
      dhcp_options: vpcSubnetDhcpOptionsToTerraform(this._dhcpOptions.internalValue),
      timeouts: vpcSubnetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
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
      route_table_id: {
        value: cdktf.stringToHclTerraform(this._routeTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v4_cidr_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._v4CidrBlocks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_options: {
        value: vpcSubnetDhcpOptionsToHclTerraform(this._dhcpOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcSubnetDhcpOptionsList",
      },
      timeouts: {
        value: vpcSubnetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcSubnetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
