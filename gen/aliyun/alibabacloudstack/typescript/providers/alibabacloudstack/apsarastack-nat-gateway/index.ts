// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nat_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackNatGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nat_gateway#description ApsarastackNatGateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nat_gateway#id ApsarastackNatGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nat_gateway#name ApsarastackNatGateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nat_gateway#nat_gateway_name ApsarastackNatGateway#nat_gateway_name}
  */
  readonly natGatewayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nat_gateway#spec ApsarastackNatGateway#spec}
  */
  readonly spec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nat_gateway#specification ApsarastackNatGateway#specification}
  */
  readonly specification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nat_gateway#tags ApsarastackNatGateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nat_gateway#vpc_id ApsarastackNatGateway#vpc_id}
  */
  readonly vpcId: string;
  /**
  * bandwidth_packages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nat_gateway#bandwidth_packages ApsarastackNatGateway#bandwidth_packages}
  */
  readonly bandwidthPackages?: ApsarastackNatGatewayBandwidthPackages[] | cdktf.IResolvable;
}
export interface ApsarastackNatGatewayBandwidthPackages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nat_gateway#bandwidth ApsarastackNatGateway#bandwidth}
  */
  readonly bandwidth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nat_gateway#ip_count ApsarastackNatGateway#ip_count}
  */
  readonly ipCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nat_gateway#zone ApsarastackNatGateway#zone}
  */
  readonly zone?: string;
}

export function apsarastackNatGatewayBandwidthPackagesToTerraform(struct?: ApsarastackNatGatewayBandwidthPackages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    ip_count: cdktf.numberToTerraform(struct!.ipCount),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function apsarastackNatGatewayBandwidthPackagesToHclTerraform(struct?: ApsarastackNatGatewayBandwidthPackages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_count: {
      value: cdktf.numberToHclTerraform(struct!.ipCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackNatGatewayBandwidthPackagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackNatGatewayBandwidthPackages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._ipCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCount = this._ipCount;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackNatGatewayBandwidthPackages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidth = undefined;
      this._ipCount = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidth = value.bandwidth;
      this._ipCount = value.ipCount;
      this._zone = value.zone;
    }
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
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

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return this.getStringAttribute('public_ip_addresses');
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
}

export class ApsarastackNatGatewayBandwidthPackagesList extends cdktf.ComplexList {
  public internalValue? : ApsarastackNatGatewayBandwidthPackages[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackNatGatewayBandwidthPackagesOutputReference {
    return new ApsarastackNatGatewayBandwidthPackagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nat_gateway apsarastack_nat_gateway}
*/
export class ApsarastackNatGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_nat_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackNatGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackNatGateway to import
  * @param importFromId The id of the existing ApsarastackNatGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nat_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackNatGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_nat_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nat_gateway apsarastack_nat_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackNatGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackNatGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_nat_gateway',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._natGatewayName = config.natGatewayName;
    this._spec = config.spec;
    this._specification = config.specification;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._bandwidthPackages.internalValue = config.bandwidthPackages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_package_ids - computed: true, optional: false, required: false
  public get bandwidthPackageIds() {
    return this.getStringAttribute('bandwidth_package_ids');
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

  // forward_table_ids - computed: true, optional: false, required: false
  public get forwardTableIds() {
    return this.getStringAttribute('forward_table_ids');
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

  // nat_gateway_name - computed: true, optional: true, required: false
  private _natGatewayName?: string; 
  public get natGatewayName() {
    return this.getStringAttribute('nat_gateway_name');
  }
  public set natGatewayName(value: string) {
    this._natGatewayName = value;
  }
  public resetNatGatewayName() {
    this._natGatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayNameInput() {
    return this._natGatewayName;
  }

  // snat_table_ids - computed: true, optional: false, required: false
  public get snatTableIds() {
    return this.getStringAttribute('snat_table_ids');
  }

  // spec - computed: true, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // specification - computed: true, optional: true, required: false
  private _specification?: string; 
  public get specification() {
    return this.getStringAttribute('specification');
  }
  public set specification(value: string) {
    this._specification = value;
  }
  public resetSpecification() {
    this._specification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationInput() {
    return this._specification;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // bandwidth_packages - computed: false, optional: true, required: false
  private _bandwidthPackages = new ApsarastackNatGatewayBandwidthPackagesList(this, "bandwidth_packages", false);
  public get bandwidthPackages() {
    return this._bandwidthPackages;
  }
  public putBandwidthPackages(value: ApsarastackNatGatewayBandwidthPackages[] | cdktf.IResolvable) {
    this._bandwidthPackages.internalValue = value;
  }
  public resetBandwidthPackages() {
    this._bandwidthPackages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPackagesInput() {
    return this._bandwidthPackages.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nat_gateway_name: cdktf.stringToTerraform(this._natGatewayName),
      spec: cdktf.stringToTerraform(this._spec),
      specification: cdktf.stringToTerraform(this._specification),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      bandwidth_packages: cdktf.listMapper(apsarastackNatGatewayBandwidthPackagesToTerraform, true)(this._bandwidthPackages.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_gateway_name: {
        value: cdktf.stringToHclTerraform(this._natGatewayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: cdktf.stringToHclTerraform(this._spec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      specification: {
        value: cdktf.stringToHclTerraform(this._specification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_packages: {
        value: cdktf.listMapperHcl(apsarastackNatGatewayBandwidthPackagesToHclTerraform, true)(this._bandwidthPackages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApsarastackNatGatewayBandwidthPackagesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
