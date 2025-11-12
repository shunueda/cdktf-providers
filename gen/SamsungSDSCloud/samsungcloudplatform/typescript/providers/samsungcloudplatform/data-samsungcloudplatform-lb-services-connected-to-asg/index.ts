// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/lb_services_connected_to_asg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformLbServicesConnectedToAsgConfig extends cdktf.TerraformMetaArguments {
  /**
  * ASG ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/lb_services_connected_to_asg#auto_scaling_group_id DataSamsungcloudplatformLbServicesConnectedToAsg#auto_scaling_group_id}
  */
  readonly autoScalingGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/lb_services_connected_to_asg#id DataSamsungcloudplatformLbServicesConnectedToAsg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataSamsungcloudplatformLbServicesConnectedToAsgContentsLbRules {
}

export function dataSamsungcloudplatformLbServicesConnectedToAsgContentsLbRulesToTerraform(struct?: DataSamsungcloudplatformLbServicesConnectedToAsgContentsLbRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformLbServicesConnectedToAsgContentsLbRulesToHclTerraform(struct?: DataSamsungcloudplatformLbServicesConnectedToAsgContentsLbRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformLbServicesConnectedToAsgContentsLbRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformLbServicesConnectedToAsgContentsLbRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformLbServicesConnectedToAsgContentsLbRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_scale_group_ids - computed: true, optional: false, required: false
  public get autoScaleGroupIds() {
    return this.getListAttribute('auto_scale_group_ids');
  }

  // lb_rule_id - computed: true, optional: false, required: false
  public get lbRuleId() {
    return this.getStringAttribute('lb_rule_id');
  }

  // lb_server_group_id - computed: true, optional: false, required: false
  public get lbServerGroupId() {
    return this.getStringAttribute('lb_server_group_id');
  }

  // pattern_url - computed: true, optional: false, required: false
  public get patternUrl() {
    return this.getStringAttribute('pattern_url');
  }

  // seq - computed: true, optional: false, required: false
  public get seq() {
    return this.getNumberAttribute('seq');
  }
}

export class DataSamsungcloudplatformLbServicesConnectedToAsgContentsLbRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformLbServicesConnectedToAsgContentsLbRulesOutputReference {
    return new DataSamsungcloudplatformLbServicesConnectedToAsgContentsLbRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformLbServicesConnectedToAsgContents {
}

export function dataSamsungcloudplatformLbServicesConnectedToAsgContentsToTerraform(struct?: DataSamsungcloudplatformLbServicesConnectedToAsgContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformLbServicesConnectedToAsgContentsToHclTerraform(struct?: DataSamsungcloudplatformLbServicesConnectedToAsgContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformLbServicesConnectedToAsgContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformLbServicesConnectedToAsgContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformLbServicesConnectedToAsgContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_scale_group_ids - computed: true, optional: false, required: false
  public get autoScaleGroupIds() {
    return this.getListAttribute('auto_scale_group_ids');
  }

  // default_forwarding_ports - computed: true, optional: false, required: false
  public get defaultForwardingPorts() {
    return this.getStringAttribute('default_forwarding_ports');
  }

  // layer_type - computed: true, optional: false, required: false
  public get layerType() {
    return this.getStringAttribute('layer_type');
  }

  // lb_rules - computed: true, optional: false, required: false
  private _lbRules = new DataSamsungcloudplatformLbServicesConnectedToAsgContentsLbRulesList(this, "lb_rules", false);
  public get lbRules() {
    return this._lbRules;
  }

  // lb_service_id - computed: true, optional: false, required: false
  public get lbServiceId() {
    return this.getStringAttribute('lb_service_id');
  }

  // lb_service_ip_address - computed: true, optional: false, required: false
  public get lbServiceIpAddress() {
    return this.getStringAttribute('lb_service_ip_address');
  }

  // lb_service_name - computed: true, optional: false, required: false
  public get lbServiceName() {
    return this.getStringAttribute('lb_service_name');
  }

  // lb_service_state - computed: true, optional: false, required: false
  public get lbServiceState() {
    return this.getStringAttribute('lb_service_state');
  }

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // load_balancer_name - computed: true, optional: false, required: false
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }

  // nat_ip_address - computed: true, optional: false, required: false
  public get natIpAddress() {
    return this.getStringAttribute('nat_ip_address');
  }

  // persistence - computed: true, optional: false, required: false
  public get persistence() {
    return this.getStringAttribute('persistence');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // service_ports - computed: true, optional: false, required: false
  public get servicePorts() {
    return this.getStringAttribute('service_ports');
  }
}

export class DataSamsungcloudplatformLbServicesConnectedToAsgContentsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformLbServicesConnectedToAsgContentsOutputReference {
    return new DataSamsungcloudplatformLbServicesConnectedToAsgContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/lb_services_connected_to_asg samsungcloudplatform_lb_services_connected_to_asg}
*/
export class DataSamsungcloudplatformLbServicesConnectedToAsg extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_lb_services_connected_to_asg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformLbServicesConnectedToAsg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformLbServicesConnectedToAsg to import
  * @param importFromId The id of the existing DataSamsungcloudplatformLbServicesConnectedToAsg that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/lb_services_connected_to_asg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformLbServicesConnectedToAsg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_lb_services_connected_to_asg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/lb_services_connected_to_asg samsungcloudplatform_lb_services_connected_to_asg} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformLbServicesConnectedToAsgConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformLbServicesConnectedToAsgConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_lb_services_connected_to_asg',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0',
        providerVersionConstraint: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoScalingGroupId = config.autoScalingGroupId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_group_id - computed: false, optional: false, required: true
  private _autoScalingGroupId?: string; 
  public get autoScalingGroupId() {
    return this.getStringAttribute('auto_scaling_group_id');
  }
  public set autoScalingGroupId(value: string) {
    this._autoScalingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingGroupIdInput() {
    return this._autoScalingGroupId;
  }

  // contents - computed: true, optional: false, required: false
  private _contents = new DataSamsungcloudplatformLbServicesConnectedToAsgContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
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

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_group_id: cdktf.stringToTerraform(this._autoScalingGroupId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._autoScalingGroupId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
