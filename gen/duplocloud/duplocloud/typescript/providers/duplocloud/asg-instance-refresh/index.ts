// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_instance_refresh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsgInstanceRefreshConfig extends cdktf.TerraformMetaArguments {
  /**
  * The fullname of the asg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_instance_refresh#asg_name AsgInstanceRefresh#asg_name}
  */
  readonly asgName: string;
  /**
  * Automatically rollback if instance refresh fails. This can be set only if update_launch_template_version is specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_instance_refresh#auto_rollback AsgInstanceRefresh#auto_rollback}
  */
  readonly autoRollback?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_instance_refresh#id AsgInstanceRefresh#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of seconds until a newly launched instance is configured and ready to use. Default behavior is to use the Auto Scaling Group's health check grace period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_instance_refresh#instance_warmup AsgInstanceRefresh#instance_warmup}
  */
  readonly instanceWarmup?: number;
  /**
  * Amount of capacity in the Auto Scaling group that can be in service and healthy, or pending, to support your workload when an instance refresh is in place, as a percentage of the desired capacity of the Auto Scaling group. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_instance_refresh#max_healthy_percentage AsgInstanceRefresh#max_healthy_percentage}
  */
  readonly maxHealthyPercentage?: number;
  /**
  * Amount of capacity in the Auto Scaling group that must remain healthy during an instance refresh to allow the operation to continue, as a percentage of the desired capacity of the Auto Scaling group. Defaults to `90`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_instance_refresh#min_healthy_percentage AsgInstanceRefresh#min_healthy_percentage}
  */
  readonly minHealthyPercentage?: number;
  /**
  * To identify instance refresh or invoke a instance refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_instance_refresh#refresh_identifier AsgInstanceRefresh#refresh_identifier}
  */
  readonly refreshIdentifier?: string;
  /**
  * The GUID of the tenant that the asg will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_instance_refresh#tenant_id AsgInstanceRefresh#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Launch template version to update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_instance_refresh#update_launch_template_version AsgInstanceRefresh#update_launch_template_version}
  */
  readonly updateLaunchTemplateVersion?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_instance_refresh#timeouts AsgInstanceRefresh#timeouts}
  */
  readonly timeouts?: AsgInstanceRefreshTimeouts;
}
export interface AsgInstanceRefreshTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_instance_refresh#create AsgInstanceRefresh#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_instance_refresh#delete AsgInstanceRefresh#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_instance_refresh#update AsgInstanceRefresh#update}
  */
  readonly update?: string;
}

export function asgInstanceRefreshTimeoutsToTerraform(struct?: AsgInstanceRefreshTimeouts | cdktf.IResolvable): any {
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


export function asgInstanceRefreshTimeoutsToHclTerraform(struct?: AsgInstanceRefreshTimeouts | cdktf.IResolvable): any {
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

export class AsgInstanceRefreshTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AsgInstanceRefreshTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AsgInstanceRefreshTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_instance_refresh duplocloud_asg_instance_refresh}
*/
export class AsgInstanceRefresh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_asg_instance_refresh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsgInstanceRefresh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsgInstanceRefresh to import
  * @param importFromId The id of the existing AsgInstanceRefresh that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_instance_refresh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsgInstanceRefresh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_asg_instance_refresh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_instance_refresh duplocloud_asg_instance_refresh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsgInstanceRefreshConfig
  */
  public constructor(scope: Construct, id: string, config: AsgInstanceRefreshConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_asg_instance_refresh',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28',
        providerVersionConstraint: '0.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asgName = config.asgName;
    this._autoRollback = config.autoRollback;
    this._id = config.id;
    this._instanceWarmup = config.instanceWarmup;
    this._maxHealthyPercentage = config.maxHealthyPercentage;
    this._minHealthyPercentage = config.minHealthyPercentage;
    this._refreshIdentifier = config.refreshIdentifier;
    this._tenantId = config.tenantId;
    this._updateLaunchTemplateVersion = config.updateLaunchTemplateVersion;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asg_name - computed: false, optional: false, required: true
  private _asgName?: string; 
  public get asgName() {
    return this.getStringAttribute('asg_name');
  }
  public set asgName(value: string) {
    this._asgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asgNameInput() {
    return this._asgName;
  }

  // auto_rollback - computed: true, optional: true, required: false
  private _autoRollback?: boolean | cdktf.IResolvable; 
  public get autoRollback() {
    return this.getBooleanAttribute('auto_rollback');
  }
  public set autoRollback(value: boolean | cdktf.IResolvable) {
    this._autoRollback = value;
  }
  public resetAutoRollback() {
    this._autoRollback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRollbackInput() {
    return this._autoRollback;
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

  // instance_warmup - computed: true, optional: true, required: false
  private _instanceWarmup?: number; 
  public get instanceWarmup() {
    return this.getNumberAttribute('instance_warmup');
  }
  public set instanceWarmup(value: number) {
    this._instanceWarmup = value;
  }
  public resetInstanceWarmup() {
    this._instanceWarmup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceWarmupInput() {
    return this._instanceWarmup;
  }

  // max_healthy_percentage - computed: false, optional: true, required: false
  private _maxHealthyPercentage?: number; 
  public get maxHealthyPercentage() {
    return this.getNumberAttribute('max_healthy_percentage');
  }
  public set maxHealthyPercentage(value: number) {
    this._maxHealthyPercentage = value;
  }
  public resetMaxHealthyPercentage() {
    this._maxHealthyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHealthyPercentageInput() {
    return this._maxHealthyPercentage;
  }

  // min_healthy_percentage - computed: false, optional: true, required: false
  private _minHealthyPercentage?: number; 
  public get minHealthyPercentage() {
    return this.getNumberAttribute('min_healthy_percentage');
  }
  public set minHealthyPercentage(value: number) {
    this._minHealthyPercentage = value;
  }
  public resetMinHealthyPercentage() {
    this._minHealthyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHealthyPercentageInput() {
    return this._minHealthyPercentage;
  }

  // refresh_identifier - computed: true, optional: true, required: false
  private _refreshIdentifier?: string; 
  public get refreshIdentifier() {
    return this.getStringAttribute('refresh_identifier');
  }
  public set refreshIdentifier(value: string) {
    this._refreshIdentifier = value;
  }
  public resetRefreshIdentifier() {
    this._refreshIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIdentifierInput() {
    return this._refreshIdentifier;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // update_launch_template_version - computed: false, optional: true, required: false
  private _updateLaunchTemplateVersion?: string; 
  public get updateLaunchTemplateVersion() {
    return this.getStringAttribute('update_launch_template_version');
  }
  public set updateLaunchTemplateVersion(value: string) {
    this._updateLaunchTemplateVersion = value;
  }
  public resetUpdateLaunchTemplateVersion() {
    this._updateLaunchTemplateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateLaunchTemplateVersionInput() {
    return this._updateLaunchTemplateVersion;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AsgInstanceRefreshTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AsgInstanceRefreshTimeouts) {
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
      asg_name: cdktf.stringToTerraform(this._asgName),
      auto_rollback: cdktf.booleanToTerraform(this._autoRollback),
      id: cdktf.stringToTerraform(this._id),
      instance_warmup: cdktf.numberToTerraform(this._instanceWarmup),
      max_healthy_percentage: cdktf.numberToTerraform(this._maxHealthyPercentage),
      min_healthy_percentage: cdktf.numberToTerraform(this._minHealthyPercentage),
      refresh_identifier: cdktf.stringToTerraform(this._refreshIdentifier),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      update_launch_template_version: cdktf.stringToTerraform(this._updateLaunchTemplateVersion),
      timeouts: asgInstanceRefreshTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asg_name: {
        value: cdktf.stringToHclTerraform(this._asgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_rollback: {
        value: cdktf.booleanToHclTerraform(this._autoRollback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_warmup: {
        value: cdktf.numberToHclTerraform(this._instanceWarmup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_healthy_percentage: {
        value: cdktf.numberToHclTerraform(this._maxHealthyPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_healthy_percentage: {
        value: cdktf.numberToHclTerraform(this._minHealthyPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      refresh_identifier: {
        value: cdktf.stringToHclTerraform(this._refreshIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_launch_template_version: {
        value: cdktf.stringToHclTerraform(this._updateLaunchTemplateVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: asgInstanceRefreshTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AsgInstanceRefreshTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
