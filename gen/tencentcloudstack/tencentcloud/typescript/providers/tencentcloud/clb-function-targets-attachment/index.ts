// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/clb_function_targets_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClbFunctionTargetsAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain name of the target forwarding rule. If the LocationId parameter has been entered, this parameter will not take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/clb_function_targets_attachment#domain ClbFunctionTargetsAttachment#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/clb_function_targets_attachment#id ClbFunctionTargetsAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Load Balancer Listener ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/clb_function_targets_attachment#listener_id ClbFunctionTargetsAttachment#listener_id}
  */
  readonly listenerId: string;
  /**
  * Load Balancer Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/clb_function_targets_attachment#load_balancer_id ClbFunctionTargetsAttachment#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * The ID of the target forwarding rule. When binding the cloud function to a layer-7 forwarding rule, this parameter or the Domain+Url parameter must be entered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/clb_function_targets_attachment#location_id ClbFunctionTargetsAttachment#location_id}
  */
  readonly locationId?: string;
  /**
  * The URL of the target forwarding rule. If the LocationId parameter has been entered, this parameter will not take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/clb_function_targets_attachment#url ClbFunctionTargetsAttachment#url}
  */
  readonly url?: string;
  /**
  * function_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/clb_function_targets_attachment#function_targets ClbFunctionTargetsAttachment#function_targets}
  */
  readonly functionTargets: ClbFunctionTargetsAttachmentFunctionTargets;
}
export interface ClbFunctionTargetsAttachmentFunctionTargetsFunction {
  /**
  * The name of function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/clb_function_targets_attachment#function_name ClbFunctionTargetsAttachment#function_name}
  */
  readonly functionName: string;
  /**
  * The namespace of function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/clb_function_targets_attachment#function_namespace ClbFunctionTargetsAttachment#function_namespace}
  */
  readonly functionNamespace: string;
  /**
  * The version name or alias of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/clb_function_targets_attachment#function_qualifier ClbFunctionTargetsAttachment#function_qualifier}
  */
  readonly functionQualifier: string;
  /**
  * Identifies the type of FunctionQualifier parameter, possible values: VERSION, ALIAS.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/clb_function_targets_attachment#function_qualifier_type ClbFunctionTargetsAttachment#function_qualifier_type}
  */
  readonly functionQualifierType?: string;
}

export function clbFunctionTargetsAttachmentFunctionTargetsFunctionToTerraform(struct?: ClbFunctionTargetsAttachmentFunctionTargetsFunctionOutputReference | ClbFunctionTargetsAttachmentFunctionTargetsFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    function_namespace: cdktf.stringToTerraform(struct!.functionNamespace),
    function_qualifier: cdktf.stringToTerraform(struct!.functionQualifier),
    function_qualifier_type: cdktf.stringToTerraform(struct!.functionQualifierType),
  }
}


export function clbFunctionTargetsAttachmentFunctionTargetsFunctionToHclTerraform(struct?: ClbFunctionTargetsAttachmentFunctionTargetsFunctionOutputReference | ClbFunctionTargetsAttachmentFunctionTargetsFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_namespace: {
      value: cdktf.stringToHclTerraform(struct!.functionNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_qualifier: {
      value: cdktf.stringToHclTerraform(struct!.functionQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_qualifier_type: {
      value: cdktf.stringToHclTerraform(struct!.functionQualifierType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClbFunctionTargetsAttachmentFunctionTargetsFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClbFunctionTargetsAttachmentFunctionTargetsFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._functionNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionNamespace = this._functionNamespace;
    }
    if (this._functionQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionQualifier = this._functionQualifier;
    }
    if (this._functionQualifierType !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionQualifierType = this._functionQualifierType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClbFunctionTargetsAttachmentFunctionTargetsFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._functionName = undefined;
      this._functionNamespace = undefined;
      this._functionQualifier = undefined;
      this._functionQualifierType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._functionName = value.functionName;
      this._functionNamespace = value.functionNamespace;
      this._functionQualifier = value.functionQualifier;
      this._functionQualifierType = value.functionQualifierType;
    }
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // function_namespace - computed: false, optional: false, required: true
  private _functionNamespace?: string; 
  public get functionNamespace() {
    return this.getStringAttribute('function_namespace');
  }
  public set functionNamespace(value: string) {
    this._functionNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNamespaceInput() {
    return this._functionNamespace;
  }

  // function_qualifier - computed: false, optional: false, required: true
  private _functionQualifier?: string; 
  public get functionQualifier() {
    return this.getStringAttribute('function_qualifier');
  }
  public set functionQualifier(value: string) {
    this._functionQualifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionQualifierInput() {
    return this._functionQualifier;
  }

  // function_qualifier_type - computed: false, optional: true, required: false
  private _functionQualifierType?: string; 
  public get functionQualifierType() {
    return this.getStringAttribute('function_qualifier_type');
  }
  public set functionQualifierType(value: string) {
    this._functionQualifierType = value;
  }
  public resetFunctionQualifierType() {
    this._functionQualifierType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionQualifierTypeInput() {
    return this._functionQualifierType;
  }
}
export interface ClbFunctionTargetsAttachmentFunctionTargets {
  /**
  * Weight. The default is `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/clb_function_targets_attachment#weight ClbFunctionTargetsAttachment#weight}
  */
  readonly weight?: number;
  /**
  * function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/clb_function_targets_attachment#function ClbFunctionTargetsAttachment#function}
  */
  readonly function: ClbFunctionTargetsAttachmentFunctionTargetsFunction;
}

export function clbFunctionTargetsAttachmentFunctionTargetsToTerraform(struct?: ClbFunctionTargetsAttachmentFunctionTargetsOutputReference | ClbFunctionTargetsAttachmentFunctionTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    function: clbFunctionTargetsAttachmentFunctionTargetsFunctionToTerraform(struct!.function),
  }
}


export function clbFunctionTargetsAttachmentFunctionTargetsToHclTerraform(struct?: ClbFunctionTargetsAttachmentFunctionTargetsOutputReference | ClbFunctionTargetsAttachmentFunctionTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    function: {
      value: clbFunctionTargetsAttachmentFunctionTargetsFunctionToHclTerraform(struct!.function),
      isBlock: true,
      type: "list",
      storageClassType: "ClbFunctionTargetsAttachmentFunctionTargetsFunctionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClbFunctionTargetsAttachmentFunctionTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClbFunctionTargetsAttachmentFunctionTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._function?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClbFunctionTargetsAttachmentFunctionTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._weight = undefined;
      this._function.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._weight = value.weight;
      this._function.internalValue = value.function;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // function - computed: false, optional: false, required: true
  private _function = new ClbFunctionTargetsAttachmentFunctionTargetsFunctionOutputReference(this, "function");
  public get function() {
    return this._function;
  }
  public putFunction(value: ClbFunctionTargetsAttachmentFunctionTargetsFunction) {
    this._function.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/clb_function_targets_attachment tencentcloud_clb_function_targets_attachment}
*/
export class ClbFunctionTargetsAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_function_targets_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClbFunctionTargetsAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClbFunctionTargetsAttachment to import
  * @param importFromId The id of the existing ClbFunctionTargetsAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/clb_function_targets_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClbFunctionTargetsAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_function_targets_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/clb_function_targets_attachment tencentcloud_clb_function_targets_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClbFunctionTargetsAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ClbFunctionTargetsAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_function_targets_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
    this._listenerId = config.listenerId;
    this._loadBalancerId = config.loadBalancerId;
    this._locationId = config.locationId;
    this._url = config.url;
    this._functionTargets.internalValue = config.functionTargets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // location_id - computed: true, optional: true, required: false
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // function_targets - computed: false, optional: false, required: true
  private _functionTargets = new ClbFunctionTargetsAttachmentFunctionTargetsOutputReference(this, "function_targets");
  public get functionTargets() {
    return this._functionTargets;
  }
  public putFunctionTargets(value: ClbFunctionTargetsAttachmentFunctionTargets) {
    this._functionTargets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionTargetsInput() {
    return this._functionTargets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      location_id: cdktf.stringToTerraform(this._locationId),
      url: cdktf.stringToTerraform(this._url),
      function_targets: clbFunctionTargetsAttachmentFunctionTargetsToTerraform(this._functionTargets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_id: {
        value: cdktf.stringToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_targets: {
        value: clbFunctionTargetsAttachmentFunctionTargetsToHclTerraform(this._functionTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClbFunctionTargetsAttachmentFunctionTargetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
