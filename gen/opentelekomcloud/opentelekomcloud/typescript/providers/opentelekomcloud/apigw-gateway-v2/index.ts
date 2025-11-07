// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigwGatewayV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#availability_zones ApigwGatewayV2#availability_zones}
  */
  readonly availabilityZones: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#bandwidth_charging_mode ApigwGatewayV2#bandwidth_charging_mode}
  */
  readonly bandwidthChargingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#bandwidth_size ApigwGatewayV2#bandwidth_size}
  */
  readonly bandwidthSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#description ApigwGatewayV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#enterprise_project_id ApigwGatewayV2#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#id ApigwGatewayV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#ingress_bandwidth_charging_mode ApigwGatewayV2#ingress_bandwidth_charging_mode}
  */
  readonly ingressBandwidthChargingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#ingress_bandwidth_size ApigwGatewayV2#ingress_bandwidth_size}
  */
  readonly ingressBandwidthSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#loadbalancer_provider ApigwGatewayV2#loadbalancer_provider}
  */
  readonly loadbalancerProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#maintain_begin ApigwGatewayV2#maintain_begin}
  */
  readonly maintainBegin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#name ApigwGatewayV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#security_group_id ApigwGatewayV2#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#spec_id ApigwGatewayV2#spec_id}
  */
  readonly specId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#subnet_id ApigwGatewayV2#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#tags ApigwGatewayV2#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#vpc_id ApigwGatewayV2#vpc_id}
  */
  readonly vpcId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#timeouts ApigwGatewayV2#timeouts}
  */
  readonly timeouts?: ApigwGatewayV2Timeouts;
}
export interface ApigwGatewayV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#create ApigwGatewayV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#delete ApigwGatewayV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#update ApigwGatewayV2#update}
  */
  readonly update?: string;
}

export function apigwGatewayV2TimeoutsToTerraform(struct?: ApigwGatewayV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function apigwGatewayV2TimeoutsToHclTerraform(struct?: ApigwGatewayV2Timeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigwGatewayV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApigwGatewayV2Timeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigwGatewayV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2 opentelekomcloud_apigw_gateway_v2}
*/
export class ApigwGatewayV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_apigw_gateway_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApigwGatewayV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigwGatewayV2 to import
  * @param importFromId The id of the existing ApigwGatewayV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigwGatewayV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_apigw_gateway_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/apigw_gateway_v2 opentelekomcloud_apigw_gateway_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigwGatewayV2Config
  */
  public constructor(scope: Construct, id: string, config: ApigwGatewayV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_apigw_gateway_v2',
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
    this._availabilityZones = config.availabilityZones;
    this._bandwidthChargingMode = config.bandwidthChargingMode;
    this._bandwidthSize = config.bandwidthSize;
    this._description = config.description;
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._id = config.id;
    this._ingressBandwidthChargingMode = config.ingressBandwidthChargingMode;
    this._ingressBandwidthSize = config.ingressBandwidthSize;
    this._loadbalancerProvider = config.loadbalancerProvider;
    this._maintainBegin = config.maintainBegin;
    this._name = config.name;
    this._securityGroupId = config.securityGroupId;
    this._specId = config.specId;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zones - computed: false, optional: false, required: true
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // bandwidth_charging_mode - computed: false, optional: true, required: false
  private _bandwidthChargingMode?: string; 
  public get bandwidthChargingMode() {
    return this.getStringAttribute('bandwidth_charging_mode');
  }
  public set bandwidthChargingMode(value: string) {
    this._bandwidthChargingMode = value;
  }
  public resetBandwidthChargingMode() {
    this._bandwidthChargingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthChargingModeInput() {
    return this._bandwidthChargingMode;
  }

  // bandwidth_size - computed: true, optional: true, required: false
  private _bandwidthSize?: number; 
  public get bandwidthSize() {
    return this.getNumberAttribute('bandwidth_size');
  }
  public set bandwidthSize(value: number) {
    this._bandwidthSize = value;
  }
  public resetBandwidthSize() {
    this._bandwidthSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthSizeInput() {
    return this._bandwidthSize;
  }

  // default_group_id - computed: true, optional: false, required: false
  public get defaultGroupId() {
    return this.getStringAttribute('default_group_id');
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

  // ingress_bandwidth_charging_mode - computed: false, optional: true, required: false
  private _ingressBandwidthChargingMode?: string; 
  public get ingressBandwidthChargingMode() {
    return this.getStringAttribute('ingress_bandwidth_charging_mode');
  }
  public set ingressBandwidthChargingMode(value: string) {
    this._ingressBandwidthChargingMode = value;
  }
  public resetIngressBandwidthChargingMode() {
    this._ingressBandwidthChargingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressBandwidthChargingModeInput() {
    return this._ingressBandwidthChargingMode;
  }

  // ingress_bandwidth_size - computed: false, optional: true, required: false
  private _ingressBandwidthSize?: number; 
  public get ingressBandwidthSize() {
    return this.getNumberAttribute('ingress_bandwidth_size');
  }
  public set ingressBandwidthSize(value: number) {
    this._ingressBandwidthSize = value;
  }
  public resetIngressBandwidthSize() {
    this._ingressBandwidthSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressBandwidthSizeInput() {
    return this._ingressBandwidthSize;
  }

  // loadbalancer_provider - computed: false, optional: true, required: false
  private _loadbalancerProvider?: string; 
  public get loadbalancerProvider() {
    return this.getStringAttribute('loadbalancer_provider');
  }
  public set loadbalancerProvider(value: string) {
    this._loadbalancerProvider = value;
  }
  public resetLoadbalancerProvider() {
    this._loadbalancerProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerProviderInput() {
    return this._loadbalancerProvider;
  }

  // maintain_begin - computed: true, optional: true, required: false
  private _maintainBegin?: string; 
  public get maintainBegin() {
    return this.getStringAttribute('maintain_begin');
  }
  public set maintainBegin(value: string) {
    this._maintainBegin = value;
  }
  public resetMaintainBegin() {
    this._maintainBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainBeginInput() {
    return this._maintainBegin;
  }

  // maintain_end - computed: true, optional: false, required: false
  public get maintainEnd() {
    return this.getStringAttribute('maintain_end');
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

  // private_egress_addresses - computed: true, optional: false, required: false
  public get privateEgressAddresses() {
    return this.getListAttribute('private_egress_addresses');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // public_egress_address - computed: true, optional: false, required: false
  public get publicEgressAddress() {
    return this.getStringAttribute('public_egress_address');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // spec_id - computed: false, optional: false, required: true
  private _specId?: string; 
  public get specId() {
    return this.getStringAttribute('spec_id');
  }
  public set specId(value: string) {
    this._specId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specIdInput() {
    return this._specId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // supported_features - computed: true, optional: false, required: false
  public get supportedFeatures() {
    return this.getListAttribute('supported_features');
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

  // vpc_ingress_address - computed: true, optional: false, required: false
  public get vpcIngressAddress() {
    return this.getStringAttribute('vpc_ingress_address');
  }

  // vpcep_service_name - computed: true, optional: false, required: false
  public get vpcepServiceName() {
    return this.getStringAttribute('vpcep_service_name');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigwGatewayV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigwGatewayV2Timeouts) {
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
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      bandwidth_charging_mode: cdktf.stringToTerraform(this._bandwidthChargingMode),
      bandwidth_size: cdktf.numberToTerraform(this._bandwidthSize),
      description: cdktf.stringToTerraform(this._description),
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      id: cdktf.stringToTerraform(this._id),
      ingress_bandwidth_charging_mode: cdktf.stringToTerraform(this._ingressBandwidthChargingMode),
      ingress_bandwidth_size: cdktf.numberToTerraform(this._ingressBandwidthSize),
      loadbalancer_provider: cdktf.stringToTerraform(this._loadbalancerProvider),
      maintain_begin: cdktf.stringToTerraform(this._maintainBegin),
      name: cdktf.stringToTerraform(this._name),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      spec_id: cdktf.stringToTerraform(this._specId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: apigwGatewayV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      bandwidth_charging_mode: {
        value: cdktf.stringToHclTerraform(this._bandwidthChargingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_size: {
        value: cdktf.numberToHclTerraform(this._bandwidthSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_bandwidth_charging_mode: {
        value: cdktf.stringToHclTerraform(this._ingressBandwidthChargingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_bandwidth_size: {
        value: cdktf.numberToHclTerraform(this._ingressBandwidthSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      loadbalancer_provider: {
        value: cdktf.stringToHclTerraform(this._loadbalancerProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintain_begin: {
        value: cdktf.stringToHclTerraform(this._maintainBegin),
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
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec_id: {
        value: cdktf.stringToHclTerraform(this._specId),
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
      timeouts: {
        value: apigwGatewayV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApigwGatewayV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
