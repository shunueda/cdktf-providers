// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/core_ip_inventory_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreIpInventorySubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/core_ip_inventory_subnet#id DataOciCoreIpInventorySubnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/core_ip_inventory_subnet#subnet_id DataOciCoreIpInventorySubnet#subnet_id}
  */
  readonly subnetId: string;
}
export interface DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary {
}

export function dataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryToTerraform(struct?: DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryToHclTerraform(struct?: DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_type - computed: true, optional: false, required: false
  public get addressType() {
    return this.getStringAttribute('address_type');
  }

  // assigned_resource_name - computed: true, optional: false, required: false
  public get assignedResourceName() {
    return this.getStringAttribute('assigned_resource_name');
  }

  // assigned_resource_type - computed: true, optional: false, required: false
  public get assignedResourceType() {
    return this.getStringAttribute('assigned_resource_type');
  }

  // assigned_time - computed: true, optional: false, required: false
  public get assignedTime() {
    return this.getStringAttribute('assigned_time');
  }

  // associated_public_ip - computed: true, optional: false, required: false
  public get associatedPublicIp() {
    return this.getStringAttribute('associated_public_ip');
  }

  // associated_public_ip_pool - computed: true, optional: false, required: false
  public get associatedPublicIpPool() {
    return this.getStringAttribute('associated_public_ip_pool');
  }

  // dns_host_name - computed: true, optional: false, required: false
  public get dnsHostName() {
    return this.getStringAttribute('dns_host_name');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_address_lifetime - computed: true, optional: false, required: false
  public get ipAddressLifetime() {
    return this.getStringAttribute('ip_address_lifetime');
  }

  // ip_id - computed: true, optional: false, required: false
  public get ipId() {
    return this.getStringAttribute('ip_id');
  }

  // parent_cidr - computed: true, optional: false, required: false
  public get parentCidr() {
    return this.getStringAttribute('parent_cidr');
  }

  // public_ip_lifetime - computed: true, optional: false, required: false
  public get publicIpLifetime() {
    return this.getStringAttribute('public_ip_lifetime');
  }
}

export class DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference {
    return new DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/core_ip_inventory_subnet oci_core_ip_inventory_subnet}
*/
export class DataOciCoreIpInventorySubnet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_ip_inventory_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreIpInventorySubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreIpInventorySubnet to import
  * @param importFromId The id of the existing DataOciCoreIpInventorySubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/core_ip_inventory_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreIpInventorySubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_ip_inventory_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/core_ip_inventory_subnet oci_core_ip_inventory_subnet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreIpInventorySubnetConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreIpInventorySubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_ip_inventory_subnet',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
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
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // ip_inventory_subnet_count - computed: true, optional: false, required: false
  public get ipInventorySubnetCount() {
    return this.getNumberAttribute('ip_inventory_subnet_count');
  }

  // ip_inventory_subnet_resource_summary - computed: true, optional: false, required: false
  private _ipInventorySubnetResourceSummary = new DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList(this, "ip_inventory_subnet_resource_summary", false);
  public get ipInventorySubnetResourceSummary() {
    return this._ipInventorySubnetResourceSummary;
  }

  // last_updated_timestamp - computed: true, optional: false, required: false
  public get lastUpdatedTimestamp() {
    return this.getStringAttribute('last_updated_timestamp');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
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
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
