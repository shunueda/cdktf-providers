// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_gateway_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateNatGatewayV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_gateway_v3#description PrivateNatGatewayV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_gateway_v3#enterprise_project_id PrivateNatGatewayV3#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_gateway_v3#name PrivateNatGatewayV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_gateway_v3#spec PrivateNatGatewayV3#spec}
  */
  readonly spec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_gateway_v3#tags PrivateNatGatewayV3#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * downlink_vpcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_gateway_v3#downlink_vpcs PrivateNatGatewayV3#downlink_vpcs}
  */
  readonly downlinkVpcs: PrivateNatGatewayV3DownlinkVpcs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_gateway_v3#timeouts PrivateNatGatewayV3#timeouts}
  */
  readonly timeouts?: PrivateNatGatewayV3Timeouts;
}
export interface PrivateNatGatewayV3DownlinkVpcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_gateway_v3#ngport_ip_address PrivateNatGatewayV3#ngport_ip_address}
  */
  readonly ngportIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_gateway_v3#virsubnet_id PrivateNatGatewayV3#virsubnet_id}
  */
  readonly virsubnetId: string;
}

export function privateNatGatewayV3DownlinkVpcsToTerraform(struct?: PrivateNatGatewayV3DownlinkVpcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngport_ip_address: cdktf.stringToTerraform(struct!.ngportIpAddress),
    virsubnet_id: cdktf.stringToTerraform(struct!.virsubnetId),
  }
}


export function privateNatGatewayV3DownlinkVpcsToHclTerraform(struct?: PrivateNatGatewayV3DownlinkVpcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngport_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ngportIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virsubnet_id: {
      value: cdktf.stringToHclTerraform(struct!.virsubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateNatGatewayV3DownlinkVpcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivateNatGatewayV3DownlinkVpcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngportIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngportIpAddress = this._ngportIpAddress;
    }
    if (this._virsubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virsubnetId = this._virsubnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateNatGatewayV3DownlinkVpcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngportIpAddress = undefined;
      this._virsubnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngportIpAddress = value.ngportIpAddress;
      this._virsubnetId = value.virsubnetId;
    }
  }

  // ngport_ip_address - computed: true, optional: true, required: false
  private _ngportIpAddress?: string; 
  public get ngportIpAddress() {
    return this.getStringAttribute('ngport_ip_address');
  }
  public set ngportIpAddress(value: string) {
    this._ngportIpAddress = value;
  }
  public resetNgportIpAddress() {
    this._ngportIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngportIpAddressInput() {
    return this._ngportIpAddress;
  }

  // virsubnet_id - computed: false, optional: false, required: true
  private _virsubnetId?: string; 
  public get virsubnetId() {
    return this.getStringAttribute('virsubnet_id');
  }
  public set virsubnetId(value: string) {
    this._virsubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virsubnetIdInput() {
    return this._virsubnetId;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class PrivateNatGatewayV3DownlinkVpcsList extends cdktf.ComplexList {
  public internalValue? : PrivateNatGatewayV3DownlinkVpcs[] | cdktf.IResolvable

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
  public get(index: number): PrivateNatGatewayV3DownlinkVpcsOutputReference {
    return new PrivateNatGatewayV3DownlinkVpcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateNatGatewayV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_gateway_v3#create PrivateNatGatewayV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_gateway_v3#delete PrivateNatGatewayV3#delete}
  */
  readonly delete?: string;
}

export function privateNatGatewayV3TimeoutsToTerraform(struct?: PrivateNatGatewayV3Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function privateNatGatewayV3TimeoutsToHclTerraform(struct?: PrivateNatGatewayV3Timeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateNatGatewayV3TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateNatGatewayV3Timeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateNatGatewayV3Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_gateway_v3 opentelekomcloud_private_nat_gateway_v3}
*/
export class PrivateNatGatewayV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_private_nat_gateway_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateNatGatewayV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateNatGatewayV3 to import
  * @param importFromId The id of the existing PrivateNatGatewayV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_gateway_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateNatGatewayV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_private_nat_gateway_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_gateway_v3 opentelekomcloud_private_nat_gateway_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateNatGatewayV3Config
  */
  public constructor(scope: Construct, id: string, config: PrivateNatGatewayV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_private_nat_gateway_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52'
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
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._name = config.name;
    this._spec = config.spec;
    this._tags = config.tags;
    this._downlinkVpcs.internalValue = config.downlinkVpcs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // enterprise_project_id - computed: true, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // rule_max - computed: true, optional: false, required: false
  public get ruleMax() {
    return this.getNumberAttribute('rule_max');
  }

  // spec - computed: false, optional: true, required: false
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // transit_ip_pool_size_max - computed: true, optional: false, required: false
  public get transitIpPoolSizeMax() {
    return this.getNumberAttribute('transit_ip_pool_size_max');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // downlink_vpcs - computed: false, optional: false, required: true
  private _downlinkVpcs = new PrivateNatGatewayV3DownlinkVpcsList(this, "downlink_vpcs", false);
  public get downlinkVpcs() {
    return this._downlinkVpcs;
  }
  public putDownlinkVpcs(value: PrivateNatGatewayV3DownlinkVpcs[] | cdktf.IResolvable) {
    this._downlinkVpcs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkVpcsInput() {
    return this._downlinkVpcs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrivateNatGatewayV3TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrivateNatGatewayV3Timeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      name: cdktf.stringToTerraform(this._name),
      spec: cdktf.stringToTerraform(this._spec),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      downlink_vpcs: cdktf.listMapper(privateNatGatewayV3DownlinkVpcsToTerraform, true)(this._downlinkVpcs.internalValue),
      timeouts: privateNatGatewayV3TimeoutsToTerraform(this._timeouts.internalValue),
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
      enterprise_project_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectId),
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
      spec: {
        value: cdktf.stringToHclTerraform(this._spec),
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
      downlink_vpcs: {
        value: cdktf.listMapperHcl(privateNatGatewayV3DownlinkVpcsToHclTerraform, true)(this._downlinkVpcs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateNatGatewayV3DownlinkVpcsList",
      },
      timeouts: {
        value: privateNatGatewayV3TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivateNatGatewayV3Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
