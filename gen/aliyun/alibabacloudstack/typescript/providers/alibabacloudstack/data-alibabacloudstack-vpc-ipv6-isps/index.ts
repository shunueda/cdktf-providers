// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpc_ipv6_isps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackVpcIpv6IspsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpc_ipv6_isps#id DataAlibabacloudstackVpcIpv6Isps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpc_ipv6_isps#ids DataAlibabacloudstackVpcIpv6Isps#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpc_ipv6_isps#lock_status DataAlibabacloudstackVpcIpv6Isps#lock_status}
  */
  readonly lockStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpc_ipv6_isps#service_provider DataAlibabacloudstackVpcIpv6Isps#service_provider}
  */
  readonly serviceProvider?: string;
}
export interface DataAlibabacloudstackVpcIpv6IspsIpv6Isps {
}

export function dataAlibabacloudstackVpcIpv6IspsIpv6IspsToTerraform(struct?: DataAlibabacloudstackVpcIpv6IspsIpv6Isps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackVpcIpv6IspsIpv6IspsToHclTerraform(struct?: DataAlibabacloudstackVpcIpv6IspsIpv6Isps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackVpcIpv6IspsIpv6IspsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackVpcIpv6IspsIpv6Isps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackVpcIpv6IspsIpv6Isps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_count - computed: true, optional: false, required: false
  public get availableCount() {
    return this.getNumberAttribute('available_count');
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_use_count - computed: true, optional: false, required: false
  public get inUseCount() {
    return this.getNumberAttribute('in_use_count');
  }

  // lock_status - computed: true, optional: false, required: false
  public get lockStatus() {
    return this.getStringAttribute('lock_status');
  }

  // need_declare - computed: true, optional: false, required: false
  public get needDeclare() {
    return this.getNumberAttribute('need_declare');
  }

  // pool_id - computed: true, optional: false, required: false
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }

  // service_provider - computed: true, optional: false, required: false
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // ula - computed: true, optional: false, required: false
  public get ula() {
    return this.getBooleanAttribute('ula');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataAlibabacloudstackVpcIpv6IspsIpv6IspsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackVpcIpv6IspsIpv6IspsOutputReference {
    return new DataAlibabacloudstackVpcIpv6IspsIpv6IspsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpc_ipv6_isps alibabacloudstack_vpc_ipv6_isps}
*/
export class DataAlibabacloudstackVpcIpv6Isps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_vpc_ipv6_isps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackVpcIpv6Isps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackVpcIpv6Isps to import
  * @param importFromId The id of the existing DataAlibabacloudstackVpcIpv6Isps that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpc_ipv6_isps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackVpcIpv6Isps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_vpc_ipv6_isps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpc_ipv6_isps alibabacloudstack_vpc_ipv6_isps} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackVpcIpv6IspsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackVpcIpv6IspsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_vpc_ipv6_isps',
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
    this._id = config.id;
    this._ids = config.ids;
    this._lockStatus = config.lockStatus;
    this._serviceProvider = config.serviceProvider;
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

  // ipv6_isps - computed: true, optional: false, required: false
  private _ipv6Isps = new DataAlibabacloudstackVpcIpv6IspsIpv6IspsList(this, "ipv6_isps", false);
  public get ipv6Isps() {
    return this._ipv6Isps;
  }

  // lock_status - computed: false, optional: true, required: false
  private _lockStatus?: string; 
  public get lockStatus() {
    return this.getStringAttribute('lock_status');
  }
  public set lockStatus(value: string) {
    this._lockStatus = value;
  }
  public resetLockStatus() {
    this._lockStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockStatusInput() {
    return this._lockStatus;
  }

  // service_provider - computed: false, optional: true, required: false
  private _serviceProvider?: string; 
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }
  public set serviceProvider(value: string) {
    this._serviceProvider = value;
  }
  public resetServiceProvider() {
    this._serviceProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderInput() {
    return this._serviceProvider;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      lock_status: cdktf.stringToTerraform(this._lockStatus),
      service_provider: cdktf.stringToTerraform(this._serviceProvider),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      lock_status: {
        value: cdktf.stringToHclTerraform(this._lockStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_provider: {
        value: cdktf.stringToHclTerraform(this._serviceProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
