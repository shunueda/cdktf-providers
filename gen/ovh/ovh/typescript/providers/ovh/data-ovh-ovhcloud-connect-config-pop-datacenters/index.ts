// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ovhcloud_connect_config_pop_datacenters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhOvhcloudConnectConfigPopDatacentersConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Pop Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ovhcloud_connect_config_pop_datacenters#config_pop_id DataOvhOvhcloudConnectConfigPopDatacenters#config_pop_id}
  */
  readonly configPopId: number;
  /**
  * Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ovhcloud_connect_config_pop_datacenters#service_name DataOvhOvhcloudConnectConfigPopDatacenters#service_name}
  */
  readonly serviceName: string;
}
export interface DataOvhOvhcloudConnectConfigPopDatacentersDatacenterConfigs {
  /**
  * Datacenter ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ovhcloud_connect_config_pop_datacenters#datacenter_id DataOvhOvhcloudConnectConfigPopDatacenters#datacenter_id}
  */
  readonly datacenterId: number;
}

export function dataOvhOvhcloudConnectConfigPopDatacentersDatacenterConfigsToTerraform(struct?: DataOvhOvhcloudConnectConfigPopDatacentersDatacenterConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter_id: cdktf.numberToTerraform(struct!.datacenterId),
  }
}


export function dataOvhOvhcloudConnectConfigPopDatacentersDatacenterConfigsToHclTerraform(struct?: DataOvhOvhcloudConnectConfigPopDatacentersDatacenterConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter_id: {
      value: cdktf.numberToHclTerraform(struct!.datacenterId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOvhOvhcloudConnectConfigPopDatacentersDatacenterConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhOvhcloudConnectConfigPopDatacentersDatacenterConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterId = this._datacenterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhOvhcloudConnectConfigPopDatacentersDatacenterConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datacenterId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datacenterId = value.datacenterId;
    }
  }

  // datacenter_id - computed: true, optional: false, required: true
  private _datacenterId?: number; 
  public get datacenterId() {
    return this.getNumberAttribute('datacenter_id');
  }
  public set datacenterId(value: number) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ovh_bgp_area - computed: true, optional: false, required: false
  public get ovhBgpArea() {
    return this.getNumberAttribute('ovh_bgp_area');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
}

export class DataOvhOvhcloudConnectConfigPopDatacentersDatacenterConfigsList extends cdktf.ComplexList {
  public internalValue? : DataOvhOvhcloudConnectConfigPopDatacentersDatacenterConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataOvhOvhcloudConnectConfigPopDatacentersDatacenterConfigsOutputReference {
    return new DataOvhOvhcloudConnectConfigPopDatacentersDatacenterConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ovhcloud_connect_config_pop_datacenters ovh_ovhcloud_connect_config_pop_datacenters}
*/
export class DataOvhOvhcloudConnectConfigPopDatacenters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_ovhcloud_connect_config_pop_datacenters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhOvhcloudConnectConfigPopDatacenters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhOvhcloudConnectConfigPopDatacenters to import
  * @param importFromId The id of the existing DataOvhOvhcloudConnectConfigPopDatacenters that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ovhcloud_connect_config_pop_datacenters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhOvhcloudConnectConfigPopDatacenters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_ovhcloud_connect_config_pop_datacenters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ovhcloud_connect_config_pop_datacenters ovh_ovhcloud_connect_config_pop_datacenters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhOvhcloudConnectConfigPopDatacentersConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhOvhcloudConnectConfigPopDatacentersConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_ovhcloud_connect_config_pop_datacenters',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configPopId = config.configPopId;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // datacenter_configs - computed: true, optional: false, required: false
  private _datacenterConfigs = new DataOvhOvhcloudConnectConfigPopDatacentersDatacenterConfigsList(this, "datacenter_configs", true);
  public get datacenterConfigs() {
    return this._datacenterConfigs;
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
      config_pop_id: cdktf.numberToTerraform(this._configPopId),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
