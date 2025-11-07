// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/antiddos_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntiddosV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/antiddos_v1#app_type_id AntiddosV1#app_type_id}
  */
  readonly appTypeId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/antiddos_v1#cleaning_access_pos_id AntiddosV1#cleaning_access_pos_id}
  */
  readonly cleaningAccessPosId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/antiddos_v1#enable_l7 AntiddosV1#enable_l7}
  */
  readonly enableL7: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/antiddos_v1#floating_ip_id AntiddosV1#floating_ip_id}
  */
  readonly floatingIpId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/antiddos_v1#http_request_pos_id AntiddosV1#http_request_pos_id}
  */
  readonly httpRequestPosId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/antiddos_v1#id AntiddosV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/antiddos_v1#region AntiddosV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/antiddos_v1#traffic_pos_id AntiddosV1#traffic_pos_id}
  */
  readonly trafficPosId: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/antiddos_v1#timeouts AntiddosV1#timeouts}
  */
  readonly timeouts?: AntiddosV1Timeouts;
}
export interface AntiddosV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/antiddos_v1#create AntiddosV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/antiddos_v1#delete AntiddosV1#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/antiddos_v1#update AntiddosV1#update}
  */
  readonly update?: string;
}

export function antiddosV1TimeoutsToTerraform(struct?: AntiddosV1Timeouts | cdktf.IResolvable): any {
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


export function antiddosV1TimeoutsToHclTerraform(struct?: AntiddosV1Timeouts | cdktf.IResolvable): any {
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

export class AntiddosV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntiddosV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AntiddosV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/antiddos_v1 flexibleengine_antiddos_v1}
*/
export class AntiddosV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_antiddos_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntiddosV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntiddosV1 to import
  * @param importFromId The id of the existing AntiddosV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/antiddos_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntiddosV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_antiddos_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/antiddos_v1 flexibleengine_antiddos_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntiddosV1Config
  */
  public constructor(scope: Construct, id: string, config: AntiddosV1Config) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_antiddos_v1',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appTypeId = config.appTypeId;
    this._cleaningAccessPosId = config.cleaningAccessPosId;
    this._enableL7 = config.enableL7;
    this._floatingIpId = config.floatingIpId;
    this._httpRequestPosId = config.httpRequestPosId;
    this._id = config.id;
    this._region = config.region;
    this._trafficPosId = config.trafficPosId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_type_id - computed: false, optional: false, required: true
  private _appTypeId?: number; 
  public get appTypeId() {
    return this.getNumberAttribute('app_type_id');
  }
  public set appTypeId(value: number) {
    this._appTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeIdInput() {
    return this._appTypeId;
  }

  // cleaning_access_pos_id - computed: false, optional: false, required: true
  private _cleaningAccessPosId?: number; 
  public get cleaningAccessPosId() {
    return this.getNumberAttribute('cleaning_access_pos_id');
  }
  public set cleaningAccessPosId(value: number) {
    this._cleaningAccessPosId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cleaningAccessPosIdInput() {
    return this._cleaningAccessPosId;
  }

  // enable_l7 - computed: false, optional: false, required: true
  private _enableL7?: boolean | cdktf.IResolvable; 
  public get enableL7() {
    return this.getBooleanAttribute('enable_l7');
  }
  public set enableL7(value: boolean | cdktf.IResolvable) {
    this._enableL7 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableL7Input() {
    return this._enableL7;
  }

  // floating_ip_id - computed: false, optional: false, required: true
  private _floatingIpId?: string; 
  public get floatingIpId() {
    return this.getStringAttribute('floating_ip_id');
  }
  public set floatingIpId(value: string) {
    this._floatingIpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpIdInput() {
    return this._floatingIpId;
  }

  // http_request_pos_id - computed: false, optional: false, required: true
  private _httpRequestPosId?: number; 
  public get httpRequestPosId() {
    return this.getNumberAttribute('http_request_pos_id');
  }
  public set httpRequestPosId(value: number) {
    this._httpRequestPosId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestPosIdInput() {
    return this._httpRequestPosId;
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

  // traffic_pos_id - computed: false, optional: false, required: true
  private _trafficPosId?: number; 
  public get trafficPosId() {
    return this.getNumberAttribute('traffic_pos_id');
  }
  public set trafficPosId(value: number) {
    this._trafficPosId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPosIdInput() {
    return this._trafficPosId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AntiddosV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AntiddosV1Timeouts) {
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
      app_type_id: cdktf.numberToTerraform(this._appTypeId),
      cleaning_access_pos_id: cdktf.numberToTerraform(this._cleaningAccessPosId),
      enable_l7: cdktf.booleanToTerraform(this._enableL7),
      floating_ip_id: cdktf.stringToTerraform(this._floatingIpId),
      http_request_pos_id: cdktf.numberToTerraform(this._httpRequestPosId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      traffic_pos_id: cdktf.numberToTerraform(this._trafficPosId),
      timeouts: antiddosV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_type_id: {
        value: cdktf.numberToHclTerraform(this._appTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cleaning_access_pos_id: {
        value: cdktf.numberToHclTerraform(this._cleaningAccessPosId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_l7: {
        value: cdktf.booleanToHclTerraform(this._enableL7),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      floating_ip_id: {
        value: cdktf.stringToHclTerraform(this._floatingIpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_request_pos_id: {
        value: cdktf.numberToHclTerraform(this._httpRequestPosId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_pos_id: {
        value: cdktf.numberToHclTerraform(this._trafficPosId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: antiddosV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AntiddosV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
