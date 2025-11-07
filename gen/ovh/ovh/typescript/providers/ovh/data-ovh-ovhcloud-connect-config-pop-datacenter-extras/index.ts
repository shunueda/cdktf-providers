// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ovhcloud_connect_config_pop_datacenter_extras
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhOvhcloudConnectConfigPopDatacenterExtrasConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Datacenter Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ovhcloud_connect_config_pop_datacenter_extras#config_datacenter_id DataOvhOvhcloudConnectConfigPopDatacenterExtras#config_datacenter_id}
  */
  readonly configDatacenterId: number;
  /**
  * ID of the Pop Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ovhcloud_connect_config_pop_datacenter_extras#config_pop_id DataOvhOvhcloudConnectConfigPopDatacenterExtras#config_pop_id}
  */
  readonly configPopId: number;
  /**
  * Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ovhcloud_connect_config_pop_datacenter_extras#service_name DataOvhOvhcloudConnectConfigPopDatacenterExtras#service_name}
  */
  readonly serviceName: string;
}
export interface DataOvhOvhcloudConnectConfigPopDatacenterExtrasExtraConfigs {
}

export function dataOvhOvhcloudConnectConfigPopDatacenterExtrasExtraConfigsToTerraform(struct?: DataOvhOvhcloudConnectConfigPopDatacenterExtrasExtraConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhOvhcloudConnectConfigPopDatacenterExtrasExtraConfigsToHclTerraform(struct?: DataOvhOvhcloudConnectConfigPopDatacenterExtrasExtraConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhOvhcloudConnectConfigPopDatacenterExtrasExtraConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhOvhcloudConnectConfigPopDatacenterExtrasExtraConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhOvhcloudConnectConfigPopDatacenterExtrasExtraConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp_neighbor_area - computed: true, optional: false, required: false
  public get bgpNeighborArea() {
    return this.getNumberAttribute('bgp_neighbor_area');
  }

  // bgp_neighbor_ip - computed: true, optional: false, required: false
  public get bgpNeighborIp() {
    return this.getStringAttribute('bgp_neighbor_ip');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // next_hop - computed: true, optional: false, required: false
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOvhOvhcloudConnectConfigPopDatacenterExtrasExtraConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataOvhOvhcloudConnectConfigPopDatacenterExtrasExtraConfigsOutputReference {
    return new DataOvhOvhcloudConnectConfigPopDatacenterExtrasExtraConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ovhcloud_connect_config_pop_datacenter_extras ovh_ovhcloud_connect_config_pop_datacenter_extras}
*/
export class DataOvhOvhcloudConnectConfigPopDatacenterExtras extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_ovhcloud_connect_config_pop_datacenter_extras";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhOvhcloudConnectConfigPopDatacenterExtras resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhOvhcloudConnectConfigPopDatacenterExtras to import
  * @param importFromId The id of the existing DataOvhOvhcloudConnectConfigPopDatacenterExtras that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ovhcloud_connect_config_pop_datacenter_extras#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhOvhcloudConnectConfigPopDatacenterExtras to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_ovhcloud_connect_config_pop_datacenter_extras", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ovhcloud_connect_config_pop_datacenter_extras ovh_ovhcloud_connect_config_pop_datacenter_extras} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhOvhcloudConnectConfigPopDatacenterExtrasConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhOvhcloudConnectConfigPopDatacenterExtrasConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_ovhcloud_connect_config_pop_datacenter_extras',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configDatacenterId = config.configDatacenterId;
    this._configPopId = config.configPopId;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_datacenter_id - computed: false, optional: false, required: true
  private _configDatacenterId?: number; 
  public get configDatacenterId() {
    return this.getNumberAttribute('config_datacenter_id');
  }
  public set configDatacenterId(value: number) {
    this._configDatacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configDatacenterIdInput() {
    return this._configDatacenterId;
  }

  // config_pop_id - computed: false, optional: false, required: true
  private _configPopId?: number; 
  public get configPopId() {
    return this.getNumberAttribute('config_pop_id');
  }
  public set configPopId(value: number) {
    this._configPopId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configPopIdInput() {
    return this._configPopId;
  }

  // extra_configs - computed: true, optional: false, required: false
  private _extraConfigs = new DataOvhOvhcloudConnectConfigPopDatacenterExtrasExtraConfigsList(this, "extra_configs", true);
  public get extraConfigs() {
    return this._extraConfigs;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_datacenter_id: cdktf.numberToTerraform(this._configDatacenterId),
      config_pop_id: cdktf.numberToTerraform(this._configPopId),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_datacenter_id: {
        value: cdktf.numberToHclTerraform(this._configDatacenterId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_pop_id: {
        value: cdktf.numberToHclTerraform(this._configPopId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
