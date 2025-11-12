// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#availability_zone_reference Subnet#availability_zone_reference}
  */
  readonly availabilityZoneReference?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#cluster_uuid Subnet#cluster_uuid}
  */
  readonly clusterUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#default_gateway_ip Subnet#default_gateway_ip}
  */
  readonly defaultGatewayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#description Subnet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#dhcp_domain_name_server_list Subnet#dhcp_domain_name_server_list}
  */
  readonly dhcpDomainNameServerList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#dhcp_domain_search_list Subnet#dhcp_domain_search_list}
  */
  readonly dhcpDomainSearchList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#dhcp_options Subnet#dhcp_options}
  */
  readonly dhcpOptions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#dhcp_server_address Subnet#dhcp_server_address}
  */
  readonly dhcpServerAddress?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#dhcp_server_address_port Subnet#dhcp_server_address_port}
  */
  readonly dhcpServerAddressPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#enable_nat Subnet#enable_nat}
  */
  readonly enableNat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#id Subnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#ip_config_pool_list_ranges Subnet#ip_config_pool_list_ranges}
  */
  readonly ipConfigPoolListRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#is_external Subnet#is_external}
  */
  readonly isExternal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#name Subnet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#network_function_chain_reference Subnet#network_function_chain_reference}
  */
  readonly networkFunctionChainReference?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#owner_reference Subnet#owner_reference}
  */
  readonly ownerReference?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#prefix_length Subnet#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#project_reference Subnet#project_reference}
  */
  readonly projectReference?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#subnet_ip Subnet#subnet_ip}
  */
  readonly subnetIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#subnet_type Subnet#subnet_type}
  */
  readonly subnetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#vlan_id Subnet#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#vpc_reference_uuid Subnet#vpc_reference_uuid}
  */
  readonly vpcReferenceUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#vswitch_name Subnet#vswitch_name}
  */
  readonly vswitchName?: string;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#categories Subnet#categories}
  */
  readonly categories?: SubnetCategories[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#timeouts Subnet#timeouts}
  */
  readonly timeouts?: SubnetTimeouts;
}
export interface SubnetCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#name Subnet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#value Subnet#value}
  */
  readonly value?: string;
}

export function subnetCategoriesToTerraform(struct?: SubnetCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function subnetCategoriesToHclTerraform(struct?: SubnetCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class SubnetCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubnetCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubnetCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class SubnetCategoriesList extends cdktf.ComplexList {
  public internalValue? : SubnetCategories[] | cdktf.IResolvable

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
  public get(index: number): SubnetCategoriesOutputReference {
    return new SubnetCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubnetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#create Subnet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#delete Subnet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#update Subnet#update}
  */
  readonly update?: string;
}

export function subnetTimeoutsToTerraform(struct?: SubnetTimeouts | cdktf.IResolvable): any {
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


export function subnetTimeoutsToHclTerraform(struct?: SubnetTimeouts | cdktf.IResolvable): any {
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

export class SubnetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SubnetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SubnetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet nutanix_subnet}
*/
export class Subnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subnet to import
  * @param importFromId The id of the existing Subnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/subnet nutanix_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubnetConfig
  */
  public constructor(scope: Construct, id: string, config: SubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_subnet',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZoneReference = config.availabilityZoneReference;
    this._clusterUuid = config.clusterUuid;
    this._defaultGatewayIp = config.defaultGatewayIp;
    this._description = config.description;
    this._dhcpDomainNameServerList = config.dhcpDomainNameServerList;
    this._dhcpDomainSearchList = config.dhcpDomainSearchList;
    this._dhcpOptions = config.dhcpOptions;
    this._dhcpServerAddress = config.dhcpServerAddress;
    this._dhcpServerAddressPort = config.dhcpServerAddressPort;
    this._enableNat = config.enableNat;
    this._id = config.id;
    this._ipConfigPoolListRanges = config.ipConfigPoolListRanges;
    this._isExternal = config.isExternal;
    this._name = config.name;
    this._networkFunctionChainReference = config.networkFunctionChainReference;
    this._ownerReference = config.ownerReference;
    this._prefixLength = config.prefixLength;
    this._projectReference = config.projectReference;
    this._subnetIp = config.subnetIp;
    this._subnetType = config.subnetType;
    this._vlanId = config.vlanId;
    this._vpcReferenceUuid = config.vpcReferenceUuid;
    this._vswitchName = config.vswitchName;
    this._categories.internalValue = config.categories;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // availability_zone_reference - computed: true, optional: true, required: false
  private _availabilityZoneReference?: { [key: string]: string }; 
  public get availabilityZoneReference() {
    return this.getStringMapAttribute('availability_zone_reference');
  }
  public set availabilityZoneReference(value: { [key: string]: string }) {
    this._availabilityZoneReference = value;
  }
  public resetAvailabilityZoneReference() {
    this._availabilityZoneReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneReferenceInput() {
    return this._availabilityZoneReference;
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_uuid - computed: false, optional: true, required: false
  private _clusterUuid?: string; 
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }
  public set clusterUuid(value: string) {
    this._clusterUuid = value;
  }
  public resetClusterUuid() {
    this._clusterUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUuidInput() {
    return this._clusterUuid;
  }

  // default_gateway_ip - computed: true, optional: true, required: false
  private _defaultGatewayIp?: string; 
  public get defaultGatewayIp() {
    return this.getStringAttribute('default_gateway_ip');
  }
  public set defaultGatewayIp(value: string) {
    this._defaultGatewayIp = value;
  }
  public resetDefaultGatewayIp() {
    this._defaultGatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayIpInput() {
    return this._defaultGatewayIp;
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

  // dhcp_domain_name_server_list - computed: true, optional: true, required: false
  private _dhcpDomainNameServerList?: string[]; 
  public get dhcpDomainNameServerList() {
    return this.getListAttribute('dhcp_domain_name_server_list');
  }
  public set dhcpDomainNameServerList(value: string[]) {
    this._dhcpDomainNameServerList = value;
  }
  public resetDhcpDomainNameServerList() {
    this._dhcpDomainNameServerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpDomainNameServerListInput() {
    return this._dhcpDomainNameServerList;
  }

  // dhcp_domain_search_list - computed: true, optional: true, required: false
  private _dhcpDomainSearchList?: string[]; 
  public get dhcpDomainSearchList() {
    return this.getListAttribute('dhcp_domain_search_list');
  }
  public set dhcpDomainSearchList(value: string[]) {
    this._dhcpDomainSearchList = value;
  }
  public resetDhcpDomainSearchList() {
    this._dhcpDomainSearchList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpDomainSearchListInput() {
    return this._dhcpDomainSearchList;
  }

  // dhcp_options - computed: true, optional: true, required: false
  private _dhcpOptions?: { [key: string]: string }; 
  public get dhcpOptions() {
    return this.getStringMapAttribute('dhcp_options');
  }
  public set dhcpOptions(value: { [key: string]: string }) {
    this._dhcpOptions = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions;
  }

  // dhcp_server_address - computed: true, optional: true, required: false
  private _dhcpServerAddress?: { [key: string]: string }; 
  public get dhcpServerAddress() {
    return this.getStringMapAttribute('dhcp_server_address');
  }
  public set dhcpServerAddress(value: { [key: string]: string }) {
    this._dhcpServerAddress = value;
  }
  public resetDhcpServerAddress() {
    this._dhcpServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerAddressInput() {
    return this._dhcpServerAddress;
  }

  // dhcp_server_address_port - computed: true, optional: true, required: false
  private _dhcpServerAddressPort?: number; 
  public get dhcpServerAddressPort() {
    return this.getNumberAttribute('dhcp_server_address_port');
  }
  public set dhcpServerAddressPort(value: number) {
    this._dhcpServerAddressPort = value;
  }
  public resetDhcpServerAddressPort() {
    this._dhcpServerAddressPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerAddressPortInput() {
    return this._dhcpServerAddressPort;
  }

  // enable_nat - computed: true, optional: true, required: false
  private _enableNat?: boolean | cdktf.IResolvable; 
  public get enableNat() {
    return this.getBooleanAttribute('enable_nat');
  }
  public set enableNat(value: boolean | cdktf.IResolvable) {
    this._enableNat = value;
  }
  public resetEnableNat() {
    this._enableNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNatInput() {
    return this._enableNat;
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

  // ip_config_pool_list_ranges - computed: true, optional: true, required: false
  private _ipConfigPoolListRanges?: string[]; 
  public get ipConfigPoolListRanges() {
    return this.getListAttribute('ip_config_pool_list_ranges');
  }
  public set ipConfigPoolListRanges(value: string[]) {
    this._ipConfigPoolListRanges = value;
  }
  public resetIpConfigPoolListRanges() {
    this._ipConfigPoolListRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigPoolListRangesInput() {
    return this._ipConfigPoolListRanges;
  }

  // is_external - computed: true, optional: true, required: false
  private _isExternal?: boolean | cdktf.IResolvable; 
  public get isExternal() {
    return this.getBooleanAttribute('is_external');
  }
  public set isExternal(value: boolean | cdktf.IResolvable) {
    this._isExternal = value;
  }
  public resetIsExternal() {
    this._isExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExternalInput() {
    return this._isExternal;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
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

  // network_function_chain_reference - computed: true, optional: true, required: false
  private _networkFunctionChainReference?: { [key: string]: string }; 
  public get networkFunctionChainReference() {
    return this.getStringMapAttribute('network_function_chain_reference');
  }
  public set networkFunctionChainReference(value: { [key: string]: string }) {
    this._networkFunctionChainReference = value;
  }
  public resetNetworkFunctionChainReference() {
    this._networkFunctionChainReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionChainReferenceInput() {
    return this._networkFunctionChainReference;
  }

  // owner_reference - computed: true, optional: true, required: false
  private _ownerReference?: { [key: string]: string }; 
  public get ownerReference() {
    return this.getStringMapAttribute('owner_reference');
  }
  public set ownerReference(value: { [key: string]: string }) {
    this._ownerReference = value;
  }
  public resetOwnerReference() {
    this._ownerReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerReferenceInput() {
    return this._ownerReference;
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // project_reference - computed: true, optional: true, required: false
  private _projectReference?: { [key: string]: string }; 
  public get projectReference() {
    return this.getStringMapAttribute('project_reference');
  }
  public set projectReference(value: { [key: string]: string }) {
    this._projectReference = value;
  }
  public resetProjectReference() {
    this._projectReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectReferenceInput() {
    return this._projectReference;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_ip - computed: true, optional: true, required: false
  private _subnetIp?: string; 
  public get subnetIp() {
    return this.getStringAttribute('subnet_ip');
  }
  public set subnetIp(value: string) {
    this._subnetIp = value;
  }
  public resetSubnetIp() {
    this._subnetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpInput() {
    return this._subnetIp;
  }

  // subnet_type - computed: false, optional: false, required: true
  private _subnetType?: string; 
  public get subnetType() {
    return this.getStringAttribute('subnet_type');
  }
  public set subnetType(value: string) {
    this._subnetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetTypeInput() {
    return this._subnetType;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vpc_reference_uuid - computed: true, optional: true, required: false
  private _vpcReferenceUuid?: string; 
  public get vpcReferenceUuid() {
    return this.getStringAttribute('vpc_reference_uuid');
  }
  public set vpcReferenceUuid(value: string) {
    this._vpcReferenceUuid = value;
  }
  public resetVpcReferenceUuid() {
    this._vpcReferenceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcReferenceUuidInput() {
    return this._vpcReferenceUuid;
  }

  // vswitch_name - computed: true, optional: true, required: false
  private _vswitchName?: string; 
  public get vswitchName() {
    return this.getStringAttribute('vswitch_name');
  }
  public set vswitchName(value: string) {
    this._vswitchName = value;
  }
  public resetVswitchName() {
    this._vswitchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchNameInput() {
    return this._vswitchName;
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new SubnetCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: SubnetCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SubnetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SubnetTimeouts) {
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
      availability_zone_reference: cdktf.hashMapper(cdktf.stringToTerraform)(this._availabilityZoneReference),
      cluster_uuid: cdktf.stringToTerraform(this._clusterUuid),
      default_gateway_ip: cdktf.stringToTerraform(this._defaultGatewayIp),
      description: cdktf.stringToTerraform(this._description),
      dhcp_domain_name_server_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcpDomainNameServerList),
      dhcp_domain_search_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcpDomainSearchList),
      dhcp_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._dhcpOptions),
      dhcp_server_address: cdktf.hashMapper(cdktf.stringToTerraform)(this._dhcpServerAddress),
      dhcp_server_address_port: cdktf.numberToTerraform(this._dhcpServerAddressPort),
      enable_nat: cdktf.booleanToTerraform(this._enableNat),
      id: cdktf.stringToTerraform(this._id),
      ip_config_pool_list_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipConfigPoolListRanges),
      is_external: cdktf.booleanToTerraform(this._isExternal),
      name: cdktf.stringToTerraform(this._name),
      network_function_chain_reference: cdktf.hashMapper(cdktf.stringToTerraform)(this._networkFunctionChainReference),
      owner_reference: cdktf.hashMapper(cdktf.stringToTerraform)(this._ownerReference),
      prefix_length: cdktf.numberToTerraform(this._prefixLength),
      project_reference: cdktf.hashMapper(cdktf.stringToTerraform)(this._projectReference),
      subnet_ip: cdktf.stringToTerraform(this._subnetIp),
      subnet_type: cdktf.stringToTerraform(this._subnetType),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vpc_reference_uuid: cdktf.stringToTerraform(this._vpcReferenceUuid),
      vswitch_name: cdktf.stringToTerraform(this._vswitchName),
      categories: cdktf.listMapper(subnetCategoriesToTerraform, true)(this._categories.internalValue),
      timeouts: subnetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone_reference: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._availabilityZoneReference),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cluster_uuid: {
        value: cdktf.stringToHclTerraform(this._clusterUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_gateway_ip: {
        value: cdktf.stringToHclTerraform(this._defaultGatewayIp),
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
      dhcp_domain_name_server_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcpDomainNameServerList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dhcp_domain_search_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcpDomainSearchList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dhcp_options: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dhcpOptions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      dhcp_server_address: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dhcpServerAddress),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      dhcp_server_address_port: {
        value: cdktf.numberToHclTerraform(this._dhcpServerAddressPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_nat: {
        value: cdktf.booleanToHclTerraform(this._enableNat),
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
      ip_config_pool_list_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipConfigPoolListRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_external: {
        value: cdktf.booleanToHclTerraform(this._isExternal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_function_chain_reference: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._networkFunctionChainReference),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      owner_reference: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ownerReference),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      prefix_length: {
        value: cdktf.numberToHclTerraform(this._prefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_reference: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._projectReference),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      subnet_ip: {
        value: cdktf.stringToHclTerraform(this._subnetIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_type: {
        value: cdktf.stringToHclTerraform(this._subnetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_reference_uuid: {
        value: cdktf.stringToHclTerraform(this._vpcReferenceUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_name: {
        value: cdktf.stringToHclTerraform(this._vswitchName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      categories: {
        value: cdktf.listMapperHcl(subnetCategoriesToHclTerraform, true)(this._categories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SubnetCategoriesList",
      },
      timeouts: {
        value: subnetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SubnetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
