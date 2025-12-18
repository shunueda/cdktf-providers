// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance_invoke_raw_command
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotDigitalTwinInstanceInvokeRawCommandConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance_invoke_raw_command#digital_twin_instance_id IotDigitalTwinInstanceInvokeRawCommand#digital_twin_instance_id}
  */
  readonly digitalTwinInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance_invoke_raw_command#id IotDigitalTwinInstanceInvokeRawCommand#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance_invoke_raw_command#request_data IotDigitalTwinInstanceInvokeRawCommand#request_data}
  */
  readonly requestData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance_invoke_raw_command#request_data_content_type IotDigitalTwinInstanceInvokeRawCommand#request_data_content_type}
  */
  readonly requestDataContentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance_invoke_raw_command#request_data_format IotDigitalTwinInstanceInvokeRawCommand#request_data_format}
  */
  readonly requestDataFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance_invoke_raw_command#request_duration IotDigitalTwinInstanceInvokeRawCommand#request_duration}
  */
  readonly requestDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance_invoke_raw_command#request_endpoint IotDigitalTwinInstanceInvokeRawCommand#request_endpoint}
  */
  readonly requestEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance_invoke_raw_command#response_duration IotDigitalTwinInstanceInvokeRawCommand#response_duration}
  */
  readonly responseDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance_invoke_raw_command#response_endpoint IotDigitalTwinInstanceInvokeRawCommand#response_endpoint}
  */
  readonly responseEndpoint?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance_invoke_raw_command#timeouts IotDigitalTwinInstanceInvokeRawCommand#timeouts}
  */
  readonly timeouts?: IotDigitalTwinInstanceInvokeRawCommandTimeouts;
}
export interface IotDigitalTwinInstanceInvokeRawCommandTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance_invoke_raw_command#create IotDigitalTwinInstanceInvokeRawCommand#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance_invoke_raw_command#delete IotDigitalTwinInstanceInvokeRawCommand#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance_invoke_raw_command#update IotDigitalTwinInstanceInvokeRawCommand#update}
  */
  readonly update?: string;
}

export function iotDigitalTwinInstanceInvokeRawCommandTimeoutsToTerraform(struct?: IotDigitalTwinInstanceInvokeRawCommandTimeouts | cdktf.IResolvable): any {
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


export function iotDigitalTwinInstanceInvokeRawCommandTimeoutsToHclTerraform(struct?: IotDigitalTwinInstanceInvokeRawCommandTimeouts | cdktf.IResolvable): any {
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

export class IotDigitalTwinInstanceInvokeRawCommandTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotDigitalTwinInstanceInvokeRawCommandTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IotDigitalTwinInstanceInvokeRawCommandTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance_invoke_raw_command oci_iot_digital_twin_instance_invoke_raw_command}
*/
export class IotDigitalTwinInstanceInvokeRawCommand extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_iot_digital_twin_instance_invoke_raw_command";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IotDigitalTwinInstanceInvokeRawCommand resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotDigitalTwinInstanceInvokeRawCommand to import
  * @param importFromId The id of the existing IotDigitalTwinInstanceInvokeRawCommand that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance_invoke_raw_command#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotDigitalTwinInstanceInvokeRawCommand to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_iot_digital_twin_instance_invoke_raw_command", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance_invoke_raw_command oci_iot_digital_twin_instance_invoke_raw_command} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotDigitalTwinInstanceInvokeRawCommandConfig
  */
  public constructor(scope: Construct, id: string, config: IotDigitalTwinInstanceInvokeRawCommandConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_iot_digital_twin_instance_invoke_raw_command',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._digitalTwinInstanceId = config.digitalTwinInstanceId;
    this._id = config.id;
    this._requestData = config.requestData;
    this._requestDataContentType = config.requestDataContentType;
    this._requestDataFormat = config.requestDataFormat;
    this._requestDuration = config.requestDuration;
    this._requestEndpoint = config.requestEndpoint;
    this._responseDuration = config.responseDuration;
    this._responseEndpoint = config.responseEndpoint;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // digital_twin_instance_id - computed: false, optional: false, required: true
  private _digitalTwinInstanceId?: string; 
  public get digitalTwinInstanceId() {
    return this.getStringAttribute('digital_twin_instance_id');
  }
  public set digitalTwinInstanceId(value: string) {
    this._digitalTwinInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalTwinInstanceIdInput() {
    return this._digitalTwinInstanceId;
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

  // request_data - computed: true, optional: true, required: false
  private _requestData?: string; 
  public get requestData() {
    return this.getStringAttribute('request_data');
  }
  public set requestData(value: string) {
    this._requestData = value;
  }
  public resetRequestData() {
    this._requestData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDataInput() {
    return this._requestData;
  }

  // request_data_content_type - computed: true, optional: true, required: false
  private _requestDataContentType?: string; 
  public get requestDataContentType() {
    return this.getStringAttribute('request_data_content_type');
  }
  public set requestDataContentType(value: string) {
    this._requestDataContentType = value;
  }
  public resetRequestDataContentType() {
    this._requestDataContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDataContentTypeInput() {
    return this._requestDataContentType;
  }

  // request_data_format - computed: false, optional: false, required: true
  private _requestDataFormat?: string; 
  public get requestDataFormat() {
    return this.getStringAttribute('request_data_format');
  }
  public set requestDataFormat(value: string) {
    this._requestDataFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDataFormatInput() {
    return this._requestDataFormat;
  }

  // request_duration - computed: true, optional: true, required: false
  private _requestDuration?: string; 
  public get requestDuration() {
    return this.getStringAttribute('request_duration');
  }
  public set requestDuration(value: string) {
    this._requestDuration = value;
  }
  public resetRequestDuration() {
    this._requestDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDurationInput() {
    return this._requestDuration;
  }

  // request_endpoint - computed: false, optional: false, required: true
  private _requestEndpoint?: string; 
  public get requestEndpoint() {
    return this.getStringAttribute('request_endpoint');
  }
  public set requestEndpoint(value: string) {
    this._requestEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestEndpointInput() {
    return this._requestEndpoint;
  }

  // response_duration - computed: true, optional: true, required: false
  private _responseDuration?: string; 
  public get responseDuration() {
    return this.getStringAttribute('response_duration');
  }
  public set responseDuration(value: string) {
    this._responseDuration = value;
  }
  public resetResponseDuration() {
    this._responseDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseDurationInput() {
    return this._responseDuration;
  }

  // response_endpoint - computed: true, optional: true, required: false
  private _responseEndpoint?: string; 
  public get responseEndpoint() {
    return this.getStringAttribute('response_endpoint');
  }
  public set responseEndpoint(value: string) {
    this._responseEndpoint = value;
  }
  public resetResponseEndpoint() {
    this._responseEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseEndpointInput() {
    return this._responseEndpoint;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IotDigitalTwinInstanceInvokeRawCommandTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IotDigitalTwinInstanceInvokeRawCommandTimeouts) {
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
      digital_twin_instance_id: cdktf.stringToTerraform(this._digitalTwinInstanceId),
      id: cdktf.stringToTerraform(this._id),
      request_data: cdktf.stringToTerraform(this._requestData),
      request_data_content_type: cdktf.stringToTerraform(this._requestDataContentType),
      request_data_format: cdktf.stringToTerraform(this._requestDataFormat),
      request_duration: cdktf.stringToTerraform(this._requestDuration),
      request_endpoint: cdktf.stringToTerraform(this._requestEndpoint),
      response_duration: cdktf.stringToTerraform(this._responseDuration),
      response_endpoint: cdktf.stringToTerraform(this._responseEndpoint),
      timeouts: iotDigitalTwinInstanceInvokeRawCommandTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      digital_twin_instance_id: {
        value: cdktf.stringToHclTerraform(this._digitalTwinInstanceId),
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
      request_data: {
        value: cdktf.stringToHclTerraform(this._requestData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_data_content_type: {
        value: cdktf.stringToHclTerraform(this._requestDataContentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_data_format: {
        value: cdktf.stringToHclTerraform(this._requestDataFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_duration: {
        value: cdktf.stringToHclTerraform(this._requestDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_endpoint: {
        value: cdktf.stringToHclTerraform(this._requestEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_duration: {
        value: cdktf.stringToHclTerraform(this._responseDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_endpoint: {
        value: cdktf.stringToHclTerraform(this._responseEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: iotDigitalTwinInstanceInvokeRawCommandTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotDigitalTwinInstanceInvokeRawCommandTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
