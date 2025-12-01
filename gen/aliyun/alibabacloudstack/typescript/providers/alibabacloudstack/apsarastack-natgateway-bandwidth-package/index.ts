// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_natgateway_bandwidth_package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackNatgatewayBandwidthPackageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_natgateway_bandwidth_package#bandwidth ApsarastackNatgatewayBandwidthPackage#bandwidth}
  */
  readonly bandwidth: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_natgateway_bandwidth_package#description ApsarastackNatgatewayBandwidthPackage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_natgateway_bandwidth_package#id ApsarastackNatgatewayBandwidthPackage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_natgateway_bandwidth_package#ip_count ApsarastackNatgatewayBandwidthPackage#ip_count}
  */
  readonly ipCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_natgateway_bandwidth_package#name ApsarastackNatgatewayBandwidthPackage#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_natgateway_bandwidth_package#natgateway_id ApsarastackNatgatewayBandwidthPackage#natgateway_id}
  */
  readonly natgatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_natgateway_bandwidth_package#status ApsarastackNatgatewayBandwidthPackage#status}
  */
  readonly status?: string;
}
export interface ApsarastackNatgatewayBandwidthPackagePublicIpAddresses {
}

export function apsarastackNatgatewayBandwidthPackagePublicIpAddressesToTerraform(struct?: ApsarastackNatgatewayBandwidthPackagePublicIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apsarastackNatgatewayBandwidthPackagePublicIpAddressesToHclTerraform(struct?: ApsarastackNatgatewayBandwidthPackagePublicIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApsarastackNatgatewayBandwidthPackagePublicIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackNatgatewayBandwidthPackagePublicIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackNatgatewayBandwidthPackagePublicIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocation_id - computed: true, optional: false, required: false
  public get allocationId() {
    return this.getStringAttribute('allocation_id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}

export class ApsarastackNatgatewayBandwidthPackagePublicIpAddressesList extends cdktf.ComplexList {

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
  public get(index: number): ApsarastackNatgatewayBandwidthPackagePublicIpAddressesOutputReference {
    return new ApsarastackNatgatewayBandwidthPackagePublicIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_natgateway_bandwidth_package apsarastack_natgateway_bandwidth_package}
*/
export class ApsarastackNatgatewayBandwidthPackage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_natgateway_bandwidth_package";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackNatgatewayBandwidthPackage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackNatgatewayBandwidthPackage to import
  * @param importFromId The id of the existing ApsarastackNatgatewayBandwidthPackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_natgateway_bandwidth_package#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackNatgatewayBandwidthPackage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_natgateway_bandwidth_package", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_natgateway_bandwidth_package apsarastack_natgateway_bandwidth_package} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackNatgatewayBandwidthPackageConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackNatgatewayBandwidthPackageConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_natgateway_bandwidth_package',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidth = config.bandwidth;
    this._description = config.description;
    this._id = config.id;
    this._ipCount = config.ipCount;
    this._name = config.name;
    this._natgatewayId = config.natgatewayId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // bandwidth_package_id - computed: true, optional: false, required: false
  public get bandwidthPackageId() {
    return this.getStringAttribute('bandwidth_package_id');
  }

  // business_status - computed: true, optional: false, required: false
  public get businessStatus() {
    return this.getStringAttribute('business_status');
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

  // instance_charge_type - computed: true, optional: false, required: false
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }

  // ip_count - computed: false, optional: false, required: true
  private _ipCount?: number; 
  public get ipCount() {
    return this.getNumberAttribute('ip_count');
  }
  public set ipCount(value: number) {
    this._ipCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCountInput() {
    return this._ipCount;
  }

  // isp - computed: true, optional: false, required: false
  public get isp() {
    return this.getStringAttribute('isp');
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

  // natgateway_id - computed: false, optional: false, required: true
  private _natgatewayId?: string; 
  public get natgatewayId() {
    return this.getStringAttribute('natgateway_id');
  }
  public set natgatewayId(value: string) {
    this._natgatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natgatewayIdInput() {
    return this._natgatewayId;
  }

  // public_ip_addresses - computed: true, optional: false, required: false
  private _publicIpAddresses = new ApsarastackNatgatewayBandwidthPackagePublicIpAddressesList(this, "public_ip_addresses", false);
  public get publicIpAddresses() {
    return this._publicIpAddresses;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_count: cdktf.numberToTerraform(this._ipCount),
      name: cdktf.stringToTerraform(this._name),
      natgateway_id: cdktf.stringToTerraform(this._natgatewayId),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_count: {
        value: cdktf.numberToHclTerraform(this._ipCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      natgateway_id: {
        value: cdktf.stringToHclTerraform(this._natgatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
