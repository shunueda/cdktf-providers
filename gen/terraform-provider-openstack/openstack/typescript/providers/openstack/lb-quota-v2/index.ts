// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbQuotaV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2#health_monitor LbQuotaV2#health_monitor}
  */
  readonly healthMonitor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2#id LbQuotaV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2#l7_policy LbQuotaV2#l7_policy}
  */
  readonly l7Policy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2#l7_rule LbQuotaV2#l7_rule}
  */
  readonly l7Rule?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2#listener LbQuotaV2#listener}
  */
  readonly listener?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2#loadbalancer LbQuotaV2#loadbalancer}
  */
  readonly loadbalancer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2#member LbQuotaV2#member}
  */
  readonly member?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2#pool LbQuotaV2#pool}
  */
  readonly pool?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2#project_id LbQuotaV2#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2#region LbQuotaV2#region}
  */
  readonly region?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2#timeouts LbQuotaV2#timeouts}
  */
  readonly timeouts?: LbQuotaV2Timeouts;
}
export interface LbQuotaV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2#create LbQuotaV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2#delete LbQuotaV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2#update LbQuotaV2#update}
  */
  readonly update?: string;
}

export function lbQuotaV2TimeoutsToTerraform(struct?: LbQuotaV2Timeouts | cdktf.IResolvable): any {
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


export function lbQuotaV2TimeoutsToHclTerraform(struct?: LbQuotaV2Timeouts | cdktf.IResolvable): any {
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

export class LbQuotaV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LbQuotaV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbQuotaV2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2 openstack_lb_quota_v2}
*/
export class LbQuotaV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_lb_quota_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbQuotaV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbQuotaV2 to import
  * @param importFromId The id of the existing LbQuotaV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbQuotaV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_lb_quota_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/lb_quota_v2 openstack_lb_quota_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbQuotaV2Config
  */
  public constructor(scope: Construct, id: string, config: LbQuotaV2Config) {
    super(scope, id, {
      terraformResourceType: 'openstack_lb_quota_v2',
      terraformGeneratorMetadata: {
        providerName: 'openstack',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._healthMonitor = config.healthMonitor;
    this._id = config.id;
    this._l7Policy = config.l7Policy;
    this._l7Rule = config.l7Rule;
    this._listener = config.listener;
    this._loadbalancer = config.loadbalancer;
    this._member = config.member;
    this._pool = config.pool;
    this._projectId = config.projectId;
    this._region = config.region;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // health_monitor - computed: true, optional: true, required: false
  private _healthMonitor?: number; 
  public get healthMonitor() {
    return this.getNumberAttribute('health_monitor');
  }
  public set healthMonitor(value: number) {
    this._healthMonitor = value;
  }
  public resetHealthMonitor() {
    this._healthMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorInput() {
    return this._healthMonitor;
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

  // l7_policy - computed: true, optional: true, required: false
  private _l7Policy?: number; 
  public get l7Policy() {
    return this.getNumberAttribute('l7_policy');
  }
  public set l7Policy(value: number) {
    this._l7Policy = value;
  }
  public resetL7Policy() {
    this._l7Policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7PolicyInput() {
    return this._l7Policy;
  }

  // l7_rule - computed: true, optional: true, required: false
  private _l7Rule?: number; 
  public get l7Rule() {
    return this.getNumberAttribute('l7_rule');
  }
  public set l7Rule(value: number) {
    this._l7Rule = value;
  }
  public resetL7Rule() {
    this._l7Rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7RuleInput() {
    return this._l7Rule;
  }

  // listener - computed: true, optional: true, required: false
  private _listener?: number; 
  public get listener() {
    return this.getNumberAttribute('listener');
  }
  public set listener(value: number) {
    this._listener = value;
  }
  public resetListener() {
    this._listener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener;
  }

  // loadbalancer - computed: true, optional: true, required: false
  private _loadbalancer?: number; 
  public get loadbalancer() {
    return this.getNumberAttribute('loadbalancer');
  }
  public set loadbalancer(value: number) {
    this._loadbalancer = value;
  }
  public resetLoadbalancer() {
    this._loadbalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerInput() {
    return this._loadbalancer;
  }

  // member - computed: true, optional: true, required: false
  private _member?: number; 
  public get member() {
    return this.getNumberAttribute('member');
  }
  public set member(value: number) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // pool - computed: true, optional: true, required: false
  private _pool?: number; 
  public get pool() {
    return this.getNumberAttribute('pool');
  }
  public set pool(value: number) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LbQuotaV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LbQuotaV2Timeouts) {
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
      health_monitor: cdktf.numberToTerraform(this._healthMonitor),
      id: cdktf.stringToTerraform(this._id),
      l7_policy: cdktf.numberToTerraform(this._l7Policy),
      l7_rule: cdktf.numberToTerraform(this._l7Rule),
      listener: cdktf.numberToTerraform(this._listener),
      loadbalancer: cdktf.numberToTerraform(this._loadbalancer),
      member: cdktf.numberToTerraform(this._member),
      pool: cdktf.numberToTerraform(this._pool),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      timeouts: lbQuotaV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      health_monitor: {
        value: cdktf.numberToHclTerraform(this._healthMonitor),
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
      l7_policy: {
        value: cdktf.numberToHclTerraform(this._l7Policy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l7_rule: {
        value: cdktf.numberToHclTerraform(this._l7Rule),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listener: {
        value: cdktf.numberToHclTerraform(this._listener),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      loadbalancer: {
        value: cdktf.numberToHclTerraform(this._loadbalancer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      member: {
        value: cdktf.numberToHclTerraform(this._member),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pool: {
        value: cdktf.numberToHclTerraform(this._pool),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: lbQuotaV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LbQuotaV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
