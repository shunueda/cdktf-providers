// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/tenant_cleanup_timers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantCleanupTimersConfig extends cdktf.TerraformMetaArguments {
  /**
  * The expiry time of the tenant, in UTC with the format YYYY-MM-DDTHH:MM:SSZ (e.g. `2021-06-01T00:00:00Z`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/tenant_cleanup_timers#expiry_time TenantCleanupTimers#expiry_time}
  */
  readonly expiryTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/tenant_cleanup_timers#id TenantCleanupTimers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The time to pause the tenant, in UTC with the format YYYY-MM-DDTHH:MM:SSZ (e.g. `2021-06-01T00:00:00Z`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/tenant_cleanup_timers#pause_time TenantCleanupTimers#pause_time}
  */
  readonly pauseTime?: string;
  /**
  * Whether to remove the expiry time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/tenant_cleanup_timers#remove_expiry_time TenantCleanupTimers#remove_expiry_time}
  */
  readonly removeExpiryTime?: boolean | cdktf.IResolvable;
  /**
  * Whether to remove the pause time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/tenant_cleanup_timers#remove_pause_time TenantCleanupTimers#remove_pause_time}
  */
  readonly removePauseTime?: boolean | cdktf.IResolvable;
  /**
  * The GUID of the tenant that the expiry will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/tenant_cleanup_timers#tenant_id TenantCleanupTimers#tenant_id}
  */
  readonly tenantId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/tenant_cleanup_timers#timeouts TenantCleanupTimers#timeouts}
  */
  readonly timeouts?: TenantCleanupTimersTimeouts;
}
export interface TenantCleanupTimersTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/tenant_cleanup_timers#create TenantCleanupTimers#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/tenant_cleanup_timers#delete TenantCleanupTimers#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/tenant_cleanup_timers#update TenantCleanupTimers#update}
  */
  readonly update?: string;
}

export function tenantCleanupTimersTimeoutsToTerraform(struct?: TenantCleanupTimersTimeouts | cdktf.IResolvable): any {
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


export function tenantCleanupTimersTimeoutsToHclTerraform(struct?: TenantCleanupTimersTimeouts | cdktf.IResolvable): any {
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

export class TenantCleanupTimersTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TenantCleanupTimersTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TenantCleanupTimersTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/tenant_cleanup_timers duplocloud_tenant_cleanup_timers}
*/
export class TenantCleanupTimers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_tenant_cleanup_timers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TenantCleanupTimers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TenantCleanupTimers to import
  * @param importFromId The id of the existing TenantCleanupTimers that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/tenant_cleanup_timers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TenantCleanupTimers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_tenant_cleanup_timers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/tenant_cleanup_timers duplocloud_tenant_cleanup_timers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantCleanupTimersConfig
  */
  public constructor(scope: Construct, id: string, config: TenantCleanupTimersConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_tenant_cleanup_timers',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expiryTime = config.expiryTime;
    this._id = config.id;
    this._pauseTime = config.pauseTime;
    this._removeExpiryTime = config.removeExpiryTime;
    this._removePauseTime = config.removePauseTime;
    this._tenantId = config.tenantId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expiry_time - computed: false, optional: true, required: false
  private _expiryTime?: string; 
  public get expiryTime() {
    return this.getStringAttribute('expiry_time');
  }
  public set expiryTime(value: string) {
    this._expiryTime = value;
  }
  public resetExpiryTime() {
    this._expiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryTimeInput() {
    return this._expiryTime;
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

  // pause_time - computed: false, optional: true, required: false
  private _pauseTime?: string; 
  public get pauseTime() {
    return this.getStringAttribute('pause_time');
  }
  public set pauseTime(value: string) {
    this._pauseTime = value;
  }
  public resetPauseTime() {
    this._pauseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseTimeInput() {
    return this._pauseTime;
  }

  // remove_expiry_time - computed: false, optional: true, required: false
  private _removeExpiryTime?: boolean | cdktf.IResolvable; 
  public get removeExpiryTime() {
    return this.getBooleanAttribute('remove_expiry_time');
  }
  public set removeExpiryTime(value: boolean | cdktf.IResolvable) {
    this._removeExpiryTime = value;
  }
  public resetRemoveExpiryTime() {
    this._removeExpiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeExpiryTimeInput() {
    return this._removeExpiryTime;
  }

  // remove_pause_time - computed: false, optional: true, required: false
  private _removePauseTime?: boolean | cdktf.IResolvable; 
  public get removePauseTime() {
    return this.getBooleanAttribute('remove_pause_time');
  }
  public set removePauseTime(value: boolean | cdktf.IResolvable) {
    this._removePauseTime = value;
  }
  public resetRemovePauseTime() {
    this._removePauseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePauseTimeInput() {
    return this._removePauseTime;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TenantCleanupTimersTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TenantCleanupTimersTimeouts) {
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
      expiry_time: cdktf.stringToTerraform(this._expiryTime),
      id: cdktf.stringToTerraform(this._id),
      pause_time: cdktf.stringToTerraform(this._pauseTime),
      remove_expiry_time: cdktf.booleanToTerraform(this._removeExpiryTime),
      remove_pause_time: cdktf.booleanToTerraform(this._removePauseTime),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: tenantCleanupTimersTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expiry_time: {
        value: cdktf.stringToHclTerraform(this._expiryTime),
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
      pause_time: {
        value: cdktf.stringToHclTerraform(this._pauseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_expiry_time: {
        value: cdktf.booleanToHclTerraform(this._removeExpiryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_pause_time: {
        value: cdktf.booleanToHclTerraform(this._removePauseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: tenantCleanupTimersTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TenantCleanupTimersTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
