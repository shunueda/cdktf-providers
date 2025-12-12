// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/dns_gtm_access_strategies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackDnsGtmAccessStrategiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/dns_gtm_access_strategies#gtm_instance_id DataAlibabacloudstackDnsGtmAccessStrategies#gtm_instance_id}
  */
  readonly gtmInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/dns_gtm_access_strategies#id DataAlibabacloudstackDnsGtmAccessStrategies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/dns_gtm_access_strategies#ids DataAlibabacloudstackDnsGtmAccessStrategies#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/dns_gtm_access_strategies#name_regex DataAlibabacloudstackDnsGtmAccessStrategies#name_regex}
  */
  readonly nameRegex?: string;
}
export interface DataAlibabacloudstackDnsGtmAccessStrategiesStrategies {
}

export function dataAlibabacloudstackDnsGtmAccessStrategiesStrategiesToTerraform(struct?: DataAlibabacloudstackDnsGtmAccessStrategiesStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackDnsGtmAccessStrategiesStrategiesToHclTerraform(struct?: DataAlibabacloudstackDnsGtmAccessStrategiesStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackDnsGtmAccessStrategiesStrategiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackDnsGtmAccessStrategiesStrategies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackDnsGtmAccessStrategiesStrategies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_available_addr_num - computed: true, optional: false, required: false
  public get defaultAvailableAddrNum() {
    return this.getNumberAttribute('default_available_addr_num');
  }

  // default_gtm_address_pool_id - computed: true, optional: false, required: false
  public get defaultGtmAddressPoolId() {
    return this.getStringAttribute('default_gtm_address_pool_id');
  }

  // default_gtm_address_pool_name - computed: true, optional: false, required: false
  public get defaultGtmAddressPoolName() {
    return this.getStringAttribute('default_gtm_address_pool_name');
  }

  // default_gtm_address_pool_type - computed: true, optional: false, required: false
  public get defaultGtmAddressPoolType() {
    return this.getStringAttribute('default_gtm_address_pool_type');
  }

  // default_min_available_addr_num - computed: true, optional: false, required: false
  public get defaultMinAvailableAddrNum() {
    return this.getNumberAttribute('default_min_available_addr_num');
  }

  // failover_available_addr_num - computed: true, optional: false, required: false
  public get failoverAvailableAddrNum() {
    return this.getNumberAttribute('failover_available_addr_num');
  }

  // failover_gtm_address_pool_id - computed: true, optional: false, required: false
  public get failoverGtmAddressPoolId() {
    return this.getStringAttribute('failover_gtm_address_pool_id');
  }

  // failover_gtm_address_pool_name - computed: true, optional: false, required: false
  public get failoverGtmAddressPoolName() {
    return this.getStringAttribute('failover_gtm_address_pool_name');
  }

  // failover_gtm_address_pool_type - computed: true, optional: false, required: false
  public get failoverGtmAddressPoolType() {
    return this.getStringAttribute('failover_gtm_address_pool_type');
  }

  // failover_min_available_addr_num - computed: true, optional: false, required: false
  public get failoverMinAvailableAddrNum() {
    return this.getNumberAttribute('failover_min_available_addr_num');
  }

  // gtm_instance_id - computed: true, optional: false, required: false
  public get gtmInstanceId() {
    return this.getStringAttribute('gtm_instance_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_use_gtm_address_pool_id - computed: true, optional: false, required: false
  public get inUseGtmAddressPoolId() {
    return this.getStringAttribute('in_use_gtm_address_pool_id');
  }

  // in_use_gtm_address_pool_name - computed: true, optional: false, required: false
  public get inUseGtmAddressPoolName() {
    return this.getStringAttribute('in_use_gtm_address_pool_name');
  }

  // line_ids - computed: true, optional: false, required: false
  public get lineIds() {
    return cdktf.Fn.tolist(this.getListAttribute('line_ids'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // specified_gtm_address_pool - computed: true, optional: false, required: false
  public get specifiedGtmAddressPool() {
    return this.getStringAttribute('specified_gtm_address_pool');
  }

  // switch_mode - computed: true, optional: false, required: false
  public get switchMode() {
    return this.getStringAttribute('switch_mode');
  }
}

export class DataAlibabacloudstackDnsGtmAccessStrategiesStrategiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackDnsGtmAccessStrategiesStrategiesOutputReference {
    return new DataAlibabacloudstackDnsGtmAccessStrategiesStrategiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/dns_gtm_access_strategies alibabacloudstack_dns_gtm_access_strategies}
*/
export class DataAlibabacloudstackDnsGtmAccessStrategies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_dns_gtm_access_strategies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackDnsGtmAccessStrategies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackDnsGtmAccessStrategies to import
  * @param importFromId The id of the existing DataAlibabacloudstackDnsGtmAccessStrategies that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/dns_gtm_access_strategies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackDnsGtmAccessStrategies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_dns_gtm_access_strategies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/dns_gtm_access_strategies alibabacloudstack_dns_gtm_access_strategies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackDnsGtmAccessStrategiesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackDnsGtmAccessStrategiesConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_dns_gtm_access_strategies',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gtmInstanceId = config.gtmInstanceId;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gtm_instance_id - computed: false, optional: false, required: true
  private _gtmInstanceId?: string; 
  public get gtmInstanceId() {
    return this.getStringAttribute('gtm_instance_id');
  }
  public set gtmInstanceId(value: string) {
    this._gtmInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gtmInstanceIdInput() {
    return this._gtmInstanceId;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // strategies - computed: true, optional: false, required: false
  private _strategies = new DataAlibabacloudstackDnsGtmAccessStrategiesStrategiesList(this, "strategies", false);
  public get strategies() {
    return this._strategies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gtm_instance_id: cdktf.stringToTerraform(this._gtmInstanceId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gtm_instance_id: {
        value: cdktf.stringToHclTerraform(this._gtmInstanceId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
