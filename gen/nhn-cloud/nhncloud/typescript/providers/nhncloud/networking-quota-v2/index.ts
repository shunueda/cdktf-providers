// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingQuotaV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2#floatingip NetworkingQuotaV2#floatingip}
  */
  readonly floatingip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2#id NetworkingQuotaV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2#network NetworkingQuotaV2#network}
  */
  readonly network?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2#port NetworkingQuotaV2#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2#project_id NetworkingQuotaV2#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2#rbac_policy NetworkingQuotaV2#rbac_policy}
  */
  readonly rbacPolicy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2#region NetworkingQuotaV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2#router NetworkingQuotaV2#router}
  */
  readonly router?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2#security_group NetworkingQuotaV2#security_group}
  */
  readonly securityGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2#security_group_rule NetworkingQuotaV2#security_group_rule}
  */
  readonly securityGroupRule?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2#subnet NetworkingQuotaV2#subnet}
  */
  readonly subnet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2#subnetpool NetworkingQuotaV2#subnetpool}
  */
  readonly subnetpool?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2#timeouts NetworkingQuotaV2#timeouts}
  */
  readonly timeouts?: NetworkingQuotaV2Timeouts;
}
export interface NetworkingQuotaV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2#create NetworkingQuotaV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2#delete NetworkingQuotaV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2#update NetworkingQuotaV2#update}
  */
  readonly update?: string;
}

export function networkingQuotaV2TimeoutsToTerraform(struct?: NetworkingQuotaV2Timeouts | cdktf.IResolvable): any {
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


export function networkingQuotaV2TimeoutsToHclTerraform(struct?: NetworkingQuotaV2Timeouts | cdktf.IResolvable): any {
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

export class NetworkingQuotaV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkingQuotaV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkingQuotaV2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2 nhncloud_networking_quota_v2}
*/
export class NetworkingQuotaV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_networking_quota_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkingQuotaV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkingQuotaV2 to import
  * @param importFromId The id of the existing NetworkingQuotaV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkingQuotaV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_networking_quota_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/networking_quota_v2 nhncloud_networking_quota_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingQuotaV2Config
  */
  public constructor(scope: Construct, id: string, config: NetworkingQuotaV2Config) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_networking_quota_v2',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._floatingip = config.floatingip;
    this._id = config.id;
    this._network = config.network;
    this._port = config.port;
    this._projectId = config.projectId;
    this._rbacPolicy = config.rbacPolicy;
    this._region = config.region;
    this._router = config.router;
    this._securityGroup = config.securityGroup;
    this._securityGroupRule = config.securityGroupRule;
    this._subnet = config.subnet;
    this._subnetpool = config.subnetpool;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // floatingip - computed: true, optional: true, required: false
  private _floatingip?: number; 
  public get floatingip() {
    return this.getNumberAttribute('floatingip');
  }
  public set floatingip(value: number) {
    this._floatingip = value;
  }
  public resetFloatingip() {
    this._floatingip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingipInput() {
    return this._floatingip;
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

  // network - computed: true, optional: true, required: false
  private _network?: number; 
  public get network() {
    return this.getNumberAttribute('network');
  }
  public set network(value: number) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // rbac_policy - computed: true, optional: true, required: false
  private _rbacPolicy?: number; 
  public get rbacPolicy() {
    return this.getNumberAttribute('rbac_policy');
  }
  public set rbacPolicy(value: number) {
    this._rbacPolicy = value;
  }
  public resetRbacPolicy() {
    this._rbacPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacPolicyInput() {
    return this._rbacPolicy;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // router - computed: true, optional: true, required: false
  private _router?: number; 
  public get router() {
    return this.getNumberAttribute('router');
  }
  public set router(value: number) {
    this._router = value;
  }
  public resetRouter() {
    this._router = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router;
  }

  // security_group - computed: true, optional: true, required: false
  private _securityGroup?: number; 
  public get securityGroup() {
    return this.getNumberAttribute('security_group');
  }
  public set securityGroup(value: number) {
    this._securityGroup = value;
  }
  public resetSecurityGroup() {
    this._securityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }

  // security_group_rule - computed: true, optional: true, required: false
  private _securityGroupRule?: number; 
  public get securityGroupRule() {
    return this.getNumberAttribute('security_group_rule');
  }
  public set securityGroupRule(value: number) {
    this._securityGroupRule = value;
  }
  public resetSecurityGroupRule() {
    this._securityGroupRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupRuleInput() {
    return this._securityGroupRule;
  }

  // subnet - computed: true, optional: true, required: false
  private _subnet?: number; 
  public get subnet() {
    return this.getNumberAttribute('subnet');
  }
  public set subnet(value: number) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // subnetpool - computed: true, optional: true, required: false
  private _subnetpool?: number; 
  public get subnetpool() {
    return this.getNumberAttribute('subnetpool');
  }
  public set subnetpool(value: number) {
    this._subnetpool = value;
  }
  public resetSubnetpool() {
    this._subnetpool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetpoolInput() {
    return this._subnetpool;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkingQuotaV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkingQuotaV2Timeouts) {
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
      floatingip: cdktf.numberToTerraform(this._floatingip),
      id: cdktf.stringToTerraform(this._id),
      network: cdktf.numberToTerraform(this._network),
      port: cdktf.numberToTerraform(this._port),
      project_id: cdktf.stringToTerraform(this._projectId),
      rbac_policy: cdktf.numberToTerraform(this._rbacPolicy),
      region: cdktf.stringToTerraform(this._region),
      router: cdktf.numberToTerraform(this._router),
      security_group: cdktf.numberToTerraform(this._securityGroup),
      security_group_rule: cdktf.numberToTerraform(this._securityGroupRule),
      subnet: cdktf.numberToTerraform(this._subnet),
      subnetpool: cdktf.numberToTerraform(this._subnetpool),
      timeouts: networkingQuotaV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      floatingip: {
        value: cdktf.numberToHclTerraform(this._floatingip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.numberToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rbac_policy: {
        value: cdktf.numberToHclTerraform(this._rbacPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router: {
        value: cdktf.numberToHclTerraform(this._router),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_group: {
        value: cdktf.numberToHclTerraform(this._securityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_group_rule: {
        value: cdktf.numberToHclTerraform(this._securityGroupRule),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet: {
        value: cdktf.numberToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnetpool: {
        value: cdktf.numberToHclTerraform(this._subnetpool),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: networkingQuotaV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkingQuotaV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
