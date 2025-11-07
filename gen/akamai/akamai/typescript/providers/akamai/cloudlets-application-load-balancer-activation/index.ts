// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer_activation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudletsApplicationLoadBalancerActivationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer_activation#id CloudletsApplicationLoadBalancerActivation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The network you want to activate the application load balancer version on (options are Staging and Production)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer_activation#network CloudletsApplicationLoadBalancerActivation#network}
  */
  readonly network: string;
  /**
  * The conditional origin’s unique identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer_activation#origin_id CloudletsApplicationLoadBalancerActivation#origin_id}
  */
  readonly originId: string;
  /**
  * Cloudlets application load balancer version you want to activate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer_activation#version CloudletsApplicationLoadBalancerActivation#version}
  */
  readonly version: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer_activation#timeouts CloudletsApplicationLoadBalancerActivation#timeouts}
  */
  readonly timeouts?: CloudletsApplicationLoadBalancerActivationTimeouts;
}
export interface CloudletsApplicationLoadBalancerActivationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer_activation#default CloudletsApplicationLoadBalancerActivation#default}
  */
  readonly default?: string;
}

export function cloudletsApplicationLoadBalancerActivationTimeoutsToTerraform(struct?: CloudletsApplicationLoadBalancerActivationTimeoutsOutputReference | CloudletsApplicationLoadBalancerActivationTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function cloudletsApplicationLoadBalancerActivationTimeoutsToHclTerraform(struct?: CloudletsApplicationLoadBalancerActivationTimeoutsOutputReference | CloudletsApplicationLoadBalancerActivationTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudletsApplicationLoadBalancerActivationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudletsApplicationLoadBalancerActivationTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudletsApplicationLoadBalancerActivationTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer_activation akamai_cloudlets_application_load_balancer_activation}
*/
export class CloudletsApplicationLoadBalancerActivation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cloudlets_application_load_balancer_activation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudletsApplicationLoadBalancerActivation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudletsApplicationLoadBalancerActivation to import
  * @param importFromId The id of the existing CloudletsApplicationLoadBalancerActivation that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer_activation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudletsApplicationLoadBalancerActivation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cloudlets_application_load_balancer_activation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cloudlets_application_load_balancer_activation akamai_cloudlets_application_load_balancer_activation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudletsApplicationLoadBalancerActivationConfig
  */
  public constructor(scope: Construct, id: string, config: CloudletsApplicationLoadBalancerActivationConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_cloudlets_application_load_balancer_activation',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._network = config.network;
    this._originId = config.originId;
    this._version = config.version;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // origin_id - computed: false, optional: false, required: true
  private _originId?: string; 
  public get originId() {
    return this.getStringAttribute('origin_id');
  }
  public set originId(value: string) {
    this._originId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originIdInput() {
    return this._originId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudletsApplicationLoadBalancerActivationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudletsApplicationLoadBalancerActivationTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      network: cdktf.stringToTerraform(this._network),
      origin_id: cdktf.stringToTerraform(this._originId),
      version: cdktf.numberToTerraform(this._version),
      timeouts: cloudletsApplicationLoadBalancerActivationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_id: {
        value: cdktf.stringToHclTerraform(this._originId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: cloudletsApplicationLoadBalancerActivationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudletsApplicationLoadBalancerActivationTimeoutsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
