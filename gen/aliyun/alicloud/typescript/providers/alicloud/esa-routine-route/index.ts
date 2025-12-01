// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_routine_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsaRoutineRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_routine_route#bypass EsaRoutineRoute#bypass}
  */
  readonly bypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_routine_route#id EsaRoutineRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_routine_route#route_enable EsaRoutineRoute#route_enable}
  */
  readonly routeEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_routine_route#route_name EsaRoutineRoute#route_name}
  */
  readonly routeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_routine_route#routine_name EsaRoutineRoute#routine_name}
  */
  readonly routineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_routine_route#rule EsaRoutineRoute#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_routine_route#sequence EsaRoutineRoute#sequence}
  */
  readonly sequence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_routine_route#site_id EsaRoutineRoute#site_id}
  */
  readonly siteId: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_routine_route#timeouts EsaRoutineRoute#timeouts}
  */
  readonly timeouts?: EsaRoutineRouteTimeouts;
}
export interface EsaRoutineRouteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_routine_route#create EsaRoutineRoute#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_routine_route#delete EsaRoutineRoute#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_routine_route#update EsaRoutineRoute#update}
  */
  readonly update?: string;
}

export function esaRoutineRouteTimeoutsToTerraform(struct?: EsaRoutineRouteTimeouts | cdktf.IResolvable): any {
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


export function esaRoutineRouteTimeoutsToHclTerraform(struct?: EsaRoutineRouteTimeouts | cdktf.IResolvable): any {
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

export class EsaRoutineRouteTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EsaRoutineRouteTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EsaRoutineRouteTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_routine_route alicloud_esa_routine_route}
*/
export class EsaRoutineRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_esa_routine_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsaRoutineRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsaRoutineRoute to import
  * @param importFromId The id of the existing EsaRoutineRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_routine_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsaRoutineRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_esa_routine_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_routine_route alicloud_esa_routine_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsaRoutineRouteConfig
  */
  public constructor(scope: Construct, id: string, config: EsaRoutineRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_esa_routine_route',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bypass = config.bypass;
    this._id = config.id;
    this._routeEnable = config.routeEnable;
    this._routeName = config.routeName;
    this._routineName = config.routineName;
    this._rule = config.rule;
    this._sequence = config.sequence;
    this._siteId = config.siteId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass - computed: false, optional: true, required: false
  private _bypass?: string; 
  public get bypass() {
    return this.getStringAttribute('bypass');
  }
  public set bypass(value: string) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass;
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getNumberAttribute('config_id');
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

  // route_enable - computed: false, optional: true, required: false
  private _routeEnable?: string; 
  public get routeEnable() {
    return this.getStringAttribute('route_enable');
  }
  public set routeEnable(value: string) {
    this._routeEnable = value;
  }
  public resetRouteEnable() {
    this._routeEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeEnableInput() {
    return this._routeEnable;
  }

  // route_name - computed: false, optional: true, required: false
  private _routeName?: string; 
  public get routeName() {
    return this.getStringAttribute('route_name');
  }
  public set routeName(value: string) {
    this._routeName = value;
  }
  public resetRouteName() {
    this._routeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeNameInput() {
    return this._routeName;
  }

  // routine_name - computed: false, optional: false, required: true
  private _routineName?: string; 
  public get routineName() {
    return this.getStringAttribute('routine_name');
  }
  public set routineName(value: string) {
    this._routineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routineNameInput() {
    return this._routineName;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // sequence - computed: false, optional: true, required: false
  private _sequence?: number; 
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }
  public set sequence(value: number) {
    this._sequence = value;
  }
  public resetSequence() {
    this._sequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EsaRoutineRouteTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EsaRoutineRouteTimeouts) {
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
      bypass: cdktf.stringToTerraform(this._bypass),
      id: cdktf.stringToTerraform(this._id),
      route_enable: cdktf.stringToTerraform(this._routeEnable),
      route_name: cdktf.stringToTerraform(this._routeName),
      routine_name: cdktf.stringToTerraform(this._routineName),
      rule: cdktf.stringToTerraform(this._rule),
      sequence: cdktf.numberToTerraform(this._sequence),
      site_id: cdktf.numberToTerraform(this._siteId),
      timeouts: esaRoutineRouteTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypass: {
        value: cdktf.stringToHclTerraform(this._bypass),
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
      route_enable: {
        value: cdktf.stringToHclTerraform(this._routeEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_name: {
        value: cdktf.stringToHclTerraform(this._routeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routine_name: {
        value: cdktf.stringToHclTerraform(this._routineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence: {
        value: cdktf.numberToHclTerraform(this._sequence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: esaRoutineRouteTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EsaRoutineRouteTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
