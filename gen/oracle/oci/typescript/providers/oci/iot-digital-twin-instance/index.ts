// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotDigitalTwinInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance#auth_id IotDigitalTwinInstance#auth_id}
  */
  readonly authId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance#defined_tags IotDigitalTwinInstance#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance#description IotDigitalTwinInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance#digital_twin_adapter_id IotDigitalTwinInstance#digital_twin_adapter_id}
  */
  readonly digitalTwinAdapterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance#digital_twin_model_id IotDigitalTwinInstance#digital_twin_model_id}
  */
  readonly digitalTwinModelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance#digital_twin_model_spec_uri IotDigitalTwinInstance#digital_twin_model_spec_uri}
  */
  readonly digitalTwinModelSpecUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance#display_name IotDigitalTwinInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance#external_key IotDigitalTwinInstance#external_key}
  */
  readonly externalKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance#freeform_tags IotDigitalTwinInstance#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance#id IotDigitalTwinInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance#iot_domain_id IotDigitalTwinInstance#iot_domain_id}
  */
  readonly iotDomainId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance#timeouts IotDigitalTwinInstance#timeouts}
  */
  readonly timeouts?: IotDigitalTwinInstanceTimeouts;
}
export interface IotDigitalTwinInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance#create IotDigitalTwinInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance#delete IotDigitalTwinInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance#update IotDigitalTwinInstance#update}
  */
  readonly update?: string;
}

export function iotDigitalTwinInstanceTimeoutsToTerraform(struct?: IotDigitalTwinInstanceTimeouts | cdktf.IResolvable): any {
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


export function iotDigitalTwinInstanceTimeoutsToHclTerraform(struct?: IotDigitalTwinInstanceTimeouts | cdktf.IResolvable): any {
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

export class IotDigitalTwinInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotDigitalTwinInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IotDigitalTwinInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance oci_iot_digital_twin_instance}
*/
export class IotDigitalTwinInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_iot_digital_twin_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IotDigitalTwinInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotDigitalTwinInstance to import
  * @param importFromId The id of the existing IotDigitalTwinInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotDigitalTwinInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_iot_digital_twin_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/iot_digital_twin_instance oci_iot_digital_twin_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotDigitalTwinInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: IotDigitalTwinInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_iot_digital_twin_instance',
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
    this._authId = config.authId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._digitalTwinAdapterId = config.digitalTwinAdapterId;
    this._digitalTwinModelId = config.digitalTwinModelId;
    this._digitalTwinModelSpecUri = config.digitalTwinModelSpecUri;
    this._displayName = config.displayName;
    this._externalKey = config.externalKey;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._iotDomainId = config.iotDomainId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_id - computed: true, optional: true, required: false
  private _authId?: string; 
  public get authId() {
    return this.getStringAttribute('auth_id');
  }
  public set authId(value: string) {
    this._authId = value;
  }
  public resetAuthId() {
    this._authId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authIdInput() {
    return this._authId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
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

  // digital_twin_adapter_id - computed: true, optional: true, required: false
  private _digitalTwinAdapterId?: string; 
  public get digitalTwinAdapterId() {
    return this.getStringAttribute('digital_twin_adapter_id');
  }
  public set digitalTwinAdapterId(value: string) {
    this._digitalTwinAdapterId = value;
  }
  public resetDigitalTwinAdapterId() {
    this._digitalTwinAdapterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalTwinAdapterIdInput() {
    return this._digitalTwinAdapterId;
  }

  // digital_twin_model_id - computed: true, optional: true, required: false
  private _digitalTwinModelId?: string; 
  public get digitalTwinModelId() {
    return this.getStringAttribute('digital_twin_model_id');
  }
  public set digitalTwinModelId(value: string) {
    this._digitalTwinModelId = value;
  }
  public resetDigitalTwinModelId() {
    this._digitalTwinModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalTwinModelIdInput() {
    return this._digitalTwinModelId;
  }

  // digital_twin_model_spec_uri - computed: true, optional: true, required: false
  private _digitalTwinModelSpecUri?: string; 
  public get digitalTwinModelSpecUri() {
    return this.getStringAttribute('digital_twin_model_spec_uri');
  }
  public set digitalTwinModelSpecUri(value: string) {
    this._digitalTwinModelSpecUri = value;
  }
  public resetDigitalTwinModelSpecUri() {
    this._digitalTwinModelSpecUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalTwinModelSpecUriInput() {
    return this._digitalTwinModelSpecUri;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // external_key - computed: true, optional: true, required: false
  private _externalKey?: string; 
  public get externalKey() {
    return this.getStringAttribute('external_key');
  }
  public set externalKey(value: string) {
    this._externalKey = value;
  }
  public resetExternalKey() {
    this._externalKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalKeyInput() {
    return this._externalKey;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // iot_domain_id - computed: false, optional: false, required: true
  private _iotDomainId?: string; 
  public get iotDomainId() {
    return this.getStringAttribute('iot_domain_id');
  }
  public set iotDomainId(value: string) {
    this._iotDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iotDomainIdInput() {
    return this._iotDomainId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IotDigitalTwinInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IotDigitalTwinInstanceTimeouts) {
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
      auth_id: cdktf.stringToTerraform(this._authId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      digital_twin_adapter_id: cdktf.stringToTerraform(this._digitalTwinAdapterId),
      digital_twin_model_id: cdktf.stringToTerraform(this._digitalTwinModelId),
      digital_twin_model_spec_uri: cdktf.stringToTerraform(this._digitalTwinModelSpecUri),
      display_name: cdktf.stringToTerraform(this._displayName),
      external_key: cdktf.stringToTerraform(this._externalKey),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      iot_domain_id: cdktf.stringToTerraform(this._iotDomainId),
      timeouts: iotDigitalTwinInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_id: {
        value: cdktf.stringToHclTerraform(this._authId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digital_twin_adapter_id: {
        value: cdktf.stringToHclTerraform(this._digitalTwinAdapterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digital_twin_model_id: {
        value: cdktf.stringToHclTerraform(this._digitalTwinModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digital_twin_model_spec_uri: {
        value: cdktf.stringToHclTerraform(this._digitalTwinModelSpecUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_key: {
        value: cdktf.stringToHclTerraform(this._externalKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iot_domain_id: {
        value: cdktf.stringToHclTerraform(this._iotDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: iotDigitalTwinInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotDigitalTwinInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
