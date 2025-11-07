// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_single_lan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiApplianceSingleLanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_single_lan#network_id DataMerakiApplianceSingleLan#network_id}
  */
  readonly networkId: string;
}
export interface DataMerakiApplianceSingleLanIpv6PrefixAssignments {
}

export function dataMerakiApplianceSingleLanIpv6PrefixAssignmentsToTerraform(struct?: DataMerakiApplianceSingleLanIpv6PrefixAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiApplianceSingleLanIpv6PrefixAssignmentsToHclTerraform(struct?: DataMerakiApplianceSingleLanIpv6PrefixAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiApplianceSingleLanIpv6PrefixAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiApplianceSingleLanIpv6PrefixAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiApplianceSingleLanIpv6PrefixAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autonomous - computed: true, optional: false, required: false
  public get autonomous() {
    return this.getBooleanAttribute('autonomous');
  }

  // origin_interfaces - computed: true, optional: false, required: false
  public get originInterfaces() {
    return this.getListAttribute('origin_interfaces');
  }

  // origin_type - computed: true, optional: false, required: false
  public get originType() {
    return this.getStringAttribute('origin_type');
  }

  // static_appliance_ip6 - computed: true, optional: false, required: false
  public get staticApplianceIp6() {
    return this.getStringAttribute('static_appliance_ip6');
  }

  // static_prefix - computed: true, optional: false, required: false
  public get staticPrefix() {
    return this.getStringAttribute('static_prefix');
  }
}

export class DataMerakiApplianceSingleLanIpv6PrefixAssignmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiApplianceSingleLanIpv6PrefixAssignmentsOutputReference {
    return new DataMerakiApplianceSingleLanIpv6PrefixAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_single_lan meraki_appliance_single_lan}
*/
export class DataMerakiApplianceSingleLan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_single_lan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiApplianceSingleLan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiApplianceSingleLan to import
  * @param importFromId The id of the existing DataMerakiApplianceSingleLan that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_single_lan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiApplianceSingleLan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_single_lan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_single_lan meraki_appliance_single_lan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiApplianceSingleLanConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiApplianceSingleLanConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_single_lan',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appliance_ip - computed: true, optional: false, required: false
  public get applianceIp() {
    return this.getStringAttribute('appliance_ip');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv6_enabled - computed: true, optional: false, required: false
  public get ipv6Enabled() {
    return this.getBooleanAttribute('ipv6_enabled');
  }

  // ipv6_prefix_assignments - computed: true, optional: false, required: false
  private _ipv6PrefixAssignments = new DataMerakiApplianceSingleLanIpv6PrefixAssignmentsList(this, "ipv6_prefix_assignments", false);
  public get ipv6PrefixAssignments() {
    return this._ipv6PrefixAssignments;
  }

  // mandatory_dhcp_enabled - computed: true, optional: false, required: false
  public get mandatoryDhcpEnabled() {
    return this.getBooleanAttribute('mandatory_dhcp_enabled');
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

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
