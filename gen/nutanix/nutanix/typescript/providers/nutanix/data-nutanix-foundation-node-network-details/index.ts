// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_node_network_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixFoundationNodeNetworkDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_node_network_details#id DataNutanixFoundationNodeNetworkDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_node_network_details#ipv6_addresses DataNutanixFoundationNodeNetworkDetails#ipv6_addresses}
  */
  readonly ipv6Addresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_node_network_details#timeout DataNutanixFoundationNodeNetworkDetails#timeout}
  */
  readonly timeout?: string;
}
export interface DataNutanixFoundationNodeNetworkDetailsNodes {
}

export function dataNutanixFoundationNodeNetworkDetailsNodesToTerraform(struct?: DataNutanixFoundationNodeNetworkDetailsNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFoundationNodeNetworkDetailsNodesToHclTerraform(struct?: DataNutanixFoundationNodeNetworkDetailsNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFoundationNodeNetworkDetailsNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFoundationNodeNetworkDetailsNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFoundationNodeNetworkDetailsNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cvm_gateway - computed: true, optional: false, required: false
  public get cvmGateway() {
    return this.getStringAttribute('cvm_gateway');
  }

  // cvm_ip - computed: true, optional: false, required: false
  public get cvmIp() {
    return this.getStringAttribute('cvm_ip');
  }

  // cvm_netmask - computed: true, optional: false, required: false
  public get cvmNetmask() {
    return this.getStringAttribute('cvm_netmask');
  }

  // cvm_vlan_id - computed: true, optional: false, required: false
  public get cvmVlanId() {
    return this.getStringAttribute('cvm_vlan_id');
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
  }

  // hypervisor_gateway - computed: true, optional: false, required: false
  public get hypervisorGateway() {
    return this.getStringAttribute('hypervisor_gateway');
  }

  // hypervisor_hostname - computed: true, optional: false, required: false
  public get hypervisorHostname() {
    return this.getStringAttribute('hypervisor_hostname');
  }

  // hypervisor_ip - computed: true, optional: false, required: false
  public get hypervisorIp() {
    return this.getStringAttribute('hypervisor_ip');
  }

  // hypervisor_netmask - computed: true, optional: false, required: false
  public get hypervisorNetmask() {
    return this.getStringAttribute('hypervisor_netmask');
  }

  // ipmi_gateway - computed: true, optional: false, required: false
  public get ipmiGateway() {
    return this.getStringAttribute('ipmi_gateway');
  }

  // ipmi_ip - computed: true, optional: false, required: false
  public get ipmiIp() {
    return this.getStringAttribute('ipmi_ip');
  }

  // ipmi_netmask - computed: true, optional: false, required: false
  public get ipmiNetmask() {
    return this.getStringAttribute('ipmi_netmask');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // node_serial - computed: true, optional: false, required: false
  public get nodeSerial() {
    return this.getStringAttribute('node_serial');
  }
}

export class DataNutanixFoundationNodeNetworkDetailsNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFoundationNodeNetworkDetailsNodesOutputReference {
    return new DataNutanixFoundationNodeNetworkDetailsNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_node_network_details nutanix_foundation_node_network_details}
*/
export class DataNutanixFoundationNodeNetworkDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_foundation_node_network_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixFoundationNodeNetworkDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixFoundationNodeNetworkDetails to import
  * @param importFromId The id of the existing DataNutanixFoundationNodeNetworkDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_node_network_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixFoundationNodeNetworkDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_foundation_node_network_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/foundation_node_network_details nutanix_foundation_node_network_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixFoundationNodeNetworkDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataNutanixFoundationNodeNetworkDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_foundation_node_network_details',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ipv6Addresses = config.ipv6Addresses;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ipv6_addresses - computed: false, optional: false, required: true
  private _ipv6Addresses?: string[]; 
  public get ipv6Addresses() {
    return this.getListAttribute('ipv6_addresses');
  }
  public set ipv6Addresses(value: string[]) {
    this._ipv6Addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataNutanixFoundationNodeNetworkDetailsNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Addresses),
      timeout: cdktf.stringToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Addresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
