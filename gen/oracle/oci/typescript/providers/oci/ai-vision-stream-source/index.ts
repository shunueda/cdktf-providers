// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiVisionStreamSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source#compartment_id AiVisionStreamSource#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source#defined_tags AiVisionStreamSource#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source#display_name AiVisionStreamSource#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source#freeform_tags AiVisionStreamSource#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source#id AiVisionStreamSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stream_source_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source#stream_source_details AiVisionStreamSource#stream_source_details}
  */
  readonly streamSourceDetails: AiVisionStreamSourceStreamSourceDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source#timeouts AiVisionStreamSource#timeouts}
  */
  readonly timeouts?: AiVisionStreamSourceTimeouts;
}
export interface AiVisionStreamSourceStreamSourceDetailsStreamNetworkAccessDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source#private_endpoint_id AiVisionStreamSource#private_endpoint_id}
  */
  readonly privateEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source#stream_access_type AiVisionStreamSource#stream_access_type}
  */
  readonly streamAccessType: string;
}

export function aiVisionStreamSourceStreamSourceDetailsStreamNetworkAccessDetailsToTerraform(struct?: AiVisionStreamSourceStreamSourceDetailsStreamNetworkAccessDetailsOutputReference | AiVisionStreamSourceStreamSourceDetailsStreamNetworkAccessDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_endpoint_id: cdktf.stringToTerraform(struct!.privateEndpointId),
    stream_access_type: cdktf.stringToTerraform(struct!.streamAccessType),
  }
}


export function aiVisionStreamSourceStreamSourceDetailsStreamNetworkAccessDetailsToHclTerraform(struct?: AiVisionStreamSourceStreamSourceDetailsStreamNetworkAccessDetailsOutputReference | AiVisionStreamSourceStreamSourceDetailsStreamNetworkAccessDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.privateEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_access_type: {
      value: cdktf.stringToHclTerraform(struct!.streamAccessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiVisionStreamSourceStreamSourceDetailsStreamNetworkAccessDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiVisionStreamSourceStreamSourceDetailsStreamNetworkAccessDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointId = this._privateEndpointId;
    }
    if (this._streamAccessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamAccessType = this._streamAccessType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiVisionStreamSourceStreamSourceDetailsStreamNetworkAccessDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateEndpointId = undefined;
      this._streamAccessType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateEndpointId = value.privateEndpointId;
      this._streamAccessType = value.streamAccessType;
    }
  }

  // private_endpoint_id - computed: false, optional: false, required: true
  private _privateEndpointId?: string; 
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }
  public set privateEndpointId(value: string) {
    this._privateEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIdInput() {
    return this._privateEndpointId;
  }

  // stream_access_type - computed: false, optional: false, required: true
  private _streamAccessType?: string; 
  public get streamAccessType() {
    return this.getStringAttribute('stream_access_type');
  }
  public set streamAccessType(value: string) {
    this._streamAccessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamAccessTypeInput() {
    return this._streamAccessType;
  }
}
export interface AiVisionStreamSourceStreamSourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source#camera_url AiVisionStreamSource#camera_url}
  */
  readonly cameraUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source#secret_id AiVisionStreamSource#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source#source_type AiVisionStreamSource#source_type}
  */
  readonly sourceType: string;
  /**
  * stream_network_access_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source#stream_network_access_details AiVisionStreamSource#stream_network_access_details}
  */
  readonly streamNetworkAccessDetails: AiVisionStreamSourceStreamSourceDetailsStreamNetworkAccessDetails;
}

export function aiVisionStreamSourceStreamSourceDetailsToTerraform(struct?: AiVisionStreamSourceStreamSourceDetailsOutputReference | AiVisionStreamSourceStreamSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    camera_url: cdktf.stringToTerraform(struct!.cameraUrl),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    stream_network_access_details: aiVisionStreamSourceStreamSourceDetailsStreamNetworkAccessDetailsToTerraform(struct!.streamNetworkAccessDetails),
  }
}


export function aiVisionStreamSourceStreamSourceDetailsToHclTerraform(struct?: AiVisionStreamSourceStreamSourceDetailsOutputReference | AiVisionStreamSourceStreamSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    camera_url: {
      value: cdktf.stringToHclTerraform(struct!.cameraUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_network_access_details: {
      value: aiVisionStreamSourceStreamSourceDetailsStreamNetworkAccessDetailsToHclTerraform(struct!.streamNetworkAccessDetails),
      isBlock: true,
      type: "list",
      storageClassType: "AiVisionStreamSourceStreamSourceDetailsStreamNetworkAccessDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiVisionStreamSourceStreamSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiVisionStreamSourceStreamSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cameraUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cameraUrl = this._cameraUrl;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._streamNetworkAccessDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamNetworkAccessDetails = this._streamNetworkAccessDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiVisionStreamSourceStreamSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cameraUrl = undefined;
      this._secretId = undefined;
      this._sourceType = undefined;
      this._streamNetworkAccessDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cameraUrl = value.cameraUrl;
      this._secretId = value.secretId;
      this._sourceType = value.sourceType;
      this._streamNetworkAccessDetails.internalValue = value.streamNetworkAccessDetails;
    }
  }

  // camera_url - computed: false, optional: false, required: true
  private _cameraUrl?: string; 
  public get cameraUrl() {
    return this.getStringAttribute('camera_url');
  }
  public set cameraUrl(value: string) {
    this._cameraUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cameraUrlInput() {
    return this._cameraUrl;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // stream_network_access_details - computed: false, optional: false, required: true
  private _streamNetworkAccessDetails = new AiVisionStreamSourceStreamSourceDetailsStreamNetworkAccessDetailsOutputReference(this, "stream_network_access_details");
  public get streamNetworkAccessDetails() {
    return this._streamNetworkAccessDetails;
  }
  public putStreamNetworkAccessDetails(value: AiVisionStreamSourceStreamSourceDetailsStreamNetworkAccessDetails) {
    this._streamNetworkAccessDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNetworkAccessDetailsInput() {
    return this._streamNetworkAccessDetails.internalValue;
  }
}
export interface AiVisionStreamSourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source#create AiVisionStreamSource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source#delete AiVisionStreamSource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source#update AiVisionStreamSource#update}
  */
  readonly update?: string;
}

export function aiVisionStreamSourceTimeoutsToTerraform(struct?: AiVisionStreamSourceTimeouts | cdktf.IResolvable): any {
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


export function aiVisionStreamSourceTimeoutsToHclTerraform(struct?: AiVisionStreamSourceTimeouts | cdktf.IResolvable): any {
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

export class AiVisionStreamSourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiVisionStreamSourceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AiVisionStreamSourceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source oci_ai_vision_stream_source}
*/
export class AiVisionStreamSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_vision_stream_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AiVisionStreamSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiVisionStreamSource to import
  * @param importFromId The id of the existing AiVisionStreamSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiVisionStreamSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ai_vision_stream_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/ai_vision_stream_source oci_ai_vision_stream_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiVisionStreamSourceConfig
  */
  public constructor(scope: Construct, id: string, config: AiVisionStreamSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ai_vision_stream_source',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._streamSourceDetails.internalValue = config.streamSourceDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // stream_source_details - computed: false, optional: false, required: true
  private _streamSourceDetails = new AiVisionStreamSourceStreamSourceDetailsOutputReference(this, "stream_source_details");
  public get streamSourceDetails() {
    return this._streamSourceDetails;
  }
  public putStreamSourceDetails(value: AiVisionStreamSourceStreamSourceDetails) {
    this._streamSourceDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamSourceDetailsInput() {
    return this._streamSourceDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AiVisionStreamSourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AiVisionStreamSourceTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      stream_source_details: aiVisionStreamSourceStreamSourceDetailsToTerraform(this._streamSourceDetails.internalValue),
      timeouts: aiVisionStreamSourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      stream_source_details: {
        value: aiVisionStreamSourceStreamSourceDetailsToHclTerraform(this._streamSourceDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiVisionStreamSourceStreamSourceDetailsList",
      },
      timeouts: {
        value: aiVisionStreamSourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiVisionStreamSourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
